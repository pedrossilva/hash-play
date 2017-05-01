webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* unused harmony export differentPlayer */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent() {
        this.submitted = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]().group({
            playerX: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            playerO: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        }, { validator: differentPlayer });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], FormComponent.prototype, "submitted", void 0);
    FormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__(624),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
// custom validation
var differentPlayer = function (control) {
    var playerX = control.get('playerX');
    var playerO = control.get('playerO');
    if (!playerX || !playerO)
        return null;
    return playerX.value === playerO.value ? { different: true } : null;
};
//# sourceMappingURL=/Users/pedrosilva/dev/angular4/hash-play/hash-play/src/form.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 346;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(457);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/pedrosilva/dev/angular4/hash-play/hash-play/src/main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_form_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.submitted = false;
        this.play = false;
    }
    Object.defineProperty(AppComponent.prototype, "formComponent", {
        set: function (fc) {
            var _this = this;
            setTimeout(function () {
                _this.form = fc.form;
            });
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.formSubmit = function () {
        this.submitted = true;
        if (this.form.valid)
            this.play = true;
    };
    AppComponent.prototype.newPlay = function () {
        this.play = false;
        this.submitted = false;
        this.previousPlayers = this.form.value;
        this.form.reset();
    };
    AppComponent.prototype.keepPlayers = function () {
        this.form.patchValue(this.previousPlayers);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__form_form_component__["a" /* FormComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__form_form_component__["a" /* FormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__form_form_component__["a" /* FormComponent */]) === 'function' && _a) || Object), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__form_form_component__["a" /* FormComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__form_form_component__["a" /* FormComponent */]) === 'function' && _b) || Object])
    ], AppComponent.prototype, "formComponent", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(623),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/pedrosilva/dev/angular4/hash-play/hash-play/src/app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__frame_frame_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_field_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_form_module__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__frame_frame_component__["a" /* FrameComponent */],
                __WEBPACK_IMPORTED_MODULE_6__field_field_component__["a" /* FieldComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__form_form_module__["a" /* FormModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/pedrosilva/dev/angular4/hash-play/hash-play/src/app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldComponent = (function () {
    function FieldComponent() {
    }
    Object.defineProperty(FieldComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldComponent.prototype, "player", {
        get: function () { return this._player; },
        set: function (p) {
            this._player = p;
        },
        enumerable: true,
        configurable: true
    });
    FieldComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])('val'), 
        __metadata('design:type', Object)
    ], FieldComponent.prototype, "value", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', Object)
    ], FieldComponent.prototype, "player", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', String)
    ], FieldComponent.prototype, "winner", void 0);
    FieldComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-field',
            template: "\n    <div class=\"field\" [class.pointer]=\"!value\">\n        <i *ngIf=\"value\" class=\"fa\" [class.fa-times]=\"value == 'x'\" [class.fa-circle-o]=\"value == 'o'\" \n        [class.winner]=\"winner\" [ngClass]=\"'pulse-'+value\"></i>\n        <i *ngIf=\"!value\" class=\"opaque fa\" [class.fa-times]=\"player == 'x'\" [class.fa-circle-o]=\"player == 'o'\"></i>\n    </div>",
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldComponent);
    return FieldComponent;
}());
//# sourceMappingURL=/Users/pedrosilva/dev/angular4/hash-play/hash-play/src/field.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__form_component__["a" /* FormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__form_component__["a" /* FormComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FormModule);
    return FormModule;
}());
//# sourceMappingURL=/Users/pedrosilva/dev/angular4/hash-play/hash-play/src/form.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrameComponent = (function () {
    function FrameComponent() {
        this.list = Array(9).fill(null);
        this.count = 0;
        this.draw = false;
        this.winners = {};
        this.dataSet = {};
        this.dataForm = {};
        this.newPlay = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    FrameComponent.prototype.choice = function (position) {
        var _this = this;
        if (this.winner)
            return;
        if (this.list[position] === null) {
            this.list[position] = this.player;
            this.player = (this.player === 'x') ? 'o' : 'x';
            this.count++;
            if (this.count > 2) {
                var winner_1 = this.checkWinner();
                if (winner_1 != null) {
                    setTimeout(function () { _this.winner = winner_1; });
                }
                else if (this.count == 9) {
                    setTimeout(function () { _this.draw = true; });
                }
            }
        }
    };
    FrameComponent.prototype.checkWinner = function () {
        var _this = this;
        var possibilyties = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];
        for (var i = 0; i < possibilyties.length; i++) {
            var _a = possibilyties[i], a = _a[0], b = _a[1], c = _a[2];
            var first = this.list[a];
            if (first == null)
                continue;
            if (first != this.list[b])
                continue;
            if (first == this.list[c]) {
                possibilyties[i].map(function (p) { return _this.winners[p] = true; });
                return first;
            }
        }
        return null;
    };
    FrameComponent.prototype.newRound = function () {
        this.newPlay.emit(true);
    };
    FrameComponent.prototype.ngOnInit = function () {
        this.player = this.randomChoice(['x', 'o']);
        this.dataSet = {
            x: this.dataForm.playerX,
            o: this.dataForm.playerO,
            winner: null
        };
    };
    FrameComponent.prototype.randomChoice = function (arr) {
        return arr[Math.floor(arr.length * Math.random())];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(), 
        __metadata('design:type', Object)
    ], FrameComponent.prototype, "dataForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === 'function' && _a) || Object)
    ], FrameComponent.prototype, "newPlay", void 0);
    FrameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'app-frame',
            template: __webpack_require__(625),
            styles: [__webpack_require__(622)]
        }), 
        __metadata('design:paramtypes', [])
    ], FrameComponent);
    return FrameComponent;
    var _a;
}());
//# sourceMappingURL=/Users/pedrosilva/dev/angular4/hash-play/hash-play/src/frame.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/pedrosilva/dev/angular4/hash-play/hash-play/src/environment.js.map

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "button {\n  margin-left: 4px;\n}\n"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 2em;\n  height: 2em;\n}\n.field {\n  border: none;\n  background-color: transparent;\n  width: 2em;\n  height: 2em;\n  padding: 0;\n  text-align: center;\n  line-height: 2em;\n  outline: none;\n  box-sizing: border-box;\n}\n.pointer {\n  cursor: pointer;\n}\n.opaque {\n  opacity: 0;\n}\n:host:hover .opaque {\n  opacity: 0.1;\n}\n.winner {\n  color: green;\n}\ni.fa {\n  width: 1em;\n  height: 1em;\n}\n\n\n/* animation pulse */\n@-webkit-keyframes wave {\n  5% {\n    opacity: .6;\n  }\n  27% {\n    -webkit-transform: scale(1.8);\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes wave {\n  5% {\n    opacity: .6;\n  }\n  27% {\n    -webkit-transform: scale(1.8);\n    transform: scale(1.8);\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.winner {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n\n.winner:after {\n  font-family: FontAwesome;\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  -webkit-animation: wave 3s 1s infinite linear;\n  animation: wave 3s 1s infinite linear;\n  zoom: 1;\n  filter: alpha(opacity=0);\n  -webkit-opacity: 0;\n  -moz-opacity: 0;\n  opacity: 0;\n  box-sizing: border-box;\n}\n.winner.pulse-x:after {\n  content: \"\\F00D\";\n}\n.winner.pulse-o:after {\n  content: \"\\F10C\";\n}\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = ".alert {\n  font-size: 12px;\n}\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = ".frame {\n  width: 15rem;\n}\nul.wrap-fields {\n  font-size: 2.5rem;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  width: 6em;\n  height: 6em;\n  margin-bottom: 1rem;\n}\nul.wrap-fields li {\n  list-style: none;\n  display: inline-block;\n  position: absolute;\n  border-color: #CCC;\n  z-index: 2;\n}\nul.wrap-fields li:nth-child(1) {\n  top: 0;\n  left: 0;\n}\nul.wrap-fields li:nth-child(2) {\n  top: 0;\n  left: 2em;\n}\nul.wrap-fields li:nth-child(3) {\n  top: 0;\n  left: 4em;\n}\nul.wrap-fields li:nth-child(4) {\n  top: 2em;\n  left: 0;\n}\nul.wrap-fields li:nth-child(5) {\n  top: 2em;\n  left: 2em;\n}\nul.wrap-fields li:nth-child(6) {\n  top: 2em;\n  left: 4em;\n}\nul.wrap-fields li:nth-child(7) {\n  top: 4em;\n  left: 0em;\n}\nul.wrap-fields li:nth-child(8) {\n  top: 4em;\n  left: 2em;\n}\nul.wrap-fields li:nth-child(9) {\n  top: 4em;\n  left: 4em;\n}\n.horizontal {\n  position: absolute;\n  width: 100%;\n  height: 2em;\n  top: 2em;\n  border-top: 1px solid #CCCCCC;\n  border-bottom: 1px solid #CCCCCC;\n  box-sizing: border-box;\n}\n.vertical {\n  position: absolute;\n  width: 2em;\n  height: 100%;\n  left: 2em;\n  border-left: 1px solid #CCCCCC;\n  border-right: 1px solid #CCCCCC;\n  box-sizing: border-box;\n}\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n  /*background-color: rgba(255, 255, 255, 0.7);*/\n}\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"w-box\">\n    <div class=\"box\">\n      <form (ngSubmit)=\"formSubmit()\" [hidden]=\"play\" [class.submitted]=\"submitted\">\n        <app-form [submitted]=\"submitted\"></app-form>\n        <div>\n          <button type=\"submit\" class=\"btn btn-default pull-right\">Play</button>\n          <button type=\"button\" *ngIf=\"previousPlayers\" (click)=\"keepPlayers()\"\n                  class=\"btn btn-default pull-right\">Keep players</button>\n        </div>\n      </form>\n      <app-frame *ngIf=\"play\" [dataForm]=\"form.value\" (newPlay)=\"newPlay()\"></app-frame>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<div class=\"form\" *ngIf=\"form\" [formGroup]=\"form\">\n  <ul class=\"alert alert-danger\" [hidden]=\"form.valid || !submitted\">\n    <li [hidden]=\"form.get('playerX').valid\">Enter the name of the player <i class=\"fa fa-times\"></i></li>\n    <li [hidden]=\"form.get('playerO').valid\">Enter the name of the player <i class=\"fa fa-circle-o\"></i></li>\n    <li [hidden]=\"!form.errors?.different\">The players' names must be different</li>\n  </ul>\n\n    <div class=\"form-group\">\n      <label>Player <i class=\"fa fa-times\"></i></label>\n      <input type=\"text\" formControlName=\"playerX\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Player <i class=\"fa fa-circle-o\"></i></label>\n      <input type=\"text\" formControlName=\"playerO\" class=\"form-control\">\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\" *ngIf=\"dataForm\">\n\n\n  <div *ngIf=\"!winner && !draw\" class=\"alert alert-info\">\n    <strong>\n      Player: {{ dataSet[player] }} ( <i class=\"fa\" [class.fa-times]=\"player == 'x'\" [class.fa-circle-o]=\"player == 'o'\"></i> )\n    </strong>\n  </div>\n  <div *ngIf=\"winner\" class=\"alert alert-success\">\n    <strong>\n      Player: {{ dataSet[winner] }} ( <i class=\"fa\" [class.fa-times]=\"winner == 'x'\" [class.fa-circle-o]=\"winner == 'o'\"></i> ) won!\n    </strong>\n  </div>\n  <div *ngIf=\"draw\" class=\"alert alert-warning\">\n    <strong>Draw!</strong>\n  </div>\n\n  <ul class=\"wrap-fields\">\n    <li *ngFor=\"let item of list; let i=index\">\n      <app-field (click)=\"choice(i)\" [player]=\"player\" [val]=\"item\"\n                 [winner]=\"winners[i]\"></app-field>\n    </li>\n\n    <div class=\"horizontal\"></div>\n    <div class=\"vertical\"></div>\n    <div *ngIf=\"draw || winner || end\" class=\"overlay\"></div>\n  </ul>\n\n  <div *ngIf=\"winner || draw\">\n    <button class=\"btn btn-primary pull-right\" (click)=\"newRound()\">New</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ })

},[641]);
//# sourceMappingURL=main.bundle.map