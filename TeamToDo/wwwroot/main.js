(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.css":
/*!*************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n<div style=\"margin-top:10%;\">\r\n        <div class=\"row\">\r\n                <div class=\"col-md-4\"></div>\r\n                <div class=\"col-md-4 new-user-alert\">\r\n                    <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\r\n                        <strong>All set!</strong> Please login with your account\r\n                    </div>  \r\n                </div>\r\n        </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\"></div>\r\n                <div class=\"col-md-4\">\r\n                        <h2 style=\"text-align: center\">Sign In</h2>        \r\n\r\n                    <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"login()\">\r\n                        \r\n                        <div class=\"form-group\">\r\n                          <label for=\"email\">email</label>\r\n                          <input id=\"email\" type=\"text\" required name=\"email\" \r\n                          class=\"form-control\"\r\n                           [(ngModel)]=\"credentials.email\"\r\n                           #email=\"ngModel\">\r\n                        </div>\r\n              \r\n                        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                          <div *ngIf=\"email.errors.required\">\r\n                              email is required.\r\n                          </div>\r\n                      </div>\r\n              \r\n                        <div class=\"form-group\">\r\n                          <label for=\"password\">password</label>\r\n                          <input type=\"password\"\r\n                           class=\"form-control\" id=\"password\"\r\n                            required name=\"password\" \r\n                            [(ngModel)] = \"credentials.password\"\r\n                            #password=\"ngModel\">\r\n                        </div>  \r\n              \r\n                        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n                        class=\"alert alert-danger\">\r\n                          <div *ngIf=\"password.errors.required\">\r\n                              password is required.\r\n                          </div>\r\n                      </div>\r\n                        \r\n              \r\n                      <div style=\"text-align: center\">\r\n                        <button style=\"width: 40%;\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"loginForm.invalid\">Sign in</button>\r\n                            <br/> <small  routerLink='/registration' class=\"font-weight-light sign-in-up-btn\">Sign up</small>\r\n                      </div>\r\n              \r\n                          <!-- <div style=\"text-align: center;\" class=\"form-group\">\r\n                            <button routerLink='/registration' type=\"submit\" class=\"btn btn-success\">Registration</button>\r\n                         </div> -->\r\n\r\n                        <div *ngIf=\"errors\" class=\"alert alert-danger\">\r\n                                {{errors}}\r\n                              </div> \r\n              \r\n                      </form>\r\n                 </div>\r\n              </div>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/account.service */ "./src/app/shared/services/account.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, activatedRoute, accountService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
            _this.redirectingUrl = param['redirectingUrl'];
        });
        var self = this;
        $(document).keypress(function (e) {
            if (e.which == 13) {
                self.login();
            }
        });
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.accountService.login(this.credentials.email, this.credentials.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this.isRequesting = false; }))
            .subscribe(function (result) {
            if (result) {
                if (_this.redirectingUrl) {
                    window.location.href = _this.redirectingUrl;
                }
                else {
                    _this.router.navigate(['/todolists']);
                }
            }
        }, function (errors) {
            _this.errors = errors["error"];
            _this.brandNew = false;
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/account/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-md-4\" style=\"border: 2px solid black; height: 300px;\"></div>\r\n    <div class=\"col-md-8\" style=\"border: 2px solid black; height: 300px;\"></div>\r\n  </div> -->\r\n\r\n  <div class=\"row\" style=\"margin-top:10%;\">\r\n\r\n  <div class=\"col-md-4\"></div>\r\n\r\n  <div class=\"col-md-4\">\r\n          <h2 style=\"text-align: center\">Sign Up</h2>\r\n          <form  #registrationForm = \"ngForm\" (ngSubmit)=\"registerUser()\" (keypress.enter)=\"registerUser()\">\r\n        \r\n            <div class=\"form-group\">\r\n              <label for=\"username\">username</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"username\"\r\n               required\r\n              [(ngModel)]=\"user.username\"\r\n              name=\"username\"\r\n              #username=\"ngModel\">\r\n            </div>\r\n        \r\n            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"username.errors.required\">\r\n                Username is required.\r\n              </div>\r\n            </div>\r\n        \r\n            <div class=\"form-group\">\r\n              <label for=\"email\">email</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"email\" \r\n              required\r\n              [(ngModel)]=\"user.email\"\r\n              name=\"email\"\r\n              #email=\"ngModel\"\r\n              ngModel email>\r\n            </div>\r\n        \r\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\r\n            class=\"alert alert-danger\">\r\n              <div *ngIf=\"email.errors.required\">\r\n                Email is required.\r\n              </div>\r\n              <div *ngIf=\"email.errors.email\">\r\n                  Not correct email format\r\n              </div>\r\n          </div>\r\n        \r\n            <div class=\"form-group\">\r\n              <label for=\"username\">password</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"password\"\r\n               required minlength=\"6\"\r\n               [(ngModel)]=\"user.password\"\r\n               name=\"password\"\r\n               #password=\"ngModel\">\r\n            </div>\r\n        \r\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"password.errors.required\">\r\n                Password is required.\r\n              </div>\r\n              <div *ngIf=\"password.errors.minlength\">\r\n                Password must be at least 6 characters long.\r\n              </div>\r\n            </div>\r\n           \r\n            <div style=\"text-align: center\">\r\n                <button style=\"width: 40%;\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"registrationForm.invalid\">Sign up</button>\r\n                    <br/> <small  routerLink='/login' class=\"font-weight-light sign-in-up-btn\">Sign in</small>\r\n              </div>\r\n        \r\n            <div *ngIf=\"errors\" class=\"alert alert-danger\">\r\n             {{errors}}\r\n            </div>      \r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/account.service */ "./src/app/shared/services/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(registrationService, router) {
        this.registrationService = registrationService;
        this.router = router;
        this.submitted = false;
        this.user = { username: "", password: "", email: "" };
    }
    RegistrationFormComponent.prototype.ngOnInit = function () { };
    RegistrationFormComponent.prototype.registerUser = function () {
        var _this = this;
        var valid = true;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.registrationService.register(this.user.email, this.user.username, this.user.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () { return _this.isRequesting = false; }))
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: _this.user.email } });
                }
            }, function (errors) {
                var errorDescription = errors["error"];
                _this.errors = errorDescription;
            });
        }
    };
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/account/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.css */ "./src/app/account/registration-form/registration-form.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account/registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _account_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _shared_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/AuthGuard */ "./src/app/shared/guards/AuthGuard.ts");
/* harmony import */ var _todo_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todolist/todolist.component */ "./src/app/todo/todolist/todolist.component.ts");
/* harmony import */ var _todo_todolist_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todolist/invitation/invitation.component */ "./src/app/todo/todolist/invitation/invitation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/todolists', pathMatch: 'full', canActivate: [_shared_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'todolists', component: _todo_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_5__["TodolistComponent"], canActivate: [_shared_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'registration', component: _account_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationFormComponent"] },
    { path: 'login', component: _account_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"] },
    { path: 'invitation', component: _todo_todolist_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_6__["InvitationComponent"], canActivate: [_shared_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_shared_guards_AuthGuard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _account_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _account_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _todo_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todolist/todolist.component */ "./src/app/todo/todolist/todolist.component.ts");
/* harmony import */ var _todo_todolist_delete_list_modal_delete_list_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/todolist/delete-list-modal/delete-list-modal.component */ "./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.ts");
/* harmony import */ var _todo_todolist_details_list_modal_details_list_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/todolist/details-list-modal/details-list-modal.component */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts");
/* harmony import */ var _todo_todolist_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo/todolist/invitation/invitation.component */ "./src/app/todo/todolist/invitation/invitation.component.ts");
/* harmony import */ var _todo_todolist_details_list_modal_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo/todolist/details-list-modal/header/header.component */ "./src/app/todo/todolist/details-list-modal/header/header.component.ts");
/* harmony import */ var _todo_todolist_details_list_modal_body_body_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo/todolist/details-list-modal/body/body.component */ "./src/app/todo/todolist/details-list-modal/body/body.component.ts");
/* harmony import */ var _todo_todolist_details_list_modal_body_add_todo_form_add_todo_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component */ "./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.ts");
/* harmony import */ var _todo_todolist_details_list_modal_body_todos_todos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./todo/todolist/details-list-modal/body/todos/todos.component */ "./src/app/todo/todolist/details-list-modal/body/todos/todos.component.ts");
/* harmony import */ var _todo_todolist_details_list_modal_body_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./todo/todolist/details-list-modal/body/tabs/tabs.component */ "./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.ts");
/* harmony import */ var _todo_todolist_details_list_modal_invitation_modal_invitation_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todo/todolist/details-list-modal/invitation-modal/invitation-modal.component */ "./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.ts");
/* harmony import */ var _todo_todolist_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./todo/todolist/navbar/navbar.component */ "./src/app/todo/todolist/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _account_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationFormComponent"],
                _account_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"],
                _todo_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_8__["TodolistComponent"],
                _todo_todolist_delete_list_modal_delete_list_modal_component__WEBPACK_IMPORTED_MODULE_9__["DeleteListModalComponent"],
                _todo_todolist_details_list_modal_details_list_modal_component__WEBPACK_IMPORTED_MODULE_10__["DetailsListModalComponent"],
                _todo_todolist_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_11__["InvitationComponent"],
                _todo_todolist_details_list_modal_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _todo_todolist_details_list_modal_body_body_component__WEBPACK_IMPORTED_MODULE_13__["BodyComponent"],
                _todo_todolist_details_list_modal_body_add_todo_form_add_todo_form_component__WEBPACK_IMPORTED_MODULE_14__["AddTodoFormComponent"],
                _todo_todolist_details_list_modal_body_todos_todos_component__WEBPACK_IMPORTED_MODULE_15__["TodosComponent"],
                _todo_todolist_details_list_modal_body_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabsComponent"],
                _todo_todolist_details_list_modal_invitation_modal_invitation_modal_component__WEBPACK_IMPORTED_MODULE_17__["InvitationModalComponent"],
                _todo_todolist_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/guards/AuthGuard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guards/AuthGuard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/account.service */ "./src/app/shared/services/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenValidation, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.user.validateToken()];
                    case 1:
                        tokenValidation = _a.sent();
                        if (!this.user.isLoggedIn() || !tokenValidation) {
                            url = state.url;
                            this.router.navigate(['/login'], { queryParams: { redirectingUrl: url } });
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/models/Todo.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/Todo.ts ***!
  \***************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
        this.important = false;
        this.showChecked = false;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/shared/models/TodoList.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/TodoList.ts ***!
  \*******************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoList", function() { return TodoList; });
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.id = "";
        this.title = "";
        this.created = "";
        this.admin = [];
        this.todos = [];
        this.members = [];
        this.todosCount = 0;
    }
    return TodoList;
}());



