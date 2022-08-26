webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation-->\n<nav class=\"navbar navbar-expand-lg navbar-light\" id=\"mainNav\">\n  <div class=\"container px-4 px-lg-5\">\n      <a class=\"navbar-brand\" href=\"index.html\">Plots Stadium </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          Menu\n          <i class=\"fas fa-bars\"></i>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n          <ul class=\"navbar-nav ms-auto py-4 py-lg-0\">\n              <li class=\"nav-item\"><a class=\"nav-link px-lg-3 py-3 py-lg-4\" href=\"index.html\">Home</a></li>\n              <li class=\"nav-item\"><a class=\"nav-link px-lg-3 py-3 py-lg-4\" href=\"about.html\">About</a></li>              \n              <li class=\"nav-item\"><a class=\"nav-link px-lg-3 py-3 py-lg-4\" href=\"contact.html\">Contact</a></li>\n          </ul>\n      </div>\n  </div>\n</nav>\n<!-- Page Header-->\n<header class=\"masthead\" style=\"background-image: url('assets/bg.jpg')\">\n  <div class=\"container position-relative px-4 px-lg-5\">\n      <div class=\"row gx-4 gx-lg-5 justify-content-center\">\n          <div class=\"col-md-10 col-lg-8 col-xl-7\">\n              <div class=\"site-heading\">\n                  <h1>Buy / Sell</h1>\n                  <span class=\"subheading\">A platform to buy or sell the properties in Anantapur District.</span>\n              </div>\n          </div>\n      </div>\n  </div>\n</header>\n<!-- Main Content-->\n<div class=\"container px-4 px-lg-5\">\n  <div class=\"row gx-4 gx-lg-5 justify-content-center\">\n      <div class=\"col-md-10 col-lg-8 col-xl-7\">\n          <!-- Post preview-->\n          <div class=\"post-preview\" *ngFor=\"let ad of ads\">\n            <div *ngIf=\"ad.propertyType === 'Plot'\">\n              <div class=\"row\">\n                <div class=\"col-md-5 col-lg-5 col-xl-5\">\n                  <img src=\"assets/plot.jpg\">\n                </div>\n                <div class=\"col-md-7 col-lg-7 col-xl-7\">\n                  <table style=\"margin-left: 15px;\">\n                    <tr>\n                      <td>Property Type:</td>\n                      <td>{{ad.propertyType}}</td>\n                    </tr>\n                    <tr>\n                      <td>Cents:</td>\n                      <td>{{ad.cents}}</td>\n                    </tr>\n                    <tr>\n                      <td>Cost per cent:</td>\n                      <td>{{ad.cost}}</td>\n                    </tr>\n                    <tr>\n                      <td>Address:</td>\n                      <td>{{ad.address}}</td>\n                    </tr>\n                    <tr>\n                      <td>Landmark:</td>\n                      <td>{{ad.landmark}}</td>\n                    </tr>\n                    <tr>\n                      <td>Contact:</td>\n                      <td>{{ad.contact}}</td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n              <hr class=\"my-4\" />\n            </div> \n            <div *ngIf=\"ad.propertyType === 'Apartment'\">\n              <div class=\"row\">\n                <div class=\"col-md-5 col-lg-5 col-xl-5\">\n                  <img src=\"assets/apart.jpg\">\n                </div>\n                <div class=\"col-md-7 col-lg-7 col-xl-7\">\n                  <table style=\"margin-left: 15px;\">\n                    <tr>\n                      <td>Property Type:</td>\n                      <td>{{ad.propertyType}}</td>\n                    </tr>\n                    <tr>\n                      <td>Sft:</td>\n                      <td>{{ad.sft}}</td>\n                    </tr>\n                    <tr>\n                      <td>Cost per Sft:</td>\n                      <td>{{ad.costPerSft}}</td>\n                    </tr>\n                    <tr>\n                      <td>Address:</td>\n                      <td>{{ad.address}}</td>\n                    </tr>\n                    <tr>\n                      <td>Landmark:</td>\n                      <td>{{ad.landmark}}</td>\n                    </tr>\n                    <tr>\n                      <td>Contact:</td>\n                      <td>{{ad.contact}}</td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n              <hr class=\"my-4\" />\n            </div>  \n            <div *ngIf=\"ad.propertyType === 'Land'\">\n              <div class=\"row\">\n                <div class=\"col-md-5 col-lg-5 col-xl-5\">\n                  <img src=\"assets/land.jpg\">\n                </div>\n                <div class=\"col-md-7 col-lg-7 col-xl-7\">\n                  <table style=\"margin-left: 15px;\">\n                    <tr>\n                      <td>Property Type:</td>\n                      <td>{{ad.propertyType}}</td>\n                    </tr>\n                    <tr>\n                      <td>Acers:</td>\n                      <td>{{ad.acers}}</td>\n                    </tr>\n                    <tr>\n                      <td>Cost per acer:</td>\n                      <td>{{ad.costPerAcer}}</td>\n                    </tr>\n                    <tr>\n                      <td>Address:</td>\n                      <td>{{ad.address}}</td>\n                    </tr>\n                    <tr>\n                      <td>Landmark:</td>\n                      <td>{{ad.landmark}}</td>\n                    </tr>\n                    <tr>\n                      <td>Contact:</td>\n                      <td>{{ad.contact}}</td>\n                    </tr>\n                  </table>\n                </div>\n              </div>\n              <hr class=\"my-4\" />\n            </div>             \n          </div>\n          <!-- Divider-->\n          \n          <!-- Post preview-->\n          <!-- <div class=\"post-preview\">\n              <a href=\"post.html\"><h2 class=\"post-title\">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2></a>\n              <p class=\"post-meta\">\n                  Posted by\n                  <a href=\"#!\">Start Bootstrap</a>\n                  on September 18, 2022\n              </p>\n          </div> -->\n          <!-- Divider-->          \n          \n      </div>\n  </div>\n</div>\n<!-- Footer-->\n<footer class=\"border-top\">\n  <div class=\"container px-4 px-lg-5\">\n      <div class=\"row gx-4 gx-lg-5 justify-content-center\">\n          <div class=\"col-md-10 col-lg-8 col-xl-7\">\n              <ul class=\"list-inline text-center\">\n                  <li class=\"list-inline-item\">\n                      <a href=\"#!\">\n                          <span class=\"fa-stack fa-lg\">\n                              <i class=\"fas fa-circle fa-stack-2x\"></i>\n                              <i class=\"fab fa-twitter fa-stack-1x fa-inverse\"></i>\n                          </span>\n                      </a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                      <a href=\"#!\">\n                          <span class=\"fa-stack fa-lg\">\n                              <i class=\"fas fa-circle fa-stack-2x\"></i>\n                              <i class=\"fab fa-facebook-f fa-stack-1x fa-inverse\"></i>\n                          </span>\n                      </a>\n                  </li>\n                  <li class=\"list-inline-item\">\n                      <a href=\"#!\">\n                          <span class=\"fa-stack fa-lg\">\n                              <i class=\"fas fa-circle fa-stack-2x\"></i>\n                              <i class=\"fab fa-github fa-stack-1x fa-inverse\"></i>\n                          </span>\n                      </a>\n                  </li>\n              </ul>\n              <div class=\"small text-center text-muted fst-italic\">Copyright &copy; plotsstaduim.github.io 2022</div>\n          </div>\n      </div>\n  </div>\n</footer>\n<!-- Bootstrap core JS-->\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\"></script>\n<!-- Core theme JS-->\n<script src=\"js/scripts.js\"></script>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_ads_json__ = __webpack_require__("./src/assets/ads.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_ads_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_ads_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        var vv = __WEBPACK_IMPORTED_MODULE_1__assets_ads_json__;
        var jj = JSON.stringify(vv);
        this.ads = JSON.parse(jj);
        //console.log(jj);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/assets/ads.json":
/***/ (function(module, exports) {

module.exports = [{"id":501,"address":"Venugopal Nagar","landmark":"Near RTC Bus Stand","propertyType":"Plot","cents":3,"cost":1000000,"contact":"8886772192"},{"id":502,"address":"Ram Nagar","landmark":"Near Bangalore Highway","propertyType":"Apartment","sft":1300,"costPerSft":4000,"totalCost":4500000,"contact":"8886772192"},{"id":503,"address":"Bye Pass Rayadurgam","landmark":"Highway","propertyType":"Land","acers":3,"costPerAcer":1000000,"contact":"8886772192"}]

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map