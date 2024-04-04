"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5579],{56978:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=t(85893),a=t(11151),s=t(74866),i=t(85162);const c={id:"rpc",title:"Remote Procedural Call"},o=void 0,l={id:"develop/integrate/rpc",title:"Remote Procedural Call",description:"Here we will only briefly mention how to use the NEAR RPC. If you want to find the full documentation on NEAR RPC please follow this link.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/integrate/rpc.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/rpc",permalink:"/vi/develop/integrate/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/rpc.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{id:"rpc",title:"Remote Procedural Call"}},d={},u=[{value:"View Methods",id:"view-methods",level:2},{value:"Change Methods",id:"change-methods",level:2},{value:"Create Transaction",id:"create-transaction",level:3},{value:"<code>signerPublicKey</code>",id:"signerpublickey",level:4},{value:"<code>nonceForPublicKey</code>",id:"nonceforpublickey",level:4},{value:"<code>blockHash</code>",id:"blockhash",level:4},{value:"Sign Transaction",id:"sign-transaction",level:3},{value:"G\u1eedi Transaction",id:"send-transaction",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Here we will only briefly mention how to use the NEAR RPC. If you want to find the full documentation on NEAR RPC please follow this link."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"view-methods",children:"View Methods"}),"\n",(0,r.jsxs)(n.p,{children:["View methods are those that perform ",(0,r.jsx)(n.strong,{children:"read-only"})," operations. Calling these methods is free, and do not require to specify which account is being used to make the call:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["method: ",(0,r.jsx)(n.code,{children:"query"})]}),"\n",(0,r.jsxs)(n.li,{children:["c\xe1c param:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"request_type"}),": ",(0,r.jsx)(n.code,{children:"call_function"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/api/rpc#using-finality-param",children:(0,r.jsx)(n.code,{children:"finality"})})," ",(0,r.jsx)(n.em,{children:"HO\u1eb6C"})," ",(0,r.jsx)(n.a,{href:"/docs/api/rpc#using-block_id-param",children:(0,r.jsx)(n.code,{children:"block_id"})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"account_id"}),": ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:'"example.testnet"'})})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"method_name"}),": ",(0,r.jsx)(n.code,{children:"name_of_a_example.testnet_method"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"args_base64"}),": ",(0,r.jsx)(n.code,{children:"method_arguments_base_64_encoded"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{value:"json",label:"JSON",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "query",\n  "params": {\n    "request_type": "call_function",\n    "finality": "final",\n    "account_id": "dev-1588039999690",\n    "method_name": "get_num",\n    "args_base64": "e30="\n  }\n}\n'})})}),(0,r.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.query({\n  request_type: "call_function",\n  finality: "final",\n  account_id: "dev-1588039999690",\n  method_name: "get_num",\n  args_base64: "e30=",\n});\n'})})}),(0,r.jsx)(i.Z,{value:"http",label:"HTTPie",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=query \\\n  params:=\'{\n    "request_type": "call_function",\n    "finality": "final",\n    "account_id": "dev-1588039999690",\n    "method_name": "get_num",\n    "args_base64": "e30="\n  }\'\n'})})})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)("summary",{children:["C\xe1c k\u1ebft qu\u1ea3 cu\u1ed1i c\xf9ng c\u1ee7a transaction c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c query qua ",(0,r.jsx)("a",{href:"/docs/api/rpc/transactions#transaction-status",children:"Transaction Status"})," ho\u1eb7c ",(0,r.jsx)("a",{href:"https://explorer.testnet.near.org/",children:"NEAR Explorer"})," b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,r.jsx)("code",{children:"k\u1ebft qu\u1ea3"})," hash \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 nh\u01b0 v\xed d\u1ee5 sau \u0111\xe2y. "]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "result": [48],\n    "logs": [],\n    "block_height": 17817336,\n    "block_hash": "4qkA4sUUG8opjH5Q9bL5mWJTnfR4ech879Db1BZXbx6P"\n  },\n  "id": "dontcare"\n}\n'})}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"View methods have by default 200 TGAS for execution"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": ",(0,r.jsx)(n.code,{children:"[48]"})," is an array of bytes, to be specific it is an ASCII code of ",(0,r.jsx)(n.code,{children:"0"}),".",(0,r.jsx)(n.code,{children:"near-sdk-rs"})," and ",(0,r.jsx)(n.code,{children:"near-sdk-js"})," return JSON-serialized results."]})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.mdxAdmonitionTitle,{children:["What could go wrong? If you encounter a error please check ",(0,r.jsx)(n.a,{href:"/vi/api/rpc/contracts#what-could-go-wrong",children:"the RPC docs"})," :::"]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"change-methods",children:"Change Methods"}),(0,r.jsx)(n.p,{children:"Change methods are those that perform both read and write operations. For these methods we do need to specify the account being used to make the call, since that account will expend GAS in the call."}),(0,r.jsxs)(n.p,{children:["Since calls to change methods need to be signed by an account, you will first need to create and sign the transaction that you want to send to the RPC. For this, you currently need to make heavy use of ",(0,r.jsx)(n.code,{children:"near-api-js"}),". Particularly, you need to:"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a transaction using the ",(0,r.jsx)(n.code,{children:"near-api-js.transactions"})," module."]}),"\n",(0,r.jsxs)(n.li,{children:["Sign the transaction using the ",(0,r.jsx)(n.code,{children:"near-api-js.KeyStore.KeyPair"})]}),"\n",(0,r.jsx)(n.li,{children:"Send the signed transaction to the RPC."}),"\n"]}),(0,r.jsx)(n.h3,{id:"create-transaction",children:"Create Transaction"}),(0,r.jsxs)(n.p,{children:["In order yo create a transaction you will use ",(0,r.jsx)(n.code,{children:"near-api-js.transactions.createTransaction"})," which takes as input:"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signerId"}),": the account ID of the transaction originator."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"signerPublicKey"}),": the signer public key, see bellow."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"receiverId"}),": the account ID of the transaction recipient."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nonceForPublicKey"}),": a unique number, see bellow"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"actions"}),": An ",(0,r.jsx)(n.a,{href:"/vi/develop/contracts/actions",children:"action"}),", built from ",(0,r.jsx)(n.code,{children:"near-api-js.transactions"}),"."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/integrator/create-transactions#6-blockhash",children:(0,r.jsx)(n.code,{children:"blockHash"})})}),"\n"]}),(0,r.jsx)(n.h4,{id:"signerpublickey",children:(0,r.jsx)(n.code,{children:"signerPublicKey"})}),(0,r.jsx)(n.p,{children:"The public key of the signer must be encoded as an object with two key value pairs: keyType and data. Here is one possible way to get it:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const privateKey = "private-key-here";\nconst keyPair = nearAPI.utils.key_pair.KeyPairEd25519.fromString(privateKey);\nconst publicKey = keyPair.getPublicKey()\n'})}),(0,r.jsx)(n.h4,{id:"nonceforpublickey",children:(0,r.jsx)(n.code,{children:"nonceForPublicKey"})}),(0,r.jsxs)(n.p,{children:["M\u1ed9t s\u1ed1 duy nh\u1ea5t ho\u1eb7c m\u1ed9t gi\xe1 tr\u1ecb ",(0,r.jsx)(n.code,{children:"nonce"})," \u0111\u01b0\u1ee3c y\xeau c\u1ea7u cho m\u1ed7i transaction, \u0111\u01b0\u1ee3c sign b\u1edfi m\u1ed9t access key. \u0110\u1ec3 \u0111\u1ea3m b\u1ea3o ch\u1ec9 m\u1ed9t s\u1ed1 duy nh\u1ea5t \u0111\u01b0\u1ee3c t\u1ea1o ra cho m\u1ed7i transaction, gi\xe1 tr\u1ecb ",(0,r.jsx)(n.code,{children:"nonce"})," hi\u1ec7n t\u1ea1i ph\u1ea3i \u0111\u01b0\u1ee3c query v\xe0 sau \u0111\xf3 t\u0103ng l\xean 1."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'\nconst provider = new near-api-js.providers.JsonRpcProvider(\n  `https://rpc.testnet.near.org`\n);\nconst accessKey = await provider.query(\n  `access_key/influencer.testnet/${publicKey.getPublicKey().toString()}`,\n  ""\n);\n\nconst nonce = accessKey.nonce + 1;\n'})}),(0,r.jsx)(n.h4,{id:"blockhash",children:(0,r.jsx)(n.code,{children:"blockHash"})}),(0,r.jsxs)(n.p,{children:["M\u1ed7i transaction y\xeau c\u1ea7u m\u1ed9t hash c\u1ee7a block hi\u1ec7n t\u1ea1i (trong 24 gi\u1edd) \u0111\u1ec3 ch\u1ee9ng m\xecnh r\u1eb1ng transaction n\xe0y v\u1eeba \u0111\u01b0\u1ee3c t\u1ea1o. The hash must be converted to an array of bytes using the ",(0,r.jsx)(n.code,{children:"base_decode"})," method found in ",(0,r.jsx)(n.code,{children:"near-api-js"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const recentBlockHash = near-api-js.utils.serialize.base_decode(\n  accessKey.block_hash\n);\n"})}),(0,r.jsx)(n.h3,{id:"sign-transaction",children:"Sign Transaction"}),(0,r.jsx)(n.p,{children:"B\xe2y gi\u1edd transaction \u0111\xe3 \u0111\u01b0\u1ee3c t\u1ea1o ra, ch\xfang ta sign n\xf3 tr\u01b0\u1edbc khi g\u1eedi n\xf3 \u0111\u1ebfn NEAR blockchain. \u1ede t\u1ea7ng th\u1ea5p nh\u1ea5t, c\xf3 b\u1ed1n b\u01b0\u1edbc cho qu\xe1 tr\xecnh n\xe0y."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Using ",(0,r.jsx)(n.a,{href:"/integrator/create-transactions#imports",children:(0,r.jsx)(n.code,{children:"nearAPI"})}),", we call on ",(0,r.jsx)(n.code,{children:"serialize()"})," to serialize the transaction in ",(0,r.jsx)(n.a,{href:"https://borsh.io/",children:"Borsh"}),"."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const serializedTx = near-api-js.utils.serialize.serialize(\n  nearAPI.transactions.SCHEMA,\n  transaction\n);\n"})}),(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Hash transaction \u0111\xe3 \u0111\u01b0\u1ee3c serialize s\u1eed d\u1ee5ng gi\u1ea3i thu\u1eadt hash m\xe3 h\xf3a ",(0,r.jsx)(n.code,{children:"sha256"}),"."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const serializedTxHash = new Uint8Array(sha256.sha256.array(serializedTx));\n"})}),(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["T\u1ea1o m\u1ed9t signature v\u1edbi ",(0,r.jsx)(n.code,{children:"keyPair"}),"."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const signature = keyPair.sign(serializedTxHash);\n"})}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["T\u1ea1o m\u1ed9t transaction \u0111\xe3 sign b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/transaction.ts#L112-L123",children:"class SignedTransaction"})," c\u1ee7a ",(0,r.jsx)(n.code,{children:"near-api-js"}),"."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const signedTransaction = new nearAPI.transactions.SignedTransaction({\n  transaction,\n  signature: new nearAPI.transactions.Signature({\n    keyType: transaction.publicKey.keyType,\n    data: signature.signature,\n  }),\n});\n"})}),(0,r.jsx)(n.h3,{id:"send-transaction",children:"G\u1eedi Transaction"}),(0,r.jsx)(n.p,{children:"B\u01b0\u1edbc cu\u1ed1i c\xf9ng l\xe0 encode v\xe0 g\u1eedi transaction n\xe0y."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0110\u1ea7u ti\xean ch\xfang ta serialize transaction b\u1eb1ng ",(0,r.jsx)(n.a,{href:"https://borsh.io/",children:"Borsh"}),", v\xe0 l\u01b0u k\u1ebft qu\u1ea3 trong variable ",(0,r.jsx)(n.code,{children:"signedSerializedTx"}),". ",(0,r.jsx)(n.em,{children:"(b\u1eaft bu\u1ed9c v\u1edbi t\u1ea5t c\u1ea3 c\xe1c transaction)"})]}),"\n",(0,r.jsxs)(n.li,{children:["Then we send the transaction via ",(0,r.jsx)(n.a,{href:"/api/rpc/setup",children:"RPC call"})," using the ",(0,r.jsx)(n.code,{children:"sendJsonRpc()"})," method nested inside ",(0,r.jsx)(n.a,{href:"/integrator/create-transactions#setting-up-connection-to-near",children:(0,r.jsx)(n.code,{children:"near"})}),"."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// encode transaction b\u1eb1ng Borsh serialize (b\u1eaft bu\u1ed9c v\u1edbi t\u1ea5t c\u1ea3 c\xe1c transaction)\nconst signedSerializedTx = signedTransaction.encode();\n// g\u1eedi transaction t\u1edbi NEAR blockchain th\xf4ng qua JSON RPC call v\xe0 ghi l\u1ea1i k\u1ebft qu\u1ea3\nconst result = await provider.sendJsonRpc("broadcast_tx_commit", [\n  Buffer.from(signedSerializedTx).toString("base64"),\n]);\n'})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"V\xed d\u1ee5 tr\u1ea3 v\u1ec1: "}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"{\n  status: { SuccessValue: '' },\n  transaction: {\n    signer_id: 'sender.testnet',\n    public_key: 'ed25519:8RazSLHvzj4TBSKGUo5appP7wVeqZNQYjP9hvhF4ZKS2',\n    nonce: 57,\n    receiver_id: 'receiver.testnet',\n    actions: [ [Object] ],\n    signature: 'ed25519:2sK53w6hybSxX7qWShXz6xKnjnYRUW7Co3evEaaggNW6pGSCNPvx7urY4akwnzAbxZGwsKjx8dcVm73qbitntJjz',\n    hash: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j'\n  },\n  transaction_outcome: {\n    proof: [ [Object] ],\n    block_hash: 'J6cFDzAFkuknHMCEYW2uPQXDvCfSndkJmADVEWJbtTwV',\n    id: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j',\n    outcome: {\n      logs: [],\n      receipt_ids: [Array],\n      gas_burnt: 223182562500,\n      tokens_burnt: '22318256250000000000',\n      executor_id: 'sender.testnet',\n      status: [Object]\n    }\n  },\n  receipts_outcome: [\n    {\n      proof: [Array],\n      block_hash: 'FSS7UzTpMr4mUm6aw8MmzP6Q7wnQs35VS8vYm1R461dM',\n      id: '3LjBxe2jq1s7XEPrYxihp4rPVdyHAbYfkcdJjUEVijhJ',\n      outcome: [Object]\n    },\n    {\n      proof: [Array],\n      block_hash: '4XBio5dM5UGYjJgzZjgckfVgMZ9uKGbTkt8zZi5webxw',\n      id: 'AXFA4kwiYfruKQ4LkD1qZA8P7HoAvtFwGqwQYdWtWNaW',\n      outcome: [Object]\n    }\n  ]\n}\nTransaction Results:  {\n  signer_id: 'sender.testnet',\n  public_key: 'ed25519:8RazSLHvzj4TBSKGUo5appP7wVeqZNQYjP9hvhF4ZKS2',\n  nonce: 57,\n  receiver_id: 'receiver.testnet',\n  actions: [ { Transfer: [Object] } ],\n  signature: 'ed25519:2sK53w6hybSxX7qWShXz6xKnjnYRUW7Co3evEaaggNW6pGSCNPvx7urY4akwnzAbxZGwsKjx8dcVm73qbitntJjz',\n  hash: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j'\n}\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),s=t(12466),i=t(16550),c=t(20469),o=t(91980),l=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),c=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,o._X)(c),(0,r.useCallback)((function(e){if(c){var n=new URLSearchParams(s.location.search);n.set(c,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[c,s])]}function x(e){var n,t,a,s,i=e.defaultValue,o=e.queryString,l=void 0!==o&&o,u=e.groupId,x=h(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:x})})),b=g[0],m=g[1],f=j({queryString:l,groupId:u}),v=f[0],y=f[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],_=w[1],S=function(){var e=null!=v?v:k;return p({value:e,tabValues:x})?e:null}();return(0,c.Z)((function(){S&&m(S)}),[S]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);m(e),y(e),_(e)}),[y,_,x]),tabValues:x}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function f(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,c=e.tabValues,o=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=o.indexOf(n),a=c[t].value;a!==r&&(l(n),i(a))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;t=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;t=null!=(s=o[i])?s:o[o.length-1]}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=x(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(f,Object.assign({},e,n)),(0,m.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,g.Z)();return(0,m.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);