"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[985],{56723:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(85893),s=n(11151);const a={id:"utils",title:"\uc720\ud2f8\ub9ac\ud2f0",sidebar_label:"\uc720\ud2f8\ub9ac\ud2f0"},r=void 0,i={id:"tools/near-api-js/utils",title:"\uc720\ud2f8\ub9ac\ud2f0",description:"NEAR => yoctoNEAR",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/4.tools/near-api-js/naj-utils.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/utils",permalink:"/ko/tools/near-api-js/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/naj-utils.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{id:"utils",title:"\uc720\ud2f8\ub9ac\ud2f0",sidebar_label:"\uc720\ud2f8\ub9ac\ud2f0"},sidebar:"tools",previous:{title:"\ucee8\ud2b8\ub799\ud2b8",permalink:"/ko/tools/near-api-js/contract"},next:{title:"FAQ",permalink:"/ko/tools/near-api-js/faq"}},c={},l=[{value:"NEAR =&gt; yoctoNEAR",id:"near--yoctonear",level:3},{value:"YoctoNEAR =&gt; NEAR",id:"yoctonear--near",level:3}];function u(t){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"near--yoctonear",children:"NEAR => yoctoNEAR"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'// converts NEAR amount into yoctoNEAR (10^-24)\n\nconst { utils } = nearAPI;\nconst amountInYocto = utils.format.parseNearAmount("1");\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.a,{href:"https://near.github.io/near-api-js/functions/_near_js_utils.format.parseNearAmount.html",children:[(0,o.jsx)("span",{className:"typedoc-icon typedoc-icon-function"})," ",(0,o.jsx)(e.code,{children:"parseNearAmount"})," \ud568\uc218"]})}),"\n",(0,o.jsx)(e.h3,{id:"yoctonear--near",children:"YoctoNEAR => NEAR"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'// converts yoctoNEAR (10^-24) amount into NEAR\n\nconst { utils } = nearAPI;\nconst amountInNEAR = utils.format.formatNearAmount("1000000000000000000000000");\n'})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.a,{href:"https://near.github.io/near-api-js/functions/_near_js_utils.format.formatNearAmount.html",children:[(0,o.jsx)("span",{className:"typedoc-icon typedoc-icon-function"})," ",(0,o.jsx)(e.code,{children:"formatNearAmount"})," \ud568\uc218"]})})]})}function d(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>r});var o=n(67294);const s={},a=o.createContext(s);function r(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);