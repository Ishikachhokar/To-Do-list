let currentTitle = ''; 

//For "Add Title" button
document.getElementById('addTitle').addEventListener('click', function() {
    let titleInput = document.getElementById('groupTitle'); 

    if (titleInput.value.trim() !== "") {
        currentTitle = titleInput.value.trim(); 

        let taskGroupsContainer = document.getElementById('taskGroups');
        let existingGroup = document.getElementById(currentTitle);

        // If group does not exist
        if (!existingGroup) {
            let group = document.createElement('div'); 
            group.id = currentTitle;
            let title = document.createElement('h3'); 
            title.textContent = currentTitle;
            group.appendChild(title);

            let taskList = document.createElement('ul');
            group.appendChild(taskList);

            taskGroupsContainer.appendChild(group);
        }

        titleInput.value = "";
    } else {
        alert("Please enter a valid title!");
    }
});

// For "Add Task" button
document.getElementById('addTask').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput'); 

    if (taskInput.value.trim() !== "" && currentTitle !== '') {
        let group = document.getElementById(currentTitle); 
        let li = document.createElement('li');
        li.textContent = taskInput.value; 

        group.querySelector('ul').appendChild(li);

        taskInput.value = "";
    } else if (currentTitle === '') {
        alert("Please add a group title first!");
    } else {
        alert("Please enter a task!");
    }
});
