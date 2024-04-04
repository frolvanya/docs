"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3825],{53134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(85893),i=n(11151);const r={sidebar_position:2},a="Contract Mutability",o={id:"sdk/rust/contract-interface/contract-mutability",title:"Contract Mutability",description:"Contract state mutability is handled automatically based on how self is used in the function parameters. Depending on which is used, the #[near_bindgen] macro will generate the respective code to load/deserialize state for any function which uses self and serialize/store state only for when &mut self is used.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/sdk/rust/contract-interface/contract-mutability.md",sourceDirName:"sdk/rust/contract-interface",slug:"/sdk/rust/contract-interface/contract-mutability",permalink:"/vi/sdk/rust/contract-interface/contract-mutability",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/contract-interface/contract-mutability.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"Public Method Types",permalink:"/vi/sdk/rust/contract-interface/public-methods"},next:{title:"Private Methods",permalink:"/vi/sdk/rust/contract-interface/private-methods"}},c={},l=[{value:"Read-Only Functions",id:"read-only-functions",level:2},{value:"self (owned value)",id:"self-owned-value",level:3},{value:"&amp;self (immutable reference)",id:"self-immutable-reference",level:3},{value:"Returning derived data",id:"returning-derived-data",level:3},{value:"Mutable Functions",id:"mutable-functions",level:2},{value:"Pure Functions",id:"pure-functions",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"contract-mutability",children:"Contract Mutability"}),"\n",(0,s.jsxs)(t.p,{children:["Contract state mutability is handled automatically based on how ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/std/keyword.self.html",children:(0,s.jsx)(t.code,{children:"self"})})," is used in the function parameters. Depending on which is used, the ",(0,s.jsx)(t.a,{href:"/vi/sdk/rust/contract-structure/near-bindgen",children:(0,s.jsx)(t.code,{children:"#[near_bindgen]"})})," macro will generate the respective code to load/deserialize state for any function which uses ",(0,s.jsx)(t.code,{children:"self"})," and serialize/store state only for when ",(0,s.jsx)(t.code,{children:"&mut self"})," is used."]}),"\n",(0,s.jsxs)(t.p,{children:["The following semantics are consistent for all ",(0,s.jsx)(t.a,{href:"/vi/sdk/rust/contract-interface/public-methods",children:"public methods"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"read-only-functions",children:"Read-Only Functions"}),"\n",(0,s.jsxs)(t.p,{children:["To access state immutably, where the existing state is not overwritten at the end of the transaction, you can use ",(0,s.jsx)(t.code,{children:"&self"})," or ",(0,s.jsx)(t.code,{children:"self"})," as a parameter. Both of these will generate the same code to load and deserialize the state into the structure and call the function, but the difference is that ",(0,s.jsx)(t.code,{children:"&self"})," will just pass a reference to this variable into the function where ",(0,s.jsx)(t.code,{children:"self"})," will move the variable into the function."]}),"\n",(0,s.jsxs)(t.p,{children:["For more information about ",(0,s.jsx)(t.code,{children:"&self"})," versus ",(0,s.jsx)(t.code,{children:"self"})," see ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/stable/book/ch05-03-method-syntax.html?highlight=capture%20self#defining-methods",children:"this section in the Rust book"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Here are some examples of using each:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct MyContractStructure {\n    integer: u64,\n    message: String,\n}\n#[near_bindgen]\nimpl MyContractStructure {\n    pub fn get_values(self) -> (u64, String) {\n        (self.integer, self.message)\n    }\n    pub fn log_state_string(&self) {\n        near_sdk::env::log(self.message.as_bytes());\n    }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"There is no simple guideline that works for every case, but here are some core reasons on when to use each:"}),"\n",(0,s.jsx)(t.h3,{id:"self-owned-value",children:"self (owned value)"}),"\n",(0,s.jsxs)(t.p,{children:["Moving the owned value into the function can be useful if ",(0,s.jsx)(t.code,{children:"self"})," itself or its fields are moved within the function, as it will remove the need to ",(0,s.jsx)(t.code,{children:"Clone"}),"/",(0,s.jsx)(t.code,{children:"Copy"})," the data."]}),"\n",(0,s.jsx)(t.p,{children:"V\xed d\u1ee5:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"/// View method. More efficient, but can't be reused internally, because it consumes self.\npub fn get_owner_id(self) -> AccountId {\n    self.owner_id\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"self-immutable-reference",children:"&self (immutable reference)"}),"\n",(0,s.jsxs)(t.p,{children:["This should be used when the contract state is only read or the function is re-used by other methods which do not have ",(0,s.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html",children:"ownership"})," of the variable. This can also be useful if the struct uses a lot of memory, to avoid moving a large amount of data into the function scope rather than just referencing it."]}),"\n",(0,s.jsx)(t.p,{children:"V\xed d\u1ee5:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"/// View method. Requires cloning the account id.\npub fn get_owner_id(&self) -> AccountId {\n    self.owner_id.clone()\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"returning-derived-data",children:"Returning derived data"}),"\n",(0,s.jsx)(t.p,{children:"Some less common cases may intend to use read-only methods to return objects that are derived from modified objects stored in state. Below is a demonstration of this concept:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'/// View method that "modifies" state, for code structure or computational\n/// efficiency reasons. Changes state in-memory, but does NOT save the new\n/// state. If called internally by a change method, WILL result in updated\n/// contract state.\npub fn update_stats(&self, account_id: AccountId, score: U64) -> Account {\n    let account = self.accounts.get(&account_id).unwrap_or_else(|| env::panic_str("ERR_ACCT_NOT_FOUND"));\n    account.total += score;\n    account\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"mutable-functions",children:"Mutable Functions"}),"\n",(0,s.jsxs)(t.p,{children:["Mutable functions allow for loading the existing state, modifying it, then rewriting the modified state at the end of the function call. This should be used for any transaction which modifies the contract state. Note that the serialized contract data is stored in persistent storage under the key ",(0,s.jsx)(t.code,{children:"STATE"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"An example of a mutable function is as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, Default)]\npub struct MyContractStructure {\n    integer: u64,\n}\n#[near_bindgen]\nimpl MyContractStructure {\n    pub fn modify_value(&mut self, new_value: u64) {\n        self.integer = new_value;\n    }\n    pub fn increment_value(&mut self) {\n        self.integer += 1;\n    }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"pure-functions",children:"Pure Functions"}),"\n",(0,s.jsxs)(t.p,{children:["These functions do not use ",(0,s.jsx)(t.code,{children:"self"})," at all, and will not read or write the contract state from storage. Using public pure functions will be very rare but can be useful if returning data embedded in the contract code or executing some static shared logic that doesn't depend on state."]}),"\n",(0,s.jsx)(t.p,{children:"Some examples of pure functions are as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'const SOME_VALUE: u64 = 8;\n\n#[near_bindgen]\nimpl MyContractStructure {\n    pub fn log_message(/* Parameters here */) {\n        near_sdk::log!("inside log message");\n    }\n    pub fn log_u64(value: u64) {\n        near_sdk::log!("{}", value);\n    }\n    pub fn return_static_u64() -> u64 {\n        SOME_VALUE\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);