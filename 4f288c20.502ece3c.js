(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{104:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var a=o(2),r=o(6),n=(o(0),o(241)),i=o(245),l={title:"Room templates"},c={unversionedId:"basics/room-templates",id:"version-2.0.0-alpha.0/basics/room-templates",isDocsHomePage:!1,title:"Room templates",description:"Room templates are one of the main concepts of the algorithm. They describe how individual rooms in the dungeon look and how they can be connected to one another.",source:"@site/versioned_docs\\version-2.0.0-alpha.0\\basics\\room-templates.md",permalink:"/Edgar-Unity/docs/2.0.0-alpha.0/basics/room-templates",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.0/basics/room-templates.md",version:"2.0.0-alpha.0",sidebar:"version-2.0.0-alpha.0/docs",previous:{title:"Basics",permalink:"/Edgar-Unity/docs/2.0.0-alpha.0/basics/introduction"},next:{title:"Level graphs",permalink:"/Edgar-Unity/docs/2.0.0-alpha.0/basics/level-graphs"}},s=[{value:"Creating room templates",id:"creating-room-templates",children:[{value:"Room template structure",id:"room-template-structure",children:[]}]},{value:"Designing room templates",id:"designing-room-templates",children:[{value:"Limitations",id:"limitations",children:[]},{value:"Outline override",id:"outline-override",children:[]}]},{value:"Adding doors",id:"adding-doors",children:[{value:"Door modes",id:"door-modes",children:[]}]},{value:"Repeat mode",id:"repeat-mode",children:[]},{value:"Corridors",id:"corridors",children:[]},{value:"Final steps",id:"final-steps",children:[]}],m={rightToc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},m,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Room templates are one of the main concepts of the algorithm. They describe how individual rooms in the dungeon look and how they can be connected to one another. "),Object(n.b)(i.c,{src:"img/v2/room_templates/room_template_complete.png",caption:"Example of a complete room template. Outline of the room template is hightlighted with yellow and possible door positions are red.",mdxType:"Image"}),Object(n.b)("h2",{id:"creating-room-templates"},"Creating room templates"),Object(n.b)("p",null,"To create a new room template, we have to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"create an empty game object"),Object(n.b)("li",{parentName:"ul"},"add ",Object(n.b)("em",{parentName:"li"},"Dungeon Room Template Initializer")," component"),Object(n.b)("li",{parentName:"ul"},"click the ",Object(n.b)("em",{parentName:"li"},"Initialize room template")," button"),Object(n.b)("li",{parentName:"ul"},"create a prefab from that game object")),Object(n.b)("p",null,"The whole process can be seen on the video below:"),Object(n.b)(i.c,{src:"img/v2/room_templates/creating_room_templates.gif",caption:"Initializing room template using the Dungeon room template initializer script",mdxType:"Image"}),Object(n.b)("h3",{id:"room-template-structure"},"Room template structure"),Object(n.b)("p",null,"Below you can see the room template structure after we use the room template initializer:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Tilemaps")," game object that contains several tilemaps attached as children"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Room Template")," script attached to the root game object"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Doors")," script attached to the root game object")),Object(n.b)(i.c,{src:"img/v2/room_templates/room_template_inspector.png",caption:"Room template structure",mdxType:"Image"}),Object(n.b)("h2",{id:"designing-room-templates"},"Designing room templates"),Object(n.b)("p",null,"We will use Unity ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.unity3d.com/Manual/class-Tilemap.html"}),"Tilemaps")," to design our room templates so you should be familiar with that. By default, room templates come with several tilemap layers that are children of the ",Object(n.b)("em",{parentName:"p"},"Tilemap")," game object:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Floor")," - order 0 "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Walls")," - order 1, with collider"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Collideable")," - order 2, with collider"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Other 1")," - order 3"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Other 2")," - order 4"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Other 3")," - order 5")),Object(n.b)("p",null,"It is ",Object(n.b)("strong",{parentName:"p"},"VERY IMPORTANT")," that all the room templates have exactly the same structure of tilemaps because the generator will copy all the tiles from individual room templates to shared tilemaps. If you need a different structure of tilemaps, you can override the default behaviour. See ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/Edgar-Unity/docs/2.0.0-alpha.0/other/tilemap-layers"}),"Tilemap layers"),"."),Object(n.b)(i.c,{src:"img/v2/room_templates/room_template_drawing.gif",caption:"You can use all the available tools (brushes, rule tiles, etc.) to draw room templates",mdxType:"Image"}),Object(n.b)("h3",{id:"limitations"},"Limitations"),Object(n.b)("p",null,"The underlying algorithm works with polygons, not tilemaps, tiles and sprites. We are interested in the outlines of individual room templates. However, there are some limitations as to how a room template may look like in order for the algorithm to be able to compute its outline. The goal of this section is to describe which rules we should follow when designing room templates."),Object(n.b)(i.c,{src:"img/v2/room_templates/outline.png",caption:"The yellow color shows the outline of the room template as it is seen by the generator",mdxType:"Image"}),Object(n.b)(i.c,{src:"img/v2/room_templates/invalid_outline.png",caption:"If the outline is invalid, we can see a warning in the *Room Template* script",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," The underlying algorithm does not care about individual tilemaps layers. Instead, it merges all the layers together and then finds all the non-null tiles. Therefore, the outline of the room template will be the same no matter which tilemap layers we use.")),Object(n.b)("h4",{id:"one-connected-component"},"One connected component"),Object(n.b)("p",null,"I will not go into formal definitions. The image below should be self-explanatory."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/v2/room_templates/one_connected_component_nok.png",caption:"Wrong",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/room_templates/one_connected_component_ok.png",caption:"Correct",mdxType:"GalleryImage"})),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," You can see that the algorithm computed some outline (yellow) in in the wrong room template. The current implementation stops after any outline is found and does not check whether all tiles are contained in that outline. This will be improved in the future.")),Object(n.b)("h4",{id:"each-tile-atleast-two-neighbours"},"Each tile atleast two neighbours"),Object(n.b)("p",null,"Each tile must be connected to at least two neigbouring tiles. In the image below, both tiles in the upper row are connected to only a single neighbour so the room shape is not valid. If we need these two tiles, we can use ",Object(n.b)("strong",{parentName:"p"},"Outline override")," that is described in the next section."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/v2/room_templates/at_least_two_neighbors_nok.png",caption:"Wrong",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/room_templates/at_least_two_neighbors_ok.png",caption:"Correct",mdxType:"GalleryImage"})),Object(n.b)("h4",{id:"may-contain-holes"},"May contain holes"),Object(n.b)("p",null,"There may be holes inside the room template."),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/v2/room_templates/no_holes_ok_1.png",caption:"Correct",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/room_templates/no_holes_ok_2.png",caption:"Correct",mdxType:"GalleryImage"})),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"NOTE:")," This was not possible in the 1.x.x version.")),Object(n.b)("h3",{id:"outline-override"},"Outline override"),Object(n.b)("p",null,"If we really need to have a room template whose outline is not valid, we can use the so-called ",Object(n.b)("em",{parentName:"p"},"Outline override"),". It can be enabled by clicking the ",Object(n.b)("em",{parentName:"p"},"Add outline override")," button in the ",Object(n.b)("em",{parentName:"p"},"Room template")," script. As a result, a new tilemap layer called ",Object(n.b)("em",{parentName:"p"},"Outline override")," is created. With this functionality enabled, the algorithm ignores all the other layers when computing the outline. Moreover, nothing that is drawn on this layer will be used in the resulting level, so we can use any tiles to draw on this layer. "),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," When we are done with drawing the outline, we can make the layer (game object) inactive so that we can see how the room template actually looks like. However, ",Object(n.b)("strong",{parentName:"p"},"we must not destroy the game object"),".")),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/v2/room_templates/outline_override_active.png",caption:"We can use any tiles to draw the outline",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/v2/room_templates/outline_override_inactive.png",caption:"If we disable the Outline override game object, we should still see that the outline is overriden",mdxType:"GalleryImage"})),Object(n.b)("h2",{id:"adding-doors"},"Adding doors"),Object(n.b)("p",null,"When we are happy with how the room template looks, we can add doors. By specifying door positions, we tell the algorithm how can individual room templates be connected together."),Object(n.b)("p",null,"The algorithm may connect two room templates if:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"there exist door positions with the same length"),Object(n.b)("li",{parentName:"ul"},"the two room templates do not overlap after we connect them",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"they may share tiles on outlines of corresponding room shapes")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," In some procedural level generators, all the doors must be used by the algorithm to connect the room to other rooms. That is not the case here, we define all the possible door positions and the generator may pick only some of them.")),Object(n.b)("h3",{id:"door-modes"},"Door modes"),Object(n.b)("p",null,"There are currently two ways of defining door positions. Both ways are currently controlled by the ",Object(n.b)("em",{parentName:"p"},"Doors")," component that is automatically added to the room game object after using the room template initializer."),Object(n.b)("p",null,"In both modes, all door positions must be on the outline of the corresponding room template."),Object(n.b)("h4",{id:"simple-mode"},"Simple mode"),Object(n.b)("p",null,"In the simple mode, you specify how long should all doors be and at least how far from corners of the room template they should be positioned. Below you can see how this mode looks."),Object(n.b)(i.c,{src:"img/v2/room_templates/doors_simple1.png",caption:"Simple door mode - length 1, distance from corners 2",mdxType:"Image"}),Object(n.b)("p",null,"Each red rectangle shows available door positions. You can see that there are no door positions in the bottom-right part of the room template - that is because no tile is placed at least 2 tiles from all corners. If we change the door length to 2, we will loose the door positon on the right side of the room template because there is space only for a single tile."),Object(n.b)(i.c,{src:"img/v2/room_templates/doors_simple2.png",caption:"Simple door mode - length 2, distance from corners 2",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," There is currently an inconsistency in how are door positions displayed. In the ",Object(n.b)("em",{parentName:"p"},"simple mode"),", each red rectangle represents a set of door positions, while in the ",Object(n.b)("em",{parentName:"p"},"specific positions mode"),", each rectangle represents exactly one door position. The reason for this is that it is exactly how the procedural dungeon generator library handles that, but it might be counter-intuitive for users of the plugin and may change in the future.")),Object(n.b)("h4",{id:"specific-positions-mode"},"Specific positions mode"),Object(n.b)("p",null,"In the ",Object(n.b)("em",{parentName:"p"},"Specific positions mode"),", you have to manually specify all door positions of the room template. This mode gives you a complete control over available door positions."),Object(n.b)("p",null,"To start adding doors, click the ",Object(n.b)("em",{parentName:"p"},"Specific positions")," button in the ",Object(n.b)("em",{parentName:"p"},"Doors")," script and then click the ",Object(n.b)("em",{parentName:"p"},"Add door positions")," button to toggle edit mode. Then you can simply draw door positions as seen in the video below."),Object(n.b)(i.c,{src:"img/original/doors_specific1.gif",caption:"Specific positions mode",mdxType:"Image"}),Object(n.b)("p",null,"You can see that I am creating doors of various lengths. And at the end of the video, you can also see that individual door positions may overlap."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," If you accidentally add a door position that you did not want to add, you have to ",Object(n.b)("em",{parentName:"p"},"Delete all door positions")," and start over. This is far from ideal and should be improved in the future.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," With multiple doors overlapping, the GUI gets quite messy. In order to make it more clear, I show diagonals of individual rectangles. And it gets even more messy when you have doors of various sizes overlapping. I thought about adding a switch that would show only doors with a specified length.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," The inspector script currently lets you add door positions that are not on the outline of the room shape. It will, hovewer, result in an error when trying to generate a dungeon. It should be improved in the future.")),Object(n.b)("h2",{id:"repeat-mode"},"Repeat mode"),Object(n.b)("p",null,"Each ",Object(n.b)("em",{parentName:"p"},"Room template")," script has a field called ",Object(n.b)("em",{parentName:"p"},"Repeat Mode")," that is initially set to ",Object(n.b)("em",{parentName:"p"},"Allow Repeat"),". Using this field, we can tell the algorithm whether the room template can be used more than once in generated levels. There are the following possibilities:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Allow repeat")," - The room tamplate may repeat in generated levels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"No immeadiate")," - Neighbors of the room template must be different."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"No repeat")," - The room template can be used at most once.")),Object(n.b)(i.c,{src:"img/v2/room_templates/repeat_mode.png",caption:"Specific positions mode",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," Instead of setting the ",Object(n.b)("em",{parentName:"p"},"Repeat mode")," on a per room template basis, you can use global override which is configured directly in the dungeon generator.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," If you provide too few room templates, they may repeat in generated levels even if you choose the ",Object(n.b)("strong",{parentName:"p"},"No immeadiate")," or ",Object(n.b)("strong",{parentName:"p"},"No repeat")," options. To make sure that the repeat mode is satisifed, please provide enough room templates to choose from.")),Object(n.b)("h2",{id:"corridors"},"Corridors"),Object(n.b)("p",null,"The algorithm distinguishes two types of room templates - basic room templates and room templates for corridor rooms. In theory, we can use any any room template with at least two doors to act as a corridor room template. ",Object(n.b)("strong",{parentName:"p"},"However, to make the algorithm fast, we should follow these recommendations"),":"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"There should be exactly two door positions."),Object(n.b)("li",{parentName:"ol"},"The two door should be on the opposite sides of the room template."),Object(n.b)("li",{parentName:"ol"},"The corridor should not be too long or too wide.")),Object(n.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(i.b,{src:"img/original/corridor_ok1.png",caption:"Recommended - narrow straight corridor",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/corridor_ok2.png",caption:"OK - little too wide but should be ok",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/corridor_nok1.png",caption:"Not recommended - doors not on opposite sides",mdxType:"GalleryImage"}),Object(n.b)(i.b,{src:"img/original/corridor_nok2.png",caption:"Not recommended - more than 2 door positions",mdxType:"GalleryImage"})),Object(n.b)("h2",{id:"final-steps"},"Final steps"),Object(n.b)("p",null,"After creating a room template GameObject, you can simply save it as a prefab and it is ready to be used in a level graph."))}p.isMDXComponent=!0},241:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return h}));var a=o(0),r=o.n(a);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(o),d=a,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||n;return o?r.a.createElement(h,l(l({ref:t},s),{},{components:o})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},242:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return i}));var a=o(243),r=o(244);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(o,a)=>function(e,t,o,{forcePrependBaseUrl:a=!1,absolute:n=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if(Object(r.b)(o))return o;if(a)return t+o;const i=!o.startsWith(t)?t+o.replace(/^\//,""):o;return n?e+i:i}(t,e,o,a)}}function i(e,t={}){const{withBaseUrl:o}=n();return o(e,t)}},243:function(e,t,o){"use strict";var a=o(0),r=o(20);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},244:function(e,t,o){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return r}))},245:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return s})),o.d(t,"c",(function(){return p}));var a=o(2),r=o(0),n=o.n(r),i=o(242);const l=e=>n.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>n.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},n.a.Children.map(e.children,t=>n.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>n.a.createElement(l,{cols:e.cols},n.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},n.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&n.a.createElement(m,null,e.caption)),m=e=>n.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:o,...r}=e;return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",Object(a.a)({src:Object(i.a)(e.src)},r)),void 0!==e.caption&&n.a.createElement(m,null,e.caption))}}}]);