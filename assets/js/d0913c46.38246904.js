"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5001],{75490:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=n(74848),i=n(28453),r=n(49489),s=n(7227);const l={sidebar_position:20,title:"Image"},d="Image Code Snippets",c={id:"data_utilities/core_code_snippets/image",title:"Image",description:"In this section, we introduce the Python/C++ API to access and manipulate Project Aria images (projectariatools/main/core/image). Raw Aria data is stored in VRS files.",source:"@site/docs/data_utilities/core_code_snippets/image.mdx",sourceDirName:"data_utilities/core_code_snippets",slug:"/data_utilities/core_code_snippets/image",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/image",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/core_code_snippets/image.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Image"},sidebar:"tutorialSidebar",previous:{title:"Data Provider",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/data_provider"},next:{title:"Calibration",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/calibration"}},o={},u=[{value:"Raw sensor data",id:"raw-sensor-data",level:2},{value:"Manipulating images",id:"manipulating-images",level:2},{value:"Image and ImageVariants (C++)",id:"image-and-imagevariants-c",level:2},{value:"ManagedImage and ManagedImageVariant (C++)",id:"managedimage-and-managedimagevariant-c",level:2}];function h(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"image-code-snippets",children:"Image Code Snippets"})}),"\n",(0,t.jsxs)(a.p,{children:["In this section, we introduce the Python/C++ API to access and manipulate Project Aria images (",(0,t.jsx)(a.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/image",children:"projectaria_tools/main/core/image"}),"). Raw Aria data is stored in VRS files."]}),"\n",(0,t.jsx)(a.h2,{id:"raw-sensor-data",children:"Raw sensor data"}),"\n",(0,t.jsxs)(a.p,{children:["Raw image data is stored in ",(0,t.jsx)(a.code,{children:"ImageData"}),". ImageData is a type alias of an std::pair. The two components of that pair are:"]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["The image frame stored in ",(0,t.jsx)(a.code,{children:"vrs::PixelFrame"})," class (potentially compressed)","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"We recommend that users do not directly use PixelFrame"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Image data records","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Image acquisition information such as timestamps, exposure and gain"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.default,{groupId:"programming-language",children:[(0,t.jsx)(s.default,{value:"python",label:"Python",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'from projectaria_tools.core import data_provider, image\nfrom projectaria_tools.core.stream_id import StreamId\n\nvrsfile = "example.vrs"\nprovider = data_provider.create_vrs_data_provider(vrsfile)\n\nstream_id = provider.get_stream_id_from_label("camera-slam-left")\nimage_data =  provider.get_image_data_by_index(stream_id, 0)\npixel_frame = image_data[0].pixel_frame\n'})})}),(0,t.jsxs)(s.default,{value:"cpp",label:"C++",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:'auto streamId = provider.getStreamIdFromLabel("camera-slam-left");\nauto imageData =  provider.getImageDataByIndex(streamId, i);\nauto pixelFrame = imageData->pixelFrame();\n'})}),(0,t.jsxs)(a.p,{children:["Since ",(0,t.jsx)(a.code,{children:"PixelFrame"})," may contain compressed data, the class does not provide an interface for accessing pixel values."]}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"ImageData"})," provides an interface to get an ",(0,t.jsx)(a.code,{children:"ImageVariant"})," interface for the data described below:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:'auto maybeImageVariant = imageData.imageVariant();\nXR_CHECK(maybeImageVariant, "Image is invalid");\nauto& imageVariant = *maybeImageVariant();\n'})}),(0,t.jsxs)(a.p,{children:["We recommend that C++ users to manipulate images using the ",(0,t.jsx)(a.code,{children:"Image"})," and ",(0,t.jsx)(a.code,{children:"ManagedImage"})," and their variant classes."]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"manipulating-images",children:"Manipulating images"}),"\n",(0,t.jsxs)(r.default,{groupId:"programming-language",children:[(0,t.jsxs)(s.default,{value:"python",label:"Python",children:[(0,t.jsx)(a.p,{children:"In Python, we provide an interface for converting from ImageData into numpy arrays."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"image_array = image_data[0].to_numpy_array()\n"})})]}),(0,t.jsxs)(s.default,{value:"cpp",label:"C++",children:[(0,t.jsx)(a.h2,{id:"image-and-imagevariants-c",children:"Image and ImageVariants (C++)"}),(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"Image"})," class provides an interface to access image information and pixels. The class is templated, with different specializations varying by number of channels and scalar data type."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"ImageU8 image = std::get<ImageU8>(imageVariant); // get grayscale image\nint width = image.width(); // image width\nint height = image.height(); // image height\nint channel = image.channel(); // number of channels\nint stride = image.stride(); // number of bytes per row\nuint8_t* data = image.data(); // weak pointer to data\nuint8_t pixel_value = image(0, 0); // access to pixel value if coordinate is of integral type\nuint8_t pixel_value = image(0,5, 0.5); // bilinear interpolate pixel value if coordinate is of float type\n"})}),(0,t.jsx)(a.p,{children:"You can iterate through an image by using:"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c++",children:"for (const uint8_t& pixel : image) {\n  // process pixel\n}\n"})}),(0,t.jsxs)(a.p,{children:["Note that the ",(0,t.jsx)(a.code,{children:"Image"})," class is non-owning. It is a wrapper of a chunk of data, which might be managed by ",(0,t.jsx)(a.code,{children:"PixelFrame"})," or ",(0,t.jsx)(a.code,{children:"ManagedImage"})," or even a raw data pointer."]}),(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"ImageVariant"})," class represents uncompressed image frames in matrix form. Under the hood, it is a ",(0,t.jsx)(a.code,{children:"std::variant"})," of ",(0,t.jsx)(a.code,{children:"Image"})," classes of different specializations."]}),(0,t.jsx)(a.p,{children:"We provide similar APIs to access data from image variants."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"int width = getWidth(imageVariant); // image width\nint height = getHeight(imageVariant); // image width\nint channel = getChannel(imageVariant); // number of channels\nuint8_t* data = getDataPtr(imageVariant); // pointer to data\nuint8_t pixel_value = at(imageVariant, 0, 0); // access to pixel value if coordinate is of integral type\n// bilinear interpolation not available yet, but you can do the following\nuint8_t pixel_value = std::visit([](auto& image) {return PixelValueVariant(image(0.5, 0.5, 0))}, imageVariant);\n"})}),(0,t.jsx)(a.p,{children:"The image variant types used in Aria raw sensor data are listed in the table below."}),(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:(0,t.jsx)(a.strong,{children:"Sensor"})}),(0,t.jsx)(a.th,{children:"Number of Channels"}),(0,t.jsx)(a.th,{children:"Scalar Data Type"}),(0,t.jsx)(a.th,{children:"Image Type"}),(0,t.jsx)(a.th,{children:"ManagedImage Type"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Eyetracking"}),(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"uint8_t"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ImageU8"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ManagedImageU8"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Mono Scene (SLAM)"}),(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"uint8_t"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ImageU8"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ManagedImageU8"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"RGB"}),(0,t.jsx)(a.td,{children:"3"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"uint8_t"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"Image3U8"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ManagedImage3U8"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Depth"}),(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"uint16_t"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ImageU16"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ManagedImageU16"})})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Segmentation"}),(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"uint64_t"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ImageU64"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"ManagedImageU64"})})]})]})]}),(0,t.jsx)(a.h2,{id:"managedimage-and-managedimagevariant-c",children:"ManagedImage and ManagedImageVariant (C++)"}),(0,t.jsxs)(a.p,{children:["The templated ",(0,t.jsx)(a.code,{children:"ManagedImage"})," class manages the data of an image. Most importantly, you can initialize a ",(0,t.jsx)(a.code,{children:"ManagedImage"})," via:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"ManagedImageU8 managedImage(width, height); // grayscale image\n"})}),(0,t.jsxs)(a.p,{children:["You can change the size of an existing ",(0,t.jsx)(a.code,{children:"ManagedImage"})," via:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"managedImage.reinitialize(newWidth, newHeight); // grayscale image\n"})}),(0,t.jsxs)(a.p,{children:["The class is a derived class of the corresponding class, and therefore inherits all the ",(0,t.jsx)(a.code,{children:"Image"})," interface. All functions taking ",(0,t.jsx)(a.code,{children:"Image"})," as input can also take ",(0,t.jsx)(a.code,{children:"ManagedImages"}),"."]}),(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"ManagedImageVariant"})," class is the ",(0,t.jsx)(a.code,{children:"std::variant"})," of all supported ",(0,t.jsx)(a.code,{children:"ManagedImage"})," specializations. Notably, ",(0,t.jsx)(a.code,{children:"ManagedImageVariant"})," is not a derived class of ",(0,t.jsx)(a.code,{children:"ImageVariant"}),". However, assume you have a function ",(0,t.jsx)(a.code,{children:"fn"})," that takes ",(0,t.jsx)(a.code,{children:"ImageVariant"}),", you can pass a ",(0,t.jsx)(a.code,{children:"ManagedImageVariant"})," object by using:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-cpp",children:"ImageVariant imageVariant = toImageVariant(managedImageVariant);\nfn(imageVariant);\n"})})]})]})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},7227:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});n(96540);var t=n(34164);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function s(e){let{children:a,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:n,children:a})}},49489:(e,a,n)=>{n.r(a),n.d(a,{default:()=>_});var t=n(96540),i=n(34164),r=n(24245),s=n(56347),l=n(36494),d=n(62814),c=n(45167),o=n(69900);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:i}}=e;return{value:a,label:n,attributes:t,default:i}}))}(n);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:n}=e;const i=(0,s.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,d.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(i.location.search);a.set(r,e),i.replace({...i.location,search:a.toString()})}),[r,i])]}function p(e){const{defaultValue:a,queryString:n=!1,groupId:i}=e,r=h(e),[s,d]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[c,u]=g({queryString:n,groupId:i}),[p,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,r]=(0,o.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),j=(()=>{const e=c??p;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{j&&d(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=n(11062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function b(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),o=e=>{const a=e.currentTarget,n=d.indexOf(a),i=l[n].value;i!==t&&(c(a),s(i))},u=e=>{let a=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;a=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;a=d[n]??d[d.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>d.push(e),onKeyDown:u,onClick:o,...r,className:(0,i.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function v(e){let{lazy:a,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function I(e){const a=p(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...a,...e}),(0,f.jsx)(v,{...a,...e})]})}function _(e){const a=(0,x.default)();return(0,f.jsx)(I,{...e,children:u(e.children)},String(a))}},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>l});var t=n(96540);const i={},r=t.createContext(i);function s(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);