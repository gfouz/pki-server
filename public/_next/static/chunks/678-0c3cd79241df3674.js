(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,l=n(r(7294)),u=r(4532),a=r(3353),c=r(1410),f=r(9064),s=r(370),i=r(9955),p=r(4224),d=r(508),y=r(1516),h=r(4266);let g=new Set;function b(e,t,r,n,o){if(o||a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:c.formatUrl(e)}let w=l.default.forwardRef(function(e,t){let r,n;let{href:c,as:g,children:w,prefetch:O,passHref:j,replace:E,shallow:P,scroll:m,locale:k,onClick:M,onMouseEnter:R,onTouchStart:S,legacyBehavior:C=!1}=e,_=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=w,C&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let x=!1!==O,D=l.default.useContext(i.RouterContext),A=l.default.useContext(p.AppRouterContext),L=null!=D?D:A,W=!D,{href:K,as:I}=l.default.useMemo(()=>{if(!D){let e=v(c);return{href:e,as:g?v(g):e}}let[e,t]=u.resolveHref(D,c,!0);return{href:e,as:g?u.resolveHref(D,g):t||e}},[D,c,g]),T=l.default.useRef(K),z=l.default.useRef(I);C&&(n=l.default.Children.only(r));let N=C?n&&"object"==typeof n&&n.ref:t,[U,B,H]=d.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(z.current!==I||T.current!==K)&&(H(),z.current=I,T.current=K),U(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[I,N,K,H,U]);l.default.useEffect(()=>{L&&B&&x&&b(L,K,I,{locale:k},W)},[I,K,B,k,x,null==D?void 0:D.locale,L,W]);let V={ref:q,onClick(e){C||"function"!=typeof M||M(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,u,c,f,s,i){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!a.isLocalURL(r)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:f,scroll:c}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!i})};s?l.default.startTransition(y):y()}(e,L,K,I,E,P,m,k,W,x)},onMouseEnter(e){C||"function"!=typeof R||R(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(x||!W)&&b(L,K,I,{locale:k,priority:!0,bypassPrefetchedCheck:!0},W)},onTouchStart(e){C||"function"!=typeof S||S(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(x||!W)&&b(L,K,I,{locale:k,priority:!0,bypassPrefetchedCheck:!0},W)}};if(f.isAbsoluteUrl(I))V.href=I;else if(!C||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==D?void 0:D.locale,t=(null==D?void 0:D.isLocaleDomain)&&y.getDomainLocale(I,e,null==D?void 0:D.locales,null==D?void 0:D.domainLocales);V.href=t||h.addBasePath(s.addLocale(I,e,null==D?void 0:D.defaultLocale))}return C?l.default.cloneElement(n,V):l.default.createElement("a",Object.assign({},_,V),r)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:c}=e,f=c||!l,[s,i]=n.useState(!1),p=n.useRef(null),d=n.useCallback(e=>{p.current=e},[]);n.useEffect(()=>{if(l){if(f||s)return;let e=p.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&i(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=o.requestIdleCallback(()=>i(!0));return()=>o.cancelIdleCallback(e)}},[f,r,t,s,p.current]);let y=n.useCallback(()=>{i(!1)},[]);return[d,s,y]};var n=r(7294),o=r(29);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(5569)},1163:function(e,t,r){e.exports=r(6885)},2478:function(e,t,r){"use strict";r.d(t,{DM:function(){return p},h8:function(){return g},jc:function(){return h},ln:function(){return d},o5:function(){return y}});let n=Symbol(),o=Symbol(),l=(e,t)=>new Proxy(e,t),u=Object.getPrototypeOf,a=new WeakMap,c=e=>e&&(a.has(e)?a.get(e):u(e)===Object.prototype||u(e)===Array.prototype),f=e=>"object"==typeof e&&null!==e,s=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(u(e),t)},i=e=>e[o]||e,p=(e,t,r,u)=>{if(!c(e))return e;let a=u&&u.get(e);if(!a){let t=i(e);a=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,s(t)]:[t],null==u||u.set(e,a)}let[f,d]=a,y=r&&r.get(f);return y&&!!d===y[1].f||((y=((e,t)=>{let r={f:t},l=!1,u=(t,n)=>{if(!l){let o=r.a.get(e);if(o||(o={},r.a.set(e,o)),"w"===t)o.w=!0;else{let e=o[t];e||(e=new Set,o[t]=e),e.add(n)}}},a={get:(t,n)=>n===o?e:(u("k",n),p(Reflect.get(t,n),r.a,r.c)),has:(t,o)=>o===n?(l=!0,r.a.delete(e),!0):(u("h",o),Reflect.has(t,o)),getOwnPropertyDescriptor:(e,t)=>(u("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(u("w"),Reflect.ownKeys(e))};return t&&(a.set=a.deleteProperty=()=>!1),[a,r]})(f,!!d))[1].p=l(d||f,y[0]),r&&r.set(f,y)),y[1].a=t,y[1].c=r,y[1].p},d=(e,t,r,n)=>{if(Object.is(e,t))return!1;if(!f(e)||!f(t))return!0;let o=r.get(i(e));if(!o)return!0;if(n){let r=n.get(e);if(r&&r.n===t)return r.g;n.set(e,{n:t,g:!1})}let l=null;try{for(let r of o.h||[])if(l=Reflect.has(e,r)!==Reflect.has(t,r))return l;if(!0===o.w){if(l=((e,t)=>{let r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t))return l}else for(let r of o.o||[])if(l=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r))return l;for(let u of o.k||[])if(l=d(e[u],t[u],r,n))return l;return null===l&&(l=!0),l}finally{n&&n.set(e,{n:t,g:l})}},y=e=>c(e)&&e[o]||null,h=(e,t=!0)=>{a.set(e,t)},g=(e,t,r)=>{let n=[],o=new WeakSet,l=(e,u)=>{if(o.has(e))return;f(e)&&o.add(e);let a=f(e)&&t.get(i(e));if(a){var c,s,p;if(null==(c=a.h)||c.forEach(e=>{let t=`:has(${String(e)})`;n.push(u?[...u,t]:[t])}),!0===a.w){let e=":ownKeys";n.push(u?[...u,e]:[e])}else null==(p=a.o)||p.forEach(e=>{let t=`:hasOwn(${String(e)})`;n.push(u?[...u,t]:[t])});null==(s=a.k)||s.forEach(t=>{(!r||"value"in(Object.getOwnPropertyDescriptor(e,t)||{}))&&l(e[t],u?[...u,t]:[t])})}else u&&n.push(u)};return l(e),n}},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7294),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=n.useState,u=n.useEffect,a=n.useLayoutEffect,c=n.useDebugValue;function f(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(e){return!0}}var s="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=l({inst:{value:r,getSnapshot:t}}),o=n[0].inst,s=n[1];return a(function(){o.value=r,o.getSnapshot=t,f(o)&&s({inst:o})},[e,r,t]),u(function(){return f(o)&&s({inst:o}),e(function(){f(o)&&s({inst:o})})},[e]),c(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:s},1688:function(e,t,r){"use strict";e.exports=r(3250)},7740:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});var n=r(7294),o=r(2478),l=r(1688),u=r(6949);let{use:a}=n,{useSyncExternalStore:c}=l,f=(e,t)=>{let r=(0,n.useRef)();(0,n.useEffect)(()=>{r.current=(0,o.h8)(e,t,!0)}),(0,n.useDebugValue)(r.current)},s=new WeakMap;function i(e,t){let r=null==t?void 0:t.sync,l=(0,n.useRef)(),i=(0,n.useRef)(),p=!0,d=c((0,n.useCallback)(t=>{let n=(0,u.Ld)(e,t,r);return t(),n},[e,r]),()=>{let t=(0,u.CO)(e,a);try{if(!p&&l.current&&i.current&&!(0,o.ln)(l.current,t,i.current,new WeakMap))return l.current}catch(e){}return t},()=>(0,u.CO)(e,a));p=!1;let y=new WeakMap;(0,n.useEffect)(()=>{l.current=d,i.current=y}),f(d,y);let h=(0,n.useMemo)(()=>new WeakMap,[]);return(0,o.DM)(d,y,h,s)}},6949:function(e,t,r){"use strict";r.d(t,{CO:function(){return i},Ld:function(){return s},sj:function(){return f}});var n=r(2478);let o=e=>"object"==typeof e&&null!==e,l=new WeakMap,u=new WeakSet,a=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>o(e)&&!u.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),a=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},c=new WeakMap,f=(e,t,r=a)=>{let o=c.get(e);if((null==o?void 0:o[0])===t)return o[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return(0,n.jc)(s,!0),c.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let o=Reflect.get(e,t),a={value:o,enumerable:!0,configurable:!0};if(u.has(o))(0,n.jc)(o,!1);else if(o instanceof Promise)delete a.value,a.get=()=>r(o);else if(l.has(o)){let[e,t]=l.get(o);a.value=f(e,t(),r)}Object.defineProperty(s,t,a)}),s},s=new WeakMap,i=[1,1],p=a=>{if(!o(a))throw Error("object required");let c=s.get(a);if(c)return c;let d=i[0],y=new Set,h=(e,t=++i[0])=>{d!==t&&(d=t,y.forEach(r=>r(e,t)))},g=i[1],b=(e=++i[1])=>(g===e||y.size||(g=e,w.forEach(([t])=>{let r=t[1](e);r>d&&(d=r)})),d),v=e=>(t,r)=>{let n=[...t];n[1]=[e,...n[1]],h(n,r)},w=new Map,O=(e,t)=>{if(w.has(e))throw Error("prop listener already exists");if(y.size){let r=t[3](v(e));w.set(e,[t,r])}else w.set(e,[t])},j=e=>{var t;let r=w.get(e);r&&(w.delete(e),null==(t=r[1])||t.call(r))},E=e=>{y.add(e),1===y.size&&w.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let n=e[3](v(r));w.set(r,[e,n])});let t=()=>{y.delete(e),0===y.size&&w.forEach(([e,t],r)=>{t&&(t(),w.set(r,[e]))})};return t},P=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a)),m={deleteProperty(e,t){let r=Reflect.get(e,t);j(t);let n=Reflect.deleteProperty(e,t);return n&&h(["delete",[t],r]),n},set(t,a,c,f){let i=Reflect.has(t,a),d=Reflect.get(t,a,f);if(i&&(e(d,c)||s.has(c)&&e(d,s.get(c))))return!0;j(a),o(c)&&(c=(0,n.o5)(c)||c);let y=c;if(c instanceof Promise)c.then(e=>{c.status="fulfilled",c.value=e,h(["resolve",[a],e])}).catch(e=>{c.status="rejected",c.reason=e,h(["reject",[a],e])});else{!l.has(c)&&r(c)&&(y=p(c));let e=!u.has(y)&&l.get(y);e&&O(a,e)}return Reflect.set(t,a,y,f),h(["set",[a],c,d]),!0}},k=t(P,m);s.set(a,k);let M=[P,b,f,E];return l.set(k,M),Reflect.ownKeys(a).forEach(e=>{let t=Object.getOwnPropertyDescriptor(a,e);"value"in t&&(k[e]=a[e],delete t.value,delete t.writable),Object.defineProperty(P,e,t)}),k})=>[p,l,u,e,t,r,a,c,f,s,i],[c]=a();function f(e={}){return c(e)}function s(e,t,r){let n;let o=l.get(e);o||console.warn("Please use proxy object");let u=[],a=o[3],c=!1,f=e=>{if(u.push(e),r){t(u.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,c&&t(u.splice(0))}))},s=a(f);return c=!0,()=>{c=!1,s()}}function i(e,t){let r=l.get(e);r||console.warn("Please use proxy object");let[n,o,u]=r;return u(n,o(),t)}}}]);