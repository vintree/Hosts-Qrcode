/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _React = React;
	var Component = _React.Component;
	var _ReactDOM = ReactDOM;
	var render = _ReactDOM.render;

	var jrQrcode = __webpack_require__(94);

	var Qrcode = function (_Component) {
	    _inherits(Qrcode, _Component);

	    function Qrcode(props) {
	        _classCallCheck(this, Qrcode);

	        var _this = _possibleConstructorReturn(this, (Qrcode.__proto__ || Object.getPrototypeOf(Qrcode)).call(this, props));

	        _this.state = {
	            submit: {
	                text: '获取二维码'
	            },
	            imgBase64: ''
	        };
	        return _this;
	    }

	    _createClass(Qrcode, [{
	        key: 'handleStart',
	        value: function handleStart() {
	            var href = this.refs.address.value;
	            var imgBase64 = jrQrcode.getQrBase64(href, {});
	            console.log(href, imgBase64);
	            this.setState({
	                imgBase64: imgBase64
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state;
	            var submit = _state.submit;
	            var imgBase64 = _state.imgBase64;

	            return React.createElement(
	                'div',
	                { className: 'qrcode' },
	                React.createElement(
	                    'div',
	                    { className: 'header' },
	                    React.createElement('input', { className: 'search-input', type: 'text', placeholder: '\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740', ref: 'address', defaultValue: '' }),
	                    React.createElement(
	                        'div',
	                        { className: 'search-submit', onClick: this.handleStart.bind(this) },
	                        submit.text
	                    )
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'tbody' },
	                    React.createElement(
	                        'div',
	                        { className: 'imgBase64' },
	                        React.createElement('img', { src: imgBase64, alt: '' })
	                    )
	                )
	            );
	        }
	    }]);

	    return Qrcode;
	}(Component);

	var packages = __webpack_require__(8);
	render(React.createElement(Qrcode, null), document.querySelector('.' + packages.name));

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.25.0@css-loader/index.js!./../node_modules/.4.0.2@sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../node_modules/.0.25.0@css-loader/index.js!./../node_modules/.4.0.2@sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".qrcode .header {\n  padding: 0 20px;\n  height: 50px;\n  line-height: 50px;\n  background-color: #eaeaea; }\n  .qrcode .header .search-input {\n    float: left;\n    width: 80%;\n    height: 100%;\n    border: none;\n    outline: none;\n    background-color: transparent;\n    font-size: 18px;\n    color: #868686; }\n  .qrcode .header .search-submit {\n    float: left;\n    text-align: center;\n    font-size: 18px;\n    color: #b1b1b1;\n    cursor: pointer; }\n    .qrcode .header .search-submit:hover {\n      color: #989898; }\n\n.qrcode .tbody .imgBase64 {\n  padding-top: 20px;\n  width: 256px;\n  height: 256px;\n  margin: auto; }\n", ""]);

	// exports


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 8:
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		"name": "qrcode",
		"version": "1.0.0",
		"description": "Hosts pluging qrcode",
		"main": "index.js",
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1",
			"dev": "webpack -w"
		},
		"keywords": ["Hosts", "qrcode"],
		"author": "puxiao",
		"license": "MIT",
		"icons": "icons/app.png",
		"switch": true,
		"devDependencies": {
			"babel": "^6.5.2",
			"babel-core": "^6.14.0",
			"babel-loader": "^6.2.5",
			"babel-plugin-check-es2015-constants": "^6.8.0",
			"babel-plugin-transform-es2015-arrow-functions": "^6.8.0",
			"babel-plugin-transform-es2015-block-scoped-functions": "^6.8.0",
			"babel-plugin-transform-es2015-typeof-symbol": "^6.8.0",
			"babel-preset-es2015": "^6.14.0",
			"babel-preset-react": "^6.11.1",
			"babel-preset-stage-0": "^6.16.0",
			"clean-webpack-plugin": "^0.1.10",
			"copy-webpack-plugin": "^3.0.1",
			"css-loader": "^0.25.0",
			"immutable": "^3.8.1",
			"jr-qrcode": "^1.0.5",
			"json-loader": "^0.5.4",
			"json-parse-helpfulerror": "^1.0.3",
			"node-gyp": "^3.4.0",
			"node-sass": "^3.4.2",
			"postcss-loader": "^0.13.0",
			"qrcode": "^0.5.0",
			"react": "^15.3.2",
			"react-addons-transition-group": "^15.3.2",
			"react-dom": "^15.3.2",
			"react-redux": "^4.4.5",
			"redux": "^3.6.0",
			"sass-loader": "^4.0.2",
			"style-loader": "^0.13.1",
			"url-loader": "^0.5.7",
			"webpack": "^1.13.2"
		}
	};

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var o in r)("object"==typeof exports?exports:t)[o]=r[o]}}(this,function(){return function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";t.exports=r(3)},function(t,e){"use strict";!function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),r=1;r<arguments.length;r++){var o=arguments[r];if(void 0!==o&&null!==o){o=Object(o);for(var n=Object.keys(Object(o)),i=0,a=n.length;i<a;i++){var s=n[i],u=Object.getOwnPropertyDescriptor(o,s);void 0!==u&&u.enumerable&&(e[s]=o[s])}}}return e}})}()},function(t,e){"use strict";t.exports=function(){var t={};return t.utf16to8=function(t){var e,r,o,n;for(e="",o=t.length,r=0;r<o;r++)n=t.charCodeAt(r),n>=1&&n<=127?e+=t.charAt(r):n>2047?(e+=String.fromCharCode(224|n>>12&15),e+=String.fromCharCode(128|n>>6&63),e+=String.fromCharCode(128|n>>0&63)):(e+=String.fromCharCode(192|n>>6&31),e+=String.fromCharCode(128|n>>0&63));return e},t.utf8to16=function(t){var e,r,o,n,i,a;for(e="",o=t.length,r=0;r<o;)switch(n=t.charCodeAt(r++),n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=t.charAt(r-1);break;case 12:case 13:i=t.charCodeAt(r++),e+=String.fromCharCode((31&n)<<6|63&i);break;case 14:i=t.charCodeAt(r++),a=t.charCodeAt(r++),e+=String.fromCharCode((15&n)<<12|(63&i)<<6|(63&a)<<0)}return e},t}()},function(t,e,r){"use strict";r(1),r(4);var o=r(2),n=function(){function t(t){var e=new QRCode(t.typeNumber,t.correctLevel);e.addData(t.text),e.make();var r=document.createElement("canvas");r.width=t.width,r.height=t.height;var o=r.getContext("2d"),n=(t.width-2*t.padding)/e.getModuleCount(),i=(t.height-2*t.padding)/e.getModuleCount();o.fillStyle="#ffffff",o.fillRect(0,0,r.width,r.height);for(var a=0;a<e.getModuleCount();a++)for(var s=0;s<e.getModuleCount();s++){o.fillStyle=e.isDark(a,s)?t.foreground:t.background;var u=Math.ceil((s+1)*n)-Math.floor(s*n),h=Math.ceil((a+1)*n)-Math.floor(a*n);o.fillRect(Math.round(s*n)+t.padding,Math.round(a*i)+t.padding,u,h)}return r}var e={};return e.getQrBase64=function(e,r){"string"!=typeof e&&(e=""),"string"==typeof r?r={text:r}:"object"!=typeof r&&(r={}),r=Object.assign({padding:10,width:256,height:256,typeNumber:-1,correctLevel:QRErrorCorrectLevel.H,background:"#ffffff",foreground:"#000000"},r);try{r.text=o.utf16to8(e)}catch(n){r.text=""+n}var i=t(r);return i.toDataURL()},e.QRErrorCorrectLevel=QRErrorCorrectLevel,e}();window.jrQrcode=n,t.exports=n},function(t,e){function r(t){this.mode=s.MODE_8BIT_BYTE,this.data=t}function o(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}function n(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function i(t,e){this.totalCount=t,this.dataCount=e}function a(){this.buffer=new Array,this.length=0}r.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},o.prototype={addData:function(t){var e=new r(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=i.getRSBlocks(t,this.errorCorrectLevel),r=new a,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(var n=0;n<this.dataList.length;n++){var s=this.dataList[n];r.put(s.mode,4),r.put(s.getLength(),f.getLengthInBits(s.mode,t)),s.write(r)}if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4?this.modules[t+r][e+o]=!0:this.modules[t+r][e+o]=!1)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=f.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r),n=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*n,s=0;s<this.modules[i].length;s++){var u=s*n,h=this.modules[i][s];h&&(o.beginFill(0,100),o.moveTo(u,a),o.lineTo(u+n,a),o.lineTo(u+n,a+n),o.lineTo(u,a+n),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)i==-2||2==i||a==-2||2==a||0==i&&0==a?this.modules[o+i][n+a]=!0:this.modules[o+i][n+a]=!1}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(var r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=f.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(var n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[o][a-s]){var u=!1;i<t.length&&(u=1==(t[i]>>>n&1));var h=f.getMask(e,o,a-s);h&&(u=!u),this.modules[o][a-s]=u,n--,n==-1&&(i++,n=7)}if(o+=r,o<0||this.moduleCount<=o){o-=r,r=-r;break}}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,e,r){for(var n=i.getRSBlocks(t,e),s=new a,u=0;u<r.length;u++){var h=r[u];s.put(h.mode,4),s.put(h.getLength(),f.getLengthInBits(h.mode,t)),h.write(s)}for(var l=0,u=0;u<n.length;u++)l+=n[u].dataCount;if(s.getLengthInBits()>8*l)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*l+")");for(s.getLengthInBits()+4<=8*l&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;;){if(s.getLengthInBits()>=8*l)break;if(s.put(o.PAD0,8),s.getLengthInBits()>=8*l)break;s.put(o.PAD1,8)}return o.createBytes(s,n)},o.createBytes=function(t,e){for(var r=0,o=0,i=0,a=new Array(e.length),s=new Array(e.length),u=0;u<e.length;u++){var h=e[u].dataCount,l=e[u].totalCount-h;o=Math.max(o,h),i=Math.max(i,l),a[u]=new Array(h);for(var g=0;g<a[u].length;g++)a[u][g]=255&t.buffer[g+r];r+=h;var c=f.getErrorCorrectPolynomial(l),d=new n(a[u],c.getLength()-1),v=d.mod(c);s[u]=new Array(c.getLength()-1);for(var g=0;g<s[u].length;g++){var m=g+v.getLength()-s[u].length;s[u][g]=m>=0?v.get(m):0}}for(var p=0,g=0;g<e.length;g++)p+=e[g].totalCount;for(var C=new Array(p),E=0,g=0;g<o;g++)for(var u=0;u<e.length;u++)g<a[u].length&&(C[E++]=a[u][g]);for(var g=0;g<i;g++)for(var u=0;u<e.length;u++)g<s[u].length&&(C[E++]=s[u][g]);return C};for(var s={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},u={L:1,M:0,Q:3,H:2},h={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case h.PATTERN000:return(e+r)%2==0;case h.PATTERN001:return e%2==0;case h.PATTERN010:return r%3==0;case h.PATTERN011:return(e+r)%3==0;case h.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case h.PATTERN101:return e*r%2+e*r%3==0;case h.PATTERN110:return(e*r%2+e*r%3)%2==0;case h.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),r=0;r<t;r++)e=e.multiply(new n([1,l.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case s.MODE_NUMBER:return 10;case s.MODE_ALPHA_NUM:return 9;case s.MODE_8BIT_BYTE:return 8;case s.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case s.MODE_NUMBER:return 12;case s.MODE_ALPHA_NUM:return 11;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case s.MODE_NUMBER:return 14;case s.MODE_ALPHA_NUM:return 13;case s.MODE_8BIT_BYTE:return 16;case s.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==s&&0==u||a==t.isDark(o+s,n+u)&&i++;i>5&&(r+=3+i-5)}for(var o=0;o<e-1;o++)for(var n=0;n<e-1;n++){var h=0;t.isDark(o,n)&&h++,t.isDark(o+1,n)&&h++,t.isDark(o,n+1)&&h++,t.isDark(o+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(var o=0;o<e;o++)for(var n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(var n=0;n<e;n++)for(var o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);for(var f=0,n=0;n<e;n++)for(var o=0;o<e;o++)t.isDark(o,n)&&f++;var l=Math.abs(100*f/e/e-50)/5;return r+=10*l}},l={glog:function(t){if(t<1)throw new Error("glog("+t+")");return l.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return l.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;g<8;g++)l.EXP_TABLE[g]=1<<g;for(var g=8;g<256;g++)l.EXP_TABLE[g]=l.EXP_TABLE[g-4]^l.EXP_TABLE[g-5]^l.EXP_TABLE[g-6]^l.EXP_TABLE[g-8];for(var g=0;g<255;g++)l.LOG_TABLE[l.EXP_TABLE[g]]=g;n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=l.gexp(l.glog(this.get(r))+l.glog(t.get(o)));return new n(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=l.glog(this.get(0))-l.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(var o=0;o<t.getLength();o++)r[o]^=l.gexp(l.glog(t.get(o))+e);return new n(r,0).mod(t)}},i.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i.getRSBlocks=function(t,e){var r=i.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=new Array,a=0;a<o;a++)for(var s=r[3*a+0],u=r[3*a+1],h=r[3*a+2],f=0;f<s;f++)n.push(new i(u,h));return n},i.getRsBlockTable=function(t,e){switch(e){case u.L:return i.RS_BLOCK_TABLE[4*(t-1)+0];case u.M:return i.RS_BLOCK_TABLE[4*(t-1)+1];case u.Q:return i.RS_BLOCK_TABLE[4*(t-1)+2];case u.H:return i.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},a.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},window.QRCode=o,window.QRErrorCorrectLevel=u;try{t.exports={QRCode:o,QRErrorCorrectLevel:u}}catch(c){}}])});

/***/ }

/******/ });