/***/ }),

/***/ "./src/app/shared/models/TodoUser.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/TodoUser.ts ***!
  \*******************************************/
/*! exports provided: TodoUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoUser", function() { return TodoUser; });
var TodoUser = /** @class */ (function () {
    function TodoUser() {
    }
    return TodoUser;
}());



/***/ }),

/***/ "./src/app/shared/request-options-helper.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/request-options-helper.ts ***!
  \**************************************************/
/*! exports provided: bareHeaders, authorizationHeaders, responseTextAuthorizationOptions, responseTextOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bareHeaders", function() { return bareHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorizationHeaders", function() { return authorizationHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseTextAuthorizationOptions", function() { return responseTextAuthorizationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseTextOptions", function() { return responseTextOptions; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var token = localStorage.getItem('auth_token');
var bareHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
var authorizationHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json',
    'Authorization': "Bearer " + token });
var responseTextAuthorizationOptions = {
    responseType: "text",
    headers: authorizationHeaders
};
var responseTextOptions = {
    responseType: 'text',
    headers: bareHeaders
};


/***/ }),

/***/ "./src/app/shared/services/account.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/account.service.ts ***!
  \****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _request_options_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request-options-helper */ "./src/app/shared/request-options-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AccountService = /** @class */ (function () {
    function AccountService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.registrationUri = "/account/registration";
        this.loginUri = "/account/login";
        this.baseUri = configService.getApiURI();
    }
    AccountService.prototype.ngOnit = function () { };
    AccountService.prototype.register = function (email, username, password) {
        var body = JSON.stringify({ username: username, password: password, email: email });
        var url = this.baseUri + this.registrationUri;
        return this.http.post(url, body, _request_options_helper__WEBPACK_IMPORTED_MODULE_4__["responseTextOptions"]);
    };
    AccountService.prototype.login = function (email, password) {
        var body = JSON.stringify({ email: email, password: password });
        var url = this.baseUri + this.loginUri;
        return this.http.post(url, body, {
            responseType: "text",
            headers: _request_options_helper__WEBPACK_IMPORTED_MODULE_4__["bareHeaders"]
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            var token = JSON.parse(result).token;
            localStorage.setItem('auth_token', token);
            return true;
        }));
    };
    AccountService.prototype.isLoggedIn = function () {
        return !!localStorage.getItem('auth_token');
    };
    AccountService.prototype.validateToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.baseUri + '/account/ValidateToken';
                        return [4 /*yield*/, this.http.get(url, _request_options_helper__WEBPACK_IMPORTED_MODULE_4__["responseTextAuthorizationOptions"]).toPromise().catch(function (x) {
                                return false;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AccountService.prototype.getCurrentUser = function () {
        var url = this.baseUri + '/account/GetCurrentUser';
        return this.http.get(url, {
            headers: _request_options_helper__WEBPACK_IMPORTED_MODULE_4__["authorizationHeaders"]
        });
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiURI = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/services/invitation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/invitation.service.ts ***!
  \*******************************************************/
/*! exports provided: InvitationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationService", function() { return InvitationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvitationService = /** @class */ (function () {
    function InvitationService(http, configServcie) {
        this.http = http;
        this.configServcie = configServcie;
        this.baseInviteLink = window.location.origin + '/invitation';
    }
    InvitationService.prototype.generateInvitationLink = function (id) {
        var _this = this;
        var url = this.configServcie.getApiURI() + '/Invitation/GenerateInvitationHash';
        var authToken = localStorage.getItem('auth_token');
        return this.http.post(url, "\"" + id + "\"", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return _this.baseInviteLink + ("?id=" + result);
        }));
    };
    InvitationService.prototype.acceptInvitation = function (id) {
        var url = this.configServcie.getApiURI() + '/Invitation/AcceptInvitation';
        return this.http.post(url, "\"" + id + "\"", {
            responseType: "text",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('auth_token')
            })
        });
    };
    InvitationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], InvitationService);
    return InvitationService;
}());



