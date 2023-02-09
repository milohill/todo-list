// hash value generator
function generateHash() {
  return Math.random().toString(16).slice(2);
}

// todo item structurer
  function Item() {
    const content = '';
    const date = '';
    const finished = false;
    const star = false;
    const hash = generateHash(); // a hash value to make it easier to single one out later

    return {
      content,
      date,
      finished,
      star,
      hash
    }
  }

// project structurer
function Project() {
  const title = '';
  let items = []; // assign with let to make it so it's easier to reassign
  const hash = generateHash(); // a hash value to make it easier to single one out later

  const getItems = () => items;
  const addItem = (item) => {
    items.push(item);
  }
  
  const editItem = (itemHashValue, content='', date='') => {
    const itemToEdit = items.find(item => item.hash === itemHashValue);
    const filteredItems = items.filter(item => item.hash !== itemHashValue);
    itemToEdit.content = content;
    itemToEdit.date = date;
    filteredItems.push(itemToEdit);
    items = filteredItems;
  }

  const finishItem = (itemHashValue, boolean) => {
    const itemToFinish = items.find(item => item.hash === itemHashValue);
    const filteredItems = items.filter(item => item.hash !== itemHashValue);
    itemToFinish.finished = boolean
    filteredItems.push(itemToFinish);
    items = filteredItems;
  }

  const starItem = (itemHashValue, boolean) => {
    const itemToStar = items.find(item => item.hash === itemHashValue);
    const filteredItems = items.filter(item => item.hash !== itemHashValue);
    itemToStar.star = boolean;
    filteredItems.push(itemToStar);
    items = filteredItems;
  }

  const deleteItem = (itemHashValue) => {
    const filteredItems = items.filter(item => item.hash !== itemHashValue);
    items = filteredItems; // reassign the filtered items to the items array
  }

  return {
    title,
    getItems,
    addItem,
    editItem,
    finishItem,
    starItem,
    deleteItem,
    hash
  }
}

// information holder for todo items and projects
function Board() {
  let projects = [];

  const getProjects = () => projects;
  const addProject = (project) => {
    projects.push(project);
  }
  const deleteProject = (projectHashValue) => {
    const filteredProjects = projects.filter(project => project.hash !== projectHashValue);
    projects = filteredProjects;
  }
  const findProject = (projectHashValue) => {
    const filteredProjects = projects.filter(project => project.hash === projectHashValue);
    return filteredProjects;
  }

  return {
    getProjects,
    addProject,
    deleteProject,
    findProject
  }
}

// controller
function Controller() {
  const mainBoard = Board();

  // create a default project
  const defaultProject = Project();
  defaultProject.title = 'Default Project';

  mainBoard.addProject(defaultProject);

  // currently focused project
  let currentProject = defaultProject;

  const createItem = (content='', date='') => {
    const newItem = Item();
    newItem.content = content;
    newItem.date = date;
    currentProject.addItem(newItem);
  }

  // dummy default items
  createItem('Item One', '2022-11-11');
  createItem('Item Two', '2022-11-12');
  createItem('Item Three', '2022-11-31');

  const createProject = (title='') => {
    const newProject = Project();
    newProject.title = title;
    mainBoard.addProject(newProject);
  }

  const deleteProject = () => {
    const { hash } = currentProject;
    mainBoard.deleteProject(hash);
    currentProject = undefined;
  }

  const editProject = (title) => {
    currentProject.title = title;
  }

  const getProjectController = () => currentProject; // to utilize manipulation for the current project
  const getEntireProject = () => mainBoard.getProjects();
  const switchProject = (projectHashValue) => {
    [currentProject] = mainBoard.findProject(projectHashValue); // assign the first element of the array
  }

  return {
    createItem,
    createProject,
    deleteProject,
    editProject,
    getEntireProject,
    getProjectController,
    switchProject
  };
}

let list;

