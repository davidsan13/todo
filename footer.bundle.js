"use strict";
(self["webpackChunktodo"] = self["webpackChunktodo"] || []).push([["footer"],{

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
function Footer() {
  const container = document.createElement('div');
  const content = document.createElement('div');
  const h2 = document.createElement('h2');
  const link = document.createElement('a');
  const logo = document.createElement('i');

  container.classList.add('footerContainer');
  content.classList.add('footerContent');
  h2.textContent = 'Copyright © 2022 David San';
  link.setAttribute('href', 'github.com/davidsan13');
  logo.classList.add('fab', 'fa-github');

  link.appendChild(logo);
  content.appendChild(h2);
  content.appendChild(link);
  container.appendChild(content);

  return container;
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/footer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckNvbnRhaW5lcicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckNvbnRlbnQnKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjIgRGF2aWQgU2FuJztcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZ2l0aHViLmNvbS9kYXZpZHNhbjEzJyk7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnZmFiJywgJ2ZhLWdpdGh1YicpO1xuXG4gIGxpbmsuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmspO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=