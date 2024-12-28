/*Nathan:YanNanhao */
document.getElementById('addBtn').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.textContent = todoText;
        
        // Add a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        });
        
        // Add a complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        
        li.appendChild(removeBtn);
        li.appendChild(completeBtn);
        todoList.appendChild(li);
        
        // Clear the input field
        todoInput.value = '';
    }
});