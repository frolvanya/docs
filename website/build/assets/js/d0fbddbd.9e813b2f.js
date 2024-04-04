"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3425],{11511:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=s(85893),r=s(11151);const t={id:"how-it-works",title:"How QueryAPI works",sidebar_label:"How it works"},o=void 0,a={id:"bos/queryapi/how-it-works",title:"How QueryAPI works",description:"QueryApi is a streaming indexer implementation that executes custom indexing logic written by developers on the NEAR blockchain.",source:"@site/../docs/bos/queryapi/how-works.md",sourceDirName:"bos/queryapi",slug:"/bos/queryapi/how-it-works",permalink:"/bos/queryapi/how-it-works",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/queryapi/how-works.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1701884814e3,frontMatter:{id:"how-it-works",title:"How QueryAPI works",sidebar_label:"How it works"},sidebar:"build",previous:{title:"Introduction",permalink:"/bos/queryapi/intro"},next:{title:"Getting Started",permalink:"/bos/community/indexers"}},d={},l=[{value:"Components involved",id:"components-involved",level:2},{value:"Detailed overview",id:"detailed-overview",level:3},{value:"Description",id:"description",level:3},{value:"Historical backfill",id:"historical-backfill",level:2},{value:"Provisioning",id:"provisioning",level:2},{value:"Low level details",id:"low-level-details",level:3},{value:"Postgres",id:"postgres",level:4},{value:"Hasura",id:"hasura",level:4},{value:"Who hosts QueryAPI",id:"who-hosts-queryapi",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["QueryApi is a streaming indexer implementation that executes custom indexing logic written by developers on the NEAR blockchain.\nQueryApi allows hosted execution of complex queries (ones that can\u2019t be answered by a ",(0,i.jsx)(n.a,{href:"/api/rpc/introduction",children:"simple RPC"})," or ",(0,i.jsx)(n.a,{href:"https://docs.pagoda.co/api",children:"Enhanced API"})," call), data hosting, and its exposure via GraphQL endpoints."]}),"\n",(0,i.jsx)(n.h2,{id:"components-involved",children:"Components involved"}),"\n",(0,i.jsx)(n.p,{children:"The QueryApi implementation integrates many different components in a single and streamlined solution.\nIn a high-level overview, the main components are:"}),"\n",(0,i.jsx)(n.admonition,{title:"Components",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NEAR Protocol"})," -> ",(0,i.jsx)(n.code,{children:"NEAR Lake"})," -> ",(0,i.jsx)(n.code,{children:"Coordinator"})," -> ",(0,i.jsx)(n.code,{children:"Runner"})," -> ",(0,i.jsx)(n.code,{children:"Database"})," -> ",(0,i.jsx)(n.code,{children:"API"})]})}),"\n",(0,i.jsx)(n.h3,{id:"detailed-overview",children:"Detailed overview"}),"\n",(0,i.jsx)(n.p,{children:"An in-depth, detailed overview of the QueryApi components:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(92672).Z+"",children:(0,i.jsx)(n.img,{alt:"QueryAPI",src:s(64474).Z+"",width:"12054",height:"3268"})})}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Protocol:"})," the underlying NEAR Layer-1 Blockchain, where data ",(0,i.jsx)(n.code,{children:"Blocks"})," and ",(0,i.jsx)(n.code,{children:"Chunks"})," are produced."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NEAR Lake:"})," an indexer which watches the Layer-1 network and stores all the events as JSON files on AWS S3. Changes are indexed as new ",(0,i.jsx)(n.code,{children:"Blocks"})," arrive."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Coordinator:"})," the QueryApi coordinator indexer filters matching data ",(0,i.jsx)(n.code,{children:"Blocks"}),", runs historical processing threads, and queues developer's JS code to be indexed with these matched blocks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Runner:"})," executes the user's indexer code, which outputs the data to the database."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Database:"})," a Postgres database where the developer's indexer data is stored, using a logical DB per user, and a logical schema per indexer function."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"API:"})," a Hasura server running on Google Cloud Platform exposes a GraphQL endpoint so users can access their data from anywhere."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"historical-backfill",children:"Historical backfill"}),"\n",(0,i.jsx)(n.p,{children:"When an indexer is created, two processes are triggered:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["real-time - starts from the block the indexer was registered (",(0,i.jsx)(n.code,{children:"block_X"}),"), and will execute the indexer function on every matching block from there on."]}),"\n",(0,i.jsxs)(n.li,{children:["historical - starts from the configured ",(0,i.jsx)(n.code,{children:"start_from_block"})," height, and will execute the indexer function for all matching blocks up until ",(0,i.jsx)(n.code,{children:"block_X"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The historical backfill process can be broken down in to two parts: ",(0,i.jsx)(n.em,{children:"indexed"}),", and ",(0,i.jsx)(n.em,{children:"unindexed"})," blocks."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Indexed"})," blocks come from the ",(0,i.jsx)(n.code,{children:"near-delta-lake"})," bucket in S3. This bucket is populated via a DataBricks job which streams blocks from NEAR Lake, and for every account, stores the block heights that contain transactions made against them. This processed data allows QueryAPI to quickly fetch a list of block heights that match the contract ID defined on the Indexer, rather than filtering through all blocks."]}),"\n",(0,i.jsxs)(n.p,{children:["NEAR Delta Lake is not updated in real time, so for the historical process to close the gap between it and the starting point of the real-time process, it must also manually process the remaining blocks. This is the ",(0,i.jsx)(n.strong,{children:"unindexed"})," portion of the backfill."]}),"\n",(0,i.jsx)(n.h2,{id:"provisioning",children:"Provisioning"}),"\n",(0,i.jsx)(n.p,{children:"In summary, QueryAPI provisioning consists of the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create ",(0,i.jsx)(n.code,{children:"database"})," in ",(0,i.jsx)(n.a,{href:"#postgres",children:"Postgres"}),", named after account, if necessary"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"database"})," to Hasura"]}),"\n",(0,i.jsxs)(n.li,{children:["Create ",(0,i.jsx)(n.code,{children:"schema"})," in ",(0,i.jsx)(n.code,{children:"database"})]}),"\n",(0,i.jsxs)(n.li,{children:["Run DDL in ",(0,i.jsx)(n.code,{children:"schema"})]}),"\n",(0,i.jsxs)(n.li,{children:["Track all tables in ",(0,i.jsx)(n.code,{children:"schema"})," in ",(0,i.jsx)(n.a,{href:"#hasura",children:"Hasura"})]}),"\n",(0,i.jsxs)(n.li,{children:["Track all foreign key relationships in ",(0,i.jsx)(n.code,{children:"schema"})," in ",(0,i.jsx)(n.a,{href:"#hasura",children:"Hasura"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add all permissions to all tables in ",(0,i.jsx)(n.code,{children:"schema"})," for account"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This is the workflow for the initial provisioning. Nothing happens for the remaining provisions, as QueryAPI checks if it has been provisioned, and then skips these steps."})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To check if an Indexer has been provisioned, QueryAPI checks if both the ",(0,i.jsx)(n.code,{children:"database"})," and ",(0,i.jsx)(n.code,{children:"schema"})," exist. This check is what prevents the app from attempting to provision an already provisioned indexer."]})}),"\n",(0,i.jsx)(n.h3,{id:"low-level-details",children:"Low level details"}),"\n",(0,i.jsxs)(n.p,{children:["There are two main pieces to provisioning: ",(0,i.jsx)(n.a,{href:"#postgres",children:"Postgres"})," and ",(0,i.jsx)(n.a,{href:"#hasura",children:"Hasura"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"postgres",children:"Postgres"}),"\n",(0,i.jsxs)(n.p,{children:["The dynamic piece in this process is the user-provided ",(0,i.jsx)(n.code,{children:"schema.sql"})," file, which uses Data Definition Language (DDL) to describe the structure of the user's database. The ",(0,i.jsx)(n.code,{children:"schema"})," DDL will be executed within a new Postgres Schema named after the account + function name. For example, if you have an ",(0,i.jsx)(n.code,{children:"account.near"})," and ",(0,i.jsx)(n.code,{children:"my_function"}),", the schema's name will be ",(0,i.jsx)(n.code,{children:"account_near_my_function"}),". Each schema exists within a separate virtual database for that account, named after the account, i.e. ",(0,i.jsx)(n.code,{children:"account_near"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"hasura",children:"Hasura"}),"\n",(0,i.jsx)(n.p,{children:'After creating the new schema, Hasura is configured to expose this schema via a GraphQL endpoint. First, the database is added as a data source to Hasura. By default, all tables are hidden, so to expose them they must be "tracked".'}),"\n",(0,i.jsxs)(n.p,{children:["Foreign keys in Postgres allow for nested queries via GraphQL, for example a ",(0,i.jsx)(n.code,{children:"customer"})," table may have a foreign relationship to an ",(0,i.jsx)(n.code,{children:"orders"}),' table, this enables the user to query the orders from a customer within a single query. These are not enabled by default, so they must be "tracked" too.']}),"\n",(0,i.jsxs)(n.p,{children:["Finally, necessary permissions are added to the tables. These permissions control which GraphQL operations will be exposed. For example, the ",(0,i.jsx)(n.code,{children:"SELECT"})," permission allows all queries, and ",(0,i.jsx)(n.code,{children:"DELETE"})," will expose all delete mutations. A role, named after the account, is used to group these permissions. Specifying the role in the GraphQL request applies these permissions to that request, preventing access to other users data."]}),"\n",(0,i.jsx)(n.h2,{id:"who-hosts-queryapi",children:"Who hosts QueryAPI"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://pagoda.co",children:"Pagoda Inc."})," runs and manages all the infrastructure of QueryAPI, including NEAR Lake nodes to store the data in JSON format on AWS S3."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NEAR Lake indexing is hosted on AWS S3 buckets."}),"\n",(0,i.jsx)(n.li,{children:"Coordinator and Runners are hosted on GCP."}),"\n",(0,i.jsx)(n.li,{children:"Hasura GraphQL API server is hosted on GCP."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Pricing",type:"caution",children:(0,i.jsx)(n.p,{children:"QueryAPI is currently free. Pagoda doesn't charge for storage of your indexer code and data as well as running the indexer, but usage pricing will be introduced once QueryApi is out of beta."})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},92672:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/files/qapi-components-b6353bbab22469089abc175d1b355141.png"},64474:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/qapi-components-b6353bbab22469089abc175d1b355141.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(67294);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);