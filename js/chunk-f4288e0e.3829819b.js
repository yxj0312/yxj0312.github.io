(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4288e0e"],{"04d0":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("RwvListErrors",{attrs:{errors:t.errors}}),r("form",{on:{submit:function(e){return e.preventDefault(),t.onPublish(t.article.slug)}}},[r("fieldset",{attrs:{disabled:t.inProgress}},[r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"articleTitle"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{id:"articleTitle",type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"articleDescription",hidden:""}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{id:"articleDescription",type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"articleBody",hidden:""}}),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{id:"articleBody",rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),r("fieldset",{staticClass:"form-group"},[r("label",{attrs:{for:"addTag",hidden:""}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.tagInput,expression:"tagInput"}],staticClass:"form-control",attrs:{id:"addTag",type:"text",placeholder:"Enter tags"},domProps:{value:t.tagInput},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addTag(t.tagInput))},input:function(e){e.target.composing||(t.tagInput=e.target.value)}}}),r("div",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e,a){return r("span",{key:e+a,staticClass:"tag-default tag-pill"},[r("i",{staticClass:"ion-close-round",on:{click:function(r){return t.removeTag(e)}}}),t._v("\n                  "+t._s(e)+"\n                ")])})),0)])]),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{disabled:t.inProgress,type:"submit"}},[t._v("\n            Publish Article\n          ")])])],1)])])])},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("ade3")),i=(r("96cf"),r("1da1")),o=r("2f62"),c=r("4360"),l=r("e98d"),u=r("6c33");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"RwvArticleEdit",components:{RwvListErrors:l["a"]},props:{previousArticle:{type:Object,required:!1}},beforeRouteUpdate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].dispatch(u["f"]);case 2:return t.abrupt("return",a());case 3:case"end":return t.stop()}}),t)})));function e(e,r,a){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].dispatch(u["f"]);case 2:if(void 0===e.params.slug){t.next=5;break}return t.next=5,c["a"].dispatch(u["l"],e.params.slug,e.params.perviousArticle);case 5:return t.abrupt("return",a());case 6:case"end":return t.stop()}}),t)})));function e(e,r,a){return t.apply(this,arguments)}return e}(),beforeRouteLeave:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].dispatch(u["f"]);case 2:a();case 3:case"end":return t.stop()}}),t)})));function e(e,r,a){return t.apply(this,arguments)}return e}(),data:function(){return{tagInput:null,inProgress:!1,errors:{}}},computed:d({},Object(o["b"])(["article"])),methods:{onPublish:function(t){var e=this,r=t?u["b"]:u["e"];this.inProgress=!0,this.$store.dispatch(r).then((function(t){var r=t.data;e.inProgress=!1,e.$router.push({name:"article",params:{slug:r.article.slug}})})).catch((function(t){var r=t.response;e.inProgress=!1,e.errors=r.data.errors}))},removeTag:function(t){this.$store.dispatch(u["d"],t)},addTag:function(t){this.$store.dispatch(u["c"],t),this.tagInput=null}}},m=f,g=r("2877"),v=Object(g["a"])(m,a,n,!1,null,null,null);e["default"]=v.exports},e98d:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"error-messages"},t._l(t.errors,(function(e,a){return r("li",{key:a},[r("span",{domProps:{textContent:t._s(a+" ")}}),t._l(e,(function(e,a){return r("span",{key:e+a,domProps:{textContent:t._s(e)}})}))],2)})),0)},n=[],s={name:"RwvListErrors",props:{errors:{type:Object,required:!0}}},i=s,o=r("2877"),c=Object(o["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-f4288e0e.3829819b.js.map