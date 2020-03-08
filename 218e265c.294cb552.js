(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(168)),o={title:"Payload initializer"},l={id:"version-1.0.3/pipeline-tasks/payload-initializer",title:"Payload initializer",description:"This is not really a pipeline task but it is closely related to the pipeline as it initializes the payload.\r",source:"@site/versioned_docs\\version-1.0.3\\pipeline-tasks\\payload-initializer.md",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/pipeline-tasks/payload-initializer",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-1.0.3/pipeline-tasks/payload-initializer.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Graph based generator",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/pipeline-tasks/graph-based-generator"},next:{title:"Adding door tiles",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/guides/adding-door-tiles"}},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is not really a pipeline task but it is closely related to the pipeline as it initializes the payload."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Basic information:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Menu location: ",Object(i.b)("em",{parentName:"li"},"Dungeon generator/Pipeline tasks/Payload initializer")),Object(i.b)("li",{parentName:"ul"},"Implementation: ",Object(i.b)("inlineCode",{parentName:"li"},"PayloadInitializer")," class"),Object(i.b)("li",{parentName:"ul"},"Creates payload of type ",Object(i.b)("inlineCode",{parentName:"li"},"PipelinePayload"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Options:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Tilemap Layers Handler"),": sets the tilemap layers handler or uses the default one if not set, see "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Use Random Seed"),": whether wa want to use a random seed for the random numbers generator or use a fixed seed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Random Generator Seed"),": which seed to use for the random numbers generators"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Print Used Seed"),": whether the current seed of the generator should be printed to the console window",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"useful if we use a random seed and see there is something wrong with a generated dungeon and want to investigate that")))))}s.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,l({ref:t},p,{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);