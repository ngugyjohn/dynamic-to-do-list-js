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
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);
        
        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listener to the add button
    addButton.addEventListener('click', addTask);

    // Attach event listener for the 'Enter' key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
