"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5020],{11398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(85893),s=n(11151);const r={},a=void 0,i={id:"build/primitives/dao/web-app/get-proposal-list",title:"get-proposal-list",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/5.primitives/dao/web-app/get-proposal-list.md",sourceDirName:"2.build/5.primitives/dao/web-app",slug:"/build/primitives/dao/web-app/get-proposal-list",permalink:"/zh-CN/build/primitives/dao/web-app/get-proposal-list",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/web-app/get-proposal-list.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},l={},c=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst DAO_CONTRACT_ADDRESS = \"nearweek-news-contribution.sputnik-dao.near\";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'get_proposals',\n  args: { from_index: 9262, limit: 2 },\n  contractId: DAO_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["The ",(0,o.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(67294);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);