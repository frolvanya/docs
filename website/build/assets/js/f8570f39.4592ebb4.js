"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9482],{75722:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var t=n(85893),a=n(11151),s=n(74866),l=n(85162),i=n(77229);const o={id:"basics",title:"Modules, Types & Structs"},c=void 0,u={id:"develop/contracts/basics",title:"Modules, Types & Structs",description:"When writing smart contracts you will leverage common programming concepts such:",source:"@site/../docs/2.develop/contracts/basics.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/basics",permalink:"/develop/contracts/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/basics.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1709133591e3,frontMatter:{id:"basics",title:"Modules, Types & Structs"},sidebar:"build",previous:{title:"Quickstart \u2728",permalink:"/develop/contracts/quickstart"},next:{title:"The Contract Class",permalink:"/develop/contracts/anatomy"}},d={},h=[{value:"Modules",id:"modules",level:2},{value:"Native Types",id:"native-types",level:2},{value:"SDK Collections",id:"sdk-collections",level:2},{value:"Internal Structures",id:"internal-structures",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"When writing smart contracts you will leverage common programming concepts such:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#modules",children:"Modules"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#data-types",children:"Data types & Collections"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#classes--structures",children:"Classes & Structures"})}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"modules",children:"Modules"}),"\n",(0,t.jsx)(r.p,{children:"Modules help you to organize your code and reuse third-party libraries."}),"\n",(0,t.jsxs)(r.p,{children:["The main module you will use in your contract will be the ",(0,t.jsx)(r.strong,{children:"NEAR SDK"}),", which: gives you access to the ",(0,t.jsx)(r.a,{href:"/develop/contracts/environment/",children:"execution environment"}),", allows you to ",(0,t.jsx)(r.a,{href:"/develop/contracts/crosscontract",children:"call other contracts"}),", ",(0,t.jsx)(r.a,{href:"/develop/contracts/actions",children:"transfer tokens"}),", and much more."]}),"\n",(0,t.jsxs)(i.O2,{children:[(0,t.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,t.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"1",end:"3"})}),(0,t.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"1",end:"6"})})]}),"\n",(0,t.jsx)(r.admonition,{title:"Using external libraries",type:"info",children:(0,t.jsxs)(r.p,{children:["As a general rule of thumb for Rust, anything that supports ",(0,t.jsx)(r.code,{children:"wasm32-unknown-unknown"})," will be compatible with your smart contract.\nHowever, we do have a size limit for a compiled contract binary which is ~4.19 MB, so it is possible that certain large libraries will not be compatible."]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"native-types",children:"Native Types"}),"\n",(0,t.jsxs)(r.p,{children:["When writing contracts you have access to ",(0,t.jsx)(r.strong,{children:"all"})," the language's ",(0,t.jsx)(r.strong,{children:"native types"}),"."]}),"\n",(0,t.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(l.Z,{value:"\ud83c\udf10 JavaScript",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"number, bigint, string, [], {} ...\n"})})}),(0,t.jsx)(l.Z,{value:"\ud83e\udd80 Rust",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-rust",children:"u8, u16, u32, u64, u128, i8, i16, i32, i64, i128, Vec<T>, HashMap<K,V> ...\n"})})})]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Always prefer ",(0,t.jsx)(r.strong,{children:"native"})," types in the contract's ",(0,t.jsx)(r.strong,{children:"interface"}),". The only exception is values larger than ",(0,t.jsx)(r.code,{children:"52 bytes"})," (such as ",(0,t.jsx)(r.code,{children:"u64"})," and ",(0,t.jsx)(r.code,{children:"u128"}),"), for which string-like alternatives are preferred."]})}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["Always make sure to check for ",(0,t.jsx)(r.strong,{children:"underflow"})," and ",(0,t.jsx)(r.strong,{children:"overflow"})," errors. For Rust, simply add ",(0,t.jsx)(r.code,{children:"overflow-checks=true"})," in your ",(0,t.jsx)(r.code,{children:"Cargo"}),"."]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"sdk-collections",children:"SDK Collections"}),"\n",(0,t.jsxs)(r.p,{children:["Besides the native types, the NEAR SDK implements ",(0,t.jsx)(r.a,{href:"/develop/contracts/storage",children:"collections"})," such as ",(0,t.jsx)(r.code,{children:"Vector"})," and ",(0,t.jsx)(r.code,{children:"UnorderedMap"}),"\nto help you store complex data in the contract's state."]}),"\n",(0,t.jsxs)(i.O2,{children:[(0,t.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,t.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"8",end:"11"})}),(0,t.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,t.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"33",end:"36"})})]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Always prefer ",(0,t.jsx)(r.strong,{children:"SDK collections"})," over native ones in the contract's ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"/develop/contracts/anatomy#defining-the-state",children:"attributes (state)"})}),"."]})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"internal-structures",children:"Internal Structures"}),"\n",(0,t.jsx)(r.p,{children:"You can define and instantiate complex objects through classes and structures."}),"\n",(0,t.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(l.Z,{value:"\ud83c\udf10 JavaScript",children:(0,t.jsx)(i.Ey,{fname:"model.ts",language:"ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/model.ts",start:"3",end:"11"})}),(0,t.jsx)(l.Z,{value:"\ud83e\udd80 Rust",children:(0,t.jsx)(i.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/donation.rs",start:"11",end:"16"})})]}),"\n",(0,t.jsx)(r.p,{children:"\ud83e\udd80 Notice that the class is decorated with multiple macros:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"BorshDeserialize"})," & ",(0,t.jsx)(r.code,{children:"BorshSerialize"})," allow the structure to be read and\nwritten into the contract's state"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"Serialize"})," & ",(0,t.jsx)(r.code,{children:"Deserialize"})," allow the structure to be used as an input type and\nreturn type of the contract's methods."]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["If you are curious on why the (de)serialization is needed read our ",(0,t.jsx)(r.a,{href:"/develop/contracts/serialization",children:"serialization documentation"})]})})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>l});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){var r=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>w});var t=n(67294),a=n(36905),s=n(12466),l=n(16550),i=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function p(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function m(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,s=(0,l.k6)(),i=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,t.useCallback)((function(e){if(i){var r=new URLSearchParams(s.location.search);r.set(i,e),s.replace(Object.assign({},s.location,{search:r.toString()}))}}),[i,s])]}function v(e){var r,n,a,s,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,v=h(e),f=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:v})})),b=f[0],x=f[1],g=m({queryString:c,groupId:d}),j=g[0],y=g[1],w=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(r),a=n[0],s=n[1],[a,(0,t.useCallback)((function(e){r&&s.set(e)}),[r,s])]),S=w[0],k=w[1],I=function(){var e=null!=j?j:S;return p({value:e,tabValues:v})?e:null}();return(0,i.Z)((function(){I&&x(I)}),[I]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),k(e)}),[y,k,v]),tabValues:v}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function g(e){var r=e.className,n=e.block,t=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var r=e.currentTarget,n=o.indexOf(r),a=i[n].value;a!==t&&(c(r),l(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;n=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;n=null!=(s=o[l])?s:o[o.length-1]}null==(r=n)||r.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:i.map((function(e){var r=e.value,n=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function j(e){var r=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var l=s.find((function(e){return e.props.value===a}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function y(e){var r=v(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(g,Object.assign({},e,r)),(0,x.jsx)(j,Object.assign({},e,r))]})}function w(e){var r=(0,f.Z)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(r))}},77229:(e,r,n)=>{n.d(r,{Ey:()=>u,O2:()=>o,SQ:()=>c});n(67294);var t=n(74866),a=n(85162),s=n(95665),l=n.n(s),i=n(85893);function o(e){var r=e.children;return Array.isArray(r)||(r=[r]),(0,i.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:r.map((function(e,r){return(0,i.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var r=e.children,n=e.language;return Array.isArray(r)||(r=[r]),r=r.map((function(e){return function(e,r){var n=e.props,t=(n.children,n.url),a=n.start,s=n.end,l=n.fname;if(e.type===u)return u({url:t,start:a,end:s,language:r,fname:l});return e}(e,n)})),1==r.length?(0,i.jsx)(a.Z,{value:0,label:r[0].props.fname,children:r[0]}):(0,i.jsx)(t.Z,{className:"file-tabs",children:r.map((function(e,r){return(0,i.jsx)(a.Z,{value:r,label:e.props.fname,children:e})}))})}function u(e){var r=e.url,n=e.start,t=e.end,a=e.language,s=e.fname,o=r+"#";return n&&t&&(o+="L"+n+"-L"+t+"#"),(0,i.jsx)(l(),{language:a,fname:s,children:o})}}}]);