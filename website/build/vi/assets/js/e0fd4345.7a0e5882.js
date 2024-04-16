"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3011],{40193:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var c=t(85893),s=t(11151);const a={id:"balance-changes",title:"Balance changes",sidebar_label:"Balance Changes"},r=void 0,i={id:"integrations/balance-changes",title:"Balance changes",description:"C\xe1c \u0111i\u1ec1u ki\u1ec7n ti\xean quy\u1ebft",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/6.integrations/balance.md",sourceDirName:"6.integrations",slug:"/integrations/balance-changes",permalink:"/vi/integrations/balance-changes",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/6.integrations/balance.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1713279052e3,frontMatter:{id:"balance-changes",title:"Balance changes",sidebar_label:"Balance Changes"},sidebar:"exchanges",previous:{title:"T\xedch h\u1ee3p s\xe0n giao d\u1ecbch",permalink:"/vi/integrations/exchange-integration"},next:{title:"Accounts",permalink:"/vi/integrations/accounts"}},o={},l=[{value:"C\xe1c \u0111i\u1ec1u ki\u1ec7n ti\xean quy\u1ebft",id:"prerequisites",level:2},{value:"Native NEAR (\u24c3)",id:"native-near",level:3},{value:"Send Tokens",id:"send-tokens",level:2},{value:"View Balance Changes",id:"view-balance-changes",level:2}];function d(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components},{Details:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"prerequisites",children:"C\xe1c \u0111i\u1ec1u ki\u1ec7n ti\xean quy\u1ebft"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"https://testnet.mynearwallet.com/create",children:"NEAR Account"})}),"\n",(0,c.jsx)(e.li,{children:(0,c.jsx)(e.a,{href:"/tools/near-cli",children:"NEAR-CLI"})}),"\n",(0,c.jsxs)(e.li,{children:["Th\xf4ng tin x\xe1c th\u1ef1c cho sender account \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\xean local b\u1eb1ng c\xe1ch ch\u1ea1y ",(0,c.jsx)(e.a,{href:"/docs/tools/near-cli#near-login",children:(0,c.jsx)(e.code,{children:"near login"})})]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"native-near",children:"Native NEAR (\u24c3)"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["C\xe1c thay \u0111\u1ed5i s\u1ed1 d\u01b0 tr\xean c\xe1c account c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c theo d\xf5i b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,c.jsx)(e.a,{href:"/api/rpc/setup#view-account-changes",children:"changes RPC endpoint"})," c\u1ee7a ch\xfang t\xf4i. B\u1ea1n c\xf3 th\u1ec3 ki\u1ec3m tra \u0111i\u1ec1u n\xe0y b\u1eb1ng c\xe1ch g\u1eedi c\xe1c token \u0111\u1ebfn m\u1ed9t account s\u1eed d\u1ee5ng ",(0,c.jsx)(e.a,{href:"/tools/near-cli#near-send",children:"NEAR-CLI"})," v\xe0 sau \u0111\xf3 xem c\xe1c thay \u0111\u1ed5i \u0111\xe3 th\u1ef1c hi\u1ec7n."]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"send-tokens",children:"Send Tokens"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["G\u1eedi c\xe1c token s\u1eed d\u1ee5ng ",(0,c.jsx)(e.a,{href:"/docs/tools/near-cli#near-send",children:(0,c.jsx)(e.code,{children:"near send"})})]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"near send sender.testnet receiver.testnet 1\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"B\u1ea1n s\u1ebd th\u1ea5y m\u1ed9t k\u1ebft qu\u1ea3 trong terminal c\u1ee7a m\xecnh tr\xf4ng gi\u1ed1ng nh\u01b0 sau:"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"Sending 1 NEAR to receiver.testnet from sender.testnet\nTransaction Id 4To336bYcoGc3LMucJPMk6fMk5suKfCrdNotrRtTxqDy\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://testnet.nearblocks.io/txns/4To336bYcoGc3LMucJPMk6fMk5suKfCrdNotrRtTxqDy\n"})}),"\n",(0,c.jsx)(e.h2,{id:"view-balance-changes",children:"View Balance Changes"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["Open the transaction URL in ",(0,c.jsx)(e.a,{href:"https://testnet.nearblocks.io/",children:"NearBlocks Explorer"})," and copy the ",(0,c.jsx)(e.code,{children:"BLOCK HASH"}),"."]}),"\n",(0,c.jsxs)(e.li,{children:["S\u1eed d\u1ee5ng ",(0,c.jsx)(e.code,{children:"BLOCK HASH"})," v\xe0 accountId, truy v\u1ea5n ",(0,c.jsx)(e.a,{href:"/docs/api/rpc#view-account-changes",children:"changes RPC endpoint"})," \u0111\u1ec3 xem nh\u1eefng thay \u0111\u1ed5i."]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"V\xed d\u1ee5 Query s\u1eed d\u1ee5ng HTTPie:"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare \\\n    method=EXPERIMENTAL_changes \\\n    \'params:={\n        "block_id": "CJ24svU3C9FaULVjcNVnWuVZjK6mNaQ8p6AMyUDMqB37",\n        "changes_type": "account_changes",\n        "account_ids": ["sender.testnet"]\n    }\'\n'})}),"\n",(0,c.jsxs)(t,{children:[(0,c.jsx)("summary",{children:(0,c.jsx)(e.strong,{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c:"})}),(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "id": "dontcare",\n  "jsonrpc": "2.0",\n  "result": {\n    "block_hash": "BRgE4bjmUo33jmiVBcZaWGkSLVeL7TTi4ZxYTvJdPbB9",\n    "changes": [\n      {\n        "cause": {\n          "tx_hash": "4To336bYcoGc3LMucJPMk6fMk5suKfCrdNotrRtTxqDy",\n          "type": "transaction_processing"\n        },\n        "change": {\n          "account_id": "sender.testnet",\n          "amount": "11767430014412510000000000",\n          "code_hash": "11111111111111111111111111111111",\n          "locked": "0",\n          "storage_paid_at": 0,\n          "storage_usage": 806\n        },\n        "type": "account_update"\n      }\n    ]\n  }\n}\n'})})]}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsxs)(e.p,{children:["Ngo\xe0i ra, b\u1ea1n c\xf3 th\u1ec3 xem s\u1ed1 d\u01b0 c\u1ee7a account b\u1eb1ng c\xe1ch ",(0,c.jsxs)(e.a,{href:"/docs/api/rpc#view-account",children:["truy v\u1ea5n ",(0,c.jsx)(e.code,{children:"view_account"})]})," m\xe0 ch\u1ec9 y\xeau c\u1ea7u m\u1ed9t accountId."]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"V\xed d\u1ee5 HTTPie Request:"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=query \\\nparams:=\'{\n  "request_type": "view_account",\n  "finality": "final",\n  "account_id": "sender.testnet"\n}\'\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c l\xe0:"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-json",children:'{\n  "id": "dontcare",\n  "jsonrpc": "2.0",\n  "result": {\n    "amount": "11767430683960197500000000",\n    "block_hash": "HUiscpNyoyR5z1UdnZhAJLNz1G8UjBrFTecSYqCrvdfW",\n    "block_height": 50754977,\n    "code_hash": "11111111111111111111111111111111",\n    "locked": "0",\n    "storage_paid_at": 0,\n    "storage_usage": 806\n  }\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:["** L\u01b0u \xfd:** Bi\u1ec3u ph\xed Gas c\xf3 th\u1ec3 thay \u0111\u1ed5i gi\u1eefa c\xe1c block. Ngay c\u1ea3 \u0111\u1ed1i v\u1edbi c\xe1c transaction \u0111\xe3 x\xe1c \u0111\u1ecbnh gi\xe1 gas, chi ph\xed trong NEAR c\u0169ng c\xf3 th\u1ec3 kh\xe1c. You can query the gas price for recent blocks using the ",(0,c.jsxs)(e.a,{href:"https://docs.near.org/api/rpc/setup#gas-price",children:[(0,c.jsx)(e.code,{children:"gas_price"})," RPC endpoint"]}),"."]}),"\n",(0,c.jsx)(e.hr,{}),"\n",(0,c.jsx)(e.admonition,{title:"Got a question?",type:"tip",children:(0,c.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:" Ask it on StackOverflow! "})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>r});var c=t(67294);const s={},a=c.createContext(s);function r(n){const e=c.useContext(a);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),c.createElement(a.Provider,{value:e},n.children)}}}]);