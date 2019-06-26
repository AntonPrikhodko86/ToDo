
var newTask = document.getElementById('new-task');
var addTaskBtn = document.getElementById('addTask');
var toDoUl = document.getElementById('todo-list');
var completeUl =  document.querySelector(".complete-list ul");
const dateElement = document.getElementById('#date');

// Show todays date and year
var options = {year:"numeric", weekday : "long", month:"short", day:"numeric"};
var today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


//CREATING THE ACTUAL TASK LIST ITEM
var createNewTask = function(task){
    console.log("Creating task...");
    
    //Set up new list item
    var listItem = document.createElement("li"); //<li>
    var checkBox = document.createElement("input"); //checkbox
    var label = document.createElement("label"); // <label>
    
    
    //PULL THE INPUTED TEXT INTO LABEL
    label.innerText = task;
    
    //ADD PROPERTIES
    checkBox.type = "checkbox";
    
    //ADD ITEMS TO THE LI
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    //EVERYTHING PUT TOGETHER
    return listItem;  
    
  };

//ADD THE NEW TASK INTO ACTUAL INCOMPLETE LIST

addTaskBtn.addEventListener("click", addTask);

 
var addTask = function(){
    console.log("Adding task...");
    //FOR CLARITY, GRAB THE INPUTTED TEXT AND STORE IT IN A VAR
    var listItem = createNewTask(newTask.value);
    //ADD THE NEW LIST ITEM TO LIST
    toDoUl.appendChild(listItem); 
    //CLEAR THE INPUT
    newTask.value="";
    
    //BIND THE NEW LIST ITEM TO THE INCOMPLETE LIST
    bindIncompleteItems(listItem, completeTask);
  
  };
  
  //https://codepen.io/barkins/pen/aEriL