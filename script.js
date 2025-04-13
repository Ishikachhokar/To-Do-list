let currentTitle = '';
const taskData = {};

const get = id => document.getElementById(id);
const titleInput = get('groupTitle');
const taskInput = get('taskInput');
const taskGroups = get('taskGroups');

get('addTitle').addEventListener('click', () => {
    const title = titleInput.value.trim();
    if (!title) return alert("Enter a valid title!");

    currentTitle = title;

    if (!taskData[title]) {
        taskData[title] = [];

        const group = document.createElement('div');
        group.id = title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;

        const ul = document.createElement('ul');
        group.appendChild(titleElement);
        group.appendChild(ul);
        taskGroups.appendChild(group);
    }

    titleInput.value = '';
});

get('addTask').addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (!currentTitle) return alert("Add a title first!");
    if (!task) return alert("Enter a task!");

    taskData[currentTitle].push(task);

    const li = document.createElement('li');
    li.textContent = task;

    // Create Edit and Delete buttons
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'editBtn';
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteBtn';

    // Append buttons to the task
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    get(currentTitle).querySelector('ul').appendChild(li);
    taskInput.value = '';

    // Edit button functionality
    editButton.addEventListener('click', () => {
        const newTask = prompt('Edit task:', task);
        if (newTask !== null && newTask.trim() !== '') {
            li.textContent = newTask;
            li.appendChild(editButton);
            li.appendChild(deleteButton);  // Re-append the buttons
        }
    });

    // Delete button functionality
    deleteButton.addEventListener('click', () => {
        taskData[currentTitle] = taskData[currentTitle].filter(t => t !== task); // Remove from taskData array
        li.remove();  // Remove task from DOM
    });
});
