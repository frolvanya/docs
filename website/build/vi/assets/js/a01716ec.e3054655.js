"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[177],{99874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var s=t(85893),r=t(11151),c=t(74866),a=t(85162);const i={id:"environment",title:"Environment"},d=void 0,l={id:"build/smart-contracts/anatomy/environment",title:"Environment",description:"Every method execution has an environment associated with information such as:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/environment.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/environment",permalink:"/vi/build/smart-contracts/anatomy/environment",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/environment.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"environment",title:"Environment"},sidebar:"build",previous:{title:"Collections",permalink:"/vi/build/smart-contracts/anatomy/collections"},next:{title:"Transfers & Actions",permalink:"/vi/build/smart-contracts/anatomy/actions"}},o={},h=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Who is Calling? Who am I?",id:"who-is-calling-who-am-i",level:2},{value:"Current Account",id:"current-account",level:3},{value:"Predecessor and Signer",id:"predecessor-and-signer",level:3},{value:"Balances and Attached NEAR",id:"balances-and-attached-near",level:2},{value:"Attached Deposit",id:"attached-deposit",level:3},{value:"Account Balance",id:"account-balance",level:3},{value:"Storage Used",id:"storage-used",level:3},{value:"Telling the Time",id:"telling-the-time",level:2},{value:"Timestamp",id:"timestamp",level:3},{value:"Current Epoch",id:"current-epoch",level:3},{value:"Block Index",id:"block-index",level:3},{value:"Gas",id:"gas",level:2},{value:"Prepaid Gas",id:"prepaid-gas",level:3},{value:"Used Gas",id:"used-gas",level:3},{value:"Environment Functions",id:"environment-functions",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Every method execution has an environment associated with information such as:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Who called the method"}),"\n",(0,s.jsx)(n.li,{children:"How much money is attached to the call"}),"\n",(0,s.jsx)(n.li,{children:"How many computational resources are available"}),"\n",(0,s.jsx)(n.li,{children:"The current timestamp"}),"\n",(0,s.jsx)(n.li,{children:"Helper functions for Public Key derivation, for example"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,s.jsx)(a.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable Name"}),(0,s.jsx)(n.th,{children:"SDK Variable"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Predecessor"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.predecessorAccountId()"})}),(0,s.jsx)(n.td,{children:"Account ID that called this method"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Current Account"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.currentAccountId()"})}),(0,s.jsx)(n.td,{children:"Account ID of this smart contract"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Signer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.signerAccountId()"})}),(0,s.jsx)(n.td,{children:"Account ID that signed the transaction leading to this execution"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attached Deposit"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.attachedDeposit()"})}),(0,s.jsx)(n.td,{children:"Amount in NEAR attached to the call by the predecessor"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Account Balance"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.accountBalance()"})}),(0,s.jsx)(n.td,{children:"Balance of this smart contract (including Attached Deposit)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Prepaid Gas"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.prepaidGas()"})}),(0,s.jsx)(n.td,{children:"Amount of gas available for execution"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Timestamp"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.blockTimestamp()"})}),(0,s.jsx)(n.td,{children:"Current timestamp (number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Current Epoch"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.epochHeight()"})}),(0,s.jsx)(n.td,{children:"Current epoch in the blockchain"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Block Index"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.blockIndex()"})}),(0,s.jsx)(n.td,{children:"Current block index (a.k.a. block height)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Storage Used"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.storageUsage()"})}),(0,s.jsx)(n.td,{children:"Current storage used by this smart contract"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Used Gas"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.usedGas()"})}),(0,s.jsx)(n.td,{children:"Amount of gas used for execution"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Signer Public Key"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.signerAccountPk()"})}),(0,s.jsx)(n.td,{children:"Sender Public Key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Account Locked Balance"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.accountLockedBalance()"})}),(0,s.jsx)(n.td,{children:"Balance of this smart contract that is locked"})]})]})]})}),(0,s.jsx)(a.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable Name"}),(0,s.jsx)(n.th,{children:"SDK Variable"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Predecessor"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::predecessor_account_id()"})}),(0,s.jsx)(n.td,{children:"Account ID that called this method"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Current Account"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::current_account_id()"})}),(0,s.jsx)(n.td,{children:"Account ID of this smart contract"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Signer"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::signer_account_id()"})}),(0,s.jsx)(n.td,{children:"Account ID that signed the transaction leading to this execution"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Attached Deposit"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::attached_deposit()"})}),(0,s.jsx)(n.td,{children:"Amount in NEAR attached to the call by the predecessor"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Account Balance"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::account_balance()"})}),(0,s.jsx)(n.td,{children:"Balance of this smart contract (including Attached Deposit)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Prepaid Gas"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::prepaid_gas()"})}),(0,s.jsx)(n.td,{children:"Amount of gas available for execution"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Timestamp"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::block_timestamp()"})}),(0,s.jsx)(n.td,{children:"Current timestamp (number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Current Epoch"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::epoch_height()"})}),(0,s.jsx)(n.td,{children:"Current epoch in the blockchain"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Block Index"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::block_index()"})}),(0,s.jsx)(n.td,{children:"Current block index (a.k.a. block height)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Storage Used"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::storage_usage()"})}),(0,s.jsx)(n.td,{children:"Current storage used by this smart contract in bytes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Storage Byte Cost"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::storage_byte_cost()"})}),(0,s.jsx)(n.td,{children:"Current storage cost per byte in yoctoNEAR"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Used Gas"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::used_gas()"})}),(0,s.jsx)(n.td,{children:"Amount of gas used for execution"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Signer Public Key"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::signer_account_pk()"})}),(0,s.jsx)(n.td,{children:"Sender Public Key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Account Locked Balance"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::account_locked_balance()"})}),(0,s.jsx)(n.td,{children:"Balance of this smart contract that is locked"})]})]})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"who-is-calling-who-am-i",children:"Who is Calling? Who am I?"}),"\n",(0,s.jsxs)(n.p,{children:["The environment gives you access to 3 important users: the ",(0,s.jsx)(n.code,{children:"current_account"}),", the ",(0,s.jsx)(n.code,{children:"predecessor"}),", and the ",(0,s.jsx)(n.code,{children:"signer"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"current-account",children:"Current Account"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"current_account"})," contains the address in which your contract is deployed. This is very useful to implement ownership, e.g. making a public method only callable by the contract itself."]}),"\n",(0,s.jsx)(n.h3,{id:"predecessor-and-signer",children:"Predecessor and Signer"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"predecessor"})," is the account that called the method in the contract. Meanwhile, the ",(0,s.jsx)(n.code,{children:"signer"})," is the account that ",(0,s.jsx)(n.em,{children:"signed"})," the initial transaction."]}),"\n",(0,s.jsxs)(n.p,{children:["During a simple transaction (no ",(0,s.jsx)(n.a,{href:"/vi/build/smart-contracts/anatomy/crosscontract",children:"cross-contract calls"}),") the ",(0,s.jsx)(n.code,{children:"predecessor"})," is the same as the ",(0,s.jsx)(n.code,{children:"signer"}),". For example, if ",(0,s.jsx)(n.strong,{children:"alice.near"})," calls ",(0,s.jsx)(n.strong,{children:"contract.near"}),", from the contract's perspective, ",(0,s.jsx)(n.strong,{children:"alice.near"})," is both the ",(0,s.jsx)(n.code,{children:"signer"})," and the ",(0,s.jsx)(n.code,{children:"predecessor"}),". However, if ",(0,s.jsx)(n.strong,{children:"contract.near"})," creates a ",(0,s.jsx)(n.a,{href:"/vi/build/smart-contracts/anatomy/crosscontract",children:"cross-contract call"}),", then the ",(0,s.jsx)(n.code,{children:"predecessor"})," changes down the line. In the example below, when ",(0,s.jsx)(n.strong,{children:"pool.near"})," executes, it would see ",(0,s.jsx)(n.strong,{children:"contract.near"})," as the ",(0,s.jsx)(n.code,{children:"predecessor"})," and ",(0,s.jsx)(n.strong,{children:"alice.near"})," as the ",(0,s.jsx)(n.code,{children:"signer"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://miro.medium.com/max/1400/1*LquSNOoRyXpITQF9ugsDpQ.png",alt:"img"}),"\n",(0,s.jsx)(n.em,{children:"You can access information about the users interacting with your smart contract"})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["In most scenarios you will ",(0,s.jsx)(n.strong,{children:"only need to know the predecessor"}),". However, there are situations in which the signer is very useful. For example, when adding ",(0,s.jsx)(n.a,{href:"/vi/build/primitives/nft",children:"NFTs"})," into ",(0,s.jsx)(n.a,{href:"https://github.com/near-examples/nft-tutorial/blob/7fb267b83899d1f65f1bceb71804430fab62c7a7/market-contract/src/nft_callbacks.rs#L42",children:"this marketplace"}),", the contract checks that the ",(0,s.jsx)(n.code,{children:"signer"}),", i.e. the person who generated the transaction chain, is the NFT owner."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"balances-and-attached-near",children:"Balances and Attached NEAR"}),"\n",(0,s.jsxs)(n.p,{children:["The environment gives you access to 3 token-related parameters, all expressed in yoctoNEAR (1 \u24c3 = 10",(0,s.jsx)("sup",{children:"24"}),"y\u24c3):"]}),"\n",(0,s.jsx)(n.h3,{id:"attached-deposit",children:"Attached Deposit"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"attached_deposit"})," represents the amount of yoctoNEAR the predecessor attached to the call."]}),"\n",(0,s.jsxs)(n.p,{children:["This amount is ",(0,s.jsx)(n.strong,{children:"already deposited"})," in your contract's account, and is ",(0,s.jsx)(n.strong,{children:"automatically returned"})," to the ",(0,s.jsx)(n.code,{children:"predecessor"})," if your ",(0,s.jsx)(n.strong,{children:"method panics"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["If you make a ",(0,s.jsx)(n.a,{href:"/vi/build/smart-contracts/anatomy/crosscontract",children:"cross-contract call"})," and it panics, the funds are sent back to ",(0,s.jsx)(n.strong,{children:"your contract"}),". See how to handle this situation in the ",(0,s.jsx)(n.a,{href:"/vi/build/smart-contracts/anatomy/crosscontract#failed-execution",children:"callback section"})]})}),"\n",(0,s.jsx)(n.h3,{id:"account-balance",children:"Account Balance"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"account_balance"})," represents the balance of your contract (",(0,s.jsx)(n.code,{children:"current_account"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["It includes the ",(0,s.jsx)(n.code,{children:"attached_deposit"}),", since it was deposited when the method execution started."]}),"\n",(0,s.jsxs)(n.p,{children:["If the contract has any locked $NEAR, it will appear in ",(0,s.jsx)(n.code,{children:"account_locked_balance"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"storage-used",children:"Storage Used"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"storage_used"})," represents the amount of ",(0,s.jsx)(n.a,{href:"/vi/build/smart-contracts/anatomy/storage",children:"storage"})," that is currently being used by your contract."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"If you want to know how much storage a structure uses, print the storage before and after storing it."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"telling-the-time",children:"Telling the Time"}),"\n",(0,s.jsx)(n.p,{children:"The environment exposes three different ways to tell the pass of time, each representing a different dimension of the underlying blockchain."}),"\n",(0,s.jsx)(n.h3,{id:"timestamp",children:"Timestamp"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"timestamp"})," attribute represents the approximated ",(0,s.jsx)(n.strong,{children:"UNIX timestamp"})," at which this call was executed. It quantifies time passing in a human way, enabling to check if a specific date has passed or not."]}),"\n",(0,s.jsx)(n.h3,{id:"current-epoch",children:"Current Epoch"}),"\n",(0,s.jsxs)(n.p,{children:["The NEAR blockchain groups blocks in ",(0,s.jsx)(n.a,{href:"/vi/concepts/basics/epoch",children:"Epochs"}),". The ",(0,s.jsx)(n.code,{children:"current_epoch"})," attribute measures how many epochs have passed so far. It is very useful to coordinate with other contracts that measure time in epochs, such as the ",(0,s.jsx)(n.a,{href:"/vi/concepts/basics/validators",children:"validators"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"block-index",children:"Block Index"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"block_index"})," represents the index of the block in which this transaction will be added to the blockchain."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"gas",children:"Gas"}),"\n",(0,s.jsxs)(n.p,{children:["Your contract has a ",(0,s.jsx)(n.strong,{children:"limited number of computational resources"})," to use on each call. Such resources are measured in ",(0,s.jsx)(n.a,{href:"/concepts/protocol/gas",children:"Gas"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Gas can be thought of as wall time, where 1 PetaGas (1_000 TGas) is ~1 second of compute time."}),"\n",(0,s.jsxs)(n.p,{children:["Each code instruction costs a certain amount of Gas, and if you run out of it, the execution halts with the error message ",(0,s.jsx)(n.code,{children:"Exceeded the prepaid gas"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The environment gives you access to two gas-related arguments: ",(0,s.jsx)(n.code,{children:"prepaid_gas"})," and ",(0,s.jsx)(n.code,{children:"used_gas"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"prepaid-gas",children:"Prepaid Gas"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"prepaid_gas"})," represents the amount of Gas the ",(0,s.jsx)(n.code,{children:"predecessor"})," attached to this call. It cannot exceed the limit 300TGas (300 * 10",(0,s.jsx)("sup",{children:"12"})," Gas)."]}),"\n",(0,s.jsx)(n.h3,{id:"used-gas",children:"Used Gas"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"used_gas"})," contains the amount of Gas that has been used so far. It is useful to estimate the Gas cost of running a method."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["During ",(0,s.jsx)(n.a,{href:"/vi/build/smart-contracts/anatomy/crosscontract",children:"cross-contract calls"})," always make sure the callback has enough Gas to fully execute."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["If you already ",(0,s.jsx)(n.a,{href:"/vi/concepts/protocol/gas#estimating-costs-for-a-call",children:"estimated the Gas"})," a method needs, you can ensure it never runs out of Gas by using ",(0,s.jsx)(n.code,{children:"assert"})]}),(0,s.jsx)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,s.jsx)(a.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'const REQUIRED_GAS: Gas = Gas(20_000_000_000_000); // 20 TGas\nassert!(env::prepaid_gas() >= REQUIRED_GAS, "Please attach at least 20 TGas");\n'})})})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"environment-functions",children:"Environment Functions"}),"\n",(0,s.jsx)(n.p,{children:"Besides environmental variables, the SDK also exposes some functions to perform basic cryptographic operations"}),"\n",(0,s.jsxs)(c.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,s.jsx)(a.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Function Name"}),(0,s.jsx)(n.th,{children:"SDK method"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SHA 256"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.sha256(value)"})}),(0,s.jsx)(n.td,{children:"Hashes a sequence of bytes using sha256."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Keccak 256"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.keccak256(value)"})}),(0,s.jsx)(n.td,{children:"Hashes a sequence of bytes using keccak256."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Keccak 512"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.keccak512(value)"})}),(0,s.jsx)(n.td,{children:"Hashes a sequence of bytes using keccak512."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RIPEMD 160"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.ripemd160(value)"})}),(0,s.jsx)(n.td,{children:"Hashes the bytes using the RIPEMD-160 hash function."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"EC Recover"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.ecrecover(hash, sig, v, malleabilityFlag)"})}),(0,s.jsxs)(n.td,{children:["Recovers an ECDSA signer address from a 32-byte message ",(0,s.jsx)(n.code,{children:"hash"})," and a corresponding ",(0,s.jsx)(n.code,{children:"signature"})," along with ",(0,s.jsx)(n.code,{children:"v"})," recovery byte. Takes in an additional flag to check for malleability of the signature which is generally only ideal for transactions. Returns 64 bytes representing the public key if the recovery was successful."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Log String"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.log(msg)"})}),(0,s.jsx)(n.td,{children:"Logs the string message. This message is stored on chain."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Validator Stake"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.validatorStake(accountId)"})}),(0,s.jsx)(n.td,{children:"For a given account return its current stake. If the account is not a validator, returns 0."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Validator Total Stake"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"near.validatorTotalStake()"})}),(0,s.jsx)(n.td,{children:"Returns the total stake of validators in the current epoch."})]})]})]})}),(0,s.jsx)(a.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Function Name"}),(0,s.jsx)(n.th,{children:"SDK method"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SHA 256"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::sha256(value)"})}),(0,s.jsx)(n.td,{children:"Hashes a sequence of bytes using sha256."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Keccak 256"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::keccak256(value)"})}),(0,s.jsx)(n.td,{children:"Hashes a sequence of bytes using keccak256."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Keccak 512"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::keccak512(value)"})}),(0,s.jsx)(n.td,{children:"Hashes a sequence of bytes using keccak512."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SHA 256 (Array)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::sha256_array(value)"})}),(0,s.jsx)(n.td,{children:"Hashes the bytes using the SHA-256 hash function. This returns a 32 byte hash."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Keccak 256 (Array)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::keccak256_array(value)"})}),(0,s.jsx)(n.td,{children:"Hashes the bytes using the Keccak-256 hash function. This returns a 32 byte hash."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Keccak 512 (Array)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::keccak512_array(value)"})}),(0,s.jsx)(n.td,{children:"Hashes the bytes using the Keccak-512 hash function. This returns a 64 byte hash."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RIPEMD 160 (Array)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::ripemd160_array(value)"})}),(0,s.jsx)(n.td,{children:"Hashes the bytes using the RIPEMD-160 hash function. This returns a 20 byte hash."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"EC Recover"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::ecrecover(hash, signature, v, malleability_flag)"})}),(0,s.jsxs)(n.td,{children:["Recovers an ECDSA signer address from a 32-byte message ",(0,s.jsx)(n.code,{children:"hash"})," and a corresponding ",(0,s.jsx)(n.code,{children:"signature"})," along with ",(0,s.jsx)(n.code,{children:"v"})," recovery byte. Takes in an additional flag to check for malleability of the signature which is generally only ideal for transactions. Returns 64 bytes representing the public key if the recovery was successful."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Panic String"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::panic_str(message)"})}),(0,s.jsx)(n.td,{children:"Terminates the execution of the program with the UTF-8 encoded message."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Log String"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::log_str(message)"})}),(0,s.jsx)(n.td,{children:"Logs the string message. This message is stored on chain."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Validator Stake"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::validator_stake(account_id)"})}),(0,s.jsx)(n.td,{children:"For a given account return its current stake. If the account is not a validator, returns 0."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Validator Total Stake"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"env::validator_total_stake()"})}),(0,s.jsx)(n.td,{children:"Returns the total stake of validators in the current epoch."})]})]})]})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["In the JS SDK, ",(0,s.jsx)(n.code,{children:'throw new Error("message")'})," mimics the behavior of Rust's ",(0,s.jsx)(n.code,{children:'env::panic_str("message")'}),"."]})}),"\n",(0,s.jsx)(n.hr,{})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var s=t(36905);const r={tabItem:"tabItem_Ymn6"};var c=t(85893);function a(e){var n=e.children,t=e.hidden,a=e.className;return(0,c.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var s=t(67294),r=t(36905),c=t(12466),a=t(16550),i=t(20469),d=t(91980),l=t(67392),o=t(50012);function h(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,s.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function x(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,c=(0,a.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:t,groupId:r});return[(0,d._X)(i),(0,s.useCallback)((function(e){if(i){var n=new URLSearchParams(c.location.search);n.set(i,e),c.replace(Object.assign({},c.location,{search:n.toString()}))}}),[i,c])]}function m(e){var n,t,r,c,a=e.defaultValue,d=e.queryString,l=void 0!==d&&d,h=e.groupId,m=u(e),p=(0,s.useState)((function(){return function(e){var n,t=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=s.find((function(e){return e.default})))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:m})})),v=p[0],g=p[1],b=j({queryString:l,groupId:h}),f=b[0],y=b[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,o.Nk)(n),r=t[0],c=t[1],[r,(0,s.useCallback)((function(e){n&&c.set(e)}),[n,c])]),w=k[0],_=k[1],A=function(){var e=null!=f?f:w;return x({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){A&&g(A)}),[A]),{selectedValue:v,selectValue:(0,s.useCallback)((function(e){if(!x({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),_(e)}),[y,_,m]),tabValues:m}}var p=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function b(e){var n=e.className,t=e.block,s=e.selectedValue,a=e.selectValue,i=e.tabValues,d=[],l=(0,c.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var n=e.currentTarget,t=d.indexOf(n),r=i[t].value;r!==s&&(l(n),a(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var s,r=d.indexOf(e.currentTarget)+1;t=null!=(s=d[r])?s:d[0];break;case"ArrowLeft":var c,a=d.indexOf(e.currentTarget)-1;t=null!=(c=d[a])?c:d[d.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,c=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:function(e){return d.push(e)},onKeyDown:h,onClick:o},c,{className:(0,r.Z)("tabs__item",v.tabItem,null==c?void 0:c.className,{"tabs__item--active":s===n}),children:null!=t?t:n}),n)}))})}function f(e){var n=e.lazy,t=e.children,r=e.selectedValue,c=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=c.find((function(e){return e.props.value===r}));return a?(0,s.cloneElement)(a,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(b,Object.assign({},n,e)),(0,g.jsx)(f,Object.assign({},n,e))]})}function k(e){var n=(0,p.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(67294);const r={},c=s.createContext(r);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);