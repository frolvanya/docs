"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4595],{96676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(85893),a=t(11151),s=t(74866),i=t(85162);const o={sidebar_position:2},l="Sending $NEAR",c={id:"sdk/rust/promises/token-tx",title:"Sending $NEAR",description:"You might want to send tokens from a contract for many reasons.",source:"@site/../docs/sdk/rust/promises/token-tx.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/token-tx",permalink:"/sdk/rust/promises/token-tx",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/token-tx.md",tags:[],version:"current",lastUpdatedBy:"matiasbenary",lastUpdatedAt:1710260483e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tools",previous:{title:"Promises: Introduction",permalink:"/sdk/rust/promises/intro"},next:{title:"Creating Accounts",permalink:"/sdk/rust/promises/create-account"}},u={},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"sending-near",children:"Sending $NEAR"}),"\n",(0,r.jsx)(n.p,{children:"You might want to send tokens from a contract for many reasons."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The contract uses something like the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"Storage Standard"})," and needs to return deposits to users when they unregister."]}),"\n",(0,r.jsx)(n.li,{children:"Users pay into the contract and the contract later pays these fees to the maintainers, redistributes them to users, or disburses them to some cause the users vote on."}),"\n",(0,r.jsx)(n.li,{children:"And more!"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Blockchains give us programmable money, and the ability for a smart contract to send tokens lies at the heart of that ability."}),"\n",(0,r.jsx)(n.p,{children:"NEAR makes this easy. Transferring NEAR tokens is the simplest transaction you can send from a smart contract. Here's all you need:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let amount: u128 = 1_000_000_000_000_000_000_000_000; // 1 $NEAR as yoctoNEAR\nlet account_id: AccountId = "example.near".parse().unwrap();\n\nPromise::new(account_id).transfer(amount);\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the context of a full contract and function call, this could look like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use near_sdk::{json_types::U128, near_bindgen, AccountId, Promise};\n\n#[near_bindgen]\npub struct Contract {}\n\n#[near_bindgen]\nimpl Contract {\n    pub fn pay(amount: U128, to: AccountId) -> Promise {\n        Promise::new(to).transfer(amount.0)\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Most of this is boilerplate you're probably familiar with by now \u2013\xa0imports, setting up ",(0,r.jsx)(n.a,{href:"/sdk/rust/contract-structure/near-bindgen",children:(0,r.jsx)(n.code,{children:"near_bindgen"})}),", ",(0,r.jsx)(n.a,{href:"/sdk/rust/contract-interface/serialization-interface",children:"borsh"}),", etc. Some interesting details related to the transfer itself:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"U128"})," with a capital ",(0,r.jsx)(n.code,{children:"U"}),": The ",(0,r.jsx)(n.code,{children:"pay"})," method defined here accepts JSON as input, and numbers in JS ",(0,r.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER",children:["cannot be larger than ",(0,r.jsx)(n.code,{children:"2^53-1"})]}),", so for compatibility with deserializing JSON to JS, the integer is serialized as a decimal string. Since the ",(0,r.jsx)(n.code,{children:"transfer"})," method takes a number in ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Yocto-",children:"yocto"}),"NEAR, it's likely to need numbers much larger than ",(0,r.jsx)(n.code,{children:"2^53-1"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When a function takes ",(0,r.jsx)(n.code,{children:"U128"})," as input, it means that callers need to specify the number a a string. near-sdk-rs will then cast it to ",(0,r.jsx)(n.code,{children:"U128"})," type, which wraps Rust's native ",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.u128.html",children:(0,r.jsx)(n.code,{children:"u128"})}),". The underlying ",(0,r.jsx)(n.code,{children:"u128"})," can be retrieved with ",(0,r.jsx)(n.code,{children:".0"})," \u2013\xa0used in ",(0,r.jsx)(n.code,{children:"transfer(amount.0)"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AccountId"}),": this will automatically check that the provided string is a well-formed NEAR account ID, and panic with a useful error if not."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Returning ",(0,r.jsx)(n.code,{children:"Promise"}),": This allows NEAR Explorer, near-cli, near-api-js, and other tooling to correctly determine if a whole chain of transactions is successful. If your function does not return ",(0,r.jsx)(n.code,{children:"Promise"}),", tools like near-cli will return immediately after your function call. And then even if the ",(0,r.jsx)(n.code,{children:"transfer"})," fails, your function call will be considered successful. You can see an example of this behavior ",(0,r.jsx)(n.a,{href:"/tutorials/examples/advanced-xcc",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Using near-cli or near-cli-rs, someone could invoke this function with a call like:"}),"\n",(0,r.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(i.Z,{value:"near-cli",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call <contract> pay \'{"amount": "1000000000000000000000000", "to": "example.near"}\' --accountId benjiman.near\n'})})}),(0,r.jsx)(i.Z,{value:"near-cli-rs",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-transaction <contract> pay json-args \'{"amount": "1000000000000000000000000", "to": "example.near"}\' prepaid-gas \'30 TeraGas\' attached-deposit \'0 NEAR\' sign-as benjiman.near network-config testnet sign-with-keychain send\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(36905),s=t(12466),i=t(16550),o=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function p(e){var n,t,a,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,p=h(e),b=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),g=b[0],v=b[1],x=f({queryString:c,groupId:d}),j=x[0],y=x[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=k[0],N=k[1],I=function(){var e=null!=j?j:w;return m({value:e,tabValues:p})?e:null}();return(0,o.Z)((function(){I&&v(I)}),[I]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),N(e)}),[y,N,p]),tabValues:p}}var b=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=p(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,Object.assign({},e,n)),(0,v.jsx)(j,Object.assign({},e,n))]})}function k(e){var n=(0,b.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);