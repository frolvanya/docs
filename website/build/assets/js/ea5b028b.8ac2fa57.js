"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2565],{91052:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(85893),c=n(11151);const a={},s=void 0,o={id:"primitives/dex/smart-contract/get-deposit-balances",title:"get-deposit-balances",description:"",source:"@site/../docs/7.primitives/dex/smart-contract/get-deposit-balances.md",sourceDirName:"7.primitives/dex/smart-contract",slug:"/primitives/dex/smart-contract/get-deposit-balances",permalink:"/primitives/dex/smart-contract/get-deposit-balances",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/smart-contract/get-deposit-balances.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1706635251e3,frontMatter:{}},i={},l=[];function d(t){const e={code:"code",pre:"pre",...(0,c.a)(),...t.components};return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'// Validator interface, for cross-contract calls\n#[ext_contract(ext_amm_contract)]\ntrait ExternalAmmContract {\n  fn get_deposits(&self, account_id: AccountId) -> Promise;\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_get_deposits_callback(&self, #[callback_result] call_result: Result<HashMap<AccountId, U128>, PromiseError>) -> Option<HashMap<AccountId, U128>> {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting external contract");\n      return None;\n    }\n\n    // Return the pools data\n    let deposits_data = call_result.unwrap();\n    return Some(deposits_data);\n  }\n\n  pub fn get_contract_deposits(&self) -> Promise {\n    let promise = ext_amm_contract::ext(self.amm_contract.clone())\n      .get_deposits(env::current_account_id());\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .external_get_deposits_callback()\n    )\n  }\n}\n'})})}function u(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>s});var r=n(67294);const c={},a=r.createContext(c);function s(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:s(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);