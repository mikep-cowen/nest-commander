"use strict";(self.webpackChunknest_commander_monorepo=self.webpackChunknest_commander_monorepo||[]).push([[425],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},577:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>m,default:()=>d});var a=n(98),o=n(6862),r=(n(9496),n(9613)),i=["components"],s={title:"Usage",sidebar_label:"Usage"},l=void 0,c={unversionedId:"schematics/usage",id:"schematics/usage",isDocsHomePage:!1,title:"Usage",description:"We'll show how to use the nest-commander-schematics with the @nestjs/cli, but it works with @angular/cli and nx as well, as all of them use Angular's schematics under the hood.",source:"@site/docs/schematics/usage.md",sourceDirName:"schematics",slug:"/schematics/usage",permalink:"/nest-commander/docs/schematics/usage",editUrl:"https://github.com/jmcdo29/nest-commander/edit/main/apps/docs/docs/schematics/usage.md",tags:[],version:"current",frontMatter:{title:"Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Installation",permalink:"/nest-commander/docs/schematics/installation"},next:{title:"Execution and Publishing",permalink:"/nest-commander/docs/executing/local"}},m=[{value:"Generating Commands",id:"generating-commands",children:[{value:"Generating Commands with Questions",id:"generating-commands-with-questions",children:[],level:3}],level:2},{value:"Generating Questions",id:"generating-questions",children:[],level:2}],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We'll show how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"nest-commander-schematics")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs/cli"),", but it works with ",(0,r.kt)("inlineCode",{parentName:"p"},"@angular/cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nx")," as well, as all of them use Angular's schematics under the hood."))),(0,r.kt)("h2",{id:"generating-commands"},"Generating Commands"),(0,r.kt)("p",null,"To generate a simple command you can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nest g -c nest-commander-schematics command\n")),(0,r.kt)("p",null,", from there the wizard will ask what the name of the command is and if you would like to add questions. You can choose no or provide a question set name at this point. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"--default=true")," to automatically set the ",(0,r.kt)("inlineCode",{parentName:"p"},"isDefault")," option. ",(0,r.kt)("inlineCode",{parentName:"p"},"spec"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceRoot")," are also available options."),(0,r.kt)("h3",{id:"generating-commands-with-questions"},"Generating Commands with Questions"),(0,r.kt)("p",null,"As mentioned above, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," schematic and provide a question set name. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"--question=<name>")," to provide a name for the question set without waiting to answer the prompt."),(0,r.kt)("h2",{id:"generating-questions"},"Generating Questions"),(0,r.kt)("p",null,"You can also generate a question set using the schematic"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nest g -c nest-commander-schematics question\n")),(0,r.kt)("p",null,"from there you can provide a name for the question set as mentioned by the wizard. ",(0,r.kt)("inlineCode",{parentName:"p"},"spec"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flat"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceRoot")," are also usable options."))}d.isMDXComponent=!0}}]);