(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,a,t){},108:function(e,a,t){},126:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},135:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),s=(t(77),t(8)),o=t(12),m=t(13),i=t(141),u=t(149),p=t(150),d=t(40),E=t.n(d),f=t(41),g=t.n(f),b=t(42),h=t.n(b),v=t(43),N=t.n(v),y=t(44),w=t.n(y),x=t(45),j=t.n(x),O=t(46),k=t.n(O),S=t(47),C=t.n(S),V=t(136),P=t(137),A=t(138),L=t(139),R=t(67),D=(t(78),function(e){var a=e.candidate,t=a.name.split(" ");return r.a.createElement(V.a,{className:"candidate-card h-100"},r.a.createElement(P.a,{top:!0,width:"100%",src:a.photo,alt:"Card image cap"}),r.a.createElement(A.a,{className:"text-center"},r.a.createElement("h4",{className:"mb-0"},t[0]),r.a.createElement("h5",null,t[1]),r.a.createElement("span",{className:"text-secondary"},a.age," years old"),r.a.createElement(L.a,null,r.a.createElement("i",null,'"',a.motto,'"'))),r.a.createElement("div",{className:"footer"},r.a.createElement(R.a,{color:"info",className:"btn-vote"},"Detail"),r.a.createElement(R.a,{color:"success",className:"w-50 ml-1 btn-vote"},"Vote")))}),F=function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"Footer"},r.a.createElement("p",{className:"text-center mb-0 py-3"},r.a.createElement("span",null,"Copy Right \xa9 ",e," "),r.a.createElement("a",{href:"https://github.com/abdul15irsyad",className:"text-dark",target:"_blank",rel:"noopener noreferrer"},"Irsyad Abdul")))},B=t(140),I=t(142),J=t(143),z=t(144),Y=t(145),W=t(146),Z=t(147),_=t(155),G=t(156),M=t(157),T=t(148),U=(t(81),function(e){var a=e.title,t=e.menus,c=e.user,l=Object(n.useState)(!1),o=Object(m.a)(l,2),u=o[0],p=o[1],d=function(){return p(!1)};return r.a.createElement(B.a,{color:"light",light:!0,expand:"md",className:"shadow"},r.a.createElement(i.a,null,r.a.createElement(I.a,{tag:s.b,to:"/",onClick:d},a),r.a.createElement(J.a,{onClick:function(){return p(!u)}}),r.a.createElement(z.a,{isOpen:u,navbar:!0},r.a.createElement(Y.a,{className:"mx-auto",navbar:!0},t.map((function(e,a){return r.a.createElement(W.a,{key:a,className:"mx-1"},r.a.createElement(Z.a,{tag:s.b,to:e.link,onClick:d},e.label))}))),r.a.createElement(Y.a,{navbar:!0},r.a.createElement(_.a,{nav:!0,inNavbar:!0},r.a.createElement(G.a,{nav:!0},c.username),r.a.createElement(M.a,{right:!0},r.a.createElement(T.a,{tag:s.b,to:"/profile/abdul15irsyad",onClick:d},"Profile"),r.a.createElement(T.a,{tag:s.b,to:"/settings",onClick:d},"Settings"),r.a.createElement(T.a,{divider:!0}),r.a.createElement(T.a,{tag:s.b,to:"/login",onClick:d},"Log Out")))))))}),q=(t(107),function(e){var a=e.text,t=e.isValid,n={backgroundColor:(t=t||!1)?"rgb(198, 255, 184)":"rgb(0,0,0,.03)",color:t?"rgba(0,0,0, .8)":"rgba(0,0,0, .3)"};return r.a.createElement("div",{className:"pil-text text-capitalize mr-1 mb-1",style:n},a)}),H=(t(108),function(e){var a=e.src,t=e.alt,n={paddingTop:e.aspectRatio||"100%",borderRadius:e.borderRadius||"50%"},c={objectFit:e.objectFit||"cover"};return r.a.createElement("div",{className:"responsive-image bg-light",style:n},r.a.createElement("img",{src:a,alt:t,style:c}))}),$=function(){var e=Object(n.useState)([{name:"Klay Thompson",age:29,photo:N.a,motto:"60 points? easy..."},{name:"Stephen Curry",age:32,photo:h.a,motto:"I can do anything"},{name:"Lebron James",age:34,photo:g.a,motto:"Basketball isn't easy"},{name:"Giannis Antetokounmpo",age:27,photo:w.a,motto:"I wanna go to Warriors"},{name:"Jimmy Butler",age:31,photo:j.a,motto:"Almost Sweep Bucks"},{name:"Luka Doncic",age:21,photo:k.a,motto:"Dallas will win the championship"}].sort((function(e,a){return e.age<a.age?-1:1}))),a=Object(m.a)(e,1)[0];return r.a.createElement("div",{className:"vote-now"},r.a.createElement(i.a,null,r.a.createElement(u.a,{className:"justify-content-center mt-4"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Vote Now"))),r.a.createElement(u.a,{className:"mt-3 justify-content-center"},a.map((function(e,a){return r.a.createElement(p.a,{lg:"3",md:"4",sm:"6",className:"my-3",key:a},r.a.createElement(D,{candidate:e}))})))))},K=t(9),Q=t(151),X=t(152),ee=t(153),ae=t(154),te=function(){var e=Object(o.f)(),a=Object(n.useState)({name:"",username:"",email:"",age:""}),t=Object(m.a)(a,2),c=t[0],l=t[1];return r.a.createElement(i.a,{className:"edit-profile"},r.a.createElement(u.a,{className:"justify-content-center mt-4"},r.a.createElement(p.a,{lg:"10",md:"12"},r.a.createElement("h1",null,"Edit Profile"))),r.a.createElement(u.a,{className:"justify-content-center"},r.a.createElement(p.a,{lg:"10",md:"12"},r.a.createElement(Q.a,{className:"p-3",onSubmit:function(a){a.preventDefault(),e.push("/profile/abdul15irsyad")}},r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"name"},"Name"),r.a.createElement(ae.a,{type:"text",id:"name",placeholder:"John Doe",value:c.name,onChange:function(e){l(Object(K.a)(Object(K.a)({},c),{},{name:e.target.value}))}})),r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"username"},"Username"),r.a.createElement(ae.a,{type:"text",id:"username",placeholder:"johndoe8",value:c.username,onChange:function(e){l(Object(K.a)(Object(K.a)({},c),{},{username:e.target.value}))}})),r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"email"},"Email"),r.a.createElement(ae.a,{type:"email",id:"email",placeholder:"example@email.com",value:c.email,onChange:function(e){l(Object(K.a)(Object(K.a)({},c),{},{email:e.target.value}))}})),r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"age"},"Age"),r.a.createElement(ae.a,{type:"number",id:"age",placeholder:"Your Age",value:c.age,onChange:function(e){l(Object(K.a)(Object(K.a)({},c),{},{age:e.target.value}))}})),r.a.createElement("div",{className:"button-section d-flex justify-content-end"},r.a.createElement(R.a,{tag:s.b,to:"/profile/abdul15irsyad",className:"mr-1"},"Cancel"),r.a.createElement(R.a,{type:"submit",color:"primary",className:"px-4 ml-1"},"Save"))))))},ne=t(22),re=t.n(ne),ce=t(158),le=(t(126),function(){var e=Object(n.useState)({email:""}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),d=o[0],E=o[1];return Object(n.useEffect)((function(){}),[d]),r.a.createElement(i.a,{className:"forgot-password"},r.a.createElement(u.a,{className:"h-100 justify-content-center"},r.a.createElement(p.a,{md:"6",lg:"4"},r.a.createElement(Q.a,{className:"p-3",onSubmit:function(e){e.preventDefault(),document.activeElement.blur(),E(!1),re.a.post("/api/v1/auth/forgot-password",t).then((function(e){return e.data})).then((function(e){E({type:"success",message:e.message}),console.log(e.token)})).catch((function(e){E({type:"error",message:e.response.data.message})}))}},r.a.createElement("h2",{className:"text-center"},"Forgot Password"),r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"email"},"Your Email"),r.a.createElement(ae.a,{type:"text",name:"email",id:"email",placeholder:"example@email.com",value:t.email,onChange:function(e){c(Object(K.a)(Object(K.a)({},t),{},{email:e.target.value}))}}),r.a.createElement("div",{className:"forgot-password-info text-center px-2"},r.a.createElement("small",null,"We'll send a link to reset your password !"))),d&&r.a.createElement(ce.a,{color:"error"===d.type?"warning":"success",className:"text-center upper-first py-1"},d.message),r.a.createElement(R.a,{type:"submit",color:"primary",className:"btn-block mt-4",disabled:!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/.test(t.email)},"Forgot Password"),r.a.createElement("div",{className:"back-to-login-link mt-3"},r.a.createElement(s.b,{to:"/login",className:"text-secondary"},"Back to Login"))))))}),se=function(){return r.a.createElement(i.a,{className:"home"},r.a.createElement(u.a,{className:"justify-content-center mt-4"},r.a.createElement(p.a,{lg:"9"},r.a.createElement("h1",null,"Ngevote"),r.a.createElement("p",null,"\u2003\u2003Ngevote is an simple ",r.a.createElement("b",null,"online voting")," application developed by Irsyad Abdul using the MERN Stack (Mongo - Express - React - Node JS) as an exercise after learning from the Youtube channel, Medium, and others. ^_^"))),r.a.createElement(u.a,{className:"justify-content-center mt-34"},r.a.createElement(p.a,{lg:"3",md:"4",xs:"10"},r.a.createElement(R.a,{tag:s.b,to:"/vote-now",color:"primary",className:"btn-block"},"Vote Now"))))},oe=t(37),me=t.n(oe),ie=t(71),ue=(t(128),function(){var e=Object(o.f)(),a=Object(n.useState)({username:"",password:""}),t=Object(m.a)(a,2),c=t[0],l=t[1],d=Object(n.useState)(!1),E=Object(m.a)(d,2),f=E[0],g=E[1],b=function(){var a=Object(ie.a)(me.a.mark((function a(t){return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t.preventDefault(),document.activeElement.blur(),g(!1),re.a.post("/api/v1/auth",c).then((function(e){return e.data})).then((function(a){e.push("/")})).catch((function(e){g(e.response.data.message)}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){}),[f]),r.a.createElement(i.a,{className:"login"},r.a.createElement(u.a,{className:"h-100 justify-content-center"},r.a.createElement(p.a,{md:"6",lg:"4"},r.a.createElement(Q.a,{className:"p-3",onSubmit:b},r.a.createElement("h2",{className:"text-center"},"Login"),r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"username"},"Email or Username"),r.a.createElement(ae.a,{type:"text",id:"username",placeholder:"example@email.com",value:c.username,onChange:function(e){l(Object(K.a)(Object(K.a)({},c),{},{username:e.target.value}))}})),r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"password"},"Password"),r.a.createElement(ae.a,{type:"password",id:"password",placeholder:"********",value:c.password,onChange:function(e){l(Object(K.a)(Object(K.a)({},c),{},{password:e.target.value}))}})),f&&r.a.createElement(ce.a,{color:"warning",className:"text-center upper-first py-1"},f),r.a.createElement(R.a,{type:"submit",color:"primary",className:"btn-block mt-4",disabled:""===c.username||""===c.password},"Login"),r.a.createElement("div",{className:"forgot-password-link text-right pt-3"},r.a.createElement(s.b,{to:"/forgot-password",className:"text-secondary"},"Forgot Password?"))))))}),pe=(t(129),function(){var e=Object(o.h)().username,a=Object(n.useState)({name:"Irsyad Abdul Hamid D",username:e,email:"abdulirsyad15@gmail.com",age:22}),t=Object(m.a)(a,1)[0];return r.a.createElement("div",{className:"Profile"},r.a.createElement("div",{className:"top-profile"},r.a.createElement(i.a,{className:"pt-4 pb-5"},r.a.createElement(u.a,{className:"justify-content-center"},r.a.createElement(p.a,{md:"4",lg:"3",className:"pb-3"},r.a.createElement("div",{className:"image-profile px-4"},r.a.createElement(H,{src:t.image||E.a,alt:"profile"}))),r.a.createElement(p.a,{md:"8",className:"pb-3"},r.a.createElement("div",{className:"text-profile d-flex flex-column h-100 p-3"},r.a.createElement("h3",{className:"mb-0"},t.name),r.a.createElement("p",{className:"mb-3 text-secondary"},t.username," . ",t.age," years old"),r.a.createElement(R.a,{tag:s.b,to:"/profile/abdul15irsyad/edit",color:"primary",className:"btn-edit-profile mt-auto"},"Edit Profile")))))),r.a.createElement("div",{className:"detail-profile"},r.a.createElement(i.a,{className:"py-3"},r.a.createElement(u.a,null,r.a.createElement(p.a,{lg:"9"},r.a.createElement("div",{className:"achievement py-3"},r.a.createElement("div",{className:"title-detail rounded mb-2"},r.a.createElement("h5",{className:"mb-0"},"Achievement")),r.a.createElement("ul",null,r.a.createElement("li",null,"Lorem ipsum dolor sit amet."),r.a.createElement("li",null,"Lorem ipsum dolor sit amet."))),r.a.createElement("div",{className:"history py-3"},r.a.createElement("div",{className:"title-detail rounded mb-2"},r.a.createElement("h5",{className:"mb-0"},"History")),r.a.createElement("p",null,"\u2003\u2003Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt asperiores voluptates quos nihil ratione officiis molestias unde laborum, harum officia culpa eum ipsa blanditiis voluptate, nisi aspernatur fugiat mollitia.")))))))}),de=function(){return r.a.createElement(i.a,{className:"rules"},r.a.createElement(u.a,{className:"justify-content-center mt-4"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Rules"))))},Ee=function(){return r.a.createElement(i.a,{className:"settings"},r.a.createElement(u.a,{className:"justify-content-center mt-4"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Settings"))))},fe=(t(130),function(){return r.a.createElement("div",{className:"main-app"},r.a.createElement("div",{className:"header-wrapper sticky-top"},r.a.createElement(U,{title:"Ngevote",menus:[{label:"Vote Now",link:"/vote-now"},{label:"Rules",link:"/rules"}],user:{username:"abdulirsyad"}})),r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/profile/:username/edit",component:te}),r.a.createElement(o.a,{exact:!0,path:"/profile/:username",component:pe}),r.a.createElement(o.a,{exact:!0,path:"/rules",component:de}),r.a.createElement(o.a,{exact:!0,path:"/settings",component:Ee}),r.a.createElement(o.a,{exact:!0,path:"/vote-now",component:$}),r.a.createElement(o.a,{exact:!0,path:"/",component:se}))),r.a.createElement("div",{className:"footer-wrapper"},r.a.createElement(F,null)))}),ge=function(){return new URLSearchParams(Object(o.g)().search)},be=(t(131),function(){var e=ge().get("token");Object(n.useEffect)((function(){re.a.get("/api/v1/auth/check-token",{headers:{"x-auth-token":e}}).then((function(e){return l(!0)})).catch((function(e){l(!1),S({type:"error",message:e.response.data.message})}))}),[]);var a=Object(n.useState)(null),t=Object(m.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)({password:"",confirmPassword:""}),d=Object(m.a)(o,2),E=d[0],f=d[1],g=Object(n.useState)([{text:"8+ characters",isValid:!1},{text:"uppercase",isValid:!1},{text:"lowercase",isValid:!1},{text:"number",isValid:!1}]),b=Object(m.a)(g,2),h=b[0],v=b[1],N=Object(n.useState)([{text:"matched",isValid:!1}]),y=Object(m.a)(N,2),w=y[0],x=y[1],j=Object(n.useState)(!1),O=Object(m.a)(j,2),k=O[0],S=O[1];return Object(n.useEffect)((function(){var e=h.map((function(e){return"8+ characters"===e.text&&(e.isValid=E.password.length>=8),"uppercase"===e.text&&(e.isValid=/(?=.*[A-Z])/.test(E.password)),"lowercase"===e.text&&(e.isValid=/(?=.*[a-z])/.test(E.password)),"number"===e.text&&(e.isValid=/(?=.*[0-9])/.test(E.password)),e})),a=w.map((function(e){return"matched"===e.text&&(e.isValid=E.password===E.confirmPassword&&""!==E.confirmPassword),e}));v(e),x(a)}),[E]),null!=c&&(c?r.a.createElement(i.a,{className:"reset-password"},r.a.createElement(u.a,{className:"h-100 justify-content-center"},r.a.createElement(p.a,{md:"6",lg:"4"},r.a.createElement(Q.a,{className:"p-3",onSubmit:function(a){a.preventDefault(),document.activeElement.blur(),console.log("reset password:",E),re.a.post("/api/v1/auth/reset-password",E,{headers:{"x-auth-token":e}}).then((function(e){return e.data})).then((function(e){S({type:"success",message:e.message}),f({password:"",confirmPassword:""}),console.log(w)})).catch((function(e){S({type:"error",message:e.response.data.message})}))}},r.a.createElement("h2",{className:"text-center"},"Reset Password"),r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"password"},"Password"),r.a.createElement(ae.a,{type:"password",name:"password",id:"password",placeholder:"*********",value:E.password,onChange:function(e){return f(Object(K.a)(Object(K.a)({},E),{},{password:e.target.value}))}}),r.a.createElement("div",{className:"pil-text-wrapper mt-2"},h.map((function(e,a){return r.a.createElement(q,{text:e.text,isValid:e.isValid,key:a})})))),r.a.createElement(X.a,null,r.a.createElement(ee.a,{for:"confirm-password"},"Confirm Password"),r.a.createElement(ae.a,{type:"password",name:"confirm-password",id:"confirm-password",placeholder:"*********",value:E.confirmPassword,onChange:function(e){return f(Object(K.a)(Object(K.a)({},E),{},{confirmPassword:e.target.value}))}}),r.a.createElement("div",{className:"pil-text-wrapper mt-2"},w.map((function(e,a){return r.a.createElement(q,{text:e.text,isValid:e.isValid,key:a})})))),k&&r.a.createElement(ce.a,{color:"error"===k.type?"warning":"success",className:"text-center upper-first py-1"},k.message),r.a.createElement(R.a,{type:"submit",color:"primary",className:"btn-block mt-4",disabled:h.some((function(e){return!1===e.isValid}))||w.some((function(e){return!1===e.isValid}))},"Reset Password"),r.a.createElement("div",{className:"go-to-login-link text-center mt-3"},r.a.createElement(s.b,{to:"/login",className:"text-secondary"},"Go To Login")))))):r.a.createElement(i.a,{className:"invalid-token"},r.a.createElement(u.a,{className:"h-100 justify-content-center"},r.a.createElement(p.a,{md:"6",lg:"4",className:"align-self-center"},r.a.createElement("h1",{className:"text-center"},"Oooopss..."),r.a.createElement("div",{className:"image-invalid py-3 px-5"},r.a.createElement(H,{src:C.a,alt:"oops image",objectFit:"contain"})),r.a.createElement(ce.a,{color:"warning",className:"text-center upper-first"},"Your token was invalid, maybe because it's expired. Please request a new token"),r.a.createElement("div",{className:"go-to-login-link text-center mt-3"},r.a.createElement(s.b,{to:"/login",className:"text-secondary"},"Go to Login"))))))}),he=function(){return r.a.createElement(s.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/forgot-password",component:le}),r.a.createElement(o.a,{path:"/login",component:ue}),r.a.createElement(o.a,{path:"/reset-password",component:be}),r.a.createElement(o.a,{path:"/",component:fe})))};t(132),t(133);var ve=function(){return document.title="Ngevote",r.a.createElement(he,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(134);l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,a,t){e.exports=t.p+"static/media/default-image.cf89e8e6.png"},41:function(e,a,t){e.exports=t.p+"static/media/lebron-james.fdbac938.png"},42:function(e,a,t){e.exports=t.p+"static/media/stephen-curry.7b60ded7.png"},43:function(e,a,t){e.exports=t.p+"static/media/klay-thompson.555d7d42.png"},44:function(e,a,t){e.exports=t.p+"static/media/giannis-antetokounmpo.0dc941b0.png"},45:function(e,a,t){e.exports=t.p+"static/media/jimmy-butler.46be4b3d.png"},46:function(e,a,t){e.exports=t.p+"static/media/luka-doncic.efa546a9.png"},47:function(e,a,t){e.exports=t.p+"static/media/oooopss.c9a48e58.svg"},72:function(e,a,t){e.exports=t(135)},77:function(e,a,t){},78:function(e,a,t){},81:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.e661e79e.chunk.js.map