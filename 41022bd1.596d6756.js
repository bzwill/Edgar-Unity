(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{241:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},242:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(243),a=r(244);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=!r.startsWith(t)?t+r.replace(/^\//,""):r;return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},243:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},244:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p}));var n=r(2),a=r(0),o=r.n(a),i=r(242);const c=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),l=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,t=>o.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),u=e=>o.a.createElement(c,{cols:e.cols},o.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},o.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&o.a.createElement(s,null,e.caption)),s=e=>o.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:r,...a}=e;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&o.a.createElement(s,null,e.caption))}},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(241)),i=r(245),c={title:"Generator setup"},l={unversionedId:"basics/generator-setup",id:"version-2.0.0-alpha.4/basics/generator-setup",isDocsHomePage:!1,title:"Generator setup",description:"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to setup our procedural dungeon generator.",source:"@site/versioned_docs\\version-2.0.0-alpha.4\\basics\\generator-setup.md",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/basics/generator-setup",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.4/basics/generator-setup.md",version:"2.0.0-alpha.4",sidebar:"version-2.0.0-alpha.4/docs",previous:{title:"Level graphs",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/basics/level-graphs"},next:{title:"Level structure and rooms data",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/basics/generated-level-info"}},u=[],s={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to setup our procedural dungeon generator."),Object(o.b)("p",null,"The setup is very easy:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an empty game object in the scene"),Object(o.b)("li",{parentName:"ol"},"Add the ",Object(o.b)("strong",{parentName:"li"},"Dungeon Generator")," component to that game object"),Object(o.b)("li",{parentName:"ol"},"Assign your level graph to the ",Object(o.b)("strong",{parentName:"li"},"Level Graph")," field"),Object(o.b)("li",{parentName:"ol"},"Hit the ",Object(o.b)("strong",{parentName:"li"},"Generate dungeon")," button or enable ",Object(o.b)("strong",{parentName:"li"},"Generate on start")," and enter play mode")),Object(o.b)(i.c,{src:"img/v2/generators/dungeon_generator_inspector.png",caption:"Dungeon generator runner",width:"500px",mdxType:"Image"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The goal of this guide is not to describe individual options of the generator but rather to describe how to get an instance of the generator with reasonable default configuration. If you are interested in individual options, head to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity/docs/2.0.0-alpha.4/generators/dungeon-generator"}),"Dungeon generator")," page.")))}p.isMDXComponent=!0}}]);