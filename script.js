document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Create the list item and the remove button
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add the event listener to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button and the list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for the add button
    addButton.addEventListener('click', addTask);

    // Event listener for the enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

