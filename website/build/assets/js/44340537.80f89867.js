"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7822],{54995:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var o=n(85893),r=n(11151);const s={},i=void 0,d={id:"primitives/linkdrop/bos/get-drop-id",title:"get-drop-id",description:"",source:"@site/../docs/7.primitives/linkdrop/bos/get-drop-id.md",sourceDirName:"7.primitives/linkdrop/bos",slug:"/primitives/linkdrop/bos/get-drop-id",permalink:"/primitives/linkdrop/bos/get-drop-id",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/linkdrop/bos/get-drop-id.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1706635251e3,frontMatter:{}},c={},p=[];function a(t){const e={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'const accountId = context.accountId ?? props.accountId;\nconst keypomContract = "v2.keypom.near";\n\nconst dropSupplyForOwner = Near.view(\n  keypomContract,\n  "get_drop_supply_for_owner",\n  { account_id: accountId }\n);\n\nconst dropsForOwner = Near.view(keypomContract, "get_drops_for_owner", {\n  account_id: accountId,\n  from_index: (dropSupplyForOwner - 1).toString(),\n});\n\nconst dropId = dropsForOwner[dropsForOwner.length - 1].drop_id;\n'})})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(a,{...t})}):a(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>d,a:()=>i});var o=n(67294);const r={},s=o.createContext(r);function i(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);