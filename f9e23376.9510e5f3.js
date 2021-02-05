(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{125:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return o}));var r=t(3),n=t(7),b=(t(0),t(129)),i={title:"Download Apache Submarine"},c={unversionedId:"download",id:"download",isDocsHomePage:!1,title:"Download Apache Submarine",description:"\x3c!--",source:"@site/docs/download.md",slug:"/download",permalink:"/docs/download",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/download.md",version:"current"},s=[{value:"Verify the integrity of the files",id:"verify-the-integrity-of-the-files",children:[]},{value:"Old releases",id:"old-releases",children:[]}],p={toc:s};function o(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The latest release of Apache Submarine is ",Object(b.b)("inlineCode",{parentName:"p"},"0.5.0"),"."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Apache Submarine ",Object(b.b)("inlineCode",{parentName:"li"},"0.5.0")," released on Dec 17, 2020 (",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"http://submarine.apache.org/releases/submarine-release-0.5.0.html"}),"release notes"),") (",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apache/submarine/tree/rel/release-0.5.0"}),"git tag"),")",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Binary package:\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dyn/closer.cgi/submarine/submarine-0.5.0/submarine-dist-0.5.0-hadoop-2.9.tar.gz"}),"submarine-dist-0.5.0-hadoop-2.9.tar.gz")," (505 MB, ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.5.0/submarine-dist-0.5.0-hadoop-2.9.tar.gz.sha512"}),"checksum"),", ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.5.0/submarine-dist-0.5.0-hadoop-2.9.tar.gz.asc"}),"signature"),")"),Object(b.b)("li",{parentName:"ul"},"Source:\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dyn/closer.cgi/submarine/submarine-0.5.0/submarine-dist-0.5.0-src.tar.gz"}),"submarine-dist-0.5.0-src.tar.gz")," (5.0 MB, ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.5.0/submarine-dist-0.5.0-src.tar.gz.sha512"}),"checksum"),", ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.5.0/submarine-dist-0.5.0-src.tar.gz.asc"}),"signature"),"))"),Object(b.b)("li",{parentName:"ul"},"Docker images:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/layers/apache/submarine/mini-0.5.0/images/sha256-e3248c8c6336b245539028043783b91135eaffe9302dec05fe13571a0f2902a6"}),"mini-submarine")," ",Object(b.b)("inlineCode",{parentName:"li"},"docker pull apache/submarine:mini-0.5.0")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/layers/apache/submarine/server-0.5.0/images/sha256-1805df8fd8e5274d16be8cdf39900d8576119c0caac7598db29990ebe138bf5c"}),"submarine server")," ",Object(b.b)("inlineCode",{parentName:"li"},"docker pull apache/submarine:server-0.5.0")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/layers/apache/submarine/database-0.5.0/images/sha256-073889e773c1b44cef9f518dc2fc468ebc420200f6087e2a943438677dadc9e5"}),"submarine database")," ",Object(b.b)("inlineCode",{parentName:"li"},"docker pull apache/submarine:database-0.5.0")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://hub.docker.com/layers/apache/submarine/jupyter-notebook-0.5.0/images/sha256-f3cc2510c208b752ef4be7b383ee8f2325e4fc538696078bdb604d62fa47e4be"}),"submarine jupyter-notebook")," ",Object(b.b)("inlineCode",{parentName:"li"},"docker pull apache/submarine:jupyter-notebook-0.5.0")))),Object(b.b)("li",{parentName:"ul"},"SDK:",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://pypi.org/project/apache-submarine/0.5.0/"}),"PySubmarine")," ",Object(b.b)("inlineCode",{parentName:"li"},"pip install apache-submarine==0.5.0"))))))),Object(b.b)("h2",{id:"verify-the-integrity-of-the-files"},"Verify the integrity of the files"),Object(b.b)("p",null,"It is essential that you ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/info/verification.html"}),"verify")," the integrity of the downloaded files using the PGP or MD5 signatures. This signature should be matched against the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dist/submarine/KEYS"}),"KEYS")," file."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"gpg --import KEYS\ngpg --verify submarine-dist-X.Y.Z-src.tar.gz.asc\n")),Object(b.b)("h2",{id:"old-releases"},"Old releases"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Apache Submarine 0.4.0 released on Jul 05, 2020 (",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://submarine.apache.org/releases/submarine-release-0.4.0.html"}),"release notes"),") (",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/submarine/tree/rel/release-0.4.0"}),"git tag"),")"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Binary package with submarine:\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dyn/closer.cgi/submarine/submarine-0.4.0/submarine-dist-0.4.0-hadoop-2.9.tar.gz"}),"submarine-dist-0.4.0-hadoop-2.9.tar.gz")," (550 MB,\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.4.0/submarine-dist-0.4.0-hadoop-2.9.tar.gz.sha512"}),"checksum"),",\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.4.0/submarine-dist-0.4.0-hadoop-2.9.tar.gz.asc"}),"signature"),")"),Object(b.b)("li",{parentName:"ul"},"Source:\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dyn/closer.cgi/submarine/submarine-0.4.0/submarine-dist-0.4.0-src.tar.gz"}),"submarine-dist-0.4.0-src.tar.gz")," (6 MB,\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.4.0/submarine-dist-0.4.0-src.tar.gz.sha512"}),"checksum"),",\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.4.0/submarine-dist-0.4.0-src.tar.gz.asc"}),"signature"),")"),Object(b.b)("li",{parentName:"ul"},"Docker images:\n",Object(b.b)("em",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://hub.docker.com/layers/apache/submarine/mini-0.4.0/images/sha256-a8e7bd98f1f0325223d68e0ba64fd48bd56ee91736461d289945e70ad138e08f"}),"mini-submarine"))," ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apache/submarine/blob/rel/release-0.4.0/dev-support/mini-submarine/README.md#mini-submarine"}),"(guide)")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Apache Submarine 0.3.0 released on Feb 01, 2020 (",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://submarine.apache.org/releases/submarine-release-0.3.0.html"}),"release notes"),") (",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/apache/submarine/tree/rel/release-0.3.0"}),"git tag"),")"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Binary package with submarine:\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dyn/closer.cgi/submarine/submarine-0.3.0/submarine-dist-0.3.0-hadoop-2.9.tar.gz"}),"submarine-dist-0.3.0-hadoop-2.9.tar.gz")," (550 MB,\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-dist-0.3.0-hadoop-2.9.tar.gz.sha512"}),"checksum"),",\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-dist-0.3.0-hadoop-2.9.tar.gz.asc"}),"signature"),")"),Object(b.b)("li",{parentName:"ul"},"Source:\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dyn/closer.cgi/submarine/submarine-0.3.0/submarine-dist-0.3.0-src.tar.gz"}),"submarine-dist-0.3.0-src.tar.gz")," (6 MB,\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-dist-0.3.0-src.tar.gz.sha512"}),"checksum"),",\n",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.apache.org/dist/submarine/submarine-0.3.0/submarine-dist-0.3.0-src.tar.gz.asc"}),"signature"),")"),Object(b.b)("li",{parentName:"ul"},"Docker images:\n",Object(b.b)("em",{parentName:"li"},Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://hub.docker.com/layers/apache/submarine/mini-0.3.0/images/sha256-3dd49054bf8a91521f5743c675278d626a5fa568e91651c67867b8ba6ceba340"}),"mini-submarine"))," ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apache/submarine/blob/rel/release-0.3.0/dev-support/mini-submarine/README.md#mini-submarine"}),"(guide)")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Apache Submarine 0.2.0 released on Jul 2, 2019"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Binary package with submarine:\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dyn/closer.cgi/hadoop/submarine/submarine-0.2.0/hadoop-submarine-0.2.0.tar.gz"}),"hadoop-submarine-0.2.0.tar.gz")," (111 MB,\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://dist.apache.org/repos/dist/release/hadoop/submarine/submarine-0.2.0/hadoop-submarine-0.2.0.tar.gz.mds"}),"checksum"),",\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://dist.apache.org/repos/dist/release/hadoop/submarine/submarine-0.2.0/hadoop-submarine-0.2.0.tar.gz.asc"}),"signature"),",\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://hadoop.apache.org/submarine/release/0.2.0/"}),"Announcement"),")")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Source:\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dyn/closer.cgi/hadoop/submarine/submarine-0.2.0/hadoop-submarine-0.2.0-src.tar.gz"}),"hadoop-submarine-0.2.0-src.tar.gz")," (1.4 MB,\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://dist.apache.org/repos/dist/release/hadoop/submarine/submarine-0.2.0/hadoop-submarine-0.2.0-src.tar.gz.mds"}),"checksum"),",\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://dist.apache.org/repos/dist/release/hadoop/submarine/submarine-0.2.0/hadoop-submarine-0.2.0-src.tar.gz.asc"}),"signature"),")"))))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Apache Submarine 0.1.0 released on Jan 16, 2019"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Binary package with submarine:\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.2.0/hadoop-3.2.0.tar.gz"}),"submarine-0.2.0-bin-all.tgz")," (97 MB,\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dist/hadoop/common/hadoop-3.2.0/hadoop-3.2.0.tar.gz.mds"}),"checksum"),",\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dist/hadoop/common/hadoop-3.2.0/hadoop-3.2.0.tar.gz.asc"}),"signature"),",\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://hadoop.apache.org/docs/r3.2.0/index.html"}),"Announcement"),")")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Source:\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.2.0/hadoop-3.2.0-src.tar.gz"}),"submarine-hadoop-3.2.0-src.tar.gz")," (1.1 MB,\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dist/hadoop/common/hadoop-3.2.0/hadoop-3.2.0-src.tar.gz.mds"}),"checksum"),",\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apache.org/dist/hadoop/common/hadoop-3.2.0/hadoop-3.2.0-src.tar.gz.asc"}),"signature"),")"))))))}o.isMDXComponent=!0},129:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return l}));var r=t(0),n=t.n(r);function b(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){b(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)t=b[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)t=b[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),o=function(e){var a=n.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},m=function(e){var a=o(e.components);return n.a.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},h=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(t),h=r,l=m["".concat(i,".").concat(h)]||m[h]||u[h]||b;return t?n.a.createElement(l,c(c({ref:a},p),{},{components:t})):n.a.createElement(l,c({ref:a},p))}));function l(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var b=t.length,i=new Array(b);i[0]=h;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<b;p++)i[p]=t[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);