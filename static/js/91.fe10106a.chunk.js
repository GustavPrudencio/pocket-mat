/*! For license information please see 91.fe10106a.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[91],{39:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},40:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return s})),n.d(t,"isBodyOverflowing",(function(){return l})),n.d(t,"getOriginalBodyPadding",(function(){return c})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return m})),n.d(t,"omit",(function(){return f})),n.d(t,"pick",(function(){return p})),n.d(t,"warnOnce",(function(){return y})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return v})),n.d(t,"targetPropType",(function(){return E})),n.d(t,"tagPropType",(function(){return w})),n.d(t,"TransitionTimeouts",(function(){return x})),n.d(t,"TransitionPropTypeKeys",(function(){return N})),n.d(t,"TransitionStatuses",(function(){return O})),n.d(t,"keyCodes",(function(){return T})),n.d(t,"PopperPlacements",(function(){return j})),n.d(t,"canUseDOM",(function(){return k})),n.d(t,"isReactRefObj",(function(){return M})),n.d(t,"toNumber",(function(){return I})),n.d(t,"isObject",(function(){return A})),n.d(t,"isFunction",(function(){return C})),n.d(t,"findDOMElements",(function(){return L})),n.d(t,"isArrayOrNodeList",(function(){return D})),n.d(t,"getTarget",(function(){return S})),n.d(t,"defaultToggleEvents",(function(){return W})),n.d(t,"addMultipleEventListeners",(function(){return $})),n.d(t,"focusableElements",(function(){return F}));var r,a=n(12),o=n.n(a);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;l()&&s(n+e)}function d(e){r=e}function m(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function f(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function p(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var h={};function y(e){h[e]||("undefined"!==typeof console&&console.error(e),h[e]=!0)}function g(e,t){return function(n,r,a){null!==n[r]&&"undefined"!==typeof n[r]&&y('"'+r+'" property of "'+a+'" has been deprecated.\n'+t);for(var o=arguments.length,i=new Array(o>3?o-3:0),s=3;s<o;s++)i[s-3]=arguments[s];return e.apply(void 0,[n,r,a].concat(i))}}var b="object"===typeof window&&window.Element||function(){};function v(e,t,n){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=o.a.oneOfType([o.a.string,o.a.func,v,o.a.shape({current:o.a.any})]),w=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),x={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},j=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],k=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function P(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function I(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===P(e))return NaN;if(A(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=A(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function A(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function C(e){if(!A(e))return!1;var t=P(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function L(e){if(M(e))return e.current;if(C(e))return e();if("string"===typeof e&&k){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function D(e){return null!==e&&(Array.isArray(e)||k&&"number"===typeof e.length)}function S(e,t){var n=L(e);return t?D(n)?n:null===n?[]:[n]:D(n)?n[0]:n}var W=["touchstart","click"];function $(e,t,n,r){var a=e;D(a)||(a=[a]);var o=n;if("string"===typeof o&&(o=o.split(/\s+/)),!D(a)||"function"!==typeof t||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(a,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(a,(function(n){n.removeEventListener(e,t,r)}))}))}}var F=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},61:function(e,t,n){"use strict";var r=n(7),a=n(8),o=n(10),i=n(9),s=n(0),l=n.n(s),c=n(11),u=n(64),d=n(68),m=n(69),f=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.pathItems.length;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"bg-half bg-light d-table w-100"},l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(m.a,{lg:"12",className:"text-center"},l.a.createElement("div",{className:"page-next-level"},this.props.title?l.a.createElement("h4",{className:"title"}," ",this.props.title):null,this.props.children?this.props.children:null,l.a.createElement("ul",{className:"page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0"},this.props.pathItems.map((function(t,n){return t.id!==e?l.a.createElement("li",{key:n},l.a.createElement(c.b,{to:t.link,className:"text-uppercase font-weight-bold text-dark"},t.name)):l.a.createElement("li",{key:n},l.a.createElement("span",{className:"text-uppercase text-primary font-weight-bold"},t.name))})))))))))}}]),n}(s.Component);t.a=f},64:function(e,t,n){"use strict";var r=n(1),a=n(6),o=n(0),i=n.n(o),s=n(12),l=n.n(s),c=n(39),u=n.n(c),d=n(40),m={tag:d.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,o=e.fluid,s=e.tag,l=Object(a.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===o?c="container-fluid":o&&(c="container-"+o);var m=Object(d.mapToCssModules)(u()(t,c),n);return i.a.createElement(s,Object(r.a)({},l,{className:m}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},68:function(e,t,n){"use strict";var r=n(1),a=n(6),o=n(0),i=n.n(o),s=n(12),l=n.n(s),c=n(39),u=n.n(c),d=n(40),m=l.a.oneOfType([l.a.number,l.a.string]),f={tag:d.tagPropType,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},p={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,l=e.form,c=e.widths,m=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];c.forEach((function(t,n){var r=e[t];if(delete m[t],r){var a=!n;f.push(a?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var p=Object(d.mapToCssModules)(u()(t,o?"no-gutters":null,l?"form-row":"row",f),n);return i.a.createElement(s,Object(r.a)({},m,{className:p}))};h.propTypes=f,h.defaultProps=p,t.a=h},69:function(e,t,n){"use strict";var r=n(1),a=n(6),o=n(0),i=n.n(o),s=n(12),l=n.n(s),c=n(39),u=n.n(c),d=n(40),m=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),p={tag:d.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,o=e.widths,s=e.tag,l=Object(a.a)(e,["className","cssModule","widths","tag"]),c=[];o.forEach((function(t,r){var a=e[t];if(delete l[t],a||""===a){var o=!r;if(Object(d.isObject)(a)){var i,s=o?"-":"-"+t+"-",m=y(o,t,a.size);c.push(Object(d.mapToCssModules)(u()(((i={})[m]=a.size||""===a.size,i["order"+s+a.order]=a.order||0===a.order,i["offset"+s+a.offset]=a.offset||0===a.offset,i)),n))}else{var f=y(o,t,a);c.push(f)}}})),c.length||c.push("col");var m=Object(d.mapToCssModules)(u()(t,c),n);return i.a.createElement(s,Object(r.a)({},l,{className:m}))};g.propTypes=p,g.defaultProps=h,t.a=g},958:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(8),o=n(10),i=n(9),s=n(0),l=n.n(s),c=n(11),u=n(64),d=n(68),m=n(69),f=n(61),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},a.state={pathItems:[{id:1,name:"Home",link:"/index"},{id:2,name:"Pages",link:"#"},{id:3,name:"Utility",link:"#"},{id:4,name:"Privacy Policy"}]},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{pathItems:this.state.pathItems},l.a.createElement("h4",{className:"title"}," Privacy Policy "),l.a.createElement("ul",{className:"list-unstyled mt-4"},l.a.createElement("li",{className:"list-inline-item h6 date text-muted"}," ",l.a.createElement("span",{className:"text-dark"},"Last Revised :")," 23th Sep, 2019"))),l.a.createElement("div",{className:"position-relative"},l.a.createElement("div",{className:"shape overflow-hidden text-white"},l.a.createElement("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z",fill:"currentColor"})))),l.a.createElement("section",{className:"section"},l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(m.a,{lg:9},l.a.createElement("div",{className:"p-4 shadow rounded border"},l.a.createElement("h5",null,"Overview :"),l.a.createElement("p",{className:"text-muted"},"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text."),l.a.createElement("p",{className:"text-muted"},"In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc."),l.a.createElement("p",{className:"text-muted"},"There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories."),l.a.createElement("h5",null,"We use your information to :"),l.a.createElement("ul",{className:"list-unstyled feature-list text-muted"},l.a.createElement("li",null,l.a.createElement("i",{className:"mdi mdi-pan-right mdi-24px mr-2"}),"Digital Marketing Solutions for Tomorrow"),l.a.createElement("li",null,l.a.createElement("i",{className:"mdi mdi-pan-right mdi-24px mr-2"}),"Our Talented & Experienced Marketing Agency"),l.a.createElement("li",null,l.a.createElement("i",{className:"mdi mdi-pan-right mdi-24px mr-2"}),"Create your own skin to match your brand"),l.a.createElement("li",null,l.a.createElement("i",{className:"mdi mdi-pan-right mdi-24px mr-2"}),"Digital Marketing Solutions for Tomorrow"),l.a.createElement("li",null,l.a.createElement("i",{className:"mdi mdi-pan-right mdi-24px mr-2"}),"Our Talented & Experienced Marketing Agency"),l.a.createElement("li",null,l.a.createElement("i",{className:"mdi mdi-pan-right mdi-24px mr-2"}),"Create your own skin to match your brand")),l.a.createElement("h5",null,"Information Provided Voluntarily :"),l.a.createElement("p",{className:"text-muted"},"In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc."),l.a.createElement(c.b,{to:"#",className:"btn btn-primary"},"Print")))))))}}]),n}(s.Component);t.default=p}}]);
//# sourceMappingURL=91.fe10106a.chunk.js.map