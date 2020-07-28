/*! For license information please see 88.026ae984.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[88],{39:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===i)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},40:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return l})),a.d(t,"setScrollbarWidth",(function(){return c})),a.d(t,"isBodyOverflowing",(function(){return s})),a.d(t,"getOriginalBodyPadding",(function(){return m})),a.d(t,"conditionallyUpdateScrollbar",(function(){return o})),a.d(t,"setGlobalCssModule",(function(){return d})),a.d(t,"mapToCssModules",(function(){return u})),a.d(t,"omit",(function(){return f})),a.d(t,"pick",(function(){return p})),a.d(t,"warnOnce",(function(){return E})),a.d(t,"deprecated",(function(){return y})),a.d(t,"DOMElement",(function(){return N})),a.d(t,"targetPropType",(function(){return v})),a.d(t,"tagPropType",(function(){return b})),a.d(t,"TransitionTimeouts",(function(){return x})),a.d(t,"TransitionPropTypeKeys",(function(){return w})),a.d(t,"TransitionStatuses",(function(){return O})),a.d(t,"keyCodes",(function(){return j})),a.d(t,"PopperPlacements",(function(){return P})),a.d(t,"canUseDOM",(function(){return T})),a.d(t,"isReactRefObj",(function(){return L})),a.d(t,"toNumber",(function(){return k})),a.d(t,"isObject",(function(){return A})),a.d(t,"isFunction",(function(){return M})),a.d(t,"findDOMElements",(function(){return S})),a.d(t,"isArrayOrNodeList",(function(){return I})),a.d(t,"getTarget",(function(){return R})),a.d(t,"defaultToggleEvents",(function(){return D})),a.d(t,"addMultipleEventListeners",(function(){return F})),a.d(t,"focusableElements",(function(){return V}));var n,r=a(12),i=a.n(r);function l(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){return document.body.clientWidth<window.innerWidth}function m(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function o(){var e=l(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;s()&&c(a+e)}function d(e){n=e}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function f(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function p(e,t){for(var a,n=Array.isArray(t)?t:[t],r=n.length,i={};r>0;)i[a=n[r-=1]]=e[a];return i}var g={};function E(e){g[e]||("undefined"!==typeof console&&console.error(e),g[e]=!0)}function y(e,t){return function(a,n,r){null!==a[n]&&"undefined"!==typeof a[n]&&E('"'+n+'" property of "'+r+'" has been deprecated.\n'+t);for(var i=arguments.length,l=new Array(i>3?i-3:0),c=3;c<i;c++)l[c-3]=arguments[c];return e.apply(void 0,[a,n,r].concat(l))}}var h="object"===typeof window&&window.Element||function(){};function N(e,t,a){if(!(e[t]instanceof h))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var v=i.a.oneOfType([i.a.string,i.a.func,N,i.a.shape({current:i.a.any})]),b=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),x={Fade:150,Collapse:350,Modal:300,Carousel:600},w=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},j={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},P=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],T=!("undefined"===typeof window||!window.document||!window.document.createElement);function L(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function k(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(A(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=A(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function M(e){if(!A(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function S(e){if(L(e))return e.current;if(M(e))return e();if("string"===typeof e&&T){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function I(e){return null!==e&&(Array.isArray(e)||T&&"number"===typeof e.length)}function R(e,t){var a=S(e);return t?I(a)?a:null===a?[]:[a]:I(a)?a[0]:a}var D=["touchstart","click"];function F(e,t,a,n){var r=e;I(r)||(r=[r]);var i=a;if("string"===typeof i&&(i=i.split(/\s+/)),!I(r)||"function"!==typeof t||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(r,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(r,(function(a){a.removeEventListener(e,t,n)}))}))}}var V=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},61:function(e,t,a){"use strict";var n=a(7),r=a(8),i=a(10),l=a(9),c=a(0),s=a.n(c),m=a(11),o=a(64),d=a(68),u=a(69),f=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.pathItems.length;return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",{className:"bg-half bg-light d-table w-100"},s.a.createElement(o.a,null,s.a.createElement(d.a,{className:"justify-content-center"},s.a.createElement(u.a,{lg:"12",className:"text-center"},s.a.createElement("div",{className:"page-next-level"},this.props.title?s.a.createElement("h4",{className:"title"}," ",this.props.title):null,this.props.children?this.props.children:null,s.a.createElement("ul",{className:"page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0"},this.props.pathItems.map((function(t,a){return t.id!==e?s.a.createElement("li",{key:a},s.a.createElement(m.b,{to:t.link,className:"text-uppercase font-weight-bold text-dark"},t.name)):s.a.createElement("li",{key:a},s.a.createElement("span",{className:"text-uppercase text-primary font-weight-bold"},t.name))})))))))))}}]),a}(c.Component);t.a=f},64:function(e,t,a){"use strict";var n=a(1),r=a(6),i=a(0),l=a.n(i),c=a(12),s=a.n(c),m=a(39),o=a.n(m),d=a(40),u={tag:d.tagPropType,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},f=function(e){var t=e.className,a=e.cssModule,i=e.fluid,c=e.tag,s=Object(r.a)(e,["className","cssModule","fluid","tag"]),m="container";!0===i?m="container-fluid":i&&(m="container-"+i);var u=Object(d.mapToCssModules)(o()(t,m),a);return l.a.createElement(c,Object(n.a)({},s,{className:u}))};f.propTypes=u,f.defaultProps={tag:"div"},t.a=f},68:function(e,t,a){"use strict";var n=a(1),r=a(6),i=a(0),l=a.n(i),c=a(12),s=a.n(c),m=a(39),o=a.n(m),d=a(40),u=s.a.oneOfType([s.a.number,s.a.string]),f={tag:d.tagPropType,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,i=e.noGutters,c=e.tag,s=e.form,m=e.widths,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];m.forEach((function(t,a){var n=e[t];if(delete u[t],n){var r=!a;f.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var p=Object(d.mapToCssModules)(o()(t,i?"no-gutters":null,s?"form-row":"row",f),a);return l.a.createElement(c,Object(n.a)({},u,{className:p}))};g.propTypes=f,g.defaultProps=p,t.a=g},69:function(e,t,a){"use strict";var n=a(1),r=a(6),i=a(0),l=a.n(i),c=a(12),s=a.n(c),m=a(39),o=a.n(m),d=a(40),u=s.a.oneOfType([s.a.number,s.a.string]),f=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:u,offset:u})]),p={tag:d.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:s.a.string,cssModule:s.a.object,widths:s.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,i=e.widths,c=e.tag,s=Object(r.a)(e,["className","cssModule","widths","tag"]),m=[];i.forEach((function(t,n){var r=e[t];if(delete s[t],r||""===r){var i=!n;if(Object(d.isObject)(r)){var l,c=i?"-":"-"+t+"-",u=E(i,t,r.size);m.push(Object(d.mapToCssModules)(o()(((l={})[u]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l)),a))}else{var f=E(i,t,r);m.push(f)}}})),m.length||m.push("col");var u=Object(d.mapToCssModules)(o()(t,m),a);return l.a.createElement(c,Object(n.a)({},s,{className:u}))};y.propTypes=p,y.defaultProps=g,t.a=y},936:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),i=a(10),l=a(9),c=a(0),s=a.n(c),m=a(11),o=a(64),d=a(68),u=a(69),f=a(61),p=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},r.state={pathItems:[{id:1,name:"Home",link:"/index"},{id:2,name:"Docs",link:"#"},{id:3,name:"Changelog"}]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{title:"Changelog",pathItems:this.state.pathItems}),s.a.createElement("div",{className:"position-relative"},s.a.createElement("div",{className:"shape overflow-hidden text-white"},s.a.createElement("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})))),s.a.createElement("section",{className:"section"},s.a.createElement(o.a,null,s.a.createElement(d.a,{className:"justify-content-center"},s.a.createElement(u.a,{lg:"9"},s.a.createElement("div",{className:"p-4 shadow rounded border"},s.a.createElement("h5",null,"Version ",s.a.createElement("span",{className:"text-success"},"2.0.0")," - 18th April, 2020 ",s.a.createElement("span",{className:"badge badge-danger rounded ml-2"},"Latest")),s.a.createElement("ul",{className:"list-unstyled"},s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Updated full Code structure and removed unnecessary pacakges."),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New Classic Application Landing Page ",s.a.createElement(m.b,{to:"/index-classic-app",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New Classic Saas Landing Page ",s.a.createElement(m.b,{to:"/index-classic-saas",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New Car Ride Landing Page ",s.a.createElement(m.b,{to:"/index-car-riding",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Add New Job page in Careers pages"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Added new components in Components Page"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New ",s.a.createElement("span",{className:"font-weight-bold text-primary"},"RTL ")," Version (Only CSS Base)"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New ",s.a.createElement("span",{className:"font-weight-bold text-primary"},"Dark ")," Version (Only CSS Base)"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New ",s.a.createElement("span",{className:"font-weight-bold text-primary"},"Dark RTL ")," Version (Only CSS Base)"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Fixed couple of issues in One Page Menu"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Fixed couple of issues in mega Menu"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New Job Landing Page ",s.a.createElement(m.b,{to:"/index-job",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New Customer Support Landing Page ",s.a.createElement(m.b,{to:"/index-customer",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New Onpage Landing Page ",s.a.createElement(m.b,{to:"/index-onepage",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New Account Pages",s.a.createElement("ul",{className:"list-unstyled"},s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-chevron-right mr-2"}),"User Profile ",s.a.createElement(m.b,{to:"/page-profile",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-chevron-right mr-2"}),"Profile Setting ",s.a.createElement(m.b,{to:"/page-profile-edit",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-chevron-right mr-2"}),"Bill / Invoice ",s.a.createElement(m.b,{to:"/page-invoice",className:"h6 text-danger"},"Live Preview")))),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"New Widget Page ",s.a.createElement(m.b,{to:"/widget",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Added Careers Pages",s.a.createElement("ul",{className:"list-unstyled"},s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-chevron-right mr-2"}),"Candidate Profile ",s.a.createElement(m.b,{to:"/page-job-candidate",className:"h6 text-danger"},"Live Preview")),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-chevron-right mr-2"}),"Company Profile ",s.a.createElement(m.b,{to:"/page-job-company",className:"h6 text-danger"},"Live Preview")))),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Fixed Responsive Issue"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Added RTL Supported Version"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Added Payments Landing Page"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Added Cryptocurrency Landing Page"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Added Software Landing Page"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Added Comingsoon Page"),s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Fixed Responsive and Menu Issue")),s.a.createElement("h5",{className:"mt-4"},"Version ",s.a.createElement("span",{className:"text-success"},"1.0.0")," - 15th November 2019"),s.a.createElement("ul",{className:"list-unstyled"},s.a.createElement("li",{className:"text-muted my-2 ml-3"},s.a.createElement("i",{className:"mdi mdi-circle-medium mr-2"}),"Initial Released")),s.a.createElement("div",{className:"mt-4"},s.a.createElement("a",{href:"https://1.envato.market/landrickreactjs",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"Purchase Now"))))))))}}]),a}(c.Component);t.default=p}}]);
//# sourceMappingURL=88.026ae984.chunk.js.map