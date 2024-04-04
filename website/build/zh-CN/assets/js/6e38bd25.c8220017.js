"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1156],{1101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(85893),i=t(11151);const o={sidebar_position:1,title:"NearBindgen"},r="NearBindgen",s={id:"sdk/js/contract-structure/near-bindgen",title:"NearBindgen",description:"The @NearBindgen({}) decorator is used on the contract class to generate the necessary code to be a valid NEAR contract and expose the intended functions to be able to be called externally.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sdk/js/contract-structure/near-bindgen.md",sourceDirName:"sdk/js/contract-structure",slug:"/sdk/js/contract-structure/near-bindgen",permalink:"/zh-CN/sdk/js/contract-structure/near-bindgen",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/contract-structure/near-bindgen.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"NearBindgen"},sidebar:"tools",previous:{title:"Getting Started",permalink:"/zh-CN/sdk/js/get-started"},next:{title:"Collections",permalink:"/zh-CN/sdk/js/contract-structure/collections"}},c={},l=[{value:"Initialization Methods",id:"initialization-methods",level:2},{value:"Payable Methods",id:"payable-methods",level:2},{value:"Private Methods",id:"private-methods",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"nearbindgen",children:"NearBindgen"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"@NearBindgen({})"})," decorator is used on the contract class to generate the necessary code to be a valid NEAR contract and expose the intended functions to be able to be called externally."]}),"\n",(0,a.jsx)(n.p,{children:"For example, on a simple counter contract, the decorator will be applied as such:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { NearBindgen, near, call, view } from 'near-sdk-js'\n\n@NearBindgen({})\nclass Counter {\n  val: number = 0;\n\n  @view({}) // Public read-only method: Returns the counter value.\n  get_num(): number {\n    return this.val\n  }\n\n  @call({}) // Public method: Increment the counter.\n  increment() {\n    this.val += 1;\n    near.log(`Increased number to ${this.val}`)\n  }\n\n  @call({}) // Public method: Decrement the counter.\n  decrement() {\n    this.val -= 1;\n    near.log(`Decreased number to ${this.val}`)\n  }\n\n  @call({}) // Public method - Reset to zero.\n  reset() {\n    this.val = 0;\n    near.log(`Reset counter to zero`)\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, the ",(0,a.jsx)(n.code,{children:"Counter"})," class represents the smart contract state and anything that implements serialization and deserialization methods can be included, such as ",(0,a.jsx)(n.code,{children:"collections"}),", which will be covered in the next section. Whenever a function is called, the state will be loaded and deserialized, so it's important to keep this amount of data loaded as minimal as possible."]}),"\n",(0,a.jsx)(n.p,{children:"The core interactions that are important to keep in mind:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Any ",(0,a.jsx)(n.code,{children:"call"})," or ",(0,a.jsx)(n.code,{children:"view"})," or ",(0,a.jsx)(n.code,{children:"initialize"})," functions will be callable externally from any account/contract.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["For more information, see ",(0,a.jsx)(n.a,{href:"/zh-CN/sdk/js/contract-interface/public-methods",children:"public methods"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"view"})," or ",(0,a.jsx)(n.code,{children:"call"})," decorators can be used in multiple ways to control the mutability of the contract:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Functions that are decorated with ",(0,a.jsx)(n.code,{children:"view"})," will be read-only and do not write the updated state to storage"]}),"\n",(0,a.jsxs)(n.li,{children:["Functions that are decorated with ",(0,a.jsx)(n.code,{children:"call"})," allow for mutating state, and state will always be written back at the end of the function call"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Exposed functions can omit reading and writing to state if class variables are not accessed in the function","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This can be useful for some static functionality or returning data embedded in the contract code"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"initialization-methods",children:"Initialization Methods"}),"\n",(0,a.jsxs)(n.p,{children:["By default, the ",(0,a.jsx)(n.code,{children:"default()"})," implementation of a contract will be used to initialize a contract. There can be a custom initialization function which takes parameters or performs custom logic with the following ",(0,a.jsx)(n.code,{children:"@initialize({})"})," decorator:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"@NearBindgen({})\nclass Counter {\n    @initialize({})\n    init(val): void {\n        this.val = val;\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"payable-methods",children:"Payable Methods"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"call"})," method decorators can be annotated with ",(0,a.jsx)(n.code,{children:"{ payableFunction: true }"})," to allow tokens to be transferred with the method invocation. For more information, see ",(0,a.jsx)(n.a,{href:"/zh-CN/sdk/js/contract-interface/payable-methods",children:"payable methods"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"To declare a function as payable, use the annotation as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"@NearBindgen({})\nclass Counter {\n    @call({ payableFunction: true })\n    increment(): void {\n        this.val += 1;\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"private-methods",children:"Private Methods"}),"\n",(0,a.jsxs)(n.p,{children:["Some methods need to be exposed to allow the contract to call a method on itself through a promise, but want to disallow any other contract to call it. For this, use the ",(0,a.jsx)(n.code,{children:"{ privateFunction: true }"})," annotation to throw an error when this method is called externally. See ",(0,a.jsx)(n.a,{href:"/zh-CN/sdk/js/contract-interface/private-methods",children:"private methods"})," for more information."]}),"\n",(0,a.jsx)(n.p,{children:"This annotation can be applied to any method through the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"@NearBindgen({})\nclass Counter {\n    @call({ privateFunction: true })\n    private_increment(): void {\n        this.val += 1;\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);