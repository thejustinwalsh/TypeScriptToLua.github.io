(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[201],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53836:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,metadata:()=>i,toc:()=>l,default:()=>p});var a=n(22122),r=(n(67294),n(3905));const o={title:"JSX"},i={unversionedId:"jsx",id:"jsx",isDocsHomePage:!1,title:"JSX",description:'As of version 0.42.0, TypeScriptToLua supports the use of JSX. To enable it, add "jsx": "react" to your tsconfig - other values are not supported.',source:"@site/docs/jsx.md",sourceDirName:".",slug:"/jsx",permalink:"/docs/jsx",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/jsx.md",version:"current",frontMatter:{title:"JSX"},sidebar:"docs",previous:{title:"Language extensions",permalink:"/docs/advanced/language-extensions"},next:{title:"Overview",permalink:"/docs/api/overview"}},l=[{value:"Custom factory functions",id:"custom-factory-functions",children:[{value:"Examples",id:"examples",children:[]}]},{value:"jsxFragmentFactory",id:"jsxfragmentfactory",children:[{value:"Example",id:"example",children:[]}]},{value:"Creating your own JSX",id:"creating-your-own-jsx",children:[{value:"JSX typings",id:"jsx-typings",children:[]},{value:"JSX factory function",id:"jsx-factory-function",children:[]}]}],s={toc:l};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As of version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.42.0"),", TypeScriptToLua supports the use of JSX. To enable it, add ",(0,r.kt)("inlineCode",{parentName:"p"},'"jsx": "react"')," to your tsconfig - other values are not supported."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n    "compilerOptions": {\n        ...\n        "jsx": "react",\n        ...\n    },\n}\n')),(0,r.kt)("p",null,"JSX will be translated to lua as Typescript would translate it to JS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const element = <div a={b}>Inner text!</div>;\n")),(0,r.kt)("p",null,"Will become:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local element = React.createElement("div", { a = b }, "Inner text!");\n')),(0,r.kt)("h2",{id:"custom-factory-functions"},"Custom factory functions"),(0,r.kt)("p",null,"It is possible to supply custom factory functions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsxFactory")," tsconfig setting, or on a per-file basis using the ",(0,r.kt)("inlineCode",{parentName:"p"},"/** @jsx */")," annotation."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"With compiler option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n    "compilerOptions": {\n        ...\n        "jsx": "react",\n        "jsxFactory": "MyNamespace.myCreate"\n        ...\n    },\n}\n')),(0,r.kt)("p",null,"or with jsx annotation:"),(0,r.kt)("p",null,"Note: the annotation MUST be at the top of the file!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/** @jsx MyNamespace.myCreate */\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const element = <div a={b}>Inner text!</div>;\n")),(0,r.kt)("p",null,"Will translate to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local element = MyNamespace.myCreate("div", { a = b }, "Inner text!");\n')),(0,r.kt)("p",null,"For more info on creating your own factory function, see ",(0,r.kt)("a",{parentName:"p",href:"#creating-your-own-jsx"},"Creating your own JSX"),"."),(0,r.kt)("h2",{id:"jsxfragmentfactory"},"jsxFragmentFactory"),(0,r.kt)("p",null,"JSX fragments are translated as special components."),(0,r.kt)("p",null,"You can provide a custom fragment component using the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsxFragmentFactory")," tsconfig setting or with the ",(0,r.kt)("inlineCode",{parentName:"p"},"/** @jsxFrag */")," annotation."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"With compiler option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n    "compilerOptions": {\n        ...\n        "jsx": "react",\n        "jsxFactory": "MyNamespace.myCreate",\n        "jsxFragmentFactory": "MyNamespace.MyFragment"\n        ...\n    },\n}\n')),(0,r.kt)("p",null,"or with ",(0,r.kt)("inlineCode",{parentName:"p"},"@jsxFrag")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/** @jsx MyNamespace.myCreate */\n/** @jsxFrag MyNamespace.MyFragment */\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const element = <></>;\n")),(0,r.kt)("p",null,"Will translate to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local element = MyNamespace.myCreate(MyNamespace.MyFragment);\n")),(0,r.kt)("h2",{id:"creating-your-own-jsx"},"Creating your own JSX"),(0,r.kt)("h3",{id:"jsx-typings"},"JSX typings"),(0,r.kt)("p",null,"The types on the jsx factory function itself do ",(0,r.kt)("em",{parentName:"p"},"not")," affect how typescript checks JSX types, and no type checking against the jsx factory function is done during transformation."),(0,r.kt)("p",null,"Instead, typescript looks for types for jsx on the special ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," namespace. You can read more creating JSX types ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking"},"here"),"."),(0,r.kt)("h3",{id:"jsx-factory-function"},"JSX factory function"),(0,r.kt)("p",null,"Typescript expects the jsx factory function to be similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/** @noSelf */\nfunction createElement(type: string | Function | Class, props?: object, ...children: any[]): any;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The function should have a ",(0,r.kt)("inlineCode",{parentName:"li"},"@noSelf")," annotation or have a ",(0,r.kt)("inlineCode",{parentName:"li"},"this: void")," parameter. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/the-self-parameter"},"here")," for more info."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," will be a string for intrinsic properties (tag name starts with a lowercase letter), or a function/class component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"props")," will be the tag properties as an object/table, or ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"null"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"nil")," if no properties are specified."),(0,r.kt)("li",{parentName:"ul"},"The remaining parameters form the ",(0,r.kt)("inlineCode",{parentName:"li"},"children"),", and should be collected with a rest parameter (",(0,r.kt)("inlineCode",{parentName:"li"},"..."),"), and not as one array parameter. The type of the children will be strings for inner text, and values passed directly for JSX expressions and nested elements.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No transformations are done on the children parameters, meaning they may have any type (including arrays) that you may need to handle."),(0,r.kt)("li",{parentName:"ul"},"Using a jsx children spread syntax ",(0,r.kt)("inlineCode",{parentName:"li"},"<>{...children}</>")," does ",(0,r.kt)("em",{parentName:"li"},"not")," affect how the children are passed to the createElement function -- it is equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"<>{children}</>"))))),(0,r.kt)("p",null,"The function may process in any way and return any value that you wish."),(0,r.kt)("p",null,"It is recommended that the jsx factory function is in a namespace that is the default export of a module, or that the function itself is the default export of a module, and that the namespace/function name matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsxFactory")," compiler option. This is for better integration with tooling (import suggestions). This applies similarly for custom fragment components and the ",(0,r.kt)("inlineCode",{parentName:"p"},"jsxFragmentFactory")," compiler option."))}p.isMDXComponent=!0}}]);