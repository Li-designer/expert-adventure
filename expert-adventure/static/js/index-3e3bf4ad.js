import{q as O,a5 as S}from"./runtime-core.esm-bundler-3932d34b.js";const jt=Object.freeze({left:0,top:0,width:16,height:16}),$t=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...jt,...$t});Object.freeze({...Y,body:"",hidden:!1});({...jt});const Tt=Object.freeze({width:null,height:null}),Ft=Object.freeze({...Tt,...$t});function Kt(t,o){const n={...t};for(const i in o){const e=o[i],r=typeof e;i in Tt?(e===null||e&&(r==="string"||r==="number"))&&(n[i]=e):r===typeof n[i]&&(n[i]=i==="rotate"?e%4:e)}return n}const Wt=/[\s,]+/;function Jt(t,o){o.split(Wt).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Xt(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:i(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/e,r%1===0?i(r):0)}}return o}const Yt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Zt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function rt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const i=t.split(Yt);if(i===null||!i.length)return t;const e=[];let r=i.shift(),s=Zt.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?e.push(r):e.push(Math.ceil(c*o*n)/n)}else e.push(r);if(r=i.shift(),r===void 0)return e.join("");s=!s}}const te=t=>t==="unset"||t==="undefined"||t==="none";function ee(t,o){const n={...Y,...t},i={...Ft,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(b=>{const d=[],f=b.hFlip,I=b.vFlip;let y=b.rotate;f?I?y+=2:(d.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),d.push("scale(-1 1)"),e.top=e.left=0):I&&(d.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),d.push("scale(1 -1)"),e.top=e.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=e.height/2+e.top,d.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:d.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,d.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),d.length&&(r='<g transform="'+d.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=e.width,a=e.height;let u,h;s===null?(h=c===null?"1em":c==="auto"?a:c,u=rt(h,l/a)):(u=s==="auto"?l:s,h=c===null?rt(u,a/l):c==="auto"?a:c);const p={},w=(b,d)=>{te(d)||(p[b]=d.toString())};return w("width",u),w("height",h),p.viewBox=e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:p,body:r}}const ne=/\sid="(\S+)"/g,oe="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ie=0;function re(t,o=oe){const n=[];let i;for(;i=ne.exec(t);)n.push(i[1]);if(!n.length)return t;const e="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const s=typeof o=="function"?o(r):o+(ie++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+e+"$3")}),t=t.replace(new RegExp(e,"g"),""),t}function se(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in o)n+=" "+i+'="'+o[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ce(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function le(t){return'url("data:image/svg+xml,'+ce(t)+'")'}const st={...Ft,inline:!1},ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},fe={display:"inline-block"},U={backgroundColor:"currentColor"},Ot={backgroundColor:"transparent"},ct={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},lt={webkitMask:U,mask:U,background:Ot};for(const t in lt){const o=lt[t];for(const n in ct)o[t+n]=ct[n]}const E={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";E[t+"-flip"]=o,E[t.slice(0,1)+"-flip"]=o,E[t+"Flip"]=o});function at(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const ue=(t,o)=>{const n=Kt(st,o),i={...ae},e=o.mode||"svg",r={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let d in o){const f=o[d];if(f!==void 0)switch(d){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[d]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Jt(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[d]=Xt(f):typeof f=="number"&&(n[d]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:{const I=E[d];I?(f===!0||f==="true"||f===1)&&(n[I]=!0):st[d]===void 0&&(i[d]=f)}}}const l=ee(t,n),a=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),e==="svg"){i.style={...r,...c},Object.assign(i,a);let d=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),i.innerHTML=re(l.body,f?()=>f+"ID"+d++:"iconifyVue"),S("svg",i)}const{body:u,width:h,height:p}=t,w=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),b=se(u,{...a,width:h+"",height:p+""});return i.style={...r,"--svg":le(b),width:at(a.width),height:at(a.height),...fe,...w?U:Ot,...c},S("span",i)},Mt=Object.create(null);function de(t,o){Mt[t]=o}const ft=O({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?Mt[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:ue({...Y,...n},t)}}),he=O({name:"IconifyIconOffline",components:{IconifyIcon:ft},props:{icon:{default:null}},render(){typeof this.icon=="object"&&de(this.icon,this.icon);const t=this.$attrs;return S(ft,{icon:this.icon,style:t!=null&&t.style?Object.assign(t.style,{outline:"none"}):{outline:"none"},...t},{default:()=>[]})}}),$=/^[a-z0-9]+(-[a-z0-9]+)*$/,_=(t,o,n,i="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;i=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),a={provider:e.length>0?e[0]:i,prefix:l,name:c};return o&&!L(a)?null:a}const r=e[0],s=r.split("-");if(s.length>1){const c={provider:i,prefix:s.shift(),name:s.join("-")};return o&&!L(c)?null:c}if(n&&i===""){const c={provider:i,prefix:"",name:r};return o&&!L(c,n)?null:c}return null},L=(t,o)=>t?!!((t.provider===""||t.provider.match($))&&(o&&t.prefix===""||t.prefix.match($))&&t.name.match($)):!1,Pt=Object.freeze({left:0,top:0,width:16,height:16}),D=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),R=Object.freeze({...Pt,...D}),q=Object.freeze({...R,body:"",hidden:!1});function pe(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(o.rotate||0))%4;return i&&(n.rotate=i),n}function ut(t,o){const n=pe(t,o);for(const i in q)i in D?i in t&&!(i in n)&&(n[i]=D[i]):i in o?n[i]=o[i]:i in t&&(n[i]=t[i]);return n}function ge(t,o){const n=t.icons,i=t.aliases||Object.create(null),e=Object.create(null);function r(s){if(n[s])return e[s]=[];if(!(s in e)){e[s]=null;const c=i[s]&&i[s].parent,l=c&&r(c);l&&(e[s]=[c].concat(l))}return e[s]}return(o||Object.keys(n).concat(Object.keys(i))).forEach(r),e}function me(t,o,n){const i=t.icons,e=t.aliases||Object.create(null);let r={};function s(c){r=ut(i[c]||e[c],r)}return s(o),n.forEach(s),ut(t,r)}function Et(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const i=ge(t);for(const e in i){const r=i[e];r&&(o(e,me(t,e,r)),n.push(e))}return n}const ye={provider:"",aliases:{},not_found:{},...Pt};function V(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function Lt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!V(t,ye))return null;const n=o.icons;for(const e in n){const r=n[e];if(!e.match($)||typeof r.body!="string"||!V(r,q))return null}const i=o.aliases||Object.create(null);for(const e in i){const r=i[e],s=r.parent;if(!e.match($)||typeof s!="string"||!n[s]&&!i[s]||!V(r,q))return null}return o}const dt=Object.create(null);function be(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function k(t,o){const n=dt[t]||(dt[t]=Object.create(null));return n[o]||(n[o]=be(t,o))}function Z(t,o){return Lt(o)?Et(o,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function we(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let T=!1;function At(t){return typeof t=="boolean"&&(T=t),T}function Ie(t){const o=typeof t=="string"?_(t,!0,T):t;if(o){const n=k(o.provider,o.prefix),i=o.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function xe(t,o){const n=_(t,!0,T);if(!n)return!1;const i=k(n.provider,n.prefix);return we(i,n.name,o)}function Se(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),T&&!o&&!t.prefix){let e=!1;return Lt(t)&&(t.prefix="",Et(t,(r,s)=>{s&&xe(r,s)&&(e=!0)})),e}const n=t.prefix;if(!L({provider:o,prefix:n,name:"a"}))return!1;const i=k(o,n);return!!Z(i,t)}const Nt=Object.freeze({width:null,height:null}),Dt=Object.freeze({...Nt,...D}),ve=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ke=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ht(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const i=t.split(ve);if(i===null||!i.length)return t;const e=[];let r=i.shift(),s=ke.test(r);for(;;){if(s){const c=parseFloat(r);isNaN(c)?e.push(r):e.push(Math.ceil(c*o*n)/n)}else e.push(r);if(r=i.shift(),r===void 0)return e.join("");s=!s}}const Ce=t=>t==="unset"||t==="undefined"||t==="none";function je(t,o){const n={...R,...t},i={...Dt,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(b=>{const d=[],f=b.hFlip,I=b.vFlip;let y=b.rotate;f?I?y+=2:(d.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),d.push("scale(-1 1)"),e.top=e.left=0):I&&(d.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),d.push("scale(1 -1)"),e.top=e.left=0);let m;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:m=e.height/2+e.top,d.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:d.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:m=e.width/2+e.left,d.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}y%2===1&&(e.left!==e.top&&(m=e.left,e.left=e.top,e.top=m),e.width!==e.height&&(m=e.width,e.width=e.height,e.height=m)),d.length&&(r='<g transform="'+d.join(" ")+'">'+r+"</g>")});const s=i.width,c=i.height,l=e.width,a=e.height;let u,h;s===null?(h=c===null?"1em":c==="auto"?a:c,u=ht(h,l/a)):(u=s==="auto"?l:s,h=c===null?ht(u,a/l):c==="auto"?a:c);const p={},w=(b,d)=>{Ce(d)||(p[b]=d.toString())};return w("width",u),w("height",h),p.viewBox=e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString(),{attributes:p,body:r}}const $e=/\sid="(\S+)"/g,Te="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Fe=0;function Oe(t,o=Te){const n=[];let i;for(;i=$e.exec(t);)n.push(i[1]);if(!n.length)return t;const e="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const s=typeof o=="function"?o(r):o+(Fe++).toString(),c=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+e+"$3")}),t=t.replace(new RegExp(e,"g"),""),t}const Q=Object.create(null);function Me(t,o){Q[t]=o}function G(t){return Q[t]||Q[""]}function tt(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const et=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],A=[];for(;j.length>0;)j.length===1||Math.random()>.5?A.push(j.shift()):A.push(j.pop());et[""]=tt({resources:["https://api.iconify.design"].concat(A)});function Pe(t,o){const n=tt(o);return n===null?!1:(et[t]=n,!0)}function nt(t){return et[t]}const Ee=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let pt=Ee();function Le(t,o){const n=nt(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let e=0;n.resources.forEach(s=>{e=Math.max(e,s.length)});const r=o+".json?icons=";i=n.maxURL-e-n.path.length-r.length}return i}function Ae(t){return t===404}const Ne=(t,o,n)=>{const i=[],e=Le(t,o),r="icons";let s={type:r,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=e&&a>0&&(i.push(s),s={type:r,provider:t,prefix:o,icons:[]},c=l.length),s.icons.push(l)}),i.push(s),i};function De(t){if(typeof t=="string"){const o=nt(t);if(o)return o.path}return"/"}const _e=(t,o,n)=>{if(!pt){n("abort",424);return}let i=De(o.provider);switch(o.type){case"icons":{const r=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});i+=r+".json?"+l.toString();break}case"custom":{const r=o.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let e=503;pt(t+i).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{n(Ae(s)?"abort":"next",s)});return}return e=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",e)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",e)})},Re={prepare:Ne,send:_e};function ze(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,r)=>e.provider!==r.provider?e.provider.localeCompare(r.provider):e.prefix!==r.prefix?e.prefix.localeCompare(r.prefix):e.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(e=>{if(i.name===e.name&&i.prefix===e.prefix&&i.provider===e.provider)return;i=e;const r=e.provider,s=e.prefix,c=e.name,l=n[r]||(n[r]=Object.create(null)),a=l[s]||(l[s]=k(r,s));let u;c in a.icons?u=o.loaded:s===""||a.missing.has(c)?u=o.missing:u=o.pending;const h={provider:r,prefix:s,name:c};u.push(h)}),o}function _t(t,o){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(e=>e.id!==o))})}function He(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const i=t.provider,e=t.prefix;o.forEach(r=>{const s=r.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==e)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:i,prefix:e,name:a});else if(t.missing.has(a))s.missing.push({provider:i,prefix:e,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||_t([t],r.id),r.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),r.abort))})}))}let Ve=0;function Be(t,o,n){const i=Ve++,e=_t.bind(null,n,i);if(!o.pending.length)return e;const r={id:i,icons:o,callback:t,abort:e};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(r)}),e}function Ue(t,o=!0,n=!1){const i=[];return t.forEach(e=>{const r=typeof e=="string"?_(e,o,n):e;r&&i.push(r)}),i}var qe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Qe(t,o,n,i){const e=t.resources.length,r=t.random?Math.floor(Math.random()*e):t.index;let s;if(t.random){let g=t.resources.slice(0);for(s=[];g.length>1;){const x=Math.floor(Math.random()*g.length);s.push(g[x]),g=g.slice(0,x).concat(g.slice(x+1))}s=s.concat(g)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let l="pending",a=0,u,h=null,p=[],w=[];typeof i=="function"&&w.push(i);function b(){h&&(clearTimeout(h),h=null)}function d(){l==="pending"&&(l="aborted"),b(),p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function f(g,x){x&&(w=[]),typeof g=="function"&&w.push(g)}function I(){return{startTime:c,payload:o,status:l,queriesSent:a,queriesPending:p.length,subscribe:f,abort:d}}function y(){l="failed",w.forEach(g=>{g(void 0,u)})}function m(){p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function Gt(g,x,C){const M=x!=="success";switch(p=p.filter(v=>v!==g),l){case"pending":break;case"failed":if(M||!t.dataAfterTimeout)return;break;default:return}if(x==="abort"){u=C,y();return}if(M){u=C,p.length||(s.length?H():y());return}if(b(),m(),!t.random){const v=t.resources.indexOf(g.resource);v!==-1&&v!==t.index&&(t.index=v)}l="completed",w.forEach(v=>{v(C)})}function H(){if(l!=="pending")return;b();const g=s.shift();if(g===void 0){if(p.length){h=setTimeout(()=>{b(),l==="pending"&&(m(),y())},t.timeout);return}y();return}const x={status:"pending",resource:g,callback:(C,M)=>{Gt(x,C,M)}};p.push(x),a++,h=setTimeout(H,t.rotate),n(g,o,x.callback)}return setTimeout(H),I}function Rt(t){const o={...qe,...t};let n=[];function i(){n=n.filter(c=>c().status==="pending")}function e(c,l,a){const u=Qe(o,c,l,(h,p)=>{i(),a&&a(h,p)});return n.push(u),u}function r(c){return n.find(l=>c(l))||null}return{query:e,find:r,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:i}}function gt(){}const B=Object.create(null);function Ge(t){if(!B[t]){const o=nt(t);if(!o)return;const n=Rt(o),i={config:o,redundancy:n};B[t]=i}return B[t]}function Ke(t,o,n){let i,e;if(typeof t=="string"){const r=G(t);if(!r)return n(void 0,424),gt;e=r.send;const s=Ge(t);s&&(i=s.redundancy)}else{const r=tt(t);if(r){i=Rt(r);const s=t.resources?t.resources[0]:"",c=G(s);c&&(e=c.send)}}return!i||!e?(n(void 0,424),gt):i.query(o,e,n)().abort}const mt="iconify2",F="iconify",zt=F+"-count",yt=F+"-version",Ht=36e5,We=168;function K(t,o){try{return t.getItem(o)}catch{}}function ot(t,o,n){try{return t.setItem(o,n),!0}catch{}}function bt(t,o){try{t.removeItem(o)}catch{}}function W(t,o){return ot(t,zt,o.toString())}function J(t){return parseInt(K(t,zt))||0}const z={local:!0,session:!0},Vt={local:new Set,session:new Set};let it=!1;function Je(t){it=t}let P=typeof window>"u"?{}:window;function Bt(t){const o=t+"Storage";try{if(P&&P[o]&&typeof P[o].length=="number")return P[o]}catch{}z[t]=!1}function Ut(t,o){const n=Bt(t);if(!n)return;const i=K(n,yt);if(i!==mt){if(i){const c=J(n);for(let l=0;l<c;l++)bt(n,F+l.toString())}ot(n,yt,mt),W(n,0);return}const e=Math.floor(Date.now()/Ht)-We,r=c=>{const l=F+c.toString(),a=K(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>e&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&o(u,c))return!0}catch{}bt(n,l)}};let s=J(n);for(let c=s-1;c>=0;c--)r(c)||(c===s-1?(s--,W(n,s)):Vt[t].add(c))}function qt(){if(!it){Je(!0);for(const t in z)Ut(t,o=>{const n=o.data,i=o.provider,e=n.prefix,r=k(i,e);if(!Z(r,n).length)return!1;const s=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,s):s,!0})}}function Xe(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const i in z)Ut(i,e=>{const r=e.data;return e.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===o});return!0}function Ye(t,o){it||qt();function n(i){let e;if(!z[i]||!(e=Bt(i)))return;const r=Vt[i];let s;if(r.size)r.delete(s=Array.from(r).shift());else if(s=J(e),!W(e,s+1))return;const c={cached:Math.floor(Date.now()/Ht),provider:t.provider,data:o};return ot(e,F+s.toString(),JSON.stringify(c))}o.lastModified&&!Xe(t,o.lastModified)||Object.keys(o.icons).length&&(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function wt(){}function Ze(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,He(t)}))}function tn(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,e=t.iconsToLoad;delete t.iconsToLoad;let r;if(!e||!(r=G(n)))return;r.prepare(n,i,e).forEach(c=>{Ke(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=Z(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(h=>{u.delete(h)}),Ye(t,l)}catch(a){console.error(a)}Ze(t)})})}))}const en=(t,o)=>{const n=Ue(t,!0,At()),i=ze(n);if(!i.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(i.loaded,i.missing,i.pending,wt)}),()=>{l=!1}}const e=Object.create(null),r=[];let s,c;return i.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,r.push(k(a,u));const h=e[a]||(e[a]=Object.create(null));h[u]||(h[u]=[])}),i.pending.forEach(l=>{const{provider:a,prefix:u,name:h}=l,p=k(a,u),w=p.pendingIcons||(p.pendingIcons=new Set);w.has(h)||(w.add(h),e[a][u].push(h))}),r.forEach(l=>{const{provider:a,prefix:u}=l;e[a][u].length&&tn(l,e[a][u])}),o?Be(o,i,r):wt};function nn(t,o){const n={...t};for(const i in o){const e=o[i],r=typeof e;i in Nt?(e===null||e&&(r==="string"||r==="number"))&&(n[i]=e):r===typeof n[i]&&(n[i]=i==="rotate"?e%4:e)}return n}const on=/[\s,]+/;function rn(t,o){o.split(on).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function sn(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function i(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:i(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/e,r%1===0?i(r):0)}}return o}function cn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in o)n+=" "+i+'="'+o[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ln(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function an(t){return'url("data:image/svg+xml,'+ln(t)+'")'}const It={...Dt,inline:!1},fn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},un={display:"inline-block"},X={backgroundColor:"currentColor"},Qt={backgroundColor:"transparent"},xt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},St={webkitMask:X,mask:X,background:Qt};for(const t in St){const o=St[t];for(const n in xt)o[t+n]=xt[n]}const N={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";N[t+"-flip"]=o,N[t.slice(0,1)+"-flip"]=o,N[t+"Flip"]=o});function vt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const kt=(t,o)=>{const n=nn(It,o),i={...fn},e=o.mode||"svg",r={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let d in o){const f=o[d];if(f!==void 0)switch(d){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[d]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&rn(n,f);break;case"color":r.color=f;break;case"rotate":typeof f=="string"?n[d]=sn(f):typeof f=="number"&&(n[d]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete i["aria-hidden"];break;default:{const I=N[d];I?(f===!0||f==="true"||f===1)&&(n[I]=!0):It[d]===void 0&&(i[d]=f)}}}const l=je(t,n),a=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),e==="svg"){i.style={...r,...c},Object.assign(i,a);let d=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),i.innerHTML=Oe(l.body,f?()=>f+"ID"+d++:"iconifyVue"),S("svg",i)}const{body:u,width:h,height:p}=t,w=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),b=cn(u,{...a,width:h+"",height:p+""});return i.style={...r,"--svg":an(b),width:vt(a.width),height:vt(a.height),...un,...w?X:Qt,...c},S("span",i)};At(!0);Me("",Re);if(typeof document<"u"&&typeof window<"u"){qt();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Se(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const i="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Pe(n,e)||console.error(i)}catch{console.error(i)}}}}const dn={...R,body:""},Ct=O({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=_(t,!1,!0))===null)return this.abortLoading(),null;const i=Ie(n);if(!i)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",i!==null&&(this._loadingIcon={name:t,abort:en([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:i,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return kt(dn,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),kt({...R,...o.data},n)}}),hn=O({name:"IconifyIconOnline",components:{IconifyIcon:Ct},props:{icon:{type:String,default:""}},render(){const t=this.$attrs;return S(Ct,{icon:`${this.icon}`,style:t!=null&&t.style?Object.assign(t.style,{outline:"none"}):{outline:"none"},...t},{default:()=>[]})}}),pn=O({name:"FontIcon",props:{icon:{type:String,default:""}},render(){const t=this.$attrs;return Object.keys(t).includes("uni")||(t==null?void 0:t.iconType)==="uni"?S("i",{class:"iconfont",...t},this.icon):Object.keys(t).includes("svg")||(t==null?void 0:t.iconType)==="svg"?S("svg",{class:"icon-svg","aria-hidden":!0},{default:()=>[S("use",{"xlink:href":`#${this.icon}`})]}):S("i",{class:`iconfont ${this.icon}`,...t})}}),mn=he,yn=hn,bn=pn;export{bn as F,mn as I,yn as a,de as b};
