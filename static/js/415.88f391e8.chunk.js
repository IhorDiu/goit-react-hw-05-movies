"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{7372:function(n,t,e){e.d(t,{Ff:function(){return p},UK:function(){return u},_V:function(){return s}});var r,a,i,o=e(168),c=e(7691),u=c.ZP.li(r||(r=(0,o.Z)(["\n//   border: 1px solid black;\n  border-radius: 4px;\n  list-style-type: none;\n  flex-basis: calc(100% / 4 - 16px);\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n  transition: all 250ms ease-in-out;\n  :hover {\n    transform: scale(1.05);\n    box-shadow: inset 1px 1px 2px #FFFAF0,\n      inset -1px -1px 2px LightGrey;\n  }\n\n  > a {\n    text-decoration: none;\n    color: darkgrey;\n  }\n"]))),s=c.ZP.h3(a||(a=(0,o.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n  padding-left: 16px;\n"]))),p=c.ZP.p(i||(i=(0,o.Z)(["\nmargin-top: 0;\nmargin-bottom: 8px;\nmargin-left: 8px\ncolor: darkgrey;\npadding-left: 16px;\noverflow : hidden\n"])))},1797:function(n,t,e){e.d(t,{Z:function(){return p}});var r=e(1087),a=e(7689),i=e(919),o=e(7372),c=e(184),u=function(n){var t=n.id,e=n.title,u=n.backdrop_path,s=n.vote_average,p=n.release_date,f=(0,a.TH)(),l=new Date(p);return(0,c.jsx)(o.UK,{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:f},children:(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{width:"400",src:u?"https://image.tmdb.org/t/p/w400".concat(u):i,alt:e}),(0,c.jsx)(o._V,{children:e}),(0,c.jsxs)(o.Ff,{children:["Rating: ",s.toFixed(1),"/10"]}),(0,c.jsxs)(o.Ff,{children:["Release year: ",l.getFullYear()]})]})})},t)},s=e(1544),p=function(n){var t=n.movies;return(0,c.jsx)(s.W,{children:t.map((function(n){var t=n.id,e=n.title,r=n.backdrop_path,a=n.vote_average,i=n.release_date;return(0,c.jsx)(u,{id:t,title:e,backdrop_path:r,vote_average:a,release_date:i},t)}))})}},1544:function(n,t,e){e.d(t,{W:function(){return i}});var r,a=e(168),i=e(7691).ZP.ul(r||(r=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 275px);\n  \n  gap: 16px;\n\n"])))},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),i=e(4687),o=e.n(i),c=e(2791),u=e(4390),s=e(1797),p=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1];return(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Hg)();case 3:t=n.sent,i(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending on today"}),(0,p.jsx)(s.Z,{movies:e})]})}},4390:function(n,t,e){e.d(t,{Hg:function(){return s},TP:function(){return d},tx:function(){return m},z1:function(){return f},zv:function(){return x}});var r=e(5861),a=e(4687),i=e.n(a),o=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"651df2f834e523ae20eba08e8b55c0c2"}});function c(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(i().mark((function n(){var t,e,r,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=4,o.get(t,e);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("trending/movie/day"));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("search/movie?query=".concat(t)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("movie/".concat(t)));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("movie/".concat(t,"/credits")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c("movie/".concat(t,"/reviews")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},919:function(n,t,e){n.exports=e.p+"static/media/no_poster.6ab713fe2f654b26440f.jpg"}}]);
//# sourceMappingURL=415.88f391e8.chunk.js.map