(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),m=(t(64),t(12)),o=t(11),s=t(13),i=t(109),u=t(117),p=t(118),d=(t(37),t(38)),E=t.n(d),g=t(39),f=t.n(g),b=t(40),h=t.n(b),N=t(41),v=t.n(N),y=t(42),w=t.n(y),x=t(43),j=t.n(x),O=t(104),k=t(105),S=t(106),C=t(107),P=t(55),V=(t(65),function(e){var a=e.candidate,t=a.name.split(" ");return l.a.createElement(O.a,{className:"candidate-card h-100"},l.a.createElement(k.a,{top:!0,width:"100%",src:a.photo,alt:"Card image cap"}),l.a.createElement(S.a,{className:"text-center"},l.a.createElement("h4",{className:"mb-0"},t[0]),l.a.createElement("h5",null,t[1]),l.a.createElement("span",{className:"text-secondary"},a.age," years old"),l.a.createElement(C.a,null,l.a.createElement("i",null,'"',a.motto,'"'))),l.a.createElement("div",{className:"footer"},l.a.createElement(P.a,{color:"info",className:"btn-vote"},"Detail"),l.a.createElement(P.a,{color:"success",className:"w-50 ml-1 btn-vote"},"Vote")))}),D=function(){var e=(new Date).getFullYear();return l.a.createElement("div",{className:"Footer"},l.a.createElement("p",{className:"text-center mb-0 py-3"},l.a.createElement("span",null,"Copy Right \xa9 ",e," "),l.a.createElement("a",{href:"https://github.com/abdul15irsyad",className:"text-dark",target:"_blank",rel:"noopener noreferrer"},"Irsyad Abdul")))},L=t(108),R=t(110),A=t(111),B=t(112),I=t(113),J=t(114),F=t(115),T=t(123),Y=t(124),M=t(125),W=t(116),G=(t(68),function(e){var a=e.title,t=e.menus,r=e.user,c=Object(n.useState)(!1),o=Object(s.a)(c,2),u=o[0],p=o[1];return l.a.createElement(L.a,{color:"light",light:!0,expand:"md",className:"shadow"},l.a.createElement(i.a,null,l.a.createElement(R.a,{tag:m.b,to:"/"},a),l.a.createElement(A.a,{onClick:function(){return p(!u)}}),l.a.createElement(B.a,{isOpen:u,navbar:!0},l.a.createElement(I.a,{className:"mx-auto",navbar:!0},t.map((function(e,a){return l.a.createElement(J.a,{key:a,className:"mx-1"},l.a.createElement(F.a,{tag:m.b,to:e.link},e.label))}))),l.a.createElement(I.a,{navbar:!0},l.a.createElement(T.a,{nav:!0,inNavbar:!0},l.a.createElement(Y.a,{nav:!0},r.username),l.a.createElement(M.a,{right:!0},l.a.createElement(W.a,{tag:m.b,to:"/profile/abdul15irsyad"},"Profile"),l.a.createElement(W.a,{tag:m.b,to:"/settings"},"Settings"),l.a.createElement(W.a,{divider:!0}),l.a.createElement(W.a,{tag:m.b,to:"/login"},"Log Out")))))))}),H=(t(94),function(e){var a=e.text,t=e.isValid,n={backgroundColor:(t=t||!1)?"rgb(198, 255, 184)":"rgb(0,0,0,.03)",color:t?"rgba(0,0,0, .8)":"rgba(0,0,0, .3)"};return l.a.createElement("div",{className:"pil-text text-capitalize mr-1 mb-1",style:n},a)}),U=(t(95),function(e){var a=e.src,t=e.alt,n={paddingTop:e.aspectRatio||"100%",borderRadius:e.borderRadius||"50%"};return l.a.createElement("div",{className:"responsive-image bg-light",style:n},l.a.createElement("img",{src:a,alt:t}))}),_=function(){var e=Object(n.useState)([{name:"Klay Thompson",age:29,photo:h.a,motto:"60 points? easy..."},{name:"Stephen Curry",age:32,photo:f.a,motto:"I can do anything"},{name:"Lebron James",age:34,photo:E.a,motto:"Basketball isn't easy"},{name:"Giannis Antetokounmpo",age:27,photo:v.a,motto:"I wanna go to Warriors"},{name:"Jimmy Butler",age:31,photo:w.a,motto:"Almost Sweep Bucks"},{name:"Luka Doncic",age:21,photo:j.a,motto:"Dallas will win the championship"}].sort((function(e,a){return e.age<a.age?-1:1}))),a=Object(s.a)(e,1)[0];return l.a.createElement("div",{className:"vote-now"},l.a.createElement(i.a,null,l.a.createElement(u.a,{className:"justify-content-center mt-4"},l.a.createElement(p.a,null,l.a.createElement("h1",null,"Vote Now"))),l.a.createElement(u.a,{className:"mt-3 justify-content-center"},a.map((function(e,a){return l.a.createElement(p.a,{lg:"3",md:"4",sm:"6",className:"my-3",key:a},l.a.createElement(V,{candidate:e}))})))))},q=t(8),z=t(119),K=t(120),$=t(121),Q=t(122),X=function(){var e=Object(o.f)(),a=Object(n.useState)({name:"",username:"",email:"",age:""}),t=Object(s.a)(a,2),r=t[0],c=t[1];return l.a.createElement(i.a,{className:"edit-profile"},l.a.createElement(u.a,{className:"justify-content-center mt-4"},l.a.createElement(p.a,{lg:"10",md:"12"},l.a.createElement("h1",null,"Edit Profile"))),l.a.createElement(u.a,{className:"justify-content-center"},l.a.createElement(p.a,{lg:"10",md:"12"},l.a.createElement(z.a,{className:"p-3",onSubmit:function(a){a.preventDefault(),e.push("/profile/abdul15irsyad")}},l.a.createElement(K.a,null,l.a.createElement($.a,{for:"name"},"Name"),l.a.createElement(Q.a,{type:"text",id:"name",placeholder:"eg: John Doe",value:r.name,onChange:function(e){c(Object(q.a)(Object(q.a)({},r),{},{name:e.target.value}))}})),l.a.createElement(K.a,null,l.a.createElement($.a,{for:"username"},"Username"),l.a.createElement(Q.a,{type:"text",id:"username",placeholder:"eg: example@email.com",value:r.username,onChange:function(e){c(Object(q.a)(Object(q.a)({},r),{},{username:e.target.value}))}})),l.a.createElement(K.a,null,l.a.createElement($.a,{for:"email"},"Email"),l.a.createElement(Q.a,{type:"email",id:"email",placeholder:"eg: johndoe8",value:r.email,onChange:function(e){c(Object(q.a)(Object(q.a)({},r),{},{email:e.target.value}))}})),l.a.createElement(K.a,null,l.a.createElement($.a,{for:"age"},"Age"),l.a.createElement(Q.a,{type:"number",id:"age",placeholder:"Your Age",value:r.age,onChange:function(e){c(Object(q.a)(Object(q.a)({},r),{},{age:e.target.value}))}})),l.a.createElement("div",{className:"button-section d-flex justify-content-end"},l.a.createElement(P.a,{tag:m.b,to:"/profile/abdul15irsyad",className:"mr-1"},"Cancel"),l.a.createElement(P.a,{type:"submit",color:"primary",className:"px-4 ml-1"},"Save"))))))},Z=(t(96),function(){var e=Object(n.useState)({email:""}),a=Object(s.a)(e,2),t=a[0],r=a[1];return l.a.createElement(i.a,{className:"forgot-password"},l.a.createElement(u.a,{className:"h-100 justify-content-center"},l.a.createElement(p.a,{md:"6",lg:"4"},l.a.createElement(z.a,{className:"p-3",onSubmit:function(e){e.preventDefault()}},l.a.createElement("h2",{className:"text-center"},"Forgot Password"),l.a.createElement(K.a,null,l.a.createElement($.a,{for:"email"},"Your Email"),l.a.createElement(Q.a,{type:"text",name:"email",id:"email",placeholder:"eg: example@email.com",value:t.email,onChange:function(e){r(Object(q.a)(Object(q.a)({},t),{},{email:e.target.value}))}})),l.a.createElement(P.a,{type:"submit",color:"primary",className:"btn-block mt-4"},"Check Email"),l.a.createElement("div",{className:"back-to-login-link text-center mt-3"},l.a.createElement(m.b,{to:"/login",className:"text-secondary"},"Back To Login"))))))}),ee=function(){return l.a.createElement(i.a,{className:"home"},l.a.createElement(u.a,{className:"justify-content-center mt-4"},l.a.createElement(p.a,{lg:"9"},l.a.createElement("h1",null,"Ngevote"),l.a.createElement("p",null,"\u2003\u2003Ngevote is an simple ",l.a.createElement("b",null,"online voting")," application developed by Irsyad Abdul using the MERN Stack (Mongo - Express - React - Node JS) as an exercise after learning from the Youtube channel, Medium, and others. ^_^"))),l.a.createElement(u.a,{className:"justify-content-center mt-34"},l.a.createElement(p.a,{lg:"3",md:"4",xs:"10"},l.a.createElement(P.a,{tag:m.b,to:"/vote-now",color:"primary",className:"btn-block"},"Vote Now"))))},ae=(t(97),function(){var e=Object(o.f)(),a=Object(n.useState)({username:"",password:""}),t=Object(s.a)(a,2),r=t[0],c=t[1];return l.a.createElement(i.a,{className:"login"},l.a.createElement(u.a,{className:"h-100 justify-content-center"},l.a.createElement(p.a,{md:"6",lg:"4"},l.a.createElement(z.a,{className:"p-3",onSubmit:function(a){a.preventDefault(),e.push("/")}},l.a.createElement("h2",{className:"text-center"},"Login"),l.a.createElement(K.a,null,l.a.createElement($.a,{for:"username"},"Username"),l.a.createElement(Q.a,{type:"text",id:"username",placeholder:"eg: johndoe98",value:r.username,onChange:function(e){c(Object(q.a)(Object(q.a)({},r),{},{username:e.target.value}))}})),l.a.createElement(K.a,null,l.a.createElement($.a,{for:"password"},"Password"),l.a.createElement(Q.a,{type:"password",id:"password",placeholder:"********",value:r.password,onChange:function(e){c(Object(q.a)(Object(q.a)({},r),{},{password:e.target.value}))}})),l.a.createElement(P.a,{type:"submit",color:"primary",className:"btn-block mt-4"},"Login"),l.a.createElement("div",{className:"forgot-password-link text-center pt-3"},l.a.createElement(m.b,{to:"/forgot-password",className:"text-secondary"},"Forgot Password?"))))))}),te=(t(98),function(){var e=Object(o.g)().username,a=Object(n.useState)({name:"Irsyad Abdul Hamid D",username:e,email:"abdulirsyad15@gmail.com",age:22}),t=Object(s.a)(a,1)[0];return l.a.createElement("div",{className:"Profile"},l.a.createElement("div",{className:"top-profile"},l.a.createElement(i.a,{className:"pt-4 pb-5"},l.a.createElement(u.a,{className:"justify-content-center"},l.a.createElement(p.a,{md:"4",lg:"3",className:"pb-3"},l.a.createElement("div",{className:"image-profile px-4"},l.a.createElement(U,{src:t.image||E.a,alt:"profile"}))),l.a.createElement(p.a,{md:"8",className:"pb-3"},l.a.createElement("div",{className:"text-profile d-flex flex-column h-100 p-3"},l.a.createElement("h3",{className:"mb-0"},t.name),l.a.createElement("p",{className:"mb-3 text-secondary"},t.username," . ",t.age," years old"),l.a.createElement(P.a,{tag:m.b,to:"/profile/abdul15irsyad/edit",color:"primary",className:"btn-edit-profile mt-auto"},"Edit Profile")))))),l.a.createElement("div",{className:"detail-profile"},l.a.createElement(i.a,{className:"py-3"},l.a.createElement(u.a,null,l.a.createElement(p.a,{lg:"9"},l.a.createElement("div",{className:"achievement py-3"},l.a.createElement("div",{className:"title-detail rounded mb-2"},l.a.createElement("h5",{className:"mb-0"},"Achievement")),l.a.createElement("ul",null,l.a.createElement("li",null,"Lorem ipsum dolor sit amet."),l.a.createElement("li",null,"Lorem ipsum dolor sit amet."))),l.a.createElement("div",{className:"history py-3"},l.a.createElement("div",{className:"title-detail rounded mb-2"},l.a.createElement("h5",{className:"mb-0"},"History")),l.a.createElement("p",null,"\u2003\u2003Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt asperiores voluptates quos nihil ratione officiis molestias unde laborum, harum officia culpa eum ipsa blanditiis voluptate, nisi aspernatur fugiat mollitia.")))))))}),ne=function(){return l.a.createElement(i.a,{className:"rules"},l.a.createElement(u.a,{className:"justify-content-center mt-4"},l.a.createElement(p.a,null,l.a.createElement("h1",null,"Rules"))))},le=function(){return l.a.createElement(i.a,{className:"settings"},l.a.createElement(u.a,{className:"justify-content-center mt-4"},l.a.createElement(p.a,null,l.a.createElement("h1",null,"Settings"))))},re=(t(99),function(){return l.a.createElement("div",{className:"main-app"},l.a.createElement("div",{className:"header-wrapper sticky-top"},l.a.createElement(G,{title:"Ngevote",menus:[{label:"Vote Now",link:"/vote-now"},{label:"Rules",link:"/rules"}],user:{username:"abdulirsyad"}})),l.a.createElement("div",{className:"content-wrapper"},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/profile/:username/edit",component:X}),l.a.createElement(o.a,{exact:!0,path:"/profile/:username",component:te}),l.a.createElement(o.a,{exact:!0,path:"/rules",component:ne}),l.a.createElement(o.a,{exact:!0,path:"/settings",component:le}),l.a.createElement(o.a,{exact:!0,path:"/vote-now",component:_}),l.a.createElement(o.a,{exact:!0,path:"/",component:ee}))),l.a.createElement("div",{className:"footer-wrapper"},l.a.createElement(D,null)))}),ce=(t(100),function(){var e=Object(n.useState)([{text:"8 characters",isValid:!1},{text:"uppercase",isValid:!1},{text:"lowercase",isValid:!1},{text:"number",isValid:!1}]),a=Object(s.a)(e,1)[0],t=Object(n.useState)({password:"",confirmPassword:""}),r=Object(s.a)(t,2),c=r[0],o=r[1];return l.a.createElement(i.a,{className:"reset-password"},l.a.createElement(u.a,{className:"h-100 justify-content-center"},l.a.createElement(p.a,{md:"6",lg:"4"},l.a.createElement(z.a,{className:"p-3",onSubmit:function(e){e.preventDefault(),console.log("reset password:",c)}},l.a.createElement("h2",{className:"text-center"},"Reset Password"),l.a.createElement(K.a,null,l.a.createElement($.a,{for:"password"},"Password"),l.a.createElement(Q.a,{type:"password",name:"password",id:"password",placeholder:"*********",value:c.password,onChange:function(e){return o(Object(q.a)(Object(q.a)({},c),{},{password:e.target.value}))}}),l.a.createElement("div",{className:"pil-text-wrapper mt-2"},a.map((function(e,a){return l.a.createElement(H,{text:e.text,isValid:e.isValid,key:a})})))),l.a.createElement(K.a,null,l.a.createElement($.a,{for:"confirm-password"},"Confirm Password"),l.a.createElement(Q.a,{type:"password",name:"confirm-password",id:"confirm-password",placeholder:"*********",value:c.confirmPassword,onChange:function(e){return o(Object(q.a)(Object(q.a)({},c),{},{confirmPassword:e.target.value}))}})),l.a.createElement(K.a,null,l.a.createElement(Q.a,{type:"hidden",name:"token",id:"token"})),l.a.createElement(P.a,{type:"submit",color:"primary",className:"btn-block mt-4"},"Reset Password"),l.a.createElement("div",{className:"go-to-login-link text-center mt-3"},l.a.createElement(m.b,{to:"/login",className:"text-secondary"},"Go To Login"))))))}),me=function(){return l.a.createElement(m.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/forgot-password",component:Z}),l.a.createElement(o.a,{path:"/login",component:ae}),l.a.createElement(o.a,{path:"/reset-password",component:ce}),l.a.createElement(o.a,{path:"/",component:re})))};t(101);var oe=function(){return document.title="Ngevote",l.a.createElement(me,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(102);c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,a,t){e.exports=t.p+"static/media/default-image.cf89e8e6.png"},38:function(e,a,t){e.exports=t.p+"static/media/lebron-james.fdbac938.png"},39:function(e,a,t){e.exports=t.p+"static/media/stephen-curry.7b60ded7.png"},40:function(e,a,t){e.exports=t.p+"static/media/klay-thompson.555d7d42.png"},41:function(e,a,t){e.exports=t.p+"static/media/giannis-antetokounmpo.0dc941b0.png"},42:function(e,a,t){e.exports=t.p+"static/media/jimmy-butler.46be4b3d.png"},43:function(e,a,t){e.exports=t.p+"static/media/luka-doncic.efa546a9.png"},59:function(e,a,t){e.exports=t(103)},64:function(e,a,t){},65:function(e,a,t){},68:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.398de38f.chunk.js.map