(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3480:function(e,n,t){Promise.resolve().then(t.bind(t,8311))},8311:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var r=t(7566),i=t(7384),o=t(4058),a=t(277),s=t(3728),l=t(7790),c=t.t(l,2),u=t(9754),p=t(53),d=t(8015),m=t(7660),f=t(7161),x=t(4696),h=t(9822);let g=l.createContext();var b=t(2311),w=t(5711);function v(e){return(0,w.Z)("MuiGrid",e)}let $=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],k=(0,b.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...$.map(e=>`grid-xs-${e}`),...$.map(e=>`grid-sm-${e}`),...$.map(e=>`grid-md-${e}`),...$.map(e=>`grid-lg-${e}`),...$.map(e=>`grid-xl-${e}`)]);var Z=k;let j=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function y(e){let n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function S({breakpoints:e,values:n}){let t="";Object.keys(n).forEach(e=>{""===t&&0!==n[e]&&(t=e)});let r=Object.keys(e).sort((n,t)=>e[n]-e[t]);return r.slice(0,r.indexOf(t))}let M=(0,f.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e,{container:r,direction:i,item:o,spacing:a,wrap:s,zeroMinWidth:l,breakpoints:c}=t,u=[];r&&(u=function(e,n,t={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[t[`spacing-xs-${String(e)}`]];let r=[];return n.forEach(n=>{let i=e[n];Number(i)>0&&r.push(t[`spacing-${n}-${String(i)}`])}),r}(a,c,n));let p=[];return c.forEach(e=>{let r=t[e];r&&p.push(n[`grid-${e}-${String(r)}`])}),[n.root,r&&n.container,o&&n.item,l&&n.zeroMinWidth,...u,"row"!==i&&n[`direction-xs-${String(i)}`],"wrap"!==s&&n[`wrap-xs-${String(s)}`],...p]}})(({ownerState:e})=>(0,s.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:n}){let t=(0,p.P$)({values:n.direction,breakpoints:e.breakpoints.values});return(0,p.k9)({theme:e},t,e=>{let n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${Z.item}`]={maxWidth:"none"}),n})},function({theme:e,ownerState:n}){let{container:t,rowSpacing:r}=n,i={};if(t&&0!==r){let n;let t=(0,p.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof t&&(n=S({breakpoints:e.breakpoints.values,values:t})),i=(0,p.k9)({theme:e},t,(t,r)=>{var i;let o=e.spacing(t);return"0px"!==o?{marginTop:`-${y(o)}`,[`& > .${Z.item}`]:{paddingTop:y(o)}}:null!=(i=n)&&i.includes(r)?{}:{marginTop:0,[`& > .${Z.item}`]:{paddingTop:0}}})}return i},function({theme:e,ownerState:n}){let{container:t,columnSpacing:r}=n,i={};if(t&&0!==r){let n;let t=(0,p.P$)({values:r,breakpoints:e.breakpoints.values});"object"==typeof t&&(n=S({breakpoints:e.breakpoints.values,values:t})),i=(0,p.k9)({theme:e},t,(t,r)=>{var i;let o=e.spacing(t);return"0px"!==o?{width:`calc(100% + ${y(o)})`,marginLeft:`-${y(o)}`,[`& > .${Z.item}`]:{paddingLeft:y(o)}}:null!=(i=n)&&i.includes(r)?{}:{width:"100%",marginLeft:0,[`& > .${Z.item}`]:{paddingLeft:0}}})}return i},function({theme:e,ownerState:n}){let t;return e.breakpoints.keys.reduce((r,i)=>{let o={};if(n[i]&&(t=n[i]),!t)return r;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let a=(0,p.P$)({values:n.columns,breakpoints:e.breakpoints.values}),l="object"==typeof a?a[i]:a;if(null==l)return r;let c=`${Math.round(t/l*1e8)/1e6}%`,u={};if(n.container&&n.item&&0!==n.columnSpacing){let t=e.spacing(n.columnSpacing);if("0px"!==t){let e=`calc(${c} + ${y(t)})`;u={flexBasis:e,maxWidth:e}}}o=(0,s.Z)({flexBasis:c,flexGrow:0,maxWidth:c},u)}return 0===e.breakpoints.values[i]?Object.assign(r,o):r[e.breakpoints.up(i)]=o,r},{})}),N=e=>{let{classes:n,container:t,direction:r,item:i,spacing:o,wrap:a,zeroMinWidth:s,breakpoints:l}=e,c=[];t&&(c=function(e,n){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let t=[];return n.forEach(n=>{let r=e[n];if(Number(r)>0){let e=`spacing-${n}-${String(r)}`;t.push(e)}}),t}(o,l));let u=[];l.forEach(n=>{let t=e[n];t&&u.push(`grid-${n}-${String(t)}`)});let p={root:["root",t&&"container",i&&"item",s&&"zeroMinWidth",...c,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...u]};return(0,m.Z)(p,v,n)},W=l.forwardRef(function(e,n){let t=(0,x.Z)({props:e,name:"MuiGrid"}),{breakpoints:i}=(0,h.Z)(),o=(0,d.Z)(t),{className:c,columns:p,columnSpacing:m,component:f="div",container:b=!1,direction:w="row",item:v=!1,rowSpacing:$,spacing:k=0,wrap:Z="wrap",zeroMinWidth:y=!1}=o,S=(0,a.Z)(o,j),W=l.useContext(g),P=b?p||12:W,z={},E=(0,s.Z)({},S);i.keys.forEach(e=>{null!=S[e]&&(z[e]=S[e],delete E[e])});let O=(0,s.Z)({},o,{columns:P,container:b,direction:w,item:v,rowSpacing:$||k,columnSpacing:m||k,wrap:Z,zeroMinWidth:y,spacing:k},z,{breakpoints:i.keys}),L=N(O);return(0,r.jsx)(g.Provider,{value:P,children:(0,r.jsx)(M,(0,s.Z)({ownerState:O,className:(0,u.Z)(L.root,c),as:f,ref:n},E))})});var P=t(5591),z=t(199),E=t(594),O=t(6450),L=t(7805),A=t(6015);function G(e,n,t,r,i){let[o,a]=l.useState(()=>i&&t?t(e).matches:r?r(e).matches:n);return(0,A.Z)(()=>{let n=!0;if(!t)return;let r=t(e),i=()=>{n&&a(r.matches)};return i(),r.addListener(i),()=>{n=!1,r.removeListener(i)}},[e,t]),o}let _=c.useSyncExternalStore;function C(e,n,t,r,i){let o=l.useCallback(()=>n,[n]),a=l.useMemo(()=>{if(i&&t)return()=>t(e).matches;if(null!==r){let{matches:n}=r(e);return()=>n}return o},[o,e,r,i,t]),[s,c]=l.useMemo(()=>{if(null===t)return[o,()=>()=>{}];let n=t(e);return[()=>n.matches,e=>(n.addListener(e),()=>{n.removeListener(e)})]},[o,t,e]),u=_(c,s,a);return u}var B=t(8914),D=t.n(B),R=t(8078);let T=e=>"".concat("https://www.ayanamist.blog").concat("").concat(e);var I=(0,R.fc)("Page",()=>{let e=(0,h.Z)(),n=function(e,n={}){let t=(0,O.Z)(),r="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:i=!1,matchMedia:o=r?window.matchMedia:null,ssrMatchMedia:a=null,noSsr:s=!1}=(0,L.Z)({name:"MuiUseMediaQuery",props:n,theme:t}),l="function"==typeof e?e(t):e;l=l.replace(/^@media( ?)/m,"");let c=(void 0!==_?C:G)(l,i,o,a,s);return c}(e.breakpoints.down("md"));return(0,r.jsxs)(z.Z,{children:[(0,r.jsx)(z.Z,{overflow:"hidden",paddingX:n?5:10,paddingY:7.5,position:"relative",sx:{"::before":{content:'""',background:(0,i.$n)(e.palette.background.default,.1),backgroundImage:"url(".concat(T("/images/logo-594x594.png"),")"),backgroundAttachment:"fixed",top:"-5px",bottom:"-5px",left:"-5px",right:"-5px",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"absolute",filter:"blur(7.5px)",zIndex:"-1"}},zIndex:0,children:(0,r.jsxs)(z.Z,{sx:{textShadow:"0 0 10px #333"},children:[(0,r.jsx)(E.Z,{color:"text.secondary",component:"h1",variant:"h2",children:"illusion"}),(0,r.jsx)(E.Z,{component:"span",variant:"h5",children:"AyanamistによるDiscord雑談サーバー"})]})}),(0,r.jsx)(z.Z,{padding:n?5:10,children:(0,r.jsxs)(W,{container:!0,spacing:4,children:[(0,r.jsxs)(W,{item:!0,sm:6,children:[(0,r.jsx)(E.Z,{component:"h2",fontWeight:"bold",variant:"h5",children:"illusionとは？"}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(E.Z,{children:"Ayanamistによって創設された雑談サーバーです。"}),(0,r.jsx)(E.Z,{children:"何気ない雑談から専門的な話題まで、様々なトピックが飛び交っています。"})]}),(0,r.jsxs)(W,{item:!0,sm:6,children:[(0,r.jsx)(E.Z,{component:"h2",variant:"h5",children:"Ayanamistとは誰ですか？"}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(E.Z,{children:"Ayanamistとはillusionの二人の創設者のことであり、綾波レイが好きな人のことでもあります。"}),(0,r.jsx)(E.Z,{children:"illusionではAyanamistが管理人で、2ndAyanamistが副管理人となります。"})]}),(0,r.jsxs)(W,{item:!0,sm:6,children:[(0,r.jsx)(E.Z,{component:"h2",variant:"h5",children:"Discordサーバーに参加"}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(P.Z,{component:D(),fontSize:"1.5rem",href:"/community/discord",underline:"hover",children:"ルールとリンクはこちらから"})]})]})})]})})},8078:function(e,n,t){"use strict";t.d(n,{fc:function(){return i}});let r=(e,n)=>{let t=Object.getOwnPropertyDescriptor(Function.prototype,"name");return Object.defineProperty(n,"name",{...t,value:e})},i=(e,n)=>r(e,n)}},function(e){e.O(0,[350,600,481,270,744],function(){return e(e.s=3480)}),_N_E=e.O()}]);