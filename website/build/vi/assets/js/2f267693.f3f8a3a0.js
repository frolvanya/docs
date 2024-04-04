"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2086],{33098:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),s=t(74866),l=t(85162);const o={},i=void 0,u={id:"primitives/nft/web-app/buy",title:"buy",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/nft/web-app/buy.md",sourceDirName:"7.primitives/nft/web-app",slug:"/primitives/nft/web-app/buy",permalink:"/vi/primitives/nft/web-app/buy",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/nft/web-app/buy.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{}},c={},d=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(s.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,r.jsxs)(l.Z,{value:"Paras",label:"Paras",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "x.paras.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_buy\',\n  args: {\n    token_series_id: "299102",\n    receiver_id: "bob.near",\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 205740000000000000000000 // attached deposit in yoctoNEAR, covers NFT price + storage cost\n});\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["The ",(0,r.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"299102:1"\n'})})]})]}),(0,r.jsxs)(l.Z,{value:"Mintbase",label:"Mintbase",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "simple.market.mintbase1.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'buy\',\n  args: {\n    nft_contract_id: "rubennnnnnnn.mintbase1.near",\n    token_id: "38"\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 1000000000000000000000 // attached deposit in yoctoNEAR, covers NFT price + storage cost (optional)\n});\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["The ",(0,r.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "payout": {\n    "rub3n.near": "889200000000000000000",\n    "rubenm4rcus.near": "85800000000000000000"\n  }\n}\n'})})]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Check how to do this using the ",(0,r.jsx)(n.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/sdk/buy",children:(0,r.jsx)(n.code,{children:"Mintbase JS"})})]})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),s=t(12466),l=t(16550),o=t(20469),i=t(91980),u=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,l.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function b(e){var n,t,a,s,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,b=p(e),h=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:b})})),v=h[0],x=h[1],g=f({queryString:u,groupId:d}),j=g[0],y=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),T=w[0],k=w[1],N=function(){var e=null!=j?j:T;return m({value:e,tabValues:b})?e:null}();return(0,o.Z)((function(){N&&x(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),k(e)}),[y,k,b]),tabValues:b}}var h=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){var n=e.className,t=e.block,r=e.selectedValue,l=e.selectValue,o=e.tabValues,i=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var s,l=i.indexOf(e.currentTarget)-1;t=null!=(s=i[l])?s:i[i.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=b(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,Object.assign({},e,n)),(0,x.jsx)(j,Object.assign({},e,n))]})}function w(e){var n=(0,h.Z)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);