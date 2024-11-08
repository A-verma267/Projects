let inputbox= document.getElementById("inputbox");
let listcon = document.getElementById("list-container");

function addcontent(){
    if(inputbox.value ===""){
        alert("You must to write something");
    }
    else{
        let li = document.createElement('LI');
        li.innerHTML=inputbox.value;
        listcon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
listcon.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
})
function savedata(){
    localStorage.setItem("data",listcon.innerHTML);
}
function showtask(){
    listcon.innerHTML=localStorage.getItem("data");
}
showtask();