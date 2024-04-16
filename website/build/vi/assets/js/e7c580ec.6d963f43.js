"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2079],{21003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(85893),i=t(11151);const s={id:"feed-indexer",title:"Social Feed Indexer",sidebar_label:"Social Feed Indexer"},a=void 0,c={id:"tutorials/near-components/indexer-tutorials/feed-indexer",title:"Social Feed Indexer",description:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/near-components/indexer-tutorials/feed-indexer.md",sourceDirName:"3.tutorials/near-components/indexer-tutorials",slug:"/tutorials/near-components/indexer-tutorials/feed-indexer",permalink:"/vi/tutorials/near-components/indexer-tutorials/feed-indexer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/indexer-tutorials/feed-indexer.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"feed-indexer",title:"Social Feed Indexer",sidebar_label:"Social Feed Indexer"},sidebar:"tutorials",previous:{title:"NFTs Indexer",permalink:"/vi/tutorials/near-components/indexer-tutorials/nft-indexer"}},r={},d=[{value:"Running <code>feed-indexer</code>",id:"running-feed-indexer",level:2},{value:"Schema Definition",id:"schema-definition",level:2},{value:"Schema-Defined Table Names",id:"schema-defined-table-names",level:3},{value:"Main Function",id:"main-function",level:2},{value:"Filtering for Relevant Data",id:"filtering-for-relevant-data",level:3},{value:"Processing Filtered Data",id:"processing-filtered-data",level:3},{value:"Helper Functions",id:"helper-functions",level:2},{value:"<code>base64decode</code>",id:"base64decode",level:3},{value:"<code>handlePostCreation</code>",id:"handlepostcreation",level:3},{value:"<code>handleCommentCreation</code>",id:"handlecommentcreation",level:3},{value:"<code>handleLike</code>",id:"handlelike",level:3},{value:"<code>_handlePostLike</code>",id:"_handlepostlike",level:3},{value:"<code>_handlePostUnlike</code>",id:"_handlepostunlike",level:3},{value:"Querying data from the indexer",id:"querying-data-from-the-indexer",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"NEAR QueryAPI is currently under development. Users who want to test-drive this solution need to be added to the allowlist before creating or forking QueryAPI indexers."}),(0,o.jsxs)(n.p,{children:["You can request access through ",(0,o.jsx)(n.a,{href:"http://bit.ly/near-queryapi-beta",children:"this link"}),"."]})]}),"\n",(0,o.jsxs)(n.h2,{id:"running-feed-indexer",children:["Running ",(0,o.jsx)(n.code,{children:"feed-indexer"})]}),"\n",(0,o.jsxs)(n.p,{children:["The indexer ",(0,o.jsx)(n.code,{children:"indexingLogic.js"})," is comprised of functions that help handle, transform and record data. The main logic for handling transaction data as it occurs from the blockchain can be found underneath the comment marked:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// Add your code here\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A schema is also specified for the tables in which data from relevant transactions is to be persisted, this can be found in the ",(0,o.jsx)(n.code,{children:"schema.sql"})," tab."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["This indexer can be found by ",(0,o.jsx)(n.a,{href:"https://near.org/dataplatform.near/widget/QueryApi.App?selectedIndexerPath=dataplatform.near/social_feed",children:"following this link"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"schema-definition",children:"Schema Definition"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Note that database tables are named as ",(0,o.jsx)(n.code,{children:"roshaan_near_feed_indexer_posts"})," which follows the format ",(0,o.jsx)(n.code,{children:"<account_name>_near_<indexer_name>_<table_name>"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"schema-defined-table-names",children:"Schema-Defined Table Names"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE\n  "posts" (\n    "id" SERIAL NOT NULL,\n    "account_id" VARCHAR NOT NULL,\n    "block_height" DECIMAL(58, 0) NOT NULL,\n    "receipt_id" VARCHAR NOT NULL,\n    "content" TEXT NOT NULL,\n    "block_timestamp" DECIMAL(20, 0) NOT NULL,\n    "accounts_liked" JSONB NOT NULL DEFAULT \'[]\',\n    "last_comment_timestamp" DECIMAL(20, 0),\n    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")\n  );\n\nCREATE TABLE\n  "comments" (\n    "id" SERIAL NOT NULL,\n    "post_id" SERIAL NOT NULL,\n    "account_id" VARCHAR NOT NULL,\n    "block_height" DECIMAL(58, 0) NOT NULL,\n    "content" TEXT NOT NULL,\n    "block_timestamp" DECIMAL(20, 0) NOT NULL,\n    "receipt_id" VARCHAR NOT NULL,\n    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")\n  );\n\nCREATE TABLE\n  "post_likes" (\n    "post_id" SERIAL NOT NULL,\n    "account_id" VARCHAR NOT NULL,\n    "block_height" DECIMAL(58, 0),\n    "block_timestamp" DECIMAL(20, 0) NOT NULL,\n    "receipt_id" VARCHAR NOT NULL,\n    CONSTRAINT "post_likes_pkey" PRIMARY KEY ("post_id", "account_id")\n  );\n\nCREATE UNIQUE INDEX "posts_account_id_block_height_key" ON "posts" ("account_id" ASC, "block_height" ASC);\n\nCREATE UNIQUE INDEX "comments_post_id_account_id_block_height_key" ON "comments" (\n  "post_id" ASC,\n  "account_id" ASC,\n  "block_height" ASC\n);\n\nCREATE INDEX\n  "posts_last_comment_timestamp_idx" ON "posts" ("last_comment_timestamp" DESC);\n\nALTER TABLE\n  "comments"\nADD\n  CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;\n\nALTER TABLE\n  "post_likes"\nADD\n  CONSTRAINT "post_likes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The tables declared in the schema definition are created when the indexer is deployed. In this schema definition, three tables are created: ",(0,o.jsx)(n.code,{children:"posts"}),", ",(0,o.jsx)(n.code,{children:"comments"})," and ",(0,o.jsx)(n.code,{children:"post_likes"}),". Indexes are then defined for each and then foreign key dependencies."]}),"\n",(0,o.jsx)(n.h2,{id:"main-function",children:"Main Function"}),"\n",(0,o.jsx)(n.p,{children:"The main function can be explained in two parts. The first filters relevant transactional data for processing by the helper functions defined earlier in the file scope, the second part uses the helper functions to ultimately save the relevant data to for querying by applications."}),"\n",(0,o.jsx)(n.h3,{id:"filtering-for-relevant-data",children:"Filtering for Relevant Data"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const SOCIAL_DB = "social.near";\n\n  const nearSocialPosts = block\n    .actions()\n    .filter((action) => action.receiverId === SOCIAL_DB)\n    .flatMap((action) =>\n      action.operations\n        .map((operation) => operation["FunctionCall"])\n        .filter((operation) => operation?.methodName === "set")\n        .map((functionCallOperation) => {\n          try {\n            const decodedArgs = base64decode(functionCallOperation.args);\n            return {\n              ...functionCallOperation,\n              args: decodedArgs,\n              receiptId: action.receiptId,\n            };\n          } catch (error) {\n            console.log(\n              "Failed to decode function call args",\n              functionCallOperation,\n              error\n            );\n          }\n        })\n        .filter((functionCall) => {\n          try {\n            const accountId = Object.keys(functionCall.args.data)[0];\n            return (\n              Object.keys(functionCall.args.data[accountId]).includes("post") ||\n              Object.keys(functionCall.args.data[accountId]).includes("index")\n            );\n          } catch (error) {\n            console.log(\n              "Failed to parse decoded function call",\n              functionCall,\n              error\n            );\n          }\n        })\n    );\n'})}),"\n",(0,o.jsxs)(n.p,{children:["We first designate the near account ID that is on the receiving end of the transactions picked up by the indexer, as ",(0,o.jsx)(n.code,{children:'SOCIAL_DB = "social.near"'})," and later with the equality operator for this check. This way we only filter for transactions that are relevant to the ",(0,o.jsx)(n.code,{children:"social.near"})," account ID for saving data on-chain."]}),"\n",(0,o.jsxs)(n.p,{children:["The filtering logic then begins by calling ",(0,o.jsx)(n.code,{children:"block.actions()"})," where ",(0,o.jsx)(n.code,{children:"block"})," is defined within the ",(0,o.jsx)(n.code,{children:"@near-lake/primtives"})," package. The output from this filtering is saved in a ",(0,o.jsx)(n.code,{children:"nearSocialPosts"})," variable for later use by the helper functions. The ",(0,o.jsx)(n.code,{children:".filter()"})," line helps specify for transactions exclusively that have interacted with the SocialDB. ",(0,o.jsx)(n.code,{children:".flatMap()"})," specifies the types of transaction and looks for attributes in the transaction data on which to base the filter."]}),"\n",(0,o.jsxs)(n.p,{children:["Specifically, ",(0,o.jsx)(n.code,{children:".flatMap()"})," filters for ",(0,o.jsx)(n.code,{children:"FunctionCall"})," call types, calling the ",(0,o.jsx)(n.code,{children:"set"})," method of the SocialDB contract. In addition, we look for transactions that include a ",(0,o.jsx)(n.code,{children:"receiptId"})," and include either ",(0,o.jsx)(n.code,{children:"post"})," or ",(0,o.jsx)(n.code,{children:"index"})," in the function call argument data."]}),"\n",(0,o.jsx)(n.h3,{id:"processing-filtered-data",children:"Processing Filtered Data"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'if (nearSocialPosts.length > 0) {\n    console.log("Found Near Social Posts in Block...");\n    const blockHeight = block.blockHeight;\n    const blockTimestamp = block.header().timestampNanosec;\n    await Promise.all(\n      nearSocialPosts.map(async (postAction) => {\n        const accountId = Object.keys(postAction.args.data)[0];\n        console.log(`ACCOUNT_ID: ${accountId}`);\n\n        // if creates a post\n        if (\n          postAction.args.data[accountId].post &&\n          Object.keys(postAction.args.data[accountId].post).includes("main")\n        ) {\n          console.log("Creating a post...");\n          await handlePostCreation(\n            ... // arguments required for handlePostCreation\n          );\n        } else if (\n          postAction.args.data[accountId].post &&\n          Object.keys(postAction.args.data[accountId].post).includes("comment")\n        ) {\n          // if creates a comment\n          await handleCommentCreation(\n            ... // arguments required for handleCommentCreation\n          );\n        } else if (\n          Object.keys(postAction.args.data[accountId]).includes("index")\n        ) {\n          // Probably like or unlike action is happening\n          if (\n            Object.keys(postAction.args.data[accountId].index).includes("like")\n          ) {\n            console.log("handling like");\n            await handleLike(\n              ... // arguments required for handleLike\n            );\n          }\n        }\n      })\n    );\n  }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This logic is only entered if there are any ",(0,o.jsx)(n.code,{children:"nearSocialPosts"}),", in which case it first declares the ",(0,o.jsx)(n.code,{children:"blockHeight"})," and ",(0,o.jsx)(n.code,{children:"blockTimestamp"})," variables that will be relevant when handling (transforming and persisting) the data. Then the processing for every transaction (or function call) is chained as a promise for asynchronous execution."]}),"\n",(0,o.jsxs)(n.p,{children:["Within every promise, the ",(0,o.jsx)(n.code,{children:"accountId"})," performing the call is extracted from the transaction data first. Then, depending on the attributes in the transaction data, there is logic for handling post creation, comment creation, or a like/unlike."]}),"\n",(0,o.jsx)(n.h2,{id:"helper-functions",children:"Helper Functions"}),"\n",(0,o.jsx)(n.h3,{id:"base64decode",children:(0,o.jsx)(n.code,{children:"base64decode"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function base64decode(encodedValue) {\n    let buff = Buffer.from(encodedValue, "base64");\n    return JSON.parse(buff.toString("utf-8"));\n  }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This function decodes a string that has been encoded in Base64 format. It takes a single argument, ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"encodedValue"})}),", which is the Base64-encoded string to be decoded. The function returns the decoded string as a JavaScript object. Specifically:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Buffer.from()"})})," method is called with two arguments: ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"encodedValue"})})," and ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:'"base64"'})}),". This creates a new ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Buffer"})})," object from the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"encodedValue"})})," string and specifies that the encoding format is Base64."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"JSON.parse()"})})," method is called with the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Buffer"})})," object returned by the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Buffer.from()"})})," method as its argument. This parses the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Buffer"})})," object as a JSON string and returns a JavaScript object."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"toString()"})})," method is called on the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Buffer"})})," object with ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:'"utf-8"'})})," as its argument. This converts the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"Buffer"})})," object to a string in UTF-8 format."]}),"\n",(0,o.jsx)(n.li,{children:"The resulting string is returned as a JavaScript object."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"handlepostcreation",children:(0,o.jsx)(n.code,{children:"handlePostCreation"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"async function handlePostCreation(\n    accountId,\n    blockHeight,\n    blockTimestamp,\n    receiptId,\n    content\n  ) {\n    try {\n      const postData = {\n        account_id: accountId,\n        block_height: blockHeight,\n        block_timestamp: blockTimestamp,\n        content: content,\n        receipt_id: receiptId,\n      };\n\n      // Call GraphQL mutation to insert a new post\n      await context.db.Posts.insert(postData);\n\n      console.log(`Post by ${accountId} has been added to the database`);\n    } catch (e) {\n      console.log(\n        `Failed to store post by ${accountId} to the database (perhaps it is already stored)`\n      );\n    }\n  }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["An object containing the relevant data to populate the ",(0,o.jsx)(n.code,{children:"posts"})," table defined in the schema is created first to then be passed into the graphQL ",(0,o.jsx)(n.code,{children:"createPost()"})," query that creates a new row in the table."]}),"\n",(0,o.jsx)(n.h3,{id:"handlecommentcreation",children:(0,o.jsx)(n.code,{children:"handleCommentCreation"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'async function handleCommentCreation(\n    accountId,\n    blockHeight,\n    blockTimestamp,\n    receiptId,\n    commentString\n  ) {\n    try {\n      const comment = JSON.parse(commentString);\n      const postAuthor = comment.item.path.split("/")[0];\n      const postBlockHeight = comment.item.blockHeight;\n\n      // find post to retrieve Id or print a warning that we don\'t have it\n      try {\n        // Call GraphQL query to fetch posts that match specified criteria\n        const posts = await context.db.Posts.select(\n          { account_id: postAuthor, block_height: postBlockHeight },\n          1\n        );\n        console.log(`posts: ${JSON.stringify(posts)}`);\n        if (posts.length === 0) {\n          return;\n        }\n\n        const post = posts[0];\n\n        try {\n          delete comment["item"];\n          const commentData = {\n            account_id: accountId,\n            receipt_id: receiptId,\n            block_height: blockHeight,\n            block_timestamp: blockTimestamp,\n            content: JSON.stringify(comment),\n            post_id: post.id,\n          };\n          // Call GraphQL mutation to insert a new comment\n          await context.db.Comments.insert(commentData);\n\n          // Update last comment timestamp in Post table\n          const currentTimestamp = Date.now();\n          await context.db.Posts.update(\n            { id: post.id },\n            { last_comment_timestamp: currentTimestamp }\n          );\n          console.log(`Comment by ${accountId} has been added to the database`);\n        } catch (e) {\n          console.log(\n            `Failed to store comment to the post ${postAuthor}/${postBlockHeight} by ${accountId} perhaps it has already been stored. Error ${e}`\n          );\n        }\n      } catch (e) {\n        console.log(\n          `Failed to store comment to the post ${postAuthor}/${postBlockHeight} as we don\'t have the post stored.`\n        );\n      }\n    } catch (error) {\n      console.log("Failed to parse comment content. Skipping...", error);\n    }\n  }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To save or create a comment the relevant post is fetched first. If no posts are found the comment will not be created. If there is a post created in the graphQL DB, the ",(0,o.jsx)(n.code,{children:"mutationData"})," object is constructed for the ",(0,o.jsx)(n.code,{children:"createComment()"})," graphQL query that adds a row to the ",(0,o.jsx)(n.code,{children:"comments"})," table. Once this row has been added, the relevant row in the ",(0,o.jsx)(n.code,{children:"posts"})," table is updated to this comment\u2019s timestamp."]}),"\n",(0,o.jsx)(n.h3,{id:"handlelike",children:(0,o.jsx)(n.code,{children:"handleLike"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'async function handleLike(\n    accountId,\n    blockHeight,\n    blockTimestamp,\n    receiptId,\n    likeContent\n  ) {\n    try {\n      const like = JSON.parse(likeContent);\n      const likeAction = like.value.type; // like or unlike\n      const [itemAuthor, _, itemType] = like.key.path.split("/", 3);\n      const itemBlockHeight = like.key.blockHeight;\n      console.log("handling like", receiptId, accountId);\n      switch (itemType) {\n        case "main":\n          try {\n            const posts = await context.db.Posts.select(\n              { account_id: itemAuthor, block_height: itemBlockHeight },\n              1\n            );\n            if (posts.length == 0) {\n              return;\n            }\n\n            const post = posts[0];\n            switch (likeAction) {\n              case "like":\n                await _handlePostLike(\n                  post.id,\n                  accountId,\n                  blockHeight,\n                  blockTimestamp,\n                  receiptId\n                );\n                break;\n              case "unlike":\n                await _handlePostUnlike(post.id, accountId);\n                break;\n            }\n          } catch (e) {\n            console.log(\n              `Failed to store like to post ${itemAuthor}/${itemBlockHeight} as we don\'t have it stored in the first place.`\n            );\n          }\n          break;\n        case "comment":\n          // Comment\n          console.log(`Likes to comments are not supported yet. Skipping`);\n          break;\n        default:\n          // something else\n          console.log(`Got unsupported like type "${itemType}". Skipping...`);\n          break;\n      }\n    } catch (error) {\n      console.log("Failed to parse like content. Skipping...", error);\n    }\n  }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As with ",(0,o.jsx)(n.code,{children:"handleCommentCreation"})," , first the relevant post is sought from the DB store. If the relevant post is found, the logic proceeds to handling the like being either a like or a dislike."]}),"\n",(0,o.jsx)(n.h3,{id:"_handlepostlike",children:(0,o.jsx)(n.code,{children:"_handlePostLike"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"async function _handlePostLike(\n    postId,\n    likeAuthorAccountId,\n    likeBlockHeight,\n    blockTimestamp,\n    receiptId\n  ) {\n    try {\n      const posts = await context.db.Posts.select({ id: postId });\n      if (posts.length == 0) {\n        return;\n      }\n      const post = posts[0];\n      let accountsLiked =\n        post.accounts_liked.length === 0\n          ? post.accounts_liked\n          : JSON.parse(post.accounts_liked);\n\n      if (accountsLiked.indexOf(likeAuthorAccountId) === -1) {\n        accountsLiked.push(likeAuthorAccountId);\n      }\n\n      // Call GraphQL mutation to update a post's liked accounts list\n      await context.db.Posts.update(\n        { id: postId },\n        { accounts_liked: JSON.stringify(accountsLiked) }\n      );\n\n      const postLikeData = {\n        post_id: postId,\n        account_id: likeAuthorAccountId,\n        block_height: likeBlockHeight,\n        block_timestamp: blockTimestamp,\n        receipt_id: receiptId,\n      };\n      // Call GraphQL mutation to insert a new like for a post\n      await context.db.PostLikes.insert(postLikeData);\n    } catch (e) {\n      console.log(`Failed to store like to in the database: ${e}`);\n    }\n  }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As with ",(0,o.jsx)(n.code,{children:"handleLike"}),", the relevant ",(0,o.jsx)(n.code,{children:"post"})," is first sought from the graphQL DB table defined in ",(0,o.jsx)(n.code,{children:"schema.sql"}),". If a post is found, the ",(0,o.jsx)(n.code,{children:"accountsLiked"})," array is defined from the post\u2019s previous array plus the additional account that has performed the like account in ",(0,o.jsx)(n.code,{children:"accountsLiked.push(likeAuthorAccountId)"}),". The graphQL query then updates the ",(0,o.jsx)(n.code,{children:"posts"})," table to include this information. Lastly, the ",(0,o.jsx)(n.code,{children:"postLikeMutation"})," object is created with the required data for adding a new row to the ",(0,o.jsx)(n.code,{children:"post_likes"})," table."]}),"\n",(0,o.jsx)(n.h3,{id:"_handlepostunlike",children:(0,o.jsx)(n.code,{children:"_handlePostUnlike"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"async function _handlePostUnlike(postId, likeAuthorAccountId) {\n    try {\n      const posts = await context.db.Posts.select({ id: postId });\n      if (posts.length == 0) {\n        return;\n      }\n      const post = posts[0];\n      let accountsLiked =\n        post.accounts_liked.length === 0\n          ? post.accounts_liked\n          : JSON.parse(post.accounts_liked);\n\n      console.log(accountsLiked);\n\n      let indexOfLikeAuthorAccountIdInPost =\n        accountsLiked.indexOf(likeAuthorAccountId);\n      if (indexOfLikeAuthorAccountIdInPost > -1) {\n        accountsLiked.splice(indexOfLikeAuthorAccountIdInPost, 1);\n        // Call GraphQL mutation to update a post's liked accounts list\n        await context.db.Posts.update(\n          { id: postId },\n          { accounts_liked: JSON.stringify(accountsLiked) }\n        );\n      }\n      // Call GraphQL mutation to delete a like for a post\n      await context.db.PostLikes.delete({\n        account_id: likeAuthorAccountId,\n        post_id: postId,\n      });\n    } catch (e) {\n      console.log(`Failed to delete like from the database: ${e}`);\n    }\n  }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Here we also search for an existing relevant post in the ",(0,o.jsx)(n.code,{children:"posts"})," table and if one has been found, the ",(0,o.jsx)(n.code,{children:"accountsLiked"})," is defined as to update it removing the account ID of the account that has performed the like action. Then a graphQL ",(0,o.jsx)(n.code,{children:"delete"})," query is called to remove the like from the ",(0,o.jsx)(n.code,{children:"post_likes"})," table."]}),"\n",(0,o.jsx)(n.h2,{id:"querying-data-from-the-indexer",children:"Querying data from the indexer"}),"\n",(0,o.jsx)(n.p,{children:"The final step is querying the indexer using the public GraphQL API. This can be done by writing a GraphQL query using the GraphiQL tab in the code editor."}),"\n",(0,o.jsxs)(n.p,{children:["For example, here's a query that fetches ",(0,o.jsx)(n.code,{children:"likes"})," from the ",(0,o.jsx)(n.em,{children:"Feed Indexer"}),", ordered by ",(0,o.jsx)(n.code,{children:"block_height"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"query MyQuery {\n  <user-name>_near_feed_indexer_post_likes(order_by: {block_height: desc}) {\n    account_id\n    block_height\n    post_id\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once you have defined your query, you can use the GraphiQL Code Exporter to auto-generate a JavaScript or NEAR Widget code snippet. The exporter will create a helper method ",(0,o.jsx)(n.code,{children:"fetchGraphQL"})," which will allow you to fetch data from the indexer's GraphQL API. It takes three parameters:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"operationsDoc"}),": A string containing the queries you would like to execute."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"operationName"}),": The specific query you want to run."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"variables"}),": Any variables to pass in that your query supports, such as ",(0,o.jsx)(n.code,{children:"offset"})," and ",(0,o.jsx)(n.code,{children:"limit"})," for pagination."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Next, you can call the ",(0,o.jsx)(n.code,{children:"fetchGraphQL"})," function with the appropriate parameters and process the results."]}),"\n",(0,o.jsxs)(n.p,{children:["Here's the complete code snippet for a NEAR component using the ",(0,o.jsx)(n.em,{children:"Feed Indexer"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const QUERYAPI_ENDPOINT = `https://near-queryapi.api.pagoda.co/v1/graphql/`;\n\nState.init({\ndata: []\n});\n\nconst query = `query MyFeedQuery {\n    <user-name>_near_feed_indexer_post_likes(order_by: {block_height: desc}) {\n      account_id\n      block_height\n      post_id\n    }\n  }`\n\nfunction fetchGraphQL(operationsDoc, operationName, variables) {\n      return asyncFetch(\n        QUERYAPI_ENDPOINT,\n        {\n          method: "POST",\n          headers: { "x-hasura-role": `<user-name>_near` },\n          body: JSON.stringify({\n            query: operationsDoc,\n            variables: variables,\n            operationName: operationName,\n          }),\n        }\n      );\n    }\n\nfetchGraphQL(query, "MyFeedQuery", {}).then((result) => {\n  if (result.status === 200) {\n    if (result.body.data) {\n      const data = result.body.data.<user-name>_near_feed_indexer_post_likes;\n      State.update({ data })\n      console.log(data);\n    }\n  }\n});\n\nconst renderData = (a) => {\n  return (\n    <div key={JSON.stringify(a)}>\n        {JSON.stringify(a)}\n    </div>\n  );\n};\n\nconst renderedData = state.data.map(renderData);\nreturn (\n  {renderedData}\n);\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["To view a more complex example, see this widget which fetches posts with proper pagination: ",(0,o.jsx)(n.a,{href:"https://near.org/edit/roshaan.near/widget/query-api-feed-infinite",children:"Posts Widget powered By QueryAPI"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var o=t(67294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);