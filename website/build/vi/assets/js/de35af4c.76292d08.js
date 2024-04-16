"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3047],{91676:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var o=n(85893),r=n(11151);const c={},a=void 0,s={id:"build/primitives/dex/smart-contract/get-pools",title:"get-pools",description:"",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/5.primitives/dex/smart-contract/get-pools.md",sourceDirName:"2.build/5.primitives/dex/smart-contract",slug:"/build/primitives/dex/smart-contract/get-pools",permalink:"/vi/build/primitives/dex/smart-contract/get-pools",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dex/smart-contract/get-pools.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{}},i={},l=[];function u(t){const e={code:"code",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'#[derive(Serialize, Deserialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct PoolInfo {\n  /// Pool kind.\n  pub pool_kind: String,\n  /// List of tokens in the pool.\n  pub token_account_ids: Vec<AccountId>,\n  /// How much NEAR this contract has.\n  pub amounts: Vec<U128>,\n  /// Fee charged for swap.\n  pub total_fee: u32,\n  /// Total number of shares.\n  pub shares_total_supply: U128,\n  pub amp: u64,\n}\n\n// Validator interface, for cross-contract calls\n#[ext_contract(ext_amm_contract)]\ntrait ExternalAmmContract {\n  fn get_pools(&self, from_index: u64, limit: u64) -> Promise;\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_get_pools_callback(&self, #[callback_result] call_result: Result<Vec<PoolInfo>, PromiseError>) -> Option<Vec<PoolInfo>> {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting external contract");\n      return None;\n    }\n\n    // Return the pools data\n    let pools_data = call_result.unwrap();\n    return Some(pools_data);\n  }\n\n  pub fn get_amm_pools(&self, from_index: u64, limit: u64) -> Promise {\n    let promise = ext_amm_contract::ext(self.amm_contract.clone())\n      .get_pools(from_index, limit);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .external_get_pools_callback()\n    )\n  }\n}\n'})})}function p(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>a});var o=n(67294);const r={},c=o.createContext(r);function a(t){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),o.createElement(c.Provider,{value:e},t.children)}}}]);