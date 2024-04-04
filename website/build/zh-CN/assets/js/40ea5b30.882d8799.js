"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8712],{204:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=r(85893),a=r(11151),s=r(74866),i=r(85162);const c={id:"rpc",title:"Remote Procedural Call"},o=void 0,l={id:"develop/integrate/rpc",title:"Remote Procedural Call",description:"Here we will only briefly mention how to use the NEAR RPC. If you want to find the full documentation on NEAR RPC please follow this link.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/integrate/rpc.md",sourceDirName:"2.develop/integrate",slug:"/develop/integrate/rpc",permalink:"/zh-CN/develop/integrate/rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/integrate/rpc.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{id:"rpc",title:"Remote Procedural Call"}},d={},u=[{value:"View Methods",id:"view-methods",level:2},{value:"Change Methods",id:"change-methods",level:2},{value:"Create Transaction",id:"create-transaction",level:3},{value:"<code>signerPublicKey</code>",id:"signerpublickey",level:4},{value:"<code>nonceForPublicKey</code>",id:"nonceforpublickey",level:4},{value:"<code>blockHash</code>",id:"blockhash",level:4},{value:"Sign Transaction",id:"sign-transaction",level:3},{value:"Send Transaction",id:"send-transaction",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Here we will only briefly mention how to use the NEAR RPC. If you want to find the full documentation on NEAR RPC please follow this link."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"view-methods",children:"View Methods"}),"\n",(0,t.jsxs)(n.p,{children:["View methods are those that perform ",(0,t.jsx)(n.strong,{children:"read-only"})," operations. Calling these methods is free, and do not require to specify which account is being used to make the call:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["method: ",(0,t.jsx)(n.code,{children:"query"})]}),"\n",(0,t.jsxs)(n.li,{children:["params:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"request_type"}),": ",(0,t.jsx)(n.code,{children:"call_function"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/api/rpc/setup#using-finality-param",children:(0,t.jsx)(n.code,{children:"finality"})})," ",(0,t.jsx)(n.em,{children:"OR"})," ",(0,t.jsx)(n.a,{href:"/api/rpc/setup#using-block_id-param",children:(0,t.jsx)(n.code,{children:"block_id"})})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"account_id"}),": ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:'"example.testnet"'})})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"method_name"}),": ",(0,t.jsx)(n.code,{children:"name_of_a_example.testnet_method"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"args_base64"}),": ",(0,t.jsx)(n.code,{children:"method_arguments_base_64_encoded"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{value:"json",label:"JSON",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "query",\n  "params": {\n    "request_type": "call_function",\n    "finality": "final",\n    "account_id": "dev-1588039999690",\n    "method_name": "get_num",\n    "args_base64": "e30="\n  }\n}\n'})})}),(0,t.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",label:"JavaScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const response = await near.connection.provider.query({\n  request_type: "call_function",\n  finality: "final",\n  account_id: "dev-1588039999690",\n  method_name: "get_num",\n  args_base64: "e30=",\n});\n'})})}),(0,t.jsx)(i.Z,{value:"http",label:"HTTPie",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=query \\\n  params:=\'{\n    "request_type": "call_function",\n    "finality": "final",\n    "account_id": "dev-1588039999690",\n    "method_name": "get_num",\n    "args_base64": "e30="\n  }\'\n'})})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example response: "}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "result": [48],\n    "logs": [],\n    "block_height": 17817336,\n    "block_hash": "4qkA4sUUG8opjH5Q9bL5mWJTnfR4ech879Db1BZXbx6P"\n  },\n  "id": "dontcare"\n}\n'})}),(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"View methods have by default 200 TGAS for execution"})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": ",(0,t.jsx)(n.code,{children:"[48]"})," is an array of bytes, to be specific it is an ASCII code of ",(0,t.jsx)(n.code,{children:"0"}),".",(0,t.jsx)(n.code,{children:"near-sdk-rs"})," and ",(0,t.jsx)(n.code,{children:"near-sdk-js"})," return JSON-serialized results."]})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["What could go wrong? If you encounter a error please check ",(0,t.jsx)(n.a,{href:"/zh-CN/api/rpc/contracts#what-could-go-wrong",children:"the RPC docs"})," :::"]}),(0,t.jsx)(n.hr,{}),(0,t.jsx)(n.h2,{id:"change-methods",children:"Change Methods"}),(0,t.jsx)(n.p,{children:"Change methods are those that perform both read and write operations. For these methods we do need to specify the account being used to make the call, since that account will expend GAS in the call."}),(0,t.jsxs)(n.p,{children:["Since calls to change methods need to be signed by an account, you will first need to create and sign the transaction that you want to send to the RPC. For this, you currently need to make heavy use of ",(0,t.jsx)(n.code,{children:"near-api-js"}),". Particularly, you need to:"]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a transaction using the ",(0,t.jsx)(n.code,{children:"near-api-js.transactions"})," module."]}),"\n",(0,t.jsxs)(n.li,{children:["Sign the transaction using the ",(0,t.jsx)(n.code,{children:"near-api-js.KeyStore.KeyPair"})]}),"\n",(0,t.jsx)(n.li,{children:"Send the signed transaction to the RPC."}),"\n"]}),(0,t.jsx)(n.h3,{id:"create-transaction",children:"Create Transaction"}),(0,t.jsxs)(n.p,{children:["In order yo create a transaction you will use ",(0,t.jsx)(n.code,{children:"near-api-js.transactions.createTransaction"})," which takes as input:"]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"signerId"}),": the account ID of the transaction originator."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"signerPublicKey"}),": the signer public key, see bellow."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"receiverId"}),": the account ID of the transaction recipient."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nonceForPublicKey"}),": a unique number, see bellow"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"actions"}),": An ",(0,t.jsx)(n.a,{href:"/zh-CN/develop/contracts/actions",children:"action"}),", built from ",(0,t.jsx)(n.code,{children:"near-api-js.transactions"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/integrator/create-transactions#6-blockhash",children:(0,t.jsx)(n.code,{children:"blockHash"})})}),"\n"]}),(0,t.jsx)(n.h4,{id:"signerpublickey",children:(0,t.jsx)(n.code,{children:"signerPublicKey"})}),(0,t.jsx)(n.p,{children:"The public key of the signer must be encoded as an object with two key value pairs: keyType and data. Here is one possible way to get it:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const privateKey = "private-key-here";\nconst keyPair = nearAPI.utils.key_pair.KeyPairEd25519.fromString(privateKey);\nconst publicKey = keyPair.getPublicKey()\n'})}),(0,t.jsx)(n.h4,{id:"nonceforpublickey",children:(0,t.jsx)(n.code,{children:"nonceForPublicKey"})}),(0,t.jsxs)(n.p,{children:["A unique number or ",(0,t.jsx)(n.code,{children:"nonce"})," is required for each transaction signed with an access key. To ensure a unique number is created for each transaction, the current ",(0,t.jsx)(n.code,{children:"nonce"})," should be queried and then incremented by 1."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'\nconst provider = new near-api-js.providers.JsonRpcProvider(\n  `https://rpc.testnet.near.org`\n);\nconst accessKey = await provider.query(\n  `access_key/influencer.testnet/${publicKey.getPublicKey().toString()}`,\n  ""\n);\n\nconst nonce = accessKey.nonce + 1;\n'})}),(0,t.jsx)(n.h4,{id:"blockhash",children:(0,t.jsx)(n.code,{children:"blockHash"})}),(0,t.jsxs)(n.p,{children:["Each transaction requires a current block hash (within 24hrs) to prove that the transaction was created recently. The hash must be converted to an array of bytes using the ",(0,t.jsx)(n.code,{children:"base_decode"})," method found in ",(0,t.jsx)(n.code,{children:"near-api-js"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const recentBlockHash = near-api-js.utils.serialize.base_decode(\n  accessKey.block_hash\n);\n"})}),(0,t.jsx)(n.h3,{id:"sign-transaction",children:"Sign Transaction"}),(0,t.jsx)(n.p,{children:"Now that the transaction is created, we sign it before sending it to the NEAR blockchain. At the lowest level, there are four steps to this process."}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.a,{href:"/integrator/create-transactions#imports",children:(0,t.jsx)(n.code,{children:"nearAPI"})}),", we call on ",(0,t.jsx)(n.code,{children:"serialize()"})," to serialize the transaction in ",(0,t.jsx)(n.a,{href:"https://borsh.io/",children:"Borsh"}),"."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const serializedTx = near-api-js.utils.serialize.serialize(\n  nearAPI.transactions.SCHEMA,\n  transaction\n);\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Hash the serialized transaction using a ",(0,t.jsx)(n.code,{children:"sha256"})," cryptographic hashing algorithm."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const serializedTxHash = new Uint8Array(sha256.sha256.array(serializedTx));\n"})}),(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Create a signature with the ",(0,t.jsx)(n.code,{children:"keyPair"}),"."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const signature = keyPair.sign(serializedTxHash);\n"})}),(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Construct the signed transaction using ",(0,t.jsx)(n.code,{children:"near-api-js"})," ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/d4d4cf1ac3182fa998b1e004e6782219325a641b/src/transaction.ts#L112-L123",children:"SignedTransaction class"}),"."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const signedTransaction = new nearAPI.transactions.SignedTransaction({\n  transaction,\n  signature: new nearAPI.transactions.Signature({\n    keyType: transaction.publicKey.keyType,\n    data: signature.signature,\n  }),\n});\n"})}),(0,t.jsx)(n.h3,{id:"send-transaction",children:"Send Transaction"}),(0,t.jsx)(n.p,{children:"Final step is to encode and send the transaction."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["First we serialize transaction into ",(0,t.jsx)(n.a,{href:"https://borsh.io/",children:"Borsh"}),", and store the result as ",(0,t.jsx)(n.code,{children:"signedSerializedTx"}),". ",(0,t.jsx)(n.em,{children:"(required for all transactions)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Then we send the transaction via ",(0,t.jsx)(n.a,{href:"/api/rpc/setup",children:"RPC call"})," using the ",(0,t.jsx)(n.code,{children:"sendJsonRpc()"})," method nested inside ",(0,t.jsx)(n.a,{href:"/integrator/create-transactions#setting-up-connection-to-near",children:(0,t.jsx)(n.code,{children:"near"})}),"."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// encodes transaction to serialized Borsh (required for all transactions)\nconst signedSerializedTx = signedTransaction.encode();\n// sends transaction to NEAR blockchain via JSON RPC call and records the result\nconst result = await provider.sendJsonRpc("broadcast_tx_commit", [\n  Buffer.from(signedSerializedTx).toString("base64"),\n]);\n'})}),(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Example response: "}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"{\n  status: { SuccessValue: '' },\n  transaction: {\n    signer_id: 'sender.testnet',\n    public_key: 'ed25519:8RazSLHvzj4TBSKGUo5appP7wVeqZNQYjP9hvhF4ZKS2',\n    nonce: 57,\n    receiver_id: 'receiver.testnet',\n    actions: [ [Object] ],\n    signature: 'ed25519:2sK53w6hybSxX7qWShXz6xKnjnYRUW7Co3evEaaggNW6pGSCNPvx7urY4akwnzAbxZGwsKjx8dcVm73qbitntJjz',\n    hash: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j'\n  },\n  transaction_outcome: {\n    proof: [ [Object] ],\n    block_hash: 'J6cFDzAFkuknHMCEYW2uPQXDvCfSndkJmADVEWJbtTwV',\n    id: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j',\n    outcome: {\n      logs: [],\n      receipt_ids: [Array],\n      gas_burnt: 223182562500,\n      tokens_burnt: '22318256250000000000',\n      executor_id: 'sender.testnet',\n      status: [Object]\n    }\n  },\n  receipts_outcome: [\n    {\n      proof: [Array],\n      block_hash: 'FSS7UzTpMr4mUm6aw8MmzP6Q7wnQs35VS8vYm1R461dM',\n      id: '3LjBxe2jq1s7XEPrYxihp4rPVdyHAbYfkcdJjUEVijhJ',\n      outcome: [Object]\n    },\n    {\n      proof: [Array],\n      block_hash: '4XBio5dM5UGYjJgzZjgckfVgMZ9uKGbTkt8zZi5webxw',\n      id: 'AXFA4kwiYfruKQ4LkD1qZA8P7HoAvtFwGqwQYdWtWNaW',\n      outcome: [Object]\n    }\n  ]\n}\nTransaction Results:  {\n  signer_id: 'sender.testnet',\n  public_key: 'ed25519:8RazSLHvzj4TBSKGUo5appP7wVeqZNQYjP9hvhF4ZKS2',\n  nonce: 57,\n  receiver_id: 'receiver.testnet',\n  actions: [ { Transfer: [Object] } ],\n  signature: 'ed25519:2sK53w6hybSxX7qWShXz6xKnjnYRUW7Co3evEaaggNW6pGSCNPvx7urY4akwnzAbxZGwsKjx8dcVm73qbitntJjz',\n  hash: 'EgGzB73eFxCwZRGcEyCKedLjvvgxhDXcUtq21SqAh79j'\n}\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),a=r(36905),s=r(12466),i=r(16550),c=r(20469),o=r(91980),l=r(67392),d=r(50012);function u(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),c=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,o._X)(c),(0,t.useCallback)((function(e){if(c){var n=new URLSearchParams(s.location.search);n.set(c,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[c,s])]}function x(e){var n,r,a,s,i=e.defaultValue,o=e.queryString,l=void 0!==o&&o,u=e.groupId,x=h(e),g=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:x})})),m=g[0],b=g[1],f=j({queryString:l,groupId:u}),v=f[0],y=f[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,d.Nk)(n),a=r[0],s=r[1],[a,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],_=w[1],S=function(){var e=null!=v?v:k;return p({value:e,tabValues:x})?e:null}();return(0,c.Z)((function(){S&&b(S)}),[S]),{selectedValue:m,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),_(e)}),[y,_,x]),tabValues:x}}var g=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function f(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,c=e.tabValues,o=[],l=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,r=o.indexOf(n),a=c[r].value;a!==t&&(l(n),i(a))},u=function(e){var n,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;r=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;r=null!=(s=o[i])?s:o[o.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:c.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},s,{className:(0,a.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=x(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(f,Object.assign({},e,n)),(0,b.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,g.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);