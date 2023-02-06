// import { format, compareAsc } from 'date-fns';

// hash value generator
function generateHash() {
  return Math.random().toString(16).slice(2);
}

// todo item structurer
function Item() {
  let content = '';
  let date = '';
  let star = false;
  const hash = generateHash(); // to single one out later

  const getContent = () => content;
  const setContent = (str) => {
    content = str;
  };

  const getDate = () => date;
  const setDate = (str) => {
    date = str;
  };

  const getHash = () => hash;

  const setStar = (value) => {
    star = value;
  }
  const getStar = () => star;

  return {
    getContent,
    setContent,
    getDate,
    setDate,
    getHash,
    setStar,
    getStar
  }
}

// project structurer
function Project() {
  let title = '';
  let unfinishedItems = []; // let variable to make it so it's easier to reassign
  const finishedItems = [];
  const hash = generateHash(); // to single one out later

  const getTitle = () => title;
  const setTitle = (str) => {
    title = str;
  }

  const getItems = () => unfinishedItems;
  const setItem = (item) => {
    unfinishedItems.push(item);
  }
  const deleteItem = (itemHashValue) => {
    const filteredItems = unfinishedItems.filter(item => item.getHash() !== itemHashValue);
    unfinishedItems = filteredItems; // reassign the filtered items to the items array
  }
  const finishItem = (itemHashValue) => {
    const finishedItem = unfinishedItems.filter(item => item.getHash() === itemHashValue);
    finishedItems.push(finishedItem);

    const filteredItems = unfinishedItems.filter(item => item.getHash() !== itemHashValue);
    unfinishedItems = filteredItems; // reassign the filtered items to the items array
  }

  const getHash = () => hash;

  return {
    getTitle,
    setTitle,
    getItems,
    setItem,
    deleteItem,
    finishItem,
    getHash
  }
}

// information holder for todo items and projects
function Board() {
  const projects = [];

  const getProjects = () => projects;
  const setProject = (project) => {
    projects.push(project);
  }
  const getSelectedProject = (projectHashValue) => projects.filter(project => project.getHash() === projectHashValue);

  return {
    getProjects,
    setProject,
    getSelectedProject
  }
}

// controller
function Controller() {
  const mainBoard = Board();
  const defaultProject = Project();
  
  defaultProject.setTitle('Default Project');
  mainBoard.setProject(defaultProject);

  const createItem = (projectHashValue, content='', date='') => {
    const newItem = Item();
    newItem.setContent(content);
    newItem.setDate(date);
    mainBoard.getSelectedProject(projectHashValue).setItem(newItem);
  }

  const createProject = (title='') => {
    const newProject = Project();
    newProject.setTitle(title);
    mainBoard.setProject(newProject);
  }

  const showProjects = () => mainBoard.getProjects();

  return {
    createItem,
    createProject,
    showProjects,
  };
}

function ScreenController() {
  const controller = Controller();
}