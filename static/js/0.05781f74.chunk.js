/*! For license information please see 0.05781f74.chunk.js.LICENSE.txt */
(this["webpackJsonpgg.tmdb"]=this["webpackJsonpgg.tmdb"]||[]).push([[0],{660:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(44),s=a(101),l=a(654),o=a(71),u=a(232),f=a.n(u),c=a(15),p=a(33),d=a(231);function g(e){var t="Average",a=null===e.movie.poster_path?f.a:c.f.TMDB.POSTER_ROOT_W342+e.movie.poster_path,n=Object(l.a)("").t;switch(!0){case e.movie.vote_average<=4:t="Bad";break;case e.movie.vote_average<7:t="Average";break;case e.movie.vote_average>=7:t="Good"}return r.a.createElement(o.b,{to:"/Movie/".concat(e.movie.id)},r.a.createElement(d.f,null,r.a.createElement(i.a,{xs:12},r.a.createElement(d.h,null,e.movie.title),r.a.createElement(d.c,null,r.a.createElement(d.j,null,r.a.createElement("div",{className:t},e.movie.vote_average,"/10")),r.a.createElement(d.g,{src:a})),r.a.createElement("br",null)),r.a.createElement(i.a,{xs:12},r.a.createElement(d.e,null,e.movie.genre_ids.map((function(e,t){return r.a.createElement(d.d,{key:t},r.a.createElement("i",null,n("genres:".concat(Object(p.d)(e).toLowerCase()))))}))))))}var v=a(233);function b(e){var t=Object(l.a)("").t,a=window.location.pathname.split("/")[2];return e.props?r.a.createElement(d.b,null,r.a.createElement(s.a,{direction:"row",justify:"space-evenly",alignItems:"center"},e.props.length>0?e.props.map((function(e,t){return r.a.createElement(i.a,{key:t,xs:12,sm:12,md:6,lg:4,xl:3},r.a.createElement(g,{movie:e}))})):a&&"movie"!==a.toLocaleLowerCase()&&"latest"!==a.toLocaleLowerCase()?r.a.createElement(d.i,null,t("common:no_results")):r.a.createElement(r.a.Fragment,null))):r.a.createElement(v.a,null)}a.d(t,"a",(function(){return b}))},661:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(691),s=a.n(i),l=a(654),o=a(10);function u(){var e=Object(o.a)(["    \n    padding: 30px;\n\n    ul {\n        list-style: none;\n\n        li { \n            width: 65px;\n            display: inline-block;\n\n            a {\n                color: white;\n            }\n        }\n\n        li.active {\n            a {\n                color: black;\n            }\n        }\n    }\n"]);return u=function(){return e},e}var f=a(11).a.div(u());function c(e){var t=e.maxPage,a=e.page,n=e.set_page,i=Object(l.a)("").t;return r.a.createElement(f,null,r.a.createElement(s.a,{hideDisabled:!0,prevPageText:i("page:previous"),nextPageText:i("page:next"),firstPageText:i("page:first"),lastPageText:i("page:last"),activePage:a,itemsCountPerPage:1,totalItemsCount:t,onChange:function(e){return n(e)}}))}a.d(t,"a",(function(){return c}))},669:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},691:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=o(a(4)),i=o(a(692)),s=o(a(693)),l=o(a(669));function o(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){function t(){return c(this,t),d(this,g(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),a=t,(r=[{key:"isFirstPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"isPrevPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isNextPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return!(t.hideNavigation||a&&!e)}},{key:"isLastPageVisible",value:function(e){var t=this.props,a=t.hideDisabled;return t.hideNavigation,!(t.hideFirstLastPages||a&&!e)}},{key:"buildPages",value:function(){for(var e=[],t=this.props,a=t.itemsCountPerPage,r=t.pageRangeDisplayed,o=t.activePage,u=t.prevPageText,f=t.nextPageText,c=t.firstPageText,p=t.lastPageText,d=t.totalItemsCount,g=t.onChange,v=t.activeClass,b=t.itemClass,h=t.itemClassFirst,m=t.itemClassPrev,y=t.itemClassNext,C=t.itemClassLast,_=t.activeLinkClass,P=t.disabledClass,k=(t.hideDisabled,t.hideNavigation,t.linkClass),x=t.linkClassFirst,O=t.linkClassPrev,w=t.linkClassNext,j=t.linkClassLast,E=(t.hideFirstLastPages,t.getPageUrl),T=new i.default(a,r).build(d,o),L=T.first_page;L<=T.last_page;L++)e.push(n.default.createElement(s.default,{isActive:L===o,key:L,href:E(L),pageNumber:L,pageText:L+"",onClick:g,itemClass:b,linkClass:k,activeClass:v,activeLinkClass:_,ariaLabel:"Go to page number ".concat(L)}));return this.isPrevPageVisible(T.has_previous_page)&&e.unshift(n.default.createElement(s.default,{key:"prev"+T.previous_page,href:E(T.previous_page),pageNumber:T.previous_page,onClick:g,pageText:u,isDisabled:!T.has_previous_page,itemClass:(0,l.default)(b,m),linkClass:(0,l.default)(k,O),disabledClass:P,ariaLabel:"Go to previous page"})),this.isFirstPageVisible(T.has_previous_page)&&e.unshift(n.default.createElement(s.default,{key:"first",href:E(1),pageNumber:1,onClick:g,pageText:c,isDisabled:!T.has_previous_page,itemClass:(0,l.default)(b,h),linkClass:(0,l.default)(k,x),disabledClass:P,ariaLabel:"Go to first page"})),this.isNextPageVisible(T.has_next_page)&&e.push(n.default.createElement(s.default,{key:"next"+T.next_page,href:E(T.next_page),pageNumber:T.next_page,onClick:g,pageText:f,isDisabled:!T.has_next_page,itemClass:(0,l.default)(b,y),linkClass:(0,l.default)(k,w),disabledClass:P,ariaLabel:"Go to next page"})),this.isLastPageVisible(T.has_next_page)&&e.push(n.default.createElement(s.default,{key:"last",href:E(T.total_pages),pageNumber:T.total_pages,onClick:g,pageText:p,isDisabled:T.current_page===T.total_pages,itemClass:(0,l.default)(b,C),linkClass:(0,l.default)(k,j),disabledClass:P,ariaLabel:"Go to last page"})),e}},{key:"render",value:function(){var e=this.buildPages();return n.default.createElement("ul",{className:this.props.innerClass},e)}}])&&p(a.prototype,r),o&&p(a,o),t}(n.default.Component);t.default=h,b(h,"propTypes",{totalItemsCount:r.default.number.isRequired,onChange:r.default.func.isRequired,activePage:r.default.number,itemsCountPerPage:r.default.number,pageRangeDisplayed:r.default.number,prevPageText:r.default.oneOfType([r.default.string,r.default.element]),nextPageText:r.default.oneOfType([r.default.string,r.default.element]),lastPageText:r.default.oneOfType([r.default.string,r.default.element]),firstPageText:r.default.oneOfType([r.default.string,r.default.element]),disabledClass:r.default.string,hideDisabled:r.default.bool,hideNavigation:r.default.bool,innerClass:r.default.string,itemClass:r.default.string,itemClassFirst:r.default.string,itemClassPrev:r.default.string,itemClassNext:r.default.string,itemClassLast:r.default.string,linkClass:r.default.string,activeClass:r.default.string,activeLinkClass:r.default.string,linkClassFirst:r.default.string,linkClassPrev:r.default.string,linkClassNext:r.default.string,linkClassLast:r.default.string,hideFirstLastPages:r.default.bool,getPageUrl:r.default.func}),b(h,"defaultProps",{itemsCountPerPage:10,pageRangeDisplayed:5,activePage:1,prevPageText:"\u27e8",firstPageText:"\xab",nextPageText:"\u27e9",lastPageText:"\xbb",innerClass:"pagination",itemClass:void 0,linkClass:void 0,activeLinkClass:void 0,hideFirstLastPages:!1,getPageUrl:function(e){return"#"}})},692:function(e,t){function a(e,t){if(!(this instanceof a))return new a(e,t);this.per_page=e||25,this.length=t||10}e.exports=a,a.prototype.build=function(e,t){var a=Math.ceil(e/this.per_page);e=parseInt(e,10),(t=parseInt(t,10)||1)<1&&(t=1),t>a&&(t=a);var n=Math.max(1,t-Math.floor(this.length/2)),r=Math.min(a,t+Math.floor(this.length/2));r-n+1<this.length&&(t<a/2?r=Math.min(a,r+(this.length-(r-n))):n=Math.max(1,n-(this.length-(r-n)))),r-n+1>this.length&&(t>a/2?n++:r--);var i=this.per_page*(t-1);i<0&&(i=0);var s=this.per_page*t-1;return s<0&&(s=0),s>Math.max(e-1,0)&&(s=Math.max(e-1,0)),{total_pages:a,pages:Math.min(r-n+1,a),current_page:t,first_page:n,last_page:r,previous_page:t-1,next_page:t+1,has_previous_page:t>1,has_next_page:t<a,total_results:e,results:Math.min(s-i+1,e),first_result:i,last_result:s}}},693:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a(0)),r=s(a(4)),i=s(a(669));function s(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(e){function t(){return u(this,t),c(this,p(t).apply(this,arguments))}var a,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"handleClick",value:function(e){var t=this.props,a=t.isDisabled,n=t.pageNumber;e.preventDefault(),a||this.props.onClick(n)}},{key:"render",value:function(){var e,t=this.props,a=t.pageText,r=(t.pageNumber,t.activeClass),s=t.itemClass,l=t.linkClass,o=t.activeLinkClass,u=t.disabledClass,f=t.isActive,c=t.isDisabled,p=t.href,d=t.ariaLabel,v=(0,i.default)(s,(g(e={},r,f),g(e,u,c),e)),b=(0,i.default)(l,g({},o,f));return n.default.createElement("li",{className:v,onClick:this.handleClick.bind(this)},n.default.createElement("a",{className:b,href:p,"aria-label":d},a))}}])&&f(a.prototype,r),s&&f(a,s),t}(n.Component);t.default=v,g(v,"propTypes",{pageText:r.default.oneOfType([r.default.string,r.default.element]),pageNumber:r.default.number.isRequired,onClick:r.default.func.isRequired,isActive:r.default.bool.isRequired,isDisabled:r.default.bool,activeClass:r.default.string,activeLinkClass:r.default.string,itemClass:r.default.string,linkClass:r.default.string,disabledClass:r.default.string,href:r.default.string}),g(v,"defaultProps",{activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1,href:"#"})}}]);
//# sourceMappingURL=0.05781f74.chunk.js.map