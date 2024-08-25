import { projectDom } from "./domMethods.js";
import { renderProjects } from "./render.js";

projectDom.sidebar.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-task')) {
        console.log('monkey');
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