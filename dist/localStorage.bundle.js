"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["localStorage"],{

/***/ "./src/components/localStorage.js":
/*!****************************************!*\
  !*** ./src/components/localStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getKey": () => (/* binding */ getKey),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "getProjectValue": () => (/* binding */ getProjectValue),
/* harmony export */   "getValue": () => (/* binding */ getValue),
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "updateDone": () => (/* binding */ updateDone),
/* harmony export */   "valueGetter": () => (/* binding */ valueGetter)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/components/task.js");


function postData(task) {
  const projectKey = task.project;
  const project = localStorage.getItem(projectKey);

  if (project) {
    const items = JSON.parse(localStorage.getItem(projectKey));
    items.tasksList.push(task);
    localStorage.setItem(projectKey, JSON.stringify(items));
  } else {
    const createProject = (0,_task__WEBPACK_IMPORTED_MODULE_0__.Project)(task);
    createProject.addTask();
    localStorage.setItem(projectKey, JSON.stringify(createProject));
  }
}

function update(key, item){
  localStorage.setItem(key, JSON.stringify(item));
}
function getKey() {
  const keys = Array(Object.keys(localStorage));
  return keys[0];
}
// Get all key and values associated with key
function getValue() {
  const values = [];
  const keys = getKey();
  keys.forEach((key) => {
    values.push(JSON.parse(localStorage.getItem(key)));
  });
  return values;
}

function valueGetter(key) {
  const values = JSON.parse(localStorage.getItem(key));

  return values;
}

function getProjectValue(project) {
  return JSON.parse(localStorage.getItem(project));
}

function getProject() {
  const projects = [];
  const values = getValue();
  values.forEach((value) => {
    if (!(value.project in projects)) {
      projects.push(value.project);
    }
  });
  return projects;
}

function removeTask(key, index) {
  const tasks = getProjectValue(key);
  tasks.tasksList.splice(index, 1);
  update(key, tasks);
  return tasks;
}

function updateDone(key, index, check) {
  const object = getProjectValue(key);
  const values = object.tasksList;
  values[index].done = check;
  console.log(object, values);
  update(key, object);
}




/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTask": () => (/* binding */ CreateTask),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
const Task = (title, date, priority, project) => {
  let done = false;

  const isDone = () => {
    done = true;
  };

  return { title, date, priority, project, done };
};

const Project = (task) => {
  const tasksList = [];

  const addTask = () => {
    tasksList.push(task);
  };
  return { tasksList, addTask };
};

function CreateTask() {
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const priority = document.getElementById('pri').value;
  let project = document.getElementById('pro').value;

  if (project == null || project === '') {
    project = 'Default';
  }
  project = project.charAt(0).toUpperCase() + project.slice(1);
  const task1 = Task(title, date, priority, project);

  return task1;
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/localStorage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwwQkFBMEIsOENBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RXhHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Rhc2snO1xuXG5mdW5jdGlvbiBwb3N0RGF0YSh0YXNrKSB7XG4gIGNvbnN0IHByb2plY3RLZXkgPSB0YXNrLnByb2plY3Q7XG4gIGNvbnN0IHByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0S2V5KTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0S2V5KSk7XG4gICAgaXRlbXMudGFza3NMaXN0LnB1c2godGFzayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdEtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gUHJvamVjdCh0YXNrKTtcbiAgICBjcmVhdGVQcm9qZWN0LmFkZFRhc2soKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0S2V5LCBKU09OLnN0cmluZ2lmeShjcmVhdGVQcm9qZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlKGtleSwgaXRlbSl7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xufVxuZnVuY3Rpb24gZ2V0S2V5KCkge1xuICBjb25zdCBrZXlzID0gQXJyYXkoT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSk7XG4gIHJldHVybiBrZXlzWzBdO1xufVxuLy8gR2V0IGFsbCBrZXkgYW5kIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGgga2V5XG5mdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgY29uc3QgdmFsdWVzID0gW107XG4gIGNvbnN0IGtleXMgPSBnZXRLZXkoKTtcbiAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICB2YWx1ZXMucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpKTtcbiAgfSk7XG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIHZhbHVlR2V0dGVyKGtleSkge1xuICBjb25zdCB2YWx1ZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RWYWx1ZShwcm9qZWN0KSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgY29uc3QgdmFsdWVzID0gZ2V0VmFsdWUoKTtcbiAgdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgaWYgKCEodmFsdWUucHJvamVjdCBpbiBwcm9qZWN0cykpIHtcbiAgICAgIHByb2plY3RzLnB1c2godmFsdWUucHJvamVjdCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGtleSwgaW5kZXgpIHtcbiAgY29uc3QgdGFza3MgPSBnZXRQcm9qZWN0VmFsdWUoa2V5KTtcbiAgdGFza3MudGFza3NMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIHVwZGF0ZShrZXksIHRhc2tzKTtcbiAgcmV0dXJuIHRhc2tzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEb25lKGtleSwgaW5kZXgsIGNoZWNrKSB7XG4gIGNvbnN0IG9iamVjdCA9IGdldFByb2plY3RWYWx1ZShrZXkpO1xuICBjb25zdCB2YWx1ZXMgPSBvYmplY3QudGFza3NMaXN0O1xuICB2YWx1ZXNbaW5kZXhdLmRvbmUgPSBjaGVjaztcbiAgY29uc29sZS5sb2cob2JqZWN0LCB2YWx1ZXMpO1xuICB1cGRhdGUoa2V5LCBvYmplY3QpO1xufVxuXG5leHBvcnQgeyBwb3N0RGF0YSwgdXBkYXRlRG9uZSwgZ2V0S2V5LCBnZXRWYWx1ZSwgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdFZhbHVlLCByZW1vdmVUYXNrLCB2YWx1ZUdldHRlciB9O1xuIiwiY29uc3QgVGFzayA9ICh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcblxuICBjb25zdCBpc0RvbmUgPSAoKSA9PiB7XG4gICAgZG9uZSA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCBkb25lIH07XG59O1xuXG5jb25zdCBQcm9qZWN0ID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza3NMaXN0ID0gW107XG5cbiAgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICB0YXNrc0xpc3QucHVzaCh0YXNrKTtcbiAgfTtcbiAgcmV0dXJuIHsgdGFza3NMaXN0LCBhZGRUYXNrIH07XG59O1xuXG5mdW5jdGlvbiBDcmVhdGVUYXNrKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpJykudmFsdWU7XG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BybycpLnZhbHVlO1xuXG4gIGlmIChwcm9qZWN0ID09IG51bGwgfHwgcHJvamVjdCA9PT0gJycpIHtcbiAgICBwcm9qZWN0ID0gJ0RlZmF1bHQnO1xuICB9XG4gIHByb2plY3QgPSBwcm9qZWN0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvamVjdC5zbGljZSgxKTtcbiAgY29uc3QgdGFzazEgPSBUYXNrKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG5cbiAgcmV0dXJuIHRhc2sxO1xufVxuXG5leHBvcnQgeyBUYXNrLCBDcmVhdGVUYXNrLCBQcm9qZWN0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=