(function(){"use strict";var t={5438:function(t,e,a){var s=a(144),i=function(){var t=this,e=t._self._c;return e("div",[e("router-view")],1)},r=[],n=a(629),o={name:"App",computed:{...(0,n.Se)(["isMobileSize"])},mounted(){this.$store.commit("SET_VW",document.documentElement.clientWidth),window.addEventListener("resize",(()=>{this.$store.commit("SET_VW",document.documentElement.clientWidth)}))}},l=o,c=a(1001),d=(0,c.Z)(l,i,r,!1,null,null,null),u=d.exports;s.ZP.use(n.ZP);const v=1024;var h=new n.ZP.Store({state:{vw:0},getters:{isMobileSize(t){return!t.vw||t.vw<=v}},mutations:{SET_VW(t,e){t.vw=e}},actions:{},modules:{}}),p=(a(8877),a(7398)),g=a.n(p),m=a(8345),_=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container-fluid mb-5 px-0"},[e("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-bs-ride":"carousel"}},[e("div",{staticClass:"carousel-indicators"},t._l(t.BDList,(function(t,a){return e("button",{key:a,class:0===a?"active":"",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":a,"aria-current":"true"}})})),0),e("div",{staticClass:"carousel-inner"},t._l(t.BDList,(function(a,s){return e("div",{key:s,staticClass:"carousel-item",class:0===s?"active":""},[e("div",{staticClass:"d-block w-100",style:{backgroundImage:t.isMobileSize?"url(https://image.tmdb.org/t/p/w500"+a.poster_path+")":"url(https://image.tmdb.org/t/p/original"+a.backdrop_path+")",backgroundSize:"cover",backgroundPositon:"center",paddingBottom:t.isMobileSize?"600px":"800px"}})])})),0),t._m(0),t._m(1)])]),e("div",{staticClass:"container"},[e("LoadingActive",{attrs:{Loading:t.isLoading}}),e("div",{staticClass:"row"},[t.isMobileSize?e("div",{staticClass:"col-md-3 mb-5 mb-md-0"},[e("div",{staticClass:"accordion",attrs:{id:"annualMoviesFilter"}},[e("div",{staticClass:"accordion-item"},[t._m(2),e("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-bs-parent":"#annualMoviesFilter"}},[e("div",{staticClass:"accordion-body"},[e("AnnualFilter",{on:{searchList:t.searchList,cleanFilter:t.cleanFilter}})],1)])])])]):e("div",{staticClass:"col-md-3 mb-5 mb-md-0"},[e("AnnualFilter",{on:{searchList:t.searchList,cleanFilter:t.cleanFilter}})],1),e("div",{staticClass:"col-md-9 col-12"},[e("h3",{staticClass:"mb-3"},[t._v("年度影片")]),e("div",{staticClass:"row"},t._l(t.moviesList,(function(a,s){return e("div",{key:s,staticClass:"col-md-3 col-12 mb-3"},[e("div",{staticClass:"card h-100"},[e("div",{staticClass:"movie_img"},[e("div",{staticClass:"movie_vote_average"},[t._v(t._s(t._f("vote")(a.vote_average)))]),e("img",{staticClass:"card-img-top",attrs:{src:[a.poster_path?"https://image.tmdb.org/t/p/w500"+a.poster_path:t.emptyPic1],alt:"demo_img"}})]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"card-title"},[t._v(t._s(a.original_title))])]),e("div",{staticClass:"card-footer"},[e("button",{staticClass:"btn btn-primary more_btn",class:{disabled:!a.overview},attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#moviesModal"},on:{click:function(e){return t.openDetail(a)}}},[t._v(" "+t._s(a.overview?"詳細資訊":"無資料內容")+" ")])])])])})),0),e("PaginationSelector",{staticClass:"my-5",attrs:{totalPages:t.totalResult,isResetPagination:t.isResetPagination},on:{change:t.changePage,jumpToPage:t.changePage,goPre:t.changePage,goNext:t.changePage}})],1)]),e("MoviesModal")],1),e("div",{staticClass:"footer_bar bar mt-5"})])},b=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"visually-hidden"},[t._v("Previous")])])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"visually-hidden"},[t._v("Next")])])},function(){var t=this,e=t._self._c;return e("h2",{staticClass:"accordion-header",attrs:{id:"headingOne"}},[e("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v(" 年度好片條件篩選 ")])])}],f=(a(7658),a(594));const y=f.Z.create({baseURL:"https://api.themoviedb.org/3"});async function C(){const t=(new Date).getFullYear(),e=`/discover/movie?api_key=23efab36e26c5f7cfd28a1b288c6b6bc&region=tw&sort_by=popularity.desc&include_adult=false&include_video=true&primary_release_year=${t}&with_watch_monetization_types=flatrate`;return y.get(e)}async function P(t){const e={year:""+(t.year?`&primary_release_year=${t.year}`:""),page:`&page=${t.page}`,sort:""+(t.sort?`&sort_by=${t.sort}`:"")};console.log("filter",e);const a=`/discover/movie?api_key=23efab36e26c5f7cfd28a1b288c6b6bc&region=tw&include_adult=false&include_video=true&with_watch_monetization_types=flatrate${e.year}${e.sort}${e.page}`;return y.get(a)}async function L(t){const e={year:""+(t.year?`&primary_release_year=${t.year}`:""),sort:""+(t.sort?`&sort_by=${t.sort}`:""),page:`&page=${t.page}`},a=`/discover/movie?api_key=23efab36e26c5f7cfd28a1b288c6b6bc&region=tw&include_adult=false&include_video=true&with_watch_monetization_types=flatrate${e.sort}${e.year}${e.page}`;return y.get(a)}async function w(t){const e=`/movie/${t.id}/images?api_key=23efab36e26c5f7cfd28a1b288c6b6bc`;return y.get(e)}async function x(){const t="/movie/popular?api_key=23efab36e26c5f7cfd28a1b288c6b6bc&page=1";return y.get(t)}var k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination-wrapper m-auto"},[e("button",{attrs:{disabled:t.preDisable},on:{click:t.goPre}},[t._v("<")]),e("ul",t._l(t.pages,(function(a){return e("li",{key:a,ref:"pages",refInFor:!0},[t.isShowBtn(a)?e("button",{class:t.current===a?"active":"",on:{click:function(e){return t.jumpToPage(a)}}},[t._v(t._s(a))]):t.isShowEllipsis(a)?e("div",{staticClass:"ellipsis"},[t._v("…")]):t._e()])})),0),e("button",{attrs:{disabled:t.nextDisable},on:{click:t.goNext}},[t._v(">")])])},S=[],$={props:{totalPages:{default:0,type:Number},isResetPagination:{default:!1,type:Boolean}},data(){return{current:1,pageSize:20,pages:[],pageLength:0}},computed:{preDisable(){return 1===this.current},nextDisable(){return this.current===this.pageLength}},watch:{current(t){this.$emit("change",t)},totalPages(t){t&&this.getPagesLength()},isResetPagination(t){t&&(this.current=1)}},created(){this.getPagesLength()},methods:{getPagesLength(){const t=this.totalPages%this.pageSize?1:0;this.pageLength=this.totalPages/this.pageSize+t,this.pages=new Array(Math.floor(this.pageLength));for(let e=0;e<this.pages.length;e++)this.pages[e]=e+1},jumpToPage(t){this.current=t,this.$emit("jumpToPage",t)},goPre(){this.current-=1===this.current?0:1,this.$emit("goPre",this.current)},goNext(){this.current+=this.current===this.pageLength?0:1,this.$emit("goNext",this.current)},isShowBtn(t){return this.pageLength<8||(1===t||t===this.pageLength||(this.current<4&&t<6||(this.current>this.pageLength-4&&t>this.pageLength-6||t<this.current+3&&t>this.current-3)))},isShowEllipsis(t){return 5===t||t===this.pageLength-1}}},B=$,E=(0,c.Z)(B,k,S,!1,null,"1655322e",null),M=E.exports,O=function(){var t=this,e=t._self._c;return e("div",[e("LoadingPlugin",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[e("div",{staticClass:"loadingio-spinner-spin-31byv00p8fp"},[e("div",{staticClass:"ldio-wz3lcnixa6"},[e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")]),e("div",[e("div")])])])])],1)},Z=[],F={props:{Loading:{type:Boolean,default:!1}},data(){return{isLoading:!1}},watch:{Loading(t){this.isLoading=t}}},j=F,z=(0,c.Z)(j,O,Z,!1,null,"639ac152",null),D=z.exports,R=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"modal fade",attrs:{id:"moviesModal",tabindex:"-1","aria-labelledby":"movie_title","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"carousel slide mb-5",attrs:{id:"carouselExampleControls","data-bs-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},t._l(2,(function(t,a){return e("div",{key:a,staticClass:"carousel-item",class:{active:0===a}},[e("img",{staticClass:"w-100",attrs:{id:`movies_poster_${a}`,src:"",alt:""}})])})),0),t._m(1),t._m(2)]),e("div",{attrs:{id:"movies_vote_average"}}),e("div",{staticClass:"my-3",attrs:{id:"movies_desc"}})]),t._m(3)])])])])},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"movie_title"}},[t._v("Modal title")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"visually-hidden"},[t._v("Previous")])])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"visually-hidden"},[t._v("Next")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("關閉")])])}],I={},T=(0,c.Z)(I,R,A,!1,null,null,null),N=T.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter_group"},[e("div",{staticClass:"filter_contrl mb-3"},[e("div",{staticClass:"title"},[t._v("搜尋年度")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search.year,expression:"search.year"}],staticClass:"form-control",attrs:{type:"text",inputmode:"numeric",placeholder:"搜尋年度","aria-label":"搜尋年度","aria-describedby":"搜尋年度"},domProps:{value:t.search.year},on:{input:function(e){e.target.composing||t.$set(t.search,"year",e.target.value)}}})]),e("div",{staticClass:"filter_contrl mb-5"},[e("div",{staticClass:"title"},[t._v("排序方式")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.search.sortBy,expression:"search.sortBy"}],staticClass:"form-select",attrs:{"aria-label":"排序方式"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.search,"sortBy",e.target.multiple?a:a[0])}}},[e("option",{attrs:{value:"popularity.desc"}},[t._v("【預設】熱門度(高到低)")]),e("option",{attrs:{value:"popularity.asc"}},[t._v("熱門度(低到高)")]),e("option",{attrs:{value:"release_date.desc"}},[t._v("上映日(近到遠)")]),e("option",{attrs:{value:"release_date.asc"}},[t._v("上映日(遠到近)")]),e("option",{attrs:{value:"vote_average.desc"}},[t._v("平均票數(高到低)")]),e("option",{attrs:{value:"vote_average.asc"}},[t._v("平均票數(低到高)")]),e("option",{attrs:{value:"vote_count.desc"}},[t._v("總票數(高到低)")]),e("option",{attrs:{value:"vote_count.asc"}},[t._v("總票數(低到高)")])])]),e("div",{staticClass:"filter_btn"},[e("button",{staticClass:"btn btn-info search_btn",staticStyle:{"margin-right":"5px"},attrs:{type:"button"},on:{click:function(e){return t.searchList()}}},[t._v("搜尋")]),e("button",{staticClass:"btn btn-danger clean_btn",attrs:{type:"button"},on:{click:function(e){return t.cleanFilter()}}},[t._v("清空")])])])},V=[],Y={data(){return{search:{year:"",sortBy:""}}},methods:{searchList(){const t={year:this.search.year?this.search.year:(new Date).getFullYear(),sort:this.search.sortBy?this.search.sortBy:""};this.$emit("searchList",t)},cleanFilter(){const t={year:"",sort:""};this.search.year=t.year,this.search.sortBy=t.sort,this.$emit("cleanFilter",t)}}},U=Y,q=(0,c.Z)(U,W,V,!1,null,null,null),G=q.exports,H=a.p+"img/no_movie_pic_1.9a2b885d.jpg",J=a.p+"img/no_movie_pic_2.d82ec069.jpg",K={components:{PaginationSelector:M,LoadingActive:D,MoviesModal:N,AnnualFilter:G},data(){return{moviesData:[],moviesList:[],BDList:[],search:{year:"",sortBy:""},totalResult:0,emptyPic1:H,emptyPic2:J,isLoading:!1,isResetPagination:!1}},mounted(){this.init()},computed:{...(0,n.Se)(["isMobileSize"])},methods:{init(){this.isLoading=!0,C().then((t=>{this.moviesData=t.data,this.moviesList=t.data.results,this.totalResult=t.data.total_results,this.isLoading=!1})),x().then((t=>{this.BDList=t.data.results.slice(0,5)}))},searchList(t){const e={year:t.year,sort:t.sort,page:1};this.search.year=e.year,this.search.sortBy=e.sort,this.search.page=e.page,this.isLoading=!0,this.isResetPagination=!0,P(e).then((t=>{this.moviesList=t.data.results,this.totalResult=t.data.total_results,this.isLoading=!1,this.isResetPagination=!1}))},changePage(t){const e={year:this.search.year?this.search.year:(new Date).getFullYear(),page:t,sort:this.search.sortBy?this.search.sortBy:""};this.isLoading=!0,L(e).then((t=>{this.moviesList=t.data.results,this.totalResult=t.data.total_results,this.isLoading=!1}))},cleanFilter(t){this.isLoading=!0,this.isResetPagination=!0,this.search.year=t.year,this.search.sortBy=t.sort,C().then((t=>{this.moviesData=t.data,this.moviesList=t.data.results,this.totalResult=t.data.total_results,this.isLoading=!1,this.isResetPagination=!1}))},openDetail(t){let e=document.getElementById("moviesModal"),a=[],s=[];const i={id:t.id};w(i).then((t=>{const e=t.data.backdrops;if(console.log("result =====>",e),e.length)e.forEach((t=>{a.push("https://image.tmdb.org/t/p/original"+t.file_path)})),s=a.slice(0,2);else{for(let t=0;t<2;t++)a.push(this.emptyPic2);s=a}})),e.addEventListener("shown.bs.modal",(function(){document.getElementById("movie_title").textContent=t.original_title,document.getElementById("movies_desc").textContent=t.overview,document.getElementById("movies_vote_average").textContent=`平均票數：${t.vote_average}`,s.forEach(((e,a)=>{document.getElementById(`movies_poster_${a}`).setAttribute("src",e),document.getElementById(`movies_poster_${a}`).setAttribute("alt",t.original_title)}))}))}}},Q=K,X=(0,c.Z)(Q,_,b,!1,null,"65fd32d4",null),tt=X.exports;s.ZP.use(m.ZP);var et=new m.ZP({mode:"hash",routes:[{path:"/",name:"AnnualMovies",component:tt}]});s.ZP.config.productionTip=!1,s.ZP.component("LoadingPlugin",g()),s.ZP.filter("date",(function(t){const e=t.split("-");return e[0]+"/"+e[1]+"/"+e[2]})),s.ZP.filter("language",(function(t){const e={ar:"阿拉伯文",hr:"克羅埃西亞文",da:"丹麥文",el:"希臘文",et:"愛沙尼亞文",fi:"芬蘭文",ga:"愛爾蘭文",hu:"匈牙利文",it:"義大利文",ko:"韓文",lt:"立陶宛文",no:"挪威文",pt:"葡萄牙文",ro:"羅馬尼亞文","sr-CS":"塞爾維亞文",sl:"斯洛維尼亞文",tr:"土耳其文",bg:"保加利亞文",cs:"捷克文",de:"德文",en:"英文",es:"西班牙文",fr:"法文",hi:"印度文",he:"希伯來文",ja:"日文",lv:"拉脫維亞文",nl:"荷蘭文",pl:"波蘭文",sv:"瑞典文",ru:"俄文",sk:"斯洛伐克文",th:"泰文","uk-UA":"烏克蘭文",zh:"中文",fa:"波斯語"};let a="";return Object.keys(e).forEach((s=>{s===t&&(a=e[s])})),a})),s.ZP.filter("vote",(function(t){const e=String(t).indexOf(".")+1;return e>0?t:t+".0"})),new s.ZP({store:h,router:et,render:t=>t(u)}).$mount("#app")}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,r){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],r=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,r<n&&(n=r));if(o){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[s,i,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/movies/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,r,n=s[0],o=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var d=l(a)}for(e&&e(s);c<n.length;c++)r=n[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},s=self["webpackChunkmovies"]=self["webpackChunkmovies"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(5438)}));s=a.O(s)})();
//# sourceMappingURL=app.2c233521.js.map