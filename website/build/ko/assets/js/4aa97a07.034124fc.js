"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3536],{96997:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=t(85893),r=t(11151),s=t(77229),l=t(74866),i=t(85162);const c={id:"prototyping",sidebar_label:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"},o="\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",u={id:"sdk/rust/building/prototyping",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",description:"\ucee8\ud2b8\ub799\ud2b8\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcc0\uacbd\ud558\uace0 \ub2e4\uc2dc \ubc30\ud3ec\ud558\uba74 \ub2e4\uc74c \uc624\ub958\uac00 \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/building/prototyping.md",sourceDirName:"sdk/rust/building",slug:"/sdk/rust/building/prototyping",permalink:"/ko/sdk/rust/building/prototyping",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/building/prototyping.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"prototyping",sidebar_label:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551",title:"\ucee8\ud2b8\ub799\ud2b8 \uc5c5\uadf8\ub808\uc774\ub4dc: \uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"},sidebar:"tools",previous:{title:"\uae30\ubcf8 \uc9c0\uce68",permalink:"/ko/sdk/rust/building/basics"},next:{title:"\uc0ac\ud6c4 \ucc98\ub9ac \ub3c4\uad6c",permalink:"/ko/sdk/rust/building/post-processing"}},d={},h=[{value:"\uc65c \uc774\ub7f0 \uc77c\uc774 \ubc1c\uc0dd\ud560\uae4c\uc694?",id:"\uc65c-\uc774\ub7f0-\uc77c\uc774-\ubc1c\uc0dd\ud560\uae4c\uc694",level:3},{value:"\uc774\ub7ec\ud55c \uc624\ub958\ub97c \ubc29\uc9c0\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694?",id:"\uc774\ub7ec\ud55c-\uc624\ub958\ub97c-\ubc29\uc9c0\ud558\ub824\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c-\ud560\uae4c\uc694",level:3},{value:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551: \ud56d\uc0c1 \ubaa8\ub4e0 \ud56d\ubaa9 \uc0ad\uc81c",id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551-\ud56d\uc0c1-\ubaa8\ub4e0-\ud56d\ubaa9-\uc0ad\uc81c",level:2},{value:"1. Deploying on a new account each time",id:"1-deploying-on-a-new-account-each-time",level:3},{value:"2. Deleting &amp; Recreating Contract Account",id:"2-deleting--recreating-contract-account",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551",children:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551"}),"\n",(0,a.jsx)(n.p,{children:"\ucee8\ud2b8\ub799\ud2b8\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcc0\uacbd\ud558\uace0 \ub2e4\uc2dc \ubc30\ud3ec\ud558\uba74 \ub2e4\uc74c \uc624\ub958\uac00 \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.p,{children:"Cannot deserialize the contract state."}),"\n",(0,a.jsx)(n.h3,{id:"\uc65c-\uc774\ub7f0-\uc77c\uc774-\ubc1c\uc0dd\ud560\uae4c\uc694",children:"\uc65c \uc774\ub7f0 \uc77c\uc774 \ubc1c\uc0dd\ud560\uae4c\uc694?"}),"\n",(0,a.jsx)(n.p,{children:"\ucee8\ud2b8\ub799\ud2b8\uac00 \uc2e4\ud589\ub418\uba74, NEAR \ub7f0\ud0c0\uc784\uc740 \ub514\uc2a4\ud06c\uc5d0\uc11c \uc9c1\ub82c\ud654\ub41c \uc0c1\ud0dc\ub97c \uc77d\uace0 \ud604\uc7ac \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub85c\ub4dc\ub97c \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \ucf54\ub4dc\uac00 \ubcc0\uacbd\ub418\uc5c8\uc9c0\ub9cc \uc9c1\ub82c\ud654\ub41c \uc0c1\ud0dc\uac00 \ub3d9\uc77c\ud558\uac8c \uc720\uc9c0\ub418\uba74, \ub7f0\ud0c0\uc784\uc740 \uc774\ub97c \uc218\ud589\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.h3,{id:"\uc774\ub7ec\ud55c-\uc624\ub958\ub97c-\ubc29\uc9c0\ud558\ub824\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c-\ud560\uae4c\uc694",children:"\uc774\ub7ec\ud55c \uc624\ub958\ub97c \ubc29\uc9c0\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560\uae4c\uc694?"}),"\n",(0,a.jsxs)(n.p,{children:["\uc544\uc9c1 \uc5f0\uad6c \ubc0f \uac1c\ubc1c \ub2e8\uacc4\uc5d0 \uc788\ub294 \uacbd\uc6b0, \ud504\ub85c\ud1a0\ud0c0\uc785\uc744 \ube4c\ub4dc\ud558\uace0 \ub85c\uceec \ub610\ub294 ",(0,a.jsx)(n.a,{href:"/concepts/basics/networks",children:"\ud14c\uc2a4\ud2b8\ub137"}),"\uc5d0 \ubc30\ud3ec\ud558\uba74 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uc218\uc815\ud560 \ub54c \uc774\uc804 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ubaa8\ub450 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc218\ud589\ud558\ub294 \uba87 \uac00\uc9c0 \ubc29\ubc95\uc740 \uc544\ub798\ub97c \ucc38\uace0\ud558\uc138\uc694."]}),"\n",(0,a.jsxs)(n.p,{children:["When you're ready to deploy a more stable contract, there are a couple of ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/release/upgrade#migrating-the-state",children:"production strategies"}),' that will help you update the contract state without deleting it all. And once your contract graduates from "trusted mode" (when maintainers control a ',(0,a.jsx)(n.a,{href:"/concepts/protocol/access-keys",children:"Full Access key"}),") to community-governed mode (no more Full Access keys), you can set up your contract to ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/release/upgrade#programmatic-update",children:"upgrade itself"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"\uc2e0\uc18d\ud55c-\ud504\ub85c\ud1a0\ud0c0\uc774\ud551-\ud56d\uc0c1-\ubaa8\ub4e0-\ud56d\ubaa9-\uc0ad\uc81c",children:"\uc2e0\uc18d\ud55c \ud504\ub85c\ud1a0\ud0c0\uc774\ud551: \ud56d\uc0c1 \ubaa8\ub4e0 \ud56d\ubaa9 \uc0ad\uc81c"}),"\n",(0,a.jsx)(n.p,{children:"\ubaa8\ub4e0 \uacc4\uc815 \uc0c1\ud0dc\ub97c \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 \ub450 \uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Deploying on a new account each time"}),"\n",(0,a.jsx)(n.li,{children:"\ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815 \uc0ad\uc81c & \uc7ac\uc0dd\uc131"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\ub450 \uacbd\uc6b0 \ubaa8\ub450, \ub2e4\uc74c \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/near-examples/rust-status-message",children:"rust-status-message"})," \uc608\uc81c \ucee8\ud2b8\ub799\ud2b8\uc758 \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(s.O2,{children:(0,a.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/rust-status-message/blob/b5fa6f2a30559d56a3a3ea52da8c26c5d3907606/src/lib.rs",start:"5",end:"29"})})}),"\n",(0,a.jsx)(n.p,{children:"Let's say you deploy this contract to testnet, then call it with:"}),"\n",(0,a.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near call [contract] set_status \'{"message": "lol"}\' --accountId you.testnet\nnear view [contract] get_status \'{"account_id": "you.testnet"}\'\n'})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near contract call-function as-transaction [contract] set_status json-args '{\"message\": \"lol\"}' prepaid-gas '30 TeraGas' attached-deposit '0 NEAR' sign-as you.testnet network-config testnet sign-with-keychain send\n\nnear contract call-function as-read-only [contract] get_status text-args '{\"account_id\": \"you.testnet\"}' network-config testnet now\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["This will return the message that you set with the call to ",(0,a.jsx)(n.code,{children:"set_status"}),", in this case ",(0,a.jsx)(n.code,{children:'"lol"'}),"."]}),"\n",(0,a.jsx)(n.p,{children:"\uc774 \uc2dc\uc810\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub294 \ubc30\ud3ec\ub418\uace0 \uba87 \uac00\uc9c0 \uc0c1\ud0dc\ub97c \uac00\uc9d1\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.p,{children:"\uc774\uc81c \uac01 \uacc4\uc815\uc5d0 \ub300\ud574 \ub450 \uc885\ub958\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub3c4\ub85d \ucee8\ud2b8\ub799\ud2b8\ub97c \ubcc0\uacbd\ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct StatusMessage {\n    taglines: LookupMap<AccountId, String>,\n    bios: LookupMap<AccountId, String>,\n}\n\nimpl Default for StatusMessage {\n    fn default() -> Self {\n        Self {\n            taglines: LookupMap::new(b"r"),\n            bios: LookupMap::new(b"b"),\n        }\n    }\n}\n\n#[near_bindgen]\nimpl StatusMessage {\n    pub fn set_tagline(&mut self, message: String) {\n        let account_id = env::signer_account_id();\n        self.taglines.insert(&account_id, &message);\n    }\n\n    pub fn get_tagline(&self, account_id: AccountId) -> Option<String> {\n        return self.taglines.get(&account_id);\n    }\n\n    pub fn set_bio(&mut self, message: String) {\n        let account_id = env::signer_account_id();\n        self.bios.insert(&account_id, &message);\n    }\n\n    pub fn get_bio(&self, account_id: AccountId) -> Option<String> {\n        return self.bios.get(&account_id);\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\ub2e4\uc2dc \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ube4c\ub4dc \ubc0f \ubc30\ud3ec\ud558\uba74\uc11c, \uc0c8 ",(0,a.jsx)(n.code,{children:"taglines"}),"\uc774 \uc774\uc804 ",(0,a.jsx)(n.code,{children:"records"})," LookupMap(",(0,a.jsx)(n.code,{children:'LookupMap::new(b"r".to_vec())'}),"\uc5d0 \uc758\ud574 \uc124\uc815\ub41c \uc811\ub450\uc0ac ",(0,a.jsx)(n.code,{children:"r"}),")\uacfc \uac19\uc740 \uc811\ub450\uc0ac\ub97c \uac00\uc9c0\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 ",(0,a.jsx)(n.code,{children:"you.testnet"}),"\uc5d0 \ub300\ud55c \ud0dc\uadf8\ub77c\uc778\uc740 ",(0,a.jsx)(n.code,{children:'"lol"'}),"\uc774 \ub418\uc5b4\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\uace0 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub300\ud574 ",(0,a.jsx)(n.code,{children:"near view"}),'\ub97c \uc2e4\ud589\ud558\uba74, "Cannot deserialize" \uba54\uc2dc\uc9c0\uac00 \ub098\ud0c0\ub0a0 \uac83\uc785\ub2c8\ub2e4. \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub098\uc694?']}),"\n",(0,a.jsx)(n.h3,{id:"1-deploying-on-a-new-account-each-time",children:"1. Deploying on a new account each time"}),"\n",(0,a.jsxs)(n.p,{children:["When first getting started with a new project, the fastest way to deploy a contract is ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli#near-create-account",children:"creating an account"})," and ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli#near-deploy",children:"deploying the contract"})," into it using ",(0,a.jsx)(n.code,{children:"NEAR CLI"}),"."]}),"\n",(0,a.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"  near create-account <account-id> --useFaucet\n  near deploy <account-id> ./path/to/compiled.wasm\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near account create-account sponsor-by-faucet-service <my-new-dev-account>.testnet autogenerate-new-keypair save-to-keychain network-config testnet create\n\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"\uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc791\uc5c5\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Creates a new testnet account pre-funded with 10N from the faucet"}),"\n",(0,a.jsxs)(n.li,{children:["\uc774 \uacc4\uc815\uc5d0 \ub300\ud55c \uac1c\uc778 \ud0a4\ub97c ",(0,a.jsx)(n.code,{children:"~/.near-credentials"})," \ud3f4\ub354\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.li,{children:"\uc774 \uacc4\uc815\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"2-deleting--recreating-contract-account",children:"2. Deleting & Recreating Contract Account"}),"\n",(0,a.jsx)(n.p,{children:"Another option to start from scratch is to delete the account and recreate it."}),"\n",(0,a.jsxs)(l.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"near-cli",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Delete sub-account"',children:"near delete app-name.you.testnet you.testnet\n"})})}),(0,a.jsx)(i.Z,{value:"near-cli-rs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Delete sub-account"',children:"near account delete-account app-name.you.testnet beneficiary you.testnet network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\uc774\ub807\uac8c \ud558\uba74 ",(0,a.jsx)(n.code,{children:"app-name.you.testnet"})," \uacc4\uc815\uc5d0 \ub0a8\uc544 \uc788\ub294 \ubaa8\ub4e0 \uc790\uae08\uc774 ",(0,a.jsx)(n.code,{children:"you.testnet"}),"\ub85c \ubcf4\ub0b4\uc9c0\uace0, ",(0,a.jsx)(n.code,{children:"app-name.you.testnet"}),"\uc5d0 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8\ub294 \uc0c1\ud0dc\ub97c \ud3ec\ud568\ud55c \ubaa8\ub4e0 \uac83\uc774 \uc0ad\uc81c\ub429\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.p,{children:"\uc774\uc81c \ud558\uc704 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uace0, \uc704\uc758 \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub2e4\uc2dc \ubc30\ud3ec\ud558\uba74 \ucc98\uc74c \ubc30\ud3ec\ud588\uc744 \ub54c\uc640 \uac19\uc774 \ube48 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4."})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),s=t(12466),l=t(16550),i=t(20469),c=t(91980),o=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,l.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,c._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(s.location.search);n.set(i,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[i,s])]}function f(e){var n,t,r,s,l=e.defaultValue,c=e.queryString,o=void 0!==c&&c,d=e.groupId,f=h(e),b=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:f})})),m=b[0],v=b[1],x=g({queryString:o,groupId:d}),j=x[0],y=x[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],_=w[1],I=function(){var e=null!=j?j:k;return p({value:e,tabValues:f})?e:null}();return(0,i.Z)((function(){I&&v(I)}),[I]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),_(e)}),[y,_,f]),tabValues:f}}var b=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){var n=e.className,t=e.block,a=e.selectedValue,l=e.selectValue,i=e.tabValues,c=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(o(n),l(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;t=null!=(s=c[l])?s:c[c.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",m.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(x,Object.assign({},e,n)),(0,v.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,b.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>u,O2:()=>c,SQ:()=>o});t(67294);var a=t(74866),r=t(85162),s=t(95665),l=t.n(s),i=t(85893);function c(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,l=t.fname;if(e.type===u)return u({url:a,start:r,end:s,language:n,fname:l});return e}(e,t)})),1==n.length?(0,i.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,c=n+"#";return t&&a&&(c+="L"+t+"-L"+a+"#"),(0,i.jsx)(l(),{language:r,fname:s,children:c})}}}]);