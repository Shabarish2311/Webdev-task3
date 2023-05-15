document.addEventListener('DOMContentLoaded', function() {
    var addTaskForm = document.getElementById('add-task-form');
    var taskInput = document.getElementById('task-input');
    var incompleteTasksList = document.getElementById('incomplete-tasks');
    var completedTasksList = document.getElementById('completed-tasks');

    addTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var task = taskInput.value.trim();

        if (task !== '') {
            var taskItem = createTaskItem(task);
            incompleteTasksList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    function createTaskItem(task) {
        var taskItem = document.createElement('li');
        var taskText = document.createElement('span');
        taskText.textContent = task;
        var completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', completeTask);

        taskItem.appendChild(taskText);
        taskItem.appendChild(completeButton);
        return taskItem;
    }

    function completeTask() {
        var taskItem = this.parentNode;
        var taskText = taskItem.querySelector('span');
        taskText.classList.toggle('completed');
        var completeButton = taskItem.querySelector('button');
        if (completeButton.textContent === 'Complete') {
            completeButton.textContent = 'Incomplete';
            completedTasksList.appendChild(taskItem);
        } else {
            completeButton.textContent = 'Complete';
            incompleteTasksList.appendChild(taskItem);
        }
    }
});