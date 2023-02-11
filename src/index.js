import { differenceInCalendarDays } from "date-fns";
import './style.css';

function Item() {
  const content = '';
  const date = '';
  const daysLeft = differenceInCalendarDays(new Date(date), new Date()) || '';
  const finished = false;
  const star = false;

  return {
    content,
    date,
    daysLeft,
    finished,
    star
  }
}

function Project() {
  const title = '';
  const itemContainer = [];
  const sortContainer = () => {
    itemContainer.sort((a) => a.finished ? 1 : a.star ? -1 : 0);
  }
  const getItemContainer = () => itemContainer;
  const addItem = (item) => {
    itemContainer.push(item);
    sortContainer();
  }
  const deleteItem = (index) => {
    itemContainer.splice(index, 1);
    sortContainer();
  }

  return {
    title,
    getItemContainer,
    addItem,
    deleteItem,
  }
}

function Board() {
  const projectContainer = [];
  const getProjectContainer = () => projectContainer;
  const addProject = (project) => {
    projectContainer.push(project);
  }
  const deleteProject = (index) => {
    projectContainer.splice(index, 1);
  }

  return {
    getProjectContainer,
    addProject,
    deleteProject
  }
}

function Controller() {
  const mainBoard = Board();
  let currentProject;

  const showEntireProject = () => mainBoard.getProjectContainer();
  const createProject = (title='') => {
    const newProject = Project();
    newProject.title = title;
    mainBoard.addProject(newProject);
  }
  const editProject = (index, title) => {
    mainBoard.getProjectContainer[index].title = title;
  }
  const deleteProject = (index) => {
    mainBoard.deleteProject(index);
    currentProject = mainBoard.getProjectContainer[0] || undefined;
  }
  const switchCurrentProject = (index) => {
    currentProject = mainBoard.getProjectContainer[index];
  }
  const showItemContainer = () =>  currentProject.getItemContainer(); // show the item container of the current project
  const createItem = (content, date) => { // create a new item on the current project
    const newItem = Item();
    newItem.content = content;
    newItem.date = date;
    currentProject.addItem(newItem);
  }
  const editItem = (index, property, value) => {
    const tempItem = currentProject.getItemContainer()[index]; // copy the item to edit
    currentProject.deleteItem(index);
    tempItem[property] = value;
    currentProject.addItem(tempItem);
  }
  const removeItem = (index) => { // remove an item from the current project
    currentProject.deleteItem(index);
  }
  // create a default project
  createProject('Default Project One');
  // currently focused project
  [currentProject] = showEntireProject();
  // create default projects
  createItem('Item 0', '2022-10-22');
  createItem('Item 1', '2022-10-22');
  createItem('Item 2', '2022-10-22');
  createItem('Item 4', '2022-10-22');
  createItem('Item 3', '2022-10-22');
  createItem('Item 5', '2022-10-22');
  createItem('Item 6', '2022-10-22');

  return {
    showEntireProject,
    createProject,
    editProject,
    deleteProject,
    switchCurrentProject,
    showItemContainer,
    createItem,
    editItem,
    removeItem
  };
}

function ScreenController() {
  console.log("Start");
  const mainController = Controller();
  const itemContainer = document.querySelector('.item-container');
  console.log(itemContainer);
  const itemContentInput = document.querySelector('.item-content-input');
  const itemDateInput = document.querySelector('.item-date-input');
  const itemWindowOpenButton = document.querySelector('.item-add-button');
  const itemAddWindow = document.querySelector('.item-modal');
  const itemAddButton = document.querySelector('.item-modal-add');
  const itemCloseButton = document.querySelector('.item-modal-close');

  const updateDisplay = () => {
    itemContainer.innerHTML = ''; // clean up the inside before pushing projects into it
    const items = mainController.showItemContainer(); // current project's items
    items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('item');
      div.innerHTML = `
      <div class="item-left">
      <button class="item-check"></button>
      <span class="item-title">${item.content}</span>
      <span class="item-date">${item.date}</span>
    </div>
    <div class="item-right">
      <button class="item-dots"></button>
      <button class="item-star"></button>
    </div>
      `;
      if (item.star) {
        div.classList.add('star');
      }
      if (item.finished) {
        div.classList.add('finished');
      }
      itemContainer.appendChild(div);
    });
  };

  updateDisplay(); // initial render



}

ScreenController();