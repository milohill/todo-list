/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");

console.log(date_fns__WEBPACK_IMPORTED_MODULE_0__["default"]);
console.log("hey");

function Item() {
  const content = '';
  const date = '';
  const daysLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(date), new Date());
  const finished = false;
  const star = false;

  return {
    content,
    date,
    finished,
    star
  }
}

function Project() {
  const title = '';
  const itemContainer = [];
  const getItemContainer = () => itemContainer;
  const addItem = (item) => {
    itemContainer.push(item);
  }
  const deleteItem = (index) => {
    itemContainer.splice(index, 1);
  }

  // itemContainer.sort((a, b) => a.finished || a.star);
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
  const showEntireProject = () => mainBoard.getProjectContainer();
  const createProject = (title='') => {
    const newProject = Project();
    newProject.title = title;
    mainBoard.addProject(newProject);
  }
  // create a default project
  createProject('Default Project One');
  // currently focused project
  const currentProject = showEntireProject()[0];
  
  // create default projects
  createItem('Item One', '2022-20-22');
  createItem('Item tne', '2022-20-22');
  createItem('Item fne', '2022-20-22');

  function createItem(content, date) { // create a new item on the current project
    const newItem = Item();
    newItem.content = content;
    newItem.date = date;
    currentProject.addItem(newItem);
  }

  function removeItem(index) { // remove an item from the current project
    currentProject.deleteItem(index);
  }

  function showItemContainer() { // show the item container of the current project
    return currentProject.getItemContainer();
  }

  function editItem(index, property, value) {
    const tempItem = currentProject.getItemContainer()[index]; // copy the item to edit
    currentProject.deleteItem(index);
    tempItem[property] = value;
    currentProject.addItem(tempItem);
  }

  // const editCurrentProject = (title) => {
  //   currentProject.title = title;
  // }

  // const deleteCurrentProject = () => {
  //   const { hash } = currentProject;
  //   mainBoard.deleteProject(hash);
  //   currentProject = undefined;
  // }

  // const getCurrentProjectController = () => currentProject; // to utilize manipulation for the current project
  // const switchProject = (projectHashValue) => {
  //   [currentProject] = mainBoard.findProject(projectHashValue); // assign the first element of the array
  // }

  return {
    createProject,
    showEntireProject,
    createItem,
    removeItem,
    showItemContainer,
    editItem
  };
}

const controller = Controller(); // make sure define this inside the ScreenController at the end of the developement for a security reason

// function ScreenController() {
//   controller = Controller();
//   // const projectContainer = document.querySelector('.project-container');
//   // const projectTitleInput = document.querySelector('.project-title-input');
//   // const projectAddButton = document.querySelector('.project-add-button');
//   const itemContainer = document.querySelector('.item-container');
//   const itemTitleInput = document.querySelector('.item-title-input');
//   const itemDateInput = document.querySelector('.item-date-input');
//   const itemContentInput = document.querySelector('.item-content-input');
//   const itemStarInput = document.querySelector('.item-star-input');
//   const itemAddButton = document.querySelector('.item-add-pop-up-add');
//   const itemAddWindow = document.querySelector('.item-add-pop-up');
//   const itemAddWindowOpenButton = document.querySelector('.item-add-button');
//   const itemAddWindowCloseButton = document.querySelector('.item-add-pop-up-close');

//   const updateDisplay = () => {
//     // projectContainer.innerHTML = ''; // clean up the inside before pushing projects into it
//     // const projects = controller.getEntireProject();
//     // projects.forEach(project => {
//     //   const div = document.createElement('div');
//     //   if (project === controller.getProjectController()) {
//     //     div.classList.add('highlighted')
//     //   } // highlight the currently selected project
//     //   div.classList.add('project');
//     //   div.dataset.hash = project.hash;
//     //   div.innerHTML = `
//     //   <div class="project-text">
//     //     <p class="title">${project.title}</p>
//     //   </div>
//     //   <div class="project-buttons">
//     //     <button class="project-edit">
//     //       <img src="./images/edit.svg" alt="" width="20px" />
//     //     </button>
//     //     <button class="project-delete">
//     //       <img src="./images/delete.svg" alt="" width="20px" />
//     //     </button>
//     //   </div>`;
//     //   projectContainer.appendChild(div);
//     // });

