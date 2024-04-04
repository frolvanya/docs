"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3960],{72115:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var t=r(85893),a=r(11151),s=r(74866),i=r(85162);const o={sidebar_position:2,title:"\ub124\uc774\ud2f0\ube0c \ud1a0\ud070 \ubcf4\ub0b4\uae30"},l="$NEAR \uc804\uc1a1",u={id:"sdk/js/promises/token-tx",title:"\ub124\uc774\ud2f0\ube0c \ud1a0\ud070 \ubcf4\ub0b4\uae30",description:"\uc5ec\ub7ec \uac00\uc9c0 \uc774\uc720\ub85c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud1a0\ud070\uc744 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/js/promises/token-tx.md",sourceDirName:"sdk/js/promises",slug:"/sdk/js/promises/token-tx",permalink:"/ko/sdk/js/promises/token-tx",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/promises/token-tx.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ub124\uc774\ud2f0\ube0c \ud1a0\ud070 \ubcf4\ub0b4\uae30"},sidebar:"tools",previous:{title:"Promise: \uc18c\uac1c",permalink:"/ko/sdk/js/promises/intro"},next:{title:"\uacc4\uc815 \uc0dd\uc131",permalink:"/ko/sdk/js/promises/create-account"}},c={},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"near-\uc804\uc1a1",children:"$NEAR \uc804\uc1a1"}),"\n",(0,t.jsx)(n.p,{children:"\uc5ec\ub7ec \uac00\uc9c0 \uc774\uc720\ub85c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ud1a0\ud070\uc744 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/StorageManagement.html",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \ud45c\uc900"}),"\uacfc \uac19\uc740 \uac83\uc744 \uc0ac\uc6a9\ud558\uba70, \ub4f1\ub85d \ucde8\uc18c \uc2dc \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\uc99d\uae08\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.li,{children:"\uc0ac\uc6a9\uc790\ub294 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc218\uc218\ub8cc\ub97c \uc9c0\ubd88\ud558\uace0, \ucee8\ud2b8\ub799\ud2b8\ub294 \ub098\uc911\uc5d0 \uc774\ub7ec\ud55c \uc218\uc218\ub8cc\ub97c \uad00\ub9ac\uc790\uc5d0\uac8c \uc9c0\ubd88\ud558\uac70\ub098, \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc7ac\ubc30\ud3ec\ud558\uac70\ub098, \uc0ac\uc6a9\uc790\uac00 \ud22c\ud45c\ud558\ub294 \uc6d0\uc778\uc5d0 \ub300\ud574 \uc9c0\ubd88\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.li,{children:"\uae30\ud0c0 \ub4f1\ub4f1!"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\ube14\ub85d\uccb4\uc778\uc740 \uc6b0\ub9ac\uc5d0\uac8c \ud504\ub85c\uadf8\ub798\ubc0d \uac00\ub2a5\ud55c \ub3c8\uc744 \uc81c\uacf5\ud558\uba70, \uc5ec\uae30\uc11c \ud575\uc2ec\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uac00 \ud1a0\ud070\uc744 \ubcf4\ub0b4\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"NEAR\ub294 \uc774\ub97c \uc27d\uac8c \ub9cc\ub4ed\ub2c8\ub2e4. NEAR \ud1a0\ud070 \uc804\uc1a1\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ubcf4\ub0bc \uc218 \uc788\ub294 \uac00\uc7a5 \uac04\ub2e8\ud55c \ud2b8\ub79c\uc7ad\uc158\uc785\ub2c8\ub2e4. \ud544\uc694\ud55c \uac83\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let amount = BigInt(1_000_000_000_000_000_000_000_000); // 1 $NEAR as yoctoNEAR\nlet to = "alice.near";\n\nNearPromise.new(to).transfer(amount);\n'})}),"\n",(0,t.jsx)(n.p,{children:"\uc804\uccb4 \ucee8\ud2b8\ub799\ud2b8 \ubc0f \ud568\uc218 \ud638\ucd9c\uc758 \ub9e5\ub77d\uc5d0\uc11c, \uc774\ub294 \ub2e4\uc74c\uacfc \uac19\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { NearPromise, NearBindgen } from "near-sdk-js";\n\n@NearBindgen({})\nexport class Contract {\n  pay({ amount, to }) {\n    return NearPromise.new(to).transfer(amount);\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 \uc911 \ub300\ubd80\ubd84\uc740 \uc774\ubbf8 \uc775\uc219\ud560 \uac83\uc785\ub2c8\ub2e4 - \uac00\uc838\uc624\uae30(import), ",(0,t.jsx)(n.a,{href:"/ko/sdk/js/contract-structure/near-bindgen",children:(0,t.jsx)(n.code,{children:"NearBindgen"})})," \uc124\uc815 \ub4f1\uc744 \ud3ec\ud568\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc804\uc1a1 \uc790\uccb4\uc640 \uad00\ub828\ub41c \uba87 \uac00\uc9c0 \ud765\ubbf8\ub85c\uc6b4 \uc138\ubd80 \uc815\ubcf4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\uc5ec\uae30\uc5d0 \uc815\uc758\ub41c ",(0,t.jsx)(n.code,{children:"pay"})," \uba54\uc11c\ub4dc\ub294 JSON\uc744 \uc785\ub825\uc73c\ub85c \ubc1b\uc544\ub4e4\uc774\uace0, JS\uc758 \uc22b\uc790\ub294 ",(0,t.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER",children:[(0,t.jsx)(n.code,{children:"2^53-1"}),"\ubcf4\ub2e4 \ud074 \uc218 \uc5c6\uc73c\ubbc0\ub85c"]}),", JSON\uc744 JS\ub85c \uc5ed\uc9c1\ub82c\ud654\ud558\ub294 \uac83\uacfc\uc758 \ud638\ud658\uc131\uc744 \uc704\ud574 \uc815\uc218\ub97c 10\uc9c4\uc218 \ubb38\uc790\uc5f4\ub85c \uc9c1\ub82c\ud654\ud569\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"transfer"})," \uba54\uc11c\ub4dc\uac00 ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Yocto-",children:"yocto"}),"NEAR \ub2e8\uc704\ub85c \uc22b\uc790\ub97c \ubc1b\uae30 \ub54c\ubb38\uc5d0, ",(0,t.jsx)(n.code,{children:"2^53-1"}),"\ubcf4\ub2e4 \ud6e8\uc52c \ub354 \ud070 \uc22b\uc790\uac00 \ud544\uc694\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NearPromise"})," \ubc18\ud658 : \uc774\ub97c \ud1b5\ud574 NEAR \uc775\uc2a4\ud50c\ub85c\ub7ec, near-cli, near-api-js \ubc0f \uae30\ud0c0 \ub3c4\uad6c\uac00 \uc804\uccb4 \ud2b8\ub79c\uc7ad\uc158 \uccb4\uc778\uc774 \uc131\uacf5\ud588\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc62c\ubc14\ub974\uac8c \uacb0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud568\uc218\uac00 ",(0,t.jsx)(n.code,{children:"Promise"}),"\ub97c \ubc18\ud658\ud558\uc9c0 \uc54a\uc73c\uba74, near-cli\uc640 \uac19\uc740 \ub3c4\uad6c\ub294 \ud568\uc218 \ud638\ucd9c \uc9c1\ud6c4\uc5d0 \uc774\ub97c \ubc18\ud658\ud560 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c ",(0,t.jsx)(n.code,{children:"transfer"}),"\uac00 \uc2e4\ud328\ud558\ub354\ub77c\ub3c4, \ud568\uc218 \ud638\ucd9c\uc740 \uc131\uacf5\ud55c \uac83\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Using near-cli or near-cli-rs, someone could invoke this function with a call like:"}),"\n",(0,t.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,t.jsx)(i.Z,{value:"near-cli",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call <contract> pay \'{"amount": "1000000000000000000000000", "to": "example.near"}\' --accountId benjiman.near\n'})})}),(0,t.jsx)(i.Z,{value:"near-cli-rs",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near contract call-function as-transaction <contract> pay json-args \'{"amount": "1000000000000000000000000", "to": "example.near"}\' prepaid-gas \'30 TeraGas\' attached-deposit \'0 NEAR\' sign-as benjiman.near network-config testnet sign-with-keychain send\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){var n=e.children,r=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>N});var t=r(67294),a=r(36905),s=r(12466),i=r(16550),o=r(20469),l=r(91980),u=r(67392),c=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l._X)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function m(e){var n,r,a,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=h(e),b=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),v=b[0],j=b[1],x=f({queryString:u,groupId:d}),g=x[0],k=x[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,c.Nk)(n),a=r[0],s=r[1],[a,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),y=N[0],w=N[1],E=function(){var e=null!=g?g:y;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){E&&j(E)}),[E]),{selectedValue:v,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),k(e),w(e)}),[k,w,m]),tabValues:m}}var b=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(85893);function x(e){var n=e.className,r=e.block,t=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(u(n),i(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;r=null!=(s=l[i])?s:l[l.length-1]}null==(n=r)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function g(e){var n=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function k(e){var n=m(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(x,Object.assign({},e,n)),(0,j.jsx)(g,Object.assign({},e,n))]})}function N(e){var n=(0,b.Z)();return(0,j.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);