import { createProject, createTask, storeProjects } from "./logic.js";

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

const gridDom = (() => {
    const grid = document.querySelector('.content');

    return {
        grid,
    }

})();

const modalDom = (() => {
    const modal = document.getElementById('taskModal');
    const closeBtn = document.querySelector('.close');
    const taskForm = document.getElementById('taskForm');

    const taskName = document.getElementById('taskName');
    const taskDescription = document.getElementById('taskDescription');
    //const taskPriority = document.querySelector('input[name="priority"]:checked');

    function show() {
        modal.style.display = 'block';
    }

    function hide() {
        modal.style.display = 'none';
        taskName.value = '';
        taskDescription.value = '';
        document.querySelector('input[name="priority"]:checked').checked = false;
    }

    function addTask() {
        if (taskName.value) {
            const taskPriority = document.querySelector('input[name="priority"]:checked');
            createTask(taskName.value, taskDescription.value, taskPriority.value);
            hide();
            storeProjects();
        }
    }

    return {
        modal,
        closeBtn,
        taskForm,
        show,
        hide,
        addTask,
    }

})();

export {projectDom, modalDom, gridDom}