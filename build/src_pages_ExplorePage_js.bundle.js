/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmusicapp"] = self["webpackChunkmusicapp"] || []).push([["src_pages_ExplorePage_js"],{

/***/ "./src/pages/ExplorePage.js":
/*!**********************************!*\
  !*** ./src/pages/ExplorePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ExplorePage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _explore_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore.scss */ \"./src/pages/explore.scss\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar CategoriesLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_material-ui_core_esm_utils_createSvgIcon_js\"), __webpack_require__.e(\"src_layouts_explore_CategoriesExploreLayout_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../layouts/explore/CategoriesExploreLayout */ \"./src/layouts/explore/CategoriesExploreLayout.js\"));\n});\nvar NewAlbumsLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_material-ui_core_esm_utils_createSvgIcon_js\"), __webpack_require__.e(\"src_layouts_explore_NewAlbumsExploreLayout_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../layouts/explore/NewAlbumsExploreLayout */ \"./src/layouts/explore/NewAlbumsExploreLayout.js\"));\n});\nvar MoodsGenresLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_material-ui_core_esm_utils_createSvgIcon_js\"), __webpack_require__.e(\"src_layouts_explore_MoodsGenresExploreLayout_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../layouts/explore/MoodsGenresExploreLayout */ \"./src/layouts/explore/MoodsGenresExploreLayout.js\"));\n});\nvar TrendingLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_material-ui_core_esm_utils_createSvgIcon_js\"), __webpack_require__.e(\"src_layouts_explore_TrendingExploreLayout_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../layouts/explore/TrendingExploreLayout */ \"./src/layouts/explore/TrendingExploreLayout.js\"));\n});\nvar NewMusicVideosLayout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_material-ui_core_esm_utils_createSvgIcon_js\"), __webpack_require__.e(\"src_layouts_explore_NewMusicVideosExploreLayout_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../layouts/explore/NewMusicVideosExploreLayout */ \"./src/layouts/explore/NewMusicVideosExploreLayout.js\"));\n});\n\nvar ExplorePage = /*#__PURE__*/function (_Component) {\n  _inherits(ExplorePage, _Component);\n\n  var _super = _createSuper(ExplorePage);\n\n  function ExplorePage() {\n    _classCallCheck(this, ExplorePage);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(ExplorePage, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CategoriesLayout, this.props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NewAlbumsLayout, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MoodsGenresLayout, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TrendingLayout, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NewMusicVideosLayout, null));\n    }\n  }]);\n\n  return ExplorePage;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://musicapp/./src/pages/ExplorePage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/explore.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/explore.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://musicapp/./src/pages/explore.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/pages/explore.scss":
/*!********************************!*\
  !*** ./src/pages/explore.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_explore_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./explore.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/explore.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_explore_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_explore_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://musicapp/./src/pages/explore.scss?");

/***/ })

}]);