(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308,747],{1938:function(e,n,t){Promise.resolve().then(t.bind(t,757))},5403:function(e,n,t){"use strict";t.d(n,{default:function(){return f}});var r=t(7437),i=t(8929),o=t(1665),s=t(7138),l=t(1733),a=t(9806),c=t(2197),d=t(3719),h=t(8877);function u(){return(0,r.jsx)(l.Z,{elevation:0,position:"static",sx:{backgroundColor:"transparent"},children:(0,r.jsx)(a.Z,{disableGutters:!0,variant:"dense",children:(0,r.jsx)(c.Z,{children:(0,r.jsx)(i.Z,{width:"100%",direction:"row",justifyContent:"flex-start",alignItems:"center",sx:e=>({[e.breakpoints.down("md")]:{justifyContent:"center"}}),children:(0,r.jsx)(o.Z,{component:s.default,href:"/",underline:"none",children:(0,r.jsx)(d.Z,{variant:"h3",color:"text.secondary",children:h.aD})})})})})})}var x=t(2030),m=t(3190);function p(e){let{items:n}=e;return(0,r.jsx)(m.Z,{children:n.map(e=>{let{href:n,label:t,emphasis:i=!1}=e;return(0,r.jsxs)("span",{children:[n&&(0,r.jsx)(o.Z,{href:n,component:s.default,underline:"hover",color:"inherit",children:t}),!n&&(0,r.jsx)(d.Z,{color:i?"text.primary":"text.seconadry",children:t})]})})})}function f(e){let{breadcrumbs:n=[],children:t}=e;return(0,r.jsxs)(i.Z,{alignItems:"flex-start",children:[(0,r.jsx)(u,{}),(0,r.jsx)(c.Z,{sx:{paddingY:"1rem"},children:(0,r.jsxs)(i.Z,{spacing:2,children:[n.length>0&&(0,r.jsx)(p,{items:n}),(0,r.jsx)(x.Z,{}),t]})})]})}},8877:function(e,n,t){"use strict";t.d(n,{JG:function(){return i},aD:function(){return r},gb:function(){return o}});let r="illusion",i="Ayanamistによって創設されたDiscordの雑談サーバーです。",o="AyanamistによるDiscord雑談サーバー"},757:function(e,n,t){"use strict";t.d(n,{default:function(){return b}});var r=t(7437),i=t(3536),o=t(3719),s=t(1326),l=t(1665),a=t(8929),c=t(2265),d=t(8027);let h=(0,i.ZP)("ul")(e=>{let{theme:n}=e;return{display:"flex",flexDirection:"column",gap:1,width:"15rem",padding:0,margin:0,listStyle:"none",[n.breakpoints.down("md")]:{width:"100%"}}});function u(e){let{headings:n}=e,[t,i]=(0,c.useState)();return(0,c.useEffect)(()=>{let e=new IntersectionObserver(e=>{let n=e.at(-1);n&&n.isIntersecting&&n.target instanceof HTMLHeadingElement&&i(n.target.id)},{rootMargin:"0% 0px -80% 0px",threshold:1});for(let n of document.querySelectorAll("h1, h2, h3, h4, h5, h6"))e.observe(n);return()=>{e.disconnect()}},[]),(0,r.jsx)(d.Z,{variant:"outlined",children:(0,r.jsxs)(a.Z,{spacing:1,padding:1,children:[(0,r.jsx)(o.Z,{variant:"h6",component:"span",children:"目次"}),(0,r.jsx)(h,{children:n.map((e,n)=>(0,r.jsx)(s.Z,{component:"li",children:(0,r.jsx)(l.Z,{underline:"hover",color:t===e.id?"text.primary":"text.secondary",sx:{":hover":{color:"text.primary"}},display:"block",paddingLeft:2*(e.level-2),width:"100%",href:"#".concat(encodeURIComponent(e.id)),children:e.textContent})},"".concat(e.id,"_").concat(n)))})]})})}var x=t(4041),m=t(3742),p=t(8877),f=t(5403);let j=(0,i.ZP)("div")({".budoux-breaked":{wordBreak:"keep-all"},"h1, h2, h3, h4, h5, h6":{marginTop:"2rem"},".icon-open-in-new":{verticalAlign:"middle",display:"inline-block",width:"1rem",height:"1rem",maskImage:"url(/icons/open-in-new.svg)",maskRepeat:"no-repeat",maskPosition:"center center",maskSize:"contain",backgroundColor:"var(--mui-palette-primary-main)"}}),g=(0,i.ZP)(a.Z)(e=>{let{theme:n}=e;return{gap:"1rem",flexDirection:"row",[n.breakpoints.down("md")]:{flexDirection:"column-reverse"}}}),Z=(0,i.ZP)("div")(e=>{let{theme:n}=e;return{position:"sticky",top:"5rem",[n.breakpoints.up("md")]:{border:"none"},[n.breakpoints.down("md")]:{padding:"0.5rem"}}});function b(e){let{title:n,html:t,draft:i,headings:l,breadcrumbs:c=[]}=e;return(0,r.jsxs)(f.default,{breadcrumbs:[{label:p.aD,href:"/"},...c,{label:n,emphasis:!0}],children:[(0,r.jsxs)(a.Z,{alignItems:"flex-end",direction:"row",spacing:1,children:[(0,r.jsx)(o.Z,{component:"h1",variant:"h5",fontWeight:"bold",children:n}),i&&(0,r.jsx)(m.Z,{size:"small",icon:(0,r.jsx)(x.Z,{fontSize:"small"}),label:"下書き"})]}),(0,r.jsxs)(g,{children:[(0,r.jsx)(j,{dangerouslySetInnerHTML:{__html:t}}),l.length>0&&(0,r.jsx)(s.Z,{children:(0,r.jsx)(Z,{children:(0,r.jsx)(u,{headings:l})})})]})]})}}},function(e){e.O(0,[224,872,782,873,971,23,744],function(){return e(e.s=1938)}),_N_E=e.O()}]);