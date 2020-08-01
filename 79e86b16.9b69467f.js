(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var a=r(2),o=r(6),n=(r(0),r(241)),i=r(245),l={title:"Level graphs"},s={unversionedId:"basics/level-graphs",id:"version-2.0.0-alpha.1/basics/level-graphs",isDocsHomePage:!1,title:"Level graphs",description:"Level graph is an abstraction that lets us control the structure of generated levels.",source:"@site/versioned_docs\\version-2.0.0-alpha.1\\basics\\level-graphs.md",permalink:"/Edgar-Unity/docs/2.0.0-alpha.1/basics/level-graphs",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.1/basics/level-graphs.md",version:"2.0.0-alpha.1",sidebar:"version-2.0.0-alpha.1/docs",previous:{title:"Room templates",permalink:"/Edgar-Unity/docs/2.0.0-alpha.1/basics/room-templates"},next:{title:"Generator setup",permalink:"/Edgar-Unity/docs/2.0.0-alpha.1/basics/generator-setup"}},c=[{value:"Basics",id:"basics",children:[]},{value:"Limitations",id:"limitations",children:[{value:"Planar graphs",id:"planar-graphs",children:[]},{value:"Connected graphs",id:"connected-graphs",children:[]}]},{value:"Creating level graphs",id:"creating-level-graphs",children:[{value:"Graph editor",id:"graph-editor",children:[]}]},{value:"Room templates",id:"room-templates",children:[{value:"Room templates sets",id:"room-templates-sets",children:[]},{value:"Default room templates",id:"default-room-templates",children:[]},{value:"Corridor room templates",id:"corridor-room-templates",children:[]},{value:"Configuring individual rooms",id:"configuring-individual-rooms",children:[]}]}],p={rightToc:c};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Level graph is an abstraction that lets us control the structure of generated levels. "),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," In the context of this plugin, the term ",Object(n.b)("em",{parentName:"p"},"graph")," is used to refer to a mathematical structure consisting of nodes and edges, not a way to visualise functions.")),Object(n.b)("h2",{id:"basics"},"Basics"),Object(n.b)("p",null,"Level graph consists of rooms and room connections. Each room corresponds to a room in a generated level and each connection tells the algorithm that the two rooms must be connected either directly to each other or via a corridor."),Object(n.b)("p",null,"Below you can see a simple level graph with 5 rooms and 4 connections. If we use this level graph as an input for the algorithm, each generated dungeon will have exactly 5 rooms and ",Object(n.b)("em",{parentName:"p"},"room 1")," will be connected to every other room in the dungeon."),Object(n.b)(i.c,{src:"img/v2/level_graphs/basic_level_graph.png",caption:"Simple level graph with 5 rooms and 4 room connections",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," It is not important how we draw the graph. It is only important how many rooms there are and which rooms are connected to each other.")),Object(n.b)("h2",{id:"limitations"},"Limitations"),Object(n.b)("h3",{id:"planar-graphs"},"Planar graphs"),Object(n.b)("p",null,"Level graphs must be ",Object(n.b)("strong",{parentName:"p"},"planar"),". We say that a graph is planar if it can be drawn on the plane in such a way that no two edges intersect. In our case that means that no two connection lines may intersect. If the input graph was not planar, we would not be able to find a dungeon without rooms or corridors overlapping one another."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:"),' A level graph may be planar even if we draw it in a way that some edges intersect. It is because even if one drawing of the graph is "incorrect", that does not mean that there are intersecting edges in all the drawings.')),Object(n.b)("h3",{id:"connected-graphs"},"Connected graphs"),Object(n.b)("p",null,"Level graphs must be ",Object(n.b)("strong",{parentName:"p"},"connected"),". We say that a graph is connected if there is a path between every pair of vertices. Below you can see a level graph that is not connected because there is no path between vertices on the left side and vertices on the right side."),Object(n.b)(i.c,{src:"img/v2/level_graphs/not_connected_level_graph.png",caption:"Example of a level graph that is not connected",mdxType:"Image"}),Object(n.b)("h2",{id:"creating-level-graphs"},"Creating level graphs"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"LevelGraph")," is a ScriptableObject that can be created by navigating to ",Object(n.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Level graph"),". Below you can see how are level graphs displayed in the Inspector window."),Object(n.b)(i.c,{src:"img/v2/level_graphs/level_graph_inspector.png",caption:"Level graph in the Inspector window",mdxType:"Image"}),Object(n.b)("h3",{id:"graph-editor"},"Graph editor"),Object(n.b)("p",null,"The Graph editor window can be opened by clicking the ",Object(n.b)("em",{parentName:"p"},"Open graph editor")," button."),Object(n.b)(i.c,{src:"img/v2/level_graphs/level_graph_window.png",caption:"Graph editor window",mdxType:"Image"}),Object(n.b)("p",null,"Window controls:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Selected graph"),": name of the currently selected level graph"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Select in inspector"),": selects the current graph in the inspector window"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Select level graph"),": selects a different level graph")),Object(n.b)("p",null,"Working with level graphs:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Create room"),": double click on an empty space in the grid"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Configure room"),": double click on an existing room"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Delete room"),": right click on a room and select ",Object(n.b)("em",{parentName:"li"},"Delete room")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Move room"),": left click and then drag around"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Add connection"),": hold ",Object(n.b)("em",{parentName:"li"},"ctrl")," while left-clicking a room and then move the cursor to a different room"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Delete connection"),": right click on a connection handle and select ",Object(n.b)("em",{parentName:"li"},"Delete connection"))),Object(n.b)(i.c,{src:"img/v2/level_graphs/level_graph_controls.gif",caption:"Level graph controls",mdxType:"Image"}),Object(n.b)("h2",{id:"room-templates"},"Room templates"),Object(n.b)("p",null,"When we have our rooms and connections, it is time to setup room templates. In the ",Object(n.b)("em",{parentName:"p"},"Level graph")," inspector window above, we can see 2 sections - ",Object(n.b)("em",{parentName:"p"},"Default room templates")," and ",Object(n.b)("em",{parentName:"p"},"Corridor room templates"),". These section are used to specify which room templates are available for which room. Below you can see the setup from ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/Edgar-Unity/docs/2.0.0-alpha.1/examples/example-1"}),"Example 1"),"."),Object(n.b)(i.c,{src:"img/v2/level_graphs/level_graph_inspector2.png",caption:"Example of assigned room templates",mdxType:"Image"}),Object(n.b)("h3",{id:"room-templates-sets"},"Room templates sets"),Object(n.b)("p",null,"It may sometimes be useful to group our room templates into groups like ",Object(n.b)("em",{parentName:"p"},"Shop rooms"),", ",Object(n.b)("em",{parentName:"p"},"Boss rooms"),", etc. We can create a so-called ",Object(n.b)("strong",{parentName:"p"},"Room templates set")," by navigating to ",Object(n.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Room templates set"),". It is a simple ScriptableObject that holds an array of room templates and we can use it instead of assigning individual room templates one by one. The main advantage is that if we later decide to add a new shop room template, we do not have to change all the shop rooms to include this new template - we simply add it to the room templates set."),Object(n.b)(i.c,{src:"img/v2/level_graphs/room_templates_set.png",caption:"Example of a room templates set that holds all our basic rooms. If we add another room template later, the change gets propagated to all the rooms in the level graph that are using this room templates set.",mdxType:"Image"}),Object(n.b)("h3",{id:"default-room-templates"},"Default room templates"),Object(n.b)("h4",{id:"room-templates-1"},"Room templates"),Object(n.b)("p",null,"Array of room templates that will be used for rooms that have no room shapes assigned. We can use this for our basic rooms and then configure our special rooms (spawn room, boss room, etc.) to use a different set of room templates."),Object(n.b)("h4",{id:"room-templates-sets-1"},"Room templates sets"),Object(n.b)("p",null,"Array of room templates sets that will be used for rooms that have no room shapes assigned. Room templates from these sets are used together with individual room templates."),Object(n.b)("h3",{id:"corridor-room-templates"},"Corridor room templates"),Object(n.b)("h4",{id:"room-templates-2"},"Room templates"),Object(n.b)("p",null,"Array of room templates that will be used for corridor rooms. These room templates will be used if we setup the algorithm to use corridors instead of connecting rooms directly by doors. Can be left empty if we do not want to use corridors."),Object(n.b)("h4",{id:"room-templates-sets-2"},"Room templates sets"),Object(n.b)("p",null,"Array of room templates sets that will be used for corridor rooms. Room templates from these sets are used together with individual room templates."),Object(n.b)("h3",{id:"configuring-individual-rooms"},"Configuring individual rooms"),Object(n.b)("p",null,"If we double click on a room in the Graph editor, it gets selected and we can configure it in the inspector. We can set the name of the room which will be displayed in the Graph editor. We can also assign room templates and room templates sets that will be used only for this room. By assigning any room template or room template set, we override the default room templates that are set in the level graph itself."),Object(n.b)(i.c,{src:"img/v2/level_graphs/room_inspector1.png",caption:"Configuration of a spawn room",mdxType:"Image"}))}m.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,d=m["".concat(i,".").concat(b)]||m[b]||h[b]||n;return r?o.a.createElement(d,l(l({ref:t},c),{},{components:r})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},242:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}));var a=r(243),o=r(244);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(r,a)=>function(e,t,r,{forcePrependBaseUrl:a=!1,absolute:n=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;const i=!r.startsWith(t)?t+r.replace(/^\//,""):r;return n?e+i:i}(t,e,r,a)}}function i(e,t={}){const{withBaseUrl:r}=n();return r(e,t)}},243:function(e,t,r){"use strict";var a=r(0),o=r(20);t.a=function(){const e=Object(a.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},244:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}))},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return m}));var a=r(2),o=r(0),n=r.n(o),i=r(242);const l=e=>n.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),s=e=>n.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},n.a.Children.map(e.children,t=>n.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),c=e=>n.a.createElement(l,{cols:e.cols},n.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},n.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&n.a.createElement(p,null,e.caption)),p=e=>n.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...o}=e;return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",Object(a.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&n.a.createElement(p,null,e.caption))}}}]);