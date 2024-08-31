// Initial Todos
let todos = {
    backlog: ['Task 1', 'Task 2'],
    todo: [ 'Task 3', 'Task 4', 'Task 5'],
    ongoing: ['Task 6', 'Task 7', 'Task 8'],
    done: ['Task 9', 'Task 10']
};

// Function to render the todo items in the appropriate lists
function renderTodos() {
    for (let status in todos) {
        let list = document.getElementById(`${status}-todos`);
        list.innerHTML = '';
        todos[status].forEach((todo, index) => {
            let li = document.createElement('li');
            li.innerHTML = `
                ${todo}
                <span>
                    ${getLeftButton(status, index)}
                    ${getRightButton(status, index)}
                </span>
            `;
            list.appendChild(li);
        });
    }
}

// Function to generate the left button (for moving items to the previous status)
function getLeftButton(status, index) {
    if (status === 'backlog') return ''; // No left button for 'backlog'
    let targetStatus = status === 'todo' ? 'backlog' : status === 'ongoing' ? 'todo' : 'ongoing';
    return `<button class="nav-btn-left" onclick="moveItem('${status}', '${targetStatus}', ${index})">←</button>`;
}

// Function to generate the right button (for moving items to the next status)
function getRightButton(status, index) {
    if (status === 'done') return ''; // No right button for 'done'
    let targetStatus = status === 'backlog' ? 'todo' : status === 'todo' ? 'ongoing' : 'done';
    return `<button class="nav-btn-right" onclick="moveItem('${status}', '${targetStatus}', ${index})">→</button>`;
}

// Function to move an item from one status to another
function moveItem(from, to, index) {
    let item = todos[from].splice(index, 1)[0]; // Remove item from the 'from' status
    todos[to].push(item); // Add item to the 'to' status
    renderTodos(); // Re-render the lists
}

// Initial call to render the todos once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderTodos);
