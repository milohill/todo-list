import { differenceInCalendarDays } from "date-fns";
import './style.css';

function Item() {
  const item = {
    content : '',
    date : '',
    daysLeft : '',
    finished : false,
    star : false
  }

  item.setDate = (value) => {
    item.date = value;
    item.daysLeft = differenceInCalendarDays(new Date(value), new Date());
  }

  return item;
}

function Project() {
  const title = '';
  const itemContainer = [];
  const sortContainer = () => {
    itemContainer.sort((a, b) => b.finished ? -1 : b.star ? 1 : (a.daysLeft - b.daysLeft));
  }
  const getItemContainer = () => itemContainer;
  const addItem = (item) => {
    itemContainer.unshift(item);
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
    projectContainer.unshift(project);
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
    currentProject = mainBoard.getProjectContainer()[index];
  }
  const showCurrentProject = () => currentProject;
  const showItemContainer = () =>  currentProject.getItemContainer(); // show the item container of the current project
  const createItem = (content, date) => { // create a new item on the current project
    const newItem = Item();
    newItem.content = content;
    newItem.setDate(date);
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

  return {
    showEntireProject,
    createProject,
    editProject,
    deleteProject,
    switchCurrentProject,
    showCurrentProject,
    showItemContainer,
    createItem,
    editItem,
    removeItem
  };
}

function ScreenController() {
  const mainController = Controller();

  const projectContainer = document.querySelector('.project-container');
  const projectAddModalOpenButton = document.querySelector('.project-add-modal-open-button');
  const projectAddModal = document.querySelector('.project-add-modal');
  const projectAddModalCloseButton = document.querySelector('.project-add-modal-close-button');
  const projectAddModalAddButton = document.querySelector('.project-add-modal-add-button');
  const projectAddModalContentInput = document.querySelector('.project-add-modal-content-input');

  const itemContainer = document.querySelector('.item-container');

  const itemAddModal = document.querySelector('.item-add-modal');
  const itemAddModalContentInput = document.querySelector('.item-add-modal-content-input');
  const itemAddModalDateInput = document.querySelector('.item-add-modal-date-input');
  const itemAddModalOpenButton = document.querySelector('.item-add-modal-open-button');
  const itemAddModalAddButton = document.querySelector('.item-add-modal-add-button');
  const itemAddModalCloseButton = document.querySelector('.item-add-modal-close-button');

  const itemEditModal = document.querySelector('.item-edit-modal');
  const itemEditModalContentInput = document.querySelector('.item-edit-modal-content-input');
  const itemEditModalDateInput = document.querySelector('.item-edit-modal-date-input');
  const itemEditModalOpenButton = document.querySelector('.item-edit-modal-open-button');
  const itemEditModalEditButton = document.querySelector('.item-edit-modal-edit-button');
  const itemEditModalCloseButton = document.querySelector('.item-edit-modal-close-button');

  const updateDisplay = () => {
    projectContainer.innerHTML = '';
    const projects = mainController.showEntireProject();
    projects.forEach((project, index) => {
      const div = document.createElement('div');
      div.dataset.index = index;
      div.classList.add('project');
      if (project === mainController.showCurrentProject()) {
        div.classList.add('highlighted');
      }
      div.innerHTML = `
      <p class="project-title">${project.title}</p>
      <button class="project-edit-modal-edit-button">Edit</button>
      <button class="project-edit-modal-delete-button">Delete</button>
      `;
      projectContainer.append(div);
    });

    itemContainer.innerHTML = ''; // clean up the inside before pushing projects into it
    const items = mainController.showItemContainer(); // current project's items
    items.forEach((item, index) => {
      const div = document.createElement('div');
      div.dataset.index = index;
      div.classList.add('item');
      const date = item.daysLeft ? item.daysLeft >= 1 ? `( ${item.daysLeft} days left )` : `( ${item.daysLeft} days ago )` : '';
      // if daysLeft >= 1 it shows ...days left 
      div.innerHTML = `
      <div class="item-left">
      <button class="item-check"></button>
      <span class="item-title">${item.content}</span>
      <span class="item-date">${date}</span>
    </div>
    <div class="item-right">
    <button class="item-star"></button>
      <button class="item-edit"></button>
      <button class="item-delete"></button>
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

  // manipulate items
  itemContainer.addEventListener('click', (e) => {
    const targetItem = e.target.closest('.item');
    const targetClass = e.target.classList[0]
    const targetIndex = targetItem.dataset.index;

    if (targetClass === 'item-check') {
      const value = ![...targetItem.classList].includes('finished');
      mainController.editItem(targetIndex, 'finished', value)
      updateDisplay();
    } else if (targetClass === 'item-star') {
      const value = ![...targetItem.classList].includes('star');
      mainController.editItem(targetIndex, 'star', value)
      updateDisplay();
    } else if (targetClass === 'item-edit') {
      const arr = mainController.showItemContainer();
      itemEditModal.show();
      const {content} = arr[targetIndex];
      const {date} = arr[targetIndex];
      itemEditModalContentInput.value = arr[targetIndex].content;
      itemEditModalDateInput.value = arr[targetIndex].date;
      itemEditModalEditButton.addEventListener('click', () => {
        mainController.editItem(targetIndex, 'content', content);
        mainController.editItem(targetIndex, 'date', date);
        itemEditModal.close();
        updateDisplay();
        itemEditModalContentInput.value = '';
        itemEditModalDateInput.value = '';
      });
    } else if (targetClass === 'item-delete') {
      mainController.removeItem(targetIndex);
      updateDisplay();
    }
  })

  // item add modal
  itemAddModalOpenButton.addEventListener('click', () => {
    itemAddModal.show();
  })
  itemAddModalCloseButton.addEventListener('click', () => {
    itemAddModal.close();
  })
  itemAddModalAddButton.addEventListener('click', () => {
    const content = itemAddModalContentInput.value;
    itemAddModalContentInput.value = '';
    const date = itemAddModalDateInput.value;
    itemAddModalDateInput.value = '';
    mainController.createItem(content, date);
    updateDisplay();
    itemAddModal.close();
  })

  itemEditModalCloseButton.addEventListener('click', () => {
    itemEditModal.close();
  });

  // project add modal
  projectAddModalOpenButton.addEventListener('click', () => {
    projectAddModal.show();
  })

  projectAddModalCloseButton.addEventListener('click', () => {
    projectAddModal.close();
  })

  projectAddModalAddButton.addEventListener('click', () => {
    const content = projectAddModalContentInput.value;
    projectAddModalContentInput.value = '';
    mainController.createProject(content);
    updateDisplay();
    projectAddModal.close();
  })

  projectContainer.addEventListener('click', (e) => {
    const targetProjectIndex = e.target.closest('.project').dataset.index;
    mainController.switchCurrentProject(targetProjectIndex);
    console.log(mainController.showCurrentProject());
    updateDisplay();
  })















}

ScreenController();