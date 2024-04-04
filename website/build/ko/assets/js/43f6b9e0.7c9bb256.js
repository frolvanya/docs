"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4133],{63847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=n(85893),a=n(11151);const o={},c=void 0,i={id:"concepts/basics/technical_stuff",title:"technical_stuff",description:"Interaction with NEAR is done with JSON RPC API via HTTP calls.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/basics/technical_stuff.md",sourceDirName:"1.concepts/basics",slug:"/concepts/basics/technical_stuff",permalink:"/ko/concepts/basics/technical_stuff",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/technical_stuff.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{}},r={},d=[{value:"API requests flow",id:"api-requests-flow",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Interaction with NEAR is done with ",(0,s.jsx)(t.a,{href:"/ko/api/rpc/introduction",children:"JSON RPC API"})," via HTTP calls."]}),"\n",(0,s.jsx)(t.p,{children:"With the API, you can call smart contracts, send transactions, manage keys and get information about blockchain data and status."}),"\n",(0,s.jsx)(t.p,{children:"The NEAR CLI abstracts some actions, such as deploying a contract, but eventually, all actions are done via JSON RPC."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"We recommend using the CLI for deploying contracts. In a CI/CD environment, you can write a shell script to utilize the CLI for deployments."})}),"\n",(0,s.jsx)(t.h3,{id:"api-requests-flow",children:"API requests flow"}),"\n",(0,s.jsxs)(t.p,{children:["There are different types of ",(0,s.jsx)(t.a,{href:"/ko/concepts/basics/validators",children:"Nodes on NEAR"}),": RPC Nodes, Validators, and Archival Nodes."]}),"\n",(0,s.jsxs)(t.p,{children:["When calling an endpoint on ",(0,s.jsx)(t.code,{children:"near.org"}),", it resolves to a server that chooses an available RPC node to handle the request. Then the RPC node passes the request to an available Validator node. Finally, the validator node spawns a VM environment to execute the contract."]}),"\n",(0,s.jsx)(t.p,{children:"Due to the decentralized nature of a blockchain network, there are many RPC nodes, and a request can reach any one of them, after which it can pass it to any one of the validators."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"JSON Network Arch",src:n(97901).Z+"",width:"4400",height:"2143"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},97901:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/JSONNetworkArch-5f7b8e0e22e53866750dc56a193dfef9.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var s=n(67294);const a={},o=s.createContext(a);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);