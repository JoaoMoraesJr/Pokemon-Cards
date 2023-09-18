(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-alerts></ngx-alerts>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pokemons/pokemons.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pokemons/pokemons.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-page col-md-12\">\r\n\r\n\t<div class=\"the-buttons\">\r\n\t\t<button class=\"btn btn-warning\" (click)=\"getAllPokemons()\">Random Pokemon Cards</button>\r\n\r\n\r\n\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" *ngFor=\"let tp of types\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-dark\" (click)=\"getPokemonByType(tp)\">{{tp}}</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-md-12 justify-content-center\">\r\n\t\t<h1 class=\"title\">POKEMON CARDS</h1>\r\n\t</div>\r\n\r\n\t<!-- DROPDOWN \r\n    <select [(ngModel)]=\"selectedCategory\" style=\"margin-left: 464px\">\r\n            <option *ngFor = \"let tp of types\" [value]=\"tp\">\r\n                {{tp}}\r\n            </option>\r\n        </select>\r\n        \r\n        <button class=\"btn btn-primary\" (click) = \"getPokemonByType(selectedCategory)\" [disabled]=\"!selectedCategory\">Generate Selected Type</button>\r\n     -->\r\n\t<div class=\"deck-word-cards\">\r\n\t\t<div *ngIf=\"deck.length>0\">\r\n\t\t\t<br>\r\n\t\t\t<p class=\"deck-word title\">DECK</p>\r\n\r\n\t\t\t<br>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"d-inline-flex col-md-12 flex-wrap\" *ngIf=\"deck.length>0\">\r\n\r\n\r\n\t\t\t<div class=\"flex-container2\" *ngFor=\"let d of deck; let i = index\">\r\n\t\t\t\t<div><img src={{d}} (click)=\"removeCard(i)\"></div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\t<br>\r\n\t<br>\r\n\r\n\t<div class=\"cards\" id=\"cardsid\">\r\n\t\t<p class=\"cards-word title\">CARDS</p>\r\n\t\t<ul class=\"cards-list\">\r\n\t\t\t<li class=\"flex-container\" *ngFor=\"let c of cardsImage\">\r\n\t\t\t\t<div><img layout=\"fill\" src={{c}} (click)=\"addCards(c)\"></div>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemons/pokemons.component */ "./src/app/pokemons/pokemons.component.ts");




const routes = [
    { path: '', component: _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_3__["PokemonsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pokemonAPI';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokemons/pokemons.component */ "./src/app/pokemons/pokemons.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm2015/ngx-alerts.js");








// Import BrowserAnimationsModule

// Import your library

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_5__["PokemonsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000, position: 'right' })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pokemons/pokemons.component.css":
/*!*************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n/* ----- REGULAR CARD IMAGES ----- */\r\n.flex-container img {\r\n    width: 300px;\r\n    height: 412.2px;\r\n    transform: scale(0.6);\r\n    transition: transform 0.5s, opacity 0.5s;\r\n    margin-bottom: -40px;\r\n    padding: 0;\r\n}\r\n.flex-container img:hover {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n/* ----- DECK IMAGES ----- */\r\n.flex-container2 img {\r\n    width: 157.5px;\r\n    height: 216.5px;\r\n    transform: scale(0.5);\r\n    transition: transform 0.5s, opacity 0.5s;\r\n    margin-bottom: -40px;\r\n    margin-left: -40px;\r\n    float: left;\r\n}\r\n.flex-container2 img:hover {\r\n    opacity: 1;\r\n    transform: scale(0.8);\r\n    margin-left: -40px;\r\n\r\n}\r\n/* ----- TEXT ----- */\r\n.title {\r\n    text-align: center;\r\n}\r\nh1 {\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    color: rgb(230, 195, 0);\r\n    font-size: 60px;\r\n    /* margin-left: 750px; */\r\n    margin-top: 40px;\r\n}\r\np {\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    color: azure;\r\n}\r\n.deck {\r\n    margin-left: 500px;\r\n    margin-top: 20px;\r\n}\r\n.cards-word {\r\n    font-size: 40px;\r\n    margin-top: 50px;\r\n    /* margin-left: 880px; */\r\n}\r\n.cards-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n}\r\n.deck-word {\r\n    margin-bottom: -20px;\r\n    font-size: 35px;\r\n    /* margin-left: 900pZ */\r\n}\r\n.d-inline-flex {\r\n    padding: 0 5%;\r\n    justify-content: flex-start;\r\n}\r\n/* ----- BUTTONS ----- */\r\n.btn-dark,\r\n.btn-warning {\r\n    margin-top: -2px;\r\n    margin-left: -5px;\r\n}\r\n.btn-warning{\r\n    margin-left: -1px;\r\n    margin-right: 4.5px;\r\n}\r\n.the-buttons {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n.btn {\r\n    padding: 10px;\r\n}\r\n.section-page {\r\n    flex-wrap: wrap;\r\n}\r\n@media only screen and (max-width: 620px) {\r\n    .flex-container img {\r\n        width: 150px;\r\n        height: 200px;\r\n        transform: scale(0.6);\r\n        transition: transform 0.5s, opacity 0.5s;\r\n        margin-bottom: -40px;\r\n        padding: 0;\r\n    }\r\n    \r\n    .flex-container img:hover {\r\n        opacity: 1;\r\n        transform: scale(0.8);\r\n    }\r\n\r\n    .cards-word {\r\n        font-size: 40px;\r\n        margin-top: 0px;\r\n        /* margin-left: 880px; */\r\n    }\r\n\r\n    .d-inline-flex {\r\n        justify-content: center;\r\n    }\r\n\r\n    .flex-container2 img {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .flex-container2 img:hover {\r\n        margin-left: 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9rZW1vbnMvcG9rZW1vbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0Esb0NBQW9DO0FBRXBDO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7QUFFQSw0QkFBNEI7QUFFNUI7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFJQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsa0JBQWtCOztBQUV0QjtBQUVBLHFCQUFxQjtBQUVyQjtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksc0VBQXNFO0lBQ3RFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksc0VBQXNFO0lBQ3RFLFlBQVk7QUFDaEI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFFQSx3QkFBd0I7QUFFeEI7O0lBRUksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsd0NBQXdDO1FBQ3hDLG9CQUFvQjtRQUNwQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO1FBQ1YscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7UUFDZix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcG9rZW1vbnMvcG9rZW1vbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qe1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4vKiAtLS0tLSBSRUdVTEFSIENBUkQgSU1BR0VTIC0tLS0tICovXHJcblxyXG4uZmxleC1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDEyLjJweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzLCBvcGFjaXR5IDAuNXM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciBpbWc6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi8qIC0tLS0tIERFQ0sgSU1BR0VTIC0tLS0tICovXHJcblxyXG4uZmxleC1jb250YWluZXIyIGltZyB7XHJcbiAgICB3aWR0aDogMTU3LjVweDtcclxuICAgIGhlaWdodDogMjE2LjVweDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzLCBvcGFjaXR5IDAuNXM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5cclxuXHJcbi5mbGV4LWNvbnRhaW5lcjIgaW1nOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcblxyXG59XHJcblxyXG4vKiAtLS0tLSBURVhUIC0tLS0tICovXHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigyMzAsIDE5NSwgMCk7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogNzUwcHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYXp1cmU7XHJcbn1cclxuXHJcblxyXG4uZGVjayB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZHMtd29yZCB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDg4MHB4OyAqL1xyXG59XHJcblxyXG4uY2FyZHMtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5kZWNrLXdvcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogOTAwcFogKi9cclxufVxyXG5cclxuLmQtaW5saW5lLWZsZXgge1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLyogLS0tLS0gQlVUVE9OUyAtLS0tLSAqL1xyXG5cclxuLmJ0bi1kYXJrLFxyXG4uYnRuLXdhcm5pbmcge1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG59XHJcblxyXG4uYnRuLXdhcm5pbmd7XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIG1hcmdpbi1yaWdodDogNC41cHg7XHJcbn1cclxuXHJcbi50aGUtYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tcGFnZSB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5mbGV4LWNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgb3BhY2l0eSAwLjVzO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mbGV4LWNvbnRhaW5lciBpbWc6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkcy13b3JkIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiA4ODBweDsgKi9cclxuICAgIH1cclxuXHJcbiAgICAuZC1pbmxpbmUtZmxleCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsZXgtY29udGFpbmVyMiBpbWcge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4LWNvbnRhaW5lcjIgaW1nOmhvdmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pokemons/pokemons.component.ts":
/*!************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.ts ***!
  \************************************************/
/*! exports provided: PokemonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsComponent", function() { return PokemonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pokemons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemons.service */ "./src/app/pokemons/pokemons.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm2015/ngx-alerts.js");




let PokemonsComponent = class PokemonsComponent {
    constructor(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.cardsImage = [];
        this.pokemonsCards = [];
        this.types = [];
        this.deck = [];
    }
    ngOnInit() {
        this.getTypes();
        this.getAllPokemons();
    }
    addCards(aux) {
        if (this.deck.length >= 60) {
            this.alertService.danger('You have reached the deck limit');
            return;
        }
        var count = 0;
        for (var i = 0; i < this.deck.length; i++) {
            if (aux == this.deck[i]) {
                count++;
            }
        }
        if (count >= 4) {
            this.alertService.danger('The limit for this card was reached');
            return;
        }
        this.deck.push(aux);
        this.alertService.success('Card added');
    }
    removeCard(index) {
        this.alertService.info('Card removed');
        this.deck.splice(index, 1);
    }
    getTypes() {
        this.service.getTypes().subscribe(res => {
            this.types = res['types'];
        });
    }
    getAllPokemons() {
        this.cardsImage = [];
        this.service.getAllPokemons().subscribe(res => {
            for (var i = 0; i < 1000; i++) {
                this.cardsImage.push(res['cards'][String(i)]['imageUrlHiRes']);
            }
            this.cards = res['cards']['0']['imageUrlHiRes'];
        });
    }
    getPokemonByType(aux) {
        this.cardsImage = [];
        this.service.getPokemonByTypes(aux).subscribe(res => {
            for (var i = 0; i < 1000; i++) {
                this.cardsImage.push(res['cards'][String(i)]['imageUrlHiRes']);
            }
        });
    }
};
PokemonsComponent.ctorParameters = () => [
    { type: _pokemons_service__WEBPACK_IMPORTED_MODULE_2__["PokemonsService"] },
    { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
PokemonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pokemons',
        template: __webpack_require__(/*! raw-loader!./pokemons.component.html */ "./node_modules/raw-loader/index.js!./src/app/pokemons/pokemons.component.html"),
        styles: [__webpack_require__(/*! ./pokemons.component.css */ "./src/app/pokemons/pokemons.component.css")]
    })
], PokemonsComponent);



/***/ }),

/***/ "./src/app/pokemons/pokemons.service.ts":
/*!**********************************************!*\
  !*** ./src/app/pokemons/pokemons.service.ts ***!
  \**********************************************/
/*! exports provided: PokemonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsService", function() { return PokemonsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PokemonsService = class PokemonsService {
    constructor(http) {
        this.http = http;
        this.apiEndPoint = 'https://api.pokemontcg.io/v1/cards';
        this.specificPokemon = 'https://pokemontcg.io/cards?name=';
        this.pokemonTypes = 'https://api.pokemontcg.io/v1/types';
        this.pokemonByType = 'https://api.pokemontcg.io/v1/cards?types=';
    }
    getPokemon(aux) {
        return this.http.get(`${this.specificPokemon}${aux}`);
    }
    getAllPokemons() {
        return this.http.get(this.apiEndPoint);
    }
    getTypes() {
        return this.http.get(this.pokemonTypes);
    }
    getPokemonByTypes(aux) {
        return this.http.get(`${this.pokemonByType}${aux}`);
    }
};
PokemonsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PokemonsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PokemonsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\joao_\Desktop\Projects\Pokemon-Cards\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map