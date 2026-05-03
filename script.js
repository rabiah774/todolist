document.addEventListener("DOMContentLoaded", function() {
    const taskinput = document.querySelector(".taskinput");
    const addtaskbtn = document.querySelector(".addtaskbtn");
    const tasklist = document.querySelector(".task-list");
     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

     tasks.forEach((task) => rendertask(task));

    addtaskbtn.addEventListener("click", function() {
            const tasktext = taskinput.value.trim();
            if(tasktext === "") return;

        const newtask = {
            id: Date.now(),
            text: tasktext,
            completed: false
        }
        tasks.push(newtask);
          savetask();
          rendertask(newtask);
          taskinput.value = "";
          console.log(tasks);
       
    });
    function  rendertask(task) {
        const list = document.createElement("li");
        list.setAttribute("data-id", task.id);
        if(task.completed) {
            list.classList.add("completed");
        }
        list.innerHTML = `<span class="task-text">${task.text}</span>
         <button class="completetaskbtn">${task.completed ? "Completed" : "Complete"}</button>
        <button class="deletetaskbtn">Delete</button>
        `;
        const completetaskbtn = list.querySelector(".completetaskbtn");
        const deletetaskbtn = list.querySelector(".deletetaskbtn");
        completetaskbtn.addEventListener("click", (e) => {
            e.stopPropagation();
            task.completed = !task.completed;
            savetask();
            list.classList.toggle("completed");
            completetaskbtn.textContent = task.completed ? "Completed" : "Complete";
        });
        deletetaskbtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            list.remove();
            savetask();
        });
        tasklist.appendChild(list);
    }
    function savetask() {
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
       
       
        const navlinks = document.querySelectorAll(".nav-link");
        const tabs = document.querySelectorAll(".tab");
   navlinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        // sidebar active color remove from all
        navlinks.forEach(item => {
            item.classList.remove("active-link");
        });

        // clicked one active
        this.classList.add("active-link");

        const targetTab = this.dataset.tab.toLowerCase();

        tabs.forEach(tab => {
            tab.classList.remove("active");

            if (tab.id.toLowerCase() === targetTab) {
                tab.classList.add("active");
            }
        });
    });
});

});