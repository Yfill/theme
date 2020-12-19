/*! @yfill/theme v1.1.1 | Sat, 19 Dec 2020 05:50:46 GMT | https://yfill.cn/theme */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Theme=n()}(this,(function(){"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function f(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=u(t);if(n){var o=u(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;
/*! @yfill/event-hub v1.0.2 | Tue, 17 Nov 2020 17:23:11 GMT | https://yfill.cn/event-hub */
var h=function(t){var n={exports:{}};return t(n,n.exports),n.exports}((function(t,n){t.exports=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var r,o=function(t){var n=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(t[e]);return n};!function(t){t.Creating="Creating",t.Activated="Activated",t.Destroyed="Destroyed"}(r||(r={}));var a=0,i=0,u={},c={},l=function(){return"".concat(a+=1)},f=function(t,n){return t["$event-type-".concat(n)]||""},s=function(t,n,e){t["$event-type-".concat(n)]=e},p=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(n&&e){var o=t[n]||{},a=f(e,n)||l(),i=o[a]||[[],[]];r?i[1].push(e):i[0].push(e),o[a]=i,t[n]=o,s(e,n,a)}},h=function(t,n,e){e?delete(t[n]||{})["".concat(f(e,n))]:delete t[n]},d=function(t,e){for(var r=arguments.length,a=new Array(r>2?r-2:0),i=2;i<r;i++)a[i-2]=arguments[i];o(t[e]||{}).forEach((function(t){[].concat(n(t[0]),n(t[1])).forEach((function(t){return t.apply(void 0,a)})),t[1]=[]}))},v=function(t,n){t===r.Activated&&n()},m=function(){function n(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.status=r.Creating,this.id="".concat(i+=1),c[this.id]={},this.status=r.Activated}var e,o,a;return e=n,a=[{key:"create",value:function(){return new n}}],(o=[{key:"on",value:function(t,n){var e=this;return v(this.status,(function(){return p(c[e.id],t,n)})),this}},{key:"once",value:function(t,n){var e=this;return v(this.status,(function(){return p(c[e.id],t,n,!0)})),this}},{key:"off",value:function(t,n){var e=this;return v(this.status,(function(){return h(c[e.id],t,n)})),this}},{key:"emit",value:function(t){for(var n=this,e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return v(this.status,(function(){return d.apply(void 0,[c[n.id],t].concat(r))})),this}},{key:"destroy",value:function(){delete c[this.id],this.status=r.Destroyed}}])&&t(e.prototype,o),a&&t(e,a),n}();return m.on=function(t,n){return p(u,t,n)},m.once=function(t,n){return p(u,t,n,!0)},m.off=function(t,n){return h(u,t,n)},m.emit=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return d.apply(void 0,[u,t].concat(e))},m}()})),d="light",v="dark",m=d,y=v,b="main",g="mounted",k="unmounted",x=[m,y,b],w=function(t,n){for(var e=t.length,r=0;r<e;r+=1)if(t[r]===n)return!0;return!1},S=function(t){return t.filter((function(t){return null!=t}))},O=function(t,n){return!t||w([m,y],t)?n:n.map((function(n){var e=s(n,2);return[e[0],e[1].map((function(n){return"".concat(n,"-").concat(t)}))]}))},M=function(t,n,e,r){return n.reduce((function(n,o){var a=t;e&&(a=O(e,a));var i=s(o,2),u=i[0],c=i[1],l=["default","hover"];return"".concat(n).concat(a.reduce((function(t,n){var e=s(n,2),o=e[0],a=e[1];return t+l.reduce((function(t,n){var e="default"===n;return"".concat(t).concat(c.map((function(t){return a.map((function(o){return"[".concat(r?"".concat(r,"-"):"").concat(o,"-").concat(t).concat(e?"":"-".concat(n),"]").concat(e?"":":".concat(n))})).join(",")})).join(","),"{").concat(o,":").concat(u).concat(e?"":" !important",";}")}),"")}),""))}),"")},C=function(t,n,e,r){return n.reduce((function(n,o){var a=t;e&&(a=O(e,a));var i=s(o,2),u=i[0],c=i[1];return"".concat(n).concat(a.reduce((function(t,n){var e=n[1];return t+c.reduce((function(t,n){return t+e.map((function(t){return"--".concat(r?"".concat(r,"-"):"").concat(t,"-").concat(n,":").concat(u,";")})).join("")}),"")}),""))}),"")},j=function t(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return r.length>=n.length?n.apply(void 0,r):function(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return t.apply(void 0,[n].concat(r,o))}},A=function(t){if(!t)throw new TypeError("The color value cannot be empty");if(!/^#([\da-fA-F]{6}|[\da-fA-F]{3})$/.test(t))throw new TypeError("The color value(".concat(t,") needs to be a hex value"))},P=function(t){A(t);var n=t.replace("#","");return(3===n.length?n.split("").map((function(t){return t+t})):n.match(/../g)||[]).map((function(t){return parseInt(t,16)}))},V=function(t,n,e){var r=/^\d{1,3}$/;if(!r.test("".concat(t))||!r.test("".concat(n))||!r.test("".concat(e)))throw new TypeError("rgb error");var o=[t.toString(16),n.toString(16),e.toString(16)];return"#".concat(o.map((function(t){return 1===t.length?"0".concat(t):t})).join(""))},T=function(t,n,e){return P(t).map((function(t){return function(t){return Math.max(0,Math.min(255,t))}(e?Math.round((255-t)*n+t):Math.round(t*(1-n)))}))},E=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];A(t);var r=Math.max(0,Math.min(1,Math.abs(n))),o=n>=0,a=T(t,r,o);return e?"rgba(".concat(P(t).join(","),",").concat((1-r).toFixed(3),")"):V(a[0],a[1],a[2])},N=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E(t,-n,e)},z=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E(t,n,e)},G=function(t,n,e,r,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=(n||[])[o];return i||(e===y?z(t,o/r,a):e===m?N(t,o/r,a):z(t,o/r,a))},I=function(t,n){return t},D=function(t,n){return w([m,y],n)?n===y?z(t,.09):N(t,.09):t},F=function(t,n){return w([m,y],n)?n===y?z(t,.78):N(t,.78):t},L=function n(e){var r,o,a;t(this,n);var i=Math.max(null!==(r=e.maxLevel)&&void 0!==r?r:10,(null!==(o=null===(a=e.colorGroup)||void 0===a?void 0:a.length)&&void 0!==o?o:0)-1),u=j(G,e.color,e.colorGroup,e.mark,i);this.mark=e.mark,this.prefix=e.prefix,this.colorValueNames=n.getValueNames(u,i,e.nameMapGroup[0])};L.getValueNames=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Array.apply(null,Array(n+1)).reduce((function(n,r,o){return n.concat([!1,!0].map((function(n){return[t(o,n),S(["".concat(o).concat(n?"-a":""),e[o]])]}))).concat(0===o?[]:[!1,!0].map((function(n){return[t(-o,n),S(["".concat(-o).concat(n?"-a":""),e[-o]])]})))}),[])};var _=function(n){i(o,n);var r=f(o);function o(){return t(this,o),r.apply(this,arguments)}return e(o,[{key:"exportStyle",value:function(){return M(o.colorPropMark,this.colorValueNames,this.mark,this.prefix)}},{key:"exportCssVariables",value:function(){return C(o.colorPropMark,this.colorValueNames,this.mark,this.prefix)}}]),o}(L);_.colorPropMark=[["background-color",["background-color"]]];var R=function(n){i(o,n);var r=f(o);function o(){return t(this,o),r.apply(this,arguments)}return e(o,[{key:"exportStyle",value:function(){return M(o.colorPropMarks,this.colorValueNames,this.mark,this.prefix)}},{key:"exportCssVariables",value:function(){return C(o.colorPropMarks,this.colorValueNames,this.mark,this.prefix)}}]),o}(L);R.colorPropMarks=[["border-color",["border-color"]],["border-top-color",["border-top-color"]],["border-bottom-color",["border-bottom-color"]],["border-left-color",["border-left-color"]],["border-right-color",["border-right-color"]]];var $=function(n){i(o,n);var r=f(o);function o(n){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:52,u=arguments.length>3?arguments[3]:void 0;t(this,o),e=r.call(this,n);var c=parseInt(window.getComputedStyle(document.documentElement).fontSize,10),l=Math.max(12,a),f=Math.max(Math.max(12,i),l),s=n.nameMapGroup[1]||{};return e.fontSizeValueNames=Array.apply(null,Array(f-l+1)).map((function(){return l})).map((function(t,n){return t+n})).map((function(t){return["".concat(t/c,"rem"),S(["".concat(t),s[t]])]})),e.color=n.color,e.placeholderColor=u||"",e}return e(o,[{key:"getPlaceholderStyle",value:function(){var t=this;return w([m,y],this.mark)?["input","textarea"].reduce((function(n,e){return n+["::placeholder","::-webkit-input-placeholder","::-moz-placeholder",":-moz-placeholder",":-ms-input-placeholder"].reduce((function(n,r){return"".concat(n,"\n              ").concat(e).concat(r,"{\n                color:").concat(t.placeholderColor||(t.mark===y?N(t.color,.6):z(t.color,.6))," !important;\n              }\n            ")}),"")}),"").replace(/\s/g,""):""}},{key:"exportStyle",value:function(){return(w([m,y],this.mark)?M(o.sizePropMarks,this.fontSizeValueNames,this.mark,this.prefix)+this.getPlaceholderStyle():"")+M(o.colorPropMarks,this.colorValueNames,this.mark,this.prefix)}},{key:"exportCssVariables",value:function(){return C(o.colorPropMarks,this.colorValueNames,this.mark,this.prefix)}}]),o}(L);$.colorPropMarks=[["color",["font-color"]]],$.sizePropMarks=[["font-size",["font-size"]]];var H=function(n){i(o,n);var r=f(o);function o(n){var e;t(this,o),e=r.call(this,n);var a=j((function(t){return E(w([y,m],e.mark)?"#000000":E(n.color,-.16),t,!0)})),i=n.nameMapGroup[1]||{};return e.shadowBoxValueNames=["0 1px 2px -2px ".concat(a(.84),",0 3px 6px 0 ").concat(a(.88),",0 5px 12px 4px ").concat(a(.91)),"0 3px 6px -4px ".concat(a(.88),",0 6px 16px 0 ").concat(a(.92),",0 9px 28px 8px ").concat(a(.95)),"0 6px 16px -8px ".concat(a(.92),",0 9px 28px 0 ").concat(a(.95),",0 12px 48px 16px ").concat(a(.97))].map((function(t,n){return[t,S(["".concat(n),i[n]])]})),e}return e(o,[{key:"exportStyle",value:function(){return M(o.shadowPropMarks,this.shadowBoxValueNames,this.mark,this.prefix)}},{key:"exportCssVariables",value:function(){return C(o.shadowPropMarks,this.shadowBoxValueNames,this.mark,this.prefix)}}]),o}(L);H.shadowPropMarks=[["box-shadow",["box-shadow"]]];var B,q=function(t,n){var e=t.color,r=t.placeholderColor,o=t.backgroundColor,i=t.borderColor,u=t.fontColor,c=t.backgroundColorGroup,l=t.backgroundColorNameMap,f=t.borderColorGroup,s=t.borderColorNameMap,p=t.fontColorGroup,h=t.fontColorNameMap,d=t.fontSizeNameMap,v=t.boxShadowNameMap,m=t.mark,y={maxLevel:n.maxLevel,prefix:n.prefix,mark:m},b=[new _(a(a({},y),{},{color:o||I(e),colorGroup:c,nameMapGroup:[l]})),new R(a(a({},y),{},{color:i||D(e,m),colorGroup:f,nameMapGroup:[s]})),new $(a(a({},y),{},{color:u||F(e,m),colorGroup:p,nameMapGroup:[h,d]}),n.minFontSize,n.maxFontSize,r),new H(a(a({},y),{},{color:e,nameMapGroup:[void 0,v]}))];return{mount:function(){var t=document.head;if(!t.querySelector('[theme-item="'.concat(m,'"]'))){var e=document.createElement("style");e.innerText=b.map((function(t){return t.exportStyle()})).join("")+(n.enableCssVariables?":root{".concat(b.map((function(t){return t.exportCssVariables()})).join(""),"}"):""),e.setAttribute("theme-item",m),t.appendChild(e)}},umount:function(){var t=document.head,n=t.querySelector('[theme-item="'.concat(m,'"]'));n&&t.removeChild(n)}}},J="#ffffff",U={color:J,mark:d,backgroundColor:I(J),borderColor:D(J,d),fontColor:F(J,d)},Z="#191919",K={color:Z,mark:v,backgroundColor:I(Z),borderColor:D(Z,v),fontColor:F(Z,v)},Q="#1890ff",W={color:Q,mark:b,backgroundColor:I(Q),borderColor:D(Q,b),fontColor:F(Q,b)},X=function(t){var n=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(t[e]);return n},Y=function(){var t;return(t=console).error.apply(t,arguments)},tt=new h,nt=tt.on.bind(tt),et=tt.off.bind(tt),rt=tt.emit.bind(tt),ot=function(){var t=null;try{t=localStorage.getItem("themeInstance@mode")}catch(n){Y(n.message),t=null}return w([d,v],t)||(t=null),t},at=function(t){var n,e;n="theme-mode",e=t,document.documentElement.setAttribute(n,e);try{localStorage.setItem("themeInstance@mode",t)}catch(t){Y(t.message)}},it={lightStyle:null,darkStyle:null,mainStyle:null,otherStyleMap:{},commonThemeOpt:{prefix:""},initialLightOpt:null,initialDarkOpt:null,initialMainOpt:null},ut=((B=function(){function n(e){t(this,n),this.mode=d,this.status="notMounted";var r=e||{lightOpt:U,darkOpt:K,mainOpt:W,mode:d,prefix:"",minFontSize:12,maxFontSize:52,maxLevel:10,enableCssVariables:!1},o=r.lightOpt,i=void 0===o?U:o,u=r.darkOpt,c=void 0===u?K:u,l=r.mainOpt,f=void 0===l?W:l,s=r.mode,p=void 0===s?d:s,h=r.prefix,v=void 0===h?"":h,g=r.minFontSize,k=void 0===g?12:g,x=r.maxFontSize,w=void 0===x?52:x,S=r.maxLevel,O=void 0===S?10:S,M=r.enableCssVariables,C=void 0!==M&&M;if(window.themeInstance)return window.themeInstance;v&&!/^[a-zA-Z]/.test("".concat(v))&&function(){var t;(t=console).warn.apply(t,arguments)}("The prefix must start with a letter"),it.commonThemeOpt={prefix:v,minFontSize:k,maxFontSize:w,maxLevel:O,enableCssVariables:C},this.mode=ot()||p;var j=it.commonThemeOpt,A=a(a({},i||U),{},{color:(null==i?void 0:i.color)||U.color,mark:m}),P=a(a({},c||K),{},{color:(null==c?void 0:c.color)||K.color,mark:y}),V=a(a({},f||W),{},{color:(null==f?void 0:f.color)||W.color,mark:b});it.initialLightOpt=A,it.initialDarkOpt=P,it.initialMainOpt=V,it.lightStyle=q(A,j),it.darkStyle=q(P,j),it.mainStyle=q(V,j),ut.instance=this,at(this.mode),window.themeInstance=this}return e(n,[{key:"storageHandler",value:function(){var t=ot();t&&ut.change(t)}},{key:"mount",value:function(){var t,n,e;return this.status===g||(this.mode===d?null===(t=it.lightStyle)||void 0===t||t.mount():this.mode===v&&(null===(n=it.darkStyle)||void 0===n||n.mount()),null===(e=it.mainStyle)||void 0===e||e.mount(),X(it.otherStyleMap).forEach((function(t){return t.mount()})),this.status=g,rt("mount",this),window.addEventListener("storage",this.storageHandler)),this}},{key:"umount",value:function(){var t,n,e;return this.status===k||(null===(t=it.lightStyle)||void 0===t||t.umount(),null===(n=it.darkStyle)||void 0===n||n.umount(),null===(e=it.mainStyle)||void 0===e||e.umount(),X(it.otherStyleMap).forEach((function(t){return t.umount()})),this.status=k,rt("umount",this),window.removeEventListener("storage",this.storageHandler)),this}},{key:"add",value:function(t){var n=t.mark;if(!n||w(x,n))return this;var e=q(t,it.commonThemeOpt);return e.mount(),it.otherStyleMap[n]=e,rt("add",t),this}},{key:"remove",value:function(t){if(t){var n=it.otherStyleMap[t];null==n||n.umount(),delete it.otherStyleMap[t],rt("remove",t)}return this}},{key:"update",value:function(t){var n=t.mark;if(!w(x,n)&&!it.otherStyleMap[n])return this;var e,r,o=q(t,it.commonThemeOpt);if(n===m)null===(e=it.lightStyle)||void 0===e||e.umount(),it.lightStyle=o,this.mode===d&&(null===(r=it.lightStyle)||void 0===r||r.mount());else if(n===y){var a,i;null===(a=it.darkStyle)||void 0===a||a.umount(),it.darkStyle=o,this.mode===v&&(null===(i=it.darkStyle)||void 0===i||i.mount())}else if(n===b){var u,c;null===(u=it.mainStyle)||void 0===u||u.umount(),it.mainStyle=o,null===(c=it.mainStyle)||void 0===c||c.mount()}else{var l,f;null===(l=it.otherStyleMap[n])||void 0===l||l.umount(),it.otherStyleMap[n]=o,null===(f=it.otherStyleMap[n])||void 0===f||f.mount()}return rt("update",t),this}},{key:"refresh",value:function(){return this.umount().mount(),rt("refresh",this),this}},{key:"change",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.mode===d?v:d;return t===this.mode||(this.mode=t,this.refresh(),at(this.mode),rt("change",t)),this}},{key:"getStore",value:function(){return JSON.parse(JSON.stringify(it))}},{key:"install",value:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return t.install.apply(t,[ut.instance].concat(e)),this}},{key:"use",value:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return this.install.apply(this,[t].concat(e))}},{key:"uninstall",value:function(t){return t.uninstall(ut.instance),this}},{key:"on",value:function(t,n){return nt(t,n),this}},{key:"off",value:function(t,n){return et(t,n),this}},{key:"emit",value:function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return rt.apply(void 0,[t].concat(e)),this}}],[{key:"run",value:function(t){return new ut(t).mount()}},{key:"mount",value:function(){var t;return null===(t=ut.instance)||void 0===t?void 0:t.mount()}},{key:"umount",value:function(){var t;return null===(t=ut.instance)||void 0===t?void 0:t.umount()}},{key:"add",value:function(t){var n;return null===(n=ut.instance)||void 0===n?void 0:n.add(t)}},{key:"remove",value:function(t){var n;return null===(n=ut.instance)||void 0===n?void 0:n.remove(t)}},{key:"update",value:function(t){var n;return null===(n=ut.instance)||void 0===n?void 0:n.update(t)}},{key:"refresh",value:function(){var t;return null===(t=ut.instance)||void 0===t?void 0:t.refresh()}},{key:"change",value:function(t){var n;return null===(n=ut.instance)||void 0===n?void 0:n.change(t)}},{key:"install",value:function(t){for(var n,e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return null===(n=ut.instance)||void 0===n?void 0:n.install.apply(n,[t].concat(r))}},{key:"use",value:function(t){for(var n,e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return null===(n=ut.instance)||void 0===n?void 0:n.install.apply(n,[t].concat(r))}},{key:"uninstall",value:function(t){var n;return null===(n=ut.instance)||void 0===n?void 0:n.uninstall(t)}},{key:"getStore",value:function(){var t;return null===(t=ut.instance)||void 0===t?void 0:t.getStore()}},{key:"on",value:function(t,n){var e;return null===(e=ut.instance)||void 0===e?void 0:e.on(t,n)}},{key:"off",value:function(t,n){var e;return null===(e=ut.instance)||void 0===e?void 0:e.off(t,n)}},{key:"emit",value:function(t){for(var n,e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return null===(n=ut.instance)||void 0===n?void 0:n.emit.apply(n,[t].concat(r))}}]),n}()).EventHub=h,B.instance=null,B);return ut}));
