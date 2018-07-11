// {
//   var xhr =new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange =function(){
//     if(xhr.readystate ===4 && xhr.status =="200")
//     {
//       callback(xhr.responseText);
//     }
//   }
//   xhr.send(null);
// }
// getfile("surya.json",function (text){
//   var data = JSON.parse(text);
//   console.log(data);
// })
function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      } else {
        reject(new Error('error'));
      }
    })
  })
}
var newFile=loadJSON("surya.json");
newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  Acheivements(data.Acheivements);
})
var childTwo=document.querySelector(".childtwo");
function career(careerobj){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="career objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=careerobj.info;
  childTwo.appendChild(careerP);
}
function education(edu){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Education qualifications";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  for (var i = 0; i <edu.length; i++) {
    eduH3=document.createElement("h3");
    eduH3.textContent=edu[i].degree;
    childTwo.appendChild(eduH3);
    var eduU1=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduU1.appendChild(eduLi);
    childTwo.appendChild(eduU1);
    var eduU2=document.createElement("ul");
    var eduli1=document.createElement("li");
    eduli1.textContent=edu[i].data;
    eduU2.appendChild(eduli1);
    childTwo.appendChild(eduU2);
  }
}
function skills(skillInfo){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Technical skills";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var skillTable=document.createElement("table");
  childTwo.appendChild(skillTable);
  var tableData="";
  for(var i=0; i<skillInfo.length; i++){
   tableData+=" <tr><td>"+skillInfo[i].title+" </td><td>"+skillInfo[i].info+"</td></tr>"
  }
  skillTable.innerHTML=tableData;
}
function Acheivements(ach){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Acheivements";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var P=document.createElement("p");
  P.textContent=ach.acheiveData;
  childTwo.appendChild(P);
  }
