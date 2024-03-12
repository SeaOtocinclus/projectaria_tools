"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8917],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>m});var n=r(96540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),m=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),p=l,c=m["".concat(d,".").concat(p)]||m[p]||h[p]||o;return r?n.createElement(c,a(a({ref:t},s),{},{components:r})):n.createElement(c,a({ref:t},s))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,d=new Array(o);d[0]=x;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:l,d[1]=a;for(var s=2;s<o;s++)d[s]=r[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}x.displayName="MDXCreateElement"},32288:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=r(58168),l=(r(96540),r(15680));const o={sidebar_position:30,title:"MPS CLI Guide"},d="Project Aria Machine Perception Services CLI Guide",a={unversionedId:"ARK/mps/request_mps/mps_cli_guide",id:"ARK/mps/request_mps/mps_cli_guide",title:"MPS CLI Guide",description:"Overview",source:"@site/docs/ARK/mps/request_mps/mps_cli_guide.mdx",sourceDirName:"ARK/mps/request_mps",slug:"/ARK/mps/request_mps/mps_cli_guide",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_guide",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/mps/request_mps/mps_cli_guide.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"MPS CLI Guide"},sidebar:"tutorialSidebar",previous:{title:"MPS CLI Getting Started",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_getting_started"},next:{title:"Desktop App MPS Requests",permalink:"/projectaria_tools/docs/ARK/mps/request_mps/desktop_mps"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"About",id:"about",level:2},{value:"How the MPS CLI works",id:"how-the-mps-cli-works",level:2},{value:"Logs",id:"logs",level:3},{value:"CLI Settings",id:"cli-settings",level:2},{value:"Command line reference",id:"command-line-reference",level:2},{value:"Help",id:"help",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Log in",id:"log-in",level:4},{value:"Token storage",id:"token-storage",level:4},{value:"Log out",id:"log-out",level:4},{value:"Request commands for any mode",id:"request-commands-for-any-mode",level:3},{value:"Define input path",id:"define-input-path",level:4},{value:"Force the provided files to be reprocessed",id:"force-the-provided-files-to-be-reprocessed",level:4},{value:"Automatically retry processing if it fails",id:"automatically-retry-processing-if-it-fails",level:4},{value:"Don\u2019t show the UI",id:"dont-show-the-ui",level:4},{value:"Single Recording mode",id:"single-recording-mode",level:3},{value:"Select the MPS you wish to generate",id:"select-the-mps-you-wish-to-generate",level:4},{value:"Multi-Recording mode",id:"multi-recording-mode",level:3},{value:"Define the output directory",id:"define-the-output-directory",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Authentication issue on macOS",id:"authentication-issue-on-macos",level:3},{value:"Terminal display issues in macOS",id:"terminal-display-issues-in-macos",level:3},{value:"Error codes",id:"error-codes",level:3}],m={toc:s},u="wrapper";function p(e){let{components:t,...o}=e;return(0,l.mdx)(u,(0,n.A)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"project-aria-machine-perception-services-cli-guide"},"Project Aria Machine Perception Services CLI Guide"),(0,l.mdx)("h2",{id:"overview"},"Overview"),(0,l.mdx)("p",null,"The Project Aria MPS CLI Guide provides detailed information about how to use this tool. The guide contain:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#about"},"About the MPS CLI")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#how"},"How the MPS CLI works"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Go to ",(0,l.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/ARK/mps/mps_processing"},"MPS Data Lifecycle")," for more details about how sequences are processed on the server"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#settings"},"MPS CLI Settings")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#clr"},"MPS CLI Command Line Reference")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting and Error Codes"))),(0,l.mdx)("p",null,"Go to ",(0,l.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli_getting_started"},"Getting Started With the MPS CLI")," for a quick tutorial showing basic commands using sample data."),(0,l.mdx)("div",{id:"about"}," \xa0 "),(0,l.mdx)("h2",{id:"about"},"About"),(0,l.mdx)("p",null,"The Project Aria MPS Command Line Interface (MPS CLI), part of Project Aria Tools, is the preferred way to request Machine Perception Services (MPS). While you can use the Desktop Companion app to request MPS, the MPS CLI provides more features and ease of upload."),(0,l.mdx)("p",null,"The MPS CLI has two modes:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Single",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Process each recording individually"),(0,l.mdx)("li",{parentName:"ul"},"The input can be a file and/or directory, so you can batch process multiple recordings with a single command"),(0,l.mdx)("li",{parentName:"ul"},"Output is always saved next to the input file"),(0,l.mdx)("li",{parentName:"ul"},"The most common way to request MPS"))),(0,l.mdx)("li",{parentName:"ul"},"Multi",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Process multiple recordings to generate multi-sequence SLAM data"),(0,l.mdx)("li",{parentName:"ul"},"User must provide a directory for the outputs")))),(0,l.mdx)("p",null,"Go to ",(0,l.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/ARK/mps/request_mps/mps_cli"},"MPS CLI Overview")," for a full breakdown of all the features available."),(0,l.mdx)("div",{id:"how"}," ",(0,l.mdx)("br",null)),(0,l.mdx)("h2",{id:"how-the-mps-cli-works"},"How the MPS CLI works"),(0,l.mdx)("p",null,"The MPS CLI enables you to upload VRS files from your computer to the Meta servers for processing. The outputs are then saved to your local directory. The MPS CLI will try to process multiple recordings concurrently. The concurrency for various stages can be controlled via ",(0,l.mdx)("a",{parentName:"p",href:"#settings"},"Settings"),"."),(0,l.mdx)("p",null,(0,l.mdx)("img",{alt:"MPS CLU UI for single mode",src:r(14424).A,width:"2172",height:"1034"})),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Once you submit your request, the MPS CLI for the selected mode will open and show the status of your requests.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"See the Getting Started or the ",(0,l.mdx)("a",{parentName:"li",href:"#clr"},"Command Line Reference")," below for how to submit a request."))),(0,l.mdx)("li",{parentName:"ol"},"Once authenticated, the request tool checks with the server to see if this recording was previously processed. We use unique IDs (Hashing stage) to check if this is a new or a previously known recording."),(0,l.mdx)("li",{parentName:"ol"},"If it is a known recording, we skip processing and directly download the results (Download Results stage) or show the error code."),(0,l.mdx)("li",{parentName:"ol"},"If this is a new recording, we run health checks on the recording (HealthCheck stage), to minimize the chances that it will fail during processing. While this check catches obvious errors, like gaps in data and ensures presence of the right sensor streams, but server side processing may still fail."),(0,l.mdx)("li",{parentName:"ol"},"If the health check passes, the recording is encrypted on your machine (Encrypting stage)."),(0,l.mdx)("li",{parentName:"ol"},"After encryption, the recordings are uploaded to the MPS servers (Uploading stage) for processing.",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Uploads are resumable."),(0,l.mdx)("li",{parentName:"ul"},"Interrupted uploads can be resumed within 24 hours."))),(0,l.mdx)("li",{parentName:"ol"},"Data is processed on MPS servers (Processing stage).",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The MPS CLI periodically checks the MPS request's status on the server."),(0,l.mdx)("li",{parentName:"ul"},"It is safe to close the MPS Request tool once the data is processing. When the MPS CLI is reopened, it will check the status of your data and progress to Downloading if it is ready.")))),(0,l.mdx)("admonition",{title:"If you get an error code",type:"tip"},(0,l.mdx)("p",{parentName:"admonition"},"The server re-attempts processing multiple times before it stops and provides an error message"),(0,l.mdx)("ul",{parentName:"admonition"},(0,l.mdx)("li",{parentName:"ul"},"Check ",(0,l.mdx)("a",{parentName:"li",href:"#error-codes"},"Error Codes")," to see what the error was."),(0,l.mdx)("li",{parentName:"ul"},"We encourage you to send a bug report with log files to ",(0,l.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/support"},"Aria User Support")," if it is not an error code 1xx. By default, logs are stored in /tmp/logs/projectaria/mps/."))),(0,l.mdx)("ol",{start:8},(0,l.mdx)("li",{parentName:"ol"},"Once the processing is complete, and the tool is open, outputs are automatically downloaded (Downloading stage)."),(0,l.mdx)("li",{parentName:"ol"},"Recordings in the MPS CLI UI will show the Success status once the outputs been successfully downloaded.")),(0,l.mdx)("h3",{id:"logs"},"Logs"),(0,l.mdx)("p",null,"Each run will write the console logs to a log file on the local drive. Since the MPS CLI can run concurrently on multiple recordings, these logs are useful for debugging purposes. The logs are named by the current time when the request was initiated via CLI."),(0,l.mdx)("p",null,"By default, logs are stored in ",(0,l.mdx)("inlineCode",{parentName:"p"},"/tmp/logs/projectaria/mps/"),". The location can be modified in settings."),(0,l.mdx)("div",{id:"settings"},(0,l.mdx)("br",null)),(0,l.mdx)("h2",{id:"cli-settings"},"CLI Settings"),(0,l.mdx)("p",null,"Project Aria MPS CLI settings can be customized via the mps.ini file. This file is located in the $HOME/.projectaria/mps.ini"),(0,l.mdx)("table",null,(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("strong",null,"Setting")),(0,l.mdx)("td",null,(0,l.mdx)("strong",null,"Description")),(0,l.mdx)("td",null,(0,l.mdx)("strong",null,"Default Value"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",{colspan:"3"},(0,l.mdx)("strong",null,"General settings"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"log_dir")),(0,l.mdx)("td",null,"Where log files are saved for each run. The filename is the timestamp from when the request tool started running."),(0,l.mdx)("td",null,(0,l.mdx)("code",null,"/tmp/logs/projectaria/mps/"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"status_check_interval")),(0,l.mdx)("td",null,"How long the MPS CLI waits to check the status of data during the Processing stage."),(0,l.mdx)("td",null,"30 secs")),(0,l.mdx)("tr",null,(0,l.mdx)("td",{colspan:"3"}," ",(0,l.mdx)("strong",null,"HASH"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"concurrent_hashes")),(0,l.mdx)("td",null,"Maximum number of files that can be concurrently hashed"),(0,l.mdx)("td",null,"4")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"chunk_size")),(0,l.mdx)("td",null,"Chunk size to use for hashing"),(0,l.mdx)("td",null,"10MB")),(0,l.mdx)("tr",null,(0,l.mdx)("td",{colspan:"3"},(0,l.mdx)("strong",null,"Encryption"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"chunk_size")),(0,l.mdx)("td",null,"Chunk size to use for encryption"),(0,l.mdx)("td",null,"50MB")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"concurrent_encryptions")),(0,l.mdx)("td",null,"Maximum number of files that can be concurrently encrypted"),(0,l.mdx)("td",null,"4")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"delete_encrypted_files")),(0,l.mdx)("td",null,"Whether to delete the encrypted files after upload is done. If you set this to false local disk usage will double, due to an encrypted copy of each file."),(0,l.mdx)("td",null,"True.")),(0,l.mdx)("tr",null,(0,l.mdx)("td",{colspan:"3"},(0,l.mdx)("strong",null,"Health Check"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"concurrent_health_checks")),(0,l.mdx)("td",null,"Maximum number of VRS file healthchecks that can be run concurrently"),(0,l.mdx)("td",null,"2")),(0,l.mdx)("tr",null,(0,l.mdx)("td",{colspan:"3"},(0,l.mdx)("strong",null,"Uploads"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"backoff")),(0,l.mdx)("td",null,"The exponential back off factor for retries during failed uploads. The wait time between successive retries will increase with this factor."),(0,l.mdx)("td",null,"1.5")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"interval")),(0,l.mdx)("td",null,"Base delay between retries."),(0,l.mdx)("td",null,"20 secs")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"retries")),(0,l.mdx)("td",null,"Maximum number of retries before giving up."),(0,l.mdx)("td",null,"10")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"concurrent_uploads")),(0,l.mdx)("td",null,"Maximum number of concurrent uploads."),(0,l.mdx)("td",null,"4")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"max_chunk_size")),(0,l.mdx)("td",null,"Maximum chunk size that can be used during uploads."),(0,l.mdx)("td",null,"100 MB")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"min_chunk_size")),(0,l.mdx)("td",null,"The minimum upload chunk size."),(0,l.mdx)("td",null,"5 MB")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"smoothing_window_size")),(0,l.mdx)("td",null,"Size of the smoothing window to adjust the chunk size. This value defines the number of uploaded chunks that will be used to determine the next chunk size."),(0,l.mdx)("td",null,"10")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"target_chunk_upload_secs")),(0,l.mdx)("td",null,"Target time to upload a single chunk. If the chunks in a smoothing window take longer, we reduce the chunk size. If it takes less time, we increase the chunk size."),(0,l.mdx)("td",null,"3 secs")),(0,l.mdx)("tr",null,(0,l.mdx)("td",{colspan:"3"},(0,l.mdx)("strong",null,"GraphQL (Query the MPS backend for MPS Status)"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"backoff")),(0,l.mdx)("td",null,"This the exponential back off factor for retries for failed queries. The wait time between successive retries will increase with this factor"),(0,l.mdx)("td",null,"1.5")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"interval")),(0,l.mdx)("td",null,"Base delay between retries"),(0,l.mdx)("td",null,"4 secs")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"retries")),(0,l.mdx)("td",null,"Maximum number of retries before giving up"),(0,l.mdx)("td",null,"3")),(0,l.mdx)("tr",null,(0,l.mdx)("td",{colspan:"3"},(0,l.mdx)("strong",null,"Download"))),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"backoff")),(0,l.mdx)("td",null,"This the exponential back off factor for retries during failed downloads. The wait time between successive retries will increase with this factor."),(0,l.mdx)("td",null,"1.5")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"interval")),(0,l.mdx)("td",null,"Base delay between retries"),(0,l.mdx)("td",null,"20 secs")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"retries")),(0,l.mdx)("td",null,"Maximum number of retries before giving up"),(0,l.mdx)("td",null,"10")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"chunk_size")),(0,l.mdx)("td",null,"The chunk size to use for downloads"),(0,l.mdx)("td",null,"10MB")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"concurrent_downloads")),(0,l.mdx)("td",null,"Number of concurrent downloads"),(0,l.mdx)("td",null,"10")),(0,l.mdx)("tr",null,(0,l.mdx)("td",null,(0,l.mdx)("code",null,"delete_zip")),(0,l.mdx)("td",null,"The server will send the results in a zip file. This flag controls whether to delete the zip file after extraction or not"),(0,l.mdx)("td",null,"True"))),(0,l.mdx)("div",{id:"clr"},(0,l.mdx)("br",null)),(0,l.mdx)("h2",{id:"command-line-reference"},"Command line reference"),(0,l.mdx)("p",null,"The MPS CLI has two distinct modes: single (process each recording individually) and multi (SLAM outputs for multiple recordings in a shared co-ordinate frame)."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"aria_mps single <options>\n")),(0,l.mdx)("p",null,"or"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"aria_mps multi <options>\n")),(0,l.mdx)("h3",{id:"help"},"Help"),(0,l.mdx)("p",null,"To see the available options and subcommands, use:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--help\n")),(0,l.mdx)("p",null,"or"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"-h\n")),(0,l.mdx)("h3",{id:"authentication"},"Authentication"),(0,l.mdx)("h4",{id:"log-in"},"Log in"),(0,l.mdx)("p",null,"The first time you use the MPS CLI, you\u2019ll be prompted to enter your username and password. Use the Project Aria credentials you use to sign into the Mobile Companion app. You can also supply the username and password via CLI input. This option is more suited for running MPS as part of a batch script or other automated workflows."),(0,l.mdx)("p",null,"The authentication token gets saved in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"$HOME/.projectaria")," directory."),(0,l.mdx)("p",null,"To log in using the CLI"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"-u USERNAME -p PASSWORD\n")),(0,l.mdx)("p",null,"or"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--username USERNAME --password PASSWORD\n")),(0,l.mdx)("h4",{id:"token-storage"},"Token storage"),(0,l.mdx)("p",null,"The login token is saved onto your machine by default."),(0,l.mdx)("p",null,"If you request MPS using ",(0,l.mdx)("inlineCode",{parentName:"p"},"--no-ui")," , you'll have the option to pass ",(0,l.mdx)("inlineCode",{parentName:"p"},"--no-save-token"),". This means the token won't be saved. Once processing is complete the MPS CLI will also logout and invalidate any existing tokens."),(0,l.mdx)("h4",{id:"log-out"},"Log out"),(0,l.mdx)("p",null,"Use the following command to log out the authentication token and delete it from the system. Next time you run the CLI, it will ask for username and password again."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"aria_mps logout\n")),(0,l.mdx)("h3",{id:"request-commands-for-any-mode"},"Request commands for any mode"),(0,l.mdx)("p",null,"These options are shared between both modes."),(0,l.mdx)("h4",{id:"define-input-path"},"Define input path"),(0,l.mdx)("p",null,"Provides the path for a directory or file that will be uploaded for processing. Where a directory is provided, all subdirectories will be scanned for VRS files. At least one input file must be provided. There is no limit of how many files or folders can be included in a single request."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"-i INPUT\n")),(0,l.mdx)("p",null,"or"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--input INPUT\n")),(0,l.mdx)("h4",{id:"force-the-provided-files-to-be-reprocessed"},"Force the provided files to be reprocessed"),(0,l.mdx)("p",null,"Force the server to reprocess all of the provided files, regardless of their current state on the server."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--force\n")),(0,l.mdx)("h4",{id:"automatically-retry-processing-if-it-fails"},"Automatically retry processing if it fails"),(0,l.mdx)("p",null,"By default the MPS server will retry processing data multiple times before generating a failure code. By adding this flag requests automatically retries again if the processing fails. This command is generally only worth using if you\u2019ve done some debugging to warrant it."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--retry-failed\n")),(0,l.mdx)("admonition",{type:"note"},(0,l.mdx)("p",{parentName:"admonition"},"If you retry 30 days after the recording was uploaded, you'll also need to re-upload the data.")),(0,l.mdx)("h4",{id:"dont-show-the-ui"},"Don\u2019t show the UI"),(0,l.mdx)("p",null,"Instead of the MPS CLI UI, you\u2019ll see the raw outputs and processes in the command line."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--no-ui\n")),(0,l.mdx)("h3",{id:"single-recording-mode"},"Single Recording mode"),(0,l.mdx)("h4",{id:"select-the-mps-you-wish-to-generate"},"Select the MPS you wish to generate"),(0,l.mdx)("p",null,"By default, Eye Gaze and SLAM MPS are generated. Use the features option to select a single service, which can speed up processing."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--features {EYE_GAZE,SLAM}\n")),(0,l.mdx)("h3",{id:"multi-recording-mode"},"Multi-Recording mode"),(0,l.mdx)("h4",{id:"define-the-output-directory"},"Define the output directory"),(0,l.mdx)("p",null,"Define the output directory where the results will be stored. Setting the output path is required. The output directory must be empty before processing starts."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"-o OUTPUT_DIR\n")),(0,l.mdx)("p",null,"Or"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"--output OUTPUT_DIR\n")),(0,l.mdx)("div",{id:"troubleshooting"},(0,l.mdx)("br",null)),(0,l.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.mdx)("h3",{id:"authentication-issue-on-macos"},"Authentication issue on macOS"),(0,l.mdx)("p",null,"If you encounter a permissions error while trying to sign in to the MPS CLI, try:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"ln -s /etc/ssl/* /Library/Frameworks/Python.framework/Versions/3.9/etc/openssl\n")),(0,l.mdx)("h3",{id:"terminal-display-issues-in-macos"},"Terminal display issues in macOS"),(0,l.mdx)("p",null,"Some users have reported that the MPS CLI UI has display issues in Terminal. Using a different terminal app may help. ",(0,l.mdx)("a",{parentName:"p",href:"https://textual.textualize.io/FAQ/#why-doesnt-textual-look-good-on-macos"},"Why doesn't Textual look good on macOS")," provides further details about this issue."),(0,l.mdx)("h3",{id:"error-codes"},"Error codes"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"th"},"Error Code")),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null}),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("em",{parentName:"td"},"All 1xx codes are local client errors"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"100"),(0,l.mdx)("td",{parentName:"tr",align:null},"Multi-Recording processing error. Another recording in the group had a failure, so the processing was halted. We need the full group of recordings to successfully process and generate multi-slam MPS output. The recording that fails will show its own error code, processing then stops and and sets the other recordings to this error code.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"101"),(0,l.mdx)("td",{parentName:"tr",align:null},"Something failed on your computer. When you see this error, we suggest inspecting the local log for this run. If you need to reach out to support, please include this log file.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"102"),(0,l.mdx)("td",{parentName:"tr",align:null},"There were health check failures during processing. Check the vrs_health_check.json and vrs_health_check_slam.json for more information about what went wrong.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"103"),(0,l.mdx)("td",{parentName:"tr",align:null},"Multi-Recording processing error. Duplicate file detected. Duplicate recordings are not allowed for multi-SLAM processing.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"104"),(0,l.mdx)("td",{parentName:"tr",align:null},"MPS CLI failed to encrypt the file. Check error logs for more information.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"105"),(0,l.mdx)("td",{parentName:"tr",align:null},"Input-output mismatch error. This error happens when you try to run multi-SLAM processing but pass an output directory that already contains output or intermediate artifacts from a different multi-SLAM job.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"106"),(0,l.mdx)("td",{parentName:"tr",align:null},"The output directory used for multi-SLAM processing is not empty. Non-empty output directory is only allowed if the output directory contains output or artifacts from a previous run of the same group of recordings.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"108"),(0,l.mdx)("td",{parentName:"tr",align:null},"The server failed to query the status of the request. Retrying should usually fix this issue.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"109"),(0,l.mdx)("td",{parentName:"tr",align:null},"Error during computing the hash id of the file. Check error logs for more information.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"110"),(0,l.mdx)("td",{parentName:"tr",align:null},"Error when checking existing outputs on the disk. Check error logs for more information.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"111"),(0,l.mdx)("td",{parentName:"tr",align:null},"Error when checking previously submitted MPS requests for a file. Check error logs for more information.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"112"),(0,l.mdx)("td",{parentName:"tr",align:null},"Error when checking if the recording was previously uploaded. Check error logs for more information.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"113"),(0,l.mdx)("td",{parentName:"tr",align:null},"Error uploading the VRS file. Check error logs for more information.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"114"),(0,l.mdx)("td",{parentName:"tr",align:null},"Error submitting MPS request to the server. Check error logs for more information. Retrying should fix the issue.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"115"),(0,l.mdx)("td",{parentName:"tr",align:null},"Error when checking the processing status of the MPS request. Check error logs for more information.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"116"),(0,l.mdx)("td",{parentName:"tr",align:null},"Error when downloading the MPS results. Check error logs for more information.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"All other error codes"),(0,l.mdx)("td",{parentName:"tr",align:null},"Server side failure. Reach out to support with the error code and log file.")))))}p.isMDXComponent=!0},14424:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/mps_cli_ui_single-dc99c169a7136f49d7659b8df65e2e39.png"}}]);