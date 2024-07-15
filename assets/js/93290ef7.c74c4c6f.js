"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6256],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>p,withMDXComponents:()=>c});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){return function(t){var a=p(t.components);return r.createElement(e,o({},t,{components:a}))}},p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,m=c["".concat(i,".").concat(d)]||c[d]||f[d]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},7227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(96540),n=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.default)(o.tabItem,i),hidden:a},t)}},49489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(58168),n=a(96540),o=a(20053),i=a(24245),l=a(56347),s=a(62814),u=a(45167),c=a(81269);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:a,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var b=a(11062);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.default)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=v(e);return n.createElement("div",{className:(0,o.default)("tabs-container",h.tabList)},n.createElement(_,(0,r.A)({},e,t)),n.createElement(g,(0,r.A)({},e,t)))}function x(e){const t=(0,b.default)();return n.createElement(y,(0,r.A)({key:String(t)},e))}},3804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=a(58168),n=(a(96540),a(15680)),o=a(49489),i=a(7227);const l={sidebar_position:30,title:"Export VRS to MP4 (Python)"},s="Export a VRS file to MP4",u={unversionedId:"data_utilities/advanced_code_snippets/vrs_to_mp4",id:"data_utilities/advanced_code_snippets/vrs_to_mp4",title:"Export VRS to MP4 (Python)",description:"The vrstomp4 script enables you to create an MP4 video from a Project Aria VRS recording.",source:"@site/docs/data_utilities/advanced_code_snippets/vrs_to_mp4.mdx",sourceDirName:"data_utilities/advanced_code_snippets",slug:"/data_utilities/advanced_code_snippets/vrs_to_mp4",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/vrs_to_mp4",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/advanced_code_snippets/vrs_to_mp4.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Export VRS to MP4 (Python)"},sidebar:"tutorialSidebar",previous:{title:"Image Utilities (Python and C++)",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/image_utilities"},next:{title:"Collaborative Tools",permalink:"/projectaria_tools/docs/collaborative_tools"}},c={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Usage",id:"usage",level:2},{value:"MISC",id:"misc",level:2},{value:"Extract VRS timestamps from MP4",id:"extract-vrs-timestamps-from-mp4",level:3},{value:"Calibration for upright RGB",id:"calibration-for-upright-rgb",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.mdx)(m,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"export-a-vrs-file-to-mp4"},"Export a VRS file to MP4"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"vrs_to_mp4")," script enables you to create an MP4 video from a Project Aria VRS recording.\nBy default, it uses RGB as well as audio streams (if present).\nThe MP4 video will have the same framerate as the RGB stream in the VRS file and use H264 and MP3 7 (or 2) channel encoding for video and audio.\nIf a dropped frame is present in the VRS recording (a frame could be missing at a given expected timestamp), the closest valid frame will be copied over until the next valid frame."),(0,n.mdx)("admonition",{title:"vrs_to_mp4 generates a recording preview",type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"This script provides video preview. It is not designed to create a video file suitable for Computer Vision applications.")),(0,n.mdx)("h2",{id:"install-dependencies"},"Install dependencies"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install projectaria_tools moviepy\n")),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("p",null,(0,n.mdx)("inlineCode",{parentName:"p"},"vrs_to_mp4")," tool is available via command line or through Python as a library."),(0,n.mdx)(o.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},"from projectaria_tools.utils.vrs_to_mp4_utils import convert_vrs_to_mp4\nconvert_vrs_to_mp4(input_vrs, output_video, log_folder, down_sample_factor)\n"))),(0,n.mdx)(i.default,{value:"bash",label:"Bash",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},'vrs_to_mp4 --vrs "projectaria_tools/data/mps_sample/sample.vrs" --output_video "sample.mp4"\n')))),(0,n.mdx)("h2",{id:"misc"},"MISC"),(0,n.mdx)("h3",{id:"extract-vrs-timestamps-from-mp4"},"Extract VRS timestamps from MP4"),(0,n.mdx)("p",null,"Historically, when VRS files were converted to MP4, accurate timestamp information was lost.\nTo maintain compatibility with the rest of our tooling, this tool now logs a VRS timestamp for each MP4 frame. VRS timestamps are saved to the MP4's metadata and are measured in nanoseconds.\nNow for every MP4 extracted using ",(0,n.mdx)("inlineCode",{parentName:"p"},"vrs_to_mp4")," tools, this timestamp is conveniently saved as a metadata."),(0,n.mdx)("p",null,"To extract the vrs timestamps, use the ",(0,n.mdx)("inlineCode",{parentName:"p"},"get_timestamp_from_mp4")," function.\nThe resulting timestamp is in ",(0,n.mdx)("inlineCode",{parentName:"p"},"TimeDomain.DEVICE_TIME")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-Python"},"from projectaria_tools.core.utils.vrs_to_mp4_utils import get_timestamp_from_mp4\nvrs_device_timestamps_nanoseconds = get_timestamp_from_mp4(mp4_file)\n")),(0,n.mdx)("h3",{id:"calibration-for-upright-rgb"},"Calibration for upright RGB"),(0,n.mdx)("p",null,"The output RGB frames in the MP4 file are rotated upright (clockwise 90 degrees).\nThe camera calibration will be changed after such rotation and can be obtained using the following interface."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-Python"},"from projectaria_tools.utils.calibration_utils import (\n    rotate_upright_image_and_calibration,\n)\nupright_image, upright_calibration = rotate_upright_image_and_calibratio(original_rgb_image, rgb_camera_calibration)\n")))}f.isMDXComponent=!0}}]);