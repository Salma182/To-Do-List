let theInput= document.querySelector('.add-task input');
let addButton= document.querySelector('.add-task .plus');
let tasksContainer= document.querySelector('.tasks-content');
let taskCount= document.querySelector('.tasks-count span');
let taskCompleted= document.querySelector('.tasks-completed span');

window.onload = function () {
    theInput.focus();
};

addButton.onclick = function () {

    if (theInput.value === '') {

    console.log('no msg');
    alert('it is empty');

    } else {
    
    let noTasksMsg= document.querySelector('.no-tasks-message');

    if(document.body.contains(document.querySelector('.no-tasks-message'))){

        noTasksMsg.remove();
    }


    let mainSpan= document.createElement('span');

    let deleteElement = document.createElement('span');

    let text= document.createTextNode(theInput.value);

    let deleteText= document.createTextNode('Delete');

    mainSpan.appendChild(text);

    mainSpan.className= 'task-box';

    deleteElement.appendChild(deleteText);

    deleteElement.className= 'delete';

    mainSpan.appendChild(deleteElement);

    tasksContainer.appendChild(mainSpan);

    theInput.value = '';

    theInput.focus();
    
    calculateTasks();
    }

};

document.addEventListener('click', function(e) {

    if (e.target.className == 'delete') {

        e.target.parentNode.remove();

        if(tasksContainer.childElementCount == 0){

            createNoTasks();
        }
    }

    if(e.target.classList.contains('task-box')) {
        e.target.classList.toggle('finished');
    }

    calculateTasks();

});

function createNoTasks() {
    let msgSpan= document.createElement('span');

    let textMsg= document.createTextNode('No Tasks To Show');

    msgSpan.appendChild(textMsg);

    msgSpan.className= 'no-tasks-message';

    tasksContainer.appendChild(msgSpan);
} 


function calculateTasks() {
    taskCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    taskCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}