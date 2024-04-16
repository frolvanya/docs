"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9405],{46139:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var a=n(85893),r=n(11151);const c={id:"smartcontract",title:"Smart Contract"},s=void 0,o={id:"concepts/protocol/smartcontract",title:"Smart Contract",description:"Smart contracts are pieces of executable code that live in a NEAR account. They can store data, perform transactions in the account\u2019s name, and expose methods so other accounts can interact with them.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/protocol/smart-contract.md",sourceDirName:"1.concepts/protocol",slug:"/concepts/protocol/smartcontract",permalink:"/ko/concepts/protocol/smartcontract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/protocol/smart-contract.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"smartcontract",title:"Smart Contract"},sidebar:"concepts",previous:{title:"Access Keys",permalink:"/ko/concepts/protocol/access-keys"},next:{title:"Transactions",permalink:"/ko/concepts/protocol/transactions"}},i={},l=[{value:"What can Smart Contract Do?",id:"what-can-smart-contract-do",level:2},{value:"What are Contract&#39;s Used for?",id:"what-are-contracts-used-for",level:2},{value:"Contract&#39;s Storage",id:"contracts-storage",level:2}];function d(t){const e={a:"a",admonition:"admonition",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Smart contracts are pieces of ",(0,a.jsx)(e.strong,{children:"executable code"})," that live in a NEAR account. They can ",(0,a.jsx)(e.strong,{children:"store data"}),", ",(0,a.jsx)(e.strong,{children:"perform transactions"})," in the account\u2019s name, and ",(0,a.jsx)(e.strong,{children:"expose methods"})," so other accounts can interact with them."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Smart Contract",src:n(41499).Z+"",width:"1282",height:"470"})}),"\n",(0,a.jsx)(e.p,{children:"Developers can choose between using Javascript or Rust to write smart contracts in NEAR. Indistinctly from the language chosen, the contract will be compiled into WebAssembly, from which point it can be deployed and executed on the NEAR platform."}),"\n",(0,a.jsx)(e.admonition,{title:"Want to build a smart contract?",type:"tip",children:(0,a.jsxs)(e.p,{children:["Check our ",(0,a.jsx)(e.a,{href:"/ko/build/smart-contracts/quickstart",children:(0,a.jsx)(e.strong,{children:"Quickstart Guide"})})," to build your first smart contract in NEAR."]})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"what-can-smart-contract-do",children:"What can Smart Contract Do?"}),"\n",(0,a.jsx)(e.p,{children:"Smart contracts have complete control over the account, and thus can perform any action on its behalf. For example, contracts can:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Transfer $NEAR Tokens"}),"\n",(0,a.jsxs)(e.li,{children:["Call methods on themselves or ",(0,a.jsx)(e.strong,{children:"other contracts"})]}),"\n",(0,a.jsx)(e.li,{children:"Create new accounts and deploy contracts on them"}),"\n",(0,a.jsx)(e.li,{children:"Update their own code"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Besides, smart contracts can store data in the account's storage. This allows contract's to create almost any type of application, from simple games to complex financial systems."}),"\n",(0,a.jsx)(e.admonition,{title:"What contracts cannot do",type:"danger",children:(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Smart contracts cannot ",(0,a.jsx)(e.strong,{children:"access the internet"}),", so they cannot make HTTP requests or access external data"]}),"\n",(0,a.jsxs)(e.li,{children:["Smart contracts cannot ",(0,a.jsx)(e.strong,{children:"execute automatically"}),", they need to be called by an external account"]}),"\n"]})}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"what-are-contracts-used-for",children:"What are Contract's Used for?"}),"\n",(0,a.jsxs)(e.p,{children:["Smart contracts are useful to create ",(0,a.jsx)(e.strong,{children:"decentralized applications"}),". Some traditional examples include:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"https://near.org/nearcatalog.near/widget/Index?cat=dao",children:"Decentralized Autonomous Organizations"}),", where users create and vote proposals"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"https://near.org/nearcatalog.near/widget/Index?cat=marketplaces",children:"Marketplaces"}),", where users create and commercialize digital art pieces"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"https://near.org/nearcatalog.near/widget/Index?cat=exchanges",children:"Decentralized exchanges"}),", where users can trade different currencies"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://near.org/nearcatalog.near/widget/Index",children:"And many more..."})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"For instance, you can easily create a crowdfunding contract that accepts $NEAR. If the goal is met in time, the creator can claim the funds. Otherwise, the backers are refunded."}),"\n",(0,a.jsx)(e.hr,{}),"\n",(0,a.jsx)(e.h2,{id:"contracts-storage",children:"Contract's Storage"}),"\n",(0,a.jsxs)(e.p,{children:["Smart contract store they data in the account's state. The contract's storage is organized as ",(0,a.jsx)(e.strong,{children:"key-value pairs"})," encoded using either ",(0,a.jsx)(e.a,{href:"https://www.json.org/json-en.html",children:"JSON"})," or ",(0,a.jsx)(e.a,{href:"https://borsh.io",children:"Borsh"})," serialization. This allows to store any type of data efficiently, from simple numbers to complex objects."]}),"\n",(0,a.jsxs)(e.p,{children:["Since the data occupies space in the network, smart contracts need to ",(0,a.jsx)(e.strong,{children:"pay for the storage they use"}),". For this, accounts automatically lock a portion of their balance each time new data is stored in the contract. This means that:"]}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["If data is added to the contract's storage the account's ",(0,a.jsx)(e.strong,{children:"balance decreases \u2193"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["If data is deleted the account's ",(0,a.jsx)(e.strong,{children:"balance increases \u2191"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Currently, it cost approximately ",(0,a.jsx)(e.strong,{children:"1 \u24c3"})," to store ",(0,a.jsx)(e.strong,{children:"100kb"})," of data."]}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsx)(e.p,{children:"Serializing and deserializing the storage happens automatically through our SDK tools, so you can focus on coding the logic of the contract"})})]})}function h(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},41499:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/contracts-landing-5a9c76a78e71b0e5f9a96033f1f23d23.png"},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>s});var a=n(67294);const r={},c=a.createContext(r);function s(t){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),a.createElement(c.Provider,{value:e},t.children)}}}]);