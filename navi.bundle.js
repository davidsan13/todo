"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["navi"],{

/***/ "./src/components/hamburger.js":
/*!*************************************!*\
  !*** ./src/components/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hamburger)
/* harmony export */ });
function Hamburger() {
  const container = document.createElement('div');
  const label = document.createElement('label');
  const hamIcon = document.createElement('i');
  const close = document.createElement('i');

  container.classList.add('hamburger');
  label.setAttribute('for', 'toggle');
  hamIcon.classList.add('fas', 'fa-bars', 'hamburger');
  close.classList.add('fa-solid', 'fa-x');

  container.appendChild(label);
  container.appendChild(hamIcon);
  container.appendChild(close);

  return container;
}


/***/ }),

/***/ "./src/components/navi.js":
/*!********************************!*\
  !*** ./src/components/navi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navi)
/* harmony export */ });
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ "./src/components/hamburger.js");


function navi() {
  const nav = document.createElement('div');
  const title = document.createElement('h1');
  nav.classList.add('nav');
  title.textContent = 'To Do List';
  nav.appendChild((0,_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])());
  nav.appendChild(title);
  return nav;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/navi.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm9DOztBQUVyQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFTO0FBQzNCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb21wb25lbnRzL25hdmkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGFtYnVyZ2VyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBoYW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyJyk7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZ2dsZScpO1xuICBoYW1JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1iYXJzJywgJ2hhbWJ1cmdlcicpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS14Jyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhhbUljb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCJpbXBvcnQgSGFtYnVyZ2VyIGZyb20gJy4vaGFtYnVyZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2aSgpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdUbyBEbyBMaXN0JztcbiAgbmF2LmFwcGVuZENoaWxkKEhhbWJ1cmdlcigpKTtcbiAgbmF2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmV0dXJuIG5hdjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==