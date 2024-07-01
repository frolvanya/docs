"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8016],{85573:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=t(85893),o=t(11151);const s={id:"lido",title:"Lido \uc608\uc2dc"},i="Hello Lido!",r={id:"tutorials/near-components/lido",title:"Lido \uc608\uc2dc",description:"If you are ready to explore further, the Lido component serves as an excellent fully-fledged example, as it demonstrates how to interact with a smart contract deployed on the Ethereum mainnet.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/near-components/hello-lido.md",sourceDirName:"3.tutorials/near-components",slug:"/tutorials/near-components/lido",permalink:"/ko/tutorials/near-components/lido",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/hello-lido.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1718378911e3,frontMatter:{id:"lido",title:"Lido \uc608\uc2dc"},sidebar:"tutorials",previous:{title:"Best Practices for Ethereum developers on NEAR",permalink:"/ko/tutorials/near-components/ethers-js-best-practices"},next:{title:"\uc18c\uac1c",permalink:"/ko/tutorials/fts/introduction"}},d={},c=[{value:"\uad6c\uc131 \uc694\uc18c \ud3ec\ud06c",id:"\uad6c\uc131-\uc694\uc18c-\ud3ec\ud06c",level:3},{value:"\uc18c\uc2a4 \ucf54\ub4dc",id:"\uc18c\uc2a4-\ucf54\ub4dc",level:3},{value:"\uad6c\uc131 \uc694\uc18c \ud3ec\ud06c",id:"\uad6c\uc131-\uc694\uc18c-\ud3ec\ud06c-1",level:4}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"hello-lido",children:"Hello Lido!"}),"\n",(0,a.jsxs)(e.p,{children:["If you are ready to explore further, the ",(0,a.jsx)(e.a,{href:"https://dev.near.org/zavodil.near/widget/Lido",children:"Lido component"})," serves as an excellent fully-fledged example, as it demonstrates how to interact with a smart contract deployed on the Ethereum mainnet."]}),"\n",(0,a.jsx)(e.admonition,{title:"Ethers.js",type:"info",children:(0,a.jsxs)(e.p,{children:["This component uses the ",(0,a.jsx)(e.a,{href:"https://ethers.org",children:"Ethers JavaScript"})," library to interact with Ethereum smart contracts. Follow ",(0,a.jsx)(e.a,{href:"https://docs.ethers.org/v6/",children:"this link"})," for the official ",(0,a.jsx)(e.code,{children:"ethers.js"})," documentation."]})}),"\n",(0,a.jsx)(e.admonition,{title:"Web3 connect",type:"info",children:(0,a.jsxs)(e.p,{children:["The Lido example uses the ",(0,a.jsx)(e.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=a_liutiev.near/widget/button_web3connect",children:"Web3Connect component"})," to provide a ",(0,a.jsx)(e.a,{href:"https://github.com/WalletConnect/web3modal",children:"WalletConnect modal"})," so the user can connect with any Web3 Ethereum wallet like Ledger or MetaMask."]})}),"\n",(0,a.jsx)(e.h3,{id:"\uad6c\uc131-\uc694\uc18c-\ud3ec\ud06c",children:"\uad6c\uc131 \uc694\uc18c \ud3ec\ud06c"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["Navigate to ",(0,a.jsx)(e.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/Lido",children:"the component"})]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"Fork"}),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(e.li,{children:"Feel free to make any changes"}),"\n",(0,a.jsxs)(e.li,{children:["Click on ",(0,a.jsx)("kbd",{children:"Save"})," to deploy the component"]}),"\n"]}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsx)(e.p,{children:"\uad6c\uc131 \uc694\uc18c\ub97c \ubc30\ud3ec\ud558\ub824\uba74 NEAR \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uace0 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc73c\ub85c \uc18c\ub7c9\uc758 NEAR\ub97c \uc608\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. This is because the components are stored in the NEAR network."})}),"\n",(0,a.jsx)(e.h3,{id:"\uc18c\uc2a4-\ucf54\ub4dc",children:"\uc18c\uc2a4 \ucf54\ub4dc"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'if (\n  state.chainId === undefined &&\n  ethers !== undefined &&\n  Ethers.send("eth_requestAccounts", [])[0]\n) {\n  Ethers.provider()\n    .getNetwork()\n    .then((chainIdData) => {\n      if (chainIdData?.chainId) {\n        State.update({ chainId: chainIdData.chainId });\n      }\n    });\n}\nif (state.chainId !== undefined && state.chainId !== 1) {\n  return <p>Switch to Ethereum Mainnet</p>;\n}\n\n// FETCH LIDO ABI\n\nconst lidoContract = "0xae7ab96520de3a18e5e111b5eaab095312d7fe84";\nconst tokenDecimals = 18;\n\nconst lidoAbi = fetch(\n  "https://raw.githubusercontent.com/lidofinance/lido-subgraph/master/abis/Lido.json"\n);\nif (!lidoAbi.ok) {\n  return "Loading";\n}\n\nconst iface = new ethers.utils.Interface(lidoAbi.body);\n\n// FETCH LIDO STAKING APR\n\nif (state.lidoArp === undefined) {\n  const apr = fetch(\n    "https://api.allorigins.win/get?url=https://stake.lido.fi/api/sma-steth-apr"\n  );\n  if (!apr) return;\n  State.update({ lidoArp: JSON.parse(apr?.body?.contents) ?? "..." });\n}\n\n// HELPER FUNCTIONS\n\nconst getStakedBalance = (receiver) => {\n  const encodedData = iface.encodeFunctionData("balanceOf", [receiver]);\n\n  return Ethers.provider()\n    .call({\n      to: lidoContract,\n      data: encodedData,\n    })\n    .then((rawBalance) => {\n      const receiverBalanceHex = iface.decodeFunctionResult(\n        "balanceOf",\n        rawBalance\n      );\n\n      return Big(receiverBalanceHex.toString())\n        .div(Big(10).pow(tokenDecimals))\n        .toFixed(2)\n        .replace(/\\d(?=(\\d{3})+\\.)/g, "$&,");\n    });\n};\n\nconst submitEthers = (strEther, _referral) => {\n  if (!strEther) {\n    return console.log("Amount is missing");\n  }\n  const erc20 = new ethers.Contract(\n    lidoContract,\n    lidoAbi.body,\n    Ethers.provider().getSigner()\n  );\n\n  let amount = ethers.utils.parseUnits(strEther, tokenDecimals).toHexString();\n\n  erc20.submit(lidoContract, { value: amount }).then((transactionHash) => {\n    console.log("transactionHash is " + transactionHash);\n  });\n};\n\n// DETECT SENDER\n\nif (state.sender === undefined) {\n  const accounts = Ethers.send("eth_requestAccounts", []);\n  if (accounts.length) {\n    State.update({ sender: accounts[0] });\n    console.log("set sender", accounts[0]);\n  }\n}\n\n//if (!state.sender)  return "Please login first";\n\n// FETCH SENDER BALANCE\n\nif (state.balance === undefined && state.sender) {\n  Ethers.provider()\n    .getBalance(state.sender)\n    .then((balance) => {\n      State.update({ balance: Big(balance).div(Big(10).pow(18)).toFixed(2) });\n    });\n}\n\n// FETCH SENDER STETH BALANCE\n\nif (state.stakedBalance === undefined && state.sender) {\n  getStakedBalance(state.sender).then((stakedBalance) => {\n    State.update({ stakedBalance });\n  });\n}\n\n// FETCH TX COST\n\nif (state.txCost === undefined) {\n  const gasEstimate = ethers.BigNumber.from(1875000);\n  const gasPrice = ethers.BigNumber.from(1500000000);\n\n  const gasCostInWei = gasEstimate.mul(gasPrice);\n  const gasCostInEth = ethers.utils.formatEther(gasCostInWei);\n\n  let responseGql = fetch(\n    "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",\n    {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({\n        query: `{\n          bundle(id: "1" ) {\n            ethPrice\n          }\n        }`,\n      }),\n    }\n  );\n\n  if (!responseGql) return "";\n\n  const ethPriceInUsd = responseGql.body.data.bundle.ethPrice;\n\n  const txCost = Number(gasCostInEth) * Number(ethPriceInUsd);\n\n  State.update({ txCost: `$${txCost.toFixed(2)}` });\n}\n\n// FETCH CSS\n\nconst cssFont = fetch(\n  "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800"\n).body;\nconst css = fetch(\n  "https://pluminite.mypinata.cloud/ipfs/Qmboz8aoSvVXLeP5pZbRtNKtDD3kX5D9DEnfMn2ZGSJWtP"\n).body;\n\nif (!cssFont || !css) return "";\n\nif (!state.theme) {\n  State.update({\n    theme: styled.div`\n    font-family: Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    ${cssFont}\n    ${css}\n`,\n  });\n}\nconst Theme = state.theme;\n\n// OUTPUT UI\n\nconst getSender = () => {\n  return !state.sender\n    ? ""\n    : state.sender.substring(0, 6) +\n        "..." +\n        state.sender.substring(state.sender.length - 4, state.sender.length);\n};\n\nreturn (\n  <Theme>\n    <div className="LidoContainer">\n      <div className="Header">Stake Ether</div>\n      <div className="SubHeader">Stake ETH and receive stETH while staking.</div>\n\n      <div className="LidoForm">\n        {state.sender && (\n          <>\n            <div className="LidoFormTopContainer">\n              <div className="LidoFormTopContainerLeft">\n                <div className="LidoFormTopContainerLeftContent1">\n                  <div className="LidoFormTopContainerLeftContent1Container">\n                    <span>Available to stake</span>\n                    <div className="LidoFormTopContainerLeftContent1Circle" />\n                  </div>\n                </div>\n                <div className="LidoFormTopContainerLeftContent2">\n                  <span>\n                    {state.balance ?? (!state.sender ? "0" : "...")}&amp;amp;nbsp;ETH\n                  </span>\n                </div>\n              </div>\n              <div className="LidoFormTopContainerRight">\n                <div className="LidoFormTopContainerRightContent1">\n                  <div className="LidoFormTopContainerRightContent1Text">\n                    <span>{getSender()}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div className="LidoSplitter" />\n          </>\n        )}\n        <div\n          className={\n            state.sender ? "LidoFormBottomContainer" : "LidoFormTopContainer"\n          }\n        >\n          <div className="LidoFormTopContainerLeft">\n            <div className="LidoFormTopContainerLeftContent1">\n              <div className="LidoFormTopContainerLeftContent1Container">\n                <span>Staked amount</span>\n              </div>\n            </div>\n            <div className="LidoFormTopContainerLeftContent2">\n              <span>\n                {state.stakedBalance ?? (!state.sender ? "0" : "...")}\n                &amp;amp;nbsp;stETH\n              </span>\n            </div>\n          </div>\n          <div className="LidoFormTopContainerRight">\n            <div className="LidoAprContainer">\n              <div className="LidoAprTitle">Lido APR</div>\n              <div className="LidoAprValue">{state.lidoArp ?? "..."}%</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div className="LidoStakeForm">\n        <div className="LidoStakeFormInputContainer">\n          <span className="LidoStakeFormInputContainerSpan1">\n            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">\n              <path\n                opacity="0.6"\n                d="M11.999 3.75v6.098l5.248 2.303-5.248-8.401z"\n              ></path>\n              <path d="M11.999 3.75L6.75 12.151l5.249-2.303V3.75z"></path>\n              <path\n                opacity="0.6"\n                d="M11.999 16.103v4.143l5.251-7.135L12 16.103z"\n              ></path>\n              <path d="M11.999 20.246v-4.144L6.75 13.111l5.249 7.135z"></path>\n              <path\n                opacity="0.2"\n                d="M11.999 15.144l5.248-2.993-5.248-2.301v5.294z"\n              ></path>\n              <path\n                opacity="0.6"\n                d="M6.75 12.151l5.249 2.993V9.85l-5.249 2.3z"\n              ></path>\n            </svg>\n          </span>\n          <span className="LidoStakeFormInputContainerSpan2">\n            <input\n              disabled={!state.sender}\n              className="LidoStakeFormInputContainerSpan2Input"\n              value={state.strEther}\n              onChange={(e) => State.update({ strEther: e.target.value })}\n              placeholder="Amount"\n            />\n          </span>\n          <span\n            className="LidoStakeFormInputContainerSpan3"\n            onClick={() => {\n              State.update({\n                strEther: (state.balance > 0.05\n                  ? parseFloat(state.balance) - 0.05\n                  : 0\n                ).toFixed(2),\n              });\n            }}\n          >\n            <button\n              className="LidoStakeFormInputContainerSpan3Content"\n              disabled={!state.sender}\n            >\n              <span className="LidoStakeFormInputContainerSpan3Max">MAX</span>\n            </button>\n          </span>\n        </div>\n        {!!state.sender ? (\n          <button\n            className="LidoStakeFormSubmitContainer"\n            onClick={() => submitEthers(state.strEther, state.sender)}\n          >\n            <span>Submit</span>\n          </button>\n        ) : (\n          <Web3Connect\n            className="LidoStakeFormSubmitContainer"\n            connectLabel="Connect with Web3"\n          />\n        )}\n\n        <div className="LidoFooterContainer">\n          {state.sender && (\n            <div className="LidoFooterRaw">\n              <div className="LidoFooterRawLeft">You will receive</div>\n              <div className="LidoFooterRawRight">${state.strEther ?? 0} stETH</div>\n            </div>\n          )}\n          <div className="LidoFooterRaw">\n            <div className="LidoFooterRawLeft">Exchange rate</div>\n            <div className="LidoFooterRawRight">1 ETH = 1 stETH</div>\n          </div>\n          {false && (\n            <div className="LidoFooterRaw">\n              <div className="LidoFooterRawLeft">Transaction cost</div>\n              <div className="LidoFooterRawRight">{state.txCost}</div>\n            </div>\n          )}\n          <div className="LidoFooterRaw">\n            <div className="LidoFooterRawLeft">Reward fee</div>\n            <div className="LidoFooterRawRight">10%</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </Theme>\n);\n'})}),"\n",(0,a.jsx)(e.h4,{id:"\uad6c\uc131-\uc694\uc18c-\ud3ec\ud06c-1",children:"\uad6c\uc131 \uc694\uc18c \ud3ec\ud06c"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["Navigate to ",(0,a.jsx)(e.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=zavodil.near/widget/Lido",children:"the component"})]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"Fork"}),"\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(e.li,{children:"Feel free to make any changes"}),"\n",(0,a.jsxs)(e.li,{children:["Click on ",(0,a.jsx)("kbd",{children:"Save"})," to deploy the component"]}),"\n"]}),"\n",(0,a.jsx)(e.admonition,{type:"note",children:(0,a.jsx)(e.p,{children:"\uad6c\uc131 \uc694\uc18c\ub97c \ubc30\ud3ec\ud558\ub824\uba74 NEAR \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud558\uace0 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc73c\ub85c \uc18c\ub7c9\uc758 NEAR\ub97c \uc608\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. This is because NEAR components are stored in the NEAR network."})})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>i});var a=t(67294);const o={},s=a.createContext(o);function i(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);