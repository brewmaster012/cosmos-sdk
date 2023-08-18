"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[1014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={},i="ADR 002: SDK Documentation Structure",l={unversionedId:"architecture/adr-002-docs-structure",id:"architecture/adr-002-docs-structure",title:"ADR 002: SDK Documentation Structure",description:"Context",source:"@site/docs/architecture/adr-002-docs-structure.md",sourceDirName:"architecture",slug:"/architecture/adr-002-docs-structure",permalink:"/main/architecture/adr-002-docs-structure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR Creation Process",permalink:"/main/architecture/PROCESS"},next:{title:"ADR 3: Dynamic Capability Store",permalink:"/main/architecture/adr-003-dynamic-capability-store"}},s={},c=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-002-sdk-documentation-structure"},"ADR 002: SDK Documentation Structure"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"There is a need for a scalable structure of the Cosmos SDK documentation. Current documentation includes a lot of non-related Cosmos SDK material, is difficult to maintain and hard to follow as a user."),(0,a.kt)("p",null,"Ideally, we would have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All docs related to dev frameworks or tools live in their respective github repos (sdk repo would contain sdk docs, hub repo would contain hub docs, lotion repo would contain lotion docs, etc.)"),(0,a.kt)("li",{parentName:"ul"},"All other docs (faqs, whitepaper, high-level material about Cosmos) would live on the website.")),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"Re-structure the ",(0,a.kt)("inlineCode",{parentName:"p"},"/docs")," folder of the Cosmos SDK github repo as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"docs/\n\u251c\u2500\u2500 README\n\u251c\u2500\u2500 intro/\n\u251c\u2500\u2500 concepts/\n\u2502   \u251c\u2500\u2500 baseapp\n\u2502   \u251c\u2500\u2500 types\n\u2502   \u251c\u2500\u2500 store\n\u2502   \u251c\u2500\u2500 server\n\u2502   \u251c\u2500\u2500 modules/\n\u2502   \u2502   \u251c\u2500\u2500 keeper\n\u2502   \u2502   \u251c\u2500\u2500 handler\n\u2502   \u2502   \u251c\u2500\u2500 cli\n\u2502   \u251c\u2500\u2500 gas\n\u2502   \u2514\u2500\u2500 commands\n\u251c\u2500\u2500 clients/\n\u2502   \u251c\u2500\u2500 lite/\n\u2502   \u251c\u2500\u2500 service-providers\n\u251c\u2500\u2500 modules/\n\u251c\u2500\u2500 spec/\n\u251c\u2500\u2500 translations/\n\u2514\u2500\u2500 architecture/\n")),(0,a.kt)("p",null,"The files in each sub-folders do not matter and will likely change. What matters is the sectioning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"README"),": Landing page of the docs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intro"),": Introductory material. Goal is to have a short explainer of the Cosmos SDK and then channel people to the resource they need. The ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/sdk-application-tutorial/"},"Cosmos SDK tutorial")," will be highlighted, as well as the ",(0,a.kt)("inlineCode",{parentName:"li"},"godocs"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"concepts"),": Contains high-level explanations of the abstractions of the Cosmos SDK. It does not contain specific code implementation and does not need to be updated often. ",(0,a.kt)("strong",{parentName:"li"},"It is not an API specification of the interfaces"),". API spec is the ",(0,a.kt)("inlineCode",{parentName:"li"},"godoc"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clients"),": Contains specs and info about the various Cosmos SDK clients."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spec"),": Contains specs of modules, and others."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"modules"),": Contains links to ",(0,a.kt)("inlineCode",{parentName:"li"},"godocs")," and the spec of the modules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"architecture"),": Contains architecture-related docs like the present one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"translations"),": Contains different translations of the documentation.")),(0,a.kt)("p",null,"Website docs sidebar will only include the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"README")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"intro")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"concepts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clients"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"architecture")," need not be displayed on the website."),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Much clearer organisation of the Cosmos SDK docs."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs")," folder now only contains Cosmos SDK and gaia related material. Later, it will only contain Cosmos SDK related material."),(0,a.kt)("li",{parentName:"ul"},"Developers only have to update ",(0,a.kt)("inlineCode",{parentName:"li"},"/docs")," folder when they open a PR (and not ",(0,a.kt)("inlineCode",{parentName:"li"},"/examples")," for example)."),(0,a.kt)("li",{parentName:"ul"},"Easier for developers to find what they need to update in the docs thanks to reworked architecture."),(0,a.kt)("li",{parentName:"ul"},"Cleaner vuepress build for website docs."),(0,a.kt)("li",{parentName:"ul"},"Will help build an executable doc (cf ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/2611"},"https://github.com/cosmos/cosmos-sdk/issues/2611"),")")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We need to move a bunch of deprecated stuff to ",(0,a.kt)("inlineCode",{parentName:"li"},"/_attic")," folder."),(0,a.kt)("li",{parentName:"ul"},"We need to integrate content in ",(0,a.kt)("inlineCode",{parentName:"li"},"docs/sdk/docs/core")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"concepts"),"."),(0,a.kt)("li",{parentName:"ul"},"We need to move all the content that currently lives in ",(0,a.kt)("inlineCode",{parentName:"li"},"docs")," and does not fit in new structure (like ",(0,a.kt)("inlineCode",{parentName:"li"},"lotion"),", intro material, whitepaper) to the website repository."),(0,a.kt)("li",{parentName:"ul"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"DOCS_README.md"))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/1460"},"https://github.com/cosmos/cosmos-sdk/issues/1460")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/2695"},"https://github.com/cosmos/cosmos-sdk/pull/2695")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/issues/2611"},"https://github.com/cosmos/cosmos-sdk/issues/2611"))))}d.isMDXComponent=!0}}]);