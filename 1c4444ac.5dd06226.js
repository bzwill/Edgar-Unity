(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(168)),i=n(171),c={id:"motivation",title:"Motivation"},s={id:"version-1.0.3/motivation",title:"Motivation",description:'import { Image, Gallery, GalleryImage } from "@theme/Gallery";\r',source:"@site/versioned_docs\\version-1.0.3\\motivation.md",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/motivation",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-1.0.3/motivation.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Introduction",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/introduction"},next:{title:"Installation",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/installation"}},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Dungeon generators usually let you configure how many rooms do you want to generate, their sizes, how long corridors do you want, etc. If you want to control the structure of generated dungeons, they sometimes let you specify how sparse or dense should the dungeons be or how many corridors should be connected to each room. And based on that configuration, they generate a random dungeon layout. "),Object(a.b)("p",null,"For me, the biggest advantage of such generators is that the setup is usually very simple and you can start generating your dungeons literally after a few minutes. Another advantage is that these algorithms can often quickly generate layouts consisting of tens or even hundreds of rooms because there are not that many constraints on the structure of the dungeon so the process of finding a suitable dungeon is quite simple. These dungeon generators are perfectly suitable for the majority of games."),Object(a.b)("p",null,"The main goal of this dungeon generator is to give game designers a complete control over the structure of generated layouts. This is achieved by specifying so-called level (connectivity) graphs which describe how many rooms you want to generate and how they should be connected to one another. Moreover, the look of individual rooms is controlled by so-called room templates."),Object(a.b)("p",null,"Through the level graph, a game designer can easily affect the flow of gameplay. Do you want a single main path to a boss room with some optional side paths? Simply start with a path graph and then pick some nodes where the player can choose to either follow the main path or explore a side path with possible treasures and/or monsters waiting for him or her. Do you want a shortcut? Simply choose two nodes in the graph and add a shorter path that connects them. The possibilities are endless."),Object(a.b)(i.c,{src:"img/original/motivation_level_graphs.png",caption:"Examples of input graphs. Main path is shown in red, optional paths are blue and a shortcut is orange.",mdxType:"Image"}),Object(a.b)("p",null,"The price for all of this is the performance of the algorithm. The most difficult thing is laying out rooms that are part of a cycle in the level graph. And even though the algorithm is specialized to handle cycles, there is a point where a level graph is simply too complex for the algorithm to handle."))}p.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||h[d]||a;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},169:function(e,t,n){"use strict";var r=n(0),o=n(32);t.a=function(){return Object(r.useContext)(o.a)}},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(169);function o(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return h}));var r=n(1),o=n(6),a=n(0),i=n.n(a),c=n(170),s=function(e){return i.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:"calc("+100/e.cols+"% - 4px)",verticalAlign:"top"}},e.children)},l=function(e){return i.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},i.a.Children.map(e.children,(function(t){return i.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})})))},u=function(e){return i.a.createElement(s,{cols:e.cols},i.a.createElement("a",{href:Object(c.a)(e.src),target:"_blank"},i.a.createElement("img",{src:Object(c.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&i.a.createElement(p,null,e.caption))},p=function(e){return i.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children)},h=function(e){e.src,e.caption;var t=Object(o.a)(e,["src","caption"]);return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",Object(r.a)({src:Object(c.a)(e.src)},t)),void 0!==e.caption&&i.a.createElement(p,null,e.caption))}}}]);