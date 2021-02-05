(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(129)),s={title:"Python SDK Development"},o={unversionedId:"userDocs/submarine-sdk/pysubmarine/development",id:"userDocs/submarine-sdk/pysubmarine/development",isDocsHomePage:!1,title:"Python SDK Development",description:"\x3c!---",source:"@site/docs/userDocs/submarine-sdk/pysubmarine/development.md",slug:"/userDocs/submarine-sdk/pysubmarine/development",permalink:"/docs/userDocs/submarine-sdk/pysubmarine/development",editUrl:"https://github.com/apache/submarine/edit/master/docs/docs/userDocs/submarine-sdk/pysubmarine/development.md",version:"current",sidebar:"docs",previous:{title:"Docker Images for TensorFlow",permalink:"/docs/userDocs/yarn/WriteDockerfileTF"},next:{title:"PySubmarine Tracking",permalink:"/docs/userDocs/submarine-sdk/pysubmarine/tracking"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"PySubmarine Docker",id:"pysubmarine-docker",children:[]},{value:"Coding Style",id:"coding-style",children:[]},{value:"Unit Testing",id:"unit-testing",children:[]},{value:"Generate python SDK from swagger",id:"generate-python-sdk-from-swagger",children:[]},{value:"Upload package to PyPi",id:"upload-package-to-pypi",children:[]}],b={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page provides general Python development guidelines and source build instructions"),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"This is required for developing & testing changes, we recommend installing pysubmarine\nin its own conda environment by running the following"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"conda create --name submarine-dev python=3.6\nconda activate submarine-dev\n\n# lint-requirements.txt and test-requirements.txt are in ./submarine-sdk/pysubmarine/github-actions\npip install -r lint-requirements.txt\npip install -r test-requirements.txt\n\n# Installs pysubmarine from current checkout\npip install ./submarine-sdk/pysubmarine\n")),Object(i.b)("h3",{id:"pysubmarine-docker"},"PySubmarine Docker"),Object(i.b)("p",null,"We also use docker to provide build environments for CI, development,\ngenerate python sdk from swagger."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./run-pysubmarine-ci.sh\n")),Object(i.b)("p",null,"The script does the following things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start an interactive bash session"),Object(i.b)("li",{parentName:"ul"},"Mount submarine directory to /workspace and set it as home"),Object(i.b)("li",{parentName:"ul"},"Switch user to be the same user that calls the ",Object(i.b)("inlineCode",{parentName:"li"},"run-pysubmarine-ci.sh"))),Object(i.b)("h3",{id:"coding-style"},"Coding Style"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/google/yapf"}),"yapf")," to format Python code"),Object(i.b)("li",{parentName:"ul"},"yapf style is configured in ",Object(i.b)("inlineCode",{parentName:"li"},".style.yapf")," file"),Object(i.b)("li",{parentName:"ul"},"To autoformat code")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./submarine-sdk/pysubmarine/github-actions/auto-format.sh\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Verify linter pass before submitting a pull request by running:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"./submarine-sdk/pysubmarine/github-actions/lint.sh\n")),Object(i.b)("h3",{id:"unit-testing"},"Unit Testing"),Object(i.b)("p",null,"We are using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.pytest.org/en/latest/"}),"pytest")," to develop our unit test suite.\nAfter building the project (see below) you can run its unit tests like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd submarine-sdk/pysubmarine\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run unit test")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'pytest --cov=submarine -vs -m "not e2e"\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run integration test")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'pytest --cov=submarine -vs -m "e2e"\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Before run this command in local, you should make sure the submarine server is running. ")),Object(i.b)("h3",{id:"generate-python-sdk-from-swagger"},"Generate python SDK from swagger"),Object(i.b)("p",null,"We use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/installation/#jar"}),"open-api generator"),"\nto generate pysubmarine client API that used to communicate with submarine server."),Object(i.b)("p",null,"If change below files, please run ",Object(i.b)("inlineCode",{parentName:"p"},"./dev-support/pysubmarine/gen-sdk.sh"),"\nto generate latest version of SDK."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apache/submarine/blob/master/submarine-server/server-core/src/main/java/org/apache/submarine/server/Bootstrap.java"}),"Bootstrap.java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apache/submarine/blob/master/submarine-server/server-core/src/main/java/org/apache/submarine/server/rest/ExperimentRestApi.java"}),"ExperimentRestApi.java"))),Object(i.b)("h3",{id:"upload-package-to-pypi"},"Upload package to PyPi"),Object(i.b)("p",null,"For Apache Submarine committer and PMCs to do a new release."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Change the version from 0.x.x-SNAPSHOT to 0.x.x\nin ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/apache/submarine/blob/master/submarine-sdk/pysubmarine/setup.py"}),"setup.py")),Object(i.b)("li",{parentName:"ol"},"Install Python packages")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd submarine-sdk/pysubmarine\npip install -r github-actions/pypi-requirements.txt\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Compiling Your Package")),Object(i.b)("p",null,"It will create ",Object(i.b)("inlineCode",{parentName:"p"},"build"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dist"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"project.egg.info"),"\nin your local directory"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"python setup.py bdist_wheel\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Upload python package to TestPyPI for testing")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"python -m twine upload --repository testpypi dist/*\n")),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Upload python package to PyPi")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"python -m twine upload --repository-url https://upload.pypi.org/legacy/ dist/*\n")))}l.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},b),{},{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var b=2;b<i;b++)s[b]=n[b];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);