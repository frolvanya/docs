"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5877],{19288:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=e(85893),c=e(11151),i=e(77229);const a={id:"core",title:"Core",sidebar_label:"Core"},s=void 0,o={id:"tutorials/nfts/js/core",title:"Core",description:"In this tutorial you'll learn how to implement the core standards into your smart contract. N\u1ebfu b\u1ea1n tham gia v\u1edbi ch\xfang t\xf4i l\u1ea7n \u0111\u1ea7u, \u0111\u1eebng ng\u1ea1i clone repo n\xe0y v\xe0 checkout branch 3.enumeration \u0111\u1ec3 theo d\xf5i.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/4-core.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/core",permalink:"/vi/tutorials/nfts/js/core",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/4-core.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,sidebarPosition:4,frontMatter:{id:"core",title:"Core",sidebar_label:"Core"},sidebar:"tutorials",previous:{title:"Enumeration",permalink:"/vi/tutorials/nfts/js/enumeration"},next:{title:"Approval",permalink:"/vi/tutorials/nfts/js/approvals"}},l={},h=[{value:"Gi\u1edbi thi\u1ec7u",id:"introduction",level:2},{value:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract",id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",level:2},{value:"Transfer function",id:"transfer-function",level:3},{value:"C\xe1c internal helper function",id:"c\xe1c-internal-helper-function",level:3},{value:"assertOneYocto",id:"assertoneyocto",level:4},{value:"internal_transfer",id:"internal_transfer",level:4},{value:"Transfer call function",id:"transfer-call-function",level:3},{value:"Redeploy contract",id:"redeploying-contract",level:2},{value:"Test c\xe1c thay \u0111\u1ed5i m\u1edbi",id:"testing-changes",level:2},{value:"Test transfer function",id:"test-transfer-function",level:3},{value:"Test transfer call function",id:"test-transfer-call-function",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}];function d(n){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this tutorial you'll learn how to implement the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"core standards"})," into your smart contract. N\u1ebfu b\u1ea1n tham gia v\u1edbi ch\xfang t\xf4i l\u1ea7n \u0111\u1ea7u, \u0111\u1eebng ng\u1ea1i clone ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial",children:"repo n\xe0y"})," v\xe0 checkout branch ",(0,r.jsx)(t.code,{children:"3.enumeration"})," \u0111\u1ec3 theo d\xf5i."]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["The JS-SDK is currently in ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/releases/",children:(0,r.jsx)(t.code,{children:"Alpha"})})}),"."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git checkout 3.enumeration\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["If you wish to see the finished code for this ",(0,r.jsx)(t.em,{children:"Core"})," tutorial, you can find it on the ",(0,r.jsx)(t.code,{children:"4.core"})," branch. :::"]}),(0,r.jsx)(t.h2,{id:"introduction",children:"Gi\u1edbi thi\u1ec7u"}),(0,r.jsxs)(t.p,{children:["Up until this point, you've created a simple NFT smart contract that allows users to mint tokens and view information using the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration standards"}),". H\xf4m nay, b\u1ea1n s\u1ebd m\u1edf r\u1ed9ng smart contract c\u1ee7a m\xecnh \u0111\u1ec3 cho ph\xe9p c\xe1c user kh\xf4ng ch\u1ec9 mint token m\xe0 c\xf2n transfer ch\xfang."]}),(0,r.jsxs)(t.p,{children:["Nh\u01b0 ch\xfang ta \u0111\xe3 th\u1ef1c hi\u1ec7n trong ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/minting",children:"h\u01b0\u1edbng d\u1eabn mint"}),", h\xe3y chia nh\u1ecf v\u1ea5n \u0111\u1ec1 th\xe0nh nhi\u1ec1u c\xe1c subtask \u0111\u1ec3 d\u1ec5 gi\u1ea3i quy\u1ebft h\u01a1n. Khi m\u1ed9t token \u0111\u01b0\u1ee3c mint, th\xf4ng tin \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef \u1edf 3 n\u01a1i:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokensPerOwner"}),": set of tokens for each account."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokensById"}),": maps a token ID to a ",(0,r.jsx)(t.code,{children:"Token"})," object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokenMetadataById"}),": maps a token ID to its metadata."]}),"\n"]}),(0,r.jsx)(t.p,{children:"B\xe2y gi\u1edd h\xe3y xem x\xe9t t\xecnh hu\u1ed1ng sau \u0111\xe2y. N\u1ebfu Benji l\xe0 ng\u01b0\u1eddi s\u1edf h\u1eefu token A v\xe0 mu\u1ed1n chuy\u1ec3n n\xf3 cho Mike nh\u01b0 m\u1ed9t m\xf3n qu\xe0 sinh nh\u1eadt, \u0111i\u1ec1u g\xec s\u1ebd x\u1ea3y ra? \u0110\u1ea7u ti\xean, token A s\u1ebd b\u1ecb x\xf3a kh\u1ecfi t\u1eadp c\xe1c token c\u1ee7a Benji v\xe0 \u0111\u01b0\u1ee3c th\xeam v\xe0o t\u1eadp c\xe1c token c\u1ee7a Mike."}),(0,r.jsxs)(t.p,{children:["N\u1ebfu \u0111\xf3 ch\u1ec9 l\xe0 logic b\u1ea1n th\u1ef1c hi\u1ec7n, b\u1ea1n s\u1ebd g\u1eb7p m\u1ed9t s\u1ed1 v\u1ea5n \u0111\u1ec1. N\u1ebfu b\u1ea1n th\u1ef1c hi\u1ec7n m\u1ed9t ",(0,r.jsx)(t.code,{children:"view"})," call \u0111\u1ec3 truy v\u1ea5n th\xf4ng tin v\u1ec1 token \u0111\xf3 sau khi n\xf3 \u0111\xe3 \u0111\u01b0\u1ee3c chuy\u1ec3n cho Mike, n\xf3 s\u1ebd v\u1eabn tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 r\u1eb1ng Benji l\xe0 ch\u1ee7 s\u1edf h\u1eefu."]}),(0,r.jsxs)(t.p,{children:["\u0110i\u1ec1u n\xe0y l\xe0 do contract v\u1eabn \u0111ang map token ID v\u1edbi ",(0,r.jsx)(t.code,{children:"Token"})," object c\u0169, object \u0111\xf3 c\xf3 field ",(0,r.jsx)(t.code,{children:"owner_id"})," l\xe0 account ID c\u1ee7a Benji. You still have to change the ",(0,r.jsx)(t.code,{children:"tokensById"})," data structure so that the token ID maps to a new ",(0,r.jsx)(t.code,{children:"Token"})," object which has Mike as the owner."]}),(0,r.jsx)(t.p,{children:"V\u1edbi nh\u1eefng g\xec \u0111\xe3 n\xf3i, quy tr\xecnh cu\u1ed1i c\xf9ng khi ch\u1ee7 s\u1edf h\u1eefu chuy\u1ec3n token t\u1edbi ng\u01b0\u1eddi nh\u1eadn s\u1ebd nh\u01b0 sau:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"X\xf3a token kh\u1ecfi t\u1eadp token c\u1ee7a ch\u1ee7 s\u1edf h\u1eefu."}),"\n",(0,r.jsx)(t.li,{children:"Th\xeam token t\u1edbi t\u1eadp token c\u1ee7a ng\u01b0\u1eddi nh\u1eadn."}),"\n",(0,r.jsxs)(t.li,{children:["Map token ID t\u1edbi m\u1ed9t ",(0,r.jsx)(t.code,{children:"Token"})," object m\u1edbi ch\u1ee9a ch\xednh x\xe1c th\xf4ng tin ch\u1ee7 s\u1edf h\u1eefu."]}),"\n"]}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["You might be curious as to why we don't edit the ",(0,r.jsx)(t.code,{children:"tokenMetadataById"})," field. \u0110i\u1ec1u n\xe0y l\xe0 do b\u1ea5t k\u1ec3 ai s\u1edf h\u1eefu token, token ID s\u1ebd lu\xf4n map t\u1edbi c\xf9ng m\u1ed9t metadata. Metadata s\u1ebd kh\xf4ng bao gi\u1edd thay \u0111\u1ed5i v\xe0 v\xec v\u1eady ch\xfang ta c\xf3 th\u1ec3 \u0111\u1ec3 n\xf3 m\u1ed9t m\xecnh (kh\xf4ng map v\u1edbi m\u1ed9t token Id n\xe0o c\u1ea3). :::"]}),(0,r.jsx)(t.p,{children:"T\u1ea1i th\u1eddi \u0111i\u1ec3m n\xe0y, b\u1ea1n \u0111\xe3 s\u1eb5n s\xe0ng \u0111\u1ec3 ti\u1ebfp t\u1ee5c v\xe0 t\u1ea1o nh\u1eefng s\u1eeda \u0111\u1ed5i quan tr\u1ecdng v\u1edbi smart contract c\u1ee7a m\xecnh."}),(0,r.jsx)(t.h2,{id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",children:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract"}),(0,r.jsxs)(t.p,{children:["Let's start our journey in the ",(0,r.jsx)(t.code,{children:"nft-contract/src/nft_core.ts"})," file."]}),(0,r.jsx)(t.h3,{id:"transfer-function",children:"Transfer function"}),(0,r.jsxs)(t.p,{children:["You'll start by implementing the ",(0,r.jsx)(t.code,{children:"nft_transfer"})," logic. Function n\xe0y s\u1ebd chuy\u1ec3n ",(0,r.jsx)(t.code,{children:"token_id"})," \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh t\u1edbi ",(0,r.jsx)(t.code,{children:"receiver_id"})," v\u1edbi m\u1ed9t tu\u1ef3 ch\u1ecdn ",(0,r.jsx)(t.code,{children:"memo"})," v\xed d\u1ee5 nh\u01b0 ",(0,r.jsx)(t.code,{children:'"Happy Birthday Mike!"'}),". The core logic will be found in the ",(0,r.jsx)(t.code,{children:"internalNftTransfer"})," function."]}),(0,r.jsx)(i.Ey,{language:"js",start:"37",end:"64",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts"}),(0,r.jsxs)(t.p,{children:["There are a couple things to notice here. Firstly, we've introduced a new function called ",(0,r.jsx)(t.code,{children:"assertOneYocto()"}),". This method will ensure that the user has attached exactly one yoctoNEAR to the call. If a function requires a deposit, you need a full access key to sign that transaction. By adding the one yoctoNEAR deposit requirement, you're essentially forcing the user to sign the transaction with a full access key."]}),(0,r.jsx)(t.p,{children:"Since the transfer function is potentially transferring very valuable assets, you'll want to make sure that whoever is calling the function has a full access key."}),(0,r.jsxs)(t.p,{children:["Secondly, we've introduced an ",(0,r.jsx)(t.code,{children:"internalTransfer"})," method. This will perform all the logic necessary to transfer an NFT."]}),(0,r.jsx)(t.h3,{id:"c\xe1c-internal-helper-function",children:"C\xe1c internal helper function"}),(0,r.jsxs)(t.p,{children:["Let's quickly move over to the ",(0,r.jsx)(t.code,{children:"nft-contract/src/internal.ts"})," file so that you can implement the ",(0,r.jsx)(t.code,{children:"assertOneYocto()"})," and ",(0,r.jsx)(t.code,{children:"internalTransfer"})," methods."]}),(0,r.jsxs)(t.p,{children:["Let's start with the easier one, ",(0,r.jsx)(t.code,{children:"assertOneYocto()"}),"."]}),(0,r.jsx)(t.h4,{id:"assertoneyocto",children:"assertOneYocto"}),(0,r.jsx)(i.Ey,{language:"js",start:"38",end:"41",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts"}),(0,r.jsx)(t.h4,{id:"internal_transfer",children:"internal_transfer"}),(0,r.jsxs)(t.p,{children:["It's now time to implement the ",(0,r.jsx)(t.code,{children:"internalTransfer"})," function which is the core of this tutorial. Function n\xe0y s\u1ebd nh\u1eadn c\xe1c tham s\u1ed1 sau:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"senderId"}),": the account that's attempting to transfer the token."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"receiverId"}),": the account that's receiving the token."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"tokenId"}),": the token ID being transferred."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"memo"}),": m\u1ed9t t\xf9y ch\u1ecdn memo k\xe8m theo."]}),"\n"]}),(0,r.jsxs)(t.p,{children:["\u0110i\u1ec1u \u0111\u1ea7u ti\xean b\u1ea1n c\u1ea7n l\xe0m l\xe0 \u0111\u1ea3o b\u1ea3o r\u1eb1ng ng\u01b0\u1eddi g\u1eedi \u0111\u01b0\u1ee3c \u1ee7y quy\u1ec1n \u0111\u1ec3 chuy\u1ec3n token. Trong tr\u01b0\u1eddng h\u1ee3p n\xe0y, b\u1ea1n ch\u1ec9 c\u1ea7n \u0111\u1ea3m b\u1ea3o r\u1eb1ng ng\u01b0\u1eddi g\u1eedi l\xe0 ch\u1ee7 s\u1edf h\u1eefu c\u1ee7a token. B\u1ea1n s\u1ebd l\xe0m \u0111i\u1ec1u \u0111\xf3 b\u1eb1ng c\xe1ch l\u1ea5y ",(0,r.jsx)(t.code,{children:"Token"})," object s\u1eed d\u1ee5ng ",(0,r.jsx)(t.code,{children:"token_id"})," v\xe0 \u0111\u1ea3m b\u1ea3o r\u1eb1ng ng\u01b0\u1eddi g\u1eedi gi\u1ed1ng v\u1edbi ",(0,r.jsx)(t.code,{children:"owner_id"})," c\u1ee7a token."]}),(0,r.jsxs)(t.p,{children:["Th\u1ee9 hai, b\u1ea1n s\u1ebd x\xf3a token ID t\u1eeb danh s\xe1ch token c\u1ee7a ng\u01b0\u1eddi g\u1eedi v\xe0 th\xeam token ID v\xe0o danh s\xe1ch token c\u1ee7a ng\u01b0\u1eddi nh\u1eadn. Cu\u1ed1i c\xf9ng, b\u1ea1n s\u1ebd t\u1ea1o m\u1ed9t ",(0,r.jsx)(t.code,{children:"Token"})," object m\u1edbi v\u1edbi ch\u1ee7 s\u1edf h\u1eefu l\xe0 ng\u01b0\u1eddi nh\u1eadn v\xe0 map l\u1ea1i token ID t\u1edbi n\xf3."]}),(0,r.jsx)(i.Ey,{language:"js",start:"80",end:"114",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts"}),(0,r.jsxs)(t.p,{children:["Ph\xeda tr\xean, b\u1ea1n \u0111\xe3 tri\u1ec3n khai function \u0111\u1ec3 th\xeam token ID t\u1edbi m\u1ed9t t\u1eadp c\xe1c token c\u1ee7a ch\u1ee7 s\u1edf h\u1eefu nh\u01b0ng b\u1ea1n ch\u01b0a t\u1ea1o m\u1ed9t function \u0111\u1ec3 x\xf3a m\u1ed9t token ID t\u1eeb m\u1ed9t t\u1eadp c\xe1c token. Let's do that now by created a new function called ",(0,r.jsx)(t.code,{children:"internalRemoveTokenFromOwner"})," which we'll place right above our ",(0,r.jsx)(t.code,{children:"internalTransfer"})," and below the ",(0,r.jsx)(t.code,{children:"internalAddTokenToOwner"})," function."]}),(0,r.jsxs)(t.p,{children:["Trong remove function n\xe0y, b\u1ea1n s\u1ebd l\u1ea5y t\u1eadp c\xe1c token c\u1ee7a m\u1ed9t account ID v\xe0 sau \u0111\xf3 remove token ID \u0111\xe3 truy\u1ec1n v\xe0o. If the account's set is empty after the removal, you'll simply remove the account from the ",(0,r.jsx)(t.code,{children:"tokensPerOwner"})," data structure."]}),(0,r.jsx)(i.Ey,{language:"js",start:"60",end:"78",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/internal.ts"}),(0,r.jsxs)(t.p,{children:["V\u1edbi vi\u1ec7c ho\xe0n th\xe0nh nh\u1eefng internal function n\xe0y, logic cho vi\u1ec7c transfer c\xe1c NFT \u0111\xe3 xong. B\xe2y gi\u1edd l\xe0 l\xfac \u0111\u1ec3 ti\u1ebfp t\u1ee5c v\xe0 ti\u1ebfn h\xe0nh ",(0,r.jsx)(t.code,{children:"nft_transfer_call"}),", m\u1ed9t trong nh\u1eefng h\xe0m t\xedch ph\xe2n ph\u1ee9c t\u1ea1p nh\u1ea5t trong c\xe1c standard function."]}),(0,r.jsx)(t.h3,{id:"transfer-call-function",children:"Transfer call function"}),(0,r.jsxs)(t.p,{children:["H\xe3y xem x\xe9t k\u1ecbch b\u1ea3n sau \u0111\xe2y. M\u1ed9t account mu\u1ed1n transfer m\u1ed9t NFT sang m\u1ed9t smart contract \u0111\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t d\u1ecbch v\u1ee5. C\xe1ch ti\u1ebfp c\u1eadn truy\u1ec1n th\u1ed1ng l\xe0 s\u1ebd s\u1eed d\u1ee5ng m\u1ed9t h\u1ec7 th\u1ed1ng approval management, trong \u0111\xf3 contract \u0111\u01b0\u1ee3c c\u1ea5p kh\u1ea3 n\u0103ng \u0111\u1ec3 transfer NFT t\u1edbi ch\xednh n\xf3 sau khi ho\xe0n th\xe0nh. B\u1ea1n c\xf3 th\u1ec3 t\xecm hi\u1ec3u v\u1ec1 h\u1ec7 th\u1ed1ng approval management n\xe0y trong ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/approvals",children:"ph\u1ea7n c\xe1c approval"})," c\u1ee7a serie h\u01b0\u1edbng d\u1eabn."]}),(0,r.jsx)(t.p,{children:"Workflow n\xe0y c\u1ea7n nhi\u1ec1u transaction. N\u1ebfu ch\xfang ta gi\u1edbi thi\u1ec7u \u201ctransfer and call\u201d workflow b\u1eb1ng m\u1ed9t transaction duy nh\u1ea5t, quy tr\xecnh n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c c\u1ea3i thi\u1ec7n r\u1ea5t nhi\u1ec1u."}),(0,r.jsxs)(t.p,{children:["V\xec l\xfd do n\xe0y, ch\xfang ta c\xf3 m\u1ed9t function l\xe0 ",(0,r.jsx)(t.code,{children:"nft_transfer_call"}),", n\xf3 s\u1ebd transfer m\u1ed9t NFT t\u1edbi m\u1ed9t ng\u01b0\u1eddi nh\u1eadn v\xe0 c\u0169ng call m\u1ed9t method tr\xean contract c\u1ee7a ng\u01b0\u1eddi nh\u1eadn trong c\xf9ng m\u1ed9t transaction."]}),(0,r.jsx)(i.Ey,{language:"js",start:"66",end:"125",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts"}),(0,r.jsxs)(t.p,{children:["Tr\u01b0\u1edbc ti\xean, function s\u1ebd x\xe1c nh\u1eadn r\u1eb1ng ng\u01b0\u1eddi g\u1ecdi \u0111\xe3 \u0111\xednh k\xe8m ch\xednh x\xe1c 1 yocto cho m\u1ee5c \u0111\xedch b\u1ea3o m\u1eadt. It will then transfer the NFT using ",(0,r.jsx)(t.code,{children:"internalTransfer"})," and start the cross contract call. N\xf3 s\u1ebd call m\u1ed9t method ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," tr\xean contract c\u1ee7a ",(0,r.jsx)(t.code,{children:"receiver_id"})," \u0111\u1ec3 tr\u1ea3 v\u1ec1 m\u1ed9t promise. Sau khi promise k\u1ebft th\xfac, h\xe0m ",(0,r.jsx)(t.code,{children:"nft_resolve_transfer"})," \u0111\u01b0\u1ee3c g\u1ecdi. \u0110\xe2y l\xe0 workflow r\u1ea5t ph\u1ed5 bi\u1ebfn khi x\u1eed l\xfd c\xe1c cross contract call. Tr\u01b0\u1edbc ti\xean, b\u1ea1n b\u1eaft \u0111\u1ea7u kh\u1edfi t\u1ea1o call v\xe0 \u0111\u1ee3i n\xf3 th\u1ef1c hi\u1ec7n xong. Sau \u0111\xf3 b\u1ea1n g\u1ecdi m\u1ed9t function x\u1eed l\xfd k\u1ebft qu\u1ea3 c\u1ee7a promise v\xe0 h\xe0nh \u0111\u1ed9ng ph\xf9 h\u1ee3p."]}),(0,r.jsxs)(t.p,{children:["Trong tr\u01b0\u1eddng h\u1ee3p c\xf9a ch\xfang ta, khi call ",(0,r.jsx)(t.code,{children:"nft_on_transfer"}),", function \u0111\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t gi\xe1 tr\u1ecb boolean \u0111\u1ec3 cho bi\u1ebft b\u1ea1n c\xf3 n\xean tr\u1ea3 l\u1ea1i NFT cho ch\u1ee7 s\u1edf h\u1eefu ban \u0111\u1ea7u c\u1ee7a n\xf3 hay kh\xf4ng. This is logic will be executed in the ",(0,r.jsx)(t.code,{children:"internalResolveTransfer"})," function."]}),(0,r.jsx)(i.Ey,{language:"js",start:"127",end:"187",url:"https://github.com/near-examples/nft-tutorial-js/blob/4.core/src/nft-contract/nft_core.ts"}),(0,r.jsxs)(t.p,{children:["N\u1ebfu ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," tr\u1ea3 v\u1ec1 true, b\u1ea1n s\u1ebd g\u1eedi token tr\u1edf l\u1ea1i cho ng\u01b0\u1eddi s\u1edf h\u1eefu ban \u0111\u1ea7u c\u1ee7a n\xf3. Ng\u01b0\u1ee3c l\u1ea1i, n\u1ebfu tr\u1ea3 v\u1ec1 false th\xec kh\xf4ng c\u1ea7n th\xeam logic n\xe0o c\u1ea3. \u0110\u1ed1i v\u1edbi gi\xe1 tr\u1ecb tr\u1ea3 v\u1ec1 c\u1ee7a ",(0,r.jsx)(t.code,{children:"nft_resolve_transfer"}),", h\xe0m n\xe0y ph\u1ea3i tr\u1ea3 v\u1ec1 m\u1ed9t gi\xe1 tr\u1ecb boolean theo ti\xeau chu\u1ea9n quy \u0111\u1ecbnh \u0111\u1ec3 cho bi\u1ebft ng\u01b0\u1eddi nh\u1eadn c\xf3 nh\u1eadn th\xe0nh c\xf4ng token hay kh\xf4ng."]}),(0,r.jsxs)(t.p,{children:["\u0110i\u1ec1u n\xe0y c\xf3 ngh\u0129a l\xe0 n\u1ebfu ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," tr\u1ea3 v\u1ec1 true, b\u1ea1n n\xean tr\u1ea3 v\u1ec1 false. This is because if the token is being returned to its original owner. The ",(0,r.jsx)(t.code,{children:"receiver_id"})," didn't successfully receive the token in the end. Ng\u01b0\u1ee3c l\u1ea1i, n\u1ebfu ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," tr\u1ea3 v\u1ec1 false, b\u1ea1n n\xean tr\u1ea3 v\u1ec1 true v\xec ch\xfang ta kh\xf4ng c\u1ea7n tr\u1ea3 v\u1ec1 token v\xe0 do \u0111\xf3 ",(0,r.jsx)(t.code,{children:"receiver_id"})," s\u1edf h\u1eefu th\xe0nh c\xf4ng token."]}),(0,r.jsx)(t.p,{children:"V\u1edbi vi\u1ec7c ho\xe0n th\xe0nh \u0111i\u1ec1u \u0111\xf3, b\u1ea1n \u0111\xe3 th\xeam th\xe0nh c\xf4ng logic c\u1ea7n thi\u1ebft \u0111\u1ec3 cho ph\xe9p ng\u01b0\u1eddi d\xf9ng transfer c\xe1c NFT. B\xe2y gi\u1edd l\xe0 l\xfac deploy v\xe0 th\u1ef1c hi\u1ec7n m\u1ed9t v\xe0i b\xe0i test."}),(0,r.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploy contract"}),(0,r.jsx)(t.p,{children:"S\u1eed d\u1ee5ng build script, build v\xe0 deploy contract gi\u1ed1ng nh\u01b0 b\u1ea1n \u0111\xe3 l\xe0m trong c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $NFT_CONTRACT_ID\n"})}),(0,r.jsxs)(t.p,{children:["L\xfac n\xe0y s\u1ebd c\xf3 m\u1ed9t c\u1ea3nh b\xe1o n\xf3i r\u1eb1ng t\xe0i kho\u1ea3n \u0111\xe3 c\xf3 m\u1ed9t contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy v\xe0 s\u1ebd h\u1ecfi b\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c hay kh\xf4ng. \u0110\u01a1n gi\u1ea3n h\xe3y g\xf5 ",(0,r.jsx)(t.code,{children:"y"})," v\xe0 \u1ea5n enter."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["N\u1ebfu b\u1ea1n ch\u01b0a ho\xe0n th\xe0nh c\xe1c b\xe0i h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc \u0111\xf3 v\xe0 m\u1edbi ch\u1ec9 theo d\xf5i b\xe0i n\xe0y, \u0111\u01a1n gi\u1ea3n h\xe3y t\u1ea1o m\u1ed9t account v\xe0 login v\u1edbi CLI c\u1ee7a m\xecnh b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,r.jsx)(t.code,{children:"near login"}),". B\u1ea1n c\xf3 th\u1ec3 export m\u1ed9t bi\u1ebfn m\xf4i tr\u01b0\u1eddng ",(0,r.jsx)(t.code,{children:"export NFT_CONTRACT_ID=YOUR_ACCOUNT_ID_HERE"}),". :::"]}),(0,r.jsx)(t.h2,{id:"testing-changes",children:"Test c\xe1c thay \u0111\u1ed5i m\u1edbi"}),(0,r.jsxs)(t.p,{children:["B\xe2y gi\u1edd th\xec b\u1ea1n \u0111\xe3 deploy m\u1ed9t b\u1ea3n v\xe1 l\u1ed7i cho contract, \u0111\xe3 \u0111\u1ebfn l\xfac \u0111\u1ec3 chuy\u1ec3n sang giai \u0111o\u1ea1n test. S\u1eed d\u1ee5ng NFT contract tr\u01b0\u1edbc \u0111\xf3 m\xe0 b\u1ea1n \u0111\xe3 \u0111\xe3 mint token cho ch\xednh m\xecnh, b\u1ea1n c\xf3 th\u1ec3 test method ",(0,r.jsx)(t.code,{children:"nft_transfer"}),". N\u1ebfu b\u1ea1n transfer NFT, n\xf3 s\u1ebd b\u1ecb xo\xe1 kh\u1ecfi c\xe1c b\u1ed9 s\u01b0u t\u1eadp trong account c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb \u1edf wallet. Ngo\xe0i ra, n\u1ebfu b\u1ea1n truy v\u1ea5n b\u1ea5t k\u1ef3 enumeration function n\xe0o, n\xf3 s\u1ebd cho th\u1ea5y r\u1eb1ng b\u1ea1n kh\xf4ng c\xf2n l\xe0 ch\u1ee7 s\u1edf h\u1eefu n\u1eefa."]}),(0,r.jsxs)(t.p,{children:["H\xe3y test \u0111i\u1ec1u n\xe0y b\u1eb1ng c\xe1ch transfer m\u1ed9t NFT t\u1edbi account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," v\xe0 xem NFT c\xf3 c\xf2n thu\u1ed9c quy\u1ec1n s\u1edf h\u1eefu c\u1ee7a b\u1ea1n hay kh\xf4ng."]}),(0,r.jsx)(t.h3,{id:"test-transfer-function",children:"Test transfer function"}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["\u0110i\u1ec1u n\xe0y c\xf3 ngh\u0129a r\u1eb1ng NFT kh\xf4ng th\u1ec3 kh\xf4i ph\u1ee5c \u0111\u01b0\u1ee3c tr\u1eeb khi account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," transfer n\xf3 l\u1ea1i cho b\u1ea1n. N\u1ebfu b\u1ea1n kh\xf4ng mu\u1ed1n NFT c\u1ee7a m\xecnh b\u1ecb m\u1ea5t, t\u1ea1o m\u1ed9t account m\u1edbi v\xe0 transfer token t\u1edbi account \u0111\xf3. :::"]}),(0,r.jsxs)(t.p,{children:["N\u1ebfu b\u1ea1n ch\u1ea1y command sau, n\xf3 s\u1ebd transfer token ",(0,r.jsx)(t.code,{children:'"token-1"'})," t\u1edbi account ",(0,r.jsx)(t.code,{children:"benjiman.testnet"})," v\u1edbi memo ",(0,r.jsx)(t.code,{children:'"Go Team :)"'}),". H\xe3y l\u01b0u \xfd r\u1eb1ng b\u1ea1n c\u0169ng \u0111ang \u0111\xednh k\xe8m ch\xednh x\xe1c 1 yoctoNEAR b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,r.jsx)(t.code,{children:"--depositYocto"})," flag."]}),(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["N\u1ebfu b\u1ea1n \u0111\xe3 s\u1eed d\u1ee5ng m\u1ed9t token ID kh\xe1c trong nh\u1eefng b\xe0i h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, thay th\u1ebf ",(0,r.jsx)(t.code,{children:"token-1"})," v\u1edbi token ID c\u1ee7a b\u1ea1n. :::"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_transfer \'{"receiver_id": "benjiman.testnet", "token_id": "token-1", "memo": "Go Team :)"}\' --accountId $NFT_CONTRACT_ID --depositYocto 1\n'})}),(0,r.jsxs)(t.p,{children:["N\u1ebfu b\xe2y gi\u1edd b\u1ea1n truy v\u1ea5n t\u1ea5t c\u1ea3 c\xe1c token m\xe0 account b\u1ea1n s\u1edf h\u1eefu, token \u0111\xf3 s\u1ebd b\u1ecb thi\u1ebfu. T\u01b0\u01a1ng t\u1ef1, n\u1ebfu b\u1ea1n truy v\u1ea5n danh s\xe1ch c\xe1c token \u0111\u01b0\u1ee3c s\u1edf h\u1eefu b\u1edfi ",(0,r.jsx)(t.code,{children:"benjiman.testnet"}),", account \u0111\xf3 b\xe2y gi\u1edd s\u1ebd s\u1edf h\u1eefu NFT c\u1ee7a b\u1ea1n."]}),(0,r.jsx)(t.h3,{id:"test-transfer-call-function",children:"Test transfer call function"}),(0,r.jsxs)(t.p,{children:["B\xe2y gi\u1edd th\xec b\u1ea1n \u0111\xe3 test ",(0,r.jsx)(t.code,{children:"nft_transfer"})," function, \u0111\u1ebfn l\xfac \u0111\u1ec3 test ",(0,r.jsx)(t.code,{children:"nft_transfer_call"})," function. N\u1ebfu b\u1ea1n c\u1ed1 g\u1eafng transfer m\u1ed9t NFT t\u1edbi m\u1ed9t ng\u01b0\u1eddi nh\u1eadn ",(0,r.jsx)(t.strong,{children:"kh\xf4ng"})," ti\u1ebfn h\xe0nh ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," function, contract s\u1ebd panic v\xe0 NFT s\u1ebd ",(0,r.jsx)(t.strong,{children:"kh\xf4ng"})," \u0111\u01b0\u1ee3c transfer. H\xe3y test ch\u1ee9c n\u0103ng n\xe0y b\xean d\u01b0\u1edbi."]}),(0,r.jsx)(t.p,{children:"\u0110\u1ea7u ti\xean mint m\u1ed9t NFT m\u1edbi s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 test ch\u1ee9c n\u0103ng transfer call."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_mint \'{"token_id": "token-2", "metadata": {"title": "NFT Tutorial Token", "description": "Testing the transfer call function", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$NFT_CONTRACT_ID\'"}\' --accountId $NFT_CONTRACT_ID --amount 0.1\n'})}),(0,r.jsxs)(t.p,{children:["B\xe2y gi\u1edd th\xec b\u1ea1n \u0111\xe3 mint token, b\u1ea1n c\xf3 th\u1ec3 th\u1eed transfer NFT t\u1edbi account ",(0,r.jsx)(t.code,{children:"no-contract.testnet"}),", account n\xe0y kh\xf4ng c\xf3 contract n\xe0o gi\u1ed1ng nh\u01b0 t\xean c\u1ee7a n\xf3 \u0111\xe3 cho th\u1ea5y. \u0110i\u1ec1u n\xe0y c\xf3 ngh\u0129a r\u1eb1ng ng\u01b0\u1eddi nh\u1eadn kh\xf4ng ti\u1ebfn h\xe0nh ",(0,r.jsx)(t.code,{children:"nft_on_transfer"})," function v\xe0 NFT s\u1ebd v\u1eabn l\xe0 c\u1ee7a b\u1ea1n sau khi transaction ho\xe0n th\xe0nh."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_transfer_call \'{"receiver_id": "no-contract.testnet", "token_id": "token-2", "msg": "foo"}\' --accountId $NFT_CONTRACT_ID --depositYocto 1 --gas 200000000000000\n'})}),(0,r.jsxs)(t.p,{children:["N\u1ebfu b\u1ea1n truy v\u1ea5n c\xe1c token c\u1ee7a m\xecnh, b\u1ea1n s\u1ebd v\u1eabn c\xf3 ",(0,r.jsx)(t.code,{children:"token-2"})," v\xe0 t\u1ea1i th\u1eddi \u0111i\u1ec3m n\xe0y, b\u1ea1n \u0111\xe3 ho\xe0n th\xe0nh!"]}),(0,r.jsx)(t.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng k\u1ebft"}),(0,r.jsxs)(t.p,{children:["Trong b\xe0i h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n \u0111\xe3 h\u1ecdc c\xe1ch l\xe0m th\u1ebf n\xe0o \u0111\u1ec3 m\u1edf r\u1ed9ng m\u1ed9t NFT contract th\xf4ng qua mint function v\xe0 b\u1ea1n \u0111\xe3 bi\u1ebft th\xeam c\xe1ch \u0111\u1ec3 ng\u01b0\u1eddi d\xf9ng transfer c\xe1c NFT. B\u1ea1n \u0111\xe3 ",(0,r.jsx)(t.a,{href:"#introduction",children:"chia nh\u1ecf"})," v\u1ea5n \u0111\u1ec1 th\xe0nh c\xe1c v\u1ea5n \u0111\u1ec1 b\xe9 h\u01a1n, nhi\u1ec1u subtask d\u1ec5 x\u1eed l\xfd h\u01a1n v\xe0 l\u1ea5y th\xf4ng tin \u0111\xf3 \u0111\u1ec3 tri\u1ec3n khai c\u1ea3 hai function l\xe0 ",(0,r.jsx)(t.a,{href:"#transfer-function",children:"NFT transfer"})," v\xe0 ",(0,r.jsx)(t.a,{href:"#transfer-call-function",children:"NFT transfer call"}),". Ngo\xe0i ra, b\u1ea1n \u0111\xe3 deploy ",(0,r.jsx)(t.a,{href:"#redeploying-contract",children:"b\u1ea3n v\xe1 l\u1ed7i"})," kh\xe1c t\u1edbi smart contract c\u1ee7a m\xecnh v\xe0 ",(0,r.jsx)(t.a,{href:"#testing-changes",children:"\u0111\xe3 test"})," ch\u1ee9c n\u0103ng transfer."]}),(0,r.jsxs)(t.p,{children:["Trong ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/js/approvals",children:"h\u01b0\u1edbng d\u1eabn t\u1edbi"}),", b\u1ea1n s\u1ebd h\u1ecdc v\u1ec1 h\u1ec7 th\u1ed1ng approval management v\xe0 l\xe0m th\u1ebf n\xe0o \u0111\u1ec3 b\u1ea1n c\xf3 th\u1ec3 ch\u1ea5p thu\u1eadn ng\u01b0\u1eddi kh\xe1c transfer token thay cho b\u1ea1n."]}),(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,r.jsxs)(t.li,{children:["Enumeration standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,r.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})]})]})]})]})]})}function u(n={}){const{wrapper:t}={...(0,c.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},85162:(n,t,e)=>{e.d(t,{Z:()=>a});e(67294);var r=e(36905);const c={tabItem:"tabItem_Ymn6"};var i=e(85893);function a(n){var t=n.children,e=n.hidden,a=n.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(c.tabItem,a),hidden:e,children:t})}},74866:(n,t,e)=>{e.d(t,{Z:()=>k});var r=e(67294),c=e(36905),i=e(12466),a=e(16550),s=e(20469),o=e(91980),l=e(67392),h=e(50012);function d(n){var t,e;return null!=(t=null==(e=r.Children.toArray(n).filter((function(n){return"\n"!==n})).map((function(n){if(!n||(0,r.isValidElement)(n)&&((t=n.props)&&"object"==typeof t&&"value"in t))return n;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:e.filter(Boolean))?t:[]}function u(n){var t=n.values,e=n.children;return(0,r.useMemo)((function(){var n=null!=t?t:function(n){return d(n).map((function(n){var t=n.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(e);return function(n){var t=(0,l.l)(n,(function(n,t){return n.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[t,e])}function g(n){var t=n.value;return n.tabValues.some((function(n){return n.value===t}))}function m(n){var t=n.queryString,e=void 0!==t&&t,c=n.groupId,i=(0,a.k6)(),s=function(n){var t=n.queryString,e=void 0!==t&&t,r=n.groupId;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:c});return[(0,o._X)(s),(0,r.useCallback)((function(n){if(s){var t=new URLSearchParams(i.location.search);t.set(s,n),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function f(n){var t,e,c,i,a=n.defaultValue,o=n.queryString,l=void 0!==o&&o,d=n.groupId,f=u(n),p=(0,r.useState)((function(){return function(n){var t,e=n.defaultValue,r=n.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+e+'" but none of its children has the corresponding value. Available values are: '+r.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return e}var c=null!=(t=r.find((function(n){return n.default})))?t:r[0];if(!c)throw new Error("Unexpected error: 0 tabValues");return c.value}({defaultValue:a,tabValues:f})})),j=p[0],x=p[1],v=m({queryString:l,groupId:d}),b=v[0],y=v[1],k=(t=function(n){return n?"docusaurus.tab."+n:null}({groupId:d}.groupId),e=(0,h.Nk)(t),c=e[0],i=e[1],[c,(0,r.useCallback)((function(n){t&&i.set(n)}),[t,i])]),T=k[0],N=k[1],_=function(){var n=null!=b?b:T;return g({value:n,tabValues:f})?n:null}();return(0,s.Z)((function(){_&&x(_)}),[_]),{selectedValue:j,selectValue:(0,r.useCallback)((function(n){if(!g({value:n,tabValues:f}))throw new Error("Can't select invalid tab value="+n);x(n),y(n),N(n)}),[y,N,f]),tabValues:f}}var p=e(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=e(85893);function v(n){var t=n.className,e=n.block,r=n.selectedValue,a=n.selectValue,s=n.tabValues,o=[],l=(0,i.o5)().blockElementScrollPositionUntilNextRender,h=function(n){var t=n.currentTarget,e=o.indexOf(t),c=s[e].value;c!==r&&(l(t),a(c))},d=function(n){var t,e=null;switch(n.key){case"Enter":h(n);break;case"ArrowRight":var r,c=o.indexOf(n.currentTarget)+1;e=null!=(r=o[c])?r:o[0];break;case"ArrowLeft":var i,a=o.indexOf(n.currentTarget)-1;e=null!=(i=o[a])?i:o[o.length-1]}null==(t=e)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":e},t),children:s.map((function(n){var t=n.value,e=n.label,i=n.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(n){return o.push(n)},onKeyDown:d,onClick:h},i,{className:(0,c.Z)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=e?e:t}),t)}))})}function b(n){var t=n.lazy,e=n.children,c=n.selectedValue,i=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){var a=i.find((function(n){return n.props.value===c}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(n,t){return(0,r.cloneElement)(n,{key:t,hidden:n.props.value!==c})}))})}function y(n){var t=f(n);return(0,x.jsxs)("div",{className:(0,c.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(v,Object.assign({},n,t)),(0,x.jsx)(b,Object.assign({},n,t))]})}function k(n){var t=(0,p.Z)();return(0,x.jsx)(y,Object.assign({},n,{children:d(n.children)}),String(t))}},77229:(n,t,e)=>{e.d(t,{Ey:()=>h,O2:()=>o,SQ:()=>l});e(67294);var r=e(74866),c=e(85162),i=e(95665),a=e.n(i),s=e(85893);function o(n){var t=n.children;return Array.isArray(t)||(t=[t]),(0,s.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(n,t){return(0,s.jsx)(c.Z,{value:n.props.value,label:n.props.value,children:n})}))})}function l(n){var t=n.children,e=n.language;return Array.isArray(t)||(t=[t]),t=t.map((function(n){return function(n,t){var e=n.props,r=(e.children,e.url),c=e.start,i=e.end,a=e.fname;if(n.type===h)return h({url:r,start:c,end:i,language:t,fname:a});return n}(n,e)})),1==t.length?(0,s.jsx)(c.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,s.jsx)(r.Z,{className:"file-tabs",children:t.map((function(n,t){return(0,s.jsx)(c.Z,{value:t,label:n.props.fname,children:n})}))})}function h(n){var t=n.url,e=n.start,r=n.end,c=n.language,i=n.fname,o=t+"#";return e&&r&&(o+="L"+e+"-L"+r+"#"),(0,s.jsx)(a(),{language:c,fname:i,children:o})}}}]);