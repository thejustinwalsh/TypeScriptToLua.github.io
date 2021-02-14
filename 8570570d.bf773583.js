(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{185:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(276),i=n.n(o);function l({children:e}){const t=r.a.Children.count(e);if(2!==t)throw new Error(`Invalid SideBySide children count: ${t}`);const[n,a]=r.a.Children.toArray(e);return r.a.createElement("div",{className:i.a.sideBySide},n,a)}},276:function(e,t,n){e.exports={sideBySide:"sideBySide_2tt-"}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=(n(0),n(185)),o=n(275);const i={title:"Language extensions"},l={unversionedId:"advanced/language-extensions",id:"advanced/language-extensions",isDocsHomePage:!1,title:"Language extensions",description:"TypeScriptToLua provides several extensions to the TypeScript language in the form of types and helper functions. To use these language extensions, add the types to your tsconfig.json:",source:"@site/docs/advanced/language-extensions.md",slug:"/advanced/language-extensions",permalink:"/docs/advanced/language-extensions",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/advanced/language-extensions.md",version:"current",sidebar:"docs",previous:{title:"Compiler Annotations",permalink:"/docs/advanced/compiler-annotations"},next:{title:"Overview",permalink:"/docs/api/overview"}},c=[{value:"LuaMultiReturn Type",id:"luamultireturn-type",children:[{value:"$multi",id:"multi",children:[]}]},{value:"$range Iterator Function",id:"range-iterator-function",children:[]},{value:"Operator Map Types",id:"operator-map-types",children:[{value:"Supported Operators:",id:"supported-operators",children:[]}]}],u={toc:c};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"TypeScriptToLua provides several extensions to the TypeScript language in the form of types and helper functions. To use these language extensions, add the types to your ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "compilerOptions": {\n        ...\n        "types": ["typescript-to-lua/language-extensions"],\n        ...\n    },\n}\n')),Object(r.b)("h2",{id:"luamultireturn-type"},"LuaMultiReturn Type"),Object(r.b)("p",null,"This language extension allows typing of Lua functions that return multiple values. For example, consider Lua's ",Object(r.b)("inlineCode",{parentName:"p"},"string.find"),", it returns two indices: the start of the found substring and the end of the found substring. In TypeScript, functions can only return one value so a special type is needed to indicate to tstl there are multiple return values. This is the ",Object(r.b)("inlineCode",{parentName:"p"},"LuaMultiReturn<>")," type."),Object(r.b)("p",null,"It allows us to declare ",Object(r.b)("inlineCode",{parentName:"p"},"string.find")," like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:"title=stringfind.ts",title:"stringfind.ts"}),'declare namespace string {\n  export function find(haystack: string, needle: string): LuaMultiReturn<[number, number]>;\n}\n\nconst [start, end] = string.find("Hello, world!", "world");\n')),Object(r.b)("p",null,"Translating into:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua",metastring:"title=stringfind.lua",title:"stringfind.lua"}),'start, ____end = string.find("Hello, world!", "world")\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Prefer LuaMultiReturn over the similar ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/compiler-annotations#tuplereturn"}),"@tupleReturn annotation"),". LuaMultiReturn can do anything tupleReturn can, with the added benefit of being able to distinguish between actual tuple tables and multiple return values in the type system."))),Object(r.b)("h3",{id:"multi"},"\\$multi"),Object(r.b)("p",null,"In order to create a function that returns multiple values it needs to return a ",Object(r.b)("inlineCode",{parentName:"p"},"LuaMultiReturn<>")," type. This is where the ",Object(r.b)("inlineCode",{parentName:"p"},"$multi")," function comes in. Calling ",Object(r.b)("inlineCode",{parentName:"p"},"$multi")," in a return statement will create an instance of the ",Object(r.b)("inlineCode",{parentName:"p"},"LuaMultiReturn<>")," type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:"title=multi.ts",title:"multi.ts"}),'function myFunc(): LuaMultiReturn<[string, number]> {\n  return $multi("foo", 4);\n}\n\nconst [foo, four] = myFunc();\n')),Object(r.b)("p",null,"Translates into:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua",metastring:"title=multi.lua",title:"multi.lua"}),'function myFunc(self)\n    return "foo", 4\nend\nfoo, four = myFunc(nil)\n')),Object(r.b)("h2",{id:"range-iterator-function"},"$range Iterator Function"),Object(r.b)("p",null,"Typescript's numeric for loops are less restrictive than Lua's, so they are transpiled into while loops instead. To create a Lua-style numeric for loop, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"$range")," language extension in a for...of loop."),Object(r.b)("p",null,"Example:"),Object(r.b)(o.a,{mdxType:"SideBySide"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"for (const i of $range(1, 5)) {}\nfor (const i of $range(1, 10, 2)) {}\nfor (const i of $range(5, 1, -1)) {}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"for i = 1, 5 do end\nfor i = 1, 10, 2 do end\nfor i = 5, 1, -1 do end\n"))),Object(r.b)("h2",{id:"operator-map-types"},"Operator Map Types"),Object(r.b)("p",null,"Lua supports overloading operators on types using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.lua.org/manual/5.4/manual.html#2.4"}),"metatable methods")," such as ",Object(r.b)("inlineCode",{parentName:"p"},"__add"),". But, Javascript and Typescript do not support this. In order to use overloaded operators on types that support them, you can declare special mapping functions in TS that will translate to those operators in Lua."),Object(r.b)("p",null,"A common example of an overloaded operator is addition of a mathematical vector type:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// Vector type supplied by a library, which supports math operators\ndeclare interface Vector {\n  x: number;\n  y: number;\n}\n\ndeclare const a: Vector;\ndeclare const b: Vector;\nconst result = a + b; // Not allowed in TS\n")),Object(r.b)("p",null,"To support addition for this type, you can declare a special function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"declare const addVector: LuaAddition<Vector, Vector, Vector>;\nconst result = addVector(a, b); // transpiles to 'result = a + b'\n")),Object(r.b)("p",null,"The mapping function does not have to be declared as global. For example, you could use declaration merging to declare it as a static function on ",Object(r.b)("inlineCode",{parentName:"p"},"Vector"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"declare namespace Vector {\n  export const add: LuaAddition<Vector, Vector, Vector>;\n}\n\nconst result = Vector.add(a, b); // result = a + b\n")),Object(r.b)("p",null,"There are also special variants for the mapping types that allow you do declare operator overloads as methods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"declare interface Vector {\n  add: LuaAdditionMethod<Vector, Vector>;\n}\nconst result = a.add(b); // result = a + b\n")),Object(r.b)("p",null,"Some operators may have a different return type based on their inputs. You can support this by using intersection types. For example, our ",Object(r.b)("inlineCode",{parentName:"p"},"Vector")," type might overload the multiplication operator to scale by a number, or perform a dot product on two ",Object(r.b)("inlineCode",{parentName:"p"},"Vectors"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"declare namespace Vector {\n  export const mul: LuaMultiplication<Vector, Vector, number> & LuaMultiplication<Vector, number, Vector>;\n}\n\nconst dot: number = Vector.mul(a, b);\nconst scaled: Vector = Vector.mul(a, 2);\n")),Object(r.b)("h3",{id:"supported-operators"},"Supported Operators:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Math operators",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"LuaAddition / LuaAdditionMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a + b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaSubtraction / LuaSubtractionMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a - b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaMultiplication / LuaMultiplicationMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a * b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaDivision / LuaDivisionMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a /b "),")"),Object(r.b)("li",{parentName:"ul"},"LuaModulo / LuaModuloMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a % b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaPower / LuaPowerMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a ^ b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaFloorDivision / LuaFloorDivisionMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a // b"),", only when targeting Lua 5.3 or later)"),Object(r.b)("li",{parentName:"ul"},"LuaNegation / LuaNegationMethod (",Object(r.b)("inlineCode",{parentName:"li"},"-x"),")"))),Object(r.b)("li",{parentName:"ul"},"Bitwise operators (only when targeting Lua 5.3 or later)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"LuaBitwiseAnd / LuaBitwiseAndMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a & b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaBitwiseOr / LuaBitwiseOrMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a | b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaBitwiseExclusiveOr / LuaBitwiseExclusiveOrMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a ^ b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaBitwiseLeftShift / LuaBitwiseLeftShiftMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a << b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaBitwiseRightShift / LuaBitwiseRightShiftMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a >> b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaBitwiseNot / LuaBitwiseNotMethod (",Object(r.b)("inlineCode",{parentName:"li"},"~x"),")"))),Object(r.b)("li",{parentName:"ul"},"LuaConcat / LuaConcatMethod (",Object(r.b)("inlineCode",{parentName:"li"},"a .. b"),")"),Object(r.b)("li",{parentName:"ul"},"LuaLength / LuaLengthMethod (",Object(r.b)("inlineCode",{parentName:"li"},"#x"),")")))}s.isMDXComponent=!0}}]);