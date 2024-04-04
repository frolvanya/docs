"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9002],{29803:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var s=i(85893),d=i(11151),c=i(2154);const t={id:"social",title:"Social Interactions"},r=void 0,l={id:"bos/api/social",title:"Social Interactions",description:"NEAR components can natively communicate with the SocialDB smart contract (currently deployed at social.near).",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/bos/api/social.md",sourceDirName:"bos/api",slug:"/bos/api/social",permalink:"/ko/bos/api/social",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/social.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,frontMatter:{id:"social",title:"Social Interactions"},sidebar:"build",previous:{title:"Interacting with Near",permalink:"/ko/bos/api/near"},next:{title:"Social Notifications",permalink:"/ko/bos/api/notifications"}},o={},h=[{value:"Social.get",id:"socialget",level:2},{value:"Social.getr",id:"socialgetr",level:2},{value:"Social.keys",id:"socialkeys",level:2},{value:"Social.set",id:"socialset",level:2},{value:"Social.index",id:"socialindex",level:2},{value:"Indexing an Action",id:"indexing-an-action",level:3},{value:"Indexing a Post",id:"indexing-a-post",level:4},{value:"Indexing a Like",id:"indexing-a-like",level:4},{value:"Retrieving Indexed Actions",id:"retrieving-indexed-actions",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["NEAR components can natively communicate with the ",(0,s.jsx)(n.a,{href:"https://github.com/NearSocial/social-db",children:"SocialDB smart contract"})," (currently deployed at ",(0,s.jsx)(n.a,{href:"https://nearblocks.io/address/social.near",children:"social.near"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"SocialDB"})," is a contract that stores ",(0,s.jsx)(n.code,{children:"key-value"})," pairs, and is used mostly to store social-related data, such as ",(0,s.jsx)(n.code,{children:"posts"}),", ",(0,s.jsx)(n.code,{children:"likes"}),", or ",(0,s.jsx)(n.code,{children:"profiles"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Besides user data, the ",(0,s.jsx)(n.code,{children:"SocialDB"})," contract stores ",(0,s.jsx)(n.strong,{children:"all existing NEAR components"}),"."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"socialget",children:"Social.get"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Social.get"})," queries a key from the SocialDB contract and returns the data. The key being queried can contain wildcards."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alice.near/profile/**"}),"  will match the entire profile data of account alice.near."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alice.near/profile/*"})," will match all the fields of the profile, but not the nested objects."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"alice.near/profile/name"})," will match only the name field of the profile."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"*/widget/*"})," will match all the widgets of all the accounts."]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(c.W,{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Ask for the `profile` key of the influencer.testnet account\nconst profile = Social.get("influencer.testnet/profile/*");\n\n// Ask a component from the influencer.testnet account\nconst widget = Social.get("influencer.testnet/widget/Greeter");\n\nif(profile === null || widget === null) return "Loading ..."\n\nreturn (\n  <div>\n    <p>Profile: {JSON.stringify(profile)}</p>\n    <p>Widgets: {JSON.stringify(widget)} </p>\n  </div>\n);\n'})})}),"\n",(0,s.jsxs)(i,{markdown:"1",children:[(0,s.jsx)("summary",{children:" Parameters "}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(n.th,{children:"\uc790\ub8cc\ud615"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"patterns"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\ud544\uc218"})}),(0,s.jsx)(n.td,{children:"string / string[]"}),(0,s.jsx)(n.td,{children:"\uacbd\ub85c \ud328\ud134"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"finality"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:'"final"'})," / \uc22b\uc790"]}),(0,s.jsx)(n.td,{children:"\ube14\ub85d \ub192\uc774 \ub610\ub294 \uc644\uacb0\uc131"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"options"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,s.jsx)(n.td,{children:"\uac1d\uccb4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"options"})," \uac1d\uccb4"]})]})]})]}),(0,s.jsx)(n.admonition,{title:"options object",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subscribe"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": true\uc774\uba74 \ub370\uc774\ud130\uac00 5\ucd08\ub9c8\ub2e4 \uc0c8\ub85c \uace0\uccd0\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"return_deleted"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uc0ad\uc81c\ub41c \uac12\uc744 (",(0,s.jsx)(n.code,{children:"null"}),"\ub85c) \ubc18\ud658\ud560\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 ",(0,s.jsx)(n.code,{children:"false"}),"\uc785\ub2c8\ub2e4."]}),"\n"]})}),(0,s.jsxs)(n.p,{children:["The block height or finality can be used to get the data at a specific block height or finality. If the block height or finality is not specified, the data will be fetched at the ",(0,s.jsx)(n.code,{children:"optimistic"})," finality (the latest block height)."]}),(0,s.jsxs)(n.p,{children:["For block height and finality ",(0,s.jsx)(n.code,{children:"final"}),", instead of calling the NEAR RPC directly, the VM uses the Social API Server to fetch the data."]}),(0,s.jsx)(n.p,{children:"Social API server indexes the data for SocialDB and allows to fetch the data at any block height with additional options."}),(0,s.jsx)(n.p,{children:"It also allows returning more data than an RPC call because it's not restricted by the gas limit. In general, the API server also serves data faster than the NEAR RPC, because it doesn't execute the contract code in a virtual machine."})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["While the data is fetching, ",(0,s.jsx)(n.code,{children:"Social.get"})," returns ",(0,s.jsx)(n.code,{children:"null"}),"."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"socialgetr",children:"Social.getr"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Social.getr"}),"\uc740 ",(0,s.jsx)(n.code,{children:"Social.get"}),"\uc758 \ub798\ud37c \ud5ec\ud37c\uc77c \ubfd0\uc774\uba70, \uac01 \uacbd\ub85c \ud328\ud134\uc5d0 ",(0,s.jsx)(n.code,{children:"**"}),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(c.W,{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const profile = Social.getr("influencer.testnet/profile");\n\nreturn (\n  <div>\n    <p>Profile: {JSON.stringify(profile)}</p>\n  </div>\n);\n'})})}),"\n",(0,s.jsxs)(i,{markdown:"1",children:[(0,s.jsx)("summary",{children:" Parameters "}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(n.th,{children:"\uc790\ub8cc\ud615"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"patterns"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\ud544\uc218"})}),(0,s.jsx)(n.td,{children:"string / string[]"}),(0,s.jsx)(n.td,{children:"\uacbd\ub85c \ud328\ud134"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"finality"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:'"final"'})," / \uc22b\uc790"]}),(0,s.jsx)(n.td,{children:"\ube14\ub85d \ub192\uc774 \ub610\ub294 \uc644\uacb0\uc131"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"options"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,s.jsx)(n.td,{children:"\uac1d\uccb4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"options"})," \uac1d\uccb4"]})]})]})]}),(0,s.jsx)(n.admonition,{title:"options \uac1d\uccb4",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subscribe"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": true\uc774\uba74 \ub370\uc774\ud130\uac00 5\ucd08\ub9c8\ub2e4 \uc0c8\ub85c \uace0\uccd0\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"return_deleted"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uc0ad\uc81c\ub41c \uac12\uc744 (",(0,s.jsx)(n.code,{children:"null"}),"\ub85c) \ubc18\ud658\ud560\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 ",(0,s.jsx)(n.code,{children:"false"}),"\uc785\ub2c8\ub2e4."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"socialkeys",children:"Social.keys"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"keys"})," method allows to get the list of keys that match a pattern. It's useful for querying the data without reading values."]}),"\n",(0,s.jsxs)(n.p,{children:["It also has an additional ",(0,s.jsx)(n.code,{children:"options"})," field that can be used to specify the return type and whether to return deleted keys."]}),"\n",(0,s.jsx)(c.W,{height:"80",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const data = Social.keys(`influencer.testnet/profile/*`, "final");\n\nreturn JSON.stringify(data)\n'})})}),"\n",(0,s.jsxs)(i,{markdown:"1",children:[(0,s.jsx)("summary",{children:" Parameters "}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Social.key"}),"\ub294 \ucd5c\ub300 3\uac1c\uc758 \uc778\uc218\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4:"]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(n.th,{children:"\uc790\ub8cc\ud615"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"patterns"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\ud544\uc218"})}),(0,s.jsx)(n.td,{children:"string / string[]"}),(0,s.jsx)(n.td,{children:"\uacbd\ub85c \ud328\ud134"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"finality"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:'"final"'})," / \uc22b\uc790"]}),(0,s.jsx)(n.td,{children:"\ube14\ub85d \ub192\uc774 \ub610\ub294 \uc644\uacb0\uc131"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"options"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,s.jsx)(n.td,{children:"\uac1d\uccb4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"options"})," \uac1d\uccb4"]})]})]})]}),(0,s.jsx)(n.admonition,{title:"options \uac1d\uccb4",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subscribe"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": true\uc774\uba74 \ub370\uc774\ud130\uac00 5\ucd08\ub9c8\ub2e4 \uc0c8\ub85c \uace0\uccd0\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"return_type"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": ",(0,s.jsx)(n.code,{children:'"History"'}),", ",(0,s.jsx)(n.code,{children:'"True"'})," \ub610\ub294 ",(0,s.jsx)(n.code,{children:'"Block Height"'})," \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 ",(0,s.jsx)(n.code,{children:'"True"'}),"\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"return_deleted"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uc0ad\uc81c\ub41c \uac12\uc744 (",(0,s.jsx)(n.code,{children:"null"}),"\ub85c) \ubc18\ud658\ud560\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 ",(0,s.jsx)(n.code,{children:"false"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"values_only"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uac12\ub9cc \ubc18\ud658\ud560\uc9c0 \uc5ec\ubd80\uc785\ub2c8\ub2e4(\uac1d\uccb4\ub294 \ud3ec\ud568\ud558\uc9c0 \uc54a\uc74c). \uae30\ubcf8\uac12\uc740 ",(0,s.jsx)(n.code,{children:"false"}),"\uc785\ub2c8\ub2e4."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Social API \uc11c\ubc84\ub294 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \uc635\uc158 ",(0,s.jsx)(n.code,{children:'return_type: "History"'}),"\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uac01 \uc77c\uce58 \ud0a4\uc5d0 \ub300\ud574 \uac12\uc774 \uc624\ub984\ucc28\uc21c\uc73c\ub85c \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c \ubaa8\ub4e0 \ube14\ub85d \ub192\uc774\uac00 \ud3ec\ud568\ub41c \ubc30\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uac12\uc744 \ub36e\uc5b4\uc4f0\ub294 \ud53c\ub4dc\ub97c \ub9cc\ub4dc\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"socialset",children:"Social.set"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"data"})," \uac1d\uccb4\ub97c \uac00\uc838\uc640 SocialDB\uc5d0 \ucee4\ubc0b\ud569\ub2c8\ub2e4. The data object can contain multiple keys, and each key can contain multiple values."]}),"\n",(0,s.jsxs)(n.p,{children:["Importantly, a user can only commit to ",(0,s.jsx)(n.strong,{children:"their own"})," space in ",(0,s.jsx)(n.code,{children:"SocialDB"})," (e.g. ",(0,s.jsx)(n.code,{children:"alice.near"})," can only write in ",(0,s.jsx)(n.code,{children:"alice.near/**"}),"), except if ",(0,s.jsx)(n.a,{href:"https://github.com/NearSocial/social-db#permissions",children:(0,s.jsx)(n.strong,{children:"given explicit permission"})})," by the owner of another space."]}),"\n",(0,s.jsx)(n.p,{children:"Each time a user wants to commit data, they will be prompted to confirm the action. On confirming, the user can choose to not be asked again in the future."}),"\n",(0,s.jsx)(c.W,{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const onClick = () => {\n  Social.set({\n    post: {\n      main: JSON.stringify({\n        type: "md",\n        text: "I\'ve read the docs!"\n      })\n    }\n  })\n}\n\nif(!context.accountId) return "Please login...";\n\nreturn <>\n  <p> Save a message showing some love to the NEAR Docs </p>\n  <button onClick={onClick}> Save the Message </button>\n</>\n'})})}),"\n",(0,s.jsxs)(i,{markdown:"1",children:[(0,s.jsx)("summary",{children:" Parameters "}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Social.index"})," \uc778\uc790:"]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(n.th,{children:"\uc790\ub8cc\ud615"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"data"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\ud544\uc218"})}),(0,s.jsx)(n.td,{children:"\uac1d\uccb4"}),(0,s.jsxs)(n.td,{children:["\ucee4\ubc0b\ub420 \ub370\uc774\ud130 \uac1d\uccb4\uc785\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"CommitButton"}),"\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c \uacc4\uc815 ID\ub85c \uc2dc\uc791\ud558\uba74 \uc548 \ub429\ub2c8\ub2e4."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"options"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,s.jsx)(n.td,{children:"\uac1d\uccb4"}),(0,s.jsx)(n.td,{children:"\ucd94\uac00 \uac1d\uccb4\uc785\ub2c8\ub2e4."})]})]})]}),(0,s.jsx)(n.admonition,{title:"options \uac1d\uccb4",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"force"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \ub370\uc774\ud130\ub97c \ub36e\uc5b4\uc4f8\uc9c0 \uc5ec\ubd80\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onCommit"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uc131\uacf5\uc801\uc778 \ucee4\ubc0b\uc5d0\uc11c \ud2b8\ub9ac\uac70\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \uc791\uc131\ub41c \ub370\uc774\ud130(",(0,s.jsx)(n.code,{children:"accountID"})," \ud3ec\ud568)\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onCancel"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uc0ac\uc6a9\uc790\uac00 \ucee4\ubc0b\uc744 \ucde8\uc18c\ud560 \ub54c \ud2b8\ub9ac\uac70\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n"]})})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["By default ",(0,s.jsx)(n.code,{children:"Social.set"})," will omit saving data that is already saved (e.g. if the user already liked a post, it won't save the like again). To force saving the data, pass the ",(0,s.jsx)(n.code,{children:"force"})," option."]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"socialindex",children:"Social.index"}),"\n",(0,s.jsx)(n.p,{children:"NEAR Social readily provides an indexer - a service that listen to actions in SocialDB, and caches them so they can be retrieved without needing to interact with the contract."}),"\n",(0,s.jsx)(n.p,{children:"The indexer is very useful, for example, to rapidly store and retrieve information on all comments for a post. Without the indexer, we would need to check all entries in the contract to see who answered, surely running out of GAS before completion."}),"\n",(0,s.jsx)("hr",{className:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"indexing-an-action",children:"Indexing an Action"}),"\n",(0,s.jsxs)(n.p,{children:["To index an action we need to add the ",(0,s.jsx)(n.code,{children:"index"})," key to the data being saved, within the ",(0,s.jsx)(n.code,{children:"index"})," key we will save the ",(0,s.jsx)(n.code,{children:"action"})," being indexed, alongside a ",(0,s.jsx)(n.code,{children:"key"})," and a ",(0,s.jsx)(n.code,{children:"value"})," that identifies this specific instance."]}),"\n",(0,s.jsx)(c.W,{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// General form of an indexed action\n// {\n//   index: {\n//     actionName: JSON.stringify({ key, value })\n//   }\n// }\n\nconst onClick = () => {\n  Social.set({\n    index: {\n      readDocs: JSON.stringify({key: "docs", value: "like"})\n    } ,\n  })\n}\n\nreturn <>\n  {context.accountId ?\n  <>\n    <p> Index an action showing some love to the NEAR Docs </p>\n    <button onClick={onClick}> Index Action </button>\n  </> :\n  <p> Login to index an action </p>}\n</>\n'})})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above we index a ",(0,s.jsx)(n.code,{children:"docs"})," action. In this case the ",(0,s.jsx)(n.code,{children:"action"})," is ",(0,s.jsx)(n.code,{children:"docs"}),", and the ",(0,s.jsx)(n.code,{children:"key"})," that identifies it is ",(0,s.jsx)(n.code,{children:'"read"'}),"."]}),"\n",(0,s.jsxs)(i,{markdown:"1",children:[(0,s.jsx)("summary",{children:" Standards "}),(0,s.jsx)(n.h4,{id:"indexing-a-post",children:"Indexing a Post"}),(0,s.jsxs)(n.p,{children:["To index a post, the standard is to save the action ",(0,s.jsx)(n.code,{children:"post"}),", with ",(0,s.jsx)(n.code,{children:'{key: "main", value: {type: "md"}'}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  index: {\n    post: JSON.stringify({\n      key: "main",\n      value: {type: "md"}\n    })\n  }\n}\n'})}),(0,s.jsx)(n.h4,{id:"indexing-a-like",children:"Indexing a Like"}),(0,s.jsxs)(n.p,{children:["To index a like, the standard is to save the action ",(0,s.jsx)(n.code,{children:"like"}),", with ",(0,s.jsx)(n.code,{children:'{key: object-representing-the-post, value: {type: "like" }}'})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  index: {\n    like: JSON.stringify({\n      key: {type: 'social', path: 'influencer.testnet/post/main', blockHeight: 152959480 },\n      value: {type: \"like\"}})\n  }\n}\n"})})]}),"\n",(0,s.jsx)("hr",{className:"subsection"}),"\n",(0,s.jsx)(n.h3,{id:"retrieving-indexed-actions",children:"Retrieving Indexed Actions"}),"\n",(0,s.jsxs)(n.p,{children:["To retrieve indexed actions we use the ",(0,s.jsx)(n.code,{children:"Social.index"})," method. It takes the ",(0,s.jsx)(n.code,{children:"action"})," and the ",(0,s.jsx)(n.code,{children:"key"})," as arguments, and returns an array of all the indexed values alongside the ",(0,s.jsx)(n.code,{children:"blockHeight"})," in which they were indexed, and which user made the action."]}),"\n",(0,s.jsx)(c.W,{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const readDocs = Social.index("readDocs", "docs")\n\nreturn <>\n  <p> Number of indexed "readDocs" actions with key "docs": {readDocs.length} </p>\n\n  <b>Indexed actions</b>\n  {JSON.stringify(readDocs)}\n</>\n'})})}),"\n",(0,s.jsxs)(i,{markdown:"1",children:[(0,s.jsx)("summary",{children:" Parameters "}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Social.index"})," \uc778\uc790:"]}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(n.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(n.th,{children:"\uc790\ub8cc\ud615"}),(0,s.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"action"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\ud544\uc218"})}),(0,s.jsx)(n.td,{children:"\ubb38\uc790\uc5f4"}),(0,s.jsxs)(n.td,{children:["\ud45c\uc900\uc758 ",(0,s.jsx)(n.code,{children:"index_type"}),"\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uacbd\ub85c ",(0,s.jsx)(n.code,{children:"index/like"}),"\uc5d0\uc11c action\uc740 ",(0,s.jsx)(n.code,{children:"like"}),"\uc785\ub2c8\ub2e4."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"key"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"required"})}),(0,s.jsx)(n.td,{children:"\ubb38\uc790\uc5f4"}),(0,s.jsx)(n.td,{children:"\ud45c\uc900\uc758 \ub0b4\ubd80 \uc778\ub371\uc2a4 \uac12\uc785\ub2c8\ub2e4."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"options"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"\uc120\ud0dd\uc0ac\ud56d"})}),(0,s.jsx)(n.td,{children:"\uac1d\uccb4"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"options"})," \uac1d\uccb4\uc785\ub2c8\ub2e4."]})]})]})]}),(0,s.jsx)(n.admonition,{title:"options \uac1d\uccb4",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subscribe"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": true\uc774\uba74 \ub370\uc774\ud130\uac00 5\ucd08\ub9c8\ub2e4 \uc0c8\ub85c \uace0\uccd0\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"accountId"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uc9c0\uc815\ub41c \uacbd\uc6b0 \uac12\uc744 \ud544\ud130\ub9c1\ud558\ub824\uba74 \ubb38\uc790\uc5f4 \ub610\ub294 \uacc4\uc815 ID \ubc30\uc5f4\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \uacc4\uc815 ID\ub85c \ud544\ud130\ub9c1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"order"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": ",(0,s.jsx)(n.code,{children:"asc"})," \ub610\ub294 ",(0,s.jsx)(n.code,{children:"desc"})," \uc911 \ud558\ub098\uc785\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 ",(0,s.jsx)(n.code,{children:"asc"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"limit"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uae30\ubcf8\uac12\uc740 ",(0,s.jsx)(n.code,{children:"100"}),"\uc785\ub2c8\ub2e4. \ubc18\ud658\ud560 \uac12\uc758 \uc218\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9 \uc694\uc18c\uc758 \ube14\ub85d \ub192\uc774\uac00 \uac19\uc740 \uacbd\uc6b0 \uc778\ub371\uc2a4 \uac12\ubcf4\ub2e4 \ub9ce\uc740 \uac12\uc744 \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from"})," ",(0,s.jsx)(n.em,{children:"(\uc120\ud0dd \uc0ac\ud56d)"}),": \uc21c\uc11c\uc5d0 \ub530\ub77c \uae30\ubcf8\uac12\uc740 ",(0,s.jsx)(n.code,{children:"0"})," \ub610\ub294 ",(0,s.jsx)(n.code,{children:"Max"}),"\uc785\ub2c8\ub2e4."]}),"\n"]})})]})]})}function x(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2154:(e,n,i)=>{i.d(n,{W:()=>r});var s=i(67294),d=i(93293),c=i(91262),t=i(85893);function r(e){var n=e.children,r=e.id,l=void 0===r?1:r,o=e.height,h=void 0===o?"160px":o;return(0,t.jsx)(c.Z,{fallback:(0,t.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(g){}var c=i(58613),r=c.Widget,o=c.useInitNear,a=i(2302).ZP,x=(0,s.useState)(e),j=x[0],p=x[1],u=o().initNear,m=(0,d.O)().selector;return(0,s.useEffect)((function(){u&&m&&u({networkId:"testnet",selector:m})}),[u,m]),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"monaco",children:(0,t.jsx)(a,{height:h,value:j,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return p(e)}})}),(0,t.jsx)("div",{className:"code_iframe",children:(0,t.jsx)("div",{className:"bootstrap-scope",children:(0,t.jsx)("div",{className:"vm-widget",children:(0,t.jsx)(r,{code:j},l)})})}),n[1]]})}})}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>t});var s=i(67294);const d={},c=s.createContext(d);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);