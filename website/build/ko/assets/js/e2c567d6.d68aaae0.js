"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7256],{22628:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=s(85893),r=s(11151);const c={sidebar_label:"\ud1a0\ud070 \uc804\uc1a1"},o="\ud1a0\ud070 \uc804\uc1a1 \ud750\ub984",a={id:"concepts/data-flow/token-transfer-flow",title:"\ud1a0\ud070 \uc804\uc1a1 \ud750\ub984",description:"\uc774\uc804 \uae00\uc5d0\uc11c \uc6b0\ub9ac\ub294 \uc11c\ub85c \ub2e4\ub978 \uc0e4\ub4dc\uc5d0 \uc788\ub294 \uacc4\uc815 \uac04 \ud1a0\ud070 \uc804\uc1a1\uc758 \uc608\ub97c \ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc774 \uc608\ub294 \ub2e8\uc21c\ud654\ub418\uc5c8\uc73c\uba70 \ud504\ub85c\uc138\uc2a4\uc758 \uba87 \ub2e8\uacc4\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uac1c\ub150\uc744 \uc774\ud574\ud558\uae30 \uc704\ud55c \ub354 \ud070 \uadf8\ub9bc\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574, \uae30\uc0ac\uc640 \ube44\ub514\uc624\ub97c \uc77c\ubd80\ub7ec \uc9e7\uc9c0\ub9cc \uc124\uba85\uc801\uc73c\ub85c \uad6c\uc131\ud558\uc600\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/data-flow/token-transfer-flow.md",sourceDirName:"1.concepts/data-flow",slug:"/concepts/data-flow/token-transfer-flow",permalink:"/ko/concepts/data-flow/token-transfer-flow",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/data-flow/token-transfer-flow.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748,formattedLastUpdatedAt:"2024\ub144 3\uc6d4 26\uc77c",frontMatter:{sidebar_label:"\ud1a0\ud070 \uc804\uc1a1"},sidebar:"concepts",previous:{title:"NEAR \ub370\uc774\ud130 \ud750\ub984",permalink:"/ko/concepts/data-flow/near-data-flow"},next:{title:"\ud1a0\ud070",permalink:"/ko/concepts/basics/tokens"}},i={},l=[{value:"\ub2e4\ub978 \uc0e4\ub4dc\uc5d0 \uc788\ub294 \uacc4\uc815 \uac04 \ud1a0\ud070 \uc804\uc1a1",id:"\ub2e4\ub978-\uc0e4\ub4dc\uc5d0-\uc788\ub294-\uacc4\uc815-\uac04-\ud1a0\ud070-\uc804\uc1a1",level:2},{value:"\ub3d9\uc77c\ud55c \uc0e4\ub4dc\uc5d0 \uc788\ub294 \uacc4\uc815 \uac04 \ud1a0\ud070 \uc804\uc1a1",id:"\ub3d9\uc77c\ud55c-\uc0e4\ub4dc\uc5d0-\uc788\ub294-\uacc4\uc815-\uac04-\ud1a0\ud070-\uc804\uc1a1",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\ud1a0\ud070-\uc804\uc1a1-\ud750\ub984",children:"\ud1a0\ud070 \uc804\uc1a1 \ud750\ub984"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/ko/concepts/data-flow/near-data-flow",children:"\uc774\uc804 \uae00"}),"\uc5d0\uc11c \uc6b0\ub9ac\ub294 \uc11c\ub85c \ub2e4\ub978 \uc0e4\ub4dc\uc5d0 \uc788\ub294 \uacc4\uc815 \uac04 \ud1a0\ud070 \uc804\uc1a1\uc758 \uc608\ub97c \ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc774 \uc608\ub294 \ub2e8\uc21c\ud654\ub418\uc5c8\uc73c\uba70 \ud504\ub85c\uc138\uc2a4\uc758 \uba87 \ub2e8\uacc4\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uac1c\ub150\uc744 \uc774\ud574\ud558\uae30 \uc704\ud55c \ub354 \ud070 \uadf8\ub9bc\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574, \uae30\uc0ac\uc640 \ube44\ub514\uc624\ub97c \uc77c\ubd80\ub7ec \uc9e7\uc9c0\ub9cc \uc124\uba85\uc801\uc73c\ub85c \uad6c\uc131\ud558\uc600\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.p,{children:"\uc774 \uae00\uc5d0\uc11c\ub294 \ub3d9\uc77c\ud55c \ub370\uc774\ud130 \ud750\ub984\uc744 \uc0b4\ud3b4\ubcf4\uc9c0\ub9cc, \ub354 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf8 \ub4a4 \ub450 \uac00\uc9c0 \ucd94\uac00 \uc2dc\ub098\ub9ac\uc624\ub97c \uace0\ub824\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\ub2e4\ub978 \uc0e4\ub4dc\uc5d0 \uc788\ub294 \uacc4\uc815 \uac04 \ud1a0\ud070 \uc804\uc1a1"}),"\n",(0,n.jsx)(t.li,{children:"\ub3d9\uc77c\ud55c \uc0e4\ub4dc\uc5d0 \uc788\ub294 \uacc4\uc815 \uac04 \ud1a0\ud070 \uc804\uc1a1"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\uc774\uc804 \uc124\uba85\uc5d0\uc11c \ub204\ub77d\ub41c \uac83\uc774 \ubb34\uc5c7\uc778\uc9c0 \ubb3c\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9e7\uc740 \ub300\ub2f5\uc740 ",(0,n.jsx)(t.strong,{children:"\uac00\uc2a4 \ud658\ubd88"})," \ub610\ub294 \uac04\ub2e8\ud788 ",(0,n.jsx)(t.strong,{children:"\ud658\ubd88"})," \uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.p,{children:["If you don't know what ",(0,n.jsx)(t.strong,{children:"Gas"})," is, please ",(0,n.jsx)(t.a,{href:"https://docs.near.org/concepts/protocol/gas",children:"read first the article about Gas"})," from our docs."]}),"\n",(0,n.jsxs)(t.p,{children:["As for ",(0,n.jsx)(t.em,{children:"Refunds"}),", here's a quote from the ",(0,n.jsx)(t.a,{href:"https://docs.near.org/concepts/protocol/gas",children:"Gas"})," article:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\uc5ec\ubd84\uc758 \uac00\uc2a4\ub294 \ud658\ubd88\ub429\ub2c8\ub2e4!"}),"\n",(0,n.jsx)(t.p,{children:"..."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\ud544\uc694\ud55c \uac83\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \uac00\uc2a4\ub97c \ud3ec\ud568\ud558\uba74 \ud658\ubd88\ub429\ub2c8\ub2e4."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"..."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["From NEAR Protocol docs ",(0,n.jsx)(t.a,{href:"https://docs.near.org/concepts/protocol/gas#attach-extra-gas-get-refunded",children:"Gas. \uc5ec\ubd84\uc758 \uac00\uc2a4\ub294 \ud658\ubd88\ub429\ub2c8\ub2e4!"}),"\uc5d0\uc11c"]})}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"\ub370\uc774\ud130 \ud750\ub984 \uce21\uba74\uc5d0\uc11c \ud658\ubd88\uc758 \uc758\ubbf8",type:"note",children:(0,n.jsx)(t.p,{children:"\ub9d0 \uadf8\ub300\ub85c \ubaa8\ub4e0 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ud658\ubd88\uc774 \ud3ec\ud568\ub41c\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4."})}),"\n",(0,n.jsx)(t.p,{children:"\uc88b\uc2b5\ub2c8\ub2e4, \uc774\uc81c \uc18c\uac1c\ud558\uae30\uc5d0 \ucda9\ubd84\ud569\ub2c8\ub2e4. \uc774\uc81c \uc608\uc81c\ub85c \uc774\ub3d9\ud558\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.h2,{id:"\ub2e4\ub978-\uc0e4\ub4dc\uc5d0-\uc788\ub294-\uacc4\uc815-\uac04-\ud1a0\ud070-\uc804\uc1a1",children:"\ub2e4\ub978 \uc0e4\ub4dc\uc5d0 \uc788\ub294 \uacc4\uc815 \uac04 \ud1a0\ud070 \uc804\uc1a1"}),"\n",(0,n.jsxs)(t.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,n.jsx)(t.a,{href:"/ko/concepts/data-flow/near-data-flow",children:"NEAR \ub370\uc774\ud130 \ud750\ub984"})," \uae00\uc758 \uc608\uc81c\ub97c \ud655\uc7a5\ud55c \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.p,{children:["\ub450 \uac1c\uc758 \uacc4\uc815 ",(0,n.jsx)(t.strong,{children:"alice.near"})," \ubc0f ",(0,n.jsx)(t.strong,{children:"bob.near"}),"\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4. They belong to different ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/shard",children:"Shards"}),". ",(0,n.jsx)(t.strong,{children:"alice.near"}),"\ub294 ",(0,n.jsx)(t.strong,{children:"bob.near"}),"\uc5d0 \uba87 \uac1c\uc758 \ud1a0\ud070\uc744 \ubcf4\ub0c5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/transaction",children:"Transaction"})," signed by ",(0,n.jsx)(t.strong,{children:"alice.near"})," is sent to the network. It is immediately executed, ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/execution-outcome",children:"ExecutionOutcome"})," is the output or result from converting the transaction into a ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/receipt",children:"Receipt"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Transaction execution",src:s(20123).Z+"",width:"1449",height:"700"})}),"\n",(0,n.jsxs)(t.p,{children:["\uc704\uc758 \uacfc\uc815 \uc5d0\uc11c \ubc1c\uc2e0\uc790 ",(0,n.jsx)(t.strong,{children:"alice.near"}),"\uc5d0\uac8c \uc218\uc218\ub8cc(\uac00\uc2a4)\uac00 \ubd80\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. The ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/receipt",children:"Receipt"})," created as result of the ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/transaction",children:"Transaction"})," follows these rules:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["It will be executed not earlier than next ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/block",children:"Block"})]}),"\n",(0,n.jsxs)(t.li,{children:["It ",(0,n.jsx)(t.strong,{children:"must"})," be executed on the receiver's ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/shard",children:"Shard"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["So, in our case the receiver is ",(0,n.jsx)(t.strong,{children:"bob.near"})," and that account belongs to a different ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/shard",children:"Shard"})," that's why the ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/receipt",children:"Receipt"})," moves to the receiver's Shard and is put in the execution queue."]}),"\n",(0,n.jsx)(t.p,{children:"\uc774 \uc608\uc81c\uc5d0\uc11c Receipt\ub294 \ubc14\ub85c \ub2e4\uc74c \ube14\ub85d\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"The Receipt is executed in the next Block",src:s(30938).Z+"",width:"1449",height:"700"})}),"\n",(0,n.jsxs)(t.p,{children:["\uac70\uc758 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4. \ud658\ubd88\uc744 \uae30\uc5b5\ud558\uc2dc\ub098\uc694? So the ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/execution-outcome",children:"ExecutionOutcome"})," for the Receipt will be another Receipt that is refunding the Gas to the sender. ",(0,n.jsx)(t.strong,{children:"bob.near"}),"\ub294 ",(0,n.jsx)(t.strong,{children:"alice.near"}),"\ub85c\ubd80\ud130 \ud1a0\ud070\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uc774\uc81c ",(0,n.jsx)(t.strong,{children:"alice.near"}),"\ub294 \uc0c8(\uadf8\ub9ac\uace0 \ub9c8\uc9c0\ub9c9) Receipt\uc758 \uc218\uc2e0\uc790\uac00 \ub429\ub2c8\ub2e4(\uc774 Receipt\uc758 \ubc1c\uc2e0\uc790\ub294 \ud56d\uc0c1 ",(0,n.jsx)(t.strong,{children:"\uc2dc\uc2a4\ud15c"}),"\uc784\uc744 \uba85\uc2ec\ud558\uc138\uc694)."]}),"\n",(0,n.jsxs)(t.p,{children:["\uaddc\uce59 #2\ub97c \uba85\uc2ec\ud558\uc138\uc694: Receipt\ub294 \uc218\uc2e0\uc790\uc758 \uc0e4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 Receipt\ub294 ",(0,n.jsx)(t.strong,{children:"alice.near"}),"\uac00 \uc18d\ud55c \uc0e4\ub4dc\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub294 \uc804\uccb4 \uacfc\uc815\uc5d0\uc11c \ub9c8\uc9c0\ub9c9 \uc2e4\ud589\uc785\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Complete scheme of Token transfer between the accounts from different Shards",src:s(50843).Z+"",width:"1449",height:"700"})}),"\n",(0,n.jsxs)(t.p,{children:["\uc774\uc81c \ub05d\ub0ac\uc2b5\ub2c8\ub2e4. \uc774\uc81c \ud1a0\ud070\uc740 \ud55c \uc0e4\ub4dc\uc758 \uacc4\uc815\uc5d0\uc11c \ub2e4\ub978 \uc0e4\ub4dc\uc758 \uacc4\uc815\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc73c\uba70 \ucd08\uae30 \ubc1c\uc2e0\uc790 ",(0,n.jsx)(t.strong,{children:"alice.near"})," \ub294 \uac00\uc2a4\ub97c \ud658\ubd88\ubc1b\uc558\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.h2,{id:"\ub3d9\uc77c\ud55c-\uc0e4\ub4dc\uc5d0-\uc788\ub294-\uacc4\uc815-\uac04-\ud1a0\ud070-\uc804\uc1a1",children:"\ub3d9\uc77c\ud55c \uc0e4\ub4dc\uc5d0 \uc788\ub294 \uacc4\uc815 \uac04 \ud1a0\ud070 \uc804\uc1a1"}),"\n",(0,n.jsxs)(t.p,{children:["Let's have a look at the example where both accounts are on the same ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/shard",children:"Shard"}),". \ud504\ub85c\uc138\uc2a4\ub294 \ud55c \uc0e4\ub4dc\uc5d0\uc11c \ub2e4\ub978 \uc0e4\ub4dc\ub85c \uc774\ub3d9\ud558\ub294 Receipt\uac00 \uc5c6\ub2e4\ub294 \uc810\uc744 \uc81c\uc678\ud558\uba74 \uc774\uc804 \uc608\uc81c\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/transaction",children:"Transaction"})," signed by ",(0,n.jsx)(t.strong,{children:"alice.near"})," is sent to the network. It is immediately executed, ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/execution-outcome",children:"ExecutionOutcome"})," is the result of converting the transaction into a ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/receipt",children:"Receipt"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Transaction execution",src:s(20123).Z+"",width:"1449",height:"700"})}),"\n",(0,n.jsxs)(t.p,{children:["The Receipt is already on the receiver's Shard, so it is put in the execution queue of the next ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/block",children:"Block"}),". It is executed in the next Block, and the ",(0,n.jsx)(t.a,{href:"https://docs.near.org/develop/lake/structures/execution-outcome",children:"ExecutionOutcome"})," result is a new Receipt with the refund to the initial sender, ",(0,n.jsx)(t.strong,{children:"alice.near"}),". \ub3d9\uc77c\ud55c \uaddc\uce59\uc774 \uc774 Receipt\uc5d0 \uc801\uc6a9\ub418\uba70 \uc2e4\ud589 \ub300\uae30\uc5f4\uc5d0 \ub123\uc5b4\uc9c0\uace0 \ub2e4\uc74c \ube14\ub85d\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Complete scheme of Token transfer between the account from the same Shards",src:s(5618).Z+"",width:"1337",height:"343"})}),"\n",(0,n.jsxs)(t.p,{children:["\uc774\uc81c \ub05d\ub0ac\uc2b5\ub2c8\ub2e4. \ub3d9\uc77c\ud55c \uc0e4\ub4dc \uc608\uc81c\uc5d0 \ub300\ud574 \ud504\ub85c\uc138\uc2a4\uac00 \uc9c0\ub098\uce58\uac8c \ubcf5\uc7a1\ud55c \uc774\uc720\uac00 \uad81\uae08\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2f5\uc740 ",(0,n.jsx)(t.strong,{children:"\ud56d\uc0c1 \ub3d9\uc77c\ud55c \uaddc\uce59\uc774 \uc801\uc6a9\ub41c\ub2e4\ub294 \uac83"}),'\uc785\ub2c8\ub2e4. \ub610\ud55c \uc774 \uba54\ucee4\ub2c8\uc998\uc744 \uc0ac\uc6a9\ud558\uba74 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uc0e4\ub4dc\uac00 \uc874\uc7ac\ud558\ub294\uc9c0\uc5d0 \uad00\uacc4\uc5c6\uc774 \ub2e8 \ud558\ub098\uc758 \uaddc\uc57d\uc73c\ub85c NEAR \ud504\ub85c\ud1a0\ucf5c \ub370\uc774\ud130 \ud750\ub984\uc744 \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c \ud504\ub85c\uc138\uc2a4\uac00 \ud56d\uc0c1 \ub3d9\uc77c\ud55c \uaddc\uce59\uc744 \ub530\ub974\uae30 \ub54c\ubb38\uc5d0, \uc6b0\ub9ac\ub294 \ub9ce\uc740 "if"\ub97c \ud53c\ud560 \uc218 \uc788\uace0, \ubcc4\ub3c4\uc758 \ucf54\ub108 \ucf00\uc774\uc2a4\ub97c \uc5fc\ub450\uc5d0 \ub458 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.']})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50843:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/01-diff-shards-complete-7c9b12595c1f681421859628823805a8.png"},5618:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/02-same-shard-complete-44d6ccee87fc7acf076084cdb4c6d46e.png"},20123:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/03-tx-outcome-receipt-0fcb113623aa8f546f29cd413b47a7db.png"},30938:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/04-send-nears-flow-cf058d744907ef8dee67e22c03249add.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(67294);const r={},c=n.createContext(r);function o(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);