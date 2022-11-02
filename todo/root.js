// const input=document.querySelector('input'),
//     button=document.querySelector('button'),
//     listparent=document.querySelector('ul');

// define UI element
const newTask = document.querySelector('#newTask'),
    addTaskButton = document.querySelector('#addTask'),
    taskList = document.querySelector('#tasks'),
    clearButton = document.querySelector('#clearTask'),
    searchTask = document.querySelector('#searchTask'),
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
    }
}


// toggle event listener
if (addTaskButton && addTaskButton && newTask && taskList && clearButton && searchTask && error) {
    // console.log('got all item')
    addTaskButton.addEventListener('click', addTask);
}




//   button.addEventListener('click', () => {
//       inputcontent = input.value;
//       input.value = '';
//       injectedHTML = `<li>${inputcontent}<span class="button">Delete<span></li>`;
//       listparent.insertAdjacentHTML("afterbegin", injectedHTML);
//   })