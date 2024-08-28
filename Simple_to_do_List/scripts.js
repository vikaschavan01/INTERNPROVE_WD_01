document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteButton);

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
