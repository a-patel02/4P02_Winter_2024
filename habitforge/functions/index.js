const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.createUserInFirestore = functions.auth.user().onCreate((user) => {
  // Get the user's UID and other information
  const uid = user.uid;
  const email = user.email;
  const displayName = user.displayName;

  // Create a reference to the Firestore collection
  const usersCollection = admin.firestore().collection("users");

  // Add the user to the "users" collection with UID as the document ID
  return usersCollection.doc(uid).set({
    uid: uid,
    email: email,
    displayName: displayName,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    level: 1,
    habitCoins: 1,
    rank: 0,
  });
});

exports.resetHabits = functions.pubsub
  .schedule("every day 00:00")
  .timeZone("America/Toronto")
  .onRun(async () => {
    try {
      const usersSnapshot = await db.collection("users").get();

      usersSnapshot.forEach(async (userDoc) => {
        const batch = db.batch(); // Create a new batch for each user

        const habitsSnapshot = await db
          .collection("users")
          .doc(userDoc.id)
          .collection("habits")
          .get();

        habitsSnapshot.forEach((habitDoc) => {
          batch.update(habitDoc.ref, {
            tracked: false,
            completed: false,
            skipped: false,
            failed: false,
          });
        });

        await batch.commit(); // Commit batch for each user
      });

      console.log("Habit booleans reset successfully.");

      return null;
    } catch (error) {
      console.error("Error resetting habit booleans:", error);
      return null;
    }
  });
