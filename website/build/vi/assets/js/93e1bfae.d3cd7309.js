"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[520],{39043:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>h,metadata:()=>o,toc:()=>r});var i=e(85893),c=e(11151);const h={id:"storage-staking",title:"Storage Staking",sidebar_label:"Storage Staking"},s=void 0,o={id:"concepts/storage/storage-staking",title:"Storage Staking",description:"Khi b\u1ea1n deploy m\u1ed9t smart contract tr\xean NEAR, b\u1ea1n c\u1ea7n tr\u1ea3 cho chi ph\xed l\u01b0u tr\u1eef m\xe0 smart contract n\xe0y y\xeau c\u1ea7u th\xf4ng qua m\u1ed9t c\u01a1 ch\u1ebf g\u1ecdi l\xe0 storage staking.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/storage/storage-staking.md",sourceDirName:"1.concepts/storage",slug:"/concepts/storage/storage-staking",permalink:"/vi/concepts/storage/storage-staking",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/storage/storage-staking.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"storage-staking",title:"Storage Staking",sidebar_label:"Storage Staking"},sidebar:"concepts",previous:{title:"Storage tr\xean NEAR",permalink:"/vi/concepts/storage/data-storage"},next:{title:"C\xe1c gi\u1ea3i ph\xe1p thay th\u1ebf",permalink:"/vi/concepts/storage/storage-solutions"}},a={},r=[{value:"How does NEAR&#39;s design align incentives?",id:"how-does-nears-design-align-incentives",level:2},{value:"When do tokens get staked?",id:"when-do-tokens-get-staked",level:2},{value:"The &quot;million cheap data additions&quot; attack",id:"the-million-cheap-data-additions-attack",level:2},{value:"btw, you can remove data to unstake some tokens",id:"btw-you-can-remove-data-to-unstake-some-tokens",level:2},{value:"How much does it cost?",id:"how-much-does-it-cost",level:2},{value:"Example cost breakdown",id:"example-cost-breakdown",level:2},{value:"Calculate costs for your own contract",id:"calculate-costs-for-your-own-contract",level:2},{value:"Other ways to keep costs down",id:"other-ways-to-keep-costs-down",level:2},{value:"Use a binary serialization format, rather than JSON",id:"use-a-binary-serialization-format-rather-than-json",level:3},{value:"Store data off-chain",id:"store-data-off-chain",level:3},{value:"Summary",id:"summary",level:2},{value:"Footnotes",id:"footnotes",level:2}];function l(n){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Khi b\u1ea1n deploy m\u1ed9t smart contract tr\xean NEAR, b\u1ea1n c\u1ea7n tr\u1ea3 cho chi ph\xed l\u01b0u tr\u1eef m\xe0 smart contract n\xe0y y\xeau c\u1ea7u th\xf4ng qua m\u1ed9t c\u01a1 ch\u1ebf g\u1ecdi l\xe0 storage staking."}),"\n",(0,i.jsxs)(t.p,{children:["Trong storage staking (\u0111\xf4i khi \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ",(0,i.jsx)(t.em,{children:"state"})," staking), t\xe0i kho\u1ea3n s\u1edf h\u1eefu smart contract ph\u1ea3i stake (ho\u1eb7c lock) m\u1ed9t l\u01b0\u1ee3ng token t\u01b0\u01a1ng \u1ee9ng v\u1edbi l\u01b0\u1ee3ng d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\xean smart contract \u0111\xf3, t\u01b0\u01a1ng \u1ee9ng v\u1edbi vi\u1ec7c kh\u1ea5u tr\u1eeb m\u1ed9t kho\u1ea3n t\u1eeb account s\u1edf h\u1eefu contract."]}),"\n"]}),"\n",(0,i.jsxs)("blockquote",{className:"info",children:[(0,i.jsx)("strong",{children:"B\u1ea1n \u0111\xe3 bi\u1ebft v\u1ec1 Ethereum?"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(t.p,{children:'N\u1ebfu b\u1ea1n quen thu\u1ed9c v\u1edbi pricing model c\u1ee7a Ethereum, th\xec b\u1ea1n c\u0169ng bi\u1ebft r\u1eb1ng, gi\u1ed1ng nh\u01b0 NEAR, n\xf3 c\u0169ng thu m\u1ed9t kho\u1ea3n ph\xed (g\u1ecdi l\xe0 "gas") cho m\u1ed7i transaction. Kh\xe1c v\u1edbi NEAR, ph\xed gas c\u1ee7a Ethereum \u0111\u1ea1i di\u1ec7n cho l\u01b0\u1ee3ng d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef th\xf4ng qua transaction \u0111\xf3. \u0110i\u1ec1u n\xe0y v\u1ec1 c\u01a1 b\u1ea3n c\xf3 ngh\u0129a l\xe0 b\u1ea5t k\xec ai \u0111\u1ec1u c\xf3 th\u1ec3 chi tr\u1ea3 m\u1ed9t l\u1ea7n cho vi\u1ec7c l\u01b0u tr\u1eef d\u1eef li\u1ec7u v\u0129nh vi\u1ec5n on-chain. \u0110\xe2y l\xe0 m\u1ed9t economic design kh\xf4ng t\u1ed1t v\u1edbi hai nguy\xean nh\xe2n ch\xednh sau: 1. Nh\u1eefng ng\u01b0\u1eddi s\u1eed d\u1ee5ng network (miner, trong tr\u01b0\u1eddng h\u1ee3p c\u1ee7a Etherum 1) kh\xf4ng \u0111\u01b0\u1ee3c khuy\u1ebfn kh\xedch l\u01b0u tr\u1eef m\u1ed9t l\u01b0\u1ee3ng l\u1edbn d\u1eef li\u1ec7u m\u1ed9t c\xe1ch th\xedch h\u1ee3p, v\xec ph\xed gas \u0111\u01b0\u1ee3c tr\u1ea3 trong qu\xe1 kh\u1ee9 c\xf3 th\u1ec3 l\xe0m t\u0103ng chi ph\xed l\u1eefu tr\u1eef m\xe3i m\xe3i, v\xe0 2. Nh\u1eefng ng\u01b0\u1eddi d\xf9ng c\u1ee7a smart contract b\u1ecb thu ph\xed cho l\u01b0\u1ee3ng d\u1eef li\u1ec7u m\xe0 h\u1ecd g\u1eedi \u0111\u1ec3 l\u01b0u tr\u1eef trong n\xf3, thay v\xec thu ph\xed c\u1ee7a ng\u01b0\u1eddi s\u1ee1 h\u1eefu smart contract.'})]}),"\n",(0,i.jsx)(t.h2,{id:"how-does-nears-design-align-incentives",children:"How does NEAR's design align incentives?"}),"\n",(0,i.jsxs)(t.p,{children:["Nh\u1eefng token \u0111\u01b0\u1ee3c d\xf9ng trong storage staking kh\xf4ng th\u1ec3 s\u1eed d\u1ee5ng cho c\xe1c vi\u1ec7c kh\xe1c, nh\u01b0 l\xe0 validation staking. \u0110i\u1ec1u n\xe0y l\xe0m t\u0103ng l\u1ee3i nhu\u1eadn m\xe0 nh\u1eefng validator nh\u1eadn \u0111\u01b0\u1ee3c. Learn more in ",(0,i.jsx)(t.a,{href:"https://pages.near.org/papers/economics-in-sharded-blockchain/",children:"the economics whitepaper"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"when-do-tokens-get-staked",children:"When do tokens get staked?"}),"\n",(0,i.jsx)(t.p,{children:"Khi m\u1ed7i transaction chu\u1ea9n b\u1ecb x\u1eed l\xfd th\xeam d\u1eef li\u1ec7u."}),"\n",(0,i.jsx)(t.p,{children:"Ch\xfang ta h\xe3y c\xf9ng xem qua m\u1ed9t v\xed d\u1ee5 sau:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["B\u1ea1n ch\u1ea1y ",(0,i.jsx)(t.a,{href:"https://examples.near.org/guest-book",children:"\u1ee9ng d\u1ee5ng guest book"}),", deploy smart contract c\u1ee7a \u1ee9ng d\u1ee5ng b\u1eb1ng t\xe0i kho\u1ea3n ",(0,i.jsx)(t.code,{children:"example.near"})]}),"\n",(0,i.jsxs)(t.li,{children:["Nh\u1eefng ng\u01b0\u1eddi d\xf9ng \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n c\xf3 th\u1ec3 th\xeam tin nh\u1eafn c\u1ee7a h\u1ecd v\xe0o guest book. This means your users will, ",(0,i.jsx)(t.a,{href:"/concepts/protocol/gas#what-about-prepaid-gas",children:"by default"}),", pay a small gas fee to send their message to your contract."]}),"\n",(0,i.jsxs)(t.li,{children:["Khi c\xf3 m\u1ed9t call x\u1ea3y ra, NEAR s\u1ebd ki\u1ec3m tra s\u1ed1 d\u01b0 c\u1ee7a account ",(0,i.jsx)(t.code,{children:"example.near"})," c\xf3 \u0111\u1ee7 s\u1ed1 d\u01b0 d\u1ec3 stake m\u1ed9t l\u01b0\u1ee3ng token nh\u1eb1m \u0111\u1ea3m b\u1ea3o cho c\xe1c nhu c\u1ea7u l\u01b0u tr\u1eef ph\xe1t sinh hay kh\xf4ng. N\u1ebfu n\xf3 kh\xf4ng \u0111\u1ee7, transaction s\u1ebd th\u1ea5t b\u1ea1i."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"the-million-cheap-data-additions-attack",children:'The "million cheap data additions" attack'}),"\n",(0,i.jsx)(t.p,{children:"L\u01b0u \xfd r\u1eb1ng \u0111i\u1ec1u n\xe0y c\xf3 th\u1ec3 t\u1ea1o m\u1ed9t attack surface. Ti\u1ebfp t\u1ee5c v\u1edbi v\xed d\u1ee5 \u1edf tr\xean, n\u1ebfu g\u1eedi d\u1eef li\u1ec7u t\u1edbi \u1ee9ng d\u1ee5ng guest book c\u1ee7a b\u1ea1n m\xe0 ng\u01b0\u1eddi d\xf9ng ch\u1ec9 tr\u1ea3 m\u1ed9t kho\u1ea3n kh\xf4ng \u0111\xe1ng k\u1ec3, trong khi chi ph\xed c\u1ee7a ng\u01b0\u1eddi s\u1edf h\u1eefu contract t\u0103ng l\xean \u0111\xe1ng k\u1ec3, t\u1eeb \u0111\xf3 m\u1ed9t ng\u01b0\u1eddi d\xf9ng x\u1ea5u c\xf3 th\u1ec3 l\u1ee3i d\u1ee5ng vi\u1ec7c m\u1ea5t c\xe2n b\u1eb1ng n\xe0y \u0111\u1ec3 l\xe0m cho vi\u1ec7c b\u1ea3o tr\xec contract tr\u1edf n\xean c\u1ef1c k\xec \u0111\u1eaft \u0111\u1ecf."}),"\n",(0,i.jsx)(t.p,{children:"V\xec v\u1eady, h\xe3y c\u1ea9n th\u1eadn khi thi\u1ebft k\u1ebf smart contract c\u1ee7a b\u1ea1n \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o r\u1eb1ng nh\u1eefng ph\u01b0\u01a1ng th\u1ee9c t\u1ea5n c\xf4ng n\xe0y s\u1ebd ti\xeau t\u1ed1n chi ph\xed c\u1ee7a nh\u1eefng k\u1ebb t\u1ea5n c\xf4ng ti\u1ec1m \u1ea9n nhi\u1ec1u h\u01a1n b\xecnh th\u01b0\u1eddng."}),"\n",(0,i.jsx)(t.h2,{id:"btw-you-can-remove-data-to-unstake-some-tokens",children:"btw, you can remove data to unstake some tokens"}),"\n",(0,i.jsxs)(t.p,{children:['Nh\u1eefng ng\u01b0\u1eddi quen thu\u1ed9c v\u1edbi "immutable data" trong blockchain s\u1ebd th\u1ea5y \u0111i\u1ec1u n\xe0y \u0111\xe1ng ng\u1ea1c nhi\xean. Trong khi \u0111\xf3 s\u1ef1 th\u1eadt l\xe0 m\u1ed9t ',(0,i.jsx)(t.em,{children:"indexing node"})," s\u1ebd gi\u1eef t\u1ea5t c\u1ea3 d\u1eef li\u1ec7u m\xe3i m\xe3i, ",(0,i.jsx)(t.em,{children:"c\xe1c validating node"})," (l\xe0 nh\u1eefng node \u0111\u01b0\u1ee3c ch\u1ea1y b\u1edfi h\u1ea7u h\u1ebft validator trong m\u1ea1ng l\u01b0\u1edbi) th\xec kh\xf4ng. C\xe1c smart contract c\xf3 th\u1ec3 cung c\u1ea5p nhi\u1ec1u c\xe1ch \u0111\u1ec3 x\xf3a d\u1eef li\u1ec7u, v\xe0 d\u1eef li\u1ec7u n\xe0y s\u1ebd b\u1ecb lo\u1ea1i b\u1ecf ra kh\u1ecfi h\u1ea7u h\u1ebft c\xe1c node tr\xean network trong m\u1ed9t v\xe0i ",(0,i.jsx)(t.a,{href:"/vi/concepts/basics/epoch",children:"epoch"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"L\u01b0u \xfd r\u1eb1ng m\u1ed9t call t\u1edbi smart contract c\u1ee7a b\u1ea1n \u0111\u1ec3 x\xf3a d\u1eef li\u1ec7u c\u1ea7n c\xf3 m\u1ed9t kho\u1ea3n ph\xed gas t\u01b0\u01a1ng \u1ee9ng. V\u1edbi gi\u1edbi h\u1ea1n gas c\u1ee7a NEAR, \u0111i\u1ec1u n\xe0y t\u1ea1o ra m\u1ed9t c\u1eadn tr\xean v\u1ec1 vi\u1ec7c bao nhi\xeau d\u1eef li\u1ec7u c\xf3 th\u1ec3 b\u1ecb x\xf3a trong m\u1ed7i m\u1ed9t transaction."}),"\n",(0,i.jsx)(t.h2,{id:"how-much-does-it-cost",children:"How much does it cost?"}),"\n",(0,i.jsxs)(t.p,{children:["Storage staking \u0111\u01b0\u1ee3c \u0111\u1ecbnh gi\xe1 b\u1eb1ng m\u1ed9t s\u1ed1 c\u1ee5 th\u1ec3 b\u1edfi network, c\u1ee5 th\u1ec3 \u0111\u01b0\u1ee3c \u0111\u1eb7t l\xe0 ",(0,i.jsx)(t.strong,{children:"1E19 yoctoNEAR m\u1ed7i byte"}),", hay ",(0,i.jsx)(t.strong,{children:"100kb m\u1ed7i NEAR token (\u24c3)"}),". ",(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," ",(0,i.jsx)(t.sup,{children:(0,i.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,i.jsxs)(t.p,{children:["JSON RPC API c\u1ee7a NEAR cung c\u1ea5p ",(0,i.jsx)(t.a,{href:"/docs/api/rpc#genesis-config",children:"m\u1ed9t c\xe1ch \u0111\u1ec3 truy v\u1ea5n initial setting n\xe0y"})," c\u0169ng nh\u01b0 ",(0,i.jsx)(t.a,{href:"/docs/api/rpc#protocol-config",children:"m\u1ed9t c\xe1ch \u0111\u1ec3 truy v\u1ea5n live config / nh\u1eefng block g\u1ea7n nh\u1ea5t"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"example-cost-breakdown",children:"Example cost breakdown"}),"\n",(0,i.jsx)(t.p,{children:"H\xe3y c\xf9ng xem x\xe9t m\u1ed9t v\xed d\u1ee5 sau."}),"\n",(0,i.jsxs)(t.p,{children:["M\u1ed9t ",(0,i.jsx)(t.a,{href:"https://github.com/near/NEPs/pull/4",children:"non-fungible token"})," l\xe0 duy nh\u1ea5t, \u0111i\u1ec1u n\xe0y c\xf3 ngh\u0129a m\u1ed7i token \u0111\u1ec1u c\xf3 ID ri\xeang c\u1ee7a n\xf3. Contract ph\u1ea3i l\u01b0u tr\u1eef m\u1ed9t mapping t\u1eeb nh\u1eefng token ID \u0111\u1ebfn account ID c\u1ee7a ng\u01b0\u1eddi s\u1edf h\u1eefu."]}),"\n",(0,i.jsxs)(t.p,{children:["N\u1ebfu m\u1ed9t NFT \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 track ",(0,i.jsx)(t.strong,{children:"1 tri\u1ec7u"})," token, c\u1ea7n y\xeau c\u1ea7u bao nhi\xeau chi ph\xed l\u01b0u tr\u1eef cho \xe1nh x\u1ea1 token-ID-t\u1edbi-ng\u01b0\u1eddi-s\u1edf h\u1eefu? V\xe0 c\u1ea7n bao nhi\xeau token \u0111\u1ec3 stake cho chi ph\xed l\u01b0u tr\u1eef \u0111\xf3?"]}),"\n",(0,i.jsxs)(t.p,{children:["Let's calculate the storage needs when using a ",(0,i.jsx)(t.code,{children:"PersistentMap"})," that stores data as UTF-8 strings."]}),"\n",(0,i.jsxs)(t.p,{children:["\u0110\xe2y l\xe0 ",(0,i.jsx)(t.code,{children:"PersistentMap"})," c\u1ee7a ch\xfang ta:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'type AccountId = string;\ntype TokenId = u64;\nconst tokenToOwner = new PersistentMap<TokenId, AccountId>("t2o");\n'})}),"\n",(0,i.jsxs)(t.p,{children:["C\u1ee5 th\u1ec3 h\u01a1n, t\u1ea5t c\u1ea3 d\u1eef li\u1ec7u l\u01b0u tr\u1eef tr\xean NEAR blockchain \u0111\u01b0\u1ee3c l\u01b0u trong m\u1ed9t key-value database. Bi\u1ebfn ",(0,i.jsx)(t.code,{children:"'t2o'"})," \u0111\u01b0\u1ee3c truy\u1ec1n v\xe0o ",(0,i.jsx)(t.code,{children:"PersistentMap"})," gi\xfap n\xf3 truy v\u1ebft \u0111\u01b0\u1ee3c t\u1ea5t c\u1ea3 d\u1eef li\u1ec7u c\u1ee7a n\xf3. T\u1ea1i th\u1eddi \u0111i\u1ec3m vi\u1ebft b\xe0i, n\u1ebfu t\xe0i kho\u1ea3n ",(0,i.jsx)(t.code,{children:"example.near"})," c\u1ee7a b\u1ea1n s\u1edf h\u1eefu token v\u1edbi ID l\xe0 ",(0,i.jsx)(t.code,{children:"0"}),", th\xec \u0111\xe2y l\xe0 d\u1eef li\u1ec7u s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u v\xe0o key-value database:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["key: ",(0,i.jsx)(t.code,{children:"t2o::0"})]}),"\n",(0,i.jsxs)(t.li,{children:["value: ",(0,i.jsx)(t.code,{children:"example.near"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Nh\u01b0 v\u1eady v\u1edbi 1 tri\u1ec7u token, t\u1ea5t c\u1ea3 nh\u1eefng g\xec ch\xfang ta c\u1ea7n ph\u1ea3i l\xe0m l\xe0 c\u1ed9ng v\xe0o v\xe0 nh\xe2n v\u1edbi 1 tri\u1ec7u:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Prefix ",(0,i.jsx)(t.code,{children:"t2o"}),", s\u1ebd \u0111\u01b0\u1ee3c serialize th\xe0nh ba byte \u1edf d\u1ea1ng UTF-8, v\xe0 hai d\u1ea5u hai ch\u1ea5m s\u1ebd th\xeam v\xe0o hai byte n\u1eefa. T\u1ed5ng c\u1ed9ng l\xe0 5 byte."]}),"\n",(0,i.jsxs)(t.li,{children:["V\u1edbi m\u1ed9t implementation m\xe0 ",(0,i.jsx)(t.code,{children:"TokenId"})," t\u0103ng t\u1ef1 \u0111\u1ed9ng, nh\u1eefng gi\xe1 tr\u1ecb s\u1ebd n\u1eb1m trong kho\u1ea3ng t\u1eeb ",(0,i.jsx)(t.code,{children:"0"})," \u0111\u1ebfn ",(0,i.jsx)(t.code,{children:"999999"}),", l\xfac n\xe0y \u0111\u1ed9 d\xe0i trung b\xecnh s\u1ebd l\xe0 5 byte."]}),"\n",(0,i.jsxs)(t.li,{children:["Gi\u1ea3 s\u1eed ch\xfang ta c\xf3 nh\u1eefng NEAR ",(0,i.jsx)(t.code,{children:"AccountId"})," \u1edf d\u1ea1ng chu\u1ea9n, v\xe0 d\u1ef1 \u0111o\xe1n nh\u1eefng NEAR Account ID n\xe0y s\u1ebd theo pattern g\u1ea7n \u0111\xfang c\u1ee7a nh\u1eefng domain name, m\xe0 ",(0,i.jsx)(t.a,{href:"https://www.gaebler.com/Domain-Length-Research.htm",children:"\u0111\u1ed9 d\xe0i trung b\xecnh kho\u1ea3ng 10 k\xed t\u1ef1"}),", c\u1ed9ng th\xeam m\u1ed9t top-level name d\u1ea1ng ",(0,i.jsx)(t.code,{children:".near"}),". Do \u0111\xf3, \u0111\u1ed9 d\xe0i trung b\xecnh ch\u1ea5p nh\u1eadn \u0111\u01b0\u1ee3c v\xe0o kho\u1ea3ng 15 k\xed t\u1ef1; ch\xfang ta h\xe3y gi\u1eef d\u1ef1 \u0111o\xe1n n\xe0y, v\xe0 n\u1ebfu t\u1ec7 h\u01a1n h\xe3y t\u0103ng l\xean 25 k\xed t\u1ef1. \u0110i\u1ec1u n\xe0y s\u1ebd t\u01b0\u01a1ng \u1ee9ng v\u1edbi 25 byte, v\xec c\xe1c NEAR account ID ph\u1ea3i s\u1eed d\u1ee5ng nh\u1eefng k\xed t\u1ef1 trong b\u1ed9 m\xe3 ASCII."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Do \u0111\xf3:"}),"\n",(0,i.jsx)(t.p,{children:"1_000_000 * (5 + 5 + 25)"}),"\n",(0,i.jsxs)(t.p,{children:["35 tri\u1ec7u byte. 350 l\u1ea7n c\u1ee7a 100Kib, t\u01b0\u01a1ng \u0111\u01b0\u01a1ng \u24c3350. T\xednh to\xe1n ch\xednh x\xe1c nh\u01b0 sau: Nh\xe2n 1e19 yoctoNEAR v\u1edbi m\u1ed7i byte, ch\xfang ta t\xecm ra r\u1eb1ng mapping ",(0,i.jsx)(t.code,{children:"tokenToOwner"})," v\u1edbi 35 tri\u1ec7u byte s\u1ebd y\xeau c\u1ea7u stake 3.5e26 yoctoNEAR, hay \u24c3350"]}),"\n",(0,i.jsxs)(t.p,{children:["L\u01b0u \xfd r\u1eb1ng b\u1ea1n c\xf3 th\u1ec3 gi\u1ea3m con s\u1ed1 n\xe0y xu\u1ed1ng \u24c3330 ch\u1ec9 b\u1eb1ng vi\u1ec7c thay \u0111\u1ed5i prefix t\u1eeb ",(0,i.jsx)(t.code,{children:"t2o"})," th\xe0nh m\u1ed9t k\xed t\u1ef1. Ho\u1eb7c b\u1ecf qua to\xe0n b\u1ed9! B\u1ea1n c\xf3 th\u1ec3 c\xf3 zero-length prefix tr\xean m\u1ed9t ",(0,i.jsx)(t.code,{children:"PersistentVector"})," trong smart contract. N\u1ebfu b\u1ea1n l\xe0m nh\u01b0 v\u1eady, b\u1ea1n c\xf3 th\u1ec3 gi\u1ea3m con s\u1ed1 n\xe0y xu\u1ed1ng c\xf2n \u24c3250."]}),"\n",(0,i.jsx)(t.h2,{id:"calculate-costs-for-your-own-contract",children:"Calculate costs for your own contract"}),"\n",(0,i.jsx)(t.p,{children:"T\u1ef1 t\xednh to\xe1n s\u1ed1 byte nh\u01b0 \u1edf tr\xean s\u1ebd kh\xf3 v\xe0 d\u1ec5 x\u1ea3y ra l\u1ed7i. Tin vui l\xe0: b\u1ea1n kh\xf4ng c\u1ea7n ph\u1ea3i t\xednh!"}),"\n",(0,i.jsxs)(t.p,{children:["You can test the storage used using the ",(0,i.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/environment",children:"SDK environment"})," and checking ",(0,i.jsx)(t.code,{children:"env.storage_usage()"})]}),"\n",(0,i.jsx)(t.h2,{id:"other-ways-to-keep-costs-down",children:"Other ways to keep costs down"}),"\n",(0,i.jsx)(t.p,{children:"L\u01b0u tr\u1eef d\u1eef li\u1ec7u on-chain kh\xf4ng r\u1ebb \u0111\u1ed1i v\u1edbi nh\u1eefng ng\u01b0\u1eddi s\u1eed d\u1ee5ng network, v\xe0 NEAR \u0111\u1ea9y chi ph\xed n\xe0y cho nh\u1eefng developer. V\xec th\u1ebf, n\u1ebfu b\u1ea1n l\xe0 m\u1ed9t developer th\xec b\u1ea1n s\u1ebd gi\u1ea3m chi ph\xed nh\u01b0 th\u1ebf n\xe0o? C\xf3 hai ph\u01b0\u01a1ng ph\xe1p ti\u1ebfp c\u1eadn ph\u1ed5 bi\u1ebfn:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"S\u1eed d\u1ee5ng m\u1ed9t binary serialization format, thay cho JSON"}),"\n",(0,i.jsx)(t.li,{children:"L\u01b0u d\u1eef li\u1ec7u off-chain"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"use-a-binary-serialization-format-rather-than-json",children:"Use a binary serialization format, rather than JSON"}),"\n",(0,i.jsxs)(t.p,{children:["NEAR core team maintain m\u1ed9t library g\u1ecdi l\xe0 ",(0,i.jsx)(t.a,{href:"https://borsh.io/",children:"borsh"}),", n\xf3 \u0111\u01b0\u1ee3c d\xf9ng m\u1ed9t c\xe1ch t\u1ef1 \u0111\u1ed9ng khi b\u1ea1n d\xf9ng ",(0,i.jsx)(t.code,{children:"near-sdk-rs"}),". Someday, it will probably also be used by ",(0,i.jsx)(t.code,{children:"near-sdk-js"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["T\u01b0\u1edfng t\u01b0\u1ee3ng r\u1eb1ng b\u1ea1n mu\u1ed1n l\u01b0u m\u1ed9t array d\u1ea1ng ",(0,i.jsx)(t.code,{children:"[0, 1, 2, 3]"}),". B\u1ea1n c\xf3 th\u1ec3 serialize n\xf3 \u1edf d\u1ea1ng string ho\u1eb7c l\u01b0u n\xf3 \u1edf d\u1ea1ng UTF-8 byte. This is what ",(0,i.jsx)(t.code,{children:"near-sdk-js"})," does today. Lo\u1ea1i b\u1ecf c\xe1c space, cu\u1ed1i c\xf9ng b\u1ea1n ch\u1ec9 s\u1eed d\u1ee5ng 9 byte."]}),"\n",(0,i.jsx)(t.p,{children:"Using borsh, this same array gets saved as 8 bytes:"}),"\n",(0,i.jsx)(t.p,{children:"\\u0004\\u0000\\u0000\\u0000\\u0000\\u0001\\u0002\\u0003"}),"\n",(0,i.jsx)(t.p,{children:"Tho\u1ea1t nh\xecn, ti\u1ebft ki\u1ec7m 1 byte c\xf3 l\u1ebd kh\xf4ng quan tr\u1ecdng l\u1eafm. Nh\u01b0ng h\xe3y nh\xecn k\u0129 h\u01a1n."}),"\n",(0,i.jsxs)(t.p,{children:["B\u1ed1n byte \u0111\u1ea7u ti\xean, ",(0,i.jsx)(t.code,{children:"\\u0004\\u0000\\u0000\\u0000"}),", b\xe1o hi\u1ec7u cho serializer \u0111\xe2y l\xe0 m\u1ed9t array ki\u1ec3u ",(0,i.jsx)(t.code,{children:"u32"})," v\u1edbi chi\u1ec1u d\xe0i ",(0,i.jsx)(t.code,{children:"4"})," \u0111ang s\u1eed d\u1ee5ng little-endian encoding. Nh\u1eefng byte c\xf2n l\u1ea1i l\xe0 c\xe1c ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng - ",(0,i.jsx)(t.code,{children:"\\u0000\\u0001\\u0002\\u0003"}),". Khi b\u1ea1n serialize th\xeam nhi\u1ec1u ph\u1ea7n t\u1eed, m\u1ed7i l\u1ea7n s\u1ebd th\xeam m\u1ed9t byte v\xe0o c\u1ea5u tr\xfac d\u1eef li\u1ec7u n\xe0y. V\u1edbi JSON, m\u1ed7i ph\u1ea7n t\u1eed m\u1edbi y\xeau c\u1ea7u th\xeam hai byte, \u0111\u1ec3 bi\u1ec3u di\u1ec5n c\u1ea3 d\u1ea5u ph\u1ea9y v\xe0 s\u1ed1 m\u1edbi n\xe0y."]}),"\n",(0,i.jsx)(t.p,{children:"Nh\xecn chung, Borsh nhanh h\u01a1n, t\u1ed1n \xedt chi ph\xed b\u1ed9 nh\u1edb, v\xe0 chi ph\xed gas h\u01a1n. H\xe3y d\xf9ng n\xf3 n\u1ebfu b\u1ea1n c\xf3 th\u1ec3."}),"\n",(0,i.jsx)(t.h3,{id:"store-data-off-chain",children:"Store data off-chain"}),"\n",(0,i.jsx)(t.p,{children:"This is especially important if you are storing user-generated data!"}),"\n",(0,i.jsxs)(t.p,{children:["Let's use this ",(0,i.jsx)(t.a,{href:"https://github.com/near-examples/guest-book-examples",children:"Guest Book"})," as an example. Hi\u1ec7n t\u1ea1i, nh\u1eefng ng\u01b0\u1eddi d\xf9ng \u1ee9ng d\u1ee5ng c\xf3 th\u1ec3 \u0111\u0103ng nh\u1eadp v\u1edbi NEAR v\xe0 \u0111\u1ec3 l\u1ea1i m\u1ed9t tin nh\u1eafn. Tin nh\u1eafn c\u1ee7a h\u1ecd \u0111\u01b0\u1ee3c l\u01b0u on-chain."]}),"\n",(0,i.jsx)(t.p,{children:"Th\u1eed ngh\u0129 r\u1eb1ng \u1ee9ng d\u1ee5ng n\xe0y r\u1ea5t ph\u1ed5 bi\u1ebfn, v\xe0 nh\u1eefng ng\u01b0\u1eddi d\xf9ng \u0111\xf3 b\u1eaft \u0111\u1ea7u v\xf4 t\xecnh \u0111\u1ec3 l\u1ea1i r\u1ea5t nhi\u1ec1u nh\u1eefng tin nh\u1eafn d\xe0i. Ng\u01b0\u1eddi s\u1edf h\u1eefu contract c\xf3 l\u1ebd s\u1ebd r\u1ea5t nhanh h\u1ebft ti\u1ec1n \u0111\u1ec3 tr\u1ea3 chi ph\xed l\u01b0u tr\u1eef!"}),"\n",(0,i.jsxs)(t.p,{children:["Chi\u1ebfn l\u01b0\u1ee3c t\u1ed1t h\u01a1n c\xf3 th\u1ec3 l\xe0 l\u01b0u tr\u1eef d\u1eef li\u1ec7u off-chain. N\u1ebfu b\u1ea1n mu\u1ed1n gi\u1eef \u1ee9ng d\u1ee5ng ph\xe2n t\xe1n, th\xec gi\u1ea3i ph\xe1p l\u01b0u tr\u1eef d\u1eef li\u1ec7u off-chain ph\u1ed5 bi\u1ebfn l\xe0 ",(0,i.jsx)(t.a,{href:"https://ipfs.io/",children:"IPFS"}),". V\u1edbi n\xf3, b\u1ea1n c\xf3 th\u1ec3 bi\u1ec3u di\u1ec5n b\u1ea5t k\xec t\u1eadp h\u1ee3p d\u1eef li\u1ec7u n\xe0o v\u1edbi m\u1ed9t predictable content address \u0111\u01b0\u1ee3c bi\u1ec3u di\u1ec5n d\u01b0\u1edbi d\u1ea1ng sau:"]}),"\n",(0,i.jsx)(t.p,{children:"QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG"}),"\n",(0,i.jsxs)(t.p,{children:["V\u1edbi m\u1ed9t content address c\xf3 th\u1ec3 bi\u1ec3u di\u1ec5n m\u1ed9t c\u1ea5u tr\xfac JSON hay m\u1ed9t t\u1ea5m h\xecnh hay b\u1ea5t k\xec ki\u1ec3u d\u1eef li\u1ec7u n\xe0o. D\u1eef li\u1ec7u n\xe0y \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef v\u1eadt l\xfd \u1edf \u0111\xe2u? B\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ",(0,i.jsx)(t.a,{href:"https://filecoin.io/",children:"Filecoin"})," ho\u1eb7c ch\u1ea1y IPFS server c\u1ee7a ri\xeang b\u1ea1n \u0111\u1ec3 li\xean k\u1ebft d\u1eef li\u1ec7u c\u1ee7a \u1ee9ng d\u1ee5ng."]}),"\n",(0,i.jsx)(t.p,{children:"With this approach, each record you add to your contract will be a predictable size."}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"C\u1ea5u tr\xfac c\u1ee7a NEAR c\u1ea3i ti\u1ebfn c\xe1c ho\u1ea1t \u0111\u1ed9ng c\u1ee7a network trong khi \u0111\xf3 v\u1eabn h\u1ed7 tr\u1ee3 flexibility v\xe0 predictability cho c\xe1c contract developer. Qu\u1ea3n l\xfd chi ph\xed l\u01b0u tr\u1eef l\xe0 m\u1ed9t kh\xeda c\u1ea1nh quan tr\u1ecdng c\u1ee7a smart contract design, v\xe0 c\xe1c library c\u1ee7a NEAR khi\u1ebfn n\xf3 tr\u1edf n\xean d\u1ec5 d\xe0ng \u0111\u1ec3 nh\u1eadn ra bao nhi\xeau chi ph\xed l\u01b0u tr\u1eef l\xe0 \u0111\u1ee7 cho \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n."}),"\n",(0,i.jsx)(t.admonition,{title:"Got a question?",type:"tip",children:(0,i.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:(0,i.jsx)("h8",{children:"Ask it on StackOverflow!"})})}),"\n",(0,i.jsx)(t.h2,{id:"footnotes",children:"Footnotes"}),"\n","\n",(0,i.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://gov.near.org/t/storage-staking-price/399",children:"Storage staking price"})," ",(0,i.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/near/nearcore/pull/3881",children:"Gi\u1ea3m chi ph\xed l\u01b0u tr\u1eef 10x"})," ",(0,i.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:t}={...(0,c.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},11151:(n,t,e)=>{e.d(t,{Z:()=>o,a:()=>s});var i=e(67294);const c={},h=i.createContext(c);function s(n){const t=i.useContext(h);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function o(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),i.createElement(h.Provider,{value:t},n.children)}}}]);