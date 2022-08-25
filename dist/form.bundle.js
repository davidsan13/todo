/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9mb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gZm9ybSgpIHtcbiAgY29uc3QgZm9ybUNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29uc3QgdGl0bGVMbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNvbnN0IHRpdGxlSW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgZGF0ZUxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgZGF0ZUlucCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHByaUxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgcHJpU2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IG9wdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgY29uc3Qgb3B0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBjb25zdCBvcHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGNvbnN0IHByb0xsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgY29uc3QgcHJvSW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgZm9ybUNvbi5jbGFzc0xpc3QuYWRkKCdmb3JtQ29uJyk7XG5cbiAgdGl0bGVMbC5odG1sRm9yID0gJ3RpdGxlJztcbiAgdGl0bGVMbC50ZXh0Q29udGVudCA9ICdUYXNrJztcbiAgdGl0bGVJbnAuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrJyk7XG4gIHRpdGxlSW5wLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnAuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgdGl0bGVJbnAuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG5cbiAgZGF0ZUxsLmh0bWxGb3IgPSAnZGF0ZSc7XG4gIGRhdGVMbC50ZXh0Q29udGVudCA9ICdEYXRlJztcbiAgZGF0ZUlucC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0RhdGUnKTtcbiAgZGF0ZUlucC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgZGF0ZUlucC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlSW5wLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG5cbiAgcHJpTGwuaHRtbEZvciA9ICdwcmknO1xuICBwcmlMbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gIHByaVNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaScpO1xuICBwcmlTZWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaScpO1xuICBvcHQxLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpO1xuICBvcHQxLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICBvcHQyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnTWlkJyk7XG4gIG9wdDIudGV4dENvbnRlbnQgPSAnTWlkJztcbiAgb3B0My5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0xvdycpO1xuICBvcHQzLnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgcHJvTGwuaHRtbEZvciA9ICdwcm8nO1xuICBwcm9MbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgcHJvSW5wLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCcpO1xuICBwcm9JbnAuc2V0QXR0cmlidXRlKCdpZCcsICdwcm8nKTtcbiAgcHJvSW5wLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHByb0lucC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvJyk7XG5cbiAgY2FuY2VsLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbCcpO1xuICBjYW5jZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdjYW5jZWwnKTtcbiAgY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkRm9ybScpO1xuICBhZGRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQnKTtcbiAgYWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblxuICBwcmlTZWwuYXBwZW5kQ2hpbGQob3B0MSk7XG4gIHByaVNlbC5hcHBlbmRDaGlsZChvcHQyKTtcbiAgcHJpU2VsLmFwcGVuZENoaWxkKG9wdDMpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxsKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnApO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlTGwpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpTGwpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlTZWwpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcm9MbCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByb0lucCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGNhbmNlbCk7XG4gIGZvcm1Db24uYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuICByZXR1cm4gZm9ybUNvbjtcbn1cblxuZnVuY3Rpb24gZm9ybUFjdGl2ZSgpIHtcbiAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Db24nKTtcbiAgZm9ybUVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiBmb3JtSGlkZGVuKCkge1xuICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbicpO1xuICBmb3JtRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmV4cG9ydCB7IGZvcm0sIGZvcm1BY3RpdmUsIGZvcm1IaWRkZW4gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==