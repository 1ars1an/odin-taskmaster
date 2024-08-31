import { allProjects } from "../main.js";
import { projectDom, gridDom } from "./domMethods.js";
import { getActiveProject } from "./logic.js";
import { createProjectListeners } from "./dynamicEvents.js";

function renderProjects() {
    clearProjects();
    allProjects.forEach((project, index) => {
        const userProject = document.createElement('div');
        userProject.classList.add('dynamic-project');
        userProject.dataset.value = index;
        if (project.active) {
            userProject.classList.add('active');
        }
        userProject.textContent = project.name;

        projectDom.userProjects.append(userProject);
    })
    createProjectListeners();
}

function clearProjects() {
    projectDom.userProjects.innerHTML = '';
}

function renderTasks() {
    clearTasks();
    getActiveProject().taskList.forEach((task, taskIdx) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('dynamic-task');
        taskDiv.dataset.value = taskIdx;

        taskDiv.innerHTML = `
            <input type="checkbox" id="task-check">
            <div id="task-text">
                <div>${task.name}</div>
                <div>${task.description}</div>
            </div>
            <div id="task-priority">
                <button class="priority-btn ${task.priority === 'whatever' ? 'btn-active' : ''}" data-priority="Whatever">Whatever</button>
                <button class="priority-btn ${task.priority === 'normal' ? 'btn-active' : ''}" data-priority="Normal">Normal</button>
                <button class="priority-btn ${task.priority === 'urgent' ? 'btn-active' : ''}" data-priority="Urgent">Urgent</button>
            </div>       
        `

        gridDom.grid.append(taskDiv);
    })
}

function clearTasks() {
    gridDom.grid.innerHTML = '';
}

export { renderProjects, clearProjects, renderTasks, clearTasks }