!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=require("react")},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=s(n(0)),c=a(n(7)),f=a(n(2)),p=function(t){function e(e){var n=t.call(this,e)||this;return n.state={components:[]},n.addComponent=n.addComponent.bind(n),n}return o(e,t),e.prototype.componentDidMount=function(){f.default.events.on("ui-added",this.addComponent,this)},e.prototype.addComponent=function(t){this.setState({components:i([t],this.state.components)})},e.prototype.render=function(){var t=this.state.components;return u.default.createElement(u.default.Fragment,null,t.map((function(t){var e=t.Component,n=t.props,r=t.manager;return u.default.createElement(c.default,{Comp:e,extraProps:n,manager:r})})))},e}(u.Component);e.default=p},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(8)),s=function(){function t(t){this.events=new i.default,this.id=t,this.state={}}return t.prototype.setState=function(t){this.state=r(r({},this.state),t),this.events.emit("state-change",this.state)},t}();e.ComponentManager=s;var a=function(){function t(){this.events=new i.default,this.lastID=0}return t.prototype.addUI=function(t,e){this.lastID++;var n=new s(this.lastID);return this.events.emit("ui-added",{manager:n,Component:t,props:e}),n},t.prototype.removeUI=function(t){this.events.emit("ui-removed",t)},t}();e.default=new a},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(4)),i=n(1);e.Renderer=i.default,e.default=o.default},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(5),u=s(n(0)),c=s(n(6)),f=s(n(1)),p=s(n(2)),l={parent:"",dontInjectReact:!1},h=function(t){function e(e){var n=t.call(this,e)||this;return e.registerGameObject("reactDom",n.createReactDom),n}return o(e,t),e.prototype.init=function(t){t=i(i({},l),t);this.game.config.parent;if(!t.dontInjectReact)if(t.parent)c.default.render(u.default.createElement(f.default,null),document.getElementById(t.parent));else{var e=document.createElement("div"),n=document.createElement("div");document.body.appendChild(e),e.appendChild(this.game.canvas),e.appendChild(n),c.default.render(u.default.createElement(f.default,null),e)}},e.prototype.createReactDom=function(t,e){return p.default.addUI(t,e)},e}(a.Plugins.BasePlugin);e.default=h},function(t,e){t.exports=require("phaser")},function(t,e){t.exports=require("react-dom")},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=s(n(0)),u=function(t){function e(e){var n=t.call(this,e)||this;return n.state=i({},e.extraProps),n.stateManager=e.manager,n}return o(e,t),e.prototype.componentDidMount=function(){this.stateManager.events.on("state-change",this.setState,this)},e.prototype.render=function(){var t=this.props,e=t.Comp,n=t.manager;return a.default.createElement(e,i({manager:n},this.state))},e}(a.Component);e.default=u},function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o="~";function i(){}function s(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function a(t,e,n,r,i){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new s(n,r||t,i),u=o?o+e:e;return t._events[u]?t._events[u].fn?t._events[u]=[t._events[u],a]:t._events[u].push(a):(t._events[u]=a,t._eventsCount++),t}function u(t,e){0==--t._eventsCount?t._events=new i:delete t._events[e]}function c(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(o=!1)),c.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)r.call(t,e)&&n.push(o?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},c.prototype.listeners=function(t){var e=o?o+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,s=new Array(i);r<i;r++)s[r]=n[r].fn;return s},c.prototype.listenerCount=function(t){var e=o?o+t:t,n=this._events[e];return n?n.fn?1:n.length:0},c.prototype.emit=function(t,e,n,r,i,s){var a=o?o+t:t;if(!this._events[a])return!1;var u,c,f=this._events[a],p=arguments.length;if(f.fn){switch(f.once&&this.removeListener(t,f.fn,void 0,!0),p){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,e),!0;case 3:return f.fn.call(f.context,e,n),!0;case 4:return f.fn.call(f.context,e,n,r),!0;case 5:return f.fn.call(f.context,e,n,r,i),!0;case 6:return f.fn.call(f.context,e,n,r,i,s),!0}for(c=1,u=new Array(p-1);c<p;c++)u[c-1]=arguments[c];f.fn.apply(f.context,u)}else{var l,h=f.length;for(c=0;c<h;c++)switch(f[c].once&&this.removeListener(t,f[c].fn,void 0,!0),p){case 1:f[c].fn.call(f[c].context);break;case 2:f[c].fn.call(f[c].context,e);break;case 3:f[c].fn.call(f[c].context,e,n);break;case 4:f[c].fn.call(f[c].context,e,n,r);break;default:if(!u)for(l=1,u=new Array(p-1);l<p;l++)u[l-1]=arguments[l];f[c].fn.apply(f[c].context,u)}}return!0},c.prototype.on=function(t,e,n){return a(this,t,e,n,!1)},c.prototype.once=function(t,e,n){return a(this,t,e,n,!0)},c.prototype.removeListener=function(t,e,n,r){var i=o?o+t:t;if(!this._events[i])return this;if(!e)return u(this,i),this;var s=this._events[i];if(s.fn)s.fn!==e||r&&!s.once||n&&s.context!==n||u(this,i);else{for(var a=0,c=[],f=s.length;a<f;a++)(s[a].fn!==e||r&&!s[a].once||n&&s[a].context!==n)&&c.push(s[a]);c.length?this._events[i]=1===c.length?c[0]:c:u(this,i)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=o?o+t:t,this._events[e]&&u(this,e)):(this._events=new i,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=o,c.EventEmitter=c,t.exports=c}])}));