"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9349],{13047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(85893),s=n(11151),i=n(71183);const o=n.p+"assets/images/paging-through-hashes-swing--pierced_staggg.near--pierced_stag-252ce502eb06766d1dc11a6c40a0b60c.jpg",a=n.p+"assets/images/guards-contract-permissions--connoisseur_dane.near--connoisseurdane-a696aec63e7ccccc1442b9fe3eb4c664.png",l={sidebar_position:2,sidebar_label:"Store multiple puzzles",title:"Store multiple crossword puzzles using a specialized collection in NEAR called a LookupMap"},c="Using collections",u={id:"tutorials/crosswords/beginner/collections",title:"Store multiple crossword puzzles using a specialized collection in NEAR called a LookupMap",description:"As mentioned in the previous chapter, the online Rust Book is a great reference for folks getting started with Rust, but there are concepts that differ when we're dealing with the blockchain. One of these differences is the use of collections.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/02-beginner/01-collections.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/collections",permalink:"/vi/tutorials/crosswords/beginner/collections",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/01-collections.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Store multiple puzzles",title:"Store multiple crossword puzzles using a specialized collection in NEAR called a LookupMap"},sidebar:"tutorials",previous:{title:"T\xf4\u0309ng quan",permalink:"/vi/tutorials/crosswords/beginner/overview"},next:{title:"Using structs and enums",permalink:"/vi/tutorials/crosswords/beginner/structs-enums"}},h={},d=[{value:"LookupMap and UnorderedSet",id:"lookupmap-and-unorderedset",level:2},{value:"Collections have prefixes",id:"collections-have-prefixes",level:2},{value:"Permissions or permissionless?",id:"permissions-or-permissionless",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"using-collections",children:"Using collections"}),"\n",(0,r.jsxs)(t.p,{children:["As mentioned in the previous chapter, the ",(0,r.jsx)(t.a,{href:"https://doc.rust-lang.org/stable/book",children:"online Rust Book"})," is a great reference for folks getting started with Rust, but there are concepts that differ when we're dealing with the blockchain. One of these differences is the use of collections."]}),"\n",(0,r.jsx)(t.p,{children:"The reference-level documentation of the Rust SDK explains this concept well:"}),"\n",(0,r.jsxs)(t.admonition,{title:"Motivation for specialized collections",type:"note",children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Collections that offer an alternative to standard containers from [Rust's] std::collections::* by ",(0,r.jsx)(t.strong,{children:"utilizing the underlying blockchain trie storage more efficiently"}),".",(0,r.jsx)("br",{})," For example, the following smart contract does not work with state efficiently, because ",(0,r.jsx)(t.strong,{children:"it will load the entire HashMap at the beginning of the contract call"}),", and will save it entirely at the end, in cases when there is state modification. ",(0,r.jsx)(t.strong,{children:"This is fine for small number of elements, but very inefficient for large numbers"}),"."]}),"\n"]}),(0,r.jsxs)(t.p,{children:["\u2014 ",(0,r.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/index.html",children:"NEAR SDK reference documentation"})," :::"]}),(0,r.jsxs)(t.p,{children:["In chapter 1, we set the crossword puzzle solution hash when we first deployed the contract and called the initialization method ",(0,r.jsx)(t.code,{children:"new"}),", passing it. This would only allow us to have only one puzzle, but let's allow for many."]}),(0,r.jsx)(t.p,{children:"At a high level, let's discuss what we'll want to add if our contract is to store multiple crossword puzzles. First, we'll have the concept of many puzzles where some of them will have different states (unfinished and finished) and we'll want to know which ones are unsolved in quick way. Another thing, which is a general rule of thumb when writing smart contracts, is to anticipate what might happen if it gets a lot of usage. What if we end up with 10,000 crossword puzzles? How might that affect how many data structures we use and which ones?"}),(0,r.jsx)(t.h2,{id:"lookupmap-and-unorderedset",children:"LookupMap and UnorderedSet"}),(0,r.jsx)(t.p,{children:"Let's try having two specialized NEAR collections:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupMap.html",children:"LookupMap"})," which will store key-value pairs. (Solution hash \xbb Puzzle object)"]}),"\n",(0,r.jsxs)(t.li,{children:["An ",(0,r.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.UnorderedSet.html",children:"UnorderedSet"})," containing a set (list with no duplicates) of the solution hashes for puzzles which have not been solved yet."]}),"\n"]}),(0,r.jsxs)(t.p,{children:["As you look at the list of specialized collections in the Rust SDK, you might notice some begin with ",(0,r.jsx)(t.code,{children:"Lookup"})," while others have ",(0,r.jsx)(t.code,{children:"Unordered"}),". As is written in the reference documentation, the ",(0,r.jsx)(t.code,{children:"Lookup"})," is non-iterable while the ",(0,r.jsx)(t.code,{children:"Unordered"})," collections are iterable. This means if you will need to loop through the list of contents of this data structure, you'll likely use an iterable data structure. If you'll only ever be adding and retrieving data by the key, and the key will always be known, it's more efficient to use a non-iterable collection."]}),(0,r.jsxs)(t.p,{children:["So why would we have two data structures here? Again, if we end up with a large number of puzzles, we might not be able to loop through all the puzzles, looking for ones that are unsolved. Because of the limit of gas execution per transaction, we must be conscious that there can be operations which will eventually exceed this limit. I suppose we could assume  that our ",(0,r.jsx)(t.code,{children:"UnorderedSet"})," of unsolved puzzles wouldn't contain tens of thousands of puzzles. That's one way to avoid running into limits, but we could also learn how to utilize ",(0,r.jsx)(t.strong,{children:"pagination"})," through an iterable collection like an ",(0,r.jsx)(t.code,{children:"UnorderedSet"})," which we'll get to later."]}),(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:o,alt:"Book showing pagination of hashes. Art created by pierced_staggg.near",width:"600"}),(0,r.jsxs)("figcaption",{children:["Think of our collection as having multiple pages of puzzle hashes.",(0,r.jsx)("br",{}),"Art by ",(0,r.jsx)("a",{href:"https://twitter.com/pierced_stag",target:"_blank",children:"pierced_staggg.near"})]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(t.p,{children:["As we remember from the previous chapter, every smart contract has a primary struct containing the ",(0,r.jsx)(t.code,{children:"#[near(contract_state)]"})," macro."]}),(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Naming the primary struct Note in the ",(0,r.jsx)(t.a,{href:"/vi/tutorials/crosswords/basics/set-up-skeleton#start-writing-rust",children:"previous chapter"})," we named our primary struct ",(0,r.jsx)(t.code,{children:"Contract"}),", but in this chapter we'll call it ",(0,r.jsx)(t.code,{children:"Crossword."})]}),(0,r.jsxs)(t.p,{children:["The name of the struct doesn't matter and there's nothing special about naming it ",(0,r.jsx)(t.code,{children:"Contract"}),", though you might see that convention used in several smart contracts on NEAR. We've named it something different simply to illustrate that there's no magic behind the scenes. This ",(0,r.jsx)(t.em,{children:"does"})," mean, however, that our ",(0,r.jsx)(t.code,{children:"impl"})," block will also be ",(0,r.jsx)(t.code,{children:"Crossword"}),". :::"]}),(0,r.jsx)(t.p,{children:"Here's how our struct will look with the iterable and non-iterable NEAR collections:"}),(0,r.jsx)(i.Ey,{language:"rust",start:"62",end:"72",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/master/contract/src/lib.rs"}),(0,r.jsxs)(t.p,{children:["Above, we have the ",(0,r.jsx)(t.code,{children:"puzzles"})," and ",(0,r.jsx)(t.code,{children:"unsolved_puzzles"})," fields which are collections."]}),(0,r.jsxs)(t.p,{children:["We also have an ",(0,r.jsx)(t.code,{children:"owner_id"})," so we can exercise a common pattern in smart contract development: implementing a rudimentary permission system which can restrict access to certain functions. We'll expand on this thought in a moment."]}),(0,r.jsxs)(t.p,{children:["The snippet below shows the first method in the implementation of the ",(0,r.jsx)(t.code,{children:"Crossword"})," struct, where the ",(0,r.jsx)(t.code,{children:"new"})," function sets up these two specialized collections."]}),(0,r.jsx)(i.Ey,{language:"rust",start:"74",end:"83",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/master/contract/src/lib.rs"}),(0,r.jsxs)(t.p,{children:["So during the initialization function (",(0,r.jsx)(t.code,{children:"new"}),") we're setting the ",(0,r.jsx)(t.code,{children:"owner_id"}),". For our purposes the owner will likely be the contract itself, but there can be several reasons to have it be a DAO or another user. Next, let's look at the ",(0,r.jsx)(t.code,{children:'b"c"'})," and ",(0,r.jsx)(t.code,{children:'b"u"'})," bits for the collection fields."]}),(0,r.jsx)(t.h2,{id:"collections-have-prefixes",children:"Collections have prefixes"}),(0,r.jsxs)(t.p,{children:["Above, the ",(0,r.jsx)(t.code,{children:"new"})," function is initializing the struct's fields by giving them a unique prefix. You can learn more about ",(0,r.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/collections",children:"the prefixes here"}),", but know that these prefixes (",(0,r.jsx)(t.code,{children:"c"})," and ",(0,r.jsx)(t.code,{children:"u"}),") should be short and different."]}),(0,r.jsxs)(t.p,{children:["Let's take a peek at how we'll add a new crossword puzzle. Note that there will be a new struct here, ",(0,r.jsx)(t.code,{children:"Answer"}),", which we haven't defined yet. We'll also be introducing the concept of enums, like ",(0,r.jsx)(t.code,{children:"PuzzleStatus::Solved"})," and ",(0,r.jsx)(t.code,{children:"PuzzleStatus::Unsolved"}),". We'll be covering these in the next section."]}),(0,r.jsxs)(t.p,{children:["Unlike the previous chapter where there was only one crossword puzzle, we'll be inserting into our new collections, so let's create a ",(0,r.jsx)(t.code,{children:"new_puzzle"})," method."]}),(0,r.jsx)(i.Ey,{language:"rust",start:"140",end:"157",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/master/contract/src/lib.rs"}),(0,r.jsx)(t.p,{children:"Now we're set up to store multiple puzzles!"}),(0,r.jsx)(t.h2,{id:"permissions-or-permissionless",children:"Permissions or permissionless?"}),(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:a,alt:"Guards or bouncers in front of a futuristic club with the label of a NEAR smart contract. Art created by connoisseur_dane.near",width:"600"}),(0,r.jsxs)("figcaption",{children:["Guarding which accounts can enter the smart contract logic.",(0,r.jsx)("br",{}),"Art by ",(0,r.jsx)("a",{href:"https://twitter.com/connoisseurdane",target:"_blank",children:"connoisseur_dane.near"})]})]}),(0,r.jsx)("br",{}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Is NEAR permissionless?"})}),(0,r.jsx)(t.p,{children:"C\xf3."}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"What did you mean by a permission system earlier, and what are the ways you can control permissions?"})}),(0,r.jsx)(t.p,{children:"There are two ways that permissions can be controlled:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"In the smart contract code itself"}),"\n",(0,r.jsx)(t.li,{children:"When using function-call access keys"}),"\n"]}),(0,r.jsx)(t.p,{children:"We'll get to the second topic in later in this chapter, but will focus on the first item."}),(0,r.jsxs)(t.p,{children:["As you can see in the previous snippet, the first thing that happens in the ",(0,r.jsx)(t.code,{children:"new_puzzle"})," method is a check. It looks to see if the predecessor (the person who most recently called this method, sometimes the same as the signer) is the same as the ",(0,r.jsx)(t.code,{children:"owner_id"})," that we set during the contract's initialization."]}),(0,r.jsxs)(t.p,{children:["If someone else is trying to call ",(0,r.jsx)(t.code,{children:"new_puzzle"}),", this check will fail and the smart contract will panic, going no further. This example is the simplest form of a permission. Much more complex system can exist for users. The SputnikDAO smart contracts, for instance, implement custom policies. It's up the smart contract developer to write their roles/policies and apply them to users. Sometimes an allow-list (or whitelist) is used."]}),(0,r.jsxs)(t.p,{children:["In short, ",(0,r.jsx)(t.strong,{children:"any account with a full-access key can call any method on a smart contract"}),", but that doesn't mean the smart contract will let them continue execution. It's up to the developer to protect their functions with guards like the one in ",(0,r.jsx)(t.code,{children:"new_puzzle"}),"."]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.p,{children:"Let's dive into structs and enums next."})]})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),s=n(36905),i=n(12466),o=n(16550),a=n(20469),l=n(91980),c=n(67392),u=n(50012);function h(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,i=(0,o.k6)(),a=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:s});return[(0,l._X)(a),(0,r.useCallback)((function(e){if(a){var t=new URLSearchParams(i.location.search);t.set(a,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[a,i])]}function f(e){var t,n,s,i,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,f=d(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:o,tabValues:f})})),b=g[0],w=g[1],x=m({queryString:c,groupId:h}),v=x[0],j=x[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,u.Nk)(t),s=n[0],i=n[1],[s,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),k=y[0],z=y[1],A=function(){var e=null!=v?v:k;return p({value:e,tabValues:f})?e:null}();return(0,a.Z)((function(){A&&w(A)}),[A]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);w(e),j(e),z(e)}),[j,z,f]),tabValues:f}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(85893);function x(e){var t=e.className,n=e.block,r=e.selectedValue,o=e.selectValue,a=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==r&&(c(t),o(s))},h=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,s=l.indexOf(e.currentTarget)+1;n=null!=(r=l[s])?r:l[0];break;case"ArrowLeft":var i,o=l.indexOf(e.currentTarget)-1;n=null!=(i=l[o])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,w.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:h,onClick:u},i,{className:(0,s.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,s=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===s}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function j(e){var t=f(e);return(0,w.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,w.jsx)(x,Object.assign({},t,e)),(0,w.jsx)(v,Object.assign({},t,e))]})}function y(e){var t=(0,g.Z)();return(0,w.jsx)(j,Object.assign({},e,{children:h(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>g,SQ:()=>f});var r=n(67294),s=n(74866),i=n(85162),o=n(74165),a=n(15861),l=n(1841),c=n.n(l),u=n(85893);function h(){return(h=(0,a.Z)((0,o.Z)().mark((function e(t,n,r){var s,i,a,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(t+"-until"))&&i>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return a=s.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):a.length,a=a.slice(n,r),l=a.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",a.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const d=function(e){var t=e.url,n=e.start,s=e.end,i=e.language,o=e.fname,a=e.metastring,l=(0,r.useState)("Loading..."),d=l[0],p=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),s=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+s+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return h.apply(this,arguments)}(e,n,s);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(c(),{language:i,metastring:a+" showLineNumbers",children:d}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),s=n.start,i=n.end,o=n.fname;if(e.type===g)return g({url:r,start:s,end:i,language:t,fname:o});return e}(e,n)})),1==t.length?(0,u.jsx)(i.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(i.Z,{value:t,label:e.props.fname,children:e})}))})}function g(e){var t=e.url,n=e.start,r=e.end,s=e.language,i=e.fname,o=e.metastring;return d({url:t,start:n,end:r,language:s,fname:i,metastring:o})}}}]);