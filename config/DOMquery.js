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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DomNodeCollection = __webpack_require__(1);

const docReadyFunctions = [];
let docReady = false;

window.$l = (arg) => {
  switch(typeof arg) {
    case "function":
      return queueFunction(arg);
    // Case 1: arg is string with CSS selector
    case "string":
      return getNodesFromDom(arg);
    // Case 2: arg is HTMLElement
    case "object":
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
      }
  }
};

$l.extend = function (...objs) {
  let first = this;
  if (objs.length !== 1) {
    first = objs[0];
    Object.assign(first, ...objs.slice(1));
  }else {
    Object.assign(first, ...objs);
  }
  return first;
};

$l.ajax = (options) => {

  const xhr = new XMLHttpRequest();
  const defaults = {
    method: 'GET',
    url: "",
    data: {},
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: ()=>{},
    error: ()=>{}
  };

  let requestOptions = $l.extend(defaults, options);

  if (requestOptions.method === "GET") {
    options.url += `?${makeQueryString(options.data)}`;
  }

  xhr.open(requestOptions.method, requestOptions.url);

  xhr.onload = (e) => {
    if (xhr.status === 200) {
      requestOptions.success(xhr.response);
    } else {
      requestOptions.error(xhr.response);
    }
  };

  const optionalData = requestOptions.data;
  xhr.send(JSON.stringify(optionalData));
};

// helpers

const makeQueryString = (obj) => {
  let query = "";
  for (const prop in obj){
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      query += `${prop}=${obj[prop]}&`;
    }
  }
  return query.substring(0, query.length - 1);
};

const getNodesFromDom = (selector) => {
  if (selector[0] === '<') {
    const el = selector.match(/([a-zA-Z]+)/)[0];

    return new DomNodeCollection([document.createElement(el)]);
  }

  const nodeList = document.querySelectorAll(selector);
  const nodeArray = Array.from(nodeList);
  return new DomNodeCollection(nodeArray);
};

const queueFunction = (fn) => {
  if(!docReady) {
    docReadyFunctions.push(fn);
  } else{
    fn();
  }
};

document.addEventListener("DOMContentLoaded", (e) =>{
  docReady = true;
  docReadyFunctions.forEach((fn) => {
    fn();
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
    this.eventCallBack = {};
  }

  each(callBack) {
    this.nodes.forEach(callBack);
  }

  html(string) {
    if (string === undefined) {
      return this.nodes[0].innerHTML;
    }

    this.each((node) => {
      node.innerHTML = string;
    });

    return this;
  }

  empty() {
    this.html('');
  }

  append(arg) {
    if (this.nodes.length === 0) return;

    if (typeof arg === 'object' && !(arg instanceof DomNodeCollection)) {
      arg = $l(arg);
    }

    if (typeof arg === 'string'){
      this.each((node => {
        node.innerHTML += arg;
      }));
    } else if (arg instanceof DomNodeCollection) {
      // grab existing elements, delete and append to the end of this
      this.each((parentNode) => {
        arg.each((childNode) => {
          parentNode.appendChild(childNode.cloneNode(true));
        });
      });
    }
  }

  attr(key, value) {
    if (typeof value === 'undefined'){
      //getter
      return this.nodes[0].getAttribute(key);
    } else {
      //setter
      this.each((node)=>{
        return node.setAttribute(key, value);
      });
    }
  }

  addClass(newClass){
    this.each(node => node.classList.add(newClass));
  }

  removeClass(oldClass){
    this.each(node => node.classList.remove(oldClass));
  }

  toggleClass(toggleClass){
    this.each(node => node.classList.toggle(toggleClass));
  }

  children() {
    // iterate through node
    let childrenNodes = [];
    this.each((node)=>{
    // find the child
      let childrenForNode = node.children;
      childrenNodes = childrenNodes.concat(Array.from(childrenForNode));
    // create a dom obj for each child
    });
    return new DomNodeCollection(childrenNodes);
  }

  parent() {
    let parentNodes = [];
    this.each(({ parentNode }) => {
      if (parentNode.indexOf(parent) === -1){
      parentNodes.push(parentNode);
    }
    });
    return new DomNodeCollection(parentNodes);
  }

  find(selector) {
    let found = [];
    let foundNodes = [];
    this.each((node) => {
      foundNodes = (node.querySelectorAll(selector));
      found = found.concat(Array.from(foundNodes));
    });
    return new DomNodeCollection(found);
  }

  remove(){
    this.each((node) => {node.remove();});
  }

  on(eventType, callback) {
    this.eventCallBack[eventType] = callback;
    this.each((node) => {
      node.addEventListener(eventType, callback);
    });
  }

  off(eventType) {
    this.each((node) => {
      node.removeEventListener(eventType, this.eventCallBack[eventType]);
    });
    delete this.eventCallBack[eventType];
  }
}

module.exports = DomNodeCollection;


/***/ })
/******/ ]);