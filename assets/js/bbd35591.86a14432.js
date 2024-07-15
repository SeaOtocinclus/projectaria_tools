"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5908],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){return function(t){var n=m(t.components);return a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),c=o,u=p["".concat(i,".").concat(c)]||p[c]||h[c]||r;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=_;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},33256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(58168),o=(n(96540),n(15680));const r={sidebar_position:10,title:"Getting Started"},i="Getting Started With the Synthetic Environments Dataset",s={unversionedId:"open_datasets/aria_synthetic_environments_dataset/ase_getting_started",id:"open_datasets/aria_synthetic_environments_dataset/ase_getting_started",title:"Getting Started",description:"This section will cover everything you need to know to get up and running using Aria Synthetic Environments (ASE) visualizers and data loaders. ASE tooling contains:",source:"@site/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started.mdx",sourceDirName:"open_datasets/aria_synthetic_environments_dataset",slug:"/open_datasets/aria_synthetic_environments_dataset/ase_getting_started",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Aria Synthetic Environments Dataset",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/"},next:{title:"Dataset Download",permalink:"/projectaria_tools/docs/open_datasets/aria_synthetic_environments_dataset/ase_download_dataset"}},l={},d=[{value:"Quickstart Tutorial - Python",id:"quickstart-tutorial---python",level:2},{value:"Step 0 : Check system requirements and download codebase",id:"step-0--check-system-requirements-and-download-codebase",level:3},{value:"Step 1 : Install Python",id:"step-1--install-python",level:3},{value:"Step 2 : Create a virtual environment",id:"step-2--create-a-virtual-environment",level:3},{value:"Step 3 : Install projectaria_tools from PyPI",id:"step-3--install-projectaria_tools-from-pypi",level:3},{value:"Step 4 : Download sample data",id:"step-4--download-sample-data",level:3},{value:"Step 5 : Run the visualization notebooks",id:"step-5--run-the-visualization-notebooks",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.mdx)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"getting-started-with-the-synthetic-environments-dataset"},"Getting Started With the Synthetic Environments Dataset"),(0,o.mdx)("p",null,"This section will cover everything you need to know to get up and running using Aria Synthetic Environments (ASE) visualizers and data loaders. ASE tooling contains:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The install instructions specific to ASE"),(0,o.mdx)("li",{parentName:"ul"},"A quick tutorial which runs through a couple of Jupyter notebook for loading and visualizing sample data.")),(0,o.mdx)("admonition",{type:"tip"},(0,o.mdx)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.mdx)("a",{parentName:"mdxAdmonitionTitle",href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting#jupyter-notebook-error"},"Jupyter notebook error")),(0,o.mdx)("p",{parentName:"admonition"},"If you have problems using Jupyter examples, please ",(0,o.mdx)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"upgrade python3")," to the latest version.")),(0,o.mdx)("h2",{id:"quickstart-tutorial---python"},"Quickstart Tutorial - Python"),(0,o.mdx)("h3",{id:"step-0--check-system-requirements-and-download-codebase"},"Step 0 : Check system requirements and download codebase"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/download_codebase"},"Ensure your system is supported and then download projectaria_tools codebase from the github")),(0,o.mdx)("h3",{id:"step-1--install-python"},"Step 1 : Install Python"),(0,o.mdx)("p",null,"Ensure python3 is installed on the system (check with ",(0,o.mdx)("inlineCode",{parentName:"p"},"python3 --version)")),(0,o.mdx)("h3",{id:"step-2--create-a-virtual-environment"},"Step 2 : Create a virtual environment"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"rm -rf $HOME/projectaria_tools_python_env\n\npython3 -m venv $HOME/projectaria_tools_python_env\n\nsource $HOME/projectaria_tools_python_env/bin/activate\n")),(0,o.mdx)("h3",{id:"step-3--install-projectaria_tools-from-pypi"},"Step 3 : Install projectaria_tools from PyPI"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install --upgrade pip\n\npython3 -m pip install projectaria-tools'[all]'\n")),(0,o.mdx)("p",null,"The ASE Python tooling for projection of 3D points to RGB images is included in the projectaria_tools package, so no further steps are needed. The following packages used in this tutorial are standard Python packages that are also included in project_aria_tools build:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"plotly")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"numpy")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"scipy")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"pandas")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"matplotlib")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"requests")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"tqdm")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"jupyter"))),(0,o.mdx)("h3",{id:"step-4--download-sample-data"},"Step 4 : Download sample data"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Navigate to the ",(0,o.mdx)("a",{parentName:"li",href:"https://www.projectaria.com/datasets/ase/"},"ASE page")," on the Project Aria Website and follow the instructions to download the download-urls file. This same download-urls file can be used for any dataset download until the link expires"),(0,o.mdx)("li",{parentName:"ol"},"Setup ASE local folder and move download-urls file:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/Documents/projectaria_sandbox/projectaria_tools_ase_data\n\nmv $HOME/Downloads/aria_synthetic_environments_dataset_download_urls.json $HOME/Documents/projectaria_sandbox/projectaria_tools_ase_data/\n")),(0,o.mdx)("ol",{start:3},(0,o.mdx)("li",{parentName:"ol"},"Download sample dataset using the download tool:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/Documents/projectaria_sandbox/projectaria_tools\n\npython3 projects/AriaSyntheticEnvironment/aria_synthetic_environments_downloader.py --set train --scene-ids 0-10 --cdn-file $HOME/Documents/projectaria_sandbox/projectaria_tools_ase_data/aria_synthetic_environments_dataset_download_urls.json --output-dir $HOME/Documents/projectaria_sandbox/projectaria_tools_ase_data --unzip True\n")),(0,o.mdx)("h3",{id:"step-5--run-the-visualization-notebooks"},"Step 5 : Run the visualization notebooks"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"jupyter notebook projects/AriaSyntheticEnvironment/tutorial/ase_tutorial_notebook.ipynb\n")),(0,o.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.mdx)("p",null,"Go to ",(0,o.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting"},"Data Utilities Troubleshooting")," if you experience issues implementing this guide."))}c.isMDXComponent=!0}}]);