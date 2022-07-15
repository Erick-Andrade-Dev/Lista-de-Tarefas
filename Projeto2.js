window.onload = function() {
    const buttonAdd = document.querySelector('#buttonAdd');
    const selectInput = document.querySelector('#tarefas');
    const buttonClearAll = document.querySelector('#clearAll')
    const buttonClear = document.querySelector('#exclui');
    const buttonSobe = document.querySelector('#sobe');
    const buttonDesce = document.querySelector('#desce');
    const buttonSaved = document.querySelector('#saved');
    const selectMain = document.querySelector('#main')
    const selectOl = document.querySelector('#addList')
    const selectList = document.querySelectorAll('.listItem') 
    const buttonRmvSelect= document.querySelector('#selectedTask')
    const selectTasks = document.querySelector('.test')
    const completeTasks = document.querySelectorAll('.tasksComplete')
    

function addList(){    
    let add = buttonAdd
    add.addEventListener('click', function(){       
        let createLi = document.createElement('li');
        createLi.className = 'listItem'
        createLi.innerText = selectInput.value   
        
        selectOl.appendChild(createLi);         
    })
}    
addList();

function clearAll(){   
   
    buttonClearAll.addEventListener('click', function(){
       let listOl = selectOl
       selectOl.innerHTML = '';
         
       })  
}   
clearAll();

function savedButton(){
    
    buttonSaved.addEventListener('click', function(){
        localStorage.setItem('saved', selectOl.innerHTML)        
       
    })    
}
savedButton();
const savedList =localStorage.getItem('saved');
selectOl.innerHTML = savedList;


function clearOne() {    

      
}
clearOne();

function tasksOk(){
    selectOl.addEventListener('dblclick', function(event){

        if(event.target.classList.contains("tasksComplete")){
            event.target.classList.remove("tasksComplete")
        } else {
            event.target.classList.add("tasksComplete")
        }
    })
}
tasksOk(); 

function selectedColor(){

    selectOl.addEventListener('click', function(event){
        if( event.target.classList.contains("test")){
            event.target.classList.remove("test")
        } else{
            event.target.classList.add("test")
        }
    })  
}
selectedColor();    

function removeSelected(){              
    buttonRmvSelect.addEventListener('click', function(){ 

    const containerTask = document.querySelectorAll('.test')
    
        for(let index = 0; index < containerTask.length; index += 1){
            selectOl.removeChild(containerTask[index])
            }    
        
    })    
}
removeSelected();

function removeConcluded(){
    buttonClear.addEventListener('click', function(){
        const containerConclud = document.querySelectorAll('.tasksComplete')
        for(let index = 0; index < containerConclud.length; i+=1){
            selectOl.removeChild(containerConclud[index])
        }
    })
}
removeConcluded();

function taskDown(){
    buttonDesce.addEventListener('click', function(){

        const containerList = document.querySelectorAll('.listItem');

        for(let index = 0; index < containerList.length; index +=1){
            const position = containerList[index];

            if(position.classList.contains('test') && position.nextElementSibling !== null){
                selectOl.insertBefore(containerList[index + 1], position);
            }
        }
    })
}
taskDown();

function taskUp(){

    buttonSobe.addEventListener('click', function(){

        const containerList2 = document.querySelectorAll('.listItem')

        for(let index = 0; index < containerList2.length; index += 1 ){
            const positionUp = containerList2[index];

            if(positionUp.classList.contains('test') && positionUp.previousElementSibling !== null) {
                selectOl.insertBefore(positionUp, containerList2[index - 1])
            }
        }
    })
}
taskUp();
}  