//     itemContainer.innerHTML = ''; // clean up the inside before pushing projects into it
//     const items = controller.getProjectController().getItems(); // current project's items
//     items.forEach(item => {
//       const div = document.createElement('div');
//       div.classList.add('item');
//       div.dataset.hash = item.hash;
//       div.innerHTML = `
//       <div class="item-left">
//       <button class="item-check"></button>
//       <span class="item-title">${item.title}</span>
//       <span class="item-date">${item.date}</span>
//     </div>
//     <div class="item-right">
//       <button class="item-dots"></button>
//       <button class="item-star"></button>
//     </div>
//       `;
//       if (item.star) {
//         div.classList.add('starred');
//       }
//       itemContainer.appendChild(div);
//     });
//   };

//   updateDisplay(); // initial render

//   // function addProject() {
//   //   const title = projectTitleInput.value;
//   //   projectTitleInput.value = '';
//   //   controller.createProject(title);

//   //   controller.switchProject(controller.getEntireProject()[controller.getEntireProject().length-1].hash);

//   //   updateDisplay(); // update the latest data after adding a new element
//   // }
//   // projectAddButton.addEventListener('click', addProject);

//   function addItem() {
//     const title = itemTitleInput.value;
//     itemTitleInput.value = '';
//     const date = itemDateInput.value;
//     itemDateInput.value = '';
//     const content = itemContentInput.value;
//     itemDateInput.value = '';
//     const star = itemStarInput.value;
//     itemStarInput.value = '';

//     controller.getProjectController().addItem(title, date, content, star);

//     updateDisplay(); // update the latest data after adding a new element
//   }

//   itemAddButton.addEventListener('click', () => {
//     addItem();
//     itemAddWindow.close();
//     }
//   );

//   function switchProject(event) {
//     const { hash } = event.target.closest('.project').dataset;
//     controller.switchProject(hash);
//     updateDisplay();
//   }

//   function deleteProject() {
//       controller.deleteProject();
//       if (controller.getEntireProject().length !== 0) {
//         controller.switchProject(controller.getEntireProject()[0].hash); // automatically choose the first project after project deletion
//       }
//       updateDisplay();
//     }

//   function editProject(event) {
//     const targetDiv = event.target.closest('.project').querySelector('.title');
//     console.log(targetDiv);
//     targetDiv.contentEditable = true;
//     event.preventDefault();
//   }

//   // projectContainer.addEventListener('click', (e) => {
//   //   switchProject(e);
//   //   if (e.target.closest('button')) { // if the element clicked is a button
//   //     if (e.target.closest('button').classList[0] === 'project-delete') {
//   //       deleteProject();
//   //     } else if (e.target.closest('button').classList[0] === 'project-edit') {
//   //       editProject(e);
//   //     }
//   //   }
//   // }
//   // )

//   itemAddWindowOpenButton.addEventListener('click', () => {
//     itemAddWindow.showModal();
//   })

//   itemAddWindowCloseButton.addEventListener('click', () => {
//     itemAddWindow.close();
//   })

//   const itemStarButton = document.querySelector('.item-star');
//   itemStarButton.addEventListener('click', toggleStar);

//   function toggleStar() {
//     const item = this.closest('.item');
//     if (item.classList[0] === 'starred') {
//       console.log("hey");
//       const {hash} = item.dataset;
//       controller.getCurrentProjectController().editItem(hash, )
//     }
//   }
// }

