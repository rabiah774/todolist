document.addEventListener("DOMContentLoaded", function() {
    const taskinput = document.getElementById("taskinput");
    const addtaskbtn = document.getElementById("addtaskbtn");
    const tasklist = document.getElementById("task-list");
     let tasks = [];
    addtaskbtn.addEventListener("click", function() {
        const tasktext = taskinput.value.trim();
        tasks.push(tasktext);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        const list = document.createElement("li");
        list.textContent = tasktext;
        tasklist.appendChild(list);
        taskinput.value = "";
       
    });
    const storedtasks = localStorage.getItem('tasks');
    if(storedtasks) {
        tasks = JSON.parse(storedtasks);
        tasks.forEach(element => {
            const list = document.createElement("li");
            list.textContent = element;
            tasklist.appendChild(list);
        });
            
        }

});