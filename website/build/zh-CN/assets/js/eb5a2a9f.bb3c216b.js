"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2467],{52297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),r=t(11151);const s={id:"interaction",title:"Smart Contract Interaction"},o=void 0,a={id:"tutorials/near-components/interaction",title:"Smart Contract Interaction",description:"Your frontend can interact with different blockchains using the built-in BOS API. Let's see how to create an application that reads and stores a greeting from a NEAR smart contract.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/near-components/hello-near.md",sourceDirName:"3.tutorials/near-components",slug:"/tutorials/near-components/interaction",permalink:"/zh-CN/tutorials/near-components/interaction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/hello-near.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"interaction",title:"Smart Contract Interaction"},sidebar:"tutorials",previous:{title:"BOS Loader",permalink:"/zh-CN/tutorials/near-components/bos-loader"},next:{title:"Design Components",permalink:"/zh-CN/tutorials/near-components/ds-components"}},c={},l=[{value:"The Contract",id:"the-contract",level:2},{value:"Retrieving the Greeting",id:"retrieving-the-greeting",level:2},{value:"Changing the Greeting",id:"changing-the-greeting",level:2},{value:"1. HTML Components",id:"1-html-components",level:3},{value:"2. Handling User&#39;s Input",id:"2-handling-users-input",level:3},{value:"onInputChange",id:"oninputchange",level:4},{value:"onBtnClick",id:"onbtnclick",level:4},{value:"Complete Example",id:"complete-example",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Your frontend can interact with different blockchains using the built-in BOS API. Let's see how to create an application that reads and stores a greeting from a NEAR smart contract."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"widgets",src:t(1299).Z+"",width:"1262",height:"608"})," ",(0,i.jsx)(n.em,{children:"View of our Hello Near app when the user is logged-in"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Check the finished example at ",(0,i.jsx)(n.a,{href:"https://near.social/#/mob.near/widget/WidgetSource?src=gagdiez.near/widget/HelloNear",children:"near.social code page"}),"."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"the-contract",children:"The Contract"}),"\n",(0,i.jsxs)(n.p,{children:["We have deployed a ",(0,i.jsx)(n.code,{children:"Hello World"})," smart contract in the NEAR network at ",(0,i.jsx)(n.code,{children:"hello.near-examples.near"}),". The contract exposes two methods:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"set_greeting(greeting: string): void"}),", which accepts a greeting and stores it in the contract state."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"get_greeting(): string"})," which returns the stored greeting."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"retrieving-the-greeting",children:"Retrieving the Greeting"}),"\n",(0,i.jsxs)(n.p,{children:["Since we want to interact with the NEAR network, we will use the ",(0,i.jsx)(n.code,{children:"Near"})," object from the BOS API."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'const contract = "hello.near-examples.near";\nconst greeting = Near.view(contract, "get_greeting", {});\n\nreturn <div>{greeting} World</div>;\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Assuming the contract is storing ",(0,i.jsx)(n.code,{children:'"Hello"'}),", this will render a simple:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"Hello World\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"changing-the-greeting",children:"Changing the Greeting"}),"\n",(0,i.jsxs)(n.p,{children:["To modify the greeting, we simply need to use ",(0,i.jsx)(n.code,{children:"Near.call"})," to call the ",(0,i.jsx)(n.code,{children:"set_greeting"})," method. This however, requires us to have a frontend in which the user can input the new greeting."]}),"\n",(0,i.jsx)(n.p,{children:"Lets create it in two steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Build the HTML that will be rendered"}),"\n",(0,i.jsx)(n.li,{children:"Add the logic to handle the function call"}),"\n"]}),"\n",(0,i.jsx)("hr",{className:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"1-html-components",children:"1. HTML Components"}),"\n",(0,i.jsx)(n.p,{children:"Use the following code to create a simple frontend, composed by a title, an input form to change the greeting, and a button to submit the change."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const contract = "hello.near-examples.near";\nconst greeting = Near.view(contract, "get_greeting", {});\n\n// Define components\nconst greetingForm = (\n  <>\n    <div className="border border-black p-3">\n      <label>Update greeting</label>\n      <input placeholder="Howdy" onChange={onInputChange} />\n      <button className="btn btn-primary mt-2" onClick={onBtnClick}>\n        Save\n      </button>\n    </div>\n  </>\n);\n\nconst notLoggedInWarning = <p> Login to change the greeting </p>;\n\n// Render\nreturn (\n  <>\n    <div className="container border border-info p-3">\n      <h3 className="text-center">\n        The contract says:\n        <span className="text-decoration-underline"> {greeting} </span>\n      </h3>\n\n      <p className="text-center py-2">\n        Look at that! A greeting stored on the NEAR blockchain.\n      </p>\n\n      {context.accountId ? greetingForm : notLoggedInWarning}\n    </div>\n  </>\n);\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Relevant HTML",type:"info",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"onChange & onClick"}),": We have prepared our ",(0,i.jsx)(n.code,{children:"<input>"})," and ",(0,i.jsx)(n.code,{children:"<button>"})," to act when something happens. Particularly, we will build two methods: one when the input changes, and one when the button is pressed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"context.accountId"}),": We check if ",(0,i.jsx)(n.code,{children:"context.accountId"})," is set, which tells us if the user has logged in using their NEAR account, and thus can interact with NEAR contracts."]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)("hr",{className:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"2-handling-users-input",children:"2. Handling User's Input"}),"\n",(0,i.jsxs)(n.p,{children:["Having our component's view ready, we now need to define the logic for when the user inputs a new greeting and presses the ",(0,i.jsx)(n.code,{children:"Submit"})," button. This is, we need to define the ",(0,i.jsx)(n.code,{children:"onInputChange"})," and ",(0,i.jsx)(n.code,{children:"onBtnClick"})," methods."]}),"\n",(0,i.jsx)(n.h4,{id:"oninputchange",children:"onInputChange"}),"\n",(0,i.jsxs)(n.p,{children:["When the user inputs a new greeting, we want to store it somewhere until the ",(0,i.jsx)(n.code,{children:"Submit"})," button is pressed, for this, we can use the ",(0,i.jsx)(n.a,{href:"../api/state.md",children:"application's State"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In BOS, the state is initialized through ",(0,i.jsx)(n.code,{children:"State.init"}),", updated with ",(0,i.jsx)(n.code,{children:"State.update"}),", and accessed through the ",(0,i.jsx)(n.code,{children:"state"})," variable (notice the lowercase). Lets store the new greeting in the App's state:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'State.init({ new_greeting: "" });\n\nconst onInputChange = ({ target }) => {\n  State.update({ new_greeting: target.value });\n};\n'})}),"\n",(0,i.jsx)(n.h4,{id:"onbtnclick",children:"onBtnClick"}),"\n",(0,i.jsxs)(n.p,{children:["The only thing left to do, is to handle when the user clicks the ",(0,i.jsx)(n.code,{children:"Submit"})," button. What we want is to check if the user changed the greeting, and submit it to the contract."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const onBtnClick = () => {\n  if (!state.new_greeting) {\n    return;\n  }\n\n  Near.call(contract, "set_greeting", {\n    greeting: state.new_greeting,\n  });\n};\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,i.jsx)(n.p,{children:"We have deployed a complete version of this example on the NEAR blockchain, so you can see its code and play with it."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Code"}),": Check the code of this example at the ",(0,i.jsx)(n.a,{href:"https://near.social/#/mob.near/widget/WidgetSource?src=gagdiez.near/widget/HelloNear",children:"near.social code page"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Try It"}),": Interact with the application at the ",(0,i.jsx)(n.a,{href:"https://near.social/#/gagdiez.near/widget/HelloNear",children:"near.social page"}),"."]}),"\n"]}),"\n"]})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1299:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hello-near-logedin-e49cb4b7b34e73a611d65bf2b44930e5.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);