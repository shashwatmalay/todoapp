const inputbox=document.getElementById("input-box");
const tasklist=document.getElementById("task-list");

function addTask(){
  if(inputbox.value===''){
    alert("you must write something");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    tasklist.appendChild(li);
    let span=document.createElement("span");
    span.classList.add("span1");
    span.innerHTML="&#10006;";
    li.appendChild(span);
  }
  inputbox.value='';
}

tasklist.addEventListener("click",function(e){
      if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
      
      }
      else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
      }
    })



 