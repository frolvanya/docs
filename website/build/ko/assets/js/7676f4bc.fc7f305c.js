"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6729],{41503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(85893),o=n(11151);const s={id:"mpc",title:"Multi-Party Computation (MPC)"},a=void 0,r={id:"concepts/abstraction/mpc",title:"Multi-Party Computation (MPC)",description:"MPC, or multi-party computation, is about how multiple parties can do shared computations on private inputs without revealing the private data.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/abstraction/mpc.md",sourceDirName:"1.concepts/abstraction",slug:"/concepts/abstraction/mpc",permalink:"/ko/concepts/abstraction/mpc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/abstraction/mpc.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"mpc",title:"Multi-Party Computation (MPC)"}},c={},l=[{value:"MPC signature generation",id:"mpc-signature-generation",level:2},{value:"How MPC creates a new key",id:"how-mpc-creates-a-new-key",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"MPC, or multi-party computation, is about how multiple parties can do shared computations on private inputs without revealing the private data."}),"\n",(0,i.jsxs)(t.p,{children:["As an example, suppose two investors want to compare who holds more crypto tokens without revealing their account balances. MPC can solve this situation, by computing the function ",(0,i.jsx)(t.code,{children:"f(x > y)"}),", where ",(0,i.jsx)(t.code,{children:"x"})," and ",(0,i.jsx)(t.code,{children:"y"})," are private inputs. Each person would submit a private value, and would get the function ",(0,i.jsx)(t.code,{children:"x > y"})," result."]}),"\n",(0,i.jsx)(t.p,{children:"In general, MPC can be used to build all kinds of useful protocols, like threshold cryptography, dark pools, and private auctions. For example, MPC can be used to jointly encrypt a message, with the key split up among many different parties."}),"\n",(0,i.jsx)(n,{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)("summary",{children:" MPC versus key splitting"}),"\nIn secret sharing, the key has to get reassembled. At some point, some trusted party is going to have the entire key available to them. With MPC, the whole operation is done in MPC, meaning there's no point where the combined key could be extracted."]})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Want to learn more about multi-party computation? Check ",(0,i.jsx)(t.a,{href:"https://www.zellic.io/blog/mpc-from-scratch/",children:"this article"}),"."]})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"mpc-signature-generation",children:"MPC signature generation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"MPC nodes are doing a multistep process called signature generation."}),"\n",(0,i.jsx)(t.li,{children:"They are doing it by using user key shares derived from their root key shares."}),"\n",(0,i.jsx)(t.li,{children:"A root key is never reconstructed, but protocol allows to create signatures using it\u2019s shares."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Using MPC, the root key is never reconstructed and it\u2019s never available. User key is never reconstructed as well."})}),"\n",(0,i.jsx)(t.h2,{id:"how-mpc-creates-a-new-key",children:"How MPC creates a new key"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Once MPC account verification is complete, a root key becomes available to sign a new signature that creates a new key"}),"\n",(0,i.jsxs)(t.li,{children:["This new key is created using ",(0,i.jsx)(t.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#specification-key-derivation",children:"Additive Key Deriviation"})," (a mechanism for deriving many ",(0,i.jsx)(t.em,{children:"sub-keys"})," from a single ",(0,i.jsx)(t.em,{children:"master key"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"This new sub-key can now be used to sign a payload for a given account associated with a given blockchain"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);