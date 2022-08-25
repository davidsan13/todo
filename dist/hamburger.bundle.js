"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["hamburger"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/hamburger.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9oYW1idXJnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGFtYnVyZ2VyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb25zdCBoYW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGFtYnVyZ2VyJyk7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RvZ2dsZScpO1xuICBoYW1JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1iYXJzJywgJ2hhbWJ1cmdlcicpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS14Jyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhhbUljb24pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=