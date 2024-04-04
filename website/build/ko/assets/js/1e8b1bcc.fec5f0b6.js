"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2761],{38881:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=c(85893),t=c(11151);const a={id:"implicit-accounts",title:"\uc554\uc2dc\uc801 \uacc4\uc815(Implicit Account)",sidebar_label:"\uc554\uc2dc\uc801 \uacc4\uc815"},s=void 0,r={id:"integrator/implicit-accounts",title:"\uc554\uc2dc\uc801 \uacc4\uc815(Implicit Account)",description:"\ubc30\uacbd",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/6.integrator/implicit-accounts.md",sourceDirName:"6.integrator",slug:"/integrator/implicit-accounts",permalink:"/ko/integrator/implicit-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/implicit-accounts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{id:"implicit-accounts",title:"\uc554\uc2dc\uc801 \uacc4\uc815(Implicit Account)",sidebar_label:"\uc554\uc2dc\uc801 \uacc4\uc815"},sidebar:"exchanges",previous:{title:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070",permalink:"/ko/integrator/fungible-tokens"},next:{title:"\uc18c\uac1c",permalink:"/ko/integrator/errors/introduction"}},o={},l=[{value:"\ubc30\uacbd",id:"background",level:2},{value:"\uc0ac\uc591",id:"specifications",level:2},{value:"\ub85c\uceec\uc5d0\uc11c \uacc4\uc815 \ub9cc\ub4e4\uae30",id:"creating-an-account-locally",level:2},{value:"<code>betanet</code> \ub124\ud2b8\uc6cc\ud06c \uc124\uc815",id:"set-betanet-network",level:3},{value:"\ud0a4 \uc30d \uc0dd\uc131",id:"generating-a-key-pair-first",level:3},{value:"Using the Implicit Account",id:"using-the-implicit-account",level:4},{value:"\uc554\uc2dc\uc801 \uacc4\uc815\uc73c\ub85c\uc758 \uc804\uc1a1",id:"transferring-to-the-implicit-account",level:2},{value:"\ubcf4\ub108\uc2a4: Python\uc744 \uc0ac\uc6a9\ud55c \uacf5\uac1c \ud0a4 \ubcc0\ud658 (\ud559\uc2b5\uc6a9)",id:"bonus-converting-public-key-using-python-for-learning-purposes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"background",children:"\ubc30\uacbd"}),"\n",(0,i.jsx)(n.p,{children:"\uc554\uc2dc\uc801 \uacc4\uc815\uc740 Bitcoin/Ethereum \uacc4\uc815\uacfc \uc720\uc0ac\ud558\uac8c \uc791\ub3d9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"They allow you to reserve an account ID before it's created by generating a ED25519 key-pair locally."}),"\n",(0,i.jsx)(n.li,{children:"This key-pair has a public key that maps to the account ID."}),"\n",(0,i.jsx)(n.li,{children:"The account ID is a lowercase hex representation of the public key."}),"\n",(0,i.jsx)(n.li,{children:"An ED25519 Public key contains 32 bytes that maps to 64 characters account ID."}),"\n",(0,i.jsx)(n.li,{children:"The corresponding secret key allows you to sign transactions on behalf of this account once it's created on chain."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"specifications",children:(0,i.jsx)(n.a,{href:"https://nomicon.io/DataStructures/Account.html#implicit-account-ids",children:"\uc0ac\uc591"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-an-account-locally",children:"\ub85c\uceec\uc5d0\uc11c \uacc4\uc815 \ub9cc\ub4e4\uae30"}),"\n",(0,i.jsxs)(n.p,{children:["For the purpose of this demo, we'll use the ",(0,i.jsx)(n.code,{children:"betanet"})," network."]}),"\n",(0,i.jsxs)(n.h3,{id:"set-betanet-network",children:[(0,i.jsx)(n.code,{children:"betanet"})," \ub124\ud2b8\uc6cc\ud06c \uc124\uc815"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export NEAR_ENV=betanet\n"})}),"\n",(0,i.jsx)(n.h3,{id:"generating-a-key-pair-first",children:"\ud0a4 \uc30d \uc0dd\uc131"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near generate-key --saveImplicit\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ucd9c\ub825 \uc608\uc2dc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Seed phrase: lumber habit sausage used zebra brain border exist meat muscle river hidden\nKey pair: {"publicKey":"ed25519:AQgnQSR1Mp3v7xrw7egJtu3ibNzoCGwUwnEehypip9od","secretKey":"ed25519:51qTiqybe8ycXwPznA8hz7GJJQ5hyZ45wh2rm5MBBjgZ5XqFjbjta1m41pq9zbRZfWGUGWYJqH4yVhSWoW6pYFkT"}\nImplicit account: 8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8\nStoring credentials for account: 8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8 (network: testnet)\nSaving key to \'~/.near-credentials/testnet/8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8.json\'\n'})}),"\n",(0,i.jsx)(n.h4,{id:"using-the-implicit-account",children:"Using the Implicit Account"}),"\n",(0,i.jsx)(n.p,{children:"We can export our account ID to a bash env variable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export ACCOUNT="8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\uc0c8 \uacc4\uc815\uc5d0\uc11c \ud1a0\ud070\uc744 \ubc1b\uc558\ub2e4\uace0 \uac00\uc815\ud558\uba74, \ub2e4\uc74c \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774\ub97c \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near $ACCOUNT <receiver> <amount>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,i.jsx)(n.code,{children:"$ACCOUNT"}),"\ub97c \uc2e4\uc81c \uacc4\uc815 ID\ub85c \ubc14\uafc0 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near send 98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de <receiver> <amount>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"transferring-to-the-implicit-account",children:"\uc554\uc2dc\uc801 \uacc4\uc815\uc73c\ub85c\uc758 \uc804\uc1a1"}),"\n",(0,i.jsxs)(n.p,{children:["Let's say someone gives you their account ID ",(0,i.jsx)(n.code,{children:"0861ea8ddd696525696ccf3148dd706c4fda981c64d8a597490472594400c223"}),". You can just transfer to it by running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near send <your_account_id> 0861ea8ddd696525696ccf3148dd706c4fda981c64d8a597490472594400c223 <amount>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bonus-converting-public-key-using-python-for-learning-purposes",children:"\ubcf4\ub108\uc2a4: Python\uc744 \uc0ac\uc6a9\ud55c \uacf5\uac1c \ud0a4 \ubcc0\ud658 (\ud559\uc2b5\uc6a9)"}),"\n",(0,i.jsxs)(n.p,{children:["\uc5ec\uae30\uc11c\ub294 ",(0,i.jsx)(n.code,{children:"python3"}),"(",(0,i.jsx)(n.code,{children:"3.5+"})," \ubc84\uc804)\uacfc ",(0,i.jsx)(n.code,{children:"base58"})," \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud560 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pip3"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip3 install --user base58\n"})}),"\n",(0,i.jsx)(n.p,{children:"python3 \uc778\ud130\ud504\ub9ac\ud130\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uccab \ubc88\uc9f8\ub294 \uacf5\uac1c \ud0a4\uc5d0\uc11c \ub370\uc774\ud130 \ubd80\ubd84\uc744 \uac00\uc838\uc624\ub294 \uac83\uc785\ub2c8\ub2e4(",(0,i.jsx)(n.code,{children:"ed25519:"})," \uc811\ub450\uc0ac \uc5c6\uc74c). \uc774\ub97c ",(0,i.jsx)(n.code,{children:"pk58"})," \ubcc0\uc218\uc5d0 \uc800\uc7a5\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"pk58 = 'BGCCDDHfysuuVnaNVtEhhqeT4k9Muyem3Kpgq2U1m9HX'\n"})}),"\n",(0,i.jsx)(n.p,{children:"\uc774\uc81c base58\uc744 \uac00\uc838\uc624\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import base58\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c \uacf5\uac1c \ud0a4\uc758 base58 \ud45c\ud604\uc744 \ubc14\uc774\ud2b8\ub85c \ubcc0\ud658\ud55c \ub2e4\uc74c, 16\uc9c4\uc218\ub85c \ubcc0\ud658\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"base58.b58decode(pk58).hex()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ucd9c\ub825\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"'98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uc774\ub294 ",(0,i.jsx)(n.code,{children:"near-cli"}),"\uc640 \ub3d9\uc77c\ud55c \uacc4\uc815 ID\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\ucc38\uace0:"})," ",(0,i.jsx)(n.code,{children:"near-cli"}),"\uc5d0 \ub300\ud55c \uae30\ubcf8 \ub124\ud2b8\uc6cc\ud06c\ub294 ",(0,i.jsx)(n.code,{children:"testnet"}),"\uc785\ub2c8\ub2e4. \uc774\ub97c ",(0,i.jsx)(n.code,{children:"mainnet"})," \ub610\ub294 ",(0,i.jsx)(n.code,{children:"betanet"}),"\uc73c\ub85c \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74, ",(0,i.jsxs)(n.a,{href:"/tools/near-cli#network-selection",children:[(0,i.jsx)(n.code,{children:"near-cli"})," \ub124\ud2b8\uc6cc\ud06c \uc120\ud0dd"]}),"\uc744 \ucc38\uace0\ud558\uc138\uc694."]}),"\n",(0,i.jsx)(n.admonition,{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip",children:(0,i.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>r,a:()=>s});var i=c(67294);const t={},a=i.createContext(t);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);