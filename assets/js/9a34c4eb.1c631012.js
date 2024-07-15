"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1652],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>w,useMDXComponents:()=>c,withMDXComponents:()=>p});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=a.createContext({}),p=function(e){return function(t){var r=c(t.components);return a.createElement(e,n({},t,{components:r}))}},c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,m=p["".concat(i,".").concat(u)]||p[u]||f[u]||n;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},88749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(58168),o=(r(96540),r(15680));const n={sidebar_position:10,title:"Aria Dataset Explorer"},i="Aria Dataset Explorer",l={unversionedId:"open_datasets/dataset_explorer/dataset_explorer",id:"open_datasets/dataset_explorer/dataset_explorer",title:"Aria Dataset Explorer",description:"Overview",source:"@site/docs/open_datasets/dataset_explorer/dataset_explorer.mdx",sourceDirName:"open_datasets/dataset_explorer",slug:"/open_datasets/dataset_explorer/",permalink:"/projectaria_tools/docs/open_datasets/dataset_explorer/",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/dataset_explorer/dataset_explorer.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Aria Dataset Explorer"},sidebar:"tutorialSidebar",previous:{title:"Open Datasets",permalink:"/projectaria_tools/docs/open_datasets/"},next:{title:"Dataset Explorer Filters",permalink:"/projectaria_tools/docs/open_datasets/dataset_explorer/dataset_explorer_filters"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Using Aria Dataset Explorer",id:"using-aria-dataset-explorer",level:2},{value:"Primary Explorer View",id:"primary-explorer-view",level:3},{value:"JSON file with download information",id:"json-file-with-download-information",level:4},{value:"Sequence View",id:"sequence-view",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.mdx)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"aria-dataset-explorer"},"Aria Dataset Explorer"),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://explorer.projectaria.com/"},"Aria Dataset Explorer")," is a centralized hub for Project Aria public datasets that helps users efficiently find, preview and download Aria data. For this initial launch the Explorer supports browsing and downloading the Aria Digital Twin (ADT) dataset and provides a preview of Nymeria."),(0,o.mdx)("p",null,"Through the Explorer, researchers can:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Better understand the contents of research datasets captured using Project Aria glasses"),(0,o.mdx)("li",{parentName:"ul"},"Preview the data using Project Aria Tools visualizations"),(0,o.mdx)("li",{parentName:"ul"},"Preview the raw and MPS data"),(0,o.mdx)("li",{parentName:"ul"},"Filter and download a subset of the data")),(0,o.mdx)("h2",{id:"using-aria-dataset-explorer"},"Using Aria Dataset Explorer"),(0,o.mdx)("h3",{id:"primary-explorer-view"},"Primary Explorer View"),(0,o.mdx)("p",null,"Select which dataset you\u2019d like to search from the dropdown next to the ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/dataset_explorer/dataset_explorer_filters"},"filter field"),"."),(0,o.mdx)("p",null,"To change what metadata is displayed, you can add metadata properties to the filter."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Screenshot of Data Explorer Properties",src:r(64629).A,width:"900",height:"1137"})),(0,o.mdx)("p",null,"If you select ",(0,o.mdx)("strong",{parentName:"p"},"Download found sequences")," you will download a JSON file that contains the download links for all the recordings. The first time you try to download data for a specific dataset, you\u2019ll need to provide your email address. That will give you a JSON file with download links that last for thirty days."),(0,o.mdx)("h4",{id:"json-file-with-download-information"},"JSON file with download information"),(0,o.mdx)("p",null,"The JSON file you download contains download urls for each sequence provided in the filter view. Each type of data in the sequence has its own download url. The downloader script uses the pip install version of Project Aria Tools."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download"},"How to download ADT data")),(0,o.mdx)("li",{parentName:"ul"},"Instructions for downloading the Nymeria dataset coming soon")),(0,o.mdx)("p",null,"The sha1sum value listed for each output is the SHA-1 hash string of the contents of the file. It can be used as a checksum to ensure the integrity of the downloaded data."),(0,o.mdx)("h3",{id:"sequence-view"},"Sequence View"),(0,o.mdx)("p",null,"Select any recording from the primary Explorer view to open a preview of that sequence."),(0,o.mdx)("p",null,"On the sequence view, you can preview visualizations available for that dataset using the buttons to the right of the visualization."),(0,o.mdx)("p",null,"The preview page also contains a list of all metadata stored with the sequence, and provides the ability to download specific components from that sequence (e.g. main_vrs, depth, segmentation etc)."))}u.isMDXComponent=!0},64629:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/dataset_explorer_properties-7fd970e0568c1d5a37c41fe1fbca3d08.png"}}]);