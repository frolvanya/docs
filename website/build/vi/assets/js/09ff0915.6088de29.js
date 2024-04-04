"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6247],{83984:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=c(85893),i=c(11151);const a={id:"implicit-accounts",title:"Implicit Account",sidebar_label:"Implicit Account"},r=void 0,s={id:"integrator/implicit-accounts",title:"Implicit Account",description:"Background",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/6.integrator/implicit-accounts.md",sourceDirName:"6.integrator",slug:"/integrator/implicit-accounts",permalink:"/vi/integrator/implicit-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrator/implicit-accounts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{id:"implicit-accounts",title:"Implicit Account",sidebar_label:"Implicit Account"},sidebar:"exchanges",previous:{title:"Fungible Tokens",permalink:"/vi/integrator/fungible-tokens"},next:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/vi/integrator/errors/introduction"}},o={},l=[{value:"Background",id:"background",level:2},{value:"\u0110\u1eb7c \u0111i\u1ec3m k\u1ef9 thu\u1eadt",id:"specifications",level:2},{value:"T\u1ea1o m\u1ed9t account local",id:"creating-an-account-locally",level:2},{value:"C\xe0i \u0111\u1eb7t <code>betanet</code> network",id:"set-betanet-network",level:3},{value:"T\u1ea1o m\u1ed9t key-pair \u0111\u1ea7u ti\xean",id:"generating-a-key-pair-first",level:3},{value:"Using the Implicit Account",id:"using-the-implicit-account",level:4},{value:"Transfer t\u1edbi implicit account",id:"transferring-to-the-implicit-account",level:2},{value:"B\u1ed5 sung: convert public key s\u1eed d\u1ee5ng python (d\xe0nh cho m\u1ee5c \u0111\xedch h\u1ecdc t\u1eadp)",id:"bonus-converting-public-key-using-python-for-learning-purposes",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"C\xe1c implicit account l\xe0m vi\u1ec7c t\u01b0\u01a1ng t\u1ef1 nh\u01b0 c\xe1c account Bitcoin/Ethereum."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"They allow you to reserve an account ID before it's created by generating a ED25519 key-pair locally."}),"\n",(0,t.jsx)(n.li,{children:"This key-pair has a public key that maps to the account ID."}),"\n",(0,t.jsx)(n.li,{children:"The account ID is a lowercase hex representation of the public key."}),"\n",(0,t.jsx)(n.li,{children:"An ED25519 Public key contains 32 bytes that maps to 64 characters account ID."}),"\n",(0,t.jsx)(n.li,{children:"The corresponding secret key allows you to sign transactions on behalf of this account once it's created on chain."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"specifications",children:(0,t.jsx)(n.a,{href:"https://nomicon.io/DataStructures/Account.html#implicit-account-ids",children:"\u0110\u1eb7c \u0111i\u1ec3m k\u1ef9 thu\u1eadt"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-an-account-locally",children:"T\u1ea1o m\u1ed9t account local"}),"\n",(0,t.jsxs)(n.p,{children:["For the purpose of this demo, we'll use the ",(0,t.jsx)(n.code,{children:"betanet"})," network."]}),"\n",(0,t.jsxs)(n.h3,{id:"set-betanet-network",children:["C\xe0i \u0111\u1eb7t ",(0,t.jsx)(n.code,{children:"betanet"})," network"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export NEAR_ENV=betanet\n"})}),"\n",(0,t.jsx)(n.h3,{id:"generating-a-key-pair-first",children:"T\u1ea1o m\u1ed9t key-pair \u0111\u1ea7u ti\xean"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near generate-key --saveImplicit\n"})}),"\n",(0,t.jsx)(n.p,{children:"V\xed d\u1ee5 output"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Seed phrase: lumber habit sausage used zebra brain border exist meat muscle river hidden\nKey pair: {"publicKey":"ed25519:AQgnQSR1Mp3v7xrw7egJtu3ibNzoCGwUwnEehypip9od","secretKey":"ed25519:51qTiqybe8ycXwPznA8hz7GJJQ5hyZ45wh2rm5MBBjgZ5XqFjbjta1m41pq9zbRZfWGUGWYJqH4yVhSWoW6pYFkT"}\nImplicit account: 8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8\nStoring credentials for account: 8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8 (network: testnet)\nSaving key to \'~/.near-credentials/testnet/8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8.json\'\n'})}),"\n",(0,t.jsx)(n.h4,{id:"using-the-implicit-account",children:"Using the Implicit Account"}),"\n",(0,t.jsx)(n.p,{children:"We can export our account ID to a bash env variable:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export ACCOUNT="8bca86065be487de45e795b2c3154fe834d53ffa07e0a44f29e76a2a5f075df8"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Gi\u1ea3 s\u1eed b\u1ea1n \u0111\xe3 nh\u1eadn c\xe1c token tr\xean account m\u1edbi c\u1ee7a m\xecnh, b\u1ea1n c\xf3 th\u1ec3 transfer t\u1eeb n\xf3 s\u1eed d\u1ee5ng command d\u01b0\u1edbi \u0111\xe2y:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near $ACCOUNT <receiver> <amount>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["B\u1ea1n c\u0169ng c\xf3 th\u1ec3 thay th\u1ebf ",(0,t.jsx)(n.code,{children:"$ACCOUNT"})," v\u1edbi account ID th\u1eadt c\u1ee7a m\xecnh, v\xed d\u1ee5."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near send 98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de <receiver> <amount>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"transferring-to-the-implicit-account",children:"Transfer t\u1edbi implicit account"}),"\n",(0,t.jsxs)(n.p,{children:["Gi\u1ea3 s\u1eed ai \u0111\xf3 \u0111\u01b0a cho b\u1ea1n account ID ",(0,t.jsx)(n.code,{children:"0861ea8ddd696525696ccf3148dd706c4fda981c64d8a597490472594400c223"})," c\u1ee7a h\u1ecd. B\u1ea1n ch\u1ec9 c\xf3 th\u1ec3 transfer t\u1edbi n\xf3 b\u1eb1ng c\xe1ch ch\u1ea1y:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near send <your_account_id> 0861ea8ddd696525696ccf3148dd706c4fda981c64d8a597490472594400c223 <amount>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"bonus-converting-public-key-using-python-for-learning-purposes",children:"B\u1ed5 sung: convert public key s\u1eed d\u1ee5ng python (d\xe0nh cho m\u1ee5c \u0111\xedch h\u1ecdc t\u1eadp)"}),"\n",(0,t.jsxs)(n.p,{children:["Ch\xfang ta s\u1ebd s\u1eed d\u1ee5ng ",(0,t.jsx)(n.code,{children:"python3"})," (version ",(0,t.jsx)(n.code,{children:"3.5+"}),") v\u1edbi th\u01b0 vi\u1ec7n ",(0,t.jsx)(n.code,{children:"base58"})," \u0111\u1ec3 th\u1ef1c hi\u1ec7n l\u1ea1i flow ph\xeda tr\xean."]}),"\n",(0,t.jsxs)(n.p,{children:["B\u1ea1n c\xf3 th\u1ec3 c\xe0i th\u01b0 vi\u1ec7n n\xe0y v\u1edbi ",(0,t.jsx)(n.code,{children:"pip3"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip3 install --user base58\n"})}),"\n",(0,t.jsx)(n.p,{children:"Kh\u1edfi \u0111\u1ed9ng tr\xecnh th\xf4ng d\u1ecbch python3:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Vi\u1ec7c \u0111\u1ea7u ti\xean l\xe0 l\u1ea5y ph\u1ea7n d\u1eef li\u1ec7u t\u1eeb public key (kh\xf4ng c\xf3 ti\u1ec1n t\u1ed1 ",(0,t.jsx)(n.code,{children:"ed25519:"}),"). H\xe3y l\u01b0u n\xf3 trong bi\u1ebfn ",(0,t.jsx)(n.code,{children:"pk58"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"pk58 = 'BGCCDDHfysuuVnaNVtEhhqeT4k9Muyem3Kpgq2U1m9HX'\n"})}),"\n",(0,t.jsx)(n.p,{children:"B\xe2y gi\u1edd h\xe3y import base58:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import base58\n"})}),"\n",(0,t.jsx)(n.p,{children:"Cu\u1ed1i c\xf9ng, h\xe3y convert base58 publickey c\u1ee7a ch\xfang ta t\u1edbi c\xe1c byte v\xe0 sau \u0111\xf3 l\xe0 hex:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"base58.b58decode(pk58).hex()\n"})}),"\n",(0,t.jsx)(n.p,{children:"K\u1ebft qu\u1ea3:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"'98793cd91a3f870fb126f66285808c7e094afcfc4eda8a970f6648cdf0dbd6de'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["C\xe1ch n\xe0y t\u1ea1o ra cho ch\xfang ta c\xf9ng m\u1ed9t account ID gi\u1ed1ng nh\u01b0 s\u1eed d\u1ee5ng ",(0,t.jsx)(n.code,{children:"near-cli"}),", v\xec v\u1eady n\xf3 \u0111\u01b0\u1ee3c khuy\u1ebfn kh\xedch."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Ch\xfa \xfd:"})," Network m\u1eb7c \u0111\u1ecbnh cho ",(0,t.jsx)(n.code,{children:"near-cli"})," l\xe0 ",(0,t.jsx)(n.code,{children:"testnet"}),". N\u1ebfu b\u1ea1n mu\u1ed1n thay network th\xe0nh ",(0,t.jsx)(n.code,{children:"mainnet"})," ho\u1eb7c ",(0,t.jsx)(n.code,{children:"betanet"}),", vui l\xf2ng xem h\u01b0\u1edbng d\u1eabn ",(0,t.jsxs)(n.a,{href:"/tools/near-cli#network-selection",children:["l\u1ef1a ch\u1ecdn network v\u1edbi ",(0,t.jsx)(n.code,{children:"near-cli"})]}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Got a question?",type:"tip",children:(0,t.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,c)=>{c.d(n,{Z:()=>s,a:()=>r});var t=c(67294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);