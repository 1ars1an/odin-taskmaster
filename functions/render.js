import { allProjects } from "../main.js";
import { projectDom } from "./domMethods.js";
import { getActiveProject } from "./logic.js";
import { createProjectListeners } from "./dynamicEvents.js";

function renderProjects() {
    clearProjects();
    allProjects.forEach((project, index) => {
        console.log(project.name);
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

export { renderProjects, clearProjects }