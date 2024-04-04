"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5800],{1776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(85893),o=n(11151);const i={id:"basics",title:"Basic Instructions"},r="Basic instructions",a={id:"sdk/rust/building/basics",title:"Basic Instructions",description:"To compile release version of the smart contract you can run:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/rust/building/basic-build.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/basics",permalink:"/zh-CN/sdk/rust/building/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/basic-build.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{id:"basics",title:"Basic Instructions"},sidebar:"tools",previous:{title:"Deploying Contracts",permalink:"/zh-CN/sdk/rust/promises/deploy-contract"},next:{title:"Rapid Prototyping",permalink:"/zh-CN/sdk/rust/building/prototyping"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"basic-instructions",children:"Basic instructions"}),"\n",(0,s.jsx)(t.p,{children:"To compile release version of the smart contract you can run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cargo build --target wasm32-unknown-unknown --release\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["The above ",(0,s.jsx)(t.code,{children:"build"})," command is setting a ",(0,s.jsx)(t.code,{children:"target"})," flag to create a WebAssembly ",(0,s.jsx)(t.code,{children:".wasm"})," file."]})}),"\n",(0,s.jsx)(t.p,{children:"Notice that your project directory now has a few additional items:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 Cargo.lock  \u27f5 created during build to lock dependencies\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 src\n\u2502  \u2514\u2500\u2500 lib.rs\n\u2514\u2500\u2500 target      \u27f5 created during build, holds the compiled wasm\n"})}),"\n",(0,s.jsx)(t.h1,{id:"build-and-flags",children:"Build and Flags"}),"\n",(0,s.jsx)(t.p,{children:"We recommend you to optimize your build artifact with the use of the next flags in your Cargo.toml file. If you are performing a multi-contract build, you should include these settings in the Cargo.toml that is at the root of your project."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'[profile.release]\ncodegen-units = 1\n# Tell `rustc` to optimize for small code size.\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\n# Opt into extra safety checks on arithmetic operations https://stackoverflow.com/a/64136471/249801\noverflow-checks = true\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The above command is essentially setting special flags and optimizing the resulting ",(0,s.jsx)(t.code,{children:".wasm"})," file. At the end of the day, this allows you to customize the ",(0,s.jsx)(t.code,{children:"cargo build --release"})," command."]}),"\n",(0,s.jsx)(t.h1,{id:"custom-flags",children:"Custom Flags"}),"\n",(0,s.jsxs)(t.p,{children:["If you wish to add custom flags to your build, you can perform this by adding build flags to your ",(0,s.jsx)(t.code,{children:"ProjectFolder/.cargo/config.toml"})," as illustrated in this example."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'[target.wasm32-unknown-unknown]\nrustflags = ["-C", "link-arg=-s"]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["A full set of build options can be accessed at ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/reference/config.html",children:"https://doc.rust-lang.org/cargo/reference/config.html"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can find an example ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/05e4539a8f3db86dd43b768ee9660dd4c8e7ea5c/examples/fungible-token/.cargo/config.toml",children:"here"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);