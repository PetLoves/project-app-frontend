(this["webpackJsonpproject-app-frontend"]=this["webpackJsonpproject-app-frontend"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/heartlogo.37d1b3f9.png"},19:function(e,a,t){e.exports=t.p+"static/media/battersea.9e3ad106.png"},20:function(e,a,t){e.exports=t.p+"static/media/bluecross.e9a6312a.png"},21:function(e,a,t){e.exports=t.p+"static/media/rspca.c1a081b4.png"},22:function(e,a,t){e.exports=t.p+"static/media/dogstrust.bdc1f02a.jpg"},23:function(e,a,t){e.exports=t.p+"static/media/dogowner.250b37a5.jpg"},24:function(e,a,t){e.exports=t.p+"static/media/vet.195dfb46.jpg"},26:function(e,a,t){e.exports=t(48)},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(17),s=t.n(c),r=t(1),o=t(2),i=t(4),m=t(3),d=t(5),p=t(18),u=t.n(p),h=t(7),f=t.n(h),g=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"top-section",id:"title"},l.a.createElement("div",{className:"container-fluid top"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},l.a.createElement("img",{className:"navbar-logo",src:f.a,alt:"PetLoves-logo"}),l.a.createElement("a",{className:"navbar-brand",href:""},"PetLoves"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:""},l.a.createElement("i",{className:"far fa-heart fa-2x",style:{marginRight:"10px"}}),l.a.createElement("i",{className:"far fa-user fa-2x "})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h1",{className:"big-heading"},"Find the love of your life."),l.a.createElement("a",{type:"button",className:"btn btn-outline-light btn-lg",href:"#features"},"Search Now")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("img",{className:"title-image",src:u.a,alt:"logo"})))))}}]),a}(l.a.Component),E=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).onClose=function(e){t.props.onClose&&t.props.onClose(e)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return console.log("propsshowing: ".concat(this.props.show)),this.props.show?l.a.createElement("div",{className:"petdetails",id:"petdetails"},l.a.createElement("h2",null,this.props.name),l.a.createElement("div",{className:"content"},this.props.children),l.a.createElement("div",{className:"actions "},l.a.createElement("i",{class:"fas fa-phone-alt fa-2x float-left"}),l.a.createElement("button",{className:"toggle-button",onClick:this.onClose},"close"),l.a.createElement("i",{class:"fas fa-heart fa-2x float-right"}))):null}}]),a}(l.a.Component),v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={show:!1},t.showModal=function(e){t.setState({show:!t.state.show})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props),console.log(this.props.pets),l.a.createElement("div",{className:"col-md-4 card"},l.a.createElement("div",{class:"card petdetail-card"},l.a.createElement("img",{class:"card-img-top",src:this.props.img,alt:"Card cap"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("h4",{class:"card-title"},this.props.name),l.a.createElement("p",{class:"card-text"},this.props.description),l.a.createElement("button",{class:"toggle-button",id:"centered-toggle-button",onClick:function(a){e.showModal(a)}},"Learn more"),l.a.createElement(E,{name:this.props.name,onClose:this.showModal,show:this.state.show},l.a.createElement("p",null,l.a.createElement("h6",null,"Color"),this.props.color),l.a.createElement("p",null,l.a.createElement("h6",null,"Age"),this.props.age),l.a.createElement("p",null,l.a.createElement("h6",null,"Sex"),this.props.sex)))))}}]),a}(l.a.Component),b=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row petCard",id:"petcard"},this.props.pets.map((function(e){return l.a.createElement(v,{name:e.name,description:e.description,img:e.image_path,color:e.color,sex:e.sex,age:e.age})})))}}]),a}(l.a.Component),N=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={hasGarden:0,hasChildren:0,activitylevel:1,companyNeeded:1,label:1},t.submitFunc=function(e){t.props.findPetFunc(t.state.hasGarden,t.state.hasChildren,t.state.activitylevel,t.state.companyNeeded)},t.hasGardenFunc=function(e){t.setState({hasGarden:e.target.value}),console.log("hasGarden: ".concat(e.target.value))},t.hasChildFunc=function(e){t.setState({hasChildren:e.target.value}),console.log("hasChildren: ".concat(e.target.value))},t.activityFunc=function(e){t.setState({activitylevel:5-e.target.value,label:e.target.value}),console.log("activitylevel: ".concat(5-e.target.value)),console.log("label: ".concat(e.target.value))},t.companyFunc=function(e){t.setState({companyNeeded:5-e.target.value}),console.log("companyNeeded: ".concat(e.target.value))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{class:"white-section",id:"features"},l.a.createElement("div",{class:"container-fluid"},l.a.createElement("form",{className:"form-style"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"formGroupExampleInput",className:"col-form-label-lg col-m-6 pt-0"},l.a.createElement("h5",null,"What's your name?")),l.a.createElement("div",{className:"col-m-6 move-input "},l.a.createElement("input",{type:"text",className:"form-control form-control-lg",id:"formGroupExampleInput",placeholder:"First Name"}))),l.a.createElement("fieldset",{className:"form-group"},l.a.createElement("div",{className:"row"},l.a.createElement("legend",{className:"col-form-label-lg col-m-6 pt-0"},l.a.createElement("h5",null,"Do you have a garden?")),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"hasGarden",id:"gridRadios",value:"1",onClick:this.hasGardenFunc}),l.a.createElement("label",{className:"form-check-label spaced",htmlFor:"gridRadios1"},"Yes")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"hasGarden",id:"gridRadios2",value:"0",onClick:this.hasGardenFunc}),l.a.createElement("label",{className:"form-check-label spaced",htmlFor:"gridRadios2"},"No"))))),l.a.createElement("fieldset",{className:"form-group"},l.a.createElement("div",{className:"row"},l.a.createElement("legend",{className:"col-form-label-lg col-m-6 pt-0"},l.a.createElement("h5",null,"Do you have children?")),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"hasChildren",id:"gridRadios1",value:"1",onClick:this.hasChildFunc}),l.a.createElement("label",{className:"form-check-label spaced",for:"gridRadios1"},"Yes")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"radio",name:"hasChildren",id:"gridRadios2",value:"0",onClick:this.hasChildFunc}),l.a.createElement("label",{className:"form-check-label spaced",for:"gridRadios2"},"No"))))),l.a.createElement("div",{className:"row"},l.a.createElement("label",{htmlFor:"activityLevel",className:"col-form-label-lg col-m-6 pt-0 "},l.a.createElement("h5",null,"What's your activity level?")),l.a.createElement("input",{type:"range",className:"custom-range spaced",min:"1",max:"4",step:"1",id:"activity",onChange:this.activityFunc}),l.a.createElement("div",{className:"rangeWrapper col-m-6 pt-0"},l.a.createElement("p",{className:"rangeLabel selected"},["Don't leave the house","Pottering in the garden","Daily walks","Running and hiking"][this.state.label-1]))),l.a.createElement("div",{className:"row"},l.a.createElement("label",{htmlFor:"companyNeeded",className:"col-form-label-lg col-m-6 pt-0"},l.a.createElement("h5",null,"How much time can you spend with me?")),l.a.createElement("input",{type:"range",className:"custom-range spaced",min:"1",max:"4",step:"1",id:"company",onChange:this.companyFunc}),l.a.createElement("div",{className:"rangeWrapper col-m-6 pt-0"},l.a.createElement("p",{className:"rangeLabel selected"},["Almost all the time","I leave the house for short spells","I might be out for long periods","I'm out most of the day and weekend"][this.state.companyNeeded-1]))),l.a.createElement("div",{className:"form-group row justify-content-md-center"},l.a.createElement("div",{className:"col-sm-10 text-center"},l.a.createElement("a",{className:"btn btn-dark btn-lg pet-button",onClick:this.submitFunc,href:"#petcard"},"Find your Pet Love"))))))}}]),a}(l.a.Component),y=t(19),j=t.n(y),w=t(20),k=t.n(w),C=t(21),O=t.n(C),x=t(22),F=t.n(x),G=t(23),P=t.n(G),I=t(24),L=t.n(I),R=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",{class:"info-section",id:"testimonials"},l.a.createElement("div",{id:"testimonal-carousel",class:"carousel slide","data-ride":"carousel"},l.a.createElement("div",{class:"carousel-inner"},l.a.createElement("div",{class:"carousel-item active"},l.a.createElement("h2",{class:"testimonial-text"},"PetLoves is helping us to find suitable owners for some of our neediest cats and dogs."),l.a.createElement("img",{class:"testimonal-img",src:L.a,alt:"dog-profile"}),l.a.createElement("em",null,"Alex, Battersea Dogs Home")),l.a.createElement("div",{class:"carousel-item"},l.a.createElement("h2",{class:"testimonial-text"},'"I had plenty of time on my hands, Churchill needed lots of company. We\'re a perfect match!"'),l.a.createElement("img",{class:"testimonal-img",src:P.a,alt:"dog-profile"}),l.a.createElement("em",null,"Peter, Brighton"))),l.a.createElement("a",{class:"carousel-control-prev",href:"#testimonal-carousel",role:"button","data-slide":"prev"},l.a.createElement("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{class:"sr-only"},"Previous")),l.a.createElement("a",{class:"carousel-control-next",href:"#testimonal-carousel",role:"button","data-slide":"next"},l.a.createElement("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{class:"sr-only"},"Next")))),l.a.createElement("section",{class:"info-section",id:"partners"},l.a.createElement("img",{class:"partner-logo",src:O.a,alt:"rspca-logo"}),l.a.createElement("img",{class:"partner-logo",src:F.a,alt:"dogstrust-logo"}),l.a.createElement("img",{class:"partner-logo",src:j.a,alt:"battersea-logo"}),l.a.createElement("img",{class:"partner-logo",src:k.a,alt:"bluecross-logo"})))}}]),a}(l.a.Component),A=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"white-section",id:"adoption"},l.a.createElement("h2",{className:"section-heading"},"Find out about what it means to have a pet."),l.a.createElement("p",null,"What does your animal need from you?"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"adoption-column col-lg-4"},l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",{className:"adoption-title"},"Dogs")),l.a.createElement("div",{className:"card-body",style:{backgroundColor:"#F5CD6A"}},l.a.createElement("i",{class:"fas fa-dog fa-10x"}),l.a.createElement("button",{type:"button",className:"btn btn-lg btn-dark btn-block animal-button"},"Find out more")))),l.a.createElement("div",{className:"adoption-column col-lg-4 col-md-6"},l.a.createElement("div",{className:"card text-center"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h3",{className:"adoption-title"},"Cats")),l.a.createElement("div",{className:"card-body",style:{backgroundColor:"#89C58F"}},l.a.createElement("i",{class:"fas fa-cat fa-10x"}),l.a.createElement("button",{type:"button",className:" btn btn-lg btn-dark btn-block animal-button"},"Find out more")))),l.a.createElement("div",{class:"adoption-column col-lg-4 col-md-6"},l.a.createElement("div",{class:"card text-center"},l.a.createElement("div",{class:"card-header"},l.a.createElement("h3",{class:"adoption-title"},"Birds")),l.a.createElement("div",{class:"card-body",style:{backgroundColor:"#F4A8B9"}},l.a.createElement("i",{class:"fas fa-dove fa-10x"}),l.a.createElement("button",{type:"button",class:"btn btn-lg btn-dark btn-block animal-button"},"Find out more")))))))}}]),a}(l.a.Component),S=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{class:"footer-section",id:"footer"},l.a.createElement("img",{class:"footer-logo",src:f.a,alt:"PetLoves-logo"}),l.a.createElement("span",{class:"footer-brand"},"PetLoves"),l.a.createElement("i",{class:"fab fa-twitter spaced"}),l.a.createElement("i",{class:"fab fa-facebook-f spaced"}),l.a.createElement("i",{class:"fab fa-instagram spaced"}),l.a.createElement("i",{class:"fas fa-envelope spaced"}),l.a.createElement("p",{class:"smaller"},"\xa9 Copyright 2020 PetLoves"))}}]),a}(l.a.Component),W=t(25),D=t.n(W),B=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={animals:[],showResult:!1,answers:{}},t.info=function(e){return l.a.createElement("div",null,e.name,": ",e.species)},t.findPet=function(e,a,n,l){var c=parseInt(e),s=parseInt(a),r=parseInt(n),o=parseInt(l),i={hasGarden:c,hasChildren:s,activitylevel:r,companyNeeded:o};t.setState({answers:i}),console.log(t.state.answers),D.a.get("https://srtcnv0e2e.execute-api.eu-west-2.amazonaws.com/dev/pets",{params:{hasGarden:c,hasChildren:s,activitylevel:r,companyNeeded:o}}).then((function(e){t.setState({animals:e.data.petloves}),console.log(JSON.stringify(t.state.animals))})).catch((function(e){console.error(e)}))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(N,{findPetFunc:this.findPet,hasGarden:this.state.answers.hasGarden,hasChildren:this.state}),l.a.createElement(b,{pets:this.state.animals}),l.a.createElement(R,null),l.a.createElement(A,null),l.a.createElement(S,{className:"footer-img"}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t.p+"static/media/petloveswhite.ec028aa5.png"}},[[26,1,2]]]);
//# sourceMappingURL=main.ec741a9c.chunk.js.map