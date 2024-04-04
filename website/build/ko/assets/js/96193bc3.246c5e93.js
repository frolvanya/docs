"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1727],{51120:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(85893),i=t(11151);const r={sidebar_position:1,sidebar_label:"\uc18c\uac1c",pagination_label:"Promise: \uc18c\uac1c"},o="Promise",c={id:"sdk/rust/promises/intro",title:"Promise",description:'\ud2b8\ub79c\uc7ad\uc158\uc740 Promise\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc804\uc1a1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9ce\uc740 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc758 Promise\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c, \uc774\ub4e4\uc740 \ubbf8\ub798\uc5d0 \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. NEAR\uc758 \uacbd\uc6b0 \uc774 "\ubbf8\ub798" \ub294 \uc6d0\ub798 \ud568\uc218 \ud638\ucd9c\uacfc \ub3d9\uc77c\ud55c \ube14\ub85d\uc774 \uc544\ub2c8\ub77c \ub2e4\uc74c \ube14\ub85d(\ub610\ub294 \uadf8 \ubd80\uadfc)\uc5d0\uc11c_ \uc2e4\ud589\ub420 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/promises/intro.md",sourceDirName:"sdk/rust/promises",slug:"/sdk/rust/promises/intro",permalink:"/ko/sdk/rust/promises/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/promises/intro.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\uc18c\uac1c",pagination_label:"Promise: \uc18c\uac1c"},sidebar:"tools",previous:{title:"\ucf5c\ubc31",permalink:"/ko/sdk/rust/cross-contract/callbacks"},next:{title:"$NEAR \uc804\uc1a1",permalink:"/ko/sdk/rust/promises/token-tx"}},d={},l=[];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"promise",children:"Promise"}),"\n",(0,n.jsxs)(s.p,{children:["\ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,n.jsx)(s.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/struct.Promise.html",children:(0,n.jsx)(s.code,{children:"Promise"})}),'\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc804\uc1a1\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9ce\uc740 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc758 Promise\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c, \uc774\ub4e4\uc740 \ubbf8\ub798\uc5d0 \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. NEAR\uc758 \uacbd\uc6b0 \uc774 "\ubbf8\ub798" \ub294 \uc6d0\ub798 \ud568\uc218 \ud638\ucd9c\uacfc \ub3d9\uc77c\ud55c \ube14\ub85d\uc774 \uc544\ub2c8\ub77c ',(0,n.jsx)(s.em,{children:"\ub2e4\uc74c \ube14\ub85d(\ub610\ub294 \uadf8 \ubd80\uadfc)\uc5d0\uc11c"})," \uc2e4\ud589\ub420 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(s.p,{children:["Promise\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub4e0 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8(cross-contract) \uc6cc\ud06c\ud50c\ub85c\ub97c \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub4e4\uc740 ",(0,n.jsx)(s.a,{href:"/ko/sdk/rust/cross-contract/callbacks",children:"\ub9c8\uc9c0\ub9c9 \uc139\uc158"}),"\uc5d0\uc11c \ub17c\uc758\ub41c \ub192\uc740 \uc218\uc900\uc758 \uc811\uadfc \ubc29\uc2dd\uacfc \ub0ae\uc740 \uc218\uc900\uc758 \uc811\uadfc \ubc29\uc2dd \uc0ac\uc774\uc758 \uc911\uac04 \uc9c0\uc810\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc704\uc5d0 \ub9c1\ud06c\ub41c \uc804\uccb4 Promise \ubb38\uc11c\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),"\n",(0,n.jsx)(s.p,{children:"\uadf8\ub7ec\ub098 Promise\uac00 \uace0\uc720\ud55c \ubc29\uc2dd\uc73c\ub85c \uc791\ub3d9 \uac00\ub2a5\ud55c \uba87 \uac00\uc9c0 \uc0c1\ud669\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc0c1\ud669\uc5d0\ub294 \ud568\uc218 \ud638\ucd9c\uc774 \ud3ec\ud568\ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"$NEAR \uc804\uc1a1"}),"\n",(0,n.jsx)(s.li,{children:"\uacc4\uc815 \uc0dd\uc131"}),"\n",(0,n.jsx)(s.li,{children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.mdxAdmonitionTitle,{children:["\uc65c \uae30\ub2e4\ub9b4\uae4c\uc694? \ud568\uc218\uac00 \ud638\ucd9c\ub420 \ub54c \ub3d9\uc77c\ud55c \ube14\ub85d\uc5d0\uc11c \uc774\ub7ec\ud55c \uc791\uc5c5\uc744 \ub3d9\uae30\uc801\uc73c\ub85c \uc218\ud589\ud558\uc9c0 \uc54a\ub294 \uc774\uc720\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694? NEAR \uc5d0\uc11c \ud1a0\ud070\uc744 \ubcf4\ub0b4\uac70\ub098 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uba70, \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub294 \ub370 ",(0,n.jsx)(s.code,{children:"Promise"}),"\uac00 \ud544\uc694\ud55c \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?"]}),(0,n.jsxs)(s.p,{children:['\ubc1c\uc2e0\uc790\uc640 \uc218\uc2e0\uc790 \uacc4\uc815\uc774 \uc11c\ub85c \ub2e4\ub978 \uc0e4\ub4dc\uc5d0 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \uad50\ucc28 \uc0e4\ub4dc \ud1b5\uc2e0\uc740 Receipt\ub97c \uc804\ub2ec\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ube14\ub85d \uac04\uc5d0 \ubc1c\uc0dd\ud558\ubbc0\ub85c, \ubcc4\ub3c4\uc758 \ube14\ub85d\uc5d0\uc11c \uc9c4\ud589\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4(NEAR\uc758 Receipt\ub97c "\ub0b4\ubd80 \ud2b8\ub79c\uc7ad\uc158"\uc73c\ub85c \uc0dd\uac01\ud560 \uc218 \uc788\uc74c). You can see these receipts being passed from block to block ',(0,n.jsx)(s.a,{href:"https://nearblocks.io/txns/36n3tBNiF497Tm9mijEpsCUvejL8mBYF1CEWthCnY8FV",children:"in NEAR Explorer"}),". :::"]})]})]})}function m(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>o});var n=t(67294);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);