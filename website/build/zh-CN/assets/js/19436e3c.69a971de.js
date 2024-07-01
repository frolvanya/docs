"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8761],{91270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(85893),a=n(11151);const s={title:"One place for all Smart Contracts Docs",authors:["gagdiez"],slug:"sdks-unified",tags:["updates"]},o=void 0,r={permalink:"/zh-CN/blog/sdks-unified",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2024-07-28.md",title:"One place for all Smart Contracts Docs",description:"We have consolidated all our documentation in a single section, so you don't need to go searching around for it",date:"2024-07-28T00:00:00.000Z",tags:[{label:"updates",permalink:"/zh-CN/blog/tags/updates"}],readingTime:2.695,hasTruncateMarker:!0,authors:[{name:"Guille",title:"Docs Maintainer",url:"https://github.com/gagdiez",imageURL:"https://github.com/gagdiez.png",key:"gagdiez"}],frontMatter:{title:"One place for all Smart Contracts Docs",authors:["gagdiez"],slug:"sdks-unified",tags:["updates"]},unlisted:!1,nextItem:{title:"Getting Started on NEAR Using Windows",permalink:"/zh-CN/blog/getting-started-on-windows"}},l={authorsImageUrls:[void 0]},c=[{value:"Why did we have 3 sections explaining the same topic?",id:"why-did-we-have-3-sections-explaining-the-same-topic",level:2},{value:"A single source of truth",id:"a-single-source-of-truth",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"If you don&#39;t like this change, please let us know!",id:"if-you-dont-like-this-change-please-let-us-know",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"We have consolidated all our documentation in a single section, so you don't need to go searching around for it"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)("img",{src:"/assets/images/contracts-landing-5a9c76a78e71b0e5f9a96033f1f23d23.png"})}),"\n",(0,i.jsx)(t.p,{children:"Smart contracts are small pieces of logic that can live on every NEAR account. To build a contract you use the NEAR SDKs, which comes in two flavours: Rust and JavaScript."}),"\n",(0,i.jsx)(t.p,{children:"Until today, we had multiple docs explaining how to build smart contracts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"/sdk/rust"})," dedicated to explain how to use the Rust SDK"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"/sdk/js"})," dedicated to explain how to use the JS SDK"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/build/smart-contracts/what-is",children:(0,i.jsx)(t.code,{children:"/build/smart-contracts/what-is"})})," - that explains general concepts, and how to implement them using both SDKs"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Today, this is over, as all the information on how to build smart contracts is located in a single area: ",(0,i.jsx)(t.a,{href:"/build/smart-contracts/what-is",children:(0,i.jsx)(t.code,{children:"/build/smart-contracts/what-is"})}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Meanwhile, we have transformed the ",(0,i.jsx)(t.a,{href:"/tools/sdk",children:"SDK page"})," to be a simple landing page with links to:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/",children:"Rust SDK reference docs"})]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.a,{href:"https://near.github.io/near-api-js/",children:"JS SDK reference docs"})]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.a,{href:"/build/smart-contracts/what-is",children:"Smart Contract Section"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"why-did-we-have-3-sections-explaining-the-same-topic",children:"Why did we have 3 sections explaining the same topic?"}),"\n",(0,i.jsx)(t.p,{children:"The reason we had 3 different sections was that, historically, the engineers of each SDK were working on their own docs in isolation. To help mitigate this, we created a section on NEAR docs, meant to consolidate all the external documentation."}),"\n",(0,i.jsx)(t.p,{children:"One day, the individual SDK pages were deleted - if I remember correctly, it was because we wanted to have fewer domains - and we had to migrate everything in a rush."}),"\n",(0,i.jsx)(t.p,{children:"This left us in a very weird situation: we already had a section explaining how to build a smart contract... and now we had 3."}),"\n",(0,i.jsx)(t.h2,{id:"a-single-source-of-truth",children:"A single source of truth"}),"\n",(0,i.jsxs)(t.p,{children:["Luckily, this is now fixed! We have finally conquered the original dream of having a single section for ",(0,i.jsx)(t.a,{href:"/build/smart-contracts/what-is",children:"Smart Contracts"}),", with all the information consolidated in there."]}),"\n",(0,i.jsx)(t.p,{children:"Now, we can focus on maintaining a single section, thus making it easier to keep it updated and relevant."}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,i.jsxs)(t.p,{children:["We are currently undergoing a process of ",(0,i.jsx)(t.strong,{children:"consolidating"})," all the documentation. This means that we are looking at all the sections that have overlapping information, and trying to merge them into a single place."]}),"\n",(0,i.jsxs)(t.p,{children:["This will not only improve the quality of our docs, but also make it easier for you to find the information you need. In fact, improving search is one of the main motors of this change, since we noticed that our search tool (",(0,i.jsx)(t.a,{href:"https://www.algolia.com/",children:"Algolia"}),") gets confused when the same concept is spread all over the place."]}),"\n",(0,i.jsx)(t.p,{children:"Moreover, having consistent and coherent documentation will allow us to further expand our search capabilities using AI! This is something we are very excited about, as it will allow us to provide you with even more relevant information."}),"\n",(0,i.jsx)(t.h2,{id:"if-you-dont-like-this-change-please-let-us-know",children:"If you don't like this change, please let us know!"}),"\n",(0,i.jsx)(t.p,{children:"As always, we are more than open to feedback. If you think that this change is not good, or that we are missing something, please let us know! You can reach out to us through the blue feedback button you see at the side of the screen."}),"\n",(0,i.jsx)(t.p,{children:"We are looking forward to hearing your thoughts and feedback, and hope you enjoy the content we'll be sharing."}),"\n",(0,i.jsx)(t.p,{children:"Happy coding, and see you in the next post! \ud83d\ude80"})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);