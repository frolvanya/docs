"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4852],{55483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(85893),a=t(11151),s=t(71183);const i={id:"registering-accounts",title:"\uacc4\uc815 \ub4f1\ub85d",sidebar_label:"\uacc4\uc815 \ub4f1\ub85d"},o=void 0,l={id:"tutorials/fts/registering-accounts",title:"\uacc4\uc815 \ub4f1\ub85d",description:"\uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \ud1a0\ud070\uc758 \ucd08\uae30 \uc21c\ud658 \uacf5\uae09\uc744 \ubc1c\ud589\ud558\ub294 \ubc29\ubc95\uacfc \uc774\ubca4\ud2b8 \ud45c\uc900\uc5d0 \ub530\ub77c \uc774\ubca4\ud2b8\ub97c \uae30\ub85d\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0 \uc9c0\uac11 \uc794\uace0\uc5d0\uc11c FT\ub97c \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac \ud45c\uc900\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uace0, FT \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uacc4\uc815\uc744 \ub4f1\ub85d\ud558\uc5ec \uc545\uc758\uc801\uc778 \uc0ac\ub78c\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ubaa8\ub4e0 \uc790\uae08\uc744 \uace0\uac08\uc2dc\ud0a4\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/fts/4.storage.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/registering-accounts",permalink:"/ko/tutorials/fts/registering-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/4.storage.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,sidebarPosition:4,frontMatter:{id:"registering-accounts",title:"\uacc4\uc815 \ub4f1\ub85d",sidebar_label:"\uacc4\uc815 \ub4f1\ub85d"},sidebar:"tutorials",previous:{title:"\uc21c\ud658 \uacf5\uae09",permalink:"/ko/tutorials/fts/circulating-supply"},next:{title:"FT \uc804\uc1a1",permalink:"/ko/tutorials/fts/transfers"}},c={},u=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac \ud45c\uc900",id:"\uc2a4\ud1a0\ub9ac\uc9c0-\uad00\ub9ac-\ud45c\uc900",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815",id:"\ucee8\ud2b8\ub799\ud2b8-\uc218\uc815",level:2},{value:"\uc2a4\ud1a0\ub9ac\uc9c0 \ud45c\uc900 \uad6c\ud604",id:"\uc2a4\ud1a0\ub9ac\uc9c0-\ud45c\uc900-\uad6c\ud604",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"redeploying-contract",level:2},{value:"\ud558\uc704 \uacc4\uc815(sub-account) \uc0dd\uc131",id:"\ud558\uc704-\uacc4\uc815sub-account-\uc0dd\uc131",level:3},{value:"Deploying and Initialization",id:"deploying-initialization",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\uc774\uc804 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \ud1a0\ud070\uc758 \ucd08\uae30 \uc21c\ud658 \uacf5\uae09\uc744 \ubc1c\ud589\ud558\ub294 \ubc29\ubc95\uacfc ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"\uc774\ubca4\ud2b8 \ud45c\uc900"}),"\uc5d0 \ub530\ub77c \uc774\ubca4\ud2b8\ub97c \uae30\ub85d\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uace0 \uc9c0\uac11 \uc794\uace0\uc5d0\uc11c FT\ub97c \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac"})," \ud45c\uc900\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uace0, FT \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uacc4\uc815\uc744 \ub4f1\ub85d\ud558\uc5ec \uc545\uc758\uc801\uc778 \uc0ac\ub78c\uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ubaa8\ub4e0 \uc790\uae08\uc744 \uace0\uac08\uc2dc\ud0a4\ub294 \uac83\uc744 \ubc29\uc9c0\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,r.jsxs)(n.p,{children:["\uc0c8\ub85c\uc6b4 \uc0ac\ub78c\uc774 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(FT)\uc744 \ubc1b\uc744 \ub54c\ub9c8\ub2e4 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,r.jsx)(n.code,{children:"accounts"}),' \uc870\ud68c \ub9f5\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ubc14\uc774\ud2b8\uac00 \ucd94\uac00\ub429\ub2c8\ub2e4. \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uac00 \ubb34\ub8cc\ub85c FT\ub97c \ubc1b\uc744 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uba74, \ud574\ub2f9 \uc2dc\uc2a4\ud15c\uc774 \uc27d\uac8c \uc545\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc18c\ub7c9\uc758 FT\ub97c \ub9ce\uc740 \uacc4\uc815\uc5d0 \uc804\uc1a1\ud558\uc5ec, \ubaa8\ub4e0 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc790\uae08\uc744 "\ud0c8\ucde8"\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc774\uc720\ub85c, \uc0ac\uc6a9\uc790\uac00 \uc800\uc7a5\ud558\ub294 \uc815\ubcf4\uc640 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ubc14\uc774\ud2b8\uc5d0 \ub300\ud574 \uc694\uae08\uc744 \uccad\uad6c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uccad\uad6c\ud558\ub294 \uc774 \ubc29\ubc95\uc740 \ubaa8\ub4e0 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc791\ub3d9\ud558\ub3c4\ub85d \ud45c\uc900\ud654\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac"})," \ud45c\uc900 \uc785\ub825"]})}),"\n",(0,r.jsx)("img",{width:"65%",src:"/docs/assets/fts/storage-standard-meme.png"}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"\uc2a4\ud1a0\ub9ac\uc9c0-\uad00\ub9ac-\ud45c\uc900",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac \ud45c\uc900"}),"\n",(0,r.jsx)(n.p,{children:"The storage management standard is a set of rules that govern how a contract should charge users for storage. It outlines functions and behaviors such that all contracts implementing the standard are interoperable with each other. The 3 functions you'll need to implement are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"storage_deposit"})})," - \uc0ac\uc6a9\uc790\uac00 \uc77c\uc815\ub7c9\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc608\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ucd08\uacfc\ub41c \uae08\uc561\uc744 \uc608\uc9c0\ud558\uba74, \ucd08\uacfc\ud55c $NEAR\ub294 \ud658\ubd88\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"storage_balance_of"})})," - \uc8fc\uc5b4\uc9c4 \uc0ac\uc6a9\uc790\uac00 \uc9c0\ubd88\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ucffc\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"storage_balance_bounds"})})," - \uc8fc\uc5b4\uc9c4 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c \ubc0f \ucd5c\ub300 \uc2a4\ud1a0\ub9ac\uc9c0 \uc591\uc744 \ucffc\ub9ac\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"With these functions outlined, you could make a reasonable assumption that the flow would be:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790\uac00 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0, \uc0ac\uc6a9\ud558\ub294 \ubc14\uc774\ud2b8\ub97c \ucda9\ub2f9\ud558\uae30 \uc704\ud574 \uc77c\ubd80 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc608\uce58\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(n.li,{children:["\uc0ac\uc6a9\uc790\uac00 ",(0,r.jsx)(n.code,{children:"storage_deposit"})," \ud568\uc218\ub97c \ud1b5\ud574 $NEAR\ub97c \uc785\uae08\ud558\uba74, \ucee8\ud2b8\ub799\ud2b8\uc640 \uc790\uc720\ub86d\uac8c \uc0c1\ud638 \uc791\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You might be asking yourself what the deposit amount should be. There are two ways you can go about getting this information:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ubaa8\ub4e0 \uac1c\ubcc4 \uc0ac\uc6a9\uc790\uac00 ",(0,r.jsx)(n.code,{children:"storage_deposit"})," \ud568\uc218\uc5d0\uc11c \ucc28\uc9c0\ud558\ub294 \ubc14\uc774\ud2b8\ub97c \ub9f5\uc5d0 \uc0bd\uc785\ud558\uace0, \ubc14\uc774\ud2b8\ub97c \uce21\uc815\ud55c \ub2e4\uc74c, \ub098\uc911\uc5d0 ",(0,r.jsx)(n.code,{children:"accounts"})," \ub9f5\uc5d0\uc11c \uc81c\uac70\ud558\uc5ec \ub3d9\uc801\uc73c\ub85c \uacc4\uc0b0\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.li,{children:"\ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud560 \ub54c, \uac00\ub2a5\ud55c \ud55c \uac00\uc7a5 \ud070 \uacc4\uc815 ID\ub97c \uc0bd\uc785\ud558\uae30 \uc704\ud55c \ubc14\uc774\ud2b8\ub97c \uacc4\uc0b0\ud558\uace0, \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub3d9\uc77c\ud55c \uae08\uc561\uc744 \uccad\uad6c\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For the purpose of simplicity, we'll assume the second method."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\ucee8\ud2b8\ub799\ud2b8-\uc218\uc815",children:"\ucee8\ud2b8\ub799\ud2b8 \uc218\uc815"}),"\n",(0,r.jsxs)(n.p,{children:['This "bytes for longest account ID" should be stored in the contract\'s state such that we can pull the value during the ',(0,r.jsx)(n.code,{children:"storage_deposit"})," function and ensure the user attaches enough $NEAR. Open the ",(0,r.jsx)(n.code,{children:"src/lib.rs"})," file and add the following code to the ",(0,r.jsx)(n.code,{children:"Contract"})," struct. If you're just joining us now, you can find the skeleton code for this tutorial in the ",(0,r.jsx)(n.code,{children:"3.initial-supply"})," folder."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"23",end:"35",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/lib.rs"}),"\n",(0,r.jsxs)(n.p,{children:["You'll now need a way to calculate this amount which will be done in the initialization function. Move to the ",(0,r.jsx)(n.code,{children:"src/internal.rs"})," file and add the following private function ",(0,r.jsx)(n.code,{children:"measure_bytes_for_longest_account_id"})," which will add the longest possible account ID and remove it while measuring how many bytes the operation took. It will then set the ",(0,r.jsx)(n.code,{children:"bytes_for_longest_account_id"})," field to the result."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"38",end:"46",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs"}),"\n",(0,r.jsxs)(n.p,{children:["You'll also want to create a function for ",(0,r.jsx)(n.em,{children:"registering"})," an account after they've paid for storage. To do this, you can simply insert them into the ",(0,r.jsx)(n.code,{children:"accounts"}),' map with a balance of 0. This way, you know that any account currently in the map is considered "registered" and have paid for storage. Any account that attempts to receive FTs must be in the map with a balance of 0 or greater. If they aren\'t, the contract should throw.']}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"31",end:"36",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs"}),"\n",(0,r.jsx)(n.p,{children:"Let's also create a function to panic with a custom message if the user doesn't exist yet."}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"8",end:"16",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs"}),"\n",(0,r.jsxs)(n.p,{children:["Now when you call the ",(0,r.jsx)(n.code,{children:"internal_deposit"})," function, rather than defaulting the user's balance to ",(0,r.jsx)(n.code,{children:"0"})," if they don't exist yet via:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let balance = self.accounts.get(&account_id).unwrap_or(0);\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can replace it with the following:"}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"18",end:"29",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/internal.rs#L16-L27"}),"\n",(0,r.jsxs)(n.p,{children:["With this finished, your ",(0,r.jsx)(n.code,{children:"internal.rs"})," should look as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use near_sdk::{require};\n\nuse crate::*;\n\nimpl Contract {\n    pub(crate) fn internal_unwrap_balance_of(&self, account_id: &AccountId) -> Balance {\n      ...\n    }\n\n    pub(crate) fn internal_deposit(&mut self, account_id: &AccountId, amount: Balance) {\n      ...\n    }\n\n    pub(crate) fn internal_register_account(&mut self, account_id: &AccountId) {\n      ...\n    }\n\n    pub(crate) fn measure_bytes_for_longest_account_id(&mut self) {\n      ...\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["There's only one problem you need to solve with this. When initializing the contract, the implementation will throw. This is because you call ",(0,r.jsx)(n.code,{children:"internal_deposit"})," and the owner doesn't have a balance yet. To fix this, let's modify the initialization function to register the owner before depositing the FTs in their account. In addition, you should measure the bytes for the registration in this function."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"70",end:"110",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/lib.rs"}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"\uc2a4\ud1a0\ub9ac\uc9c0-\ud45c\uc900-\uad6c\ud604",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \ud45c\uc900 \uad6c\ud604"}),"\n",(0,r.jsx)(n.p,{children:"With this finished, you're now ready to implement the storage management standard. If you remember, the three functions you'll be implementing, we can break each down into their core functionality and decide how to proceed."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"storage_balance_bounds"})})," - \uc8fc\uc5b4\uc9c4 \ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c \ubc0f \ucd5c\ub300 \uc2a4\ud1a0\ub9ac\uc9c0 \uc591\uc744 \ucffc\ub9ac\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Since you're creating a fungible token contract and the storage price won't change (unless the ",(0,r.jsx)(n.code,{children:"$NEAR"})," cost per byte changes), the minimum and maximum storage costs should be the same. These values should be equal to the amount of bytes for the longest account ID you calculated in the ",(0,r.jsx)(n.code,{children:"measure_bytes_for_longest_account_id"})," function multiplied by the current ",(0,r.jsx)(n.code,{children:"$NEAR"})," price per byte. Switch to the ",(0,r.jsx)(n.code,{children:"src/storage.rs"})," file to get started."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"120",end:"130",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"storage_balance_of"})})," - \uc9c0\uc815\ub41c \uc0ac\uc6a9\uc790\uac00 \uc9c0\ubd88\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud55c \ucffc\ub9ac\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["As we mentioned earlier, you can tell if somebody has paid for storage by checking if they're in the ",(0,r.jsx)(n.code,{children:"accounts"})," map. If they are, you know that they've paid the amount returned by ",(0,r.jsx)(n.code,{children:"storage_balance_bounds"}),"."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"132",end:"139",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"storage_deposit"})})," - \uc0ac\uc6a9\uc790\uac00 \uc77c\uc815\ub7c9\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc608\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\uc790\uac00 \ucd08\uacfc\ub41c \ubcf4\uc99d\uae08\uc744 \uc608\uce58\ud558\uba74, \ucd08\uacfc $NEAR \uc561\uc218\uc5d0 \ub300\ud574 \ud658\ubd88\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In order to implement this logic, you first need to get the attached deposit. You'll also need to ensure that the user hasn't already paid for storage (i.e. they're in the ",(0,r.jsx)(n.code,{children:"accounts"})," map). If they are, simply refund the caller for the $NEAR they attached to the call."]}),"\n",(0,r.jsxs)(n.p,{children:["If the user isn't registered yet, you should get the storage cost by calling ",(0,r.jsx)(n.code,{children:"storage_balance_bounds"})," and make sure they've attached enough to cover that amount. Once this if finished, you can register them and refund any excess $NEAR."]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"81",end:"118",url:"https://github.com/near-examples/ft-tutorial/blob/main/4.storage/src/storage.rs"}),"\n",(0,r.jsx)(n.p,{children:"With this finished, you're ready to build and deploy the contract!"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"redeploying-contract",children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n",(0,r.jsx)(n.p,{children:"Since the current contract you have is already initialized, let's create a sub-account and deploy to again."}),"\n",(0,r.jsx)(n.h3,{id:"\ud558\uc704-\uacc4\uc815sub-account-\uc0dd\uc131",children:"\ud558\uc704 \uacc4\uc815(sub-account) \uc0dd\uc131"}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command to create a sub-account ",(0,r.jsx)(n.code,{children:"storage"})," of your main account with an initial balance of 3 NEAR which will be transferred from the original to your new account."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near account create-account fund-myself storage.$FT_CONTRACT_ID '3 NEAR' autogenerate-new-keypair save-to-legacy-keychain sign-as $FT_CONTRACT_ID network-config testnet sign-with-legacy-keychain send\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export STORAGE_FT_CONTRACT_ID=storage.$FT_CONTRACT_ID\n"})}),"\n",(0,r.jsx)(n.p,{children:"Build the contract as you did in the previous tutorials:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd 3.initial-supply\ncargo near build\n"})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h3,{id:"deploying-initialization",children:"Deploying and Initialization"}),"\n",(0,r.jsxs)(n.p,{children:["It's time to deploy the contract, initialize it and mint the total supply. \ub2e4\uc2dc \ud55c \ubc88 \ucd08\uae30 \uacf5\uae09\ub7c9\uc744 1000",(0,r.jsx)(n.code,{children:"gtNEAR"}),"\ub85c \ub9cc\ub4e4\uc5b4 \ubd05\uc2dc\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo near deploy $STORAGE_FT_CONTRACT_ID with-init-call new_default_meta json-args '{\"owner_id\": \"'$STORAGE_FT_CONTRACT_ID'\", \"total_supply\": \"1000000000000000000000000000\"}' prepaid-gas '100.0 Tgas' attached-deposit '0 NEAR' network-config testnet sign-with-keychain send\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc774\uc81c \uc18c\uc720\uc790\uac00 \uc9c0\ubd88\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ucffc\ub9ac\ud558\uba74 \ud574\ub2f9 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \ub4f1\ub85d\ub41c \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only $STORAGE_FT_CONTRACT_ID storage_balance_of json-args '{\"account_id\": \"'$STORAGE_FT_CONTRACT_ID'\"}' network-config testnet now\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc774\ub294 \uad6c\uc870\uccb4\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4. \ucd1d \uae08\uc561\uc740 \ub300\ub7b5 \ub4f1\ub85d\uc5d0 ",(0,r.jsx)(n.code,{children:"0.00125 $NEAR"}),"\uac00 \ub4e4\uba70, \uc0ac\uc6a9\uc790\ub294 \ub4f1\ub85d \ube44\uc6a9\uc744 \uc9c0\ubd88\ud558\ub294 \ub370 \ubaa8\ub450 \uc0ac\uc6a9\ud588\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9 \uac00\ub2a5\ud55c $NEAR\uac00 0\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{ total: '1250000000000000000000', available: '0' }\n"})}),"\n",(0,r.jsx)(n.p,{children:"\ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub370 \ud544\uc694\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \uc794\uc561\uc744 \ucffc\ub9ac\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-read-only $STORAGE_FT_CONTRACT_ID storage_balance_bounds json-args {} network-config testnet now\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\ucd5c\uc18c\uac12\uc774 \ucd5c\ub300\uac12\uacfc \uac19\uc740 \uc704\uc758 ",(0,r.jsx)(n.code,{children:"storage_balance_of"})," \ucffc\ub9ac\uc640 \ub3d9\uc77c\ud55c \uae08\uc561\uc744 \ubc18\ud658\ud558\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{ min: '1250000000000000000000', max: '1250000000000000000000' }\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,r.jsxs)(n.p,{children:["\uc624\ub298 \ub2f9\uc2e0\uc740 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc0ac\uc6a9\uc790\ub97c \ub4f1\ub85d\ud558\uae30 \uc704\ud55c \ub85c\uc9c1\uc744 \uc0b4\ud3b4\ubcf4\uace0 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 \ub85c\uc9c1\uc740 ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac \ud45c\uc900"}),"\uc744 \uc900\uc218\ud558\uba70 FT \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c \uc694\uad6c \uc0ac\ud56d\uc744 \ucda9\uc871\ud558\ub3c4\ub85d \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uc774\ub7ec\ud55c \ubcc0\uacbd \uc0ac\ud56d\uc744 \ube4c\ub4dc, \ubc30\ud3ec \ubc0f \ud14c\uc2a4\ud2b8\ud588\uc2b5\ub2c8\ub2e4. ",(0,r.jsx)(n.a,{href:"/ko/tutorials/fts/transfers",children:"\ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc"}),"\uc5d0\uc11c\ub294 FT\ub97c \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uae30\ubcf8 \uc0ac\ud56d\uc744 \uc0b4\ud3b4\ubd05\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["rustc: ",(0,r.jsx)(n.code,{children:"1.77.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["near-sdk-rs: ",(0,r.jsx)(n.code,{children:"5.1.0"})," (with enabled ",(0,r.jsx)(n.code,{children:"legacy"})," feature)"]}),"\n",(0,r.jsxs)(n.li,{children:["cargo-near: ",(0,r.jsx)(n.code,{children:"0.6.1"})]}),"\n",(0,r.jsxs)(n.li,{children:["near-cli-rs: ",(0,r.jsx)(n.code,{children:"0.11.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),s=t(12466),i=t(16550),o=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function f(e){var n,t,a,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),x=m[0],b=m[1],j=p({queryString:c,groupId:d}),y=j[0],v=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),_=w[0],T=w[1],N=function(){var e=null!=y?y:_;return g({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){N&&b(N)}),[N]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),v(e),T(e)}),[v,T,f]),tabValues:f}}var m=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function v(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,Object.assign({},n,e)),(0,b.jsx)(y,Object.assign({},n,e))]})}function w(e){var n=(0,m.Z)();return(0,b.jsx)(v,Object.assign({},e,{children:d(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>p,Ey:()=>m,SQ:()=>f});var r=t(67294),a=t(74866),s=t(85162),i=t(74165),o=t(15861),l=t(1841),c=t.n(l),u=t(85893);function d(){return(d=(0,o.Z)((0,i.Z)().mark((function e(n,t,r){var a,s,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(n+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):o.length,o=o.slice(t,r),l=o.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,a=e.end,s=e.language,i=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],g=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return d.apply(this,arguments)}(e,t,a);r.then((function(e){return g(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:s,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var g={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(s.Z,{value:e.props.value,label:g[e.props.value],children:e})}))})}function f(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,s=t.end,i=t.fname;if(e.type===m)return m({url:r,start:a,end:s,language:n,fname:i});return e}(e,t)})),1==n.length?(0,u.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function m(e){var n=e.url,t=e.start,r=e.end,a=e.language,s=e.fname,i=e.metastring;return h({url:n,start:t,end:r,language:a,fname:s,metastring:i})}}}]);