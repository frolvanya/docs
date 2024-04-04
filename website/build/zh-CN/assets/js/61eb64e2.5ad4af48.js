"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9229],{47201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=t(85893),a=t(11151),o=t(74866),l=t(85162);const c={id:"lock",title:"Locking Accounts"},u=void 0,i={id:"develop/lock",title:"Locking Accounts",description:"Removing all full access keys from an account will effectively lock it.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/lock.md",sourceDirName:"2.develop",slug:"/develop/lock",permalink:"/zh-CN/develop/lock",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/lock.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,frontMatter:{id:"lock",title:"Locking Accounts"},sidebar:"build",previous:{title:"Updating Contracts",permalink:"/zh-CN/develop/upgrade"},next:{title:"Security",permalink:"/zh-CN/develop/contracts/security/welcome"}},s={},d=[{value:"How to Lock an Account",id:"how-to-lock-an-account",level:4},{value:"Why Locking an Account",id:"why-locking-an-account",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Removing all ",(0,r.jsx)(n.a,{href:"/zh-CN/tools/near-cli#near-delete-key-near-delete-key",children:"full access keys"})," from an account will effectively ",(0,r.jsx)(n.strong,{children:"lock it"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"When an account is locked nobody can perform transactions in the account's name (e.g. update the code or transfer money)."}),"\n",(0,r.jsx)(n.h4,{id:"how-to-lock-an-account",children:"How to Lock an Account"}),"\n",(0,r.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(l.Z,{value:"near-cli",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near keys <dev-account>\n# result: [access_key: {\"nonce\": ..., \"public_key\": '<key>'}]\n\nnear delete-key <dev-account> '<key>'\n"})})}),(0,r.jsx)(l.Z,{value:"near-cli-rs",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near account list-keys <dev-account> network-config testnet now\n# result:\n\n+---+------------+-------+-------------+\n| # | Public Key | Nonce | Permissions |\n+---+------------+-------+-------------+\n  ..    '<key>'      ...        ...\n+---+------------+-------+-------------+\n\nnear account delete-key <dev-account> '<key>' network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"why-locking-an-account",children:"Why Locking an Account"}),"\n",(0,r.jsx)(n.p,{children:"Locking an account brings more reassurance to end-users, since they know no external actor will be able to manipulate the account's contract or balance."}),"\n",(0,r.jsx)(n.admonition,{title:"Upgrading Locked Contracts",type:"tip",children:(0,r.jsxs)(n.p,{children:["Please do note that, while no external actor can update the contract, the contract ",(0,r.jsx)(n.strong,{children:"can still upgrade itself"}),". See ",(0,r.jsx)(n.a,{href:"/zh-CN/develop/upgrade#programmatic-update",children:"this article"})," for details."]})})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),o=t(12466),l=t(16550),c=t(20469),u=t(91980),i=t(67392),s=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,l.k6)(),c=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,u._X)(c),(0,r.useCallback)((function(e){if(c){var n=new URLSearchParams(o.location.search);n.set(c,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[c,o])]}function v(e){var n,t,a,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,d=e.groupId,v=h(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:v})})),b=m[0],g=m[1],k=p({queryString:i,groupId:d}),y=k[0],x=k[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,s.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),j=w[0],N=w[1],C=function(){var e=null!=y?y:j;return f({value:e,tabValues:v})?e:null}();return(0,c.Z)((function(){C&&g(C)}),[C]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),N(e)}),[x,N,v]),tabValues:v}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function k(e){var n=e.className,t=e.block,r=e.selectedValue,l=e.selectValue,c=e.tabValues,u=[],i=(0,o.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==r&&(i(n),l(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;t=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;t=null!=(o=u[l])?o:u[u.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return u.push(e)},onKeyDown:d,onClick:s},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=o.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function x(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(k,Object.assign({},e,n)),(0,g.jsx)(y,Object.assign({},e,n))]})}function w(e){var n=(0,m.Z)();return(0,g.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>l});var r=t(67294);const a={},o=r.createContext(a);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);