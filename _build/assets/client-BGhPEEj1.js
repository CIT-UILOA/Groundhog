const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/_...404_-Ciyurv2x.js","assets/web-BMXahxm9.js","assets/routing-B6bb73U6.js","assets/about-KHAxwGpR.js","assets/index-CWUiZpCO.js"])))=>i.map(i=>d[i]);
import{c as Y,a as C,b as f,g as Q,u as ee,S as z,o as te,d as ne,e as re,f as V,s as k,h as oe,i as w,j as A,m as x,k as E,r as S,t as b,l as ae,n as K,p as se,q as T,v as ie,w as le,E as ce,x as ue}from"./web-BMXahxm9.js";import{c as de,a as fe,R as he,s as F,g as me,b as pe,d as ge,m as $e,k as we,e as be,f as ve,n as Ee,u as ye}from"./routing-B6bb73U6.js";const P="Invariant Violation",{setPrototypeOf:_e=function(e,t){return e.__proto__=t,e}}=Object;class O extends Error{framesToPop=1;name=P;constructor(t=P){super(typeof t=="number"?`${P}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),_e(this,O.prototype)}}function L(e,t){if(!e)throw new O(t)}const Re=/^[A-Za-z]:\//;function Ae(e=""){return e&&e.replace(/\\/g,"/").replace(Re,t=>t.toUpperCase())}const xe=/^[/\\]{2}/,Se=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Ce=/^[A-Za-z]:$/,ke=function(e){if(e.length===0)return".";e=Ae(e);const t=e.match(xe),n=I(e),r=e[e.length-1]==="/";return e=Pe(e,!n),e.length===0?n?"/":r?"./":".":(r&&(e+="/"),Ce.test(e)&&(e+="/"),t?n?`//${e}`:`//./${e}`:n&&!I(e)?`/${e}`:e)},Z=function(...e){if(e.length===0)return".";let t;for(const n of e)n&&n.length>0&&(t===void 0?t=n:t+=`/${n}`);return t===void 0?".":ke(t.replace(/\/\/+/g,"/"))};function Pe(e,t){let n="",r=0,o=-1,a=0,l=null;for(let s=0;s<=e.length;++s){if(s<e.length)l=e[s];else{if(l==="/")break;l="/"}if(l==="/"){if(!(o===s-1||a===1))if(a===2){if(n.length<2||r!==2||n[n.length-1]!=="."||n[n.length-2]!=="."){if(n.length>2){const c=n.lastIndexOf("/");c===-1?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),o=s,a=0;continue}else if(n.length>0){n="",r=0,o=s,a=0;continue}}t&&(n+=n.length>0?"/..":"..",r=2)}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,a=0}else l==="."&&a!==-1?++a:a=-1}return n}const I=function(e){return Se.test(e)};function Le(e){return`virtual:${e}`}function Ne(e){return e.handler?.endsWith(".html")?I(e.handler)?e.handler:Z(e.root,e.handler):`$vinxi/handler/${e.name}`}const Te=new Proxy({},{get(e,t){return L(typeof t=="string","Bundler name should be a string"),{name:t,type:"client",handler:Le(Ne({name:t})),baseURL:"/Groundhog/_build",chunks:new Proxy({},{get(n,r){L(typeof r=="string","Chunk expected");let o=Z("/Groundhog/_build",r+".mjs");return{import(){return import(o)},output:{path:o}}}}),inputs:new Proxy({},{get(n,r){L(typeof r=="string","Input must be string");let o=window.manifest[r].output;return{async import(){return import(o)},async assets(){return window.manifest[r].assets},output:{path:o}}}})}}});globalThis.MANIFEST=Te;const Ie=e=>t=>{const{base:n}=t,r=Y(()=>t.children),o=C(()=>de(r(),t.base||""));let a;const l=fe(e,o,()=>a,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),f(he.Provider,{value:l,get children(){return f(Oe,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[C(()=>(a=Q())&&null),f(De,{routerState:l,get branches(){return o()}})]}})}})};function Oe(e){const t=e.routerState.location,n=e.routerState.params,r=C(()=>e.preload&&ee(()=>{F(!0),e.preload({params:n,location:t,intent:me()||"initial"}),F(!1)}));return f(z,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>f(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function De(e){const t=[];let n;const r=C(te(e.routerState.matches,(o,a,l)=>{let s=a&&o.length===a.length;const c=[];for(let i=0,p=o.length;i<p;i++){const m=a&&a[i],$=o[i];l&&m&&$.route.key===m.route.key?c[i]=l[i]:(s=!1,t[i]&&t[i](),ne(v=>{t[i]=v,c[i]=ge(e.routerState,c[i-1]||e.routerState.base,j(()=>r()[i+1]),()=>e.routerState.matches()[i])}))}return t.splice(o.length).forEach(i=>i()),l&&s?l:(n=c[0],c)}));return j(()=>r()&&n)()}const j=e=>()=>f(z,{get when(){return e()},keyed:!0,children:t=>f(pe.Provider,{value:t,get children(){return t.outlet()}})});function Me([e,t],n,r){return[e,r?o=>t(r(o)):t]}function Ue(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Me(re(n(e.get()),{equals:(o,a)=>o.value===a.value&&o.state===a.state}),void 0,o=>(!t&&e.set(o),k.registry&&!k.done&&(k.done=!0),o));return e.init&&V(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),Ie({signal:r,create:e.create,utils:e.utils})}function Fe(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function je(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const We=new Map;function Be(e=!0,t=!1,n="/_server",r){return o=>{const a=o.base.path(),l=o.navigatorFactory(o.base);let s,c;function i(u){return u.namespaceURI==="http://www.w3.org/2000/svg"}function p(u){if(u.defaultPrevented||u.button!==0||u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)return;const d=u.composedPath().find(U=>U instanceof Node&&U.nodeName.toUpperCase()==="A");if(!d||t&&!d.hasAttribute("link"))return;const g=i(d),h=g?d.href.baseVal:d.href;if((g?d.target.baseVal:d.target)||!h&&!d.hasAttribute("state"))return;const _=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||_&&_.includes("external"))return;const R=g?new URL(h,document.baseURI):new URL(h);if(!(R.origin!==window.location.origin||a&&R.pathname&&!R.pathname.toLowerCase().startsWith(a.toLowerCase())))return[d,R]}function m(u){const d=p(u);if(!d)return;const[g,h]=d,M=o.parsePath(h.pathname+h.search+h.hash),_=g.getAttribute("state");u.preventDefault(),l(M,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:_?JSON.parse(_):void 0})}function $(u){const d=p(u);if(!d)return;const[g,h]=d;r&&(h.pathname=r(h.pathname)),o.preloadRoute(h,g.getAttribute("preload")!=="false")}function v(u){clearTimeout(s);const d=p(u);if(!d)return c=null;const[g,h]=d;c!==g&&(r&&(h.pathname=r(h.pathname)),s=setTimeout(()=>{o.preloadRoute(h,g.getAttribute("preload")!=="false"),c=g},20))}function D(u){if(u.defaultPrevented)return;let d=u.submitter&&u.submitter.hasAttribute("formaction")?u.submitter.getAttribute("formaction"):u.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const h=new URL(d,$e);if(d=o.parsePath(h.pathname+h.search),!d.startsWith(n))return}if(u.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=We.get(d);if(g){u.preventDefault();const h=new FormData(u.target,u.submitter);g.call({r:o,f:u.target},u.target.enctype==="multipart/form-data"?h:new URLSearchParams(h))}}oe(["click","submit"]),document.addEventListener("click",m),e&&(document.addEventListener("mousemove",v,{passive:!0}),document.addEventListener("focusin",$,{passive:!0}),document.addEventListener("touchstart",$,{passive:!0})),document.addEventListener("submit",D),V(()=>{document.removeEventListener("click",m),e&&(document.removeEventListener("mousemove",v),document.removeEventListener("focusin",$),document.removeEventListener("touchstart",$)),document.removeEventListener("submit",D)})}}function Ge(e){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,o=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:o}},n=ve();return Ue({get:t,set({value:r,replace:o,scroll:a,state:l}){o?window.history.replaceState(we(l),"",r):window.history.pushState(l,"",r),je(decodeURIComponent(window.location.hash.slice(1)),a),be()},init:r=>Fe(window,"popstate",Ee(r,o=>{if(o&&o<0)return!n.confirm(o);{const a=t();return!n.confirm(a.value,{state:a.state})}})),create:Be(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}function He(e){e.forEach(t=>{if(!t.attrs.href)return;let n=document.head.querySelector(`link[href="${t.attrs.href}"]`);n||(n=document.createElement("link"),n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",t.attrs.href),document.head.appendChild(n))})}var qe=b("<style>"),ze=b("<link>"),Ve=b("<script> "),Ke=b("<noscript>");const Ze={style:e=>(()=>{var t=w(qe);return A(t,x(()=>e.attrs),!1,!0),E(t,()=>e.children),S(),t})(),link:e=>(()=>{var t=w(ze);return A(t,x(()=>e.attrs),!1,!1),S(),t})(),script:e=>e.attrs.src?(()=>{var t=w(Ve);return A(t,x(()=>e.attrs,{get id(){return e.key}}),!1,!0),S(),t})():null,noscript:e=>(()=>{var t=w(Ke);return A(t,x(()=>e.attrs),!1,!0),S(),t})()};function Je(e,t){let{tag:n,attrs:{key:r,...o}={key:void 0},children:a}=e;return Ze[n]({attrs:{...o,nonce:t},key:r,children:a})}function Xe(e,t,n,r="default"){return ae(async()=>{{const a=(await e.import())[r],s=(await t.inputs?.[e.src].assets()).filter(i=>i.tag==="style"||i.attrs.rel==="stylesheet");return typeof window<"u"&&He(s),{default:i=>[...s.map(p=>Je(p)),f(a,i)]}}})}const y={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Ye(e={}){const t={options:e,rootNode:J(),staticRoutesMap:{}},n=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)W(t,n(r),e.routes[r]);return{ctx:t,lookup:r=>Qe(t,n(r)),insert:(r,o)=>W(t,n(r),o),remove:r=>et(t,n(r))}}function Qe(e,t){const n=e.staticRoutesMap[t];if(n)return n.data;const r=t.split("/"),o={};let a=!1,l=null,s=e.rootNode,c=null;for(let i=0;i<r.length;i++){const p=r[i];s.wildcardChildNode!==null&&(l=s.wildcardChildNode,c=r.slice(i).join("/"));const m=s.children.get(p);if(m===void 0){if(s&&s.placeholderChildren.length>1){const $=r.length-i;s=s.placeholderChildren.find(v=>v.maxDepth===$)||null}else s=s.placeholderChildren[0]||null;if(!s)break;s.paramName&&(o[s.paramName]=p),a=!0}else s=m}return(s===null||s.data===null)&&l!==null&&(s=l,o[s.paramName||"_"]=c,a=!0),s?a?{...s.data,params:a?o:void 0}:s.data:null}function W(e,t,n){let r=!0;const o=t.split("/");let a=e.rootNode,l=0;const s=[a];for(const c of o){let i;if(i=a.children.get(c))a=i;else{const p=tt(c);i=J({type:p,parent:a}),a.children.set(c,i),p===y.PLACEHOLDER?(i.paramName=c==="*"?`_${l++}`:c.slice(1),a.placeholderChildren.push(i),r=!1):p===y.WILDCARD&&(a.wildcardChildNode=i,i.paramName=c.slice(3)||"_",r=!1),s.push(i),a=i}}for(const[c,i]of s.entries())i.maxDepth=Math.max(s.length-c,i.maxDepth||0);return a.data=n,r===!0&&(e.staticRoutesMap[t]=a),a}function et(e,t){let n=!1;const r=t.split("/");let o=e.rootNode;for(const a of r)if(o=o.children.get(a),!o)return n;if(o.data){const a=r.at(-1)||"";o.data=null,Object.keys(o.children).length===0&&o.parent&&(o.parent.children.delete(a),o.parent.wildcardChildNode=null,o.parent.placeholderChildren=[]),n=!0}return n}function J(e={}){return{type:e.type||y.NORMAL,maxDepth:0,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function tt(e){return e.startsWith("**")?y.WILDCARD:e[0]===":"||e==="*"?y.PLACEHOLDER:y.NORMAL}const nt="modulepreload",rt=function(e){return"/Groundhog/_build/"+e},B={},N=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),s=l?.nonce||l?.getAttribute("nonce");o=Promise.allSettled(n.map(c=>{if(c=rt(c),c in B)return;B[c]=!0;const i=c.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":nt,i||(m.as="script"),m.crossOrigin="",m.href=c,s&&m.setAttribute("nonce",s),document.head.appendChild(m),i)return new Promise(($,v)=>{m.addEventListener("load",$),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(l){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=l,window.dispatchEvent(s),!s.defaultPrevented)throw l}return o.then(l=>{for(const s of l||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})},X=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>N(()=>import("./_...404_-Ciyurv2x.js"),__vite__mapDeps([0,1,2])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/[...404].tsx?pick=default&pick=$css"].output.path)},path:"/*404",filePath:"/home/runner/work/Groundhog/Groundhog/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>N(()=>import("./about-KHAxwGpR.js"),__vite__mapDeps([3,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/about.tsx?pick=default&pick=$css"].output.path)},path:"/about",filePath:"/home/runner/work/Groundhog/Groundhog/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>N(()=>import("./index-CWUiZpCO.js"),__vite__mapDeps([4,1])),import:()=>import(globalThis.MANIFEST.client.inputs["src/routes/index.tsx?pick=default&pick=$css"].output.path)},path:"/",filePath:"/home/runner/work/Groundhog/Groundhog/src/routes/index.tsx"}],ot=at(X.filter(e=>e.page));function at(e){function t(n,r,o,a){const l=Object.values(n).find(s=>o.startsWith(s.id+"/"));return l?(t(l.children||(l.children=[]),r,o.slice(l.id.length)),n):(n.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),n)}return e.sort((n,r)=>n.path.length-r.path.length).reduce((n,r)=>t(n,r,r.path,r.path),[])}function st(e){return e.$HEAD||e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}Ye({routes:X.reduce((e,t)=>{if(!st(t))return e;let n=t.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`).split("/").map(r=>r.startsWith(":")||r.startsWith("*")?r:encodeURIComponent(r)).join("/");if(/:[^/]*\?/g.test(n))throw new Error(`Optional parameters are not supported in API routes: ${n}`);if(e[n])throw new Error(`Duplicate API routes for "${n}" found at "${e[n].route.path}" and "${t.path}"`);return e[n]={route:t},e},{})});function it(){function e(n){return{...n,...n.$$route?n.$$route.require().route:void 0,info:{...n.$$route?n.$$route.require().route.info:{},filesystem:!0},component:n.$component&&Xe(n.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:n.children?n.children.map(e):void 0}}return ot.map(e)}let G;const lt=()=>G||(G=it());var ct=b("<li><a>");function H(e){const t=ye(),n=r=>r==t.pathname;return(()=>{var r=w(ct),o=r.firstChild;return E(o,()=>e.title),K(()=>se(o,"href",n(e.href)?"#":e.href)),r})()}var ut=b('<nav><ul class="flex flex-row gap-3 text-2xl md:text-4xl font-thin md:py-3 py-2"><!$><!/><!$><!/>');function dt(){return(()=>{var e=w(ut),t=e.firstChild,n=t.firstChild,[r,o]=T(n.nextSibling),a=r.nextSibling,[l,s]=T(a.nextSibling);return E(t,f(H,{href:"/",title:"Home"}),r,o),E(t,f(H,{href:"/about",title:"About us"}),l,s),e})()}var ft=b("<span>");function ht(e){return(()=>{var t=w(ft);return E(t,()=>e.icon),K(()=>ie(t,`font-mono ${e.style}`)),t})()}var mt=b('<footer class="flex justify-center text-xl text-gray-500"><p>Proudly made with <!$><!/> by Ivan Leonard O Aparte');function pt(){return(()=>{var e=w(mt),t=e.firstChild,n=t.firstChild,r=n.nextSibling,[o,a]=T(r.nextSibling);return o.nextSibling,E(t,f(ht,{icon:" ",style:"text-red-400"}),o,a),e})()}function gt(){return f(Ge,{get base(){return"/Groundhog/"},root:e=>[f(dt,{}),f(le,{get children(){return e.children}}),f(pt,{})],get children(){return f(lt,{})}})}const $t=e=>null;var wt=b("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const bt=e=>{const t="Error | Uncaught Client Exception";return f(ce,{fallback:n=>(console.error(n),[(()=>{var r=w(wt);return E(r,t),r})(),f($t,{code:500})]),get children(){return e.children}})};function vt(e,t){return ue(e,t)}function q(e){return e.children}function Et(){return f(q,{get children(){return f(q,{get children(){return f(bt,{get children(){return f(gt,{})}})}})}})}vt(()=>f(Et,{}),document.getElementById("app"));const Rt=void 0;export{Rt as default};