function ScreenController() {
  const controller = Controller();
  const projectsDiv = document.querySelector('.projects');
  const projectTitleInput = document.querySelector('.project-title-input');
  const projectAddButton = document.querySelector('.project-add-button');
  const itemsDiv = document.querySelector('.items');
  const itemContentInput = document.querySelector('.item-add-window .item-content');
  const itemDateInput = document.querySelector('.item-add-window .item-date');
  const itemStarInput = document.querySelector('.item-add-window .item-star');
  const itemAddButton = document.querySelector('.item-add-window .add');
  const itemAddWindow = document.querySelector('.item-add-window');
  const itemAddWindowOpenButton = document.querySelector('.item-add-button');
  const itemAddWindowCloseButton = document.querySelector('.item-add-window .close');

  const updateDisplay = () => {
    projectsDiv.innerHTML = ''; // clean up the inside before pushing projects into it
    const projects = controller.getEntireProject();
    projects.forEach(project => {
      const div = document.createElement('div');
      if (project === controller.getProjectController()) {
        div.classList.add('highlighted')
      } // highlight the currently selected project
      div.classList.add('project');
      div.dataset.hash = project.hash;
      div.innerHTML = `
      <div class="project-text">
        <p class="title">${project.title}</p>
      </div>
      <div class="project-buttons">
        <button class="project-edit">
          <img src="./images/edit.svg" alt="" width="20px" />
        </button>
        <button class="project-delete">
          <img src="./images/delete.svg" alt="" width="20px" />
        </button>
      </div>`;
      projectsDiv.appendChild(div);
    });

    itemsDiv.innerHTML = ''; // clean up the inside before pushing projects into it
    const items = controller.getProjectController().getItems(); // current project's items
    items.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('item');
      div.dataset.hash = item.hash;
      div.innerHTML = `
      <div class="item-text">
            <p class="content">${item.content}</p>
            <p class="date">By ${item.date}</p>
          </div>
          <div class="item-buttons">
            <button class="item-star">
              <img src="./images/unstar.svg" alt="" width="20px" />
            </button>
            <button class="item-finished">
              <img src="./images/check.svg" alt="" width="20px" />
            </button>
            <button class="item-edit">
              <img src="./images/edit.svg" alt="" width="20px" />
            </button>
            <button class="item-delete">
              <img src="./images/delete.svg" alt="" width="20px" />
            </button>
          </div>
      `;
      itemsDiv.appendChild(div);
    });
  };

  updateDisplay(); // initial render
  list = Controller();

  function addProject() {
    const title = projectTitleInput.value;
    projectTitleInput.value = '';
    controller.createProject(title);

    controller.switchProject(controller.getEntireProject()[controller.getEntireProject().length-1].hash);

    updateDisplay(); // update the latest data after adding a new element
  }
  projectAddButton.addEventListener('click', addProject);

  function addItem() {
    const content = itemContentInput.value;
    itemContentInput.value = '';
    const date = itemDateInput.value;
    itemDateInput.value = '';
    const star = itemStarInput.value;
    itemStarInput.value = '';

    controller.createItem(content, date);

    updateDisplay(); // update the latest data after adding a new element

    itemAddWindow.classList.remove('visible');
  }
  itemAddButton.addEventListener('click', addItem);

  function switchProject(event) {
    const { hash } = event.target.closest('.project').dataset;
    controller.switchProject(hash);
    updateDisplay();
  }

  function deleteProject() {
      controller.deleteProject();
      if (controller.getEntireProject().length !== 0) {
        controller.switchProject(controller.getEntireProject()[0].hash); // automatically choose the first project after project deletion
      }
      updateDisplay();
    }

  function editProject(event) {
    const targetDiv = event.target.closest('.project').querySelector('.title');
    console.log(targetDiv);
    targetDiv.contentEditable = true;
    event.preventDefault();
  }

  projectsDiv.addEventListener('click', (e) => {
    switchProject(e);
    if (e.target.closest('button')) { // if the element clicked is a button
      if (e.target.closest('button').classList[0] === 'project-delete') {
        deleteProject();
      } else if (e.target.closest('button').classList[0] === 'project-edit') {
        editProject(e);
      }
    }
  }
  );


  itemAddWindowOpenButton.addEventListener('click', () => {
    itemAddWindow.classList.add('visible');
  })

  itemAddWindowCloseButton.addEventListener('click', () => {
    console.log("heyyy")
    itemAddWindow.classList.remove('visible');
  })










}

ScreenController();