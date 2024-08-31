import { allProjects } from "../main.js";
import { renderProjects, renderTasks } from "./render.js";

function createProject(name) {
    clearActiveProjects();
    allProjects.push({
        name,
        taskList: [],
        active: true,
    });
    renderProjects();
    renderTasks();
}

function getActiveProject() {
    return allProjects.filter(project => project.active)[0];
}

function clearActiveProjects() {
    allProjects.forEach((project) => project.active = false);
}

function switchActiveProject(index) {
    clearActiveProjects();
    allProjects[index].active = true;
    renderProjects();
    renderTasks();
}

function storeProjects() {
    localStorage.setItem('user', JSON.stringify(allProjects));
}

function createTask(name, description, priority) {
    getActiveProject().taskList.push({
        name, 
        description, 
        priority, 
        complete: false,
    });
    renderProjects();
    renderTasks();
}

export {createProject, getActiveProject, clearActiveProjects, switchActiveProject, storeProjects, createTask}