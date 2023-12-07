function $e(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function B(e,t){let n;{var i=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=i}return $e()&&(n.stack=Pe(n.stack,t)),n}function Pe(e,t){if(!e)return e;const n=Re(e);let i=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:i<t&&Te(s)?(i++,!1):!0).join(`
`)}function Te(e){return e.startsWith("    at ")}function Re(e){return e.split(/\r?\n/)}function _(e,t){const n=globalThis.__vike=globalThis.__vike||{};return n[e]=n[e]||t}function S(e){return typeof e=="object"&&e!==null}function le(e){return Array.from(new Set(e))}const b=_("assertPackageInstances.ts",{instances:[],alreadyLogged:new Set}),_e="The client runtime of Server Routing as well as the client runtime of Client Routing are both being loaded. Make sure they aren't loaded both at the same time for a given page. See https://vike.dev/client-runtimes-conflict",ce="Two vike client runtime instances are being loaded. Make sure your client-side bundles don't include vike twice. (In order to reduce the size of your client-side JavaScript bundles.)";function ue(){{const e=le(b.instances);Ie(e.length<=1,`Both vike@${e[0]} and vike@${e[1]} loaded. Only one version should be loaded.`)}b.checkSingleInstance&&b.instances.length>1&&W(!1,ce,{onlyOnce:!0,showStackTrace:!0})}function ke(e){W(b.isClientRouting!==!0,_e,{onlyOnce:!0,showStackTrace:!0}),W(b.isClientRouting===void 0,ce,{onlyOnce:!0,showStackTrace:!0}),b.isClientRouting=!1,e&&(b.checkSingleInstance=!0),ue()}function xe(e){b.instances.push(e),ue()}function Ie(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function W(e,t,{onlyOnce:n,showStackTrace:i}){if(e)return;const r=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=b,a=n===!0?r:n;if(s.has(a))return;s.add(a)}console.warn(i?new Error(r):r)}const Ce="0.4.148",P={projectName:"Vike",projectVersion:Ce,npmPackageName:"vike",githubRepository:"https://github.com/vikejs/vike"};xe(P.projectVersion);const fe=new Proxy(e=>e,{get:()=>fe}),y=fe,w=_("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet}),Le=`[${P.npmPackageName}]`,Oe=`[${P.npmPackageName}@${P.projectVersion}]`,U=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return y.dim(`Debug info (for ${P.projectName} maintainers; you can ignore this): ${l}`)})(),i=`${P.githubRepository}/issues/new`;let r=[`You stumbled upon a bug in ${P.projectName}'s source code.`,`Go to ${y.blue(i)} and copy-paste this error; a maintainer will fix the bug (usually under 24 hours).`,n].filter(Boolean).join(" ");r=j(r),r=O(r,"Bug"),r=F(r,!0);const s=B(r,U);throw(a=w.onBeforeLog)==null||a.call(w),s}function h(e,t,{showStackTrace:n}={}){var r;if(e)return;t=j(t),t=O(t,"Wrong Usage"),t=F(t);const i=B(t,U);throw n&&w.showStackTraceList.add(i),(r=w.onBeforeLog)==null||r.call(w),i}function je(e){return e=j(e),e=O(e,"Error"),e=F(e),B(e,U)}function k(e,t,{onlyOnce:n,showStackTrace:i}){var r;if(!e){if(t=j(t),t=O(t,"Warning"),t=F(t),n){const{alreadyLogged:s}=w,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((r=w.onBeforeLog)==null||r.call(w),i){const s=new Error(t);w.showStackTraceList.add(s),w.logger(s,"warn")}else w.logger(t,"warn")}}function O(e,t){let n=`[${t}]`;const i=t==="Warning"?"yellow":"red";return n=y.bold(y[i](n)),`${n}${e}`}function j(e){return e.startsWith("[")?e:` ${e}`}function F(e,t=!1){return`${t?Oe:Le}${e}`}function G(){return typeof window<"u"&&typeof window.scrollY=="number"}const X=_("utils/assertRouterType.ts",{});function Fe(){Ve(X.isClientRouting!==!0),X.isClientRouting=!1}function Ve(e){h(G(),`${y.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),k(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}const Ae=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],de=["vue","svelte","marko","md","mdx"],We=[...Ae,...de];function ge(e){const t=We.some(n=>e.endsWith("."+n));return o(!ze(e)||t),t}function ze(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function De(e){return de.some(t=>e.endsWith("."+t))}function C(e,t,n){return typeof e=="string"?K(e.split(""),t,n).join(""):K(e,t,n)}function K(e,t,n){const i=[];let r=t>=0?t:e.length+t;o(r>=0&&r<=e.length);let s=n>=0?n:e.length+n;for(o(s>=0&&s<=e.length);!(r===s||(r===e.length&&(r=0),r===s));){const a=e[r];o(a!==void 0),i.push(a),r++}return i}const he=["http://","https://","tauri://"];function Ne(e){return he.some(t=>e.startsWith(t))||e.startsWith("/")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function He(e,t){o(Ne(e)),o(t.startsWith("/"));const[n,...i]=e.split("#");o(n!==void 0);const r=["",...i].join("#")||null;o(r===null||r.startsWith("#"));const s=r===null?"":z(r.slice(1)),[a,...l]=n.split("?");o(a!==void 0);const c=["",...l].join("?")||null;o(c===null||c.startsWith("?"));const u={},f={};Array.from(new URLSearchParams(c||"")).forEach(([v,q])=>{u[v]=q,f[v]=[...f.hasOwnProperty(v)?f[v]:[],q]});const{origin:d,pathname:g}=Ue(a,t);o(d===null||d===z(d)),o(g.startsWith("/")),o(d===null||e.startsWith(d));const p=a.slice((d||"").length);qe(e,d,p,c,r);let{pathname:E,hasBaseServer:x}=Je(g,t);return E=Be(E),o(E.startsWith("/")),{origin:d,pathname:E,pathnameOriginal:p,hasBaseServer:x,search:u,searchAll:f,searchOriginal:c,hash:s,hashOriginal:r}}function z(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Be(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>z(t).split("/").join("%2F")).join("/"),e}function Ue(e,t){var n;o(!e.includes("?")&&!e.includes("#"));{const{origin:i,pathname:r}=Q(e);if(i)return{origin:i,pathname:r};o(r===e)}if(e.startsWith("/"))return{origin:null,pathname:e};{const i=typeof window<"u"?(n=window==null?void 0:window.document)==null?void 0:n.baseURI:void 0;let r;return i?r=Q(i.split("?")[0]).pathname:r=t,{origin:null,pathname:Ge(e,r)}}}function Q(e){if(he.some(t=>e.startsWith(t))){const[t,n,i,...r]=e.split("/"),s=[t,n,i].join("/"),a=["",...r].join("/")||"/";return{origin:s,pathname:a}}else return{pathname:e,origin:null}}function Ge(e,t){const n=t.split("/"),i=e.split("/");let r=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in i){const l=i[a];l==""&&a==="0"||l!="."&&(l==".."?n.pop():(r=!1,n.push(l)))}let s=n.join("/");return r&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function Me(e){o(e.startsWith("/")),o(!e.includes("?")),o(!e.includes("#"))}function Je(e,t){Me(e),o(Ye(t));let n=e;if(o(n.startsWith("/")),o(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let i=t;return t.endsWith("/")&&n===C(t,0,-1)&&(i=C(t,0,-1),o(n===i)),n.startsWith(i)?(o(n.startsWith("/")||n.startsWith("http")),o(n.startsWith(i)),n=n.slice(i.length),n.startsWith("/")||(n="/"+n),o(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function Ye(e){return e.startsWith("/")}function qe(e,t,n,i,r){const s=Xe(t,n,i,r);o(e===s)}function Xe(e,t,n,i){return`${e||""}${t}${n||""}${i||""}`}function T(e,t){t&&Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}function V(e){return e instanceof Function||typeof e=="function"}function Ke(e){return(t,n)=>{const i=e(t),r=e(n);if(o([!0,!1,null].includes(i)),o([!0,!1,null].includes(r)),i===r)return 0;if(i===!0||r===!1)return-1;if(r===!0||i===!1)return 1;o(!1)}}function Qe(e){return Ke(t=>{const n=e(t);return n===null?null:!n})}function m(e,t,n="unknown"){if(!S(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const i=e[t];return n==="array"?Array.isArray(i):n==="object"?S(i):n==="string[]"?Array.isArray(i)&&i.every(r=>typeof r=="string"):n==="function"?V(i):Array.isArray(n)?typeof i=="string"&&n.includes(i):n==="null"?i===null:n==="undefined"?i===void 0:n==="true"?i===!0:n==="false"?i===!1:typeof i===n}function Ze(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const et=e=>e!=null;function pe(e){const t=n=>`Not a posix path: ${n}`;o(e!==null,t("null")),o(typeof e=="string",t(`typeof path === ${JSON.stringify(typeof e)}`)),o(e!=="",t("(empty string)")),o(e),o(!e.includes("\\"),t(e))}const tt=["clientRouting"];function nt(e){tt.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;h(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),h(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const me=["render","clientRouting","prerender","doNotPrerender"];function rt(e,t){h(!me.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function it(e,t){if(!e)return null;let[n,...i]=e;if(!n||i.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let r="",s="";return n==="default"?r="export default":(r="export",i=[n,...i]),i.forEach(l=>{r=`${r} { ${l}`,s=` }${s}`}),r+s}function ye(e,t,{definedAt:n}){const i=st(n,t),r=i==="internally"?i:`at ${i}`;let s=`${t}`;return`${e} ${y.cyan(s)} defined ${r}`}function st(e,t){if("isComputed"in e)return"internally";let n;return"files"in e?n=e.files:n=[e],o(n.length>=1),n.map(r=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=r;let l=s;const c=it(a,t);return c&&(l=`${l} > ${y.cyan(c)}`),l}).join(" / ")}function ot({definedAt:e}){if("isComputed"in e||"files"in e)return null;const{filePathToShowToUser:t}=e;return o(t),t}function at(e,t){const n={},i={},r={};e.forEach(l=>{lt(l).forEach(({exportName:u,exportValue:f,isFromDefaultExport:d})=>{o(u!=="default"),r[u]=r[u]??[],r[u].push({exportValue:f,exportSource:`${l.filePath} > ${d?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:l.filePath,_filePath:l.filePath,_fileType:l.fileType,_isFromDefaultExport:d})})}),t&&Object.entries(t.configValues).forEach(([l,c])=>{const{value:u}=c,f=ot(c),d=ye("Config",l,c);i[l]=i[l]??u,n[l]=n[l]??[],o(n[l].length===0),n[l].push({configValue:u,configDefinedAt:d,configDefinedByFile:f});const g=l;r[g]=r[g]??[],r[g].push({exportValue:u,exportSource:d,filePath:f,_filePath:f,_fileType:null,_isFromDefaultExport:null})});const s=ct(),a={};return Object.entries(r).forEach(([l,c])=>{c.forEach(({exportValue:u,_fileType:f,_isFromDefaultExport:d})=>{a[l]=a[l]??u,f===".page"&&!d&&(l in s||(s[l]=u))})}),o(!("default"in a)),o(!("default"in r)),{config:i,configEntries:n,exports:a,exportsAll:r,pageExports:s}}function lt(e){const{filePath:t,fileExports:n}=e;o(n),o(ge(t));const i=[];return Object.entries(n).sort(Qe(([r])=>r==="default")).forEach(([r,s])=>{let a=r==="default";if(a)if(De(t))r="Page";else{h(S(s),`The ${y.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([l,c])=>{rt(l,t),i.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}i.push({exportName:r,exportValue:s,isFromDefaultExport:a})}),i.forEach(({exportName:r,isFromDefaultExport:s})=>{o(!(s&&me.includes(r)))}),i}function ct(){return new Proxy({},{get(...e){return G()||k(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function ut(e){const t=".page.",n=C(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function R(e){pe(e)}function M(e,t){return o(!e.includes("\\")),e.includes("/_error")}function ft(e,t){if(t.length>0){const n=t.find(i=>i.pageId===e);return o(n),!!n.isErrorPage}else return M(e)}const dt=[".page",".page.server",".page.route",".page.client",".css"];function gt(e){if(pe(e),e.endsWith(".css"))return".css";o(ge(e),e);const n=e.split("/").slice(-1)[0].split("."),i=n.slice(-3)[0],r=n.slice(-2)[0];if(r==="page")return".page";if(o(i==="page",e),r==="server")return".page.server";if(r==="client")return".page.client";if(r==="route")return".page.route";o(!1,e)}function Ee(e){const t=s=>r.pageId===s||r.isDefaultPageFile&&(Z(r.filePath)||ht(s,r.filePath)),n=gt(e),r={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:D(e),isRendererPageFile:n!==".css"&&D(e)&&Z(e),isErrorPageFile:M(e),pageId:ut(e)};return r}function D(e){return R(e),M(e)?!1:e.includes("/_default")}function Z(e){return R(e),e.includes("/renderer/")}function ht(e,t){R(e),R(t),o(!e.endsWith("/")),o(!t.endsWith("/")),o(D(t));const n=C(t.split("/"),0,-1).filter(i=>i!=="_default").join("/");return e.startsWith(n)}function pt(e){o(Array.isArray(e)),e.forEach(t=>{o(S(t)),o(m(t,"pageId","string")),o(m(t,"routeFilesystem")),o(m(t,"configValuesSerialized")),o(m(t,"configValuesImported"))})}function mt(e){o(m(e,"configValuesImported"))}const yt=["$$registrations","_rerender_only"],Et=[".md",".mdx"];function wt(e,t,n){St(e,t,n)}function St(e,t,n){const r=Object.keys(e).filter(a=>!yt.includes(a)),s=r.filter(a=>a!=="default"&&a!==n);if(s.length===0){if(r.length===1)return;{o(r.length===0);let a=`${t} doesn't export any value, but it should have a ${y.cyan("export default")}`;n&&(a+=` or ${y.cyan(`export { ${n} }`)}`),h(!1,a)}}else if(n){if(Et.some(a=>t.endsWith(a)))return;s.forEach(a=>{k(!1,`${t} should have only a single export: move ${y.cyan(`export { ${a} }`)} to +config.h.js or its own +${s}.js`,{onlyOnce:!0})})}else{const a=s.join(", ");h(!1,`${t} replace ${y.cyan(`export { ${a} }`)} with ${y.cyan(`export default { ${a} }`)}`)}}function N(e){const t={},n=(i,r,s,a)=>{t[i]={value:r,definedAt:{filePathToShowToUser:s,fileExportPathToShowToUser:[i,"default"].includes(a)?[]:[a]}},vt(r,i,s)};return e.forEach(i=>{if(i.isValueFile){const{exportValues:r,importPath:s,configName:a}=i;a!=="client"&&wt(r,s,a),Object.entries(r).forEach(([l,c])=>{const u=l!=="default",f=u?l:i.configName;u&&f in t||n(f,c,s,l)})}else{const{configName:r,importPath:s,exportValue:a,exportName:l}=i;n(r,a,s,l)}}),t}function vt(e,t,n){o(!n.includes("+config."))}const bt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],i=t[2];return new RegExp(n,i)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function J(e){const t=JSON.parse(e);return we(t)}function we(e){return typeof e=="string"?$t(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=we(n)}),e)}function $t(e){for(const{match:t,deserialize:n}of bt)if(t(e))return n(e,J);return e}function Se(e){const t={};return Object.entries(e).forEach(([n,i])=>{const{valueSerialized:r,definedAt:s}=i;o(r),o(!t[n]),t[n]={value:J(r),definedAt:s}}),t}function Pt(e,t){const n=e.map(r=>{const s={};{const{configValuesSerialized:f}=r,d=Se(f);Object.assign(s,d)}{const{configValuesImported:f}=r,d=N(f);Object.assign(s,d)}const{pageId:a,isErrorPage:l,routeFilesystem:c,loadConfigValuesAll:u}=r;return Tt(s),{pageId:a,isErrorPage:l,routeFilesystem:c,configValues:s,loadConfigValuesAll:u}}),i={configValues:{}};{const r=N(t.configValuesImported);Object.assign(i.configValues,r)}return{pageConfigs:n,pageConfigGlobal:i}}function Tt(e){const t="route",n=e[t];if(!n)return;const{value:i}=n,r=typeof i,s=ye("Config",t,n);h(r==="string"||V(i),`${s} has an invalid type '${r}': it should be a string or a function instead, see https://vike.dev/route`)}function Rt(e){o(m(e,"isGeneratedFile")),o(e.isGeneratedFile!==!1,"vike was re-installed(/re-built). Restart your app."),o(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),o(m(e,"pageFilesLazy","object")),o(m(e,"pageFilesEager","object")),o(m(e,"pageFilesExportNamesLazy","object")),o(m(e,"pageFilesExportNamesEager","object")),o(m(e.pageFilesLazy,".page")),o(m(e.pageFilesLazy,".page.client")||m(e.pageFilesLazy,".page.server")),o(m(e,"pageFilesList","string[]")),o(m(e,"pageConfigsSerialized")),o(m(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;pt(t),mt(n);const{pageConfigs:i,pageConfigGlobal:r}=Pt(t,n),s={};I(e.pageFilesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;ee(f),c.loadFile=async()=>{"fileExports"in c||(c.fileExports=await f(),nt(c))}}),I(e.pageFilesExportNamesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;ee(f),c.loadExportNames=async()=>{if(!("exportNames"in c)){const d=await f();h("exportNames"in d,"You seem to be using Vite 2 but the latest vike versions only work with Vite 3"),o(m(d,"exportNames","string[]"),c.filePath),c.exportNames=d.exportNames}}}),I(e.pageFilesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;o(S(f)),c.fileExports=f}),I(e.pageFilesExportNamesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;o(S(f)),o(m(f,"exportNames","string[]"),c.filePath),c.exportNames=f.exportNames}),e.pageFilesList.forEach(l=>{s[l]=s[l]??Ee(l)});const a=Object.values(s);return a.forEach(({filePath:l})=>{o(!l.includes("\\"))}),{pageFiles:a,pageConfigs:i,pageConfigGlobal:r}}function I(e){const t=[];return Object.entries(e).forEach(([n,i])=>{o(dt.includes(n)),o(S(i)),Object.entries(i).forEach(([r,s])=>{const a=Ee(r);o(a.fileType===n),t.push({filePath:r,pageFile:a,globValue:s})})}),t}function ee(e){o(V(e))}const $=_("setPageFiles.ts",{});function _t(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:i}=Rt(e);$.pageFilesAll=t,$.pageConfigs=n,$.pageConfigGlobal=i}async function kt(e,t){e?(o(!$.pageFilesGetter),o(t===void 0)):(o($.pageFilesGetter),o(typeof t=="boolean"),(!$.pageFilesAll||!t)&&await $.pageFilesGetter());const{pageFilesAll:n,pageConfigs:i,pageConfigGlobal:r}=$;o(n&&i&&r);const s=xt(n,i);return{pageFilesAll:n,allPageIds:s,pageConfigs:i,pageConfigGlobal:r}}function xt(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),i=le(n),r=t.map(s=>s.pageId);return[...i,...r]}function It(e,t){return Ct(e,t,!0)}function Ct(e,t,n){const i=n?"CLIENT_ONLY":"SERVER_ONLY",r=e.filter(p=>p.isRelevant(t)&&p.fileType!==".page.route").sort(Lt(n,t)),s=p=>{const E=r.filter(v=>v.pageId===t&&v.isEnv(p?"CLIENT_AND_SERVER":i));h(E.length<=1,`Merge the following files into a single file: ${E.map(v=>v.filePath).join(" ")}`);const x=E[0];return o(x===void 0||!x.isDefaultPageFile),x},a=s(!1),l=s(!0),c=p=>r.filter(E=>E.isRendererPageFile&&E.isEnv(p?"CLIENT_AND_SERVER":i))[0],u=c(!1),f=c(!0),d=r.filter(p=>p.isDefaultPageFile&&!p.isRendererPageFile&&(p.isEnv(i)||p.isEnv("CLIENT_AND_SERVER")));return[a,l,...d,u,f].filter(et)}function Lt(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",i=-1,r=1,s=0;return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return i;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return r;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return i;if(!u&&c)return r;o(c===u)}{const c=te(t,a.filePath),u=te(t,l.filePath);if(c<u)return i;if(u<c)return r;o(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return i;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return r}return s}}function te(e,t){R(e),R(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const i=e.slice(n),r=t.slice(n),s=i.split("/").length,a=r.split("/").length;return s+a}const Ot="modulepreload",jt=function(e){return"/"+e},ne={},A=function(t,n,i){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=jt(s),s in ne)return;ne[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let f=r.length-1;f>=0;f--){const d=r[f];if(d.href===s&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":Ot,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},Y={},Ft={},Vt={},At={},Wt=[],ve={},zt=!0,Dt=[{pageId:"/pages/_error",isErrorPage:!0,routeFilesystem:void 0,loadConfigValuesAll:()=>A(()=>import("./pages_error.afbaa876.js"),["assets/entries/pages_error.afbaa876.js","assets/chunks/chunk-1ce4b06a.js","assets/static/onRenderClient.d4835ae9.css"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"}},configValuesImported:[]},{pageId:"/pages/about",isErrorPage:void 0,routeFilesystem:{routeString:"/about",definedBy:"/pages/about/"},loadConfigValuesAll:()=>A(()=>import("./pages_about.7c68ddb8.js"),["assets/entries/pages_about.7c68ddb8.js","assets/chunks/chunk-1ce4b06a.js","assets/static/onRenderClient.d4835ae9.css","assets/static/about.f1aef519.css"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"}},configValuesImported:[]},{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>A(()=>import("./pages_index.43163859.js"),["assets/entries/pages_index.43163859.js","assets/chunks/chunk-1ce4b06a.js","assets/static/onRenderClient.d4835ae9.css"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"}},configValuesImported:[]}],Nt={configValuesImported:[]},Ht=Object.assign({}),Bt={...Ht};Y[".page"]=Bt;const Ut=Object.assign({}),Gt={...Ut};Y[".page.client"]=Gt;const Mt=Object.assign({}),Jt={...Mt};ve[".page.server"]=Jt;const Yt=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:zt,neverLoaded:ve,pageConfigGlobalSerialized:Nt,pageConfigsSerialized:Dt,pageFilesEager:Ft,pageFilesExportNamesEager:At,pageFilesExportNamesLazy:Vt,pageFilesLazy:Y,pageFilesList:Wt},Symbol.toStringTag,{value:"Module"}));_t(Yt);function qt(){o(G())}function Xt(){qt()}function re(e){const t=e/1e3;if(t<120){const n=ie(t);return`${n} second${se(n)}`}{const n=t/60,i=ie(n);return`${i} minute${se(i)}`}}function ie(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function se(e){return e==="1"?"":"s"}const Kt=_("utils/executeHook.ts",{userHookErrors:new Map});function Qt(e,t){const{hookName:n,hookFilePath:i,hookTimeout:{error:r,warning:s}}=t;let a,l;const c=new Promise((g,p)=>{a=E=>{u(),g(E)},l=E=>{u(),p(E)}}),u=()=>{f&&clearTimeout(f),d&&clearTimeout(d)},f=oe(s)&&setTimeout(()=>{k(!1,`The ${n}() hook defined by ${i} is slow: it's taking more than ${re(s)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},s),d=oe(r)&&setTimeout(()=>{const g=je(`The ${n}() hook defined by ${i} timed out: it didn't finish after ${re(r)} (https://vike.dev/hooksTimeout)`);l(g)},r);return(async()=>{try{const g=await e();a(g)}catch(g){S(g)&&Kt.userHookErrors.set(g,{hookName:n,hookFilePath:i}),l(g)}})(),c}function oe(e){return!!e&&e!==1/0}function be(e){const t=window.location.href,{searchOriginal:n,hashOriginal:i,pathname:r}=He(t,"/");let s;return e!=null&&e.withoutHash?s=`${r}${n||""}`:s=`${r}${n||""}${i||""}`,o(s.startsWith("/")),s}Xt();function Zt(){const e="vike_pageContext",t=document.getElementById(e);h(t,`The element #${e} (which Vike automatically injects into the HTML) is missing from the DOM. This may happen if your HTML is malformed. Make sure your HTML isn't malformed, and make sure you don't remove #${e} from the HTML nor from the DOM.`);const n=t.textContent;o(n);const i=J(n);return o(m(i,"_pageId","string")),T(i,{_hasPageContextFromServer:!0}),i}function en(e,t){const n=e.filter(r=>r.pageId===t);return o(n.length<=1),n[0]??null}async function tn(e,t){if("isAllLoaded"in e&&!t)return e;const n=await e.loadConfigValuesAll();{const{configValuesImported:i}=n,r=N(i);Object.assign(e.configValues,r)}{const{configValuesSerialized:i}=n,r=Se(i);Object.assign(e.configValues,r)}return T(e,{isAllLoaded:!0}),e}const nn="__whileFetchingAssets";async function rn(e,t){const n=It(t._pageFilesAll,e),i=en(t._pageConfigs,e);let r;const s=!1;try{r=(await Promise.all([i&&tn(i,s),...n.map(p=>{var E;return(E=p.loadFile)==null?void 0:E.call(p)})]))[0]}catch(g){throw sn(g)&&Object.assign(g,{[nn]:!0}),g}const{config:a,configEntries:l,exports:c,exportsAll:u,pageExports:f}=at(n,r);return{config:a,configEntries:l,exports:c,exportsAll:u,pageExports:f,_pageFilesLoaded:n}}function sn(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}const ae=be({withoutHash:!0});async function on(){const e=Zt();return T(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromClient:!1}),T(e,await ln(e._pageId)),an(),e}function an(){const e=be({withoutHash:!0});h(ae===e,`The URL was manipulated before the hydration finished ('${ae}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function ln(e){const t={},{pageFilesAll:n,pageConfigs:i}=await kt(!0);return T(t,{_pageFilesAll:n,_pageConfigs:i}),T(t,await rn(e,t)),n.filter(r=>r.fileType!==".page.server").forEach(r=>{var s;k(!((s=r.fileExports)!=null&&s.onBeforeRender),`export { onBeforeRender } of ${r.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}function H(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,i=fn(n,t),r=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===r),r===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),un(r,{hookName:t,hookFilePath:a}),{hookFn:r,hookName:t,hookFilePath:a,hookTimeout:i}}function cn(e,t){H(e,t)}function un(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),h(V(e),`Hook ${t}() defined by ${n} should be a function`)}function fn(e,t){const n=dn(e);if(n===!1)return{error:!1,warning:!1};const i=n[t],r=gn(t);return(i==null?void 0:i.error)!==void 0&&(r.error=i.error),(i==null?void 0:i.warning)!==void 0&&(r.warning=i.warning),r}function dn(e){if(e===void 0)return{};if(e===!1)return!1;h(S(e),`Setting ${y.cyan("hooksTimeout")} should be ${y.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,i])=>{if(i===!1){t[n]={error:!1,warning:!1};return}h(S(i),`Setting ${y.cyan(`hooksTimeout.${n}`)} should be ${y.cyan("false")} or an object`);const[r,s]=["error","warning"].map(a=>{const l=i[a];if(l===void 0||l===!1)return l;const c=`Setting ${y.cyan(`hooksTimeout.${n}.${a}`)} should be`;return h(typeof l=="number",`${c} ${y.cyan("false")} or a number`),h(l>0,`${c} a positive number`),l});t[n]={error:r,warning:s}}),t}function gn(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:e==="onPrerenderStart"||e==="onBeforePrerenderStart"||e==="onBeforePrerender"||e==="prerender"?{error:10*60*1e3,warning:30*1e3}:{error:30*1e3,warning:4*1e3}}function hn(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[i])=>Ze(n,i)).forEach(([n,i])=>{e[n]=i})}function pn(e){mn(e),yn(e)}function mn(e){ft(e._pageId,e._pageConfigs)&&o(m(e,"is404","boolean"))}function yn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!S(t)){k(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const En="not-serializable",L=_("getPageContextProxyForUser.ts",{});function wn(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const i=e[n],r=JSON.stringify(n);return h(i!==En,`pageContext[${r}] couldn't be serialized and, therefore, is missing on the client-side. Check the server logs for more information.`),Sn(e,n),i}})}function Sn(e,t){if(L.prev===t||L.prev==="__v_raw"||($n(t),t in e)||bn(t))return;const n=JSON.stringify(t);e._hasPageContextFromServer&&!e._hasPageContextFromClient&&h(!1,`pageContext[${n}] isn't available on the client-side because ${n} is missing in passToClient, see https://vike.dev/passToClient`)}const vn=["then","toJSON"];function bn(e){return!!(vn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function $n(e){L.prev=e,window.setTimeout(()=>{L.prev=void 0},0)}function Pn(e,t){if(t){const r=e;o([!0,!1].includes(r.isHydration)),o([!0,!1,null].includes(r.isBackwardNavigation))}else{const r=e;o(r.isHydration===!0),o(r.isBackwardNavigation===null)}o("config"in e),o("configEntries"in e),o("exports"in e),o("exportsAll"in e),o("pageExports"in e),o(S(e.pageExports));const n=e.exports.Page;T(e,{Page:n}),Tn(e),hn(e);const i=wn(e);return pn(e),i}function Tn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function Rn(e,t){const n=Pn(e,t);let i=null,r;i=H(e,"render"),r="render";{const l=H(e,"onRenderClient");l&&(i=l,r="onRenderClient")}if(!i){const l=_n(e);if(o(l),e._pageConfigs.length>0)h(!1,`No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vike.dev/onRenderClient`);else{const c=e._pageFilesLoaded.filter(f=>f.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+l:u="One of the following files should export a render() hook: "+c.map(f=>f.filePath).join(" "),h(!1,u)}}o(i);const s=i.hookFn;o(r);const a=await Qt(()=>s(n),i);h(a===void 0,`The ${r}() hook defined by ${i.hookFilePath} isn't allowed to return a value`)}function _n(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}Fe();const kn=!0;ke(kn);xn();async function xn(){var t,n;const e=await on();await Rn(e,!1),cn(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}