import { createProject, storeProjects } from "./logic.js";

const projectDom = (() => {
    const projects = document.querySelector('.new-project');
    const newProjects = document.getElementById('new-project');
    const projectName = document.querySelector('project-submit');

    function show() {
        newProjects.style.display = 'flex';
    }

    function hide() {
        newProjects.style.display = 'none';
    }

    function clear() {
        projectName.value = '';
    }

    function addProject() {
        if (projectName.value != '') {
            createProject(projectName.value);
        }
        hide();
        storeProjects();
    }

    return {
        show,
        hide,
        clear,
        addProject,
    }

})();

export {projectDom}