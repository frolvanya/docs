"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4486],{10087:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=n(85893),t=n(11151),a=n(77229);const i=n.p+"assets/images/paging-through-hashes-swing--pierced_staggg.near--pierced_stag-252ce502eb06766d1dc11a6c40a0b60c.jpg",l=n.p+"assets/images/guards-contract-permissions--connoisseur_dane.near--connoisseurdane-a696aec63e7ccccc1442b9fe3eb4c664.png",o={sidebar_position:2,sidebar_label:"\uc5ec\ub7ec \ud37c\uc990 \uc800\uc7a5",title:"LookupMap\uc774\ub77c\ub294 NEAR \ud2b9\ud654 \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990 \uc800\uc7a5"},c="\uceec\ub809\uc158 \uc0ac\uc6a9",d={id:"tutorials/crosswords/beginner/collections",title:"LookupMap\uc774\ub77c\ub294 NEAR \ud2b9\ud654 \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990 \uc800\uc7a5",description:"\uc774\uc804 \ucc55\ud130\uc5d0\uc11c \uc5b8\uae09\ud588\ub4ef\uc774, \uc628\ub77c\uc778 Rust Book\uc740 Rust\ub97c \uc2dc\uc791\ud558\ub294 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \ud6cc\ub96d\ud55c \ucc38\uace0 \uc790\ub8cc\uc774\uc9c0\ub9cc, \ube14\ub85d\uccb4\uc778\uc744 \ub2e4\ub8f0 \ub54c\ub294 \ub2e4\ub978 \uac1c\ub150\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uac83\ub4e4 \uc911 \ud558\ub098\ub294, \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/02-beginner/01-collections.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/collections",permalink:"/ko/tutorials/crosswords/beginner/collections",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/01-collections.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705914809e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\uc5ec\ub7ec \ud37c\uc990 \uc800\uc7a5",title:"LookupMap\uc774\ub77c\ub294 NEAR \ud2b9\ud654 \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc5ec\ub7ec \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990 \uc800\uc7a5"},sidebar:"tutorials",previous:{title:"\uac1c\uc694",permalink:"/ko/tutorials/crosswords/beginner/overview"},next:{title:"\uad6c\uc870\uccb4 \ubc0f \uc5f4\uac70\ud615 \uc0ac\uc6a9",permalink:"/ko/tutorials/crosswords/beginner/structs-enums"}},u={},h=[{value:"LookupMap \ubc0f UnorderedSet",id:"lookupmap-\ubc0f-unorderedset",level:2},{value:"\uceec\ub809\uc158\uc758 \uc811\ub450\uc0ac",id:"\uceec\ub809\uc158\uc758-\uc811\ub450\uc0ac",level:2},{value:"\ud5c8\uac00? \ubb34\ud5c8\uac00?",id:"\ud5c8\uac00-\ubb34\ud5c8\uac00",level:2}];function p(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"\uceec\ub809\uc158-\uc0ac\uc6a9",children:"\uceec\ub809\uc158 \uc0ac\uc6a9"}),"\n",(0,s.jsxs)(r.p,{children:["\uc774\uc804 \ucc55\ud130\uc5d0\uc11c \uc5b8\uae09\ud588\ub4ef\uc774, ",(0,s.jsx)(r.a,{href:"https://doc.rust-lang.org/stable/book",children:"\uc628\ub77c\uc778 Rust Book"}),"\uc740 Rust\ub97c \uc2dc\uc791\ud558\ub294 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \ud6cc\ub96d\ud55c \ucc38\uace0 \uc790\ub8cc\uc774\uc9c0\ub9cc, \ube14\ub85d\uccb4\uc778\uc744 \ub2e4\ub8f0 \ub54c\ub294 \ub2e4\ub978 \uac1c\ub150\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uac83\ub4e4 \uc911 \ud558\ub098\ub294, \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(r.p,{children:"Rust SDK\uc758 \ubb38\uc11c\uc5d0 \uc774 \uac1c\ub150\uc774 \uc798 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(r.admonition,{title:"\ud2b9\uc218 \uceec\ub809\uc158\uc5d0 \ub300\ud55c \ub3d9\uae30",type:"note",children:[(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["\uc774\ub294** \uae30\ubcf8 \ube14\ub85d\uccb4\uc778 trie \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ubcf4\ub2e4 \ud6a8\uc728\uc801\uc73c\ub85c \ud65c\uc6a9**\ud558\uc5ec [Rust\uc758] std::collections::* \ub0b4 \ud45c\uc900 \ucee8\ud14c\uc774\ub108\uc5d0 \ub300\ud55c \ub300\uc548\uc744 \uc81c\uacf5\ud558\ub294 \uceec\ub809\uc158\uc785\ub2c8\ub2e4.",(0,s.jsx)("br",{})," \uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,s.jsx)(r.strong,{children:"\ud638\ucd9c \uc2dc\uc791 \uc2dc \uc804\uccb4 HashMap\uc744 \ub85c\ub4dc\ud558\uace0"})," \uc0c1\ud0dc \uc218\uc815\uc774 \uc788\ub294 \uacbd\uc6b0 \ub9c8\uc9c0\ub9c9\uc5d0 \uc804\uccb4 HashMap\uc744 \uc800\uc7a5\ud558\uae30 \ub54c\ubb38\uc5d0, \uc0c1\ud0dc\uc640 \ud6a8\uc728\uc801\uc73c\ub85c \uc791\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,s.jsx)(r.strong,{children:"\uc774\ub294 \uc801\uc740 \uc218\uc758 \uc694\uc18c\uc5d0\ub294 \uc801\ud569\ud558\uc9c0\ub9cc \ub9ce\uc740 \uc218\uc758 \uc694\uc18c\uac00 \uc788\uc744 \uacbd\uc6b0 \ub9e4\uc6b0 \ube44\ud6a8\uc728\uc801\uc785\ub2c8\ub2e4"}),"."]}),"\n"]}),(0,s.jsxs)(r.p,{children:["\u2014 ",(0,s.jsx)(r.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/index.html",children:"NEAR SDK \ucc38\uc870 \ubb38\uc11c"})," :::"]}),(0,s.jsxs)(r.p,{children:["\ucc55\ud130 1\uc5d0\uc11c\ub294 \ucc98\uc74c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \ub54c \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990 \uc815\ub2f5 \ud574\uc2dc\ub97c \uc124\uc815\ud558\uace0, \ucd08\uae30\ud654 \uba54\uc11c\ub4dc ",(0,s.jsx)(r.code,{children:"new"}),"\ub97c \ud638\ucd9c\ud558\uc5ec \uc804\ub2ec\ud588\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc6b0\ub9ac\uac00 \ub2e8 \ud558\ub098\uc758 \ud37c\uc990\ub9cc \uc124\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uc9c0\ub9cc, \uc774\uc678\uc5d0 \ub9ce\uc740 \uac83\uc744 \ud5c8\uc6a9\ud569\uc2dc\ub2e4."]}),(0,s.jsx)(r.p,{children:"\uc5ec\ub7ec \uc2ed\uc790\ub9d0\ud480\uc774\ub97c \uc800\uc7a5\ud558\ub294 \ucee8\ud2b8\ub799\ud2b8\uc778 \uacbd\uc6b0, \ucd94\uac00\ud558\uace0 \uc2f6\uc740 \ud56d\ubaa9\uc744 \ub192\uc740 \uc218\uc900\uc5d0\uc11c \ub17c\uc758\ud574 \ubd05\uc2dc\ub2e4. \uba3c\uc800, \uc6b0\ub9ac\ub294 \ud37c\uc990 \uc911 \uc77c\ubd80\uac00 \uc11c\ub85c \ub2e4\ub978 \uc0c1\ud0dc(\ubbf8\uc644\uc131 \ubc0f \uc644\ub8cc\ub428)\ub97c \uac16\ub294 \ub9ce\uc740 \ud37c\uc990\uc758 \uac1c\ub150\uc744 \uac16\uac8c \ub420 \uac83\uc774\uba70, \uc5b4\ub5a4 \ud37c\uc990\uc774 \ube68\ub9ac \ud480\ub9ac\uc9c0 \uc54a\uc558\ub294\uc9c0 \uc54c\uace0 \uc2f6\uc744 \uac83\uc785\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \ub54c \uc77c\ubc18\uc801\uc778 \uacbd\ud5d8 \ubc95\uce59 \uc911 \ud558\ub098\uc778 \ub610 \ub2e4\ub978 \uc0ac\ud56d\uc740, \uc0ac\uc6a9\ub7c9\uc774 \ub9ce\uc744 \uacbd\uc6b0 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uc77c\uc744 \uc608\uc0c1\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc790\ub9d0 \ud480\uc774\uac00 10,000\uac1c\uac00 \ub418\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694? \uadf8\uac83\uc774 \uc6b0\ub9ac\uac00 \uc0ac\uc6a9\ud558\ub294 \uc790\ub8cc \uad6c\uc870\uc758 \uc218\uc640 \ud615\ud0dc\uc5d0 \uc5b4\ub5a4 \uc601\ud5a5\uc744 \ubbf8\uce60 \uc218 \uc788\uc744\uae4c\uc694?"}),(0,s.jsx)(r.h2,{id:"lookupmap-\ubc0f-unorderedset",children:"LookupMap \ubc0f UnorderedSet"}),(0,s.jsx)(r.p,{children:"\ub450 \uac00\uc9c0 \ud2b9\uc218 NEAR \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud574 \ubd05\uc2dc\ub2e4."}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupMap.html",children:"LookupMap"}),": \ud0a4-\uac12 \uc30d\uc744 \uc800\uc7a5 (\uc815\ub2f5 \ud574\uc2dc \xbb \ud37c\uc990 \uac1d\uccb4)"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.UnorderedSet.html",children:"UnorderedSet"}),": \uc544\uc9c1 \ud480\ub9ac\uc9c0\uc9c0 \uc54a\uc740 \ud37c\uc990\uc5d0 \ub300\ud55c \uc815\ub2f5 \ud574\uc2dc \uc9d1\ud569(\uc911\ubcf5\uc774 \uc5c6\ub294 \ubaa9\ub85d)\uc744 \ud3ec\ud568"]}),"\n"]}),(0,s.jsxs)(r.p,{children:["Rust SDK\uc758 \ud2b9\uc218 \uceec\ub809\uc158 \ubaa9\ub85d\uc744 \ubcf4\uba74 \uc77c\ubd80\ub294 ",(0,s.jsx)(r.code,{children:"Lookup"}),"\ub85c \uc2dc\uc791\ud558\uace0, \ub2e4\ub978 \uc77c\ubd80\ub294 ",(0,s.jsx)(r.code,{children:"Unordered"}),"\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc38\uc870 \ubb38\uc11c\uc5d0 \uae30\ub85d\ub41c \ub300\ub85c, ",(0,s.jsx)(r.code,{children:"Lookup"}),"\uc740 \ubc18\ubcf5\ud560 \uc218 \uc5c6\uc9c0\ub9cc ",(0,s.jsx)(r.code,{children:"Unordered"})," \uceec\ub809\uc158\uc740 \ubc18\ubcf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \uc774 \uc790\ub8cc \uad6c\uc870\uc758 \ub0b4\uc6a9 \ubaa9\ub85d\uc744 \ubc18\ubcf5\ud574\uc57c \ud558\ub294 \uacbd\uc6b0, \ubc18\ubcf5 \uac00\ub2a5\ud55c \uc790\ub8cc \uad6c\uc870\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud0a4\ub85c\ub9cc \ub370\uc774\ud130\ub97c \ucd94\uac00 \ubc0f \uac80\uc0c9\ud558\uace0 \ud0a4\uac00 \ud56d\uc0c1 \uc54c\ub824\uc9c4 \uacbd\uc6b0, \ubc18\ubcf5 \ubd88\uac00\ub2a5\ud55c \uceec\ub809\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."]}),(0,s.jsxs)(r.p,{children:["\uadf8\ub807\ub2e4\uba74 \uc5ec\uae30\uc5d0 \ub450 \uac1c\uc758 \uc790\ub8cc \uad6c\uc870\uac00 \uc788\ub294 \uc774\uc720\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694? \ub2e4\uc2dc \ub9d0\ud558\uc9c0\ub9cc, \ub9ce\uc740 \uc218\uc758 \ud37c\uc990\uc774 \uc874\uc7ac\ud55c\ub2e4\uba74, \ubaa8\ub4e0 \ud37c\uc990\uc744 \ubc18\ubcf5\ud558\uc5ec \ud574\uacb0\ub418\uc9c0 \uc54a\uc740 \ud37c\uc990\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \ub2f9 \uac00\uc2a4 \uc2e4\ud589\uc758 \ud55c\uacc4 \ub54c\ubb38\uc5d0, \uc6b0\ub9ac\ub294 \uacb0\uad6d \uc774 \ud55c\uacc4\ub97c \ucd08\uacfc\ud558\uac8c \ub420 \uc791\uc5c5\uc774 \uc788\uc744 \uc218 \uc788\uc74c\uc744 \uc778\uc2dd\ud574\uc57c \ud569\ub2c8\ub2e4. \ud574\uacb0\ub418\uc9c0 \uc54a\uc740 \ud37c\uc990\uc758 ",(0,s.jsx)(r.code,{children:"UnorderedSet"}),"\uc5d0 \uc218\ub9cc \uac1c\uc758 \ud37c\uc990\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc744 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ud55c\uacc4\uc5d0 \ubd80\ub52a\ud788\ub294 \uac83\uc744 \ud53c\ud558\ub294 \ud55c \uac00\uc9c0 \ubc29\ubc95\uc774\uc9c0\ub9cc, \ub098\uc911\uc5d0 \ub2e4\ub8f0 ",(0,s.jsx)(r.code,{children:"UnorderedSet"}),"\uacfc \uac19\uc740 \ubc18\ubcf5 \uac00\ub2a5\ud55c \uceec\ub809\uc158\uc744 \ud1b5\ud574 ",(0,s.jsx)(r.strong,{children:"\ud398\uc774\uc9c0 \ub9e4\uae40"}),"\uc744 \ud65c\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6b8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:i,alt:"\ud574\uc2dc\uc758 \ud398\uc774\uc9c0\ud654\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ucc45. peered_stagg.near \uadf8\ub9bc",width:"600"}),(0,s.jsxs)("figcaption",{children:["\uceec\ub809\uc158\uc5d0 \uc5ec\ub7ec \ud398\uc774\uc9c0\uc758 \ud37c\uc990 \ud574\uc2dc\uac00 \uc788\ub2e4\uace0 \uc0dd\uac01\ud558\uc138\uc694.",(0,s.jsx)("br",{}),"Art by ",(0,s.jsx)("a",{href:"https://twitter.com/pierced_stag",target:"_blank",children:"pierced_staggg.near"})]})]}),(0,s.jsx)("br",{}),(0,s.jsxs)(r.p,{children:["\uc774\uc804 \ucc55\ud130\uc5d0\uc11c \uae30\uc5b5\ud588\ub4ef\uc774, \ubaa8\ub4e0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\ub294 ",(0,s.jsx)(r.code,{children:"#[near_bindgen]"})," \ub9e4\ud06c\ub85c\ub97c \ud3ec\ud568\ud558\ub294 \uae30\ubcf8 \uad6c\uc870\uccb4\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsxs)(r.mdxAdmonitionTitle,{children:["\uae30\ubcf8 \uad6c\uc870\uccb4 \uc774\ub984 \uc9c0\uc815 ",(0,s.jsx)(r.a,{href:"/ko/tutorials/crosswords/basics/set-up-skeleton#start-writing-rust",children:"\uc774\uc804 \ucc55\ud130"}),"\uc5d0\uc11c \uae30\ubcf8 \uad6c\uc870\uccb4 \uc774\ub984\uc744 ",(0,s.jsx)(r.code,{children:"Contract"}),"\ub77c\uace0 \uc9c0\uc815\ud588\uc9c0\ub9cc, \uc774 \ucc55\ud130\uc5d0\uc11c\ub294 ",(0,s.jsx)(r.code,{children:"Crossword"}),"\ub77c\uace0 \uc9c0\uc815\ud569\ub2c8\ub2e4."]}),(0,s.jsxs)(r.p,{children:["NEAR\uc758 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub4e4\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uc5ec\ub7ec \uaddc\uce59\uc744 \ubcfc \uc218 \uc788\uc9c0\ub9cc, \uad6c\uc870\uccb4\uc758 \uc774\ub984\uc740 \uc911\uc694\ud558\uc9c0 \uc54a\uc73c\uba70, \uc774\ub97c ",(0,s.jsx)(r.code,{children:"Contract"}),"\ub77c\uace0 \uc9c0\uc815\ud558\ub294 \ub370\uc5d0 \ud2b9\ubcc4\ud55c \uc774\uc720\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \ud2b9\ubcc4\ud55c \uac83\uc774 \uc5c6\ub2e4\ub294 \uac83\uc744 \uc124\uba85\ud558\uae30 \uc704\ud574, \ub2e4\ub978 \uc774\ub984\uc744 \ubd99\uc600\uc744 \ubfd0\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098, \uc6b0\ub9ac\uc758 ",(0,s.jsx)(r.code,{children:"impl"})," \ube14\ub85d\uc774 ",(0,s.jsx)(r.code,{children:"Crossword"}),"\ub77c\uace0 \uc774\ub984 \ubd99\uc5ec\uc9c4 \uac83\uc740 \uc758\ubbf8\uac00 ",(0,s.jsx)(r.em,{children:"\uc788\uc2b5\ub2c8\ub2e4"}),". :::"]}),(0,s.jsx)(r.p,{children:"\ubc18\ubcf5 \uac00\ub2a5/\ubd88\uac00\ub2a5\ud55c NEAR \uceec\ub809\uc158\uc5d0\uc11c \uad6c\uc870\uccb4\uac00 \uad6c\uc131\ub41c \ubc29\uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)(a.Ey,{language:"rust",start:"73",end:"79",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/276217ad82c64c610148e998ec926942ba910a12/contract/src/lib.rs"}),(0,s.jsxs)(r.p,{children:["Above, we have the ",(0,s.jsx)(r.code,{children:"puzzles"})," and ",(0,s.jsx)(r.code,{children:"unsolved_puzzles"})," fields which are collections."]}),(0,s.jsxs)(r.p,{children:["We also have an ",(0,s.jsx)(r.code,{children:"owner_id"})," so we can exercise a common pattern in smart contract development: implementing a rudimentary permission system which can restrict access to certain functions. We'll expand on this thought in a moment."]}),(0,s.jsxs)(r.p,{children:["The snippet below shows the first method in the implementation of the ",(0,s.jsx)(r.code,{children:"Crossword"})," struct, where the ",(0,s.jsx)(r.code,{children:"new"})," function sets up these two specialized collections."]}),(0,s.jsx)(a.Ey,{language:"rust",start:"81",end:"90",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/276217ad82c64c610148e998ec926942ba910a12/contract/src/lib.rs"}),(0,s.jsxs)(r.p,{children:["\ub530\ub77c\uc11c \ucd08\uae30\ud654 \ud568\uc218(",(0,s.jsx)(r.code,{children:"new"}),") \uc2e4\ud589 \uc911\uc5d0 ",(0,s.jsx)(r.code,{children:"owner_id"}),"\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\uc758 \ubaa9\uc801\uc744 \uc704\ud574, \uc18c\uc720\uc790\ub294 \ucee8\ud2b8\ub799\ud2b8 \uc790\uccb4\uc77c \uac00\ub2a5\uc131\uc774 \ub192\uc9c0\ub9cc, \uc774\ub294 DAO \ub610\ub294 \ub2e4\ub978 \uc0ac\uc6a9\uc790\uac00 \ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc73c\ub85c \uceec\ub809\uc158 \ud544\ub4dc\uc758 ",(0,s.jsx)(r.code,{children:'b"c"'}),"\ubc0f ",(0,s.jsx)(r.code,{children:'b"u"'})," \ube44\ud2b8\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(r.h2,{id:"\uceec\ub809\uc158\uc758-\uc811\ub450\uc0ac",children:"\uceec\ub809\uc158\uc758 \uc811\ub450\uc0ac"}),(0,s.jsxs)(r.p,{children:["\uc704\uc5d0\uc11c ",(0,s.jsx)(r.code,{children:"new"})," \ud568\uc218\ub294 \uace0\uc720\ud55c \uc811\ub450\uc0ac\ub97c \uc9c0\uc815\ud558\uc5ec \uad6c\uc870\uccb4\uc758 \ud544\ub4dc\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4. ",(0,s.jsx)(r.a,{href:"/sdk/rust/contract-structure/nesting#traditional-approach-for-unique-prefixes",children:"\uc5ec\uae30"}),"\uc5d0\uc11c \uc811\ub450\uc0ac\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uc218 \uc788\uc9c0\ub9cc, \uc774\ub7ec\ud55c \uc811\ub450\uc0ac(",(0,s.jsx)(r.code,{children:"c"})," \ubc0f ",(0,s.jsx)(r.code,{children:"u"}),")\ub294 \uc9e7\uace0 \ub2ec\ub77c\uc57c \ud55c\ub2e4\ub294 \uac83\uc744 \uc54c\uc544\ub450\uc138\uc694."]}),(0,s.jsxs)(r.p,{children:["\uc0c8\ub85c\uc6b4 \uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 \uc544\uc9c1 \uc815\uc758\ud558\uc9c0 \uc54a\uc740 \uc0c8 \uad6c\uc870\uccb4 ",(0,s.jsx)(r.code,{children:"Answer"}),"\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ub610\ud55c ",(0,s.jsx)(r.code,{children:"PuzzleStatus::Solved"})," \ubc0f ",(0,s.jsx)(r.code,{children:"PuzzleStatus::Unsolved"})," \uc640 \uac19\uc740 \uc5f4\uac70\ud615(Enums)\uc758 \uac1c\ub150\uc744 \uc18c\uac1c\ud560 \uac83\uc785\ub2c8\ub2e4. \ub2e4\uc74c \uc139\uc158\uc5d0\uc11c \uc774\uc5d0 \ub300\ud574 \ub2e4\ub8f0 \uac83\uc785\ub2c8\ub2e4."]}),(0,s.jsxs)(r.p,{children:["\uc2ed\uc790\ub9d0\ud480\uc774 \ud37c\uc990\uc774 \ud558\ub098\ub9cc \uc788\uc5c8\ub358 \uc774\uc804 \ucc55\ud130\uc640 \ub2ec\ub9ac, \uc0c8 \uceec\ub809\uc158\uc5d0 \ud37c\uc990\uc744 \uc0bd\uc785\ud560 \uac83\uc774\ubbc0\ub85c, ",(0,s.jsx)(r.code,{children:"new_puzzle"})," \uba54\uc11c\ub4dc\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(a.Ey,{language:"rust",start:"147",end:"163",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/8ec941c82539e6eafa4971444e1da9e4819330d3/contract/src/lib.rs"}),(0,s.jsx)(r.p,{children:"\uc774\uc81c \uc5ec\ub7ec \ud37c\uc990\uc744 \uc800\uc7a5\ud558\ub3c4\ub85d \uc124\uc815\ud588\uc2b5\ub2c8\ub2e4!"}),(0,s.jsx)(r.h2,{id:"\ud5c8\uac00-\ubb34\ud5c8\uac00",children:"\ud5c8\uac00? \ubb34\ud5c8\uac00?"}),(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:l,alt:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uac00\uae4c\uc6b4 \ub77c\ubca8\uc774 \uc788\ub294 \ubbf8\ub798\ud615 \ud074\ub7fd \uc55e\uc758 \uac00\ub4dc \ub610\ub294 \ubc14\uc6b4\uc11c. connoisseur_dane.near \uadf8\ub9bc",width:"600"}),(0,s.jsxs)("figcaption",{children:["\uc5b4\ub5a4 \uacc4\uc815\uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ub85c\uc9c1\uc5d0 \ub4e4\uc5b4\uac08 \uc218 \uc788\ub294\uc9c0 \ubcf4\ud638\ud569\ub2c8\ub2e4.",(0,s.jsx)("br",{}),"Art by ",(0,s.jsx)("a",{href:"https://twitter.com/connoisseurdane",target:"_blank",children:"connoisseur_dane.near"})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"NEAR\ub294 \ubb34\ud5c8\uac00\uc778\uac00\uc694?"})}),(0,s.jsx)(r.p,{children:"\uadf8\ub807\uc2b5\ub2c8\ub2e4."}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\uc774\uc804\uc5d0 \uad8c\ud55c \uc2dc\uc2a4\ud15c\uc774\ub780 \ubb34\uc5c7\uc744 \uc758\ubbf8\ud588\uc73c\uba70 \uad8c\ud55c\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 \ubb34\uc5c7\uc778\uac00\uc694?"})}),(0,s.jsx)(r.p,{children:"\uad8c\ud55c\uc744 \uc81c\uc5b4\ud560 \uc218 \uc788\ub294 \ub450 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc \uc790\uccb4\uc5d0\uc11c"}),"\n",(0,s.jsx)(r.li,{children:"\ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0"}),"\n"]}),(0,s.jsx)(r.p,{children:"\uc774 \ucc55\ud130\uc758 \ub4b7\ubd80\ubd84\uc5d0\uc11c \ub450 \ubc88\uc9f8 \uc8fc\uc81c\uc5d0 \ub300\ud574 \ub2e4\ub8e8\uaca0\uc9c0\ub9cc, \uc6b0\uc120\uc740 \uccab \ubc88\uc9f8 \ud56d\ubaa9\uc5d0 \uc911\uc810\uc744 \ub458 \uac83\uc785\ub2c8\ub2e4."}),(0,s.jsxs)(r.p,{children:["\uc774\uc804 \uc2a4\ub2c8\ud3ab\uc5d0\uc11c \ubcfc \uc218 \uc788\ub4ef\uc774 ",(0,s.jsx)(r.code,{children:"new_puzzle"})," \uba54\uc11c\ub4dc\uc5d0\uc11c \uac00\uc7a5 \uba3c\uc800 \ubc1c\uc0dd\ud558\ub294 \uc77c\uc740 \ud655\uc778\uc785\ub2c8\ub2e4. predecessor(\uac00\uc7a5 \ucd5c\uadfc\uc5d0 \uc774 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud55c \uc0ac\ub78c, \ub54c\ub85c\ub294 \uc11c\uba85\uc790\uc640 \ub3d9\uc77c)\uac00 \ucee8\ud2b8\ub799\ud2b8 \ucd08\uae30\ud654 \uc911\uc5d0 \uc124\uc815\ud55c ",(0,s.jsx)(r.code,{children:"owner_id"}),"\uc640 \ub3d9\uc77c\ud55c\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."]}),(0,s.jsxs)(r.p,{children:["\ub2e4\ub978 \uc0ac\ub78c\uc774 ",(0,s.jsx)(r.code,{children:"new_puzzle"}),"\uc744 \ud638\ucd9c\ud558\ub824\uace0 \ud558\uba74, \uc774 \ud655\uc778\uc740 \uc2e4\ud328\ud558\uace0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud328\ub2c9 \uc0c1\ud0dc\uac00 \ub418\uc5b4 \ub354 \uc774\uc0c1 \uc9c4\ud589\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774 \uc608\uc81c\ub294 \uac00\uc7a5 \uac04\ub2e8\ud55c \ud615\uc2dd\uc758 \uad8c\ud55c\uc744 \uc124\uba85\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ud6e8\uc52c \ub354 \ubcf5\uc7a1\ud55c \uc2dc\uc2a4\ud15c\uc774 \uc874\uc7ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 SputnikDAO \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \ub9de\ucda4\ud615 \uc815\ucc45\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc5ed\ud560/\uc815\ucc45\uc744 \uc791\uc131\ud558\uace0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc801\uc6a9\ud558\ub294 \uac83\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc790\uc758 \ubaab\uc785\ub2c8\ub2e4. \uacbd\uc6b0\uc5d0 \ub530\ub77c \ud5c8\uc6a9 \ubaa9\ub85d(\ub610\ub294 \ud654\uc774\ud2b8\ub9ac\uc2a4\ud2b8)\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),(0,s.jsxs)(r.p,{children:["\uac04\ub2e8\ud788 \ub9d0\ud574\uc11c, ",(0,s.jsx)(r.strong,{children:"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \uc788\ub294 \ubaa8\ub4e0 \uacc4\uc815\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ubaa8\ub4e0 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\uc9c0\ub9cc"}),", \uc774\ub294 \uc774\ub4e4\uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc2e4\ud589\uc744 \uacc4\uc18d\ud560 \uc218 \uc788\ub2e4\ub294 \uc758\ubbf8\ub294 \uc544\ub2d9\ub2c8\ub2e4. \uc774\ub294 \uac1c\ubc1c\uc790\uc758 \ubaab\uc774\uace0, ",(0,s.jsx)(r.code,{children:"new_puzzle_"}),"\uc5d0 \uc788\ub294 \uac83\uacfc \uac19\uc740 \uac00\ub4dc\ub97c \ud1b5\ud574 \ud568\uc218\ub97c \uc9c0\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,s.jsx)(r.hr,{}),(0,s.jsx)(r.p,{children:"\ub2e4\uc74c\uc73c\ub85c \uad6c\uc870\uccb4\uc640 \uc5f4\uac70\ud615\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."})]})]})]})}function x(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var s=n(36905);const t={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,i),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>k});var s=n(67294),t=n(36905),a=n(12466),i=n(16550),l=n(20469),o=n(91980),c=n(67392),d=n(50012);function u(e){var r,n;return null!=(r=null==(n=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,s.useMemo)((function(){var e=null!=r?r:function(e){return u(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function x(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId,a=(0,i.k6)(),l=function(e){var r=e.queryString,n=void 0!==r&&r,s=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,s.useCallback)((function(e){if(l){var r=new URLSearchParams(a.location.search);r.set(l,e),a.replace(Object.assign({},a.location,{search:r.toString()}))}}),[l,a])]}function j(e){var r,n,t,a,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,u=e.groupId,j=h(e),b=(0,s.useState)((function(){return function(e){var r,n=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var t=null!=(r=s.find((function(e){return e.default})))?r:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:j})})),f=b[0],m=b[1],g=x({queryString:c,groupId:u}),v=g[0],w=g[1],k=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(r),t=n[0],a=n[1],[t,(0,s.useCallback)((function(e){r&&a.set(e)}),[r,a])]),y=k[0],_=k[1],A=function(){var e=null!=v?v:y;return p({value:e,tabValues:j})?e:null}();return(0,l.Z)((function(){A&&m(A)}),[A]),{selectedValue:f,selectValue:(0,s.useCallback)((function(e){if(!p({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);m(e),w(e),_(e)}),[w,_,j]),tabValues:j}}var b=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(85893);function g(e){var r=e.className,n=e.block,s=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,n=o.indexOf(r),t=l[n].value;t!==s&&(c(r),i(t))},u=function(e){var r,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var s,t=o.indexOf(e.currentTarget)+1;n=null!=(s=o[t])?s:o[0];break;case"ArrowLeft":var a,i=o.indexOf(e.currentTarget)-1;n=null!=(a=o[i])?a:o[o.length-1]}null==(r=n)||r.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},r),children:l.map((function(e){var r=e.value,n=e.label,a=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},a,{className:(0,t.Z)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===r}),children:null!=n?n:r}),r)}))})}function v(e){var r=e.lazy,n=e.children,t=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=a.find((function(e){return e.props.value===t}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map((function(e,r){return(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==t})}))})}function w(e){var r=j(e);return(0,m.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(g,Object.assign({},e,r)),(0,m.jsx)(v,Object.assign({},e,r))]})}function k(e){var r=(0,b.Z)();return(0,m.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(r))}},77229:(e,r,n)=>{n.d(r,{Ey:()=>d,O2:()=>o,SQ:()=>c});n(67294);var s=n(74866),t=n(85162),a=n(95665),i=n.n(a),l=n(85893);function o(e){var r=e.children;return Array.isArray(r)||(r=[r]),(0,l.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:r.map((function(e,r){return(0,l.jsx)(t.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var r=e.children,n=e.language;return Array.isArray(r)||(r=[r]),r=r.map((function(e){return function(e,r){var n=e.props,s=(n.children,n.url),t=n.start,a=n.end,i=n.fname;if(e.type===d)return d({url:s,start:t,end:a,language:r,fname:i});return e}(e,n)})),1==r.length?(0,l.jsx)(t.Z,{value:0,label:r[0].props.fname,children:r[0]}):(0,l.jsx)(s.Z,{className:"file-tabs",children:r.map((function(e,r){return(0,l.jsx)(t.Z,{value:r,label:e.props.fname,children:e})}))})}function d(e){var r=e.url,n=e.start,s=e.end,t=e.language,a=e.fname,o=r+"#";return n&&s&&(o+="L"+n+"-L"+s+"#"),(0,l.jsx)(i(),{language:t,fname:a,children:o})}}}]);