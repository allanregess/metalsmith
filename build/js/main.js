/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// mobile header menu toggle\nconst toggleMenu = document.querySelector('.toggle-menu').addEventListener(\"click\", function() {\n\tdocument.querySelector('.main-menu').classList.toggle('active');\n})\n\n// Toggle footer menu on mobile\nfor (let link of document.querySelectorAll('.links-list li:first-child')) {\n\tlink.addEventListener('click', function(){\n\t\tevent.target.parentElement.classList.toggle('active');\n\t})\n}\n\n//Anchor links\nconst url = window.location.href.split('#')[1];\nif (url !== undefined && document.querySelector('.' + url) ) {\n\twindow.scrollTo({\n\t\ttop: document.querySelector('.' + url).offsetTop,\n\t\tbehavior: 'smooth',\n\t})\n}\n\n// Read more buttons\nArray.from(document.querySelectorAll('.more')).map((bt)=>{\n\tbt.addEventListener('click', (e)=>{e.target.parentElement.classList.toggle('open')})\n})\n\n// copy buttons\nArray.from(document.querySelectorAll('.copy-btn')).map((bt)=>{\n\tbt.addEventListener('click', (e)=>{\n\t\te.preventDefault()\n\t\tcopyText(bt.getAttribute('data-copy'))\n\t\tlet el = document.createElement('span');\n\t\tel.innerHTML = 'Link copiado!';\n\t\tel.classList.add('txt-copied');\n\t\tdocument.body.appendChild(el);\n\t\tsetTimeout(function(){\n\t\t\tlet removeTip = document.querySelector('.txt-copied')\n\t\t\tremoveTip.parentNode.removeChild(removeTip);\n\t\t}, 2000);\n\t})\n})\n\nfunction copyText (str){\n\tconst el = document.createElement('textarea');\n\tel.value = str;\n\tel.setAttribute('readonly', '');\n\tel.style.position = 'absolute';\n\tel.style.left = '-9999px';\n\tdocument.body.appendChild(el);\n\tel.select();\n\tdocument.execCommand('copy');\n\tdocument.body.removeChild(el);\n}\n\n// TEMP fix vh unit for mobile\nfunction fixVh (){\n\tlet $elm = document.querySelector('.first-block')\n\tif ($elm) $elm.style.height = (window.innerHeight - 69) + 'px';\n}\nwindow.addEventListener('load', fixVh);\nwindow.addEventListener('resize', fixVh);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2JpbGUgaGVhZGVyIG1lbnUgdG9nZ2xlXG5jb25zdCB0b2dnbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1tZW51JykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KVxuXG4vLyBUb2dnbGUgZm9vdGVyIG1lbnUgb24gbW9iaWxlXG5mb3IgKGxldCBsaW5rIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rcy1saXN0IGxpOmZpcnN0LWNoaWxkJykpIHtcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0ZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdH0pXG59XG5cbi8vQW5jaG9yIGxpbmtzXG5jb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdO1xuaWYgKHVybCAhPT0gdW5kZWZpbmVkICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdXJsKSApIHtcblx0d2luZG93LnNjcm9sbFRvKHtcblx0XHR0b3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdXJsKS5vZmZzZXRUb3AsXG5cdFx0YmVoYXZpb3I6ICdzbW9vdGgnLFxuXHR9KVxufVxuXG4vLyBSZWFkIG1vcmUgYnV0dG9uc1xuQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9yZScpKS5tYXAoKGJ0KT0+e1xuXHRidC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e2UudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpfSlcbn0pXG5cbi8vIGNvcHkgYnV0dG9uc1xuQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29weS1idG4nKSkubWFwKChidCk9Pntcblx0YnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9Pntcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb3B5VGV4dChidC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29weScpKVxuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRlbC5pbm5lckhUTUwgPSAnTGluayBjb3BpYWRvISc7XG5cdFx0ZWwuY2xhc3NMaXN0LmFkZCgndHh0LWNvcGllZCcpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdGxldCByZW1vdmVUaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHh0LWNvcGllZCcpXG5cdFx0XHRyZW1vdmVUaXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZW1vdmVUaXApO1xuXHRcdH0sIDIwMDApO1xuXHR9KVxufSlcblxuZnVuY3Rpb24gY29weVRleHQgKHN0cil7XG5cdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0ZWwudmFsdWUgPSBzdHI7XG5cdGVsLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG5cdGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0ZWwuc3R5bGUubGVmdCA9ICctOTk5OXB4Jztcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cdGVsLnNlbGVjdCgpO1xuXHRkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbn1cblxuLy8gVEVNUCBmaXggdmggdW5pdCBmb3IgbW9iaWxlXG5mdW5jdGlvbiBmaXhWaCAoKXtcblx0bGV0ICRlbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3QtYmxvY2snKVxuXHRpZiAoJGVsbSkgJGVsbS5zdHlsZS5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gNjkpICsgJ3B4Jztcbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZml4VmgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFZoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });