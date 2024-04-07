"use client";
import { collection, doc, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase/firebase";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import Typography from "@/components/ui/typography-variants";

import { Coins } from "lucide-react";
import { useEffect } from "react";

import { Loader2 } from "lucide-react";

import FirstHabit from "@/components/Dashboard/FirstHabit";
import PersonalHabits from "@/components/Dashboard/PersonalHabits";
import GroupHabits from "@/components/Dashboard/GroupHabits";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [value, loading1, error1] = useCollectionData(
    collection(db, `users/${user?.uid}/habits`)
  );
  const [firebaseUser, loading2, error2] = useDocumentData(
    doc(db, `users/${user?.uid}`)
  );

  function getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 19) {
      return "Good Afternoon";
    } else {
      return "Good Night";
    }
  }

  const individualHabits = value?.filter((habit) => !habit.groupID);
  const groupHabits = value?.filter((habit) => habit.groupID);

  // Sorting the habits based on timestamp from oldest to newest
  const sortedIndvidualHabits = individualHabits?.slice().sort((a, b) => {
    return a.timestamp - b.timestamp;
  });

  const sortedGroupHabits = groupHabits?.slice().sort((a, b) => {
    return a.timestamp - b.timestamp;
  });

  useEffect(() => {
    // Check if user is not logged in and redirect if needed
    if (!loading && !user) {
      window.location.href = "/login"; // Redirect to login page
    }
  }, [loading, user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      {loading1 ? (
        // <Skeleton className="w-full h-4"></Skeleton>
        <Loader2 className="animate-spin" />
      ) : (
        <div className="flex flex-col gap-12 w-full">
          {value?.length === 0 ? (
            <FirstHabit />
          ) : (
            <>
              <div className="flex gap-4 flex-col items-start md:items-center text-left md:flex-row w-full">
                {user?.photoURL && (
                  <img
                    src={user.photoURL}
                    height={70}
                    width={70}
                    alt=""
                    className="rounded-full"
                  />
                )}
                <div className="flex flex-col gap-2 w-full">
                  <Typography variant={"h2"}>
                    {getGreeting()}, {user?.displayName}
                  </Typography>
                  <Typography variant={"p"} affects={"muted"} className="!mt-0">
                    You are currently at Level {firebaseUser?.level}, level up
                    by completing habits and earning HabitCoins.
                  </Typography>
                </div>
                <div className="flex flex-row md:flex-col items-center gap-2">
                  <div className="flex gap-2 items-center">
                    <Typography variant={"h2"}>
                      {firebaseUser?.habitCoins}
                    </Typography>
                    <Coins className="text-amber-500 " />
                  </div>
                  <Typography variant={"p"} affects={"muted"} className="!mt-0">
                    HabitCoins
                  </Typography>
                </div>
              </div>
              <PersonalHabits
                sortedHabits={sortedIndvidualHabits}
                user={user}
              />
              <GroupHabits sortedHabits={sortedGroupHabits} user={user} />
            </>
          )}
          <div>{value ? <Analytics /> : <></>}</div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
