"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6635],{70840:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(74848),i=t(28453),n=t(49489),o=t(7227);const l={sidebar_position:20,title:"Image Utilities (Python and C++)"},s="Advanced Image Utilities",c={id:"data_utilities/advanced_code_snippets/image_utilities",title:"Image Utilities (Python and C++)",description:"Overview",source:"@site/docs/data_utilities/advanced_code_snippets/image_utilities.mdx",sourceDirName:"data_utilities/advanced_code_snippets",slug:"/data_utilities/advanced_code_snippets/image_utilities",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/image_utilities",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/advanced_code_snippets/image_utilities.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Image Utilities (Python and C++)"},sidebar:"tutorialSidebar",previous:{title:"Plot Sensor Data (Python)",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/plotting_sensor_data"},next:{title:"Export VRS to MP4 (Python)",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/vrs_to_mp4"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Image debayer",id:"image-debayer",level:2},{value:"Image undistortion",id:"image-undistortion",level:2},{value:"Rotated image clockwise 90 degrees",id:"rotated-image-clockwise-90-degrees",level:2}];function m(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"advanced-image-utilities",children:"Advanced Image Utilities"})}),"\n",(0,r.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(a.p,{children:["This page provides advanced image utilities code snippets for Project Aria Tools, see also ",(0,r.jsx)(a.a,{href:"/docs/data_utilities/core_code_snippets/image",children:"Image Code Snippets"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"image-debayer",children:"Image debayer"}),"\n",(0,r.jsxs)(a.p,{children:["Some recording profiles outputs raw RGB images (Profile 7 in ",(0,r.jsx)(a.a,{href:"/docs/tech_spec/recording_profiles",children:"Recording Profile"}),"). We provide functionalities to debayer them and perform white-balancing to get RGB images."]}),"\n",(0,r.jsxs)(n.default,{groupId:"programming-language",children:[(0,r.jsx)(o.default,{value:"python",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'from projectaria_tools.core import data_provider, image\n\nstream_id = provider.get_stream_id_from_label("camera-rgb")\nimage_data = provider.get_image_data_by_index(stream_id, 0)\nimage_data_array = image_data[0].to_numpy_array()\ndebayered_array = image.debayer(image_data_array)\n'})})}),(0,r.jsx)(o.default,{value:"cpp",label:"C++",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-cpp",children:'#include <dataprovider/VrsDataProvider.h>\n#include <image/utility/Debayer.h>\n\nauto streamId = provider.getStreamIdFromLabel("camera-rgb");\nauto imageData = provider.getImageDataByIndex(streamId, 0);\nauto debayeredImage = debayer(imageData.first.imageVariant());\n'})})})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Image",src:t(85819).A+"",width:"912",height:"427"})}),"\n",(0,r.jsxs)(a.p,{children:["See ",(0,r.jsx)(a.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/image/utility/Debayer.cpp",children:"projectaria_tools/core/image/utility/Debayer.cpp"})," for implementation"]}),"\n",(0,r.jsx)(a.h2,{id:"image-undistortion",children:"Image undistortion"}),"\n",(0,r.jsx)(a.p,{children:"In this example, we remove distortions in raw sensor data so that straight 3D lines appear straight in the undistorted images. There is existing C++ implementation and Python wrapper of this helper function in the data utilities."}),"\n",(0,r.jsxs)(n.default,{groupId:"programming-language",children:[(0,r.jsx)(o.default,{value:"python",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'from projectaria_tools.core import data_provider, calibration\n\ncamera_label = "camera-slam-left"\nstream_id = provider.get_stream_id_from_label(camera_label)\n\ncalib = provider.get_device_calibration().get_camera_calib(camera_label)\npinhole = calibration.get_linear_camera_calibration(512, 512, 150)\n\nraw_image = provider.get_image_data_by_index(stream_id, 0)[0].to_numpy_array()\nundistorted_image = calibration.distort_by_calibration(raw_image, pinhole, calib)\n'})})}),(0,r.jsx)(o.default,{value:"cpp",label:"C++",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-cpp",children:'#include <dataprovider/VrsDataProvider.h>\n#include <calibration/utility/Distort.h>\n\nstd::string cameraLabel = "camera-rgb";\nvrs::StreamId streamId = provider->getStreamIdFromLabel(cameraLabel);\n\nCameraCalibration calib = provider->getCameraCalibration(streamId);\nCameraCalibration pinhole = getLinearCameraCalibration(512, 512, 150);\n\nImageData rawImage = provider->getImageDataByIndex(streamId, 0);\nauto undistortedImage = distortByCalibration(rawImage.imageVariant(), pinhole, calib);\n'})})})]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Image",src:t(79317).A+"",width:"810",height:"403"})}),"\n",(0,r.jsxs)(a.p,{children:["Go to ",(0,r.jsx)(a.a,{href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/calibration/utility/Distort.cpp",children:"projectaria_tools/core/calibration/utility/Distort.cpp"})," for implementation."]}),"\n",(0,r.jsxs)(a.p,{children:["Go to the ",(0,r.jsx)(a.a,{href:"/projectaria_tools/docs/faq#calibration",children:"Project Aria FAQ"})," for more calibration information and resources."]}),"\n",(0,r.jsx)(a.h2,{id:"rotated-image-clockwise-90-degrees",children:"Rotated image clockwise 90 degrees"}),"\n",(0,r.jsx)(a.p,{children:"In this example, we rotated the RGB image 90 degrees and provide the new calibration object."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Calibration rotation only applies to pinhole camera model"}),"\n",(0,r.jsxs)(a.li,{children:["Pinhole camera calibration object needs to be initialized as ",(0,r.jsx)(a.code,{children:"pinhole = calibration.get_linear_camera_calibration(512, 512, 150, camera_label, calib.get_transform_device_camera())"}),"\nwith ",(0,r.jsx)(a.code,{children:"camera_label"})," and the pose ",(0,r.jsx)(a.code,{children:"calib.get_transform_device_camera()"})," so that ",(0,r.jsx)(a.code,{children:"pinhole_cw90"})," can have the correct transformation matrix when unprojecting a pixel to get ",(0,r.jsx)(a.code,{children:"ray_in_device_frame"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.default,{groupId:"programming-language",children:[(0,r.jsx)(o.default,{value:"python",label:"Python",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:'camera_label = "camera-rgb"\nstream_id = provider.get_stream_id_from_label(camera_label)\n\ncalib = provider.get_device_calibration().get_camera_calib(camera_label)\npinhole = calibration.get_linear_camera_calibration(512, 512, 150, camera_label,\ncalib.get_transform_device_camera())\n\nraw_image = provider.get_image_data_by_index(stream_id, 0)[0].to_numpy_array()\nundistorted_image = calibration.distort_by_calibration(raw_image, pinhole, calib)\n\n# Rotated image by CW90 degrees\nrotated_image = np.rot90(undistorted_image, k=3)\n\n# Get rotated image calibration\npinhole_cw90 = calibration.rotate_camera_calib_cw90deg(pinhole)\n\n# Unproject a pixel and get a ray from device coordinate frame\ntest_pixel_in_rotated_image = [10,0]\nray_in_device_frame =  pinhole_cw90.get_transform_device_camera() @ pinhole_cw90.unproject_no_checks(test_pixel_in_rotated_image)\n'})})}),(0,r.jsx)(o.default,{value:"cpp",label:"C++",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-cpp",children:'#include <dataprovider/VrsDataProvider.h>\n#include <calibration/utility/Distort.h>\n\nstd::string cameraLabel = "camera-rgb";\nvrs::StreamId streamId = provider->getStreamIdFromLabel(cameraLabel);\n\nCameraCalibration calib = provider->getCameraCalibration(streamId);\nCameraCalibration pinhole = getLinearCameraCalibration(512, 512, 150, cameraLabel, calib.getT_Device_Camera());\n\n// Get rotated image calibration\nCameraCalibration pinholeCW90 = rotatedCameraCalibCW90Deg(pinhole);\n\n// Unproject a pixel and get a ray from device coordinate frame\nEigen::Vector2d textPixelInRotatedImage{10,0};\nauto ray = pinholeCW90.getT_Device_Camera() * pinholeCW90.projectNoChecks(textPixelInRotatedImage);\n'})})})]})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},7227:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var n=t(74848);function o(e){let{children:a,hidden:t,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:a})}},49489:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});var r=t(96540),i=t(34164),n=t(24245),o=t(56347),l=t(36494),s=t(62814),c=t(45167),d=t(69900);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:i}}=e;return{value:a,label:t,attributes:r,default:i}}))}(t);return function(e){const a=(0,c.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const i=(0,o.W6)(),n=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const a=new URLSearchParams(i.location.search);a.set(n,e),i.replace({...i.location,search:a.toString()})}),[n,i])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,n=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:n}))),[c,u]=h({queryString:t,groupId:i}),[g,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,n]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:i}),_=(()=>{const e=c??g;return p({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{_&&s(_)}),[_]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,n]),tabValues:n}}var b=t(11062);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:a,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),d=e=>{const a=e.currentTarget,t=s.indexOf(a),i=l[t].value;i!==r&&(c(a),o(i))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:n}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>s.push(e),onKeyDown:u,onClick:d,...n,className:(0,i.A)("tabs__item",_.tabItem,n?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function x(e){let{lazy:a,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function j(e){const a=g(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",_.tabList),children:[(0,f.jsx)(v,{...a,...e}),(0,f.jsx)(x,{...a,...e})]})}function y(e){const a=(0,b.default)();return(0,f.jsx)(j,{...e,children:u(e.children)},String(a))}},85819:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/debayer-94c88a5c2c94e478d18f3ae8f9a33824.png"},79317:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/undistortion-b8cdb1aa8b6fb5493555936859e284a7.png"},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>l});var r=t(96540);const i={},n=r.createContext(i);function o(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);