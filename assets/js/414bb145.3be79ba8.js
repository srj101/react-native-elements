(self.webpackChunk=self.webpackChunk||[]).push([[91567],{54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>k});var a=n(87462),l=n(67294),o=n(91262),r=n(18421),i=n(77356),p=n(41652),c=n(24309),d=n(16042),s=n(20346),m=n(30650);const k=function(t){var e=t.params,n=t.containerStyle,k=void 0===n?{}:n;return l.createElement(o.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(s.X9.Provider,null,l.createElement(s.PK,{initialMetrics:m.o},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},k)},l.createElement(r.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:i.Z}))),l.createElement(p.Z,{msg:e.errorProps.msg,isPopup:!0}),l.createElement(c.Z,e.knobProps),l.createElement(p.Z,e.errorProps),l.createElement(d.E,e.actions)))}))}},72035:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>u,default:()=>v,frontMatter:()=>k,metadata:()=>g,toc:()=>h});var a=n(87462),l=n(63366),o=n(67294),r=n(3905),i=(n(9877),n(72360),n(19617)),p=n(54236),c=n(40318),d=n(62290);const s=function(){var t=(0,c.Z)({componentName:"CheckBox",props:{center:{type:d.n.Boolean,value:!1,description:"Aligns checkbox to center (optional)"},right:{type:d.n.Boolean,value:!1,description:"Aligns checkbox to right (optional)"},checked:{type:d.n.Boolean,value:!1,stateful:!0,description:"Flag for checking the icon (required)"},checkedColor:{type:d.n.String,value:"#0F0",description:"Default checked color (optional)"},checkedIcon:{type:d.n.Object,value:"",description:"string OR React Native Component\t"},checkedTitle:{type:d.n.String,value:"Great!",description:"Specify a custom checked message (optional)"},Component:{type:d.n.ReactNode,value:null,description:"React Native Component"},containerStyle:{type:d.n.Object,value:'{width: "75%"}',description:"Style of main container (optional)"},fontFamily:{type:d.n.String,value:null,description:"Specify different font family"},iconRight:{type:d.n.Boolean,value:!1,description:"Moves icon to right of text (optional)"},iconType:{type:d.n.String,value:null,description:"type of icon set"},onIconPress:{type:d.n.Function,value:"() => setChecked(!checked)",propHook:{what:"!checked",into:"checked"},description:"onPress function for checkbox (required)"},onLongIconPress:{type:d.n.Function,value:'() => console.log("onLongIconPress()")',description:"onLongPress function for checkbox (optional)"},onLongPress:{type:d.n.Function,value:'() => console.log("onLongPress()")',description:"onLongPress function for checkbox (optional)"},onPress:{type:d.n.Function,value:'() => console.log("onPress()")',description:"onPress function for container (optional)"},size:{type:d.n.Number,value:30,description:"Size of the checkbox"},textStyle:{type:d.n.Object,value:"{}",description:"Style of text (optional)"},title:{type:d.n.Object,value:'"Check for Awesomeness"',description:"Title of checkbox"},titleProps:{type:d.n.Object,value:"{}",description:"Additional props for the title Text component (optional)"},uncheckedColor:{type:d.n.String,value:"#F00",description:"Default unchecked color (optional)"},uncheckedIcon:{type:d.n.Object,value:null,description:"string OR React Native Component"}},scope:{CheckBox:i.CheckBox},imports:{"@rneui/base":{named:["CheckBox"]}}});return o.createElement(o.Fragment,null,o.createElement(p.Z,{params:t}))};var m=["components"],k={id:"checkbox",title:"CheckBox"},u=void 0,g={unversionedId:"components/checkbox",id:"components/checkbox",title:"CheckBox",description:"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.",source:"@site/docs/components/CheckBox.mdx",sourceDirName:"components",slug:"/components/checkbox",permalink:"/docs/next/components/checkbox",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/CheckBox.mdx",tags:[],version:"current",frontMatter:{id:"checkbox",title:"CheckBox"},sidebar:"docs",previous:{title:"Card.Title",permalink:"/docs/next/components/card_title"},next:{title:"Chip",permalink:"/docs/next/components/chip"}},N={},h=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],y={toc:h};function v(t){var e=t.components,n=(0,l.Z)(t,m);return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CheckBoxes allow users to complete tasks that involve making choices such as selecting options, or switching settings - On or Off.\nIt provides a clear visual of either a true or false choice."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CheckBox } from "@rneui/themed";\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Includes all ",(0,r.kt)("a",{parentName:"p",href:"checkboxicon#props"},"CheckBoxIcon"),", ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Component")),(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify React Native component for main button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"center")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Aligns checkbox to center.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"checkedTitle")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a custom checked message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of main container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Disables user interaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabledStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of the checkbox container when disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabledTitleStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of the title when disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconRight")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Moves icon to right of text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"right")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Aligns checkbox to right.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"textStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style of text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ReactElement<{}, string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor<any>>")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Title of checkbox.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"titleProps")),(0,r.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional props for the title Text component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style for the wrapper of checkbox."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(s,{mdxType:"Play"}))}v.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);