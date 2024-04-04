"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1406],{40078:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var t=r(85893),n=r(11151),l=r(74866),o=r(85162);const s={},i=void 0,u={id:"primitives/nft/near-cli/list-for-sale",title:"list-for-sale",description:"Method nftapprove of a NFT contract also calls the nfton_approve method in marketplace.paras.near as a callback.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/nft/near-cli/list-for-sale.md",sourceDirName:"7.primitives/nft/near-cli",slug:"/primitives/nft/near-cli/list-for-sale",permalink:"/zh-CN/primitives/nft/near-cli/list-for-sale",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/nft/near-cli/list-for-sale.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{}},c={},d=[];function f(e){const a={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(l.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,t.jsxs)(o.Z,{value:"Paras",label:"Paras",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'near call marketplace.paras.near storage_deposit \'{"receiver_id": "bob.near"}\' --accountId bob.near --deposit 0.00939\n\nnear call nft.primitives.near nft_approve \'{"token_id": "1e95238d266e5497d735eb30", "account_id": "marketplace.paras.near", "msg": {"price": "200000000000000000000000", "market_type": "sale", "ft_token_id": "near"}}\' --accountId bob.near\n'})}),(0,t.jsxs)(a.p,{children:["Method ",(0,t.jsx)(a.code,{children:"nft_approve"})," of a NFT contract also calls the ",(0,t.jsx)(a.code,{children:"nft_on_approve"})," method in ",(0,t.jsx)(a.code,{children:"marketplace.paras.near"})," as a callback."]})]}),(0,t.jsxs)(o.Z,{value:"Mintbase",label:"Mintbase",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'near call simple.market.mintbase1.near deposit_storage \'{"autotransfer": "true"}\' --accountId bob.near --deposit 0.00939\n\nnear call nft.primitives.near nft_approve \'{"token_id": "3c46b76cbd48e65f2fc88473", "account_id": "simple.market.mintbase1.near", "msg": {"price": "200000000000000000000000"}}\' --accountId bob.near\n'})}),(0,t.jsxs)(a.p,{children:["Method ",(0,t.jsx)(a.code,{children:"nft_approve"})," of a NFT contract also calls the ",(0,t.jsx)(a.code,{children:"nft_on_approve"})," method in ",(0,t.jsx)(a.code,{children:"simple.market.mintbase1.near"})," as a callback."]})]})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,a,r)=>{r.d(a,{Z:()=>o});r(67294);var t=r(36905);const n={tabItem:"tabItem_Ymn6"};var l=r(85893);function o(e){var a=e.children,r=e.hidden,o=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(n.tabItem,o),hidden:r,children:a})}},74866:(e,a,r)=>{r.d(a,{Z:()=>y});var t=r(67294),n=r(36905),l=r(12466),o=r(16550),s=r(20469),i=r(91980),u=r(67392),c=r(50012);function d(e){var a,r;return null!=(a=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((a=e.props)&&"object"==typeof a&&"value"in a))return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?a:[]}function f(e){var a=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=a?a:function(e){return d(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}(r);return function(e){var a=(0,u.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,r])}function p(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function b(e){var a=e.queryString,r=void 0!==a&&a,n=e.groupId,l=(0,o.k6)(),s=function(e){var a=e.queryString,r=void 0!==a&&a,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:n});return[(0,i._X)(s),(0,t.useCallback)((function(e){if(s){var a=new URLSearchParams(l.location.search);a.set(s,e),l.replace(Object.assign({},l.location,{search:a.toString()}))}}),[s,l])]}function v(e){var a,r,n,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,v=f(e),m=(0,t.useState)((function(){return function(e){var a,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(a=t.find((function(e){return e.default})))?a:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:v})})),h=m[0],g=m[1],x=b({queryString:u,groupId:d}),j=x[0],k=x[1],y=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(a),n=r[0],l=r[1],[n,(0,t.useCallback)((function(e){a&&l.set(e)}),[a,l])]),_=y[0],w=y[1],I=function(){var e=null!=j?j:_;return p({value:e,tabValues:v})?e:null}();return(0,s.Z)((function(){I&&g(I)}),[I]),{selectedValue:h,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),w(e)}),[k,w,v]),tabValues:v}}var m=r(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function x(e){var a=e.className,r=e.block,t=e.selectedValue,o=e.selectValue,s=e.tabValues,i=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,r=i.indexOf(a),n=s[r].value;n!==t&&(u(a),o(n))},d=function(e){var a,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,n=i.indexOf(e.currentTarget)+1;r=null!=(t=i[n])?t:i[0];break;case"ArrowLeft":var l,o=i.indexOf(e.currentTarget)-1;r=null!=(l=i[o])?l:i[i.length-1]}null==(a=r)||a.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},a),children:s.map((function(e){var a=e.value,r=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},l,{className:(0,n.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===a}),children:null!=r?r:a}),a)}))})}function j(e){var a=e.lazy,r=e.children,n=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){var o=l.find((function(e){return e.props.value===n}));return o?(0,t.cloneElement)(o,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,a){return(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==n})}))})}function k(e){var a=v(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",h.tabList),children:[(0,g.jsx)(x,Object.assign({},e,a)),(0,g.jsx)(j,Object.assign({},e,a))]})}function y(e){var a=(0,m.Z)();return(0,g.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(a))}},11151:(e,a,r)=>{r.d(a,{Z:()=>s,a:()=>o});var t=r(67294);const n={},l=t.createContext(n);function o(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);