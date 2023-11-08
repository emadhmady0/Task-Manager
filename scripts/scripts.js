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






