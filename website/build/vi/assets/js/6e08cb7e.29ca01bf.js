"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9812],{57111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(85893),o=t(11151);const s={id:"posts-indexer",title:"Posts Indexer",sidebar_label:"Posts Indexer"},a=void 0,r={id:"bos/tutorial/indexer-tutorials/posts-indexer",title:"Posts Indexer",description:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/bos/tutorial/indexer-tutorials/posts-indexer.md",sourceDirName:"bos/tutorial/indexer-tutorials",slug:"/bos/tutorial/indexer-tutorials/posts-indexer",permalink:"/vi/bos/tutorial/indexer-tutorials/posts-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/tutorial/indexer-tutorials/posts-indexer.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{id:"posts-indexer",title:"Posts Indexer",sidebar_label:"Posts Indexer"},sidebar:"tutorials",previous:{title:"Base64 params, wrap up",permalink:"/vi/tutorials/crosswords/intermediate/base64vecu8"},next:{title:"Hype Indexer",permalink:"/vi/bos/tutorial/indexer-tutorials/hype-indexer"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Defining the Database Schema",id:"defining-the-database-schema",level:2},{value:"Defining the Indexing Logic",id:"defining-the-indexing-logic",level:2},{value:"Filtering Blockchain Transactions",id:"filtering-blockchain-transactions",level:3},{value:"Saving the Data to the Database",id:"saving-the-data-to-the-database",level:3},{value:"Querying data from the indexer",id:"querying-data-from-the-indexer",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers."}),(0,i.jsxs)(n.p,{children:["You can request access through ",(0,i.jsx)(n.a,{href:"http://bit.ly/near-queryapi-beta",children:"this link"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This indexer creates a new row in a pre-defined ",(0,i.jsx)(n.code,{children:"posts"})," table created by the user in the GraphQL database for every new post found on the blockchain. This is a simple example that shows how to specify a single table, filter blockchain transaction data for a specific type of transaction, and save the data to the database."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["This indexer can be found by ",(0,i.jsx)(n.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=bucanero.near/posts-example",children:"following this link"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"defining-the-database-schema",children:"Defining the Database Schema"}),"\n",(0,i.jsxs)(n.p,{children:["The first step to creating an indexer is to define the database schema. This is done by editing the ",(0,i.jsx)(n.code,{children:"schema.sql"})," file in the code editor. The schema for this indexer looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE\n  "posts" (\n    "id" SERIAL NOT NULL,\n    "account_id" VARCHAR NOT NULL,\n    "block_height" DECIMAL(58, 0) NOT NULL,\n    "receipt_id" VARCHAR NOT NULL,\n    "content" TEXT NOT NULL,\n    "block_timestamp" DECIMAL(20, 0) NOT NULL,\n    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")\n  );\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This schema defines a table called ",(0,i.jsx)(n.code,{children:"posts"})," with columns:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"}),": a unique identifier for each row in the table"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"account_id"}),": the account ID of the user who created the post"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"block_height"}),": the height of the block in which the post was created"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"receipt_id"}),": the receipt ID of the transaction that created the post"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"content"}),": the content of the post"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"block_timestamp"}),": the timestamp of the block in which the post was created"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"defining-the-indexing-logic",children:"Defining the Indexing Logic"}),"\n",(0,i.jsxs)(n.p,{children:["The next step is to define the indexing logic. This is done by editing the ",(0,i.jsx)(n.code,{children:"indexingLogic.js"})," file in the code editor. The logic for this indexer can be divided into two parts:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Filtering blockchain transactions for a specific type of transaction"}),"\n",(0,i.jsx)(n.li,{children:"Saving the data from the filtered transactions to the database"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"filtering-blockchain-transactions",children:"Filtering Blockchain Transactions"}),"\n",(0,i.jsxs)(n.p,{children:["The first part of the logic is to filter blockchain transactions for a specific type of transaction. This is done by using the ",(0,i.jsx)(n.code,{children:"getBlock"})," function. This function takes in a block and a context and returns a promise. The block is a Near Protocol block, and the context is a set of helper methods to retrieve and commit state. The ",(0,i.jsx)(n.code,{children:"getBlock"})," function is called for every block on the blockchain."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"getBlock"})," function for this indexer looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { Block } from "@near-lake/primitives";\n\nasync function getBlock(block: Block, context) {\n  function base64decode(encodedValue) {\n    let buff = Buffer.from(encodedValue, "base64");\n    return JSON.parse(buff.toString("utf-8"));\n  }\n\n  const SOCIAL_DB = "social.near";\n\n  const nearSocialPosts = block\n    .actions()\n    .filter((action) => action.receiverId === SOCIAL_DB)\n    .flatMap((action) =>\n      action.operations\n        .map((operation) => operation["FunctionCall"])\n        .filter((operation) => operation?.method_name === "set")\n        .map((functionCallOperation) => ({\n          ...functionCallOperation,\n          args: base64decode(functionCallOperation.args),\n          receiptId: action.receiptId,\n        }))\n        .filter((functionCall) => {\n          const accountId = Object.keys(functionCall.args.data)[0];\n          return (\n            Object.keys(functionCall.args.data[accountId]).includes("post") ||\n            Object.keys(functionCall.args.data[accountId]).includes("index")\n          );\n        })\n    );\n\n  ... // Further logic for saving nearSocialPosts to the database\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This function first defines a helper function called ",(0,i.jsx)(n.code,{children:"base64decode"})," that decodes base64 encoded data. It then defines a constant called ",(0,i.jsx)(n.code,{children:"SOCIAL_DB"})," that is the name of the smart contract that stores the posts in NEAR. It then filters the blockchain transactions for a specific type of transaction. This is done by:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Filtering the blockchain transactions for transactions where the ",(0,i.jsx)(n.code,{children:"receiverId"})," is the ",(0,i.jsx)(n.code,{children:"SOCIAL_DB"})," database"]}),"\n",(0,i.jsxs)(n.li,{children:["Mapping the operations of the filtered transactions to the ",(0,i.jsx)(n.code,{children:"FunctionCall"})," operation"]}),"\n",(0,i.jsxs)(n.li,{children:["Filtering the ",(0,i.jsx)(n.code,{children:"FunctionCall"})," operations for operations where the ",(0,i.jsx)(n.code,{children:"method_name"})," is ",(0,i.jsx)(n.code,{children:"set"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mapping the filtered ",(0,i.jsx)(n.code,{children:"FunctionCall"})," operations to an object that contains the ",(0,i.jsx)(n.code,{children:"FunctionCall"})," operation, the decoded ",(0,i.jsx)(n.code,{children:"args"})," of the ",(0,i.jsx)(n.code,{children:"FunctionCall"})," operation, and the ",(0,i.jsx)(n.code,{children:"receiptId"})," of the transaction"]}),"\n",(0,i.jsxs)(n.li,{children:["Filtering the mapped objects for objects where the ",(0,i.jsx)(n.code,{children:"args"})," contain a ",(0,i.jsx)(n.code,{children:"post"})," or ",(0,i.jsx)(n.code,{children:"index"})," key"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This function returns an array of objects that contain the ",(0,i.jsx)(n.code,{children:"FunctionCall"})," operation, the decoded ",(0,i.jsx)(n.code,{children:"args"})," of the ",(0,i.jsx)(n.code,{children:"FunctionCall"})," operation, and the ",(0,i.jsx)(n.code,{children:"receiptId"})," of the transaction. This array is called ",(0,i.jsx)(n.code,{children:"nearSocialPosts"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"saving-the-data-to-the-database",children:"Saving the Data to the Database"}),"\n",(0,i.jsxs)(n.p,{children:["The second part of the logic is to save the data from the filtered transactions to the database. This is done by using the ",(0,i.jsx)(n.a,{href:"/vi/bos/queryapi/context-object#insert",children:(0,i.jsx)(n.code,{children:"context.db.Posts.insert()"})})," function. The ",(0,i.jsx)(n.code,{children:"context.db.Posts.insert()"})," function will be called for every filtered transaction as defined by the ",(0,i.jsx)(n.code,{children:".map()"})," function called on the array of ",(0,i.jsx)(n.code,{children:"nearSocialPosts"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The function for this indexer looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'  ... // Logic for filtering blockchain transactions, defining nearSocialPosts\n\n  if (nearSocialPosts.length > 0) {\n    const blockHeight = block.blockHeight;\n    const blockTimestamp = Number(block.header().timestampNanosec);\n    await Promise.all(\n      nearSocialPosts.map(async (postAction) => {\n        const accountId = Object.keys(postAction.args.data)[0];\n        console.log(`ACCOUNT_ID: ${accountId}`);\n\n        // create a post if indeed a post\n        if (\n          postAction.args.data[accountId].post &&\n          Object.keys(postAction.args.data[accountId].post).includes("main")\n        ) {\n          try {\n            console.log("Creating a post...");\n            const postData = {\n                account_id: accountId,\n                block_height: blockHeight,\n                block_timestamp: blockTimestamp,\n                receipt_id: postAction.receiptId,\n                content: postAction.args.data[accountId].post.main,\n            };\n            await context.db.Posts.insert(postData);\n            console.log(`Post by ${accountId} has been added to the database`);\n          } catch (e) {\n            console.error(`Error creating a post by ${accountId}: ${e}`);\n          }\n        }\n      })\n    );\n  }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"querying-data-from-the-indexer",children:"Querying data from the indexer"}),"\n",(0,i.jsx)(n.p,{children:"The final step is querying the indexer using the public GraphQL API. This can be done by writing a GraphQL query using the GraphiQL tab in the code editor."}),"\n",(0,i.jsxs)(n.p,{children:["For example, here's a query that fetches ",(0,i.jsx)(n.code,{children:"posts"})," from the ",(0,i.jsx)(n.em,{children:"Posts Indexer"}),", ordered by ",(0,i.jsx)(n.code,{children:"block_height"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"query MyQuery {\n  <user-name>_near_posts_indexer_posts(order_by: {block_height: desc}) {\n    content\n    block_height\n    account_id\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once you have defined your query, you can use the GraphiQL Code Exporter to auto-generate a JavaScript or NEAR Widget code snippet. The exporter will create a helper method ",(0,i.jsx)(n.code,{children:"fetchGraphQL"})," which will allow you to fetch data from the indexer's GraphQL API. It takes three parameters:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"operationsDoc"}),": A string containing the queries you would like to execute."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"operationName"}),": The specific query you want to run."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"variables"}),": Any variables to pass in that your query supports, such as ",(0,i.jsx)(n.code,{children:"offset"})," and ",(0,i.jsx)(n.code,{children:"limit"})," for pagination."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Next, you can call the ",(0,i.jsx)(n.code,{children:"fetchGraphQL"})," function with the appropriate parameters and process the results."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's the complete code snippet for a NEAR component using the ",(0,i.jsx)(n.em,{children:"Posts Indexer"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const QUERYAPI_ENDPOINT = `https://near-queryapi.api.pagoda.co/v1/graphql/`;\n\nState.init({\ndata: []\n});\n\nconst query = `query MyPostsQuery {\n    <user-name>_near_posts_indexer_posts(order_by: {block_height: desc}) {\n      content\n      block_height\n      account_id\n    }\n  }`\n\nfunction fetchGraphQL(operationsDoc, operationName, variables) {\n      return asyncFetch(\n        QUERYAPI_ENDPOINT,\n        {\n          method: "POST",\n          headers: { "x-hasura-role": `<user-name>_near` },\n          body: JSON.stringify({\n            query: operationsDoc,\n            variables: variables,\n            operationName: operationName,\n          }),\n        }\n      );\n    }\n\nfetchGraphQL(query, "MyPostsQuery", {}).then((result) => {\n  if (result.status === 200) {\n    if (result.body.data) {\n      const data = result.body.data.<user-name>_near_posts_indexer_posts;\n      State.update({ data })\n      console.log(data);\n    }\n  }\n});\n\nconst renderData = (a) => {\n  return (\n    <div key={JSON.stringify(a)}>\n        {JSON.stringify(a)}\n    </div>\n  );\n};\n\nconst renderedData = state.data.map(renderData);\nreturn (\n  {renderedData}\n);\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To view a more complex example, see this widget which fetches posts with proper pagination: ",(0,i.jsx)(n.a,{href:"https://near.org/edit/roshaan.near/widget/query-api-feed-infinite",children:"Posts Widget powered By QueryAPI"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(67294);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);