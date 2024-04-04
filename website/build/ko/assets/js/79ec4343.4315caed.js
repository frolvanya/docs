"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2013],{45233:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=t(85893),r=t(11151);const c={sidebar_position:4},o="\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",a={id:"sdk/js/promises/deploy-contract",title:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",description:"\ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc774\uc720\ub85c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud6c4\uc18d \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud558\uae30\ub97c \uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/js/promises/deploy-contract.md",sourceDirName:"sdk/js/promises",slug:"/sdk/js/promises/deploy-contract",permalink:"/ko/sdk/js/promises/deploy-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/promises/deploy-contract.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tools",previous:{title:"\uacc4\uc815 \uc0dd\uc131",permalink:"/ko/sdk/js/promises/create-account"},next:{title:"\uae30\ubcf8 \uc9c0\uce68",permalink:"/ko/sdk/js/building/basics"}},i={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\ucee8\ud2b8\ub799\ud2b8-\ubc30\ud3ec",children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n",(0,s.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc774\uc720\ub85c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud6c4\uc18d \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud558\uae30\ub97c \uc6d0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The contract acts as a Factory, a pattern where a parent contract creates many child contracts (",(0,s.jsx)(n.a,{href:"https://www.mintbase.xyz/",children:"Mintbase"})," does this to create a new NFT store for ",(0,s.jsx)(n.a,{href:"https://docs.mintbase.xyz/creating/store/deploy-fee",children:"anyone who wants one"}),"; ",(0,s.jsx)(n.a,{href:"https://near.org/bridge/",children:"Rainbow Bridge"})," does this to deploy separate Fungible Token contracts for ",(0,s.jsx)(n.a,{href:"https://github.com/aurora-is-near/rainbow-token-connector/blob/ce7640da144f000e0a93b6d9373bbc2514e37f3b/bridge-token-factory/src/lib.rs#L311-L341",children:"each bridged token"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["\ucee8\ud2b8\ub799\ud2b8\uac00 ",(0,s.jsx)(n.a,{href:"/ko/develop/upgrade#programmatic-update",children:"\ucf54\ub4dc\ub97c \uc790\uccb4\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"})," (",(0,s.jsx)(n.code,{children:"deploy"})," \uc790\uccb4 \ud638\ucd9c)."]}),"\n",(0,s.jsxs)(n.li,{children:["\uc0ac\uc6a9\uc790(",(0,s.jsx)(n.code,{children:"your-app.user1.near"}),", ",(0,s.jsx)(n.code,{children:"your-app.user2.near"}),' \ub4f1) \uc5d0 \ub300\ud55c \uc571\ubcc4 \ud558\uc704 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uace0, \uac01\uac01\uc5d0 \ub3d9\uc77c\ud55c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub294 "\uc0ac\uc6a9\uc790 \ud55c \uba85\ub2f9 \ud558\ub098\uc758 \ucee8\ud2b8\ub799\ud2b8" \uc2dc\uc2a4\ud15c\uc744 \uad6c\ud604\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \ud604\uc7ac NEAR\uc758 ',(0,s.jsx)(n.a,{href:"https://docs.near.org/concepts/storage/storage-staking",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc218\uc218\ub8cc"}),'\ub85c \uc778\ud574 \uc5c4\uccad\ub098\uac8c \ube44\uc2f8\uc9c0\ub9cc, \ud5a5\ud6c4 \ucd5c\uc801\ud654\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \uc774\ub7ec\ud55c \uc885\ub958\uc758 "\uc0e4\ub529\ub41c \uc571 \ub514\uc790\uc778"\uc740 \ucee8\ud2b8\ub799\ud2b8 \ud45c\uc900 \ubc0f \uc571 \uba54\ucee4\ub2c8\uc998\uc5d0 \ub300\ud55c \ubcf4\ub2e4 \ud655\uc7a5 \uac00\ub2a5\ud558\uace0 \uc0ac\uc6a9\uc790 \uc911\uc2ec\uc801\uc778 \uc811\uadfc \ubc29\uc2dd\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud328\ub7ec\ub2e4\uc784\uc5d0 \ub300\ud55c \ucd08\uae30 \uc2e4\ud5d8\uc740 ',(0,s.jsx)(n.a,{href:"https://github.com/metanear",children:"Meta NEAR"}),"\ub77c\uace0 \ubd88\ub9bd\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\ubaa9\ud45c\uac00 Mintbase \ub610\ub294 Rainbow Bridge\uc640 \uac19\uc740 \uae30\ubcf8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud558\uc704 \uacc4\uc815\uc5d0 \ubc30\ud3ec\ud558\ub294 \uac83\uc774\ub77c\uba74, \uacc4\uc815\ub3c4 \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub9c8\uc9c0\ub9c9 \uba87 \ud398\uc774\uc9c0\uc758 \uac1c\ub150\uc744 \uacb0\ud569\ud558\uba74 \ub2e4\uc74c\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { includeBytes, NearPromise, near } from "near-sdk-js";\n\nconst CODE = includeBytes("./res/contract.wasm");\n\nNearPromise.new("subaccount.example.near")\n  .createAccount()\n  .addFullAccessKey(near.signerAccountPk())\n  .transfer(BigInt(3_000_000_000_000_000_000_000_000)) // 3e24yN, 3N\n  .deployContract(CODE);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\uc804\uccb4 \ucee8\ud2b8\ub799\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,s.jsx)(n.code,{children:"code"}),"\ub97c ",(0,s.jsx)(n.code,{children:"includeBytes"}),"\ub85c \ud558\ub4dc \ucf54\ub529\ud558\uc9c0 \uc54a\uace0, \uc778\uc790\ub85c \uc804\ub2ec\ud558\ub294 \ub2e8\uc21c\ud55c \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { NearPromise, near, validateAccountId } from "near-sdk-js";\n\nconst INITIAL_BALANCE = BigInt(3_000_000_000_000_000_000_000_000); // 3e24yN, 3N\n\n@NearBindgen({})\nexport class Contract {\n  @call({ privateFunction: true })\n  createAccount({ prefix, code }) {\n    const subAccountId = `${prefix}.${near.currentAccountId()}`;\n    validateAccountId(subAccountId);\n    NearPromise.new(subAccountId)\n        .createAccount()\n        .addFullAccessKey(near.signerAccountPk())\n        .transfer(INITIAL_BALANCE)\n        .deployContract(code);\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\uac83\uc774 \ub2e8\uc21c\ud55c \uc811\uadfc \ubc29\uc2dd\uc778 \uc774\uc720\ub294 \ubb34\uc5c7\uc77c\uae4c\uc694? \uc774\ub294 4MB \ud2b8\ub79c\uc7ad\uc158 \ud06c\uae30 \uc81c\ud55c\uc73c\ub85c \uc778\ud574 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc704\uc758 \ud568\uc218\ub294 \uc804\uccb4 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc5ed\uc9c1\ub82c\ud654\ud558\uace0 \ud799 \uc601\uc5ed\uc5d0 \ud560\ub2f9\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c \ub9ce\uc740 \uc0c1\ud669\uc5d0\uc11c\ub294 ",(0,s.jsx)(n.code,{children:"includeBytes"})," \uc811\uadfc \ubc29\uc2dd\uc774 \uc120\ud638\ub429\ub2c8\ub2e4. \ucef4\ud30c\uc77c\ub41c Wasm\uc744 \uc778\uc790\ub85c \ucca8\ubd80\ud574\uc57c \ud558\ub294 \uacbd\uc6b0, ",(0,s.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract/blob/a8fc9a8c1cbde37610e56e1efda8e5971e79b845/sputnikdao2/src/types.rs#L74-L142",children:"Sputnik DAO v2"}),"\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc811\uadfc \ubc29\uc2dd\uc744 \ubcf5\uc0ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);