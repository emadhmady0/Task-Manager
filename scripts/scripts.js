const  added_task_name = document.getElementsByName("task-name")[0]

function createHtmlTagWithClassName(tag_name,class_name){
    const tag = document.createElement(tag_name)
    tag.classList.add(class_name)
    return tag
}

function createHtmlTagWithId(tag_name,id_name){
    const tag = document.createElement(tag_name)
    tag.setAttribute("id",id_name)
    return tag
}

// function that takes input field value and returns an li element with div that contains the input field value,and two buttons
function createItem(task_name){
    const lst_item = createHtmlTagWithClassName("li","task-element")
    const item_name_div = createHtmlTagWithClassName("div","task-text")
    item_name_div.classList.add("active")
    const edit_item_btn = createHtmlTagWithClassName("button","edit-task-btn")
    const delete_item_btn = createHtmlTagWithClassName("button","delete-task-btn")
    item_name_div.innerHTML = task_name
    edit_item_btn.innerHTML = "&#x270f;"
    delete_item_btn.innerHTML = "&#128465;"
    lst_item.append(item_name_div,edit_item_btn,delete_item_btn)
    return lst_item
}
// function that creates an "unordedlist" when the first "li" is added, 
// or adds "li" to the "unorderedlist" if already created
function addItemToList(){
    if(added_task_name.value == ""){
        alert("add task name")
    } else{
        const task = createItem(added_task_name.value)
        if(document.getElementsByTagName("ul").length == 0){
            const tasks_list = createHtmlTagWithClassName("ul","tasks-list")
            tasks_list.appendChild(task)
            const list_container = document.getElementsByClassName("list-container")[0]
            list_container.appendChild(tasks_list)
            added_task_name.value = ""
        }
        else{
            const tasks_list = document.getElementsByClassName("tasks-list")[0]
            tasks_list.appendChild(task)
            added_task_name.value = ""
        }
    }
    
}
const add_task_button = document.getElementById("add-task-button")
add_task_button.addEventListener('click', addItemToList) 

// this function replaces an "li" with an input field to edit its text
// then replaces the input field with a new "li" that contains the edited text
function editTask(index){
    const edit_input_field = document.createElement("input")
    edit_input_field.type = "text"
    edit_input_field.maxLength = 30
    edit_input_field.classList.add("input-field")
    const liToBeEdited = document.getElementsByClassName("task-element")[index]
    const original_text = document.getElementsByClassName("task-text")[index].textContent
    edit_input_field.value = original_text
    liToBeEdited.parentNode.replaceChild(edit_input_field,liToBeEdited)
    edit_input_field.focus()
    edit_input_field.addEventListener("blur",function(){
        if(edit_input_field.value == ""){
            const new_li = createItem(original_text)
            edit_input_field.parentNode.replaceChild(new_li,edit_input_field)
        }
        else{
            const new_li = createItem(edit_input_field.value)
            edit_input_field.parentNode.replaceChild(new_li,edit_input_field)
        }
    })
}

function deleteTask(index){
    const main_list = document.getElementsByClassName("tasks-list")[0]
    const liToBeDeleted = document.getElementsByClassName("task-element")[index]
    main_list.removeChild(liToBeDeleted)

}
function markAsCompleted(index){
    const task_name = document.getElementsByClassName("task-text")[index]
    task_name.classList.toggle("active")
    task_name.classList.toggle("completed")
}

const list_container = document.getElementsByClassName("list-container")[0]
// event listener to the whole unordered list container
list_container.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON" && e.target.classList.contains("edit-task-btn")) {
        // Traverse up the DOM to find the closest <li> element
        const liElement = e.target.closest("li");
    
        // Get the index of the <li> element
        const index = Array.from(liElement.parentNode.children).indexOf(liElement);
        editTask(index)
    }
    else if(e.target.tagName === "BUTTON" && e.target.classList.contains("delete-task-btn")){
        let liElement = e.target.closest("li");
        let index = Array.from(liElement.parentNode.children).indexOf(liElement);
        deleteTask(index)
    }
    else if (e.target.tagName === "DIV"){
        let liElement = e.target.closest("li");
        let index = Array.from(liElement.parentNode.children).indexOf(liElement);
        markAsCompleted(index)
        
    }
  
    });

