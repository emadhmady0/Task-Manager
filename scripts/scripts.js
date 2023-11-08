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

function createItem(task_name){
    const lst_item = createHtmlTagWithClassName("li","task-element")
    const item_name_div = createHtmlTagWithClassName("div","task-text")
    const edit_item_btn = createHtmlTagWithId("button","edit-task-btn")
    const delete_item_btn = createHtmlTagWithId("button","delete-task-btn")
    item_name_div.innerHTML = task_name.value
    edit_item_btn.innerHTML = "edit"
    delete_item_btn.innerHTML = "delete"
    lst_item.append(item_name_div,edit_item_btn,delete_item_btn)
    return lst_item
}

function addItemToList(){
    if(added_task_name.value == ""){
        alert("add task name")
    } else{
        const task = createItem(added_task_name)
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




