/*! For license information please see 104.aade07a5.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[104],{39:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},40:function(e,t,n){"use strict";n.r(t),n.d(t,"getScrollbarWidth",(function(){return i})),n.d(t,"setScrollbarWidth",(function(){return c})),n.d(t,"isBodyOverflowing",(function(){return l})),n.d(t,"getOriginalBodyPadding",(function(){return s})),n.d(t,"conditionallyUpdateScrollbar",(function(){return u})),n.d(t,"setGlobalCssModule",(function(){return d})),n.d(t,"mapToCssModules",(function(){return f})),n.d(t,"omit",(function(){return p})),n.d(t,"pick",(function(){return v})),n.d(t,"warnOnce",(function(){return h})),n.d(t,"deprecated",(function(){return g})),n.d(t,"DOMElement",(function(){return b})),n.d(t,"targetPropType",(function(){return E})),n.d(t,"tagPropType",(function(){return N})),n.d(t,"TransitionTimeouts",(function(){return O})),n.d(t,"TransitionPropTypeKeys",(function(){return w})),n.d(t,"TransitionStatuses",(function(){return k})),n.d(t,"keyCodes",(function(){return T})),n.d(t,"PopperPlacements",(function(){return L})),n.d(t,"canUseDOM",(function(){return j})),n.d(t,"isReactRefObj",(function(){return I})),n.d(t,"toNumber",(function(){return x})),n.d(t,"isObject",(function(){return C})),n.d(t,"isFunction",(function(){return A})),n.d(t,"findDOMElements",(function(){return D})),n.d(t,"isArrayOrNodeList",(function(){return M})),n.d(t,"getTarget",(function(){return P})),n.d(t,"defaultToggleEvents",(function(){return B})),n.d(t,"addMultipleEventListeners",(function(){return q})),n.d(t,"focusableElements",(function(){return R}));var r,a=n(12),o=n.n(a);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;l()&&c(n+e)}function d(e){r=e}function f(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function v(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var m={};function h(e){m[e]||("undefined"!==typeof console&&console.error(e),m[e]=!0)}function g(e,t){return function(n,r,a){null!==n[r]&&"undefined"!==typeof n[r]&&h('"'+r+'" property of "'+a+'" has been deprecated.\n'+t);for(var o=arguments.length,i=new Array(o>3?o-3:0),c=3;c<o;c++)i[c-3]=arguments[c];return e.apply(void 0,[n,r,a].concat(i))}}var y="object"===typeof window&&window.Element||function(){};function b(e,t,n){if(!(e[t]instanceof y))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var E=o.a.oneOfType([o.a.string,o.a.func,b,o.a.shape({current:o.a.any})]),N=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),O={Fade:150,Collapse:350,Modal:300,Carousel:600},w=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],k={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},L=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],j=!("undefined"===typeof window||!window.document||!window.document.createElement);function I(e){return!(!e||"object"!==typeof e)&&"current"in e}function S(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function x(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===S(e))return NaN;if(C(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=C(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var r=/^0b[01]+$/i.test(e);return r||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),r?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function C(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function A(e){if(!C(e))return!1;var t=S(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(I(e))return e.current;if(A(e))return e();if("string"===typeof e&&j){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function M(e){return null!==e&&(Array.isArray(e)||j&&"number"===typeof e.length)}function P(e,t){var n=D(e);return t?M(n)?n:null===n?[]:[n]:M(n)?n[0]:n}var B=["touchstart","click"];function q(e,t,n,r){var a=e;M(a)||(a=[a]);var o=n;if("string"===typeof o&&(o=o.split(/\s+/)),!M(a)||"function"!==typeof t||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(a,(function(n){n.addEventListener(e,t,r)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(a,(function(n){n.removeEventListener(e,t,r)}))}))}}var R=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},64:function(e,t,n){"use strict";var r=n(1),a=n(6),o=n(0),i=n.n(o),c=n(12),l=n.n(c),s=n(39),u=n.n(s),d=n(40),f={tag:d.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.fluid,c=e.tag,l=Object(a.a)(e,["className","cssModule","fluid","tag"]),s="container";!0===o?s="container-fluid":o&&(s="container-"+o);var f=Object(d.mapToCssModules)(u()(t,s),n);return i.a.createElement(c,Object(r.a)({},l,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},990:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(8),o=n(13),i=n(10),c=n(9),l=n(0),s=n.n(l),u=n(11),d=n(64),f=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).scrollSection=function(){var e;a.scrollTargetIds.map((function(t,n){e=document.getElementById(t).offsetTop-(a.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0),window.pageYOffset>=e&&window.pageYOffset<e+document.getElementById(t).scrollHeight?(a.getNavLinkElement(t).classList.add(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.add(a.activeNavClass),a.clearOtherNavLinkActiveStyle(t)):(a.getNavLinkElement(t).classList.remove(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.remove(a.activeNavClass)),window.innerHeight+window.pageYOffset>=document.body.scrollHeight&&n===a.scrollTargetIds.length-1&&(a.getNavLinkElement(t).classList.add(a.activeNavClass),a.getNavLinkElement(t).parentNode.classList.add(a.activeNavClass),a.clearOtherNavLinkActiveStyle(t))}))},a.props=e,a.scrollTargetIds=a.props.scrollTargetIds,a.activeNavClass=a.props.activeNavClass,a.scrollDuration=Number(a.props.scrollDuration)||1e3,a.headerBackground="true"===a.props.headerBackground,a.props.router&&"HashRouter"===a.props.router?(a.homeDefaultLink="#/",a.hashIdentifier="#/#"):(a.homeDefaultLink="/",a.hashIdentifier="#"),a.scrollSection.bind(Object(o.a)(a)),a}return Object(a.a)(n,[{key:"easeInOutQuad",value:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},{key:"scrollTo",value:function(e,t,n){var r=this,a=t-e,o=0;!function t(){o+=10;var i=r.easeInOutQuad(o,e,a,n);window.scrollTo(0,i),o<n&&setTimeout(t,10)}()}},{key:"getNavLinkElement",value:function(e){return document.querySelector("a[href='".concat(this.hashIdentifier).concat(e,"']"))}},{key:"getNavToSectionID",value:function(e){return e.includes(this.hashIdentifier)?e.replace(this.hashIdentifier,""):""}},{key:"componentDidMount",value:function(){var e=this;document.querySelector("a[href='".concat(this.homeDefaultLink,"']"))&&document.querySelector("a[href='".concat(this.homeDefaultLink,"']")).addEventListener("click",(function(t){t.preventDefault(),e.scrollTo(window.pageYOffset,0,e.scrollDuration),window.location.hash=""})),document.querySelector("div[data-nav='list']").querySelectorAll("a").forEach((function(t){t.addEventListener("click",(function(n){n.preventDefault();var r=e.getNavToSectionID(t.getAttribute("href"));if(r){var a=document.getElementById(r).offsetTop-(e.headerBackground?document.querySelector("div[data-nav='list']").scrollHeight:0);e.scrollTo(window.pageYOffset,a,e.scrollDuration)}else e.scrollTo(window.pageYOffset,0,e.scrollDuration)}))})),window.addEventListener("scroll",this.scrollSection,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollSection,!0)}},{key:"clearOtherNavLinkActiveStyle",value:function(e){var t=this;this.scrollTargetIds.map((function(n,r){n!==e&&(t.getNavLinkElement(n).classList.remove(t.activeNavClass),t.getNavLinkElement(n).parentNode.classList.remove(t.activeNavClass))}))}},{key:"render",value:function(){return s.a.createElement("div",{"data-nav":"list",className:this.props.className},this.props.children)}}]),n}(l.Component),p=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={navItems:[{id:1,idnm:"home",navheading:"Home"},{id:3,idnm:"service",navheading:"Features"},{id:3,idnm:"testimonial",navheading:"Reviews"},{id:4,idnm:"pricing",navheading:"Pricing"},{id:5,idnm:"gallery",navheading:"Gallery"},{id:6,idnm:"contact",navheading:"Contact"}],isOpen:!1},a.toggleLine=a.toggleLine.bind(Object(o.a)(a)),a}return Object(a.a)(n,[{key:"toggleLine",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this.state.navItems.map((function(e){return e.idnm}));return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{id:"topnav",className:"defaultscroll sticky"},s.a.createElement(d.a,null,s.a.createElement("div",null,s.a.createElement(u.b,{className:"logo",to:"/index"},"Pocket Prayer Mat",s.a.createElement("span",{className:"text-primary"},"."))),s.a.createElement("div",{className:"buy-button"},s.a.createElement(u.b,{to:"https://1.envato.market/4n73n",target:"_blank",className:"btn btn-primary"},"Buy Now")),s.a.createElement("div",{className:"menu-extras"},s.a.createElement("div",{className:"menu-item"},s.a.createElement(u.b,{to:"#",onClick:this.toggleLine,className:this.state.isOpen?"navbar-toggle open":"navbar-toggle"},s.a.createElement("div",{className:"lines"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null))))),s.a.createElement(f,{scrollTargetIds:e,scrollDuration:"800",headerBackground:"false",activeNavClass:"active"},s.a.createElement("div",{id:"navigation",style:{display:this.state.isOpen?"block":"none"}},s.a.createElement("ul",{className:"navigation-menu"},this.state.navItems.map((function(e,t){return s.a.createElement("li",{key:t,className:"has-submenu"},s.a.createElement("a",{href:"#"+e.idnm}," ",e.navheading))}))))))))}}]),n}(l.Component);t.default=p}}]);
//# sourceMappingURL=104.aade07a5.chunk.js.map