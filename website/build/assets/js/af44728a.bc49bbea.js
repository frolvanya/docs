"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9425],{37222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(85893),s=n(11151);const o={id:"introduction",title:"NFT Zero to Hero",sidebar_label:"Introduction"},i=void 0,l={id:"tutorials/nfts/introduction",title:"NFT Zero to Hero",description:"In this Zero to Hero series, you'll find a set of tutorials that will cover every aspect of a non-fungible token (NFT) smart contract.",source:"@site/../docs/3.tutorials/nfts/0-intro.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/introduction",permalink:"/tutorials/nfts/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/0-intro.md",tags:[],version:"current",lastUpdatedBy:"garikbesson",lastUpdatedAt:1708095721e3,sidebarPosition:0,frontMatter:{id:"introduction",title:"NFT Zero to Hero",sidebar_label:"Introduction"},sidebar:"tutorials",previous:{title:"Marketplace",permalink:"/tutorials/nfts/js/marketplace"},next:{title:"Pre-deployed Contract",permalink:"/tutorials/nfts/predeployed-contract"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Next steps",id:"next-steps",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["In this ",(0,r.jsx)(t.em,{children:"Zero to Hero"})," series, you'll find a set of tutorials that will cover every aspect of a non-fungible token (NFT) smart contract.\nYou'll start by minting an NFT using a pre-deployed contract and by the end you'll end up building a fully-fledged NFT smart contract that supports every extension."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"To complete these tutorials successfully, you'll need:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/develop/prerequisites",children:"Rust"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://testnet.mynearwallet.com/create",children:"A NEAR Wallet"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/tools/near-cli#setup",children:"NEAR-CLI"})}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"New to Rust?",type:"info",children:(0,r.jsxs)(t.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,r.jsx)(t.a,{href:"/develop/quickstart-guide",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["These are the steps that will bring you from ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"Zero"})})," to ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"Hero"})})," in no time! \ud83d\udcaa"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Step"}),(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/predeployed-contract",children:"Pre-deployed contract"})}),(0,r.jsx)(t.td,{children:"Mint an NFT without the need to code, create, or deploy a smart contract."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/skeleton",children:"Contract architecture"})}),(0,r.jsx)(t.td,{children:"Learn the basic architecture of the NFT smart contract and compile code."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"Minting"})}),(0,r.jsx)(t.td,{children:"Flesh out the skeleton so the smart contract can mint a non-fungible token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/upgrade-contract",children:"Upgrade a contract"})}),(0,r.jsx)(t.td,{children:"Discover the process to upgrade an existing smart contract."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/enumeration",children:"Enumeration"})}),(0,r.jsx)(t.td,{children:"Explore enumeration methods that can be used to return the smart contract's states."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"6"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/core",children:"Core"})}),(0,r.jsx)(t.td,{children:"Extend the NFT contract using the core standard which allows token transfer."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"7"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/approvals",children:"Approvals"})}),(0,r.jsx)(t.td,{children:"Expand the contract allowing other accounts to transfer NFTs on your behalf."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"8"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/royalty",children:"Royalty"})}),(0,r.jsx)(t.td,{children:"Add NFT royalties allowing for a set percentage to be paid out to the token creator."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"9"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/tutorials/nfts/marketplace",children:"Marketplace"})}),(0,r.jsx)(t.td,{children:"Learn about how common marketplaces operate on NEAR and dive into some of the code that allows buying and selling NFTs."})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(t.p,{children:["Ready to start? Jump to the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/predeployed-contract",children:"Pre-deployed Contract"})," tutorial and begin your learning journey!"]}),"\n",(0,r.jsx)(t.p,{children:"If you already know about non-fungible tokens and smart contracts, feel free to skip and jump directly to the tutorial of your interest. The tutorials have been designed so you can start at any given point!"}),"\n",(0,r.jsxs)(t.admonition,{title:"Questions?",type:"info",children:[(0,r.jsxs)(t.p,{children:["\ud83d\udc49 Join us on ",(0,r.jsx)(t.a,{href:"https://near.chat/",children:"Discord"})," and let us know in the ",(0,r.jsx)(t.code,{children:"#development"})," channels. \ud83d\udc48"]}),(0,r.jsxs)(t.p,{children:["We also host daily ",(0,r.jsx)(t.a,{href:"https://pages.near.org/developers/get-help/office-hours/",children:"Office Hours"})," live where the DevRel team will answer any questions you may have. \ud83e\udd14"]}),(0,r.jsx)(t.p,{children:"Monday \u2013 Friday 11AM \u2013 12PM Pacific (6PM \u2013 7PM UTC)"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);