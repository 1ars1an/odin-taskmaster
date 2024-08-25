import "./functions/events.js"
import { renderProjects } from "./functions/render.js";

let allProjects = [];
allProjects = JSON.parse(localStorage.getItem('user'));
renderProjects();

export { allProjects }

