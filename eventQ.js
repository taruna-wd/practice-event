
//  Write a JavaScript function that listens for a double click on an element and performs a specific action.

let dblBtn = document.querySelector("button");
dblBtn.addEventListener("dblclick", function(){
  console.log(" i am clicked two times")
}) 


//  Write a JavaScript program that adds a keydown event listener to a text input to detect when the "Enter key" is pressed.

let key = document.querySelector("input");
key.addEventListener("keydown", function(event){
  if(event.key === 'Enter'){
    console.log(' press enter');
  }else {
    console.log(event. code);

  }
  
})

// Write a JavaScript program to create a progress bar that updates its width based on task completion.


function updateProgress(progressPercentage){
  let progress = document.getElementById("progress");
  progress.style.width = `${progressPercentage}%`;

}
 progress.addEventListener("click", function(){
  updateProgress(40);

 })

  // Write a JavaScript program to implement a toggle switch that changes its state when clicked.

  
