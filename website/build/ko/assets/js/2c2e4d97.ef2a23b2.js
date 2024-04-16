"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6429],{31006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(85893),a=n(11151);const s={},r=void 0,i={id:"build/primitives/dao/web-app/get-dao-list",title:"get-dao-list",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/5.primitives/dao/web-app/get-dao-list.md",sourceDirName:"2.build/5.primitives/dao/web-app",slug:"/build/primitives/dao/web-app/get-dao-list",permalink:"/ko/build/primitives/dao/web-app/get-dao-list",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/web-app/get-dao-list.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},c={},l=[];function d(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst DAO_FACTORY_CONTRACT_ADDRESS = \"sputnik-dao.near\";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_FACTORY_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'get_dao_list',\n  args: {},\n  contractId: DAO_FACTORY_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["The ",(0,o.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var o=n(67294);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);