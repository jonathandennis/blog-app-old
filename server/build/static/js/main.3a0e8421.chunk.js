(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{40:function(e,t,n){e.exports=n(72)},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){e.exports=n.p+"static/media/Lato-Regular.2d36b1a9.ttf"},71:function(e,t,n){e.exports=n.p+"static/media/Lato-Italic.7582e823.ttf"},72:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(19),l=n.n(o),u=n(7),s=n(13),i=n(38),m=n(39),d=n(1),p=n.n(d),f=n(2),v=n(18),b=n(26),E=n(12),g=n.n(E),h="/api/blogs",y=null,O={getAll:function(){return g.a.get(h).then((function(e){return e.data}))},create:function(){var e=Object(f.a)(p.a.mark((function e(t,n,a){var r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:y}},c={title:t,author:n,url:a,likes:0},e.next=4,g.a.post(h,c,r);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),setToken:function(e){y="bearer ".concat(e)},update:function(e,t){return g.a.put("".concat(h,"/").concat(e),t)},addComment:function(){var e=Object(f.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={comment:n},e.next=3,g.a.post("".concat(h,"/").concat(t,"/comments"),a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:y}},e.next=3,g.a.delete("".concat(h,"/").concat(t),n);case 3:return a=e.sent,e.next=6,a.data;case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error";return console.log("timeoutID: ",a),function(){var n=Object(f.a)(p.a.mark((function n(r){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:"NOTIFY",data:{message:e,type:t}}),a&&clearTimeout(a),a=setTimeout((function(){r({type:"CLEAR_NOTIFICATION"})}),5e3);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY":return t.data;case"CLEAR_NOTIFICATION":return null;default:return e}},N=function(e,t,n){return function(){var a=Object(f.a)(p.a.mark((function a(r){var c;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.create(e,t,n);case 3:c=a.sent,r({type:"NEW_BLOG",data:c}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r(w("Error adding blog, missing content!"));case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},j=function(e){var t=Object(v.a)(Object(v.a)({},e),{},{likes:e.likes+1});return function(){var n=Object(f.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.update(e.id,t);case 3:r=n.sent,a({type:"LIKE_BLOG",data:r}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),a(w("Error liking blog!"));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},x=function(e,t){return function(){var n=Object(f.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O.addComment(e,t);case 3:r=n.sent,a({type:"NEW_COMMENT",data:r,id:e}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),a(w("Error, Requires content!"));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",e),console.log("action now: ",t),t.type){case"INIT_BLOGS":return t.data;case"NEW_BLOG":return[].concat(Object(b.a)(e),[t.data]);case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data}));case"LIKE_BLOG":var n=t.data.data.id;return e.map((function(e){return e.id!==n?e:t.data.data}));case"NEW_COMMENT":var a=t.id,r=t.data;return e.map((function(e){return e.id!==a?e:Object(v.a)(Object(v.a)({},e),{},{comments:[].concat(Object(b.a)(e.comments),[r])})}));default:return e}},L=function(){var e=window.localStorage.getItem("loggedBlogappUser");return function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=JSON.parse(e),O.setToken(a.token),n({type:"SET_LOGGEDUSER",data:a});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_LOGGEDUSER":case"SET_LOGGEDUSER":case"SET_LOGGEDUSERNULL":return t.data;default:return e}},T=function(){return g.a.get("/api/users").then((function(e){return e.data}))},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;default:return e}},C=Object(s.combineReducers)({blogs:S,notifications:k,loggedUser:I,users:U}),G=Object(s.createStore)(C,Object(m.composeWithDevTools)(Object(s.applyMiddleware)(i.a))),_=n(17),B=n(4),R=function(e){var t=e.blog,n=e.loggedUser,a=Object(u.b)(),r=Object(B.f)(),o=function(e){if(window.confirm("Remove: ".concat(t.title," By: ").concat(t.author,"?")))try{a(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.remove(e);case 3:console.log("blog to delete: ",e),n({type:"DELETE_BLOG",data:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(w("Error deleting blog!"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e)),r.push("/"),a(w("".concat(t.title," by ").concat(t.author," was successfully deleted!"),"ok"))}catch(n){a(w("Error!"))}},l=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a(j(t)),a(w("Like added to: ".concat(t.title),"ok"))}catch(n){a(w("Error!"))}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(f.a)(p.a.mark((function e(n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault();try{r=n.target.comment.value,n.target.comment.value="",a(x(t.id,r)),a(w("Your comment was added successfully!","ok"))}catch(c){a(w("Error!"))}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?c.a.createElement("div",{className:"blogview-container"},c.a.createElement("div",{className:"blog-container"},c.a.createElement("div",{className:"blog-title"},c.a.createElement("h2",null,t.title,",\xa0\xa0",t.author)),c.a.createElement("div",{className:"blog-body"},c.a.createElement("div",{className:"body-1"},c.a.createElement("a",{href:t.url},t.url)),c.a.createElement("div",{className:"body-1"},t.likes,"\xa0Likes",c.a.createElement("button",{onClick:l,id:"like-button"},"like")),c.a.createElement("div",{className:"body-1"},"added by:\xa0",t.user.name))),c.a.createElement("div",{className:"comments-container"},c.a.createElement("div",{className:"comments-form"},c.a.createElement("form",{onSubmit:s},c.a.createElement("input",{name:"comment",id:"comment-input"}),c.a.createElement("button",{type:"submit",id:"comment-button"},"add comment"))),c.a.createElement("h5",{className:"comments-header"},"comments:"),c.a.createElement("ul",null,t.comments.map((function(e){return c.a.createElement("li",{key:e.id,className:"stripe-li comment-li"},e.comment)})))),function(){if(n.username===t.user.username)return c.a.createElement("button",{onClick:function(){return o(t.id)}},"Remove Blog")}()):null},D=n(11),A=function(e){var t=e.blogs;return c.a.createElement("div",null,c.a.createElement("ul",{className:"BlogList-ul"},t.sort((function(e,t){return t.likes-e.likes})).map((function(e){return c.a.createElement("li",{key:e.id,className:"BlogList-li stripe-li"},c.a.createElement(D.b,{to:"/".concat(e.id),className:"link"},e.title,",\xa0\xa0",e.author))}))))},J=function(){var e=Object(u.c)((function(e){return e.notifications}));return null===e?null:c.a.createElement("div",{className:"notification",style:{color:"ok"===e.type?"green":"red"}},e.message)},M=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),a=Object(_.a)(n,2),o=a[0],l=a[1],u={display:o?"none":""},s={display:o?"":"none"},i=function(){l(!o)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:i}})),c.a.createElement("div",null,c.a.createElement("div",{style:u},c.a.createElement("button",{onClick:i},e.buttonLabel)),c.a.createElement("div",{style:s},e.children,c.a.createElement("button",{onClick:i},"cancel")))}));M.displayName="Togglable";var W=M,z=function(){var e=Object(u.b)(),t=Object(r.useRef)(),n=function(){var n=Object(f.a)(p.a.mark((function n(a){var r,c,o;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a.preventDefault(),r=a.target.title.value,a.target.title.value="",c=a.target.author.value,a.target.author.value="",o=a.target.url.value,a.target.url.value="",t.current.toggleVisibility(),e(N(r,c,o)),e(w("A new blog:  '".concat(r,"' by: ").concat(c," has been added"),"ok"));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return c.a.createElement("div",{className:"blog-form"},c.a.createElement(W,{buttonLabel:"add new blog",buttonBorderRadius:5,ref:t},c.a.createElement("div",{className:"form-div"},c.a.createElement("h2",null,"Create new:"),c.a.createElement("form",{onSubmit:n},c.a.createElement("div",null,"Title: ",c.a.createElement("input",{id:"title",name:"title",type:"text"})),c.a.createElement("div",null,"Author: ",c.a.createElement("input",{id:"author",name:"author",type:"text"})),c.a.createElement("div",null,"Url: ",c.a.createElement("input",{id:"url",name:"url",type:"text"})),c.a.createElement("button",{type:"submit"},"create")))))},F=function(e){var t=e.handleSubmit,n=e.username,a=e.password,r=e.handleUsernameChange,o=e.handlePasswordChange;return c.a.createElement("div",{className:"login-form"},c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement("h2",null,"Log in to application:"),"username:",c.a.createElement("input",{id:"username",type:"text",value:n,name:"Username",onChange:r})),c.a.createElement("div",null,"password:",c.a.createElement("input",{id:"password",type:"password",value:a,name:"Password",onChange:o})),c.a.createElement("button",{id:"login-button",type:"submit"},"login")))},P=function(e){var t=e.users;return console.log("users in UserList: ",t),c.a.createElement("div",null,c.a.createElement("h2",{className:"users-header"},"Users:"),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"th"}),c.a.createElement("th",{className:"th",style:{fontSize:".94rem"}},"blogs created:"))),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement("tr",{key:e.id,className:"tr"},c.a.createElement("td",{className:"td"},c.a.createElement(D.b,{to:"/users/".concat(e.id),className:"link"},e.name)),c.a.createElement("td",{className:"td",style:{paddingLeft:"7rem"}},e.blogs.length))})))))},Y=function(e){var t=e.user;return t?c.a.createElement("div",null,c.a.createElement("h2",{className:"user-name"},t.name),c.a.createElement("h5",{style:{fontSize:".94rem"}},"added blogs:"),c.a.createElement("ul",null,t.blogs.map((function(e){return c.a.createElement("li",{key:e.id,className:"user-li stripe-li"},e.title)})))):null},H=function(){return c.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},c.a.createElement("br",null),c.a.createElement("em",null,"Blog app, Made by Jonathan Dennis for submission to the University of Helsinki Full Stack Open MOOC 2020"))},K={login:function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=(n(68),function(){var e=Object(r.useState)(""),t=Object(_.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),l=Object(_.a)(o,2),s=l[0],i=l[1],m=Object(u.c)((function(e){return e.blogs})),d=Object(u.c)((function(e){return e.loggedUser})),v=Object(u.c)((function(e){return e.users})),b=Object(u.b)(),E=Object(B.f)();Object(r.useEffect)((function(){b(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getAll();case 3:n=e.sent,t({type:"INIT_BLOGS",data:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(w("Error getting blogs!"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[b]),Object(r.useEffect)((function(){b(function(){var e=window.localStorage.getItem("loggedBlogappUser");return function(){var t=Object(f.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e&&(a=JSON.parse(e),O.setToken(a.token),n({type:"INIT_LOGGEDUSER",data:a}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}())}),[b]),Object(r.useEffect)((function(){b(function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[b]);var g=function(){var e=Object(f.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with",n,s),e.prev=2,e.next=5,K.login({username:n,password:s});case 5:r=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),O.setToken(r.token),b(L()),a(""),i(""),b(w("".concat(r.name," has been sucessfully logged in."),"ok")),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),b(w("Wrong username or password")),a(""),i("");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogappUser",JSON.stringify(d)),b(function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_LOGGEDUSERNULL",data:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E.push("/"),b(w("".concat(d.name," has been sucessfully logged out."),"ok"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=Object(B.g)("/:id"),k=y?m.find((function(e){return e.id===String(y.params.id)})):null,N=Object(B.g)("/users/:id"),j=N?v.find((function(e){return e.id===String(N.params.id)})):null;return null===d?c.a.createElement("body",{className:"body"},c.a.createElement("main",{className:"main"},c.a.createElement("h2",{className:"blog-app"},"<blog app>"),c.a.createElement(J,null),c.a.createElement(F,{username:n,password:s,handleUsernameChange:function(e){var t=e.target;return a(t.value)},handlePasswordChange:function(e){var t=e.target;return i(t.value)},handleSubmit:g}),c.a.createElement("footer",{className:"footer"},c.a.createElement(H,null)))):c.a.createElement("body",{className:"body"},c.a.createElement("header",null,c.a.createElement("nav",{className:"nav-bar"},c.a.createElement("div",{className:"nav-left"},c.a.createElement(D.b,{className:"link nav-link-1",to:"/"},"blogs"),c.a.createElement(D.b,{className:"link nav-link-2",to:"/users"},"users")),c.a.createElement("div",{className:"nav-right"},c.a.createElement("em",{id:"nav-user"},d.name," logged in "),c.a.createElement("button",{type:"submit",onClick:h,id:"nav-button"},"logout"))),c.a.createElement("h2",{className:"blog-app"},"<blog app>")),c.a.createElement("main",{className:"main"},c.a.createElement(J,null),c.a.createElement(B.c,null,c.a.createElement(B.a,{path:"/users/:id"},c.a.createElement(Y,{user:j})),c.a.createElement(B.a,{path:"/users"},c.a.createElement(P,{users:v})),c.a.createElement(B.a,{path:"/:id"},c.a.createElement(R,{blog:k,loggedUser:d})),c.a.createElement(B.a,{path:"/"},c.a.createElement(z,{loggedUser:d}),c.a.createElement(A,{blogs:m}))),c.a.createElement("footer",{className:"footer"},c.a.createElement(H,null))))});n(69),n(70),n(71);l.a.render(c.a.createElement(u.a,{store:G},c.a.createElement(D.a,null,c.a.createElement(V,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3a0e8421.chunk.js.map