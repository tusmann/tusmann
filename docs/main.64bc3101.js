parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"8m4e":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"KA2S"}],"2fws":[function(require,module,exports) {
function n(n,t,o,r,e,i,u){try{var c=n[i](u),v=c.value}catch(a){return void o(a)}c.done?t(v):Promise.resolve(v).then(r,e)}function t(t){return function(){var o=this,r=arguments;return new Promise(function(e,i){var u=t.apply(o,r);function c(t){n(u,e,i,c,v,"next",t)}function v(t){n(u,e,i,c,v,"throw",t)}c(void 0)})}}module.exports=t;
},{}],"0+UA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseArticle=n;var e=r(require("@babel/runtime/regenerator")),t=r(require("@babel/runtime/helpers/asyncToGenerator"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e){return a.apply(this,arguments)}function a(){return(a=(0,t.default)(e.default.mark(function t(r){var n,a,u,o,i,s,l;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r);case 2:return n=e.sent,e.next=5,n.text();case 5:return a=e.sent,u=new DOMParser,o=u.parseFromString(a,"text/html"),i=o.querySelector("body"),s=new URL(r,window.location.href),new URL(window.location.href),l=s.pathname.substring(0,s.pathname.lastIndexOf("/")),i.querySelectorAll("img").forEach(function(e){var t=new URL(e.src),r=t.pathname.split("/"),n=r[r.length-1];e.src=t.origin+l+"/"+n}),e.abrupt("return",{body:i,title:o.querySelector("title").text});case 14:case"end":return e.stop()}},t)}))).apply(this,arguments)}
},{"@babel/runtime/regenerator":"8m4e","@babel/runtime/helpers/asyncToGenerator":"2fws"}],"E6LZ":[function(require,module,exports) {
module.exports="bauhaus.49c996d5.svg";
},{}],"i6hz":[function(require,module,exports) {
module.exports="aldus_leaf.bde2af86.svg";
},{}],"ypA2":[function(require,module,exports) {
module.exports="sakura.2b6c30b4.svg";
},{}],"4qMw":[function(require,module,exports) {
module.exports="die.799ae6a8.svg";
},{}],"MoxC":[function(require,module,exports) {
module.exports="rollingstones.3bda74c6.svg";
},{}],"fqKY":[function(require,module,exports) {
"use strict";function e(){document.querySelectorAll(".reader section").forEach(function(e){for(var t=!1,a=0,r=0,n=Array.from(e.children);r<n.length&&!t;){var l=n[r].clientHeight;console.log(n[r]),console.log(l),"P"==n[r].tagName&&a++,t=Boolean(a>=2&&l>300&&"FIGURE"!==n[r].tagName&&"TABLE"!==n[r].tagName),r++}if(t){r--;var o=document.createElement("div");o.classList.add("left-triangle-shape");var i=document.createElement("div");i.classList.add("right-triangle-shape"),n[r].insertAdjacentElement("beforebegin",o),n[r].insertAdjacentElement("beforebegin",i),o.style.height=l+"px",i.style.height=l+"px"}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"+8F6":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector(".reader header"),t=document.createElement("section");t.className="cube-container";var a=document.createElement("div");a.id="cube",a.className="show-1",t.appendChild(a);for(var o=0;o<20;)if(++o<10){(r=document.createElement("figure")).className="face0"+o;var n=document.createTextNode(o);r.appendChild(n),a.appendChild(r)}else{var r;(r=document.createElement("figure")).className="face"+o;n=document.createTextNode(o);r.appendChild(n),a.appendChild(r)}var c=document.createElement("section");c.id="buttons";var l=document.createElement("input");l.id="roll",l.type="button",l.name="roll",l.value="Roll it!",c.appendChild(l);var d=document.createElement("section");d.id="outcome";var u=document.createElement("div");u.id="text";var i=document.createTextNode("fill me up");u.appendChild(i),d.appendChild(u),e.insertAdjacentElement("afterbegin",t),e.insertAdjacentElement("afterbegin",c),e.insertAdjacentElement("afterbegin",d);var s,m,p=document.getElementById("cube"),f=document.getElementById("outcome"),h=document.getElementById("text"),v=["Your Bard was killed","You smote the orc","You escaped the Ice Dragon","Lightning Bolt succeeded","Critical hit","You are Lawful Evil","You fell into the Well of Sorrows","You found the Goblet of Endless Grog","You encountered a Harpy","Charisma + 10","You lose 11 Hit Points","You disarmed the trap","Plate Mail + 3","14 Damage","Spell failure","Backstab successful","Your wand broke","Surprise Attack","You broke through the door","Critical hit! You pass the exam!"],E=function e(){var t,a,o=(t=1,a=20,Math.floor(Math.random()*(1+a-t))+t);if(p.className==="show-"+o)return e();p.className="show-"+o,s=setTimeout(function(){h.innerHTML=v[o-1],f.className="show",m=setTimeout(function(){f.className=""},4e3)},1e3)};document.getElementById("roll").addEventListener("click",function(){f.className="","number"==typeof s&&(clearTimeout(s),clearTimeout(m)),E()},!1)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"x5ST":[function(require,module,exports) {
"use strict";function e(){for(var e=document.querySelectorAll(".reader figure img"),r=["image-background-color-yellow","image-background-color-green","image-background-color-blue","image-background-color-red"],o=0;o<e.length;o++){var a=e[o],l=a.parentNode,d=document.createElement("div"),t=r[o%r.length];d.classList.add(t),l.replaceChild(d,a),d.appendChild(a)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=e;exports.default=r;
},{}],"RmCr":[function(require,module,exports) {
"use strict";function e(){list=document.querySelectorAll(".reader.sixth img");for(var e=0;e<list.length;++e)list[e].classList.add("picture")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"CAHk":[function(require,module,exports) {

},{}],"RE3q":[function(require,module,exports) {
"use strict";function e(){var e=document.querySelector('meta[property~="dc:publisher"]'),t=e&&e.getAttribute("content");console.log(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"XEZO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=g(require("./images/bauhaus.svg")),i=g(require("./images/aldus_leaf.svg")),u=g(require("./images/sakura.svg")),a=g(require("./images/die.svg")),r=g(require("./images/rollingstones.svg")),l=g(require("./manuzio")),o=g(require("./dungeon")),t=g(require("./rimpa")),n=g(require("./2020")),d=g(require("./rollingDom")),s=g(require("./tschichold"));function g(e){return e&&e.__esModule?e:{default:e}}var f=[{name:"manuzio",icon:i.default,logic:l.default},{name:"rimpa",icon:u.default,logic:t.default},{name:"third",icon:e.default,logic:s.default},{name:"dungeon",icon:a.default,logic:o.default},{name:"fifth",icon:r.default,logic:d.default},{name:"sixth",icon:"",logic:n.default}],c=f;exports.default=c;
},{"./images/bauhaus.svg":"E6LZ","./images/aldus_leaf.svg":"i6hz","./images/sakura.svg":"ypA2","./images/die.svg":"4qMw","./images/rollingstones.svg":"MoxC","./manuzio":"fqKY","./dungeon":"+8F6","./rimpa":"x5ST","./2020":"RmCr","./rollingDom":"CAHk","./tschichold":"RE3q"}],"uMzG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyCustomStyleLogic=o;var e=t(require("./styles"));function t(e){return e&&e.__esModule?e:{default:e}}function o(){e.default.forEach(function(e){document.querySelector(".reader").classList.contains(e.name)&&void 0!==e.logic&&e.logic()})}
},{"./styles":"XEZO"}],"QFLc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addSpecialArticle=a,exports.addArticle=d;var e=c(require("@babel/runtime/regenerator")),r=c(require("@babel/runtime/helpers/asyncToGenerator")),t=require("./article-parser"),n=require("./customStyleLogic.js");function c(e){return e&&e.__esModule?e:{default:e}}function a(e,r){return o.apply(this,arguments)}function o(){return(o=(0,r.default)(e.default.mark(function r(c,a){var o,d,i,u,s,l,m,f;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.parseArticle)(c);case 2:return o=e.sent,e.next=5,(0,t.parseArticle)(a);case 5:d=e.sent,document.querySelectorAll(".jumbo, .tutorialPageSection, .aboutPageSection, .documentationPageSection, .disclaimerPageSection").forEach(function(e){e.classList.add("hidden")}),document.querySelector(".reader").className=document.querySelector(".reader").className.replace(/(?:^|\s)hidden(?!\S)/g,""),document.querySelector(".reader").innerHTML="",document.querySelector(".changeTheme").classList.add("hidden"),(i=document.createElement("section")).className="grid-container",document.querySelector(".reader").insertAdjacentElement("afterbegin",i),u=document.createElement("section"),s=document.createElement("section"),u.className="reader right",s.className="reader left",(l=document.querySelector("section.grid-container")).insertAdjacentElement("afterbegin",u),l.insertAdjacentElement("afterbegin",s),m=document.querySelector("section.reader.left"),Array.from(o.body.childNodes).forEach(function(e){m.appendChild(e)}),f=document.querySelector("section.reader.right"),Array.from(d.body.childNodes).forEach(function(e){f.appendChild(e)}),(0,n.applyCustomStyleLogic)();case 29:case"end":return e.stop()}},r)}))).apply(this,arguments)}function d(e){return i.apply(this,arguments)}function i(){return(i=(0,r.default)(e.default.mark(function r(c){var a,o,d;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,t.parseArticle)(c);case 2:a=e.sent,document.querySelectorAll(".jumbo, .tutorialPageSection, .aboutPageSection, .documentationPageSection, .disclaimerPageSection").forEach(function(e){e.classList.add("hidden")}),document.querySelector(".reader").className=document.querySelector(".reader").className.replace(/(?:^|\s)hidden(?!\S)/g,""),o=document.querySelector("section.grid-container"),document.body.contains(o)&&(o.classList.add("reader"),o.classList.remove("grid-container"),Array.from(o.childNodes).forEach(function(e){o.removeChild(e)})),document.querySelector(".reader").innerHTML="",document.querySelector(".changeTheme").classList.add("hidden"),d=document.querySelector(".reader"),Array.from(a.body.childNodes).forEach(function(e){d.appendChild(e)}),(0,n.applyCustomStyleLogic)();case 14:case"end":return e.stop()}},r)}))).apply(this,arguments)}
},{"@babel/runtime/regenerator":"8m4e","@babel/runtime/helpers/asyncToGenerator":"2fws","./article-parser":"0+UA","./customStyleLogic.js":"uMzG"}],"lt/V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.articlesSidebarSelection=l,exports.specialArticleSidebarSelection=a;var e=require("./article-parser"),t=require("./addArticle.js"),r=[{title:"Japan's Prisons Are a Haven for Elderly Women",url:"./articles/Bloomberg/ShihoFukada.html"},{title:"As Goes the South, so Goes the Nation",url:"./articles/Harpers/ImaniPerry.html"},{title:"Jerry And Marge Go Large",url:"./articles/HuffingtonPost/JasonFagone.html"},{title:"How Anna Delvey Tricked New York’s Party People",url:"./articles/TheCut/JessicaPresler.html"},{title:"God is in the machine",url:"./articles/Times Literary Supplement/CarlMiller.html"}];function l(){r.forEach(function(e){var r=document.createElement("li"),l=document.createElement("a");l.className="close-menu-doc",l.appendChild(document.createTextNode(e.title)),r.appendChild(l),l.addEventListener("click",function(){(0,t.addArticle)(e.url)}),document.querySelector(".placeholder").insertAdjacentElement("afterbegin",r)})}function a(e,r,l){var a=document.createElement("li"),n=document.createElement("a");n.className="close-menu-doc",n.appendChild(document.createTextNode(e)),a.appendChild(n),n.addEventListener("click",function(){return(0,t.addSpecialArticle)(r,l)}),document.querySelector(".placeholder").insertAdjacentElement("afterbegin",a)}
},{"./article-parser":"0+UA","./addArticle.js":"QFLc"}],"T8xT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stylesSidebarSelection=c;var e=t(require("./styles"));function t(e){return e&&e.__esModule?e:{default:e}}function c(){e.default.forEach(function(t){var c=document.createElement("div");c.className="opened-doc-list doc-sel",c.href="#";var r=document.createElement("embed");r.className="icn",r.src=t.icon,c.appendChild(r),document.querySelector("nav").insertAdjacentElement("afterbegin",c),c.addEventListener("click",function(){e.default.forEach(function(e){document.querySelector(".reader").classList.remove(e.name)}),document.querySelector(".reader").classList.add(t.name),document.querySelector(".reader").innerHTML="",document.querySelector(".changeTheme").classList.remove("hidden"),document.querySelectorAll(".jumbo, .tutorialPageSection, .disclaimerPageSection, .reader, .documentationPageSection, .aboutPageSection").forEach(function(e){e.classList.add("hidden")}),document.querySelector(".footerRights").classList.remove("hidden"),document.querySelector(".footerArticleLink").classList.add("hidden"),document.querySelector(".jumbo").classList.add("hidden")})})}
},{"./styles":"XEZO"}],"ZxGC":[function(require,module,exports) {
"use strict";function e(){function e(){document.querySelector(".nav-list").className=document.querySelector(".nav-list").className.replace(/(?:^|\s)hidden(?!\S)/g,"")}function c(){document.querySelector(".nav-list").classList.add("hidden")}document.querySelectorAll(".doc-sel").forEach(function(c){c.addEventListener("click",e)}),document.querySelector(".doc-close").addEventListener("click",c),document.querySelectorAll(".close-menu-doc").forEach(function(e){e.addEventListener("click",c)});var t=document.querySelector(".container"),n=document.querySelectorAll(".opened-doc-list"),o=document.querySelector(".close-menu"),l=document.querySelectorAll(".close-menu-doc"),r=function(){t.classList.toggle("opened-nav")};n.forEach(function(e){e.addEventListener("click",r,!1)}),o.addEventListener("click",r,!1),l.forEach(function(e){e.addEventListener("click",r,!1)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.sidebar=e;
},{}],"w5Td":[function(require,module,exports) {
"use strict";function e(){document.querySelector(".aboutPageButton").onclick=function(){document.querySelector(".footerRights").classList.remove("hidden"),document.querySelector(".footerArticleLink").classList.add("hidden"),document.querySelector(".aboutPageSection").classList.remove("hidden"),document.querySelectorAll(".jumbo, .tutorialPageSection, .disclaimerPageSection, .reader, .documentationPageSection, .changeTheme").forEach(function(e){e.classList.add("hidden")})},document.querySelector(".disclaimerPageButton").onclick=function(){document.querySelector(".footerRights").classList.remove("hidden"),document.querySelector(".footerArticleLink").classList.add("hidden"),document.querySelector(".disclaimerPageSection").classList.remove("hidden"),document.querySelectorAll(".jumbo, .tutorialPageSection, .aboutPageSection, .reader, .documentationPageSection, .changeTheme").forEach(function(e){e.classList.add("hidden")})},document.querySelector(".documentationPageButton").onclick=function(){document.querySelector(".footerRights").classList.remove("hidden"),document.querySelector(".footerArticleLink").classList.add("hidden"),document.querySelector(".documentationPageSection").classList.remove("hidden"),document.querySelectorAll(".jumbo, .tutorialPageSection, .aboutPageSection, .reader, .disclaimerPageSection, .changeTheme").forEach(function(e){e.classList.add("hidden")})},document.querySelector(".tutorialPageButton").onclick=function(){document.querySelector(".tutorialPageSection").classList.remove("hidden"),document.querySelectorAll(".jumbo, .aboutPageSection, .reader, .disclaimerPageSection, .changeTheme").forEach(function(e){e.classList.add("hidden")})};var e,t=document.getElementsByClassName("collapsible");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addDocumentationPages=e;
},{}],"6F76":[function(require,module,exports) {
"use strict";function e(){function e(){document.getElementById("myNav").style.height="0%"}document.querySelector(".navMenu").addEventListener("click",function(){document.getElementById("myNav").style.height="100%"}),document.querySelector(".closebtn").addEventListener("click",e),document.querySelector(".aboutPageButton").addEventListener("click",e),document.querySelector(".documentationPageButton").addEventListener("click",e),document.querySelector(".disclaimerPageButton").addEventListener("click",e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.overlayMenu=e;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=require("./article-parser"),t=require("./addArticle.js"),r=require("./articlesSelectionButtons"),o=require("./createThemeButtons"),i=require("./sidebar"),n=require("./addDocumentationPages"),a=require("./overlayMenu");Object.prototype.forEach||Object.defineProperty(Object.prototype,"forEach",{value:function(e,t){if(null==this)throw new TypeError("Not an object");for(var r in t=t||window,this)this.hasOwnProperty(r)&&e.call(t,this[r],r,this)}}),(0,o.stylesSidebarSelection)(),(0,r.articlesSidebarSelection)(),(0,r.specialArticleSidebarSelection)("EUR-Lex","./articles/EUDirective/L125-75.html","./articles/EUDirective/EUDirectiveItalian.html"),(0,i.sidebar)(),(0,n.addDocumentationPages)(),(0,a.overlayMenu)();var s={"EUR-Lex":"https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1552167424995&uri=CELEX:32009L0041","Japan's Prisons Are a Haven for Elderly Women":"https://www.bloomberg.com/news/features/2018-03-16/japan-s-prisons-are-a-haven-for-elderly-women","As Goes the South, so Goes the Nation":"https://harpers.org/archive/2018/07/as-goes-the-south-so-goes-the-nation/","Jerry And Marge Go Large":"https://highline.huffingtonpost.com/articles/en/lotto-winners/","How Anna Delvey Tricked New York’s Party People":"https://www.thecut.com/2018/05/how-anna-delvey-tricked-new-york.html","God is in the machine":"https://www.the-tls.co.uk/articles/public/ridiculously-complicated-algorithms/"};function c(){s.forEach(function(e,t){var r=t,o=e;document.querySelectorAll("a.close-menu-doc").forEach(function(e){e.textContent==r&&e.addEventListener("click",function(){document.querySelector("a.footerLink").href=o,document.querySelector(".footerRights").classList.add("hidden"),document.querySelector(".footerArticleLink").classList.remove("hidden")})})})}c();
},{"./article-parser":"0+UA","./addArticle.js":"QFLc","./articlesSelectionButtons":"lt/V","./createThemeButtons":"T8xT","./sidebar":"ZxGC","./addDocumentationPages":"w5Td","./overlayMenu":"6F76"}]},{},["epB2"], null)
//# sourceMappingURL=main.64bc3101.js.map