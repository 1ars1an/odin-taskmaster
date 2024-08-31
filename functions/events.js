import { projectDom, modalDom } from "./domMethods.js";
import { renderProjects, renderTasks } from "./render.js";

projectDom.sidebar.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-task')) {
        modalDom.show();
    }

    else if (e.target.classList.contains('home-btn')) {
        console.log('epstein');
    }

    else if (e.target.classList.contains('add-project')) {
        projectDom.newProjects.style.display === 'none' ? projectDom.show() : projectDom.hide();
    }

    else if (e.target.classList.contains('project-submit')) {
        projectDom.addProject();
        renderProjects();
    }

    else if (e.target.classList.contains('project-cancel')) {
        projectDom.clear();
        projectDom.newProjects.style.display = 'none';
    }
})

modalDom.closeBtn.addEventListener('click', () => modalDom.hide());

window.onclick = (event) => {
    if (event.target == modalDom.modal) {
        modalDom.modal.style.display = 'none';
    }
}

modalDom.taskForm.onsubmit = (e) => {
    e.preventDefault();
    modalDom.addTask();
    renderTasks();
}