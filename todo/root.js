// const input=document.querySelector('input'),
//     button=document.querySelector('button'),
//     listparent=document.querySelector('ul');

// GET ALL TASK WHEN THE PAGE LOADED
const getTasks = () => {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        // create a li
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + ' '));
        
        taskList.appendChild(li);

        // create a delete button
        let deletebutton = document.createElement('a');
        deletebutton.setAttribute('href', '#');
        deletebutton.setAttribute('class', 'button danger');
        deletebutton.setAttribute('id', '');
        deletebutton.innerHTML = "Delete Task";
        li.appendChild(deletebutton);
    })
}


document.addEventListener('DOMContentLoaded', getTasks)


// define UI element
const newTask = document.querySelector('#newTask'),
    addTaskButton = document.querySelector('#addTask'),
    taskList = document.querySelector('#tasks'),
    clearButton = document.querySelector('#clearTask'),
    searchTaskInput = document.querySelector('#searchTask'),
    error = document.querySelector('#error');





// define function
// ADD TASK
const addTask = () => {
    if (newTask === '') {
        error.innerHTML = "Don't forget to add your task, you will rock it 😎";
    } else {
        // create a li
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(newTask.value + ' '));
        
        taskList.appendChild(li);

        // create a delete button
        let deletebutton = document.createElement('a');
        deletebutton.setAttribute('href', '#');
        deletebutton.setAttribute('class', 'button danger');
        deletebutton.setAttribute('id', '');
        deletebutton.innerHTML = "Delete Task";
        li.appendChild(deletebutton);

        storeTaskLocalStorage(newTask.value)

        newTask.value = '';
        newTask.focus();
    }
}


// STORE DATA IN LOCAL STORAGE
const storeTaskLocalStorage = (task) => {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


// DELETE FROM LOCAL STORAGE
const removeFromLocalStorage = (task) => {
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = task;
    
    li.removeChild(li.lastChild);
    
    tasks.forEach((task, index) => {
        if(li.textContent.trim() === task) {
            let a = tasks.splice(index, 1)
            console.log(a);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}



// DELETE TASK
const deleteTask = (element) => {
    if (element.target.hasAttribute('href')) {
        if(confirm("Are you sure to delete this task?")) {
            let holding_task = element.target.parentElement;
            holding_task.remove();

            removeFromLocalStorage(holding_task);
        }
    }
}


// SEARCH A TASK
const searchTask = (e) => {
    let text  = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';        
        }
    })
}


// DELETE ALL TASK
const clearAllTask = () => {
    while (taskList.firstChild) {
        if(confirm("Are you sure to delete all the task?")) {
            taskList.removeChild(taskList.firstChild);
        }

        localStorage.clear()
    }
}

// toggle event listener
if (addTaskButton && addTaskButton && newTask && taskList && clearButton && searchTaskInput && error) {
    // console.log('got all item')
    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);
    clearButton.addEventListener('click', clearAllTask);
    searchTaskInput.addEventListener('keyup', searchTask)
}




//   button.addEventListener('click', () => {
//       inputcontent = input.value;
//       input.value = '';
//       injectedHTML = `<li>${inputcontent}<span class="button">Delete<span></li>`;
//       listparent.insertAdjacentHTML("afterbegin", injectedHTML);
//   })