function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./ClientApp/app/admin/admin.module.ts":
  /*!*********************************************!*\
    !*** ./ClientApp/app/admin/admin.module.ts ***!
    \*********************************************/

  /*! exports provided: AdminModule */

  /***/
  function ClientAppAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/user-list/user-list.component */
    "./ClientApp/app/admin/components/user-list/user-list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/role-list/role-list.component */
    "./ClientApp/app/admin/components/role-list/role-list.component.ts");
    /* harmony import */


    var _material_modules_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../material-modules.module */
    "./ClientApp/app/material-modules.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/user-form/user-form.component */
    "./ClientApp/app/admin/components/user-form/user-form.component.ts");
    /* harmony import */


    var _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/role-form/role-form.component */
    "./ClientApp/app/admin/components/role-form/role-form.component.ts");
    /* harmony import */


    var _components_role_add_delete_user_role_add_delete_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/role-add-delete-user/role-add-delete-user.component */
    "./ClientApp/app/admin/components/role-add-delete-user/role-add-delete-user.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _components_user_add_delete_role_user_add_delete_role_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/user-add-delete-role/user-add-delete-role.component */
    "./ClientApp/app/admin/components/user-add-delete-role/user-add-delete-role.component.ts");
    /* harmony import */


    var _shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../shared/guards/admin.guard */
    "./ClientApp/app/shared/guards/admin.guard.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: 'roles',
        component: _components_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__["RoleListComponent"],
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
      }, {
        path: 'addUsersToRole/:id',
        component: _components_role_add_delete_user_role_add_delete_user_component__WEBPACK_IMPORTED_MODULE_9__["RoleAddDeleteUserComponent"],
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
      }, {
        path: "roles/:id",
        component: _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_8__["RoleFormComponent"],
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
      }, {
        path: 'users',
        component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"],
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
      }, {
        path: "users/:id",
        component: _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"],
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
      }, {
        path: 'addRolesToUser/:id',
        component: _components_user_add_delete_role_user_add_delete_role_component__WEBPACK_IMPORTED_MODULE_12__["UserAddDeleteRoleComponent"],
        canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"], _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"], _components_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__["RoleListComponent"], _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_8__["RoleFormComponent"], _components_role_add_delete_user_role_add_delete_user_component__WEBPACK_IMPORTED_MODULE_9__["RoleAddDeleteUserComponent"], _components_user_add_delete_role_user_add_delete_role_component__WEBPACK_IMPORTED_MODULE_12__["UserAddDeleteRoleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"], _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"], _components_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__["RoleListComponent"], _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_8__["RoleFormComponent"], _components_role_add_delete_user_role_add_delete_user_component__WEBPACK_IMPORTED_MODULE_9__["RoleAddDeleteUserComponent"], _components_user_add_delete_role_user_add_delete_role_component__WEBPACK_IMPORTED_MODULE_12__["UserAddDeleteRoleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: 'roles',
            component: _components_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_4__["RoleListComponent"],
            canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
          }, {
            path: 'addUsersToRole/:id',
            component: _components_role_add_delete_user_role_add_delete_user_component__WEBPACK_IMPORTED_MODULE_9__["RoleAddDeleteUserComponent"],
            canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
          }, {
            path: "roles/:id",
            component: _components_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_8__["RoleFormComponent"],
            canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
          }, {
            path: 'users',
            component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"],
            canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
          }, {
            path: "users/:id",
            component: _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"],
            canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
          }, {
            path: 'addRolesToUser/:id',
            component: _components_user_add_delete_role_user_add_delete_role_component__WEBPACK_IMPORTED_MODULE_12__["UserAddDeleteRoleComponent"],
            canActivate: [_shared_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/admin/components/role-add-delete-user/role-add-delete-user.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./ClientApp/app/admin/components/role-add-delete-user/role-add-delete-user.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: RoleAddDeleteUserComponent */

  /***/
  function ClientAppAppAdminComponentsRoleAddDeleteUserRoleAddDeleteUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleAddDeleteUserComponent", function () {
      return RoleAddDeleteUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/components/dialog-custom/dialog-custom.component */
    "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts");
    /* harmony import */


    var ClientApp_app_shared_errors_role_exist_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ClientApp/app/shared/errors/role-exist-error */
    "./ClientApp/app/shared/errors/role-exist-error.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ClientApp/app/shared/services/admin.service */
    "./ClientApp/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function RoleAddDeleteUserComponent_mat_option_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleAddDeleteUserComponent_mat_option_15_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var user_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.userSelected(user_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r13.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", user_r13.firstName, " ", user_r13.lastName, " (", user_r13.email, ") ");
      }
    }

    function RoleAddDeleteUserComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " user is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleAddDeleteUserComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleAddDeleteUserComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r16.firstName, " ");
      }
    }

    function RoleAddDeleteUserComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleAddDeleteUserComponent_td_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r17.lastName, " ");
      }
    }

    function RoleAddDeleteUserComponent_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleAddDeleteUserComponent_td_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r18.email, " ");
      }
    }

    function RoleAddDeleteUserComponent_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleAddDeleteUserComponent_td_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleAddDeleteUserComponent_td_34_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var user_r19 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.onDeleteUserFromRole($event, user_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleAddDeleteUserComponent_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 28);
      }
    }

    function RoleAddDeleteUserComponent_tr_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 29);
      }
    }

    var RoleAddDeleteUserComponent = /*#__PURE__*/function () {
      function RoleAddDeleteUserComponent(fb, route, adminService, dialog, snackBar) {
        _classCallCheck(this, RoleAddDeleteUserComponent);

        this.fb = fb;
        this.route = route;
        this.adminService = adminService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
      }

      _createClass(RoleAddDeleteUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.editRoleForm = this.fb.group({
            userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          this.editRoleForm.controls['userId'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (inputText) {
            return _this.getUserListObservable(inputText || '');
          })).subscribe(function (userList) {
            if (userList.length > 0) {
              _this.userArray = userList;
            }

            _this.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(userList);
          });
          this.fillFormEdit();
        }
      }, {
        key: "userSelected",
        value: function userSelected(user) {
          this.userInputId = user.id;
        } // AutoComplete Input

      }, {
        key: "getUserListObservable",
        value: function getUserListObservable(val) {
          return this.adminService.getAllUsersByQuery(val);
        }
      }, {
        key: "displayFn",
        value: function displayFn(userArray) {
          return function (id) {
            var correspondingOption = Array.isArray(userArray) ? userArray.find(function (option) {
              return option.id === id;
            }) : null;
            return correspondingOption ? "".concat(correspondingOption.firstName, " ").concat(correspondingOption.lastName) : '';
          };
        }
      }, {
        key: "fillFormEdit",
        value: function fillFormEdit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var roleToEdit;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.roleIdUrl = this.route.snapshot.paramMap.get('id');

                    if (!this.roleIdUrl) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return this.adminService.getRoleById(this.roleIdUrl);

                  case 4:
                    roleToEdit = _context.sent;
                    this.roleName = roleToEdit.name;
                    this.dataSource.data = roleToEdit.users;

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onDeleteUserFromRole",
        value: function onDeleteUserFromRole($event, userToDelete) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var dialogData, dialogRef;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    $event.stopPropagation();
                    dialogData = new ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__["DialogData"]('Confirm Action', "Are you sure you want to delete the user (".concat(userToDelete.email, ") from this role?"));
                    dialogRef = this.dialog.open(ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__["DialogCustomComponent"], {
                      maxWidth: '500px',
                      data: dialogData
                    });
                    dialogRef.afterClosed().subscribe(function (dialogResult) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var index;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.prev = 0;
                                this.progressBarMode = 'indeterminate';

                                if (!dialogResult) {
                                  _context2.next = 8;
                                  break;
                                }

                                _context2.next = 5;
                                return this.adminService.deleteUserFromRole(userToDelete.id, this.roleIdUrl);

                              case 5:
                                index = this.dataSource.data.indexOf(userToDelete);
                                this.dataSource.data.splice(index, 1);

                                this.dataSource._updateChangeSubscription();

                              case 8:
                                _context2.next = 13;
                                break;

                              case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2["catch"](0);
                                this.snackBar.open('Something when wrong, User was not deleted from this role', 'X', {
                                  duration: 20000,
                                  panelClass: ['red-snackbar']
                                });

                              case 13:
                                _context2.prev = 13;
                                this.progressBarMode = '';
                                return _context2.finish(13);

                              case 16:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this, [[0, 10, 13, 16]]);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var userId, userPicked, userCreated;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.editRoleForm.invalid) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 2:
                    userId = this.editRoleForm.controls['userId'].value;
                    userPicked = (_a = this.userArray) === null || _a === void 0 ? void 0 : _a.find(function (u) {
                      return u.id == userId;
                    });

                    if (userPicked) {
                      _context4.next = 8;
                      break;
                    }

                    this.snackBar.open("You have to pick a user", 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    this.editRoleForm.controls['userId'].setValue('');
                    return _context4.abrupt("return");

                  case 8:
                    // Validation End//
                    this.progressBarMode = 'indeterminate';
                    _context4.prev = 9;
                    _context4.next = 12;
                    return this.adminService.addUserToRole(userId, this.roleIdUrl);

                  case 12:
                    userCreated = _context4.sent;
                    this.dataSource.data.push(userCreated);

                    this.dataSource._updateChangeSubscription();

                    _context4.next = 25;
                    break;

                  case 17:
                    _context4.prev = 17;
                    _context4.t0 = _context4["catch"](9);

                    if (!(_context4.t0 instanceof ClientApp_app_shared_errors_role_exist_error__WEBPACK_IMPORTED_MODULE_5__["RoleExitsError"])) {
                      _context4.next = 23;
                      break;
                    }

                    this.snackBar.open(_context4.t0.getErrorListMessage()[0].description, 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    _context4.next = 25;
                    break;

                  case 23:
                    this.snackBar.open("Something went wrong user was not added to role", 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    throw _context4.t0;

                  case 25:
                    _context4.prev = 25;
                    this.progressBarMode = '';
                    return _context4.finish(25);

                  case 28:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[9, 17, 25, 28]]);
          }));
        }
      }]);

      return RoleAddDeleteUserComponent;
    }();

    RoleAddDeleteUserComponent.ɵfac = function RoleAddDeleteUserComponent_Factory(t) {
      return new (t || RoleAddDeleteUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]));
    };

    RoleAddDeleteUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RoleAddDeleteUserComponent,
      selectors: [["app-role-add-delete-user"]],
      decls: 37,
      vars: 17,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container"], ["fxLayoutAlign", "center center", "display", "block", 2, "font-size", "19px", "color", "var(--primary)"], ["novalidate", "", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 2, "width", "98%", "height", "auto", 3, "formGroup", "ngSubmit"], ["mat-flat-button", "", "color", "primary", "fxFlex", "10", "type", "submit"], ["fxFlex", "48", "fxFlex.xs", "100"], ["matInput", "", "placeholder", "Pick one user", "formControlName", "userId", 3, "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxFlex", "90"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "firstName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastName"], ["matColumnDef", "email"], ["matColumnDef", "delete"], ["mat-cell", "", "style", "cursor: pointer", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value", "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "cursor", "pointer"], [3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function RoleAddDeleteUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RoleAddDeleteUserComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " User");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-autocomplete", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RoleAddDeleteUserComponent_mat_option_15_Template, 2, 4, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RoleAddDeleteUserComponent_mat_error_17_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RoleAddDeleteUserComponent_Template_input_keyup_21_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RoleAddDeleteUserComponent_th_24_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RoleAddDeleteUserComponent_td_25_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](26, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RoleAddDeleteUserComponent_th_27_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RoleAddDeleteUserComponent_td_28_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](29, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RoleAddDeleteUserComponent_th_30_Template, 2, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RoleAddDeleteUserComponent_td_31_Template, 2, 1, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RoleAddDeleteUserComponent_th_33_Template, 3, 0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RoleAddDeleteUserComponent_td_34_Template, 3, 0, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RoleAddDeleteUserComponent_tr_35_Template, 1, 0, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RoleAddDeleteUserComponent_tr_36_Template, 1, 0, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ADD OR REMOVE USERS FROM ROLE (", ctx.roleName, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.editRoleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 13, ctx.filteredOptions)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 15, ctx.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editRoleForm.controls["userId"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlLWFkZC1kZWxldGUtdXNlci9DOlxcVXNlcnNcXG9tYXJ0aW5lelxcRGVza3RvcFxcTGF3eWVyQXBwXFxsYXd5ZXJBcHBfQmFja0VuZC9DbGllbnRBcHBcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXHJvbGUtYWRkLWRlbGV0ZS11c2VyXFxyb2xlLWFkZC1kZWxldGUtdXNlci5jb21wb25lbnQuc2NzcyIsIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlLWFkZC1kZWxldGUtdXNlci9yb2xlLWFkZC1kZWxldGUtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlLWFkZC1kZWxldGUtdXNlci9yb2xlLWFkZC1kZWxldGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIH0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoleAddDeleteUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-role-add-delete-user',
          templateUrl: './role-add-delete-user.component.html',
          styleUrls: ['./role-add-delete-user.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/admin/components/role-form/role-form.component.ts":
  /*!*************************************************************************!*\
    !*** ./ClientApp/app/admin/components/role-form/role-form.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RoleFormComponent */

  /***/
  function ClientAppAppAdminComponentsRoleFormRoleFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleFormComponent", function () {
      return RoleFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ClientApp/app/shared/services/admin.service */
    "./ClientApp/app/shared/services/admin.service.ts");
    /* harmony import */


    var ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ClientApp/app/shared/services/clients.service */
    "./ClientApp/app/shared/services/clients.service.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function RoleFormComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Role Name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var RoleFormComponent = /*#__PURE__*/function () {
      function RoleFormComponent(fb, route, router, dialog, snackBar, adminService, clientsService) {
        _classCallCheck(this, RoleFormComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.adminService = adminService;
        this.clientsService = clientsService;
        this.title = 'EDIT ROLE';
        this.progressBarMode = '';
      }

      _createClass(RoleFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.roleForm = this.fb.group({
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.fillFormEdit();
        } // AutoComplete Input

      }, {
        key: "getClientListObservable",
        value: function getClientListObservable(val) {
          return this.clientsService.getClientsByQueryObservable(val);
        }
      }, {
        key: "fillFormEdit",
        value: function fillFormEdit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var roleToEdit;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.roleIdUrl = this.route.snapshot.paramMap.get('id');
                    this.roleForm.get('id').setValue(this.roleIdUrl);

                    if (!this.roleIdUrl) {
                      _context5.next = 7;
                      break;
                    }

                    _context5.next = 5;
                    return this.adminService.getRoleById(this.roleIdUrl);

                  case 5:
                    roleToEdit = _context5.sent;
                    this.roleForm.patchValue({
                      id: roleToEdit.id,
                      name: roleToEdit.name
                    });

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!this.roleForm.invalid) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 2:
                    this.progressBarMode = 'indeterminate';
                    _context6.prev = 3;
                    _context6.next = 6;
                    return this.adminService.updateRole(this.roleIdUrl, this.roleForm.value);

                  case 6:
                    this.snackBar.open("Role ".concat(this.roleForm.get('name').value, " was successfuly updated"), 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    this.router.navigate(['/roles']);
                    _context6.next = 14;
                    break;

                  case 10:
                    _context6.prev = 10;
                    _context6.t0 = _context6["catch"](3);
                    this.snackBar.open("Role was not updated", 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    throw _context6.t0;

                  case 14:
                    _context6.prev = 14;
                    this.progressBarMode = '';
                    return _context6.finish(14);

                  case 17:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[3, 10, 14, 17]]);
          }));
        }
      }]);

      return RoleFormComponent;
    }();

    RoleFormComponent.ɵfac = function RoleFormComponent_Factory(t) {
      return new (t || RoleFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_7__["ClientsService"]));
    };

    RoleFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RoleFormComponent,
      selectors: [["app-role-form"]],
      decls: 24,
      vars: 5,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], ["novalidate", "", "fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "10px", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "create-event-card"], ["color", "primary", "fxLayoutAlign", "center center"], [2, "padding", "0px 10px 0px 10px"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap.gt-sm", "10px"], ["appearance", "outline", "fxFlex", "48", "fxFlex.xs", "100"], ["matInput", "", "placeholder", "Role Id", "formControlName", "id", "readonly", ""], ["matInput", "", "placeholder", "Name", "formControlName", "name"], [4, "ngIf"], [2, "padding", "0px"], ["type", "button", "mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"]],
      template: function RoleFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RoleFormComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "EDIT ROLE NAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Role Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RoleFormComponent_mat_error_16_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card-actions", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleFormComponent_Template_button_click_18_listener() {
            return ctx.router.navigate(["/addUsersToRole", ctx.roleIdUrl]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Add Users to Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleFormComponent_Template_button_click_20_listener() {
            return ctx.router.navigate(["/roles"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.roleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roleForm.controls["name"].hasError("required"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlLWZvcm0vQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxyb2xlLWZvcm1cXHJvbGUtZm9ybS5jb21wb25lbnQuc2NzcyIsIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlLWZvcm0vcm9sZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0oiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUtZm9ybS9yb2xlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB9IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoleFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-role-form',
          templateUrl: './role-form.component.html',
          styleUrls: ['./role-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_6__["AdminService"]
        }, {
          type: ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_7__["ClientsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/admin/components/role-list/role-list.component.ts":
  /*!*************************************************************************!*\
    !*** ./ClientApp/app/admin/components/role-list/role-list.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RoleListComponent */

  /***/
  function ClientAppAppAdminComponentsRoleListRoleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleListComponent", function () {
      return RoleListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/components/dialog-custom/dialog-custom.component */
    "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts");
    /* harmony import */


    var ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ClientApp/app/shared/services/admin.service */
    "./ClientApp/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function RoleListComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Role Name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Role Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_td_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", role_r9.name, " ");
      }
    }

    function RoleListComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Users of Role");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_td_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleListComponent_td_22_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var role_r10 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.onEdit($event, role_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "mode_edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleListComponent_td_25_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var role_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.onDelete($event, role_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function RoleListComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
      }
    }

    function RoleListComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoleListComponent_tr_27_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var row_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.onRowClick(row_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var RoleListComponent = /*#__PURE__*/function () {
      function RoleListComponent(fb, adminService, dialog, router, snackBar) {
        _classCallCheck(this, RoleListComponent);

        this.fb = fb;
        this.adminService = adminService;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['name', 'addUsers', 'delete'];
        this.progressBarMode = '';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
      }

      _createClass(RoleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.roleForm = this.fb.group({
                      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                    _context7.next = 3;
                    return this.adminService.getRoleList();

                  case 3:
                    this.dataSource.data = _context7.sent;

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onRowClick",
        value: function onRowClick(row) {
          this.router.navigate(['roles/', row.id]);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var name, users, role, newRole;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(this.roleForm.valid && this.roleForm.touched)) {
                      _context8.next = 23;
                      break;
                    }

                    name = this.roleForm.get('name').value.trim();
                    this.progressBarMode = 'indeterminate';

                    if (!(name == '')) {
                      _context8.next = 7;
                      break;
                    }

                    this.roleForm.get('name').setErrors({
                      required: true
                    });
                    this.roleForm.get('name').setValue('');
                    return _context8.abrupt("return");

                  case 7:
                    _context8.prev = 7;
                    users = [];
                    role = {
                      id: '',
                      name: name,
                      users: []
                    };
                    _context8.next = 12;
                    return this.adminService.addRole(role);

                  case 12:
                    newRole = _context8.sent;
                    //Add Role to the list
                    this.dataSource.data = [].concat(_toConsumableArray(this.dataSource.data), [newRole]);
                    this.snackBar.open("Role ".concat(name, " was Created"), 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    _context8.next = 20;
                    break;

                  case 17:
                    _context8.prev = 17;
                    _context8.t0 = _context8["catch"](7);
                    this.snackBar.open('Something when wrong or Role already exist, Role was not created', 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });

                  case 20:
                    _context8.prev = 20;
                    this.progressBarMode = '';
                    return _context8.finish(20);

                  case 23:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[7, 17, 20, 23]]);
          }));
        }
      }, {
        key: "onDelete",
        value: function onDelete($event, roleToDelete) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this3 = this;

            var dialogData, dialogRef;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    $event.stopPropagation();
                    dialogData = new ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__["DialogData"]('Confirm Action', "Are you sure you want to delete the role ".concat(roleToDelete.name));
                    dialogRef = this.dialog.open(ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__["DialogCustomComponent"], {
                      maxWidth: '500px',
                      data: dialogData
                    });
                    dialogRef.afterClosed().subscribe(function (dialogResult) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        var index;
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                if (!dialogResult) {
                                  _context9.next = 12;
                                  break;
                                }

                                _context9.prev = 1;
                                _context9.next = 4;
                                return this.adminService.deleteRoleById(roleToDelete.id);

                              case 4:
                                index = this.dataSource.data.indexOf(roleToDelete);
                                this.dataSource.data.splice(index, 1);

                                this.dataSource._updateChangeSubscription();

                                _context9.next = 12;
                                break;

                              case 9:
                                _context9.prev = 9;
                                _context9.t0 = _context9["catch"](1);
                                this.snackBar.open('Something when wrong, Role was not deleted', 'X', {
                                  duration: 20000,
                                  panelClass: ['red-snackbar']
                                });

                              case 12:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this, [[1, 9]]);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "onEdit",
        value: function onEdit($event, role) {
          $event.stopPropagation();
          this.router.navigate(['/addUsersToRole', role.id]);
        }
      }]);

      return RoleListComponent;
    }();

    RoleListComponent.ɵfac = function RoleListComponent_Factory(t) {
      return new (t || RoleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]));
    };

    RoleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RoleListComponent,
      selectors: [["app-role-list"]],
      decls: 28,
      vars: 6,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container", 2, "padding-top", "60px"], ["fxLayoutAlign", "center center", "display", "block", 2, "font-size", "19px", "color", "var(--primary)"], ["novalidate", "", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 2, "width", "98%", "height", "auto", 3, "formGroup", "ngSubmit"], ["mat-flat-button", "", "color", "primary", "fxFlex", "10", "fxFlex.xs", "30", "fxFlex.sm", "30"], ["fxFlex", "50", "fxFlex.xs", "30"], ["matInput", "", "placeholder", "Add new Roles", "formControlName", "name"], [4, "ngIf"], ["fxFlex", "40", "fxFlex.xs", "20"], ["matInput", "", "placeholder", "General Search", 3, "keyup"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "addUsers"], ["mat-cell", "", "style", "cursor: pointer", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "cursor", "pointer"], [3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
      template: function RoleListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RoleListComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RoleListComponent_mat_error_11_Template, 4, 0, "mat-error", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RoleListComponent_Template_input_keyup_15_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RoleListComponent_th_18_Template, 2, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RoleListComponent_td_19_Template, 2, 1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RoleListComponent_th_21_Template, 2, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RoleListComponent_td_22_Template, 3, 0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RoleListComponent_th_24_Template, 3, 0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RoleListComponent_td_25_Template, 3, 0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RoleListComponent_tr_26_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RoleListComponent_tr_27_Template, 1, 0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.roleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roleForm.controls["name"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlLWxpc3QvQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFxyb2xlLWxpc3RcXHJvbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy9yb2xlLWxpc3Qvcm9sZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0oiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9hZG1pbi9jb21wb25lbnRzL3JvbGUtbGlzdC9yb2xlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB9IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RoleListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-role-list',
          templateUrl: './role-list.component.html',
          styleUrls: ['./role-list.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/admin/components/user-add-delete-role/user-add-delete-role.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./ClientApp/app/admin/components/user-add-delete-role/user-add-delete-role.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: UserAddDeleteRoleComponent */

  /***/
  function ClientAppAppAdminComponentsUserAddDeleteRoleUserAddDeleteRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAddDeleteRoleComponent", function () {
      return UserAddDeleteRoleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/components/dialog-custom/dialog-custom.component */
    "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts");
    /* harmony import */


    var ClientApp_app_shared_errors_role_exist_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ClientApp/app/shared/errors/role-exist-error */
    "./ClientApp/app/shared/errors/role-exist-error.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ClientApp/app/shared/services/admin.service */
    "./ClientApp/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function UserAddDeleteRoleComponent_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r9.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", role_r9.name, " ");
      }
    }

    function UserAddDeleteRoleComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " role is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserAddDeleteRoleComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Role Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserAddDeleteRoleComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", role_r10.name, " ");
      }
    }

    function UserAddDeleteRoleComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserAddDeleteRoleComponent_td_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAddDeleteRoleComponent_td_27_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

          var role_r11 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r12.onDelete($event, role_r11);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserAddDeleteRoleComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 25);
      }
    }

    function UserAddDeleteRoleComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 26);
      }
    }

    var UserAddDeleteRoleComponent = /*#__PURE__*/function () {
      function UserAddDeleteRoleComponent(fb, adminService, dialog, route, router, snackBar) {
        _classCallCheck(this, UserAddDeleteRoleComponent);

        this.fb = fb;
        this.adminService = adminService;
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['name', 'delete'];
        this.progressBarMode = '';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
      }

      _createClass(UserAddDeleteRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.roleForm = this.fb.group({
                      roleId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                    this.userId = this.route.snapshot.paramMap.get('id');
                    _context11.next = 4;
                    return this.adminService.getRolesOfUser(this.userId);

                  case 4:
                    this.user = _context11.sent;
                    this.dataSource.data = this.user.roles;
                    this.roleForm.controls['roleId'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (inputText) {
                      return _this4.getRoleListObservable(inputText || '');
                    })).subscribe(function (roleList) {
                      if (roleList.length > 0) {
                        _this4.roleArray = roleList;
                      }

                      _this4.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(roleList);
                    });

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } // AutoComplete Input

      }, {
        key: "getRoleListObservable",
        value: function getRoleListObservable(val) {
          return this.adminService.getAllRolesByQuery(val);
        }
      }, {
        key: "displayFn",
        value: function displayFn(roleArray) {
          return function (id) {
            var correspondingOption = Array.isArray(roleArray) ? roleArray.find(function (option) {
              return option.id === id;
            }) : null;
            return correspondingOption ? "".concat(correspondingOption.name) : '';
          };
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        } // Delete role from User

      }, {
        key: "onDelete",
        value: function onDelete($event, roleToDelete) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this5 = this;

            var dialogData, dialogRef;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    $event.stopPropagation();
                    dialogData = new ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__["DialogData"]('Confirm Action', "Are you sure you want to delete the role ".concat(roleToDelete.name, " from this User ").concat(this.user.firstName, " ").concat(this.user.lastName, " (").concat(this.user.email, ")"));
                    dialogRef = this.dialog.open(ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_4__["DialogCustomComponent"], {
                      maxWidth: '500px',
                      data: dialogData
                    });
                    dialogRef.afterClosed().subscribe(function (dialogResult) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                        var index;
                        return regeneratorRuntime.wrap(function _callee12$(_context12) {
                          while (1) {
                            switch (_context12.prev = _context12.next) {
                              case 0:
                                if (!dialogResult) {
                                  _context12.next = 12;
                                  break;
                                }

                                _context12.prev = 1;
                                _context12.next = 4;
                                return this.adminService.deleteRoleFromUser(this.user.id, roleToDelete.id);

                              case 4:
                                index = this.dataSource.data.indexOf(roleToDelete);
                                this.dataSource.data.splice(index, 1);

                                this.dataSource._updateChangeSubscription();

                                _context12.next = 12;
                                break;

                              case 9:
                                _context12.prev = 9;
                                _context12.t0 = _context12["catch"](1);
                                this.snackBar.open('Something went wrong, Role was not deleted', 'X', {
                                  duration: 20000,
                                  panelClass: ['red-snackbar']
                                });

                              case 12:
                              case "end":
                                return _context12.stop();
                            }
                          }
                        }, _callee12, this, [[1, 9]]);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var roleId, userPicked, roleCreated;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    if (!this.roleForm.invalid) {
                      _context14.next = 2;
                      break;
                    }

                    return _context14.abrupt("return");

                  case 2:
                    roleId = this.roleForm.controls['roleId'].value;
                    userPicked = (_a = this.roleArray) === null || _a === void 0 ? void 0 : _a.find(function (u) {
                      return u.id == roleId;
                    });

                    if (userPicked) {
                      _context14.next = 8;
                      break;
                    }

                    this.snackBar.open("You have to pick a role", 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    this.roleForm.controls['roleId'].setValue('');
                    return _context14.abrupt("return");

                  case 8:
                    // Validation End//
                    this.progressBarMode = 'indeterminate';
                    _context14.prev = 9;
                    console.log(this.userId, roleId);
                    _context14.next = 13;
                    return this.adminService.addRoleToUser(this.userId, roleId);

                  case 13:
                    roleCreated = _context14.sent;
                    this.dataSource.data.push(roleCreated);

                    this.dataSource._updateChangeSubscription();

                    _context14.next = 26;
                    break;

                  case 18:
                    _context14.prev = 18;
                    _context14.t0 = _context14["catch"](9);

                    if (!(_context14.t0 instanceof ClientApp_app_shared_errors_role_exist_error__WEBPACK_IMPORTED_MODULE_5__["RoleExitsError"])) {
                      _context14.next = 24;
                      break;
                    }

                    this.snackBar.open(_context14.t0.getErrorListMessage()[0].description, 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    _context14.next = 26;
                    break;

                  case 24:
                    this.snackBar.open("Something went wrong role was not added to user", 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    throw _context14.t0;

                  case 26:
                    _context14.prev = 26;
                    this.progressBarMode = '';
                    return _context14.finish(26);

                  case 29:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[9, 18, 26, 29]]);
          }));
        }
      }]);

      return UserAddDeleteRoleComponent;
    }();

    UserAddDeleteRoleComponent.ɵfac = function UserAddDeleteRoleComponent_Factory(t) {
      return new (t || UserAddDeleteRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]));
    };

    UserAddDeleteRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserAddDeleteRoleComponent,
      selectors: [["app-user-add-delete-role"]],
      decls: 30,
      vars: 16,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container"], ["fxLayoutAlign", "center center", "display", "block", 2, "font-size", "19px", "color", "var(--primary)"], ["novalidate", "", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 2, "width", "98%", "height", "auto", 3, "formGroup", "ngSubmit"], ["mat-flat-button", "", "color", "primary", "fxFlex", "10", "fxFlex.xs", "30", "fxFlex.sm", "30"], ["fxFlex", "48", "fxFlex.xs", "100"], ["matInput", "", "placeholder", "Pick one role", "formControlName", "roleId", 3, "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["fxFlex", "40", "fxFlex.xs", "20"], ["matInput", "", "placeholder", "General Search", 3, "keyup"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-cell", "", "style", "cursor: pointer", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "cursor", "pointer"], [3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function UserAddDeleteRoleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserAddDeleteRoleComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-autocomplete", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserAddDeleteRoleComponent_mat_option_14_Template, 2, 2, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserAddDeleteRoleComponent_mat_error_16_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function UserAddDeleteRoleComponent_Template_input_keyup_20_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UserAddDeleteRoleComponent_th_23_Template, 2, 0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserAddDeleteRoleComponent_td_24_Template, 2, 1, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UserAddDeleteRoleComponent_th_26_Template, 3, 0, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UserAddDeleteRoleComponent_td_27_Template, 3, 0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UserAddDeleteRoleComponent_tr_28_Template, 1, 0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UserAddDeleteRoleComponent_tr_29_Template, 1, 0, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("ROLES FROM USER ", ctx.user == null ? null : ctx.user.firstName, " ", ctx.user == null ? null : ctx.user.lastName, " (", ctx.user == null ? null : ctx.user.email, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.roleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 12, ctx.filteredOptions)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 14, ctx.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roleForm.controls["roleId"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWFkZC1kZWxldGUtcm9sZS9DOlxcVXNlcnNcXG9tYXJ0aW5lelxcRGVza3RvcFxcTGF3eWVyQXBwXFxsYXd5ZXJBcHBfQmFja0VuZC9DbGllbnRBcHBcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXHVzZXItYWRkLWRlbGV0ZS1yb2xlXFx1c2VyLWFkZC1kZWxldGUtcm9sZS5jb21wb25lbnQuc2NzcyIsIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWFkZC1kZWxldGUtcm9sZS91c2VyLWFkZC1kZWxldGUtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWFkZC1kZWxldGUtcm9sZS91c2VyLWFkZC1kZWxldGUtcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIH0iLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserAddDeleteRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-user-add-delete-role',
          templateUrl: './user-add-delete-role.component.html',
          styleUrls: ['./user-add-delete-role.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_8__["AdminService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/admin/components/user-form/user-form.component.ts":
  /*!*************************************************************************!*\
    !*** ./ClientApp/app/admin/components/user-form/user-form.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function ClientAppAppAdminComponentsUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");

    function UserFormComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oneError_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", oneError_r8.description, "");
      }
    }

    function UserFormComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserFormComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserFormComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserFormComponent_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserFormComponent_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserFormComponent_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserFormComponent_mat_chip_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r9 = ctx.$implicit;
        var indexOfelement_r10 = ctx.index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r7.availableColors[indexOfelement_r10 % 3].color);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", role_r9.name, " ");
      }
    }

    var UserFormComponent = /*#__PURE__*/function () {
      function UserFormComponent(fb, authService, route, router, snackBar) {
        _classCallCheck(this, UserFormComponent);

        this.fb = fb;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.formErrors = [];
        this.hidePassword = true;
        this.roleList = [];
        this.availableColors = [{
          name: 'Accent',
          color: 'accent'
        }, {
          name: 'Warn',
          color: 'warn'
        }, {
          name: 'Primary',
          color: 'primary'
        }];
        this.profileForm = this.fb.group({
          // role: [''],
          firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z ']*")]],
          lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z ']*")]],
          email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.emailValid()])]
        });
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var user;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    this.userId = this.route.snapshot.paramMap.get('id');
                    _context15.next = 3;
                    return this.authService.getUserById(this.userId).toPromise();

                  case 3:
                    user = _context15.sent;
                    this.roleList = user.roles;
                    this.profileForm.get('firstName').setValue(user.firstName);
                    this.profileForm.get('lastName').setValue(user.lastName);
                    this.profileForm.get('email').setValue(user.email);

                  case 8:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "emailValid",
        value: function emailValid() {
          return function (control) {
            // tslint:disable-next-line: max-line-length
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : {
              invalidEmail: true
            };
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var firstName, lastName, email;
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    if (!(this.profileForm.valid && this.profileForm.touched)) {
                      _context16.next = 17;
                      break;
                    }

                    firstName = this.profileForm.get('firstName').value.trim();
                    lastName = this.profileForm.get('lastName').value.trim();
                    email = this.profileForm.get('email').value.trim();
                    this.progressBarMode = 'indeterminate';
                    _context16.prev = 5;
                    _context16.next = 8;
                    return this.authService.updateProfile({
                      id: this.userId,
                      firstName: firstName,
                      lastName: lastName,
                      email: email
                    });

                  case 8:
                    this.snackBar.open('Profile was successfully updated', 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    _context16.next = 14;
                    break;

                  case 11:
                    _context16.prev = 11;
                    _context16.t0 = _context16["catch"](5);
                    this.snackBar.open('Something when wrong, profile was not updated', 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });

                  case 14:
                    _context16.prev = 14;
                    this.progressBarMode = '';
                    return _context16.finish(14);

                  case 17:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this, [[5, 11, 14, 17]]);
          }));
        }
      }]);

      return UserFormComponent;
    }();

    UserFormComponent.ɵfac = function UserFormComponent_Factory(t) {
      return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserFormComponent,
      selectors: [["app-user-form"]],
      decls: 40,
      vars: 12,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], [1, "container-wrapper"], [1, "mat-custom-authen"], ["class", "error-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [2, "font-weight", "900"], ["appearance", "outline", 1, "container"], ["type", "firstName", "matInput", "", "placeholder", "First Name", "formControlName", "firstName", "autocomplete", "firstName"], [4, "ngIf"], ["type", "lastName", "matInput", "", "placeholder", "Last Name", "formControlName", "lastName", "autocomplete", "lastName"], ["type", "email", "matInput", "", "placeholder", "Email", "formControlName", "email", "autocomplete", "email"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [2, "background-color", "rgb(250, 250, 250)"], ["aria-label", "role selection"], ["selected", "", 3, "color", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "error-message"], ["selected", "", 3, "color"]],
      template: function UserFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UserFormComponent_div_3_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UserFormComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Update User");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserFormComponent_mat_error_13_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserFormComponent_mat_error_14_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserFormComponent_mat_error_19_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserFormComponent_mat_error_20_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UserFormComponent_mat_error_25_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UserFormComponent_mat_error_26_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-chip-list", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UserFormComponent_mat_chip_36_Template, 2, 2, "mat-chip", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserFormComponent_Template_button_click_38_listener() {
            return ctx.router.navigate(["/addRolesToUser/", ctx.userId]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Update Roles");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.profileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["firstName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.profileForm.controls["firstName"].hasError("pattern") || ctx.profileForm.controls["firstName"].hasError("minlength")) && !ctx.profileForm.controls["firstName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["lastName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.profileForm.controls["lastName"].hasError("pattern") || ctx.profileForm.controls["lastName"].hasError("minlength")) && !ctx.profileForm.controls["lastName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["email"].hasError("invalidEmail") && !ctx.profileForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roleList);
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipList"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChip"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.mat-custom-authen[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: var(--warm);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWZvcm0vQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFx1c2VyLWZvcm1cXHVzZXItZm9ybS5jb21wb25lbnQuc2NzcyIsIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY3VzdG9tLWF1dGhlbiB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfSIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWF0LWN1c3RvbS1hdXRoZW4ge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-user-form',
          templateUrl: './user-form.component.html',
          styleUrls: ['./user-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/admin/components/user-list/user-list.component.ts":
  /*!*************************************************************************!*\
    !*** ./ClientApp/app/admin/components/user-list/user-list.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function ClientAppAppAdminComponentsUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/components/dialog-custom/dialog-custom.component */
    "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts");
    /* harmony import */


    var ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/services/admin.service */
    "./ClientApp/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function UserListComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r12.firstName, " ");
      }
    }

    function UserListComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r13.lastName, " ");
      }
    }

    function UserListComponent_th_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_td_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", user_r14.email, " ");
      }
    }

    function UserListComponent_th_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_td_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_td_23_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var user_r15 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.onEdit($event, user_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "mode_edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_th_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_td_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_td_26_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var user_r18 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.onDelete($event, user_r18);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UserListComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
      }
    }

    function UserListComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_tr_28_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var row_r21 = ctx.$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.onRowClick(row_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/users/new"];
    };

    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent(adminService, dialog, router, snackBar) {
        _classCallCheck(this, UserListComponent);

        this.adminService = adminService;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'edit', 'delete'];
        this.progressBarMode = '';
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.adminService.getAllUsers();

                  case 2:
                    this.dataSource.data = _context17.sent;

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onRowClick",
        value: function onRowClick(row) {
          this.router.navigate(['users/', row.id]);
        }
      }, {
        key: "onDelete",
        value: function onDelete($event, userToDelete) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this6 = this;

            var dialogData, dialogRef;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    $event.stopPropagation();
                    dialogData = new ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__["DialogData"]('Confirm Action', "Are you sure you want to delete the user ".concat(userToDelete.firstName, " ").concat(userToDelete.lastName, " (").concat(userToDelete.email, ") "));
                    dialogRef = this.dialog.open(ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__["DialogCustomComponent"], {
                      maxWidth: '500px',
                      data: dialogData
                    });
                    dialogRef.afterClosed().subscribe(function (dialogResult) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
                        var index;
                        return regeneratorRuntime.wrap(function _callee18$(_context18) {
                          while (1) {
                            switch (_context18.prev = _context18.next) {
                              case 0:
                                _context18.prev = 0;

                                if (!dialogResult) {
                                  _context18.next = 7;
                                  break;
                                }

                                _context18.next = 4;
                                return this.adminService.deleteUser(userToDelete.id);

                              case 4:
                                index = this.dataSource.data.indexOf(userToDelete);
                                this.dataSource.data.splice(index, 1);

                                this.dataSource._updateChangeSubscription();

                              case 7:
                                _context18.next = 12;
                                break;

                              case 9:
                                _context18.prev = 9;
                                _context18.t0 = _context18["catch"](0);
                                this.snackBar.open('Something when wrong, User was not deleted', 'X', {
                                  duration: 20000,
                                  panelClass: ['red-snackbar']
                                });

                              case 12:
                                _context18.prev = 12;
                                this.progressBarMode = '';
                                return _context18.finish(12);

                              case 15:
                              case "end":
                                return _context18.stop();
                            }
                          }
                        }, _callee18, this, [[0, 9, 12, 15]]);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "onEdit",
        value: function onEdit($event, user) {
          $event.stopPropagation();
          this.router.navigate(['/users', user.id]);
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ɵfac = function UserListComponent_Factory(t) {
      return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]));
    };

    UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["app-user-list"]],
      decls: 29,
      vars: 6,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container", 2, "padding-top", "60px"], ["fxLayoutAlign", "center center", "display", "block", 2, "font-size", "19px", "color", "var(--primary)"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 2, "width", "98%"], ["mat-flat-button", "", "color", "primary", "fxFlex", "10", 3, "routerLink"], ["fxFlex", "90"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "firstName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastName"], ["matColumnDef", "email"], ["matColumnDef", "edit"], ["mat-cell", "", "style", "cursor: pointer", 4, "matCellDef"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "cursor", "pointer"], [3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Admin Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function UserListComponent_Template_input_keyup_10_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserListComponent_th_13_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserListComponent_td_14_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserListComponent_th_16_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UserListComponent_td_17_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserListComponent_th_19_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UserListComponent_td_20_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UserListComponent_th_22_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UserListComponent_td_23_Template, 3, 0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, UserListComponent_th_25_Template, 3, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UserListComponent_td_26_Template, 3, 0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UserListComponent_tr_27_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, UserListComponent_tr_28_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWxpc3QvQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFx1c2VyLWxpc3RcXHVzZXItbGlzdC5jb21wb25lbnQuc2NzcyIsIkNsaWVudEFwcC9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0oiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICB9IiwiLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-user-list',
          templateUrl: './user-list.component.html',
          styleUrls: ['./user-list.component.scss']
        }]
      }], function () {
        return [{
          type: ClientApp_app_shared_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/app-routing.module.ts":
  /*!*********************************************!*\
    !*** ./ClientApp/app/app-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function ClientAppAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _documents_components_first_document_form_first_document_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./documents/components/first-document-form/first-document-form.component */
    "./ClientApp/app/documents/components/first-document-form/first-document-form.component.ts");
    /* harmony import */


    var _lawyer_components_case_form_case_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lawyer/components/case-form/case-form.component */
    "./ClientApp/app/lawyer/components/case-form/case-form.component.ts");
    /* harmony import */


    var _lawyer_components_case_list_case_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lawyer/components/case-list/case-list.component */
    "./ClientApp/app/lawyer/components/case-list/case-list.component.ts");
    /* harmony import */


    var _lawyer_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lawyer/components/client-form/client-form.component */
    "./ClientApp/app/lawyer/components/client-form/client-form.component.ts");
    /* harmony import */


    var _lawyer_components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lawyer/components/client-list/client-list.component */
    "./ClientApp/app/lawyer/components/client-list/client-list.component.ts");
    /* harmony import */


    var _lawyer_components_document_form_fill_document_form_fill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./lawyer/components/document-form-fill/document-form-fill.component */
    "./ClientApp/app/lawyer/components/document-form-fill/document-form-fill.component.ts");
    /* harmony import */


    var _lawyer_components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lawyer/components/document-list/document-list.component */
    "./ClientApp/app/lawyer/components/document-list/document-list.component.ts");
    /* harmony import */


    var _shared_components_document_form_fill_anonymous_document_form_fill_anonymous_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/components/document-form-fill-anonymous/document-form-fill-anonymous.component */
    "./ClientApp/app/shared/components/document-form-fill-anonymous/document-form-fill-anonymous.component.ts");
    /* harmony import */


    var _shared_components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/components/error-page/error-page.component */
    "./ClientApp/app/shared/components/error-page/error-page.component.ts");
    /* harmony import */


    var _shared_components_upload_file_anonymous_upload_file_anonymous_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/components/upload-file-anonymous/upload-file-anonymous.component */
    "./ClientApp/app/shared/components/upload-file-anonymous/upload-file-anonymous.component.ts");
    /* harmony import */


    var _lawyer_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./lawyer/components/upload-file/upload-file.component */
    "./ClientApp/app/lawyer/components/upload-file/upload-file.component.ts");
    /* harmony import */


    var _shared_guards_can_read_clients_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/guards/can-read-clients.guard */
    "./ClientApp/app/shared/guards/can-read-clients.guard.ts");
    /* harmony import */


    var _shared_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/guards/auth-guard.guard */
    "./ClientApp/app/shared/guards/auth-guard.guard.ts");

    var routes = [{
      path: "cases/new",
      component: _lawyer_components_case_form_case_form_component__WEBPACK_IMPORTED_MODULE_3__["CaseFormComponent"],
      canActivate: [_shared_guards_can_read_clients_guard__WEBPACK_IMPORTED_MODULE_13__["CanReadClientsGuard"]]
    }, {
      path: "cases/:id",
      component: _lawyer_components_case_form_case_form_component__WEBPACK_IMPORTED_MODULE_3__["CaseFormComponent"],
      canActivate: [_shared_guards_can_read_clients_guard__WEBPACK_IMPORTED_MODULE_13__["CanReadClientsGuard"]]
    }, {
      path: "cases",
      component: _lawyer_components_case_list_case_list_component__WEBPACK_IMPORTED_MODULE_4__["CaseListComponent"],
      canActivate: [_shared_guards_can_read_clients_guard__WEBPACK_IMPORTED_MODULE_13__["CanReadClientsGuard"]]
    }, {
      path: "clients/new",
      component: _lawyer_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_5__["ClientFormComponent"],
      canActivate: [_shared_guards_can_read_clients_guard__WEBPACK_IMPORTED_MODULE_13__["CanReadClientsGuard"]]
    }, {
      path: "clients/:id",
      component: _lawyer_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_5__["ClientFormComponent"],
      canActivate: [_shared_guards_can_read_clients_guard__WEBPACK_IMPORTED_MODULE_13__["CanReadClientsGuard"]]
    }, {
      path: "clients",
      component: _lawyer_components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientListComponent"],
      canActivate: [_shared_guards_can_read_clients_guard__WEBPACK_IMPORTED_MODULE_13__["CanReadClientsGuard"]]
    }, {
      path: "documents",
      component: _lawyer_components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_8__["DocumentListComponent"],
      canActivate: [_shared_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    }, {
      path: "document-upload",
      component: _lawyer_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_12__["UploadFileComponent"]
    }, {
      path: "document-upload-anonymous",
      component: _shared_components_upload_file_anonymous_upload_file_anonymous_component__WEBPACK_IMPORTED_MODULE_11__["UploadFileAnonymousComponent"]
    }, // { path: "document-form-list", component: DocumentFormListComponent},
    {
      path: "document-form-fill/:id",
      component: _lawyer_components_document_form_fill_document_form_fill_component__WEBPACK_IMPORTED_MODULE_7__["DocumentFormFillComponent"]
    }, {
      path: "document-form-fill-anonymous/:id",
      component: _shared_components_document_form_fill_anonymous_document_form_fill_anonymous_component__WEBPACK_IMPORTED_MODULE_9__["DocumentFormFillAnonymousComponent"]
    }, {
      path: "form-first",
      component: _documents_components_first_document_form_first_document_form_component__WEBPACK_IMPORTED_MODULE_2__["FirstDocumentFormComponent"]
    }, {
      path: 'not_found',
      component: _shared_components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"],
      data: {
        message: 'This page can’t be reached'
      }
    }, {
      path: '**',
      redirectTo: '/not_found'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true,
        enableTracing: false,
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true,
            enableTracing: false,
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/app.component.ts":
  /*!****************************************!*\
    !*** ./ClientApp/app/app.component.ts ***!
    \****************************************/

  /*! exports provided: AppComponent */

  /***/
  function ClientAppAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core/components/navbar/navbar.component */
    "./ClientApp/app/core/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'lawyerApp';
      } // Router Animation


      _createClass(AppComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[2, "height", "100%"], ["outlet", "outlet"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_core_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/app.module.ts":
  /*!*************************************!*\
    !*** ./ClientApp/app/app.module.ts ***!
    \*************************************/

  /*! exports provided: AppModule */

  /***/
  function ClientAppAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./ClientApp/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./ClientApp/app/app.component.ts");
    /* harmony import */


    var _material_modules_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./material-modules.module */
    "./ClientApp/app/material-modules.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./ClientApp/app/auth/auth.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./ClientApp/app/shared/shared.module.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core/core.module */
    "./ClientApp/app/core/core.module.ts");
    /* harmony import */


    var _lawyer_components_case_list_case_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./lawyer/components/case-list/case-list.component */
    "./ClientApp/app/lawyer/components/case-list/case-list.component.ts");
    /* harmony import */


    var _lawyer_components_case_form_case_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./lawyer/components/case-form/case-form.component */
    "./ClientApp/app/lawyer/components/case-form/case-form.component.ts");
    /* harmony import */


    var _shared_components_clients_dropdown_clients_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/components/clients-dropdown/clients-dropdown.component */
    "./ClientApp/app/shared/components/clients-dropdown/clients-dropdown.component.ts");
    /* harmony import */


    var _shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/components/dialog-custom/dialog-custom.component */
    "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts");
    /* harmony import */


    var _lawyer_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./lawyer/components/client-form/client-form.component */
    "./ClientApp/app/lawyer/components/client-form/client-form.component.ts");
    /* harmony import */


    var _lawyer_components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./lawyer/components/client-list/client-list.component */
    "./ClientApp/app/lawyer/components/client-list/client-list.component.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./ClientApp/app/admin/admin.module.ts");
    /* harmony import */


    var _documents_components_first_document_form_first_document_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./documents/components/first-document-form/first-document-form.component */
    "./ClientApp/app/documents/components/first-document-form/first-document-form.component.ts");
    /* harmony import */


    var _documents_components_document_form_list_document_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./documents/components/document-form-list/document-list.component */
    "./ClientApp/app/documents/components/document-form-list/document-list.component.ts");
    /* harmony import */


    var _lawyer_components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./lawyer/components/document-list/document-list.component */
    "./ClientApp/app/lawyer/components/document-list/document-list.component.ts");
    /* harmony import */


    var _lawyer_components_document_form_fill_document_form_fill_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./lawyer/components/document-form-fill/document-form-fill.component */
    "./ClientApp/app/lawyer/components/document-form-fill/document-form-fill.component.ts");
    /* harmony import */


    var _core_components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./core/components/user-home-page/user-home-page.component */
    "./ClientApp/app/core/components/user-home-page/user-home-page.component.ts");
    /* harmony import */


    var _shared_components_upload_file_anonymous_upload_file_anonymous_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/components/upload-file-anonymous/upload-file-anonymous.component */
    "./ClientApp/app/shared/components/upload-file-anonymous/upload-file-anonymous.component.ts");
    /* harmony import */


    var _shared_components_document_form_fill_anonymous_document_form_fill_anonymous_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./shared/components/document-form-fill-anonymous/document-form-fill-anonymous.component */
    "./ClientApp/app/shared/components/document-form-fill-anonymous/document-form-fill-anonymous.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__["AdminModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _lawyer_components_case_form_case_form_component__WEBPACK_IMPORTED_MODULE_11__["CaseFormComponent"], _lawyer_components_case_list_case_list_component__WEBPACK_IMPORTED_MODULE_10__["CaseListComponent"], _shared_components_clients_dropdown_clients_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["ClientsDropdownComponent"], _shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_13__["DialogCustomComponent"], _lawyer_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_14__["ClientFormComponent"], _lawyer_components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__["ClientListComponent"], _documents_components_document_form_list_document_list_component__WEBPACK_IMPORTED_MODULE_18__["DocumentFormListComponent"], _documents_components_first_document_form_first_document_form_component__WEBPACK_IMPORTED_MODULE_17__["FirstDocumentFormComponent"], _lawyer_components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_19__["DocumentListComponent"], _lawyer_components_document_form_fill_document_form_fill_component__WEBPACK_IMPORTED_MODULE_20__["DocumentFormFillComponent"], _core_components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_21__["UserHomePageComponent"], _shared_components_upload_file_anonymous_upload_file_anonymous_component__WEBPACK_IMPORTED_MODULE_22__["UploadFileAnonymousComponent"], _shared_components_document_form_fill_anonymous_document_form_fill_anonymous_component__WEBPACK_IMPORTED_MODULE_23__["DocumentFormFillAnonymousComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__["AdminModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _lawyer_components_case_form_case_form_component__WEBPACK_IMPORTED_MODULE_11__["CaseFormComponent"], _lawyer_components_case_list_case_list_component__WEBPACK_IMPORTED_MODULE_10__["CaseListComponent"], _shared_components_clients_dropdown_clients_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["ClientsDropdownComponent"], _shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_13__["DialogCustomComponent"], _lawyer_components_client_form_client_form_component__WEBPACK_IMPORTED_MODULE_14__["ClientFormComponent"], _lawyer_components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__["ClientListComponent"], _documents_components_document_form_list_document_list_component__WEBPACK_IMPORTED_MODULE_18__["DocumentFormListComponent"], _documents_components_first_document_form_first_document_form_component__WEBPACK_IMPORTED_MODULE_17__["FirstDocumentFormComponent"], _lawyer_components_document_list_document_list_component__WEBPACK_IMPORTED_MODULE_19__["DocumentListComponent"], _lawyer_components_document_form_fill_document_form_fill_component__WEBPACK_IMPORTED_MODULE_20__["DocumentFormFillComponent"], _core_components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_21__["UserHomePageComponent"], _shared_components_upload_file_anonymous_upload_file_anonymous_component__WEBPACK_IMPORTED_MODULE_22__["UploadFileAnonymousComponent"], _shared_components_document_form_fill_anonymous_document_form_fill_anonymous_component__WEBPACK_IMPORTED_MODULE_23__["DocumentFormFillAnonymousComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__["AdminModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/auth.module.ts":
  /*!*******************************************!*\
    !*** ./ClientApp/app/auth/auth.module.ts ***!
    \*******************************************/

  /*! exports provided: AuthModule */

  /***/
  function ClientAppAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./ClientApp/app/auth/signin/signin.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./ClientApp/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forgot-pass/forgot-pass.component */
    "./ClientApp/app/auth/forgot-pass/forgot-pass.component.ts");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./ClientApp/app/auth/update-user/update-user.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./ClientApp/app/auth/profile/profile.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./ClientApp/app/auth/change-password/change-password.component.ts");
    /* harmony import */


    var _forgot_password_token_forgot_password_token_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./forgot-password-token/forgot-password-token.component */
    "./ClientApp/app/auth/forgot-password-token/forgot-password-token.component.ts");
    /* harmony import */


    var _confirm_validator_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./confirm-validator.directive */
    "./ClientApp/app/auth/confirm-validator.directive.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../shared/guards/auth-guard.guard */
    "./ClientApp/app/shared/guards/auth-guard.guard.ts");
    /* harmony import */


    var _shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../shared/guards/logged.guard */
    "./ClientApp/app/shared/guards/logged.guard.ts"); // import { TeamsDropdownComponent } from 'src/app/shared/components/teams-dropdown/teams-dropdown.component';


    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forChild([{
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
        canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"]]
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
        canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"]]
      }, {
        path: 'forgot-password',
        component: _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPassComponent"],
        canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"]]
      }, {
        path: 'forgot-password-token',
        component: _forgot_password_token_forgot_password_token_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordTokenComponent"],
        canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"]]
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_shared_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]]
      }, {
        path: 'change-password',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
        canActivate: [_shared_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPassComponent"], _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_5__["UpdateUserComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"], _forgot_password_token_forgot_password_token_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordTokenComponent"], _confirm_validator_directive__WEBPACK_IMPORTED_MODULE_18__["ConfirmValidatorDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPassComponent"], _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_5__["UpdateUserComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"], _forgot_password_token_forgot_password_token_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordTokenComponent"], _confirm_validator_directive__WEBPACK_IMPORTED_MODULE_18__["ConfirmValidatorDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forChild([{
            path: 'signin',
            component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"],
            canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"]]
          }, {
            path: 'signup',
            component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
            canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"]]
          }, {
            path: 'forgot-password',
            component: _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPassComponent"],
            canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"]]
          }, {
            path: 'forgot-password-token',
            component: _forgot_password_token_forgot_password_token_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordTokenComponent"],
            canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_21__["LoggedGuard"]]
          }, {
            path: 'profile',
            component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
            canActivate: [_shared_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]]
          }, {
            path: 'change-password',
            component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
            canActivate: [_shared_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/change-password/change-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./ClientApp/app/auth/change-password/change-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function ClientAppAppAuthChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ClientApp_app_shared_errors_user_exits_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/errors/user-exits-error */
    "./ClientApp/app/shared/errors/user-exits-error.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ClientApp/app/shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _confirm_validator_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../confirm-validator.directive */
    "./ClientApp/app/auth/confirm-validator.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ChangePasswordComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oneError_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", oneError_r8.description, "");
      }
    }

    function ChangePasswordComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Current Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have more than ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "3 Characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have more than ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "3 Characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_mat_error_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_mat_error_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have more than ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "3 Characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_mat_error_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password do ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " not match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(route, fb, authService, snackBar, router) {
        _classCallCheck(this, ChangePasswordComponent);

        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.progressBarMode = '';
        this.formErrors = [];
        this.hidePassword = true;
        this.hideCurrentPassword = true;
        this.resetPasswordForm = this.fb.group({
          currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
          newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
          retypePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
        });
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.resetPasswordForm.get('currentPassword').markAsTouched();
                    this.resetPasswordForm.get('newPassword').markAsTouched();
                    this.resetPasswordForm.get('retypePassword').markAsTouched();
                    this.messageSuccess = '';
                    this.messageError = '';

                    if (!(this.resetPasswordForm.valid && this.resetPasswordForm.touched)) {
                      _context20.next = 18;
                      break;
                    }

                    this.progressBarMode = 'indeterminate';
                    _context20.prev = 7;
                    _context20.next = 10;
                    return this.authService.changePassword(this.resetPasswordForm.value);

                  case 10:
                    _context20.next = 15;
                    break;

                  case 12:
                    _context20.prev = 12;
                    _context20.t0 = _context20["catch"](7);

                    if (_context20.t0 instanceof ClientApp_app_shared_errors_user_exits_error__WEBPACK_IMPORTED_MODULE_3__["UserExitsError"]) {
                      this.resetPasswordForm.setErrors({
                        accountExitorPasswordComplexity: true
                      });
                      this.formErrors = _context20.t0.getErrorListMessage();
                    } else {
                      this.snackBar.open('Something went wrong, password was not updated', 'X', {
                        duration: 20000,
                        panelClass: ['red-snackbar']
                      });
                    }

                  case 15:
                    _context20.prev = 15;
                    this.progressBarMode = '';
                    return _context20.finish(15);

                  case 18:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this, [[7, 12, 15, 18]]);
          }));
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      decls: 35,
      vars: 16,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], [1, "container-wrapper"], [1, "mat-custom-authen"], ["class", "error-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mat-typography"], [2, "font-weight", "800"], ["appearance", "outline", 1, "container"], ["matInput", "", "placeholder", "Current Password", "formControlName", "currentPassword", "autocomplete", "new-password", 3, "type", "change"], ["matSuffix", "", 3, "click"], [4, "ngIf"], ["matInput", "", "placeholder", "New Password", "formControlName", "newPassword", "autocomplete", "new-password", 3, "type", "change"], ["type", "password", "matInput", "", "placeholder", "Retype Password", "formControlName", "retypePassword", "autocomplete", "new-password", "appConfirmValidator", "newPassword"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "error-message"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChangePasswordComponent_div_3_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ChangePasswordComponent_Template_input_change_12_listener() {
            return ctx.resetPasswordForm.controls["retypePassword"].updateValueAndValidity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_13_listener() {
            return ctx.hideCurrentPassword = !ctx.hideCurrentPassword;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ChangePasswordComponent_mat_error_15_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ChangePasswordComponent_mat_error_16_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ChangePasswordComponent_Template_input_change_20_listener() {
            return ctx.resetPasswordForm.controls["retypePassword"].updateValueAndValidity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_mat_icon_click_21_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ChangePasswordComponent_mat_error_23_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ChangePasswordComponent_mat_error_24_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ChangePasswordComponent_mat_error_29_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ChangePasswordComponent_mat_error_30_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ChangePasswordComponent_mat_error_31_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hideCurrentPassword ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hideCurrentPassword ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["currentPassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["currentPassword"].hasError("minlength") && !ctx.resetPasswordForm.controls["currentPassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["newPassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["newPassword"].hasError("minlength") && !ctx.resetPasswordForm.controls["newPassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["retypePassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["retypePassword"].hasError("minlength") && !ctx.resetPasswordForm.controls["retypePassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.hasError("notEqual", "retypePassword") && !ctx.resetPasswordForm.controls["retypePassword"].hasError("required"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _confirm_validator_directive__WEBPACK_IMPORTED_MODULE_14__["ConfirmValidatorDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.mat-custom-authen[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nmat-card.custom-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\nmat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\nmat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: var(--warm);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGF1dGhcXGNoYW5nZS1wYXNzd29yZFxcY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9hdXRoL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURHSTtFQUNFLGdCQUFBO0FDQU47O0FERUk7RUFDRSxzQkFBQTtBQ0FOOztBREdJO0VBQ0UscUJBQUE7QUNETjs7QURLRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYXV0aC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jdXN0b20tYXV0aGVuIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgJi5jdXN0b20tY2FyZCB7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiBoMSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuLy8gICA6Om5nLWRlZXAgLmdyZWVuLXNuYWNrYmFyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIDo6bmctZGVlcCAucmVkLXNuYWNrYmFyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgOjpuZy1kZWVwIHNwYW4ubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gfSIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWF0LWN1c3RvbS1hdXRoZW4ge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbm1hdC1jYXJkLmN1c3RvbS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cbm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbm1hdC1jYXJkIGgxIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-change-password',
          templateUrl: './change-password.component.html',
          styleUrls: ['./change-password.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/confirm-validator.directive.ts":
  /*!***********************************************************!*\
    !*** ./ClientApp/app/auth/confirm-validator.directive.ts ***!
    \***********************************************************/

  /*! exports provided: ConfirmValidatorDirective */

  /***/
  function ClientAppAppAuthConfirmValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmValidatorDirective", function () {
      return ConfirmValidatorDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ConfirmValidatorDirective = /*#__PURE__*/function () {
      function ConfirmValidatorDirective() {
        _classCallCheck(this, ConfirmValidatorDirective);
      }

      _createClass(ConfirmValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          var controlToCompare = control.parent.get(this.appConfirmValidator);

          if (controlToCompare && controlToCompare.value !== control.value) {
            return {
              'notEqual': true
            };
          }

          return null;
        }
      }]);

      return ConfirmValidatorDirective;
    }();

    ConfirmValidatorDirective.ɵfac = function ConfirmValidatorDirective_Factory(t) {
      return new (t || ConfirmValidatorDirective)();
    };

    ConfirmValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ConfirmValidatorDirective,
      selectors: [["", "appConfirmValidator", ""]],
      inputs: {
        appConfirmValidator: "appConfirmValidator"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: ConfirmValidatorDirective,
        multi: true
      }])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmValidatorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appConfirmValidator]',
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
            useExisting: ConfirmValidatorDirective,
            multi: true
          }]
        }]
      }], null, {
        appConfirmValidator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/forgot-pass/forgot-pass.component.ts":
  /*!*****************************************************************!*\
    !*** ./ClientApp/app/auth/forgot-pass/forgot-pass.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ForgotPassComponent */

  /***/
  function ClientAppAppAuthForgotPassForgotPassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPassComponent", function () {
      return ForgotPassComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ForgotPassComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ForgotPassComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ForgotPassComponent = /*#__PURE__*/function () {
      function ForgotPassComponent(fb, authService, snackBar // private sharedService: SharedService
      ) {
        _classCallCheck(this, ForgotPassComponent);

        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.forgotPasswordForm = this.fb.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.emailValid()])]
        });
      }

      _createClass(ForgotPassComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var email;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    if (!(this.forgotPasswordForm.valid && this.forgotPasswordForm.touched)) {
                      _context21.next = 16;
                      break;
                    }

                    email = this.forgotPasswordForm.get('email').value.trim();
                    this.progressBarMode = 'indeterminate';
                    _context21.prev = 3;
                    _context21.next = 6;
                    return this.authService.forgotPassword(email);

                  case 6:
                    this.snackBar.open('A reset password link was send to your email.', 'X', {
                      duration: 8000
                    });
                    this.forgotPasswordForm.reset();
                    this.forgotPasswordForm.get('email').setErrors(null);
                    _context21.next = 13;
                    break;

                  case 11:
                    _context21.prev = 11;
                    _context21.t0 = _context21["catch"](3);

                  case 13:
                    _context21.prev = 13;
                    this.progressBarMode = '';
                    return _context21.finish(13);

                  case 16:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this, [[3, 11, 13, 16]]);
          }));
        }
      }, {
        key: "emailValid",
        value: function emailValid() {
          return function (control) {
            // tslint:disable-next-line: max-line-length
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : {
              invalidEmail: true
            };
          };
        }
      }]);

      return ForgotPassComponent;
    }();

    ForgotPassComponent.ɵfac = function ForgotPassComponent_Factory(t) {
      return new (t || ForgotPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    ForgotPassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotPassComponent,
      selectors: [["app-forgot-pass"]],
      decls: 23,
      vars: 6,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], [1, "container-wrapper"], [1, "mat-custom-authen"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mat-typography"], [2, "font-weight", "800"], ["appearance", "outline", 1, "container"], ["type", "email", "matInput", "", "placeholder", "Email", "formControlName", "email", "autocomplete", "email"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "outside-message"], ["routerLink", "/signin", "routerLinkActive", "router-link-active"], ["routerLink", "/signup", "routerLinkActive", "router-link-active"]],
      template: function ForgotPassComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPassComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ForgotPassComponent_mat_error_12_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ForgotPassComponent_mat_error_13_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Send Reset Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Sign-In");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " || ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sign-nUp");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.controls["email"].hasError("invalidEmail") && !ctx.forgotPasswordForm.controls["email"].hasError("required"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.mat-custom-authen[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nmat-card.custom-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\nmat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\nmat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXV0aC9mb3Jnb3QtcGFzcy9DOlxcVXNlcnNcXG9tYXJ0aW5lelxcRGVza3RvcFxcTGF3eWVyQXBwXFxsYXd5ZXJBcHBfQmFja0VuZC9DbGllbnRBcHBcXGFwcFxcYXV0aFxcZm9yZ290LXBhc3NcXGZvcmdvdC1wYXNzLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9hdXRoL2ZvcmdvdC1wYXNzL2ZvcmdvdC1wYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FER0k7RUFDRSxnQkFBQTtBQ0FOOztBREVJO0VBQ0Usc0JBQUE7QUNBTjs7QURHSTtFQUNFLHFCQUFBO0FDRE4iLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9hdXRoL2ZvcmdvdC1wYXNzL2ZvcmdvdC1wYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jdXN0b20tYXV0aGVuIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgJi5jdXN0b20tY2FyZCB7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmIGgxIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtY3VzdG9tLWF1dGhlbiB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxubWF0LWNhcmQuY3VzdG9tLWNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxubWF0LWNhcmQgaDEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForgotPassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-forgot-pass',
          templateUrl: './forgot-pass.component.html',
          styleUrls: ['./forgot-pass.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/forgot-password-token/forgot-password-token.component.ts":
  /*!*************************************************************************************!*\
    !*** ./ClientApp/app/auth/forgot-password-token/forgot-password-token.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ForgotPasswordTokenComponent */

  /***/
  function ClientAppAppAuthForgotPasswordTokenForgotPasswordTokenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordTokenComponent", function () {
      return ForgotPasswordTokenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ClientApp_app_shared_errors_wrong_crendential_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/errors/wrong-crendential-error */
    "./ClientApp/app/shared/errors/wrong-crendential-error.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ClientApp/app/shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _confirm_validator_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../confirm-validator.directive */
    "./ClientApp/app/auth/confirm-validator.directive.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ForgotPasswordTokenComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oneError_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", oneError_r8.description, "");
      }
    }

    function ForgotPasswordTokenComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordTokenComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordTokenComponent_mat_error_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " New Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordTokenComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have more than ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "3 Characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordTokenComponent_mat_error_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordTokenComponent_mat_error_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have more than ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "3 Characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordTokenComponent_mat_error_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password do ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " not match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ForgotPasswordTokenComponent = /*#__PURE__*/function () {
      function ForgotPasswordTokenComponent(route, fb, authService, snackBar, router) {
        _classCallCheck(this, ForgotPasswordTokenComponent);

        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.progressBarMode = '';
        this.formErrors = [];
        this.hidePassword = true;
        this.resetPasswordForm = this.fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.emailValid()]],
          newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
          retypePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]]
        });
      }

      _createClass(ForgotPasswordTokenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotPasswordToken = this.route.snapshot.queryParamMap.get('token');
        }
      }, {
        key: "emailValid",
        value: function emailValid() {
          return function (control) {
            // tslint:disable-next-line: max-line-length
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : {
              invalidEmail: true
            };
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var email, newPassword;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    this.resetPasswordForm.get('email').markAsTouched();
                    this.resetPasswordForm.get('newPassword').markAsTouched();
                    this.resetPasswordForm.get('retypePassword').markAsTouched();
                    this.messageSuccess = '';
                    this.messageError = '';

                    if (!(this.resetPasswordForm.valid && this.resetPasswordForm.touched)) {
                      _context22.next = 23;
                      break;
                    }

                    email = this.resetPasswordForm.get('email').value.trim();
                    newPassword = this.resetPasswordForm.get('newPassword').value.trim();
                    this.progressBarMode = 'indeterminate';
                    _context22.prev = 9;
                    _context22.next = 12;
                    return this.authService.forgotPasswordToken(email, newPassword, this.forgotPasswordToken);

                  case 12:
                    this.snackBar.open('Password successfully changed', 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    this.router.navigate(['/signin']);
                    _context22.next = 20;
                    break;

                  case 16:
                    _context22.prev = 16;
                    _context22.t0 = _context22["catch"](9);

                    if (_context22.t0 instanceof ClientApp_app_shared_errors_wrong_crendential_error__WEBPACK_IMPORTED_MODULE_3__["WrongCredentialError"]) {
                      this.snackBar.open('Token invalid, expired or wrong email', 'X', {
                        duration: 20000,
                        panelClass: ['red-snackbar']
                      });
                    }

                    this.snackBar.open('Something went wrong, password was not updated', 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });

                  case 20:
                    _context22.prev = 20;
                    this.progressBarMode = '';
                    return _context22.finish(20);

                  case 23:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this, [[9, 16, 20, 23]]);
          }));
        }
      }]);

      return ForgotPasswordTokenComponent;
    }();

    ForgotPasswordTokenComponent.ɵfac = function ForgotPasswordTokenComponent_Factory(t) {
      return new (t || ForgotPasswordTokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ForgotPasswordTokenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ForgotPasswordTokenComponent,
      selectors: [["app-forgot-password-token"]],
      decls: 40,
      vars: 14,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], [1, "container-wrapper"], [1, "mat-custom-authen"], ["class", "error-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mat-typography"], [2, "font-weight", "800"], ["appearance", "outline", 1, "container"], ["type", "email", "matInput", "", "placeholder", "Email", "formControlName", "email", "autocomplete", "email"], [4, "ngIf"], ["matInput", "", "placeholder", "New Password", "formControlName", "newPassword", "autocomplete", "new-password", 3, "type", "change"], ["matSuffix", "", 3, "click"], ["type", "password", "matInput", "", "placeholder", "Retype Password", "formControlName", "retypePassword", "autocomplete", "new-password", "appConfirmValidator", "newPassword"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "outside-message"], ["routerLink", "/signup", "routerLinkActive", "router-link-active"], ["routerLink", "/forgot-password", "routerLinkActive", "router-link-active"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "error-message"]],
      template: function ForgotPasswordTokenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ForgotPasswordTokenComponent_div_3_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ForgotPasswordTokenComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ForgotPasswordTokenComponent_mat_error_13_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ForgotPasswordTokenComponent_mat_error_14_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ForgotPasswordTokenComponent_Template_input_change_18_listener() {
            return ctx.resetPasswordForm.controls["retypePassword"].updateValueAndValidity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordTokenComponent_Template_mat_icon_click_19_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ForgotPasswordTokenComponent_mat_error_21_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ForgotPasswordTokenComponent_mat_error_22_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ForgotPasswordTokenComponent_mat_error_27_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ForgotPasswordTokenComponent_mat_error_28_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ForgotPasswordTokenComponent_mat_error_29_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Not Register or Forgot password? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Sign-Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " || ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["email"].hasError("invalidEmail") && !ctx.resetPasswordForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["newPassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["newPassword"].hasError("minlength") && !ctx.resetPasswordForm.controls["newPassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["retypePassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.controls["retypePassword"].hasError("minlength") && !ctx.resetPasswordForm.controls["retypePassword"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.hasError("notEqual", "retypePassword") && !ctx.resetPasswordForm.controls["retypePassword"].hasError("required"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _confirm_validator_directive__WEBPACK_IMPORTED_MODULE_14__["ConfirmValidatorDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.mat-custom-authen[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nmat-card.custom-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\nmat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\nmat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: var(--warm);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtdG9rZW4vQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGF1dGhcXGZvcmdvdC1wYXNzd29yZC10b2tlblxcZm9yZ290LXBhc3N3b3JkLXRva2VuLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9hdXRoL2ZvcmdvdC1wYXNzd29yZC10b2tlbi9mb3Jnb3QtcGFzc3dvcmQtdG9rZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURHSTtFQUNFLGdCQUFBO0FDQU47O0FERUk7RUFDRSxzQkFBQTtBQ0FOOztBREdJO0VBQ0UscUJBQUE7QUNETjs7QURLRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtdG9rZW4vZm9yZ290LXBhc3N3b3JkLXRva2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jdXN0b20tYXV0aGVuIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgJi5jdXN0b20tY2FyZCB7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiBoMSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuLy8gICA6Om5nLWRlZXAgLmdyZWVuLXNuYWNrYmFyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxuLy8gICB9XHJcblxyXG4vLyAgIDo6bmctZGVlcCAucmVkLXNuYWNrYmFyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgOjpuZy1kZWVwIHNwYW4ubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuLy8gICAgIGNvbG9yOiBibGFjaztcclxuLy8gfSIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWF0LWN1c3RvbS1hdXRoZW4ge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbm1hdC1jYXJkLmN1c3RvbS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cbm1hdC1jYXJkIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbm1hdC1jYXJkIGgxIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ForgotPasswordTokenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-forgot-password-token',
          templateUrl: './forgot-password-token.component.html',
          styleUrls: ['./forgot-password-token.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./ClientApp/app/auth/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function ClientAppAppAuthProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ProfileComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oneError_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", oneError_r7.description, "");
      }
    }

    function ProfileComponent_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(fb, authService, router, snackBar) {
        _classCallCheck(this, ProfileComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.formErrors = [];
        this.hidePassword = true;
        this.profileForm = this.fb.group({
          // role: [''],
          firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z ']*")]],
          lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z ']*")]],
          email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.emailValid()])]
        });
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var user;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    _context23.next = 2;
                    return this.authService.getUser().toPromise();

                  case 2:
                    user = _context23.sent;
                    // this.profileForm.get('role').setValue(user.role);
                    this.profileForm.get('firstName').setValue(user.firstName);
                    this.profileForm.get('lastName').setValue(user.lastName);
                    this.profileForm.get('email').setValue(user.email);

                  case 6:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var firstName, lastName, email;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    if (!(this.profileForm.valid && this.profileForm.touched)) {
                      _context24.next = 18;
                      break;
                    }

                    firstName = this.profileForm.get('firstName').value.trim();
                    lastName = this.profileForm.get('lastName').value.trim();
                    email = this.profileForm.get('email').value.trim();
                    this.progressBarMode = 'indeterminate';
                    _context24.prev = 5;
                    _context24.next = 8;
                    return this.authService.updateProfile({
                      id: '',
                      firstName: firstName,
                      lastName: lastName,
                      email: email
                    });

                  case 8:
                    this.authService.logOut();
                    this.snackBar.open('Profile was successfully updated, please Log-in again', 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    _context24.next = 15;
                    break;

                  case 12:
                    _context24.prev = 12;
                    _context24.t0 = _context24["catch"](5);
                    this.snackBar.open('Something when wrong, profile was not updated', 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });

                  case 15:
                    _context24.prev = 15;
                    this.progressBarMode = '';
                    return _context24.finish(15);

                  case 18:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this, [[5, 12, 15, 18]]);
          }));
        }
      }, {
        key: "emailValid",
        value: function emailValid() {
          return function (control) {
            // tslint:disable-next-line: max-line-length
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : {
              invalidEmail: true
            };
          };
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 30,
      vars: 11,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], [1, "container-wrapper"], [1, "mat-custom-authen"], ["class", "error-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [2, "font-weight", "900"], ["appearance", "outline", 1, "container"], ["type", "firstName", "matInput", "", "placeholder", "First Name", "formControlName", "firstName", "autocomplete", "firstName"], [4, "ngIf"], ["type", "lastName", "matInput", "", "placeholder", "Last Name", "formControlName", "lastName", "autocomplete", "lastName"], ["type", "email", "matInput", "", "placeholder", "Email", "formControlName", "email", "autocomplete", "email"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "error-message"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Update Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProfileComponent_mat_error_13_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProfileComponent_mat_error_14_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProfileComponent_mat_error_19_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProfileComponent_mat_error_20_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProfileComponent_mat_error_25_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProfileComponent_mat_error_26_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.profileForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["firstName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.profileForm.controls["firstName"].hasError("pattern") || ctx.profileForm.controls["firstName"].hasError("minlength")) && !ctx.profileForm.controls["firstName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["lastName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.profileForm.controls["lastName"].hasError("pattern") || ctx.profileForm.controls["lastName"].hasError("minlength")) && !ctx.profileForm.controls["lastName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.profileForm.controls["email"].hasError("invalidEmail") && !ctx.profileForm.controls["email"].hasError("required"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.mat-custom-authen[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: var(--warm);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXV0aC9wcm9maWxlL0M6XFxVc2Vyc1xcb21hcnRpbmV6XFxEZXNrdG9wXFxMYXd5ZXJBcHBcXGxhd3llckFwcF9CYWNrRW5kL0NsaWVudEFwcFxcYXBwXFxhdXRoXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9hdXRoL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9hdXRoL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY3VzdG9tLWF1dGhlbiB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfSIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWF0LWN1c3RvbS1hdXRoZW4ge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/signin/signin.component.ts":
  /*!*******************************************************!*\
    !*** ./ClientApp/app/auth/signin/signin.component.ts ***!
    \*******************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function ClientAppAppAuthSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ClientApp_app_shared_errors_account_confirmation_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/errors/account-confirmation-error */
    "./ClientApp/app/shared/errors/account-confirmation-error.ts");
    /* harmony import */


    var ClientApp_app_shared_errors_wrong_crendential_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/errors/wrong-crendential-error */
    "./ClientApp/app/shared/errors/wrong-crendential-error.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SigninComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Wrong User or Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Email not confirmed yet. Please your confirm the email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have more than ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "3 Characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    } // import { SharedService } from 'src/app/shared/shared.service';


    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(fb, authService // private sharedService: SharedService
      ) {
        _classCallCheck(this, SigninComponent);

        this.fb = fb;
        this.authService = authService;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.hidePassword = true;
        this.signForm = this.fb.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.emailValid()])],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
      }

      _createClass(SigninComponent, [{
        key: "emailValid",
        value: function emailValid() {
          return function (control) {
            // tslint:disable-next-line: max-line-length
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : {
              invalidEmail: true
            };
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var email, password;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    if (!(this.signForm.valid && this.signForm.touched)) {
                      _context25.next = 23;
                      break;
                    }

                    email = this.signForm.get('email').value.trim();
                    password = this.signForm.get('password').value;
                    this.progressBarMode = 'indeterminate';
                    _context25.prev = 4;
                    _context25.next = 7;
                    return this.authService.login({
                      email: email,
                      password: password
                    });

                  case 7:
                    _context25.next = 20;
                    break;

                  case 9:
                    _context25.prev = 9;
                    _context25.t0 = _context25["catch"](4);

                    if (!(_context25.t0 instanceof ClientApp_app_shared_errors_wrong_crendential_error__WEBPACK_IMPORTED_MODULE_4__["WrongCredentialError"])) {
                      _context25.next = 15;
                      break;
                    }

                    this.signForm.setErrors({
                      userPass: true
                    });
                    _context25.next = 20;
                    break;

                  case 15:
                    if (!(_context25.t0 instanceof ClientApp_app_shared_errors_account_confirmation_error__WEBPACK_IMPORTED_MODULE_3__["AccountConfirmationError"])) {
                      _context25.next = 19;
                      break;
                    }

                    this.signForm.setErrors({
                      accountNotConfirmed: true
                    });
                    _context25.next = 20;
                    break;

                  case 19:
                    throw _context25.t0;

                  case 20:
                    _context25.prev = 20;
                    this.progressBarMode = '';
                    return _context25.finish(20);

                  case 23:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this, [[4, 9, 20, 23]]);
          }));
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 34,
      vars: 12,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], [1, "container-wrapper"], [1, "mat-custom-authen"], ["class", "error-message", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "error-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mat-typography"], [2, "font-weight", "800"], ["appearance", "outline", 1, "container"], ["type", "email", "matInput", "", "placeholder", "Email", "formControlName", "email", "autocomplete", "email"], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "autocomplete", "new-password", 3, "type"], ["matSuffix", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "outside-message"], ["routerLink", "/signup", "routerLinkActive", "router-link-active"], ["routerLink", "/forgot-password", "routerLinkActive", "router-link-active"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "error-message"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "error-message"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SigninComponent_div_3_Template, 3, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SigninComponent_div_4_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Sign-In");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SigninComponent_mat_error_14_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SigninComponent_mat_error_15_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SigninComponent_Template_mat_icon_click_20_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SigninComponent_mat_error_22_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SigninComponent_mat_error_23_Template, 4, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Sign-In");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Not Register or Forgot password? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Sign-Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " || ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signForm.hasError("userPass"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signForm.hasError("accountNotConfirmed"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signForm.controls["email"].hasError("invalidEmail") && !ctx.signForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signForm.controls["password"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signForm.controls["password"].hasError("minlength") && !ctx.signForm.controls["email"].hasError("required"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.mat-custom-authen[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nmat-card.custom-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\nmat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\nmat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: var(--warm);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXV0aC9zaWduaW4vQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGF1dGhcXHNpZ25pblxcc2lnbmluLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURHSTtFQUNFLGdCQUFBO0FDQU47O0FERUk7RUFDRSxzQkFBQTtBQ0FOOztBREdJO0VBQ0UscUJBQUE7QUNETjs7QURLRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jdXN0b20tYXV0aGVuIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgJi5jdXN0b20tY2FyZCB7XHJcbiAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmIGgxIHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9IiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtY3VzdG9tLWF1dGhlbiB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxubWF0LWNhcmQuY3VzdG9tLWNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxubWF0LWNhcmQgaDEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./ClientApp/app/auth/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function ClientAppAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ClientApp_app_shared_errors_user_exits_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/errors/user-exits-error */
    "./ClientApp/app/shared/errors/user-exits-error.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SignupComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var oneError_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", oneError_r9.description, "");
      }
    }

    function SignupComponent_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Not a valid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have more than ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "3 Characters");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb, authService, router, snackBar) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.progressBarMode = '';
        this.hasUnitNumber = false;
        this.formErrors = [];
        this.hidePassword = true;
        this.signUpForm = this.fb.group({
          firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z ']*")]],
          lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z ']*")]],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.emailValid()])],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
      }

      _createClass(SignupComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var firstName, lastName, email, password;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    if (!(this.signUpForm.valid && this.signUpForm.touched)) {
                      _context26.next = 24;
                      break;
                    }

                    firstName = this.signUpForm.get('firstName').value.trim();
                    lastName = this.signUpForm.get('lastName').value.trim();
                    email = this.signUpForm.get('email').value.trim();
                    password = this.signUpForm.get('password').value;
                    this.progressBarMode = 'indeterminate';
                    _context26.prev = 6;
                    _context26.next = 9;
                    return this.authService.signup({
                      firstName: firstName,
                      lastName: lastName,
                      email: email,
                      password: password
                    });

                  case 9:
                    this.snackBar.open('User was successfuly created, before login confim email in your email account', 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    this.router.navigate(['/signin']);
                    _context26.next = 21;
                    break;

                  case 13:
                    _context26.prev = 13;
                    _context26.t0 = _context26["catch"](6);

                    if (!(_context26.t0 instanceof ClientApp_app_shared_errors_user_exits_error__WEBPACK_IMPORTED_MODULE_3__["UserExitsError"])) {
                      _context26.next = 20;
                      break;
                    }

                    this.signUpForm.setErrors({
                      accountExitorPasswordComplexity: true
                    });
                    this.formErrors = _context26.t0.getErrorListMessage();
                    _context26.next = 21;
                    break;

                  case 20:
                    throw _context26.t0;

                  case 21:
                    _context26.prev = 21;
                    this.progressBarMode = '';
                    return _context26.finish(21);

                  case 24:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this, [[6, 13, 21, 24]]);
          }));
        }
      }, {
        key: "emailValid",
        value: function emailValid() {
          return function (control) {
            // tslint:disable-next-line: max-line-length
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(control.value) ? null : {
              invalidEmail: true
            };
          };
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 34,
      vars: 15,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], [1, "container-wrapper"], [1, "mat-custom-authen"], ["class", "error-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 4, "ngFor", "ngForOf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [2, "font-weight", "900"], ["appearance", "outline", 1, "container"], ["type", "firstName", "matInput", "", "placeholder", "First Name", "formControlName", "firstName", "autocomplete", "firstName"], [4, "ngIf"], ["type", "lastName", "matInput", "", "placeholder", "Last Name", "formControlName", "lastName", "autocomplete", "lastName"], ["type", "email", "matInput", "", "placeholder", "Email", "formControlName", "email", "autocomplete", "email"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["matSuffix", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "outside-message"], ["routerLink", "/signin", "routerLinkActive", "router-link-active"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "error-message"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignupComponent_div_3_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Sign-Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SignupComponent_mat_error_11_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignupComponent_mat_error_12_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SignupComponent_mat_error_15_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SignupComponent_mat_error_16_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SignupComponent_mat_error_19_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SignupComponent_mat_error_20_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupComponent_Template_mat_icon_click_23_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignupComponent_mat_error_25_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SignupComponent_mat_error_26_Template, 4, 0, "mat-error", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sign-Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Already Register? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Sign-In");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.formErrors);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls["firstName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.signUpForm.controls["firstName"].hasError("pattern") || ctx.signUpForm.controls["firstName"].hasError("minlength")) && !ctx.signUpForm.controls["firstName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls["lastName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.signUpForm.controls["lastName"].hasError("pattern") || ctx.signUpForm.controls["lastName"].hasError("minlength")) && !ctx.signUpForm.controls["lastName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls["email"].hasError("invalidEmail") && !ctx.signUpForm.controls["email"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls["password"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.signUpForm.controls["password"].hasError("minlength") && !ctx.signUpForm.controls["email"].hasError("required"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n}\n\n.mat-custom-authen[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: var(--warm);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvYXV0aC9zaWdudXAvQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGF1dGhcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jdXN0b20tYXV0aGVuIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9IiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtY3VzdG9tLWF1dGhlbiB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJtKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/auth/update-user/update-user.component.ts":
  /*!*****************************************************************!*\
    !*** ./ClientApp/app/auth/update-user/update-user.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UpdateUserComponent */

  /***/
  function ClientAppAppAuthUpdateUserUpdateUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function () {
      return UpdateUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UpdateUserComponent = /*#__PURE__*/function () {
      function UpdateUserComponent() {
        _classCallCheck(this, UpdateUserComponent);
      }

      _createClass(UpdateUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpdateUserComponent;
    }();

    UpdateUserComponent.ɵfac = function UpdateUserComponent_Factory(t) {
      return new (t || UpdateUserComponent)();
    };

    UpdateUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateUserComponent,
      selectors: [["app-update-user"]],
      decls: 2,
      vars: 0,
      template: function UpdateUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "update-user works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2F1dGgvdXBkYXRlLXVzZXIvdXBkYXRlLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-user',
          templateUrl: './update-user.component.html',
          styleUrls: ['./update-user.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/core/components/home/home.component.ts":
  /*!**************************************************************!*\
    !*** ./ClientApp/app/core/components/home/home.component.ts ***!
    \**************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function ClientAppAppCoreComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ClientApp_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ClientApp/app/shared/services/shared.service */
    "./ClientApp/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var _c0 = function _c0() {
      return ["/document-upload-anonymous"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(sharedService) {
        _classCallCheck(this, HomeComponent);

        this.sharedService = sharedService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sharedService.isUrlHome$.next(true);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sharedService.isUrlHome$.next(false);
        }
      }, {
        key: "onScrollClick",
        value: function onScrollClick(scrollElement, valueToScroll) {
          scrollElement.scrollTo({
            left: valueToScroll,
            behavior: 'smooth'
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ClientApp_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 98,
      vars: 2,
      consts: [[1, "content"], [1, "home-section"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxFill", "", 1, "home-container"], ["fxLayout", "row", "fxLayout.xs", "column", "fxFlex", "100", 1, "button-section"], ["fxLayout", "column", "fxFlex", "60", 1, "text-description"], [1, "text-title"], [1, "text-info"], ["mat-raised-button", "", 1, "action-button", "get-started-button", 3, "routerLink"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "image-section"], ["src", "../../../../clientapp/assets/ImageWriting.svg", 1, "image-cover"], [1, "second-section"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "second-section-container"], ["fxFlex", "30", 1, "card", "card-one"], [1, "card-number"], ["fxFlex", "30", 1, "card", "card-two"], ["fxFlex", "30", 1, "card", "card-three"], [1, "third-section"], [1, "section-title"], ["fxLayoutAlign", "space-around center", 1, "third-section-container"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "8px", 1, "slider", 2, "width", "100%"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "8px", 1, "slider-pick"], ["mat-flat-button", "", 1, "link-buttons", 3, "click"], ["fxLayoutAlign", "space-around center", "fxFlex", "70", 1, "slider-content"], [1, "slide-outsite"], [1, "slides", 2, "width", "300px"], ["scrollCarousel", ""], ["id", "slide-1"], [1, "example-card"], ["mat-card-image", "", "src", "../../../../clientapp/assets/slidder-1.jpg", "alt", "Photo of a Shiba Inu"], ["id", "slide-2"], ["mat-card-image", "", "src", "../../../../clientapp/assets/slidder-2.png", "alt", "Photo of a Shiba Inu"], ["id", "slide-3"], ["mat-card-image", "", "src", "../../../../clientapp/assets/slidder-3.jpg"], ["id", "slide-4"], ["mat-card-image", "", "src", "../../../../clientapp/assets/slidder-4.jpg", "alt", "Photo of a Shiba Inu"], ["id", "slide-5"], ["mat-card-image", "", "src", "../../../../clientapp/assets/slidder-5.png", "alt", "Photo of a Shiba Inu"], [1, "fourth-section"], [1, "section-subtitle"], [1, "video-size"], [1, "video-wrapper"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/hLBOKY2MLXw", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fill your Document in no Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Word Processor presents a solution to help you stick to a faster and easier method of filling out general templates. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Create a template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Create or Open a word document(.docx). Fill your document. In the next step, you will create the variables you want in the document. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "02");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Create Variables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " In the document template you will have words that will change. You can create variables by putting a word between 2 braces Ex. {{VARIABLE}} ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "03");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Submit, Process and download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Submit the document(Template) the server will recognize the variables in the document, after that, you can change the variables and download the new document. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "How to use the application, step by step.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            return ctx.onScrollClick(_r0, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Open Document Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            return ctx.onScrollClick(_r0, 300);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Create Variables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_48_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            return ctx.onScrollClick(_r0, 600);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Submit Document Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            return ctx.onScrollClick(_r0, 900);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Replace Variables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_52_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);

            return ctx.onScrollClick(_r0, 1300);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Download Template Filled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Open a world document.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Put your variable inside double braces.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Upload your template with variables.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Replace the variables in the application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Your Processed template will be downloaded");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Watch and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "learn.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "For better understanding watch this video with all the feature we offers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "iframe", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]],
      styles: [".content[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 20px 10%;\n}\n\n.home-section[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0 10%;\n  background: #083271;\n  background: linear-gradient(45deg, #083271 0%, #0049b6 66%, #083271 100%);\n}\n\n.home-section[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%] {\n  justify-content: center;\n  transform: translateY(-15%);\n  margin-top: 50px;\n  margin-bottom: 80px;\n}\n\n.home-section[_ngcontent-%COMP%]   .text-description[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], .home-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.home-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4.2vw;\n  line-height: 50px;\n  padding-bottom: 10px;\n  line-height: 1 !important;\n}\n\n@media (max-width: 600px) {\n  .home-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: xx-large;\n    line-height: initial;\n  }\n}\n\n.home-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.4vw;\n  line-height: 1.5vw;\n  width: 70%;\n  padding-bottom: 10px;\n}\n\n@media (max-width: 600px) {\n  .home-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: small;\n    line-height: initial;\n  }\n}\n\n.home-section[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%] {\n  padding-top: 80px;\n}\n\n.home-section[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%] {\n  width: 100%;\n  transform: translateY(-50px);\n}\n\n@media (max-width: 600px) {\n  .home-section[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%] {\n    transform: translateY(-130px);\n  }\n}\n\n.home-section[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%] {\n  width: 120%;\n  height: auto;\n  transform: translateX(0%) rotate(26deg);\n}\n\n@media (max-width: 600px) {\n  .home-section[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   .image-section[_ngcontent-%COMP%]   .image-cover[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.home-section[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   a.mat-focus-indicator.action-button.mat-raised-button.mat-button-base[_ngcontent-%COMP%] {\n  color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 15px;\n  background-color: #FF7A00;\n  box-shadow: 6px 4px 8px -2px rgba(255, 122, 0, 0.28);\n  -webkit-box-shadow: 6px 4px 8px -2px rgba(255, 122, 0, 0.28);\n  -moz-box-shadow: 6px 4px 8px -2px rgba(255, 122, 0, 0.28);\n}\n\n.second-section[_ngcontent-%COMP%] {\n  background-image: url(\"/clientapp/assets/backgrounFill.svg\");\n  background-size: 60%;\n  background-repeat: no-repeat;\n  background-position: left bottom;\n  transform: translate(0px, -30px);\n  background-color: white;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n}\n\n.second-section[_ngcontent-%COMP%]   .second-section-container[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.second-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px 3px rgba(0, 148, 255, 0.26);\n  border-radius: 9px;\n  background-color: white;\n  padding: 15px;\n  color: #083271;\n  min-width: 170px;\n}\n\n.second-section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: x-large;\n}\n\n.second-section[_ngcontent-%COMP%]   .card-one[_ngcontent-%COMP%] {\n  transform: translateY(-150px);\n}\n\n@media (max-width: 600px) {\n  .second-section[_ngcontent-%COMP%]   .card-one[_ngcontent-%COMP%] {\n    transform: translateY(-75px);\n  }\n}\n\n.second-section[_ngcontent-%COMP%]   .card-two[_ngcontent-%COMP%] {\n  transform: translateY(-80px);\n}\n\n@media (max-width: 600px) {\n  .second-section[_ngcontent-%COMP%]   .card-two[_ngcontent-%COMP%] {\n    transform: translateY(-40px);\n  }\n}\n\n.second-section[_ngcontent-%COMP%]   .card-three[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n\n.second-section[_ngcontent-%COMP%]   .card-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 8px;\n  font-size: large;\n  font-weight: bolder;\n  background-color: #29A5FF;\n  color: white;\n  border-radius: 2px;\n  margin-bottom: 25px;\n}\n\n.third-section[_ngcontent-%COMP%] {\n  background-color: aliceblue;\n  border-radius: 30px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-size: xxx-large;\n  font-weight: bold;\n  color: #083271;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.section-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px 6px 5px 6px;\n  background-color: #FF7A00;\n}\n\nh1.section-title[_ngcontent-%COMP%] {\n  line-height: 1.4;\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #083271;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.slider[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n  overflow: hidden;\n}\n\n.slider-pick[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.slider-pick[_ngcontent-%COMP%]   .link-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #FF7A00;\n}\n\n.slider-pick[_ngcontent-%COMP%]   .link-buttons[_ngcontent-%COMP%]:hover {\n  background-color: #FF7A00;\n  color: white;\n  border-radius: 2px !important;\n}\n\n.slider-content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 40px;\n}\n\n.slides[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  -ms-scroll-snap-type: x mandatory;\n      scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  \n}\n\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 5px;\n}\n\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #083271;\n  border-radius: 10px;\n}\n\n.slides[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.slides[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  scroll-snap-align: start;\n  flex-shrink: 0;\n  width: 300px;\n  height: 300px;\n  margin-right: 50px;\n  border-radius: 10px;\n  background: #eee;\n  transform-origin: center center;\n  transform: scale(1);\n  transition: transform 0.5s;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 100px;\n  background: none;\n}\n\n.slide-outsite[_ngcontent-%COMP%] {\n  background-color: #FF7A00;\n  transform: rotate(13deg);\n  border-radius: 5px;\n  margin: 50px;\n}\n\n.slides[_ngcontent-%COMP%] {\n  transform: rotate(347deg);\n}\n\n.video-size[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  margin-right: 20%;\n  margin-top: 70px;\n}\n\n@media (max-width: 600px) {\n  .video-size[_ngcontent-%COMP%] {\n    margin-left: initial;\n    margin-right: initial;\n    margin-top: initial;\n  }\n}\n\n.video-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.video-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.fourth-section[_ngcontent-%COMP%] {\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  background-color: white;\n  background-image: url(\"/assets/BottomImage.svg\");\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: left bottom;\n}\n\n.fourth-section[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%] {\n  line-height: 1.2 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29yZS9jb21wb25lbnRzL2hvbWUvQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJDbGllbnRBcHAvYXBwL2NvcmUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSx1QkFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5RUFBQTtBQ0hKOztBREtJO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNIUjs7QURNSTtFQUNJLHVCQUFBO0FDSlI7O0FET0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ0xSOztBRE1RO0VBTEo7SUFNUSxtQkFBQTtJQUNBLG9CQUFBO0VDSFY7QUFDRjs7QURNSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNKUjs7QURLUTtFQUxKO0lBTVEsZ0JBQUE7SUFDQSxvQkFBQTtFQ0ZWO0FBQ0Y7O0FES0k7RUFDSSxpQkFBQTtBQ0hSOztBRE1RO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0FDSlo7O0FES1k7RUFISjtJQUlRLDZCQUFBO0VDRmQ7QUFDRjs7QURTWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUNQaEI7O0FEUWdCO0VBSko7SUFLUSxXQUFBO0VDTGxCO0FBQ0Y7O0FEU1E7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9EQUFBO0VBQ0EsNERBQUE7RUFDQSx5REFBQTtBQ1BaOztBRFlBO0VBQ0ksNERBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFNQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ2RKOztBRE9JO0VBQ0ksaUJBQUE7QUNMUjs7QURhSTtFQUNJLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNYUjs7QURhUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNYWjs7QURlSTtFQUNJLDZCQUFBO0FDYlI7O0FEY1E7RUFGSjtJQUdRLDRCQUFBO0VDWFY7QUFDRjs7QURjSTtFQUNJLDRCQUFBO0FDWlI7O0FEYVE7RUFGSjtJQUdRLDRCQUFBO0VDVlY7QUFDRjs7QURhSTtFQUNJLG1CQUFBO0FDWFI7O0FEY0k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNaUjs7QURnQkE7RUFFSSwyQkFBQTtFQUNBLG1CQUFBO0FDZEo7O0FEMkJJO0VBQ0csb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDeEJQOztBRDBCTztFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QUN4Qlg7O0FENEJJO0VBQ0ksZ0JBQUE7QUN6QlI7O0FENEJJO0VBQ0ksZUFBQTtFQUNELGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDekJQOztBRDhCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDM0JKOztBRDhCRTtFQUNNLFdBQUE7QUMzQlI7O0FENkJRO0VBQ0ksV0FBQTtFQUNBLGdDQUFBO0FDM0JaOztBRDhCUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDNUJaOztBRGdDRTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDN0JOOztBRGdDRTtFQUNFLGFBQUE7RUFFQSxnQkFBQTtFQUNBLGlDQUFBO01BQUEsNkJBQUE7RUFFQSx1QkFBQTtFQUNBLGlDQUFBO0VBRUE7OztHQUFBO0FDN0JKOztBRGtDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDL0JKOztBRGlDRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUM5Qko7O0FEZ0NFO0VBQ0UsdUJBQUE7QUM3Qko7O0FEK0JFO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQzlCSjs7QURpQ0U7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDOUJKOztBRGlDQTtFQUNJLHlCQUFBO0FDOUJKOztBRGlDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzlCSjs7QUQrQkk7RUFKSjtJQUtRLG9CQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQzVCTjtBQUNGOztBRCtCQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDNUJKOztBRCtCQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQzVCSjs7QUQrQkE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBQzVCSjs7QUQ4Qkk7RUFDSSwyQkFBQTtBQzVCUiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvcmUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5zZWN0aW9ueyAgICBcclxuICAgIHBhZGRpbmc6IDIwcHggMTAlO1xyXG59XHJcblxyXG4uaG9tZS1zZWN0aW9uIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDgsNTAsMTEzKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg4LDUwLDExMywxKSAwJSwgcmdiYSgwLDczLDE4MiwxKSA2NiUsIHJnYmEoOCw1MCwxMTMsMSkgMTAwJSk7XHJcblxyXG4gICAgLnRleHQtZGVzY3JpcHRpb257ICAgICAgICBcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1JSk7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWRlc2NyaXB0aW9uID4gaDEsIHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQuMnZ3O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyAgICAgICAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWwgOyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjR2dztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41dnc7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWwgOyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gICAgXHJcbiAgICAgICAgLmltYWdlLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzMHB4KTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAwcHggNTAlIDUwJSAwcHg7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSg0NSwgNDYsIDUzLCAwLjUpLCByZ2JhKDE3LCA4OCwgOTQsIDAuMykpLCB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ib3lQaXRjaGluZy5qcGdcIik7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jb3Zlci5zdmdcIik7XHJcbiAgICAgICAgICAgIC5pbWFnZS1jb3ZlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgcm90YXRlKDI2ZGVnKTtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgYS5tYXQtZm9jdXMtaW5kaWNhdG9yLmFjdGlvbi1idXR0b24ubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1iYXNlIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjdBMDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA0cHggOHB4IC0ycHggcmdiYSgyNTUsMTIyLDAsMC4yOCk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogNnB4IDRweCA4cHggLTJweCByZ2JhKDI1NSwxMjIsMCwwLjI4KTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiA2cHggNHB4IDhweCAtMnB4IHJnYmEoMjU1LDEyMiwwLDAuMjgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5zZWNvbmQtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvY2xpZW50YXBwL2Fzc2V0cy9iYWNrZ3JvdW5GaWxsLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIDtcclxuICAgIFxyXG4gICAgLnNlY29uZC1zZWN0aW9uLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0zMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG5cclxuICAgIC5jYXJkIHsgICAgICBcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoMCwgMTQ4LCAyNTUsIDAuMjYpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDgzMjcxO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgLmNhcmQtb25le1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUwcHgpO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTc1cHgpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC10d297XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MHB4KTtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGhyZWV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1udW1iZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxcHggOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBNUZGO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRoaXJkLXNlY3Rpb24ge1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7ICBcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc2Vjb25kQmFja2dyb3VuZC5zdmdcIik7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcclxuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcCA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgLmltYWdlLXNlY3Rpb24ge1xyXG4gICAgICAgIC8vIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgY29sb3I6cmdiKDgsNTAsMTEzKTsgXHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICBzcGFue1xyXG4gICAgICAgICAgIHBhZGRpbmc6IDVweCA2cHggNXB4IDZweDtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3QTAwO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgxLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgIGNvbG9yOnJnYig4LDUwLDExMyk7IFxyXG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIH1cclxuXHJcblxyXG4gIC8vIFNsaWRlclxyXG4gIC5zbGlkZXIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5zbGlkZXItcGljayB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5saW5rLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRjdBMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGluay1idXR0b25zOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3QTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgLnNsaWRlci1jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgXHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIFxyXG4gICAgLypcclxuICAgIHNjcm9sbC1zbmFwLXBvaW50cy14OiByZXBlYXQoMzAwcHgpO1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogbWFuZGF0b3J5O1xyXG4gICAgKi9cclxuICB9XHJcbiAgLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICB9XHJcbiAgLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIHJnYig4LDUwLDExMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuc2xpZGVzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLnNsaWRlcyA+IGRpdiB7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlLW91dHNpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGN0EwMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzZGVnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNTBweDtcclxufVxyXG5cclxuLnNsaWRlcyB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNDdkZWcpO1xyXG59XHJcblxyXG4udmlkZW8tc2l6ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGluaXRpYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi52aWRlby13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi52aWRlby13cmFwcGVyIGlmcmFtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvdXJ0aC1zZWN0aW9uIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Cb3R0b21JbWFnZS5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSA7XHJcblxyXG4gICAgLmgxIHsgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4IDEwJTtcbn1cblxuLmhvbWUtc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAxMCU7XG4gIGJhY2tncm91bmQ6ICMwODMyNzE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA4MzI3MSAwJSwgIzAwNDliNiA2NiUsICMwODMyNzEgMTAwJSk7XG59XG4uaG9tZS1zZWN0aW9uIC50ZXh0LWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTUlKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cbi5ob21lLXNlY3Rpb24gLnRleHQtZGVzY3JpcHRpb24gPiBoMSwgLmhvbWUtc2VjdGlvbiBwIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uaG9tZS1zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA0LjJ2dztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5ob21lLXNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XG4gIH1cbn1cbi5ob21lLXNlY3Rpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS40dnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjV2dztcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhvbWUtc2VjdGlvbiBwIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICB9XG59XG4uaG9tZS1zZWN0aW9uIC5ob21lLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuLmhvbWUtc2VjdGlvbiAuaG9tZS1jb250YWluZXIgLmltYWdlLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaG9tZS1zZWN0aW9uIC5ob21lLWNvbnRhaW5lciAuaW1hZ2Utc2VjdGlvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzBweCk7XG4gIH1cbn1cbi5ob21lLXNlY3Rpb24gLmhvbWUtY29udGFpbmVyIC5pbWFnZS1zZWN0aW9uIC5pbWFnZS1jb3ZlciB7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgcm90YXRlKDI2ZGVnKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaG9tZS1zZWN0aW9uIC5ob21lLWNvbnRhaW5lciAuaW1hZ2Utc2VjdGlvbiAuaW1hZ2UtY292ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uaG9tZS1zZWN0aW9uIC5ob21lLWNvbnRhaW5lciBhLm1hdC1mb2N1cy1pbmRpY2F0b3IuYWN0aW9uLWJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWJhc2Uge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGN0EwMDtcbiAgYm94LXNoYWRvdzogNnB4IDRweCA4cHggLTJweCByZ2JhKDI1NSwgMTIyLCAwLCAwLjI4KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHggNHB4IDhweCAtMnB4IHJnYmEoMjU1LCAxMjIsIDAsIDAuMjgpO1xuICAtbW96LWJveC1zaGFkb3c6IDZweCA0cHggOHB4IC0ycHggcmdiYSgyNTUsIDEyMiwgMCwgMC4yOCk7XG59XG5cbi5zZWNvbmQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9jbGllbnRhcHAvYXNzZXRzL2JhY2tncm91bkZpbGwuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTMwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG4uc2Vjb25kLXNlY3Rpb24gLnNlY29uZC1zZWN0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnNlY29uZC1zZWN0aW9uIC5jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDAsIDE0OCwgMjU1LCAwLjI2KTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6ICMwODMyNzE7XG4gIG1pbi13aWR0aDogMTcwcHg7XG59XG4uc2Vjb25kLXNlY3Rpb24gLmNhcmQgaDEge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG4uc2Vjb25kLXNlY3Rpb24gLmNhcmQtb25lIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNTBweCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNlY29uZC1zZWN0aW9uIC5jYXJkLW9uZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03NXB4KTtcbiAgfVxufVxuLnNlY29uZC1zZWN0aW9uIC5jYXJkLXR3byB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODBweCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNlY29uZC1zZWN0aW9uIC5jYXJkLXR3byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcbiAgfVxufVxuLnNlY29uZC1zZWN0aW9uIC5jYXJkLXRocmVlIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5zZWNvbmQtc2VjdGlvbiAuY2FyZC1udW1iZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDFweCA4cHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUE1RkY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4udGhpcmQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IHh4eC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDgzMjcxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc2VjdGlvbi10aXRsZSBzcGFuIHtcbiAgcGFkZGluZzogNXB4IDZweCA1cHggNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3QTAwO1xufVxuXG5oMS5zZWN0aW9uLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLnNlY3Rpb24tc3VidGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMDgzMjcxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5zbGlkZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlci1waWNrIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2xpZGVyLXBpY2sgLmxpbmstYnV0dG9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGN0EwMDtcbn1cbi5zbGlkZXItcGljayAubGluay1idXR0b25zOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGN0EwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAycHggIWltcG9ydGFudDtcbn1cblxuLnNsaWRlci1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5zbGlkZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLypcbiAgc2Nyb2xsLXNuYXAtcG9pbnRzLXg6IHJlcGVhdCgzMDBweCk7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IG1hbmRhdG9yeTtcbiAgKi9cbn1cblxuLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbi5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzA4MzI3MTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnNsaWRlcyA+IGRpdiB7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnNsaWRlLW91dHNpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3QTAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxM2RlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4uc2xpZGVzIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzQ3ZGVnKTtcbn1cblxuLnZpZGVvLXNpemUge1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudmlkZW8tc2l6ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XG4gICAgbWFyZ2luLXJpZ2h0OiBpbml0aWFsO1xuICAgIG1hcmdpbi10b3A6IGluaXRpYWw7XG4gIH1cbn1cblxuLnZpZGVvLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gIGhlaWdodDogMDtcbn1cblxuLnZpZGVvLXdyYXBwZXIgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3VydGgtc2VjdGlvbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9Cb3R0b21JbWFnZS5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcbn1cbi5mb3VydGgtc2VjdGlvbiAuaDEge1xuICBsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: ClientApp_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/core/components/navbar/navbar.component.ts":
  /*!******************************************************************!*\
    !*** ./ClientApp/app/core/components/navbar/navbar.component.ts ***!
    \******************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function ClientAppAppCoreComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var ClientApp_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ClientApp/app/shared/services/shared.service */
    "./ClientApp/app/shared/services/shared.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var _c0 = ["drawer"];

    function NavbarComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.drawer == null ? null : ctx_r5.drawer.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 13);
      }
    }

    function NavbarComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_11_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.drawerClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Sign In ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_11_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.drawerClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sign Up ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _r7.isActive ? "mat-stroked-button mat-button-base" : "mat-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _r8.isActive ? "mat-stroked-button mat-button-base" : "mat-button");
      }
    }

    function NavbarComponent_div_13_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r12.firstName);
      }
    }

    function NavbarComponent_div_13_button_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r12.firstName);
      }
    }

    function NavbarComponent_div_13_button_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Admin");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r17);
      }
    }

    var _c1 = function _c1() {
      return ["Admin"];
    };

    function NavbarComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavbarComponent_div_13_span_4_Template, 2, 1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-menu", null, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_div_13_button_8_Template, 4, 1, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavbarComponent_div_13_button_10_Template, 2, 1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Update Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Change Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_13_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.authService.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "power_settings_new");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-menu", null, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Roles");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r12 = ctx.ngIf;

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx_r3.isHandset$));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, ctx_r3.isHandset$));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.authService.checkRoleAuthorization(user_r12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1)));
      }
    }

    var _c2 = function _c2() {
      return ["/cases"];
    };

    function NavbarComponent_mat_sidenav_16_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_mat_sidenav_16_a_6_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r25.drawerClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cases");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
      }
    }

    var _c3 = function _c3() {
      return ["/clients"];
    };

    function NavbarComponent_mat_sidenav_16_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_mat_sidenav_16_a_8_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r27.drawerClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Clients");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
      }
    }

    var _c4 = function _c4() {
      return ["/documents"];
    };

    function NavbarComponent_mat_sidenav_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav", 35, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-nav-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NavbarComponent_mat_sidenav_16_a_6_Template, 2, 2, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_mat_sidenav_16_a_8_Template, 2, 2, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_mat_sidenav_16_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r29.drawerClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Documents");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 8, ctx_r4.isHandset$) ? "over" : "side")("opened", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 10, ctx_r4.isHandset$));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx_r4.isHandset$) ? "dialog" : "navigation");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.userIsLawyerorAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.userIsLawyerorAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c4));
      }
    }

    var _c5 = function _c5() {
      return ["cases"];
    };

    var _c6 = function _c6() {
      return ["/home"];
    };

    var _c7 = ["*"];

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(breakpointObserver, authService, scrollDispatcher, zone, sharedService) {
        var _this7 = this;

        _classCallCheck(this, NavbarComponent);

        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.scrollDispatcher = scrollDispatcher;
        this.zone = zone;
        this.sharedService = sharedService;
        this.toolbarColor = 'navbar-solid-color';
        this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Small]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
          return result.matches;
        }));
        this.userIsLawyerorAdmin = false;
        sharedService.isUrlHome$.subscribe(function (urlIsHome) {
          _this7.urlIsHome = urlIsHome;

          if (urlIsHome) {
            _this7.toolbarColor = 'navbar-transparent';
          } else {
            _this7.toolbarColor = 'navbar-solid-color';
          }
        });
        this.scrollDispatcher.scrolled().subscribe(function (data) {
          var scrollTop = data.getElementRef().nativeElement.scrollTop || 0;

          _this7.zone.run(function () {
            _this7.toolbarColor = scrollTop < 50 && _this7.urlIsHome ? 'navbar-transparent' : 'navbar-solid-color';
          });
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    this.drawerClose();
                    this.isAdminOrLawyer();

                  case 2:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "drawerClose",
        value: function drawerClose() {
          var _this8 = this;

          this.isHandset$.subscribe(function (isHandset) {
            var _a;

            if (isHandset) {
              (_a = _this8.drawer) === null || _a === void 0 ? void 0 : _a.toggle(false);
            }
          });
        }
      }, {
        key: "isAdminOrLawyer",
        value: function isAdminOrLawyer() {
          var _this9 = this;

          this.authService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            return _this9.authService.canReadClients(user) ? true : false;
          })).subscribe(function (result) {
            return _this9.userIsLawyerorAdmin = result;
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      viewQuery: function NavbarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
        }
      },
      ngContentSelectors: _c7,
      decls: 20,
      vars: 24,
      consts: [["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "nav-container"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxFlex", "50%"], ["src", "../../../../clientapp/assets/logo.svg", "routerLinkActive", "router-link-active", 1, "logo", 3, "routerLink"], ["class", "spacer", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxFlex", "50%", 1, "action-buttons"], ["fxLayoutGap", "8px", 4, "ngIf"], [4, "ngIf"], [1, "sidenav-container"], ["class", "sidenav", "color", "primary", 3, "mode", "opened", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], [1, "spacer"], ["fxLayoutGap", "8px"], ["routerLinkActive", "active", "routerLink", "/signin", 3, "ngClass", "click"], ["rla", "routerLinkActive"], ["routerLinkActive", "active", "routerLink", "/signup", 3, "ngClass", "click"], ["rlac", "routerLinkActive"], ["mat-button", "", 1, "example-icon", 3, "matMenuTriggerFor"], [1, "material-icons", "md-dark", 2, "margin-right", "5px"], ["class", "user", 4, "ngIf"], ["menu", "matMenu"], ["type", "button", "routerLinkActive", "active", "mat-menu-item", "", "fxLayoutAlign", "center center", "style", "background-color: darkgray;", 4, "ngIf"], ["mat-menu-item", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["type", "button", "routerLinkActive", "active", "mat-menu-item", "", "routerLink", "/profile"], ["type", "button", "routerLinkActive", "active", "mat-menu-item", "", "routerLink", "/change-password"], ["type", "button", "routerLinkActive", "active", "mat-menu-item", "", 3, "click"], [1, "material-icons", "md-dark"], ["admin", "matMenu"], ["mat-menu-item", "", "routerLink", "/roles"], ["mat-menu-item", "", "routerLink", "/users"], [1, "user"], ["type", "button", "routerLinkActive", "active", "mat-menu-item", "", "fxLayoutAlign", "center center", 2, "background-color", "darkgray"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["color", "primary", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", "click", 4, "ngIf"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink", "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavbarComponent_button_1_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_span_8_Template, 1, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NavbarComponent_div_11_Template, 7, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NavbarComponent_div_13_Template, 28, 9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-sidenav-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavbarComponent_mat_sidenav_16_Template, 13, 13, "mat-sidenav", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.toolbarColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 8, ctx.isHandset$) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 10, ctx.authService.user$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 12, ctx.authService.user$) ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c5) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 14, ctx.isHandset$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 16, ctx.authService.user$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 18, ctx.authService.user$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 20, ctx.authService.user$));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatNavList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: [".navbar-solid-color[_ngcontent-%COMP%] {\n  background: #083271;\n  background: linear-gradient(45deg, #083271 0%, #0049b6 66%, #083271 100%);\n}\n\n.navbar-transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.nav-container[_ngcontent-%COMP%] {\n  padding: 0 10%;\n  width: 100%;\n}\n\nmat-toolbar.mat-toolbar[_ngcontent-%COMP%] {\n  height: 60px;\n  position: absolute;\n  z-index: 10;\n}\n\n\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: calc(100% - 60px);\n}\n\n.sidenav-container[_ngcontent-%COMP%]   a.mat-list-item.active[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.sidenav-container[_ngcontent-%COMP%]   .panel-wrapper.mat-expansion-panel[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.expansion-wrapper[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%] {\n  font-size: 90%;\n  padding-left: 30px !important;\n}\n\n.expansion-wrapper[_ngcontent-%COMP%]   .mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.expansion-wrapper[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:not([aria-disabled=true]) {\n  border-radius: 0px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  background-color: var(--accent);\n  color: white;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n\n.user-photo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n}\n\n.mat-drawer-inner-container[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%]:hover {\n  background-color: var(--accent);\n}\n\nmat-sidenav.mat-drawer[_ngcontent-%COMP%] {\n  background-color: var(--accent) !important;\n}\n\nmat-sidenav.mat-drawer.mat-sidenav.sidenav.ng-tns-c184-2.ng-trigger.ng-trigger-transform.ng-star-inserted.mat-drawer-over.mat-drawer-opened[_ngcontent-%COMP%] {\n  background-color: var(--accent);\n}\n\nmat-nav-list.mat-nav-list[_ngcontent-%COMP%] {\n  margin-top: 50px !important;\n}\n\nbutton.ng-star-inserted.mat-stroked-button[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.mat-stroked-button[_ngcontent-%COMP%]:not([disabled]) {\n  border: 2px solid white;\n  border-radius: 20px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 50px;\n  outline: none;\n}\n\n.mat-menu-content[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .mat-menu-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  justify-content: space-around;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29yZS9jb21wb25lbnRzL25hdmJhci9DOlxcVXNlcnNcXG9tYXJ0aW5lelxcRGVza3RvcFxcTGF3eWVyQXBwXFxsYXd5ZXJBcHBfQmFja0VuZC9DbGllbnRBcHBcXGFwcFxcY29yZVxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJDbGllbnRBcHAvYXBwL2NvcmUvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSx5RUFBQTtBQ0RKOztBRElBO0VBQ0ksd0NBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxZQWpCTTtFQXFCTixrQkFBQTtFQUNBLFdBQUE7QUNKSjs7QURPQSxjQUFBOztBQUNBO0VBQ0kseUJBQUE7QUNKSjs7QURNSTtFQUNJLHNCQUFBO0FDSlI7O0FET0k7RUFDSSxnQkFBQTtBQ0xSOztBRFNBO0VBQ0ksY0FBQTtBQ05KOztBRFVJO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FDUFI7O0FEY0k7RUFDSSxZQUFBO0FDWlI7O0FEbUJJO0VBRUksa0JBQUE7QUNsQlI7O0FEOEJJO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0FDM0JSOztBRCtCQTtFQUNJLG1CQUFBO0FDNUJKOztBRCtCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksK0JBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksMENBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksK0JBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksMkJBQUE7QUM1Qko7O0FEK0JBO0VBRUksWUFBQTtBQzdCSjs7QURnQ0E7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0FDN0JKOztBRGdDQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUM3Qko7O0FEaUNJO0VBQ0kscUJBQUE7QUM5QlI7O0FEa0NBO0VBQ0ksNkJBQUE7QUMvQko7O0FEa0NBO0VBQ0ksdUJBQUE7QUMvQkoiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b29sYmFyOiA2MHB4O1xyXG5cclxuLm5hdmJhci1zb2xpZC1jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCw1MCwxMTMpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDgsNTAsMTEzLDEpIDAlLCByZ2JhKDAsNzMsMTgyLDEpIDY2JSwgcmdiYSg4LDUwLDExMywxKSAxMDAlKTtcclxufVxyXG5cclxuLm5hdmJhci10cmFuc3BhcmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDAgMTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLm1hdC10b29sYmFyIHtcclxuICAgIGhlaWdodDogJHRvb2xiYXI7XHJcbiAgICAvLyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYig4LDUwLDExMyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoOCw1MCwxMTMsMSkgMCUsIHJnYmEoMCw3MywxODIsMSkgNjYlLCByZ2JhKDgsNTAsMTEzLDEpIDEwMCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi8qIE1haW4gYXJlYSAqL1xyXG4uc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyR0b29sYmFyfSk7XHJcblxyXG4gICAgYS5tYXQtbGlzdC1pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAucGFuZWwtd3JhcHBlci5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZXhwYW5zaW9uLXdyYXBwZXIge1xyXG4gICAgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIC8vIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSkge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAvLyBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XHJcbiAgICAvLyBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4udXNlci1waG90byB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW0tY29udGVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi5tYXQtZHJhd2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCkgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXNpZGVuYXYubWF0LWRyYXdlci5tYXQtc2lkZW5hdi5zaWRlbmF2Lm5nLXRucy1jMTg0LTIubmctdHJpZ2dlci5uZy10cmlnZ2VyLXRyYW5zZm9ybS5uZy1zdGFyLWluc2VydGVkLm1hdC1kcmF3ZXItb3Zlci5tYXQtZHJhd2VyLW9wZW5lZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG59XHJcblxyXG5tYXQtbmF2LWxpc3QubWF0LW5hdi1saXN0e1xyXG4gICAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5idXR0b24ubmctc3Rhci1pbnNlcnRlZC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gICAgLy8gYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1hdC1tZW51LWNvbnRlbnQge1xyXG4gICAgLm1hdGVyaWFsLWljb25zLCBzcGFuIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnNpZGVuYXYtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iLCIubmF2YmFyLXNvbGlkLWNvbG9yIHtcbiAgYmFja2dyb3VuZDogIzA4MzI3MTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDgzMjcxIDAlLCAjMDA0OWI2IDY2JSwgIzA4MzI3MSAxMDAlKTtcbn1cblxuLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAxMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtdG9vbGJhci5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLyogTWFpbiBhcmVhICovXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xufVxuLnNpZGVuYXYtY29udGFpbmVyIGEubWF0LWxpc3QtaXRlbS5hY3RpdmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNpZGVuYXYtY29udGFpbmVyIC5wYW5lbC13cmFwcGVyLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5leHBhbnNpb24td3JhcHBlciAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xufVxuLmV4cGFuc2lvbi13cmFwcGVyIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uZXhwYW5zaW9uLXdyYXBwZXIgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlci1uYW1lIHtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLnVzZXItcGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xufVxuXG5tYXQtc2lkZW5hdi5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KSAhaW1wb3J0YW50O1xufVxuXG5tYXQtc2lkZW5hdi5tYXQtZHJhd2VyLm1hdC1zaWRlbmF2LnNpZGVuYXYubmctdG5zLWMxODQtMi5uZy10cmlnZ2VyLm5nLXRyaWdnZXItdHJhbnNmb3JtLm5nLXN0YXItaW5zZXJ0ZWQubWF0LWRyYXdlci1vdmVyLm1hdC1kcmF3ZXItb3BlbmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxubWF0LW5hdi1saXN0Lm1hdC1uYXYtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLm5nLXN0YXItaW5zZXJ0ZWQubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubWF0LW1lbnUtY29udGVudCAubWF0ZXJpYWwtaWNvbnMsIC5tYXQtbWVudS1jb250ZW50IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]
        }, {
          type: ClientApp_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: ClientApp_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      }, {
        drawer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['drawer']
        }]
      });
    })();
    /***/

  },

  /***/
  "./ClientApp/app/core/components/svg-home-image/svg-home-image.component.ts":
  /*!**********************************************************************************!*\
    !*** ./ClientApp/app/core/components/svg-home-image/svg-home-image.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: SvgHomeImageComponent */

  /***/
  function ClientAppAppCoreComponentsSvgHomeImageSvgHomeImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SvgHomeImageComponent", function () {
      return SvgHomeImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SvgHomeImageComponent = /*#__PURE__*/function () {
      function SvgHomeImageComponent() {
        _classCallCheck(this, SvgHomeImageComponent);
      }

      _createClass(SvgHomeImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SvgHomeImageComponent;
    }();

    SvgHomeImageComponent.ɵfac = function SvgHomeImageComponent_Factory(t) {
      return new (t || SvgHomeImageComponent)();
    };

    SvgHomeImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SvgHomeImageComponent,
      selectors: [["app-svg-home-image"]],
      decls: 59,
      vars: 0,
      consts: [["id", "svg", "viewBox", "0 0 804 592", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0)"], ["d", "M798.604 35.0628H4.44832C3.26895 35.0615 2.13825 34.5925 1.30431 33.7585C0.470363 32.9246 0.00128906 31.7939 0 30.6145V4.4483C0.00128906 3.26893 0.470363 2.13823 1.30431 1.30429C2.13825 0.47035 3.26895 0.00128641 4.44832 0H798.604C799.783 0.00128906 800.914 0.470365 801.748 1.30431C802.582 2.13825 803.051 3.26893 803.052 4.4483V30.6145C803.051 31.7939 802.582 32.9246 801.748 33.7585C800.914 34.5925 799.783 35.0615 798.604 35.0628Z", "fill", "#E4E4E4"], ["d", "M25.8155 22.5706C29.3035 22.5706 32.131 19.7431 32.131 16.2551C32.131 12.7672 29.3035 9.93964 25.8155 9.93964C22.3275 9.93964 19.5 12.7672 19.5 16.2551C19.5 19.7431 22.3275 22.5706 25.8155 22.5706Z", "fill", "white"], ["d", "M49.7871 22.5706C53.275 22.5706 56.1026 19.7431 56.1026 16.2551C56.1026 12.7672 53.275 9.93964 49.7871 9.93964C46.2991 9.93964 43.4716 12.7672 43.4716 16.2551C43.4716 19.7431 46.2991 22.5706 49.7871 22.5706Z", "fill", "white"], ["d", "M73.7597 22.5706C77.2477 22.5706 80.0752 19.7431 80.0752 16.2551C80.0752 12.7672 77.2477 9.93964 73.7597 9.93964C70.2718 9.93964 67.4442 12.7672 67.4442 16.2551C67.4442 19.7431 70.2718 22.5706 73.7597 22.5706Z", "fill", "white"], ["d", "M775.117 11.9083H747.513C746.971 11.9071 746.452 11.6911 746.07 11.3078C745.687 10.9245 745.473 10.405 745.473 9.86353C745.473 9.32201 745.687 8.80262 746.07 8.41928C746.452 8.03595 746.971 7.81998 747.513 7.81879H775.117C775.659 7.8184 776.179 8.03313 776.562 8.4158C776.946 8.79848 777.162 9.31781 777.163 9.8597C777.164 10.4016 776.95 10.9217 776.568 11.3058C776.186 11.6899 775.667 11.9066 775.125 11.9083H775.117Z", "fill", "white"], ["d", "M775.117 19.5761H747.513C746.971 19.5749 746.452 19.3589 746.07 18.9756C745.687 18.5922 745.473 18.0728 745.473 17.5313C745.473 16.9898 745.687 16.4704 746.07 16.0871C746.452 15.7037 746.971 15.4878 747.513 15.4866H775.117C775.659 15.4862 776.179 15.7009 776.562 16.0836C776.946 16.4663 777.162 16.9856 777.163 17.5275C777.164 18.0694 776.95 18.5895 776.568 18.9736C776.186 19.3577 775.667 19.5744 775.125 19.5761H775.117Z", "fill", "white"], ["d", "M775.117 27.2439H747.513C746.971 27.2439 746.45 27.0285 746.067 26.645C745.684 26.2616 745.468 25.7415 745.468 25.1992C745.468 24.6569 745.684 24.1368 746.067 23.7533C746.45 23.3698 746.971 23.1544 747.513 23.1544H775.117C775.659 23.1534 776.18 23.3679 776.564 23.7506C776.948 24.1333 777.165 24.653 777.166 25.1953C777.167 25.7376 776.952 26.2581 776.569 26.6423C776.187 27.0265 775.667 27.2429 775.125 27.2439H775.117Z", "fill", "white"], ["d", "M226.443 519.964C229.365 496.466 243.928 473.313 266.338 465.666C257.5 489.853 257.502 516.385 266.344 540.57C269.787 549.885 274.587 559.887 271.348 569.274C269.333 575.116 264.402 579.585 258.891 582.379C253.38 585.174 247.263 586.506 241.224 587.811L240.035 588.794C230.446 567.143 223.521 543.462 226.443 519.964Z", "fill", "#F0F0F0"], ["d", "M266.561 466.111C253.51 480.734 245.399 499.097 243.379 518.592C242.869 522.781 243.024 527.024 243.836 531.166C244.757 535.174 246.735 538.863 249.564 541.848C252.146 544.685 255.115 547.287 256.962 550.702C257.882 552.464 258.419 554.401 258.538 556.385C258.656 558.369 258.354 560.356 257.651 562.215C256.02 566.893 252.806 570.706 249.533 574.326C245.898 578.344 242.06 582.461 240.515 587.789C240.328 588.435 239.337 588.106 239.524 587.462C242.212 578.192 251.21 572.927 255.501 564.578C257.504 560.682 258.344 556.159 256.467 552.047C254.825 548.451 251.766 545.764 249.127 542.915C246.324 540.043 244.267 536.528 243.136 532.678C242.116 528.592 241.799 524.361 242.198 520.168C242.946 510.715 245.175 501.437 248.805 492.676C252.892 482.653 258.664 473.404 265.87 465.328C266.316 464.828 267.004 465.615 266.561 466.111L266.561 466.111Z", "fill", "white"], ["d", "M243.66 512.276C240.435 511.493 237.593 509.59 235.643 506.905C233.692 504.22 232.759 500.93 233.01 497.621C233.022 497.486 233.085 497.361 233.187 497.272C233.289 497.183 233.421 497.137 233.557 497.143C233.692 497.15 233.819 497.209 233.912 497.308C234.004 497.407 234.055 497.537 234.053 497.673C233.813 500.754 234.682 503.819 236.504 506.315C238.326 508.811 240.98 510.574 243.987 511.285C244.64 511.441 244.309 512.431 243.66 512.276Z", "fill", "white"], ["d", "M248.065 540.582C253.89 537.104 258.19 531.559 260.107 525.052C260.297 524.407 261.287 524.735 261.098 525.379C259.09 532.147 254.604 537.909 248.535 541.514C247.956 541.858 247.49 540.924 248.065 540.582Z", "fill", "white"], ["d", "M253.861 483.642C255.045 484.205 256.351 484.465 257.661 484.398C258.971 484.332 260.244 483.941 261.365 483.261C261.94 482.91 262.405 483.845 261.835 484.193C260.592 484.939 259.186 485.368 257.739 485.445C256.292 485.522 254.848 485.243 253.533 484.633C253.405 484.586 253.299 484.491 253.237 484.369C253.175 484.247 253.163 484.105 253.201 483.974C253.245 483.843 253.339 483.734 253.463 483.672C253.586 483.61 253.729 483.599 253.861 483.642Z", "fill", "white"], ["d", "M334.647 507.637C334.295 507.866 333.943 508.095 333.59 508.333C328.871 511.436 324.411 514.918 320.255 518.744C319.929 519.035 319.603 519.334 319.286 519.633C309.372 528.957 301.276 540.041 295.408 552.32C293.077 557.208 291.122 562.267 289.559 567.452C287.401 574.613 285.631 582.549 281.359 588.406C280.92 589.023 280.444 589.611 279.932 590.168H241.326C241.239 590.124 241.15 590.089 241.062 590.045L239.521 590.115C239.583 589.842 239.653 589.56 239.715 589.287C239.75 589.129 239.794 588.97 239.829 588.812C239.856 588.706 239.882 588.6 239.9 588.503C239.908 588.468 239.917 588.433 239.926 588.406C239.944 588.31 239.97 588.221 239.988 588.133C240.375 586.557 240.775 584.98 241.186 583.403C241.186 583.395 241.186 583.395 241.194 583.386C244.211 571.342 248.646 559.699 254.406 548.7C254.583 548.374 254.759 548.039 254.953 547.713C257.62 542.845 260.681 538.202 264.104 533.832C265.987 531.445 267.989 529.155 270.103 526.97C275.576 521.337 281.901 516.599 288.846 512.93C302.692 505.62 318.723 502.819 333.52 507.284C333.899 507.399 334.269 507.514 334.647 507.637Z", "fill", "#F0F0F0"], ["d", "M334.561 508.127C315.337 511.945 297.804 521.723 284.454 536.073C281.525 539.111 279.094 542.592 277.249 546.388C275.571 550.143 274.929 554.279 275.391 558.366C275.744 562.185 276.548 566.051 275.967 569.89C275.641 571.851 274.903 573.72 273.803 575.376C272.704 577.031 271.266 578.436 269.586 579.497C265.467 582.25 260.605 583.359 255.812 584.278C250.491 585.299 244.947 586.275 240.506 589.599C239.968 590.002 239.374 589.143 239.912 588.741C247.639 582.958 257.993 584.172 266.446 580.089C270.391 578.184 273.785 575.079 274.762 570.665C275.616 566.805 274.791 562.818 274.399 558.954C273.891 554.974 274.365 550.929 275.78 547.174C277.425 543.297 279.719 539.728 282.562 536.621C288.851 529.523 296.217 523.457 304.39 518.647C313.688 513.106 323.865 509.196 334.481 507.086C335.138 506.956 335.213 507.998 334.561 508.127H334.561Z", "fill", "white"], ["d", "M288.481 531.2C286.377 528.633 285.255 525.402 285.313 522.084C285.372 518.766 286.608 515.577 288.801 513.086C289.247 512.584 290.049 513.252 289.602 513.755C287.556 516.071 286.405 519.042 286.356 522.132C286.308 525.221 287.366 528.227 289.339 530.605C289.767 531.123 288.906 531.714 288.481 531.2Z", "fill", "white"], ["d", "M274.956 556.453C281.701 557.183 288.472 555.344 293.921 551.303C294.461 550.902 295.054 551.76 294.515 552.161C288.837 556.355 281.787 558.255 274.77 557.48C274.101 557.405 274.291 556.379 274.956 556.453Z", "fill", "white"], ["d", "M313.866 514.478C314.472 515.641 315.359 516.635 316.445 517.37C317.531 518.106 318.782 518.56 320.087 518.693C320.756 518.758 320.566 519.785 319.901 519.719C318.46 519.566 317.078 519.063 315.876 518.253C314.675 517.443 313.69 516.351 313.008 515.073C312.933 514.957 312.905 514.818 312.93 514.683C312.954 514.549 313.029 514.428 313.139 514.347C313.253 514.268 313.394 514.238 313.53 514.263C313.666 514.288 313.786 514.365 313.866 514.478L313.866 514.478Z", "fill", "white"], ["d", "M260.293 182.444H132.568C128.62 182.44 124.836 180.87 122.046 178.079C119.255 175.288 117.685 171.504 117.68 167.557V97.9913C117.685 94.0444 119.255 90.2604 122.046 87.4695C124.837 84.6786 128.621 83.1089 132.568 83.1046H260.293C264.24 83.1089 268.024 84.6786 270.815 87.4695C273.606 90.2603 275.176 94.0443 275.18 97.9913V167.557C275.176 171.504 273.606 175.288 270.815 178.079C268.024 180.87 264.24 182.44 260.293 182.444V182.444Z", "fill", "#E6E6E6"], ["d", "M455.293 182.444H327.568C323.621 182.44 319.836 180.87 317.046 178.079C314.255 175.288 312.685 171.504 312.68 167.557V97.9913C312.685 94.0444 314.255 90.2604 317.046 87.4695C319.837 84.6786 323.621 83.1089 327.568 83.1046H455.293C459.24 83.1089 463.024 84.6786 465.815 87.4695C468.606 90.2603 470.176 94.0443 470.18 97.9913V167.557C470.176 171.504 468.606 175.288 465.815 178.079C463.024 180.87 459.24 182.44 455.293 182.444Z", "fill", "#6C63FF"], ["d", "M650.293 182.444H522.568C518.62 182.44 514.836 180.87 512.045 178.079C509.255 175.288 507.685 171.504 507.68 167.557V97.9913C507.685 94.0444 509.255 90.2604 512.046 87.4695C514.836 84.6786 518.621 83.1089 522.568 83.1046H650.293C654.24 83.1089 658.024 84.6786 660.815 87.4695C663.606 90.2603 665.176 94.0443 665.18 97.9913V167.557C665.176 171.504 663.606 175.288 660.815 178.079C658.024 180.87 654.24 182.44 650.293 182.444Z", "fill", "#E6E6E6"], ["d", "M260.293 337.444H132.568C128.62 337.44 124.836 335.87 122.046 333.079C119.255 330.288 117.685 326.504 117.68 322.557V252.991C117.685 249.044 119.255 245.26 122.046 242.47C124.837 239.679 128.621 238.109 132.568 238.105H260.293C264.24 238.109 268.024 239.679 270.815 242.47C273.606 245.26 275.176 249.044 275.18 252.991V322.557C275.176 326.504 273.606 330.288 270.815 333.079C268.024 335.87 264.24 337.44 260.293 337.444Z", "fill", "#F2F2F2"], ["d", "M455.293 337.444H327.568C323.621 337.44 319.836 335.87 317.046 333.079C314.255 330.288 312.685 326.504 312.68 322.557V252.991C312.685 249.044 314.255 245.26 317.046 242.47C319.837 239.679 323.621 238.109 327.568 238.105H455.293C459.24 238.109 463.024 239.679 465.815 242.47C468.606 245.26 470.176 249.044 470.18 252.991V322.557C470.176 326.504 468.606 330.288 465.815 333.079C463.024 335.87 459.24 337.44 455.293 337.444Z", "fill", "#E6E6E6"], ["d", "M464.312 350.245C476.91 350.245 487.124 340.032 487.124 327.433C487.124 314.834 476.91 304.621 464.312 304.621C451.713 304.621 441.499 314.834 441.499 327.433C441.499 340.032 451.713 350.245 464.312 350.245Z", "fill", "#6C63FF"], ["d", "M473.784 325.517H466.028V317.761C466.028 317.522 465.981 317.284 465.889 317.063C465.798 316.841 465.663 316.64 465.494 316.471C465.324 316.301 465.123 316.167 464.902 316.075C464.68 315.983 464.443 315.936 464.203 315.936V315.936C463.964 315.936 463.726 315.983 463.505 316.075C463.283 316.167 463.082 316.301 462.913 316.471C462.743 316.64 462.609 316.841 462.517 317.063C462.425 317.284 462.378 317.522 462.378 317.761V325.517H454.622C454.382 325.517 454.145 325.565 453.924 325.656C453.702 325.748 453.501 325.882 453.332 326.052C453.162 326.221 453.028 326.423 452.936 326.644C452.844 326.866 452.797 327.103 452.797 327.342V327.342C452.797 327.582 452.844 327.82 452.936 328.041C453.028 328.262 453.162 328.464 453.332 328.633C453.501 328.803 453.702 328.937 453.924 329.029C454.145 329.12 454.382 329.168 454.622 329.168H462.378V336.924C462.378 337.163 462.425 337.401 462.517 337.622C462.609 337.844 462.743 338.045 462.913 338.214C463.082 338.384 463.283 338.518 463.505 338.61C463.726 338.702 463.964 338.749 464.203 338.749V338.749C464.687 338.749 465.152 338.557 465.494 338.214C465.836 337.872 466.028 337.408 466.028 336.924V329.168H473.784C474.024 329.168 474.261 329.12 474.483 329.029C474.704 328.937 474.905 328.802 475.075 328.633C475.244 328.464 475.379 328.262 475.471 328.041C475.562 327.819 475.61 327.582 475.609 327.342V327.342C475.61 327.103 475.562 326.865 475.471 326.644C475.379 326.423 475.244 326.221 475.075 326.052C474.905 325.882 474.704 325.748 474.483 325.656C474.261 325.565 474.024 325.517 473.784 325.517V325.517L473.784 325.517Z", "fill", "white"], ["d", "M662.312 199.245C674.91 199.245 685.124 189.032 685.124 176.433C685.124 163.834 674.91 153.621 662.312 153.621C649.713 153.621 639.499 163.834 639.499 176.433C639.499 189.032 649.713 199.245 662.312 199.245Z", "fill", "#6C63FF"], ["d", "M671.784 174.517H664.028V166.761C664.028 166.522 663.981 166.284 663.889 166.063C663.798 165.841 663.663 165.64 663.494 165.471C663.324 165.301 663.123 165.167 662.902 165.075C662.68 164.983 662.443 164.936 662.203 164.936V164.936C661.964 164.936 661.726 164.983 661.505 165.075C661.283 165.167 661.082 165.301 660.913 165.471C660.743 165.64 660.609 165.841 660.517 166.063C660.425 166.284 660.378 166.522 660.378 166.761V174.517H652.622C652.382 174.517 652.145 174.565 651.924 174.656C651.702 174.748 651.501 174.882 651.332 175.052C651.162 175.221 651.028 175.423 650.936 175.644C650.844 175.866 650.797 176.103 650.797 176.342V176.342C650.797 176.582 650.844 176.82 650.936 177.041C651.028 177.262 651.162 177.464 651.332 177.633C651.501 177.803 651.702 177.937 651.924 178.029C652.145 178.12 652.382 178.168 652.622 178.168H660.378V185.924C660.378 186.163 660.425 186.401 660.517 186.622C660.609 186.844 660.743 187.045 660.913 187.214C661.082 187.384 661.283 187.518 661.505 187.61C661.726 187.702 661.964 187.749 662.203 187.749V187.749C662.687 187.749 663.152 187.557 663.494 187.214C663.836 186.872 664.028 186.408 664.028 185.924V178.168H671.784C672.024 178.168 672.261 178.12 672.483 178.029C672.704 177.937 672.905 177.802 673.075 177.633C673.244 177.464 673.379 177.262 673.471 177.041C673.562 176.819 673.61 176.582 673.609 176.342V176.342C673.61 176.103 673.562 175.865 673.471 175.644C673.379 175.423 673.244 175.221 673.075 175.052C672.905 174.882 672.704 174.748 672.483 174.656C672.261 174.565 672.024 174.517 671.784 174.517V174.517L671.784 174.517Z", "fill", "white"], ["d", "M269.312 197.245C281.91 197.245 292.124 187.032 292.124 174.433C292.124 161.834 281.91 151.621 269.312 151.621C256.713 151.621 246.499 161.834 246.499 174.433C246.499 187.032 256.713 197.245 269.312 197.245Z", "fill", "#6C63FF"], ["d", "M278.784 172.517H271.028V164.761C271.028 164.522 270.981 164.284 270.889 164.063C270.798 163.841 270.663 163.64 270.494 163.471C270.324 163.301 270.123 163.167 269.902 163.075C269.68 162.983 269.443 162.936 269.203 162.936V162.936C268.964 162.936 268.726 162.983 268.505 163.075C268.283 163.167 268.082 163.301 267.913 163.471C267.743 163.64 267.609 163.841 267.517 164.063C267.425 164.284 267.378 164.522 267.378 164.761V164.761V172.517H259.622C259.382 172.517 259.145 172.565 258.924 172.656C258.702 172.748 258.501 172.882 258.332 173.052C258.162 173.221 258.028 173.423 257.936 173.644C257.844 173.866 257.797 174.103 257.797 174.342V174.342C257.797 174.827 257.989 175.291 258.331 175.633C258.674 175.975 259.138 176.168 259.622 176.168H267.378V183.924C267.378 184.163 267.425 184.401 267.517 184.622C267.609 184.844 267.743 185.045 267.913 185.214C268.082 185.384 268.283 185.518 268.505 185.61C268.726 185.702 268.964 185.749 269.203 185.749V185.749C269.443 185.749 269.68 185.702 269.902 185.61C270.123 185.518 270.324 185.384 270.494 185.214C270.663 185.045 270.798 184.844 270.889 184.622C270.981 184.401 271.028 184.163 271.028 183.924V176.168H278.784C279.024 176.168 279.262 176.12 279.483 176.029C279.704 175.937 279.906 175.802 280.075 175.633C280.245 175.464 280.379 175.262 280.471 175.041C280.562 174.819 280.61 174.582 280.61 174.342V174.342C280.61 173.858 280.417 173.394 280.075 173.052C279.733 172.71 279.269 172.517 278.784 172.517V172.517V172.517Z", "fill", "white"], ["d", "M440.102 142.92C440.518 144.179 440.653 145.514 440.498 146.83C440.342 148.147 439.9 149.414 439.202 150.541C438.504 151.668 437.567 152.629 436.458 153.355C435.349 154.081 434.093 154.556 432.781 154.744L422.233 226.745L404.93 218.294L422.333 146.424C422.163 144.198 422.814 141.987 424.165 140.209C425.515 138.432 427.471 137.212 429.661 136.78C431.851 136.348 434.124 136.734 436.048 137.866C437.972 138.998 439.415 140.796 440.102 142.92L440.102 142.92Z", "fill", "#9E616A"], ["d", "M314.116 373.52C314.886 372.44 315.41 371.205 315.651 369.902C315.893 368.598 315.845 367.257 315.512 365.974C315.179 364.69 314.569 363.495 313.724 362.473C312.88 361.451 311.821 360.627 310.623 360.058L317.74 283.472L302.835 291.111L298.181 364.912C297.359 366.988 297.327 369.293 298.091 371.39C298.854 373.488 300.361 375.233 302.325 376.294C304.289 377.355 306.574 377.658 308.747 377.147C310.92 376.636 312.83 375.345 314.115 373.52H314.116Z", "fill", "#9E616A"], ["d", "M324.298 334.784L388.259 332.324L391.949 265.903H318.148L324.298 334.784Z", "fill", "#9E616A"], ["d", "M312.427 569.355L323.357 569.354L328.556 527.197H312.425L312.427 569.355Z", "fill", "#9E616A"], ["d", "M309.716 563.963L326.994 562.932V570.334L343.42 581.679C344.231 582.239 344.842 583.044 345.164 583.976C345.486 584.908 345.501 585.919 345.207 586.86C344.914 587.802 344.327 588.625 343.533 589.209C342.739 589.793 341.778 590.108 340.792 590.108H320.223L316.677 582.786L315.293 590.108H307.537L309.716 563.963Z", "fill", "#2F2E41"], ["d", "M361.041 569.355L371.971 569.354L377.17 527.197H361.039L361.041 569.355Z", "fill", "#9E616A"], ["d", "M323.411 319.192C323.411 319.192 304.273 334.642 314.647 389.82C313.068 390.008 314.857 393.122 314.857 393.122L316.354 438.082L317.51 443.235L313.664 451.549L315.25 460.583L310.362 542.575L328.419 544.91L345.699 459.767L348.99 450.194L352.291 441.803L350.51 432.856L351.971 418.968L361.933 372.139L364.371 453.357L360.968 461.111L362.862 469.622L358.643 474.14L356.976 550.13L376.23 551.031L392.161 474.428L390.926 464.652L393.045 457.424V440.541L396.676 432.573L404.59 389.126C404.59 389.126 406.977 355.168 389.558 315.207L323.411 319.192Z", "fill", "#2F2E41"], ["d", "M331.21 210.701C331.21 210.701 307.038 215.481 302.873 236.095C298.708 256.71 296.029 303.358 296.029 303.358L296.941 309.855L320.323 315.276L335.246 249.914L331.21 210.701Z", "fill", "#3F3D56"], ["d", "M386.373 217.659C386.373 217.659 388.823 214.226 402.544 213.696C403.109 213.674 402.41 212.553 402.41 212.553L409.009 180.301L430.999 192.476L427.287 226.289L391.152 267.39L386.373 217.659Z", "fill", "#3F3D56"], ["d", "M372.666 313.81C362.313 313.811 346.73 312.668 323.27 309.185C321.759 308.957 320.361 308.252 319.279 307.173C318.197 306.094 317.488 304.697 317.257 303.186C316.491 302.378 315.992 301.352 315.829 300.25C315.666 299.148 315.846 298.022 316.345 297.026L316.367 296.984L315.836 296.357C315.014 295.391 314.531 294.183 314.461 292.917C314.391 291.65 314.738 290.396 315.449 289.346L308.184 237.371C307.446 232.21 308.575 226.955 311.366 222.551C314.158 218.148 318.429 214.885 323.411 213.349L326.093 212.514L336.236 199.248L336.436 199.25L368.997 199.684L379.563 213.102L396.644 217.129L396.688 217.389L400.654 240.303C402.717 252.221 397.986 256.909 391.949 267.39L393.721 296.824L394.525 298.285C394.971 299.094 395.12 300.033 394.947 300.94C394.774 301.847 394.289 302.665 393.577 303.253C394.116 304.792 394.153 306.463 393.682 308.025L393.264 309.406C393.265 309.445 393.153 310.007 392.251 310.691C390.625 311.926 385.957 313.81 372.666 313.81Z", "fill", "#3F3D56"], ["d", "M358.33 563.963L375.608 562.932V570.334L392.034 581.679C392.846 582.239 393.457 583.044 393.778 583.976C394.1 584.908 394.115 585.919 393.821 586.86C393.528 587.802 392.941 588.625 392.147 589.209C391.353 589.793 390.393 590.108 389.407 590.108H368.837L365.291 582.786L363.907 590.108H356.151L358.33 563.963Z", "fill", "#2F2E41"], ["d", "M376.476 170.337C378.735 156.422 369.284 143.31 355.368 141.052C341.452 138.793 328.341 148.244 326.082 162.16C323.824 176.076 333.275 189.187 347.191 191.446C361.107 193.704 374.218 184.253 376.476 170.337Z", "fill", "#9E616A"], ["d", "M366.206 141.306C356.85 134.871 348.611 133.891 341.843 135.716C340.966 134.359 339.736 133.267 338.285 132.556C333.006 119.256 316.943 111.269 303.158 115.151C289.283 119.059 279.71 134.428 282.321 148.604C283.939 157.391 289.469 165 291.693 173.654C295.999 190.405 285.495 209.594 269.064 214.994C284.621 218.117 301.746 208.614 307.328 193.76C310.038 186.545 310.202 178.668 310.547 170.968C310.637 165.653 311.288 160.363 312.489 155.185C313.085 152.862 313.927 150.609 315.001 148.465C317.34 143.751 321.225 139.982 326.007 137.787C325.579 139.111 325.471 140.519 325.694 141.893C325.917 143.267 326.464 144.568 327.289 145.689C323.64 150.26 321.654 155.203 321.654 158.163C314.075 172.015 324.913 183.914 338.766 191.493C344.291 194.532 350.671 195.644 356.899 194.654L357.479 192.18L358.264 194.409L360.885 201.88C363.909 203.343 366.907 204.947 369.878 206.691C368.749 201.389 367.836 196.098 367.207 190.924C366.337 183.882 369.37 173.398 371.558 167.023C372.915 163.094 373.611 158.967 373.619 154.81V154.628L375.749 161.471L383.505 158.163C382.062 149.886 383.505 140.491 366.206 141.306Z", "fill", "#2F2E41"], ["d", "M685.173 591.375H117.879C117.564 591.374 117.263 591.247 117.041 591.024C116.819 590.801 116.694 590.499 116.694 590.184C116.694 589.87 116.819 589.568 117.041 589.345C117.263 589.121 117.564 588.995 117.879 588.994H685.173C685.488 588.995 685.789 589.121 686.011 589.345C686.233 589.568 686.358 589.87 686.358 590.184C686.358 590.499 686.233 590.801 686.011 591.024C685.789 591.247 685.488 591.374 685.173 591.375V591.375Z", "fill", "#CCCCCC"], ["d", "M266.704 353.243C279.303 353.243 289.516 343.03 289.516 330.431C289.516 317.832 279.303 307.619 266.704 307.619C254.105 307.619 243.892 317.832 243.892 330.431C243.892 343.03 254.105 353.243 266.704 353.243Z", "fill", "#E6E6E6"], ["d", "M609.939 317.32H529.926C527.453 317.317 525.083 316.334 523.335 314.585C521.586 312.837 520.603 310.466 520.6 307.994V264.415C520.603 261.943 521.586 259.572 523.335 257.824C525.083 256.076 527.453 255.092 529.926 255.089H609.939C612.411 255.092 614.782 256.075 616.53 257.824C618.279 259.572 619.262 261.943 619.265 264.415V307.994C619.262 310.466 618.279 312.837 616.53 314.585C614.782 316.334 612.411 317.317 609.939 317.32V317.32Z", "fill", "#F2F2F2"], ["d", "M611.118 299.619C617.808 299.619 623.232 294.195 623.232 287.504C623.232 280.813 617.808 275.39 611.118 275.39C604.427 275.39 599.003 280.813 599.003 287.504C599.003 294.195 604.427 299.619 611.118 299.619Z", "fill", "#6C63FF"], ["d", "M616.148 286.487H612.029V282.368C612.029 282.241 612.004 282.115 611.956 281.997C611.907 281.879 611.835 281.772 611.745 281.682C611.655 281.592 611.549 281.521 611.431 281.472C611.313 281.424 611.187 281.399 611.06 281.399C610.803 281.399 610.557 281.501 610.375 281.682C610.193 281.864 610.091 282.111 610.091 282.368V286.487H605.972C605.715 286.487 605.468 286.589 605.287 286.771C605.105 286.952 605.003 287.199 605.003 287.456V287.456C605.003 287.583 605.028 287.709 605.077 287.827C605.125 287.945 605.197 288.051 605.287 288.141C605.377 288.231 605.483 288.303 605.601 288.352C605.719 288.4 605.845 288.425 605.972 288.425H610.091V292.544C610.091 292.671 610.116 292.798 610.165 292.915C610.213 293.033 610.285 293.14 610.375 293.23C610.465 293.32 610.572 293.391 610.689 293.44C610.807 293.488 610.933 293.513 611.06 293.513V293.513C611.317 293.513 611.564 293.411 611.745 293.23C611.927 293.048 612.029 292.801 612.029 292.544V288.425H616.148C616.405 288.425 616.652 288.323 616.834 288.141C617.016 287.96 617.118 287.713 617.118 287.456V287.456C617.118 287.329 617.093 287.203 617.044 287.085C616.995 286.968 616.924 286.861 616.834 286.771C616.744 286.681 616.637 286.609 616.519 286.561C616.402 286.512 616.276 286.487 616.148 286.487L616.148 286.487Z", "fill", "white"], ["d", "M642.537 304.953H576.599C573.8 304.95 571.117 303.837 569.138 301.858C567.159 299.879 566.046 297.196 566.043 294.398V255.038C566.044 254.523 566.249 254.029 566.614 253.665C566.979 253.302 567.473 253.097 567.988 253.097C568.503 253.097 568.997 253.302 569.361 253.665C569.726 254.029 569.931 254.523 569.932 255.038V265.579L646.523 272.541C648.053 272.568 649.511 273.195 650.584 274.286C651.657 275.376 652.259 276.845 652.26 278.375C652.26 278.495 652.249 278.615 652.227 278.733L648.367 299.318C648.314 300.829 647.677 302.261 646.589 303.312C645.502 304.363 644.049 304.952 642.537 304.953V304.953ZM569.932 269.484V294.398C569.935 296.165 570.638 297.859 571.887 299.109C573.137 300.359 574.831 301.062 576.599 301.064H642.537C643.052 301.063 643.547 300.858 643.911 300.493C644.276 300.129 644.481 299.635 644.482 299.119C644.482 298.999 644.493 298.879 644.515 298.761L648.365 278.225C648.327 277.737 648.106 277.281 647.747 276.948C647.388 276.616 646.916 276.431 646.426 276.43C646.368 276.43 646.309 276.427 646.25 276.422L569.932 269.484Z", "fill", "#6C63FF"], ["d", "M559.078 323.104C560.868 323.104 562.319 321.653 562.319 319.863C562.319 318.073 560.868 316.622 559.078 316.622C557.287 316.622 555.836 318.073 555.836 319.863C555.836 321.653 557.287 323.104 559.078 323.104Z", "fill", "#6C63FF"], ["d", "M639.944 323.104C641.734 323.104 643.185 321.653 643.185 319.863C643.185 318.073 641.734 316.622 639.944 316.622C638.154 316.622 636.703 318.073 636.703 319.863C636.703 321.653 638.154 323.104 639.944 323.104Z", "fill", "#6C63FF"], ["d", "M643.185 316.622H556.484C555.969 316.622 555.474 316.417 555.109 316.052C554.745 315.687 554.54 315.193 554.54 314.677C554.54 314.161 554.745 313.667 555.109 313.302C555.474 312.937 555.969 312.732 556.484 312.732H643.185C643.701 312.732 644.195 312.937 644.56 313.302C644.925 313.667 645.13 314.161 645.13 314.677C645.13 315.193 644.925 315.687 644.56 316.052C644.195 316.417 643.701 316.622 643.185 316.622V316.622Z", "fill", "#6C63FF"], ["d", "M573.174 256.334H556.319C555.804 256.333 555.311 256.128 554.947 255.763C554.583 255.398 554.379 254.904 554.379 254.389C554.379 253.874 554.583 253.38 554.947 253.016C555.311 252.651 555.804 252.446 556.319 252.445H573.174C573.689 252.446 574.182 252.651 574.546 253.016C574.91 253.38 575.114 253.874 575.114 254.389C575.114 254.904 574.91 255.398 574.546 255.763C574.182 256.128 573.689 256.333 573.174 256.334V256.334Z", "fill", "#6C63FF"], ["d", "M586.695 315.632C586.23 315.632 585.781 315.465 585.428 315.162L572.646 304.177C572.451 304.011 572.292 303.808 572.176 303.58C572.06 303.352 571.99 303.103 571.971 302.848C571.951 302.593 571.982 302.337 572.062 302.094C572.141 301.851 572.268 301.626 572.435 301.432C572.602 301.238 572.805 301.079 573.033 300.964C573.261 300.848 573.51 300.779 573.765 300.76C574.02 300.741 574.276 300.772 574.519 300.853C574.762 300.933 574.987 301.06 575.18 301.227L587.963 312.212C588.264 312.471 588.479 312.816 588.579 313.2C588.678 313.585 588.657 313.991 588.519 314.363C588.381 314.736 588.132 315.057 587.806 315.284C587.48 315.51 587.092 315.632 586.695 315.632V315.632Z", "fill", "#6C63FF"], ["d", "M589.388 303.759C589.133 303.759 588.88 303.708 588.644 303.611C588.408 303.513 588.194 303.37 588.013 303.189C587.833 303.009 587.689 302.794 587.592 302.558C587.494 302.322 587.444 302.069 587.444 301.814V270.596C587.444 270.08 587.648 269.585 588.013 269.221C588.378 268.856 588.873 268.651 589.388 268.651C589.904 268.651 590.399 268.856 590.763 269.221C591.128 269.585 591.333 270.08 591.333 270.596V301.814C591.333 302.069 591.283 302.322 591.185 302.558C591.087 302.794 590.944 303.008 590.764 303.189C590.583 303.37 590.369 303.513 590.133 303.611C589.897 303.708 589.644 303.759 589.389 303.759H589.388Z", "fill", "#6C63FF"], ["d", "M630.47 303.759C630.214 303.759 629.961 303.708 629.726 303.611C629.49 303.513 629.275 303.37 629.095 303.189C628.914 303.009 628.771 302.794 628.673 302.558C628.575 302.322 628.525 302.069 628.525 301.814V273.189C628.526 272.674 628.732 272.18 629.096 271.816C629.461 271.453 629.955 271.248 630.47 271.248C630.985 271.248 631.479 271.453 631.843 271.816C632.208 272.18 632.413 272.674 632.414 273.189V301.814C632.415 302.069 632.364 302.322 632.266 302.558C632.169 302.794 632.026 303.008 631.845 303.189C631.664 303.37 631.45 303.513 631.214 303.611C630.978 303.708 630.725 303.759 630.47 303.759H630.47Z", "fill", "#6C63FF"], ["id", "clip0"], ["width", "803.052", "height", "591.375", "fill", "white"]],
      template: function SvgHomeImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "clipPath", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".svg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY29yZS9jb21wb25lbnRzL3N2Zy1ob21lLWltYWdlL0M6XFxVc2Vyc1xcb21hcnRpbmV6XFxEZXNrdG9wXFxMYXd5ZXJBcHBcXGxhd3llckFwcF9CYWNrRW5kL0NsaWVudEFwcFxcYXBwXFxjb3JlXFxjb21wb25lbnRzXFxzdmctaG9tZS1pbWFnZVxcc3ZnLWhvbWUtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJDbGllbnRBcHAvYXBwL2NvcmUvY29tcG9uZW50cy9zdmctaG9tZS1pbWFnZS9zdmctaG9tZS1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvcmUvY29tcG9uZW50cy9zdmctaG9tZS1pbWFnZS9zdmctaG9tZS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIuc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgHomeImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-svg-home-image',
          templateUrl: './svg-home-image.component.svg',
          styleUrls: ['./svg-home-image.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/core/components/user-home-page/user-home-page.component.ts":
  /*!**********************************************************************************!*\
    !*** ./ClientApp/app/core/components/user-home-page/user-home-page.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: UserHomePageComponent */

  /***/
  function ClientAppAppCoreComponentsUserHomePageUserHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHomePageComponent", function () {
      return UserHomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var UserHomePageComponent = /*#__PURE__*/function () {
      function UserHomePageComponent() {
        _classCallCheck(this, UserHomePageComponent);
      }

      _createClass(UserHomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserHomePageComponent;
    }();

    UserHomePageComponent.ɵfac = function UserHomePageComponent_Factory(t) {
      return new (t || UserHomePageComponent)();
    };

    UserHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserHomePageComponent,
      selectors: [["app-user-home-page"]],
      decls: 4,
      vars: 0,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container"], ["fxLayoutAlign", "center center", "display", "block", 2, "font-size", "19px", "color", "var(--primary)"]],
      template: function UserHomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Explain Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NvcmUvY29tcG9uZW50cy91c2VyLWhvbWUtcGFnZS91c2VyLWhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-home-page',
          templateUrl: './user-home-page.component.html',
          styleUrls: ['./user-home-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/core/core.module.ts":
  /*!*******************************************!*\
    !*** ./ClientApp/app/core/core.module.ts ***!
    \*******************************************/

  /*! exports provided: CoreModule */

  /***/
  function ClientAppAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./ClientApp/app/core/components/home/home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./ClientApp/app/core/components/navbar/navbar.component.ts");
    /* harmony import */


    var _material_modules_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../material-modules.module */
    "./ClientApp/app/material-modules.module.ts");
    /* harmony import */


    var _components_svg_home_image_svg_home_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/svg-home-image/svg-home-image.component */
    "./ClientApp/app/core/components/svg-home-image/svg-home-image.component.ts");
    /* harmony import */


    var _shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/guards/logged.guard */
    "./ClientApp/app/shared/guards/logged.guard.ts");
    /* harmony import */


    var _components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/user-home-page/user-home-page.component */
    "./ClientApp/app/core/components/user-home-page/user-home-page.component.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedGuard"]]
      }, {
        path: "user-home-page",
        component: _components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_8__["UserHomePageComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_svg_home_image_svg_home_image_component__WEBPACK_IMPORTED_MODULE_6__["SvgHomeImageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _components_svg_home_image_svg_home_image_component__WEBPACK_IMPORTED_MODULE_6__["SvgHomeImageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: '',
            component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
          }, {
            path: 'home',
            component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
            canActivate: [_shared_guards_logged_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedGuard"]]
          }, {
            path: "user-home-page",
            component: _components_user_home_page_user_home_page_component__WEBPACK_IMPORTED_MODULE_8__["UserHomePageComponent"]
          }])],
          exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/documents/components/document-form-list/document-list.component.ts":
  /*!******************************************************************************************!*\
    !*** ./ClientApp/app/documents/components/document-form-list/document-list.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: DocumentFormListComponent */

  /***/
  function ClientAppAppDocumentsComponentsDocumentFormListDocumentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentFormListComponent", function () {
      return DocumentFormListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DocumentFormListComponent = /*#__PURE__*/function () {
      function DocumentFormListComponent() {
        _classCallCheck(this, DocumentFormListComponent);
      }

      _createClass(DocumentFormListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DocumentFormListComponent;
    }();

    DocumentFormListComponent.ɵfac = function DocumentFormListComponent_Factory(t) {
      return new (t || DocumentFormListComponent)();
    };

    DocumentFormListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentFormListComponent,
      selectors: [["app-document-form-list"]],
      decls: 48,
      vars: 0,
      consts: [["fxLayoutAlign", "center center"], ["div", "", "fxLayout", "row wrap", "fxLayout.lt-sm", "column", "fxLayoutAlign", "space-around center", 1, "container-wrapper"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "document-card"], [1, "card-header"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["mat-card-image", "", "src", "../assets/documentFormPicture.png", "alt", "Form Picture", 2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-flat-button", "", "color", "primary", "routerLink", "/form-first"], ["mat-flat-button", "", "color", "primary"]],
      template: function DocumentFormListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Forms ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Immigration Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "This is the immigration form link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Go to Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Alien Change Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "This is the immigration form link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Go to Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Application for Naturalization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "This is the immigration form link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Go to Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Application for citizen ship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "This is the immigration form link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Go to Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      styles: [".document-card[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvZG9jdW1lbnRzL2NvbXBvbmVudHMvZG9jdW1lbnQtZm9ybS1saXN0L0M6XFxVc2Vyc1xcb21hcnRpbmV6XFxEZXNrdG9wXFxMYXd5ZXJBcHBcXGxhd3llckFwcF9CYWNrRW5kL0NsaWVudEFwcFxcYXBwXFxkb2N1bWVudHNcXGNvbXBvbmVudHNcXGRvY3VtZW50LWZvcm0tbGlzdFxcZG9jdW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsIkNsaWVudEFwcC9hcHAvZG9jdW1lbnRzL2NvbXBvbmVudHMvZG9jdW1lbnQtZm9ybS1saXN0L2RvY3VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEVUE7RUFDSSw2QkFBQTtBQ1BKOztBRFVBO0VBQ0ksZ0JBQUE7QUNQSjs7QURVQTtFQUNJLGdCQUFBO0VBRUEsMEJBQUE7QUNSSiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2RvY3VtZW50cy9jb21wb25lbnRzL2RvY3VtZW50LWZvcm0tbGlzdC9kb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LWNhcmQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG5cclxuICBcclxuLy8gLmNvbnRhaW5lci13cmFwcGVyIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgLy8gbWF4LWhlaWdodDogMzUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICB9IiwiLmRvY3VtZW50LWNhcmQge1xuICBtYXJnaW46IDVweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5jb250YWluZXItd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5tYXQtY2FyZC1pbWFnZSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentFormListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-document-form-list',
          templateUrl: './document-list.component.html',
          styleUrls: ['./document-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/documents/components/first-document-form/first-document-form.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./ClientApp/app/documents/components/first-document-form/first-document-form.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: FirstDocumentFormComponent */

  /***/
  function ClientAppAppDocumentsComponentsFirstDocumentFormFirstDocumentFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstDocumentFormComponent", function () {
      return FirstDocumentFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var ClientApp_app_shared_directives_requireMatch_Validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/directives/requireMatch.Validator */
    "./ClientApp/app/shared/directives/requireMatch.Validator.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ClientApp/app/shared/services/clients.service */
    "./ClientApp/app/shared/services/clients.service.ts");
    /* harmony import */


    var ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ClientApp/app/shared/services/cases.service */
    "./ClientApp/app/shared/services/cases.service.ts");
    /* harmony import */


    var ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ClientApp/app/shared/services/document.service */
    "./ClientApp/app/shared/services/document.service.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function FirstDocumentFormComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Case Number is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FirstDocumentFormComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Type is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FirstDocumentFormComponent_mat_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var client_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", client_r6.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", client_r6.firstName, " ", client_r6.lastName, " (", client_r6.phone, ") ");
      }
    }

    function FirstDocumentFormComponent_mat_error_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Client is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FirstDocumentFormComponent_mat_error_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You have to pick a Client ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var FirstDocumentFormComponent = /*#__PURE__*/function () {
      function FirstDocumentFormComponent(fb, route, router, snackBar, clientsService, casesService, documentService) {
        _classCallCheck(this, FirstDocumentFormComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.clientsService = clientsService;
        this.casesService = casesService;
        this.documentService = documentService;
        this.title = 'CREATE NEW CASE';
        this.progressBarMode = '';
        this.clientArray = [];
      }

      _createClass(FirstDocumentFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    this.caseForm = this.fb.group({
                      caseNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      clientId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, ClientApp_app_shared_directives_requireMatch_Validator__WEBPACK_IMPORTED_MODULE_4__["RequireMatch"]]]
                    }); ///// Call api to retreive values from backend depending of user input  /////

                    this.caseForm.controls['clientId'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (inputText) {
                      return _this10.getClientListObservable(inputText || '');
                    })).subscribe(function (clientList) {
                      if (clientList.length > 0) {
                        _this10.clientArray = clientList;
                      }

                      _this10.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(clientList);
                    });
                    this.fillFormEdit(); // Fill the form if is on Edit

                  case 3:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "fillFormEdit",
        value: function fillFormEdit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var caseToEdit;
            return regeneratorRuntime.wrap(function _callee29$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    this.caseIdUrl = this.route.snapshot.paramMap.get('id');

                    if (!this.caseIdUrl) {
                      _context29.next = 8;
                      break;
                    }

                    this.title = "EDIT CASE";
                    _context29.next = 5;
                    return this.casesService.getCaseById(this.caseIdUrl);

                  case 5:
                    caseToEdit = _context29.sent;
                    this.caseForm.patchValue({
                      caseNumber: caseToEdit.caseNumber,
                      type: caseToEdit.type
                    });
                    this.setValueAutoComplete(caseToEdit.client); // Set value of form control clientId

                  case 8:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee29, this);
          }));
        } ///// AutoComplete Input /////

      }, {
        key: "getClientListObservable",
        value: function getClientListObservable(val) {
          return this.clientsService.getClientsByQueryObservable(val);
        }
      }, {
        key: "displayFn",
        value: function displayFn(clientArray) {
          return function (id) {
            var correspondingOption = Array.isArray(clientArray) ? clientArray.find(function (option) {
              return option.id === id;
            }) : null;
            return correspondingOption ? "".concat(correspondingOption.firstName, " ").concat(correspondingOption.lastName) : '';
          };
        } // Set value of Autocomplete

      }, {
        key: "setValueAutoComplete",
        value: function setValueAutoComplete(client) {
          this.clientArray.push(client);
          this.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.clientArray);
          this.caseForm.controls['clientId'].setValue(client.id);
          this.matAutocomplete.displayWith = this.displayFn(this.clientArray);
        } ///// End AutoComplete Input  /////

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    if (!this.caseForm.invalid) {
                      _context30.next = 2;
                      break;
                    }

                    return _context30.abrupt("return");

                  case 2:
                    this.progressBarMode = 'indeterminate';
                    _context30.prev = 3;

                    if (!this.caseIdUrl) {
                      _context30.next = 9;
                      break;
                    }

                    _context30.next = 7;
                    return this.casesService.updateCase(this.caseIdUrl, this.caseForm.value);

                  case 7:
                    _context30.next = 11;
                    break;

                  case 9:
                    _context30.next = 11;
                    return this.casesService.saveCase(this.caseForm.value);

                  case 11:
                    this.snackBar.open("Case ".concat(this.caseForm.get('caseNumber').value, " was successfuly saved"), 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    this.router.navigate(['/cases']);
                    _context30.next = 19;
                    break;

                  case 15:
                    _context30.prev = 15;
                    _context30.t0 = _context30["catch"](3);
                    this.snackBar.open('Something when wrong, case was not saved', 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    throw _context30.t0;

                  case 19:
                    _context30.prev = 19;
                    this.progressBarMode = '';
                    return _context30.finish(19);

                  case 22:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this, [[3, 15, 19, 22]]);
          }));
        }
      }, {
        key: "downloadFile",
        value: function downloadFile($event) {
          // $event.stopPropagation();
          // window.open('https://localhost:44375/api/document', '_blank');
          this.documentService.downloadDocument().subscribe(function (blob) {
            var a = document.createElement('a');
            var objectUrl = URL.createObjectURL(blob);
            a.href = objectUrl;
            a.download = 'immigrationForm.docx';
            a.click();
            URL.revokeObjectURL(objectUrl);
          });
        }
      }]);

      return FirstDocumentFormComponent;
    }();

    FirstDocumentFormComponent.ɵfac = function FirstDocumentFormComponent_Factory(t) {
      return new (t || FirstDocumentFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_9__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_10__["CasesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_11__["DocumentService"]));
    };

    FirstDocumentFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FirstDocumentFormComponent,
      selectors: [["app-first-document-form"]],
      viewQuery: function FirstDocumentFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.auto = _t.first);
        }
      },
      decls: 34,
      vars: 15,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], ["novalidate", "", "fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "10px", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "create-event-card"], ["fxLayoutAlign", "center center"], [2, "padding", "0px 10px 0px 10px"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap.gt-sm", "10px"], ["appearance", "outline", "fxFlex", "48", "fxFlex.xs", "100"], ["matInput", "", "placeholder", "Case number", "formControlName", "caseNumber"], [4, "ngIf"], ["matInput", "", "placeholder", "Case Type", "formControlName", "type"], ["matInput", "", "placeholder", "Pick one client", "formControlName", "clientId", 3, "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding", "0px"], ["mat-flat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [3, "value"]],
      template: function FirstDocumentFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FirstDocumentFormComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Fill Immigration Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Case Number *");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FirstDocumentFormComponent_mat_error_12_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Type *");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FirstDocumentFormComponent_mat_error_17_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-autocomplete", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FirstDocumentFormComponent_mat_option_25_Template, 2, 4, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, FirstDocumentFormComponent_mat_error_27_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, FirstDocumentFormComponent_mat_error_28_Template, 2, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-card-actions", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirstDocumentFormComponent_Template_button_click_30_listener() {
            return ctx.router.navigate(["../"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FirstDocumentFormComponent_Template_button_click_32_listener($event) {
            return ctx.downloadFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Generate Form ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.caseForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseForm.controls["caseNumber"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseForm.controls["type"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 11, ctx.filteredOptions)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 13, ctx.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseForm.controls["clientId"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseForm.controls["clientId"].hasError("incorrect"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2RvY3VtZW50cy9jb21wb25lbnRzL2ZpcnN0LWRvY3VtZW50LWZvcm0vZmlyc3QtZG9jdW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FirstDocumentFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-first-document-form',
          templateUrl: './first-document-form.component.html',
          styleUrls: ['./first-document-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }, {
          type: ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_9__["ClientsService"]
        }, {
          type: ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_10__["CasesService"]
        }, {
          type: ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_11__["DocumentService"]
        }];
      }, {
        matAutocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"]]
        }],
        auto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./ClientApp/app/lawyer/components/case-form/case-form.component.ts":
  /*!**************************************************************************!*\
    !*** ./ClientApp/app/lawyer/components/case-form/case-form.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CaseFormComponent */

  /***/
  function ClientAppAppLawyerComponentsCaseFormCaseFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaseFormComponent", function () {
      return CaseFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var ClientApp_app_shared_directives_requireMatch_Validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/directives/requireMatch.Validator */
    "./ClientApp/app/shared/directives/requireMatch.Validator.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ClientApp/app/shared/services/clients.service */
    "./ClientApp/app/shared/services/clients.service.ts");
    /* harmony import */


    var ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ClientApp/app/shared/services/cases.service */
    "./ClientApp/app/shared/services/cases.service.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function CaseFormComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Case Number is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseFormComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Type is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseFormComponent_mat_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var client_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", client_r6.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", client_r6.firstName, " ", client_r6.lastName, " (", client_r6.phone, ") ");
      }
    }

    function CaseFormComponent_mat_error_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Client is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseFormComponent_mat_error_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " You have to pick a Client ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var CaseFormComponent = /*#__PURE__*/function () {
      function CaseFormComponent(fb, route, router, snackBar, clientsService, casesService) {
        _classCallCheck(this, CaseFormComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.clientsService = clientsService;
        this.casesService = casesService;
        this.title = 'CREATE NEW CASE';
        this.progressBarMode = '';
        this.clientArray = [];
      }

      _createClass(CaseFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    this.caseForm = this.fb.group({
                      caseNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      clientId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, ClientApp_app_shared_directives_requireMatch_Validator__WEBPACK_IMPORTED_MODULE_4__["RequireMatch"]]]
                    }); ///// Call api to retreive values from backend depending of user input  /////

                    this.caseForm.controls['clientId'].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (inputText) {
                      return _this11.getClientListObservable(inputText || '');
                    })).subscribe(function (clientList) {
                      if (clientList.length > 0) {
                        _this11.clientArray = clientList;
                      }

                      _this11.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(clientList);
                    });
                    this.fillFormEdit(); // Fill the form if is on Edit

                  case 3:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "fillFormEdit",
        value: function fillFormEdit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            var caseToEdit;
            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    this.caseIdUrl = this.route.snapshot.paramMap.get('id');

                    if (!this.caseIdUrl) {
                      _context32.next = 8;
                      break;
                    }

                    this.title = "EDIT CASE";
                    _context32.next = 5;
                    return this.casesService.getCaseById(this.caseIdUrl);

                  case 5:
                    caseToEdit = _context32.sent;
                    this.caseForm.patchValue({
                      caseNumber: caseToEdit.caseNumber,
                      type: caseToEdit.type
                    });
                    this.setValueAutoComplete(caseToEdit.client); // Set value of form control clientId

                  case 8:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        } ///// AutoComplete Input /////

      }, {
        key: "getClientListObservable",
        value: function getClientListObservable(val) {
          return this.clientsService.getClientsByQueryObservable(val);
        }
      }, {
        key: "displayFn",
        value: function displayFn(clientArray) {
          return function (id) {
            var correspondingOption = Array.isArray(clientArray) ? clientArray.find(function (option) {
              return option.id === id;
            }) : null;
            return correspondingOption ? "".concat(correspondingOption.firstName, " ").concat(correspondingOption.lastName) : '';
          };
        } // Set value of Autocomplete

      }, {
        key: "setValueAutoComplete",
        value: function setValueAutoComplete(client) {
          this.clientArray.push(client);
          this.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.clientArray);
          this.caseForm.controls['clientId'].setValue(client.id);
          this.matAutocomplete.displayWith = this.displayFn(this.clientArray);
        } ///// End AutoComplete Input  /////

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    if (!this.caseForm.invalid) {
                      _context33.next = 2;
                      break;
                    }

                    return _context33.abrupt("return");

                  case 2:
                    this.progressBarMode = 'indeterminate';
                    _context33.prev = 3;

                    if (!this.caseIdUrl) {
                      _context33.next = 9;
                      break;
                    }

                    _context33.next = 7;
                    return this.casesService.updateCase(this.caseIdUrl, this.caseForm.value);

                  case 7:
                    _context33.next = 11;
                    break;

                  case 9:
                    _context33.next = 11;
                    return this.casesService.saveCase(this.caseForm.value);

                  case 11:
                    this.snackBar.open("Case ".concat(this.caseForm.get('caseNumber').value, " was successfuly saved"), 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    this.router.navigate(['/cases']);
                    _context33.next = 19;
                    break;

                  case 15:
                    _context33.prev = 15;
                    _context33.t0 = _context33["catch"](3);
                    this.snackBar.open('Something when wrong, case was not saved', 'X', {
                      duration: 20000,
                      panelClass: ['red-snackbar']
                    });
                    throw _context33.t0;

                  case 19:
                    _context33.prev = 19;
                    this.progressBarMode = '';
                    return _context33.finish(19);

                  case 22:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this, [[3, 15, 19, 22]]);
          }));
        }
      }]);

      return CaseFormComponent;
    }();

    CaseFormComponent.ɵfac = function CaseFormComponent_Factory(t) {
      return new (t || CaseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_9__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_10__["CasesService"]));
    };

    CaseFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CaseFormComponent,
      selectors: [["app-case-form"]],
      viewQuery: function CaseFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.auto = _t.first);
        }
      },
      decls: 34,
      vars: 16,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], ["novalidate", "", "fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "10px", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "create-event-card"], ["color", "primary", "fxLayoutAlign", "center center"], [2, "padding", "0px 10px 0px 10px"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap.gt-sm", "10px"], ["appearance", "outline", "fxFlex", "48", "fxFlex.xs", "100"], ["matInput", "", "placeholder", "Case number", "formControlName", "caseNumber"], [4, "ngIf"], ["matInput", "", "placeholder", "Case Type", "formControlName", "type"], ["matInput", "", "placeholder", "Pick one client", "formControlName", "clientId", 3, "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [2, "padding", "0px"], ["mat-flat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [3, "value"]],
      template: function CaseFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CaseFormComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Case Number *");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CaseFormComponent_mat_error_12_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Type *");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CaseFormComponent_mat_error_17_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-autocomplete", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CaseFormComponent_mat_option_25_Template, 2, 4, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CaseFormComponent_mat_error_27_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CaseFormComponent_mat_error_28_Template, 2, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-card-actions", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseFormComponent_Template_button_click_30_listener() {
            return ctx.router.navigate(["/cases"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.caseForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseForm.controls["caseNumber"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseForm.controls["type"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matAutocomplete", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 12, ctx.filteredOptions)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 14, ctx.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseForm.controls["clientId"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.caseForm.controls["clientId"].hasError("incorrect"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2xhd3llci9jb21wb25lbnRzL2Nhc2UtZm9ybS9jYXNlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CaseFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-case-form',
          templateUrl: './case-form.component.html',
          styleUrls: ['./case-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
        }, {
          type: ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_9__["ClientsService"]
        }, {
          type: ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_10__["CasesService"]
        }];
      }, {
        matAutocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"]]
        }],
        auto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./ClientApp/app/lawyer/components/case-list/case-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./ClientApp/app/lawyer/components/case-list/case-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CaseListComponent */

  /***/
  function ClientAppAppLawyerComponentsCaseListCaseListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CaseListComponent", function () {
      return CaseListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/components/dialog-custom/dialog-custom.component */
    "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts");
    /* harmony import */


    var ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/services/cases.service */
    "./ClientApp/app/shared/services/cases.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CaseListComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Case Number. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseListComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var case_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", case_r12.caseNumber, " ");
      }
    }

    function CaseListComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseListComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var case_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", case_r13.type, " ");
      }
    }

    function CaseListComponent_th_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Created Date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseListComponent_td_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var case_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, case_r14.createdDate), " ");
      }
    }

    function CaseListComponent_th_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Client Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseListComponent_td_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var case_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", case_r15.client.firstName, " ", case_r15.client.lastName, "");
      }
    }

    function CaseListComponent_th_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseListComponent_td_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseListComponent_td_26_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var case_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.onDelete($event, case_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CaseListComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
      }
    }

    function CaseListComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseListComponent_tr_28_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var row_r19 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.onRowClick(row_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/cases/new"];
    };

    var CaseListComponent = /*#__PURE__*/function () {
      function CaseListComponent(casesService, dialog, router) {
        _classCallCheck(this, CaseListComponent);

        this.casesService = casesService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['caseNumber', 'type', 'createdDate', 'clientName', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
      }

      _createClass(CaseListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.next = 2;
                    return this.casesService.getCaseListOfLawyer();

                  case 2:
                    this.dataSource.data = _context34.sent;

                  case 3:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onRowClick",
        value: function onRowClick(row) {
          console.log(row);
          this.router.navigate(['cases', row.id]);
        }
      }, {
        key: "onDelete",
        value: function onDelete($event, caseToDelete) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
            var _this12 = this;

            var dialogData, dialogRef;
            return regeneratorRuntime.wrap(function _callee36$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    $event.stopPropagation();
                    dialogData = new ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__["DialogData"]('Confirm Action', "Are you sure you want to delete the case number ".concat(caseToDelete.caseNumber));
                    dialogRef = this.dialog.open(ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__["DialogCustomComponent"], {
                      maxWidth: '500px',
                      data: dialogData
                    });
                    dialogRef.afterClosed().subscribe(function (dialogResult) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
                        var index;
                        return regeneratorRuntime.wrap(function _callee35$(_context35) {
                          while (1) {
                            switch (_context35.prev = _context35.next) {
                              case 0:
                                if (!dialogResult) {
                                  _context35.next = 6;
                                  break;
                                }

                                _context35.next = 3;
                                return this.casesService.deleteCaseFromLawyer(caseToDelete.id);

                              case 3:
                                index = this.dataSource.data.indexOf(caseToDelete);
                                this.dataSource.data.splice(index, 1);

                                this.dataSource._updateChangeSubscription();

                              case 6:
                              case "end":
                                return _context35.stop();
                            }
                          }
                        }, _callee35, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee36, this);
          }));
        }
      }]);

      return CaseListComponent;
    }();

    CaseListComponent.ɵfac = function CaseListComponent_Factory(t) {
      return new (t || CaseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_4__["CasesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    CaseListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CaseListComponent,
      selectors: [["app-case-list"]],
      decls: 29,
      vars: 6,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container", 2, "padding-top", "50px"], ["fxLayoutAlign", "center center", "display", "block", 2, "font-size", "19px", "color", "var(--primary)"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 2, "width", "98%"], ["mat-flat-button", "", "color", "primary", "fxFlex", "10", 3, "routerLink"], ["fxFlex", "90"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "caseNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "createdDate"], ["matColumnDef", "clientName"], ["matColumnDef", "delete"], ["mat-cell", "", "style", "cursor: pointer", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "cursor", "pointer"], [3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
      template: function CaseListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function CaseListComponent_Template_input_keyup_10_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CaseListComponent_th_13_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CaseListComponent_td_14_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CaseListComponent_th_16_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CaseListComponent_td_17_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CaseListComponent_th_19_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CaseListComponent_td_20_Template, 3, 3, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CaseListComponent_th_22_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CaseListComponent_td_23_Template, 2, 2, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CaseListComponent_th_25_Template, 3, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CaseListComponent_td_26_Template, 3, 0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CaseListComponent_tr_27_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CaseListComponent_tr_28_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbGF3eWVyL2NvbXBvbmVudHMvY2FzZS1saXN0L0M6XFxVc2Vyc1xcb21hcnRpbmV6XFxEZXNrdG9wXFxMYXd5ZXJBcHBcXGxhd3llckFwcF9CYWNrRW5kL0NsaWVudEFwcFxcYXBwXFxsYXd5ZXJcXGNvbXBvbmVudHNcXGNhc2UtbGlzdFxcY2FzZS1saXN0LmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9sYXd5ZXIvY29tcG9uZW50cy9jYXNlLWxpc3QvY2FzZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0oiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9sYXd5ZXIvY29tcG9uZW50cy9jYXNlLWxpc3QvY2FzZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgfSIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CaseListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-case-list',
          templateUrl: './case-list.component.html',
          styleUrls: ['./case-list.component.scss']
        }]
      }], function () {
        return [{
          type: ClientApp_app_shared_services_cases_service__WEBPACK_IMPORTED_MODULE_4__["CasesService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/lawyer/components/client-form/client-form.component.ts":
  /*!******************************************************************************!*\
    !*** ./ClientApp/app/lawyer/components/client-form/client-form.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ClientFormComponent */

  /***/
  function ClientAppAppLawyerComponentsClientFormClientFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientFormComponent", function () {
      return ClientFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ClientApp/app/shared/services/clients.service */
    "./ClientApp/app/shared/services/clients.service.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ClientFormComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientFormComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientFormComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Address is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientFormComponent_mat_error_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone is ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ClientFormComponent = /*#__PURE__*/function () {
      function ClientFormComponent(fb, route, router, snackBar, clientsService) {
        _classCallCheck(this, ClientFormComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.clientsService = clientsService;
        this.title = 'CREATE NEW CLIENT';
        this.progressBarMode = '';
      }

      _createClass(ClientFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clientForm = this.fb.group({
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          this.fillFormEdit();
        }
      }, {
        key: "fillFormEdit",
        value: function fillFormEdit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
            var clientToEdit;
            return regeneratorRuntime.wrap(function _callee37$(_context37) {
              while (1) {
                switch (_context37.prev = _context37.next) {
                  case 0:
                    this.clientIdUrl = this.route.snapshot.paramMap.get('id');

                    if (!this.clientIdUrl) {
                      _context37.next = 7;
                      break;
                    }

                    this.title = "EDIT CLIENT";
                    _context37.next = 5;
                    return this.clientsService.getClientById(this.clientIdUrl);

                  case 5:
                    clientToEdit = _context37.sent;
                    this.clientForm.patchValue({
                      firstName: clientToEdit.firstName,
                      lastName: clientToEdit.lastName,
                      address: clientToEdit.address,
                      phone: clientToEdit.phone
                    });

                  case 7:
                  case "end":
                    return _context37.stop();
                }
              }
            }, _callee37, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
            return regeneratorRuntime.wrap(function _callee38$(_context38) {
              while (1) {
                switch (_context38.prev = _context38.next) {
                  case 0:
                    if (!this.clientForm.invalid) {
                      _context38.next = 2;
                      break;
                    }

                    return _context38.abrupt("return");

                  case 2:
                    this.progressBarMode = 'indeterminate';
                    _context38.prev = 3;

                    if (!this.clientIdUrl) {
                      _context38.next = 10;
                      break;
                    }

                    _context38.next = 7;
                    return this.clientsService.updateClient(this.clientIdUrl, this.clientForm.value);

                  case 7:
                    this.snackBar.open("Client ".concat(this.clientForm.get('firstName').value, " ").concat(this.clientForm.get('lastName').value, " was successfuly updated"), 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });
                    _context38.next = 13;
                    break;

                  case 10:
                    _context38.next = 12;
                    return this.clientsService.saveClient(this.clientForm.value);

                  case 12:
                    this.snackBar.open("Client ".concat(this.clientForm.get('firstName').value, " ").concat(this.clientForm.get('lastName').value, " was successfuly created"), 'X', {
                      duration: 20000,
                      panelClass: ['green-snackbar']
                    });

                  case 13:
                    this.router.navigate(['/clients']);
                    _context38.next = 19;
                    break;

                  case 16:
                    _context38.prev = 16;
                    _context38.t0 = _context38["catch"](3);
                    throw _context38.t0;

                  case 19:
                    _context38.prev = 19;
                    this.progressBarMode = '';
                    return _context38.finish(19);

                  case 22:
                  case "end":
                    return _context38.stop();
                }
              }
            }, _callee38, this, [[3, 16, 19, 22]]);
          }));
        }
      }]);

      return ClientFormComponent;
    }();

    ClientFormComponent.ɵfac = function ClientFormComponent_Factory(t) {
      return new (t || ClientFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"]));
    };

    ClientFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ClientFormComponent,
      selectors: [["app-client-form"]],
      decls: 33,
      vars: 9,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], ["novalidate", "", "fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "10px", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "create-event-card"], ["color", "primary", "fxLayoutAlign", "center center"], [2, "padding", "0px 10px 0px 10px"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap.gt-sm", "10px"], ["appearance", "outline", "fxFlex", "48", "fxFlex.xs", "100"], ["matInput", "", "placeholder", "Case number", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastName"], ["matInput", "", "placeholder", "Address", "formControlName", "address"], ["matInput", "", "placeholder", "Phone", "formControlName", "phone"], [2, "padding", "0px"], ["mat-flat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"]],
      template: function ClientFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ClientFormComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "First Name *");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ClientFormComponent_mat_error_12_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Last Name *");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ClientFormComponent_mat_error_17_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Address *");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ClientFormComponent_mat_error_22_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Phone *");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ClientFormComponent_mat_error_27_Template, 4, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-card-actions", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientFormComponent_Template_button_click_29_listener() {
            return ctx.router.navigate(["/clients"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.clientForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clientForm.controls["firstName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clientForm.controls["lastName"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clientForm.controls["address"].hasError("required"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clientForm.controls["phone"].hasError("required"));
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2xhd3llci9jb21wb25lbnRzL2NsaWVudC1mb3JtL2NsaWVudC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-client-form',
          templateUrl: './client-form.component.html',
          styleUrls: ['./client-form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/lawyer/components/client-list/client-list.component.ts":
  /*!******************************************************************************!*\
    !*** ./ClientApp/app/lawyer/components/client-list/client-list.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ClientListComponent */

  /***/
  function ClientAppAppLawyerComponentsClientListClientListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientListComponent", function () {
      return ClientListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/components/dialog-custom/dialog-custom.component */
    "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts");
    /* harmony import */


    var ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/services/clients.service */
    "./ClientApp/app/shared/services/clients.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ClientListComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientListComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var client_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", client_r12.firstName, " ");
      }
    }

    function ClientListComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientListComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var client_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", client_r13.lastName, " ");
      }
    }

    function ClientListComponent_th_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientListComponent_td_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var client_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", client_r14.address, " ");
      }
    }

    function ClientListComponent_th_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientListComponent_td_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var client_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", client_r15.phone, "");
      }
    }

    function ClientListComponent_th_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientListComponent_td_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientListComponent_td_26_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var case_r16 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.onDelete($event, case_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientListComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
      }
    }

    function ClientListComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClientListComponent_tr_28_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

          var row_r19 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.onRowClick(row_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/clients/new"];
    };

    var ClientListComponent = /*#__PURE__*/function () {
      function ClientListComponent(clientsService, dialog, router) {
        _classCallCheck(this, ClientListComponent);

        this.clientsService = clientsService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['firstName', 'lastName', 'address', 'phone', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
      }

      _createClass(ClientListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
            return regeneratorRuntime.wrap(function _callee39$(_context39) {
              while (1) {
                switch (_context39.prev = _context39.next) {
                  case 0:
                    _context39.next = 2;
                    return this.clientsService.getClientListOfLawyer();

                  case 2:
                    this.dataSource.data = _context39.sent;

                  case 3:
                  case "end":
                    return _context39.stop();
                }
              }
            }, _callee39, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onRowClick",
        value: function onRowClick(row) {
          this.router.navigate(['clients', row.id]);
        }
      }, {
        key: "onDelete",
        value: function onDelete($event, clientToDelete) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
            var _this13 = this;

            var dialogData, dialogRef;
            return regeneratorRuntime.wrap(function _callee41$(_context41) {
              while (1) {
                switch (_context41.prev = _context41.next) {
                  case 0:
                    $event.stopPropagation();
                    dialogData = new ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__["DialogData"]('Confirm Action', "Are you sure you want to delete the Client ".concat(clientToDelete.firstName, " ").concat(clientToDelete.lastName));
                    dialogRef = this.dialog.open(ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__["DialogCustomComponent"], {
                      maxWidth: '500px',
                      data: dialogData
                    });
                    dialogRef.afterClosed().subscribe(function (dialogResult) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
                        var index;
                        return regeneratorRuntime.wrap(function _callee40$(_context40) {
                          while (1) {
                            switch (_context40.prev = _context40.next) {
                              case 0:
                                if (!dialogResult) {
                                  _context40.next = 7;
                                  break;
                                }

                                _context40.next = 3;
                                return this.clientsService.deleteClientFromLawyer(clientToDelete.id);

                              case 3:
                                index = this.dataSource.data.indexOf(clientToDelete);
                                console.log(index);
                                this.dataSource.data.splice(index, 1);

                                this.dataSource._updateChangeSubscription();

                              case 7:
                              case "end":
                                return _context40.stop();
                            }
                          }
                        }, _callee40, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context41.stop();
                }
              }
            }, _callee41, this);
          }));
        }
      }]);

      return ClientListComponent;
    }();

    ClientListComponent.ɵfac = function ClientListComponent_Factory(t) {
      return new (t || ClientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_4__["ClientsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    ClientListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ClientListComponent,
      selectors: [["app-client-list"]],
      decls: 29,
      vars: 6,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container", 2, "padding-top", "50px"], ["fxLayoutAlign", "center center", "display", "block", 2, "font-size", "19px", "color", "var(--primary)"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 2, "width", "98%"], ["mat-flat-button", "", "color", "primary", "fxFlex", "10", 3, "routerLink"], ["fxFlex", "90"], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "firstName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastName"], ["matColumnDef", "address"], ["matColumnDef", "phone"], ["matColumnDef", "delete"], ["mat-cell", "", "style", "cursor: pointer", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "cursor", "pointer"], [3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
      template: function ClientListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function ClientListComponent_Template_input_keyup_10_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](12, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ClientListComponent_th_13_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ClientListComponent_td_14_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ClientListComponent_th_16_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ClientListComponent_td_17_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ClientListComponent_th_19_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ClientListComponent_td_20_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](21, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ClientListComponent_th_22_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ClientListComponent_td_23_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ClientListComponent_th_25_Template, 3, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ClientListComponent_td_26_Template, 3, 0, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ClientListComponent_tr_27_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ClientListComponent_tr_28_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbGF3eWVyL2NvbXBvbmVudHMvY2xpZW50LWxpc3QvQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGxhd3llclxcY29tcG9uZW50c1xcY2xpZW50LWxpc3RcXGNsaWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9sYXd5ZXIvY29tcG9uZW50cy9jbGllbnQtbGlzdC9jbGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvbGF3eWVyL2NvbXBvbmVudHMvY2xpZW50LWxpc3QvY2xpZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxufSIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-client-list',
          templateUrl: './client-list.component.html',
          styleUrls: ['./client-list.component.scss']
        }]
      }], function () {
        return [{
          type: ClientApp_app_shared_services_clients_service__WEBPACK_IMPORTED_MODULE_4__["ClientsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/lawyer/components/document-form-fill/document-form-fill.component.ts":
  /*!********************************************************************************************!*\
    !*** ./ClientApp/app/lawyer/components/document-form-fill/document-form-fill.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: DocumentFormFillComponent */

  /***/
  function ClientAppAppLawyerComponentsDocumentFormFillDocumentFormFillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentFormFillComponent", function () {
      return DocumentFormFillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/services/document.service */
    "./ClientApp/app/shared/services/document.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = function _c0(a0, a1) {
      return {
        odd: a0,
        padding: a1
      };
    };

    function DocumentFormFillComponent_mat_form_field_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var expenseCtrl_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, i_r2 % 2 === 0, i_r2 === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Change value of ", ctx_r0.getPropertyName(expenseCtrl_r1.value), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r0.getPropertyName(expenseCtrl_r1.value));
      }
    }

    var DocumentFormFillComponent = /*#__PURE__*/function () {
      function DocumentFormFillComponent(documentService, route, snackBar) {
        _classCallCheck(this, DocumentFormFillComponent);

        this.documentService = documentService;
        this.route = route;
        this.snackBar = snackBar; // Reactive form

        this.fillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          documentVariables: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
        this.progressBarMode = '';
      }

      _createClass(DocumentFormFillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
            var documentVariables, _iterator, _step, variable;

            return regeneratorRuntime.wrap(function _callee42$(_context42) {
              while (1) {
                switch (_context42.prev = _context42.next) {
                  case 0:
                    this.documentId = this.route.snapshot.paramMap.get('id');
                    _context42.next = 3;
                    return this.documentService.getDocumentById(this.documentId);

                  case 3:
                    this.document = _context42.sent;
                    _context42.next = 6;
                    return this.documentService.getVariablesOfDocument(this.document.id);

                  case 6:
                    documentVariables = _context42.sent;
                    _iterator = _createForOfIteratorHelper(documentVariables);

                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        variable = _step.value;
                        this.createVariablesFields(variable);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }

                  case 9:
                  case "end":
                    return _context42.stop();
                }
              }
            }, _callee42, this);
          }));
        }
      }, {
        key: "createVariablesFields",
        value: function createVariablesFields(variableName) {
          var FormGroupCreated = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](_defineProperty({}, variableName, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](variableName)));
          this.fillForm.get('documentVariables').push(FormGroupCreated);
        }
      }, {
        key: "getExpenseForm",
        value: function getExpenseForm() {
          return this.fillForm.get('documentVariables').controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          if (this.fillForm.invalid) {
            return;
          }

          this.progressBarMode = 'indeterminate';
          this.documentService.fillAndDownloadDocument(this.documentId, this.fillForm.controls.documentVariables.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this14.progressBarMode = '';

            _this14.fillForm.reset();
          })).subscribe(function (httpResponse) {
            var a = document.createElement('a');
            var objectUrl = URL.createObjectURL(httpResponse.body);
            a.href = objectUrl;
            a.download = "DocumentChanged_" + _this14.document.name;
            a.click();
            URL.revokeObjectURL(objectUrl);
            _this14.progressBarMode = '';
          }, function (error) {
            _this14.snackBar.open('Something when wrong, document was not process', 'X', {
              duration: 20000,
              panelClass: ['red-snackbar']
            });
          });
        }
      }, {
        key: "getPropertyName",
        value: function getPropertyName(obj) {
          return Object.keys(obj)[0];
        }
      }]);

      return DocumentFormFillComponent;
    }();

    DocumentFormFillComponent.ɵfac = function DocumentFormFillComponent_Factory(t) {
      return new (t || DocumentFormFillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    DocumentFormFillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentFormFillComponent,
      selectors: [["app-document-form-fill"]],
      decls: 13,
      vars: 5,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "10px", 1, "container", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "create-event-card"], ["color", "primary", "fxLayoutAlign", "center center"], ["formArrayName", "documentVariables", 1, "ngFor-container", "mt-4"], [2, "padding", "0px 10px 0px 10px"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap.gt-sm", "10px"], ["appearance", "outline", "fxFlex", "24", "fxFlex.xs", "100", 3, "formGroupName", "ngClass", 4, "ngFor", "ngForOf"], [2, "padding", "0px"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["appearance", "outline", "fxFlex", "24", "fxFlex.xs", "100", 3, "formGroupName", "ngClass"], ["matInput", "", 1, "text-right", 3, "formControlName"]],
      template: function DocumentFormFillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DocumentFormFillComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fill Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DocumentFormFillComponent_mat_form_field_9_Template, 4, 7, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-actions", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Process & Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.fillForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getExpenseForm());
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2xhd3llci9jb21wb25lbnRzL2RvY3VtZW50LWZvcm0tZmlsbC9kb2N1bWVudC1mb3JtLWZpbGwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocumentFormFillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-document-form-fill',
          templateUrl: './document-form-fill.component.html',
          styleUrls: ['./document-form-fill.component.scss']
        }]
      }], function () {
        return [{
          type: ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/lawyer/components/document-list/document-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./ClientApp/app/lawyer/components/document-list/document-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DocumentListComponent */

  /***/
  function ClientAppAppLawyerComponentsDocumentListDocumentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function () {
      return DocumentListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/app/shared/components/dialog-custom/dialog-custom.component */
    "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts");
    /* harmony import */


    var ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ClientApp/app/shared/services/document.service */
    "./ClientApp/app/shared/services/document.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_pipes_fileSize_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/pipes/fileSize.pipe */
    "./ClientApp/app/shared/pipes/fileSize.pipe.ts");

    function DocumentListComponent_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var document_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", document_r14.name, " ");
      }
    }

    function DocumentListComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Date Created ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_td_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var document_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, document_r15.dateCreated, "M/d/yy, h:mm a"), " ");
      }
    }

    function DocumentListComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Size ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_td_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "filesize");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var document_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, document_r16.size), " ");
      }
    }

    function DocumentListComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "assignment");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_td_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentListComponent_td_25_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var document_r17 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.onFill($event, document_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "download");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_td_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentListComponent_td_28_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var document_r20 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.onDownload($event, document_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "download");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_td_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentListComponent_td_31_Template_mat_icon_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var document_r23 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.onDelete($event, document_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DocumentListComponent_tr_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
      }
    }

    function DocumentListComponent_tr_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentListComponent_tr_33_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

          var row_r26 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.onRowClick(row_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/document-upload"];
    };

    var DocumentListComponent = /*#__PURE__*/function () {
      function DocumentListComponent(documentService, dialog, router) {
        _classCallCheck(this, DocumentListComponent);

        this.documentService = documentService;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['name', 'dateCreated', 'size', 'fill', 'download', 'delete'];
        this.variablesOfDocument = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
      }

      _createClass(DocumentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
            return regeneratorRuntime.wrap(function _callee43$(_context43) {
              while (1) {
                switch (_context43.prev = _context43.next) {
                  case 0:
                    _context43.next = 2;
                    return this.documentService.getDocumentsListOfLawyer();

                  case 2:
                    this.dataSource.data = _context43.sent;

                  case 3:
                  case "end":
                    return _context43.stop();
                }
              }
            }, _callee43, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onRowClick",
        value: function onRowClick(row) {// this.router.navigate(['document-upload']);
        }
      }, {
        key: "onDownload",
        value: function onDownload($event, documentToDownload) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
            return regeneratorRuntime.wrap(function _callee44$(_context44) {
              while (1) {
                switch (_context44.prev = _context44.next) {
                  case 0:
                    $event.stopPropagation();
                    this.documentService.downloadDocumentById(documentToDownload.id).subscribe(function (httpResponse) {
                      var a = document.createElement('a');
                      var objectUrl = URL.createObjectURL(httpResponse.body);
                      a.href = objectUrl;
                      a.download = documentToDownload.name;
                      a.click();
                      URL.revokeObjectURL(objectUrl);
                    });

                  case 2:
                  case "end":
                    return _context44.stop();
                }
              }
            }, _callee44, this);
          }));
        }
      }, {
        key: "onDelete",
        value: function onDelete($event, documentToDelete) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
            var _this15 = this;

            var dialogData, dialogRef;
            return regeneratorRuntime.wrap(function _callee46$(_context46) {
              while (1) {
                switch (_context46.prev = _context46.next) {
                  case 0:
                    $event.stopPropagation();
                    dialogData = new ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__["DialogData"]('Confirm Action', "Are you sure you want to delete the Document ".concat(documentToDelete.name));
                    dialogRef = this.dialog.open(ClientApp_app_shared_components_dialog_custom_dialog_custom_component__WEBPACK_IMPORTED_MODULE_3__["DialogCustomComponent"], {
                      maxWidth: '500px',
                      data: dialogData
                    });
                    dialogRef.afterClosed().subscribe(function (dialogResult) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
                        var index;
                        return regeneratorRuntime.wrap(function _callee45$(_context45) {
                          while (1) {
                            switch (_context45.prev = _context45.next) {
                              case 0:
                                if (!dialogResult) {
                                  _context45.next = 6;
                                  break;
                                }

                                _context45.next = 3;
                                return this.documentService.deleteDocumentByFromUserId(documentToDelete.id);

                              case 3:
                                index = this.dataSource.data.indexOf(documentToDelete);
                                this.dataSource.data.splice(index, 1);

                                this.dataSource._updateChangeSubscription();

                              case 6:
                              case "end":
                                return _context45.stop();
                            }
                          }
                        }, _callee45, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context46.stop();
                }
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "onFill",
        value: function onFill($event, documentToFill) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
            return regeneratorRuntime.wrap(function _callee47$(_context47) {
              while (1) {
                switch (_context47.prev = _context47.next) {
                  case 0:
                    this.router.navigate(['document-form-fill/', documentToFill.id]);

                  case 1:
                  case "end":
                    return _context47.stop();
                }
              }
            }, _callee47, this);
          }));
        }
      }]);

      return DocumentListComponent;
    }();

    DocumentListComponent.ɵfac = function DocumentListComponent_Factory(t) {
      return new (t || DocumentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    DocumentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentListComponent,
      selectors: [["app-document-list"]],
      decls: 34,
      vars: 6,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container", 2, "padding-top", "50px"], ["fxLayoutAlign", "center center", "display", "block", 2, "font-size", "19px", "color", "var(--primary)"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "20px", 2, "width", "98%"], ["mat-flat-button", "", "color", "primary", "fxFlex", "10", 1, "upload-buttom", 3, "routerLink"], ["fxFlex", "90"], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dateCreated"], ["matColumnDef", "size"], ["matColumnDef", "fill"], ["mat-cell", "", "style", "cursor: pointer", 4, "matCellDef"], ["matColumnDef", "download"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "cursor", "pointer"], [3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
      template: function DocumentListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Documents");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DocumentListComponent_Template_input_keyup_12_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DocumentListComponent_th_15_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DocumentListComponent_td_16_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DocumentListComponent_th_18_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DocumentListComponent_td_19_Template, 3, 4, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DocumentListComponent_th_21_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, DocumentListComponent_td_22_Template, 3, 3, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DocumentListComponent_th_24_Template, 3, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DocumentListComponent_td_25_Template, 3, 0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](26, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DocumentListComponent_th_27_Template, 3, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DocumentListComponent_td_28_Template, 3, 0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](29, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DocumentListComponent_th_30_Template, 3, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DocumentListComponent_td_31_Template, 3, 0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DocumentListComponent_tr_32_Template, 1, 0, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DocumentListComponent_tr_33_Template, 1, 0, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _shared_pipes_fileSize_pipe__WEBPACK_IMPORTED_MODULE_14__["FileSizePipe"]],
      styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:hover {\n  background-color: #dddddd;\n}\n\n.upload-buttom[_ngcontent-%COMP%] {\n  min-width: 108px;\n  margin-right: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbGF3eWVyL2NvbXBvbmVudHMvZG9jdW1lbnQtbGlzdC9DOlxcVXNlcnNcXG9tYXJ0aW5lelxcRGVza3RvcFxcTGF3eWVyQXBwXFxsYXd5ZXJBcHBfQmFja0VuZC9DbGllbnRBcHBcXGFwcFxcbGF3eWVyXFxjb21wb25lbnRzXFxkb2N1bWVudC1saXN0XFxkb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9sYXd5ZXIvY29tcG9uZW50cy9kb2N1bWVudC1saXN0L2RvY3VtZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2xhd3llci9jb21wb25lbnRzL2RvY3VtZW50LWxpc3QvZG9jdW1lbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG59XHJcblxyXG4udXBsb2FkLWJ1dHRvbSB7XHJcbiAgbWluLXdpZHRoOiAxMDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufSIsIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi51cGxvYWQtYnV0dG9tIHtcbiAgbWluLXdpZHRoOiAxMDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocumentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-document-list',
          templateUrl: './document-list.component.html',
          styleUrls: ['./document-list.component.scss']
        }]
      }], function () {
        return [{
          type: ClientApp_app_shared_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/lawyer/components/upload-file/upload-file.component.ts":
  /*!******************************************************************************!*\
    !*** ./ClientApp/app/lawyer/components/upload-file/upload-file.component.ts ***!
    \******************************************************************************/

  /*! exports provided: UploadFileComponent */

  /***/
  function ClientAppAppLawyerComponentsUploadFileUploadFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function () {
      return UploadFileComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ClientApp/environments/environment */
    "./ClientApp/environments/environment.ts");
    /* harmony import */


    var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/document.service */
    "./ClientApp/app/shared/services/document.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = ["fileInput"];

    function UploadFileComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " File was uploaded successfully. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UploadFileComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Something went wrong file was not uploaded. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UploadFileComponent_mat_progress_bar_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 15);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r2.color)("mode", ctx_r2.mode)("value", ctx_r2.progressBarValue);
      }
    }

    function UploadFileComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFileComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.onRemoveDocument();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UploadFileComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFileComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.onUpload();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var UploadFileComponent = /*#__PURE__*/function () {
      function UploadFileComponent(documentService, snackBar, authService) {
        _classCallCheck(this, UploadFileComponent);

        this.documentService = documentService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.selectedFile = null;
        this.fileSelectedName = '';
        this.fileUploadedMessage = 'noShow';
        this.showSpinner = false; //// Prgress Bar configuration

        this.progressBarValue = 0;
        this.mode = 'determinate';
        this.color = 'primary'; /////

        this.BASE_URL = "".concat(ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "api/documents/");
      }

      _createClass(UploadFileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          this.progressBarValue = 0;
          this.fileUploadedMessage = 'noShow';
          this.selectedFile = event.target.files[0];
          this.fileSelectedName = this.selectedFile.name;
          this.showSpinner = false;
          this.fileInput.nativeElement.value = ''; // Reset File Input to allow the submittion of the same file multiple times
        }
      }, {
        key: "onUpload",
        value: function onUpload() {
          if (!this.selectedFile) {
            this.snackBar.open("You have to pick a document", 'X', {
              duration: 20000,
              panelClass: ['red-snackbar']
            });
            return;
          }

          var fd = new FormData();
          fd.append('document', this.selectedFile);
          this.uploadDocumentWithUser(fd);
        }
      }, {
        key: "uploadDocumentWithUser",
        value: function uploadDocumentWithUser(fd) {
          var _this16 = this;

          this.documentService.uploadDocument(fd).subscribe(function (event) {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
              _this16.progressBarValue = Math.round(event.loaded / event.total * 100);
            } else if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response) {
              _this16.onRemoveDocument();

              _this16.fileUploadedMessage = 'showSuccess';
            }
          }, function (error) {
            _this16.fileUploadedMessage = 'showError';
            _this16.progressBarValue = 0;
          });
        }
      }, {
        key: "onRemoveDocument",
        value: function onRemoveDocument() {
          this.fileUploadedMessage = 'noShow';
          this.progressBarValue = 0;
          this.selectedFile = null;
          this.fileSelectedName = '';
        }
      }]);

      return UploadFileComponent;
    }();

    UploadFileComponent.ɵfac = function UploadFileComponent_Factory(t) {
      return new (t || UploadFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    UploadFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UploadFileComponent,
      selectors: [["app-upload-file"]],
      viewQuery: function UploadFileComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 17,
      vars: 6,
      consts: [["fxLayout", "row", "fxLayout.lt-sm", "column", "fxFill", "", 1, "container-wrapper"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "mat-custom-authen"], ["class", "success-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "error-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "example-margin", 3, "color", "mode", "value", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mat-typography"], [2, "font-weight", "800"], ["type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "action-button", 3, "click"], [2, "margin-right", "10px"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["class", "action-button", "mat-flat-button", "", "color", "primary", "type", "button", 3, "click", 4, "ngIf"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "success-message"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "error-message"], [1, "example-margin", 3, "color", "mode", "value"], ["mat-icon-button", "", "color", "warn", 3, "click"]],
      template: function UploadFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UploadFileComponent_div_2_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UploadFileComponent_div_3_Template, 3, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UploadFileComponent_mat_progress_bar_4_Template, 1, 3, "mat-progress-bar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Upload File");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadFileComponent_Template_input_change_9_listener($event) {
            return ctx.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFileComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            _r3.click();

            return ctx.showSpinner = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Select File");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UploadFileComponent_button_15_Template, 3, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UploadFileComponent_button_16_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileUploadedMessage == "showSuccess");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileUploadedMessage == "showError");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressBarValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.fileSelectedName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileSelectedName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n  background-image: url(\"/assets/uploadBackground.svg\");\n  background-repeat: no-repeat;\n  background-position-x: left;\n  background-size: cover;\n}\n\nmat-card.custom-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\nmat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\nmat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: var(--warm);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n\n.success-message[_ngcontent-%COMP%] {\n  background-color: var(--green);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbGF3eWVyL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvQzpcXFVzZXJzXFxvbWFydGluZXpcXERlc2t0b3BcXExhd3llckFwcFxcbGF3eWVyQXBwX0JhY2tFbmQvQ2xpZW50QXBwXFxhcHBcXGxhd3llclxcY29tcG9uZW50c1xcdXBsb2FkLWZpbGVcXHVwbG9hZC1maWxlLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9sYXd5ZXIvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FETUk7RUFDRSxnQkFBQTtBQ0hOOztBREtJO0VBQ0Usc0JBQUE7QUNITjs7QURNSTtFQUNFLHFCQUFBO0FDSk47O0FEU0U7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNOSjs7QURTRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05KIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvbGF3eWVyL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91cGxvYWRCYWNrZ3JvdW5kLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgICYuY3VzdG9tLWNhcmQge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJiBoMSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuc3VjY2Vzcy1tZXNzYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy91cGxvYWRCYWNrZ3JvdW5kLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5tYXQtY2FyZC5jdXN0b20tY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG59XG5tYXQtY2FyZCAubWF0LWNhcmQtYWN0aW9ucyB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5tYXQtY2FyZCBoMSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJtKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uc3VjY2Vzcy1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-upload-file',
          templateUrl: './upload-file.component.html',
          styleUrls: ['./upload-file.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['fileInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./ClientApp/app/material-modules.module.ts":
  /*!**************************************************!*\
    !*** ./ClientApp/app/material-modules.module.ts ***!
    \**************************************************/

  /*! exports provided: MaterialModulesModule */

  /***/
  function ClientAppAppMaterialModulesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModulesModule", function () {
      return MaterialModulesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");

    var MaterialModulesModule = function MaterialModulesModule() {
      _classCallCheck(this, MaterialModulesModule);
    };

    MaterialModulesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModulesModule
    });
    MaterialModulesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModulesModule_Factory(t) {
        return new (t || MaterialModulesModule)();
      },
      imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModulesModule, {
        exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModulesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/components/clients-dropdown/clients-dropdown.component.ts":
  /*!****************************************************************************************!*\
    !*** ./ClientApp/app/shared/components/clients-dropdown/clients-dropdown.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ClientsDropdownComponent */

  /***/
  function ClientAppAppSharedComponentsClientsDropdownClientsDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsDropdownComponent", function () {
      return ClientsDropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/clients.service */
    "./ClientApp/app/shared/services/clients.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function ClientsDropdownComponent_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var team_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", team_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", team_r4, " ");
      }
    }

    function ClientsDropdownComponent_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please choose a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "team");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ClientsDropdownComponent_mat_progress_bar_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 8);
      }
    }

    var ClientsDropdownComponent = /*#__PURE__*/function (_angular_forms__WEBPA2) {
      _inherits(ClientsDropdownComponent, _angular_forms__WEBPA2);

      var _super = _createSuper(ClientsDropdownComponent);

      // tslint:disable-next-line:variable-name
      function ClientsDropdownComponent( // tslint:disable-next-line: variable-name
      _renderer, // tslint:disable-next-line: variable-name
      _elementRef, clientsService) {
        var _this17;

        _classCallCheck(this, ClientsDropdownComponent);

        _this17 = _super.call(this, _renderer, _elementRef);
        _this17.clientsService = clientsService;
        _this17.required = false;
        _this17.showProgressbar = false;
        return _this17;
      }

      _createClass(ClientsDropdownComponent, [{
        key: "compareFn",
        value: function compareFn(c1, c2) {
          return c1 && c2 ? c1 === c2 : c1 === c2;
        }
      }, {
        key: "writeValue",
        value: function writeValue(val) {
          this.value = val;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }, {
        key: "selectChange",
        value: function selectChange($event) {
          this.onTouched();
          this.onChange($event.value);
        }
      }, {
        key: "validate",
        value: function validate(control) {
          if (control) {
            if (control.hasError('required')) {
              this.required = true; // return { required: true };
            } else {
              this.required = false; // return { required: false };
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
            return regeneratorRuntime.wrap(function _callee48$(_context48) {
              while (1) {
                switch (_context48.prev = _context48.next) {
                  case 0:
                  case "end":
                    return _context48.stop();
                }
              }
            }, _callee48);
          }));
        }
      }]);

      return ClientsDropdownComponent;
    }(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]);

    ClientsDropdownComponent.ɵfac = function ClientsDropdownComponent_Factory(t) {
      return new (t || ClientsDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]));
    };

    ClientsDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ClientsDropdownComponent,
      selectors: [["app-clients-dropdown"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return ClientsDropdownComponent;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return ClientsDropdownComponent;
        }),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 7,
      consts: [["appearance", "outline", 2, "width", "100%"], ["name", "teamName", 3, "disabled", "ngModel", "compareWith", "required", "ngModelChange", "selectionChange"], ["teamName", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "position", "relative", "top", "8px", "height", "2px", "overflow", "hidden"], ["mode", "query", 4, "ngIf"], [3, "value"], ["mode", "query"]],
      template: function ClientsDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your team");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ClientsDropdownComponent_Template_mat_select_ngModelChange_3_listener($event) {
            return ctx.value = $event;
          })("selectionChange", function ClientsDropdownComponent_Template_mat_select_selectionChange_3_listener($event) {
            return ctx.selectChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ClientsDropdownComponent_mat_option_5_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ClientsDropdownComponent_mat_error_6_Template, 4, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ClientsDropdownComponent_mat_progress_bar_8_Template, 1, 0, "mat-progress-bar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.value)("compareWith", ctx.compareFn)("required", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.teams);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.errors == null ? null : _r0.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showProgressbar);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NsaWVudHMtZHJvcGRvd24vY2xpZW50cy1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientsDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-clients-dropdown',
          templateUrl: './clients-dropdown.component.html',
          styleUrls: ['./clients-dropdown.component.scss'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return ClientsDropdownComponent;
            }),
            multi: true
          }, {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return ClientsDropdownComponent;
            }),
            multi: true
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _services_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts":
  /*!**********************************************************************************!*\
    !*** ./ClientApp/app/shared/components/dialog-custom/dialog-custom.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: DialogCustomComponent, DialogData */

  /***/
  function ClientAppAppSharedComponentsDialogCustomDialogCustomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogCustomComponent", function () {
      return DialogCustomComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogData", function () {
      return DialogData;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var DialogCustomComponent = /*#__PURE__*/function () {
      function DialogCustomComponent(dialogRef, data) {
        _classCallCheck(this, DialogCustomComponent);

        this.dialogRef = dialogRef;
        this.data = data; // Update view with given values

        this.title = data.title;
        this.message = data.message;
      }

      _createClass(DialogCustomComponent, [{
        key: "onConfirm",
        value: function onConfirm() {
          // Close the dialog, return true
          this.dialogRef.close(true);
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          // Close the dialog, return false
          this.dialogRef.close(false);
        }
      }]);

      return DialogCustomComponent;
    }();

    DialogCustomComponent.ɵfac = function DialogCustomComponent_Factory(t) {
      return new (t || DialogCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    DialogCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogCustomComponent,
      selectors: [["app-dialog-custom"]],
      decls: 10,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-flat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 2, "width", "auto", 3, "click"]],
      template: function DialogCustomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogCustomComponent_Template_button_click_6_listener() {
            return ctx.onDismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogCustomComponent_Template_button_click_8_listener() {
            return ctx.onConfirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy1jdXN0b20vZGlhbG9nLWN1c3RvbS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-custom',
          templateUrl: './dialog-custom.component.html',
          styleUrls: ['./dialog-custom.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: DialogData,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();

    var DialogData = function DialogData(title, message) {
      _classCallCheck(this, DialogData);

      this.title = title;
      this.message = message;
    };
    /***/

  },

  /***/
  "./ClientApp/app/shared/components/document-form-fill-anonymous/document-form-fill-anonymous.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./ClientApp/app/shared/components/document-form-fill-anonymous/document-form-fill-anonymous.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: DocumentFormFillAnonymousComponent */

  /***/
  function ClientAppAppSharedComponentsDocumentFormFillAnonymousDocumentFormFillAnonymousComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentFormFillAnonymousComponent", function () {
      return DocumentFormFillAnonymousComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/document.service */
    "./ClientApp/app/shared/services/document.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = function _c0(a0, a1) {
      return {
        odd: a0,
        padding: a1
      };
    };

    function DocumentFormFillAnonymousComponent_div_8_mat_form_field_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Change value of ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var expenseCtrl_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, i_r3 % 2 === 0, i_r3 === 0));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getPropertyName(expenseCtrl_r2.value), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.getPropertyName(expenseCtrl_r2.value));
      }
    }

    function DocumentFormFillAnonymousComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DocumentFormFillAnonymousComponent_div_8_mat_form_field_1_Template, 6, 7, "mat-form-field", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.getExpenseForm());
      }
    }

    var DocumentFormFillAnonymousComponent = /*#__PURE__*/function () {
      function DocumentFormFillAnonymousComponent(documentService, route, snackBar, router) {
        _classCallCheck(this, DocumentFormFillAnonymousComponent);

        var _a;

        this.documentService = documentService;
        this.route = route;
        this.snackBar = snackBar;
        this.router = router; // Reactive form

        this.fillForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          documentVariables: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
        this.progressBarMode = '';
        this.documentUrlInfo = this.router.getCurrentNavigation().extras.state;
        this.documentVariables = (_a = this.documentUrlInfo) === null || _a === void 0 ? void 0 : _a.fileVariables;
      }

      _createClass(DocumentFormFillAnonymousComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
            var _iterator2, _step2, variable;

            return regeneratorRuntime.wrap(function _callee49$(_context49) {
              while (1) {
                switch (_context49.prev = _context49.next) {
                  case 0:
                    this.documentId = this.route.snapshot.paramMap.get('id'); // Load variables from api if the data is was not passed though the Url

                    if (this.documentVariables) {
                      _context49.next = 4;
                      break;
                    }

                    _context49.next = 4;
                    return this.loadVariables();

                  case 4:
                    // If documentVariables are empty go back to upload 
                    if (this.documentVariables.length <= 0) {
                      this.snackBar.open('There was no keyword found in that document, please submit a new document.', 'X', {
                        duration: 20000,
                        panelClass: ['red-snackbar']
                      });
                      this.router.navigate(['document-upload-anonymous']);
                    } // Create variables to populate in the form


                    _iterator2 = _createForOfIteratorHelper(this.documentVariables);

                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        variable = _step2.value;
                        this.createVariablesFields(variable);
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }

                  case 7:
                  case "end":
                    return _context49.stop();
                }
              }
            }, _callee49, this);
          }));
        }
      }, {
        key: "loadVariables",
        value: function loadVariables() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
            return regeneratorRuntime.wrap(function _callee50$(_context50) {
              while (1) {
                switch (_context50.prev = _context50.next) {
                  case 0:
                    _context50.next = 2;
                    return this.documentService.getDocumentByIdAnonymous(this.documentId);

                  case 2:
                    this.document = _context50.sent;
                    _context50.next = 5;
                    return this.documentService.getVariablesOfDocumentAnonymous(this.document.id);

                  case 5:
                    this.documentVariables = _context50.sent;

                  case 6:
                  case "end":
                    return _context50.stop();
                }
              }
            }, _callee50, this);
          }));
        }
      }, {
        key: "createVariablesFields",
        value: function createVariablesFields(variableName) {
          var FormGroupCreated = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](_defineProperty({}, variableName, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](variableName)));
          this.fillForm.get('documentVariables').push(FormGroupCreated);
        }
      }, {
        key: "getExpenseForm",
        value: function getExpenseForm() {
          return this.fillForm.get('documentVariables').controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this18 = this;

          if (this.fillForm.invalid) {
            return;
          }

          this.progressBarMode = 'indeterminate'; // get the document Name

          var documentName = this.documentUrlInfo ? this.documentUrlInfo.fileName : this.document.name;
          this.documentService.fillAndDownloadDocumentAnonymous(this.documentId, this.fillForm.controls.documentVariables.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this18.progressBarMode = '';

            _this18.fillForm.reset();
          })).subscribe(function (httpResponse) {
            var a = document.createElement('a');
            var objectUrl = URL.createObjectURL(httpResponse.body);
            a.href = objectUrl;
            a.download = "DocumentChanged_" + documentName;
            a.click();
            URL.revokeObjectURL(objectUrl);
          }, function (error) {
            _this18.snackBar.open('Something when wrong, document was not process', 'X', {
              duration: 20000,
              panelClass: ['red-snackbar']
            });
          });
        }
      }, {
        key: "getPropertyName",
        value: function getPropertyName(obj) {
          return Object.keys(obj)[0];
        }
      }]);

      return DocumentFormFillAnonymousComponent;
    }();

    DocumentFormFillAnonymousComponent.ɵfac = function DocumentFormFillAnonymousComponent_Factory(t) {
      return new (t || DocumentFormFillAnonymousComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    DocumentFormFillAnonymousComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentFormFillAnonymousComponent,
      selectors: [["app-document-form-fill-anonymous"]],
      decls: 12,
      vars: 5,
      consts: [["value", "0", 2, "position", "fixed", 3, "mode"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "10px", 1, "container", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "create-event-card"], ["color", "primary", "fxLayoutAlign", "center center"], ["formArrayName", "documentVariables", 1, "ngFor-container", "mt-4"], [2, "padding", "0px 10px 0px 10px"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap.gt-sm", "10px", 4, "ngIf"], [2, "padding", "0px"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "fxLayoutGap.gt-sm", "10px"], ["appearance", "outline", "fxFlex", "24", "fxFlex.xs", "100", 3, "formGroupName", "ngClass", 4, "ngFor", "ngForOf"], ["appearance", "outline", "fxFlex", "24", "fxFlex.xs", "100", 3, "formGroupName", "ngClass"], [2, "font-size", "medium"], ["matInput", "", 1, "text-right", 3, "formControlName"]],
      template: function DocumentFormFillAnonymousComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DocumentFormFillAnonymousComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-toolbar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fill Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DocumentFormFillAnonymousComponent_div_8_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-actions", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Process & Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.progressBarMode ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.progressBarMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.fillForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getExpenseForm().length);
        }
      },
      directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RvY3VtZW50LWZvcm0tZmlsbC1hbm9ueW1vdXMvZG9jdW1lbnQtZm9ybS1maWxsLWFub255bW91cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocumentFormFillAnonymousComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-document-form-fill-anonymous',
          templateUrl: './document-form-fill-anonymous.component.html',
          styleUrls: ['./document-form-fill-anonymous.component.scss']
        }]
      }], function () {
        return [{
          type: _services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/components/error-page/error-page.component.ts":
  /*!****************************************************************************!*\
    !*** ./ClientApp/app/shared/components/error-page/error-page.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function ClientAppAppSharedComponentsErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ErrorPageComponent = /*#__PURE__*/function () {
      function ErrorPageComponent(route) {
        _classCallCheck(this, ErrorPageComponent);

        this.route = route;
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.route.data.subscribe(function (data) {
            _this19.errorMessage = data.message;
          });
        }
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) {
      return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorPageComponent,
      selectors: [["app-error-page"]],
      decls: 4,
      vars: 1,
      consts: [[1, "container-sm"], ["src", "../../../assets/404.svg", "alt", "404 Error", 2, "width", "100%"]],
      template: function ErrorPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error-page',
          templateUrl: './error-page.component.html',
          styleUrls: ['./error-page.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/components/upload-file-anonymous/upload-file-anonymous.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./ClientApp/app/shared/components/upload-file-anonymous/upload-file-anonymous.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: UploadFileAnonymousComponent */

  /***/
  function ClientAppAppSharedComponentsUploadFileAnonymousUploadFileAnonymousComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFileAnonymousComponent", function () {
      return UploadFileAnonymousComponent;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ClientApp/environments/environment */
    "./ClientApp/environments/environment.ts");
    /* harmony import */


    var _services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/document.service */
    "./ClientApp/app/shared/services/document.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = ["fileInput"];

    function UploadFileAnonymousComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " File was uploaded successfully. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UploadFileAnonymousComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Something went wrong file was not uploaded. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UploadFileAnonymousComponent_mat_progress_bar_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 15);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r2.color)("mode", ctx_r2.mode)("value", ctx_r2.progressBarValue);
      }
    }

    function UploadFileAnonymousComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFileAnonymousComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.onRemoveDocument();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function UploadFileAnonymousComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFileAnonymousComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.onUpload();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var UploadFileAnonymousComponent = /*#__PURE__*/function () {
      function UploadFileAnonymousComponent(documentService, snackBar, authService, router, route) {
        _classCallCheck(this, UploadFileAnonymousComponent);

        this.documentService = documentService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.selectedFile = null;
        this.fileSelectedName = '';
        this.fileUploadedMessage = 'noShow';
        this.showSpinner = false; //// Prgress Bar configuration

        this.progressBarValue = 0;
        this.mode = 'determinate';
        this.color = 'primary'; /////

        this.BASE_URL = "".concat(ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "api/documents/");
      }

      _createClass(UploadFileAnonymousComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          this.progressBarValue = 0;
          this.fileUploadedMessage = 'noShow';

          if ( // (<File>event.target.files[0]).type != "text/plain" &&
          event.target.files[0].type != "application/msword" && event.target.files[0].type != "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            this.snackBar.open("File extensions allow (.doc, .docx)", 'X', {
              duration: 20000,
              panelClass: ['red-snackbar']
            });
            this.showSpinner = false;
            return;
          }

          this.selectedFile = event.target.files[0];
          this.fileSelectedName = this.selectedFile.name;
          this.showSpinner = false;
          this.fileInput.nativeElement.value = ''; // Reset File Input to allow the submittion of the same file multiple times
        }
      }, {
        key: "onInitialize",
        value: function onInitialize() {// When user doesn't select anything(cancel) do not shot the spinner
          // window.onfocus = this.onFileCancel;
        }
      }, {
        key: "onUpload",
        value: function onUpload() {
          if (!this.selectedFile) {
            this.snackBar.open("You have to pick a document", 'X', {
              duration: 20000,
              panelClass: ['red-snackbar']
            });
            return;
          }

          var fd = new FormData();
          fd.append('document', this.selectedFile);
          this.uploadDocumentAnonymous(fd);
        }
      }, {
        key: "uploadDocumentAnonymous",
        value: function uploadDocumentAnonymous(fd) {
          var _this20 = this;

          this.documentService.uploadDocumentAnonymous(fd).subscribe(function (event) {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
              _this20.progressBarValue = Math.round(event.loaded / event.total * 100);
            } else if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response) {
              // The Final response
              var fileIdFileVariables = JSON.parse(event.body);
              var documentRoute = '/document-form-fill-anonymous/' + fileIdFileVariables.fileId;

              _this20.router.navigate([documentRoute], {
                state: {
                  fileName: _this20.fileSelectedName,
                  fileVariables: fileIdFileVariables.fileVariables
                }
              });

              _this20.onRemoveDocument();

              _this20.fileUploadedMessage = 'showSuccess';
            }
          }, function (error) {
            _this20.fileUploadedMessage = 'showError';
            _this20.progressBarValue = 0;
          });
        }
      }, {
        key: "onRemoveDocument",
        value: function onRemoveDocument() {
          this.fileUploadedMessage = 'noShow';
          this.progressBarValue = 0;
          this.selectedFile = null;
          this.fileSelectedName = '';
        }
      }]);

      return UploadFileAnonymousComponent;
    }();

    UploadFileAnonymousComponent.ɵfac = function UploadFileAnonymousComponent_Factory(t) {
      return new (t || UploadFileAnonymousComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    UploadFileAnonymousComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UploadFileAnonymousComponent,
      selectors: [["app-upload-file-anonymous"]],
      viewQuery: function UploadFileAnonymousComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 17,
      vars: 6,
      consts: [["fxLayout", "row", "fxLayout.lt-sm", "column", "fxFill", "", 1, "container-wrapper"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "mat-custom-authen"], ["class", "success-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "error-message", "div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "example-margin", 3, "color", "mode", "value", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "mat-typography"], [2, "font-weight", "800"], ["type", "file", "accept", ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document", 2, "display", "none", 3, "change", "click"], ["fileInput", ""], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "action-button", 3, "click"], [2, "margin-right", "10px"], ["mat-icon-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["class", "action-button", "mat-flat-button", "", "color", "primary", "type", "button", 3, "click", 4, "ngIf"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "success-message"], ["div", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "error-message"], [1, "example-margin", 3, "color", "mode", "value"], ["mat-icon-button", "", "color", "warn", 3, "click"]],
      template: function UploadFileAnonymousComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UploadFileAnonymousComponent_div_2_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UploadFileAnonymousComponent_div_3_Template, 3, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UploadFileAnonymousComponent_mat_progress_bar_4_Template, 1, 3, "mat-progress-bar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Process File");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadFileAnonymousComponent_Template_input_change_9_listener($event) {
            return ctx.onFileSelected($event);
          })("click", function UploadFileAnonymousComponent_Template_input_click_9_listener() {
            return ctx.onInitialize();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadFileAnonymousComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            _r3.click();

            return ctx.showSpinner = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Select File");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UploadFileAnonymousComponent_button_15_Template, 3, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UploadFileAnonymousComponent_button_16_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileUploadedMessage == "showSuccess");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileUploadedMessage == "showError");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressBarValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.fileSelectedName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileSelectedName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 100%;\n  background-image: url(\"/assets/uploadBackground.svg\");\n  background-repeat: no-repeat;\n  background-position-x: left;\n  background-size: cover;\n}\n\nmat-card.custom-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\nmat-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\nmat-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: var(--warm);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n\n.success-message[_ngcontent-%COMP%] {\n  background-color: var(--green);\n  border-radius: 5px;\n  margin: 2px;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUtYW5vbnltb3VzL0M6XFxVc2Vyc1xcb21hcnRpbmV6XFxEZXNrdG9wXFxMYXd5ZXJBcHBcXGxhd3llckFwcF9CYWNrRW5kL0NsaWVudEFwcFxcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHVwbG9hZC1maWxlLWFub255bW91c1xcdXBsb2FkLWZpbGUtYW5vbnltb3VzLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC9zaGFyZWQvY29tcG9uZW50cy91cGxvYWQtZmlsZS1hbm9ueW1vdXMvdXBsb2FkLWZpbGUtYW5vbnltb3VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURNSTtFQUNFLGdCQUFBO0FDSE47O0FES0k7RUFDRSxzQkFBQTtBQ0hOOztBRE1JO0VBQ0UscUJBQUE7QUNKTjs7QURTRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDTkoiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9zaGFyZWQvY29tcG9uZW50cy91cGxvYWQtZmlsZS1hbm9ueW1vdXMvdXBsb2FkLWZpbGUtYW5vbnltb3VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdXBsb2FkQmFja2dyb3VuZC5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC8vICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICAmLmN1c3RvbS1jYXJkIHtcclxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgICYgaDEge1xyXG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnN1Y2Nlc3MtbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9IiwiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdXBsb2FkQmFja2dyb3VuZC5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxubWF0LWNhcmQuY3VzdG9tLWNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxubWF0LWNhcmQgaDEge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnN1Y2Nlc3MtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadFileAnonymousComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-upload-file-anonymous',
          templateUrl: './upload-file-anonymous.component.html',
          styleUrls: ['./upload-file-anonymous.component.scss']
        }]
      }], function () {
        return [{
          type: _services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['fileInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/directives/requireMatch.Validator.ts":
  /*!*******************************************************************!*\
    !*** ./ClientApp/app/shared/directives/requireMatch.Validator.ts ***!
    \*******************************************************************/

  /*! exports provided: RequireMatch, RequireMatchUser */

  /***/
  function ClientAppAppSharedDirectivesRequireMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequireMatch", function () {
      return RequireMatch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequireMatchUser", function () {
      return RequireMatchUser;
    });

    function RequireMatch(control) {
      var selection = control.value;

      if (typeof selection === 'string') {
        return {
          incorrect: true
        };
      }

      return null;
    }

    function RequireMatchUser(control) {
      var selection = control.value;
      console.log(control);
      var resultArray = selection.split(' ');

      if (resultArray.length < 2) {
        return {
          incorrect: true
        };
      }

      return null;
    } // export function RequireMatchUser(val: string): ValidatorFn {
    //     console.log("here",val);
    //     return (control: AbstractControl): ValidationErrors | null => {
    //       let inputValue: string = control.value;
    //       if(inputValue !== val) return { incorrect: true };
    //       return null;
    //     }
    //   }

    /***/

  },

  /***/
  "./ClientApp/app/shared/errors/account-confirmation-error.ts":
  /*!*******************************************************************!*\
    !*** ./ClientApp/app/shared/errors/account-confirmation-error.ts ***!
    \*******************************************************************/

  /*! exports provided: AccountConfirmationError */

  /***/
  function ClientAppAppSharedErrorsAccountConfirmationErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountConfirmationError", function () {
      return AccountConfirmationError;
    });
    /* harmony import */


    var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-error */
    "./ClientApp/app/shared/errors/app-error.ts");

    var AccountConfirmationError = /*#__PURE__*/function (_app_error__WEBPACK_I) {
      _inherits(AccountConfirmationError, _app_error__WEBPACK_I);

      var _super2 = _createSuper(AccountConfirmationError);

      function AccountConfirmationError() {
        _classCallCheck(this, AccountConfirmationError);

        return _super2.apply(this, arguments);
      }

      return AccountConfirmationError;
    }(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]);
    /***/

  },

  /***/
  "./ClientApp/app/shared/errors/app-error-handler.ts":
  /*!**********************************************************!*\
    !*** ./ClientApp/app/shared/errors/app-error-handler.ts ***!
    \**********************************************************/

  /*! exports provided: AppErrorHandler */

  /***/
  function ClientAppAppSharedErrorsAppErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function () {
      return AppErrorHandler;
    });
    /* harmony import */


    var _user_not_authenticated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-not-authenticated */
    "./ClientApp/app/shared/errors/user-not-authenticated.ts");

    var AppErrorHandler = /*#__PURE__*/function () {
      function AppErrorHandler() {
        _classCallCheck(this, AppErrorHandler);
      }

      _createClass(AppErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          // alert('An unexpected error occurred.');
          // console.log(error.status);
          // console.log(error);
          // if (error.error instanceof HttpErrorResponse) {
          //   console.log('Back end return status code:', error.status );
          // }
          // if (error.error instanceof ErrorEvent) {
          //   // client-side error
          //   const errorMessage = `Error: ${error.error.message}`;
          // }
          if (error instanceof _user_not_authenticated__WEBPACK_IMPORTED_MODULE_0__["UserNotAuthenticated"]) {
            console.log('userNotAuthenticated');
          }

          console.log(error);
        }
      }]);

      return AppErrorHandler;
    }();
    /***/

  },

  /***/
  "./ClientApp/app/shared/errors/app-error.ts":
  /*!**************************************************!*\
    !*** ./ClientApp/app/shared/errors/app-error.ts ***!
    \**************************************************/

  /*! exports provided: AppError */

  /***/
  function ClientAppAppSharedErrorsAppErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppError", function () {
      return AppError;
    });

    var AppError = /*#__PURE__*/function () {
      function AppError(originalError) {
        _classCallCheck(this, AppError);

        this.originalError = originalError;
      }

      _createClass(AppError, [{
        key: "getErrorMessage",
        value: function getErrorMessage() {
          if (this.originalError) {
            return this.originalError.error.message;
          }
        }
      }, {
        key: "getErrorListMessage",
        value: function getErrorListMessage() {
          if (this.originalError) {
            return this.originalError.error.errors;
          }
        }
      }]);

      return AppError;
    }();
    /***/

  },

  /***/
  "./ClientApp/app/shared/errors/http-error.service.ts":
  /*!***********************************************************!*\
    !*** ./ClientApp/app/shared/errors/http-error.service.ts ***!
    \***********************************************************/

  /*! exports provided: HttpErrorService */

  /***/
  function ClientAppAppSharedErrorsHttpErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorService", function () {
      return HttpErrorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var HttpErrorService = /*#__PURE__*/function () {
      function HttpErrorService(snackBar) {
        _classCallCheck(this, HttpErrorService);

        this.snackBar = snackBar;
      }

      _createClass(HttpErrorService, [{
        key: "displayError",
        value: function displayError(message) {
          this.openPopUp(message);
        }
      }, {
        key: "openPopUp",
        value: function openPopUp(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
            var defaultMessage;
            return regeneratorRuntime.wrap(function _callee51$(_context51) {
              while (1) {
                switch (_context51.prev = _context51.next) {
                  case 0:
                    defaultMessage = message ? message : 'To Access, please Login!!!';
                    this.snackBar.open(defaultMessage, 'X', {
                      duration: 10000,
                      panelClass: ['red-snackbar']
                    });

                  case 2:
                  case "end":
                    return _context51.stop();
                }
              }
            }, _callee51, this);
          }));
        }
      }]);

      return HttpErrorService;
    }();

    HttpErrorService.ɵfac = function HttpErrorService_Factory(t) {
      return new (t || HttpErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
    };

    HttpErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HttpErrorService,
      factory: HttpErrorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/errors/role-exist-error.ts":
  /*!*********************************************************!*\
    !*** ./ClientApp/app/shared/errors/role-exist-error.ts ***!
    \*********************************************************/

  /*! exports provided: RoleExitsError */

  /***/
  function ClientAppAppSharedErrorsRoleExistErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleExitsError", function () {
      return RoleExitsError;
    });
    /* harmony import */


    var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-error */
    "./ClientApp/app/shared/errors/app-error.ts");

    var RoleExitsError = /*#__PURE__*/function (_app_error__WEBPACK_I2) {
      _inherits(RoleExitsError, _app_error__WEBPACK_I2);

      var _super3 = _createSuper(RoleExitsError);

      function RoleExitsError() {
        _classCallCheck(this, RoleExitsError);

        return _super3.apply(this, arguments);
      }

      return RoleExitsError;
    }(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]);
    /***/

  },

  /***/
  "./ClientApp/app/shared/errors/user-exits-error.ts":
  /*!*********************************************************!*\
    !*** ./ClientApp/app/shared/errors/user-exits-error.ts ***!
    \*********************************************************/

  /*! exports provided: UserExitsError */

  /***/
  function ClientAppAppSharedErrorsUserExitsErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserExitsError", function () {
      return UserExitsError;
    });
    /* harmony import */


    var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-error */
    "./ClientApp/app/shared/errors/app-error.ts");

    var UserExitsError = /*#__PURE__*/function (_app_error__WEBPACK_I3) {
      _inherits(UserExitsError, _app_error__WEBPACK_I3);

      var _super4 = _createSuper(UserExitsError);

      function UserExitsError() {
        _classCallCheck(this, UserExitsError);

        return _super4.apply(this, arguments);
      }

      return UserExitsError;
    }(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]);
    /***/

  },

  /***/
  "./ClientApp/app/shared/errors/user-not-authenticated.ts":
  /*!***************************************************************!*\
    !*** ./ClientApp/app/shared/errors/user-not-authenticated.ts ***!
    \***************************************************************/

  /*! exports provided: UserNotAuthenticated */

  /***/
  function ClientAppAppSharedErrorsUserNotAuthenticatedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNotAuthenticated", function () {
      return UserNotAuthenticated;
    });
    /* harmony import */


    var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-error */
    "./ClientApp/app/shared/errors/app-error.ts");

    var UserNotAuthenticated = /*#__PURE__*/function (_app_error__WEBPACK_I4) {
      _inherits(UserNotAuthenticated, _app_error__WEBPACK_I4);

      var _super5 = _createSuper(UserNotAuthenticated);

      function UserNotAuthenticated() {
        _classCallCheck(this, UserNotAuthenticated);

        return _super5.apply(this, arguments);
      }

      return UserNotAuthenticated;
    }(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]);
    /***/

  },

  /***/
  "./ClientApp/app/shared/errors/wrong-crendential-error.ts":
  /*!****************************************************************!*\
    !*** ./ClientApp/app/shared/errors/wrong-crendential-error.ts ***!
    \****************************************************************/

  /*! exports provided: WrongCredentialError */

  /***/
  function ClientAppAppSharedErrorsWrongCrendentialErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrongCredentialError", function () {
      return WrongCredentialError;
    });
    /* harmony import */


    var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-error */
    "./ClientApp/app/shared/errors/app-error.ts");

    var WrongCredentialError = /*#__PURE__*/function (_app_error__WEBPACK_I5) {
      _inherits(WrongCredentialError, _app_error__WEBPACK_I5);

      var _super6 = _createSuper(WrongCredentialError);

      function WrongCredentialError() {
        _classCallCheck(this, WrongCredentialError);

        return _super6.apply(this, arguments);
      }

      return WrongCredentialError;
    }(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]);
    /***/

  },

  /***/
  "./ClientApp/app/shared/guards/admin.guard.ts":
  /*!****************************************************!*\
    !*** ./ClientApp/app/shared/guards/admin.guard.ts ***!
    \****************************************************/

  /*! exports provided: AdminGuard */

  /***/
  function ClientAppAppSharedGuardsAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../errors/http-error.service */
    "./ClientApp/app/shared/errors/http-error.service.ts");

    var AdminGuard = /*#__PURE__*/function () {
      function AdminGuard(authService, router, httpErrorService) {
        _classCallCheck(this, AdminGuard);

        this.authService = authService;
        this.router = router;
        this.httpErrorService = httpErrorService;
      }

      _createClass(AdminGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this21 = this;

          return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            return user && user.roles.find(function (u) {
              return u.name == 'Admin';
            }) ? true : false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (isAdmin) {
            if (!isAdmin) {
              _this21.router.navigate(['/home'], {
                queryParams: {
                  returnUrl: state.url
                }
              });

              _this21.httpErrorService.displayError('You dont have access, please login as Admin');
            }
          }));
        }
      }]);

      return AdminGuard;
    }();

    AdminGuard.ɵfac = function AdminGuard_Factory(t) {
      return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorService"]));
    };

    AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminGuard,
      factory: AdminGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/guards/auth-guard.guard.ts":
  /*!*********************************************************!*\
    !*** ./ClientApp/app/shared/guards/auth-guard.guard.ts ***!
    \*********************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function ClientAppAppSharedGuardsAuthGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../errors/http-error.service */
    "./ClientApp/app/shared/errors/http-error.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router, httpErrorService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
        this.httpErrorService = httpErrorService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this22 = this;

          return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            if (user) {
              return true;
            }

            _this22.authService.logOut();

            _this22.router.navigate(['/signin'], {
              queryParams: {
                returnUrl: state.url
              }
            });

            _this22.httpErrorService.displayError();

            return false;
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/guards/can-read-clients.guard.ts":
  /*!***************************************************************!*\
    !*** ./ClientApp/app/shared/guards/can-read-clients.guard.ts ***!
    \***************************************************************/

  /*! exports provided: CanReadClientsGuard */

  /***/
  function ClientAppAppSharedGuardsCanReadClientsGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanReadClientsGuard", function () {
      return CanReadClientsGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../errors/http-error.service */
    "./ClientApp/app/shared/errors/http-error.service.ts");

    var CanReadClientsGuard = /*#__PURE__*/function () {
      function CanReadClientsGuard(authService, router, httpErrorService) {
        _classCallCheck(this, CanReadClientsGuard);

        this.authService = authService;
        this.router = router;
        this.httpErrorService = httpErrorService;
      }

      _createClass(CanReadClientsGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this23 = this;

          return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            return _this23.authService.canReadClients(user) ? true : false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (isAdminOrLawyer) {
            if (!isAdminOrLawyer) {
              _this23.router.navigate(['/user-home-page'], {
                queryParams: {
                  returnUrl: state.url
                }
              });

              _this23.httpErrorService.displayError('You dont have access, please login as a Lawyer or Admin');
            }
          }));
        }
      }]);

      return CanReadClientsGuard;
    }();

    CanReadClientsGuard.ɵfac = function CanReadClientsGuard_Factory(t) {
      return new (t || CanReadClientsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorService"]));
    };

    CanReadClientsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanReadClientsGuard,
      factory: CanReadClientsGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanReadClientsGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/guards/logged.guard.ts":
  /*!*****************************************************!*\
    !*** ./ClientApp/app/shared/guards/logged.guard.ts ***!
    \*****************************************************/

  /*! exports provided: LoggedGuard */

  /***/
  function ClientAppAppSharedGuardsLoggedGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggedGuard", function () {
      return LoggedGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoggedGuard = /*#__PURE__*/function () {
      function LoggedGuard(authService, router) {
        _classCallCheck(this, LoggedGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(LoggedGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this24 = this;

          return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            if (!user) {
              return true;
            }

            _this24.router.navigate(['/home']);

            return false;
          }));
        }
      }]);

      return LoggedGuard;
    }();

    LoggedGuard.ɵfac = function LoggedGuard_Factory(t) {
      return new (t || LoggedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoggedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggedGuard,
      factory: LoggedGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggedGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/interceptors/token-interceptor.service.ts":
  /*!************************************************************************!*\
    !*** ./ClientApp/app/shared/interceptors/token-interceptor.service.ts ***!
    \************************************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function ClientAppAppSharedInterceptorsTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../errors/http-error.service */
    "./ClientApp/app/shared/errors/http-error.service.ts");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(injector, httpErrorService) {
        _classCallCheck(this, TokenInterceptorService);

        this.injector = injector;
        this.httpErrorService = httpErrorService;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this25 = this;

          var tokenizedReq = this.addTokenToHeader(req);
          return next.handle(tokenizedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var authService = _this25.injector.get(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]); // if (error.status === 401) {
            //   return authService.refreshToken().pipe(switchMap(() => {
            //     const newReq = this.addTokenToHeader(req);
            //     return next.handle(newReq);
            //   }));
            // }


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }, {
        key: "addTokenToHeader",
        value: function addTokenToHeader(req) {
          var token = localStorage.getItem('JWT_TOKEN');
          var tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)
          });
          return tokenizedReq;
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
      return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorService"]));
    };

    TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptorService,
      factory: TokenInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _errors_http_error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/pipes/fileSize.pipe.ts":
  /*!*****************************************************!*\
    !*** ./ClientApp/app/shared/pipes/fileSize.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: FileSizePipe */

  /***/
  function ClientAppAppSharedPipesFileSizePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSizePipe", function () {
      return FileSizePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FileSizePipe = /*#__PURE__*/function () {
      function FileSizePipe() {
        _classCallCheck(this, FileSizePipe);
      }

      _createClass(FileSizePipe, [{
        key: "transform",
        value: function transform(size) {
          console.log(size);
          return (size / (1024 * 1024)).toFixed(2) + 'MB';
        }
      }]);

      return FileSizePipe;
    }();

    FileSizePipe.ɵfac = function FileSizePipe_Factory(t) {
      return new (t || FileSizePipe)();
    };

    FileSizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filesize",
      type: FileSizePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filesize'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/services/admin.service.ts":
  /*!********************************************************!*\
    !*** ./ClientApp/app/shared/services/admin.service.ts ***!
    \********************************************************/

  /*! exports provided: AdminService */

  /***/
  function ClientAppAppSharedServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/environments/environment */
    "./ClientApp/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _errors_app_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../errors/app-error */
    "./ClientApp/app/shared/errors/app-error.ts");
    /* harmony import */


    var _errors_role_exist_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../errors/role-exist-error */
    "./ClientApp/app/shared/errors/role-exist-error.ts");
    /* harmony import */


    var _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../errors/user-exits-error */
    "./ClientApp/app/shared/errors/user-exits-error.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var AdminService = /*#__PURE__*/function () {
      function AdminService(http, route, router, snackBar) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = "".concat(ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl, "api/account/");
      }

      _createClass(AdminService, [{
        key: "getRoleList",
        value: function getRoleList() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
            var roles;
            return regeneratorRuntime.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    _context52.next = 2;
                    return this.http.get(this.BASE_URL + "roles").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_8__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    roles = _context52.sent;
                    return _context52.abrupt("return", roles);

                  case 4:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, this);
          }));
        }
      }, {
        key: "getRolesOfUser",
        value: function getRolesOfUser(userId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
            var user;
            return regeneratorRuntime.wrap(function _callee53$(_context53) {
              while (1) {
                switch (_context53.prev = _context53.next) {
                  case 0:
                    _context53.next = 2;
                    return this.http.get(this.BASE_URL + "getUser/" + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_8__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    user = _context53.sent;
                    return _context53.abrupt("return", user);

                  case 4:
                  case "end":
                    return _context53.stop();
                }
              }
            }, _callee53, this);
          }));
        }
      }, {
        key: "addRole",
        value: function addRole(role) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
            return regeneratorRuntime.wrap(function _callee54$(_context54) {
              while (1) {
                switch (_context54.prev = _context54.next) {
                  case 0:
                    _context54.next = 2;
                    return this.http.post(this.BASE_URL + 'addRole', role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    return _context54.abrupt("return", _context54.sent);

                  case 3:
                  case "end":
                    return _context54.stop();
                }
              }
            }, _callee54, this);
          }));
        }
      }, {
        key: "deleteRoleById",
        value: function deleteRoleById(roleId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
            return regeneratorRuntime.wrap(function _callee55$(_context55) {
              while (1) {
                switch (_context55.prev = _context55.next) {
                  case 0:
                    _context55.next = 2;
                    return this.http["delete"](this.BASE_URL + 'deleteRole/' + roleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    return _context55.abrupt("return", _context55.sent);

                  case 3:
                  case "end":
                    return _context55.stop();
                }
              }
            }, _callee55, this);
          }));
        }
      }, {
        key: "deleteRoleFromUser",
        value: function deleteRoleFromUser(userId, roleId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
            return regeneratorRuntime.wrap(function _callee56$(_context56) {
              while (1) {
                switch (_context56.prev = _context56.next) {
                  case 0:
                    _context56.next = 2;
                    return this.http.post(this.BASE_URL + 'deleteUserfromRole/', {
                      userId: userId,
                      roleId: roleId
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    return _context56.abrupt("return", _context56.sent);

                  case 3:
                  case "end":
                    return _context56.stop();
                }
              }
            }, _callee56, this);
          }));
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
            var users;
            return regeneratorRuntime.wrap(function _callee57$(_context57) {
              while (1) {
                switch (_context57.prev = _context57.next) {
                  case 0:
                    _context57.next = 2;
                    return this.http.get(this.BASE_URL + "users").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_8__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    users = _context57.sent;
                    return _context57.abrupt("return", users);

                  case 4:
                  case "end":
                    return _context57.stop();
                }
              }
            }, _callee57, this);
          }));
        }
      }, {
        key: "getAllUsersByQuery",
        value: function getAllUsersByQuery(userNameQuery) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromString: "query=".concat(userNameQuery)
          });
          return this.http.get(this.BASE_URL + 'getAllUsersByQuery', {
            params: params
          });
        }
      }, {
        key: "getAllRolesByQuery",
        value: function getAllRolesByQuery(roleNameQuery) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromString: "query=".concat(roleNameQuery)
          });
          return this.http.get(this.BASE_URL + 'getAllRolesByQuery', {
            params: params
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(userId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee58() {
            return regeneratorRuntime.wrap(function _callee58$(_context58) {
              while (1) {
                switch (_context58.prev = _context58.next) {
                  case 0:
                    _context58.next = 2;
                    return this.http["delete"](this.BASE_URL + 'deleteUser/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    return _context58.abrupt("return", _context58.sent);

                  case 3:
                  case "end":
                    return _context58.stop();
                }
              }
            }, _callee58, this);
          }));
        }
      }, {
        key: "getRoleById",
        value: function getRoleById(Id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee59() {
            var _this26 = this;

            var role;
            return regeneratorRuntime.wrap(function _callee59$(_context59) {
              while (1) {
                switch (_context59.prev = _context59.next) {
                  case 0:
                    _context59.next = 2;
                    return this.http.get(this.BASE_URL + "getRoleById/" + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      _this26.router.navigate(['roles']);

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    role = _context59.sent;
                    return _context59.abrupt("return", role);

                  case 4:
                  case "end":
                    return _context59.stop();
                }
              }
            }, _callee59, this);
          }));
        }
      }, {
        key: "updateRole",
        value: function updateRole(roleIdUrl, roleForm) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee60() {
            var result;
            return regeneratorRuntime.wrap(function _callee60$(_context60) {
              while (1) {
                switch (_context60.prev = _context60.next) {
                  case 0:
                    _context60.next = 2;
                    return this.http.put(this.BASE_URL + 'updateRole/' + roleIdUrl, roleForm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    result = _context60.sent;
                    return _context60.abrupt("return", result);

                  case 4:
                  case "end":
                    return _context60.stop();
                }
              }
            }, _callee60, this);
          }));
        }
      }, {
        key: "deleteUserFromRole",
        value: function deleteUserFromRole(userId, roleId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee61() {
            var result;
            return regeneratorRuntime.wrap(function _callee61$(_context61) {
              while (1) {
                switch (_context61.prev = _context61.next) {
                  case 0:
                    _context61.next = 2;
                    return this.http.post(this.BASE_URL + 'deleteUserfromRole/', {
                      userId: userId,
                      roleId: roleId
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    result = _context61.sent;
                    return _context61.abrupt("return", result);

                  case 4:
                  case "end":
                    return _context61.stop();
                }
              }
            }, _callee61, this);
          }));
        }
      }, {
        key: "addUserToRole",
        value: function addUserToRole(userId, roleId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee62() {
            var result;
            return regeneratorRuntime.wrap(function _callee62$(_context62) {
              while (1) {
                switch (_context62.prev = _context62.next) {
                  case 0:
                    _context62.next = 2;
                    return this.http.post(this.BASE_URL + 'addUserToRole/', {
                      userId: userId,
                      roleId: roleId
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_role_exist_error__WEBPACK_IMPORTED_MODULE_7__["RoleExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    result = _context62.sent;
                    return _context62.abrupt("return", result);

                  case 4:
                  case "end":
                    return _context62.stop();
                }
              }
            }, _callee62, this);
          }));
        }
      }, {
        key: "addRoleToUser",
        value: function addRoleToUser(userId, roleId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee63() {
            var result;
            return regeneratorRuntime.wrap(function _callee63$(_context63) {
              while (1) {
                switch (_context63.prev = _context63.next) {
                  case 0:
                    _context63.next = 2;
                    return this.http.post(this.BASE_URL + 'addRoleToUser/', {
                      userId: userId,
                      roleId: roleId
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_role_exist_error__WEBPACK_IMPORTED_MODULE_7__["RoleExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    result = _context63.sent;
                    return _context63.abrupt("return", result);

                  case 4:
                  case "end":
                    return _context63.stop();
                }
              }
            }, _callee63, this);
          }));
        }
      }]);

      return AdminService;
    }();

    AdminService.ɵfac = function AdminService_Factory(t) {
      return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]));
    };

    AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AdminService,
      factory: AdminService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/services/auth.service.ts":
  /*!*******************************************************!*\
    !*** ./ClientApp/app/shared/services/auth.service.ts ***!
    \*******************************************************/

  /*! exports provided: AuthService */

  /***/
  function ClientAppAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ClientApp/environments/environment */
    "./ClientApp/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _errors_account_confirmation_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../errors/account-confirmation-error */
    "./ClientApp/app/shared/errors/account-confirmation-error.ts");
    /* harmony import */


    var _errors_app_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../errors/app-error */
    "./ClientApp/app/shared/errors/app-error.ts");
    /* harmony import */


    var _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../errors/user-exits-error */
    "./ClientApp/app/shared/errors/user-exits-error.ts");
    /* harmony import */


    var _errors_wrong_crendential_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../errors/wrong-crendential-error */
    "./ClientApp/app/shared/errors/wrong-crendential-error.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, route, router, snackBar) {
        var _this27 = this;

        _classCallCheck(this, AuthService);

        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = "".concat(ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "api/account/");
        this.JWT_TOKEN = 'JWT_TOKEN';
        this.REFRESH_TOKEN = 'REFRESH_TOKEN'; // Set to Undefined to check in the Guard when refresh the page

        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.getUser().subscribe(function (user) {
          _this27.user$.next(user);
        });
      }

      _createClass(AuthService, [{
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.BASE_URL + 'getUser').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return user;
          }));
        }
      }, {
        key: "getUserById",
        value: function getUserById(userId) {
          return this.http.get(this.BASE_URL + 'getUserById/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return user;
          }));
        }
      }, {
        key: "signup",
        value: function signup(emailPassword) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee64() {
            return regeneratorRuntime.wrap(function _callee64$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    _context64.next = 2;
                    return this.http.post(this.BASE_URL + 'signup', emailPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_7__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee64, this);
          }));
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(_updateProfile) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee65() {
            return regeneratorRuntime.wrap(function _callee65$(_context65) {
              while (1) {
                switch (_context65.prev = _context65.next) {
                  case 0:
                    _context65.next = 2;
                    return this.http.put(this.BASE_URL + 'updateProfile', _updateProfile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context65.stop();
                }
              }
            }, _callee65, this);
          }));
        }
      }, {
        key: "login",
        value: function login(emailPassword) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee66() {
            var _this28 = this;

            var returnUrl;
            return regeneratorRuntime.wrap(function _callee66$(_context66) {
              while (1) {
                switch (_context66.prev = _context66.next) {
                  case 0:
                    returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/user-home-page';
                    _context66.next = 3;
                    return this.http.post(this.BASE_URL + 'signin', emailPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (token) {
                      localStorage.setItem(_this28.JWT_TOKEN, token.accessToken);
                      localStorage.setItem(_this28.REFRESH_TOKEN, token.refreshToken);

                      _this28.user$.next({
                        id: token.id,
                        firstName: token.firstName,
                        lastName: token.lastName,
                        email: token.email,
                        roles: token.roles
                      });

                      _this28.router.navigate([returnUrl]);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 401) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_wrong_crendential_error__WEBPACK_IMPORTED_MODULE_8__["WrongCredentialError"]());
                      }

                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_account_confirmation_error__WEBPACK_IMPORTED_MODULE_5__["AccountConfirmationError"]());
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 3:
                  case "end":
                    return _context66.stop();
                }
              }
            }, _callee66, this);
          }));
        }
      }, {
        key: "changePassword",
        value: function changePassword(_changePassword) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee67() {
            var _this29 = this;

            return regeneratorRuntime.wrap(function _callee67$(_context67) {
              while (1) {
                switch (_context67.prev = _context67.next) {
                  case 0:
                    _context67.next = 2;
                    return this.http.post(this.BASE_URL + 'changePassword', _changePassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
                      _this29.logOut();

                      return resp;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_7__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context67.stop();
                }
              }
            }, _callee67, this);
          }));
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee68() {
            return regeneratorRuntime.wrap(function _callee68$(_context68) {
              while (1) {
                switch (_context68.prev = _context68.next) {
                  case 0:
                    _context68.next = 2;
                    return this.http.put(this.BASE_URL + 'forgotPassword', {
                      email: email
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
                      return resp;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context68.stop();
                }
              }
            }, _callee68, this);
          }));
        } // The forgotPasswordToken is in the URL an we have to send it back to the server

      }, {
        key: "forgotPasswordToken",
        value: function forgotPasswordToken(email, password, _forgotPasswordToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee69() {
            return regeneratorRuntime.wrap(function _callee69$(_context69) {
              while (1) {
                switch (_context69.prev = _context69.next) {
                  case 0:
                    _context69.next = 2;
                    return this.http.post(this.BASE_URL + 'forgotPasswordToken', {
                      email: email,
                      password: password,
                      forgotPasswordToken: _forgotPasswordToken
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
                      return resp;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 403 || error.status === 401) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_wrong_crendential_error__WEBPACK_IMPORTED_MODULE_8__["WrongCredentialError"]());
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context69.stop();
                }
              }
            }, _callee69, this);
          }));
        }
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var _this30 = this;

          var refreshToken = localStorage.getItem(this.REFRESH_TOKEN);
          return this.http.post(this.BASE_URL + 'refresh-token', {
            refreshToken: refreshToken
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (token) {
            localStorage.setItem(_this30.JWT_TOKEN, token.accessToken);
          }));
        }
      }, {
        key: "getStoredToken",
        get: function get() {
          return localStorage.getItem(this.JWT_TOKEN);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee70() {
            return regeneratorRuntime.wrap(function _callee70$(_context70) {
              while (1) {
                switch (_context70.prev = _context70.next) {
                  case 0:
                    localStorage.removeItem(this.JWT_TOKEN);
                    localStorage.removeItem(this.REFRESH_TOKEN);
                    this.user$.next(null);
                    this.router.navigate(['signin']);

                  case 4:
                  case "end":
                    return _context70.stop();
                }
              }
            }, _callee70, this);
          }));
        } ///// Abilities and Roles Authorization /////
        ////  Assign roles to an ability method ////

      }, {
        key: "canReadClients",
        value: function canReadClients(user) {
          var allowed = ['Admin', 'Lawyer'];
          return this.checkRoleAuthorization(user, allowed);
        } // determines if user has matching role

      }, {
        key: "checkRoleAuthorization",
        value: function checkRoleAuthorization(user, allowedRoles) {
          if (!user) return false;

          var _iterator3 = _createForOfIteratorHelper(allowedRoles),
              _step3;

          try {
            var _loop = function _loop() {
              var role = _step3.value;
              if (user.roles.find(function (r) {
                return r.name == role;
              }) != undefined) return {
                v: true
              };
            };

            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _ret = _loop();

              if (typeof _ret === "object") return _ret.v;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/services/cases.service.ts":
  /*!********************************************************!*\
    !*** ./ClientApp/app/shared/services/cases.service.ts ***!
    \********************************************************/

  /*! exports provided: CasesService */

  /***/
  function ClientAppAppSharedServicesCasesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CasesService", function () {
      return CasesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ClientApp/environments/environment */
    "./ClientApp/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _errors_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../errors/app-error */
    "./ClientApp/app/shared/errors/app-error.ts");
    /* harmony import */


    var _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../errors/user-exits-error */
    "./ClientApp/app/shared/errors/user-exits-error.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var CasesService = /*#__PURE__*/function () {
      function CasesService(http, route, router, snackBar) {
        _classCallCheck(this, CasesService);

        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = "".concat(ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "api/cases/");
      }

      _createClass(CasesService, [{
        key: "getCaseListOfLawyer",
        value: function getCaseListOfLawyer() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee71() {
            var cases;
            return regeneratorRuntime.wrap(function _callee71$(_context71) {
              while (1) {
                switch (_context71.prev = _context71.next) {
                  case 0:
                    _context71.next = 2;
                    return this.http.get(this.BASE_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise();

                  case 2:
                    cases = _context71.sent;
                    return _context71.abrupt("return", cases);

                  case 4:
                  case "end":
                    return _context71.stop();
                }
              }
            }, _callee71, this);
          }));
        }
      }, {
        key: "getCaseById",
        value: function getCaseById(Id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee72() {
            var caseByID;
            return regeneratorRuntime.wrap(function _callee72$(_context72) {
              while (1) {
                switch (_context72.prev = _context72.next) {
                  case 0:
                    _context72.next = 2;
                    return this.http.get(this.BASE_URL + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise();

                  case 2:
                    caseByID = _context72.sent;
                    return _context72.abrupt("return", caseByID);

                  case 4:
                  case "end":
                    return _context72.stop();
                }
              }
            }, _callee72, this);
          }));
        }
      }, {
        key: "saveCase",
        value: function saveCase(newCase) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee73() {
            return regeneratorRuntime.wrap(function _callee73$(_context73) {
              while (1) {
                switch (_context73.prev = _context73.next) {
                  case 0:
                    _context73.next = 2;
                    return this.http.post(this.BASE_URL, newCase).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context73.stop();
                }
              }
            }, _callee73, this);
          }));
        }
      }, {
        key: "updateCase",
        value: function updateCase(caseId, editCase) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee74() {
            return regeneratorRuntime.wrap(function _callee74$(_context74) {
              while (1) {
                switch (_context74.prev = _context74.next) {
                  case 0:
                    _context74.next = 2;
                    return this.http.put(this.BASE_URL + caseId, editCase).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context74.stop();
                }
              }
            }, _callee74, this);
          }));
        }
      }, {
        key: "deleteCaseFromLawyer",
        value: function deleteCaseFromLawyer(caseId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee75() {
            return regeneratorRuntime.wrap(function _callee75$(_context75) {
              while (1) {
                switch (_context75.prev = _context75.next) {
                  case 0:
                    _context75.next = 2;
                    return this.http["delete"](this.BASE_URL + caseId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context75.stop();
                }
              }
            }, _callee75, this);
          }));
        }
      }]);

      return CasesService;
    }();

    CasesService.ɵfac = function CasesService_Factory(t) {
      return new (t || CasesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
    };

    CasesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CasesService,
      factory: CasesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CasesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/services/clients.service.ts":
  /*!**********************************************************!*\
    !*** ./ClientApp/app/shared/services/clients.service.ts ***!
    \**********************************************************/

  /*! exports provided: ClientsService */

  /***/
  function ClientAppAppSharedServicesClientsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsService", function () {
      return ClientsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ClientApp/environments/environment */
    "./ClientApp/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _errors_app_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../errors/app-error */
    "./ClientApp/app/shared/errors/app-error.ts");
    /* harmony import */


    var _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../errors/user-exits-error */
    "./ClientApp/app/shared/errors/user-exits-error.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var ClientsService = /*#__PURE__*/function () {
      function ClientsService(http, route, router, snackBar) {
        _classCallCheck(this, ClientsService);

        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = "".concat(ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl, "api/clients/");
        this.opts = [];
      } // This is for the Client autoComplete int the add new case view


      _createClass(ClientsService, [{
        key: "getClientsByQueryObservable",
        value: function getClientsByQueryObservable(clientNameQuery) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            fromString: "query=".concat(clientNameQuery)
          });
          return this.http.get(this.BASE_URL + 'getClientsByQuery', {
            params: params
          });
        }
      }, {
        key: "getClientListOfLawyer",
        value: function getClientListOfLawyer() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee76() {
            var clients;
            return regeneratorRuntime.wrap(function _callee76$(_context76) {
              while (1) {
                switch (_context76.prev = _context76.next) {
                  case 0:
                    _context76.next = 2;
                    return this.http.get(this.BASE_URL + 'getAllClientsOfaLawyer').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_7__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    clients = _context76.sent;
                    return _context76.abrupt("return", clients);

                  case 4:
                  case "end":
                    return _context76.stop();
                }
              }
            }, _callee76, this);
          }));
        }
      }, {
        key: "getClientById",
        value: function getClientById(Id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee77() {
            var client;
            return regeneratorRuntime.wrap(function _callee77$(_context77) {
              while (1) {
                switch (_context77.prev = _context77.next) {
                  case 0:
                    _context77.next = 2;
                    return this.http.get(this.BASE_URL + "getClientById/" + Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_7__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                    client = _context77.sent;
                    return _context77.abrupt("return", client);

                  case 4:
                  case "end":
                    return _context77.stop();
                }
              }
            }, _callee77, this);
          }));
        }
      }, {
        key: "saveClient",
        value: function saveClient(newClient) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee78() {
            return regeneratorRuntime.wrap(function _callee78$(_context78) {
              while (1) {
                switch (_context78.prev = _context78.next) {
                  case 0:
                    _context78.next = 2;
                    return this.http.post(this.BASE_URL + 'saveClient', newClient).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_7__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context78.stop();
                }
              }
            }, _callee78, this);
          }));
        }
      }, {
        key: "updateClient",
        value: function updateClient(clientIdUrl, clientForm) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee79() {
            return regeneratorRuntime.wrap(function _callee79$(_context79) {
              while (1) {
                switch (_context79.prev = _context79.next) {
                  case 0:
                    _context79.next = 2;
                    return this.http.put(this.BASE_URL + 'updateClient/' + clientIdUrl, clientForm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_7__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context79.stop();
                }
              }
            }, _callee79, this);
          }));
        }
      }, {
        key: "deleteClientFromLawyer",
        value: function deleteClientFromLawyer(clientId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee80() {
            return regeneratorRuntime.wrap(function _callee80$(_context80) {
              while (1) {
                switch (_context80.prev = _context80.next) {
                  case 0:
                    _context80.next = 2;
                    return this.http["delete"](this.BASE_URL + 'delete/' + clientId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
                    })).toPromise();

                  case 2:
                  case "end":
                    return _context80.stop();
                }
              }
            }, _callee80, this);
          }));
        }
      }]);

      return ClientsService;
    }();

    ClientsService.ɵfac = function ClientsService_Factory(t) {
      return new (t || ClientsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
    };

    ClientsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ClientsService,
      factory: ClientsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClientsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/services/document.service.ts":
  /*!***********************************************************!*\
    !*** ./ClientApp/app/shared/services/document.service.ts ***!
    \***********************************************************/

  /*! exports provided: DocumentService */

  /***/
  function ClientAppAppSharedServicesDocumentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
      return DocumentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ClientApp/environments/environment */
    "./ClientApp/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _errors_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../errors/app-error */
    "./ClientApp/app/shared/errors/app-error.ts");
    /* harmony import */


    var _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../errors/user-exits-error */
    "./ClientApp/app/shared/errors/user-exits-error.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var DocumentService = /*#__PURE__*/function () {
      function DocumentService(http, route, router, snackBar) {
        _classCallCheck(this, DocumentService);

        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.BASE_URL = "".concat(ClientApp_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl, "api/documents/");
      }

      _createClass(DocumentService, [{
        key: "downloadDocument",
        value: function downloadDocument() {
          return this.http.get(this.BASE_URL, {
            responseType: 'blob'
          });
        }
      }, {
        key: "uploadDocument",
        value: function uploadDocument(fd) {
          return this.http.post(this.BASE_URL, fd, {
            responseType: 'text',
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "uploadDocumentAnonymous",
        value: function uploadDocumentAnonymous(fd) {
          return this.http.post(this.BASE_URL + "uploadFileAnonymous", fd, {
            responseType: 'text',
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "getDocumentsListOfLawyer",
        value: function getDocumentsListOfLawyer() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee81() {
            var documents;
            return regeneratorRuntime.wrap(function _callee81$(_context81) {
              while (1) {
                switch (_context81.prev = _context81.next) {
                  case 0:
                    _context81.next = 2;
                    return this.http.get(this.BASE_URL + 'getAllDocumentsOfLawyer').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise();

                  case 2:
                    documents = _context81.sent;
                    return _context81.abrupt("return", documents);

                  case 4:
                  case "end":
                    return _context81.stop();
                }
              }
            }, _callee81, this);
          }));
        }
      }, {
        key: "getDocumentById",
        value: function getDocumentById(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee82() {
            var document;
            return regeneratorRuntime.wrap(function _callee82$(_context82) {
              while (1) {
                switch (_context82.prev = _context82.next) {
                  case 0:
                    _context82.next = 2;
                    return this.http.get(this.BASE_URL + 'getDocumentInfoById/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise();

                  case 2:
                    document = _context82.sent;
                    return _context82.abrupt("return", document);

                  case 4:
                  case "end":
                    return _context82.stop();
                }
              }
            }, _callee82, this);
          }));
        }
      }, {
        key: "getDocumentByIdAnonymous",
        value: function getDocumentByIdAnonymous(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee83() {
            var document;
            return regeneratorRuntime.wrap(function _callee83$(_context83) {
              while (1) {
                switch (_context83.prev = _context83.next) {
                  case 0:
                    _context83.next = 2;
                    return this.http.get(this.BASE_URL + 'getDocumentInfoByIdAnonymous/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise();

                  case 2:
                    document = _context83.sent;
                    return _context83.abrupt("return", document);

                  case 4:
                  case "end":
                    return _context83.stop();
                }
              }
            }, _callee83, this);
          }));
        }
      }, {
        key: "downloadDocumentById",
        value: function downloadDocumentById(Id) {
          var document = this.http.get(this.BASE_URL + 'GetDocumentById/' + Id, {
            responseType: 'blob',
            observe: 'response' // Add the headers to the response

          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.status === 400) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }));
          return document;
        }
      }, {
        key: "deleteDocumentByFromUserId",
        value: function deleteDocumentByFromUserId(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee84() {
            return regeneratorRuntime.wrap(function _callee84$(_context84) {
              while (1) {
                switch (_context84.prev = _context84.next) {
                  case 0:
                    return _context84.abrupt("return", this.http["delete"](this.BASE_URL + 'delete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                      if (error.status === 400) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
                      }

                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
                    })).toPromise());

                  case 1:
                  case "end":
                    return _context84.stop();
                }
              }
            }, _callee84, this);
          }));
        }
      }, {
        key: "getVariablesOfDocument",
        value: function getVariablesOfDocument(documentId) {
          return this.http.get(this.BASE_URL + 'getVariablesOfDocument/' + documentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.status === 400) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          })).toPromise();
        }
      }, {
        key: "getVariablesOfDocumentAnonymous",
        value: function getVariablesOfDocumentAnonymous(documentId) {
          return this.http.get(this.BASE_URL + 'getVariablesOfDocumentAnonymous/' + documentId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.status === 400) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_user_exits_error__WEBPACK_IMPORTED_MODULE_6__["UserExitsError"](error));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          })).toPromise();
        }
      }, {
        key: "fillAndDownloadDocument",
        value: function fillAndDownloadDocument(documentId, variablesList) {
          var document = this.http.post(this.BASE_URL + 'fillAndDownloadDocument/' + documentId, variablesList, {
            responseType: 'blob',
            observe: 'response' // Add the headers to the response

          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }));
          return document;
        }
      }, {
        key: "fillAndDownloadDocumentAnonymous",
        value: function fillAndDownloadDocumentAnonymous(documentId, variablesList) {
          var document = this.http.post(this.BASE_URL + 'fillAndDownloadDocumentAnonymous/' + documentId, variablesList, {
            responseType: 'blob',
            observe: 'response' // Add the headers to the response

          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _errors_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
          }));
          return document;
        }
      }]);

      return DocumentService;
    }();

    DocumentService.ɵfac = function DocumentService_Factory(t) {
      return new (t || DocumentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
    };

    DocumentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DocumentService,
      factory: DocumentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DocumentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/services/shared.service.ts":
  /*!*********************************************************!*\
    !*** ./ClientApp/app/shared/services/shared.service.ts ***!
    \*********************************************************/

  /*! exports provided: SharedService */

  /***/
  function ClientAppAppSharedServicesSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SharedService = function SharedService() {
      _classCallCheck(this, SharedService);

      this.isUrlHome$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    };

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)();
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/app/shared/shared.module.ts":
  /*!***********************************************!*\
    !*** ./ClientApp/app/shared/shared.module.ts ***!
    \***********************************************/

  /*! exports provided: SharedModule */

  /***/
  function ClientAppAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/error-page/error-page.component */
    "./ClientApp/app/shared/components/error-page/error-page.component.ts");
    /* harmony import */


    var _errors_app_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./errors/app-error-handler */
    "./ClientApp/app/shared/errors/app-error-handler.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/auth.service */
    "./ClientApp/app/shared/services/auth.service.ts");
    /* harmony import */


    var _interceptors_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./interceptors/token-interceptor.service */
    "./ClientApp/app/shared/interceptors/token-interceptor.service.ts");
    /* harmony import */


    var _lawyer_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../lawyer/components/upload-file/upload-file.component */
    "./ClientApp/app/lawyer/components/upload-file/upload-file.component.ts");
    /* harmony import */


    var _material_modules_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../material-modules.module */
    "./ClientApp/app/material-modules.module.ts");
    /* harmony import */


    var _pipes_fileSize_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pipes/fileSize.pipe */
    "./ClientApp/app/shared/pipes/fileSize.pipe.ts"); // import { AuthGuard } from './services/auth-guard.service';


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [// AuthGuard,
      _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
        useClass: _errors_app_error_handler__WEBPACK_IMPORTED_MODULE_5__["AppErrorHandler"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
        multi: true
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModulesModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"], _lawyer_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["UploadFileComponent"], _pipes_fileSize_pipe__WEBPACK_IMPORTED_MODULE_10__["FileSizePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModulesModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"], _pipes_fileSize_pipe__WEBPACK_IMPORTED_MODULE_10__["FileSizePipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"], _lawyer_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_8__["UploadFileComponent"], _pipes_fileSize_pipe__WEBPACK_IMPORTED_MODULE_10__["FileSizePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _material_modules_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModulesModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__["ErrorPageComponent"], _pipes_fileSize_pipe__WEBPACK_IMPORTED_MODULE_10__["FileSizePipe"]],
          providers: [// AuthGuard,
          _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
            useClass: _errors_app_error_handler__WEBPACK_IMPORTED_MODULE_5__["AppErrorHandler"]
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./ClientApp/environments/environment.ts":
  /*!***********************************************!*\
    !*** ./ClientApp/environments/environment.ts ***!
    \***********************************************/

  /*! exports provided: environment */

  /***/
  function ClientAppEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'https://localhost:44375/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./ClientApp/main.ts":
  /*!***************************!*\
    !*** ./ClientApp/main.ts ***!
    \***************************/

  /*! no exports provided */

  /***/
  function ClientAppMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./ClientApp/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./ClientApp/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!*********************************!*\
    !*** multi ./ClientApp/main.ts ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\omartinez\Desktop\LawyerApp\lawyerApp_BackEnd\ClientApp\main.ts */
    "./ClientApp/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map