/***/ }),

/***/ "./src/app/shared/services/todo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/todo.service.ts ***!
  \*************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = /** @class */ (function () {
    function TodoService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'Authorization': "Bearer " + localStorage.getItem('auth_token')
        });
        this.baseUri = configService.getApiURI();
    }
    TodoService.prototype.getTodos = function (listId) {
        var url = this.baseUri + ("/todo/" + listId);
        var authToken = localStorage.getItem('auth_token');
        return this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken })
        });
    };
    TodoService.prototype.addTodo = function (todo) {
        var url = this.baseUri + '/todo/AddTodo';
        var authToken = localStorage.getItem('auth_token');
        var body = JSON.stringify(todo);
        return this.http.post(url, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken })
        });
    };
    TodoService.prototype.deleteTodo = function (id) {
        var url = this.baseUri + ("/todo/" + id);
        var authToken = localStorage.getItem('auth_token');
        return this.http.delete(url, {
            responseType: "text",
            headers: this.headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return true;
        }));
    };
    TodoService.prototype.completeTodo = function (id) {
        var url = this.baseUri + '/todo/CompleteTodo';
        var authToken = localStorage.getItem('auth_token');
        return this.http.post(url, id, {
            responseType: "text",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + authToken })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return true;
        }));
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/shared/services/todolist.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/todolist.service.ts ***!
  \*****************************************************/
/*! exports provided: TodolistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistService", function() { return TodolistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodolistService = /** @class */ (function () {
    function TodolistService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('auth_token')
            })
        };
        this.baseUri = configService.getApiURI();
    }
    TodolistService.prototype.getLists = function () {
        var url = this.baseUri + '/todolist';
        return this.http.get(url, this.options);
    };
    TodolistService.prototype.getList = function (id) {
        var url = this.baseUri + ("/todolist/" + id);
        return this.http.get(url, this.options);
    };
    TodolistService.prototype.addList = function (title) {
        var url = this.baseUri + '/todolist';
        return this.http.post(url, "\"" + title + "\"", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('auth_token')
            })
        });
    };
    TodolistService.prototype.deleteList = function (id) {
        var url = this.baseUri + ("/todolist/" + id);
        return this.http.delete(url, {
            responseType: "text",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('auth_token')
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return true;
        }));
    };
    TodolistService.prototype.leaveGroup = function (id) {
        var url = this.baseUri + ("/todolist/leavegroup/" + id);
        return this.http.delete(url, {
            responseType: "text",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
                'Authorization': "Bearer " + localStorage.getItem('auth_token')
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
            return true;
        }));
    };
    TodolistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], TodolistService);
    return TodolistService;
}());



/***/ }),

