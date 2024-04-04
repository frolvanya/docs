"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[809],{5234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=t(85893),a=t(11151);const c={id:"faq",title:"NEAR JavaScript API\uc5d0 \ub300\ud55c FAQ",sidebar_label:"FAQ"},s=void 0,o={id:"tools/near-api-js/faq",title:"NEAR JavaScript API\uc5d0 \ub300\ud55c FAQ",description:"\ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38 \ubaa8\uc74c\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/4.tools/near-api-js/faq.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/faq",permalink:"/ko/tools/near-api-js/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/faq.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{id:"faq",title:"NEAR JavaScript API\uc5d0 \ub300\ud55c FAQ",sidebar_label:"FAQ"},sidebar:"tools",previous:{title:"\uc720\ud2f8\ub9ac\ud2f0",permalink:"/ko/tools/near-api-js/utils"},next:{title:"NEAR SDKs",permalink:"/ko/sdk/welcome"}},i={},d=[{value:"\uc77c\ubc18",id:"general",level:2},{value:"<code>near-api-js</code>\ub97c \uc815\uc801 html \ud398\uc774\uc9c0\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?",id:"can-i-use-near-api-js-on-a-static-html-page",level:3},{value:"\uc5b4\ub5a4 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c JavaScript API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?",id:"\uc5b4\ub5a4-\ud504\ub860\ud2b8\uc5d4\ub4dc-\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c-javascript-api\ub97c-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub098\uc694",level:3},{value:"React Native\uc640 \uac19\uc740 \ubaa8\ubc14\uc77c JavaScript \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c JavaScript API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?",id:"react-native\uc640-\uac19\uc740-\ubaa8\ubc14\uc77c-javascript-\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c-javascript-api\ub97c-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub098\uc694",level:3},{value:"\ud2b8\ub79c\uc7ad\uc158",id:"transactions",level:2},{value:"\ud2b8\ub79c\uc7ad\uc158 \uc0c1\ud0dc \ud655\uc778 \ubc29\ubc95",id:"\ud2b8\ub79c\uc7ad\uc158-\uc0c1\ud0dc-\ud655\uc778-\ubc29\ubc95",level:3},{value:"near-api-js\uc5d0 \uc758\ud574 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc11c\uba85\ub418\uace0 \uc804\uc1a1\ub418\ub294 \ubc29\ubc95",id:"near-api-js\uc5d0-\uc758\ud574-\ud2b8\ub79c\uc7ad\uc158\uc774-\uc11c\uba85\ub418\uace0-\uc804\uc1a1\ub418\ub294-\ubc29\ubc95",level:3},{value:"\ubc30\uce58(Batch) \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1 \ubc29\ubc95",id:"\ubc30\uce58batch-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1-\ubc29\ubc95",level:3},{value:"\uacc4\uc815",id:"accounts",level:2},{value:"<code>Account</code>\uc640 <code>ConnectedWalletAccount</code>\uc758 \ucc28\uc774\uc810\uc740 \ubb34\uc5c7\uc778\uac00\uc694?",id:"account\uc640-connectedwalletaccount\uc758-\ucc28\uc774\uc810\uc740-\ubb34\uc5c7\uc778\uac00\uc694",level:3},{value:"\uc554\uc2dc\uc801 \uacc4\uc815(Implicit Account)\uc740 \uc5b4\ub5bb\uac8c \uc0dd\uc131\ud558\ub098\uc694?",id:"\uc554\uc2dc\uc801-\uacc4\uc815implicit-account\uc740-\uc5b4\ub5bb\uac8c-\uc0dd\uc131\ud558\ub098\uc694",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8",id:"contracts",level:2},{value:"\uac00\uc2a4/\ubcf4\uc99d\uae08\uc740 \uc5b4\ub5bb\uac8c \ucca8\ubd80\ud558\ub098\uc694?",id:"how-do-i-attach-gas--a-deposit",level:3},{value:"\uc77c\ubc18\uc801\uc778 \uc5d0\ub7ec",id:"common-errors",level:2},{value:"RPC \uc5d0\ub7ec",id:"rpc-\uc5d0\ub7ec",level:3},{value:"\ub204\ub77d\ub41c \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc",id:"missing-contract-method",level:3},{value:"\ub204\ub77d\ub41c \uba54\uc138\uc9c0\uc5d0 \ub300\ud55c \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uc5d0\ub7ec",id:"\ub204\ub77d\ub41c-\uba54\uc138\uc9c0\uc5d0-\ub300\ud55c-\ud074\ub77c\uc774\uc5b8\ud2b8-\uce21-\uc5d0\ub7ec",level:4},{value:"<code>TypeError: contract.METHOD_NAME is not a function</code>",id:"typeerror-contractmethod_name-is-not-a-function",level:5},{value:"\ub204\ub77d\ub41c \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c RPC \uc5d0\ub7ec",id:"\ub204\ub77d\ub41c-\uba54\uc11c\ub4dc\uc5d0-\ub300\ud55c-rpc-\uc5d0\ub7ec",level:4},{value:"<code>wasm execution failed with error: FunctionCallError(MethodResolveError(MethodNotFound))</code>",id:"wasm-execution-failed-with-error-functioncallerrormethodresolveerrormethodnotfound",level:5},{value:"<code>wasm execution failed with error: FunctionCallError(HostError(ProhibitedInView { method_name: &quot;storage_write&quot; }))</code>",id:"wasm-execution-failed-with-error-functioncallerrorhosterrorprohibitedinview--method_name-storage_write-",level:5},{value:"Class <code>{X}</code> is missing in schema: publicKey",id:"class-x-is-missing-in-schema-publickey",level:3},{value:"<code>regeneratorRuntime</code> \uac00 \uc815\uc758\ub418\uc9c0 \uc54a\uc74c",id:"regeneratorruntime-is-not-defined",level:3},{value:"<code>Node.js</code> \uc0ac\uc6a9\ud588\uc744 \ub54c \ubc1c\uc0dd\ud558\ub294 \ucc3d \uc624\ub958",id:"window-error-using-nodejs",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38 \ubaa8\uc74c\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.h2,{id:"general",children:"\uc77c\ubc18"}),"\n",(0,r.jsxs)(n.h3,{id:"can-i-use-near-api-js-on-a-static-html-page",children:[(0,r.jsx)(n.code,{children:"near-api-js"}),"\ub97c \uc815\uc801 html \ud398\uc774\uc9c0\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?"]}),"\n",(0,r.jsx)(n.p,{children:"CDN\uc5d0\uc11c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/near-api-js@0.45.1/dist/near-api-js.min.js"><\/script>\n'})}),"\n",(0,r.jsxs)(n.admonition,{title:"\ucd5c\uc2e0 \ubc84\uc804\uc744 \ub85c\ub4dc\ud588\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.",type:"note",children:[(0,r.jsxs)(n.p,{children:["\ubc84\uc804 \ubaa9\ub85d\uc740 ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/near-api-js",children:"npmjs.com"}),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"\uad6c\ud604 \uc608\uc2dc"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n\n<body>\n  <ul id=\"messages\"></ul>\n  <textarea id=\"text\" placeholder=\"Add Message\"></textarea>\n  <button id=\"add-text\">Add Text</button>\n  <script src=\"https://cdn.jsdelivr.net/npm/near-api-js@0.45.1/dist/near-api-js.min.js\"><\/script>\n  <script>\n    // connect to NEAR\n    const near = new nearApi.Near({\n      keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),\n      networkId: 'testnet',\n      nodeUrl: 'https://rpc.testnet.near.org',\n      walletUrl: 'https://testnet.mynearwallet.com/'\n    });\n    \n    // connect to the NEAR Wallet\n    const wallet = new nearApi.WalletConnection(near, 'my-app');\n\n    // connect to a NEAR smart contract\n    const contract = new nearApi.Contract(wallet.account(), 'guest-book.testnet', {\n      viewMethods: ['getMessages'],\n      changeMethods: ['addMessage']\n    });\n\n    const button = document.getElementById('add-text');\n    if (!wallet.isSignedIn()) {\n      button.textContent = 'SignIn with NEAR'\n    }\n\n    // call the getMessages view method\n    contract.getMessages()\n      .then(messages => {\n        const ul = document.getElementById('messages');\n        messages.forEach(message => {\n          const li = document.createElement('li');\n          li.textContent = `${message.sender} - ${message.text}`;\n          ul.appendChild(li);\n        })\n      });\n\n    // Either sign in or call the addMessage change method on button click\n    document.getElementById('add-text').addEventListener('click', () => {\n      if (wallet.isSignedIn()) {\n        contract.addMessage({\n          args: { text: document.getElementById('text').value },\n          amount: nearApi.utils.format.parseNearAmount('1')\n        })\n      } else {\n        wallet.requestSignIn({\n          contractId: 'guest-book.testnet',\n          methodNames: ['getMessages', 'addMessage']\n        });\n      }\n    });\n  <\/script>\n</body>\n\n</html>\n"})})})]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h3,{id:"\uc5b4\ub5a4-\ud504\ub860\ud2b8\uc5d4\ub4dc-\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c-javascript-api\ub97c-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub098\uc694",children:"\uc5b4\ub5a4 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c JavaScript API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?"}),(0,r.jsx)(n.p,{children:"JavaScript API\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0 \uad6c\uc560\ubc1b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. React, Vue, Angular \ub4f1\uacfc \uac19\uc740 \ubaa8\ub4e0 \ud504\ub860\ud2b8\uc5d4\ub4dc \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near/create-near-app",children:(0,r.jsx)(n.code,{children:"create-near-app"})}),"\uc740 \uc5ec\ub7ec \ud15c\ud50c\ub9bf\uc73c\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \ube60\ub974\uac8c \ubd80\ud2b8\uc2a4\ud2b8\ub7a9\ud558\ub294 \ub370 \uc0ac\uc6a9\ub420 \uc218 \uc788\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4."]}),(0,r.jsx)(n.p,{children:"npx create-near-app"}),(0,r.jsx)(n.h3,{id:"react-native\uc640-\uac19\uc740-\ubaa8\ubc14\uc77c-javascript-\ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c-javascript-api\ub97c-\uc0ac\uc6a9\ud560-\uc218-\uc788\ub098\uc694",children:"React Native\uc640 \uac19\uc740 \ubaa8\ubc14\uc77c JavaScript \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c JavaScript API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub098\uc694?"}),(0,r.jsxs)(n.p,{children:["JavaScript API\ub294 \ub300\ubd80\ubd84\uc758 JavaScript \ub7f0\ud0c0\uc784\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, \ub0b4\ubd80\uc801\uc73c\ub85c\ub294 NEAR\uc758 ",(0,r.jsx)(n.a,{href:"/api/rpc/introduction",children:"RPC API"}),"\uc5d0 \ub300\ud55c \ucd94\uc0c1\ud654\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc9c0\uac11\uc744 \ubaa8\ub4e0 \uacf3\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, React Native \uc571\uc5d0\uc11c\ub294 \uc571\uc758 \uc6f9 \ubc84\uc804\uc5d0\uc11c \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, \uae30\ubcf8 \uc571 \ubc30\ud3ec\uc5d0\uc11c\ub294 \uc791\ub3d9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),(0,r.jsxs)(n.p,{children:["iOS \ub610\ub294 Android \ub0b4 ",(0,r.jsx)(n.code,{children:"WebView"})," \uad6c\uc131 \uc694\uc18c\uc5d0\uc11c \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc774\ub294 ",(0,r.jsx)(n.code,{children:"KeyStore"}),"\uc5d0 \ub300\ud574 ",(0,r.jsx)(n.code,{children:"LocalStorage"}),"\ub97c \uc0ac\uc6a9\ud558\uace0, ",(0,r.jsx)(n.code,{children:"WebView"})," \uad6c\uc131 \uc694\uc18c \ub85c\ub529\ub97c \uad00\ub9ac\ud560 \ub54c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc720\uc9c0\ud558\ub294 \uac83\uc740 \uc0ac\uc6a9\uc790\uc758 \ucc45\uc784\uc774\ub77c\ub294 \uac83\uc744 \uae30\uc5b5\ud558\uc138\uc694."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"transactions",children:"\ud2b8\ub79c\uc7ad\uc158"}),(0,r.jsx)(n.h3,{id:"\ud2b8\ub79c\uc7ad\uc158-\uc0c1\ud0dc-\ud655\uc778-\ubc29\ubc95",children:"\ud2b8\ub79c\uc7ad\uc158 \uc0c1\ud0dc \ud655\uc778 \ubc29\ubc95"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/tools/near-api-js/cookbook",children:"\uc694\ub9ac\ucc45"}),"\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud55c \uc608\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),(0,r.jsx)(n.h3,{id:"near-api-js\uc5d0-\uc758\ud574-\ud2b8\ub79c\uc7ad\uc158\uc774-\uc11c\uba85\ub418\uace0-\uc804\uc1a1\ub418\ub294-\ubc29\ubc95",children:"near-api-js\uc5d0 \uc758\ud574 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc11c\uba85\ub418\uace0 \uc804\uc1a1\ub418\ub294 \ubc29\ubc95"}),(0,r.jsx)(n.p,{children:"\ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\uac00 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc804\ub2ec\ub418\uace0 \ucd5c\uc885\uc801\uc73c\ub85c \ube14\ub85d\uc5d0 \ud3ec\ud568\ub418\uae30 \uc804\uc5d0 \uad00\ub828\ub41c \uba87 \uac00\uc9c0 \ub2e8\uacc4\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \ub2e8\uacc4\ub294 \uc0ac\uc6a9\uc790 \uacc4\uc815\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131, \uc11c\uba85 \ubc0f \ucd5c\uc885\uc801\uc73c\ub85c \uc218\ud589\ud560 \ub54c \uc218\ud589\ub429\ub2c8\ub2e4."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\uc0ac\uc6a9\uc790\ub294 ",(0,r.jsxs)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/account.ts#L200",children:[(0,r.jsx)(n.code,{children:"account.signAndSendTransaction"})," \uba54\uc11c\ub4dc\ub97c"]}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158 \uac1d\uccb4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 Action \ubc30\uc5f4\uc744 \uc218\ub77d\ud558\uace0 \ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc\uc5d0 \ub300\ud55c \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\ud2b8\ub79c\uc7ad\uc158\uc740 ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/account.ts#L204",children:"account.signTransaction \uba54\uc11c\ub4dc"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\uba85\ub429\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 Action \ubc30\uc5f4\uc744 \uc218\ub77d\ud558\uace0 \uc11c\uba85\ub41c \ud2b8\ub79c\uc7ad\uc158 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.li,{children:["\uc11c\uba85\ub41c \ud2b8\ub79c\uc7ad\uc158 \uac1d\uccb4\ub294 ",(0,r.jsxs)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/account.ts#L208",children:[(0,r.jsx)(n.code,{children:"account.connection.provider.sendTransaction"})," \uba54\uc11c\ub4dc"]}),"\ub97c \ud1b5\ud574 \ub124\ud2b8\uc6cc\ud06c\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 \uc11c\uba85\ub41c \ud2b8\ub79c\uc7ad\uc158 \uac1d\uccb4\ub97c \uc218\ub77d\ud558\uace0 \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\ub294 ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/providers/json-rpc-provider.ts#L80",children:"\ud2b8\ub79c\uc7ad\uc158 \uac1d\uccb4\uc5d0 \ub300\ud55c borsh \uc9c1\ub82c\ud654\ub97c \uc218\ud589"}),"\ud558\uace0 ",(0,r.jsxs)(n.a,{href:"https://github.com/near/near-api-js/blob/f78616480ba84c73f681211fe6266bd2ed2b9da1/packages/near-api-js/src/providers/json-rpc-provider.ts#L81",children:["base64\ub85c \uc778\ucf54\ub529\ub41c \uc9c1\ub82c\ud654\ub41c \ud2b8\ub79c\uc7ad\uc158 \uac1c\uccb4\ub85c JSON RPC \uba54\uc11c\ub4dc ",(0,r.jsx)(n.code,{children:"broadcast_tx_commit"})]}),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."]}),"\n"]}),(0,r.jsx)(n.h3,{id:"\ubc30\uce58batch-\ud2b8\ub79c\uc7ad\uc158-\uc804\uc1a1-\ubc29\ubc95",children:"\ubc30\uce58(Batch) \ud2b8\ub79c\uc7ad\uc158 \uc804\uc1a1 \ubc29\ubc95"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"account"}),"\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"signAndSendTransaction({})"})," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc77c\uad04 \uc804\uc1a1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc\ub294 \uc77c\ub828\uc758 \ud2b8\ub79c\uc7ad\uc158 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uba70, \ud558\ub098\uac00 \uc2e4\ud328\ud558\uba74 \uc804\uccb4 \uc791\uc5c5\uc774 \uc2e4\ud328\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc740 \uac04\ub2e8\ud55c \uc608\uc785\ub2c8\ub2e4."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const { connect, transactions, keyStores } = require("near-api-js");\nconst fs = require("fs");\nconst path = require("path");\nconst homedir = require("os").homedir();\n\nconst CREDENTIALS_DIR = ".near-credentials";\nconst CONTRACT_NAME = "spf.idea404.testnet";\nconst WASM_PATH = path.join(__dirname, "../build/uninitialized_nft.wasm");\n\nconst credentialsPath = path.join(homedir, CREDENTIALS_DIR);\nconst keyStore = new keyStores.UnencryptedFileSystemKeyStore(credentialsPath);\n\nconst config = {\n  keyStore,\n  networkId: "testnet",\n  nodeUrl: "https://rpc.testnet.near.org",\n};\n\nsendTransactions();\n\nasync function sendTransactions() {\n  const near = await connect({ ...config, keyStore });\n  const account = await near.account(CONTRACT_NAME);\n  const args = { some_field: 1, another_field: "hello" };\n\n  const balanceBefore = await account.getAccountBalance();\n  console.log("Balance before:", balanceBefore);\n\n  try {\n    const result = await account.signAndSendTransaction({\n      receiverId: CONTRACT_NAME,\n      actions: [\n        transactions.deployContract(fs.readFileSync(WASM_PATH)),  // Contract does not get deployed\n        transactions.functionCall("new", Buffer.from(JSON.stringify(args)), 10000000000000, "0"),  // this call fails\n        transactions.transfer("1" + "0".repeat(24)), // 1 NEAR is not transferred either\n      ],\n    });\n    console.log(result);\n  } catch (e) {\n    console.log("Error:", e);\n  }\n\n  const balanceAfter = await account.getAccountBalance();\n  console.log("Balance after:", balanceAfter);\n}\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Balance before: {\n  total: '49987878054959838200000000',\n  stateStaked: '4555390000000000000000000',\n  staked: '0',\n  available: '45432488054959838200000000'\n}\nReceipts: 2PPueY6gnA4YmmQUzc8DytNBp4PUpgTDhmEjRSHHVHBd, 3isLCW9SBH1MrPjeEPAmG9saHLj9Z2g7HxzfBdHmaSaG\n    Failure [spf.idea404.testnet]: Error: {\"index\":1,\"kind\":{\"ExecutionError\":\"Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error(\\\"missing field `owner_id`\\\", line: 1, column: 40)', nft/src/lib.rs:47:1\"}}\nError: ServerTransactionError: {\"index\":1,\"kind\":{\"ExecutionError\":\"Smart contract panicked: panicked at 'Failed to deserialize input from JSON.: Error(\\\"missing field `owner_id`\\\", line: 1, column: 40)', nft/src/lib.rs:47:1\"}}\n    at parseResultError (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/utils/rpc_errors.js:31:29)\n    at Account.<anonymous> (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/account.js:156:61)\n    at Generator.next (<anonymous>)\n    at fulfilled (/Users/dennis/Code/naj-test/node_modules/near-api-js/lib/account.js:5:58)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5) {\n  type: 'FunctionCallError',\n  context: undefined,\n  index: 1,\n  kind: {\n    ExecutionError: 'Smart contract panicked: panicked at \\'Failed to deserialize input from JSON.: Error(\"missing field `owner_id`\", line: 1, column: 40)\\', nft/src/lib.rs:47:1'\n  },\n  transaction_outcome: {\n    block_hash: '5SUhYcXjXR1svCxL5BhCuw88XNdEjKXqWgA9X4XZW1dW',\n    id: 'SKQqAgnSN27fyHpncaX3fCUxWknBrMtxxytWLRDQfT3',\n    outcome: {\n      executor_id: 'spf.idea404.testnet',\n      gas_burnt: 4839199843770,\n      logs: [],\n      metadata: [Object],\n      receipt_ids: [Array],\n      status: [Object],\n      tokens_burnt: '483919984377000000000'\n    },\n    proof: [ [Object], [Object], [Object], [Object], [Object] ]\n  }\n}\nBalance after: {\n  total: '49985119959346682700000000',\n  stateStaked: '4555390000000000000000000',\n  staked: '0',\n  available: '45429729959346682700000000'\n}\n\n"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/tools/near-api-js/cookbook",children:"\uc694\ub9ac\ucc45"}),"\uc5d0\uc11c \ubc30\uce58 \ud2b8\ub79c\uc7ad\uc158\uc758 \uc608\ub97c \ucc3e\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"accounts",children:"\uacc4\uc815"}),(0,r.jsxs)(n.h3,{id:"account\uc640-connectedwalletaccount\uc758-\ucc28\uc774\uc810\uc740-\ubb34\uc5c7\uc778\uac00\uc694",children:[(0,r.jsx)(n.code,{children:"Account"}),"\uc640 ",(0,r.jsx)(n.code,{children:"ConnectedWalletAccount"}),"\uc758 \ucc28\uc774\uc810\uc740 \ubb34\uc5c7\uc778\uac00\uc694?"]}),(0,r.jsxs)(n.p,{children:["NEAR\uc758 \uc9c0\uac11\uc740 \uc6f9 \uae30\ubc18\uc774\uae30 \ub54c\ubb38\uc5d0 \uc9c0\uac11\uacfc\uc758 \uc0c1\ud638 \uc791\uc6a9\uc740 \uc6f9 \ube0c\ub77c\uc6b0\uc800 \ud658\uacbd\uc5d0\uc11c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"Account"}),"\uc640 ",(0,r.jsx)(n.code,{children:"ConnectedWalletAccount"}),"\uc758 \ucc28\uc774\uc810\uc740 \uc8fc\ub85c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\ub294 \ubc29\uc2dd\uc5d0 \uad00\ud55c \uac83\uc785\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"ConnectedWalletAccount"}),"\uc740 \uc9c0\uac11\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc2b9\uc778\ud569\ub2c8\ub2e4. \ub0b4\ubd80\uc801\uc73c\ub85c ",(0,r.jsx)(n.code,{children:"ConnectedWalletAccount"}),"\ub294 ",(0,r.jsx)(n.code,{children:"Account"})," \ub0b4 \uba87 \uac00\uc9c0 \uba54\uc11c\ub4dc\ub97c \uc0c1\uc18d\ud558\uace0 \ub36e\uc5b4\uc501\ub2c8\ub2e4."]}),(0,r.jsx)(n.h3,{id:"\uc554\uc2dc\uc801-\uacc4\uc815implicit-account\uc740-\uc5b4\ub5bb\uac8c-\uc0dd\uc131\ud558\ub098\uc694",children:"\uc554\uc2dc\uc801 \uacc4\uc815(Implicit Account)\uc740 \uc5b4\ub5bb\uac8c \uc0dd\uc131\ud558\ub098\uc694?"}),(0,r.jsxs)(n.p,{children:["\uc774\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,r.jsx)(n.a,{href:"https://docs.near.org/integrator/implicit-accounts",children:"\uc554\uc2dc\uc801 \uacc4\uc815"}),"\uc5d0 \ub300\ud55c \ubb38\uc11c\uc5d0\uc11c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"contracts",children:"\ucee8\ud2b8\ub799\ud2b8"}),(0,r.jsx)(n.h3,{id:"how-do-i-attach-gas--a-deposit",children:"\uac00\uc2a4/\ubcf4\uc99d\uae08\uc740 \uc5b4\ub5bb\uac8c \ucca8\ubd80\ud558\ub098\uc694?"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/tools/near-api-js/quick-reference#load-contract",children:"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc778\uc2a4\ud134\uc2a4\ud654\ub418\uba74"}),", \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud558\uace0 \ucca8\ubd80\ub41c \uac00\uc2a4\uc758 \uc591\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'await contract.method_name(\n  {\n    arg_name: "value", // argument name and value - pass empty object if no args required\n  },\n  "300000000000000", // attached GAS (optional)\n  "1000000000000000000000000" // attached deposit in yoctoNEAR (optional)\n);\n'})}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h2,{id:"common-errors",children:"\uc77c\ubc18\uc801\uc778 \uc5d0\ub7ec"}),(0,r.jsx)(n.h3,{id:"rpc-\uc5d0\ub7ec",children:"RPC \uc5d0\ub7ec"}),(0,r.jsxs)(n.p,{children:["RPC \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc5d0\uc11c \ubc1c\uc0dd\ud558\uace0 JavaScript API\uac00 \uc804\ud30c\ud558\ub294 \uc804\uccb4 \uc624\ub958 \uba54\uc2dc\uc9c0\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,r.jsx)(n.a,{href:"https://github.com/near/near-api-js/blob/16ba17251ff7d9c8454261001cd6b87e9a994789/packages/near-api-js/src/res/error_messages.json",children:"\ubaa9\ub85d"}),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."]}),(0,r.jsx)(n.h3,{id:"missing-contract-method",children:"\ub204\ub77d\ub41c \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc"}),(0,r.jsxs)(n.p,{children:["\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21\uc5d0\uc11c ",(0,r.jsx)(n.code,{children:"Contract"})," \uc778\uc2a4\ud134\uc2a4\ub97c \uad6c\uc131\ud560 \ub54c, \ucee8\ud2b8\ub799\ud2b8 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4. \ucca0\uc790\uac00 \ud2c0\ub9ac\uac70\ub098 \uc77c\uce58\ud558\uc9c0 \uc54a\uac70\ub098 \uba54\uc11c\ub4dc \uc774\ub984\uc774 \ub204\ub77d\ub41c \uacbd\uc6b0 \ub204\ub77d\ub41c \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \uc624\ub958\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4."]}),(0,r.jsx)(n.p,{children:"\ub2e4\uc74c\uc740 \uba54\uc11c\ub4dc\uac00 \ub204\ub77d\ub418\uac70\ub098 \uc798\ubabb\ub41c \uba87 \uac00\uc9c0 \uacbd\uc6b0\ub97c \ub098\ud0c0\ub0b8 \uac83\uc785\ub2c8\ub2e4."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\uc0dd\uc131\uc790(constructor)\uc5d0\uc11c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc740 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \ub54c."}),"\n",(0,r.jsx)(n.li,{children:"\ube14\ub85d\uccb4\uc778\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0(\uadf8\ub7ec\ub098 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uc0dd\uc131\uc790(constructor)\uc5d0\uc11c \uc9c0\uc815\ud55c \uacbd\uc6b0)."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"viewMethods"}),"\uc640 ",(0,r.jsx)(n.code,{children:"changeMethods"}),"\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc744 \ub54c."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["\uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uadf8\uac83\uc740 \ud558\ub098\uc758 ",(0,r.jsx)(n.code,{children:"view"}),"\uc640 \ud558\ub098\uc758 ",(0,r.jsx)(n.code,{children:"call"})," \uba54\uc11c\ub4dc\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"@NearBindgen\nclass MyContract extends NearContract {\n  constructor() { super(); }\n\n  @view\n  method_A_view(): string {\n    return 'Hi';\n  }\n\n  @call\n  method_B_call(): void {}\n}\n"})}),(0,r.jsx)(n.h4,{id:"\ub204\ub77d\ub41c-\uba54\uc138\uc9c0\uc5d0-\ub300\ud55c-\ud074\ub77c\uc774\uc5b8\ud2b8-\uce21-\uc5d0\ub7ec",children:"\ub204\ub77d\ub41c \uba54\uc138\uc9c0\uc5d0 \ub300\ud55c \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \uc5d0\ub7ec"}),(0,r.jsx)(n.h5,{id:"typeerror-contractmethod_name-is-not-a-function",children:(0,r.jsx)(n.code,{children:"TypeError: contract.METHOD_NAME is not a function"})}),(0,r.jsxs)(n.p,{children:["\ub2e4\uc74c \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc790\ub294 ",(0,r.jsx)(n.code,{children:"method_A_view"}),"\ub9cc \uc120\uc5b8\ud558\uace0, ",(0,r.jsx)(n.code,{children:"method_B_call"}),"\ub97c \uc120\uc5b8\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const contract = await new nearAPI.Contract(\n  walletConnection.account(), 'guest-book.testnet',\n  {\n    viewMethods: ['method_A_view'], // <=== Notice this\n    changeMethods: [], // <=== Notice this\n    sender: walletConnection.getAccountId(),\n  }\n);\n\n// This will work because we declared `method_A_view` in constructor\nawait contract.method_A_view();\n\n// This will throw `TypeError: contract.method_B_call is not a function` \n// because we didn't declare `method_B_call` in constructor, \n// even if it exists in the real contract.\nawait contract.method_B_call();\n\n// This will also throw `TypeError: contract.method_C is not a function`,\n// not because `method_C` doesn't exist on the contract, but because we didn't declare it\n// in the client-side constructor.\nawait contract.method_C();\n"})}),(0,r.jsx)(n.h4,{id:"\ub204\ub77d\ub41c-\uba54\uc11c\ub4dc\uc5d0-\ub300\ud55c-rpc-\uc5d0\ub7ec",children:"\ub204\ub77d\ub41c \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c RPC \uc5d0\ub7ec"}),(0,r.jsx)(n.h5,{id:"wasm-execution-failed-with-error-functioncallerrormethodresolveerrormethodnotfound",children:(0,r.jsx)(n.code,{children:"wasm execution failed with error: FunctionCallError(MethodResolveError(MethodNotFound))"})}),(0,r.jsx)(n.p,{children:"\uc774 \uc608\uc81c\uc5d0\uc11c \uba54\uc11c\ub4dc\ub97c \uc9c0\uc815\ud558\uace0 \ud638\ucd9c\ud558\uc600\uc9c0\ub9cc, \uc774 \uba54\uc11c\ub4dc\ub294 \ube14\ub85d\uccb4\uc778\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"}\n);\n// We did specify `method_C` name in constructor, so this function exists on client-side `contract` instance,\n// but a method with this name does not exist on the actual contract on the blockchain.\n  const contract = await new nearAPI.Contract(\n  // ...\n  // Even though the method exists on the actual blockchain contract,\n// we didn't specify `method_A_view` in the contract's client-side constructor.\n{\n    viewMethods: [\"method_C\"], // <=== method_C doesn't exist on the contract above\n    changeMethods: [],\n    // ...\nawait contract.method_A_view();\n// This will return an error from RPC call `FunctionCallError(MethodResolveError(MethodNotFound))`\n// and will throw it on the client-side\nawait contract.method_C();\n\n// Notice: if we call `method_A_view` we get `TypeError: contract.method_A_view is not a function`.\n"})}),(0,r.jsx)(n.h5,{id:"wasm-execution-failed-with-error-functioncallerrorhosterrorprohibitedinview--method_name-storage_write-",children:(0,r.jsx)(n.code,{children:'wasm execution failed with error: FunctionCallError(HostError(ProhibitedInView { method_name: "storage_write" }))'})}),(0,r.jsxs)(n.p,{children:["\ub9c8\uc9c0\ub9c9 \uacbd\uc6b0\ub294 ",(0,r.jsx)(n.code,{children:"viewMethods"}),"\uc640 ",(0,r.jsx)(n.code,{children:"changeMethods"}),"\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4."]}),(0,r.jsx)(n.p,{children:"\uc704 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc6b0\ub9ac\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc120\uc5b8\ud588\uc2b5\ub2c8\ub2e4."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@view"})," \uba54\uc11c\ub4dc - ",(0,r.jsx)(n.code,{children:"method_A_view"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@call"})," \uba54\uc11c\ub4dc -",(0,r.jsx)(n.code,{children:"method_B_call"})]}),"\n"]}),(0,r.jsxs)(n.p,{children:["\ud074\ub77c\uc774\uc5b8\ud2b8 \ucabd \uc0dd\uc131\uc790\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,r.jsx)(n.code,{children:"@view"})," \uba54\uc11c\ub4dc \uc774\ub984\uc740 ",(0,r.jsx)(n.code,{children:"viewMethods"})," \uc544\ub798\uc5d0 \uc9c0\uc815\ub418\uc5b4\uc57c \ud558\uace0, \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,r.jsx)(n.code,{children:"@call"})," \uba54\uc11c\ub4dc \uc774\ub984\uc740 ",(0,r.jsx)(n.code,{children:"changeMethods"})," \uc544\ub798\uc5d0 \uc9c0\uc815\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc790\ub8cc\ud615\uc774 \uc77c\uce58\ud558\uc9c0 \uc54a\uc73c\uba74 \uc624\ub958\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."]}),(0,r.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const contract = await new nearAPI.Contract(\n  // ...\n  // `method_A_veiw` should be declared under `viewMethods` and in our example here we declare it under `changeMethods`.\n  }\n);\n\n// This will return an error from RPC call and throw:\n// `wasm execution failed with error: FunctionCallError(HostError(ProhibitedInView { method_name: \"storage_write\" }))`\n// This error indicates that we are trying to call a state-changing method but declare it as a read-only method in client-side.\nawait contract.method_A_view();\nawait contract.method_B_call();\n\n// The following behavior is undefined and might not work as expected.\n{\n    viewMethods: ['method_B_call'], // <=== here should be `method_A_view`\n    changeMethods: ['method_A_view'], // <=== and here should be `method_B_call`\n    // ...\n"})}),(0,r.jsxs)(n.h3,{id:"class-x-is-missing-in-schema-publickey",children:["Class ",(0,r.jsx)(n.code,{children:"{X}"})," is missing in schema: publicKey"]}),(0,r.jsxs)(n.p,{children:["\ud604\uc7ac JavaScript API \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\ub294 ",(0,r.jsx)(n.code,{children:"import"}),"\ub97c \ub450 \ubc88 \uc774\uc0c1 \uc0ac\uc6a9\ud558\uba74 \ub124\uc784\uc2a4\ud398\uc774\uc2a4 \ucda9\ub3cc\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4\ub294 \uc54c\ub824\uc9c4 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,r.jsx)(n.p,{children:"\uc784\uc2dc \ud574\uacb0 \ubc29\ubc95: \uc608\ub97c \ub4e4\uc790\uba74, \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud560 \ub54c \ub2e4\uc2dc \uac00\uc838\uc624\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4."}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.h3,{id:"regeneratorruntime-is-not-defined",children:[(0,r.jsx)(n.code,{children:"regeneratorRuntime"})," \uac00 \uc815\uc758\ub418\uc9c0 \uc54a\uc74c"]}),(0,r.jsxs)(n.p,{children:["You are probably using ",(0,r.jsx)(n.a,{href:"https://parceljs.org/",children:"Parcel"})," like we do in ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples",children:"other examples"}),". \uae30\ubcf8 JS \ud30c\uc77c(\uc544\ub9c8\ub3c4 ",(0,r.jsx)(n.code,{children:"index.js"}),")\uc758 \ub9e8 \uc704\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \uc904\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694. (\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 ",(0,r.jsx)(n.code,{children:"index.js"}),")"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import "regenerator-runtime/runtime";\n'})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ub610\ud55c ",(0,r.jsx)(n.code,{children:"package.json"}),"\uc5d0\uc11c \uc758\uc874\uc131(dependency) \ud655\uc778\uc744 \ud1b5\ud574, \uc774\ub97c \uc704\ud55c \uc758\uc874\uc131\uc774 \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc5d0 \ubaa8\ub450 \ucd94\uac00\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694. \ucc3e\uc744 \uc218 \uc5c6\ub294 \uacbd\uc6b0 \ud130\ubbf8\ub110\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud558\uc5ec \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install regenerator-runtime --save-dev\n"})}),(0,r.jsx)(n.hr,{}),(0,r.jsxs)(n.h3,{id:"window-error-using-nodejs",children:[(0,r.jsx)(n.code,{children:"Node.js"})," \uc0ac\uc6a9\ud588\uc744 \ub54c \ubc1c\uc0dd\ud558\ub294 \ucc3d \uc624\ub958"]}),(0,r.jsxs)(n.p,{children:["\ube0c\ub77c\uc6b0\uc800\uc6a9 \ud0a4 \uc800\uc7a5\uc18c(Key tore)\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 ",(0,r.jsx)(n.a,{href:"/tools/near-api-js/quick-reference#key-store",children:"\ud30c\uc77c\uc2dc\uc2a4\ud15c(filesystem) \ud0a4"})," \ub610\ub294 \uac1c\uc778 \ud0a4 \ubb38\uc790\uc5f4\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\ube0c\ub77c\uc6b0\uc800 \ud0a4 \uc800\uc7a5\uc18c"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const { keyStores } = require("near-api-js");\nconst keyStore = new keyStores.BrowserLocalStorageKeyStore();\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\ube0c\ub77c\uc6b0\uc800 \ud0a4 \uc800\uc7a5\uc18c:"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const { keyStores } = require("near-api-js");\nconst KEY_PATH = "~./near-credentials/testnet/example-account.json";\nconst keyStore = new keyStores.UnencryptedFileSystemKeyStore(KEY_PATH);\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},c=r.createContext(a);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);