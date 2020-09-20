(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":"123","name":"Arron Gibson","department":"Software Development","email":"arron.gibson@example.com"},{"id":"124","name":"Gabriele Finnesand","department":"Finance","email":"gabriele.finnesand@example.com"},{"id":"125","name":"Jansje Kruizenga","department":"Human Resource","email":"jansje.kruizenga@example.com"},{"id":"234","name":"Annabel Hauck","department":"Human Resource","email":"tealsquirrel68@gmail.com"},{"id":"235","name":"Jeffry Rodriguez","department":"Human Resource","email":"Jeffry.Rodriguez@rylee.org"},{"id":"236","name":"Ashleigh Ankunding","department":"Legal","email":"purpleturtle24@gmail.com"},{"id":"237","name":"Bernardo Bogan","department":"Software Development","email":"Bernardo.Bogan@elvis.info"},{"id":"238","name":"Kaden Schmitt","department":"Finance","email":"turquoisegiraffe20@gmail.com"},{"id":"239","name":"Angie Spencer","department":"Human Resource","email":"Angie.Spencer@tomasa.biz"},{"id":"240","name":"Jeffry Rodriguez","department":"Finance","email":"Jeffry.Rodriguez2@rylee.org"},{"id":"993","name":"Melissa Miller","department":"Travel","email":"skybluefrog42@gmail.com"},{"id":"994","name":"Adolph Fritsch","department":"Finance","email":"Adolph.Fritsch@florencio.name"},{"id":"995","name":"Twila Ward","department":"Software Development","email":"Twila.Ward@kaelyn.info"},{"id":"996","name":"Tessie Gulgowski","department":"Finance","email":"Tessie.Gulgowski@glenna.org"},{"id":"997","name":"Carol Steuber","department":"Finance","email":"Carol.Steuber@edgardo.name"},{"id":"998","name":"Hattie Dietrich","department":"Human Resource","email":"purplesquirrel49@gmail.com"},{"id":"1997","name":"Horace Fisher","department":"Finance","email":"mintgreenfrog27@gmail.com"},{"id":"99","name":"Geraldine Adams","department":"Legal","email":"lavenderrabbit90@gmail.com"},{"id":"999","name":"Trycia Schuppe","department":"Travel","email":"purplerabbit94@gmail.com"},{"id":"100","name":"Eden Rau","department":"Human Resource","email":"Eden.Rau@claudine.com"}]')},,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),m=t(3),l=t.n(m),i=(t(15),t(16),t(4)),o=t(5),c=t(9),s=t(7);var u=function(e){var a=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",{className:a},e.children)};var d=function(e){return r.a.createElement("div",{className:"container",style:e.style},e.children)};var p=function(){return r.a.createElement("footer",{className:"bottom"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"https://github.com/nitinmuk/",target:"_blank",rel:"noopener noreferrer"}," Nitin Mukesh")))},f=(t(17),function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 text-center"},"Employee Directory"),r.a.createElement("p",{className:"lead text-center"},"An app to view, search and sort employees"))))});var h=function(e){return r.a.createElement("div",{className:"row"},e.children)};t(18);var y=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"employee"},"Employee Name:"),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"employee",list:"employees",type:"text",className:"form-control",placeholder:"Type in a employee name to search...",id:"employee"}),r.a.createElement("datalist",{id:"employees"},e.employees.map((function(e){return r.a.createElement("option",{value:e.name,key:e.id})}))),r.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},"Search")))};t(19);var g=function(e){return r.a.createElement("thead",null,r.a.createElement("tr",null,function(e){var a=[];return e.colNames.forEach((function(t){var n=r.a.createElement("th",{className:"header",onClick:e.handleEmployeeSort,key:t},function(e){switch(e){case"id":return"Employee ID";case"name":return"Name";case"department":return"Department";case"email":return"Email ID";default:return e}}(t));a.push(n)})),a}(e)))};t(20);var E=function(e){return r.a.createElement("tbody",null,e.employees.map((function(e){return r.a.createElement("tr",{className:"tableRow",key:e.id},function(e){var a=[];return Object.keys(e).forEach((function(t){return a.push(r.a.createElement("td",{key:t},e[t]))})),a}(e))})))},v=t(8);var b=function(e){return r.a.createElement(v.a,{responsive:!0},r.a.createElement(g,{colNames:e.colNames,handleEmployeeSort:e.handleEmployeeSort}),r.a.createElement(E,{employees:e.employees}))},N=t(1),S=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),m=0;m<n;m++)r[m]=arguments[m];return(e=a.call.apply(a,[this].concat(r))).state={employees:N,searchedName:""},e.handleEmployeeSort=function(a){a.preventDefault();var t,n=e.state.employees;switch(a.target.innerText){case"Name":t=function(a,t){return e.compareTwoStrings(a.name,t.name)};break;case"Department":t=function(a,t){return e.compareTwoStrings(a.department,t.department)};break;case"Email ID":t=function(a,t){return e.compareTwoStrings(a.email,t.email)};break;case"Employee ID":t=function(e,a){return parseInt(e.id)-parseInt(a.id)};break;default:console.log("Not Supported")}n.sort(t),e.setState({employees:n})},e.handleInputChange=function(a){e.setState({searchedName:a.target.value})},e.handleFormSubmit=function(a){if(a.preventDefault(),e.state.searchedName&&e.state.searchedName.trim().length){var t=N.filter((function(a){return a.name.includes(e.state.searchedName)}));e.setState({employees:t})}else e.setState({employees:N})},e}return Object(o.a)(t,[{key:"compareTwoStrings",value:function(e,a){return e===a?0:e<a?-1:1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(d,{style:{marginTop:30}},r.a.createElement(h,null,r.a.createElement(u,{size:"md-12"},r.a.createElement(y,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,employees:N.map((function(e){return{name:e.name,id:e.id}}))}))),r.a.createElement(h,null,r.a.createElement(u,{size:"md-12"},r.a.createElement(b,{employees:this.state.employees,handleEmployeeSort:this.handleEmployeeSort,colNames:Object.keys(N[0])})))),r.a.createElement(p,null))}}]),t}(r.a.Component);l.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8ce96620.chunk.js.map