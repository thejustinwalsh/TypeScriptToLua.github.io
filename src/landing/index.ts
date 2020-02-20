import hljs from "highlight.js/lib/highlight";
import lua from "highlight.js/lib/languages/lua";
import typescript from "highlight.js/lib/languages/typescript";
import "highlight.js/styles/vs2015.css";
import "../../assets/styles/landing.scss";

hljs.registerLanguage("lua", lua);
hljs.registerLanguage("typescript", typescript);

document.querySelectorAll(".example-item").forEach(hljs.highlightBlock);
