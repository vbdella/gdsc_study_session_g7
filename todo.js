// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const uniqueTaskList = document.getElementById('uniqueTaskList');

// Function to add a unique task
function addUniqueTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    // Create a new unique list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeUniqueTask(this)">Complete</button>
    `;

    // Add the new list item to the unique task list
    uniqueTaskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Function to remove a unique task
function removeUniqueTask(button) {
  const listItem = button.parentElement;
  uniqueTaskList.removeChild(listItem);
}
