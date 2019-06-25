const clear=document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list=document.getElementById("list");

// Show todays date
const options = {year:"numeric", weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);



function todoList() {
    var todoList = document.getElementById('input').value;
    
     
    console.log(todoList);
}



