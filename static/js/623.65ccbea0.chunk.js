"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{25:function(n,e,t){t.d(e,{$w:function(){return l},Hg:function(){return i},Pg:function(){return p},Xj:function(){return f},q:function(){return s}});var r=t(861),o=t(757),c=t.n(o),a="https://api.themoviedb.org/3/",u="c25450473e1297d275a0ebc0c587a230",i=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"search/movie?api_key=").concat(u,"&page=1&query=").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},119:function(n,e,t){t.d(e,{s:function(){return d}});var r,o,c,a=t(689),u=t(168),i=t(444),s=t(87),p=i.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  margin: 20px 0 0 20px;\n  gap: 10px;\n"]))),l=i.ZP.li(o||(o=(0,u.Z)(["\n  display: inline-block;\n  width: 100%;\n"]))),f=(0,i.ZP)(s.OL)(c||(c=(0,u.Z)(["\n\n\n  display: inline-block;\n  padding: 5px 16px;\n  color: black;\n  text-decoration: none;\n  border-radius: 4px;\n  :hover,\n  :focus {\n    color: blue;\n    background-color: lightblue;\n  }\n"]))),x=t(184),d=function(n){var e=n.movies,t=(0,a.TH)();return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p,{children:e&&e.map((function(n){return(0,x.jsx)(l,{children:(0,x.jsx)(f,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})})}},623:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,o,c,a=t(861),u=t(439),i=t(757),s=t.n(i),p=t(791),l=t(168),f=t(444),x=f.ZP.form(r||(r=(0,l.Z)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n"]))),d=f.ZP.input(o||(o=(0,l.Z)(["\n    border: 0;\n    border-radius: 4px;\n    background: lightblue;\n    outline: none;\n    height: 46px;\n    width: 400px;\n    padding: 0px 10px;\n    color: rgb(0, 0, 0);\n    font-size: 16px;\n    margin-right: 15px;\n"]))),h=f.ZP.button(c||(c=(0,l.Z)(["\n    display: inline-block;\n    padding: 8px 16px;\n    border-radius: 4px;\n    margin-bottom: 10px;\n    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);\n    text-decoration: none;\n    text-align: center;\n    height: 46px;\n    width: 100px;\n    font-size: 18px;\n    font-weight: 500;\n    color: black;\n    :hover,\n    :focus {\n        color: blue;\n        background-color: lightblue;\n    }\n"]))),m=t(184),v=function(n){var e=n.onSubmit,t=(0,p.useState)([]),r=(0,u.Z)(t,2),o=r[0],c=r[1];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(x,{onSubmit:function(n){n.preventDefault(),e(o)},children:[(0,m.jsx)(d,{type:"text",name:"query",placeholder:"Put movie name",autoFocus:!0,autoComplete:"off",onChange:function(n){c(n.target.value)},value:o}),(0,m.jsx)(h,{children:"Search"})]})})},g=t(119),b=t(25),k=t(87),w=t(596),y=function(){var n=(0,p.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,k.lr)(),c=(0,u.Z)(o,2),i=c[0],l=c[1],f=i.get("query");(0,p.useEffect)((function(){if(f)if(""!==f.trim()){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.q)(f);case 3:e=n.sent,r(e.results),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),w.Am.error("Something went wrong :(. Try again."),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}else w.Am.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442 \u0434\u043b\u044f \u043f\u043e\u0448\u0443\u043a\u0443")}),[f]),console.log(f);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v,{onSubmit:function(n){l({query:n})}}),(0,m.jsx)(g.s,{movies:t}),(0,m.jsx)(w.Ix,{autoClose:3e3,theme:"colored"})]})}}}]);
//# sourceMappingURL=623.65ccbea0.chunk.js.map