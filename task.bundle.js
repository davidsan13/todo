"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["task"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/task.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRhc2sgPSAodGl0bGUsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gIGxldCBkb25lID0gZmFsc2U7XG5cbiAgY29uc3QgaXNEb25lID0gKCkgPT4ge1xuICAgIGRvbmUgPSB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7IHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgZG9uZSB9O1xufTtcblxuY29uc3QgUHJvamVjdCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tzTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XG4gICAgdGFza3NMaXN0LnB1c2godGFzayk7XG4gIH07XG4gIHJldHVybiB7IHRhc2tzTGlzdCwgYWRkVGFzayB9O1xufTtcblxuZnVuY3Rpb24gQ3JlYXRlVGFzaygpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaScpLnZhbHVlO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm8nKS52YWx1ZTtcblxuICBpZiAocHJvamVjdCA9PSBudWxsIHx8IHByb2plY3QgPT09ICcnKSB7XG4gICAgcHJvamVjdCA9ICdEZWZhdWx0JztcbiAgfVxuICBwcm9qZWN0ID0gcHJvamVjdC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb2plY3Quc2xpY2UoMSk7XG4gIGNvbnN0IHRhc2sxID0gVGFzayh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuXG4gIHJldHVybiB0YXNrMTtcbn1cblxuZXhwb3J0IHsgVGFzaywgQ3JlYXRlVGFzaywgUHJvamVjdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9