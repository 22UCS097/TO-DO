let input=document.getElementById("input");
let list=document.getElementById("list");

function clickMe(){
if(input.value==""){
    alert(" plz enter something");
}
else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    list.appendChild(li);

    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);


}
input.value="";
saveData();

}

list.addEventListener("click",function(event){
    if(event.target.tagName==='LI'){
        event.target.classList.toggle("checked")
        saveData();
    }
    else if(event.target.tagName==='SPAN'){
        event.target.parentElement.remove();
        saveData();

    }

},false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showData(){
    list.innerHTML=localStorage.getItem("data");
}
showData();
