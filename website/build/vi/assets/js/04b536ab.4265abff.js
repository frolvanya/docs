"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9405],{79608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=t(85893),i=t(11151);const o={id:"ds-components",title:"Design Components"},r="Design System Components",d={id:"bos/tutorial/ds-components",title:"Design Components",description:"When building components, the NEAR VM provides a complete set of Radix primitives to simplify UI development.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/bos/tutorial/design-system.md",sourceDirName:"bos/tutorial",slug:"/bos/tutorial/ds-components",permalink:"/vi/bos/tutorial/ds-components",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/tutorial/design-system.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705334457e3,frontMatter:{id:"ds-components",title:"Design Components"},sidebar:"tutorials",previous:{title:"Smart Contract Interaction",permalink:"/vi/bos/tutorial/interaction"},next:{title:"Using IFrames",permalink:"/vi/bos/tutorial/using-iframes"}},a={},l=[{value:"Radix UI",id:"radix-ui",level:2},{value:"Using CSS",id:"using-css",level:3},{value:"Using <code>styled-components</code>",id:"using-styled-components",level:3},{value:"Forward references",id:"forward-references",level:3},{value:"DIG components",id:"dig-components",level:2},{value:"<code>DIG.Button</code>",id:"digbutton",level:3},{value:"<code>DIG.Theme</code>",id:"digtheme",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"design-system-components",children:"Design System Components"}),"\n",(0,s.jsxs)(n.p,{children:["When building components, the NEAR VM provides a complete set of ",(0,s.jsx)(n.a,{href:"https://www.radix-ui.com/docs/primitives/overview/introduction",children:"Radix primitives"})," to simplify UI development."]}),"\n",(0,s.jsx)(n.h2,{id:"radix-ui",children:"Radix UI"}),"\n",(0,s.jsx)(n.p,{children:"Using embedded Radix primitives on the NEAR VM is simple and straight-forward. You don't need to import any files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'return (\n    <Label.Root className="LabelRoot">\n      Hello World!\n    </Label.Root>\n);\n'})}),"\n",(0,s.jsxs)(n.admonition,{title:"Limitations",type:"caution",children:[(0,s.jsx)(n.p,{children:"Currently, NEAR VM impose some limitations on the Radix UI framework:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Form"})," component is not available."]}),"\n",(0,s.jsxs)(n.li,{children:["You can't use ",(0,s.jsx)(n.code,{children:".Portal"})," definitions."]}),"\n",(0,s.jsxs)(n.li,{children:["Using CSS is different. You'll have to use a ",(0,s.jsx)(n.code,{children:"styled.div"})," wrapper."]}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"using-css",children:"Using CSS"}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example on how to use CSS through the ",(0,s.jsx)(n.code,{children:"styled.div"})," wrapper:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const Wrapper = styled.div`\n  .SwitchRoot {\n    ...\n  }\n  .SwitchThumb {\n    ...\n  }\n`;\n\nreturn (\n  <Wrapper>\n    <Switch.Root className="SwitchRoot">\n      <Switch.Thumb className="SwitchThumb" />\n    </Switch.Root>\n  </Wrapper>\n);\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Using Wrapper",type:"tip",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://near.org/#/near/widget/ComponentDetailsPage?src=near/widget/RadixTooltipTest",children:"Example widget using Wrapper"})})}),"\n",(0,s.jsxs)(n.h3,{id:"using-styled-components",children:["Using ",(0,s.jsx)(n.code,{children:"styled-components"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/vi/bos/api/builtin-components#styled-components",children:(0,s.jsx)(n.code,{children:"styled-components"})})," in combination with Radix UI primitives. Here's an example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const SwitchRoot = styled("Switch.Root")`\n  all: unset;\n  display: block;\n  width: 42px;\n  height: 25px;\n  background-color: var(--blackA9);\n  border-radius: 9999px;\n  position: relative;\n  box-shadow: 0 2px 10px var(--blackA7);\n\n  &[data-state="checked"] {\n    background-color: black;\n  }\n`;\n\nconst SwitchThumb = styled("Switch.Thumb")`\n  all: unset;\n  display: block;\n  width: 21px;\n  height: 21px;\n  background-color: white;\n  border-radius: 9999px;\n  box-shadow: 0 2px 2px var(--blackA7);\n  transition: transform 100ms;\n  transform: translateX(2px);\n  will-change: transform;\n\n  &[data-state="checked"] {\n    transform: translateX(19px);\n  }\n`;\n\nreturn (\n  <SwitchRoot>\n    <SwitchThumb />\n  </SwitchRoot>\n);\n'})}),"\n",(0,s.jsx)(n.admonition,{title:"Using styled components",type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://near.org/#/near/widget/ComponentDetailsPage?src=near/widget/RadixSwitchTest",children:"Example widget using styled components to style Radix UI"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"forward-references",children:"Forward references"}),"\n",(0,s.jsxs)(n.p,{children:["The NEAR VM re-implements ",(0,s.jsx)(n.a,{href:"https://react.dev/reference/react/forwardRef#reference",children:"React's forwardRef"})," as ",(0,s.jsx)(n.code,{children:'ref="forwardedRef"'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:'ref="forwardedRef"'})," to forward references through ",(0,s.jsx)(n.code,{children:"<Widget />"})," to support Radix's ",(0,s.jsx)(n.code,{children:"asChild"})," property:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"title='Dialog.jsx'",children:'<AlertDialog.Trigger asChild>\n  <Widget\n    src="near/widget/TestButton"\n    props={{ label: "Click Me" }}\n  />\n</AlertDialog.Trigger>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"title='TestButton.jsx'",children:'const Button = styled.button`\n  background: #f00;\n`;\n\nreturn (\n  <Button type="button" ref="forwardedRef">\n    {props.label}: Forwarded\n  </Button>\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"dig-components",children:"DIG components"}),"\n",(0,s.jsx)(n.p,{children:"These are the Design Interface Guidelines (DIG) components available on the NEAR VM:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://near.org/#/near/widget/ComponentDetailsPage?src=near/widget/DIG.Button",children:"DIG.Button"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://near.org/#/near/widget/ComponentDetailsPage?src=near/widget/DIG.Theme",children:"DIG.Theme"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"digbutton",children:(0,s.jsx)(n.code,{children:"DIG.Button"})}),"\n",(0,s.jsxs)(n.p,{children:["A fully featured button component that can act as a ",(0,s.jsx)(n.code,{children:"<button>"})," or ",(0,s.jsx)(n.code,{children:"<a>"})," tag."]}),"\n",(0,s.jsx)(n.admonition,{title:"DIG.Button properties",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://near.org/#/near/widget/ComponentDetailsPage?src=near/widget/DIG.Button&tab=about",children:"Click here"})," for properties and details."]})}),"\n",(0,s.jsx)(n.h3,{id:"digtheme",children:(0,s.jsx)(n.code,{children:"DIG.Theme"})}),"\n",(0,s.jsx)(n.p,{children:"This component wraps all of NEAR Components so you don't need to render it yourself."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can use any of the ",(0,s.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=near/widget/DIG.Theme&tab=source",children:"CSS variables"})," defined inside ",(0,s.jsx)(n.code,{children:"DIG.Theme"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);