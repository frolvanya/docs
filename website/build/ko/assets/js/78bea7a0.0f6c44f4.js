"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1617],{37435:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=r(85893),a=r(11151),i=r(74866),s=r(85162);const l={id:"maintenance-windows",title:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)"},o=void 0,c={id:"api/rpc/maintenance-windows",title:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)",description:"RPC API\ub97c \uc0ac\uc6a9\ud558\uba74 \ud604\uc7ac \uc5d0\ud3ec\ud06c\uc758 \ud2b9\uc815 \ubc38\ub9ac\ub370\uc774\ud130\uc5d0 \ub300\ud55c \ud5a5\ud6c4 \uc720\uc9c0 \uad00\ub9ac \uae30\uac04\uc744 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/5.api/rpc/maintenance-windows.md",sourceDirName:"5.api/rpc",slug:"/api/rpc/maintenance-windows",permalink:"/ko/api/rpc/maintenance-windows",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/5.api/rpc/maintenance-windows.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{id:"maintenance-windows",title:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)"}},u={},d=[{value:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)",id:"maintenance-windows",level:2},{value:"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694??",id:"what-could-go-wrong",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"RPC API\ub97c \uc0ac\uc6a9\ud558\uba74 \ud604\uc7ac \uc5d0\ud3ec\ud06c\uc758 \ud2b9\uc815 \ubc38\ub9ac\ub370\uc774\ud130\uc5d0 \ub300\ud55c \ud5a5\ud6c4 \uc720\uc9c0 \uad00\ub9ac \uae30\uac04\uc744 \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"maintenance-windows",children:"\uc720\uc9c0 \uad00\ub9ac \uae30\uac04(Maintenance Window)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\ud2b9\uc815 \ubc38\ub9ac\ub370\uc774\ud130\uc758 \uc720\uc9c0 \uad00\ub9ac \uae30\uac04\uc740 \ud604\uc7ac \uc5d0\ud3ec\ud06c\uc758 \ubbf8\ub798 \ube14\ub85d \ub192\uc774 \ubc94\uc704\uc774\uba70, \uc774 \uae30\uac04 \ub3d9\uc548 \ubc38\ub9ac\ub370\uc774\ud130\ub294 \ube14\ub85d \ub610\ub294 \uccad\ud06c\ub97c \uc0dd\uc131\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uc81c\uacf5\ub41c \uacc4\uc815\uc774 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \uc544\ub2cc \uacbd\uc6b0, \uc9c0\uae08\ubd80\ud130 \uc5d0\ud3ec\ud06c \ub05d\uae4c\uc9c0\uc758 \ubc94\uc704\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\uba54\uc11c\ub4dc: ",(0,t.jsx)(n.code,{children:"EXPERIMENTAL_maintenance_windows"})]}),"\n",(0,t.jsxs)(n.li,{children:["\ub9e4\uac1c\ubcc0\uc218:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"account_id"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc608\uc2dc:"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(s.Z,{value:"json",label:"JSON",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "dontcare",\n  "method": "EXPERIMENTAL_maintenance_windows",\n  "params": {\n    "account_id": "node0"\n  }\n}\n'})})}),(0,t.jsx)(s.Z,{value:"http",label:"HTTPie",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'http post https://rpc.testnet.near.org jsonrpc=2.0 id=dontcare method=EXPERIMENTAL_maintenance_windows \\\n  params:=\'{\n    "account_id": "node0"\n  }\'\n'})})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"\uc751\ub2f5 \uc608\uc2dc:"}),(0,t.jsxs)("p",{children:[(0,t.jsxs)(n.p,{children:["\uacb0\uacfc\ub294 \ud604\uc7ac \uc5d0\ud3ec\ud06c\uc758 \ud5a5\ud6c4 \uc720\uc9c0 \uad00\ub9ac \uae30\uac04 \ubaa9\ub85d\uc785\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4 \uae30\uac04 ",(0,t.jsx)(n.code,{children:"[1028, 1031]"}),"\uc5d0\ub294 1028, 1029 \ubc0f 1030\uc774 \ud3ec\ud568\ub429\ub2c8\ub2e4."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "result": [\n        [\n            1028,\n            1031\n        ],\n        [\n            1034,\n            1038\n        ],\n    ],\n    "id": "dontcare"\n}\n'})})]})]}),"\n",(0,t.jsx)(n.h4,{id:"what-could-go-wrong",children:"\ubb34\uc5c7\uc774 \uc798\ubabb\ub420 \uc218 \uc788\ub098\uc694??"}),"\n",(0,t.jsxs)(n.p,{children:["API \uc694\uccad\uc774 \uc2e4\ud328\ud558\uba74 RPC \uc11c\ubc84\ub294 \uc81c\ud55c\ub41c \uc218\uc758 \uc798 \uc815\uc758\ub41c \uc624\ub958 \ubcc0\ud615\uacfc \ud568\uaed8 \uad6c\uc870\ud654\ub41c \uc624\ub958 \uc751\ub2f5\uc744 \ubc18\ud658\ud558\ubbc0\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\ub294 \uac00\ub2a5\ud55c \ubaa8\ub4e0 \uc624\ub958 \uc0ac\ub840\ub97c \ucca0\uc800\ud558\uac8c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. JSON-RPC \uc624\ub958\ub294 \uc624\ub958 \uc751\ub2f5\uc744 \uad6c\uc870\ud654\ud558\uae30 \uc704\ud574 ",(0,t.jsx)(n.a,{href:"https://github.com/joyent/node-verror",children:"verror"})," \uaddc\uce59\uc744 \ub530\ub985\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "error": {\n        "name": <ERROR_TYPE>,\n        "cause": {\n            "info": {..},\n            "name": <ERROR_CAUSE>\n        },\n        "code": -32000,\n        "data": String,\n        "message": "Server error",\n    },\n    "id": "dontcare",\n    "jsonrpc": "2.0"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\ub2e4\uc74c\uc740 ",(0,t.jsx)(n.code,{children:"maintenance_windows"})," \uba54\uc11c\ub4dc\uc5d0\uc11c \ubc18\ud658\ud560 \uc218 \uc788\ub294 \uc624\ub958 \ubcc0\ud615\uc758 \uc804\uccb4 \ubaa9\ub85d\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)("table",{className:"custom-stripe",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsxs)(n.p,{children:["ERROR_TYPE",(0,t.jsx)("br",{}),"\n",(0,t.jsx)("code",{children:"error.name"})]})}),(0,t.jsxs)("th",{children:["ERROR_CAUSE",(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"error.cause.name"})]}),(0,t.jsx)("th",{children:"\uc774\uc720"}),(0,t.jsx)("th",{children:"\ud574\uacb0\ucc45"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"INTERNAL_ERROR"}),(0,t.jsx)("td",{children:"\ub178\ub4dc \uc790\uccb4\uc5d0 \ubb38\uc81c\uac00 \uc788\uac70\ub098 \uacfc\ubd80\ud558\uac00 \uac78\ub838\uc2b5\ub2c8\ub2e4."}),(0,t.jsx)("td",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"\ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694"}),(0,t.jsx)("li",{children:"\ub2e4\ub978 \ub178\ub4dc\uc5d0 \uc694\uccad\uc744 \ubcf4\ub0b4\uc138\uc694"}),(0,t.jsxs)("li",{children:["\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,t.jsx)("code",{children:"error.cause.info"}),"\ub97c \ud655\uc778\ud558\uc138\uc694"]})]})})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function s(e){var n=e.children,r=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>E});var t=r(67294),a=r(36905),i=r(12466),s=r(16550),l=r(20469),o=r(91980),c=r(67392),u=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),l=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,o._X)(l),(0,t.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function m(e){var n,r,a,i,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=h(e),v=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),j=v[0],b=v[1],x=f({queryString:c,groupId:d}),w=x[0],g=x[1],E=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),y=E[0],R=E[1],I=function(){var e=null!=w?w:y;return p({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){I&&b(I)}),[I]),{selectedValue:j,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),g(e),R(e)}),[g,R,m]),tabValues:m}}var v=r(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function x(e){var n=e.className,r=e.block,t=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),s(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=o.indexOf(e.currentTarget)+1;r=null!=(t=o[a])?t:o[0];break;case"ArrowLeft":var i,s=o.indexOf(e.currentTarget)-1;r=null!=(i=o[s])?i:o[o.length-1]}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function w(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function g(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(x,Object.assign({},e,n)),(0,b.jsx)(w,Object.assign({},e,n))]})}function E(e){var n=(0,v.Z)();return(0,b.jsx)(g,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(67294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);