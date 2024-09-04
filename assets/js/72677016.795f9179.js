"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4681],{55872:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(74848),n=t(28453);const o={sidebar_position:50,title:"Calibration Data"},s="MPS Output - Calibration",r={id:"data_formats/mps/slam/mps_calibration",title:"Calibration Data",description:"Online calibration is generated as part of SLAM (Location in the Desktop Companion app) MPS requests.",source:"@site/docs/data_formats/mps/slam/mps_calibration.mdx",sourceDirName:"data_formats/mps/slam",slug:"/data_formats/mps/slam/mps_calibration",permalink:"/projectaria_tools/docs/data_formats/mps/slam/mps_calibration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_formats/mps/slam/mps_calibration.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Calibration Data"},sidebar:"tutorialSidebar",previous:{title:"Semi-Dense Point Cloud",permalink:"/projectaria_tools/docs/data_formats/mps/slam/mps_pointcloud"},next:{title:"Multi-SLAM",permalink:"/projectaria_tools/docs/data_formats/mps/slam/mps_multi_slam"}},l={},c=[{value:"Online calibration",id:"online-calibration",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"mps-output---calibration",children:"MPS Output - Calibration"})}),"\n",(0,i.jsxs)(a.p,{children:["Online calibration is generated as part of SLAM (Location in the Desktop Companion app) ",(0,i.jsx)(a.a,{href:"/projectaria_tools/docs/ARK/mps/",children:"MPS requests"}),"."]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"online_calibration.jsonl"})," file"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.a,{href:"/projectaria_tools/docs/data_utilities/visualization/visualization_python#run-aria-sensor-viewer",children:"Aria Sensor Viewer"})," displays the relative position and orientation of most Project Aria glasses sensors (cameras, IMUs, microphones, magnetometer & barometer) in a common reference."]}),"\n",(0,i.jsx)(a.h2,{id:"online-calibration",children:"Online calibration"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"online_calibration.jsonl"})," contains one json online calibration record per line. Each record is a json dict object that contains timestamp metadata and the result of online calibration for the cameras and IMUs."]}),"\n",(0,i.jsxs)(a.p,{children:["The calibration parameters contain ",(0,i.jsx)(a.a,{href:"/projectaria_tools/docs/tech_insights/camera_intrinsic_models",children:"intrinsics"})," and ",(0,i.jsx)(a.a,{href:"/projectaria_tools/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention",children:"extrinsics"})," parameters for each sensor as well as a time offsets which best temporally align their data."]}),"\n",(0,i.jsxs)(a.p,{children:["For how to load and read online calibrations in Python and C++, please check the ",(0,i.jsx)(a.a,{href:"/projectaria_tools/docs/data_utilities/core_code_snippets/mps#online-calibration",children:"code example"})]})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>r});var i=t(96540);const n={},o=i.createContext(n);function s(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);