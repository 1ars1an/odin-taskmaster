import { createProject, storeProjects } from "./logic.js";

const projectDom = (() => {
    const sidebar = document.querySelector('.sidebar');
    const newProjects = document.getElementById('new-project');
    const projectName = document.querySelector('.project-name');
    const projectSubmit = document.querySelector('.project-submit');
    const projectCancel = document.querySelector('.project-cancel');
    const userProjects = document.querySelector('.user-projects'); 

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
        clear();
        console.log('i ran');
    }

    return {
        show,
        hide,
        clear,
        addProject,
        sidebar,
        newProjects,
        projectSubmit,
        projectCancel,
        userProjects,
    }

})();

export {projectDom}