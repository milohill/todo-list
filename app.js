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

  const getCurrentProject = () => currentProject; // to utilize manipulation for the current project
  const showEntireProject = () => mainBoard.getProjects();
  const switchProject = (projectHashValue) => {
    [currentProject] = mainBoard.findProject(projectHashValue); // assign the first element of the array
  }

  return {
    createItem,
    createProject,
    deleteProject,
    editProject,
    showEntireProject,
    getCurrentProject,
    switchProject
  };
}

const list = Controller();