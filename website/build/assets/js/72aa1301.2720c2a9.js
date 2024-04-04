"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9033],{35392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(85893),a=t(11151);const s={sidebar_position:1},o="near_bindgen",r={id:"sdk/rust/contract-structure/near-bindgen",title:"near_bindgen",description:"The #[near_bindgen] macro is used on a struct and the function implementations to generate the necessary code to be a valid NEAR contract and expose the intended functions to be able to be called externally.",source:"@site/../docs/sdk/rust/contract-structure/near-bindgen.md",sourceDirName:"sdk/rust/contract-structure",slug:"/sdk/rust/contract-structure/near-bindgen",permalink:"/sdk/rust/contract-structure/near-bindgen",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-structure/near-bindgen.md",tags:[],version:"current",lastUpdatedBy:"Damian Parrino",lastUpdatedAt:1702311741e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"Getting Started",permalink:"/sdk/rust/get-started"},next:{title:"Collections",permalink:"/sdk/rust/contract-structure/collections"}},c={},l=[{value:"Initialization Methods",id:"initialization-methods",level:2},{value:"Payable Methods",id:"payable-methods",level:2},{value:"Private Methods",id:"private-methods",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"near_bindgen",children:"near_bindgen"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"#[near_bindgen]"})," macro is used on a ",(0,i.jsx)(n.code,{children:"struct"})," and the function implementations to generate the necessary code to be a valid NEAR contract and expose the intended functions to be able to be called externally."]}),"\n",(0,i.jsx)(n.p,{children:"For example, on a simple counter contract, the macro will be applied as such:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::near_bindgen;\n\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct Counter {\n    value: u64,\n}\n\n#[near_bindgen]\nimpl Counter {\n    pub fn increment(&mut self) {\n        self.value += 1;\n    }\n\n    pub fn get_count(&self) -> u64 {\n        self.value\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.code,{children:"Counter"})," struct represents the smart contract state and anything that implements ",(0,i.jsx)(n.code,{children:"BorshSerialize"})," and ",(0,i.jsx)(n.code,{children:"BorshDeserialize"})," can be included, even ",(0,i.jsx)(n.code,{children:"collections"}),", which will be covered in the next section. Whenever a function is called, the state will be loaded and deserialized, so it's important to keep this amount of data loaded as minimal as possible."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"#[near_bindgen]"})," also annotates the ",(0,i.jsx)(n.code,{children:"impl"})," for ",(0,i.jsx)(n.code,{children:"Counter"})," and this will generate any necessary boilerplate to expose the functions. The core interactions that are important to keep in mind:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Any ",(0,i.jsx)(n.code,{children:"pub"})," functions will be callable externally from any account/contract.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/sdk/rust/contract-interface/public-methods",children:"public methods"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"self"})," can be used in multiple ways to control the ",(0,i.jsx)(n.a,{href:"/sdk/rust/contract-interface/contract-mutability",children:"mutability of the contract"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Functions that take ",(0,i.jsx)(n.code,{children:"&self"})," or ",(0,i.jsx)(n.code,{children:"self"})," will be read-only and do not write the updated state to storage"]}),"\n",(0,i.jsxs)(n.li,{children:["Functions that take ",(0,i.jsx)(n.code,{children:"&mut self"})," allow for mutating state, and state will always be written back at the end of the function call"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Exposed functions can omit reading and writing to state if ",(0,i.jsx)(n.code,{children:"self"})," is not included in the function params","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This can be useful for some static functionality or returning data embedded in the contract code"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If the function has a return value, it will be serialized and attached as a result through ",(0,i.jsx)(n.code,{children:"env::value_return"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"initialization-methods",children:"Initialization Methods"}),"\n",(0,i.jsxs)(n.p,{children:["By default, the ",(0,i.jsx)(n.code,{children:"Default::default()"})," implementation of a contract will be used to initialize a contract. There can be a custom initialization function which takes parameters or performs custom logic with the following ",(0,i.jsx)(n.code,{children:"#[init]"})," annotation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#[near_bindgen]\nimpl Counter {\n    #[init]\n    pub fn new(value: u64) -> Self {\n        log!("Custom counter initialization!");\n        Self { value }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["All contracts are expected to implement ",(0,i.jsx)(n.code,{children:"Default"}),". If you would like to prohibit the default implementation from being used, the ",(0,i.jsx)(n.code,{children:"PanicOnDefault"})," derive macro can be used:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Counter {\n    // ...\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"payable-methods",children:"Payable Methods"}),"\n",(0,i.jsxs)(n.p,{children:["Methods can be annotated with ",(0,i.jsx)(n.code,{children:"#[payable]"})," to allow tokens to be transferred with the method invocation. For more information, see ",(0,i.jsx)(n.a,{href:"/sdk/rust/contract-interface/payable-methods",children:"payable methods"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To declare a function as payable, use the ",(0,i.jsx)(n.code,{children:"#[payable]"})," annotation as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[payable]\npub fn my_method(&mut self) {\n...\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"private-methods",children:"Private Methods"}),"\n",(0,i.jsxs)(n.p,{children:["Some methods need to be exposed to allow the contract to call a method on itself through a promise, but want to disallow any other contract to call it. For this, use the ",(0,i.jsx)(n.code,{children:"#[private]"})," annotation to panic when this method is called externally. See ",(0,i.jsx)(n.a,{href:"/sdk/rust/contract-interface/private-methods",children:"private methods"})," for more information."]}),"\n",(0,i.jsx)(n.p,{children:"This annotation can be applied to any method through the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[private]\npub fn my_method(&mut self) {\n...\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Interaction with other macros",type:"info",children:(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"near_bindgen"})," is built for the wasm32 target, it generates the external NEAR contract bindings.  To achieve this it is actually generating another function with the signature ",(0,i.jsx)(n.code,{children:'pub extern "C" fn function_name()'})," that first deserializes the contract struct from NEAR storage and then calls the ",(0,i.jsx)(n.code,{children:"contract.function_name(parameter1, parameter2, ...)"}),".  If you have annotated your function with any attribute-like macros, these are then executed ",(0,i.jsx)(n.em,{children:"twice"}),".  Specifically if the attribute like macro makes any modification to the function signature, or inserts any code that depends on the contract struct (in the form of ",(0,i.jsx)(n.code,{children:"&self"}),", ",(0,i.jsx)(n.code,{children:"&mut self"}),", or ",(0,i.jsx)(n.code,{children:"self"}),") this will fail in the second invocation, because the externally exposed function does not have any concept of this struct.  It is possible to detect this by checking which build target you are building for and limit the execution of the macro to operate only on the first pass."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);