(()=>{"use strict";var e,r,t,o,n,a={},i={};function u(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,u),t.loaded=!0,t.exports}u.m=a,u.c=i,e=[],u.O=(r,t,o,n)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],o=e[d][1],n=e[d][2];for(var i=!0,f=0;f<t.length;f++)(!1&n||a>=n)&&Object.keys(u.O).every((e=>u.O[e](t[f])))?t.splice(f--,1):(i=!1,n<a&&(a=n));if(i){e.splice(d--,1);var c=o();void 0!==c&&(r=c)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,o,n]},u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);u.r(n);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&o&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,u.d(n,a),n},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",108:"2536989a",237:"1df93b7f",239:"38cf95c0",414:"393be207",509:"98547ece",514:"1be78505",541:"c5891848",918:"17896441",944:"e27a19e2"}[e]||e)+"."+{53:"ac636c6c",85:"b3047d0c",108:"fffc54c7",237:"2d3e2fac",239:"e89001e8",414:"c7bb8808",455:"8043f7a9",509:"7c3cab51",514:"48103721",541:"e72ad13c",918:"b1a2b488",944:"b9f69fc0",972:"dafd95aa"}[e]+".js",u.miniCssF=e=>{},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},n="docusaurus-demo:",u.l=(e,r,t,a)=>{if(o[e])o[e].push(r);else{var i,f;if(void 0!==t)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+t){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+t),i.src=e),o[e]=[r];var s=(r,t)=>{i.onerror=i.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(t))),r)return r(t)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/Oficina_aurelio/",u.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","2536989a":"108","1df93b7f":"237","38cf95c0":"239","393be207":"414","98547ece":"509","1be78505":"514",c5891848:"541",e27a19e2:"944"}[e]||e,u.p+u.u(e)},(()=>{var e={303:0,532:0};u.f.j=(r,t)=>{var o=u.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=u.p+u.u(r),i=new Error;u.l(a,(t=>{if(u.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}},u.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,a=t[0],i=t[1],f=t[2],c=0;if(a.some((r=>0!==e[r]))){for(o in i)u.o(i,o)&&(u.m[o]=i[o]);if(f)var d=f(u)}for(r&&r(t);c<a.length;c++)n=a[c],u.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return u.O(d)},t=self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();