/***/ "./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"modal fade\" id=\"confirmationDialog\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            Are you sure you want to delete <strong>{{todoList.title}}</strong> ?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-danger\"  data-dismiss=\"modal\" (click)=\"confirmDeletion(todoList.id)\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: DeleteListModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteListModalComponent", function() { return DeleteListModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/TodoList */ "./src/app/shared/models/TodoList.ts");
/* harmony import */ var _todolist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todolist.component */ "./src/app/todo/todolist/todolist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteListModalComponent = /** @class */ (function () {
    function DeleteListModalComponent() {
        this.todoList = new _shared_models_TodoList__WEBPACK_IMPORTED_MODULE_1__["TodoList"]();
    }
    DeleteListModalComponent.prototype.ngOnInit = function () {
    };
    DeleteListModalComponent.prototype.confirmDeletion = function (id) {
        this.deleteComponent.confirmDeletion(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_TodoList__WEBPACK_IMPORTED_MODULE_1__["TodoList"])
    ], DeleteListModalComponent.prototype, "todoList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _todolist_component__WEBPACK_IMPORTED_MODULE_2__["TodolistComponent"])
    ], DeleteListModalComponent.prototype, "deleteComponent", void 0);
    DeleteListModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-list-modal',
            template: __webpack_require__(/*! ./delete-list-modal.component.html */ "./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.html"),
            styles: [__webpack_require__(/*! ./delete-list-modal.component.css */ "./src/app/todo/todolist/delete-list-modal/delete-list-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteListModalComponent);
    return DeleteListModalComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-important{\r\n    background-color: green;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #todoForm=\"ngForm\" class=\"green-border\">\r\n  <div class=\"input-group mb-3\">\r\n      <div class=\"input-group-prepend\">\r\n        <button [disabled]=\"!todoForm.valid\" (click)=\"Modal.addTodo()\" class=\"btn btn-outline-secondary green-border green-hover\" type=\"button\">Add</button>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control green-border\" placeholder=\"new todo\"\r\n       aria-label=\"\" aria-describedby=\"basic-addon1\"\r\n       required name=\"text\" \r\n       [(ngModel)]=\"Modal.todo.text\"\r\n       (keyup.enter)=\"Modal.addTodo()\">\r\n      <div class=\"input-group-append green-border\">\r\n            <button  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Important?\" (click)=\"changeImportant()\" [ngClass]=\"{'selected-important':this.Modal.todo.important}\" class=\"btn btn-outline-secondary green-border green-hover\" type=\"button\">\r\n               <i class=\"far fa-star\"></i>\r\n             </button>\r\n          <button id=\"member-dropdown\" class=\"btn btn-default btn-outline-secondary dropdown-toggle green-border green-hover\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color:green\">\r\n          </button>\r\n          <div class=\"dropdown-menu\">\r\n              <span class=\"dropdown-item\" (click)=\"Modal.selectCurrentUser()\" >Me</span>\r\n              <span class=\"dropdown-item\" (click)=\"Modal.selectAllMembers()\" >All</span>\r\n              <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n              <span *ngFor=\"let member of Modal.dropdownMembers\" class=\"dropdown-item\" (click)=\"Modal.selectMember(member)\" >{{member.userName}}</span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddTodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoFormComponent", function() { return AddTodoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../details-list-modal.component */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTodoFormComponent = /** @class */ (function () {
    function AddTodoFormComponent() {
    }
    AddTodoFormComponent.prototype.ngOnInit = function () {
    };
    AddTodoFormComponent.prototype.changeImportant = function () {
        this.Modal.todo.important = !this.Modal.todo.important;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__["DetailsListModalComponent"])
    ], AddTodoFormComponent.prototype, "Modal", void 0);
    AddTodoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-todo-form',
            template: __webpack_require__(/*! ./add-todo-form.component.html */ "./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.html"),
            styles: [__webpack_require__(/*! ./add-todo-form.component.css */ "./src/app/todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddTodoFormComponent);
    return AddTodoFormComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/body.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/body.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/body.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/body.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-todo-form [Modal]=\"this.Modal\"></app-add-todo-form>\n<app-tabs [Modal]=\"this.Modal\" ></app-tabs>"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/body.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/body.component.ts ***!
  \*************************************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../details-list-modal.component */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__["DetailsListModalComponent"])
    ], BodyComponent.prototype, "Modal", void 0);
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/todo/todolist/details-list-modal/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/todo/todolist/details-list-modal/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" id=\"todo-tab\" data-toggle=\"tab\" href=\"#todo\" role=\"tab\" aria-controls=\"todos\" aria-selected=\"true\">Todos</a>\n  </li>\n  <li class=\"nav-item\">\n    <a (click)=\"removeNotification()\" class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Done\n      <span *ngIf=\"this.Modal.unreadDoneTodos\" style=\"margin-left: 5px; color:green !important;\" class=\"badge badge-light\"><strong>!</strong></span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\" id=\"myTabContent\">\n  <div class=\"tab-pane fade show active\" id=\"todo\" role=\"tabpanel\" aria-labelledby=\"todo-tab\">\n    <div *ngIf=\"this.Modal?.importantTodos.length>0 || this.Modal?.todos.length>0; else notodos\">\n        <app-todos [Modal]=\"this.Modal\" [Todos]=\"this.Modal.importantTodos\"></app-todos>\n        <app-todos [Modal]=\"this.Modal\" [Todos]=\"this.Modal.todos\"></app-todos>\n    </div>\n    <ng-template #notodos>\n      <div style=\"margin-top:5%;\">\n          <h5>You don't have any todos. Rest or add new ones!</h5>\n      </div>\n    </ng-template>\n  </div>\n  <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n      <app-todos [Modal]=\"this.Modal\" [Todos]=\"this.Modal.doneTodos\"></app-todos>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.ts ***!
  \******************************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../details-list-modal.component */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.removeNotification = function () {
        this.Modal.unreadDoneTodos = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__["DetailsListModalComponent"])
    ], TabsComponent.prototype, "Modal", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/todo/todolist/details-list-modal/body/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/todos/todos.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/todos/todos.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-right-5{\r\n    margin-right: 10px;\r\n}\r\n\r\n.custom-list-group-item{\r\n    padding: 5px !important;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/todos/todos.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/todos/todos.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"Modal.listComponent.selectedList\">\n\n    <div class=\"list-group\">\n              <button (click)=\"Modal.finishTodo(todo.id)\" [disabled]=\"todo.assignee && (todo.assignee?.id != Modal.currentUser.id)\"\n               *ngFor=\"let todo of Todos\" href=\"#\" \n               class=\"list-group-item list-group-item-action custom-list-group-item\"\n               data-toggle=\"tooltip\"\n               data-placement=\"top\"\n               [attr.title]=\"todo.completedBy&&!todo.assignee ? createCompletedTooltip(todo) : null\"\n               >\n                    <h5>\n                          <i *ngIf=\"!todo.completedBy; else completed\" class=\"far fa-square margin-right-5\" ></i>\n                          <ng-template #completed>\n                              <i class=\"far fa-check-square margin-right-5\"></i>\n                          </ng-template>\n                        \n                          <i *ngIf=\"todo.important\" class=\"fas fa-star\" style=\"color:#f4e842\"></i>\n                          <span *ngIf=\"!todo.assignee; else assignee\" class=\"badge badge-success\">All</span>\n                          <ng-template #assignee>\n                              <ng-container *ngIf=\"todo.assignee?.id == Modal.currentUser.id; else another\" >\n                                      <span  class=\"badge badge-danger\">Me</span>\n                              </ng-container>\n                          </ng-template>\n                          <ng-template #another>\n                                  <span class=\"badge badge-info\">{{todo.assignee?.userName}}</span>\n                          </ng-template>\n                          {{todo.text}}\n\n                            <span *ngIf=\"todo.creator.id == Modal.currentUser.id && !todo.completedBy\" \n                              (click)=\"Modal.deleteTodo(todo)\" class=\"delete-btn align-middle\"><i class=\"fas fa-trash\"></i></span>\n                    </h5>\n\n                    <!-- (Modal.listComponent.selectedList?.admin.some(x=>x.id == Modal.currentUser.id)) -->\n                    <!-- (todo.creator.id == Modal.currentUser.id) ||  -->\n                </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/body/todos/todos.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/body/todos/todos.component.ts ***!
  \********************************************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../details-list-modal.component */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosComponent = /** @class */ (function () {
    function TodosComponent() {
        this.showChecked = false;
    }
    TodosComponent.prototype.ngOnInit = function () {
        // $('[data-toggle="tooltip"]').tooltip();
    };
    TodosComponent.prototype.createCompletedTooltip = function (todo) {
        return "completed by " + todo.completedBy.userName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TodosComponent.prototype, "Todos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__["DetailsListModalComponent"])
    ], TodosComponent.prototype, "Modal", void 0);
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todo/todolist/details-list-modal/body/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todo/todolist/details-list-modal/body/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/details-list-modal.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/details-list-modal.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div id=\"modal-details\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <app-header [Modal]=\"this\"></app-header>\n              </div>\n              <div class=\"modal-body\">\n                <app-body [Modal]=\"this\"></app-body>\n              </div>\n          </div>\n        </div>\n      </div>\n\n      <app-invitation-modal [InvitationLink]=\"this.invitationLink\"></app-invitation-modal>\n    \n    \n"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DetailsListModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsListModalComponent", function() { return DetailsListModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todolist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todolist.component */ "./src/app/todo/todolist/todolist.component.ts");
/* harmony import */ var _shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/account.service */ "./src/app/shared/services/account.service.ts");
/* harmony import */ var _shared_models_TodoUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/TodoUser */ "./src/app/shared/models/TodoUser.ts");
/* harmony import */ var _shared_services_todolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/todolist.service */ "./src/app/shared/services/todolist.service.ts");
/* harmony import */ var _shared_services_invitation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/invitation.service */ "./src/app/shared/services/invitation.service.ts");
/* harmony import */ var _shared_services_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/todo.service */ "./src/app/shared/services/todo.service.ts");
/* harmony import */ var _shared_models_Todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/models/Todo */ "./src/app/shared/models/Todo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DetailsListModalComponent = /** @class */ (function () {
    function DetailsListModalComponent(accountService, todoListService, invitationService, todoService, changeDetector) {
        this.accountService = accountService;
        this.todoListService = todoListService;
        this.invitationService = invitationService;
        this.todoService = todoService;
        this.changeDetector = changeDetector;
        this.MODAL_ID = "modal-details";
        this.MEMBER_DROPDOWN_ID = "member-dropdown";
        this.INVITATION_MODAL_ID = "modal-invitation-link";
        this.dropdownMembers = [];
        this.todo = new _shared_models_Todo__WEBPACK_IMPORTED_MODULE_7__["Todo"]();
        this.importantTodos = [];
        this.todos = [];
        this.todoDeletionRequet = false;
        this.unreadDoneTodos = false;
    }
    DetailsListModalComponent.prototype.ngOnInit = function () {
    };
    DetailsListModalComponent.prototype.setData = function () {
        this.todo = new _shared_models_Todo__WEBPACK_IMPORTED_MODULE_7__["Todo"]();
        this.loadTodos();
        this.loadDropdownMembers();
        this.selectCurrentUser();
    };
    DetailsListModalComponent.prototype.loadTodos = function () {
        var _this = this;
        this.todoService.getTodos(this.listComponent.selectedList.id)
            .subscribe(function (result) {
            _this.listComponent.selectedList.todos = result;
            _this.importantTodos = result.filter(function (x) { return !x.completedBy && x.important; });
            _this.todos = result.filter(function (x) { return !x.completedBy && !x.important; });
            _this.doneTodos = result.filter(function (x) { return x.completedBy; });
        });
    };
    DetailsListModalComponent.prototype.loadDropdownMembers = function () {
        var _this = this;
        var cloned = this.listComponent.selectedList.members.map(function (x) { return Object.assign({}, x); });
        var clonedCurrentUser = this.listComponent.selectedList.members.findIndex(function (x) { return x.id == _this.currentUser.id; });
        cloned.splice(clonedCurrentUser, 1);
        this.dropdownMembers = cloned;
    };
    DetailsListModalComponent.prototype.selectAllMembers = function () {
        this.selectedMember = null;
        $("#" + this.MEMBER_DROPDOWN_ID).html("All");
    };
    DetailsListModalComponent.prototype.selectCurrentUser = function () {
        this.selectedMember = this.currentUser;
        $("#" + this.MEMBER_DROPDOWN_ID).html("Me");
    };
    DetailsListModalComponent.prototype.selectMember = function (member) {
        this.selectedMember = member;
        $("#" + this.MEMBER_DROPDOWN_ID).html(this.selectedMember.userName);
    };
    DetailsListModalComponent.prototype.addMember = function (id) {
        var _this = this;
        this.invitationService.generateInvitationLink(id)
            .subscribe(function (result) {
            _this.invitationLink = result;
        }, function (errors) {
            _this.errors = errors;
        });
        $("#" + this.MODAL_ID).modal("hide");
        $("#" + this.INVITATION_MODAL_ID).modal("show");
    };
    DetailsListModalComponent.prototype.addTodo = function () {
        var _this = this;
        if (!this.todo.text || this.todo.text.length == 0) {
            return;
        }
        if (this.selectedMember) {
            this.todo.assigneeId = this.selectedMember.id;
        }
        this.todo.listId = this.listComponent.selectedList.id;
        this.todoService.addTodo(this.todo)
            .subscribe(function (result) {
            if (result.important) {
                _this.importantTodos.push(result);
            }
            else {
                _this.todos.push(result);
            }
            _this.todo = new _shared_models_Todo__WEBPACK_IMPORTED_MODULE_7__["Todo"]();
            _this.listComponent.selectedList.todosCount += 1;
        });
    };
    DetailsListModalComponent.prototype.deleteTodo = function (todo) {
        var _this = this;
        this.todoDeletionRequet = true;
        this.todoService.deleteTodo(todo.id)
            .subscribe(function (result) {
            if (result) {
                var todos = _this.todos;
                if (todo.important) {
                    todos = _this.importantTodos;
                }
                todos.splice(todos.findIndex(function (x) { return x.id == todo.id; }), 1);
            }
            _this.todoDeletionRequet = false;
            _this.listComponent.selectedList.todosCount -= 1;
        });
    };
    DetailsListModalComponent.prototype.finishTodo = function (id) {
        var _this = this;
        if (this.todoDeletionRequet) {
            return;
        }
        if (this.doneTodos.find(function (x) { return x.id == id; })) {
            return;
        }
        this.todoService.completeTodo(id)
            .subscribe(function (result) {
            if (result) {
                var todos = void 0;
                todos = _this.todos;
                var index = todos.findIndex(function (x) { return x.id == id; });
                if (index == -1) {
                    todos = _this.importantTodos;
                    index = todos.findIndex(function (x) { return x.id == id; });
                }
                todos[index].completedBy = _this.currentUser;
                _this.doneTodos.push(todos[index]);
                todos.splice(index, 1);
                _this.unreadDoneTodos = true;
                _this.listComponent.selectedList.todosCount -= 1;
            }
        });
    };
    DetailsListModalComponent.prototype.leaveGroup = function (id) {
        var _this = this;
        this.todoListService.leaveGroup(id)
            .subscribe(function (result) {
            if (result) {
                $("#" + _this.MODAL_ID).modal("hide");
                _this.listComponent.deleteFromModel(id);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _todolist_component__WEBPACK_IMPORTED_MODULE_1__["TodolistComponent"])
    ], DetailsListModalComponent.prototype, "listComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_TodoUser__WEBPACK_IMPORTED_MODULE_3__["TodoUser"])
    ], DetailsListModalComponent.prototype, "currentUser", void 0);
    DetailsListModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-list-modal',
            template: __webpack_require__(/*! ./details-list-modal.component.html */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.html"),
            styles: [__webpack_require__(/*! ./details-list-modal.component.css */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _shared_services_todolist_service__WEBPACK_IMPORTED_MODULE_4__["TodolistService"],
            _shared_services_invitation_service__WEBPACK_IMPORTED_MODULE_5__["InvitationService"],
            _shared_services_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DetailsListModalComponent);
    return DetailsListModalComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/header/header.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/header/header.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invitation-button{\r\n    margin-left: 3px; \r\n    width: 30px;\r\n     border: 2px solid #6c757d; \r\n     background-color: white; \r\n     color: #6c757d;\r\n}\r\n\r\n.invitation-button:hover{\r\n    margin-left: 3px; \r\n    width: 30px;\r\n     border: 2px solid white ; \r\n     background-color: green; \r\n     color: white;\r\n     cursor: pointer;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n    display:none;\r\n}\r\n\r\n.settings{\r\n    position: absolute;\r\n    top:7%;\r\n    right:4%;\r\n}\r\n\r\n.settings:hover{\r\n    position: absolute;\r\n    top:7%;\r\n    right:4%;\r\n    color:green;\r\n    cursor:pointer;\r\n}"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"modal-title\" id=\"exampleModalLabel\"><strong>{{Modal.listComponent.selectedList?.title}}</strong> </h5>\r\n\r\n<div>\r\n    <span *ngIf=\"Modal.dropdownMembers.length>0; else nomembers\">\r\n        Members:\r\n            <span style=\"margin-left: 3px;\"\r\n            *ngFor=\"let member of Modal.dropdownMembers; let i = index\" class=\"badge badge-{{selectBadgeType(i)}}\">{{member?.userName}}</span>\r\n    </span>\r\n        <ng-template #nomembers>\r\n            Not members yet. You can invite them! ->\r\n        </ng-template>\r\n\r\n        <span  class=\"badge badge-success invitation-button\"\r\n        data-toggle=\"tooltip\" data-placement=\"top\" title=\"Invite friends\"\r\n         (click)=\"Modal.addMember(Modal.listComponent.selectedList.id)\"><strong>+</strong></span>\r\n\r\n         <div class=\"dropdown settings\">\r\n           <i class=\"fas fa-ellipsis-v fa-lg dropdown-toggle\" data-toggle=\"dropdown\"  aria-expanded=\"false\"></i>\r\n            <div class=\"dropdown-menu\">\r\n              <button (click)=\"Modal.addMember(Modal.listComponent.selectedList.id)\" class=\"dropdown-item\">Invite friends</button>\r\n              <button (click)=\"Modal.leaveGroup(Modal.listComponent.selectedList.id)\" class=\"dropdown-item\" >Leave group</button>\r\n            </div>\r\n          </div>\r\n</div>\r\n\r\n   \r\n\r\n\r\n  "

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/header/header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/header/header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../details-list-modal.component */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.BadgeTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
        this.BadgeTypeIndex = 0;
    }
    HeaderComponent.prototype.selectBadgeType = function (index) {
        if (index <= this.BadgeTypes.length) {
            return this.BadgeTypes[index];
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _details_list_modal_component__WEBPACK_IMPORTED_MODULE_1__["DetailsListModalComponent"])
    ], HeaderComponent.prototype, "Modal", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/todo/todolist/details-list-modal/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/todo/todolist/details-list-modal/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modal-invitation-link\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg modal-dialog-centered\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n              <h3>Send this link to a friend</h3>\n        </div>\n        <div class=\"modal-body\">\n            {{InvitationLink}}\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InvitationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationModalComponent", function() { return InvitationModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvitationModalComponent = /** @class */ (function () {
    function InvitationModalComponent() {
    }
    InvitationModalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InvitationModalComponent.prototype, "InvitationLink", void 0);
    InvitationModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invitation-modal',
            template: __webpack_require__(/*! ./invitation-modal.component.html */ "./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.html"),
            styles: [__webpack_require__(/*! ./invitation-modal.component.css */ "./src/app/todo/todolist/details-list-modal/invitation-modal/invitation-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvitationModalComponent);
    return InvitationModalComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/invitation/invitation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/todo/todolist/invitation/invitation.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todolist/invitation/invitation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/todo/todolist/invitation/invitation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf=\"errors\">\n        <h1 style=\"color:red\">{{errors}}</h1>\n      </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/todo/todolist/invitation/invitation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/todo/todolist/invitation/invitation.component.ts ***!
  \******************************************************************/
/*! exports provided: InvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationComponent", function() { return InvitationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_invitation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/invitation.service */ "./src/app/shared/services/invitation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvitationComponent = /** @class */ (function () {
    function InvitationComponent(activatedRoute, invitationService, router) {
        this.activatedRoute = activatedRoute;
        this.invitationService = invitationService;
        this.router = router;
    }
    InvitationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.id = param['id'];
        });
        this.invitationService.acceptInvitation(this.id)
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/todolists'], { queryParams: { open: result } });
            }
        }, function (errors) {
            _this.errors = errors["error"];
        });
    };
    InvitationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invitation',
            template: __webpack_require__(/*! ./invitation.component.html */ "./src/app/todo/todolist/invitation/invitation.component.html"),
            styles: [__webpack_require__(/*! ./invitation.component.css */ "./src/app/todo/todolist/invitation/invitation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_invitation_service__WEBPACK_IMPORTED_MODULE_2__["InvitationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InvitationComponent);
    return InvitationComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/navbar/navbar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/todo/todolist/navbar/navbar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todolist/navbar/navbar.component.html":
/*!************************************************************!*\
  !*** ./src/app/todo/todolist/navbar/navbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light  justify-content-between\">\n    <a class=\"navbar-brand\">Team todos</a>\n    <form class=\"form-inline\">\n        <span style=\"margin-right: 5px;\" class=\"navbar-text\">\n            <i class=\"fas fa-user-circle\" style=\"margin-right: 5px;\"></i>{{UserName}}\n          </span>\n      <button (click)=\"logout()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Log out</button>\n    </form>\n</nav>"

/***/ }),

