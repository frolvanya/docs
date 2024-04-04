"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4121],{33458:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var a=n(36905),r=n(35281),i=n(65130),s=n(86233),l=n(47265),o=n(85893);function c(){var e=(0,i.k)().metadata,t=e.editUrl,n=e.lastUpdatedAt,c=e.lastUpdatedBy,d=e.tags,u=d.length>0,m=!!(t||n||c);return u||m?(0,o.jsxs)("footer",{className:(0,a.Z)(r.k.docs.docFooter,"docusaurus-mt-lg"),children:[u&&(0,o.jsx)("div",{className:(0,a.Z)("row margin-top--sm",r.k.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(s.Z,{tags:d})})}),m&&(0,o.jsx)(l.Z,{className:(0,a.Z)("margin-top--sm",r.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:c})]}):null}},55698:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});n(67294);var a=n(71667),r=n(65130),i=n(85893);function s(){var e,t=(0,r.k)(),n=t.metadata,s=t.frontMatter,l=t.assets;return(0,i.jsx)(a.d,{title:n.title,description:n.description,keywords:s.keywords,image:null!=(e=l.image)?e:s.image})}var l=n(36905),o=n(87524),c=n(95999),d=n(32244);function u(e){var t=e.previous,n=e.next;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(d.Z,Object.assign({},t,{subLabel:(0,i.jsx)(c.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,i.jsx)(d.Z,Object.assign({},n,{subLabel:(0,i.jsx)(c.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function m(){var e=(0,r.k)().metadata;return(0,i.jsx)(u,{previous:e.previous,next:e.next})}var h=n(52263),v=n(33692),f=n(80143),b=n(35281),g=n(60373),p=n(74477);var x={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,i.jsx)(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,i.jsx)(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function k(e){var t=x[e.versionMetadata.banner];return(0,i.jsx)(t,Object.assign({},e))}function j(e){var t=e.versionLabel,n=e.to,a=e.onClick;return(0,i.jsx)(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(v.Z,{to:n,onClick:a,children:(0,i.jsx)(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function C(e){var t,n=e.className,a=e.versionMetadata,r=(0,h.Z)().siteConfig.title,s=(0,f.gA)({failfast:!0}).pluginId,o=(0,g.J)(s).savePreferredVersionName,c=(0,f.Jo)(s),d=c.latestDocSuggestion,u=c.latestVersionSuggestion,m=null!=d?d:(t=u).docs.find((function(e){return e.id===t.mainDocId}));return(0,i.jsxs)("div",{className:(0,l.Z)(n,b.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(k,{siteTitle:r,versionMetadata:a})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(j,{versionLabel:u.label,to:m.path,onClick:function(){return o(u.name)}})})]})}function L(e){var t=e.className,n=(0,p.E)();return n.banner?(0,i.jsx)(C,{className:t,versionMetadata:n}):null}function w(e){var t=e.className,n=(0,p.E)();return n.badge?(0,i.jsx)("span",{className:(0,l.Z)(t,b.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(c.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var N=n(87237),y=n(86043),E=n(93743),S=n(63366);const I={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var T=["collapsed"];function Z(e){var t=e.collapsed,n=(0,S.Z)(e,T);return(0,i.jsx)("button",Object.assign({type:"button"},n,{className:(0,l.Z)("clean-btn",I.tocCollapsibleButton,!t&&I.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const _={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function H(e){var t=e.toc,n=e.className,a=e.minHeadingLevel,r=e.maxHeadingLevel,s=(0,y.u)({initialState:!0}),o=s.collapsed,c=s.toggleCollapsed;return(0,i.jsxs)("div",{className:(0,l.Z)(_.tocCollapsible,!o&&_.tocCollapsibleExpanded,n),children:[(0,i.jsx)(Z,{collapsed:o,onClick:c}),(0,i.jsx)(y.z,{lazy:!0,className:_.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(E.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:r})})]})}const M={tocMobile:"tocMobile_ITEo"};function R(){var e=(0,r.k)(),t=e.toc,n=e.frontMatter;return(0,i.jsx)(H,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,l.Z)(b.k.docs.docTocMobile,M.tocMobile)})}var A=n(39407);function O(){var e=(0,r.k)(),t=e.toc,n=e.frontMatter;return(0,i.jsx)(A.Z,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var B=n(92503),F=n(69904);function $(e){var t,n,a,s,o=e.children,c=(t=(0,r.k)(),n=t.metadata,a=t.frontMatter,s=t.contentTitle,a.hide_title||void 0!==s?null:n.title);return(0,i.jsxs)("div",{className:(0,l.Z)(b.k.docs.docMarkdown,"markdown"),children:[c&&(0,i.jsx)("header",{children:(0,i.jsx)(B.Z,{as:"h1",children:c})}),(0,i.jsx)(F.Z,{children:o})]})}var D=n(2488),V=n(48596),P=n(44996);function U(e){return(0,i.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const q={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function z(){var e=(0,P.Z)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(v.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(U,{className:q.breadcrumbHomeIcon})})})}const J={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function G(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(v.Z,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function Y(e){var t=e.children,n=e.active,a=e.index,r=e.addMicrodata;return(0,i.jsxs)("li",Object.assign({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function K(){var e=(0,D.s1)(),t=(0,V.Ns)();return e?(0,i.jsx)("nav",{className:(0,l.Z)(b.k.docs.docBreadcrumbs,J.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(z,{}),e.map((function(t,n){var a=n===e.length-1,r="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(Y,{active:a,index:n,addMicrodata:!!r,children:(0,i.jsx)(G,{href:r,isLast:a,children:t.label})},n)}))]})}):null}var Q=n(22212);const W={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function X(e){var t,n,a,s,c,d,u=e.children,h=(t=(0,r.k)(),n=t.frontMatter,a=t.toc,s=(0,o.i)(),c=n.hide_table_of_contents,d=!c&&a.length>0,{hidden:c,mobile:d?(0,i.jsx)(R,{}):void 0,desktop:!d||"desktop"!==s&&"ssr"!==s?void 0:(0,i.jsx)(O,{})}),v=(0,r.k)().metadata.unlisted;return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,l.Z)("col",!h.hidden&&W.docItemCol),children:[v&&(0,i.jsx)(Q.Z,{}),(0,i.jsx)(L,{}),(0,i.jsxs)("div",{className:W.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(K,{}),(0,i.jsx)(w,{}),h.mobile,(0,i.jsx)($,{children:u}),(0,i.jsx)(N.Z,{})]}),(0,i.jsx)(m,{})]})]}),h.desktop&&(0,i.jsx)("div",{className:"col col--3",children:h.desktop})]})}function ee(e){var t="docs-doc-id-"+e.content.metadata.id,n=e.content;return(0,i.jsx)(r.b,{content:e.content,children:(0,i.jsxs)(a.FG,{className:t,children:[(0,i.jsx)(s,{}),(0,i.jsx)(X,{children:(0,i.jsx)(n,{})})]})})}},39407:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(63366),r=(n(67294),n(36905)),i=n(93743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(85893),o=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var t=e.className,n=(0,a.Z)(e,o);return(0,l.jsx)("div",{className:(0,r.Z)(s.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(i.Z,Object.assign({},n,{linkClassName:c,linkActiveClassName:d}))})}},93743:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(63366),r=n(67294),i=n(86668),s=["parentIndex"];function l(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,i=(0,a.Z)(e,s);n>=0?t[n].children.push(i):r.push(i)})),r}function o(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function d(e,t){var n,a,r=t.anchorTopOffset,i=e.find((function(e){return c(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(n=e[e.length-1])?n:null}function u(){var e=(0,r.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){var t=(0,r.useRef)(void 0),n=u();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,i=e.minHeadingLevel,s=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),o=d(l,{anchorTopOffset:n.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var h=n(33692),v=n(85893);function f(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?(0,v.jsx)("ul",{className:r?void 0:n,children:t.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)(h.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(f,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)}))}):null}const b=r.memo(f);var g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,h=void 0===u?void 0:u,f=e.minHeadingLevel,p=e.maxHeadingLevel,x=(0,a.Z)(e,g),k=(0,i.L)(),j=null!=f?f:k.tableOfContents.minHeadingLevel,C=null!=p?p:k.tableOfContents.maxHeadingLevel,L=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return o({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:j,maxHeadingLevel:C});return m((0,r.useMemo)((function(){if(d&&h)return{linkClassName:d,linkActiveClassName:h,minHeadingLevel:j,maxHeadingLevel:C}}),[d,h,j,C])),(0,v.jsx)(b,Object.assign({toc:L,className:s,linkClassName:d},x))}},22212:(e,t,n)=>{n.d(t,{Z:()=>h});n(67294);var a=n(36905),r=n(95999),i=n(35742),s=n(85893);function l(){return(0,s.jsx)(r.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(r.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(i.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(35281),u=n(59047);function m(e){var t=e.className;return(0,s.jsx)(u.Z,{type:"caution",title:(0,s.jsx)(l,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function h(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,Object.assign({},e))]})}},65130:(e,t,n)=>{n.d(t,{b:()=>l,k:()=>o});var a=n(67294),r=n(4077),i=n(85893),s=a.createContext(null);function l(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,i.jsx)(s.Provider,{value:n,children:t})}function o(){var e=(0,a.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}},74232:(e,t,n)=>{n.d(t,{Cc:()=>B,HN:()=>_,k8:()=>U});var a=n(67294),r=n(85893),i=n(73935);function s(e,t){if(!e||"$auto"===e)return t?.toString()||(typeof window<"u"?window.location.href:"/");if("$path"===e){"string"==typeof t&&(t=new URL(t));let e=t||(typeof window<"u"?window.location:void 0);return e?`${e.origin}${e.pathname}`:"/"}return e}var l="fbs-store";function o(e){return"contentId"in e?e.contentId:`${e.contentSetId}/${s(e.key)}`}var c,d,u=class{constructor(e){if(this.feelbacks=void 0,e??="local",typeof window>"u"&&(e="memory"),"local"===e)this.storage=window.localStorage;else if("session"===e)this.storage=window.sessionStorage;else{let e=()=>{};this.storage={getItem:e,setItem:e,removeItem:e,clear:e,key:e,length:0}}this.load()}add(e){let t=o(e.target),n=(this.feelbacks??=[]).findIndex((e=>e.key===t));n>=0&&this.feelbacks.splice(n,1),this.feelbacks.push({key:t,value:e.value,expire:e.expireIn&&e.expireIn>0?Math.floor(Date.now()/1e3)+e.expireIn:void 0,feelbackId:e.feelbackId,revokeToken:e.revokable?.token,revokeExpire:e.revokable?.expireAt&&Math.floor(new Date(e.revokable.expireAt).getTime()/1e3)||void 0}),this.save()}clear(){this.feelbacks?.splice(0,this.feelbacks.length),this.storage.removeItem(l)}remove(e){let t="string"==typeof e?this.feelbacks?.findIndex((t=>t.feelbackId===e)):(e=o(e),this.feelbacks?.findIndex((t=>t.key===e)));void 0!==t&&t>=0&&(this.feelbacks.splice(t,1),this.save())}getValue(e){return this.getFeelback(e)?.value}isRevokable(e){return!!this.getRevocable(e)}getRevocable(e){let t=this.getFeelback(e);if(t&&t.revokeToken&&!(t.revokeExpire&&t.revokeExpire<Date.now()/1e3))return{feelbackId:t.feelbackId,revokeToken:t.revokeToken}}load(e){if(this.feelbacks&&!e)return;let t;try{t=JSON.parse(this.storage.getItem(l))||[]}catch{t=[]}this.feelbacks=t.filter((e=>!e.expire||e.expire>Date.now()/1e3)),t.length!==this.feelbacks.length&&this.save()}save(){try{this.storage.setItem(l,JSON.stringify(this.feelbacks))}catch{}}getFeelback(e){let t="string"==typeof e?this.feelbacks?.find((t=>t.feelbackId===e)):(e=o(e),this.feelbacks?.find((t=>t.key===e)));if(!(t&&t.expire&&t.expire<Date.now()/1e3))return t;this.remove(t.feelbackId)}};function m(e){return e??=d||"local",c&&d===e?c:(d=e,c=new u(e))}async function h(e){if((e=await e).status>=400)throw new Error("[feelback] API error");if(204!==e.status)return await e.json()}var v={get:async function(e,...t){return t.length>0&&(e=`${e}?$p=${JSON.stringify(t)}`),await h(fetch(e,{method:"GET"}))},post:async function(e,...t){return await h(fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}))}},f="https://api.feelback.dev/v0";var b=(0,a.createContext)(void 0);function g(){return(0,a.useContext)(b)}var p=()=>{let e=(0,a.useRef)(!1);return(0,a.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),()=>e.current};function x(e=5e3,t,n){(0,a.useEffect)((()=>{if(t)return function(e,t){let n=setTimeout(t,e);return()=>clearTimeout(n)}(e,(()=>n(t)))}),[t])}function k(e=5e3,t=!1){let n=(0,a.useRef)(t),[r,i]=(0,a.useState)(),s=(0,a.useCallback)((()=>l(n.current)),[]),l=(0,a.useCallback)((e=>i(e??!0)),[]);return x(e,r,s),{value:r,set:l,reset:s}}function j(e,t){let n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(e&&t){let e=e=>{(!e.target||!n.current?.contains(e.target))&&(t(),e.stopPropagation(),e.preventDefault())};return document.addEventListener("click",e,{capture:!0}),()=>document.removeEventListener("click",e,{capture:!0})}}),[e]),n}var C={data:void 0,isLoading:!1,isCompleted:!1,isSuccess:!1,isError:!1,error:void 0};function L(e,t,n){let r=(0,a.useRef)(0),i=p(),s=!!n?.paused,l=!!t&&!s,[o,c]=(0,a.useReducer)(w,l,(e=>({...C,isLoading:e})));async function d(...t){let n=++r.current;try{o.isLoading||c({type:"LOADING"});let a=await e(...t);return i()&&n===r.current&&c({type:"SUCCESS",data:a}),w(o,{type:"SUCCESS",data:a})}catch(a){return i()&&n===r.current&&c({type:"ERROR",error:a}),w(o,{type:"ERROR",error:a})}}return(0,a.useEffect)((()=>{!s&&t&&d()}),[s,...t||[]]),{...o,call:d,exec:async(...e)=>{let t=await d(...e);if(t.error)throw t.error;return t.data},reset:()=>{c({type:"RESET"})}}}function w(e,t){switch(t.type){case"LOADING":return{...C,isLoading:!0,data:e.data};case"SUCCESS":return{...C,isCompleted:!0,isSuccess:!0,data:t.data};case"ERROR":return{...C,isCompleted:!0,error:t.error,isError:!0};case"RESET":return{...C};default:throw new Error("unknown action")}}function N(){let e=(0,a.useRef)("");return e.current||(e.current="i"+Math.random().toString().substring(2)),e.current}function y(e){if("function"==typeof e)return(0,a.createElement)(e);if("object"==typeof e&&"text"in e)return(0,a.createElement)(a.Fragment,void 0,[e.text]);if((0,a.isValidElement)(e))return e;throw console.error("Invalid icon",e),new Error("Invalid icon")}function E(e,t){return e&&t?function(){e.apply(this,arguments),t.apply(this,arguments)}:e||t}function S(e){let{count:t=!1,isActive:n=!1,isDisabled:a=!1,label:i,title:s,icon:l,onClick:o}=e;return(0,r.jsxs)("button",{title:s,className:`feelback-btn ${a?"disabled":""} ${n?"active":""}`,onClick:o,children:[l&&(Array.isArray(l)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"feelback-icon inactive",children:y(l[0])}),(0,r.jsx)("span",{className:"feelback-icon active",children:y(l[1])})]}):(0,r.jsx)("span",{className:"feelback-icon",children:y(l)})),i&&(0,r.jsx)("span",{className:"label",children:i}),!1!==t&&(0,r.jsx)("span",{className:"feelback-count",children:t})]})}function I(e){let{active:t,showCount:n=!1,showLabels:a=!1,showTitle:i=!a,hideZero:s=!1,hideZeroCount:l=!0,isDisabled:o=!1,items:c,counts:d,onClick:u}=e;return(0,r.jsx)("div",{className:"feelback-buttons"+(n&&c.length>1?" with-count":""),children:c.map((({value:e,icon:c,title:m},h)=>{let v=d?.[h]||(t===e?1:0);return s&&v<=0?null:(0,r.jsx)(S,{title:i&&m||void 0,label:a&&m||void 0,icon:c,count:n&&v||(l?void 0:0),isDisabled:o,isActive:t===e,onClick:()=>u?.(e)},e)}))})}function T(e){let{group:t,value:n,label:a,description:i,checked:s,onSelected:l}=e,o=`radio-${N()}`;return(0,r.jsxs)("div",{className:"feelback-radio-item",children:[(0,r.jsx)("input",{id:o,name:t,type:"radio",value:n,checked:s,onChange:e=>e.target.checked?l?.():void 0}),(0,r.jsxs)("div",{className:"feelback-radio-side",children:[a&&(0,r.jsx)("label",{htmlFor:o,children:a}),i&&(0,r.jsx)("span",{className:"feelback-text",children:i})]})]})}function Z(e){let{active:t,isDisabled:n=!1,items:a,onRenderAddon:i,onSelected:s}=e,l=`rg-${N()}`;return(0,r.jsx)("fieldset",{className:"feelback-radio-group",children:a.map((e=>(0,r.jsxs)("div",{className:"feelback-radio-item-wrap",children:[(0,r.jsx)(T,{group:l,checked:t===e.value,value:e.value,label:e.title,description:e.description,onSelected:()=>s?.(e.value)}),i?.({item:e,isSelected:t===e.value,isDisabled:n})||null]},e.value)))})}function _(e){let{text:t,...n}=e;return(0,r.jsxs)("div",{className:"feelback-q",children:[t&&"string"==typeof t&&(0,r.jsx)("span",{className:"feelback-text",children:t}),t&&(0,a.isValidElement)(t)&&t,(0,r.jsx)(I,{...n})]})}function H(e){let{text:t}=e;return(0,r.jsx)("div",{className:"feelback-a",children:(0,r.jsx)("span",{className:"feelback-text",children:t})})}var M=(0,a.forwardRef)(((e,t)=>{let{className:n,layout:i,label:s="Send feedback",textAnswer:l="Thanks for your feedback",revokable:o=!0,onClose:c,onSuccess:d,children:u,...m}=e,{call:h,isSuccess:v}=$(m),{value:f,set:b}=k(1e3),g=({value:e,metadata:t})=>{b(!0),h(e,{metadata:t,revokable:o}).then((({isSuccess:t})=>{t&&d?.({...m,value:e})}))};return(0,r.jsxs)("div",{ref:t,className:"feelback-container"+(n?" "+n:""),style:{pointerEvents:f?"none":void 0},children:[!v&&(()=>{switch(i){case"button-switch":return(0,r.jsx)(R,{label:s,behavior:"remove-when-open",children:e=>(0,a.cloneElement)(u,{onSubmit:g,onCancel:e})});case"button-dialog":return(0,r.jsx)(R,{label:s,behavior:"disable-when-open",children:e=>(0,r.jsx)(A,{onClose:e,children:(0,a.cloneElement)(u,{onSubmit:g,onCancel:e})})});case"radio-group-dialog":return(0,r.jsx)(A,{onClose:c,children:(0,a.cloneElement)(u,{onSubmit:g,onCancel:E(u.props.onCancel,c)})});default:return(0,a.cloneElement)(u,{onSubmit:g})}})(),v&&(0,r.jsx)(H,{text:l})]})}));function R(e){let{label:t,behavior:n="remove-when-open",children:i}=e,[s,l]=(0,a.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(!s||"remove-when-open"!==n)&&(0,r.jsx)("button",{className:"feelback-btn btn-action trigger-btn",disabled:s,onClick:()=>l(!0),children:t}),s&&i((()=>l(!1)))]})}function A(e){let{onClose:t,children:n}=e,s=j(!0,t);return(0,i.createPortal)((0,r.jsx)("div",{className:"feelback-style",children:(0,r.jsx)("div",{className:"dialog",children:(0,a.cloneElement)(n,{ref:s})})}),document.body)}var O=(0,a.forwardRef)(((e,t)=>{let{title:n="Send feedback",alignButton:a="right",showButton:i=!0,onCancel:s,onSubmit:l,onValidate:o,slots:c,children:d}=e;return(0,r.jsx)("div",{ref:t,className:"feelback-form",children:(0,r.jsxs)("div",{className:"content",children:[n&&(0,r.jsx)("span",{className:"feelback-text form-title",children:n}),d,i&&c?.BeforeFormButtons,i&&(0,r.jsxs)("div",{className:"form-buttons feelback-buttons "+("right"===a?"align-end":""),children:[(0,r.jsx)("button",{className:"feelback-btn btn-action",onClick:()=>{let e=o();void 0!==e&&l?.(e)},children:"Send"}),s&&(0,r.jsx)("button",{className:"feelback-btn btn-cancel",onClick:s,children:"Cancel"})]})]})})}));(0,a.forwardRef)(((e,t)=>{let{title:n="Send feedback",placeholder:i="Type your message",minLength:s,maxLength:l,withEmail:o,placeholderEmail:c="your@email.com"+(o&&"required"!==o?" (optional)":""),slots:d,onCancel:u,onSubmit:m}=e,h=(0,a.useRef)(null),v="required"===o,f=(0,a.useRef)(null);return(0,r.jsxs)(O,{slots:d,title:n,onCancel:u,onSubmit:m,ref:t,onValidate:()=>{let e=h.current?.value.trim()||void 0,t=f.current?.value?.trim()||void 0;if(e&&!(s&&s>0&&e.length<s)&&!(t&&!t.match(/^(.+)@(.+)$/)||v))return{value:e,metadata:t?{$user:t}:void 0}},children:[d?.BeforeMessage,(0,r.jsx)("textarea",{ref:h,required:!0,placeholder:i||void 0,minLength:s,maxLength:l}),o&&(0,r.jsxs)(r.Fragment,{children:[d?.BeforeEmail,(0,r.jsx)("input",{ref:f,type:"email",name:"email",required:v,placeholder:c||void 0})]})]})}));function B(e){let{layout:t="button-switch",label:n="Send feedback",revokable:a,preset:i,tags:s=i,active:l,title:o,placeholder:c,minLength:d,maxLength:u,textAnswer:m="Thanks for your feedback",showLabels:h=!1,style:v,withEmail:f,placeholderEmail:b,onCancel:g,onSuccess:p,slots:x,...k}=e;if(!s)return console.warn("Missing tags"),null;let j=v&&Array.isArray(v)?v.join(" "):v||void 0;return(0,r.jsx)(M,{className:`feelback-tagged-message layout-${t} ${j}`,layout:t,label:n,revokable:a,onSuccess:p,...k,children:(0,r.jsx)(F,{title:o,tags:s,showLabels:h,placeholder:c,minLength:d,maxLength:u,withEmail:f,placeholderEmail:b,onCancel:g,slots:x,layout:"reveal-message"===t?t:"radio-group"===t||"radio-group-dialog"===t?"radio-group":"form"})})}var F=(0,a.forwardRef)(((e,t)=>{let{layout:n,title:i="Send feedback",active:s,tags:l,showLabels:o=!0,placeholder:c="Type your message",minLength:d,maxLength:u,withEmail:m,placeholderEmail:h="your@email.com"+(m&&"required"!==m?" (optional)":""),slots:v,onCancel:f,onSubmit:b}=e,g=!!d&&d>0,p=(0,a.useRef)(null),x="required"===m,k=(0,a.useRef)(null),[j,C]=(0,a.useState)("$auto"===s?l[0].value:s),L=(0,r.jsxs)(r.Fragment,{children:[v?.BeforeMessage,(0,r.jsx)("textarea",{ref:p,required:g,placeholder:c||void 0,minLength:d,maxLength:u})]}),w=m&&(0,r.jsxs)(r.Fragment,{children:[v?.BeforeEmail,(0,r.jsx)("input",{ref:k,type:"email",name:"email",required:x,placeholder:h||void 0})]});return(0,r.jsxs)(O,{onCancel:f,onSubmit:b,ref:t,onValidate:()=>{let e=p.current?.value?.trim()||void 0,t=k.current?.value?.trim()||void 0;if(j&&(!g||e&&!(e.length<d))&&!(t&&!t.match(/^(.+)@(.+)$/)||x))return{value:{tag:j,message:e},metadata:t?{$user:t}:void 0}},title:"reveal-message"!==n&&i,showButton:"reveal-message"!==n||!!j,alignButton:"radio-group"===n?"left":"right",slots:v,children:["form"===n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{items:l,showLabels:o,active:j,onClick:C}),L,w]}),"radio-group"===n&&(0,r.jsx)(Z,{items:l,active:j,onSelected:C,onRenderAddon:({isSelected:e})=>e&&(0,r.jsxs)(r.Fragment,{children:[L,w]})}),"reveal-message"===n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{text:i,items:l,showLabels:o,active:j,onClick:C}),j&&(0,r.jsxs)(r.Fragment,{children:[L,w]})]})]})}));function $(e){let t=g(),n=D(e);return L(((e,a)=>async function(e){let{endpoint:t=f,store:n="local",revokable:a=!0,value:r,metadata:i,expireIn:l=3600}=e,o="contentId"in e?{contentId:e.contentId}:{contentSetId:e.contentSetId,key:s(e.key)},c=n&&"none"!==n&&m(n)||void 0,d=a&&c?.getRevocable(o)||void 0,u=d?await v.post(`${t}/feelbacks/edit`,{...d,value:r}):await v.post(`${t}/feelbacks/create`,{...o,value:r,context:i,revokable:a});c?.add({...u,target:o,value:r,expireIn:l})}({endpoint:t?.endpoint,store:t?.store,...a,...n,value:e})))}function D(e){let t=(0,a.useRef)(e);return t.current!==e&&("contentId"in t.current&&"contentId"in e?t.current.contentId!==e.contentId&&t.current:"contentSetId"in t.current&&"contentSetId"in e?(t.current.contentSetId!==e.contentSetId||t.current.key!==e.key)&&(t.current=e):t.current=e),t.current}var V=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",fill:"currentColor",width:"1em",height:"1em",...e},a.createElement("g",null,a.createElement("path",{d:"M172.7,309.1c0-7.4-3-14.6-8.3-19.9s-12.4-8.3-19.9-8.3H74.4c-10.1,0-19.3,5.4-24.4,14.1c-5.1,8.7-5,19.5,0,28.1 s14.3,14.1,24.4,14.1h70.2c7.4,0,14.6-3,19.9-8.3S172.7,316.5,172.7,309.1L172.7,309.1z"}),a.createElement("path",{d:"M102.5,449.5h70.2c10.1,0,19.3-5.4,24.4-14.1c5-8.6,5-19.5,0-28.1s-14.3-14.1-24.4-14.1h-70.2c-10.1,0-19.3,5.4-24.4,14.1 c-5,8.6-5,19.5,0,28.1C83.2,444.1,92.5,449.5,102.5,449.5z"}),a.createElement("path",{d:"M53.2,224.9h83.3c18.8,0,36.4-9.4,46.8-24.9l95.7-143.6h5c11.6,0,22.5,5.7,29.2,15.1s8.6,21.6,5,32.5l-25.4,76.5 c-1.3,3.7-0.6,7.9,1.8,11.2c2.3,3.2,6.2,5.2,10.1,5.2h65.6c14.7-0.3,28.8,6.3,37.9,17.7c5.3,6.6,8.6,14.3,9.8,22.6 c1.3,8.3,0.3,16.7-2.7,24.5l-47.6,118.7c-1.5,3.9-4.3,7.2-7.6,9.5c-3.5,2.3-7.5,3.6-11.6,3.6h-61.8l0,0c-7.1-0.3-14.2,2.2-19.7,7 c-5.4,4.6-8.9,11.2-9.9,18.4c-0.8,7.9,1.9,15.8,7.1,21.7c5.4,5.9,12.9,9.2,20.9,9.2h63.3c15.5,0,30.5-4.6,43.2-13.3 c12.8-8.6,22.7-20.9,28.5-35.2l47.6-118.8c12.8-32.1,8.8-68.5-11-97c-19.7-28.5-52.1-45.3-86.8-44.6h-4.6l5.7-17 c5.2-14.8,6.7-30.6,4.3-46.2c-3.6-21.6-14.8-41.3-31.5-55.5s-37.9-22.1-60-22h-20c-9.4,0-18.2,4.6-23.3,12.5l-104,156H54.5 c-7.1-0.1-14.1,2.3-19.6,7c-5.5,4.7-8.9,11.2-9.8,18.3c-0.8,7.9,1.9,15.8,7.1,21.7C37.8,221.4,45.2,224.9,53.2,224.9L53.2,224.9z"}))),P=e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",fill:"currentColor",width:"1em",height:"1em",...e},a.createElement("g",null,a.createElement("path",{d:"M327.3,190.8c0,7.3,2.9,14.6,8.3,19.8c5.3,5.3,12.4,8.3,19.8,8.3h70.2c10.1,0,19.4-5.4,24.4-14c5-8.6,5-19.5,0-28.1 c-5-8.6-14.3-14-24.4-14h-70.2c-7.3,0-14.6,2.9-19.8,8.3C330.3,176.3,327.3,183.4,327.3,190.8L327.3,190.8z"}),a.createElement("path",{d:"M397.5,50.4h-70.2c-10.1,0-19.4,5.4-24.4,14c-5,8.6-5,19.5,0,28.1c5,8.6,14.3,14,24.4,14h70.2c10.1,0,19.4-5.4,24.4-14 s5-19.5,0-28.1S407.6,50.4,397.5,50.4z"}),a.createElement("path",{d:"M446.8,275.1h-83.3c-18.8,0-36.3,9.5-46.8,25l-95.7,143.6h-5c-11.6,0-22.5-5.7-29.3-15.1c-6.8-9.4-8.6-21.6-5-32.5 l25.4-76.5c1.3-3.8,0.6-7.9-1.8-11.2c-2.3-3.2-6.2-5.1-10.1-5.1h-65.5c-14.7,0.3-28.7-6.3-38.1-17.7c-5.3-6.6-8.6-14.3-9.8-22.6 c-1.3-8.3-0.3-16.6,2.7-24.5l47.6-118.8c1.6-3.9,4.2-7.2,7.6-9.5c3.5-2.3,7.5-3.6,11.6-3.6h61.8l0,0c7.1,0.3,14.2-2.3,19.7-7 c5.4-4.7,8.9-11.3,9.9-18.4c0.7-7.9-1.9-15.8-7.1-21.7c-5.4-6-12.9-9.2-20.9-9.2h-63.3c-15.5,0-30.5,4.7-43.2,13.3 C95.7,72.4,85.8,84.7,80,99L32.4,217.8c-12.8,32.1-8.8,68.5,10.9,97.1c19.7,28.6,52.1,45.2,86.8,44.7h4.7l-5.7,17.1 c-5.1,14.9-6.7,30.6-4.2,46.2c3.6,21.6,14.9,41.3,31.5,55.4s37.9,21.8,59.8,21.7h20c9.5,0,18.2-4.7,23.3-12.5l104.1-156h82.1 c7.1,0.1,14-2.3,19.6-7c5.5-4.7,8.9-11.2,9.8-18.4c0.7-7.9-1.9-15.8-7.1-21.7C462.4,278.5,454.8,275.1,446.8,275.1L446.8,275.1z"}))),U=[{value:"y",icon:V,title:"Yes"},{value:"n",icon:P,title:"No"}]}}]);