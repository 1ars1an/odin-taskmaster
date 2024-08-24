import { allProjects } from "../main.js";

function createProject(name) {
    clearActiveProjects();
    allProjects.push({
        name,
        taskList: [],
        active: true,
    });
}

function activeProject() {
    return allProjects.filter(project => project.active)[0];
}

function clearActiveProjects() {
    allProjects.forEach((project) => project.active = false);
}

function storeProjects() {
    localStorage.setItem('user', JSON.stringify(allProjects));
}

export {createProject, clearActiveProjects, storeProjects}