"use strict";(self.webpackChunkcosmos_sdk_docs=self.webpackChunkcosmos_sdk_docs||[]).push([[9110],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),s=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return r?t.createElement(h,o(o({ref:n},c),{},{components:r})):t.createElement(h,o({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},61946:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const i={},o="ADR 022: Custom BaseApp panic handling",l={unversionedId:"architecture/adr-022-custom-panic-handling",id:"version-v0.50/architecture/adr-022-custom-panic-handling",title:"ADR 022: Custom BaseApp panic handling",description:"Changelog",source:"@site/versioned_docs/version-v0.50/architecture/adr-022-custom-panic-handling.md",sourceDirName:"architecture",slug:"/architecture/adr-022-custom-panic-handling",permalink:"/v0.50/architecture/adr-022-custom-panic-handling",draft:!1,tags:[],version:"v0.50",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ADR 021: Protocol Buffer Query Encoding",permalink:"/v0.50/architecture/adr-021-protobuf-query-encoding"},next:{title:"ADR 023: Protocol Buffer Naming and Versioning Conventions",permalink:"/v0.50/architecture/adr-023-protobuf-naming"}},d={},s=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Design",id:"design",level:3},{value:"Overview",id:"overview",level:4},{value:"Implementation details",id:"implementation-details",level:4},{value:"Recovery handler",id:"recovery-handler",level:5},{value:"Recovery middleware",id:"recovery-middleware",level:5},{value:"Recovery processing",id:"recovery-processing",level:5},{value:"BaseApp changes",id:"baseapp-changes",level:5},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],c={toc:s};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-022-custom-baseapp-panic-handling"},"ADR 022: Custom BaseApp panic handling"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2020 Apr 24: Initial Draft"),(0,a.kt)("li",{parentName:"ul"},"2021 Sep 14: Superseded by ADR-045")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"SUPERSEDED by ADR-045"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"The current implementation of BaseApp does not allow developers to write custom error handlers during panic recovery\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/bad4ca75f58b182f600396ca350ad844c18fc80b/baseapp/baseapp.go#L539"},"runTx()"),"\nmethod. We think that this method can be more flexible and can give Cosmos SDK users more options for customizations without\nthe need to rewrite whole BaseApp. Also there's one special case for ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.ErrorOutOfGas"),' error handling, that case\nmight be handled in a "standard" way (middleware) alongside the others.'),(0,a.kt)("p",null,"We propose middleware-solution, which could help developers implement the following cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add external logging (let's say sending reports to external services like ",(0,a.kt)("a",{parentName:"li",href:"https://sentry.io"},"Sentry"),");"),(0,a.kt)("li",{parentName:"ul"},"call panic for specific error cases;")),(0,a.kt)("p",null,"It will also make ",(0,a.kt)("inlineCode",{parentName:"p"},"OutOfGas")," case and ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," case one of the middlewares.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Default")," case wraps recovery object to an error and logs it (",(0,a.kt)("a",{parentName:"p",href:"#Recovery-middleware"},"example middleware implementation"),")."),(0,a.kt)("p",null,"Our project has a sidecar service running alongside the blockchain node (smart contracts virtual machine). It is\nessential that node <-> sidecar connectivity stays stable for TXs processing. So when the communication breaks we need\nto crash the node and reboot it once the problem is solved. That behaviour makes node's state machine execution\ndeterministic. As all keeper panics are caught by runTx's ",(0,a.kt)("inlineCode",{parentName:"p"},"defer()")," handler, we have to adjust the BaseApp code\nin order to customize it."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("h3",{id:"design"},"Design"),(0,a.kt)("h4",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Instead of hardcoding custom error handling into BaseApp we suggest using set of middlewares which can be customized\nexternally and will allow developers use as many custom error handlers as they want. Implementation with tests\ncan be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/pull/6053"},"here"),"."),(0,a.kt)("h4",{id:"implementation-details"},"Implementation details"),(0,a.kt)("h5",{id:"recovery-handler"},"Recovery handler"),(0,a.kt)("p",null,"New ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoveryHandler")," type added. ",(0,a.kt)("inlineCode",{parentName:"p"},"recoveryObj")," input argument is an object returned by the standard Go function\n",(0,a.kt)("inlineCode",{parentName:"p"},"recover()")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"builtin")," package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type RecoveryHandler func(recoveryObj interface{}) error\n")),(0,a.kt)("p",null,"Handler should type assert (or other methods) an object to define if object should be handled.\n",(0,a.kt)("inlineCode",{parentName:"p"},"nil")," should be returned if input object can't be handled by that ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoveryHandler")," (not a handler's target type).\nNot ",(0,a.kt)("inlineCode",{parentName:"p"},"nil")," error should be returned if input object was handled and middleware chain execution should be stopped."),(0,a.kt)("p",null,"An example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func exampleErrHandler(recoveryObj interface{}) error {\n    err, ok := recoveryObj.(error)\n    if !ok { return nil }\n\n    if someSpecificError.Is(err) {\n        panic(customPanicMsg)\n    } else {\n        return nil\n    }\n}\n")),(0,a.kt)("p",null,"This example breaks the application execution, but it also might enrich the error's context like the ",(0,a.kt)("inlineCode",{parentName:"p"},"OutOfGas")," handler."),(0,a.kt)("h5",{id:"recovery-middleware"},"Recovery middleware"),(0,a.kt)("p",null,"We also add a middleware type (decorator). That function type wraps ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoveryHandler")," and returns the next middleware in\nexecution chain and handler's ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),". Type is used to separate actual ",(0,a.kt)("inlineCode",{parentName:"p"},"recovery()")," object handling from middleware\nchain processing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type recoveryMiddleware func(recoveryObj interface{}) (recoveryMiddleware, error)\n\nfunc newRecoveryMiddleware(handler RecoveryHandler, next recoveryMiddleware) recoveryMiddleware {\n    return func(recoveryObj interface{}) (recoveryMiddleware, error) {\n        if err := handler(recoveryObj); err != nil {\n            return nil, err\n        }\n        return next, nil\n    }\n}\n")),(0,a.kt)("p",null,"Function receives a ",(0,a.kt)("inlineCode",{parentName:"p"},"recoveryObj")," object and returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(next ",(0,a.kt)("inlineCode",{parentName:"li"},"recoveryMiddleware"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"nil"),") if object wasn't handled (not a target type) by ",(0,a.kt)("inlineCode",{parentName:"li"},"RecoveryHandler"),";"),(0,a.kt)("li",{parentName:"ul"},"(",(0,a.kt)("inlineCode",{parentName:"li"},"nil"),", not nil ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),") if input object was handled and other middlewares in the chain should not be executed;"),(0,a.kt)("li",{parentName:"ul"},"(",(0,a.kt)("inlineCode",{parentName:"li"},"nil"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"nil"),") in case of invalid behavior. Panic recovery might not have been properly handled;\nthis can be avoided by always using a ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," as a rightmost middleware in the chain (always returns an ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),"');")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OutOfGas")," middleware example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func newOutOfGasRecoveryMiddleware(gasWanted uint64, ctx sdk.Context, next recoveryMiddleware) recoveryMiddleware {\n    handler := func(recoveryObj interface{}) error {\n        err, ok := recoveryObj.(sdk.ErrorOutOfGas)\n        if !ok { return nil }\n\n        return errorsmod.Wrap(\n            sdkerrors.ErrOutOfGas, fmt.Sprintf(\n                "out of gas in location: %v; gasWanted: %d, gasUsed: %d", err.Descriptor, gasWanted, ctx.GasMeter().GasConsumed(),\n            ),\n        )\n    }\n\n    return newRecoveryMiddleware(handler, next)\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Default")," middleware example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func newDefaultRecoveryMiddleware() recoveryMiddleware {\n    handler := func(recoveryObj interface{}) error {\n        return errorsmod.Wrap(\n            sdkerrors.ErrPanic, fmt.Sprintf("recovered: %v\\nstack:\\n%v", recoveryObj, string(debug.Stack())),\n        )\n    }\n\n    return newRecoveryMiddleware(handler, nil)\n}\n')),(0,a.kt)("h5",{id:"recovery-processing"},"Recovery processing"),(0,a.kt)("p",null,"Basic chain of middlewares processing would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func processRecovery(recoveryObj interface{}, middleware recoveryMiddleware) error {\n    if middleware == nil { return nil }\n\n    next, err := middleware(recoveryObj)\n    if err != nil { return err }\n    if next == nil { return nil }\n\n    return processRecovery(recoveryObj, next)\n}\n")),(0,a.kt)("p",null,"That way we can create a middleware chain which is executed from left to right, the rightmost middleware is a\n",(0,a.kt)("inlineCode",{parentName:"p"},"default")," handler which must return an ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,a.kt)("h5",{id:"baseapp-changes"},"BaseApp changes"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," middleware chain must exist in a ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseApp")," object. ",(0,a.kt)("inlineCode",{parentName:"p"},"Baseapp")," modifications:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type BaseApp struct {\n    // ...\n    runTxRecoveryMiddleware recoveryMiddleware\n}\n\nfunc NewBaseApp(...) {\n    // ...\n    app.runTxRecoveryMiddleware = newDefaultRecoveryMiddleware()\n}\n\nfunc (app *BaseApp) runTx(...) {\n    // ...\n    defer func() {\n        if r := recover(); r != nil {\n            recoveryMW := newOutOfGasRecoveryMiddleware(gasWanted, ctx, app.runTxRecoveryMiddleware)\n            err, result = processRecovery(r, recoveryMW), nil\n        }\n\n        gInfo = sdk.GasInfo{GasWanted: gasWanted, GasUsed: ctx.GasMeter().GasConsumed()}\n    }()\n    // ...\n}\n")),(0,a.kt)("p",null,"Developers can add their custom ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoveryHandler"),"s by providing ",(0,a.kt)("inlineCode",{parentName:"p"},"AddRunTxRecoveryHandler")," as a BaseApp option parameter to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NewBaseapp")," constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (app *BaseApp) AddRunTxRecoveryHandler(handlers ...RecoveryHandler) {\n    for _, h := range handlers {\n        app.runTxRecoveryMiddleware = newRecoveryMiddleware(h, app.runTxRecoveryMiddleware)\n    }\n}\n")),(0,a.kt)("p",null,"This method would prepend handlers to an existing chain."),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Developers of Cosmos SDK based projects can add custom panic handlers to:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"add error context for custom panic sources (panic inside of custom keepers);"),(0,a.kt)("li",{parentName:"ul"},"emit ",(0,a.kt)("inlineCode",{parentName:"li"},"panic()"),": passthrough recovery object to the Tendermint core;"),(0,a.kt)("li",{parentName:"ul"},"other necessary handling;"))),(0,a.kt)("li",{parentName:"ul"},"Developers can use standard Cosmos SDK ",(0,a.kt)("inlineCode",{parentName:"li"},"BaseApp")," implementation, rather that rewriting it in their projects;"),(0,a.kt)("li",{parentName:"ul"},'Proposed solution doesn\'t break the current "standard" ',(0,a.kt)("inlineCode",{parentName:"li"},"runTx()")," flow;")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introduces changes to the execution model design.")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OutOfGas")," error handler becomes one of the middlewares;"),(0,a.kt)("li",{parentName:"ul"},"Default panic handler becomes one of the middlewares;")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/pull/6053"},"PR-6053 with proposed solution")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-010-modular-antehandler.md"},"Similar solution. ADR-010 Modular AnteHandler"))))}p.isMDXComponent=!0}}]);