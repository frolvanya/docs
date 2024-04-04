"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7400],{3039:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(85893),a=s(11151);const t={sidebar_label:"JS \uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc"},i="NEAR Lake \uc778\ub371\uc11c \uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc",c={id:"tutorials/indexer/js-lake-indexer",title:"NEAR Lake \uc778\ub371\uc11c \uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc",description:"near-examples/near-lake-raw-printer-js: source code for the tutorial on how to create an indexer that prints block height and number of shards",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/indexer/js-lake-indexer.md",sourceDirName:"3.tutorials/indexer",slug:"/tutorials/indexer/js-lake-indexer",permalink:"/ko/tutorials/indexer/js-lake-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/indexer/js-lake-indexer.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{sidebar_label:"JS \uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc"},sidebar:"tutorials",previous:{title:"Lake Primitive Types",permalink:"/ko/develop/lake/primitives"},next:{title:"Python \ud29c\ud1a0\ub9ac\uc5bc",permalink:"/ko/tutorials/indexer/python-lake-indexer"}},l={},d=[{value:"\uc694\uad6c \uc0ac\ud56d",id:"\uc694\uad6c-\uc0ac\ud56d",level:2},{value:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",level:2},{value:"\uc758\uc874\uc131(dependency) \uc124\uce58",id:"\uc758\uc874\uc131dependency-\uc124\uce58",level:2},{value:"TypeScript \uc124\uc815",id:"typescript-\uc124\uc815",level:2},{value:"<code>near-lake-framework</code> \uac00\uc838\uc624\uae30",id:"near-lake-framework-\uac00\uc838\uc624\uae30",level:2},{value:"\uad6c\uc131(config) \uc0dd\uc131",id:"\uad6c\uc131config-\uc0dd\uc131",level:2},{value:"\uc778\ub371\uc11c \ud578\ub4e4\ub7ec \uc0dd\uc131",id:"\uc778\ub371\uc11c-\ud578\ub4e4\ub7ec-\uc0dd\uc131",level:2},{value:"\uc2a4\ud2b8\ub9bc \uc2dc\uc791",id:"\uc2a4\ud2b8\ub9bc-\uc2dc\uc791",level:2},{value:"\ucef4\ud30c\uc77c \ubc0f \uc2e4\ud589",id:"\ucef4\ud30c\uc77c-\ubc0f-\uc2e4\ud589",level:2},{value:"\ub2e4\uc74c\uc740 \ubb34\uc5c7\uc778\uac00\uc694?",id:"\ub2e4\uc74c\uc740-\ubb34\uc5c7\uc778\uac00\uc694",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"near-lake-\uc778\ub371\uc11c-\uae30\ubcf8-\ud29c\ud1a0\ub9ac\uc5bc",children:"NEAR Lake \uc778\ub371\uc11c \uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc"}),"\n",(0,r.jsx)(n.admonition,{title:"Source code for the tutorial",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-raw-printer-js",children:(0,r.jsx)(n.code,{children:"near-examples/near-lake-raw-printer-js"})}),": source code for the tutorial on how to create an indexer that prints block height and number of shards"]})}),"\n",(0,r.jsxs)(n.p,{children:["Recently we have ",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/near-lake-framework",children:"published a JavaScript version of the NEAR Lake Framework"})," on npmjs.org"]}),"\n",(0,r.jsx)(n.p,{children:"We want to empower you with a basic tutorial on how to use the JavaScript Library. Let's get started!"}),"\n",(0,r.jsx)(n.h2,{id:"\uc694\uad6c-\uc0ac\ud56d",children:"\uc694\uad6c \uc0ac\ud56d"}),"\n",(0,r.jsx)(n.p,{children:"Before we get started, please, ensure you have:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"nodejs"})," \uc124\uce58"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",children:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"}),"\n",(0,r.jsx)(n.p,{children:"Create an indexer project:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir near-lake-raw-printer-js && cd near-lake-raw-printer-js\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we're going to call ",(0,r.jsx)(n.code,{children:"npm init"}),", we can continue with the default values pressing Enter on every question in the interactive mode:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm init\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'version: (1.0.0)\ndescription:\nentry point: (index.js)\ntest command:\ngit repository:\nkeywords:\nauthor:\nlicense: (ISC)\nAbout to write to /Users/near/projects/near-lake-raw-printer-js/package.json:\n\n{\n  "name": "near-lake-raw-printer-js",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n\n\nIs this OK? (yes)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"package.json"})," is ready. Let's install ",(0,r.jsx)(n.code,{children:"near-lake-framework"})]}),"\n",(0,r.jsx)(n.h2,{id:"\uc758\uc874\uc131dependency-\uc124\uce58",children:"\uc758\uc874\uc131(dependency) \uc124\uce58"}),"\n",(0,r.jsxs)(n.p,{children:["Install ",(0,r.jsx)(n.code,{children:"near-lake-framework"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install near-lake-framework --save\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Install ",(0,r.jsx)(n.code,{children:"typescript"})," as dev dependency"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install typescript --save-dev\n"})}),"\n",(0,r.jsx)(n.h2,{id:"typescript-\uc124\uc815",children:"TypeScript \uc124\uc815"}),"\n",(0,r.jsxs)(n.p,{children:["Now we can create ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," for TypeScript settings:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"touch tsconfig.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"Paste the content to the file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"title=tsconfig.json",children:'{\n  "compilerOptions": {\n    "lib": [\n      "ES2018",\n      "dom"\n    ]\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now let's add the ",(0,r.jsx)(n.code,{children:"scripts"})," section to the ",(0,r.jsx)(n.code,{children:"package.json"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"scripts": {\n  "start": "tsc && node index.js"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After that your ",(0,r.jsx)(n.code,{children:"package.json"})," should look similar to:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:"title=package.json",children:'{\n  "name": "near-lake-raw-printer",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "start": "tsc && node index.js"\n  },\n  "dependencies": {\n    "near-lake-framework": "^1.0.1"\n  },\n  "devDependencies": {\n    "typescript": "^4.6.4"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now let's create ",(0,r.jsx)(n.code,{children:"index.ts"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"touch index.ts\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Open ",(0,r.jsx)(n.code,{children:"index.ts"})," in your favorite editor to start coding."]}),"\n",(0,r.jsxs)(n.h2,{id:"near-lake-framework-\uac00\uc838\uc624\uae30",children:[(0,r.jsx)(n.code,{children:"near-lake-framework"})," \uac00\uc838\uc624\uae30"]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"index.ts"})," file let's import the necessary dependencies:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { startStream, types } from 'near-lake-framework';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We've imported the main function ",(0,r.jsx)(n.code,{children:"startStream"})," which will be called to actually run the indexer, and ",(0,r.jsx)(n.code,{children:"types"})," that hold the ",(0,r.jsx)(n.code,{children:"LakeConfig"})," type we need to contruct."]}),"\n",(0,r.jsx)(n.h2,{id:"\uad6c\uc131config-\uc0dd\uc131",children:"\uad6c\uc131(config) \uc0dd\uc131"}),"\n",(0,r.jsxs)(n.p,{children:["To get indexer running we need to start it with a config. We need to create an instance of ",(0,r.jsx)(n.code,{children:"LakeConfig"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const lakeConfig: types.LakeConfig = {\n    s3BucketName: "near-lake-data-mainnet",\n    s3RegionName: "eu-central-1",\n    startBlockHeight: 63804051,\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\uc778\ub371\uc11c-\ud578\ub4e4\ub7ec-\uc0dd\uc131",children:"\uc778\ub371\uc11c \ud578\ub4e4\ub7ec \uc0dd\uc131"}),"\n",(0,r.jsxs)(n.p,{children:["Indexer will be streaming the ",(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/toc",children:(0,r.jsx)(n.code,{children:"StreamerMessage"})})," instances we need to handle according to our needs."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.code,{children:"near-lake-framework"})," JS library the handler have to be presented as a callback function. This function have to:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ube44\ub3d9\uae30\uc2dd"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://near-indexers.io/docs/data-flow-and-structures/structures/toc",children:(0,r.jsx)(n.code,{children:"StreamerMessage"})})," \uc790\ub8cc\ud615\uc758 \uc778\uc790\ub97c \ubc1b\uc74c"]}),"\n",(0,r.jsxs)(n.li,{children:["\uc544\ubb34\uac83\ub3c4 \ubc18\ud658\ud558\uc9c0 \uc54a\uc74c(",(0,r.jsx)(n.code,{children:"void"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Creating the callback:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"async function handleStreamerMessage(streamerMessage: types.StreamerMessage): Promise<void> {\n    //\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"For this tutorial our requirement is to log the block height and the numer of shards. That's simple:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"async function handleStreamerMessage(streamerMessage: types.StreamerMessage): Promise<void> {\n    console.log(`\n        Block #${streamerMessage.block.header.height}\n        Shards: ${streamerMessage.shards.length}\n    `);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\uc2a4\ud2b8\ub9bc-\uc2dc\uc791",children:"\uc2a4\ud2b8\ub9bc \uc2dc\uc791"}),"\n",(0,r.jsxs)(n.p,{children:["And the last thing to write is the call to ",(0,r.jsx)(n.code,{children:"startStream"})," with the config and pass the callback function."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"(async () => {\n    await startStream(lakeConfig, handleStreamerMessage);\n})();\n"})}),"\n",(0,r.jsx)(n.p,{children:"That's it. Now we can compile the code and run it"}),"\n",(0,r.jsx)(n.h2,{id:"\ucef4\ud30c\uc77c-\ubc0f-\uc2e4\ud589",children:"\ucef4\ud30c\uc77c \ubc0f \uc2e4\ud589"}),"\n",(0,r.jsx)(n.admonition,{title:"Credentials",type:"danger",children:(0,r.jsxs)(n.p,{children:["To be able to access the data from ",(0,r.jsx)(n.a,{href:"/tools/realtime#near-lake-indexer",children:"NEAR Lake"})," you need to provide credentials. Please, see the ",(0,r.jsx)(n.a,{href:"/ko/tutorials/indexer/credentials",children:"Credentials"})," article"]})}),"\n",(0,r.jsxs)(n.p,{children:["We've added the ",(0,r.jsx)(n.code,{children:"start"})," command to the ",(0,r.jsx)(n.code,{children:"scripts"}),", so the compilation and run should as easy as"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should see something like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Block #63804051 Shards: 4\nBlock #63804052 Shards: 4\nBlock #63804053 Shards: 4\nBlock #63804054 Shards: 4\nBlock #63804055 Shards: 4\nBlock #63804056 Shards: 4\nBlock #63804057 Shards: 4\nBlock #63804058 Shards: 4\nBlock #63804059 Shards: 4\nBlock #63804060 Shards: 4\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can stop the indexer by pressing CTRL+C"}),"\n",(0,r.jsx)(n.h2,{id:"\ub2e4\uc74c\uc740-\ubb34\uc5c7\uc778\uac00\uc694",children:"\ub2e4\uc74c\uc740 \ubb34\uc5c7\uc778\uac00\uc694?"}),"\n",(0,r.jsxs)(n.p,{children:["You can play around and change the content of the callback function ",(0,r.jsx)(n.a,{href:"#create-indexer-handler",children:(0,r.jsx)(n.code,{children:"handleStreamerMessage"})})," to handle the data differently."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find the ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/near-lake-raw-printer-js",children:"source code for this tutorial on the GitHub"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var r=s(67294);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);