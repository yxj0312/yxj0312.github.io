(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72ed47b8"],{"5dbc":function(t,e,r){var n=r("d3f4"),i=r("8b97").set;t.exports=function(t,e,r){var a,s=e.constructor;return s!==r&&"function"==typeof s&&(a=s.prototype)!==r.prototype&&n(a)&&i&&i(t,a),t}},"64e5":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isLoading?r("div",{staticClass:"article-preview"},[t._v("Loading articles...")]):r("div",[0===t.articles.length?r("div",{staticClass:"article-preview"},[t._v("\n      No articles are here... yet.\n    ")]):t._e(),t._l(t.articles,(function(t,e){return r("RwvArticlePrview",{key:t.title+e,attrs:{article:t}})})),r("VPagination",{attrs:{pages:t.pages,currentPage:t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],2)])},i=[];r("8e6e"),r("456d"),r("ac6a");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){if(Array.isArray(t))return a(t)}function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return s(t)||o(t)||c(t)||l()}var f=r("ade3"),p=(r("c5f6"),r("2f62")),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-preview"},[r("RwvArticleMeta",{attrs:{isPreview:"",article:t.article}}),r("router-link",{staticClass:"preview-link",attrs:{to:t.articleLink}},[r("h1",{domProps:{textContent:t._s(t.article.title)}}),r("p",{domProps:{textContent:t._s(t.article.description)}}),r("span",[t._v("Read more...")]),r("TagList",{attrs:{tags:t.article.taglist}})],1)],1)},g=[],d=r("f1f8"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"tag-list"},t._l(t.tags,(function(e,n){return r("li",{key:n,staticClass:"tag-default tag-pill tag-outline"},[r("span",{domProps:{textContent:t._s(e)}})])})),0)},b=[],m={name:"TagList",props:{tags:Array}},y=m,O=r("2877"),P=Object(O["a"])(y,v,b,!1,null,null,null),w=P.exports,_={name:"RwvArticlePreview",components:{RwvArticleMeta:d["a"],TagList:w},props:{article:{type:Object,required:!0}},computed:{articleLink:function(){return{name:"article",params:{slug:this.article.slug}}}}},j=_,A=Object(O["a"])(j,h,g,!1,null,null,null),C=A.exports,k=r("6c33"),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("ul",{staticClass:"pagination"},t._l(t.pages,(function(e){return r("li",{key:e,class:t.paginationClass(e),attrs:{"data-test":"page-link-"+e},on:{click:function(r){return r.preventDefault(),t.changePage(e)}}},[r("a",{staticClass:"page-link",attrs:{href:""},domProps:{textContent:t._s(e)}})])})),0)])},x=[],S={name:"Pagination",props:{pages:{type:Array,required:!0},currentPage:{type:Number,required:!0}},methods:{changePage:function(t){t!==this.currentPage&&this.$emit("update:currentPage",t)},paginationClass:function(t){return{"page-item":!0,active:this.currentPage===t}}}},I=S,N=Object(O["a"])(I,E,x,!1,null,null,null),L=N.exports;function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(Object(r),!0).forEach((function(e){Object(f["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var R={name:"RwvArticleList",components:{RwvArticlePrview:C,VPagination:L},props:{type:{type:String,required:!1,default:"all"},author:{type:String,required:!1},tag:{type:String,required:!1},favorited:{type:String,required:!1},itemsPerPage:{type:Number,required:!1,default:10}},data:function(){return{currentPage:1}},computed:F({listConfig:function(){var t=this.type,e={offset:(this.currentPage-1)*this.itemsPerPage,limit:this.itemsPerPage};return this.author&&(e.author=this.author),this.tag&&(e.tag=this.tag),this.favorited&&(e.favorited=this.favorited),{type:t,filters:e}},pages:function(){return this.isLoading||this.articlesCount<=this.itemsPerPage?[]:u(Array(Math.ceil(this.articlesCount/this.itemsPerPage)).keys()).map((function(t){return t+1}))}},Object(p["b"])(["articlesCount","isLoading","articles"])),watch:{currentPage:function(t){this.listConfig.filters.offset=(t-1)*this.itemsPerPage,this.fetchArticles()},type:function(){this.resetPagination(),this.fetchArticles()},author:function(){this.resetPagination(),this.fetchArticles()},tag:function(){this.resetPagination(),this.fetchArticles()},favorited:function(){this.resetPagination(),this.fetchArticles()}},mounted:function(){this.fetchArticles()},methods:{fetchArticles:function(){this.$store.dispatch(k["m"],this.listConfig)},resetPagination:function(){this.listConfig.offset=0,this.currentPage=1}}},D=R,q=Object(O["a"])(D,n,i,!1,null,null,null);e["a"]=q.exports},"8b97":function(t,e,r){var n=r("d3f4"),i=r("cb7c"),a=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},aa77:function(t,e,r){var n=r("5ca1"),i=r("be13"),a=r("79e5"),s=r("fdef"),o="["+s+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),f=function(t,e,r){var i={},o=a((function(){return!!s[t]()||c[t]()!=c})),l=i[t]=o?e(p):s[t];r&&(i[r]=l),n(n.P+n.F*o,"String",i)},p=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},c5f6:function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("2d95"),s=r("5dbc"),o=r("6a99"),c=r("79e5"),l=r("9093").f,u=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,h="Number",g=n[h],d=g,v=g.prototype,b=a(r("2aeb")(v))==h,m="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():p(e,3);var r,n,i,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var s,c=e.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>i)return NaN;return parseInt(c,n)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof g&&(b?c((function(){v.valueOf.call(r)})):a(r)!=h)?s(new d(y(e)),r,g):y(e)};for(var O,P=r("9e1e")?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;P.length>w;w++)i(d,O=P[w])&&!i(g,O)&&f(g,O,u(d,O));g.prototype=v,v.constructor=g,r("2aba")(n,h,g)}},f1f8:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("router-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image,alt:"author image"}})]),r("div",{staticClass:"info"},[r("router-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v("\n      "+t._s(t.article.author.username)+"\n    ")]),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt)))])],1),t.actions?r("rwv-article-actions",{attrs:{article:t.article,canModify:t.isCurrentUser()}}):r("button",{staticClass:"btn btn-sm pull-xs-right",class:{"btn-primary":t.article.favorited,"btn-outline-primary":!t.article.favorited},on:{click:t.toggleFavorite}},[r("i",{staticClass:"ion-heart"}),r("span",{staticClass:"counter"},[t._v(t._s(t.article.favoritesCount))])])],1)},i=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),s=r("2f62"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.canModify?r("span",[r("router-link",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{to:t.editArticleLink}},[r("i",{staticClass:"ion-edit"}),r("span",[t._v(" Edit Article")])]),r("span",[t._v("  ")]),r("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:t.deleteArticle}},[r("i",{staticClass:"ion-trash-a"}),r("span",[t._v(" Delete Article")])])],1):r("span",[r("button",{staticClass:"btn btn-sm btn-outline-secondary",on:{click:t.toggleFollow}},[r("i",{staticClass:"ion-plus-round"}),r("span",[t._v(" ")]),r("span",{domProps:{textContent:t._s(t.followUserLabel)}})]),r("span",[t._v("  ")]),r("button",{staticClass:"btn btn-sm",class:t.toggleFavoriteButtonClasses,on:{click:t.toggleFavorite}},[r("i",{staticClass:"ion-heart"}),r("span",[t._v(" ")]),r("span",{domProps:{textContent:t._s(t.favoriteArticleLabel)}}),r("span",[t._v(" ")]),r("span",{staticClass:"counter",domProps:{textContent:t._s(t.favoriteCounter)}})])])},c=[],l=(r("96cf"),r("1da1")),u=r("6c33");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"RwvArticleActions",props:{article:{type:Object,required:!0},canModify:{type:Boolean,required:!0}},mounted:function(){this.$store.dispatch(u["o"],{username:this.article.author.username})},computed:p(p({},Object(s["b"])(["profile","isAuthenticated"])),{},{editArticleLink:function(){return{name:"article-edit",params:{slug:this.article.slug}}},toggleFavoriteButtonClasses:function(){return{"btn-primary":this.article.favorited,"btn-outline-primary":!this.article.favortied}},followUserLabel:function(){return"".concat(this.profile.following?"Unfollow":"Follow"," ").concat(this.article.author.username)},favoriteArticleLabel:function(){return this.article.favorited?"Unfavorite Article":"Favorite Article"},favoriteCounter:function(){return"(".concat(this.article.favoritesCount,")")}}),methods:{toggleFavorite:function(){if(this.isAuthenticated){var t=this.article.favorited?u["k"]:u["j"];this.$store.dispatch(t,this.article.slug)}else this.$router.push({name:"login"})},toggleFollow:function(){if(this.isAuthenticated){var t=this.profile.following?u["q"]:u["p"];this.$store.dispatch(t,{username:this.profile.username})}else this.$router.push({name:"login"})},deleteArticle:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch(u["a"],this.article.slug);case 3:return t.next=5,this.$router.push("/");case 5:t.next=10;break;case 7:throw t.prev=7,t.t0=t["catch"](0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()}},g=h,d=r("2877"),v=Object(d["a"])(g,o,c,!1,null,null,null),b=v.exports;function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={name:"RwvArticleMeta",components:{RwvArticleActions:b},props:{article:{type:Object,required:!0},actions:{type:Boolean,required:!1,default:!1}},computed:y({},Object(s["b"])(["currentUser","isAuthenticated"])),methods:{isCurrentUser:function(){return!(!this.currentUser.username||!this.article.author.username)&&this.currentUser.username===this.article.author.username},toggleFavorite:function(){if(this.isAuthenticated){var t=this.article.favorited?u["k"]:u["j"];this.$store.dispatch(t,this.article.slug)}else this.$router.push({name:"login"})}}},P=O,w=Object(d["a"])(P,n,i,!1,null,null,null);e["a"]=w.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-72ed47b8.26b95828.js.map