/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmusicapp"] = self["webpackChunkmusicapp"] || []).push([["src_pages_newreleases_VideosPage_js"],{

/***/ "./node_modules/@material-ui/icons/esm/MoreVert.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/MoreVert.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/core/esm/utils/createSvgIcon.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n  d: \"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"\n}), 'MoreVert'));\n\n//# sourceURL=webpack://musicapp/./node_modules/@material-ui/icons/esm/MoreVert.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/PlayArrow.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/PlayArrow.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/core/esm/utils/createSvgIcon.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n  d: \"M8 5v14l11-7z\"\n}), 'PlayArrow'));\n\n//# sourceURL=webpack://musicapp/./node_modules/@material-ui/icons/esm/PlayArrow.js?");

/***/ }),

/***/ "./src/apis/videosApi.js":
/*!*******************************!*\
  !*** ./src/apis/videosApi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMusicVideos\": () => (/* binding */ getMusicVideos)\n/* harmony export */ });\n/* harmony import */ var _assets_images_song_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../assets/images/song-image.jpg */ \"./assets/images/song-image.jpg\");\n\nvar object = {\n  id: 1,\n  title: 'Be Like That',\n  artists: ['Kane Brown'],\n  image: _assets_images_song_image_jpg__WEBPACK_IMPORTED_MODULE_0__.default\n};\nfunction getMusicVideos() {\n  return new Array(100).fill(object);\n  ;\n}\n\n//# sourceURL=webpack://musicapp/./src/apis/videosApi.js?");

/***/ }),

/***/ "./src/components/common/NewMusicVideoComponent.jsx":
/*!**********************************************************!*\
  !*** ./src/components/common/NewMusicVideoComponent.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _newmusicvideo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newmusicvideo.scss */ \"./src/components/common/newmusicvideo.scss\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/MoreVert.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/PlayArrow.js\");\n\n\n\n\nfunction showIcons(index) {\n  var moreIcon = document.getElementsByClassName('newmusicvideo__more-icon')[index];\n  var playVideo = document.getElementsByClassName('newmusicvideo__play-icon')[index];\n  moreIcon.style.display = 'block';\n  playVideo.style.display = 'flex';\n}\n\nfunction hideIcons(index) {\n  var moreIcon = document.getElementsByClassName('newmusicvideo__more-icon')[index];\n  var playVideo = document.getElementsByClassName('newmusicvideo__play-icon')[index];\n  moreIcon.style.display = 'none';\n  playVideo.style.display = 'none';\n}\n\nfunction getArtistsName(artists) {\n  return artists.join(\", \");\n}\n\nfunction returnMusicVideo(props, ref) {\n  var video = props.video,\n      index = props.index;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \" newmusicvideo__item  newmusicvideo__item--size  newmusicvideo__item--theme\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \" newmusicvideo__imageholder  newmusicvideo__imageholder--size\",\n    ref: ref,\n    onMouseEnter: function onMouseEnter() {\n      return showIcons(index);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return hideIcons(index);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"newmusicvideo__more-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: video.image,\n    className: \"newmusicvideo__image  newmusicvideo__image--size\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \" newmusicvideo__play-icon  newmusicvideo__play-icon--size\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h4\", {\n    className: \"newmusicvideo__video-name\"\n  }, video.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"newmusicvideo__artist-name\"\n  }, getArtistsName(video.artists)));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(returnMusicVideo));\n\n//# sourceURL=webpack://musicapp/./src/components/common/NewMusicVideoComponent.jsx?");

/***/ }),