/***/ "./src/app/todo/todolist/navbar/navbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/todo/todolist/navbar/navbar.component.ts ***!
  \**********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "UserName", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/todo/todolist/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/todo/todolist/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/todo/todolist/todolist.component.css":
/*!******************************************************!*\
  !*** ./src/app/todo/todolist/todolist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.todolist:hover{\r\n    cursor: pointer;\r\n    background-color: #f8f9fa;\r\n}"

/***/ }),

/***/ "./src/app/todo/todolist/todolist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/todo/todolist/todolist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <app-navbar [UserName]=\"currentUser?.userName\"></app-navbar>\r\n\r\n  <!-- Button to Open the Modal -->\r\n<!-- <h1>User: {{currentUser?.email}}</h1> -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8\">\r\n\r\n      <div class=\"row\"  style=\"margin: 3%\">\r\n          <div class=\"col-md-2\"> </div>\r\n          <div class=\"col-md-8\">\r\n              <input (keydown.enter)=\"addList(title.value)\" style=\"text-align: center;\" class=\"form-control\" #title placeholder=\"Todo list\" />\r\n              <div style=\"text-align: center; margin-top: 10px;\">\r\n                  <button style=\"width: 30%;\"  class=\"btn btn-success\" (click)=\"addList(title.value); title.value=''\">\r\n                      Add \r\n                    </button> \r\n              </div>\r\n          </div>\r\n      </div>\r\n      \r\n        \r\n        <div *ngIf=\"TodoLists.length; else notodolists\">\r\n          <div class=\"lists\" *ngFor=\"let todolist of TodoLists\" style=\"margin-top:2%;\">\r\n              <div class=\"card todolist\" (click)=\"openTodolist(todolist.id) \">\r\n                  <h5 class=\"card-header\">\r\n                     <span class=\"list-title\">\r\n                      <strong> {{todolist.title}}</strong> </span>\r\n                     <span *ngIf=\"todolist.creator.id == currentUser.id\"\r\n                     (click)=\"deleteListRequest(todolist.id)\"  data-toggle=\"modal\" data-target=\"#confirmationDialog\" class=\"delete-btn align-middle\"><i class=\"fas fa-trash\"></i></span>\r\n                  </h5>\r\n                  <div class=\"card-body\" style=\"text-align: center;\">\r\n                     <div *ngIf=\"todolist.todosCount>0; else notodos\">\r\n                        <h5>You have {{todolist.todosCount}} uncompleted todos.</h5>\r\n                     </div>\r\n                     <ng-template #notodos>\r\n                            <h5>Click there to add new todos!</h5>\r\n                      </ng-template>\r\n                  </div>\r\n                  <!-- <button *ngIf=\"todolist.creator.id == currentUser.id\" class=\"btn btn-danger\" (click)=\"deleteListRequest(todolist.id)\"\r\n                  data-toggle=\"modal\" data-target=\"#confirmationDialog\">Delete</button> -->\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <ng-template #notodolists>\r\n          <div style=\"text-align: center; margin-top: 30%\">\r\n              <h4>You don't have any Todo lists. Start by adding them. </h4>\r\n          </div>\r\n        </ng-template> \r\n  </div>\r\n  </div>\r\n</div> \r\n\r\n\r\n<app-details-list-modal [currentUser]=\"currentUser\" [listComponent]=\"this\"></app-details-list-modal>\r\n<app-delete-list-modal [todoList]=\"todoListDeleteRequest\" [deleteComponent]=\"this\"></app-delete-list-modal>\r\n\r\n"

