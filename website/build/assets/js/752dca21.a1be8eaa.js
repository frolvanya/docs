"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[762],{28650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const o={id:"get-started",title:"Getting Started"},i="Getting Started",a={id:"sdk/js/get-started",title:"Getting Started",description:"You can develop smart contracts on Windows using Windows Subsystem for Linux (WSL2).",source:"@site/../docs/sdk/js/intro.md",sourceDirName:"sdk/js",slug:"/sdk/js/get-started",permalink:"/sdk/js/get-started",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/intro.md",tags:[],version:"current",lastUpdatedBy:"matiasbenary",lastUpdatedAt:1707406474e3,frontMatter:{id:"get-started",title:"Getting Started"},sidebar:"tools",previous:{title:"About JS SDK",permalink:"/sdk/js/introduction"},next:{title:"NearBindgen",permalink:"/sdk/js/contract-structure/near-bindgen"}},d={},c=[{value:"Install Node",id:"install-node",level:2},{value:"Create a new project",id:"create-a-new-project",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.admonition,{title:"Using the JS SDK on Windows",type:"tip",children:(0,s.jsx)(n.p,{children:"You can develop smart contracts on Windows using Windows Subsystem for Linux (WSL2)."})}),"\n",(0,s.jsx)(n.p,{children:"In order to use WSL2, follow the next steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"PowerShell"})," as Administrator"]}),"\n",(0,s.jsxs)(n.li,{children:["Execute ",(0,s.jsx)(n.code,{children:"wsl --install"})," to install Ubuntu and do additional setup automatically. Check more details ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"here"})]}),"\n",(0,s.jsx)(n.li,{children:"Restart your machine"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WSL2"})," will continue setup process on start. Setup your username and password when prompted."]}),"\n",(0,s.jsxs)(n.li,{children:["Check ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl",children:"this"})," guide to setup ",(0,s.jsx)(n.code,{children:"npm"}),", ",(0,s.jsx)(n.code,{children:"node"}),", ",(0,s.jsx)(n.code,{children:"npx"}),", ",(0,s.jsx)(n.code,{children:"VSCode"})," and other tools of your choice in order to start developing."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In case of any issues of setting up WSL2 make sure that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Your Windows OS is up to date"}),"\n",(0,s.jsx)(n.li,{children:"Virtualisation is turned on in BIOS"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Windows Subsystem for Linux"})," and ",(0,s.jsx)(n.code,{children:"Virtual Machine Platform"})," are turned on in ",(0,s.jsx)(n.code,{children:"Windows Features"})," (Start -> Search -> Turn Windows Feature On or Off)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"install-node",children:"Install Node"}),"\n",(0,s.jsxs)(n.p,{children:["To install Node, follow the instructions on the ",(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js website"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,s.jsxs)(n.p,{children:["The best way to create a new NEAR app connected with a frontend is through ",(0,s.jsx)(n.a,{href:"https://github.com/near/create-near-app",children:"create-near-app"}),". When initializing the project, be sure to select creating a project in TypeScript with a frontend option of your choice."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx create-near-app\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you only wish to develop and deploy a JS contract, the ",(0,s.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/tree/main/contract-ts",children:(0,s.jsx)(n.code,{children:"hello-near-ts"})})," repository is great to use as a template or one of the ",(0,s.jsx)(n.a,{href:"https://github.com/near/near-sdk-js/tree/develop/examples/src",children:"examples in the SDK repository"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to generate a new project manually with ",(0,s.jsx)(n.code,{children:"npm init"}),", make sure you include the following configuration in the generated ",(0,s.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "dependencies": {\n    "near-sdk-js": "*"\n  }\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);