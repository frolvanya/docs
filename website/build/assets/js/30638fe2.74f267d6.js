"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8920],{18527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(85893),s=t(11151);const r={},i=void 0,a={id:"primitives/dao/bos/create-dao",title:"create-dao",description:"The full list of roles and permissions you can find here.",source:"@site/../docs/7.primitives/dao/bos/create-dao.md",sourceDirName:"7.primitives/dao/bos",slug:"/primitives/dao/bos/create-dao",permalink:"/primitives/dao/bos/create-dao",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dao/bos/create-dao.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1706635251e3,frontMatter:{}},c={},d=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const args = {\n  config: {\n    name: "Primitives",\n    purpose: "Building primitives on NEAR",\n    metadata: ""\n  },\n  policy: ["bob.near"]\n};\nNear.call(\n  "sputnik-dao.near",\n  "create",\n  {\n    name: "primitives",\n    args: Buffer.from(JSON.stringify(args)).toString("base64"),\n  },\n  300000000000000,\n  6000000000000000000000000\n);\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The full list of roles and permissions you can find ",(0,o.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions",children:"here"}),"."]})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);