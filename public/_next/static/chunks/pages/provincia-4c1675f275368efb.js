(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841],{7900:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/provincia",function(){return a(9871)}])},7906:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(5893),r=a(7294),i=function(e){return r.createElement("svg",{viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto",...e},r.createElement("path",{fill:e.color,d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))},s=a(1664),o=a.n(s);let l=[{path:"/",icon:(0,n.jsx)(function(e){return r.createElement("svg",{viewBox:"0 0 576 512",width:e.width||"1em",length:e.height||"auto",...e},r.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}))},{color:"#ffffff"}),link:(0,n.jsx)(o(),{href:"/",children:"Homepage"})},{path:"/provincia",icon:(0,n.jsx)(i,{color:"#ffffff"}),link:(0,n.jsx)(o(),{href:"/provincia",children:"Provincia"})},{path:"/municipio",icon:(0,n.jsx)(i,{color:"#ffffff"}),link:(0,n.jsx)(o(),{href:"/municipio",children:"Municipio"})}]},930:function(e,t,a){"use strict";var n=a(5893),r=a(1713),i=a.n(r);let s=e=>{let{st:t,reverse:a}=e;return(0,n.jsxs)("button",{className:t?i().opened:i().closed,onClick:()=>a(),children:[(0,n.jsx)("i",{className:i().bar}),(0,n.jsx)("i",{className:i().bar}),(0,n.jsx)("i",{className:i().bar})]})};t.Z=s},2795:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(5893),r=a(9930),i=a.n(r),s=a(260),o=a.n(s),l=a(1163),c=function(e){var t;let a=(0,l.useRouter)(),r=null==e?void 0:null===(t=e.options)||void 0===t?void 0:t.filter(e=>e.path!==a.pathname);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:o().container,children:(0,n.jsx)("div",{className:o().nav,children:null==r?void 0:r.map((e,t)=>(0,n.jsx)("ul",{className:o().nav__list,children:(0,n.jsxs)("li",{className:o().nav__item,children:[(0,n.jsx)("div",{className:o().nav__icon,children:e.icon}),(0,n.jsx)("div",{className:o().nav__link,children:e.link})]})},t))})})})},_=a(7740),u=a(8227);function d(e){let t=(0,_.R)(u.Wy),{st:a,setFalse:r}=t;return(0,n.jsx)("nav",{children:(0,n.jsx)("div",{className:a?i().opened:i().closed,onClick:r,children:(0,n.jsx)(c,{options:e.options})})})}},9871:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return O}});var n=a(5893),r=a(7294),i=a(7740),s=a(8227),o=a(7906),l=a(2795),c=a(930),_=a(90),u=a.n(_),d=function(){let[e,t]=r.useState(0),a=()=>{t(e=>e+1)};r.useEffect(()=>{e>4&&t(0)},[e]);let o=(0,i.R)(s.SB);o.setOption(["mostrar","buscar","crear","modificar","eliminar"][e]);let l=o.opt;return(0,n.jsx)("button",{onClick:a,className:u().selectorButton,children:l})},h=a(5602),f=a.n(h),v=function(e){let{name:t,children:a}=e,r=(0,i.R)(s.Wy),{st:_,reverse:u}=r;return(0,n.jsxs)("div",{className:f().layout_container,children:[(0,n.jsx)(l.Z,{options:o.Z}),(0,n.jsxs)("header",{className:f().layout_header,children:[(0,n.jsx)(d,{}),(0,n.jsx)("h4",{className:f().layout_title,children:t}),(0,n.jsx)(c.Z,{reverse:u,st:_})]}),(0,n.jsx)("main",{className:f().layout_main,children:a}),(0,n.jsx)("footer",{className:f().layout_footer,children:(0,n.jsxs)("h4",{className:f().layout_footer__title,children:["pki-system ",new Date().getFullYear()]})})]})},x=a(9346),m=a.n(x);let p=e=>{let t;let{list:a}=e,r=(0,i.R)(s.SB),o=r.opt;return a.map(e=>{o==="".concat(e.name)&&(t=e.api)}),(0,n.jsx)("div",{className:m().container,children:t})},j=()=>(0,n.jsx)("h1",{children:"CreateProvincia"}),y=()=>(0,n.jsx)("h1",{children:"UpdateProvincia"});var b=a(5463),g=a.n(b),N=function(e){let{message:t}=e,[a,i]=r.useState("");return r.useEffect(()=>{i(t)},[t]),(0,n.jsx)("div",{className:g().container,children:(0,n.jsx)("p",{children:a})})},w=a(6154);let C=w.Z.create({baseURL:"http://localhost:4000",withCredentials:!1});async function k(e){try{let t=await C.get(e),a=t.data;return a}catch(e){return null==e?void 0:e.message}}let S=(e,t)=>{t(e)};var L=a(3104),E=a.n(L),P=function(e){let{data:t}=e,[a,o]=r.useState(""),[l,c]=r.useState(null);return(0,i.R)(s.ZP),(0,i.R)(s.SB),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:E().iteratorContainer,children:Array.isArray(t)?null==t?void 0:t.map(e=>{let{id:t,name:a,enabled:r}=e;return(0,n.jsx)("ul",{className:E().unorderedList,children:(0,n.jsx)("div",{className:E().listContainer,children:(0,n.jsx)("li",{className:r?E().listItem:E().disabled,children:(0,n.jsxs)("p",{style:{textTransform:"uppercase"},children:[" ",a||null,(0,n.jsxs)("p",{children:[" ","".concat(r)]})]})})})},t)}):(0,n.jsx)("p",{className:"default-message",children:"Sin datos aun!"})})})},B=a(5527),Z=a(8767);let A=e=>{let[t,a]=r.useState(!0),n=r.useCallback(()=>a(e=>!e),[]),{data:i,isLoading:s,isError:o,refetch:l}=(0,Z.useQuery)("some-data",()=>k("".concat(e)));return r.useEffect(()=>{l()},[t]),[i,t,n,s,o]};var F=a(2158),M=a.n(F);let R=()=>(0,n.jsx)("h1",{children:"FindProvincia"}),T=()=>(0,n.jsx)("h1",{children:"DeleteProvincia"}),z=[{name:"crear",api:(0,n.jsx)(j,{})},{name:"mostrar",api:(0,n.jsx)(function(){var e,t;let[a,i]=(0,r.useState)(""),[s,o,l,c,_]=A("/provincia"),[u,d]=r.useState(null==s?void 0:s.result),h=(null==s?void 0:null===(e=s.response)||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.message)||(null==s?void 0:s.message);return r.useEffect(()=>{S(h,i)},[h]),r.useEffect(()=>{d(null==s?void 0:s.result)},[o,null==s?void 0:s.result]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:M().switchContainer,children:(0,n.jsx)(B.r,{onChange:e=>{l(e.target.checked)},size:"sm",checked:!0,colorScheme:"red",defaultChecked:o})}),(0,n.jsx)("div",{className:M().switchStatusPanel,children:(0,n.jsx)("label",{className:M().getter__label,color:o?"#c40550":"#999999",children:o?"Datos habilitados":"Datos desabilitados"})}),(0,n.jsxs)("div",{className:M().getterContainer,children:[_&&(0,n.jsx)("div",{children:"An error ocurred..."}),c&&(0,n.jsx)("div",{children:(0,n.jsx)("h5",{color:"white",children:"Loading..."})}),(0,n.jsx)(P,{data:null==s?void 0:s.result}),a&&(0,n.jsx)(N,{message:a})]})]})},{})},{name:"buscar",api:(0,n.jsx)(R,{})},{name:"modificar",api:(0,n.jsx)(y,{})},{name:"eliminar",api:(0,n.jsx)(T,{})}];function O(){return(0,n.jsx)(v,{name:"Provincia",children:(0,n.jsx)(p,{list:z})})}},8227:function(e,t,a){"use strict";a.d(t,{SB:function(){return s},Wy:function(){return o}});var n=a(6949);let r=(0,n.sj)({stack:{},setStack:e=>Object.assign(r.stack,e)}),i=(0,n.sj)({user:{},setUser:e=>Object.assign(i.user,e)}),s=(0,n.sj)({opt:"mostrar",setOption:e=>s.opt=e}),o=(0,n.sj)({st:!1,setTrue:()=>o.st=!0,setFalse:()=>o.st=!1,reverse:()=>o.st=!o.st});t.ZP=r},1713:function(e){e.exports={bar:"button_bar__bvbLc",opened:"button_opened__1pV3d",closed:"button_closed__J0UEF"}},5463:function(e){e.exports={container:"exceptionhandler_container__KJKpu"}},90:function(e){e.exports={selectorButton:"selector_selectorButton__WfUB3"}},260:function(e){e.exports={container:"navbar_container__tn_1d",nav:"navbar_nav__YTO2w",nav__list:"navbar_nav__list__caPXJ",nav__item:"navbar_nav__item__gM8tL",nav__icon:"navbar_nav__icon__Pn3I1",nav__link:"navbar_nav__link__tM4xS",nav__button:"navbar_nav__button__sbyqD",hidden:"navbar_hidden__hakq3",visible:"navbar_visible__iNp9V"}},9930:function(e){e.exports={opened:"sidebar_opened__cT3Cm",closed:"sidebar_closed__sGx4n"}},3104:function(e){e.exports={iteratorContainer:"arrayiterator_iteratorContainer__WwDS1",defaultMessage:"arrayiterator_defaultMessage__T8W4f",disabled:"arrayiterator_disabled__Pu98k",iteratorHeader:"arrayiterator_iteratorHeader__kFo9_",iteratorLogo:"arrayiterator_iteratorLogo__E8Sys",listContainer:"arrayiterator_listContainer___wizS",unorderedList:"arrayiterator_unorderedList__KWzBo",listItem:"arrayiterator_listItem__oGnrV",associatedList:"arrayiterator_associatedList__jL0xF",associatedItem:"arrayiterator_associatedItem__xhQm0",buttonContainer:"arrayiterator_buttonContainer__uSXxA",submitButton:"arrayiterator_submitButton__gyyjN",downloadAnchor:"arrayiterator_downloadAnchor__O667Z"}},9346:function(e){e.exports={"l-header":"provinciaApi_l-header__nmEJP","l-footer":"provinciaApi_l-footer__h287S",container:"provinciaApi_container__K7NSm"}},2158:function(e){e.exports={switchContainer:"getprovincia_switchContainer__ZFQCM",switchStatusPanel:"getprovincia_switchStatusPanel__TTLnH",getterContainer:"getprovincia_getterContainer__XcjKY",getter__label:"getprovincia_getter__label__n2eE9"}},5602:function(e){e.exports={"l-header":"flexlayout_l-header__pMkiX",layout_header:"flexlayout_layout_header__3bizb","l-footer":"flexlayout_l-footer__vdDUG",layout_footer:"flexlayout_layout_footer__6T0Hi",layout_container:"flexlayout_layout_container__BqbL9",layout_main:"flexlayout_layout_main__46Zvy",layout_title:"flexlayout_layout_title__5I3NK",layout_footer__title:"flexlayout_layout_footer__title__FRig4"}}},function(e){e.O(0,[678,541,774,888,179],function(){return e(e.s=7900)}),_N_E=e.O()}]);