"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{1797:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(1087),a=r(7689),c=r(919),u=r(184),i=function(e){var t=e.id,r=e.title,i=e.backdrop_path,s=e.vote_average,o=e.release_date,p=(0,a.TH)(),f=new Date(o);return(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"/movies/".concat(t),state:{from:p},children:(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{width:"400",src:i?"https://image.tmdb.org/t/p/w400".concat(i):c,alt:r}),(0,u.jsx)("h3",{children:r}),(0,u.jsxs)("p",{children:["Rating: ",s.toFixed(1),"/10"]}),(0,u.jsxs)("p",{children:["Release year: ",f.getFullYear()]})]})})},t)},s=function(e){var t=e.movies;return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,n=e.backdrop_path,a=e.vote_average,c=e.release_date;return(0,u.jsx)(i,{id:t,title:r,backdrop_path:n,vote_average:a,release_date:c},t)}))})}},5415:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),c=r(4687),u=r.n(c),i=r(2791),s=r(4390),o=r(1797),p=r(184);t.default=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Hg)();case 3:t=e.sent,c(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending on today"}),(0,p.jsx)(o.Z,{movies:r})]})}},4390:function(e,t,r){r.d(t,{Hg:function(){return o},TP:function(){return h},z1:function(){return f}});var n=r(5861),a=r(4687),c=r.n(a),u=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"651df2f834e523ae20eba08e8b55c0c2"}});function i(){return s.apply(this,arguments)}function s(){return s=(0,n.Z)(c().mark((function e(){var t,r,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",r=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,u.get(t,r);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i("trending/movie/day"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i("search/movie?query=".concat(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i("movie/".concat(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},919:function(e,t,r){e.exports=r.p+"static/media/no_poster.6ab713fe2f654b26440f.jpg"}}]);
//# sourceMappingURL=415.f74e76d1.chunk.js.map