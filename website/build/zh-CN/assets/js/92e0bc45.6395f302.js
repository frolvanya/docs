"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1604],{15559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(85893),r=n(11151);const i={sidebar_position:3},a="Private Methods",c={id:"sdk/rust/contract-interface/private-methods",title:"Private Methods",description:"When using callbacks",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/rust/contract-interface/private-methods.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/private-methods",permalink:"/zh-CN/sdk/rust/contract-interface/private-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/private-methods.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tools",previous:{title:"Contract Mutability",permalink:"/zh-CN/sdk/rust/contract-interface/contract-mutability"},next:{title:"Payable Methods",permalink:"/zh-CN/sdk/rust/contract-interface/payable-methods"}},o={},l=[{value:"When using callbacks",id:"when-using-callbacks",level:2},{value:"Writing internal methods",id:"writing-internal-methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"private-methods",children:"Private Methods"}),"\n",(0,s.jsx)(t.h2,{id:"when-using-callbacks",children:"When using callbacks"}),"\n",(0,s.jsxs)(t.p,{children:["Usually, when a contract has to have a callback for a remote cross-contract call, this callback method should only be called by the contract itself. It's to avoid someone else calling it and messing the state. Pretty common pattern is to have an assertion that validates that the direct caller (predecessor account ID) matches to the contract's account (current account ID). Macro ",(0,s.jsx)(t.code,{children:"#[private]"})," simplifies it, by making it a single line macro instead and improves readability."]}),"\n",(0,s.jsxs)(t.p,{children:["Use this annotation within the ",(0,s.jsxs)(t.a,{href:"/zh-CN/sdk/rust/contract-structure/near-bindgen",children:[(0,s.jsx)(t.code,{children:"near_bindgen"})," macro"]})," as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[private]\npub fn my_method(&mut self) {\n    \u2026\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Which is equivalent to:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'pub fn my_method(&mut self ) {\n    if near_sdk::env::current_account_id() != near_sdk::env::predecessor_account_id() {\n        near_sdk::env::panic_str("Method method is private");\n    }\n...\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now with this annotation, only the account of the contract itself can call this method, either directly or through a promise."}),"\n",(0,s.jsx)(t.h2,{id:"writing-internal-methods",children:"Writing internal methods"}),"\n",(0,s.jsx)(t.p,{children:"Not all functions need to be exposed publicly. It may be beneficial to write private methods for helper or utility functions, for instance. There are three approaches to write internal methods:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Using ",(0,s.jsx)(t.code,{children:"fn"})," instead of ",(0,s.jsx)(t.code,{children:"pub fn"})]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"fn helper_method(a: u8, b: u8) {\n  \u2026\n}\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["Using ",(0,s.jsx)(t.code,{children:"pub(crate) fn"}),". This may be helpful when an internal method is in a different module."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"// Function that can be called in another Rust file\npub(crate) fn get_first_name(account: Account) {\n  \u2026\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["More information from the ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/reference/visibility-and-privacy.html",children:"official Rust docs"})," regarding public/private methods."]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Separate ",(0,s.jsx)(t.code,{children:"impl"})," block"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Another way of not exporting methods is by having a separate ",(0,s.jsx)(t.code,{children:"impl Contract"})," section, that is not marked with ",(0,s.jsx)(t.code,{children:"#[near_bindgen]"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\nimpl Contract {\n    pub fn increment(&mut self) {\n        self.internal_increment();\n    }\n}\nimpl Contract {\n    /// This methods is still not exported.\n    pub fn internal_increment(&mut self) {\n        self.counter += 1;\n    }\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);