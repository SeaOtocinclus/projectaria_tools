"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[816],{15680:(l,d,t)=>{t.r(d),t.d(d,{MDXContext:()=>o,MDXProvider:()=>s,mdx:()=>f,useMDXComponents:()=>i,withMDXComponents:()=>a});var n=t(96540);function e(l,d,t){return d in l?Object.defineProperty(l,d,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[d]=t,l}function m(){return m=Object.assign||function(l){for(var d=1;d<arguments.length;d++){var t=arguments[d];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(l[n]=t[n])}return l},m.apply(this,arguments)}function u(l,d){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);d&&(n=n.filter((function(d){return Object.getOwnPropertyDescriptor(l,d).enumerable}))),t.push.apply(t,n)}return t}function x(l){for(var d=1;d<arguments.length;d++){var t=null!=arguments[d]?arguments[d]:{};d%2?u(Object(t),!0).forEach((function(d){e(l,d,t[d])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(d){Object.defineProperty(l,d,Object.getOwnPropertyDescriptor(t,d))}))}return l}function r(l,d){if(null==l)return{};var t,n,e=function(l,d){if(null==l)return{};var t,n,e={},m=Object.keys(l);for(n=0;n<m.length;n++)t=m[n],d.indexOf(t)>=0||(e[t]=l[t]);return e}(l,d);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);for(n=0;n<m.length;n++)t=m[n],d.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(l,t)&&(e[t]=l[t])}return e}var o=n.createContext({}),a=function(l){return function(d){var t=i(d.components);return n.createElement(l,m({},d,{components:t}))}},i=function(l){var d=n.useContext(o),t=d;return l&&(t="function"==typeof l?l(d):x(x({},d),l)),t},s=function(l){var d=i(l.components);return n.createElement(o.Provider,{value:d},l.children)},c="mdxType",p={inlineCode:"code",wrapper:function(l){var d=l.children;return n.createElement(n.Fragment,{},d)}},h=n.forwardRef((function(l,d){var t=l.components,e=l.mdxType,m=l.originalType,u=l.parentName,o=r(l,["components","mdxType","originalType","parentName"]),a=i(t),s=e,c=a["".concat(u,".").concat(s)]||a[s]||p[s]||m;return t?n.createElement(c,x(x({ref:d},o),{},{components:t})):n.createElement(c,x({ref:d},o))}));function f(l,d){var t=arguments,e=d&&d.mdxType;if("string"==typeof l||e){var m=t.length,u=new Array(m);u[0]=h;var x={};for(var r in d)hasOwnProperty.call(d,r)&&(x[r]=d[r]);x.originalType=l,x[c]="string"==typeof l?l:e,u[1]=x;for(var o=2;o<m;o++)u[o]=t[o];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},88404:(l,d,t)=>{t.r(d),t.d(d,{assets:()=>r,contentTitle:()=>u,default:()=>s,frontMatter:()=>m,metadata:()=>x,toc:()=>o});var n=t(58168),e=(t(96540),t(15680));const m={sidebar_position:20,title:"Recording Profiles"},u="Project Aria Recording Profiles",x={unversionedId:"tech_spec/recording_profiles",id:"tech_spec/recording_profiles",title:"Recording Profiles",description:"Overview",source:"@site/docs/tech_spec/recording_profiles.mdx",sourceDirName:"tech_spec",slug:"/tech_spec/recording_profiles",permalink:"/projectaria_tools/docs/tech_spec/recording_profiles",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/tech_spec/recording_profiles.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Recording Profiles"},sidebar:"tutorialSidebar",previous:{title:"Hardware Specifications",permalink:"/projectaria_tools/docs/tech_spec/hardware_spec"},next:{title:"Device Calibration",permalink:"/projectaria_tools/docs/tech_spec/device_calibration"}},r={},o=[{value:"Overview",id:"overview",level:2},{value:"Recording Profile Specs",id:"recording-profile-specs",level:2},{value:"Viewing recording profile details on device",id:"viewing-recording-profile-details-on-device",level:3},{value:"Mobile Companion app",id:"mobile-companion-app",level:4},{value:"Project Aria Client SDK",id:"project-aria-client-sdk",level:4},{value:"General guidance if you&#39;re making recordings",id:"general-guidance-if-youre-making-recordings",level:2},{value:"If you\u2019re not sure what you want",id:"if-youre-not-sure-what-you-want",level:3},{value:"If you&#39;re streaming data",id:"if-youre-streaming-data",level:3},{value:"If you need a high frame rate",id:"if-you-need-a-high-frame-rate",level:3},{value:"If your research focuses on audio",id:"if-your-research-focuses-on-audio",level:3},{value:"To avoid image pre-processing",id:"to-avoid-image-pre-processing",level:3},{value:"Long duration recordings",id:"long-duration-recordings",level:3},{value:"How to make custom recordings with the Mobile Companion app",id:"how-to-make-custom-recordings-with-the-mobile-companion-app",level:2}],a={toc:o},i="wrapper";function s(l){let{components:d,...t}=l;return(0,e.mdx)(i,(0,n.A)({},a,t,{components:d,mdxType:"MDXLayout"}),(0,e.mdx)("h1",{id:"project-aria-recording-profiles"},"Project Aria Recording Profiles"),(0,e.mdx)("h2",{id:"overview"},"Overview"),(0,e.mdx)("p",null,"Project Aria glasses have multiple recording profiles that enable users to choose what sensors to record with and what settings to use. Aria glasses recording profiles can vary by:"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},"Sub-selection of sensor streams"),(0,e.mdx)("li",{parentName:"ul"},"RGB and ET (Eye Tracking) camera resolution"),(0,e.mdx)("li",{parentName:"ul"},"Mono Scene (often, but not exclusively used for SLAM), RGB and ET camera frame rate and auto-exposure settings"),(0,e.mdx)("li",{parentName:"ul"},"Image stream format"),(0,e.mdx)("li",{parentName:"ul"},"Number of audio channels: all (7) v.s. stereo(2)")),(0,e.mdx)("p",null,"The table below provides a detailed spec of each profile we currently support. We add new profiles when necessary."),(0,e.mdx)("p",null,"This page covers:"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},(0,e.mdx)("a",{parentName:"li",href:"#specs"},"Recording profile specs")),(0,e.mdx)("li",{parentName:"ul"},(0,e.mdx)("a",{parentName:"li",href:"#general"},"General guidance if you're making recordings")),(0,e.mdx)("li",{parentName:"ul"},(0,e.mdx)("a",{parentName:"li",href:"#custom"},"How to make custom recordings with the Mobile Companion app"))),(0,e.mdx)("div",{id:"specs"}),(0,e.mdx)("h2",{id:"recording-profile-specs"},"Recording Profile Specs"),(0,e.mdx)("p",null,"The following table provides a detailed spec of each profile we currently support. Keep in mind the following requirements when selecting a recording profile:"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},"If Wi-Fi data is being recorded (wifiScanModeActive), you won't be able to create TICSync recordings with that profile"),(0,e.mdx)("li",{parentName:"ul"},"To request SLAM (or Multi-SLAM) MPS, you'll need Monoscene/SLAM cameras + IMU enabled"),(0,e.mdx)("li",{parentName:"ul"},"To request Eye Gaze MPS, you'll need Eye Tracking cameras enabled"),(0,e.mdx)("li",{parentName:"ul"},"To request Hand Tracking MPS, you'll need Monoscene/SLAM camers enabled")),(0,e.mdx)("table",null,(0,e.mdx)("thead",null," ",(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"}),(0,e.mdx)("th",{colspan:"2"},(0,e.mdx)("center",null,"Microphones")),(0,e.mdx)("th",{colspan:"3"},(0,e.mdx)("center",null,"ET Cameras")),(0,e.mdx)("th",{colspan:"4"},(0,e.mdx)("center",null,"RGB Cameras"),"  "),(0,e.mdx)("th",{colspan:"4"},(0,e.mdx)("center",null," SLAM (Mono Scene Cameras)"),"  "),(0,e.mdx)("th",null,(0,e.mdx)("center",null," GPS "),"     "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"IMU 1"),"         "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"IMU 2"),"         "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"Magnetometer"),"  "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"Barometer"),"     "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"Wi-Fi"),"          "),(0,e.mdx)("th",null,(0,e.mdx)("center",null," Bluetooth"),"          ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"Profile"),(0,e.mdx)("td",null,"Channels     "),(0,e.mdx)("td",null,"Sample Rate (kHz)"),(0,e.mdx)("td",null,"Resolution  "),(0,e.mdx)("td",null,"FPS"),(0,e.mdx)("td",null,"Image Format"),(0,e.mdx)("td",null,"Resolution   "),(0,e.mdx)("td",null,"FPS"),(0,e.mdx)("td",null,"Auto Exposure"),(0,e.mdx)("td",null,"Image Format"),(0,e.mdx)("td",null,"Resolution    "),(0,e.mdx)("td",null,"FPS"),(0,e.mdx)("td",null,"Auto Exposure"),(0,e.mdx)("td",null,"Image Format"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Scan Duration(s)"),(0,e.mdx)("td",null,"Scan Duration(s)"))),(0,e.mdx)("tbody",null,(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"0"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),"    ",(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"2880x2880    "),(0,e.mdx)("td",null,"1  "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"10              "),(0,e.mdx)("td",null,"10              ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"2"),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-                "),(0,e.mdx)("td",null,"-   "),(0,e.mdx)("td",null,"- ")," ",(0,e.mdx)("td",null,"-        "),(0,e.mdx)("td",null,"1408x1408     "),(0,e.mdx)("td",null,"20 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480     "),(0,e.mdx)("td",null,"20  "),(0,e.mdx)("td",null,"ON            "),(0,e.mdx)("td",null,"JPEG           "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"10                     "),(0,e.mdx)("td",null,"10")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"4"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-  ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"5"),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-                "),(0,e.mdx)("td",null,"640x480     "),(0,e.mdx)("td",null,"20 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"20 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-  ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"7"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"RAW         "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"8"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"5  "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"15 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"9"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"20 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"10"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"10             "),(0,e.mdx)("td",null,"10 ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"12"),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-                "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-              "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"14"),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-                "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"1 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"15"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- ")))),(0,e.mdx)("table",null,(0,e.mdx)("thead",null," ",(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"}),(0,e.mdx)("th",{colspan:"2"},(0,e.mdx)("center",null,"Microphones")),(0,e.mdx)("th",{colspan:"3"},(0,e.mdx)("center",null,"ET Cameras")),(0,e.mdx)("th",{colspan:"4"},(0,e.mdx)("center",null,"RGB Cameras"),"  "),(0,e.mdx)("th",{colspan:"4"},(0,e.mdx)("center",null," SLAM (Mono Scene Cameras)"),"  "),(0,e.mdx)("th",null,(0,e.mdx)("center",null," GPS "),"     "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"IMU 1"),"         "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"IMU 2"),"         "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"Magnetometer"),"  "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"Barometer"),"     "),(0,e.mdx)("th",null,(0,e.mdx)("center",null,"Wi-Fi"),"          "),(0,e.mdx)("th",null,(0,e.mdx)("center",null," Bluetooth"),"          ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"Profile"),(0,e.mdx)("td",null,"Channels     "),(0,e.mdx)("td",null,"Sample Rate (kHz)"),(0,e.mdx)("td",null,"Resolution  "),(0,e.mdx)("td",null,"FPS"),(0,e.mdx)("td",null,"Image Format"),(0,e.mdx)("td",null,"Resolution   "),(0,e.mdx)("td",null,"FPS"),(0,e.mdx)("td",null,"Auto Exposure"),(0,e.mdx)("td",null,"Image Format"),(0,e.mdx)("td",null,"Resolution    "),(0,e.mdx)("td",null,"FPS"),(0,e.mdx)("td",null,"Auto Exposure"),(0,e.mdx)("td",null,"Image Format"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Data Rate (Hz)"),(0,e.mdx)("td",null,"Scan Duration(s)"),(0,e.mdx)("td",null,"Scan Duration(s)"))),(0,e.mdx)("tbody",null,(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"16"),(0,e.mdx)("td",null,"2            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"640x480     "),(0,e.mdx)("td",null,"90 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"18"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"19"),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-                "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"10 ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"20"),(0,e.mdx)("td",null,"2            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-  "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"21"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"JPEG       "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"15 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"15 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-              "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"22"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG       "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-              "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"23"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48               "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG       "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-              "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"24"),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-                "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"- "),(0,e.mdx)("td",null,"-        "),(0,e.mdx)("td",null,"2880x2880    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480         "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"25"),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-                "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"- "),(0,e.mdx)("td",null,"-        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"640x480         "),(0,e.mdx)("td",null,"20 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"1000          "),(0,e.mdx)("td",null,"800           "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"10                "),(0,e.mdx)("td",null,"10 ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"26"),(0,e.mdx)("td",null,"2            "),(0,e.mdx)("td",null,"48                "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"- "),(0,e.mdx)("td",null,"-        "),(0,e.mdx)("td",null,"2880x2880    "),(0,e.mdx)("td",null,"1 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-              "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"-          "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-            "),(0,e.mdx)("td",null,"-                   "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"27"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48                "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG    "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"10 "),(0,e.mdx)("td",null,"ON          "),(0,e.mdx)("td",null,"JPEG          "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000         "),(0,e.mdx)("td",null,"800          "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"10               "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"28"),(0,e.mdx)("td",null,"7            "),(0,e.mdx)("td",null,"48                "),(0,e.mdx)("td",null,"320x240     "),(0,e.mdx)("td",null,"60 "),(0,e.mdx)("td",null,"JPEG        "),(0,e.mdx)("td",null,"1408x1408    "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG    "),(0,e.mdx)("td",null,"640x480       "),(0,e.mdx)("td",null,"30 "),(0,e.mdx)("td",null,"ON          "),(0,e.mdx)("td",null,"JPEG          "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"1000         "),(0,e.mdx)("td",null,"800          "),(0,e.mdx)("td",null,"10            "),(0,e.mdx)("td",null,"50            "),(0,e.mdx)("td",null,"-                "),(0,e.mdx)("td",null,"- ")),(0,e.mdx)("tr",null,(0,e.mdx)("th",{class:"headcol"},"29"),(0,e.mdx)("td",null,"2            "),(0,e.mdx)("td",null,"48                "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"- "),(0,e.mdx)("td",null,"-        "),(0,e.mdx)("td",null,"2880x2880    "),(0,e.mdx)("td",null,"1/0.1 "),(0,e.mdx)("td",null,"ON           "),(0,e.mdx)("td",null,"JPEG with decimation       "),(0,e.mdx)("td",null,"-               "),(0,e.mdx)("td",null,"- "),(0,e.mdx)("td",null,"-             "),(0,e.mdx)("td",null,"-              "),(0,e.mdx)("td",null,"1             "),(0,e.mdx)("td",null,"-          "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"-      "),(0,e.mdx)("td",null,"-        "),(0,e.mdx)("td",null,"-           "),(0,e.mdx)("td",null,"- ")))),(0,e.mdx)("p",null,"The Decimated JPEG outputs for profile29 means that 9 out 10 JPEG frames are skipped, creating an equivalent frame rate of 0.1FPS. The aim is to create a recording profile that can support 15+ recording hours."),(0,e.mdx)("h3",{id:"viewing-recording-profile-details-on-device"},"Viewing recording profile details on device"),(0,e.mdx)("p",null,"There are several ways you can view recording profile information if you have access to Project Aria glasses"),(0,e.mdx)("h4",{id:"mobile-companion-app"},"Mobile Companion app"),(0,e.mdx)("ol",null,(0,e.mdx)("li",{parentName:"ol"},"Open the Mobile Companion App and select ",(0,e.mdx)("strong",{parentName:"li"},"New Recording Session")),(0,e.mdx)("li",{parentName:"ol"},"Tap ",(0,e.mdx)("strong",{parentName:"li"},"Recording Profile")),(0,e.mdx)("li",{parentName:"ol"},"Select ",(0,e.mdx)("strong",{parentName:"li"},"More Info")," in the top right corner",(0,e.mdx)("ul",{parentName:"li"},(0,e.mdx)("li",{parentName:"ul"},"The More Info page will show all recording profiles as well as the current settings for the Custom Profile")))),(0,e.mdx)("div",{id:"general"}),(0,e.mdx)("h4",{id:"project-aria-client-sdk"},"Project Aria Client SDK"),(0,e.mdx)("p",null,"If you've set up your glasses with the ",(0,e.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/setup"},"Client SDK")," you can ",(0,e.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/sdk/concepts/sdk_sensor_profiles"},"export recording profiles to a JSON file"),"."),(0,e.mdx)("h2",{id:"general-guidance-if-youre-making-recordings"},"General guidance if you're making recordings"),(0,e.mdx)("p",null,"These are some sensor profiles researchers have found useful for particular kinds of research. Commonly used recording profiles are Profiles 0, 2, 5, 9, 10, 15 and 23."),(0,e.mdx)("h3",{id:"if-youre-not-sure-what-you-want"},"If you\u2019re not sure what you want"),(0,e.mdx)("p",null,"Profile10 is interesting to explore, it gathers data with all sensors and the RGB Camera records at 10 fps. All sensor data is useful for exploring multimodal ML models."),(0,e.mdx)("p",null,"If you need high RGB Resolution (2880x2880 rather than 1408x1408), and 1FPS is sufficient shutter speed, use Profile0."),(0,e.mdx)("h3",{id:"if-youre-streaming-data"},"If you're streaming data"),(0,e.mdx)("p",null,"While you can use any recording profile when streaming, we recommend only using Profiles 12 and 18, which are optimized for streaming."),(0,e.mdx)("h3",{id:"if-you-need-a-high-frame-rate"},"If you need a high frame rate"),(0,e.mdx)("p",null,"Use Profiles 2, 9 or 15, depending on whether you want EyeTracking or GPS. Profile2 does not have ET, Profile15 does not have GPS."),(0,e.mdx)("h3",{id:"if-your-research-focuses-on-audio"},"If your research focuses on audio"),(0,e.mdx)("p",null,"Try Profiles 4, 7 (no SLAM) or 10."),(0,e.mdx)("h3",{id:"to-avoid-image-pre-processing"},"To avoid image pre-processing"),(0,e.mdx)("p",null,"In situations where you want to use RAW videos and skip the Image Sensor Processor (ISP) as much as possible, Profile7 is helpful."),(0,e.mdx)("p",null,"Please note, because Profile7 delivers RAW image files, not JPEGs the data is 8x more costly to store. This profile also uses more energy while recording and may heat up faster than others."),(0,e.mdx)("h3",{id:"long-duration-recordings"},"Long duration recordings"),(0,e.mdx)("div",{id:"custom"}),(0,e.mdx)("p",null,"Profiles 20 and 26 are optimized for 5+ recording hours. Profile 29 is optimized for recording times over 15 hours and uses JPEG decimation to provide 0.1FPS RGB data."),(0,e.mdx)("h2",{id:"how-to-make-custom-recordings-with-the-mobile-companion-app"},"How to make custom recordings with the Mobile Companion app"),(0,e.mdx)("p",null,"The custom profile feature enables users to alter the most commonly used sensor configurations. Further customizations could be added, such as auto-exposure or whether to record images as JPEG or RAW, if there is sufficient demand. Please contact us using one of our ",(0,e.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/support"},"support channels")," if you have any feature requests."),(0,e.mdx)("p",null,"Some custom configurations are restricted, to protect the device or quality of recording:"),(0,e.mdx)("ul",null,(0,e.mdx)("li",{parentName:"ul"},"FPS across cameras must be the same, or multiples of each other for the glasses to record."),(0,e.mdx)("li",{parentName:"ul"},"[Warning]"," RGB Cameras at 2880 x 2880 at 15-20 fps will cause elevated thermal loads and reduced battery life"),(0,e.mdx)("li",{parentName:"ul"},"To ensure device stability, recordings at 2880x2880 at 30fps are not allowed")),(0,e.mdx)("p",null,"To set a Custom Recording Profile:"),(0,e.mdx)("ol",null,(0,e.mdx)("li",{parentName:"ol"},"In the Mobile Companion app Dashboard, select ",(0,e.mdx)("strong",{parentName:"li"},"New Recording Session")),(0,e.mdx)("li",{parentName:"ol"},"Select ",(0,e.mdx)("strong",{parentName:"li"},"Recording Profile")),(0,e.mdx)("li",{parentName:"ol"},"The first recording profile in the list will be Custom Profile",(0,e.mdx)("ul",{parentName:"li"},(0,e.mdx)("li",{parentName:"ul"},"You may need to scroll up to see this option"))),(0,e.mdx)("li",{parentName:"ol"},"Select the Custom Profile"),(0,e.mdx)("li",{parentName:"ol"},"Select ",(0,e.mdx)("strong",{parentName:"li"},"Edit parameters")),(0,e.mdx)("li",{parentName:"ol"},"Adjust sensor settings",(0,e.mdx)("ul",{parentName:"li"},(0,e.mdx)("li",{parentName:"ul"},"Tap ",(0,e.mdx)("strong",{parentName:"li"},"More info")," on the Recording Profiles Tab to see more details, such as auto exposure")))))}s.isMDXComponent=!0}}]);