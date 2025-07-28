const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const span = document.createElement('span');
    span.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        li.remove();
    });

    taskDiv.append(span, removeBtn);
    li.append(taskDiv);
    taskList.append(li);

    taskInput.value = '';
});