(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var r=n(12),c=n.n(r),a=n(43),i=n.n(a),s=n(14),u=n(29),o=n(16),j=n(0),b=n.n(j),l=n(2),d=n(30);n(52),n(65),n(64);d.a.initializeApp({apiKey:"AIzaSyBlyPakLOMFQEMZIbUoznoPp8sDRnsAKZo",authDomain:"nwitter-d51d4.firebaseapp.com",projectId:"nwitter-d51d4",storageBucket:"nwitter-d51d4.appspot.com",messagingSenderId:"369296899940",appId:"1:369296899940:web:f929bdab4e8ef112100471"});var O=d.a,h=d.a.auth(),p=d.a.firestore(),x=d.a.storage(),f=n(11),v=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(!0),d=Object(s.a)(j,2),p=d[0],x=d[1],v=Object(r.useState)(""),g=Object(s.a)(v,2),m=g[0],w=g[1],k=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&o(r)},S=function(){var e=Object(l.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(n,u);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(n,u);case 10:r=e.sent;case 11:console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new O.auth.GoogleAuthProvider:"github"===n&&(r=new O.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(r);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{onSubmit:S,children:[Object(f.jsx)("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",required:!0,value:n,onChange:k}),Object(f.jsx)("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",required:!0,value:u,onChange:k}),Object(f.jsx)("input",{type:"submit",value:p?"\uacc4\uc815 \uc0dd\uc131\ud558\uae30":"\ub85c\uadf8\uc778"}),m]}),Object(f.jsx)("span",{onClick:function(){return x((function(e){return!e}))},children:p?"\ub85c\uadf8\uc778 \ubaa8\ub4dc \uc804\ud658(\ud074\ub9ad)":"\uc2e0\uaddc\uacc4\uc815 \uc0dd\uc131\ud558\uae30 \ubaa8\ub4dc \uc804\ud658(\ud074\ub9ad)"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:y,name:"google",children:"Google\ub85c \ub85c\uadf8\uc778\ud558\uae30 "})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:y,name:"github",children:"github\uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uae30"})})]})},g=n(44),m=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],u=a[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),d=j[0],O=j[1],h=function(){var e=Object(l.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),console.log(n),!n){e.next=8;break}return e.next=5,p.doc("nweets/".concat(t.id)).delete();case 5:if(""===t.attachmentUrl){e.next=8;break}return e.next=8,x.refFromURL(t.attachmentUrl).delete();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){return u((function(e){return!e}))},g=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.doc("nweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:i?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:g,children:[Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;O(t)},value:d,required:!0}),Object(f.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(f.jsx)("button",{onClick:v,children:"Cancel"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(f.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{onClick:h,children:"Delete Nweet"}),Object(f.jsx)("button",{onClick:v,children:"Edit Nweet"})]})]})})},w=n(67),k=function(e){var t=e.userObj,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1],u=Object(r.useState)([]),o=Object(s.a)(u,2),j=o[0],d=o[1],O=Object(r.useState)(""),h=Object(s.a)(O,2),v=h[0],k=h[1];Object(r.useEffect)((function(){p.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));d(t)}))}),[]);var S=function(){var e=Object(l.a)(b.a.mark((function e(n){var r,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===v){e.next=10;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(w.a)())),e.next=6,c.putString(v,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return e.next=12,p.collection("nweets").add({text:a,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r});case 12:i(""),k("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:S,children:[Object(f.jsx)("input",{value:a,onChange:function(e){e.preventDefault();var t=e.target.value;i(t)},type:"text",placeholder:"\uc624\ub298 \ub098\uc758 \uae30\ubd84\uc740 \uc5b4\ub54c\uc694?",maxLength:120}),Object(f.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;k(t)},n.readAsDataURL(t)}}),Object(f.jsx)("input",{type:"submit",value:"\uac8c\uc2dc\uae00 \uc62c\ub9ac\uae30"}),v&&Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:v,width:"50px",height:"50px"}),Object(f.jsx)("button",{onClick:function(){return k("")},children:"Clear"})]})]}),Object(f.jsx)("div",{children:j.map((function(e){return Object(f.jsx)(m,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},S=function(){var e=Object(o.f)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("button",{onClick:function(){h.signOut(),e.push("/")},children:"Log Out"})})},y=function(){return Object(f.jsx)("nav",{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/",children:"\ud648\ud654\uba74"})}),Object(f.jsx)("li",{children:Object(f.jsx)(u.b,{to:"/profile",children:"\ub098\uc758 \ud504\ub85c\ud544(\ud604\uc7ac \ub85c\uadf8\uc544\uc6c3 \ubc84\ud2bc \ud398\uc774\uc9c0 \uc774\ub3d9 \uc804\uc6a9)"})})]})})},C=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(f.jsxs)(u.a,{children:[t&&Object(f.jsx)(y,{}),Object(f.jsx)(o.c,{children:t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(k,{userObj:n})}),Object(f.jsx)(o.a,{exact:!0,path:"/profile",children:Object(f.jsx)(S,{})})]}):Object(f.jsx)(o.a,{exact:!0,path:"/",children:Object(f.jsx)(v,{})})})]})};var I=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(h.currentUser),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(null),b=Object(s.a)(j,2),l=b[0],d=b[1];return Object(r.useEffect)((function(){h.onAuthStateChanged((function(e){e?(o(e),d(e)):o(!1),c(!0)}))}),[]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)(C,{isLoggedIn:u,userObj:l}):"initializing..."})};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.38e96e47.chunk.js.map