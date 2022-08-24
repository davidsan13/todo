"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["form"],{

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form),
/* harmony export */   "formActive": () => (/* binding */ formActive),
/* harmony export */   "formHidden": () => (/* binding */ formHidden)
/* harmony export */ });
function form() {
  const formCon = document.createElement('div');
  const taskForm = document.createElement('form');
  const titleLl = document.createElement('label');
  const titleInp = document.createElement('input');
  const dateLl = document.createElement('label');
  const dateInp = document.createElement('input');
  const priLl = document.createElement('label');
  const priSel = document.createElement('select');
  const opt1 = document.createElement('option');
  const opt2 = document.createElement('option');
  const opt3 = document.createElement('option');
  const proLl = document.createElement('label');
  const proInp = document.createElement('input');
  const cancel = document.createElement('button');
  const addBtn = document.createElement('input');

  formCon.classList.add('formCon');

  titleLl.htmlFor = 'title';
  titleLl.textContent = 'Task';
  titleInp.setAttribute('placeholder', 'Task');
  titleInp.setAttribute('id', 'title');
  titleInp.setAttribute('type', 'text');
  titleInp.setAttribute('name', 'title');

  dateLl.htmlFor = 'date';
  dateLl.textContent = 'Date';
  dateInp.setAttribute('placeholder', 'Date');
  dateInp.setAttribute('id', 'date');
  dateInp.setAttribute('type', 'date');
  dateInp.setAttribute('name', 'date');

  priLl.htmlFor = 'pri';
  priLl.textContent = 'Priority';
  priSel.setAttribute('id', 'pri');
  priSel.setAttribute('name', 'pri');
  opt1.setAttribute('value', 'High');
  opt1.textContent = 'High';
  opt2.setAttribute('value', 'Mid');
  opt2.textContent = 'Mid';
  opt3.setAttribute('value', 'Low');
  opt3.textContent = 'Low';

  proLl.htmlFor = 'pro';
  proLl.textContent = 'Project';
  proInp.setAttribute('placeholder', 'Project');
  proInp.setAttribute('id', 'pro');
  proInp.setAttribute('type', 'text');
  proInp.setAttribute('name', 'pro');

  cancel.textContent = 'Cancel';
  cancel.setAttribute('id', 'cancel');
  cancel.setAttribute('value', 'cancel');
  cancel.setAttribute('type', 'button');
  addBtn.textContent = 'Add Task';
  addBtn.setAttribute('id', 'addForm');
  addBtn.setAttribute('value', 'Add');
  addBtn.setAttribute('type', 'submit');

  priSel.appendChild(opt1);
  priSel.appendChild(opt2);
  priSel.appendChild(opt3);
  taskForm.appendChild(titleLl);
  taskForm.appendChild(titleInp);
  taskForm.appendChild(dateLl);
  taskForm.appendChild(dateInp);
  taskForm.appendChild(priLl);
  taskForm.appendChild(priSel);
  taskForm.appendChild(proLl);
  taskForm.appendChild(proInp);
  taskForm.appendChild(addBtn);
  taskForm.appendChild(cancel);
  formCon.appendChild(taskForm);
  return formCon;
}

function formActive() {
  const formEl = document.querySelector('.formCon');
  formEl.classList.add('active');
}

function formHidden() {
  const formEl = document.querySelector('.formCon');
  formEl.classList.remove('active');
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/form.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBmb3JtKCkge1xuICBjb25zdCBmb3JtQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCB0aXRsZUxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgdGl0bGVJbnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBkYXRlTGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBkYXRlSW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgcHJpTGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBwcmlTZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgY29uc3Qgb3B0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBvcHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IG9wdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3QgcHJvTGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBwcm9JbnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBmb3JtQ29uLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db24nKTtcblxuICB0aXRsZUxsLmh0bWxGb3IgPSAndGl0bGUnO1xuICB0aXRsZUxsLnRleHRDb250ZW50ID0gJ1Rhc2snO1xuICB0aXRsZUlucC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2snKTtcbiAgdGl0bGVJbnAuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICB0aXRsZUlucC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcblxuICBkYXRlTGwuaHRtbEZvciA9ICdkYXRlJztcbiAgZGF0ZUxsLnRleHRDb250ZW50ID0gJ0RhdGUnO1xuICBkYXRlSW5wLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGF0ZScpO1xuICBkYXRlSW5wLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICBkYXRlSW5wLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGRhdGVJbnAuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcblxuICBwcmlMbC5odG1sRm9yID0gJ3ByaSc7XG4gIHByaUxsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgcHJpU2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpJyk7XG4gIHByaVNlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpJyk7XG4gIG9wdDEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdIaWdoJyk7XG4gIG9wdDEudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIG9wdDIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNaWQnKTtcbiAgb3B0Mi50ZXh0Q29udGVudCA9ICdNaWQnO1xuICBvcHQzLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTG93Jyk7XG4gIG9wdDMudGV4dENvbnRlbnQgPSAnTG93JztcblxuICBwcm9MbC5odG1sRm9yID0gJ3Bybyc7XG4gIHByb0xsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICBwcm9JbnAuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0Jyk7XG4gIHByb0lucC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BybycpO1xuICBwcm9JbnAuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgcHJvSW5wLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm8nKTtcblxuICBjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsJyk7XG4gIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2NhbmNlbCcpO1xuICBjYW5jZWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICBhZGRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRGb3JtJyk7XG4gIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCcpO1xuICBhZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXG4gIHByaVNlbC5hcHBlbmRDaGlsZChvcHQxKTtcbiAgcHJpU2VsLmFwcGVuZENoaWxkKG9wdDIpO1xuICBwcmlTZWwuYXBwZW5kQ2hpbGQob3B0Myk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRpdGxlTGwpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGVMbCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGVJbnApO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlMbCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByaVNlbCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByb0xsKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJvSW5wKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKTtcbiAgZm9ybUNvbi5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gIHJldHVybiBmb3JtQ29uO1xufVxuXG5mdW5jdGlvbiBmb3JtQWN0aXZlKCkge1xuICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbicpO1xuICBmb3JtRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1IaWRkZW4oKSB7XG4gIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29uJyk7XG4gIGZvcm1FbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuZXhwb3J0IHsgZm9ybSwgZm9ybUFjdGl2ZSwgZm9ybUhpZGRlbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9