/***/ "./src/pages/newreleases/VideosPage.js":
/*!*********************************************!*\
  !*** ./src/pages/newreleases/VideosPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideosPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _videos_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos.scss */ \"./src/pages/newreleases/videos.scss\");\n/* harmony import */ var _apis_videosApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../apis/videosApi */ \"./src/apis/videosApi.js\");\n/* harmony import */ var _components_common_NewMusicVideoComponent_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/common/NewMusicVideoComponent.jsx */ \"./src/components/common/NewMusicVideoComponent.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nvar VideosPage = /*#__PURE__*/function (_Component) {\n  _inherits(VideosPage, _Component);\n\n  var _super = _createSuper(VideosPage);\n\n  function VideosPage() {\n    _classCallCheck(this, VideosPage);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(VideosPage, [{\n    key: \"renderMusicVideos\",\n    value: function renderMusicVideos(videos) {\n      return videos.map(function (video, index) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_NewMusicVideoComponent_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          key: video.id,\n          index: index,\n          video: video\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var videos = (0,_apis_videosApi__WEBPACK_IMPORTED_MODULE_2__.getMusicVideos)();\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"main\", {\n        className: \"center videopage\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n        className: \"videopage__title\"\n      }, \"Music videos\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n        className: \"videos videos--size\"\n      }, this.renderMusicVideos(videos)));\n    }\n  }]);\n\n  return VideosPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://musicapp/./src/pages/newreleases/VideosPage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/newmusicvideo.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/newmusicvideo.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".newmusicvideo__item {\\n  margin-right: 30px;\\n  border-radius: 2px;\\n  display: flex;\\n  flex-direction: column;\\n  color: white;\\n}\\n.newmusicvideo__item--size {\\n  height: auto;\\n  width: auto;\\n}\\n.newmusicvideo__icon {\\n  z-index: 10;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  color: black;\\n  height: 40px;\\n  width: 40px;\\n  border-radius: 20px;\\n  background-color: white;\\n  cursor: pointer;\\n}\\n.newmusicvideo__image--size {\\n  height: 100%;\\n  width: 100%;\\n}\\n.newmusicvideo__play-icon {\\n  display: none;\\n  cursor: pointer;\\n  color: inherit;\\n  border-radius: 20px;\\n  background-color: rgba(128, 128, 128, 0.4);\\n  align-items: center;\\n  justify-content: center;\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n  margin: auto;\\n}\\n.newmusicvideo__play-icon--size {\\n  height: 40px;\\n  width: 40px;\\n}\\n.newmusicvideo__more-icon {\\n  display: none;\\n  position: absolute;\\n  right: 10px;\\n  top: 10px;\\n}\\n.newmusicvideo__imageholder {\\n  position: relative;\\n  cursor: pointer;\\n  color: white;\\n}\\n.newmusicvideo__imageholder--size {\\n  height: 200px;\\n  width: 350px;\\n}\\n.newmusicvideo__song-name {\\n  margin-top: 10px;\\n  color: white;\\n}\\n.newmusicvideo__artist-name {\\n  margin-top: 3px;\\n  color: grey;\\n  font-weight: 500;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://musicapp/./src/components/common/newmusicvideo.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/newreleases/videos.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/newreleases/videos.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".videopage {\\n  padding: 30px 0;\\n}\\n.videopage__title {\\n  font-size: 42px;\\n  letter-spacing: -0.45px;\\n  line-height: 54px;\\n  font-weight: 700;\\n}\\n\\n.videos {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-gap: 50px 10px;\\n  margin-top: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://musicapp/./src/pages/newreleases/videos.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./assets/images/song-image.jpg":
/*!**************************************!*\
  !*** ./assets/images/song-image.jpg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"285095e27a060be9ceaa349faed3f4ff.jpg\");\n\n//# sourceURL=webpack://musicapp/./assets/images/song-image.jpg?");

/***/ }),

/***/ "./src/components/common/newmusicvideo.scss":
/*!**************************************************!*\
  !*** ./src/components/common/newmusicvideo.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_newmusicvideo_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./newmusicvideo.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/newmusicvideo.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_newmusicvideo_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_newmusicvideo_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://musicapp/./src/components/common/newmusicvideo.scss?");

/***/ }),

/***/ "./src/pages/newreleases/videos.scss":
/*!*******************************************!*\
  !*** ./src/pages/newreleases/videos.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_videos_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./videos.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/newreleases/videos.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_videos_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_videos_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://musicapp/./src/pages/newreleases/videos.scss?");

/***/ })

}]);