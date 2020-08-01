(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(6),o=(r(0),r(241)),i=r(245),l={id:"introduction",title:"Introduction"},c={unversionedId:"introduction",id:"version-2.0.0-alpha.1/introduction",isDocsHomePage:!1,title:"Introduction",description:"This project is a Unity plugin for procedural generation of 2D dungeons and aims to give game designers a complete control over generated levels. It combines procedural generation and handmade room templates to generate levels with a feeling of consistency. Under the hood, the plugin uses my .NET procedural level generator.",source:"@site/versioned_docs\\version-2.0.0-alpha.1\\introduction.md",permalink:"/Edgar-Unity/docs/2.0.0-alpha.1/introduction",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.1/introduction.md",version:"2.0.0-alpha.1",sidebar:"version-2.0.0-alpha.1/docs",next:{title:"Motivation",permalink:"/Edgar-Unity/docs/2.0.0-alpha.1/motivation"}},s=[{value:"Features",id:"features",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Workflow",id:"workflow",children:[{value:"1. Draw rooms and corridors",id:"1-draw-rooms-and-corridors",children:[]},{value:"2. Prepare the structure of the level",id:"2-prepare-the-structure-of-the-level",children:[]},{value:"3. Generate levels",id:"3-generate-levels",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Terms of use",id:"terms-of-use",children:[]}],p={rightToc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This project is a Unity plugin for procedural generation of 2D dungeons and aims to give game designers a ",Object(o.b)("strong",{parentName:"p"},"complete control")," over generated levels. It combines procedural generation and ",Object(o.b)("strong",{parentName:"p"},"handmade room templates")," to generate levels with a ",Object(o.b)("strong",{parentName:"p"},"feeling of consistency"),". Under the hood, the plugin uses my .NET ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator"}),"procedural level generator"),"."),Object(o.b)("p",null,"Similar approaches are used in games like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.boristhebrave.com/2019/07/28/dungeon-generation-in-enter-the-gungeon/"}),Object(o.b)("strong",{parentName:"a"},"Enter the Gungeon"))," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.indiedb.com/games/dead-cells/news/the-level-design-of-a-procedurally-generated-metroidvania"}),Object(o.b)("strong",{parentName:"a"},"Dead Cells")),"."),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Complete control over the structure of generated level.")," Instead of generating completely random dungeons, you specify how many rooms you want and how they should be connected and the algorithm generates levels that follow exactly that structure."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Complete control over the look of individual rooms.")," You can draw room templates using Unity built-in Tilemap feature. You can use all available tools (brushes, rule tiles, etc.) to design room templates."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Rooms either directly connected by doors or connected by corridors.")," You can choose to either connect rooms by corridors or directly via doors."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Easy to customize.")," The plugin is ready to be customized and extended."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Supports Unity 2018.4 and newer"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"2 example scenes included."))),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Alpha version.")," There may be some ",Object(o.b)("strong",{parentName:"li"},"breaking changes")," in the API."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Some inputs are too hard for the generator.")," You need to follow some guidelines in order to achieve good performance."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Not suitable for large levels.")," The generator usually works best for levels with less than 30 rooms."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Not everything can be configured via editor.")," You need to have programming knowledge in order to generate anything non-trivial.")),Object(o.b)("h2",{id:"workflow"},"Workflow"),Object(o.b)("h3",{id:"1-draw-rooms-and-corridors"},"1. Draw rooms and corridors"),Object(o.b)(i.a,{cols:4,fixedHeight:!0,mdxType:"Gallery"},Object(o.b)(i.b,{src:"img/v2/examples/example1_room1.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/examples/example1_room2.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/original/example1_spawn.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/original/example1_boss.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/original/example1_corridor_horizontal.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/original/example1_corridor_vertical.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/examples/example1_corridor_horizontal2.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/examples/example1_corridor_vertical2.png",mdxType:"GalleryImage"})),Object(o.b)("h3",{id:"2-prepare-the-structure-of-the-level"},"2. Prepare the structure of the level"),Object(o.b)(i.c,{src:"img/v2/examples/example1_level_graph2.png",height:500,mdxType:"Image"}),Object(o.b)("h3",{id:"3-generate-levels"},"3. Generate levels"),Object(o.b)(i.a,{cols:4,fixedHeight:!0,mdxType:"Gallery"},Object(o.b)(i.b,{src:"img/v2/examples/example1_result_reallife2.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/examples/example1_result_reallife3.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/examples/example1_result_reallife4.png",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/v2/examples/example1_result_reallife5.png",mdxType:"GalleryImage"})),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(o.b)(i.b,{src:"img/original/example1_result1.png",caption:"Example 1",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/original/example1_result_reallife1.png",caption:"Example 1",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/original/example2_result1.png",caption:"Example 2",mdxType:"GalleryImage"}),Object(o.b)(i.b,{src:"img/original/example2_result_reallife1.png",caption:"Example 2",mdxType:"GalleryImage"})),Object(o.b)("h2",{id:"terms-of-use"},"Terms of use"),Object(o.b)("p",null,"The plugin can be used in bot commercial and non-commerical projects but ",Object(o.b)("strong",{parentName:"p"},"cannot be redistributed or reselled"),". If you want to include this plugin in your own asset, please contact me and we will figure that out."))}m.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?a.a.createElement(b,l(l({ref:t},s),{},{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},242:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(243),a=r(244);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=!r.startsWith(t)?t+r.replace(/^\//,""):r;return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},243:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},244:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return m}));var n=r(2),a=r(0),o=r.n(a),i=r(242);const l=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,t=>o.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>o.a.createElement(l,{cols:e.cols},o.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},o.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&o.a.createElement(p,null,e.caption)),p=e=>o.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...a}=e;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&o.a.createElement(p,null,e.caption))}}}]);