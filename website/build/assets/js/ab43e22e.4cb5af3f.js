"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3003],{75062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(85893),s=t(11151);const a={id:"chain-signatures",title:"What are Chain Signatures?",sidebar_label:"What are Chain Signatures?"},r=void 0,c={id:"concepts/abstraction/chain-signatures",title:"What are Chain Signatures?",description:"Chain signatures enable NEAR accounts, including smart contracts, to sign and execute transactions across many blockchain protocols.",source:"@site/../docs/1.concepts/abstraction/chain-signatures.md",sourceDirName:"1.concepts/abstraction",slug:"/concepts/abstraction/chain-signatures",permalink:"/concepts/abstraction/chain-signatures",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/abstraction/chain-signatures.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{id:"chain-signatures",title:"What are Chain Signatures?",sidebar_label:"What are Chain Signatures?"},sidebar:"concepts",previous:{title:"Relayers",permalink:"/concepts/abstraction/relayers"},next:{title:"Use cases",permalink:"/concepts/abstraction/signatures/use-cases"}},o={},h=[{value:"How It Works",id:"how-it-works",level:2},{value:"Derivation Paths: One Account, Multiple Chains",id:"derivation-paths-one-account-multiple-chains",level:3},{value:"Multichain Smart Contract",id:"multichain-smart-contract",level:3},{value:"Multi-Party Computation Service",id:"multi-party-computation-service",level:3},{value:"Concluding Remarks",id:"concluding-remarks",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Chain signatures enable NEAR accounts, including smart contracts, to sign and execute transactions across many blockchain protocols."}),"\n",(0,i.jsx)(n.p,{children:"This unlocks the next level of blockchain interoperability by giving ownership of diverse assets, cross-chain accounts, and data to every single NEAR account."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"chain-signatures",src:t(81530).Z+"",width:"2478",height:"523"}),"\n",(0,i.jsx)(n.em,{children:"Diagram of a chain signature in NEAR"})]}),"\n",(0,i.jsx)(n.admonition,{title:"Looking for code?",type:"info",children:(0,i.jsxs)(n.p,{children:["To get started using Chain Signatures in your project see ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/build/chain-abstraction/chain-signatures",children:"Create a Chain Signature"})}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["This technology is currently in ",(0,i.jsx)(n.code,{children:"alpha"})," and should only be used in a ",(0,i.jsx)(n.code,{children:"testnet"})," environment."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsx)(n.p,{children:"Controlling accounts and their assets on other blockchain platforms is made possible thanks to the interaction between three elements:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#derivation-paths-one-account-multiple-chains",children:(0,i.jsx)(n.strong,{children:"Derivation Paths"})})," - A deterministic way to derive foreign addresses from one NEAR account"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#multichain-smart-contract",children:(0,i.jsx)(n.strong,{children:"Multichain Smart Contract"})})," - Receives requests to sign a transaction for other blockchains"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#multi-party-computation-service",children:(0,i.jsx)(n.strong,{children:"Multiparty Computation Service"})})," Third-party service providing signatures to the contract"]}),"\n"]}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"derivation-paths-one-account-multiple-chains",children:"Derivation Paths: One Account, Multiple Chains"}),"\n",(0,i.jsxs)(n.p,{children:["Chain Signatures link NEAR accounts to addresses in other blockchain using ",(0,i.jsx)(n.a,{href:"https://eprint.iacr.org/2021/1330",children:"Additive Key Derivation"})," (a simple mechanism for deriving many subkeys from a single master key). These keys are generated using ",(0,i.jsx)(n.code,{children:"derivation paths"})," (or ",(0,i.jsx)(n.code,{children:"paths"})," for short)."]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"derivation path"})," is simply a string (e.g. ",(0,i.jsx)(n.code,{children:"ethereum-1"}),", ",(0,i.jsx)(n.code,{children:"ethereum-2"}),", etc) that in conjunction with the NEAR account derives a unique address on the target blockchain."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, we can derive multiple Ethereum addresses from ",(0,i.jsx)(n.code,{children:"example.near"})," by using different paths:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"example.near"})," + ",(0,i.jsx)(n.code,{children:"ethereum-1"})," = ",(0,i.jsx)(n.code,{children:"0x1b48b83a308ea4beb845db088180dc3389f8aa3b"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"example.near"})," + ",(0,i.jsx)(n.code,{children:"ethereum-2"})," = ",(0,i.jsx)(n.code,{children:"0x99c5d3025dc736541f2d97c3ef3c90de4d221315"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"example.near"})," + ",(0,i.jsx)(n.code,{children:"..."})," = ",(0,i.jsx)(n.code,{children:"0x..."})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It is important to note that this allows us to discover the ",(0,i.jsx)(n.strong,{children:"public address"})," of the foreign account that we can control. To actually control the foreign account, we need to request signatures from the MPC service."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["In practice, the external address is deterministically derived using the NEAR address (",(0,i.jsx)(n.code,{children:"example.near"}),"), the path (",(0,i.jsx)(n.code,{children:"ethereum-1"}),") and the MPC service's public key"]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/build/chain-abstraction/chain-signatures#1-deriving-the-foreign-address",children:(0,i.jsx)(n.strong,{children:"Create a Chain Signature - how the derivation is implemented"})})," for an example implementation"]})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"multichain-smart-contract",children:"Multichain Smart Contract"}),"\n",(0,i.jsx)(n.p,{children:"A deployed multichain smart contract is used to request signatures for transactions on other blockchains."}),"\n",(0,i.jsxs)(n.p,{children:["This contract has a ",(0,i.jsx)(n.code,{children:"sign"})," method that takes two parameters:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"payload"})," (transaction) to be signed for the target blockchain"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"path"})," that identifies the account you want to use to sign the transaction."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, a user could request a signature to ",(0,i.jsx)(n.code,{children:"send 0.1 ETH to 0x060f1..."})," ",(0,i.jsx)(n.strong,{children:"(transaction)"})," using the ",(0,i.jsx)(n.code,{children:"ethereum-1"})," account ",(0,i.jsx)(n.strong,{children:"(path)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["After a request is made, the ",(0,i.jsx)(n.code,{children:"sign"})," method starts recursively calling itself to wait while the ",(0,i.jsx)(n.a,{href:"#multi-party-computation-service-mpc",children:"MPC signing service"})," signs the transaction."]}),"\n",(0,i.jsx)(n.p,{children:"Once the signature is ready, the contract gains access to it and returns it to the user. This signature is a valid signed transaction that can be readily sent to the target blockchain to be executed."}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:" A Contract Recursively Calling Itself? "}),(0,i.jsx)(n.p,{children:"NEAR smart contracts are unable to halt execution and await the completion of a process. To solve this, one can make the contract call itself again and again checking on each iteration to see if the result is ready."}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," Each call will take one block which equates to ~1 second of waiting. After some time the contract will either return a result that an external party provided or return an error running out of GAS waiting."]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/build/chain-abstraction/chain-signatures#3-requesting-the-signature",children:(0,i.jsx)(n.strong,{children:"Create a Chain Signature - requesting the signature"})})," for an example implementation"]})}),"\n",(0,i.jsx)("hr",{class:"subsection"}),"\n",(0,i.jsx)(n.h3,{id:"multi-party-computation-service",children:"Multi-Party Computation Service"}),"\n",(0,i.jsx)(n.p,{children:"The essence of Multi-Party Computation (MPC) is to enable independent parties to perform shared computations on private information without revealing secrets to each other. In practice, this system can be used with blockchain platforms to safely sign a transaction on behalf of a user without ever having to expose a private key."}),"\n",(0,i.jsxs)(n.p,{children:["NEAR's MPC service is comprised of several independent nodes, ",(0,i.jsx)(n.strong,{children:"none of which can sign by itself"}),", but instead create ",(0,i.jsx)(n.strong,{children:"signature-shares"})," that are ",(0,i.jsx)(n.strong,{children:"aggregated through multiple rounds"})," to ",(0,i.jsx)(n.strong,{children:"jointly"})," sign a transaction."]}),"\n",(0,i.jsxs)(n.p,{children:["This service continuously listens for signature requests (i.e. users calling the ",(0,i.jsx)(n.code,{children:"sign"})," method on the ",(0,i.jsx)(n.code,{children:"multichain"})," smart contract) and when a call is detected the MPC service:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Asks its nodes to jointly derive a signature for the ",(0,i.jsx)(n.code,{children:"payload"})," using the account identified by the ",(0,i.jsx)(n.code,{children:"path"})]}),"\n",(0,i.jsxs)(n.li,{children:["Once complete, call the ",(0,i.jsx)(n.code,{children:"multichain"})," contract to store the resulting ",(0,i.jsx)(n.code,{children:"Signature"})]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"A Custom MPC Service",type:"info",children:[(0,i.jsx)(n.p,{children:"Generally, MPC signing services work by sharing a master key, which needs to be re-created each time a node joins or leaves."}),(0,i.jsx)(n.p,{children:"NEAR's MPC service allows for nodes to safely join and leave, without needing to re-derive a master key"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Want to learn more about the mathematics that enable MPC? ",(0,i.jsx)(n.a,{href:"https://www.zellic.io/blog/mpc-from-scratch/",children:(0,i.jsx)(n.strong,{children:"Check this awesome article"})})]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"concluding-remarks",children:"Concluding Remarks"}),"\n",(0,i.jsx)(n.p,{children:"Chain Signatures are a powerful tool that allows NEAR accounts to control accounts on other blockchains. This is a fundamental step towards enabling true ownership of cross-chain data and assets."}),"\n",(0,i.jsxs)(n.p,{children:["For the user, the process is made completely ",(0,i.jsx)(n.strong,{children:"on chain"}),", since they only need to make a call to a smart contract and wait for the response."]}),"\n",(0,i.jsxs)(n.p,{children:["Thanks to ",(0,i.jsx)(n.code,{children:"derivation paths"}),", a single NEAR account can control ",(0,i.jsx)(n.strong,{children:"multiple accounts"})," on different blockchains, and thanks to the MPC service, the user can be sure that ",(0,i.jsx)(n.strong,{children:"nobody but themselves"})," can request signatures for those accounts."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},81530:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/chain-signatures-overview-6f4d63597857c1a140fc0196475caa0f.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);