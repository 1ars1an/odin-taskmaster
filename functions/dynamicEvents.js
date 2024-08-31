import { clearActiveProjects, switchActiveProject, storeProjects } from "./logic.js";

function createProjectListeners() {
    const createdProjects = document.querySelectorAll('.dynamic-project');
    createdProjects.forEach(btn => btn.addEventListener('click', function(e) {
        switchActiveProject(e.target.dataset.value);
        storeProjects();
    }))
}

function createTaskListeners() {
    const taskGrid = document.querySelectorAll('content');
}

export {createProjectListeners, createTaskListeners}