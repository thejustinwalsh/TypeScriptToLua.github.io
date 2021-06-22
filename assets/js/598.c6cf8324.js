(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[598],{49598:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>K});var r=s(85350),i=s(86010),a=s(66582),n=s(67294),l=s(80126),o=s(81493),c=s(92327),p=s(52672);var d=s(26961),b=s.n(d);function u(){if(window.location.hash.startsWith("#src=")){const e=window.location.hash.replace("#src=","").trim();return decodeURIComponent(e)}if(window.location.hash.startsWith("#code/")){const e=window.location.hash.replace("#code/","").trim();return b().decompressFromEncodedURIComponent(e)||""}return"// Declare exposed API\ntype Vector = [number, number, number];\n\ndeclare function findUnitsInRadius(this: void, center: Vector, radius: number): Unit[];\ndeclare interface Unit {\n    isEnemy(other: Unit): boolean;\n    kill(): void;\n}\n\n\n// Use declared API in code\nfunction onAbilityCast(this: void, caster: Unit, targetLocation: Vector) {\n    const units = findUnitsInRadius(targetLocation, 500);\n    const enemies = units.filter(unit => caster.isEnemy(unit));\n\n    for (const enemy of enemies) {\n        enemy.kill();\n    }\n}\n"}function m(){return new Worker(s.p+"fengari.worker.js")}let O=new m;var y=s(17150),E=(s(90754),s(82665),s(88307),s(48828),s(37373));function g(){return new Worker(s.p+"ts.worker.js")}function _(){const{isDarkTheme:e}=(0,r.Z)();return e?"vs-dark":"vs"}function f(e,t){for(const s of e.keys())if(t){const r=s.replace("./",t+"/");y.languages.typescript.typescriptDefaults.addExtraLib(e(s).default,r)}else y.languages.typescript.typescriptDefaults.addExtraLib(e(s).default)}globalThis.MonacoEnvironment={getWorker:(e,t)=>"typescript"===t?new g:new E.Z},f(s(73662)),y.languages.typescript.typescriptDefaults.addExtraLib(s(95310).Z),f(s(92589));for(const z of[s(8600),s(54878),s(27081),s(18589)])y.languages.typescript.typescriptDefaults.addExtraLib(z.default);f(s(91112),"/language-extensions"),y.languages.typescript.typescriptDefaults.addExtraLib(s(60383).default,"/language-extensions/index.d.ts"),y.languages.typescript.typescriptDefaults.setCompilerOptions({...y.languages.typescript.typescriptDefaults.getCompilerOptions(),strict:!0});const v="navbar_3ZMk",L="navbarVersions_1O6J",T="navBarPanelSelection_v_hG",h="content__Yxd",w="contentPane_1KMA",R="outputEditor_2lY_",x="outputControls_1C_4",C="luaOutput_2Gy4",N="luaOutputLineNumbers_3bat",A="luaOutputTerminal_3Qlw",S="contentPaneHiddenMobile_1vUf",B={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#1e1e1e",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"},D=e=>({PADDING:"0.4rem 1.5rem 0.4rem 0px",LOG_ICON:"",LOG_BORDER:"#80808059",LOG_ICON_HEIGHT:"26px",LOG_ICON_WIDTH:"1em",LOG_COMMAND_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' viewBox='0 0 40 40'%3e%3cpath d='M16.6 10l10 10-10 10-2.3-2.3L22 20l-7.7-7.7z'/%3e%3c/svg%3e\")",LOG_RESULT_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' preserveAspectRatio='xMidYMid meet' viewBox='0 0 40 40'%3e%3cg%3e%3cpath d='m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\")",LOG_WARN_COLOR:"rgb(245, 211, 150)",LOG_WARN_BACKGROUND:"#332A00",LOG_WARN_BORDER:"#665500",LOG_WARN_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23F5D396' viewBox='0 0 40 40'%3e%3cpath d='M21.6 23.4v-6.8h-3.2v6.8h3.2zm0 6.6v-3.4h-3.2V30h3.2zm-20 5L20 3.4 38.4 35H1.6z'/%3e%3c/svg%3e\")",LOG_ERROR_COLOR:"rgb(254, 127, 127)",LOG_ERROR_BACKGROUND:"#280000",LOG_ERROR_BORDER:"#5B0000",LOG_ERROR_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23FE7F7F' viewBox='0 0 40 40'%3e%3cpath d='M21.6 21.6v-10h-3.2v10h3.2zm0 6.8V25h-3.2v3.4h3.2zM20 3.4a16.6 16.6 0 1 1 0 33.2 16.6 16.6 0 1 1 0-33.2z'/%3e%3c/svg%3e\")",BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"13px",BASE_LINE_HEIGHT:"18px",BASE_BACKGROUND_COLOR:"rgba(0, 0, 0, 0)",LOG_COLOR:e?"rgb(213, 213, 213)":"rgb(52, 52, 52)",OBJECT_NAME_COLOR:"#40A9F3",OBJECT_VALUE_NULL_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_REGEXP_COLOR:"#fac863",OBJECT_VALUE_STRING_COLOR:"#fac863",OBJECT_VALUE_SYMBOL_COLOR:"#fac863",OBJECT_VALUE_NUMBER_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_BOOLEAN_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_FUNCTION_KEYWORD_COLOR:"rgb(242, 85, 217)",HTML_TAG_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(155, 187, 220)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(242, 151, 102)",HTML_COMMENT_COLOR:"rgb(137, 137, 137)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"rgb(145, 145, 145)",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:11,TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"13px",TREENODE_LINE_HEIGHT:"16px",TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"rgb(85, 85, 85)",TABLE_TH_BACKGROUND_COLOR:"rgb(44, 44, 44)",TABLE_TH_HOVER_COLOR:"rgb(48, 48, 48)",TABLE_SORT_ICON_COLOR:"black",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"});var k;!function(e){e[e.Input=0]="Input",e[e.Output=1]="Output"}(k||(k={}));const M=n.createContext(null);function I({children:e}){const[t,s]=(0,n.useState)(k.Input);return n.createElement(M.Provider,{value:{activePanel:t,setActivePanel:s}},e)}const U=n.createContext(null);function G({children:e}){const[t,s]=(0,n.useState)({source:"",lua:"",ast:{},sourceMap:"",results:[]}),r=(0,n.useCallback)((async e=>{const t=await y.languages.typescript.getTypeScriptWorker(),r=await t(e.uri),{lua:i,ast:a,sourceMap:n}=await r.getTranspileOutput(e.uri.toString()),l=e.getValue();s({source:l,lua:i,ast:a,sourceMap:n,results:[]});const o=await async function(e){return new Promise((t=>{const s=setTimeout((()=>{t([{method:"log",data:["%cLua code execution timed out","font-style: italic"]}]),O.terminate(),O=new m}),2500);O.postMessage({code:e}),O.addEventListener("message",(e=>{clearTimeout(s),t(e.data.messages)}))}))}(i);s({source:l,lua:i,ast:a,sourceMap:n,results:o})}),[]);return n.createElement(U.Provider,{value:{updateModel:r,...t}},e)}const F={minimap:{enabled:!1},automaticLayout:!0,scrollbar:{useShadows:!1},fixedOverflowWidgets:!0};function P(){const e=_(),t=(0,n.useRef)(null),{updateModel:s}=(0,n.useContext)(U);(0,n.useEffect)((()=>{s(t.current.editor.getModel())}),[]);const r=(0,n.useCallback)(function(e,t){let s;return(...r)=>{clearTimeout(s),s=setTimeout((()=>e(...r)),t)}}((e=>{!function(e){const t=`code/${b().compressToEncodedURIComponent(e)}`;window.history.replaceState({},"",`#${t}`)}(e),s(t.current.editor.getModel())}),250),[]),{activePanel:a}=(0,n.useContext)(M);return n.createElement("div",{className:(0,i.Z)(w,a!=k.Input&&S)},n.createElement(o.ZP,{theme:e,language:"typescript",defaultValue:u(),options:F,onChange:r,ref:t}))}const H={0:"File",1:"Block",2:"DoStatement",3:"VariableDeclarationStatement",4:"AssignmentStatement",5:"IfStatement",6:"WhileStatement",7:"RepeatStatement",8:"ForStatement",9:"ForInStatement",10:"GotoStatement",11:"LabelStatement",12:"ReturnStatement",13:"BreakStatement",14:"ExpressionStatement",15:"StringLiteral",16:"NumericLiteral",17:"NilKeyword",18:"DotsKeyword",19:"TrueKeyword",20:"FalseKeyword",21:"FunctionExpression",22:"TableFieldExpression",23:"TableExpression",24:"UnaryExpression",25:"BinaryExpression",26:"CallExpression",27:"MethodCallExpression",28:"Identifier",29:"TableIndexExpression",30:"AdditionOperator",31:"SubtractionOperator",32:"MultiplicationOperator",33:"DivisionOperator",34:"FloorDivisionOperator",35:"ModuloOperator",36:"PowerOperator",37:"NegationOperator",38:"ConcatOperator",39:"LengthOperator",40:"EqualityOperator",41:"InequalityOperator",42:"LessThanOperator",43:"LessEqualOperator",44:"GreaterThanOperator",45:"GreaterEqualOperator",46:"AndOperator",47:"OrOperator",48:"NotOperator",49:"BitwiseAndOperator",50:"BitwiseOrOperator",51:"BitwiseExclusiveOrOperator",52:"BitwiseRightShiftOperator",53:"BitwiseLeftShiftOperator",54:"BitwiseNotOperator",File:0,Block:1,DoStatement:2,VariableDeclarationStatement:3,AssignmentStatement:4,IfStatement:5,WhileStatement:6,RepeatStatement:7,ForStatement:8,ForInStatement:9,GotoStatement:10,LabelStatement:11,ReturnStatement:12,BreakStatement:13,ExpressionStatement:14,StringLiteral:15,NumericLiteral:16,NilKeyword:17,DotsKeyword:18,TrueKeyword:19,FalseKeyword:20,FunctionExpression:21,TableFieldExpression:22,TableExpression:23,UnaryExpression:24,BinaryExpression:25,CallExpression:26,MethodCallExpression:27,Identifier:28,TableIndexExpression:29,AdditionOperator:30,SubtractionOperator:31,MultiplicationOperator:32,DivisionOperator:33,FloorDivisionOperator:34,ModuloOperator:35,PowerOperator:36,NegationOperator:37,ConcatOperator:38,LengthOperator:39,EqualityOperator:40,InequalityOperator:41,LessThanOperator:42,LessEqualOperator:43,GreaterThanOperator:44,GreaterEqualOperator:45,AndOperator:46,OrOperator:47,NotOperator:48,BitwiseAndOperator:49,BitwiseOrOperator:50,BitwiseExclusiveOrOperator:51,BitwiseRightShiftOperator:52,BitwiseLeftShiftOperator:53,BitwiseNotOperator:54};function q({ast:e}){const{isDarkTheme:t}=(0,r.Z)();return n.createElement(l.ZP,{data:e,hideRoot:!0,theme:B,invertTheme:!t,valueRenderer:(e,t,s)=>"kind"===s?n.createElement("em",null,H[t]):n.createElement("em",null,e)})}function V(){const{isDarkTheme:e}=(0,r.Z)(),{results:t}=(0,n.useContext)(U);return n.createElement("div",{className:C},n.createElement("div",{className:N},">_"),n.createElement("div",{className:A},n.createElement(a.Console,{key:e,logs:t,variant:e?"dark":"light",styles:D(e)})))}function Z(){const e=_(),{source:t,lua:s,sourceMap:r,ast:a}=(0,n.useContext)(U),[l,c]=(0,n.useState)(!1),p=(0,n.useCallback)((()=>c((e=>!e))),[]),d=(0,n.useMemo)((()=>`https://sokra.github.io/source-map-visualization#base64,${[s,r,t].map((e=>btoa(e.replace(/[^\x00-\x7F]/g,"?")))).join(",")}`),[s,r,t]),{activePanel:b}=(0,n.useContext)(M);return n.createElement("div",{className:(0,i.Z)(w,b!=k.Output&&S)},n.createElement("div",{className:R},n.createElement("div",{style:{height:"100%",display:l?"none":"block"}},n.createElement(o.ZP,{theme:e,language:"lua",value:s,options:{...F,scrollBeyondLastLine:!1,scrollBeyondLastColumn:15,readOnly:!0}})),n.createElement("div",{style:{height:"100%",overflow:"auto",display:l?"block":"none"}},n.createElement(q,{ast:a})),n.createElement("div",{className:x},n.createElement("button",{className:(0,i.Z)("button button--outline button--primary",!l&&"button--active"),onClick:p},l?"Text":"Lua AST"),n.createElement("a",{className:"button button--success",href:d,target:"_blank"},"Source Map"))),n.createElement(V,null))}function W(){var e,t;const s=`https://www.typescriptlang.org/docs/handbook/release-notes/typescript-${null==(e=p.i8)?void 0:e.split(".")[0]}-${null==(t=p.i8)?void 0:t.split(".")[1]}.html`,{activePanel:r,setActivePanel:a}=(0,n.useContext)(M);return n.createElement("nav",{className:v},n.createElement("div",{className:L},"TSTL"," ",n.createElement("a",{href:"https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener"},n.createElement("b",null,"v",c.i8)),n.createElement("br",null),"\xa0\xa0TS"," ",n.createElement("a",{href:s,target:"_blank",rel:"noopener"},n.createElement("b",null,"v",p.i8))),n.createElement("div",{className:T},n.createElement("button",{className:(0,i.Z)("button button--primary button--outline",0==r&&"button--active"),onClick:()=>a(k.Input)},"TS Input"),n.createElement("button",{className:(0,i.Z)("button button--primary button--outline",1==r&&"button--active"),onClick:()=>a(k.Output)},"Lua Output")))}function K(){return n.createElement(n.Fragment,null,n.createElement(I,null,n.createElement(W,null),n.createElement("div",{className:h},n.createElement(G,null,n.createElement(P,null),n.createElement(Z,null)))))}},92589:(e,t,s)=>{var r={"./coroutine.d.ts":59063,"./debug.d.ts":85937,"./global.d.ts":75705,"./index.d.ts":68519,"./io.d.ts":27514,"./math.d.ts":99691,"./metatable.d.ts":98773,"./modules.d.ts":52725,"./os.d.ts":85151,"./string.d.ts":54806,"./table.d.ts":42776,"lua-types/core/coroutine.d.ts":59063,"lua-types/core/debug.d.ts":85937,"lua-types/core/global.d.ts":75705,"lua-types/core/index.d.ts":68519,"lua-types/core/io.d.ts":27514,"lua-types/core/math.d.ts":99691,"lua-types/core/metatable.d.ts":98773,"lua-types/core/modules.d.ts":52725,"lua-types/core/os.d.ts":85151,"lua-types/core/string.d.ts":54806,"lua-types/core/table.d.ts":42776};function i(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=92589},95310:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const r="declare var console: Console;\ninterface Console {\n    assert(condition?: boolean, ...data: any[]): void;\n    clear(): void;\n    count(label?: string): void;\n    // countReset(label?: string): void;\n    debug(...data: any[]): void;\n    // dir(item?: any, options?: any): void;\n    // dirxml(...data: any[]): void;\n    error(...data: any[]): void;\n    // exception(message?: string, ...optionalParams: any[]): void;\n    // group(...data: any[]): void;\n    // groupCollapsed(...data: any[]): void;\n    // groupEnd(): void;\n    info(...data: any[]): void;\n    log(...data: any[]): void;\n    table(tabularData?: any, properties?: string[]): void;\n    time(label?: string): void;\n    timeEnd(label?: string): void;\n    // timeLog(label?: string, ...data: any[]): void;\n    // timeStamp(label?: string): void;\n    // trace(...data: any[]): void;\n    warn(...data: any[]): void;\n}\n"},91112:(e,t,s)=>{var r={"./index.d.ts":60383,"typescript-to-lua/language-extensions/index.d.ts":60383};function i(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=91112},73662:(e,t,s)=>{var r={"./lib.d.ts":73578,"./lib.es2015.collection.d.ts":72614,"./lib.es2015.core.d.ts":70322,"./lib.es2015.d.ts":21741,"./lib.es2015.generator.d.ts":91997,"./lib.es2015.iterable.d.ts":14461,"./lib.es2015.promise.d.ts":95278,"./lib.es2015.proxy.d.ts":48667,"./lib.es2015.reflect.d.ts":87411,"./lib.es2015.symbol.d.ts":98836,"./lib.es2015.symbol.wellknown.d.ts":46401,"./lib.es2016.array.include.d.ts":23304,"./lib.es2016.d.ts":45533,"./lib.es2016.full.d.ts":86946,"./lib.es2017.d.ts":97175,"./lib.es2017.full.d.ts":36251,"./lib.es2017.intl.d.ts":92133,"./lib.es2017.object.d.ts":93197,"./lib.es2017.sharedmemory.d.ts":59266,"./lib.es2017.string.d.ts":81492,"./lib.es2017.typedarrays.d.ts":36838,"./lib.es2018.asyncgenerator.d.ts":59921,"./lib.es2018.asynciterable.d.ts":38918,"./lib.es2018.d.ts":66522,"./lib.es2018.full.d.ts":26430,"./lib.es2018.intl.d.ts":63160,"./lib.es2018.promise.d.ts":80838,"./lib.es2018.regexp.d.ts":49741,"./lib.es2019.array.d.ts":46007,"./lib.es2019.d.ts":37341,"./lib.es2019.full.d.ts":59141,"./lib.es2019.object.d.ts":15863,"./lib.es2019.string.d.ts":67346,"./lib.es2019.symbol.d.ts":66504,"./lib.es2020.bigint.d.ts":49519,"./lib.es2020.d.ts":13274,"./lib.es2020.full.d.ts":60457,"./lib.es2020.intl.d.ts":20882,"./lib.es2020.promise.d.ts":18785,"./lib.es2020.sharedmemory.d.ts":24216,"./lib.es2020.string.d.ts":76555,"./lib.es2020.symbol.wellknown.d.ts":28473,"./lib.es2021.d.ts":97303,"./lib.es2021.full.d.ts":85450,"./lib.es2021.promise.d.ts":73124,"./lib.es2021.string.d.ts":82511,"./lib.es2021.weakref.d.ts":13330,"./lib.es5.d.ts":58689,"./lib.es6.d.ts":35872,"./lib.esnext.d.ts":24570,"./lib.esnext.full.d.ts":39767,"./lib.esnext.intl.d.ts":42585,"./lib.esnext.promise.d.ts":72052,"./lib.esnext.string.d.ts":11629,"./lib.esnext.weakref.d.ts":49016,"typescript/lib/lib.d.ts":73578,"typescript/lib/lib.es2015.collection.d.ts":72614,"typescript/lib/lib.es2015.core.d.ts":70322,"typescript/lib/lib.es2015.d.ts":21741,"typescript/lib/lib.es2015.generator.d.ts":91997,"typescript/lib/lib.es2015.iterable.d.ts":14461,"typescript/lib/lib.es2015.promise.d.ts":95278,"typescript/lib/lib.es2015.proxy.d.ts":48667,"typescript/lib/lib.es2015.reflect.d.ts":87411,"typescript/lib/lib.es2015.symbol.d.ts":98836,"typescript/lib/lib.es2015.symbol.wellknown.d.ts":46401,"typescript/lib/lib.es2016.array.include.d.ts":23304,"typescript/lib/lib.es2016.d.ts":45533,"typescript/lib/lib.es2016.full.d.ts":86946,"typescript/lib/lib.es2017.d.ts":97175,"typescript/lib/lib.es2017.full.d.ts":36251,"typescript/lib/lib.es2017.intl.d.ts":92133,"typescript/lib/lib.es2017.object.d.ts":93197,"typescript/lib/lib.es2017.sharedmemory.d.ts":59266,"typescript/lib/lib.es2017.string.d.ts":81492,"typescript/lib/lib.es2017.typedarrays.d.ts":36838,"typescript/lib/lib.es2018.asyncgenerator.d.ts":59921,"typescript/lib/lib.es2018.asynciterable.d.ts":38918,"typescript/lib/lib.es2018.d.ts":66522,"typescript/lib/lib.es2018.full.d.ts":26430,"typescript/lib/lib.es2018.intl.d.ts":63160,"typescript/lib/lib.es2018.promise.d.ts":80838,"typescript/lib/lib.es2018.regexp.d.ts":49741,"typescript/lib/lib.es2019.array.d.ts":46007,"typescript/lib/lib.es2019.d.ts":37341,"typescript/lib/lib.es2019.full.d.ts":59141,"typescript/lib/lib.es2019.object.d.ts":15863,"typescript/lib/lib.es2019.string.d.ts":67346,"typescript/lib/lib.es2019.symbol.d.ts":66504,"typescript/lib/lib.es2020.bigint.d.ts":49519,"typescript/lib/lib.es2020.d.ts":13274,"typescript/lib/lib.es2020.full.d.ts":60457,"typescript/lib/lib.es2020.intl.d.ts":20882,"typescript/lib/lib.es2020.promise.d.ts":18785,"typescript/lib/lib.es2020.sharedmemory.d.ts":24216,"typescript/lib/lib.es2020.string.d.ts":76555,"typescript/lib/lib.es2020.symbol.wellknown.d.ts":28473,"typescript/lib/lib.es2021.d.ts":97303,"typescript/lib/lib.es2021.full.d.ts":85450,"typescript/lib/lib.es2021.promise.d.ts":73124,"typescript/lib/lib.es2021.string.d.ts":82511,"typescript/lib/lib.es2021.weakref.d.ts":13330,"typescript/lib/lib.es5.d.ts":58689,"typescript/lib/lib.es6.d.ts":35872,"typescript/lib/lib.esnext.d.ts":24570,"typescript/lib/lib.esnext.full.d.ts":39767,"typescript/lib/lib.esnext.intl.d.ts":42585,"typescript/lib/lib.esnext.promise.d.ts":72052,"typescript/lib/lib.esnext.string.d.ts":11629,"typescript/lib/lib.esnext.weakref.d.ts":49016};function i(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=73662}}]);