"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1665],{30315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151),s=n(71183);n.p;const i=n.p+"assets/images/create-testnet-wallet-account-6bcfc4b15c7ff93126ae723be2ab3701.png",l={sidebar_position:4,sidebar_label:"Linkdrop \ucee8\ud2b8\ub799\ud2b8",title:"\uc0ac\uc6a9 \uc911\uc778 Linkdrop \ucee8\ud2b8\ub799\ud2b8 \uc18c\uac1c"},o="Linkdrop \ucee8\ud2b8\ub799\ud2b8",c={id:"tutorials/crosswords/intermediate/linkdrop",title:"\uc0ac\uc6a9 \uc911\uc778 Linkdrop \ucee8\ud2b8\ub799\ud2b8 \uc18c\uac1c",description:"\uc6b0\ub9ac\ub294 linkdrop \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud558\uae30 \uc704\ud574, \uc57d\uac04 \ub2e4\ub978 \uc774\uc57c\uae30\ub97c \ud560 \uac83\uc785\ub2c8\ub2e4.  \uba3c\uc800 \uc774 \ucee8\ud2b8\ub799\ud2b8\uc640 \uadf8 \ubaa9\uc801\uc744 \uc774\ud574\ud55c \ub2e4\uc74c \uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uba54\uc11c\ub4dc \ud638\ucd9c\uc5d0 \ub300\ud574 \ub17c\uc758\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uc88b\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/03-intermediate/03-linkdrop.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/linkdrop",permalink:"/ko/tutorials/crosswords/intermediate/linkdrop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/03-linkdrop.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Linkdrop \ucee8\ud2b8\ub799\ud2b8",title:"\uc0ac\uc6a9 \uc911\uc778 Linkdrop \ucee8\ud2b8\ub799\ud2b8 \uc18c\uac1c"},sidebar:"tutorials",previous:{title:"\uc2dc\ub4dc \ubb38\uad6c \ub85c\uc9c1",permalink:"/ko/tutorials/crosswords/intermediate/use-seed-phrase"},next:{title:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \ub4f1",permalink:"/ko/tutorials/crosswords/intermediate/cross-contract-calls"}},u={},d=[{value:"\ud14c\uc2a4\ud2b8\ub137",id:"\ud14c\uc2a4\ud2b8\ub137",level:2},{value:"\uba54\uc778\ub137",id:"\uba54\uc778\ub137",level:2},{value:"\uac04\ub2e8\ud55c \ucf5c\ubc31",id:"\uac04\ub2e8\ud55c-\ucf5c\ubc31",level:2},{value:"<code>create_account</code> \uba54\uc11c\ub4dc",id:"create_account-\uba54\uc11c\ub4dc",level:3},{value:"\ucf5c\ubc31",id:"\ucf5c\ubc31",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"linkdrop-\ucee8\ud2b8\ub799\ud2b8",children:"Linkdrop \ucee8\ud2b8\ub799\ud2b8"}),"\n",(0,r.jsx)(t.p,{children:"\uc6b0\ub9ac\ub294 linkdrop \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud574 \uc774\uc57c\uae30\ud558\uae30 \uc704\ud574, \uc57d\uac04 \ub2e4\ub978 \uc774\uc57c\uae30\ub97c \ud560 \uac83\uc785\ub2c8\ub2e4.  \uba3c\uc800 \uc774 \ucee8\ud2b8\ub799\ud2b8\uc640 \uadf8 \ubaa9\uc801\uc744 \uc774\ud574\ud55c \ub2e4\uc74c \uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uba54\uc11c\ub4dc \ud638\ucd9c\uc5d0 \ub300\ud574 \ub17c\uc758\ud558\ub294 \uac83\uc774 \uac00\uc7a5 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near/near-linkdrop",children:"linkdrop \ucee8\ud2b8\ub799\ud2b8"}),"\ub294 \ud14c\uc2a4\ud2b8\ub137\uacfc \uba54\uc778\ub137 \ub124\ud2b8\uc6cc\ud06c\uc758 \ucd5c\uc0c1\uc704 \uacc4\uc815\uc73c\ub85c \uac01\uac01 \uc54c\ub824\uc9c4 \uacc4\uc815 ",(0,r.jsx)(t.code,{children:"testnet"}),"\uacfc ",(0,r.jsx)(t.code,{children:"near"}),"\uc5d0 \ubc30\ud3ec\ub429\ub2c8\ub2e4. (\ub204\uad6c\ub098 linkdrop \uc2a4\ud0c0\uc77c\uc758 \ucee8\ud2b8\ub799\ud2b8\ub97c \ub2e4\ub978 \uacf3\uc5d0\uc11c \ub9cc\ub4e4 \uc218 \uc788\uc9c0\ub9cc, \uc5ec\uae30\uc5d0 \ud45c\uc2dc\ub41c \ucee8\ud2b8\ub799\ud2b8\ub294 \ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc774 \ud328\ud134\ud654\ud55c \uc8fc\uc694 \ucee8\ud2b8\ub799\ud2b8\uc785\ub2c8\ub2e4.)"]}),"\n",(0,r.jsx)(t.h2,{id:"\ud14c\uc2a4\ud2b8\ub137",children:"\ud14c\uc2a4\ud2b8\ub137"}),"\n",(0,r.jsx)(t.p,{children:"\ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0\ub294 \ud2b9\ubcc4\ud55c \uac83\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \uc0dd\uc131\ud560 \ub54c \uac1c\ubc1c\uc790\ub85c\uc11c \uc2e4\uc81c \ube44\uc6a9\uc740 \uc5c6\uc73c\ubbc0\ub85c \ud3b8\uc758\uc5d0 \ub530\ub77c \uc790\uc720\ub86d\uac8c \uc0dd\uc131\ud558\uac70\ub098 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(t.p,{children:"\uc0ac\uc6a9\uc790\uac00 NEAR Wallet\uc5d0\uc11c \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0 \uac00\uc785\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."}),"\n",(0,r.jsx)("img",{src:i,width:"400"}),"\n",(0,r.jsx)(t.p,{children:"\uc774 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc774 \uc5b4\ub5bb\uac8c \uc0dd\uc131\ub418\ub294\uc9c0 \ub17c\uc758\ud574 \ubd05\uc2dc\ub2e4."}),"\n",(0,r.jsxs)(t.p,{children:["\uc0c8 \uacc4\uc815\uc740 ",(0,r.jsx)(t.code,{children:".testnet"}),"\ub85c \ub05d\ub0a9\ub2c8\ub2e4. \uc774\ub294 (",(0,r.jsx)(t.a,{href:"/ko/tutorials/crosswords/basics/add-functions-call#create-a-subaccount",children:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \uc55e\ubd80\ubd84"}),"\uc5d0\uc11c \ubc30\uc6b4 \uac83\ucc98\ub7fc) ",(0,r.jsx)(t.code,{children:"testnet<code> \uacc4\uc815\uc774 <code>.vacant-name.testnet"}),"\uc774\ub77c\ub294 \ud558\uc704 \uacc4\uc815(sub-account)\uc744 \uc0dd\uc131\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(t.p,{children:"\uc774 \ud558\uc704 \uacc4\uc815\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0\ub294 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"testnet"})," \uacc4\uc815\uc5d0 \ub300\ud55c \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,r.jsx)(t.code,{children:"CreateAccount"})," Action\uc73c\ub85c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"testnet"})," \uacc4\uc815\uc5d0 \ubc30\ud3ec\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c, Promise\ub97c \ubc18\ud658\ud558\ub294 \ube44\ub3d9\uae30 \uba54\uc11c\ub4dc\uc778 ",(0,r.jsx)(t.code,{children:"CreateAccount"})," Action\uc744 \ud638\ucd9c\ud569\ub2c8\ub2e4. (More info about writing a ",(0,r.jsxs)(t.a,{href:"/ko/build/smart-contracts/anatomy/actions#create-a-sub-account",children:[(0,r.jsx)(t.code,{children:"CreateAccount"})," Promise"]}),")"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:['(NEAR CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c8 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\ub294 \uc544\ub798 \uc608\uc5d0\uc11c\ub294, \uba54\uc778\ub137\uc758 \ucd5c\uc0c1\uc704 "near" \uacc4\uc815\uc5d0 \ubc30\ud3ec\ub418\ub294 linkdrop \ucee8\ud2b8\ub799\ud2b8 \ub0b4 ',(0,r.jsx)(t.code,{children:"CreateAccount"}),"\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4.)"]}),"\n",(0,r.jsx)(t.h2,{id:"\uba54\uc778\ub137",children:"\uba54\uc778\ub137"}),"\n",(0,r.jsxs)(t.p,{children:["\uba54\uc778\ub137\uc5d0\uc11c ",(0,r.jsx)(t.code,{children:"near"})," \uacc4\uc815\uc5d0\ub294 linkdrop \ucee8\ud2b8\ub799\ud2b8\ub3c4 \ubc30\ud3ec\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:["Using NEAR CLI, a person can create a ",(0,r.jsx)(t.code,{children:"mainnet"})," account by calling the linkdrop contract, like shown below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near contract call-function as-transaction near create_account json-args \'{"new_account_id": "aloha.near", "new_public_key": "3cQ...tAT"}\' prepaid-gas \'300.0 Tgas\' attached-deposit \'15 NEAR\' sign-as mike.near network-config mainnet sign-with-legacy-keychain\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The above command calls the ",(0,r.jsx)(t.code,{children:"create_account"})," method on the account ",(0,r.jsx)(t.code,{children:"near"}),", and would create ",(0,r.jsx)(t.code,{children:"aloha.near"})," ",(0,r.jsx)(t.strong,{children:"if it's available"}),", funding it with 15 \u24c3."]}),"\n",(0,r.jsxs)(t.p,{children:["We'll want to write a smart contract that calls that same method. However, things get interesting because it's possible ",(0,r.jsx)(t.code,{children:"aloha.near"})," is already taken, so we'll need to learn how to handle that."]}),"\n",(0,r.jsx)(t.h2,{id:"\uac04\ub2e8\ud55c-\ucf5c\ubc31",children:"\uac04\ub2e8\ud55c \ucf5c\ubc31"}),"\n",(0,r.jsxs)(t.h3,{id:"create_account-\uba54\uc11c\ub4dc",children:[(0,r.jsx)(t.code,{children:"create_account"})," \uba54\uc11c\ub4dc"]}),"\n",(0,r.jsxs)(t.p,{children:["Here, we'll show the implementation of the ",(0,r.jsx)(t.code,{children:"create_account"})," method. Note the ",(0,r.jsx)(t.code,{children:"#[payable]"})," macro, which allows this function to accept an attached deposit. (Remember in the CLI command we were attaching 15 \u24c3.)"]}),"\n",(0,r.jsx)(s.Ey,{language:"rust",start:"128",end:"152",url:"https://github.com/near/near-linkdrop/blob/master/src/lib.rs"}),"\n",(0,r.jsx)(t.p,{children:"The most important part of the snippet above is around the middle where there's:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"Promise::new(...)\n    ...\n    .then(\n        Self::ext(env::current_account_id())\n            .on_account_created(...)\n    )\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This translates to, \"we're going to attempt to perform an Action, and when we're done, please call myself at the method ",(0,r.jsx)(t.code,{children:"on_account_created"}),' so we can see how that went."']}),"\n",(0,r.jsxs)(t.admonition,{title:"This doesn't work",type:"caution",children:[(0,r.jsx)(t.p,{children:"Not infrequently, developers will attempt to do this in a smart contract:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'let creation_result = Promise::new("aloha.mike.near")\n  .create_account();\n\n// Check creation_result variable (can\'t do it!)\nif creation_result {...}\n\n'})}),(0,r.jsx)(t.p,{children:"In other programming languages promises might work like this, but we must use callbacks instead. :::"}),(0,r.jsx)(t.h3,{id:"\ucf5c\ubc31",children:"\ucf5c\ubc31"}),(0,r.jsx)(t.p,{children:"Now let's look at the callback:"}),(0,r.jsx)(s.Ey,{language:"rust",start:"199",end:"212",url:"https://github.com/near/near-linkdrop/blob/master/src/lib.rs"}),(0,r.jsxs)(t.p,{children:["This calls the private helper method ",(0,r.jsx)(t.code,{children:"is_promise_success"}),", which basically checks to see that there was only one promise result, because we only attempted one Promise:"]}),(0,r.jsx)(s.Ey,{language:"rust",start:"35",end:"45",url:"https://github.com/near/near-linkdrop/blob/master/src/lib.rs"}),(0,r.jsxs)(t.p,{children:["Note that the callback returns a boolean. This means when we modify our crossword puzzle to call the linkdrop contract on ",(0,r.jsx)(t.code,{children:"testnet"}),", we'll be able to determine if the account creation succeeded or failed."]}),(0,r.jsx)(t.p,{children:"And that's it! Now we've seen a method and a callback in action for a simple contract."}),(0,r.jsxs)(t.admonition,{title:"This is important Understanding cross-contract calls and callbacks is quite important in smart contract development.",type:"tip",children:[(0,r.jsx)(t.p,{children:"Since NEAR's transactions are asynchronous, the use of callbacks may be a new paradigm shift for smart contract developers from other ecosystems."}),(0,r.jsx)(t.p,{children:"Feel free to dig into the linkdrop contract and play with the ideas presented in this section."}),(0,r.jsx)(t.p,{children:"There are two additional examples that are helpful to look at:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/high-level/src/lib.rs",children:"\ub192\uc740 \uc218\uc900\uc758 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c"})," \u2014 \uc774\ub294 linkdrop \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ubcf8 \uac83\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/low-level/src/lib.rs",children:"\ub0ae\uc740 \uc218\uc900\uc758 \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c"}),"\u2014 \uc6b0\ub9ac\uac00 \uc5b8\uae09\ud55c \ud2b9\uc131\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ub2e4\ub978 \uc811\uadfc \ubc29\uc2dd\uc785\ub2c8\ub2e4. :::"]}),"\n"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.p,{children:"Next we'll modify the crossword puzzle contract to check for the signer's public key, which is how we now determine if they solved the puzzle correctly."})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),a=n(36905),s=n(12466),i=n(16550),l=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,i.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function f(e){var t,n,a,s,i=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,f=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),g=b[0],x=b[1],v=m({queryString:c,groupId:d}),j=v[0],w=v[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),y=k[0],_=k[1],N=function(){var e=null!=j?j:y;return p({value:e,tabValues:f})?e:null}();return(0,l.Z)((function(){N&&x(N)}),[N]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),_(e)}),[w,_,f]),tabValues:f}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,l=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=o.indexOf(e.currentTarget)+1;n=null!=(r=o[a])?r:o[0];break;case"ArrowLeft":var s,i=o.indexOf(e.currentTarget)-1;n=null!=(s=o[i])?s:o[o.length-1]}null==(t=n)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,Object.assign({},t,e)),(0,x.jsx)(j,Object.assign({},t,e))]})}function k(e){var t=(0,b.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>b,SQ:()=>f});var r=n(67294),a=n(74866),s=n(85162),i=n(74165),l=n(15861),o=n(1841),c=n.n(o),u=n(85893);function d(){return(d=(0,l.Z)((0,i.Z)().mark((function e(t,n,r){var a,s,l,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return l=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):l.length,l=l.slice(n,r),o=l.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",l.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,s=e.language,i=e.fname,l=e.metastring,o=(0,r.useState)("Loading..."),h=o[0],p=o[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],s=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+s+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:s,metastring:l+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,i=n.fname;if(e.type===b)return b({url:r,start:a,end:s,language:t,fname:i});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function b(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,i=e.metastring;return h({url:t,start:n,end:r,language:a,fname:s,metastring:i})}}}]);