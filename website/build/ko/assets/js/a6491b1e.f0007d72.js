"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8115],{40334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=t(85893),r=t(11151),o=t(74866),s=t(85162),i=t(77229);const l={id:"donation",title:"\uae30\ubd80"},c=void 0,d={id:"tutorials/examples/donation",title:"\uae30\ubd80",description:"Our donation example enables to forward NEAR Tokens to an account while keeping track of it. It is one of the simplest examples on making a contract handle tranfers.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/examples/donation.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/donation",permalink:"/ko/tutorials/examples/donation",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/donation.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,frontMatter:{id:"donation",title:"\uae30\ubd80"},sidebar:"tutorials",previous:{title:"\ubc29\uba85\ub85d",permalink:"/ko/tutorials/examples/guest-book"},next:{title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)",permalink:"/ko/tutorials/examples/xcc"}},u={},h=[{value:"Obtaining the Donation Example",id:"obtaining-the-donation-example",level:2},{value:"Structure of the Example",id:"structure-of-the-example",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Running the Frontend",id:"running-the-frontend",level:3},{value:"Understanding the Frontend",id:"understanding-the-frontend",level:3},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Testing the Contract",id:"testing-the-contract",level:3},{value:"Deploying the Contract to the NEAR network",id:"deploying-the-contract-to-the-near-network",level:3},{value:"CLI: Interacting with the Contract",id:"cli-interacting-with-the-contract",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Our donation example enables to forward NEAR Tokens to an account while keeping track of it. It is one of the simplest examples on making a contract handle tranfers."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"img",src:t(80359).Z+"",width:"1139",height:"479"})," ",(0,a.jsx)(n.em,{children:"Frontend of the Donation App"})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"obtaining-the-donation-example",children:"Obtaining the Donation Example"}),"\n",(0,a.jsx)(n.p,{children:"\uae30\ubd80 \uc608\uc81c\ub97c \uc2dc\uc791\ud558\ub294 \ub370\ub294 \ub450 \uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["You can use the app through ",(0,a.jsx)(n.code,{children:"Github Codespaces"}),", which will open a web-based interactive environment."]}),"\n",(0,a.jsx)(n.li,{children:"Clone the repository locally and use it from your computer."}),"\n"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Codespaces"}),(0,a.jsx)(n.th,{children:"Clone locally"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://codespaces.new/near-examples/donation-examples",children:(0,a.jsx)(n.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),(0,a.jsxs)(n.td,{children:["\ud83c\udf10 ",(0,a.jsx)(n.code,{children:"https://github.com/near-examples/donation-examples.git"})]})]})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"structure-of-the-example",children:"Structure of the Example"}),"\n",(0,a.jsx)(n.p,{children:"The example is divided in two main components:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The smart contract, available in two flavors: rust and javascript"}),"\n",(0,a.jsx)(n.li,{children:"The frontend, that interacts with an already deployed contract."}),"\n"]}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500 sandbox-ts # sandbox testing\n\u2502    \u251c\u2500\u2500 src\n\u2502    \u2502    \u2514\u2500\u2500 main.ava.ts\n\u2502    \u251c\u2500\u2500 ava.config.cjs\n\u2502    \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 contract.ts\n\u2502    \u251c\u2500\u2500 model.ts\n\u2502    \u2514\u2500\u2500 utils.ts\n\u251c\u2500\u2500 package.json # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json # test script\n"})})}),(0,a.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u250c\u2500\u2500 tests # workspaces testing\n\u2502    \u251c\u2500\u2500 workspaces.rs\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 donation.rs\n\u2502    \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"frontend",children:"Frontend"}),"\n",(0,a.jsx)(n.p,{children:"The donation example includes a frontend that interacts with an already deployed smart contract, allowing user to donate NEAR tokens to a faucet service."}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"running-the-frontend",children:"Running the Frontend"}),"\n",(0,a.jsx)(n.p,{children:"To start the frontend you will need to install the dependencies and start the server."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd frontend\nyarn\nyarn start\n"})}),"\n",(0,a.jsx)(n.p,{children:'\uacc4\uc18d\ud574\uc11c NEAR \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uc138\uc694. \uc5c6\ub294 \uacbd\uc6b0 \uc989\uc2dc \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Once logged in, input the amount of NEAR you want to donate and press the donate button. \ud2b8\ub79c\uc7ad\uc158\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 NEAR \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub429\ub2c8\ub2e4. After confirming it, the donation will be listed in the "Latest Donations".'}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"understanding-the-frontend",children:"Understanding the Frontend"}),"\n",(0,a.jsxs)(n.p,{children:["The frontend is composed by a single HTML file (",(0,a.jsx)(n.code,{children:"/index.html"}),"), while the logic lives in ",(0,a.jsx)(n.code,{children:"/index.js"}),", which communicates with the contract through ",(0,a.jsx)(n.code,{children:"/near-interface.js"}),"."]}),"\n",(0,a.jsxs)(i.SQ,{value:"",language:"js",children:[(0,a.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/donation-examples/blob/main/frontend/index.js",start:"71",end:"93"}),(0,a.jsx)(i.Ey,{fname:"near-interface.js",url:"https://github.com/near-examples/donation-examples/blob/main/frontend/near-interface.js",start:"29",end:"32"}),(0,a.jsx)(i.Ey,{fname:"near-wallet.js",url:"https://github.com/near-examples/donation-examples/blob/main/frontend/near-wallet.js",start:"105",end:"113"})]}),"\n",(0,a.jsx)(n.p,{children:"\uae30\ubd80 \uc608\uc81c\uc758 \ud765\ubbf8\ub85c\uc6b4 \uce21\uba74\uc740, \ud2b8\ub79c\uc7ad\uc158\uc744 \uc218\ub77d\ud558\uae30 \uc704\ud574 NEAR \uc9c0\uac11\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub41c \ud6c4 \uacb0\uacfc\ub97c \uac80\uc0c9\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc900\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,a.jsxs)(n.p,{children:["The contract exposes methods to donate tokens (",(0,a.jsx)(n.code,{children:"donate"}),"), and methods to retrieve the recorded donations (e.g. ",(0,a.jsx)(n.code,{children:"get_donation_by_number"}),")."]}),"\n",(0,a.jsxs)(i.O2,{children:[(0,a.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"16",end:"44"})}),(0,a.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/donation.rs",start:"22",end:"65"})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"testing-the-contract",children:"Testing the Contract"}),"\n",(0,a.jsx)(n.p,{children:"The contract readily includes a set of unit and sandbox testing to validate its functionality. To execute the tests, run the following commands:"}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd contract-ts\nyarn\nyarn test\n"})})}),(0,a.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd contract-rs\ncargo test\n"})})})]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["The ",(0,a.jsx)(n.code,{children:"integration tests"})," use a sandbox to create NEAR users and simulate interactions with the contract. :::"]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h3,{id:"deploying-the-contract-to-the-near-network",children:"Deploying the Contract to the NEAR network"}),(0,a.jsxs)(n.p,{children:["In order to deploy the contract you will need to ",(0,a.jsx)(n.a,{href:"/develop/contracts/quickstart#create-a-testnet-account",children:"create a NEAR account"}),"."]}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-ts\nyarn build\nnear deploy <accountId> ./build/donation.wasm\n"})})}),(0,a.jsx)(s.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-rs\ncargo near build\nnear deploy <accountId> ./target/wasm32-unknown-unknown/release/donation.wasm\n"})})})]}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["To interact with your contract from the ",(0,a.jsx)(n.a,{href:"#frontend",children:"frontend"}),", simply replace the variable ",(0,a.jsx)(n.code,{children:"CONTRACT_NAME"})," in the ",(0,a.jsx)(n.code,{children:"index.js"})," file. :::"]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h3,{id:"cli-interacting-with-the-contract",children:"CLI: Interacting with the Contract"}),(0,a.jsx)(n.p,{children:"To interact with the contract through the console, you can use the following commands"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Get donations \n# Optional arguments for pagination\nnear view donation.near-examples.testnet get_donations --args=\'{"from_index": 0,"limit": 10}\'\n\n# Get beneficiary\nnear view donation.near-examples.testnet get_beneficiary\n\n# Get number of donors\nnear view donation.near-examples.testnet number_of_donors\n\n# Get donation for an account \n# Require accountId\nnear view donation.near-examples.testnet get_donation_for_account --args=\'{"account_id":<accountId>}\'\n\n# Donate to the contract \n# Replace <accountId> with your account ID\n# Require deposit\nnear call donation.near-examples.testnet donate --accountId <accountId> --deposit 0.1\n'})}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["If you're using your own account, replace ",(0,a.jsx)(n.code,{children:"donation.near-examples.testnet"})," with your ",(0,a.jsx)(n.code,{children:"accountId"}),". :::"]}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h2,{id:"moving-forward",children:"Moving Forward"}),(0,a.jsxs)(n.p,{children:["A nice way to learn is by trying to expand a contract. Modify the donation example so it accumulates the tokens in the contract instead of sending it immediately. Then, make a method that only the ",(0,a.jsx)(n.code,{children:"beneficiary"})," can call to retrieve the tokens."]})]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),o=t(12466),s=t(16550),i=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,s.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function x(e){var n,t,r,o,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,x=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:x})})),g=f[0],b=f[1],j=m({queryString:c,groupId:u}),v=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),k=w[0],T=w[1],E=function(){var e=null!=v?v:k;return p({value:e,tabValues:x})?e:null}();return(0,i.Z)((function(){E&&b(E)}),[E]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,x]),tabValues:x}}var f=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function j(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,i=e.tabValues,l=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(c(n),s(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var o,s=l.indexOf(e.currentTarget)-1;t=null!=(o=l[s])?o:l[l.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},o,{className:(0,r.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,r=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=o.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=x(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(j,Object.assign({},e,n)),(0,b.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,f.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>d,O2:()=>l,SQ:()=>c});t(67294);var a=t(74866),r=t(85162),o=t(95665),s=t.n(o),i=t(85893);function l(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,o=t.end,s=t.fname;if(e.type===d)return d({url:a,start:r,end:o,language:n,fname:s});return e}(e,t)})),1==n.length?(0,i.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function d(e){var n=e.url,t=e.start,a=e.end,r=e.language,o=e.fname,l=n+"#";return t&&a&&(l+="L"+t+"-L"+a+"#"),(0,i.jsx)(s(),{language:r,fname:o,children:l})}},80359:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/donation-7cf65e5e131274fd1ae9aa34bc465bb8.png"}}]);