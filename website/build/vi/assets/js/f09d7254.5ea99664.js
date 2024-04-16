"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3741],{51395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(85893),a=n(11151),i=n(74866),u=n(85162);const s={sidebar_position:7,sidebar_label:"Receipt"},c="Receipt Structure",l={id:"build/data-infrastructure/lake-data-structures/receipt",title:"Receipt Structure",description:"Definition",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/6.data-infrastructure/lake-data-structures/receipt.mdx",sourceDirName:"2.build/6.data-infrastructure/lake-data-structures",slug:"/build/data-infrastructure/lake-data-structures/receipt",permalink:"/vi/build/data-infrastructure/lake-data-structures/receipt",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-data-structures/receipt.mdx",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Receipt"},sidebar:"build",previous:{title:"Transaction",permalink:"/vi/build/data-infrastructure/lake-data-structures/transaction"},next:{title:"ExecutionOutcome",permalink:"/vi/build/data-infrastructure/lake-data-structures/execution-outcome"}},o={},d=[{value:"Definition",id:"definition",level:2},{value:"<code>ReceiptView</code>",id:"receiptview",level:2},{value:"<code>ReceiptEnumView</code>",id:"receiptenumview",level:2},{value:"ActionReceipt",id:"actionreceipt",level:2},{value:"DataReceipt",id:"datareceipt",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h1,{id:"receipt-structure",children:[(0,r.jsx)(t.code,{children:"Receipt"})," Structure"]}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.p,{children:"Receipt is an internal transaction in NEAR Protocol."}),"\n",(0,r.jsx)(t.h2,{id:"receiptview",children:(0,r.jsx)(t.code,{children:"ReceiptView"})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(u.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:"pub struct ReceiptView {\n    pub predecessor_id: AccountId,\n    pub receiver_id: AccountId,\n    pub receipt_id: CryptoHash,\n\n    pub receipt: ReceiptEnumView,\n}\n"})})}),(0,r.jsx)(u.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"links=1",children:"export type Receipt = {\n  predecessorId: string;\n  receipt: ReceiptEnum;\n  receiptId: string;\n  receiverId: string;\n}\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"receiptenumview",children:(0,r.jsx)(t.code,{children:"ReceiptEnumView"})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(u.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",metastring:"links=1",children:'pub enum ReceiptEnumView {\n    Action {\n        signer_id: AccountId,\n        signer_public_key: PublicKey,\n        #[serde(with = "u128_dec_format")]\n        gas_price: Balance,\n        output_data_receivers: Vec<DataReceiverView>,\n        input_data_ids: Vec<CryptoHash>,\n        actions: Vec<ActionView>,\n    },\n    Data {\n        data_id: CryptoHash,\n        #[serde(with = "option_base64_format")]\n        data: Option<Vec<u8>>,\n    },\n}\n'})})}),(0,r.jsx)(u.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"links=1",children:"export type ReceiptEnum =\n  | {\n      Action: {\n        actions: Action[];\n        gasPrice: string;\n        inputDataIds: string[];\n        outputDataReceivers: string[];\n        signerId: string;\n        signerPublicKey: string;\n      };\n    }\n    | {\n      Data: {\n        data: string;\n        dataId: string;\n      };\n    };\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"actionreceipt",children:"ActionReceipt"}),"\n",(0,r.jsxs)(t.p,{children:["ActionReceipts hold info about what actions to perform. In the cross-contract calls some actions might happen only when specific data is available, such data is in the ",(0,r.jsx)(t.a,{href:"#datareceipt",children:"DataReceipts"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"datareceipt",children:"DataReceipt"}),"\n",(0,r.jsxs)(t.p,{children:["DataReceipts hold the data that is produced my ",(0,r.jsx)(t.code,{children:"Promise"})," during the cross-contract calls."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>u});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function u(e){var t=e.children,n=e.hidden,u=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,u),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(36905),i=n(12466),u=n(16550),s=n(20469),c=n(91980),l=n(67392),o=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,u.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,c._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(i.location.search);t.set(s,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[s,i])]}function v(e){var t,n,a,i,u=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,v=p(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:v})})),m=b[0],g=b[1],x=f({queryString:l,groupId:d}),j=x[0],w=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,o.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=y[0],V=y[1],R=function(){var e=null!=j?j:k;return h({value:e,tabValues:v})?e:null}();return(0,s.Z)((function(){R&&g(R)}),[R]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),V(e)}),[w,V,v]),tabValues:v}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],l=(0,i.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(l(t),u(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var i,u=c.indexOf(e.currentTarget)-1;n=null!=(i=c[u])?i:c[c.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:o},i,{className:(0,a.Z)("tabs__item",m.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var u=i.find((function(e){return e.props.value===a}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=v(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(x,Object.assign({},e,t)),(0,g.jsx)(j,Object.assign({},e,t))]})}function y(e){var t=(0,b.Z)();return(0,g.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>u});var r=n(67294);const a={},i=r.createContext(a);function u(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);