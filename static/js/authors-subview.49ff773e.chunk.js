(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{18:function(e,t,n){e.exports={container:"GalleryMovie_container__3cbeg",movie_list:"GalleryMovie_movie_list__17slk",movie_item:"GalleryMovie_movie_item__20aOB",image:"GalleryMovie_image__1rg_2",link:"GalleryMovie_link__2OU38",searchForm:"GalleryMovie_searchForm__19ZMT",form_button:"GalleryMovie_form_button__1Qq50",button_label:"GalleryMovie_button_label__2LUb9",button_input:"GalleryMovie_button_input__3WzF2"}},19:function(e,t,n){e.exports={text:"MovieDetailsPage_text__LdC_x",text_overviews:"MovieDetailsPage_text_overviews__2JHnq",list:"MovieDetailsPage_list__2nAWh"}},20:function(e,t,n){e.exports={container:"Cast_container__3TdCx",list:"Cast_list__KqiS5",item:"Cast_item__1Tjsl",image:"Cast_image__3RsO7"}},22:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var c=n(2);function i(){return Object(c.jsx)("h1",{children:"404 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :"})}},23:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var c=n(5),i=n(0);var a={fetchMovie:function(){return fetch("".concat("https://api.themoviedb.org/3/","trending/all/week?api_key=").concat("6d4973a2d0c01fe46093180d1e3091a8")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "))}))}},r=n(4),o=n(18),s=n.n(o),l=n(2);function u(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(i.useEffect)((function(){a.fetchMovie().then((function(e){return o(e.results)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)("section",{className:s.a.container,children:n&&Object(l.jsx)("ul",{className:s.a.movie_list,children:n.map((function(e){return Object(l.jsxs)("li",{className:s.a.movie_item,children:[Object(l.jsx)("img",{className:s.a.image,src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:e.title,width:"200"}),Object(l.jsxs)(r.b,{className:s.a.link,id:e.id,to:"/movies".concat(e.id),children:[e.original_title," "]})]},e.id)}))})})}},24:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var c=n(5),i=n(0),a=n(4);var r={fetchSearchMovie:function(e){return fetch("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("6d4973a2d0c01fe46093180d1e3091a8","&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "))}))}},o=n(21),s=n(18),l=n.n(s),u=n(2);function j(){var e=Object(i.useState)(null),t=Object(c.a)(e,2),n=t[0],s=t[1],j=Object(i.useState)(""),m=Object(c.a)(j,2),h=m[0],f=m[1],b=Object(i.useState)(""),d=Object(c.a)(b,2),v=d[0],_=d[1],O=function(){f((function(){return""}))};return Object(i.useEffect)((function(){r.fetchSearchMovie(v).then((function(e){return s(e.results)})).catch((function(e){return console.log(e)}))}),[v]),Object(u.jsxs)("section",{className:l.a.container,children:[Object(u.jsxs)("form",{className:l.a.searchForm,onSubmit:function(e){e.preventDefault(),""!==h.trim()?(_(h),O()):Object(o.a)("Input name for search movies")},children:[Object(u.jsx)("button",{type:"submit",className:l.a.form_button,children:"Search"}),Object(u.jsx)("input",{className:l.a.button_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:h,onChange:function(e){var t=e.currentTarget.value.toLowerCase();f((function(){return t}))}})]}),n&&Object(u.jsx)("section",{className:l.a.container,children:Object(u.jsx)("ul",{className:l.a.movie_list,children:n.map((function(e){return Object(u.jsxs)("li",{className:l.a.movie_item,children:[Object(u.jsx)("img",{className:l.a.image,src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:e.original_title,width:"200"}),Object(u.jsxs)(a.b,{className:l.a.link,id:e.id,to:"/movies".concat(e.id),children:[e.original_title," "]})]},e.id)}))})})]})}},25:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var c=n(5),i=n(0),a=n(1),r=n(4);var o={fetchMovieId:function(e){return fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"?api_key=").concat("6d4973a2d0c01fe46093180d1e3091a8")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "))}))}},s=n(19),l=n.n(s),u=n(2),j=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,26))})),m=Object(i.lazy)((function(){return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,27))}));function h(){var e=Object(a.g)().movieId,t=Object(i.useState)(null),n=Object(c.a)(t,2),s=n[0],h=n[1];return Object(i.useEffect)((function(){o.fetchMovieId(e).then((function(e){return h(e)})).catch((function(e){return console.log(e)}))}),[e]),Object(u.jsxs)(u.Fragment,{children:[s&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:s.title}),Object(u.jsx)("img",{className:l.a.image,src:"https://image.tmdb.org/t/p/original/".concat(s.poster_path),alt:s.title,width:"200"}),Object(u.jsx)("p",{className:l.a.text_overviews,children:s.overview}),Object(u.jsxs)("p",{className:l.a.text,children:["Rating : ",s.vote_average]}),Object(u.jsxs)("ul",{className:l.a.list,children:["Genres: ",s.genres.map((function(e){return Object(u.jsx)("li",{className:l.a.text,children:e.name},e.id)}))]}),Object(u.jsxs)("ul",{className:l.a.list,children:["Countries: ",s.production_countries.map((function(e){return Object(u.jsx)("li",{className:l.a.text,children:e.name},e.id)}))]}),Object(u.jsx)(r.b,{to:"cast",children:"Cast"}),Object(u.jsx)(r.b,{to:"reviews",children:"Reviws"})]}),Object(u.jsx)(i.Suspense,{fallback:Object(u.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c ..."}),children:Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"cast",element:Object(u.jsx)(j,{})}),Object(u.jsx)(a.a,{path:"reviews",element:Object(u.jsx)(m,{})})]})})]})}},26:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var c=n(5),i=n(0),a=n(1);var r={fetchCastMovie:function(e){return fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"/credits?api_key=").concat("6d4973a2d0c01fe46093180d1e3091a8")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "))}))}},o=n(20),s=n.n(o),l=n(2);function u(){var e=Object(a.g)().movieId,t=Object(i.useState)(null),n=Object(c.a)(t,2),o=n[0],u=n[1];return Object(i.useEffect)((function(){r.fetchCastMovie(e).then((function(e){return u(e.cast)})).catch((function(e){return console.log(e)}))}),[e]),Object(l.jsx)("section",{className:s.a.container,children:o&&Object(l.jsx)("ul",{className:s.a.list,children:o.map((function(e){return Object(l.jsxs)("li",{className:s.a.item,children:[Object(l.jsx)("img",{className:s.a.image,src:"https://image.tmdb.org/t/p/original/".concat(e.profile_path),alt:e.name,width:"50"}),Object(l.jsx)("p",{className:s.a.text,children:e.name})]},e.id)}))})})}},27:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n(5),i=n(0),a=n(1);var r={fetchReviewsMovie:function(e){return fetch("".concat("https://api.themoviedb.org/3/","movie/").concat(e,"/reviews?api_key=").concat("6d4973a2d0c01fe46093180d1e3091a8","&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u0430 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c "))}))}},o=n(2);function s(){var e=Object(a.g)().movieId,t=Object(i.useState)(null),n=Object(c.a)(t,2),s=n[0],l=n[1];return Object(i.useEffect)((function(){r.fetchReviewsMovie(e).then((function(e){return l(e.results)})).catch((function(e){return console.log(e)}))}),[e]),Object(o.jsx)(o.Fragment,{children:s&&Object(o.jsx)("ul",{children:s.map((function(e){return Object(o.jsxs)("li",{children:[e.author,Object(o.jsx)("p",{children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=authors-subview.49ff773e.chunk.js.map