"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8202],{73331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(85893),o=n(11151),s=n(77229);const a={id:"core",title:"Core",sidebar_label:"Core"},i=void 0,l={id:"tutorials/nfts/js/core",title:"Core",description:"In this tutorial you'll learn how to implement the core standards into your smart contract. If you're joining us for the first time, feel free to clone this repo and checkout the 3.enumeration branch to follow along.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/4-core.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/core",permalink:"/zh-CN/tutorials/nfts/js/core",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/4-core.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,sidebarPosition:4,frontMatter:{id:"core",title:"Core",sidebar_label:"Core"},sidebar:"tutorials",previous:{title:"Enumeration",permalink:"/zh-CN/tutorials/nfts/js/enumeration"},next:{title:"Approvals",permalink:"/zh-CN/tutorials/nfts/js/approvals"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Transfer function",id:"transfer-function",level:3},{value:"Internal helper functions",id:"internal-helper-functions",level:3},{value:"assertOneYocto",id:"assertoneyocto",level:4},{value:"internal_transfer",id:"internal_transfer",level:4},{value:"Transfer call function",id:"transfer-call-function",level:3},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Testing the new changes",id:"testing-changes",level:2},{value:"Testing the transfer function",id:"testing-the-transfer-function",level:3},{value:"Testing the transfer call function",id:"testing-the-transfer-call-function",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this tutorial you'll learn how to implement the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"core standards"})," into your smart contract. If you're joining us for the first time, feel free to clone ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial",children:"this repo"})," and checkout the ",(0,r.jsx)(t.code,{children:"3.enumeration"})," branch to follow along."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["The JS-SDK is currently in ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/releases/",children:(0,r.jsx)(t.code,{children:"Alpha"})})}),"."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git checkout 3.enumeration\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["If you wish to see the finished code for this ",(0,r.jsx)(t.em,{children:"Core"})," tutorial, you can find it on the ",(0,r.jsx)(t.code,{children:"4.core"})," branch. :::"]}),(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),(0,r.jsxs)(t.p,{children:["Up until this point, you've created a simple NFT smart contract that allows users to mint tokens and view information using the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration standards"}),". Today, you'll expand your smart contract to allow for users to not only mint tokens, but transfer them as well."]}),(0,r.jsxs)(t.p,{children:["As we did in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/minting",children:"minting tutorial"}),", let's break down the problem into multiple subtasks to make our lives easier. When a token is minted, information is stored in 3 places:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokensPerOwner"}),": set of tokens for each account."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokensById"}),": maps a token ID to a ",(0,r.jsx)(t.code,{children:"Token"})," object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokenMetadataById"}),": maps a token ID to its metadata."]}),"\n"]}),(0,r.jsx)(t.p,{children:"Let's now consider the following scenario. If Benji owns token A and wants to transfer it to Mike as a birthday gift, what should happen? First of all, token A should be removed from Benji's set of tokens and added to Mike's set of tokens."}),(0,r.jsxs)(t.p,{children:["If that's the only logic you implement, you'll run into some problems. If you were to do a ",(0,r.jsx)(t.code,{children:"view"})," call to query for information about that token after it's been transferred to Mike, it would still say that Benji is the owner."]}),(0,r.jsxs)(t.p,{children:["This is because the contract is still mapping the token ID to the old ",(0,r.jsx)(t.code,{children:"Token"})," object that contains the ",(0,r.jsx)(t.code,{children:"owner_id"})," field set to Benji's account ID. You still have to change the ",(0,r.jsx)(t.code,{children:"tokensById"})," data structure so that the token ID maps to a new ",(0,r.jsx)(t.code,{children:"Token"})," object which has Mike as the owner."]}),(0,r.jsx)(t.p,{children:"With that being said, the final process for when an owner transfers a token to a receiver should be the following:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Remove the token from the owner's set."}),"\n",(0,r.jsx)(t.li,{children:"Add the token to the receiver's set."}),"\n",(0,r.jsxs)(t.li,{children:["Map a token ID to a new ",(0,r.jsx)(t.code,{children:"Token"})," object containing the correct owner."]}),"\n"]}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["You might be curious as to why we don't edit the ",(0,r.jsx)(t.code,{children:"tokenMetadataById"})," field. This is because no matter who owns the token, the token ID will always map to the same metadata. The metadata should never change and so we can just leave it alone. :::"]}),(0,r.jsx)(t.p,{children:"At this point, you're ready to move on and make the necessary modifications to your smart contract."}),(0,r.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),(0,r.jsxs)(t.p,{children:["Let's start our journey in the ",(0,r.jsx)(t.code,{children:"nft-contract/src/nft_core.ts"})," file."]}),(0,r.jsx)(t.h3,{id:"transfer-function",children:"Transfer function"}),(0,r.jsxs)(t.p,{children:["You'll start by implementing the ",(0,r.jsx)(t.code,{children:"nft_transfer"})," logic. This function will transfer the specified ",(0,r.jsx)(t.code,{children:"token_id"})," to the ",(0,r.jsx)(t.code,{children:"receiver_id"})," with an optional ",(0,r.jsx)(t.code,{children:"memo"})," such as ",(0,r.jsx)(t.code,{children:'"Happy Birthday Mike!"'}),". The core logic will be found in the ",(0,r.jsx)(t.code,{children:"internalNftTransfer"})," function."]}),(0,r.jsx)(s.Ey,{language:"js",start:"37",end:"64",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts"}),(0,r.jsxs)(t.p,{children:["There are a couple things to notice here. Firstly, we've introduced a new function called ",(0,r.jsx)(t.code,{children:"assertOneYocto()"}),". This method will ensure that the user has attached exactly one yoctoNEAR to the call. If a function requires a deposit, you need a full access key to sign that transaction. By adding the one yoctoNEAR deposit requirement, you're essentially forcing the user to sign the transaction with a full access key."]}),(0,r.jsx)(t.p,{children:"Since the transfer function is potentially transferring very valuable assets, you'll want to make sure that whoever is calling the function has a full access key."}),(0,r.jsxs)(t.p,{children:["Secondly, we've introduced an ",(0,r.jsx)(t.code,{children:"internalTransfer"})," method. This will perform all the logic necessary to transfer an NFT."]}),(0,r.jsx)(t.h3,{id:"internal-helper-functions",children:"Internal helper functions"}),(0,r.jsxs)(t.p,{children:["Let's quickly move over to the ",(0,r.jsx)(t.code,{children:"nft-contract/src/internal.ts"})," file so that you can implement the ",(0,r.jsx)(t.code,{children:"assertOneYocto()"})," and ",(0,r.jsx)(t.code,{children:"internalTransfer"})," methods."]}),(0,r.jsxs)(t.p,{children:["Let's start with the easier one, ",(0,r.jsx)(t.code,{children:"assertOneYocto()"}),"."]}),(0,r.jsx)(t.h4,{id:"assertoneyocto",children:"assertOneYocto"}),(0,r.jsx)(s.Ey,{language:"js",start:"38",end:"41",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts"}),(0,r.jsx)(t.h4,{id:"internal_transfer",children:"internal_transfer"}),(0,r.jsxs)(t.p,{children:["It's now time to implement the ",(0,r.jsx)(t.code,{children:"internalTransfer"})," function which is the core of this tutorial. This function will take the following parameters:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"senderId"}),": the account that's attempting to transfer the token."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"receiverId"}),": the account that's receiving the token."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokenId"}),": the token ID being transferred."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"memo"}),": an optional memo to include."]}),"\n"]}),(0,r.jsxs)(t.p,{children:["The first thing you'll want to do is to make sure that the sender is authorized to transfer the token. In this case, you'll just make sure that the sender is the owner of the token. You'll do that by getting the ",(0,r.jsx)(t.code,{children:"Token"})," object using the ",(0,r.jsx)(t.code,{children:"token_id"})," and making sure that the sender is equal to the token's ",(0,r.jsx)(t.code,{children:"owner_id"}),"."]}),(0,r.jsxs)(t.p,{children:["Second, you'll remove the token ID from the sender's list and add the token ID to the receiver's list of tokens. Finally, you'll create a new ",(0,r.jsx)(t.code,{children:"Token"})," object with the receiver as the owner and remap the token ID to that newly created object."]}),(0,r.jsx)(s.Ey,{language:"js",start:"80",end:"114",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts"}),(0,r.jsxs)(t.p,{children:["You've previously implemented functionality for adding a token ID to an owner's set but you haven't created the functionality for removing a token ID from an owner's set. Let's do that now by created a new function called ",(0,r.jsx)(t.code,{children:"internalRemoveTokenFromOwner"})," which we'll place right above our ",(0,r.jsx)(t.code,{children:"internalTransfer"})," and below the ",(0,r.jsx)(t.code,{children:"internalAddTokenToOwner"})," function."]}),(0,r.jsxs)(t.p,{children:["In the remove function, you'll get the set of tokens for a given account ID and then remove the passed in token ID. If the account's set is empty after the removal, you'll simply remove the account from the ",(0,r.jsx)(t.code,{children:"tokensPerOwner"})," data structure."]}),(0,r.jsx)(s.Ey,{language:"js",start:"60",end:"78",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts"}),(0,r.jsxs)(t.p,{children:["With these internal functions complete, the logic for transferring NFTs is finished. It's now time to move on and implement ",(0,r.jsx)(t.code,{children:"nft_transfer_call"}),", one of the most integral yet complicated functions of the standard."]}),(0,r.jsx)(t.h3,{id:"transfer-call-function",children:"Transfer call function"}),(0,r.jsxs)(t.p,{children:["Let's consider the following scenario. An account wants to transfer an NFT to a smart contract for performing a service. The traditional approach would be to use an approval management system, where the receiving contract is granted the ability to transfer the NFT to themselves after completion. You'll learn more about the approval management system in the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/approvals",children:"approvals section"})," of the tutorial series."]}),(0,r.jsx)(t.p,{children:"This allowance workflow takes multiple transactions. If we introduce a \u201ctransfer and call\u201d workflow baked into a single transaction, the process can be greatly improved."}),(0,r.jsxs)(t.p,{children:["For this reason, we have a function ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," which will transfer an NFT to a receiver and also call a method on the receiver's contract all in the same transaction."]}),(0,r.jsx)(s.Ey,{language:"js",start:"66",end:"125",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts"}),(0,r.jsxs)(t.p,{children:["The function will first assert that the caller attached exactly 1 yocto for security purposes. It will then transfer the NFT using ",(0,r.jsx)(t.code,{children:"internalTransfer"})," and start the cross contract call. It will call the method ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," on the ",(0,r.jsx)(t.code,{children:"receiver_id"}),"'s contract which returns a promise. After the promise finishes executing, the function ",(0,r.jsx)(t.code,{children:"nft_resolve_transfer"})," is called. This is a very common workflow when dealing with cross contract calls. You first initiate the call and wait for it to finish executing. You then invoke a function that resolves the result of the promise and act accordingly."]}),(0,r.jsxs)(t.p,{children:["In our case, when calling ",(0,r.jsx)(t.code,{children:"nft_on_transfer"}),", that function will return whether or not you should return the NFT to it's original owner in the form of a boolean. This is logic will be executed in the ",(0,r.jsx)(t.code,{children:"internalResolveTransfer"})," function."]}),(0,r.jsx)(s.Ey,{language:"js",start:"127",end:"187",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts"}),(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," returned true, you should send the token back to it's original owner. On the contrary, if false was returned, no extra logic is needed. As for the return value of ",(0,r.jsx)(t.code,{children:"nft_resolve_transfer"}),", the standard dictates that the function should return a boolean indicating whether or not the receiver successfully received the token or not."]}),(0,r.jsxs)(t.p,{children:["This means that if ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," returned true, you should return false. This is because if the token is being returned to its original owner. The ",(0,r.jsx)(t.code,{children:"receiver_id"})," didn't successfully receive the token in the end. On the contrary, if ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," returned false, you should return true since we don't need to return the token and thus the ",(0,r.jsx)(t.code,{children:"receiver_id"})," successfully owns the token."]}),(0,r.jsx)(t.p,{children:"With that finished, you've now successfully added the necessary logic to allow users to transfer NFTs. It's now time to deploy and do some testing."}),(0,r.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),(0,r.jsx)(t.p,{children:"Using the build script, build and deploy the contract as you did in the previous tutorials:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n"})}),(0,r.jsxs)(t.p,{children:["This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,r.jsx)(t.code,{children:"y"})," and hit enter."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["If you haven't completed the previous tutorials and are just following along with this one, simply create an account and login with your CLI using ",(0,r.jsx)(t.code,{children:"near login"}),". You can then export an environment variable ",(0,r.jsx)(t.code,{children:"export NFT_CONTRACT_ID=YOUR_ACCOUNT_ID_HERE"}),". :::"]}),(0,r.jsx)(t.h2,{id:"testing-changes",children:"Testing the new changes"}),(0,r.jsxs)(t.p,{children:["Now that you've deployed a patch fix to the contract, it's time to move onto testing. Using the previous NFT contract where you had minted a token to yourself, you can test the ",(0,r.jsx)(t.code,{children:"nft_transfer"})," method. If you transfer the NFT, it should be removed from your account's collectibles displayed in the wallet. In addition, if you query any of the enumeration functions, it should show that you are no longer the owner."]}),(0,r.jsxs)(t.p,{children:["Let's test this out by transferring an NFT to the account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," and seeing if the NFT is no longer owned by you."]}),(0,r.jsx)(t.h3,{id:"testing-the-transfer-function",children:"Testing the transfer function"}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["This means that the NFT won't be recoverable unless the account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," transfers it back to you. If you don't want your NFT lost, make a new account and transfer the token to that account instead. :::"]}),(0,r.jsxs)(t.p,{children:["If you run the following command, it will transfer the token ",(0,r.jsx)(t.code,{children:'"token-1"'})," to the account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," with the memo ",(0,r.jsx)(t.code,{children:'"Go Team :)"'}),". Take note that you're also attaching exactly 1 yoctoNEAR by using the ",(0,r.jsx)(t.code,{children:"--depositYocto"})," flag."]}),(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["If you used a different token ID in the previous tutorials, replace ",(0,r.jsx)(t.code,{children:"token-1"})," with your token ID. :::"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "token-1", "memo": "Go Team :)"}\' --accountId $NFT_CONTRACT_ID --depositYocto 1\n'})}),(0,r.jsxs)(t.p,{children:["If you now query for all the tokens owned by your account, that token should be missing. Similarly, if you query for the list of tokens owned by ",(0,r.jsx)(t.code,{children:"benjiman.testnet"}),", that account should now own your NFT."]}),(0,r.jsx)(t.h3,{id:"testing-the-transfer-call-function",children:"Testing the transfer call function"}),(0,r.jsxs)(t.p,{children:["Now that you've tested the ",(0,r.jsx)(t.code,{children:"nft_transfer"})," function, it's time to test the ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," function. If you try to transfer an NFT to a receiver that does ",(0,r.jsx)(t.strong,{children:"not"})," implement the ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," function, the contract will panic and the NFT will ",(0,r.jsx)(t.strong,{children:"not"})," be transferred. Let's test this functionality below."]}),(0,r.jsx)(t.p,{children:"First mint a new NFT that will be used to test the transfer call functionality."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_mint \'{"token_id": "token-2", "metadata": {"title": "NFT Tutorial Token", "description": "Testing the transfer call function", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$NFT_CONTRACT_ID\'"}\' --accountId $NFT_CONTRACT_ID --amount 0.1\n'})}),(0,r.jsxs)(t.p,{children:["Now that you've minted the token, you can try to transfer the NFT to the account ",(0,r.jsx)(t.code,{children:"no-contract.testnet"})," which as the name suggests, doesn't have a contract. This means that the receiver doesn't implement the ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," function and the NFT should remain yours after the transaction is complete."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_transfer_call \'{"receiver_id": "no-contract.testnet", "token_id": "token-2", "msg": "foo"}\' --accountId $NFT_CONTRACT_ID --depositYocto 1 --gas 200000000000000\n'})}),(0,r.jsxs)(t.p,{children:["If you query for your tokens, you should still have ",(0,r.jsx)(t.code,{children:"token-2"})," and at this point, you're finished!"]}),(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),(0,r.jsxs)(t.p,{children:["In this tutorial, you learned how to expand an NFT contract past the minting functionality and you added ways for users to transfer NFTs. You ",(0,r.jsx)(t.a,{href:"#introduction",children:"broke down"})," the problem into smaller, more digestible subtasks and took that information and implemented both the ",(0,r.jsx)(t.a,{href:"#transfer-function",children:"NFT transfer"})," and ",(0,r.jsx)(t.a,{href:"#transfer-call-function",children:"NFT transfer call"})," functions. In addition, you deployed another ",(0,r.jsx)(t.a,{href:"#redeploying-contract",children:"patch fix"})," to your smart contract and ",(0,r.jsx)(t.a,{href:"#testing-changes",children:"tested"})," the transfer functionality."]}),(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/approvals",children:"next tutorial"}),", you'll learn about the approval management system and how you can approve others to transfer tokens on your behalf."]}),(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Enumeration standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})]})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>a});n(67294);var r=n(36905);const o={tabItem:"tabItem_Ymn6"};var s=n(85893);function a(e){var t=e.children,n=e.hidden,a=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),o=n(36905),s=n(12466),a=n(16550),i=n(20469),l=n(91980),c=n(67392),d=n(50012);function h(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function u(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,s=(0,a.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:o});return[(0,l._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function p(e){var t,n,o,s,a=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,p=u(e),j=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:p})})),x=j[0],y=j[1],g=m({queryString:c,groupId:h}),v=g[0],b=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,d.Nk)(t),o=n[0],s=n[1],[o,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],T=w[1],I=function(){var e=null!=v?v:k;return f({value:e,tabValues:p})?e:null}();return(0,i.Z)((function(){I&&y(I)}),[I]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);y(e),b(e),T(e)}),[b,T,p]),tabValues:p}}var j=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function g(e){var t=e.className,n=e.block,r=e.selectedValue,a=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==r&&(c(t),a(o))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,o=l.indexOf(e.currentTarget)+1;n=null!=(r=l[o])?r:l[0];break;case"ArrowLeft":var s,a=l.indexOf(e.currentTarget)-1;n=null!=(s=l[a])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,o=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=s.find((function(e){return e.props.value===o}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function b(e){var t=p(e);return(0,y.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,y.jsx)(g,Object.assign({},e,t)),(0,y.jsx)(v,Object.assign({},e,t))]})}function w(e){var t=(0,j.Z)();return(0,y.jsx)(b,Object.assign({},e,{children:h(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>d,O2:()=>l,SQ:()=>c});n(67294);var r=n(74866),o=n(85162),s=n(95665),a=n.n(s),i=n(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,i.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,i.jsx)(o.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),o=n.start,s=n.end,a=n.fname;if(e.type===d)return d({url:r,start:o,end:s,language:t,fname:a});return e}(e,n)})),1==t.length?(0,i.jsx)(o.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,i.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,i.jsx)(o.Z,{value:t,label:e.props.fname,children:e})}))})}function d(e){var t=e.url,n=e.start,r=e.end,o=e.language,s=e.fname,l=t+"#";return n&&r&&(l+="L"+n+"-L"+r+"#"),(0,i.jsx)(a(),{language:o,fname:s,children:l})}}}]);