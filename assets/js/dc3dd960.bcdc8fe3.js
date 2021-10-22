"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[996],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4429:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var a=t(98),o=t(6862),i=(t(9496),t(9613)),r=["components"],l={title:"Execution and Publishinig",sidebar_label:"Execution and Publishing"},s=void 0,c={unversionedId:"executing/local",id:"executing/local",isDocsHomePage:!1,title:"Execution and Publishinig",description:"Before Running",source:"@site/docs/executing/local.md",sourceDirName:"executing",slug:"/executing/local",permalink:"/nest-commander/docs/executing/local",editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/executing/local.md",tags:[],version:"current",frontMatter:{title:"Execution and Publishinig",sidebar_label:"Execution and Publishing"},sidebar:"docs",previous:{title:"Usage",permalink:"/nest-commander/docs/schematics/usage"},next:{title:"API",permalink:"/nest-commander/docs/api"}},p=[{value:"Before Running",id:"before-running",children:[],level:2},{value:"Local Execution (Using Node)",id:"local-execution-using-node",children:[{value:"Local Execution (Without Node explicitly)",id:"local-execution-without-node-explicitly",children:[],level:3}],level:2},{value:"Nest CLI",id:"nest-cli",children:[],level:2},{value:"Ts-Node",id:"ts-node",children:[],level:2},{value:"Packaging the CLI",id:"packaging-the-cli",children:[],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"before-running"},"Before Running"),(0,i.kt)("p",null,"To execute the command locally, whether for testing, prototyping, or just every day use without a package install, you first need to build the application from the Typescript code to JavaScript so that the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," processor can handle the code properly. You can use any method of compilation you find preferable, Typescript's ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@nestjs/cli"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,i.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},(0,i.kt)("inlineCode",{parentName:"a"},"esbuild")),", ",(0,i.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},(0,i.kt)("inlineCode",{parentName:"a"},"swc")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack"),". Just make sure that the compiler understands and can handle decorators, and the output code is transpiled correctly."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You do not need to compile the code if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node"),", but make sure that decorators are still taken into account"))),(0,i.kt)("h2",{id:"local-execution-using-node"},"Local Execution (Using Node)"),(0,i.kt)("p",null,"Once the code is compiled, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," to kick of the command using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"node ./dist/main [args] [options]\n")),(0,i.kt)("p",null,"This does make use of the packages locally installed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", but other than that there's nothing fancy necessary."),(0,i.kt)("h3",{id:"local-execution-without-node-explicitly"},"Local Execution (Without Node explicitly)"),(0,i.kt)("p",null,"You can also add a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Shebang_(Unix)"},"shebang")," to the top of your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.ts")," and make the file executable by using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chmod"},"chmod"),", then just use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./dist/main [args] [options]\n")),(0,i.kt)("p",null,"but this generally is not necessary to do."),(0,i.kt)("h2",{id:"nest-cli"},"Nest CLI"),(0,i.kt)("p",null,"You can also use the Nest CLI to build and start the command. It is advised, however, to not do this unless you are only using a default command wth no options and no arguments, as the Nest CLI does not pass on extra flags to the underlying command being ran."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nest start --watch\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," is great for the auto restart during dev mode with no args, but it is not the advised way to run the command."),(0,i.kt)("h2",{id:"ts-node"},"Ts-Node"),(0,i.kt)("p",null,"If you don't feel like compiling the application every time you make a small change, or don't want to set up a file watcher to watch for you, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-node"))," to start up the command. Just like with the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," variants, you just need to pass the main path to the command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ts-node src/main.ts [args] [options]\n# OR is ts-node is not installed globally\nnpx|yarn|pnpm ts-node src/main.ts [args] [options]\n")),(0,i.kt)("h2",{id:"packaging-the-cli"},"Packaging the CLI"),(0,i.kt)("p",null,"The last option, and probably the most useful one, is using a package manager to distribute the CLI via an npm package. You can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and give your CLI a name along with a path to the main file and on installation npm will set up the path in the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," if a local install or the global ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable for a global package install. If we take the ",(0,i.kt)("inlineCode",{parentName:"p"},"crun")," application we've made so far, we can set up the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "crun",\n  "description": "A command line runner using nest-commander",\n  "bin": {\n    "crun": "dist/main"\n  },\n  "scripts": {\n    "build": "nest build"\n  },\n  "dependencies": {\n    "@nestjs/common": "^7.0.0",\n    "@nestjs/core": "^7.0.0",\n    "nest-commander": "^1.2.0"\n  },\n  "devDependencies": {\n    "@nestjs/cli": "^7.0.0",\n    "@nestjs/schematics": "^7.0.0",\n    "@nestjs/testing": "^7.0.0",\n    "jest": "^26.0.0",\n    "nest-commander-schematics": "^1.1.0",\n    "nest-commander-testing": "^1.1.0",\n    "typescript": "^4.3.0"\n  }\n}\n')),(0,i.kt)("p",null,"Now if we were to publish this package and someone were to install it, the ",(0,i.kt)("inlineCode",{parentName:"p"},"crun")," command would be available either globally via a global install, so ",(0,i.kt)("inlineCode",{parentName:"p"},"crun")," could be used on the command line directly, or locally via a local install, so ",(0,i.kt)("inlineCode",{parentName:"p"},"crun")," could be used in a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," script or using ",(0,i.kt)("inlineCode",{parentName:"p"},"npx/yarn/pnpm"),"."))}u.isMDXComponent=!0}}]);