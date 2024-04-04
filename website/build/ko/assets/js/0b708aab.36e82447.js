"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1834],{45771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(85893),s=n(11151);const c={sidebar_position:1},a="\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc \uc790\ub8cc\ud615",o={id:"sdk/rust/contract-interface/public-methods",title:"\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc \uc790\ub8cc\ud615",description:"\uba54\uc11c\ub4dc\ub294 \ucef4\ud30c\uc77c\ub41c WASM \ubc14\uc774\ud2b8\ucf54\ub4dc\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud558\ub294 #[near_bindgen] \ub9e4\ud06c\ub85c \ub0b4\uc758 pub \uc2dd\ubcc4\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc678\ubd80\uc5d0\uc11c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/contract-interface/public-methods.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/public-methods",permalink:"/ko/sdk/rust/contract-interface/public-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/public-methods.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"\uceec\ub809\uc158 \uc911\ucca9(Nesting)",permalink:"/ko/sdk/rust/contract-structure/nesting"},next:{title:"\ucee8\ud2b8\ub799\ud2b8 \uac00\ubcc0\uc131",permalink:"/ko/sdk/rust/contract-interface/contract-mutability"}},i={},d=[{value:"\ud2b9\uc131 \uad6c\ud604 \uacf5\uac1c",id:"\ud2b9\uc131-\uad6c\ud604-\uacf5\uac1c",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\ud37c\ube14\ub9ad-\uba54\uc11c\ub4dc-\uc790\ub8cc\ud615",children:"\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc \uc790\ub8cc\ud615"}),"\n",(0,r.jsxs)(t.p,{children:["\uba54\uc11c\ub4dc\ub294 \ucef4\ud30c\uc77c\ub41c WASM \ubc14\uc774\ud2b8\ucf54\ub4dc\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c\ud558\ub294 ",(0,r.jsxs)(t.a,{href:"/ko/sdk/rust/contract-structure/near-bindgen",children:[(0,r.jsx)(t.code,{children:"#[near_bindgen]"})," \ub9e4\ud06c\ub85c"]})," \ub0b4\uc758 ",(0,r.jsx)(t.code,{children:"pub"})," \uc2dd\ubcc4\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc678\ubd80\uc5d0\uc11c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:["\uc678\ubd80\uc5d0\uc11c \ud638\ucd9c\ud574\uc57c \ud558\ub294 \uba54\uc11c\ub4dc\ub9cc public\uc73c\ub85c \ud45c\uc2dc\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uc790\uc2e0\uc744 \ud638\ucd9c\ud558\ub294 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud544\uc694\ud55c \uacbd\uc6b0, \ud568\uc218\ub97c \uacf5\uac1c\ub85c \ud45c\uc2dc\ud558\uace0 ",(0,r.jsxs)(t.a,{href:"/ko/sdk/rust/contract-interface/private-methods",children:[(0,r.jsx)(t.code,{children:"#[private]"})," \uc8fc\uc11d"]}),"\uc744 \ucd94\uac00\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \uc790\uccb4\uac00 \uc544\ub2cc \ub2e4\ub978 \uacf3\uc5d0\uc11c \ud638\ucd9c\ud558\uba74 \ud328\ub2c9\uc774 \ubc1c\uc0dd\ud558\ub3c4\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(t.p,{children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\nimpl MyContractStructure {\n    pub fn some_method(&mut self) {\n        // .. method logic here\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\uc774\ub294 WASM \ubc14\uc774\ub108\ub9ac\uc5d0\uc11c ",(0,r.jsx)(t.code,{children:"some_method"}),"\ub97c \uacf5\uac1c\ud558\uace0 \uc678\ubd80\uc5d0\uc11c \ud638\ucd9c\ub420 \uc218 \uc788\ub3c4\ub85d \ud5c8\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\ud3bc\uccd0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc \ubcf4\uae30"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'#[cfg(target_arch = "wasm32")]\n#[no_mangle]\npub extern "C" fn some_method() {\n    near_sdk::env::setup_panic_hook();\n    if near_sdk::env::attached_deposit() != 0 {\n        near_sdk::env::panic("Method some_method doesn\\\'t accept deposit".as_bytes());\n    }\n    let mut contract: MyContractStructure = near_sdk::env::state_read().unwrap_or_default();\n    contract.some_method();\n    near_sdk::env::state_write(&contract);\n}\n'})})]}),"\n",(0,r.jsx)(t.h2,{id:"\ud2b9\uc131-\uad6c\ud604-\uacf5\uac1c",children:"\ud2b9\uc131 \uad6c\ud604 \uacf5\uac1c"}),"\n",(0,r.jsxs)(t.p,{children:["\ud568\uc218\ub294 \ud2b9\uc131 \uad6c\ud604\uc744 \ud1b5\ud574 \uacf5\uac1c\ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud55c \uacf5\uc720 \uc778\ud130\ud398\uc774\uc2a4 \ub610\ub294 \ud45c\uc900\uc744 \uad6c\ud604\ud558\ub294 \uacbd\uc6b0 \uc720\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ucf54\ub4dc \uc0dd\uc131\uc740 \uae30\ubcf8 ",(0,r.jsx)(t.code,{children:"pub"})," \ud568\uc218\uc640 \ub9e4\uc6b0 \uc720\uc0ac\ud558\uac8c \ucc98\ub9ac\ub418\uc9c0\ub9cc, \uc5ec\uae30\uc11c ",(0,r.jsx)(t.code,{children:"#[near_bindgen]"})," \ub9e4\ud06c\ub85c\ub294 \ud2b9\uc131 \uc790\uccb4\uac00 \uc544\ub2c8\ub77c \ud2b9\uc131 \uad6c\ud604\uc5d0\ub9cc \uc5f0\uacb0\ub418\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"pub trait MyTrait {\n    fn trait_method(&mut self);\n}\n\n#[near_bindgen]\nimpl MyTrait for MyContractStructure {\n    fn trait_method(&mut self) {\n        // .. method logic here\n    }\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"\uc774 \uc608\uc81c\uc5d0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc\ub294 \uba54\uc11c\ub4dc \uc774\ub984\uc774 \ub2e4\ub978 \uac83\uc744 \uc81c\uc678\ud558\uace0 \uc774\uc804 \uc608\uc81c\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\ud3bc\uccd0\uc11c \uc0dd\uc131\ub41c \ucf54\ub4dc \ubcf4\uae30"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'#[cfg(target_arch = "wasm32")]\n#[no_mangle]\npub extern "C" fn trait_method() {\n    near_sdk::env::setup_panic_hook();\n    if near_sdk::env::attached_deposit() != 0 {\n        near_sdk::env::panic("Method trait_method doesn\\\'t accept deposit".as_bytes());\n    }\n    let mut contract: MyContractStructure = near_sdk::env::state_read().unwrap_or_default();\n    contract.trait_method();\n    near_sdk::env::state_write(&contract);\n}\n'})})]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const s={},c=r.createContext(s);function a(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);