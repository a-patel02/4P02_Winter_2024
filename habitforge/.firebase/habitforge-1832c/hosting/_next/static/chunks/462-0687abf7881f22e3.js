(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462],{3021:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]])},5883:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]])},8004:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},3088:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},6435:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return d}});var r=n(2265);let o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,u=(0,r.createContext)(void 0),c={setTheme:e=>{},themes:[]},i=()=>{var e;return null!==(e=(0,r.useContext)(u))&&void 0!==e?e:c},d=e=>(0,r.useContext)(u)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),s=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:i=s,defaultTheme:d=n?"system":"light",attribute:f="data-theme",value:g,children:w,nonce:M})=>{let[_,E]=(0,r.useState)(()=>m(c,d)),[y,C]=(0,r.useState)(()=>m(c)),b=g?Object.values(g):i,k=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());let a=g?g[r]:r,u=t?h():null,c=document.documentElement;if("class"===f?(c.classList.remove(...b),a&&c.classList.add(a)):a?c.setAttribute(f,a):c.removeAttribute(f),l){let e=o.includes(d)?d:null,t=o.includes(r)?r:e;c.style.colorScheme=t}null==u||u()},[]),D=(0,r.useCallback)(e=>{E(e);try{localStorage.setItem(c,e)}catch(e){}},[e]),x=(0,r.useCallback)(t=>{C(v(t)),"system"===_&&n&&!e&&k("system")},[_,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),(0,r.useEffect)(()=>{let e=e=>{e.key===c&&D(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[D]),(0,r.useEffect)(()=>{k(null!=e?e:_)},[e,_]);let R=(0,r.useMemo)(()=>({theme:_,setTheme:D,forcedTheme:e,resolvedTheme:"system"===_?y:_,themes:n?[...i,"system"]:i,systemTheme:n?y:void 0}),[_,D,e,y,n,i]);return r.createElement(u.Provider,{value:R},r.createElement(p,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:c,themes:i,defaultTheme:d,attribute:f,value:g,children:w,attrs:b,nonce:M}),w)},p=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:u,defaultTheme:c,value:i,attrs:d,nonce:s})=>{let f="system"===c,p="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=u?o.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,r=!0)=>{let a=i?i[e]:e,l=t?e+"|| ''":`'${a}'`,c="";return u&&r&&!t&&o.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===n?c+=t||a?`c.add(${l})`:"null":a&&(c+=`d[s](n,${l})`),c},v=e?`!function(){${p}${h(e)}}()`:l?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}${f?"":"else{"+h(c,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}else{${h(c,!1,!1)};}${m}}catch(t){}}();`;return r.createElement("script",{nonce:s,dangerouslySetInnerHTML:{__html:v}})},()=>!0),m=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6087:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},4033:function(e,t,n){e.exports=n(5313)},3291:function(e,t,n){"use strict";n.d(t,{oC:function(){return eJ},VY:function(){return eH},ZA:function(){return ej},ck:function(){return eq},wU:function(){return e1},__:function(){return eY},Uv:function(){return eX},Ee:function(){return eQ},Rk:function(){return e0},fC:function(){return eB},Z0:function(){return e2},Tr:function(){return e9},tu:function(){return e6},fF:function(){return e3},xz:function(){return eN}});var r=n(3428),o=n(2265),a=n(5744),l=n(2210),u=n(6989),c=n(3763),i=n(9381),d=n(7733),s=n(5400),f=n(9249),p=n(1244),m=n(2759),h=n(966),v=n(4402),g=n(2730),w=n(5606),M=n(4356),_=n(7256),E=n(6459),y=n(5859),C=n(7552);let b=["Enter"," "],k=["ArrowUp","PageDown","End"],D=["ArrowDown","PageUp","Home",...k],x={ltr:[...b,"ArrowRight"],rtl:[...b,"ArrowLeft"]},R={ltr:["ArrowLeft"],rtl:["ArrowRight"]},O="Menu",[T,Z,P]=(0,d.B)(O),[S,I]=(0,u.b)(O,[P,v.D7,M.Pc]),F=(0,v.D7)(),L=(0,M.Pc)(),[$,K]=S(O),[A,V]=S(O),W=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e,l=F(n);return(0,o.createElement)(v.ee,(0,r.Z)({},l,a,{ref:t}))}),U="MenuPortal",[z,G]=S(U,{forceMount:void 0}),B="MenuContent",[N,X]=S(B),H=(0,o.forwardRef)((e,t)=>{let n=G(B,e.__scopeMenu),{forceMount:a=n.forceMount,...l}=e,u=K(B,e.__scopeMenu),c=V(B,e.__scopeMenu);return(0,o.createElement)(T.Provider,{scope:e.__scopeMenu},(0,o.createElement)(w.z,{present:a||u.open},(0,o.createElement)(T.Slot,{scope:e.__scopeMenu},c.modal?(0,o.createElement)(j,(0,r.Z)({},l,{ref:t})):(0,o.createElement)(Y,(0,r.Z)({},l,{ref:t})))))}),j=(0,o.forwardRef)((e,t)=>{let n=K(B,e.__scopeMenu),u=(0,o.useRef)(null),c=(0,l.e)(t,u);return(0,o.useEffect)(()=>{let e=u.current;if(e)return(0,y.Ry)(e)},[]),(0,o.createElement)(q,(0,r.Z)({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),Y=(0,o.forwardRef)((e,t)=>{let n=K(B,e.__scopeMenu);return(0,o.createElement)(q,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),q=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,loop:u=!1,trapFocus:c,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:h,onEscapeKeyDown:g,onPointerDownOutside:w,onFocusOutside:E,onInteractOutside:y,onDismiss:b,disableOutsideScroll:x,...R}=e,O=K(B,n),T=V(B,n),P=F(n),S=L(n),I=Z(n),[$,A]=(0,o.useState)(null),W=(0,o.useRef)(null),U=(0,l.e)(t,W,O.onContentChange),z=(0,o.useRef)(0),G=(0,o.useRef)(""),X=(0,o.useRef)(0),H=(0,o.useRef)(null),j=(0,o.useRef)("right"),Y=(0,o.useRef)(0),q=x?C.Z:o.Fragment,J=x?{as:_.g7,allowPinchZoom:!0}:void 0,Q=e=>{var t,n;let r=G.current+e,o=I().filter(e=>!e.disabled),a=document.activeElement,l=null===(t=o.find(e=>e.ref.current===a))||void 0===t?void 0:t.textValue,u=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,a=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let l=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}(o.map(e=>e.textValue),r,l),c=null===(n=o.find(e=>e.textValue===u))||void 0===n?void 0:n.ref.current;!function e(t){G.current=t,window.clearTimeout(z.current),""!==t&&(z.current=window.setTimeout(()=>e(""),1e3))}(r),c&&setTimeout(()=>c.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(z.current),[]),(0,p.EW)();let ee=(0,o.useCallback)(e=>{var t,n,r;return j.current===(null===(t=H.current)||void 0===t?void 0:t.side)&&!!(r=null===(n=H.current)||void 0===n?void 0:n.area)&&function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let l=t[e].x,u=t[e].y,c=t[a].x,i=t[a].y;u>r!=i>r&&n<(c-l)*(r-u)/(i-u)+l&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,o.createElement)(N,{scope:n,searchRef:G,onItemEnter:(0,o.useCallback)(e=>{ee(e)&&e.preventDefault()},[ee]),onItemLeave:(0,o.useCallback)(e=>{var t;ee(e)||(null===(t=W.current)||void 0===t||t.focus(),A(null))},[ee]),onTriggerLeave:(0,o.useCallback)(e=>{ee(e)&&e.preventDefault()},[ee]),pointerGraceTimerRef:X,onPointerGraceIntentChange:(0,o.useCallback)(e=>{H.current=e},[])},(0,o.createElement)(q,J,(0,o.createElement)(m.M,{asChild:!0,trapped:c,onMountAutoFocus:(0,a.M)(i,e=>{var t;e.preventDefault(),null===(t=W.current)||void 0===t||t.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:g,onPointerDownOutside:w,onFocusOutside:E,onInteractOutside:y,onDismiss:b},(0,o.createElement)(M.fC,(0,r.Z)({asChild:!0},S,{dir:T.dir,orientation:"vertical",loop:u,currentTabStopId:$,onCurrentTabStopIdChange:A,onEntryFocus:(0,a.M)(h,e=>{T.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(v.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":e_(O.open),"data-radix-menu-content":"",dir:T.dir},P,R,{ref:U,style:{outline:"none",...R.style},onKeyDown:(0,a.M)(R.onKeyDown,e=>{let t=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;t&&("Tab"===e.key&&e.preventDefault(),!n&&r&&Q(e.key));let o=W.current;if(e.target!==o||!D.includes(e.key))return;e.preventDefault();let a=I().filter(e=>!e.disabled).map(e=>e.ref.current);k.includes(e.key)&&a.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(a)}),onBlur:(0,a.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(z.current),G.current="")}),onPointerMove:(0,a.M)(e.onPointerMove,eC(e=>{let t=e.target,n=Y.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>Y.current?"right":"left";j.current=t,Y.current=e.clientX}}))})))))))}),J=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"group"},a,{ref:t}))}),Q=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({},a,{ref:t}))}),ee="MenuItem",et="menu.itemSelect",en=(0,o.forwardRef)((e,t)=>{let{disabled:n=!1,onSelect:u,...c}=e,d=(0,o.useRef)(null),s=V(ee,e.__scopeMenu),f=X(ee,e.__scopeMenu),p=(0,l.e)(t,d),m=(0,o.useRef)(!1);return(0,o.createElement)(er,(0,r.Z)({},c,{ref:p,disabled:n,onClick:(0,a.M)(e.onClick,()=>{let e=d.current;if(!n&&e){let t=new CustomEvent(et,{bubbles:!0,cancelable:!0});e.addEventListener(et,e=>null==u?void 0:u(e),{once:!0}),(0,i.jH)(e,t),t.defaultPrevented?m.current=!1:s.onClose()}}),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),m.current=!0},onPointerUp:(0,a.M)(e.onPointerUp,e=>{var t;m.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=""!==f.searchRef.current;!n&&(!t||" "!==e.key)&&b.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),er=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,disabled:u=!1,textValue:c,...d}=e,s=X(ee,n),f=L(n),p=(0,o.useRef)(null),m=(0,l.e)(t,p),[h,v]=(0,o.useState)(!1),[g,w]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=p.current;if(e){var t;w((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[d.children]),(0,o.createElement)(T.ItemSlot,{scope:n,disabled:u,textValue:null!=c?c:g},(0,o.createElement)(M.ck,(0,r.Z)({asChild:!0},f,{focusable:!u}),(0,o.createElement)(i.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":u||void 0,"data-disabled":u?"":void 0},d,{ref:m,onPointerMove:(0,a.M)(e.onPointerMove,eC(e=>{u?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus())})),onPointerLeave:(0,a.M)(e.onPointerLeave,eC(e=>s.onItemLeave(e))),onFocus:(0,a.M)(e.onFocus,()=>v(!0)),onBlur:(0,a.M)(e.onBlur,()=>v(!1))}))))}),eo=(0,o.forwardRef)((e,t)=>{let{checked:n=!1,onCheckedChange:l,...u}=e;return(0,o.createElement)(ed,{scope:e.__scopeMenu,checked:n},(0,o.createElement)(en,(0,r.Z)({role:"menuitemcheckbox","aria-checked":eE(n)?"mixed":n},u,{ref:t,"data-state":ey(n),onSelect:(0,a.M)(u.onSelect,()=>null==l?void 0:l(!!eE(n)||!n),{checkForDefaultPrevented:!1})})))}),[ea,el]=S("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),eu=(0,o.forwardRef)((e,t)=>{let{value:n,onValueChange:a,...l}=e,u=(0,E.W)(a);return(0,o.createElement)(ea,{scope:e.__scopeMenu,value:n,onValueChange:u},(0,o.createElement)(J,(0,r.Z)({},l,{ref:t})))}),ec=(0,o.forwardRef)((e,t)=>{let{value:n,...l}=e,u=el("MenuRadioItem",e.__scopeMenu),c=n===u.value;return(0,o.createElement)(ed,{scope:e.__scopeMenu,checked:c},(0,o.createElement)(en,(0,r.Z)({role:"menuitemradio","aria-checked":c},l,{ref:t,"data-state":ey(c),onSelect:(0,a.M)(l.onSelect,()=>{var e;return null===(e=u.onValueChange)||void 0===e?void 0:e.call(u,n)},{checkForDefaultPrevented:!1})})))}),ei="MenuItemIndicator",[ed,es]=S(ei,{checked:!1}),ef=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,forceMount:a,...l}=e,u=es(ei,n);return(0,o.createElement)(w.z,{present:a||eE(u.checked)||!0===u.checked},(0,o.createElement)(i.WV.span,(0,r.Z)({},l,{ref:t,"data-state":ey(u.checked)})))}),ep=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},a,{ref:t}))}),em=((e,t)=>{let{__scopeMenu:n,...a}=e,l=F(n);return(0,o.createElement)(v.Eh,(0,r.Z)({},l,a,{ref:t}))},"MenuSub"),[eh,ev]=S(em),eg="MenuSubTrigger",ew=(0,o.forwardRef)((e,t)=>{let n=K(eg,e.__scopeMenu),u=V(eg,e.__scopeMenu),c=ev(eg,e.__scopeMenu),i=X(eg,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(W,(0,r.Z)({asChild:!0},p),(0,o.createElement)(er,(0,r.Z)({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":c.contentId,"data-state":e_(n.open)},e,{ref:(0,l.F)(t,c.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,a.M)(e.onPointerMove,eC(t=>{i.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:(0,a.M)(e.onPointerLeave,eC(e=>{var t,r;m();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,a="right"===t,l=o[a?"left":"right"],u=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:l,y:o.top},{x:u,y:o.top},{x:u,y:o.bottom},{x:l,y:o.bottom}],side:t}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,a.M)(e.onKeyDown,t=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==t.key)&&x[u.dir].includes(t.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),t.preventDefault()}})})))}),eM=(0,o.forwardRef)((e,t)=>{let n=G(B,e.__scopeMenu),{forceMount:u=n.forceMount,...c}=e,i=K(B,e.__scopeMenu),d=V(B,e.__scopeMenu),s=ev("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,l.e)(t,f);return(0,o.createElement)(T.Provider,{scope:e.__scopeMenu},(0,o.createElement)(w.z,{present:u||i.open},(0,o.createElement)(T.Slot,{scope:e.__scopeMenu},(0,o.createElement)(q,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},c,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;d.isUsingKeyboardRef.current&&(null===(t=f.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,a.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=R[d.dir].includes(e.key);if(t&&n){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function e_(e){return e?"open":"closed"}function eE(e){return"indeterminate"===e}function ey(e){return eE(e)?"indeterminate":e?"checked":"unchecked"}function eC(e){return t=>"mouse"===t.pointerType?e(t):void 0}let eb=e=>{let{__scopeMenu:t,open:n=!1,children:r,dir:a,onOpenChange:l,modal:u=!0}=e,c=F(t),[i,d]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,E.W)(l),m=(0,s.gm)(a);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,o.createElement)(v.fC,c,(0,o.createElement)($,{scope:t,open:n,onOpenChange:p,content:i,onContentChange:d},(0,o.createElement)(A,{scope:t,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:u},r)))},ek=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:a}=e,l=K(U,t);return(0,o.createElement)(z,{scope:t,forceMount:n},(0,o.createElement)(w.z,{present:n||l.open},(0,o.createElement)(g.h,{asChild:!0,container:a},r)))},eD=e=>{let{__scopeMenu:t,children:n,open:r=!1,onOpenChange:a}=e,l=K(em,t),u=F(t),[c,i]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,E.W)(a);return(0,o.useEffect)(()=>(!1===l.open&&f(!1),()=>f(!1)),[l.open,f]),(0,o.createElement)(v.fC,u,(0,o.createElement)($,{scope:t,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(eh,{scope:t,contentId:(0,h.M)(),triggerId:(0,h.M)(),trigger:c,onTriggerChange:i},n)))},ex="DropdownMenu",[eR,eO]=(0,u.b)(ex,[I]),eT=I(),[eZ,eP]=eR(ex),eS=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,disabled:u=!1,...c}=e,d=eP("DropdownMenuTrigger",n),s=eT(n);return(0,o.createElement)(W,(0,r.Z)({asChild:!0},s),(0,o.createElement)(i.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":u?"":void 0,disabled:u},c,{ref:(0,l.F)(t,d.triggerRef),onPointerDown:(0,a.M)(e.onPointerDown,e=>{u||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{!u&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),eI=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...l}=e,u=eP("DropdownMenuContent",n),c=eT(n),i=(0,o.useRef)(!1);return(0,o.createElement)(H,(0,r.Z)({id:u.contentId,"aria-labelledby":u.triggerId},c,l,{ref:t,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;i.current||null===(t=u.triggerRef.current)||void 0===t||t.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,a.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!u.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eF=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(J,(0,r.Z)({},l,a,{ref:t}))}),eL=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(Q,(0,r.Z)({},l,a,{ref:t}))}),e$=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(en,(0,r.Z)({},l,a,{ref:t}))}),eK=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(eo,(0,r.Z)({},l,a,{ref:t}))}),eA=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(eu,(0,r.Z)({},l,a,{ref:t}))}),eV=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(ec,(0,r.Z)({},l,a,{ref:t}))}),eW=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(ef,(0,r.Z)({},l,a,{ref:t}))}),eU=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(ep,(0,r.Z)({},l,a,{ref:t}))}),ez=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(ew,(0,r.Z)({},l,a,{ref:t}))}),eG=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eT(n);return(0,o.createElement)(eM,(0,r.Z)({},l,a,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eB=e=>{let{__scopeDropdownMenu:t,children:n,dir:a,open:l,defaultOpen:u,onOpenChange:i,modal:d=!0}=e,s=eT(t),f=(0,o.useRef)(null),[p=!1,m]=(0,c.T)({prop:l,defaultProp:u,onChange:i});return(0,o.createElement)(eZ,{scope:t,triggerId:(0,h.M)(),triggerRef:f,contentId:(0,h.M)(),open:p,onOpenChange:m,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,o.createElement)(eb,(0,r.Z)({},s,{open:p,onOpenChange:m,dir:a,modal:d}),n))},eN=eS,eX=e=>{let{__scopeDropdownMenu:t,...n}=e,a=eT(t);return(0,o.createElement)(ek,(0,r.Z)({},a,n))},eH=eI,ej=eF,eY=eL,eq=e$,eJ=eK,eQ=eA,e0=eV,e1=eW,e2=eU,e9=e=>{let{__scopeDropdownMenu:t,children:n,open:a,onOpenChange:l,defaultOpen:u}=e,i=eT(t),[d=!1,s]=(0,c.T)({prop:a,defaultProp:u,onChange:l});return(0,o.createElement)(eD,(0,r.Z)({},i,{open:d,onOpenChange:s}),n)},e3=ez,e6=eG}}]);