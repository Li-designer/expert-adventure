import{a2 as w,a8 as ee,o as te,I as D,X as f,J as c,a7 as ne,K as j,a9 as oe,N as ae,U as b,y as ue,aa as se}from"./index-fff9eaea.js";import{e as I}from"./mitt-7f99bbc0.js";import{d as re,u as le}from"./vue-router-ff44b207.js";import{e as l,r as _,t as G,v as O,x as C}from"./runtime-core.esm-bundler-3932d34b.js";function ie(){const{$storage:t,$config:e}=w(),n=()=>{ee().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=te),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},o=l(()=>t==null?void 0:t.layout.layout),u=l(()=>t.layout);return{layout:o,layoutTheme:u,initStorage:n}}const fe=D({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=f().getItem("responsive-layout"))==null?void 0:t.sidebarStatus)??c().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=f().getItem("responsive-layout"))==null?void 0:e.layout)??c().Layout,device:ne()?"mobile":"desktop"}},getters:{getSidebarStatus(){return this.sidebar.opened},getDevice(){return this.device}},actions:{TOGGLE_SIDEBAR(t,e){const n=f().getItem("responsive-layout");t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,n.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,n.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,n.sidebarStatus=this.sidebar.opened),f().setItem("responsive-layout",n)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function de(){return fe(j)}const ce=D({id:"pure-epTheme",state:()=>{var t,e;return{epThemeColor:((t=f().getItem("responsive-layout"))==null?void 0:t.epThemeColor)??c().EpThemeColor,epTheme:((e=f().getItem("responsive-layout"))==null?void 0:e.theme)??c().Theme}},getters:{getEpThemeColor(){return this.epThemeColor},fill(){return this.epTheme==="light"?"#409eff":this.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=f().getItem("responsive-layout");this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,f().setItem("responsive-layout",e))}}});function x(){return ce(j)}const N="当前路由配置不正确，请检查配置";function Ee(){var H;const t=re(),e=de(),n=le().options.routes,{wholeMenus:o}=oe(ae()),u=((H=c())==null?void 0:H.TooltipEffect)??"light",i=l(()=>{var a;return(a=b())==null?void 0:a.id}),m=l(()=>{var a;return(a=b())==null?void 0:a.username}),$=l(()=>{var a;return(a=b())==null?void 0:a.roleNames}),v=l(()=>{var a;return(a=b())==null?void 0:a.roles}),M=l(()=>m.value?{marginRight:"10px"}:""),y=l(()=>!e.getSidebarStatus),r=l(()=>e.getDevice),{$storage:s,$config:d}=w(),B=l(()=>{var a;return(a=s==null?void 0:s.layout)==null?void 0:a.layout}),S=l(()=>d.Title);function U(a){const h=c().Title;h?document.title=`${a.title} | ${h}`:document.title=a.title}function Q(){b().logOut()}function W(){ue.push("/welcome")}function J(){I.emit("openPanel")}function K(){e.toggleSideBar()}function X(a){a==null||a.handleResize()}function q(a){var T;if(!a.children)return console.error(N);const h=/^http(s?):\/\//,p=(T=a.children[0])==null?void 0:T.path;return h.test(p)?a.path+"/"+p:p}function Y(a,h){if(o.value.length===0||Z(a))return;let p="";const T=a.lastIndexOf("/");T>0&&(p=a.slice(0,T));function k(A,E){return E?E.map(g=>{g.path===A?g.redirect?k(g.redirect,g.children):I.emit("changLayoutRoute",{indexPath:A,parentPath:p}):g.children&&k(A,g.children)}):console.error(N)}k(a,h)}function Z(a){return se.includes(a)}return{route:t,title:S,device:r,layout:B,logout:Q,routers:n,$storage:s,backHome:W,onPanel:J,changeTitle:U,toggleSideBar:K,menuSelect:Y,handleResize:X,resolvePath:q,isCollapse:y,pureApp:e,username:m,roleNames:$,roles:v,id:i,avatarsStyle:M,tooltipEffect:u}}const L={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/Users/lijing/Documents/documentAll/newCodeV3/expert-adventure/node_modules/.pnpm/@pureadmin+theme@3.0.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},me="./",he="assets";function V(t){let e=t.replace("#","").match(/../g);for(let n=0;n<3;n++)e[n]=parseInt(e[n],16);return e}function F(t,e,n){let o=[t.toString(16),e.toString(16),n.toString(16)];for(let u=0;u<3;u++)o[u].length==1&&(o[u]=`0${o[u]}`);return`#${o.join("")}`}function pe(t,e){let n=V(t);for(let o=0;o<3;o++)n[o]=Math.floor(n[o]*(1-e));return F(n[0],n[1],n[2])}function ge(t,e){let n=V(t);for(let o=0;o<3;o++)n[o]=Math.floor((255-n[o])*e+n[o]);return F(n[0],n[1],n[2])}function P(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function R({scopeName:t,multipleScopeVars:e}){const n=Array.isArray(e)&&e.length?e:L.multipleScopeVars;let o=document.documentElement.className;new RegExp(P(t)).test(o)||(n.forEach(u=>{o=o.replace(new RegExp(P(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=o.replace(/(^\s+|\s+$)/g,""))}function z({id:t,href:e}){const n=document.createElement("link");return n.rel="stylesheet",n.href=e,n.id=t,n}function ve(t){const e={scopeName:"theme-default",customLinkHref:i=>i,...t},n=e.themeLinkTagId||L.themeLinkTagId;let o=document.getElementById(n);const u=e.customLinkHref(`${me.replace(/\/$/,"")}${`/${he}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(o){o.id=`${n}_old`;const i=z({id:n,href:u});o.nextSibling?o.parentNode.insertBefore(i,o.nextSibling):o.parentNode.appendChild(i),i.onload=()=>{setTimeout(()=>{o.parentNode.removeChild(o),o=null},60),R(e)};return}o=z({id:n,href:u}),R(e),document[(e.themeLinkTagInjectTo||L.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(o)}function Ie(){var y;const{layoutTheme:t,layout:e}=ie(),n=_([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:o}=w(),u=_((y=o==null?void 0:o.layout)==null?void 0:y.darkMode),i=document.documentElement;function m(r="default"){var s,d;if(t.value.theme=r,ve({scopeName:`layout-theme-${r}`}),o.layout={layout:e.value,theme:r,darkMode:u.value,sidebarStatus:(s=o.layout)==null?void 0:s.sidebarStatus,epThemeColor:(d=o.layout)==null?void 0:d.epThemeColor},r==="default"||r==="light")v(c().EpThemeColor);else{const B=n.value.find(S=>S.themeColor===r);v(B.color)}}function $(r,s,d){document.documentElement.style.setProperty(`--el-color-primary-${r}-${s}`,u.value?pe(d,s/10):ge(d,s/10))}const v=r=>{x().setEpThemeColor(r),document.documentElement.style.setProperty("--el-color-primary",r);for(let s=1;s<=2;s++)$("dark",s,r);for(let s=1;s<=9;s++)$("light",s,r)};function M(){x().epTheme==="light"&&u.value?m("default"):m(x().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:i,dataTheme:u,layoutTheme:t,themeColors:n,dataThemeChange:M,setEpThemeColor:v,setLayoutThemeColor:m}}const Te={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},be=C("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),$e=C("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),ye=[be,$e];function Ce(t,e){return G(),O("svg",Te,ye)}const _e={render:Ce},Me={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Be=C("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Se=C("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),ke=[Be,Se];function Ae(t,e){return G(),O("svg",Me,ke)}const Ne={render:Ae};export{Ee as a,Ie as b,de as c,_e as d,Ne as e,ie as f,ve as t,x as u};
