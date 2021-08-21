(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[592],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26e3:(e,t,n)=>{"use strict";n.d(t,{q:()=>r});var a=n(67294);const o="sideBySide_3jwM";function r({children:e}){const t=a.Children.count(e);if(2!==t)throw new Error(`Invalid SideBySide children count: ${t}`);const[n,r]=a.Children.toArray(e);return a.createElement("div",{className:o},n,r)}},91041:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,metadata:()=>l,toc:()=>s,default:()=>p});var a=n(22122),o=(n(67294),n(3905)),r=n(26e3);const i={title:"The Self Parameter"},l={unversionedId:"the-self-parameter",id:"the-self-parameter",isDocsHomePage:!1,title:"The Self Parameter",description:"Why is it there by default",source:"@site/docs/the-self-parameter.md",sourceDirName:".",slug:"/the-self-parameter",permalink:"/docs/the-self-parameter",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/the-self-parameter.md",version:"current",frontMatter:{title:"The Self Parameter"},sidebar:"docs",previous:{title:"Caveats",permalink:"/docs/caveats"},next:{title:"External Lua Code",permalink:"/docs/external-lua-code"}},s=[{value:"Why is it there by default",id:"why-is-it-there-by-default",children:[]},{value:"Removing it",id:"removing-it",children:[{value:"<code>this: void</code>",id:"this-void",children:[]},{value:"<code>@noSelf</code>",id:"noself",children:[]},{value:"<code>@noSelfInFile</code>",id:"noselfinfile",children:[]},{value:"<code>noImplicitSelf</code>",id:"noimplicitself",children:[]}]},{value:"Assignment Errors",id:"assignment-errors",children:[{value:"Overloads",id:"overloads",children:[]}]}],c={toc:s};function p({components:e,...t}){return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"why-is-it-there-by-default"},"Why is it there by default"),(0,o.kt)("p",null,"All functions, by default, have a ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," parameter to preserve JavaScript behaviour."),(0,o.kt)("p",null,"Telling TypeScript not to allow ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to be used will eliminate that parameter from its containing context."),(0,o.kt)("p",null,"Other workarounds are available for removing this too."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Disabling this self parameter should mainly be done when writing declarations for Lua interop purposes.")),(0,o.kt)("h2",{id:"removing-it"},"Removing it"),(0,o.kt)("h3",{id:"this-void"},(0,o.kt)("inlineCode",{parentName:"h3"},"this: void")),(0,o.kt)("p",null,"This is a type-safe solution usable whenever describing something callable."),(0,o.kt)("p",null,"This tells TypeScript that ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," cannot be used in the context of this function."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"this: void")," results in no ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," parameter to be generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)(r.q,{mdxType:"SideBySide"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'declare function f(this: void, arg: string): void;\nf("foo");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'f("foo")\n'))),(0,o.kt)("p",null,"Also useful if you have class methods which should be called with a dot ",(0,o.kt)("inlineCode",{parentName:"p"},".")," instead of a colon ",(0,o.kt)("inlineCode",{parentName:"p"},":"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)(r.q,{mdxType:"SideBySide"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'declare class Class {\n  colon(arg: string): void;\n  dot(this: void, arg: string): void;\n}\n\nconst c = new Class();\nc.colon("foo");\nc.dot("foo");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local c = __TS__New(Class)\nc:colon("foo")\nc.dot("foo")\n'))),(0,o.kt)("p",null,"Common Lua libraries use callback functions that don't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," parameter so make sure this is reflected in their declaration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)(r.q,{mdxType:"SideBySide"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Callback = (\n  this: void,\n  arg: string\n) => void;\n\ndeclare function useCallback(\n  this: void,\n  callback: Callback\n): void;\n\nuseCallback(arg => {\n  console.log(arg);\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"useCallback(function(arg)\n  print(arg)\nend)\n"))),(0,o.kt)("h3",{id:"noself"},(0,o.kt)("inlineCode",{parentName:"h3"},"@noSelf")),(0,o.kt)("p",null,"If you wish to specify that all functions in a class, interface or namespace should not have a context parameter, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/compiler-annotations#noself"},(0,o.kt)("inlineCode",{parentName:"a"},"@noSelf"))," annotation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)(r.q,{mdxType:"SideBySide"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/** @noSelf **/\ndeclare namespace Namespace {\n  function foo(arg: string): void;\n}\n\nNamespace.foo("foo");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'Namespace.foo("foo")\n'))),(0,o.kt)("p",null,"You can override ",(0,o.kt)("inlineCode",{parentName:"p"},"@noSelf")," on a per-function basis by specifying a ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," parameter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)(r.q,{mdxType:"SideBySide"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/** @noSelf **/\ndeclare namespace Namespace {\n  function foo(this: any, arg: string): void;\n}\n\nNamespace.foo("foo");\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'Namespace:foo("foo")\n'))),(0,o.kt)("h3",{id:"noselfinfile"},(0,o.kt)("inlineCode",{parentName:"h3"},"@noSelfInFile")),(0,o.kt)("p",null,"If you want to specify that all functions in a file should have no context, you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/compiler-annotations#noselfinfile"},(0,o.kt)("inlineCode",{parentName:"a"},"@noSelfInFile"))," at the top of the file."),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/compiler-annotations#noself"},(0,o.kt)("inlineCode",{parentName:"a"},"@noSelf"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/compiler-annotations#noselfinfile"},(0,o.kt)("inlineCode",{parentName:"a"},"@noSelfInFile")),", please refer to ",(0,o.kt)("a",{parentName:"p",href:"./advanced/compiler-annotations"},"Compiler Annotations"),"."),(0,o.kt)("h3",{id:"noimplicitself"},(0,o.kt)("inlineCode",{parentName:"h3"},"noImplicitSelf")),(0,o.kt)("p",null,"Use this option if you do not want implemented functions to have a self parameter."),(0,o.kt)("p",null,"Ambient functions (functions described, not implemented) as well as classes and interfaces ignore this option."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use this with ",(0,o.kt)("inlineCode",{parentName:"p"},"strict")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"noImplicitThis"),' to ensure you don\'t use an "implicit this" type in your code.'))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"When enabled, if ",(0,o.kt)("inlineCode",{parentName:"em"},"this")," has a type other than an implicit ",(0,o.kt)("inlineCode",{parentName:"em"},"any"),", a ",(0,o.kt)("inlineCode",{parentName:"em"},"self")," parameter will be added for its containing function.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n  "tstl": {\n    "noImplicitSelf": true\n  }\n}\n')),(0,o.kt)(r.q,{mdxType:"SideBySide"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function f() {}\nfunction f2(this: any) {}\nconst a = () => {};\nclass C {\n  method() {}\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function f() end\nfunction f2(self) end\nlocal a = function() end\n\nlocal C = __TS__Class()\nfunction C:method(self) end -- still has self\n"))),(0,o.kt)("h2",{id:"assignment-errors"},"Assignment Errors"),(0,o.kt)("p",null,"See the two types below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type NoContext = (this: void) => void;\ntype UseContext = () => void;\n")),(0,o.kt)("p",null,"TypeScript sees ",(0,o.kt)("inlineCode",{parentName:"p"},"NoContext")," to be assignable to ",(0,o.kt)("inlineCode",{parentName:"p"},"UseContext"),"."),(0,o.kt)("p",null,"TypeScriptToLua does not."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"declare function useCallback(cb: (this: void, arg: string) => void);\n// cb's type: (this: void, arg: string) => void\n\nfunction callback(arg: string) {}\n// callback's type: (arg: string) => void (implicit any)\n\nuseCallback(callback);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u274c ",(0,o.kt)("strong",{parentName:"p"},"Error:")," Unable to convert function with a 'this' parameter to function with no 'this'. To fix, wrap in an arrow function, or declare with 'this: void'.")),(0,o.kt)("p",null,"This throws an error because ",(0,o.kt)("inlineCode",{parentName:"p"},"callback's type")," is not assignable to ",(0,o.kt)("inlineCode",{parentName:"p"},"cb's type")," since the latter has an implicit any type which changes how the function should be called."),(0,o.kt)("p",null,"To fix this, an arrow function can be used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)(r.q,{mdxType:"SideBySide"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"useCallback((arg) => callback(arg));\n// argument type: (this: void, arg: string) => void\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"useCallback(function(arg)\n  return callback(nil, arg)\nend)\n"))),(0,o.kt)("p",null,"TypeScript says the arrow function has no context due to the parameter's signature making TypeScriptToLua accept the parameter."),(0,o.kt)("h3",{id:"overloads"},"Overloads"),(0,o.kt)("p",null,"A similar error occurs if a function is overloaded and the call signature differs between how to use context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"declare function useCallback(f: () => {}): void;\n\ndeclare function callback(this: void, s: string, n: number): void;\ndeclare function callback(s: string);\n\nuseCallback(callback);\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u274c ",(0,o.kt)("strong",{parentName:"p"},"Error:")," Unsupported assignment of function with different overloaded types for 'this'. Overloads should all have the same type for 'this'.")),(0,o.kt)("p",null,"It's best practice to avoid overloads with different context types."))}p.isMDXComponent=!0}}]);