"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[611],{10801:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=e(85893),r=e(11151);const i={},d=void 0,s={id:"build/primitives/linkdrop/bos/get-drop-id",title:"get-drop-id",description:"",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/5.primitives/linkdrop/bos/get-drop-id.md",sourceDirName:"2.build/5.primitives/linkdrop/bos",slug:"/build/primitives/linkdrop/bos/get-drop-id",permalink:"/vi/build/primitives/linkdrop/bos/get-drop-id",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/bos/get-drop-id.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},c={},p=[];function u(t){const n={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const accountId = context.accountId ?? props.accountId;\nconst keypomContract = "v2.keypom.near";\n\nconst dropSupplyForOwner = Near.view(\n  keypomContract,\n  "get_drop_supply_for_owner",\n  { account_id: accountId }\n);\n\nconst dropsForOwner = Near.view(keypomContract, "get_drops_for_owner", {\n  account_id: accountId,\n  from_index: (dropSupplyForOwner - 1).toString(),\n});\n\nconst dropId = dropsForOwner[dropsForOwner.length - 1].drop_id;\n'})})}function a(t={}){const{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>s,a:()=>d});var o=e(67294);const r={},i=o.createContext(r);function d(t){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:d(t.components),o.createElement(i.Provider,{value:n},t.children)}}}]);