/***/ }),

/***/ "./src/app/todo/todolist/todolist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/todolist/todolist.component.ts ***!
  \*****************************************************/
/*! exports provided: TodolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponent", function() { return TodolistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_todolist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/todolist.service */ "./src/app/shared/services/todolist.service.ts");
/* harmony import */ var _shared_models_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/TodoList */ "./src/app/shared/models/TodoList.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/account.service */ "./src/app/shared/services/account.service.ts");
/* harmony import */ var _details_list_modal_details_list_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-list-modal/details-list-modal.component */ "./src/app/todo/todolist/details-list-modal/details-list-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodolistComponent = /** @class */ (function () {
    function TodolistComponent(todolistService, activatedRoute, accountService) {
        this.todolistService = todolistService;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.TodoLists = [];
        this.todoListDeleteRequest = new _shared_models_TodoList__WEBPACK_IMPORTED_MODULE_2__["TodoList"]();
        this.todoListDeleteRequestProcessing = false;
    }
    TodolistComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        $('#confirmationDialog').on('hide.bs.modal', function (e) {
            self.todoListDeleteRequestProcessing = false;
        });
        $('body').tooltip({
            selector: '[data-toggle=tooltip]'
        });
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.open = param['open'];
        });
        this.loadLists();
        this.loadCurrentUser();
    };
    TodolistComponent.prototype.ngAfterViewInit = function () {
        console.log('gogogo');
    };
    TodolistComponent.prototype.loadCurrentUser = function () {
        var _this = this;
        this.accountService.getCurrentUser()
            .subscribe(function (result) {
            _this.currentUser = result;
        }, function (errors) {
            _this.errors = errors;
        });
    };
    TodolistComponent.prototype.loadLists = function () {
        var _this = this;
        this.todolistService.getLists()
            .subscribe(function (result) {
            _this.TodoLists = result.sort(function (x, y) {
                if (x.created < y.created) {
                    return 1;
                }
                if (x.created > y.created) {
                    return -1;
                }
                if (x.created == y.created) {
                    return 0;
                }
            });
            if (_this.open) {
                _this.selectList(_this.open);
                _this.detailsComponent.setData();
                $("#modal-details").modal("show");
            }
        }, function (errors) {
            _this.errors = errors;
        });
    };
    TodolistComponent.prototype.addList = function (title) {
        var _this = this;
        if (!title || title.length == 0) {
            return;
        }
        this.todolistService.addList(title)
            .subscribe(function (result) {
            _this.TodoLists.unshift(result);
            _this.selectList(result.id);
            $("#modal-details").modal("show");
        }, function (errors) {
            _this.errors = errors;
        });
    };
    TodolistComponent.prototype.selectList = function (id) {
        if (this.todoListDeleteRequestProcessing) {
            return;
        }
        this.selectedList = this.TodoLists.find(function (x) { return x.id == id; });
    };
    TodolistComponent.prototype.deleteListRequest = function (id) {
        this.todoListDeleteRequestProcessing = true;
        this.todoListDeleteRequest = this.TodoLists.find(function (x) { return x.id == id; });
    };
    TodolistComponent.prototype.confirmDeletion = function (id) {
        var _this = this;
        this.todolistService.deleteList(id)
            .subscribe(function (result) {
            if (result) {
                _this.deleteFromModel(id);
                _this.todoListDeleteRequestProcessing = false;
            }
        }, function (errors) {
            _this.errors = errors;
        });
    };
    TodolistComponent.prototype.deleteFromModel = function (id) {
        var index = this.TodoLists.findIndex(function (x) { return x.id == id; });
        this.TodoLists.splice(index, 1);
    };
    TodolistComponent.prototype.openTodolist = function (id) {
        if (this.todoListDeleteRequestProcessing) {
            return;
        }
        this.selectList(id);
        this.detailsComponent.setData();
        this.openDetailsDialog();
    };
    TodolistComponent.prototype.openDetailsDialog = function () {
        $('#modal-details').modal('show');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_details_list_modal_details_list_modal_component__WEBPACK_IMPORTED_MODULE_5__["DetailsListModalComponent"]),
        __metadata("design:type", _details_list_modal_details_list_modal_component__WEBPACK_IMPORTED_MODULE_5__["DetailsListModalComponent"])
    ], TodolistComponent.prototype, "detailsComponent", void 0);
    TodolistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todolist',
            template: __webpack_require__(/*! ./todolist.component.html */ "./src/app/todo/todolist/todolist.component.html"),
            styles: [__webpack_require__(/*! ./todolist.component.css */ "./src/app/todo/todolist/todolist.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_todolist_service__WEBPACK_IMPORTED_MODULE_1__["TodolistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
    ], TodolistComponent);
    return TodolistComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:5000/api"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yatse\Desktop\Projects\TeamToDo3\ClientAngular\teamtodo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map