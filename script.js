document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to add a task to the list
    function addTask(taskText, save = true) {
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create the list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Assign an onclick event to the remove button
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            removeTaskFromStorage(taskText);
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';

        // Save the task to Local Storage
        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    // Save task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Attach event listener to the add button
    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        addTask(taskText);
    });

    // Attach event listener for the 'Enter' key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            addTask(taskText);
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
