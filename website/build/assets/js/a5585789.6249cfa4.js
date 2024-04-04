"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[160],{3638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(85893),i=t(11151);const o={id:"realtime",title:"Real-time Events (WebSocket)"},a=void 0,r={id:"tools/realtime",title:"Real-time Events (WebSocket)",description:"While developing a decentralized app you might want track specific events in real time. For example, you could want",source:"@site/../docs/4.tools/events.md",sourceDirName:"4.tools",slug:"/tools/realtime",permalink:"/tools/realtime",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/events.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:169400768e4,frontMatter:{id:"realtime",title:"Real-time Events (WebSocket)"}},c={},l=[{value:"NEP-297 - Events",id:"nep-297---events",level:2},{value:"Listening to Events (Mainnet)",id:"listening-to-events-mainnet",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"While developing a decentralized app you might want track specific events in real time. For example, you could want\nto be informed each time a specific NFT marketplace makes a sell. For this to be possible you need:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"A way for the contract to inform that an event took place."}),"\n",(0,s.jsx)(n.li,{children:"A way to track such events in real time."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To tackle these challenges is that the ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"standard events format (NEP-297)"})," was created.\n",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"NEP-297"})," defines a standard way for contracts to inform about an event. Since these\nevents are public, a service can then be built to track them in real time through the use of websocket."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"nep-297---events",children:"NEP-297 - Events"}),"\n",(0,s.jsxs)(n.p,{children:["In NEAR, ",(0,s.jsx)(n.code,{children:"Events"})," use the standard logs capability of contracts, since every log is forever stored in the blockchain. In this way,\nEvents are normal log entries that start with the ",(0,s.jsx)(n.code,{children:"EVENT_JSON:"})," prefix, followed by a single valid JSON string. The JSON string\nmust codify an object with the following interface:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface EventLogData {\n    standard: string, // name of standard, e.g. nep171\n    version: string, // e.g. 1.0.0\n    event: string, // type of the event, e.g. nft_mint\n    data?: unknown, // event data defined in the nep171\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"NEP-297 page"})," for examples."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"There is a known limitation of 16kb strings when capturing logs"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"listening-to-events-mainnet",children:"Listening to Events (Mainnet)"}),"\n",(0,s.jsxs)(n.p,{children:["To listen to events in the ",(0,s.jsx)(n.code,{children:"mainnet"})," simply connect to the secure websocket ",(0,s.jsx)(n.code,{children:"wss://events.near.stream/ws"}),". There is no websocket ",(0,s.jsxs)(n.strong,{children:["for ",(0,s.jsx)(n.code,{children:"testnet"})]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["As first message you will need to pass an object stating the type of events you want to filter for, and a limit if necessary. For example, here we filter for the ",(0,s.jsx)(n.code,{children:"nft_mint"})," event in the ",(0,s.jsx)(n.code,{children:"nft.nearapps.near"})," account."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  secret: "ohyeahnftsss",\n  filter: [{\n    "account_id": "nft.nearapps.near",\n    "status": "SUCCESS",\n    "event": {\n      "standard": "nep171",\n      "event": "nft_mint",\n    }\n  }],\n  fetch_past_events: 20,\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["There is no websocket implemented for ",(0,s.jsx)(n.code,{children:"testnet"}),", but you can run your own using this ",(0,s.jsx)(n.a,{href:"https://github.com/evgenykuzyakov/indexer-tutorials/tree/master/example-indexer",children:"modified indexer"})," to\npopulate a database with events, and then serve them using the ",(0,s.jsx)(n.a,{href:"https://github.com/evgenykuzyakov/event-api",children:"event-api project"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{title:"Reference implementation",type:"tip",children:(0,s.jsxs)(n.p,{children:["If you need a reference implementation, ",(0,s.jsx)(n.a,{href:"https://github.com/evgenykuzyakov/nft-mints",children:"here is a project from Evgeny Kuzyakov"}),"\nthat listens for ",(0,s.jsx)(n.strong,{children:"all"})," ",(0,s.jsx)(n.code,{children:"nft_mint"})," and ",(0,s.jsx)(n.code,{children:"nft_transfer"})," events in the NEAR network."]})}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);