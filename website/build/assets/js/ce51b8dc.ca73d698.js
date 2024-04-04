"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7903],{50939:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=i(85893),s=i(11151);const o={sidebar_position:2},n="Reproducible Builds",l={id:"sdk/rust/building/reproducible-builds",title:"Reproducible Builds",description:"Reproducible builds let different people build the same program and get the exact same outputs as one another. It helps users trust that deployed contracts are built correctly and correspond to the source code. To verify your contract user can build it themselves and check that the binaries are identical.",source:"@site/../docs/sdk/rust/building/reproducible-builds.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/reproducible-builds",permalink:"/sdk/rust/building/reproducible-builds",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/reproducible-builds.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1661352815e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"Post Processing Tools",permalink:"/sdk/rust/building/post-processing"},next:{title:"Integration Tests",permalink:"/sdk/rust/testing/integration-tests"}},a={},u=[{value:"Problem",id:"problem",level:2},{value:"CI solution",id:"ci-solution",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"reproducible-builds",children:"Reproducible Builds"}),"\n",(0,r.jsx)(t.p,{children:"Reproducible builds let different people build the same program and get the exact same outputs as one another. It helps users trust that deployed contracts are built correctly and correspond to the source code. To verify your contract user can build it themselves and check that the binaries are identical."}),"\n",(0,r.jsx)(t.h2,{id:"problem",children:"Problem"}),"\n",(0,r.jsxs)(t.p,{children:["If you will build your contract on two different machines, most likely you will get two similar but not identical binaries. Your build artifact can be affected by the locale, timezone, build path, and billion other factors in your build environment. Rust community has a long story of fighting this issue but still, ",(0,r.jsx)(t.a,{href:"https://github.com/rust-lang/rust/labels/A-reproducibility",children:"it is not achieved yet"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"ci-solution",children:"CI solution"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend you to build your contracts with the use of our ",(0,r.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/tree/master/contract-builder",children:"Contract Builder"}),". It's is using Docker, controlled and sharable environment that can be used by both you and your users. Docker image is available ",(0,r.jsx)(t.a,{href:"https://hub.docker.com/r/nearprotocol/contract-builder",children:"here"}),". The contract built in it will result in a binary that is the same if built on other machines."]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>n});var r=i(67294);const s={},o=r.createContext(s);function n(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);