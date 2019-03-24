(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){e.exports=a(373)},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},366:function(e,t,a){},367:function(e,t,a){},373:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),r=a.n(c),o=(a(216),a(25)),i=a(26),s=a(28),m=a(27),u=a(29),h=a(137),p=a(30),g=a(134),d=a(14),E=(a(217),function(){return l.a.createElement("nav",null,l.a.createElement("div",null,l.a.createElement("span",{className:"theme-color",style:{fontWeight:"bold"}},"C2C"),"\xa0\xa0\xa0",l.a.createElement("span",{style:{color:"#fff"}},"Projects")))}),k=(a(218),a(58)),b=a.n(k),v={BASE_URL:"https://guarded-reef-95895.herokuapp.com"},f=v.BASE_URL,j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",statement:"",solution:"",track:"",challenge:"",techStack:"",futureWork:"",gitLink:"",members:"",projImage:"",openSnackbar:!1,msgSnackbar:"",vertical:"top",horizontal:"center"},a.handleChange=function(e){return function(t){if("projImg"===e&&t.target.files){var n=a.file.files[0];a.setState({projImage:n}),document.getElementById("val").textContent=t.target.value.replace(/C:\\fakepath\\/i,"")}else a.setState(Object(g.a)({},e,t.target.value))}},a.imgBtnClicked=function(){var e=document.getElementById("proj-img"),t=new Event("click");e.dispatchEvent(t),a.handleChange("projImg"),console.log(t)},a.onClose=function(){a.setState({openSnackbar:!1})},a.submit=function(e){e.preventDefault();var t=new FormData,n=a.state,l=n.name,c=n.statement,r=n.solution,o=n.challenge,i=n.track,s=n.techStack,m=n.futureWork,u=n.gitLink,h=n.members,p=n.projImage;t.append("title",l),t.append("problem",c),t.append("track",i),t.append("solution",r),t.append("challenges",o),t.append("techStack",s),t.append("future",m),t.append("github",u),t.append("team",h),t.append("image",p),b.a.post("".concat(f,"/addProject"),t).then(function(e){var t=e.data;console.log(t),!1===t.success?a.setState({openSnackbar:!0,msgSnackbar:t.message}):t.success&&a.setState({openSnackbar:!0,msgSnackbar:"Congratulations! You have submitted successfully!"})}).catch(function(e){console.log(e),a.setState({openSnackbar:!0,msgSnackbar:"Please check your internet connection and try again!"})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.vertical,n=t.horizontal;return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(d.e,{container:!0},l.a.createElement(d.e,{item:!0,lg:4,md:5,xs:12},l.a.createElement("form",{onSubmit:this.submit,style:{marginLeft:"3rem"}},l.a.createElement(d.g,{id:"standard-name",label:"Project Name",multiline:!0,spellcheck:!1,value:this.state.name,onChange:this.handleChange("name"),margin:"normal"}),l.a.createElement("div",{className:"single-line"},l.a.createElement(d.g,{label:"Problem Statement",multiline:!0,spellcheck:!1,value:this.state.statement,onChange:this.handleChange("statement"),style:{width:"75%"},margin:"normal"}),l.a.createElement("select",{className:"track",onChange:this.handleChange("track")},l.a.createElement("option",{value:""},"Select Track"),l.a.createElement("option",{value:"construction"},"Construction"),l.a.createElement("option",{value:"defence"},"Defence"),l.a.createElement("option",{value:"devops"},"DevOps"),l.a.createElement("option",{value:"health"},"Health & Fitness"),l.a.createElement("option",{value:"data"},"Data Integrity"),l.a.createElement("option",{value:"education"},"Education"),l.a.createElement("option",{value:"travel"},"Recreation & Travel"),l.a.createElement("option",{value:"disability"},"People with Disabilities"))),l.a.createElement(d.g,{label:"Solution",multiline:!0,spellcheck:!1,value:this.state.solution,onChange:this.handleChange("solution"),margin:"normal"}),l.a.createElement(d.g,{label:"Challenge Faced",multiline:!0,spellcheck:!1,value:this.state.challenge,onChange:this.handleChange("challenge"),margin:"normal"}),l.a.createElement(d.g,{label:"Technical Stack",multiline:!0,spellcheck:!1,value:this.state.techStack,onChange:this.handleChange("techStack"),margin:"normal"}),l.a.createElement(d.g,{label:"Future Work",multiline:!0,spellcheck:!1,value:this.state.futureWork,onChange:this.handleChange("futureWork"),margin:"normal"}),l.a.createElement(d.g,{label:"Github Link",multiline:!0,spellcheck:!1,value:this.state.gitLink,onChange:this.handleChange("gitLink"),margin:"normal"}),l.a.createElement(d.g,{label:"Team Members",multiline:!0,placeholder:"(Member1,Member2,...)",spellcheck:!1,value:this.state.members,onChange:this.handleChange("members"),margin:"normal"}),l.a.createElement("div",{className:"proj-img"},l.a.createElement("input",{type:"file",id:"proj-img",ref:function(t){e.file=t},multiple:"false",onChange:this.handleChange("projImg")}),l.a.createElement("span",{id:"val"},"Select Project Image")),l.a.createElement("button",{type:"submit",className:"submit-btn"},"SUBMIT"))),l.a.createElement(d.e,{item:!0,md:1,lg:1}),l.a.createElement(d.e,{item:!0,xs:12,md:6,lg:7,className:"right-text"},l.a.createElement("div",null,l.a.createElement("h1",{className:"color-white"},"Submit & Take a look at all the",l.a.createElement("br",null)," other projects being developed here",l.a.createElement("br",null)," at Code2Create\u201919")),l.a.createElement("div",null,l.a.createElement("button",{className:"view-btn",onClick:function(){return e.props.history.push("/projects")}},"VIEW")))),l.a.createElement(d.f,{anchorOrigin:{vertical:a,horizontal:n},open:this.state.openSnackbar,message:this.state.msgSnackbar,autoHideDuration:4e3,onClose:this.onClose}))}}]),t}(n.Component),C=a(136),S=a.n(C),y=function(e){return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(d.e,{container:!0},l.a.createElement(d.e,{item:!0,md:6,xs:12},l.a.createElement("h4",null,"Problem Statement"),l.a.createElement("p",null,e.problem),l.a.createElement("h4",null,"Solution"),l.a.createElement("p",null,e.solution),l.a.createElement("h4",null,"Challenge Faced"),l.a.createElement("p",null,e.challenges)),l.a.createElement(d.e,{item:!0,md:6,xs:12},l.a.createElement("h4",null,"Technical Stack"),l.a.createElement("p",null,e.techStack),l.a.createElement("h4",null,"Future Work"),l.a.createElement("p",null,e.futureWork),l.a.createElement("h4",null,"Github Link"),l.a.createElement("p",null,e.github),l.a.createElement("h4",null,"Team"),l.a.createElement("p",null,e.team))))},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={projects:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.projects,t=[];console.log(e.length);for(var a=0;a<e.length;a++){var n=e[a],c=l.a.createElement(d.b,{className:"project-item"},l.a.createElement(d.d,{className:"project-name",expandIcon:l.a.createElement(S.a,null)},l.a.createElement("p",null,n.title)),l.a.createElement(d.c,null,l.a.createElement(y,{problem:n.problem,solution:n.solution,challenges:n.challenges,techStack:n.techStack,gitLink:n.github,team:n.team,futureWork:n.future})));t.push(c)}return console.log(t.length),l.a.createElement("div",{className:""},t)}}]),t}(n.Component),w=(a(366),v.BASE_URL),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).getProjects=function(t){e.setState({loading:!0}),b.a.post("".concat(w,"/getProject"),{track:t}).then(function(t){console.log("hi");var a=t.data;console.log(a),e.setState({projects:a.data,loading:!1})}).catch(function(e){console.log(e)})},e.handleTrack=function(t){return function(a){e.getProjects(t),e.setState({track:t}),console.log(a.target.classList)}},e.state={track:"construction",projects:"",loading:!1},e.getProjects("construction"),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.track,a=e.projects,n=e.loading;return l.a.createElement("div",{style:{padding:"2rem"}},l.a.createElement(E,null),l.a.createElement(d.e,{container:!0},l.a.createElement(d.e,{item:!0,lg:3,md:3,xs:12},l.a.createElement("div",{className:"tracks"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:this.handleTrack("construction")},"Construction"),l.a.createElement("li",{onClick:this.handleTrack("defence")},"Defence"),l.a.createElement("li",{onClick:this.handleTrack("devops")},"DevOps"),l.a.createElement("li",{onClick:this.handleTrack("health")},"Health & Fitness"),l.a.createElement("li",{onClick:this.handleTrack("data")},"Data Integrity"),l.a.createElement("li",{onClick:this.handleTrack("education")},"Education"),l.a.createElement("li",{onClick:this.handleTrack("travel")},"Recreation & Travel"),l.a.createElement("li",{onClick:this.handleTrack("disabilities")},"People with Disabilities")))),l.a.createElement(d.e,{item:!0,lg:8,md:8,xs:12,className:"project-content"},n&&l.a.createElement("div",{style:{textAlign:"center"},className:"loader-div"},l.a.createElement(d.a,{className:"theme-color"})),!n&&a&&a.length>0?l.a.createElement(O,{track:t,projects:a}):!n&&l.a.createElement("p",{className:"no-submissions-p"},"No Submissions on this track yet!!"))))}}]),t}(n.Component),T=(a(367),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/",component:j,exact:!0}),l.a.createElement(p.a,{path:"/projects",component:N,exact:!0})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[211,1,2]]]);
//# sourceMappingURL=main.edf8dfb2.chunk.js.map