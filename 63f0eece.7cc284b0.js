(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),l=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||p[b]||a;return n?i.a.createElement(d,c(c({ref:t},m),{},{components:n})):i.a.createElement(d,c({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<a;m++)o[m]=n[m];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(129)),o={title:"Implementation Notes"},c={unversionedId:"designDocs/implementation-notes",id:"designDocs/implementation-notes",isDocsHomePage:!1,title:"Implementation Notes",description:"\x3c!--",source:"@site/docs/designDocs/implementation-notes.md",slug:"/designDocs/implementation-notes",permalink:"/docs/designDocs/implementation-notes",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/designDocs/implementation-notes.md",version:"current",sidebar:"docs",previous:{title:"Architecture and Requirment",permalink:"/docs/designDocs/architecture-and-requirements"},next:{title:"Environments Implementation",permalink:"/docs/designDocs/environments-implementation"}},s=[],m={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before digging into details of implementations, you should read ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./architecture-and-requirements"}),"architecture-and-requirements")," first to understand overall requirements and architecture."),Object(a.b)("p",null,"Here're sub topics of Submarine implementations:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./storage-implementation"}),"Submarine Storage"),": How to store metadata, logs, metrics, etc. of Submarine."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./environments-implementation"}),"Submarine Environment"),": How environments created, managed, stored in Submarine. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./experiment-implementation"}),"Submarine Experiment"),": How experiments managed, stored, and how the predefined experiment template works."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./notebook-implementation"}),"Submarine Notebook"),": How experiments managed, stored, and how the predefined experiment template works."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./submarine-server/architecture"}),"Submarine Server"),": How Submarine server is designed, architecture, implementation notes, etc.")),Object(a.b)("p",null,"Working-in-progress designs, Below are designs which are working-in-progress, we will move them to the upper section once design & review is finished: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./wip-designs/Submarine-clusterServer"}),"Submarine HA Design"),": How Submarine HA can be achieved, using RAFT, etc."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"./wip-designs/submarine-launcher"}),"Submarine services deployment module:")," How to deploy submarine services to k8s, YARN or cloud. ")))}l.isMDXComponent=!0}}]);