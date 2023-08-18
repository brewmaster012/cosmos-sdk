"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[7934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,g=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:1},s="Messages and Queries",o={unversionedId:"building-modules/messages-and-queries",id:"version-v0.47/building-modules/messages-and-queries",title:"Messages and Queries",description:"Msgs and Queries are the two primary objects handled by modules. Most of the core components defined in a module, like Msg services, keepers and Query services, exist to process messages and queries.",source:"@site/versioned_docs/version-v0.47/building-modules/02-messages-and-queries.md",sourceDirName:"building-modules",slug:"/building-modules/messages-and-queries",permalink:"/v0.47/building-modules/messages-and-queries",draft:!1,tags:[],version:"v0.47",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Module Manager",permalink:"/v0.47/building-modules/module-manager"},next:{title:"Msg Services",permalink:"/v0.47/building-modules/msg-services"}},l={},p=[{value:"Messages",id:"messages",level:2},{value:"<code>Msg</code> Services",id:"msg-services",level:3},{value:"Legacy Amino <code>LegacyMsg</code>s",id:"legacy-amino-legacymsgs",level:3},{value:"Queries",id:"queries",level:2},{value:"gRPC Queries",id:"grpc-queries",level:3},{value:"Legacy Queries",id:"legacy-queries",level:3},{value:"Store Queries",id:"store-queries",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"messages-and-queries"},"Messages and Queries"),(0,i.kt)("admonition",{title:"Synopsis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Msg"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"Queries")," are the two primary objects handled by modules. Most of the core components defined in a module, like ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," services, ",(0,i.kt)("inlineCode",{parentName:"p"},"keeper"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," services, exist to process ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"queries"),".")),(0,i.kt)("admonition",{title:"Pre-requisite Readings",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v0.47/building-modules/intro"},"Introduction to Cosmos SDK Modules")))),(0,i.kt)("h2",{id:"messages"},"Messages"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Msg"),"s are objects whose end-goal is to trigger state-transitions. They are wrapped in ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/core/transactions"},"transactions"),", which may contain one or more of them."),(0,i.kt)("p",null,"When a transaction is relayed from the underlying consensus engine to the Cosmos SDK application, it is first decoded by ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/core/baseapp"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseApp")),". Then, each message contained in the transaction is extracted and routed to the appropriate module via ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgServiceRouter")," so that it can be processed by the module's ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/building-modules/msg-services"},(0,i.kt)("inlineCode",{parentName:"a"},"Msg")," service"),". For a more detailed explanation of the lifecycle of a transaction, click ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/basics/tx-lifecycle"},"here"),"."),(0,i.kt)("h3",{id:"msg-services"},(0,i.kt)("inlineCode",{parentName:"h3"},"Msg")," Services"),(0,i.kt)("p",null,"Defining Protobuf ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," services is the recommended way to handle messages. A Protobuf ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service should be created for each module, typically in ",(0,i.kt)("inlineCode",{parentName:"p"},"tx.proto")," (see more info about ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/core/encoding#faq"},"conventions and naming"),"). It must have an RPC service method defined for each message in the module."),(0,i.kt)("p",null,"See an example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service definition from ",(0,i.kt)("inlineCode",{parentName:"p"},"x/bank")," module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/bank/v1beta1/tx.proto#L13-L36\n")),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg")," service method must have exactly one argument, which must implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," interface, and a Protobuf response. The naming convention is to call the RPC argument ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg<service-rpc-name>")," and the RPC response ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg<service-rpc-name>Response"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf"},"  rpc Send(MsgSend) returns (MsgSendResponse);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," interface is a simplified version of the Amino ",(0,i.kt)("inlineCode",{parentName:"p"},"LegacyMsg")," interface described ",(0,i.kt)("a",{parentName:"p",href:"#legacy-amino-msgs"},"below")," with only ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GetSigners()")," methods. For backwards compatibility with ",(0,i.kt)("a",{parentName:"p",href:"#legacy-amino-msgs"},"Amino ",(0,i.kt)("inlineCode",{parentName:"a"},"LegacyMsg"),"s"),", existing ",(0,i.kt)("inlineCode",{parentName:"p"},"LegacyMsg")," types should be used as the request parameter for ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," RPC definitions. Newer ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," types, which only support ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," definitions, should use canonical ",(0,i.kt)("inlineCode",{parentName:"p"},"Msg...")," name."),(0,i.kt)("p",null,"The Cosmos SDK uses Protobuf definitions to generate client and server code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MsgServer")," interface defines the server API for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Msg")," service and its implementation is described as part of the ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/building-modules/msg-services"},(0,i.kt)("inlineCode",{parentName:"a"},"Msg")," services")," documentation."),(0,i.kt)("li",{parentName:"ul"},"Structures are generated for all RPC request and response types.")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterMsgServer")," method is also generated and should be used to register the module's ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgServer")," implementation in ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterServices")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/building-modules/module-manager#appmodule"},(0,i.kt)("inlineCode",{parentName:"a"},"AppModule")," interface"),"."),(0,i.kt)("p",null,"In order for clients (CLI and grpc-gateway) to have these URLs registered, the Cosmos SDK provides the function ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterMsgServiceDesc(registry codectypes.InterfaceRegistry, sd *grpc.ServiceDesc)")," that should be called inside module's ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/building-modules/module-manager#appmodulebasic"},(0,i.kt)("inlineCode",{parentName:"a"},"RegisterInterfaces"))," method, using the proto-generated ",(0,i.kt)("inlineCode",{parentName:"p"},"&_Msg_serviceDesc")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"*grpc.ServiceDesc")," argument."),(0,i.kt)("h3",{id:"legacy-amino-legacymsgs"},"Legacy Amino ",(0,i.kt)("inlineCode",{parentName:"h3"},"LegacyMsg"),"s"),(0,i.kt)("p",null,"The following way of defining messages is deprecated and using ",(0,i.kt)("a",{parentName:"p",href:"#msg-services"},(0,i.kt)("inlineCode",{parentName:"a"},"Msg")," services")," is preferred."),(0,i.kt)("p",null,"Amino ",(0,i.kt)("inlineCode",{parentName:"p"},"LegacyMsg"),"s can be defined as protobuf messages. The messages definition usually includes a list of parameters needed to process the message that will be provided by end-users when they want to create a new transaction containing said message."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"LegacyMsg")," is typically accompanied by a standard constructor function, that is called from one of the ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/building-modules/module-interfaces"},"module's interface"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"s also need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"sdk.Msg")," interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/types/tx_msg.go#L14-L26\n")),(0,i.kt)("p",null,"It extends ",(0,i.kt)("inlineCode",{parentName:"p"},"proto.Message")," and contains the following methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Route() string"),": Name of the route for this message. Typically all ",(0,i.kt)("inlineCode",{parentName:"li"},"message"),"s in a module have the same route, which is most often the module's name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Type() string"),": Type of the message, used primarily in ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/core/events"},"events"),". This should return a message-specific ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),", typically the denomination of the message itself."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v0.47/basics/tx-lifecycle#ValidateBasic"},(0,i.kt)("inlineCode",{parentName:"a"},"ValidateBasic() error")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GetSignBytes() []byte"),": Return the canonical byte representation of the message. Used to generate a signature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GetSigners() []AccAddress"),": Return the list of signers. The Cosmos SDK will make sure that each ",(0,i.kt)("inlineCode",{parentName:"li"},"message")," contained in a transaction is signed by all the signers listed in the list returned by this method.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/auth/migrations/legacytx/stdsign.go#L20-L36\n")),(0,i.kt)("p",null,"See an example implementation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"gov")," module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/x/gov/types/v1/msgs.go#L121-L153\n")),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," is a request for information made by end-users of applications through an interface and processed by a full-node. A ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," is received by a full-node through its consensus engine and relayed to the application via the ABCI. It is then routed to the appropriate module via ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseApp"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryRouter")," so that it can be processed by the module's query service (./04-query-services.md). For a deeper look at the lifecycle of a ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),", click ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/basics/query-lifecycle"},"here"),"."),(0,i.kt)("h3",{id:"grpc-queries"},"gRPC Queries"),(0,i.kt)("p",null,"Queries should be defined using ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto#services"},"Protobuf services"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," service should be created per module in ",(0,i.kt)("inlineCode",{parentName:"p"},"query.proto"),". This service lists endpoints starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc"),"."),(0,i.kt)("p",null,"Here's an example of such a ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," service definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/proto/cosmos/auth/v1beta1/query.proto#L14-L89\n")),(0,i.kt)("p",null,"As ",(0,i.kt)("inlineCode",{parentName:"p"},"proto.Message"),"s, generated ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," types implement by default ",(0,i.kt)("inlineCode",{parentName:"p"},"String()")," method of ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/fmt#Stringer"},(0,i.kt)("inlineCode",{parentName:"a"},"fmt.Stringer")),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterQueryServer")," method is also generated and should be used to register the module's query server in the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterServices")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/building-modules/module-manager#appmodule"},(0,i.kt)("inlineCode",{parentName:"a"},"AppModule")," interface"),"."),(0,i.kt)("h3",{id:"legacy-queries"},"Legacy Queries"),(0,i.kt)("p",null,"Before the introduction of Protobuf and gRPC in the Cosmos SDK, there was usually no specific ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," object defined by module developers, contrary to ",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"s. Instead, the Cosmos SDK took the simpler approach of using a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," to define each ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," type and all the arguments needed to process it. For most module queries, the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," should look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"queryCategory/queryRoute/queryType/arg1/arg2/...\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryCategory")," is the category of the ",(0,i.kt)("inlineCode",{parentName:"li"},"query"),", typically ",(0,i.kt)("inlineCode",{parentName:"li"},"custom")," for module queries. It is used to differentiate between different kinds of queries within ",(0,i.kt)("inlineCode",{parentName:"li"},"BaseApp"),"'s ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/core/baseapp#query"},(0,i.kt)("inlineCode",{parentName:"a"},"Query")," method"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryRoute")," is used by ",(0,i.kt)("inlineCode",{parentName:"li"},"BaseApp"),"'s ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/core/baseapp#query-routing"},(0,i.kt)("inlineCode",{parentName:"a"},"queryRouter"))," to map the ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," to its module. Usually, ",(0,i.kt)("inlineCode",{parentName:"li"},"queryRoute")," should be the name of the module."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryType")," is used by the module's ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/building-modules/query-services#legacy-queriers"},(0,i.kt)("inlineCode",{parentName:"a"},"querier"))," to map the ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," to the appropriate ",(0,i.kt)("inlineCode",{parentName:"li"},"querier function")," within the module."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args")," are the actual arguments needed to process the ",(0,i.kt)("inlineCode",{parentName:"li"},"query"),". They are filled out by the end-user. Note that for bigger queries, you might prefer passing arguments in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Data")," field of the request ",(0,i.kt)("inlineCode",{parentName:"li"},"req")," instead of the ",(0,i.kt)("inlineCode",{parentName:"li"},"path"),".")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," for each ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," must be defined by the module developer in the module's ",(0,i.kt)("a",{parentName:"p",href:"/v0.47/building-modules/module-interfaces#query-commands"},"command-line interface file"),".Overall, there are 3 mains components module developers need to implement in order to make the subset of the state defined by their module queryable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/building-modules/query-services#legacy-queriers"},(0,i.kt)("inlineCode",{parentName:"a"},"querier")),", to process the ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," once it has been ",(0,i.kt)("a",{parentName:"li",href:"/v0.47/core/baseapp#query-routing"},"routed to the module"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v0.47/building-modules/module-interfaces#query-commands"},"Query commands")," in the module's CLI file, where the ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," for each ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," is specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," return types. Typically defined in a file ",(0,i.kt)("inlineCode",{parentName:"li"},"types/querier.go"),", they specify the result type of each of the module's ",(0,i.kt)("inlineCode",{parentName:"li"},"queries"),". These custom types must implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"String()")," method of ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/fmt#Stringer"},(0,i.kt)("inlineCode",{parentName:"a"},"fmt.Stringer")),".")),(0,i.kt)("h3",{id:"store-queries"},"Store Queries"),(0,i.kt)("p",null,"Store queries query directly for store keys. They use ",(0,i.kt)("inlineCode",{parentName:"p"},"clientCtx.QueryABCI(req abci.RequestQuery)")," to return the full ",(0,i.kt)("inlineCode",{parentName:"p"},"abci.ResponseQuery")," with inclusion Merkle proofs."),(0,i.kt)("p",null,"See following examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0-rc1/baseapp/abci.go#L881-L902\n")))}m.isMDXComponent=!0}}]);