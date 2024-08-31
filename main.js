import "./functions/events.js"
import { renderProjects } from "./functions/render.js";

let allProjects = [];
if(localStorage.getItem('user') == null){
}
else {
    allProjects = JSON.parse(window.localStorage.getItem('user'));
    renderProjects();
}

export { allProjects }

