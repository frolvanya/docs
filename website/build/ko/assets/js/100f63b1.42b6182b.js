"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7835],{92126:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=e(85893),o=e(11151);const s={},i=void 0,c={id:"build/primitives/linkdrop/bos/transfer-nft",title:"transfer-nft",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/5.primitives/linkdrop/bos/transfer-nft.md",sourceDirName:"2.build/5.primitives/linkdrop/bos",slug:"/build/primitives/linkdrop/bos/transfer-nft",permalink:"/ko/build/primitives/linkdrop/bos/transfer-nft",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/bos/transfer-nft.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},a={},d=[];function u(t){const n={code:"code",pre:"pre",...(0,o.a)(),...t.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const nftTokenId = "1";\n\nNear.call([{\n  contractName: nftContract, \n  methodName: \'nft_transfer_call\', \n  args: {\n    receiver_id: keypomContract,\n    token_id: nftTokenId,\n    msg: dropId.toString()\n  },\n  deposit: "1",\n  gas: "300000000000000"\n}]);\n'})})}function l(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},11151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>i});var r=e(67294);const o={},s=r.createContext(o);function i(t){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(s.Provider,{value:n},t.children)}}}]);