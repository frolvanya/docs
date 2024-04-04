"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6503],{46661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(85893),i=t(11151),s=(t(74866),t(85162),t(2154));const r={id:"quickstart",title:"What are NEAR Components?",sidebar_label:"What is a Component?"},o=void 0,l={id:"bos/tutorial/quickstart",title:"What are NEAR Components?",description:"NEAR Components are a new way to build web applications. They are composable, reusable and decentralized.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/bos/tutorial/quickstart.md",sourceDirName:"bos/tutorial",slug:"/bos/tutorial/quickstart",permalink:"/vi/bos/tutorial/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/tutorial/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,frontMatter:{id:"quickstart",title:"What are NEAR Components?",sidebar_label:"What is a Component?"},sidebar:"build",previous:{title:"Bug Bounty Program",permalink:"/vi/develop/contracts/security/bounty"},next:{title:"Choose your Dev Environment",permalink:"/vi/bos/dev/intro"}},c={},d=[{value:"Familiar to Web Developers",id:"familiar-to-web-developers",level:2},{value:"NEAR Native",id:"near-native",level:2},{value:"Social from the Get-Go",id:"social-from-the-get-go",level:2},{value:"Fully On-Chain &amp; Easily Composable",id:"fully-on-chain--easily-composable",level:2},{value:"Multi-Chain by Design",id:"multi-chain-by-design",level:2},{value:"Next Steps",id:"next-steps",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"NEAR Components are a new way to build web applications. They are composable, reusable and decentralized."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"img",src:t(10604).Z+"",width:"1282",height:"470"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"You can login to interact with the examples in this section."})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"familiar-to-web-developers",children:"Familiar to Web Developers"}),"\n",(0,a.jsxs)(n.p,{children:["NEAR Components are built on top of ",(0,a.jsx)(n.a,{href:"https://react.dev/",children:"React Components"}),", meaning that they:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Handle input through the ",(0,a.jsx)(n.code,{children:"props"})," variable"]}),"\n",(0,a.jsxs)(n.li,{children:["Handle state through the ",(0,a.jsx)(n.a,{href:"https://react.dev/reference/react/useState",children:(0,a.jsx)(n.code,{children:"useState"})})," hook"]}),"\n",(0,a.jsxs)(n.li,{children:["Handle side effects through the ",(0,a.jsx)(n.a,{href:"https://react.dev/reference/react/useEffect",children:(0,a.jsx)(n.code,{children:"useEffect"})})," hook"]}),"\n"]}),"\n",(0,a.jsx)(s.W,{id:"1",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'const name = props.name || "Maria";\nconst [count, setCount] = useState(1);\n\nreturn (\n  <div>\n    <p> {count} cheers for {name}! </p>\n    <button onClick={() > setCount(count + 1)}>Cheers!</button>\n  </div>\n);\n'})})}),"\n",(0,a.jsxs)(n.p,{children:["In contrast with React, NEAR Components are not wrapped in a ",(0,a.jsx)(n.code,{children:"function"})," or ",(0,a.jsx)(n.code,{children:"class"})," definition."]}),"\n",(0,a.jsx)(n.p,{children:"Indeed, when writing a NEAR Component, you focus on writing the body of the component, which is a function that returns the JSX to be rendered."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"near-native",children:"NEAR Native"}),"\n",(0,a.jsxs)(n.p,{children:["NEAR Components can readily ",(0,a.jsx)(n.a,{href:"/vi/bos/api/near",children:"interact with smart contracts"})," in the NEAR Blockchain. While ",(0,a.jsx)(n.code,{children:"view"})," methods are free to query by anyone, ",(0,a.jsx)(n.code,{children:"call"})," methods require the user to be logged in."]}),"\n",(0,a.jsx)(s.W,{id:"2",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const counter = Near.view('counter.near-examples.testnet', 'get_num')\n\nif(counter === null) return 'Loading...'\n\nconst add = () => {\n  Near.call('counter.near-examples.testnet', 'increment')\n}\n\nconst subtract = () => {\n  Near.call('counter.near-examples.testnet', 'decrement')\n}\n\nreturn <>\n  <p> Counter: {counter} </p>\n  {!context.accountId &&\n    <p color=\"red\"> Please login to interact with the contract</p>\n  }\n  {context.accountId && \n  <>\n    <button onClick={add}> + </button>\n    <button onClick={subtract}> - </button>\n  </>\n  }\n</>\n"})})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"social-from-the-get-go",children:"Social from the Get-Go"}),"\n",(0,a.jsxs)(n.p,{children:["NEAR Components are easily integrated with ",(0,a.jsx)(n.a,{href:"https://near.social/",children:"NEAR Social"}),", a social network built on NEAR."]}),"\n",(0,a.jsx)(s.W,{id:"3",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const item = (blockHeight) => ({ type: 'social', path: 'influencer.testnet/post/main', blockHeight });\n\n// retrieve indexed posts by influencer.testnet\nconst idx_posts = Social.index(\n  'post', 'main', { accountId: ['influencer.testnet'] }\n);\n\nif (idx_posts === null) return 'Loading...';\n\n// retrieve likes for each post\nconst likes = idx_posts.map(\n  index => Social.index('like', item(index.blockHeight)).length\n);\n\n// retrieve data for each post\nconst post_data = idx_posts.map(\n  index => Social.get(`${index.accountId}/post/main`, index.blockHeight)\n);\n\n// defined \"Like\" function\nconst like = (blockHeight) => Social.set(\n  {index:{like: JSON.stringify({key: item(blockHeight), value: {type: 'like'}})}}\n)\n\nreturn <>\n  <h5>Posts from <i>influencer.testnet</i></h5>\n  {post_data.map((post, idx) =>\n    <div className=\"mt-3\">\n      <div>{JSON.parse(post).text} - {likes[idx]} likes</div>\n      {context.accountId && <button className=\"btn btn-danger btn-sm\" onClick={() => like(idx_posts[idx].blockHeight)}>Like</button>}\n    </div>\n  )}\n</>\n\n"})})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"fully-on-chain--easily-composable",children:"Fully On-Chain & Easily Composable"}),"\n",(0,a.jsxs)(n.p,{children:["Leveraging the cheap storage and computation of the NEAR Blockchain, NEAR Components' code is stored fully on-chain in the SocialDB smart contract (",(0,a.jsx)(n.code,{children:"social.near"}),")."]}),"\n",(0,a.jsx)(s.W,{height:"40px",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// retrieving the code of a stored component\nreturn Social.get('influencer.testnet/widget/Greeter')\n"})})}),"\n",(0,a.jsx)(n.p,{children:"Once deployed, a component can be imported and used by any other component. Composing components as LEGO blocks allows you to build complex applications."}),"\n",(0,a.jsx)(s.W,{id:"4",height:"80px",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// Rendering the component with props\nreturn <Widget src="influencer.testnet/widget/Greeter"\n               props={{name: "Anna", amount: 3}} />;\n'})})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"multi-chain-by-design",children:"Multi-Chain by Design"}),"\n",(0,a.jsx)(n.p,{children:"NEAR Components can easily interact with Ethereum compatible blockchains, helping to easily create decentralized frontends for multi-chain applications."}),"\n",(0,a.jsx)(s.W,{id:"5",height:"100px",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'if (\n  state.chainId === undefined &&\n  ethers !== undefined &&\n  Ethers.send("eth_requestAccounts", [])[0]\n) {\n  Ethers.provider()\n    .getNetwork()\n    .then((chainIdData) => {\n      if (chainIdData?.chainId) {\n        State.update({ chainId: chainIdData.chainId });\n      }\n    });\n}\nif (state.chainId !== undefined && state.chainId !== 1) {\n  return <p>Switch to Ethereum Mainnet</p>;\n}\n\n// FETCH LIDO ABI\n\nconst lidoContract = "0xae7ab96520de3a18e5e111b5eaab095312d7fe84";\nconst tokenDecimals = 18;\n\nconst lidoAbi = fetch(\n  "https://raw.githubusercontent.com/lidofinance/lido-subgraph/master/abis/Lido.json"\n);\nif (!lidoAbi.ok) {\n  return "Loading";\n}\n\nconst iface = new ethers.utils.Interface(lidoAbi.body);\n\n// FETCH LIDO STAKING APR\n\nif (state.lidoArp === undefined) {\n  const apr = fetch(\n    "https://api.allorigins.win/get?url=https://stake.lido.fi/api/sma-steth-apr"\n  );\n  if (!apr) return;\n  State.update({ lidoArp: JSON.parse(apr?.body?.contents) ?? "..." });\n}\n\n// HELPER FUNCTIONS\n\nconst getStakedBalance = (receiver) => {\n  const encodedData = iface.encodeFunctionData("balanceOf", [receiver]);\n\n  return Ethers.provider()\n    .call({\n      to: lidoContract,\n      data: encodedData,\n    })\n    .then((rawBalance) => {\n      const receiverBalanceHex = iface.decodeFunctionResult(\n        "balanceOf",\n        rawBalance\n      );\n\n      return Big(receiverBalanceHex.toString())\n        .div(Big(10).pow(tokenDecimals))\n        .toFixed(2)\n        .replace(/\\d(?=(\\d{3})+\\.)/g, "$&,");\n    });\n};\n\nconst submitEthers = (strEther, _referral) => {\n  if (!strEther) {\n    return console.log("Amount is missing");\n  }\n  const erc20 = new ethers.Contract(\n    lidoContract,\n    lidoAbi.body,\n    Ethers.provider().getSigner()\n  );\n\n  let amount = ethers.utils.parseUnits(strEther, tokenDecimals).toHexString();\n\n  erc20.submit(lidoContract, { value: amount }).then((transactionHash) => {\n    console.log("transactionHash is " + transactionHash);\n  });\n};\n\n// DETECT SENDER\n\nif (state.sender === undefined) {\n  const accounts = Ethers.send("eth_requestAccounts", []);\n  if (accounts.length) {\n    State.update({ sender: accounts[0] });\n    console.log("set sender", accounts[0]);\n  }\n}\n\n//if (!state.sender)  return "Please login first";\n\n// FETCH SENDER BALANCE\n\nif (state.balance === undefined && state.sender) {\n  Ethers.provider()\n    .getBalance(state.sender)\n    .then((balance) => {\n      State.update({ balance: Big(balance).div(Big(10).pow(18)).toFixed(2) });\n    });\n}\n\n// FETCH SENDER STETH BALANCE\n\nif (state.stakedBalance === undefined && state.sender) {\n  getStakedBalance(state.sender).then((stakedBalance) => {\n    State.update({ stakedBalance });\n  });\n}\n\n// FETCH TX COST\n\nif (state.txCost === undefined) {\n  const gasEstimate = ethers.BigNumber.from(1875000);\n  const gasPrice = ethers.BigNumber.from(1500000000);\n\n  const gasCostInWei = gasEstimate.mul(gasPrice);\n  const gasCostInEth = ethers.utils.formatEther(gasCostInWei);\n\n  let responseGql = fetch(\n    "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",\n    {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({\n        query: `{\n          bundle(id: "1" ) {\n            ethPrice\n          }\n        }`,\n      }),\n    }\n  );\n\n  if (!responseGql) return "";\n\n  const ethPriceInUsd = responseGql.body.data.bundle.ethPrice;\n\n  const txCost = Number(gasCostInEth) * Number(ethPriceInUsd);\n\n  State.update({ txCost: `$${txCost.toFixed(2)}` });\n}\n\n// FETCH CSS\n\nconst cssFont = fetch(\n  "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800"\n).body;\nconst css = fetch(\n  "https://pluminite.mypinata.cloud/ipfs/Qmboz8aoSvVXLeP5pZbRtNKtDD3kX5D9DEnfMn2ZGSJWtP"\n).body;\n\nif (!cssFont || !css) return "";\n\nif (!state.theme) {\n  State.update({\n    theme: styled.div`\n    font-family: Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    ${cssFont}\n    ${css}\n`,\n  });\n}\nconst Theme = state.theme;\n\n// OUTPUT UI\n\nconst getSender = () => {\n  return !state.sender\n    ? ""\n    : state.sender.substring(0, 6) +\n        "..." +\n        state.sender.substring(state.sender.length - 4, state.sender.length);\n};\n\nreturn (\n  <Theme>\n    <div className="LidoContainer">\n      <div className="Header">Stake Ether</div>\n      <div className="SubHeader">Stake ETH and receive stETH while staking.</div>\n\n      <div className="LidoForm">\n        {state.sender && (\n          <>\n            <div className="LidoFormTopContainer">\n              <div className="LidoFormTopContainerLeft">\n                <div className="LidoFormTopContainerLeftContent1">\n                  <div className="LidoFormTopContainerLeftContent1Container">\n                    <span>Available to stake</span>\n                    <div className="LidoFormTopContainerLeftContent1Circle" />\n                  </div>\n                </div>\n                <div className="LidoFormTopContainerLeftContent2">\n                  <span>\n                    {state.balance ?? (!state.sender ? "0" : "...")}&nbsp;ETH\n                  </span>\n                </div>\n              </div>\n              <div className="LidoFormTopContainerRight">\n                <div className="LidoFormTopContainerRightContent1">\n                  <div className="LidoFormTopContainerRightContent1Text">\n                    <span>{getSender()}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div className="LidoSplitter" />\n          </>\n        )}\n        <div\n          className={\n            state.sender ? "LidoFormBottomContainer" : "LidoFormTopContainer"\n }\n>\n          <div className="LidoFormTopContainerLeft">\n            <div className="LidoFormTopContainerLeftContent1">\n              <div className="LidoFormTopContainerLeftContent1Container">\n                <span>Staked amount</span>\n              </div>\n            </div>\n            <div className="LidoFormTopContainerLeftContent2">\n              <span>\n                {state.stakedBalance ?? (!state.sender ? "0" : "...")}\n                &nbsp;stETH\n              </span>\n            </div>\n          </div>\n          <div className="LidoFormTopContainerRight">\n            <div className="LidoAprContainer">\n              <div className="LidoAprTitle">Lido APR</div>\n              <div className="LidoAprValue">{state.lidoArp ?? "..."}%</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div className="LidoStakeForm">\n        <div className="LidoStakeFormInputContainer">\n          <span className="LidoStakeFormInputContainerSpan1">\n            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\n              <path\n                opacity="0.6"\n                d="M11.999 3.75v6.098l5.248 2.303-5.248-8.401z"\n              ></path>\n              <path d="M11.999 3.75L6.75 12.151l5.249-2.303V3.75z"></path>\n              <path\n                opacity="0.6"\n                d="M11.999 16.103v4.143l5.251-7.135L12 16.103z"\n              ></path>\n              <path d="M11.999 20.246v-4.144L6.75 13.111l5.249 7.135z"></path>\n              <path\n                opacity="0.2"\n                d="M11.999 15.144l5.248-2.993-5.248-2.301v5.294z"\n              ></path>\n              <path\n                opacity="0.6"\n                d="M6.75 12.151l5.249 2.993V9.85l-5.249 2.3z"\n              ></path>\n            </svg>\n          </span>\n          <span className="LidoStakeFormInputContainerSpan2">\n            <input\n              disabled={!state.sender}\n              className="LidoStakeFormInputContainerSpan2Input"\n              value={state.strEther}\n              onChange={(e) > State.update({ strEther: e.target.value })}\n              placeholder="Amount"\n            />\n          </span>\n          <span\n            className="LidoStakeFormInputContainerSpan3"\n            onClick={() > {\n              State.update({\n                strEther: (state.balance > 0.05\n                  ? parseFloat(state.balance) - 0.05\n                  : 0\n                ).toFixed(2),\n              });\n            }}\n          >\n            <button\n              className="LidoStakeFormInputContainerSpan3Content"\n              disabled={!state.sender}\n            >\n              <span className="LidoStakeFormInputContainerSpan3Max">MAX</span>\n            </button>\n          </span>\n        </div>\n        {!!state.sender ? (\n          <button\n            className="LidoStakeFormSubmitContainer"\n            onClick={() > submitEthers(state.strEther, state.sender)}\n          >\n            <span>Submit</span>\n          </button>\n        ) : (\n          <Web3Connect\n            className="LidoStakeFormSubmitContainer"\n            connectLabel="Connect with Web3"\n          />\n        )}\n\n        <div className="LidoFooterContainer">\n          {state.sender && (\n            <div className="LidoFooterRaw">\n              <div className="LidoFooterRawLeft">You will receive</div>\n              <div className="LidoFooterRawRight">${state.strEther ?? 0} stETH</div>\n            </div>\n          )}\n          <div className="LidoFooterRaw">\n            <div className="LidoFooterRawLeft">Exchange rate</div>\n            <div className="LidoFooterRawRight">1 ETH = 1 stETH</div>\n          </div>\n          {false && (\n            <div className="LidoFooterRaw">\n              <div className="LidoFooterRawLeft">Transaction cost</div>\n              <div className="LidoFooterRawRight">{state.txCost}</div>\n            </div>\n          )}\n          <div className="LidoFooterRaw">\n            <div className="LidoFooterRawLeft">Reward fee</div>\n            <div className="LidoFooterRawRight">10%</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </Theme>\n);\n'})})}),"\n",(0,a.jsx)(n.admonition,{title:"ETH Disabled in Docs",type:"danger",children:(0,a.jsxs)(n.p,{children:["For security reasons, interacting with Ethereum is disabled in our documentation. To see a working example please navigate to the ",(0,a.jsx)(n.a,{href:"https://near.social/zavodil.near/widget/Lido",children:"deployed NEAR Component"}),"."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(n.p,{children:["Build and deploy your first components without leaving the browser. Go to ",(0,a.jsx)(n.a,{href:"https://near.org/sandbox",children:"https://near.org/sandbox"})," , create an account and start building!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const i={tabItem:"tabItem_Ymn6"};var s=t(85893);function r(e){var n=e.children,t=e.hidden,r=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(67294),i=t(36905),s=t(12466),r=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId,s=(0,r.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:i});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function v(e){var n,t,i,s,r=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,v=h(e),f=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var i=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:r,tabValues:v})})),b=f[0],g=f[1],x=m({queryString:c,groupId:u}),C=x[0],N=x[1],j=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),i=t[0],s=t[1],[i,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),y=j[0],E=j[1],k=function(){var e=null!=C?C:y;return p({value:e,tabValues:v})?e:null}();return(0,o.Z)((function(){k&&g(k)}),[k]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),N(e),E(e)}),[N,E,v]),tabValues:v}}var f=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){var n=e.className,t=e.block,a=e.selectedValue,r=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(c(n),r(i))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,i=l.indexOf(e.currentTarget)+1;t=null!=(a=l[i])?a:l[0];break;case"ArrowLeft":var s,r=l.indexOf(e.currentTarget)-1;t=null!=(s=l[r])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,i.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function C(e){var n=e.lazy,t=e.children,i=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var r=s.find((function(e){return e.props.value===i}));return r?(0,a.cloneElement)(r,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})}))})}function N(e){var n=v(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(C,Object.assign({},e,n))]})}function j(e){var n=(0,f.Z)();return(0,g.jsx)(N,Object.assign({},e,{children:u(e.children)}),String(n))}},2154:(e,n,t)=>{t.d(n,{W:()=>o});var a=t(67294),i=t(93293),s=t(91262),r=t(85893);function o(e){var n=e.children,o=e.id,l=void 0===o?1:o,c=e.height,d=void 0===c?"160px":c;return(0,r.jsx)(s.Z,{fallback:(0,r.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(b){}var s=t(58613),o=s.Widget,c=s.useInitNear,u=t(2302).ZP,h=(0,a.useState)(e),p=h[0],m=h[1],v=c().initNear,f=(0,i.O)().selector;return(0,a.useEffect)((function(){v&&f&&v({networkId:"testnet",selector:f})}),[v,f]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"monaco",children:(0,r.jsx)(u,{height:d,value:p,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return m(e)}})}),(0,r.jsx)("div",{className:"code_iframe",children:(0,r.jsx)("div",{className:"bootstrap-scope",children:(0,r.jsx)("div",{className:"vm-widget",children:(0,r.jsx)(o,{code:p},l)})})}),n[1]]})}})}},10604:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/bos-landing-f1ca83f1f050a9b866df03ed4bede280.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);