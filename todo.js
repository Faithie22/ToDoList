let btn = document.querySelector("#push");
let input = document.querySelector("#newtask input");
let tasksCon = document.querySelector("#tasks");
btn.addEventListener("click", newTask);
function newTask() {
	if (input.value == 0){
		alert("Please enter a task");
	} else {
         tasksCon.innerHTML += `
         <div class="tasks">
            <span id="taskname">
               ${input.value}
            </span>
            <button class="delete">
               <i class="far fa-trash-alt"></i>
            </button>
         </div>
         `;

         const current = document.querySelectorAll(".delete");
         for (let i = 0; i < current.length; i++) {
         	current[i].onclick =function() {
         		this.parentNode.remove();
         	}
         }
	}

}