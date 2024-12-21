let box = document.getElementsByClassName("zero");
let empty = document.getElementById("add");


addButton=()=>{
  let newElement = document.createElement("input");
       newElement.setAttribute("type","text")
       newElement.className ="zero"
  // let list = document.createElement("li");
      newElement.innerHTML = box.value;
    // newElement.appendChild(list);
     empty.appendChild(newElement);
}
let box1 = document.getElementsByClassName("one");
let empty1 = document.getElementById("add1");
newButton=()=>{
  let newElement = document.createElement("input");
       newElement.setAttribute("type","text")
       newElement.className ="one"
  // let list = document.createElement("li");
      newElement.innerHTML = box1.value;
    // newElement.appendChild(list);
     empty1.appendChild(newElement);
  
}
let box2 = document.getElementsByClassName("two");
let empty2 = document.getElementById("add2");
nayaButton=()=>{
  let new2Element = document.createElement("input");
       new2Element.setAttribute("type","text")
       new2Element.className ="two"
  // let list = document.createElement("li");
      new2Element.innerHTML = box2.value;
    // newElement.appendChild(list);
     empty2.appendChild(new2Element);
     
}
let click=0;
let incre = document.getElementsByClassName("divOne")[0];
increseHeight=()=>{
  click++;
  const newHeight = 15+ click * 10;
if(click==0){
  incre.innerHTML=""
}else {
  incre.style.height = newHeight +"vh"
}
}
let click1=0;
let incre1 = document.getElementsByClassName("divtwo")[0];
bharHeight=()=>{
  click1++;
  const newHeight = 15+ click * 10;
if(click1==0){
  incre.innerHTML=""
}else {
  incre1.style.height = newHeight +"vh"
}
}
let click2=0;
let incre2 = document.getElementsByClassName("divthree")[0];
baraghar=()=>{
  click2++;
  const newHeight = 15+ click * 10;
if(click2==0){
  incre2.innerHTML=""
}else {
  incre2.style.height = newHeight +"vh"
}
}