"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7370],{99592:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=n(85893),o=n(11151);const c={sidebar_position:4},r="Payable Methods",s={id:"sdk/rust/contract-interface/payable-methods",title:"Payable Methods",description:"We can allow methods to accept token transfer together with the function call. \u0110i\u1ec1u n\xe0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n \u0111\u1ec3 c\xe1c contract c\xf3 th\u1ec3 x\xe1c \u0111\u1ecbnh m\u1ed9t kho\u1ea3n ph\xed trong c\xe1c token c\u1ea7n ph\u1ea3i tr\u1ea3 khi ch\xfang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng. By default the methods are not payable and they will panic if someone will attempt to transfer tokens to them during the invocation. \u0110i\u1ec1u n\xe0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n v\xec l\xfd do an to\xe0n, trong tr\u01b0\u1eddng h\u1ee3p ai \u0111\xf3 v\xf4 t\xecnh chuy\u1ec3n token trong function call.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/rust/contract-interface/payable-methods.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/payable-methods",permalink:"/vi/sdk/rust/contract-interface/payable-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/payable-methods.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"Private Methods",permalink:"/vi/sdk/rust/contract-interface/private-methods"},next:{title:"Serialization Protocols",permalink:"/vi/sdk/rust/contract-interface/serialization-interface"}},i={},d=[];function l(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"payable-methods",children:"Payable Methods"}),"\n",(0,a.jsx)(e.p,{children:"We can allow methods to accept token transfer together with the function call. \u0110i\u1ec1u n\xe0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n \u0111\u1ec3 c\xe1c contract c\xf3 th\u1ec3 x\xe1c \u0111\u1ecbnh m\u1ed9t kho\u1ea3n ph\xed trong c\xe1c token c\u1ea7n ph\u1ea3i tr\u1ea3 khi ch\xfang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng. By default the methods are not payable and they will panic if someone will attempt to transfer tokens to them during the invocation. \u0110i\u1ec1u n\xe0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n v\xec l\xfd do an to\xe0n, trong tr\u01b0\u1eddng h\u1ee3p ai \u0111\xf3 v\xf4 t\xecnh chuy\u1ec3n token trong function call."}),"\n",(0,a.jsxs)(e.p,{children:["To declare a method as payable, use the ",(0,a.jsx)(e.code,{children:"#[payable]"})," annotation within the ",(0,a.jsxs)(e.a,{href:"/vi/sdk/rust/contract-structure/near-bindgen",children:[(0,a.jsx)(e.code,{children:"near_bindgen"})," macro"]})," as follows:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:"#[payable]\npub fn my_method(&mut self) {\n...\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["This will allow the ",(0,a.jsx)(e.code,{children:"my_method"})," function to be called and transfer balance to the contract."]}),"\n",(0,a.jsxs)(e.p,{children:["D\u01b0\u1edbi \u0111\xe2y l\xe0 danh s\xe1ch \u0111\u1ea7y \u0111\u1ee7 c\xe1c error variant c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 theo lo\u1ea1i request ",(0,a.jsx)(e.code,{children:"view_access_key_list"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    #[payable]\n    pub fn take_my_money(&mut self) {\n        near_sdk::env::log_str("Thanks!");\n    }\n    pub fn do_not_take_my_money(&mut self) {\n        near_sdk::env::log_str("Thanks!");\n    }\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"is equivalent to:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Contract {\n    pub fn take_my_money(&mut self) {\n        near_sdk::env::log_str("Thanks!");\n    }\n    pub fn do_not_take_my_money(&mut self) {\n        if near_sdk::env::attached_deposit() != 0 {\n            near_sdk::env::panic_str("Method do_not_take_my_money doesn\'t accept deposit");\n        }\n        near_sdk::env::log_str("Thanks!");\n    }\n}\n'})})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>r});var a=n(67294);const o={},c=a.createContext(o);function r(t){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),a.createElement(c.Provider,{value:e},t.children)}}}]);