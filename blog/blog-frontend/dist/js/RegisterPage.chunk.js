exports.ids=[3],exports.modules=Array(19).concat([function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(21);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";t.a={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]}},function(e,t,n){e.exports=n(15)},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(27);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r,a=n(23),c=n.n(a),o=n(12),u=n(21),i=n(20),s=n(11),b=Object(s.createAction)("loading/START_LOADING",(function(e){return e})),l=Object(s.createAction)("loading/FINISH_LOADING",(function(e){return e})),f=(Object(s.handleActions)((r={},Object(u.a)(r,"loading/START_LOADING",(function(e,t){return Object(i.a)(Object(i.a)({},e),{},Object(u.a)({},t.payload,!0))})),Object(u.a)(r,"loading/FINISH_LOADING",(function(e,t){return Object(i.a)(Object(i.a)({},e),{},Object(u.a)({},t.payload,!1))})),r),{}),function(e){return[e,"".concat(e,"_SUCCESS"),"".concat(e,"_FAILURE")]});function d(e,t){var n="".concat(e,"_SUCCESS"),r="".concat(e,"_FAILURE");return c.a.mark((function a(u){var i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(o.put)(b(e));case 2:return a.prev=2,a.next=5,Object(o.call)(t,u.payload);case 5:return i=a.sent,a.next=8,Object(o.put)({type:n,payload:i.data,meta:i});case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(2),a.next=14,Object(o.put)({type:r,payload:a.t0,error:!0});case 14:return a.next=16,Object(o.put)(l(e));case 16:case"end":return a.stop()}}),a,null,[[2,10]])}))}},function(e,t,n){"use strict";var r,a,c,o,u,i=n(20),s=n(19),b=(n(3),n(1)),l=n(10),f=n.n(l),d=n(22),j=n(0),O=Object(l.css)(r||(r=Object(s.a)(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n\n  background: ",";\n  &:hover {\n    background: ",";\n  }\n  ","\n\n  ","\n\n  &:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),d.a.gray[8],d.a.gray[6],(function(e){return e.fullWidth&&Object(l.css)(a||(a=Object(s.a)(["\n      padding-top: 0.75rem;\n      padding-bottom: 0.75rem;\n      width: 100%;\n      font-size: 1.125rem;\n    "])))}),(function(e){return e.cyan&&Object(l.css)(c||(c=Object(s.a)(["\n      background: ",";\n      &:hover {\n        background: ",";\n      }\n    "])),d.a.cyan[5],d.a.cyan[4])}),d.a.gray[3],d.a.gray[5]),p=f.a.button(o||(o=Object(s.a)(["\n  ","\n"])),O),m=f()(b.Link)(u||(u=Object(s.a)(["\n  ","\n"])),O);t.a=function(e){return e.to?Object(j.jsx)(m,Object(i.a)(Object(i.a)({},e),{},{cyan:e.cyan?1:0})):Object(j.jsx)(p,Object(i.a)({},e))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(28);function a(e,t){if(e){if("string"==typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u}));var r=n(4),a=function(e){var t=e.username,n=e.password;return r.a.post("/api/auth/login",{username:t,password:n})},c=function(e){var t=e.username,n=e.password;return r.a.post("/api/auth/register",{username:t,password:n})},o=function(){return r.a.get("/api/auth/check")},u=function(){return r.a.post("/api/auth/logout")}},function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return p}));var r,a=n(21),c=n(20),o=(n(23),n(24)),u=n(11),i=(n(12),n(29)),s=n(25),b=Object(s.a)("user/CHECK"),l=Object(o.a)(b,3),f=l[0],d=l[1],j=l[2],O=(Object(u.createAction)("user/TEMP_SET_USER",(function(e){return e})),Object(u.createAction)(f)),p=Object(u.createAction)("user/LOGOUT");Object(s.b)(f,i.a);Object(u.handleActions)((r={},Object(a.a)(r,"user/TEMP_SET_USER",(function(e,t){var n=t.payload;return Object(c.a)(Object(c.a)({},e),{},{user:n})})),Object(a.a)(r,d,(function(e,t){var n=t.payload;return Object(c.a)(Object(c.a)({},e),{},{user:n,checkError:null})})),Object(a.a)(r,j,(function(e,t){var n=t.payload;return Object(c.a)(Object(c.a)({},e),{},{user:null,checkError:n})})),Object(a.a)(r,"user/LOGOUT",(function(e){return Object(c.a)(Object(c.a)({},e),{},{user:null})})),r),{user:null,checkError:null})},,,,function(e,t,n){"use strict";var r,a,c=n(19),o=(n(3),n(10)),u=n.n(o),i=n(22),s=n(1),b=n(0),l=u.a.div(r||(r=Object(c.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  background: ",";\n  /* flex로 내부 내용 중앙 정렬*/\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"])),i.a.gray[2]),f=u.a.div(a||(a=Object(c.a)(["\n  .logo-area {\n    display: block;\n    padding-bottom: 2rem;\n    text-align: center;\n    font-weight: bold;\n    letter-spacing: 2px;\n\n    .prj-name {\n      color: black;\n      text-decoration: none;\n    }\n  }\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);\n  padding: 2rem;\n  width: 360px;\n  background: white;\n  border-radius: 2px;\n"])));t.a=function(e){var t=e.children;return Object(b.jsx)(l,{children:Object(b.jsxs)(f,{children:[Object(b.jsx)("div",{className:"logo-area",children:Object(b.jsx)(s.Link,{to:"/",className:"prj-name",children:"REACTERS"})}),t]})})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return x})),n.d(t,"d",(function(){return E})),n.d(t,"c",(function(){return A}));var r,a=n(21),c=n(20),o=(n(23),n(24)),u=n(11),i=n(16),s=n.n(i),b=(n(12),n(25)),l=n(29),f=Object(b.a)("auth/REGISTER"),d=Object(o.a)(f,3),j=d[0],O=d[1],p=d[2],m=Object(b.a)("auth/LOGIN"),g=Object(o.a)(m,3),h=g[0],y=g[1],v=g[2],w=Object(u.createAction)("auth/CHANGE_FIELD",(function(e){return{form:e.form,key:e.key,value:e.value}})),x=Object(u.createAction)("auth/INITIALIZE_FORM",(function(e){return e})),E=Object(u.createAction)(j,(function(e){return{username:e.username,password:e.password}})),A=Object(u.createAction)(h,(function(e){return{username:e.username,password:e.password}}));Object(b.b)(j,l.d),Object(b.b)(h,l.b);var S={register:{username:"",password:"",passwordConfirm:""},login:{username:"",password:""},auth:null,authError:null};Object(u.handleActions)((r={},Object(a.a)(r,"auth/CHANGE_FIELD",(function(e,t){var n=t.payload,r=n.form,a=n.key,c=n.value;return s()(e,(function(e){e[r][a]=c}))})),Object(a.a)(r,"auth/INITIALIZE_FORM",(function(e,t){var n,r=t.payload;return Object(c.a)(Object(c.a)({},e),{},(n={},Object(a.a)(n,r,S[r]),Object(a.a)(n,"authError",null),n))})),Object(a.a)(r,O,(function(e,t){var n=t.payload;return Object(c.a)(Object(c.a)({},e),{},{authError:null,auth:n})})),Object(a.a)(r,p,(function(e,t){var n=t.payload;return Object(c.a)(Object(c.a)({},e),{},{authError:n})})),Object(a.a)(r,y,(function(e,t){var n=t.payload;return Object(c.a)(Object(c.a)({},e),{},{authError:null,auth:n})})),Object(a.a)(r,v,(function(e,t){var n=t.payload;return Object(c.a)(Object(c.a)({},e),{},{authError:n})})),r),S)},function(e,t,n){"use strict";var r,a,c,o,u,i=n(19),s=(n(3),n(10)),b=n.n(s),l=n(1),f=n(22),d=n(26),j=n(0),O=b.a.div(r||(r=Object(i.a)(["\n  h3 {\n    margin: 0;\n    color: ",";\n    margin-bottom: 1rem;\n  }\n"])),f.a.gray[8]),p=b.a.input(a||(a=Object(i.a)(["\n  font-size: 1rem;\n  border: none;\n  border-bottom: 1px solid ",";\n  padding-bottom: 0.5rem;\n  outline: none;\n  width: 100%;\n  &:focus {\n    color: $oc-teal-7;\n    border-bottom: 1px solid ",";\n  }\n  & + & {\n    margin-top: 1rem;\n  }\n"])),f.a.gray[5],f.a.gray[7]),m=b.a.div(c||(c=Object(i.a)(["\n  margin-top: 2rem;\n  text-align: right;\n  a {\n    color: ",";\n    text-decoration: underline;\n    &:hover {\n      color: ",";\n    }\n  }\n"])),f.a.gray[6],f.a.gray[9]),g=b()(d.a)(o||(o=Object(i.a)(["\n  margin-top: 1rem;\n"]))),h={login:"로그인",register:"회원가입"},y=b.a.div(u||(u=Object(i.a)(["\n  color: red;\n  text-align: center;\n  font-size: 0.875rem;\n  margin-top: 1rem;\n"])));t.a=function(e){var t=e.type,n=e.form,r=e.onChange,a=e.onSubmit,c=e.error,o=h[t];return Object(j.jsxs)(O,{children:[Object(j.jsx)("h3",{children:o}),Object(j.jsxs)("form",{onSubmit:a,children:[Object(j.jsx)(p,{autoComplete:"username",name:"username",placeholder:"아이디",onChange:r,value:n.username}),Object(j.jsx)(p,{autoComplete:"new-password",name:"password",placeholder:"비밀번호",type:"password",onChange:r,value:n.password}),"register"===t&&Object(j.jsx)(p,{autoComplete:"new-password",name:"passwordConfirm",placeholder:"비밀번호 확인",type:"password",onChange:r,value:n.passwordConfirm}),c&&Object(j.jsx)(y,{children:c}),Object(j.jsx)(g,{cyan:!0,fullWidth:!0,style:{marginTop:"1rem"},children:o})]}),Object(j.jsx)(m,{children:"login"===t?Object(j.jsx)(l.Link,{to:"/register",children:"회원가입"}):Object(j.jsx)(l.Link,{to:"/login",children:"로그인"})})]})}},,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(34),c=n(24),o=n(13),u=n(35),i=n(30),s=n(1),b=n(36),l=n(0),f=Object(s.withRouter)((function(e){var t=e.history,n=Object(r.useState)(null),a=Object(c.a)(n,2),s=a[0],f=a[1],d=Object(o.useDispatch)(),j=Object(o.useSelector)((function(e){var t=e.auth,n=e.user;return{form:t.register,auth:t.auth,authError:t.authError,user:n.user}})),O=j.form,p=j.auth,m=j.authError,g=j.user;return Object(r.useEffect)((function(){d(Object(u.b)("register"))}),[d]),Object(r.useEffect)((function(){if(m)return 409===m.response.status?void f("이미 존재하는 계정명입니다."):void f("회원가입 실패");p&&(console.log("회원가입 성공"),console.log(p),d(Object(i.a)()))}),[p,m,d]),Object(r.useEffect)((function(){if(g){t.push("/");try{localStorage.setItem("user",JSON.stringify(g))}catch(e){console.log("LocalStorage is not working")}}}),[t,g]),Object(l.jsx)(b.a,{type:"register",form:O,onChange:function(e){var t=e.target,n=t.value,r=t.name;d(Object(u.a)({form:"register",key:r,value:n}))},onSubmit:function(e){e.preventDefault();var t=O.username,n=O.password,r=O.passwordConfirm;if(![t,n,r].includes(""))return n!==r?(f("비밀번호가 일치하지 않습니다."),d(Object(u.a)({form:"register",key:"password",value:""})),void d(Object(u.a)({form:"register",key:"passwordConfirm",value:""}))):void d(Object(u.d)({username:t,password:n}));f("빈 칸을 모두 입력하세요.")},error:s})}));t.default=function(){return Object(l.jsx)(a.a,{children:Object(l.jsx)(f,{})})}}]);