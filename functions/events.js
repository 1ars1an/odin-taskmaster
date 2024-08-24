import { projectDom } from "./domMethods.js";
import { clearActiveProjects } from "./logic.js";

function createProjectListeners() {
    const projects = document.querySelector('.new-project');
    const newProjects = document.getElementById('new-project');
    const projectName = document.querySelector('project-submit');
    const projectItems = document.querySelectorAll('.project-item');

    projects.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-project')) {
            projectName.style.display === 'none' ? projectDom.show() : projectDom.hide();
        }

        else if (e.target.classList.contains('project-item')) {

        }
    })
}

export {createProjectListeners}