// ScreenController();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuY29uc29sZS5sb2coZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKTtcbmNvbnNvbGUubG9nKFwiaGV5XCIpO1xuXG5mdW5jdGlvbiBJdGVtKCkge1xuICBjb25zdCBjb250ZW50ID0gJyc7XG4gIGNvbnN0IGRhdGUgPSAnJztcbiAgY29uc3QgZGF5c0xlZnQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMobmV3IERhdGUoZGF0ZSksIG5ldyBEYXRlKCkpO1xuICBjb25zdCBmaW5pc2hlZCA9IGZhbHNlO1xuICBjb25zdCBzdGFyID0gZmFsc2U7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250ZW50LFxuICAgIGRhdGUsXG4gICAgZmluaXNoZWQsXG4gICAgc3RhclxuICB9XG59XG5cbmZ1bmN0aW9uIFByb2plY3QoKSB7XG4gIGNvbnN0IHRpdGxlID0gJyc7XG4gIGNvbnN0IGl0ZW1Db250YWluZXIgPSBbXTtcbiAgY29uc3QgZ2V0SXRlbUNvbnRhaW5lciA9ICgpID0+IGl0ZW1Db250YWluZXI7XG4gIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGl0ZW1Db250YWluZXIucHVzaChpdGVtKTtcbiAgfVxuICBjb25zdCBkZWxldGVJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgaXRlbUNvbnRhaW5lci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgLy8gaXRlbUNvbnRhaW5lci5zb3J0KChhLCBiKSA9PiBhLmZpbmlzaGVkIHx8IGEuc3Rhcik7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZ2V0SXRlbUNvbnRhaW5lcixcbiAgICBhZGRJdGVtLFxuICAgIGRlbGV0ZUl0ZW0sXG4gIH1cbn1cblxuZnVuY3Rpb24gQm9hcmQoKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBbXTtcbiAgY29uc3QgZ2V0UHJvamVjdENvbnRhaW5lciA9ICgpID0+IHByb2plY3RDb250YWluZXI7XG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RDb250YWluZXIucHVzaChwcm9qZWN0KTtcbiAgfVxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdENvbnRhaW5lci5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0Q29udGFpbmVyLFxuICAgIGFkZFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdFxuICB9XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IG1haW5Cb2FyZCA9IEJvYXJkKCk7XG4gIGNvbnN0IHNob3dFbnRpcmVQcm9qZWN0ID0gKCkgPT4gbWFpbkJvYXJkLmdldFByb2plY3RDb250YWluZXIoKTtcbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZT0nJykgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KCk7XG4gICAgbmV3UHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAgIG1haW5Cb2FyZC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICB9XG4gIC8vIGNyZWF0ZSBhIGRlZmF1bHQgcHJvamVjdFxuICBjcmVhdGVQcm9qZWN0KCdEZWZhdWx0IFByb2plY3QgT25lJyk7XG4gIC8vIGN1cnJlbnRseSBmb2N1c2VkIHByb2plY3RcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBzaG93RW50aXJlUHJvamVjdCgpWzBdO1xuICBcbiAgLy8gY3JlYXRlIGRlZmF1bHQgcHJvamVjdHNcbiAgY3JlYXRlSXRlbSgnSXRlbSBPbmUnLCAnMjAyMi0yMC0yMicpO1xuICBjcmVhdGVJdGVtKCdJdGVtIHRuZScsICcyMDIyLTIwLTIyJyk7XG4gIGNyZWF0ZUl0ZW0oJ0l0ZW0gZm5lJywgJzIwMjItMjAtMjInKTtcblxuICBmdW5jdGlvbiBjcmVhdGVJdGVtKGNvbnRlbnQsIGRhdGUpIHsgLy8gY3JlYXRlIGEgbmV3IGl0ZW0gb24gdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgIGNvbnN0IG5ld0l0ZW0gPSBJdGVtKCk7XG4gICAgbmV3SXRlbS5jb250ZW50ID0gY29udGVudDtcbiAgICBuZXdJdGVtLmRhdGUgPSBkYXRlO1xuICAgIGN1cnJlbnRQcm9qZWN0LmFkZEl0ZW0obmV3SXRlbSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVJdGVtKGluZGV4KSB7IC8vIHJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgIGN1cnJlbnRQcm9qZWN0LmRlbGV0ZUl0ZW0oaW5kZXgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0l0ZW1Db250YWluZXIoKSB7IC8vIHNob3cgdGhlIGl0ZW0gY29udGFpbmVyIG9mIHRoZSBjdXJyZW50IHByb2plY3RcbiAgICByZXR1cm4gY3VycmVudFByb2plY3QuZ2V0SXRlbUNvbnRhaW5lcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdEl0ZW0oaW5kZXgsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHRlbXBJdGVtID0gY3VycmVudFByb2plY3QuZ2V0SXRlbUNvbnRhaW5lcigpW2luZGV4XTsgLy8gY29weSB0aGUgaXRlbSB0byBlZGl0XG4gICAgY3VycmVudFByb2plY3QuZGVsZXRlSXRlbShpbmRleCk7XG4gICAgdGVtcEl0ZW1bcHJvcGVydHldID0gdmFsdWU7XG4gICAgY3VycmVudFByb2plY3QuYWRkSXRlbSh0ZW1wSXRlbSk7XG4gIH1cblxuICAvLyBjb25zdCBlZGl0Q3VycmVudFByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgLy8gICBjdXJyZW50UHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICAvLyB9XG5cbiAgLy8gY29uc3QgZGVsZXRlQ3VycmVudFByb2plY3QgPSAoKSA9PiB7XG4gIC8vICAgY29uc3QgeyBoYXNoIH0gPSBjdXJyZW50UHJvamVjdDtcbiAgLy8gICBtYWluQm9hcmQuZGVsZXRlUHJvamVjdChoYXNoKTtcbiAgLy8gICBjdXJyZW50UHJvamVjdCA9IHVuZGVmaW5lZDtcbiAgLy8gfVxuXG4gIC8vIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0Q29udHJvbGxlciA9ICgpID0+IGN1cnJlbnRQcm9qZWN0OyAvLyB0byB1dGlsaXplIG1hbmlwdWxhdGlvbiBmb3IgdGhlIGN1cnJlbnQgcHJvamVjdFxuICAvLyBjb25zdCBzd2l0Y2hQcm9qZWN0ID0gKHByb2plY3RIYXNoVmFsdWUpID0+IHtcbiAgLy8gICBbY3VycmVudFByb2plY3RdID0gbWFpbkJvYXJkLmZpbmRQcm9qZWN0KHByb2plY3RIYXNoVmFsdWUpOyAvLyBhc3NpZ24gdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGFycmF5XG4gIC8vIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgc2hvd0VudGlyZVByb2plY3QsXG4gICAgY3JlYXRlSXRlbSxcbiAgICByZW1vdmVJdGVtLFxuICAgIHNob3dJdGVtQ29udGFpbmVyLFxuICAgIGVkaXRJdGVtXG4gIH07XG59XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBDb250cm9sbGVyKCk7IC8vIG1ha2Ugc3VyZSBkZWZpbmUgdGhpcyBpbnNpZGUgdGhlIFNjcmVlbkNvbnRyb2xsZXIgYXQgdGhlIGVuZCBvZiB0aGUgZGV2ZWxvcGVtZW50IGZvciBhIHNlY3VyaXR5IHJlYXNvblxuXG4vLyBmdW5jdGlvbiBTY3JlZW5Db250cm9sbGVyKCkge1xuLy8gICBjb250cm9sbGVyID0gQ29udHJvbGxlcigpO1xuLy8gICAvLyBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4vLyAgIC8vIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUtaW5wdXQnKTtcbi8vICAgLy8gY29uc3QgcHJvamVjdEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWFkZC1idXR0b24nKTtcbi8vICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWNvbnRhaW5lcicpO1xuLy8gICBjb25zdCBpdGVtVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXRpdGxlLWlucHV0Jyk7XG4vLyAgIGNvbnN0IGl0ZW1EYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1kYXRlLWlucHV0Jyk7XG4vLyAgIGNvbnN0IGl0ZW1Db250ZW50SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1jb250ZW50LWlucHV0Jyk7XG4vLyAgIGNvbnN0IGl0ZW1TdGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1zdGFyLWlucHV0Jyk7XG4vLyAgIGNvbnN0IGl0ZW1BZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1hZGQtcG9wLXVwLWFkZCcpO1xuLy8gICBjb25zdCBpdGVtQWRkV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tYWRkLXBvcC11cCcpO1xuLy8gICBjb25zdCBpdGVtQWRkV2luZG93T3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWFkZC1idXR0b24nKTtcbi8vICAgY29uc3QgaXRlbUFkZFdpbmRvd0Nsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tYWRkLXBvcC11cC1jbG9zZScpO1xuXG4vLyAgIGNvbnN0IHVwZGF0ZURpc3BsYXkgPSAoKSA9PiB7XG4vLyAgICAgLy8gcHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy8gY2xlYW4gdXAgdGhlIGluc2lkZSBiZWZvcmUgcHVzaGluZyBwcm9qZWN0cyBpbnRvIGl0XG4vLyAgICAgLy8gY29uc3QgcHJvamVjdHMgPSBjb250cm9sbGVyLmdldEVudGlyZVByb2plY3QoKTtcbi8vICAgICAvLyBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuLy8gICAgIC8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgLy8gICBpZiAocHJvamVjdCA9PT0gY29udHJvbGxlci5nZXRQcm9qZWN0Q29udHJvbGxlcigpKSB7XG4vLyAgICAgLy8gICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4vLyAgICAgLy8gICB9IC8vIGhpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3Rcbi8vICAgICAvLyAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4vLyAgICAgLy8gICBkaXYuZGF0YXNldC5oYXNoID0gcHJvamVjdC5oYXNoO1xuLy8gICAgIC8vICAgZGl2LmlubmVySFRNTCA9IGBcbi8vICAgICAvLyAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRleHRcIj5cbi8vICAgICAvLyAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7cHJvamVjdC50aXRsZX08L3A+XG4vLyAgICAgLy8gICA8L2Rpdj5cbi8vICAgICAvLyAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJ1dHRvbnNcIj5cbi8vICAgICAvLyAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3QtZWRpdFwiPlxuLy8gICAgIC8vICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvZWRpdC5zdmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIwcHhcIiAvPlxuLy8gICAgIC8vICAgICA8L2J1dHRvbj5cbi8vICAgICAvLyAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3QtZGVsZXRlXCI+XG4vLyAgICAgLy8gICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9kZWxldGUuc3ZnXCIgYWx0PVwiXCIgd2lkdGg9XCIyMHB4XCIgLz5cbi8vICAgICAvLyAgICAgPC9idXR0b24+XG4vLyAgICAgLy8gICA8L2Rpdj5gO1xuLy8gICAgIC8vICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuLy8gICAgIC8vIH0pO1xuXG4vLyAgICAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgLy8gY2xlYW4gdXAgdGhlIGluc2lkZSBiZWZvcmUgcHVzaGluZyBwcm9qZWN0cyBpbnRvIGl0XG4vLyAgICAgY29uc3QgaXRlbXMgPSBjb250cm9sbGVyLmdldFByb2plY3RDb250cm9sbGVyKCkuZ2V0SXRlbXMoKTsgLy8gY3VycmVudCBwcm9qZWN0J3MgaXRlbXNcbi8vICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuLy8gICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuLy8gICAgICAgZGl2LmRhdGFzZXQuaGFzaCA9IGl0ZW0uaGFzaDtcbi8vICAgICAgIGRpdi5pbm5lckhUTUwgPSBgXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1sZWZ0XCI+XG4vLyAgICAgICA8YnV0dG9uIGNsYXNzPVwiaXRlbS1jaGVja1wiPjwvYnV0dG9uPlxuLy8gICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvc3Bhbj5cbi8vICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1kYXRlXCI+JHtpdGVtLmRhdGV9PC9zcGFuPlxuLy8gICAgIDwvZGl2PlxuLy8gICAgIDxkaXYgY2xhc3M9XCJpdGVtLXJpZ2h0XCI+XG4vLyAgICAgICA8YnV0dG9uIGNsYXNzPVwiaXRlbS1kb3RzXCI+PC9idXR0b24+XG4vLyAgICAgICA8YnV0dG9uIGNsYXNzPVwiaXRlbS1zdGFyXCI+PC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgICBgO1xuLy8gICAgICAgaWYgKGl0ZW0uc3Rhcikge1xuLy8gICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc3RhcnJlZCcpO1xuLy8gICAgICAgfVxuLy8gICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuLy8gICAgIH0pO1xuLy8gICB9O1xuXG4vLyAgIHVwZGF0ZURpc3BsYXkoKTsgLy8gaW5pdGlhbCByZW5kZXJcblxuLy8gICAvLyBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuLy8gICAvLyAgIGNvbnN0IHRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG4vLyAgIC8vICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSAnJztcbi8vICAgLy8gICBjb250cm9sbGVyLmNyZWF0ZVByb2plY3QodGl0bGUpO1xuXG4vLyAgIC8vICAgY29udHJvbGxlci5zd2l0Y2hQcm9qZWN0KGNvbnRyb2xsZXIuZ2V0RW50aXJlUHJvamVjdCgpW2NvbnRyb2xsZXIuZ2V0RW50aXJlUHJvamVjdCgpLmxlbmd0aC0xXS5oYXNoKTtcblxuLy8gICAvLyAgIHVwZGF0ZURpc3BsYXkoKTsgLy8gdXBkYXRlIHRoZSBsYXRlc3QgZGF0YSBhZnRlciBhZGRpbmcgYSBuZXcgZWxlbWVudFxuLy8gICAvLyB9XG4vLyAgIC8vIHByb2plY3RBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcblxuLy8gICBmdW5jdGlvbiBhZGRJdGVtKCkge1xuLy8gICAgIGNvbnN0IHRpdGxlID0gaXRlbVRpdGxlSW5wdXQudmFsdWU7XG4vLyAgICAgaXRlbVRpdGxlSW5wdXQudmFsdWUgPSAnJztcbi8vICAgICBjb25zdCBkYXRlID0gaXRlbURhdGVJbnB1dC52YWx1ZTtcbi8vICAgICBpdGVtRGF0ZUlucHV0LnZhbHVlID0gJyc7XG4vLyAgICAgY29uc3QgY29udGVudCA9IGl0ZW1Db250ZW50SW5wdXQudmFsdWU7XG4vLyAgICAgaXRlbURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuLy8gICAgIGNvbnN0IHN0YXIgPSBpdGVtU3RhcklucHV0LnZhbHVlO1xuLy8gICAgIGl0ZW1TdGFySW5wdXQudmFsdWUgPSAnJztcblxuLy8gICAgIGNvbnRyb2xsZXIuZ2V0UHJvamVjdENvbnRyb2xsZXIoKS5hZGRJdGVtKHRpdGxlLCBkYXRlLCBjb250ZW50LCBzdGFyKTtcblxuLy8gICAgIHVwZGF0ZURpc3BsYXkoKTsgLy8gdXBkYXRlIHRoZSBsYXRlc3QgZGF0YSBhZnRlciBhZGRpbmcgYSBuZXcgZWxlbWVudFxuLy8gICB9XG5cbi8vICAgaXRlbUFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBhZGRJdGVtKCk7XG4vLyAgICAgaXRlbUFkZFdpbmRvdy5jbG9zZSgpO1xuLy8gICAgIH1cbi8vICAgKTtcblxuLy8gICBmdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KGV2ZW50KSB7XG4vLyAgICAgY29uc3QgeyBoYXNoIH0gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKS5kYXRhc2V0O1xuLy8gICAgIGNvbnRyb2xsZXIuc3dpdGNoUHJvamVjdChoYXNoKTtcbi8vICAgICB1cGRhdGVEaXNwbGF5KCk7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuLy8gICAgICAgY29udHJvbGxlci5kZWxldGVQcm9qZWN0KCk7XG4vLyAgICAgICBpZiAoY29udHJvbGxlci5nZXRFbnRpcmVQcm9qZWN0KCkubGVuZ3RoICE9PSAwKSB7XG4vLyAgICAgICAgIGNvbnRyb2xsZXIuc3dpdGNoUHJvamVjdChjb250cm9sbGVyLmdldEVudGlyZVByb2plY3QoKVswXS5oYXNoKTsgLy8gYXV0b21hdGljYWxseSBjaG9vc2UgdGhlIGZpcnN0IHByb2plY3QgYWZ0ZXIgcHJvamVjdCBkZWxldGlvblxuLy8gICAgICAgfVxuLy8gICAgICAgdXBkYXRlRGlzcGxheSgpO1xuLy8gICAgIH1cblxuLy8gICBmdW5jdGlvbiBlZGl0UHJvamVjdChldmVudCkge1xuLy8gICAgIGNvbnN0IHRhcmdldERpdiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRhcmdldERpdik7XG4vLyAgICAgdGFyZ2V0RGl2LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgfVxuXG4vLyAgIC8vIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAvLyAgIHN3aXRjaFByb2plY3QoZSk7XG4vLyAgIC8vICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKSB7IC8vIGlmIHRoZSBlbGVtZW50IGNsaWNrZWQgaXMgYSBidXR0b25cbi8vICAgLy8gICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3RbMF0gPT09ICdwcm9qZWN0LWRlbGV0ZScpIHtcbi8vICAgLy8gICAgICAgZGVsZXRlUHJvamVjdCgpO1xuLy8gICAvLyAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3RbMF0gPT09ICdwcm9qZWN0LWVkaXQnKSB7XG4vLyAgIC8vICAgICAgIGVkaXRQcm9qZWN0KGUpO1xuLy8gICAvLyAgICAgfVxuLy8gICAvLyAgIH1cbi8vICAgLy8gfVxuLy8gICAvLyApXG5cbi8vICAgaXRlbUFkZFdpbmRvd09wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgaXRlbUFkZFdpbmRvdy5zaG93TW9kYWwoKTtcbi8vICAgfSlcblxuLy8gICBpdGVtQWRkV2luZG93Q2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgaXRlbUFkZFdpbmRvdy5jbG9zZSgpO1xuLy8gICB9KVxuXG4vLyAgIGNvbnN0IGl0ZW1TdGFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tc3RhcicpO1xuLy8gICBpdGVtU3RhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVN0YXIpO1xuXG4vLyAgIGZ1bmN0aW9uIHRvZ2dsZVN0YXIoKSB7XG4vLyAgICAgY29uc3QgaXRlbSA9IHRoaXMuY2xvc2VzdCgnLml0ZW0nKTtcbi8vICAgICBpZiAoaXRlbS5jbGFzc0xpc3RbMF0gPT09ICdzdGFycmVkJykge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJoZXlcIik7XG4vLyAgICAgICBjb25zdCB7aGFzaH0gPSBpdGVtLmRhdGFzZXQ7XG4vLyAgICAgICBjb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0Q29udHJvbGxlcigpLmVkaXRJdGVtKGhhc2gsIClcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuLy8gU2NyZWVuQ29udHJvbGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==