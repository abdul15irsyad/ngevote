(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,a,t){},110:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},140:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(28),l=t.n(r),s=(t(79),t(8)),o=t(13),m=t(9),i=t(146),u=t(154),d=t(155),p=t(41),E=t.n(p),f=t(42),g=t.n(f),b=t(43),h=t.n(b),v=t(44),N=t.n(v),j=t(45),w=t.n(j),y=t(46),O=t.n(y),x=t(47),k=t.n(x),S=t(48),C=t.n(S),P=t(49),A=t.n(P),R=t(141),V=t(142),I=t(143),L=t(144),D=t(69),F=(t(80),function(e){var a=e.candidate,t=a.name.split(" ");return c.a.createElement(R.a,{className:"candidate-card h-100"},c.a.createElement(V.a,{top:!0,width:"100%",src:a.photo,alt:"Card image cap"}),c.a.createElement(I.a,{className:"text-center"},c.a.createElement("h4",{className:"mb-0"},t[0]),c.a.createElement("h5",null,t[1]),c.a.createElement("span",{className:"text-secondary"},a.age," years old"),c.a.createElement(L.a,null,c.a.createElement("i",null,'"',a.motto,'"'))),c.a.createElement("div",{className:"footer"},c.a.createElement(D.a,{color:"info",className:"btn-vote"},"Detail"),c.a.createElement(D.a,{color:"success",className:"w-50 ml-1 btn-vote"},"Vote")))}),U=function(){var e=(new Date).getFullYear();return c.a.createElement("div",{className:"Footer"},c.a.createElement("p",{className:"text-center mb-0 py-3"},c.a.createElement("span",null,"Copy Right \xa9 ",e," "),c.a.createElement("a",{href:"https://github.com/abdul15irsyad",className:"text-dark",target:"_blank",rel:"noopener noreferrer"},"Irsyad Abdul")))},T=t(145),B=t(147),J=t(148),_=t(149),G=t(150),z=t(151),Y=t(152),W=t(160),Z=t(161),M=t(162),H=t(153),$=(t(83),function(e){var a=e.title,t=e.logout,r=e.user,l=Object(n.useState)(!1),o=Object(m.a)(l,2),u=o[0],d=o[1],p=function(){return d(!1)};return c.a.createElement(T.a,{color:"light",light:!0,expand:"md",className:"shadow"},c.a.createElement(i.a,null,c.a.createElement(B.a,{tag:s.b,to:"/",onClick:p},a),c.a.createElement(J.a,{onClick:function(){return d(!u)}}),c.a.createElement(_.a,{isOpen:u,navbar:!0},c.a.createElement(G.a,{className:"mx-auto",navbar:!0},[{label:"Vote Now",link:"/vote-now"},{label:"Rules",link:"/rules"}].map((function(e,a){return c.a.createElement(z.a,{key:a,className:"mx-1"},c.a.createElement(Y.a,{tag:s.b,to:e.link,onClick:p},e.label))}))),c.a.createElement(G.a,{navbar:!0},c.a.createElement(W.a,{nav:!0,inNavbar:!0},c.a.createElement(Z.a,{nav:!0},r.username),c.a.createElement(M.a,{right:!0},c.a.createElement(H.a,{tag:s.b,to:"/profile/"+r.username,onClick:p},"Profile"),c.a.createElement(H.a,{tag:s.b,to:"/settings",onClick:p},"Settings"),c.a.createElement(H.a,{divider:!0}),c.a.createElement(H.a,{onClick:function(){p(),t()}},"Log Out")))))))}),q=(t(109),function(e){var a=e.text,t=e.isValid,n={backgroundColor:(t=t||!1)?"rgb(198, 255, 184)":"rgb(0,0,0,.03)",color:t?"rgba(0,0,0, .8)":"rgba(0,0,0, .3)"};return c.a.createElement("div",{className:"pil-text mr-1 mb-1",style:n},a)}),K=(t(110),function(e){var a=e.src,t=e.alt,n={paddingTop:e.aspectRatio||"100%",borderRadius:e.borderRadius||"50%"},r={objectFit:e.objectFit||"cover"};return c.a.createElement("div",{className:"responsive-image",style:n},c.a.createElement("img",{src:a,alt:t,style:r}))}),Q=function(){var e=Object(n.useState)([{name:"Klay Thompson",age:29,photo:N.a,motto:"60 points? easy..."},{name:"Stephen Curry",age:32,photo:h.a,motto:"I can do anything"},{name:"Lebron James",age:34,photo:g.a,motto:"Basketball isn't easy"},{name:"Giannis Antetokounmpo",age:27,photo:w.a,motto:"I wanna go to Warriors"},{name:"Jimmy Butler",age:31,photo:O.a,motto:"Almost Sweep Bucks"},{name:"Luka Doncic",age:21,photo:k.a,motto:"Dallas will win the championship"}].sort((function(e,a){return e.age<a.age?-1:1}))),a=Object(m.a)(e,1)[0];return c.a.createElement("div",{className:"vote-now"},c.a.createElement(i.a,null,c.a.createElement(u.a,{className:"justify-content-center mt-4"},c.a.createElement(d.a,null,c.a.createElement("h1",null,"Vote Now"))),c.a.createElement(u.a,{className:"mt-3 justify-content-center"},a.map((function(e,a){return c.a.createElement(d.a,{lg:"3",md:"4",sm:"6",className:"my-3",key:a},c.a.createElement(F,{candidate:e}))})))))},X=t(6),ee=t(156),ae=t(157),te=t(158),ne=t(159),ce=function(){var e=Object(o.g)(),a=Object(n.useState)({name:"",username:"",email:"",age:""}),t=Object(m.a)(a,2),r=t[0],l=t[1];return c.a.createElement(i.a,{className:"edit-profile"},c.a.createElement(u.a,{className:"justify-content-center mt-4"},c.a.createElement(d.a,{lg:"10",md:"12"},c.a.createElement("h1",null,"Edit Profile"))),c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(d.a,{lg:"10",md:"12"},c.a.createElement(ee.a,{className:"p-3",onSubmit:function(a){a.preventDefault(),e.push("/profile/abdul15irsyad")}},c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"name"},"Name"),c.a.createElement(ne.a,{type:"text",id:"name",placeholder:"John Doe",value:r.name,onChange:function(e){l(Object(X.a)(Object(X.a)({},r),{},{name:e.target.value}))}})),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"username"},"Username"),c.a.createElement(ne.a,{type:"text",id:"username",placeholder:"johndoe8",value:r.username,onChange:function(e){l(Object(X.a)(Object(X.a)({},r),{},{username:e.target.value}))}})),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"email"},"Email"),c.a.createElement(ne.a,{type:"email",id:"email",placeholder:"example@email.com",value:r.email,onChange:function(e){l(Object(X.a)(Object(X.a)({},r),{},{email:e.target.value}))}})),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"age"},"Age"),c.a.createElement(ne.a,{type:"number",id:"age",placeholder:"Your Age",value:r.age,onChange:function(e){l(Object(X.a)(Object(X.a)({},r),{},{age:e.target.value}))}})),c.a.createElement("div",{className:"button-section d-flex justify-content-end"},c.a.createElement(D.a,{tag:s.b,to:"/profile/abdul15irsyad",className:"mr-1"},"Cancel"),c.a.createElement(D.a,{type:"submit",color:"primary",className:"px-4 ml-1"},"Save"))))))},re=t(14),le=t.n(re),se=t(163),oe=(t(128),function(){var e=Object(n.useState)({email:""}),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),p=o[0],E=o[1];return Object(n.useEffect)((function(){}),[p]),c.a.createElement(i.a,{className:"forgot-password"},c.a.createElement(u.a,{className:"h-100 justify-content-center"},c.a.createElement(d.a,{md:"6",lg:"4"},c.a.createElement(ee.a,{className:"p-3",onSubmit:function(e){e.preventDefault(),document.activeElement.blur(),E(!1),le.a.post("/api/v1/auth/forgot-password",t).then((function(e){return e.data})).then((function(e){E({type:"success",message:e.message}),console.log(e.token)})).catch((function(e){E({type:"error",message:e.response.data.message})}))}},c.a.createElement("h2",{className:"text-center mb-4"},"Forgot Password"),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"email"},"Your Email"),c.a.createElement(ne.a,{type:"text",name:"email",id:"email",placeholder:"example@email.com",value:t.email,onChange:function(e){r(Object(X.a)(Object(X.a)({},t),{},{email:e.target.value}))}}),c.a.createElement("div",{className:"forgot-password-info text-center px-2"},c.a.createElement("small",null,"We'll send a link to reset your password !"))),p&&c.a.createElement(se.a,{color:"error"===p.type?"warning":"success",className:"text-center upper-first py-1"},p.message),c.a.createElement(D.a,{type:"submit",color:"primary",className:"btn-block mt-4",disabled:!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(t.email)},"Forgot Password"),c.a.createElement("div",{className:"back-to-login-link mt-3"},c.a.createElement(s.b,{to:"/login",className:"text-secondary"},"Back to Login"))))))}),me=function(){return c.a.createElement(i.a,{className:"home"},c.a.createElement(u.a,{className:"justify-content-center mt-4"},c.a.createElement(d.a,{lg:"9"},c.a.createElement("h1",null,"Ngevote"),c.a.createElement("p",null,"\u2003\u2003Ngevote is an simple ",c.a.createElement("b",null,"online voting")," application developed by Irsyad Abdul using the MERN Stack (Mongo - Express - React - Node JS) as an exercise after learning from the Youtube channel, Medium, and others. ^_^"))),c.a.createElement(u.a,{className:"justify-content-center mt-34"},c.a.createElement(d.a,{lg:"3",md:"4",xs:"10"},c.a.createElement(D.a,{tag:s.b,to:"/vote-now",color:"primary",className:"btn-block"},"Vote Now"))))},ie=(t(129),function(){var e=Object(n.useState)("Your token was invalid, maybe because it's expired or something else."),a=Object(m.a)(e,1)[0];return c.a.createElement(i.a,{className:"invalid-token"},c.a.createElement(u.a,{className:"h-100 justify-content-center"},c.a.createElement(d.a,{md:"6",lg:"4",className:"align-self-center"},c.a.createElement("h1",{className:"text-center"},"Oooopss..."),c.a.createElement("div",{className:"image-invalid py-3 px-5"},c.a.createElement(K,{src:C.a,alt:"oops image",objectFit:"contain"})),c.a.createElement(se.a,{color:"warning",className:"text-center upper-first"},a),c.a.createElement("div",{className:"go-to-login-link text-center mt-3"},c.a.createElement(s.b,{to:"/login",className:"text-secondary"},"Back to Login")))))}),ue=t(38),de=t.n(ue),pe=t(73),Ee=function(e,a){switch(a.type){case"INIT_USER":case"LOGIN":return Object(X.a)(Object(X.a)({},e),{},{user:a.user,isAuthenticated:a.isAuthenticated});case"LOGOUT":return Object(X.a)(Object(X.a)({},e),{},{user:{},isAuthenticated:!1});default:return e}},fe=Object(n.createContext)(),ge=function(e){var a=Object(n.useReducer)(Ee,{isAuthenticated:void 0,user:{}}),t=Object(m.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token")||"";le.a.get("/api/v1/auth",{headers:{"x-auth-token":e}}).then((function(e){l({type:"INIT_USER",user:e.data.data,isAuthenticated:!0})})).catch((function(e){l({type:"INIT_USER",user:{},isAuthenticated:!1}),localStorage.removeItem("token"),console.log(r)}))}),[]),c.a.createElement(fe.Provider,{value:{auth:r,dispatch:l}},e.children)},be=(t(131),function(){var e=Object(o.g)(),a=Object(n.useState)({username:"",password:""}),t=Object(m.a)(a,2),r=t[0],l=t[1],p=Object(n.useContext)(fe).dispatch,E=Object(n.useState)(!1),f=Object(m.a)(E,2),g=f[0],b=f[1],h=function(){var a=Object(pe.a)(de.a.mark((function a(t){return de.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),document.activeElement.blur(),b(!1),le.a.post("/api/v1/auth/login",r).then((function(e){return e.data})).then((function(a){var t=a.token;localStorage.setItem("token",t),le.a.get("/api/v1/auth",{headers:{"x-auth-token":t}}).then((function(a){p({type:"LOGIN",user:a.data.data,isAuthenticated:!0}),e.push("/")}))})).catch((function(e){l(Object(X.a)(Object(X.a)({},r),{},{password:""})),b(e.response.data.message)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return c.a.createElement(i.a,{className:"login"},c.a.createElement(u.a,{className:"h-100 justify-content-center"},c.a.createElement(d.a,{md:"6",lg:"4"},c.a.createElement(ee.a,{className:"p-3",onSubmit:h},c.a.createElement("h2",{className:"text-center mb-4"},"Login"),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"username"},"Email or Username"),c.a.createElement(ne.a,{type:"text",id:"username",placeholder:"example@email.com",value:r.username,onChange:function(e){l(Object(X.a)(Object(X.a)({},r),{},{username:e.target.value}))}})),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"password"},"Password"),c.a.createElement(ne.a,{type:"password",id:"password",placeholder:"********",value:r.password,onChange:function(e){l(Object(X.a)(Object(X.a)({},r),{},{password:e.target.value}))}})),g&&c.a.createElement(se.a,{color:"warning",className:"text-center upper-first py-1"},g),c.a.createElement(D.a,{type:"submit",color:"primary",className:"btn-block mt-4",disabled:""===r.username||""===r.password},"Login"),c.a.createElement("div",{className:"forgot-password-link text-right pt-3"},c.a.createElement(s.b,{to:"/forgot-password",className:"text-secondary"},"Forgot Password?")),c.a.createElement("div",{className:"didnt-have-account-link text-center pt-4"},c.a.createElement("span",null,"Did'nt have an account? "),c.a.createElement(s.b,{to:"/register",className:"text-dark"},"Register"))))))}),he=(t(132),function(){return c.a.createElement(i.a,{className:"not-found"},c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(d.a,{md:"8",lg:"5"},c.a.createElement(K,{src:A.a,borderRadius:"0px",objectFit:"contain",aspectRatio:"85%"}),c.a.createElement("h1",{className:"text-center"},"404 Not Found"))))}),ve=(t(133),function(){var e=Object(o.i)().username,a=Object(n.useState)({}),t=Object(m.a)(a,2),r=t[0],l=t[1],p=Object(n.useState)(void 0),f=Object(m.a)(p,2),g=f[0],b=f[1];return Object(n.useEffect)((function(){le.a.get("/api/v1/user",{params:{username:e}}).then((function(e){return e.data})).then((function(e){l(e.data),b(!0)})).catch((function(e){b(!1)}))}),[e]),void 0!==g&&c.a.createElement("div",{className:"Profile"},r.username?c.a.createElement("div",{className:"top-profile"},c.a.createElement(i.a,{className:"pt-4 pb-5"},c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(d.a,{md:"4",lg:"3",className:"pb-3"},c.a.createElement("div",{className:"image-profile px-4"},c.a.createElement(K,{src:r.image||E.a,alt:"profile"}))),c.a.createElement(d.a,{md:"8",className:"pb-3"},c.a.createElement("div",{className:"text-profile d-flex flex-column h-100 p-3"},c.a.createElement("h3",{className:"text-capitalize mb-0"},r.name),c.a.createElement("p",{className:"mb-0 text-secondary"},r.username," ",r.age&&". ".concat(r.age," years old")," "),c.a.createElement("p",{className:"mb-3 text-secondary"},r.email),c.a.createElement(D.a,{tag:s.b,to:"/profile/abdul15irsyad/edit",color:"primary",className:"btn-edit-profile mt-auto"},"Edit Profile")))))):c.a.createElement(i.a,null,c.a.createElement(u.a,{className:"justify-content-center"},c.a.createElement(d.a,{md:"6",lg:"4"},c.a.createElement(se.a,{color:"warning",className:"text-center mt-5"},"User not found.")))),r.isCandidate&&c.a.createElement("div",{className:"detail-Alertrofile"},c.a.createElement(i.a,{className:"py-3"},c.a.createElement(u.a,null,c.a.createElement(d.a,{lg:"9"},c.a.createElement("div",{className:"achievement py-3"},c.a.createElement("div",{className:"title-detail rounded mb-2"},c.a.createElement("h5",{className:"mb-0"},"Achievement")),c.a.createElement("ul",null,c.a.createElement("li",null,"Lorem ipsum dolor sit amet."),c.a.createElement("li",null,"Lorem ipsum dolor sit amet."))),c.a.createElement("div",{className:"history py-3"},c.a.createElement("div",{className:"title-detail rounded mb-2"},c.a.createElement("h5",{className:"mb-0"},"History")),c.a.createElement("p",null,"\u2003\u2003Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt asperiores voluptates quos nihil ratione officiis molestias unde laborum, harum officia culpa eum ipsa blanditiis voluptate, nisi aspernatur fugiat mollitia.")))))))}),Ne=function(){return c.a.createElement(i.a,{className:"rules"},c.a.createElement(u.a,{className:"justify-content-center mt-4"},c.a.createElement(d.a,null,c.a.createElement("h1",null,"Rules"))))},je=function(){return c.a.createElement(i.a,{className:"settings"},c.a.createElement(u.a,{className:"justify-content-center mt-4"},c.a.createElement(d.a,null,c.a.createElement("h1",null,"Settings"))))},we=(t(134),function(){var e=Object(n.useContext)(fe),a=e.auth,t=e.dispatch,r=a.user;return c.a.createElement("div",{className:"main-app"},c.a.createElement("div",{className:"header-wrapper sticky-top"},c.a.createElement($,{title:"Ngevote",user:r,logout:function(){localStorage.removeItem("token"),t({type:"LOGOUT"})}})),c.a.createElement("div",{className:"content-wrapper"},c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/profile/:username/edit",component:ce}),c.a.createElement(o.b,{exact:!0,path:"/profile/:username",component:ve}),c.a.createElement(o.b,{exact:!0,path:"/rules",component:Ne}),c.a.createElement(o.b,{exact:!0,path:"/settings",component:je}),c.a.createElement(o.b,{exact:!0,path:"/vote-now",component:Q}),c.a.createElement(o.b,{exact:!0,path:"/",component:me}),c.a.createElement(o.b,{path:"/*",component:he}))),c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement(U,null)))}),ye=(t(135),function(){var e=Object(n.useState)({name:"",age:null,username:"",email:"",password:"",confirmPassword:""}),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),p=o[0],E=o[1];return c.a.createElement(i.a,{className:"register"},c.a.createElement(u.a,{className:"h-100 justify-content-center"},c.a.createElement(d.a,{md:"6",lg:"5"},c.a.createElement(ee.a,{className:"p-3",onSubmit:function(e){e.preventDefault(),document.activeElement.blur(),le.a.post("/api/v1/auth/register",t).then((function(e){return e.data})).then((function(e){r({name:"",age:null,username:"",email:"",password:"",confirmPassword:""}),E({color:"success",message:"Register Success, please login."}),console.log(e)})).catch((function(e){r(Object(X.a)(Object(X.a)({},t),{},{password:""})),console.log(e.response.data.message)})),console.log(t)}},c.a.createElement("h2",{className:"text-center mb-4"},"Register"),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"name"},"Full Name"),c.a.createElement(ne.a,{type:"text",id:"name",placeholder:"John Doe",value:t.name,onChange:function(e){r(Object(X.a)(Object(X.a)({},t),{},{name:e.target.value}))}})),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"username"},"Username"),c.a.createElement(ne.a,{type:"text",id:"username",placeholder:"johndoe8",value:t.username,onChange:function(e){r(Object(X.a)(Object(X.a)({},t),{},{username:e.target.value}))}})),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"email"},"Email"),c.a.createElement(ne.a,{type:"text",id:"email",placeholder:"example@email.com",value:t.email,onChange:function(e){r(Object(X.a)(Object(X.a)({},t),{},{email:e.target.value}))}})),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"password"},"Password"),c.a.createElement(ne.a,{type:"password",id:"password",placeholder:"********",value:t.password,onChange:function(e){r(Object(X.a)(Object(X.a)({},t),{},{password:e.target.value}))}})),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"confirmPassword"},"Confirm Password"),c.a.createElement(ne.a,{type:"password",id:"confirmPassword",placeholder:"********",value:t.confirmPassword,onChange:function(e){r(Object(X.a)(Object(X.a)({},t),{},{confirmPassword:e.target.value}))}})),p&&c.a.createElement(se.a,{color:p.color||"warning",className:"text-center upper-first py-1"},p.message),c.a.createElement(D.a,{type:"submit",color:"primary",className:"btn-block mt-3"},"Register"),c.a.createElement("div",{className:"have-account-link text-center pt-3"},c.a.createElement("span",null,"Have an account? "),c.a.createElement(s.b,{to:"/login",className:"text-dark"},"Login"))))))}),Oe=function(){return new URLSearchParams(Object(o.h)().search)},xe=(t(136),function(){var e=Oe().get("token");Object(n.useEffect)((function(){le.a.get("/api/v1/auth/check-reset-token",{headers:{"x-auth-token":e}}).then((function(){return l(!0)})).catch((function(e){l(!1),S({type:"error",message:e.response.data.message})}))}),[]);var a=Object(n.useState)(null),t=Object(m.a)(a,2),r=t[0],l=t[1],o=Object(n.useState)({password:"",confirmPassword:""}),p=Object(m.a)(o,2),E=p[0],f=p[1],g=Object(n.useState)([{text:"uppercase",isValid:!1},{text:"lowercase",isValid:!1},{text:"number",isValid:!1},{text:"8+ characters",isValid:!1}]),b=Object(m.a)(g,2),h=b[0],v=b[1],N=Object(n.useState)([{text:"matched",isValid:!1}]),j=Object(m.a)(N,2),w=j[0],y=j[1],O=Object(n.useState)(!1),x=Object(m.a)(O,2),k=x[0],S=x[1];return Object(n.useEffect)((function(){var e=h.map((function(e,a){return 0===a&&(e.isValid=/(?=.*[A-Z])/.test(E.password)),1===a&&(e.isValid=/(?=.*[a-z])/.test(E.password)),2===a&&(e.isValid=/(?=.*[0-9])/.test(E.password)),3===a&&(e.isValid=E.password.length>=8),e})),a=w.map((function(e,a){return 0===a&&(e.isValid=E.password===E.confirmPassword&&""!==E.confirmPassword),e}));v(e),y(a)}),[E]),null!=r&&(r?c.a.createElement(i.a,{className:"reset-password"},c.a.createElement(u.a,{className:"h-100 justify-content-center"},c.a.createElement(d.a,{md:"6",lg:"4"},c.a.createElement(ee.a,{className:"p-3",onSubmit:function(a){a.preventDefault(),document.activeElement.blur(),console.log("reset password:",E),le.a.post("/api/v1/auth/reset-password",E,{headers:{"x-auth-token":e}}).then((function(e){return e.data})).then((function(e){S({type:"success",message:e.message}),f({password:"",confirmPassword:""}),console.log(w)})).catch((function(e){S({type:"error",message:e.response.data.message})}))}},c.a.createElement("h2",{className:"text-center mb-4"},"Reset Password"),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"password"},"Password"),c.a.createElement(ne.a,{type:"password",name:"password",id:"password",placeholder:"*********",value:E.password,onChange:function(e){return f(Object(X.a)(Object(X.a)({},E),{},{password:e.target.value}))}}),c.a.createElement("div",{className:"pil-text-wrapper mt-2"},h.map((function(e,a){return c.a.createElement(q,{text:e.text,isValid:e.isValid,key:a})})))),c.a.createElement(ae.a,null,c.a.createElement(te.a,{for:"confirm-password"},"Confirm Password"),c.a.createElement(ne.a,{type:"password",name:"confirm-password",id:"confirm-password",placeholder:"*********",value:E.confirmPassword,onChange:function(e){return f(Object(X.a)(Object(X.a)({},E),{},{confirmPassword:e.target.value}))}}),c.a.createElement("div",{className:"pil-text-wrapper mt-2"},w.map((function(e,a){return c.a.createElement(q,{text:e.text,isValid:e.isValid,key:a})})))),k&&c.a.createElement(se.a,{color:"error"===k.type?"warning":"success",className:"text-center upper-first py-1"},k.message),c.a.createElement(D.a,{type:"submit",color:"primary",className:"btn-block mt-4",disabled:h.concat(w).some((function(e){return!1===e.isValid}))},"Reset Password"),c.a.createElement("div",{className:"go-to-login-link text-center mt-3"},c.a.createElement(s.b,{to:"/login",className:"text-secondary"},"Go To Login")))))):c.a.createElement(ie,null))}),ke=t(30),Se=function(e){var a=e.component,t=Object(ke.a)(e,["component"]),r=Object(n.useContext)(fe).auth.isAuthenticated;return void 0!==r&&c.a.createElement(o.b,Object.assign({},t,{render:function(e){return r?c.a.createElement(o.a,{to:{pathname:"/"}}):c.a.createElement(a,e)}}))},Ce=function(e){var a=e.component,t=Object(ke.a)(e,["component"]),r=Object(n.useContext)(fe).auth.isAuthenticated;return void 0!==r&&c.a.createElement(o.b,Object.assign({},t,{render:function(e){return r?c.a.createElement(a,e):c.a.createElement(o.a,{to:{pathname:"/login"}})}}))},Pe=function(){return c.a.createElement(s.a,null,c.a.createElement(o.d,null,c.a.createElement(Se,{path:"/forgot-password",component:oe}),c.a.createElement(Se,{path:"/login",component:be}),c.a.createElement(Se,{path:"/register",component:ye}),c.a.createElement(Se,{path:"/reset-password",component:xe}),c.a.createElement(Ce,{path:"/",component:we})))},Ae=function(e){return c.a.createElement(ge,null,e.children)};t(137),t(138);var Re=function(){return document.title="Ngevote",c.a.createElement(Ae,null,c.a.createElement(Pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(139);l.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,a,t){e.exports=t.p+"static/media/default-image.cf89e8e6.png"},42:function(e,a,t){e.exports=t.p+"static/media/lebron-james.fdbac938.png"},43:function(e,a,t){e.exports=t.p+"static/media/stephen-curry.7b60ded7.png"},44:function(e,a,t){e.exports=t.p+"static/media/klay-thompson.555d7d42.png"},45:function(e,a,t){e.exports=t.p+"static/media/giannis-antetokounmpo.0dc941b0.png"},46:function(e,a,t){e.exports=t.p+"static/media/jimmy-butler.46be4b3d.png"},47:function(e,a,t){e.exports=t.p+"static/media/luka-doncic.efa546a9.png"},48:function(e,a,t){e.exports=t.p+"static/media/oooopss.c9a48e58.svg"},49:function(e,a,t){e.exports=t.p+"static/media/page-not-found.4a7359fe.svg"},74:function(e,a,t){e.exports=t(140)},79:function(e,a,t){},80:function(e,a,t){},83:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.afcf775e.chunk.js.map