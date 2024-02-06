"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3424],{95788:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>m});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){return function(t){var a=c(t.components);return n.createElement(e,i({},t,{components:a}))}},c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,p=m["".concat(o,".").concat(u)]||m[u]||h[u]||i;return a?n.createElement(p,s(s({ref:t},d),{},{components:a})):n.createElement(p,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},32708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(45072),r=(a(11504),a(95788));const i={sidebar_position:1,title:"Aria Synthetic Environments Dataset"},o=void 0,s={unversionedId:"open_datasets/aria_synthetic_environments_dataset/aria_synthetic_environments_dataset",id:"open_datasets/aria_synthetic_environments_dataset/aria_synthetic_environments_dataset",title:"Aria Synthetic Environments Dataset",description:"Overview",source:"@site/docs/open_datasets/aria_synthetic_environments_dataset/aria_synthetic_environments_dataset.mdx",sourceDirName:"open_datasets/aria_synthetic_environments_dataset",slug:"/open_datasets/aria_synthetic_environments_dataset/",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_synthetic_environments_dataset/aria_synthetic_environments_dataset.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Aria Synthetic Environments Dataset"},sidebar:"tutorialSidebar",previous:{title:"ADT Challenges",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/adt_challenges"},next:{title:"Getting Started",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"About the data",id:"about-the-data",level:2},{value:"<strong>Dataset Contents</strong>",id:"dataset-contents",level:2},{value:"<strong>Dataset Statistics</strong>",id:"dataset-statistics",level:2},{value:"Documentation",id:"documentation",level:3}],m={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.mdx)(c,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"Project Aria Tools provides Python and C++ APIs to access the Aria Synthetic Environments (ASE) dataset."),(0,r.mdx)("h2",{id:"about-the-data"},"About the data"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/datasets/ase/"},"Aria Synthetic Environments (ASE)")," is a large scale dataset of 100K unique procedurally-generated scenes of interior layouts of apartments filled with 3D objects, and simulated with the sensor characteristics of Aria glasses. For each scene we have the rendering of a person walking around the synthetically generated rooms of the layout. These rooms vary from living rooms, bedrooms & kitchens to bathrooms. In addition to the renders, each of these scenes come with semi-dense maps for the Aria walkthrough, which are aligned to the Ground Truth (GT) scene layout."),(0,r.mdx)("p",null,"This dataset was created to provide the wider research community with a dataset large enough to surface new challenges and research opportunities for first person object detection and tracking that had not been feasible."),(0,r.mdx)("p",null,"In the ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_challenges"},"ASE: Scene Reconstruction Challenge"),", we invite researchers to train full scene structured language description models, drawing from the 100K annotated scenes, and then test their models on 1K test scenes provided in the challenge."),(0,r.mdx)("h2",{id:"dataset-contents"},(0,r.mdx)("strong",{parentName:"h2"},"Dataset Contents")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"100,000 unique multi-room interior scenes"),(0,r.mdx)("li",{parentName:"ul"},"Simulated with realistic device trajectories"),(0,r.mdx)("li",{parentName:"ul"},"Across ~2-minute trajectories"),(0,r.mdx)("li",{parentName:"ul"},"Populated with ~8000 3D objects"),(0,r.mdx)("li",{parentName:"ul"},"With semi-dense map representations"),(0,r.mdx)("li",{parentName:"ul"},"Annotated using ASE Scene Language",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"User oriented natural language mapping with architectural features, such as doors, windows and pillars, described with a CAD-like language that includes the feature type, location and dimensions"),(0,r.mdx)("li",{parentName:"ul"},"Unlocks new exciting ways to tackle research challenges related to reconstruction and detection tasks")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Simulated sensor data per sequence")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"1 x outward-facing RGB camera stream"),(0,r.mdx)("li",{parentName:"ul"},"Simulated Aria camera & lens characteristics")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Ground Truth Annotations")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"6DoF camera trajectory"),(0,r.mdx)("li",{parentName:"ul"},"3D floor plan in Euston Structure Scene Language (SSL) format"),(0,r.mdx)("li",{parentName:"ul"},"2D instance segmentation",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"With per-scene mappings from the object instance image IDs to object classes"))),(0,r.mdx)("li",{parentName:"ul"},"2D depth map")),(0,r.mdx)("h2",{id:"dataset-statistics"},(0,r.mdx)("strong",{parentName:"h2"},"Dataset Statistics")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Number of scenes: 100K"),(0,r.mdx)("li",{parentName:"ul"},"Number of images: 58M+"),(0,r.mdx)("li",{parentName:"ul"},"Trajectories",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Total time: 67 days"),(0,r.mdx)("li",{parentName:"ul"},"Total distance: London -> San Francisco(7800 km)"))),(0,r.mdx)("li",{parentName:"ul"},"Rooms: Up to 5 complex Manhattan rooms",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"All surfaces in the world are aligned with three dominant directions, typically corresponding to the X, Y, and Z axes"))),(0,r.mdx)("li",{parentName:"ul"},"Dataset size: ~23TB")),(0,r.mdx)("h3",{id:"documentation"},"Documentation"),(0,r.mdx)("p",null,"The ASE section of this wiki covers:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started"},"Getting started"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"A quickstart tutorial for installing the necessary tooling, download the dataset and visualize the data"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset"},"Dataset download"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"A walkthrough using ",(0,r.mdx)("inlineCode",{parentName:"li"},"aria_synthetic_environments_downloader "),"to download the ASE dataset."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_format"},"Data Format"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Aria Synthetic Environments (ASE) data formats and organization"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_tools"},"Data Tools and Visualization"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Data helper tools"),(0,r.mdx)("li",{parentName:"ul"},"Visualization notebook"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_challenges"},"ASE Scene Reconstruction 2023-4 Challenge"))))}u.isMDXComponent=!0}}]);