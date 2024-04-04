"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5574],{35702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=a(85893),l=a(11151);const s={sidebar_position:2,title:"Callbacks"},c="Callbacks",o={id:"sdk/js/cross-contract/callbacks",title:"Callbacks",description:"NEAR Protocol is a sharded, proof-of-stake blockchain that behaves differently than proof-of-work blockchains. When interacting with a native Rust (compiled to Wasm) smart contract, cross-contract calls are asynchronous. Callbacks are used to either get the result of a cross-contract call or tell if a cross-contract call has succeeded or failed.",source:"@site/../docs/sdk/js/cross-contract/callbacks.md",sourceDirName:"sdk/js/cross-contract",slug:"/sdk/js/cross-contract/callbacks",permalink:"/sdk/js/cross-contract/callbacks",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/cross-contract/callbacks.md",tags:[],version:"current",lastUpdatedBy:"Dennis",lastUpdatedAt:1674222229e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Callbacks"},sidebar:"tools",previous:{title:"Payable Methods",permalink:"/sdk/js/contract-interface/payable-methods"},next:{title:"Promises: Introduction",permalink:"/sdk/js/promises/intro"}},r={},i=[{value:"Calculator Example",id:"calculator-example",level:2},{value:"Allowlist Example",id:"allowlist-example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"callbacks",children:"Callbacks"}),"\n",(0,n.jsx)(t.p,{children:"NEAR Protocol is a sharded, proof-of-stake blockchain that behaves differently than proof-of-work blockchains. When interacting with a native Rust (compiled to Wasm) smart contract, cross-contract calls are asynchronous. Callbacks are used to either get the result of a cross-contract call or tell if a cross-contract call has succeeded or failed."}),"\n",(0,n.jsx)(t.h2,{id:"calculator-example",children:"Calculator Example"}),"\n",(0,n.jsxs)(t.p,{children:["A callback method can be declared in your contract class as a regular method decorated with the ",(0,n.jsx)(t.code,{children:"call({})"})," decorator. Be sure to pass in the ",(0,n.jsx)(t.code,{children:"privateFunction: true"})," option to the decorator. This will ensure that the method is only callable by the contract itself."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, let's assume the calculator is deployed on ",(0,n.jsx)(t.code,{children:"calc.near"}),", we can use the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'@NearBindgen({})\nexport class CalculatorCallerContract {\n  @call({})\n  sum_a_b({ a, b }) {\n    let calculatorAccountId = "calc.near";\n    // Call the method `sum` on the calculator contract.\n    // Any unused GAS will be attached since the default GAS weight is 1.\n    // Attached deposit is defaulted to 0.\n    return NearPromise\n            .new(calculatorAccountId)\n            .functionCall("sum", { a, b }, BigInt(0), BigInt(100000000000000));\n  }\n\n  @call({ privateFunction: true })\n  sum({ a, b })  {\n    return a + b;\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"allowlist-example",children:"Allowlist Example"}),"\n",(0,n.jsx)(t.p,{children:"Next we'll look at a simple cross-contract call that is made to an allowlist smart contract, returning whether an account is in the list or not."}),"\n",(0,n.jsxs)(t.p,{children:["The common pattern with cross-contract calls is to call a method on an external smart contract, use ",(0,n.jsx)(t.code,{children:".then"})," syntax to specify a callback, and then retrieve the result or status of the promise. The callback will typically live inside the same, calling smart contract. There's a special decorator parameter used for protecting the callback function, which is ",(0,n.jsx)(t.a,{href:"https://docs.rs/near-sdk-core/latest/near_sdk_core/struct.AttrSigInfo.html#structfield.is_private",children:(0,n.jsx)(t.code,{children:"privateFunction: true"})}),". We'll see this pattern in the example below."]}),"\n",(0,n.jsxs)(t.p,{children:["The following example demonstrates two common approaches to callbacks using the high-level cross-contract approach with ",(0,n.jsx)(t.code,{children:"NearPromise"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"@NearBindgen({})\nexport class ExtAllowlist {\n    // ...\n\n    @call({})\n    is_allowlisted({ staking_pool_account_id }) {\n        return this.allowlist.get(staking_pool_account_id) != null;\n    };\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After creating the class, we'll show a simple flow that will make a cross-contract call to the allowlist smart contract, asking if the account ",(0,n.jsx)(t.code,{children:"idea404.testnet"})," is allowlisted."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'@NearBindgen({})\nexport class Contract {\n    @call({})\n    xcc_query_allowlist() {\n        // Call the method `is_allowlisted` on the allowlisted contract. Static GAS is only attached to the callback.\n        // Any unused GAS will be split between the function call and the callback since both have a default unused GAS weight of 1\n        // Attached deposit is defaulted to 0 for both the function call and the callback.\n        return NearPromise\n            .new("allowlist.near")\n            .functionCall("is_allowlisted", { staking_pool_account_id: "idea404.testnet" }, BigInt(0), BigInt(100000000000000))\n            .then("internalCallbackMethod", {}, BigInt(0), BigInt(100000000000000));\n    }\n\n    @call({ privateFunction: true })\n    internalCallbackMethod() {\n        assert(near.promiseResultsCount() === BigInt(1), "Error: expected 1 promise result");\n        let result = JSON.parse(near.promiseResult(0));\n        return result;\n    }\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The syntax begins with ",(0,n.jsx)(t.code,{children:"NearPromise.new(<someAccountId>)"})," which initializes the async call to the designated ",(0,n.jsx)(t.code,{children:"<someAccountId>"}),". Subsequent calls to this program in this account are invoked using ",(0,n.jsx)(t.code,{children:".functionCall()"}),". The ",(0,n.jsx)(t.code,{children:".functionCall()"})," method takes in the following parameters:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"functionName"}),": the name of the method to call on the contract"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"args"}),": the arguments to pass to the method"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"amount"}),": the amount of \u24c3 to attach to the call"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"gas"}),": the amount of GAS units to attach to the call"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"There are a couple things to note when doing these function calls:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["You can attach a deposit of \u24c3, in yocto\u24c3 to the call by specifying the ",(0,n.jsx)(t.code,{children:"amount"})," parameter. This value is defaulted to 0 (1 \u24c3 = 1000000000000000000000000 yocto\u24c3, or 1^24 yocto\u24c3)."]}),"\n",(0,n.jsxs)(t.li,{children:["You can attach an amount of GAS units by specifying the ",(0,n.jsx)(t.code,{children:"gas"})," method. This value is defaulted to 0."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>c});var n=a(67294);const l={},s=n.createContext(l);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);