function addTask() {
    const newTask = document.getElementsByClassName("new-task")[0].value;
    if (newTask === "") { return }
    const $ul = document.getElementsByTagName("ul")[0]
    const $li = document.createElement("li")
    const $div = document.createElement("div")
    $div.className += "checkbox"
    const $label = document.createElement("label")
    const $input = document.createElement("input")
    $input.className += "task-name"
    $input.setAttribute("type", "checkbox")
    $input.setAttribute("name", "tarefa")
    $input.addEventListener("click", removeTask)
    $label.appendChild($input)
    $label.appendChild(document.createTextNode(newTask))
    $div.appendChild($label)
    $li.appendChild($div)
    $ul.appendChild($li)
    document.getElementsByClassName("new-task")[0].value = "";
}

function removeTask(e) {
    const $li = e.currentTarget.closest("li");
    $li.remove()
}

function changeTitle() {
    const title = document.getElementsByTagName("h2")[0]
    const newtitle = document.getElementsByClassName("change-title")[0].value
    title.innerHTML = newtitle
}

document.getElementsByClassName("change-title")[0].addEventListener("keyup", changeTitle)

document.getElementsByClassName("add-task")[0].addEventListener("click", addTask)

const tasks = document.getElementsByClassName("task-item")
Array.from(tasks).forEach(tasks => tasks.addEventListener("click", removeTask))

