"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[351],{383:function(e,t,n){n.d(t,{VQ:function(){return l},WZ:function(){return p},cu:function(){return u},tS:function(){return d}});var r=n(861),a=n(757),c=n.n(a),i=n(243),o="7cac8f2b707803c3d0e6d2661b894935",s="https://api.themoviedb.org/3",u=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,u,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:1,r=t?"".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=").concat(n):"".concat(s,"/trending/all/day?api_key=").concat(o,"&page=").concat(n),e.next=4,i.Z.get(r);case 4:return a=e.sent,u=function(e){return e.filter((function(e){var t=e.poster_path,n=e.genre_ids,r=e.title,a=e.original_title;return t&&n&&(r||a)})).map((function(e){var t=e.id,n=e.title,r=e.original_title;return{id:t,title:n||r}}))},e.abrupt("return",u(a.data.results));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,u,l,p,d,h,v,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,a=r.genres,u=r.id,l=r.poster_path,p=r.release_date,d=void 0===p?"":p,h=r.title,v=r.vote_average,f=r.overview,e.abrupt("return",{id:u,poster_path:"".concat("https://image.tmdb.org/t/p/w500").concat(l),title:"".concat(h," (").concat(d.slice(0,4),")"),userScore:"".concat(Math.round(10*v),"%"),overview:f,genres:a.map((function(e){return e.name})).join(" ")});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",r.map((function(e){var t=e.id,n=e.name,r=e.profile_path;return{id:t,name:n,character:e.character,photo:r?"".concat("https://image.tmdb.org/t/p/w200").concat(r):null}})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(n));case 3:return r=e.sent,a=r.data.results,e.abrupt("return",a.map((function(e){return{id:e.id,author:e.author,content:e.content}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},351:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(439),a=n(791),c=n(87),i=n(128),o="GoBack_link__kIrHt",s=n(184);var u=function(e){var t=e.to,n=e.children;return(0,s.jsxs)(c.rU,{to:t,className:o,children:[(0,s.jsx)(i.siY,{size:"18"}),n]})},l=n(689),p=n(383),d=n(596),h=(n(462),n(809)),v="MovieDetails_wrapper__YMWLn",f="MovieDetails_poster__yO7gD",_="MovieDetails_wrapperAdditional__KIKDM",m="MovieDetails_text__RHcc4";var g=function(){var e=(0,l.UO)().movieId,t=(0,a.useState)({}),n=(0,r.Z)(t,2),i=n[0],o=n[1],g=(0,l.TH)();(0,a.useEffect)((function(){(0,p.VQ)(e).then((function(e){return o(e)})).catch((function(){return d.Am.error("We can't find any information about your film!")}))}),[e]);var x=i.poster_path,j=i.title,w=i.userScore,k=i.overview,b=i.genres;return(0,s.jsxs)("section",{children:[(0,s.jsx)(u,{to:g.state?g.state:"/movies",children:"Go back"}),(0,s.jsxs)("div",{className:v,children:[(0,s.jsx)("img",{className:f,src:x,alt:j}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:j}),(0,s.jsx)("p",{children:"User score: ".concat(w)}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{className:m,children:k}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)("p",{className:m,children:b})]})]}),(0,s.jsxs)("div",{className:_,children:[(0,s.jsx)("p",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)(h.Z,{}),children:(0,s.jsx)(l.j3,{})})]})]})}}}]);
//# sourceMappingURL=351.6fc761e2.chunk.js.map