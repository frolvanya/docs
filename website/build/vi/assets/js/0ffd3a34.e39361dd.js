"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2206],{3015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(85893),o=n(11151);const s={},i=void 0,a={id:"build/primitives/linkdrop/web-app/transfer-nft",title:"transfer-nft",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/5.primitives/linkdrop/web-app/transfer-nft.md",sourceDirName:"2.build/5.primitives/linkdrop/web-app",slug:"/build/primitives/linkdrop/web-app/transfer-nft",permalink:"/vi/build/primitives/linkdrop/web-app/transfer-nft",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/web-app/transfer-nft.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},c={},l=[];function p(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst KEYPOM_CONTRACT_ADDRESS = "v2.keypom.near";\nconst NFT_CONTRACT_ADDRESS = "nft.primitives.near";\nconst NFT_TOKEN_ID = "1";\nconst DROP_AMOUNT = "10000000000000000000000";\n\nconst nftConnectedWallet = new Wallet({ createAccessKeyFor: NFT_CONTRACT_ADDRESS }); \n\nawait wallet.callMethod({\n  method: "nft_transfer_call",\n  contractId: NFT_CONTRACT_ADDRESS,\n  args: {\n    receiver_id: keypomContract,\n    token_id: nftTokenId,\n    msg: dropId.toString()\n  },\n  deposit: 1,\n  gas: "100000000000000",\n});\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["The ",(0,r.jsx)(t.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);