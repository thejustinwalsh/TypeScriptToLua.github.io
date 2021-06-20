(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[894],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6840:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,metadata:()=>i,toc:()=>l,default:()=>u});var n=a(22122),r=(a(67294),a(3905));const o={title:"External Lua Code"},i={unversionedId:"external-lua-code",id:"external-lua-code",isDocsHomePage:!1,title:"External Lua Code",description:"As of 0.40.0, tstl supports module resolution for libraries, which means you can use and create npm packages containing .lua files. You can also include Lua source files directly into your source code.",source:"@site/docs/external-lua-code.md",sourceDirName:".",slug:"/external-lua-code",permalink:"/docs/external-lua-code",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/external-lua-code.md",version:"current",frontMatter:{title:"External Lua Code"},sidebar:"docs",previous:{title:"The Self Parameter",permalink:"/docs/the-self-parameter"},next:{title:"Editor Support",permalink:"/docs/editor-support"}},l=[{value:"Adding Lua files to your project sources",id:"adding-lua-files-to-your-project-sources",children:[]},{value:"Using NPM packages",id:"using-npm-packages",children:[]},{value:"Creating Lua NPM packages",id:"creating-lua-npm-packages",children:[]},{value:"Example projects",id:"example-projects",children:[{value:"A project using Lua from node_modules packages",id:"a-project-using-lua-from-node_modules-packages",children:[]},{value:"A project with Lua sources",id:"a-project-with-lua-sources",children:[]}]}],s={toc:l};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As of ",(0,r.kt)("inlineCode",{parentName:"p"},"0.40.0"),", tstl supports module resolution for libraries, which means you can ",(0,r.kt)("em",{parentName:"p"},"use")," and ",(0,r.kt)("em",{parentName:"p"},"create")," npm packages containing ",(0,r.kt)("inlineCode",{parentName:"p"},".lua")," files. You can also include Lua source files directly into your source code."),(0,r.kt)("h2",{id:"adding-lua-files-to-your-project-sources"},"Adding Lua files to your project sources"),(0,r.kt)("p",null,"You can simply add a Lua file as part of your project sources if you add ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/writing-declarations"},"a declaration file")," with the same name. You can then simply import the Lua code in your TypeScript. Your project should look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"main.ts\nsomelua.lua\nsomelua.d.ts\ntsconfig.json\n")),(0,r.kt)("h2",{id:"using-npm-packages"},"Using NPM packages"),(0,r.kt)("p",null,"To use a Lua package, install it via npm and use it as you would for any regular npm package in TypeScript. If the package does not include its own ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," declaration files, you can create your own by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"<package name>.d.ts")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/writing-declarations"},"declaration file")," to your source files."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Including TS or JS files from npm packages is currently NOT supported."))),(0,r.kt)("h2",{id:"creating-lua-npm-packages"},"Creating Lua NPM packages"),(0,r.kt)("p",null,"If you want to distribute your tstl created Lua as a library, you will need to enable the library build mode in ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", and enable the output of declaration files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=json.config",title:"json.config"},'{\n    "compilerOptions": {\n        ...\n        "outDir": "dist", // Output package contents to dist directory\n        "declaration": true\n    },\n    "tstl": {\n        ...\n        "buildMode": "library"\n    }\n}\n')),(0,r.kt)("p",null,"Then add or update your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," so it contains the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "name": "example-tstl-lua-package",\n  "version": "1.0.0",\n  "description": "A package created with TypeScriptToLua",\n  "scripts": {\n    "prepublish": "tstl" // Make sure latest lua is built before publishing\n  },\n  // Only include dist files\n  "files": ["dist/**/*.lua", "dist/**/*.d.ts"]\n}\n')),(0,r.kt)("p",null,"With these two files you are now ready to publish your npm package with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm publish"),"!"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently, projects using ",(0,r.kt)("inlineCode",{parentName:"p"},'"buildMode": "library"')," cannot be bundled."))),(0,r.kt)("h2",{id:"example-projects"},"Example projects"),(0,r.kt)("p",null,"For example projects using external Lua, you can look at the projects used in the TypeScriptToLua tests:"),(0,r.kt)("h3",{id:"a-project-using-lua-from-node_modules-packages"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/TypeScriptToLua/TypeScriptToLua/tree/master/test/transpile/module-resolution/project-with-node-modules"},"A project using Lua from node_modules packages")),(0,r.kt)("p",null,"A project using dependencies from its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeScriptToLua/TypeScriptToLua/tree/master/test/transpile/module-resolution/project-with-node-modules/node_modules"},"node_modules directory")," with Lua code. These example dependencies include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lua-global-with-decls"),": Lua code + TypeScript declarations defining global functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lua-global-without-decls"),": Lua code defining global functions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Declaration file is added manually in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/TypeScriptToLua/TypeScriptToLua/tree/master/test/transpile/module-resolution/project-with-node-modules"},"lua-global-without-decls.d.ts in the project sources"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lua-module-with-decls"),": Lua code + TypeScript declarations for 'module' files, i.e Lua files that return a table of exported functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lua-module-with-decls"),": Lua code for 'module' files, i.e Lua files that return a table of exported functions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Declaration files are added manually in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/TypeScriptToLua/TypeScriptToLua/tree/master/test/transpile/module-resolution/project-with-node-modules"},"lua-module-without-decls.d.ts in the project sources"),".")))),(0,r.kt)("h3",{id:"a-project-with-lua-sources"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/TypeScriptToLua/TypeScriptToLua/tree/master/test/transpile/module-resolution/project-with-lua-sources"},"A project with Lua sources")),(0,r.kt)("p",null,"This project includes Lua files as part of the project's source files. To use the Lua from the files you have to provide declaration files with a matching name and location for each file. For examples ",(0,r.kt)("inlineCode",{parentName:"p"},"some_dir/library.lua")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"some_dir/library.d.ts"),". The declaration files contain the TypeScript declarations of the corresponding Lua file. Both Lua and .d.ts files should be checked into your repository!"),(0,r.kt)("p",null,"This project contains two Lua source files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"luafile.lua"),": Some Lua right next to the .ts files using it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lua_sources/otherluaFile.lua"),": Lua in a separate ",(0,r.kt)("inlineCode",{parentName:"li"},"lua_sources")," directory, in case you want to group all your Lua files into one directory.")))}u.isMDXComponent=!0}}]);