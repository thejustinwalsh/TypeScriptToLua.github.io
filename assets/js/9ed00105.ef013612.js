(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[715],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20970:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>o,toc:()=>l,default:()=>d});var a=n(22122),r=(n(67294),n(3905));const i={title:"Configuration"},o={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"TypeScriptToLua uses the same configuration file as the vanilla TypeScript compiler, loading it from the tsconfig.json file using the same rules as tsc.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/configuration.md",version:"current",frontMatter:{title:"Configuration"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Caveats",permalink:"/docs/caveats"}},l=[{value:"Custom options",id:"custom-options",children:[]},{value:"Standard options",id:"standard-options",children:[]},{value:"Transformers",id:"transformers",children:[]}],p={toc:l};function d({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TypeScriptToLua uses the same configuration file as the vanilla TypeScript compiler, loading it from the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file using the same rules as ",(0,r.kt)("inlineCode",{parentName:"p"},"tsc"),"."),(0,r.kt)("h2",{id:"custom-options"},"Custom options"),(0,r.kt)("p",null,"To customize transpilation behavior we add a new group of options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file. All of these options should be placed in a ",(0,r.kt)("inlineCode",{parentName:"p"},"tstl")," object."),(0,r.kt)("p",null,"You can use our ",(0,r.kt)("a",{parentName:"p",href:"/docs/editor-support"},"VS Code extension")," or manually specify the JSON schema to receive autocompletion and hints for the configuration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n  // Optional: Schema file for hints and validation\n  "$schema": "https://raw.githubusercontent.com/TypeScriptToLua/vscode-typescript-to-lua/master/tsconfig-schema.json",\n\n  // ... tsconfig options\n\n  "tstl": {\n    // Custom options\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"luaTarget")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"JIT"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"5.3"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"5.2"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"5.1"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"universal"')," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},'"universal"'),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the Lua version you want to generate code for. Choosing ",(0,r.kt)("inlineCode",{parentName:"td"},"universal")," makes TypeScriptToLua generate code compatible with all supported Lua targets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"noImplicitSelf")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, treats all project files as if they were prefixed with",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"/** @noSelfInFile **/"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"noHeader")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Set this to true if you don't want to include our header in the output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"luaLibImport")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"inline"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"require"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"always"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"none"')," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},'"require"'),")"),(0,r.kt)("td",{parentName:"tr",align:null},"We polyfill certain JavaScript features with Lua functions, this option specifies how these functions are imported into the Lua output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sourceMapTraceback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Overrides Lua's ",(0,r.kt)("inlineCode",{parentName:"td"},"debug.traceback")," to apply sourcemaps to Lua stacktraces. This will make error messages point to your original TypeScript code instead of the generated Lua.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"luaBundle")),(0,r.kt)("td",{parentName:"tr",align:null},"File path (relative to the ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Will bundle all output lua files into a single bundle file. Requires ",(0,r.kt)("strong",{parentName:"td"},"luaBundleEntry")," to be set!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"luaBundleEntry")),(0,r.kt)("td",{parentName:"tr",align:null},"File path (relative to the ",(0,r.kt)("inlineCode",{parentName:"td"},"tsconfig.json"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"This should be the name/path of the TS file in your project that will serve as entry point to the bundled code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"luaPlugins")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Array<{ name: string; import?: string }>")),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("a",{parentName:"td",href:"/docs/api/plugins"},"TypeScriptToLua plugins"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"buildMode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"default"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"library"')," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},'"library"'),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},'buildMode: "library"')," to build ",(0,r.kt)("a",{parentName:"td",href:"/docs/publishing-modules"},"publishable library packages"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tstlVerbose")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Output additional logging when performing a tstl build, to help diagnose issues.")))),(0,r.kt)("h2",{id:"standard-options"},"Standard options"),(0,r.kt)("p",null,"Most of the standard ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html"},"TypeScript options")," work without any changes. Notable unsupported options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"composite"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"incremental")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"emitDecoratorMetadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"esModuleInterop"))),(0,r.kt)("p",null,"Some options do not apply to TypeScriptToLua and are ignored:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outFile")," - use ",(0,r.kt)("inlineCode",{parentName:"li"},"luaBundle")," instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"importHelpers"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"noEmitHelpers")," - use ",(0,r.kt)("inlineCode",{parentName:"li"},"luaLibImport")," instead."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"module")," - it's only effect is limiting some features, so prefer to set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"esnext"),". If TypeScript requires you to specify different ",(0,r.kt)("inlineCode",{parentName:"li"},"module")," type because you want to bundle your declarations with ",(0,r.kt)("inlineCode",{parentName:"li"},"outFile"),", consider using ",(0,r.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor")," instead.")),(0,r.kt)("h2",{id:"transformers"},"Transformers"),(0,r.kt)("p",null,"Transformers is a powerful feature of TypeScript that allows you to modify behavior of your program during compilation. While TypeScript ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/14419"},"currently")," does not provide a user-facing way to use transformers, TypeScriptToLua allows you to specify them in the configuration file, following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cevek/ttypescript#how-to-use"},"ttypescript")," format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n  "compilerOptions": {\n    "plugins": [{ "transform": "dota-lua-types/transformer" }]\n  }\n}\n')))}d.isMDXComponent=!0}}]);