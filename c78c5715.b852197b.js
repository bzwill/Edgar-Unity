(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{191:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),i=(r(0),r(241)),a=r(245),s={title:"Post processing"},c={unversionedId:"generators/post-process",id:"version-2.0.0-alpha.0/generators/post-process",isDocsHomePage:!1,title:"Post processing",description:"After a level is generated, we may often want to run some additional logic like spawning enemies, etc. This can be achieved by providing your own post processing logic that will be called after the level is generated and provided with information about the level.",source:"@site/versioned_docs\\version-2.0.0-alpha.0\\generators\\post-process.md",permalink:"/Edgar-Unity/docs/2.0.0-alpha.0/generators/post-process",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.0/generators/post-process.md",version:"2.0.0-alpha.0",sidebar:"version-2.0.0-alpha.0/docs",previous:{title:"(PRO) Custom input",permalink:"/Edgar-Unity/docs/2.0.0-alpha.0/generators/custom-input"},next:{title:"Example 1",permalink:"/Edgar-Unity/docs/2.0.0-alpha.0/examples/example-1"}},l=[{value:"Built-in post processing steps",id:"built-in-post-processing-steps",children:[{value:"0. Instantiate room template with correct positions",id:"0-instantiate-room-template-with-correct-positions",children:[]},{value:"1. Initialize shared tilemaps",id:"1-initialize-shared-tilemaps",children:[]},{value:"2. Copy rooms to shared tilemaps",id:"2-copy-rooms-to-shared-tilemaps",children:[]},{value:"3. Center grid",id:"3-center-grid",children:[]},{value:"4. Disable room template renderers",id:"4-disable-room-template-renderers",children:[]},{value:"5. Disable room template colliders",id:"5-disable-room-template-colliders",children:[]}]},{value:"Custom post processing",id:"custom-post-processing",children:[]}],p={rightToc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"After a level is generated, we may often want to run some additional logic like spawning enemies, etc. This can be achieved by providing your own post processing logic that will be called after the level is generated and provided with information about the level. "),Object(i.b)("p",null,"To better understand how the generator works, we will first describe which post processing is done by the generator itself and then provide ways to extend this behaviour and provide your own logic."),Object(i.b)("h2",{id:"built-in-post-processing-steps"},"Built-in post processing steps"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"TODO:")," This section is not completed")),Object(i.b)("h3",{id:"0-instantiate-room-template-with-correct-positions"},"0. Instantiate room template with correct positions"),Object(i.b)("h3",{id:"1-initialize-shared-tilemaps"},"1. Initialize shared tilemaps"),Object(i.b)("h3",{id:"2-copy-rooms-to-shared-tilemaps"},"2. Copy rooms to shared tilemaps"),Object(i.b)("h3",{id:"3-center-grid"},"3. Center grid"),Object(i.b)("h3",{id:"4-disable-room-template-renderers"},"4. Disable room template renderers"),Object(i.b)("h3",{id:"5-disable-room-template-colliders"},"5. Disable room template colliders"),Object(i.b)("h2",{id:"custom-post-processing"},"Custom post processing"),Object(i.b)("p",null,"If we want to add our own post processing logic, we have to create a class that inherits from ",Object(i.b)("inlineCode",{parentName:"p"},"DungeonGeneratorPostProcessBase"),". And because the base class is a ScriptableObject, we need to add the ",Object(i.b)("inlineCode",{parentName:"p"},"CreateAssetMenu")," attribute so we are able to create an instance of that ScriptableObject. After a level is generated, the ",Object(i.b)("inlineCode",{parentName:"p"},"Run")," method is called and that is the place where we put our post process logic."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'[CreateAssetMenu(menuName = "Dungeon generator/Examples/Docs/My custom post process", fileName = "MyCustomPostProcess")]\npublic class MyCustomPostProcess : DungeonGeneratorPostProcessBase\n{\n    public override void Run(GeneratedLevel level, LevelDescription levelDescription)\n    { \n        // Implement the logic here\n    }\n}\n')),Object(i.b)("p",null,"With the implementation ready, we now have to create an instance of that ScriptableObject by right clicking in the project view and ",Object(i.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Examples -> Docs -> My custom post process"),". And the last step is to drag and drop this GameObject in the ",Object(i.b)("em",{parentName:"p"},"Custom post process tasks")," section of the dungeon generator."),Object(i.b)(a.c,{src:"img/v2/examples/example1/custom_post_process.png",caption:"Add the ScriptableObject to the Custom post process tasks array",mdxType:"Image"}))}d.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,b=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},242:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(243),o=r(244);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const a=!r.startsWith(t)?t+r.replace(/^\//,""):r;return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}},243:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},244:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d}));var n=r(2),o=r(0),i=r.n(o),a=r(242);const s=e=>i.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>i.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},i.a.Children.map(e.children,t=>i.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),l=e=>i.a.createElement(s,{cols:e.cols},i.a.createElement("a",{href:Object(a.a)(e.src),target:"_blank"},i.a.createElement("img",{src:Object(a.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&i.a.createElement(p,null,e.caption)),p=e=>i.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),d=e=>{const{src:t,caption:r,...o}=e;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",Object(n.a)({src:Object(a.a)(e.src)},o)),void 0!==e.caption&&i.a.createElement(p,null,e.caption))}}}]);