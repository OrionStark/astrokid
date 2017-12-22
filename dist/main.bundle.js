webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/aboutus-page/aboutus-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Merriweather);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,300);", ""]);

// module
exports.push([module.i, "nav {\n    /*background: rgba(255, 255, 255, 0);*/\n    background: rgba(255, 255, 255, 0);\n    margin: 0;\n    border: none;\n    padding: 10px;\n    /*box-shadow: 0px 0px 8px 0px #000000;*/\n}\n.myNav a{\n    color: #ffffff;\n    font-family: 'Saira', sans-serif;\n    display: block;\n    transition: all 0.4s;\n}\n.myNav a {\n    background: #00778c;\n}\n.myNav a:hover {\n    color: #00778c;\n    background: white;\n    border-bottom: 1px solid #00778c;\n}\n.navbar-brand {\n    font-size: 45px;\n    color: rgb(255, 255, 255);\n    font-family: 'Lato', sans-serif;\n}\n.navbar-brand:hover {\n    color: #FF4E50;\n}\n.navbar-brand h4 {\n    color: #018c82;\n}\nnav ul li {\n    font-family: 'Lato', sans-serif;\n    color: white;\n    font-size: 20px;\n}\n.jumbotron {\n    margin-bottom: 0;\n}\n.section1 {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/space.jpg") + ") no-repeat center;\n    background-size: cover;\n    padding: 20px;\n    height: 100vh;\n    text-align: center;\n    font-family: 'Saira', sans-serif;\n    color: white;\n}\n.section1 .container {\n    margin-top: 20vh;\n}\n.section1:after{\n    background:rgba(0, 0, 0, 0.75);\n}\n.section2 {\n    background: rgb(240, 239, 235);\n    font-family: 'Lato', sans-serif;\n    padding: 60px;\n}\n.section2 h1 {\n    color: rgb(7, 23, 41);\n    font-family: 'Lato', sans-serif;\n}\n.section2 .col-md-6 {\n    padding: 10px;\n    text-align: justify;\n    font-family: 'Lato', sans-serif;\n}\n.section2 img {\n    width: 400px;\n    height: auto;\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n.section3 {\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + __webpack_require__("../../../../../src/assets/img/materialImage/city.jpg") + ") no-repeat center;\n    background-size: cover;\n    text-align: center;\n    color: white;\n}\n.quote_head {\n    color: white;\n    font-size: 40px;\n    text-align: center;\n}\n.team_icon {\n    width: 40;\n    height: auto;\n    -webkit-filter: invert(100%);\n            filter: invert(100%);\n}\n.icon_us {\n    margin: 0 auto;\n    width: 55px;\n    height: auto;\n}\n.section4 h1 {\n    text-align: center;\n    font-size: 40px;\n}\n.section4 hr {\n    width: 20%;\n    border: 1px solid rgb(107, 107, 107);\n}\n.row h2 {\n    font-size: 14px;\n    text-align: center;\n}\n.section4 .row {\n    margin: 0 auto;\n    border-right: 1px solid rgb(150, 150, 150);\n    border-left: 1px solid rgb(150, 150, 150);\n}\n.section4 .row .col-md-2 {\n    margin: 0 auto;\n}\n.section5 {\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + __webpack_require__("../../../../../src/assets/img/materialImage/history.jpg") + ") no-repeat center;\n    background-size: cover;\n    text-align: left;\n    color: white;\n}\n.section5 h2 {\n    font-size: 48px;\n    font-family: 'Saira', sans-serif;\n    color: white;\n}\n.section6 .row .container {\n    padding: 20px;\n}\n.myCard {\n    width: 100%;\n    height: 400px;\n    background: white;\n    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);\n    border-radius: 7px;\n    max-width: 370px;\n    margin: 0 auto;\n    transition: all 0.4s ease-out;\n}\n.myCard:hover {\n    box-shadow: 0 3px 30px 0 rgba(0,0,0,0.3);\n}\n.headCard {\n    width: 100%;\n    height: 40%;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/welcome_background.jpg") + ") no-repeat;\n    background-size: cover;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n}\n.bodyCard {\n    width: 100%;\n    height: 50%;\n    text-align: center;\n    font-family: 'Saira', sans-serif;\n    padding: 10px;\n}\n.photoBox {\n    width: 130px;\n    height: 130px;\n    background: black;\n    border-radius: 100px;\n    margin: 0 auto;\n    margin-top: -80px;\n    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);\n}\n.myCard p {\n    font-size: 14px;\n    text-align: justify;\n}\n.footerCard {\n    width: 100%;\n    height: 10%;\n}\n.icon_container {\n    width: 110px;\n    height: 100%;\n    margin: 0 auto;\n}\n.icon_container i {\n    width: 25px;\n    height: 25px;\n    text-align: center;\n    line-height: 25px;\n    transition: all 0.4s ease-in;\n}\n.icon_container i:hover {\n    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);\n    cursor: pointer;\n}\n.fa-facebook:hover {\n    background: rgb(0, 87, 145);\n    color: white;\n}\n.fa-whatsapp:hover {\n    color: rgb(5, 91, 29);\n}\n.fa-instagram:hover {\n    background: #bc2a8d;\n    color: white;\n}\n.fa-linkedin:hover {\n    background: rgb(184, 14, 14);\n    color: white;\n}\n.section6 h2 {\n    text-align: center;\n    font-size: 35px;\n    font-variant: small-caps;\n}\n.section6 hr {\n    width: 50px;\n    border: 1px solid rgb(112, 112, 112);\n}\n.section6 {\n    background: rgb(238, 238, 238);\n}\n.robby {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/team_pic/robby.jpg") + ") no-repeat center center;\n    background-size: cover;\n}\nfooter { background-color:#0c1a1e; min-height:350px; font-family: 'Open Sans', sans-serif; }\n.footerleft { margin-top:50px; padding:0 36px; }\n.logofooter { margin-bottom:10px; font-size:25px; color:#fff; font-weight:700;}\n\n.footerleft p { color:#fff; font-size:12px !important; font-family: 'Open Sans', sans-serif; margin-bottom:15px;}\n.footerleft p i { width:20px; color:#999;}\n\n\n.paddingtop-bottom {  margin-top:50px;}\n.footer-ul { list-style-type:none;  padding-left:0px; margin-left:2px;}\n.footer-ul li { line-height:29px; font-size:12px;}\n.footer-ul li a { color:#a0a3a4; transition: color 0.2s linear 0s, background 0.2s linear 0s; }\n.footer-ul i { margin-right:10px;}\n.footer-ul li a:hover {transition: color 0.2s linear 0s, background 0.2s linear 0s; color:#ff670f; }\n\n.social:hover {\n     -webkit-transform: scale(1.1);\n     -moz-transform: scale(1.1);\n     -o-transform: scale(1.1);\n }\n \n \n\n \n .icon-ul { list-style-type:none !important; margin:0px; padding:0px;}\n .icon-ul li { line-height:75px; width:100%; float:left;}\n .icon { float:left; margin-right:5px;}\n \n \n .copyright { min-height:40px; background-color:#000000;}\n .copyright p { text-align:left; color:#FFF; padding:10px 0; margin-bottom:0px;}\n .heading7 { font-size:21px; font-weight:700; color:#d9d6d6; margin-bottom:22px;}\n .post p { font-size:12px; color:#FFF; line-height:20px;}\n .post p span { display:block; color:#8f8f8f;}\n .bottom_ul { list-style-type:none; float:right; margin-bottom:0px;}\n .bottom_ul li { float:left; line-height:40px;}\n .bottom_ul li:after { content:\"/\"; color:#FFF; margin-right:8px; margin-left:8px;}\n .bottom_ul li a { color:#FFF;  font-size:12px;}\n .software_h {\n     font-size: 35px;\n     font-family: 'Saira', sans-serif;\n     color: #004c8c;\n     margin-bottom: 10px;\n }\n .software_title {\n     font-size: 20px;\n     font-family: 'Saira', sans-serif;\n     color: #004c8c;\n }\n .vinson {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/team_pic/vinson.jpg") + ") no-repeat center center;\n    background-size: cover;\n}\n.tommy {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/team_pic/tommy.jpg") + ") no-repeat center center;\n    background-size: cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/aboutus-page/aboutus-page.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" [@viewDown]=\"navIndicator\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Astrokid<br>\n        <h4 [@viewDown]=\"textIndicator\">Explore our universe</h4>\n      </a>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"myNavbard\">\n      <ul class=\"nav navbar-nav navbar-right myNav\">\n          <li><a href=\"#\">Home</a></li>\n      </ul>          \n    </div>\n  </div>\n</nav>\n<div class=\"jumbotron section1\">\n  <div class=\"container\">\n    <img src=\"../../assets/icon/team.png\" alt=\"\" class=\"team_icon\">\n    <h1>Meet Our Team</h1>\n    <h2>Creativity is ours</h2>\n  </div>\n</div>\n<div class=\"jumbotron section2\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h1>Who we are</h1>\n              <p>\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n              </p>\n        </div>\n        <div class=\"col-md-6\">\n            <br>\n            <br>\n            <img src=\"../../assets/img/materialImage/work.jpg\" alt=\"\" class=\"img-responsive\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jumbotron section3\">\n    <div class=\"container\">\n      <h1 class=\"quote_head\">Creativity lead us to the future</h1>\n      <p>We working with creativity of our developers</p>\n    </div>\n  </div>\n  <div class=\"jumbotron section4\">\n    <div class=\"container\">\n      <h1> Our Responsibilities </h1>\n      <hr>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <img src=\"../../assets/icon/code_icon.png\" alt=\"\" class=\"img-responsive icon_us\">\n          <h2>Development</h2>\n        </div>\n        <div class=\"col-md-4\">\n          <img src=\"../../assets/icon/chat_icon.png\" alt=\"\" class=\"img-responsive icon_us\">\n          <h2>Communication Service</h2>\n        </div>\n        <div class=\"col-md-4\">\n          <img src=\"../../assets/icon/mt_icon.png\" alt=\"\" class=\"img-responsive icon_us\">\n          <h2>Support</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n<div class=\"jumbotron section5\">\n  <div class=\"container\">\n    <div class=\"col-md-3\">\n    <h2>History</h2>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n    </div>\n  </div>\n</div>\n<div class=\"jumbotron section6\">\n  <div class=\"container\">\n    <h2>Meet the Team</h2>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"container\">\n          <div class=\"myCard\">\n            <div class=\"headCard\">\n\n            </div>\n            <div class=\"bodyCard\">\n              <div class=\"photoBox robby\">\n\n              </div>\n              <h4>Robby Muhammad Nst</h4>\n              <p>Lorem ipsum dolor sit amet, \n                consectetur adipiscing elit, \n                sed do eiusmod tempor incididunt \n                ut labore et dolore magna aliqua. </p>\n            </div>\n            <div class=\"footerCard\">\n              <div class=\"icon_container\">\n                <i class=\"fa fa-facebook\"></i>\n                <i class=\"fa fa-whatsapp\"></i>\n                <i class=\"fa fa-instagram\"></i>\n                <i class=\"fa fa-linkedin\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>     \n      <div class=\"col-md-4\">\n        <div class=\"container\">\n          <div class=\"myCard\">\n            <div class=\"headCard\">\n\n            </div>\n            <div class=\"bodyCard\">\n              <div class=\"photoBox vinson\">\n\n              </div>\n              <h4>Vinson Chandra</h4>\n              <p>Lorem ipsum dolor sit amet, \n                consectetur adipiscing elit, \n                sed do eiusmod tempor incididunt \n                ut labore et dolore magna aliqua. </p>\n            </div>\n            <div class=\"footerCard\">\n              <div class=\"icon_container\">\n                <i class=\"fa fa-facebook\"></i>\n                <i class=\"fa fa-whatsapp\"></i>\n                <i class=\"fa fa-instagram\"></i>\n                <i class=\"fa fa-linkedin\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> \n      <div class=\"col-md-4\">\n        <div class=\"container\">\n          <div class=\"myCard\">\n            <div class=\"headCard\">\n\n            </div>\n            <div class=\"bodyCard\">\n              <div class=\"photoBox tommy\">\n\n              </div>\n              <h4>Tommy</h4>\n              <p>Lorem ipsum dolor sit amet, \n                consectetur adipiscing elit, \n                sed do eiusmod tempor incididunt \n                ut labore et dolore magna aliqua. </p>\n            </div>\n            <div class=\"footerCard\">\n              <div class=\"icon_container\">\n                <i class=\"fa fa-facebook\"></i>\n                <i class=\"fa fa-whatsapp\"></i>\n                <i class=\"fa fa-instagram\"></i>\n                <i class=\"fa fa-linkedin\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> \n    </div>\n  </div>\n</div>\n<footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-6 footerleft \">\n          <div class=\"logofooter\"> ASTROKID</div>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>\n          <p><i class=\"fa fa-map-pin\"></i> Jl.Garu I Gg.Ketapang No.3, Medan, Indonesia</p>\n          <p><i class=\"fa fa-phone\"></i> Phone (Indonesia) : +62 853 7503 4433</p>\n          <p><i class=\"fa fa-envelope\"></i> E-mail : robbybellamy6@gmail.com</p>\n          \n        </div>\n        <div class=\"col-md-2 col-sm-6 paddingtop-bottom\">\n          <h6 class=\"heading7\">GENERAL LINKS</h6>\n          <ul class=\"footer-ul\">\n            <li><a href=\"#\"> Register</a></li>\n            <li><a href=\"#\"> About Us</a></li>\n            <li><a href=\"#\"> Terms & Conditions</a></li>\n            <li><a href=\"#\"> Login</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\n          <h6 class=\"heading7\">LATEST POST</h6>\n          <div class=\"post\">\n            <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n            <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n            <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\n          <div class=\"fb-page\" data-href=\"https://www.facebook.com/facebook\" data-tabs=\"timeline\" data-height=\"300\" data-small-header=\"false\" style=\"margin-bottom:15px;\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\">\n            <div class=\"fb-xfbml-parse-ignore\">\n              <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Facebook</a></blockquote>\n              <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Instagram</a></blockquote>\n              <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Twitter</a></blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/aboutus-page/aboutus-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutusPageComponent = (function () {
    function AboutusPageComponent(el) {
        this.el = el;
        this.textIndicator = 'text_show';
        this.navIndicator = 'nav_fixed';
    }
    AboutusPageComponent.prototype.checkScroll = function () {
        var nowViewPosition = window.scrollY;
        if (nowViewPosition >= this.el.nativeElement.querySelector('.section2').offsetTop - 300) {
            this.textIndicator = 'text_fade';
            this.navIndicator = 'nav_changed';
        }
        else {
            this.textIndicator = 'text_show';
            this.navIndicator = 'nav_fixed';
        }
    };
    AboutusPageComponent.prototype.ngOnInit = function () {
    };
    return AboutusPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AboutusPageComponent.prototype, "checkScroll", null);
AboutusPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-aboutus-page',
        template: __webpack_require__("../../../../../src/app/aboutus-page/aboutus-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/aboutus-page/aboutus-page.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('viewDown', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('text_fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: 'translateX(100%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('text_show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('nav_changed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    background: 'rgb(19, 44, 65)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('nav_fixed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    background: 'rgba(255,255,255,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('text_show <=> text_fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('nav_fixed <=> nav_changed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], AboutusPageComponent);

var _a;
//# sourceMappingURL=aboutus-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Merriweather);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira);", ""]);

// module
exports.push([module.i, "nav {\n    /*background: rgba(255, 255, 255, 0);*/\n    background: rgba(255, 255, 255, 0);\n    margin: 0;\n    border: none;\n    padding: 10px;\n    /*box-shadow: 0px 0px 8px 0px #000000;*/\n}\n.myNav a{\n    color: #00778c;\n    font-family: 'Lato', sans-serif;\n    display: block;\n    transition: all 0.4s;\n}\n.myNav a:hover {\n    color: #00778c;\n    border-bottom: 1px solid white;\n}\n.navbar-brand {\n    font-size: 45px;\n    color: #FF4E50;\n    font-family: 'Lato', sans-serif;\n}\n.navbar-brand:hover {\n    color: #FF4E50;\n}\n.navbar-brand h4 {\n    color: #018c82;\n}\nnav ul li {\n    font-family: 'Lato', sans-serif;\n    color: white;\n    font-size: 20px;\n}\n.jumbotron {\n    margin-bottom: 0;\n}\n.welcome_section{\n    background: url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/astronout_wall.png") + ");\n    background-size: cover;\n    min-height: 100vh;\n    font-family: 'Lato', sans-serif;\n    margin-bottom: 0;\n    top: 0;\n    text-align: center;\n    color: #ffffff;\n}\n\n.welcome_section .container{\n    margin-top: 40vh;\n}\n.white_{\n    font-family: 'Lato', sans-serif;\n    color: white;\n    font-size: 40px;\n}\n.my_icon\n{\n    width: 100px;\n    height: auto;\n    margin: 0 auto;\n    margin-top: 10%;\n}\n.exp_button{\n    color: white;\n    width: 100px;\n    height: 40px;\n    background: #36D1DC;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #5B86E5, #36D1DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    line-height: 40px;\n    box-shadow: 0px 0px 2px 0px #000000;\n    font-family: 'Lato', sans-serif;\n    font-size: 15px;\n    margin: 0 auto;\n    margin-top: 40px;\n    margin-bottom: 90px;\n    border-radius: 5px;\n    text-shadow: 0px 0px 0px #1f6287;\n}\n.register {\n    font-size: 14px;\n    color: white;\n    text-shadow: 0px 0px 0px #1f6287;\n}\n.section1{\n    height: auto;\n    /*background: url(\"../assets/img/nebula.jpg\");  */\n    background: rgb(2, 12, 22);\n    font-family: 'Saira', sans-serif;\n}\n.diff {\n    color: #d55703;\n}\n.diff1 {\n    color: #3966fa;\n}\n.astro img{\n    width: 380px;\n    height: auto;\n    margin: 0 auto;\n    transition: all 0.4s;\n}\n.section1_title\n{\n    background: #FF4E50;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #F9D423, #FF4E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-size: 48px;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n.sec1 {\n    border: 2px solid transparent;\n    -o-border-image: linear-gradient(to right, #c0392b, #8e44ad);\n       border-image: linear-gradient(to right, #c0392b, #8e44ad);\n    font-family: 'Saira', sans-serif;\n    border-image-slice: 1;\n    margin-bottom: 10px;\n}\n.section2\n{\n    background: #040F21;\n    background-size: cover;\n    font-family: 'Saira', sans-serif;\n    text-align: center;\n    color: white;\n    border-top: 0.5px solid transparent;\n    border-bottom: 0.5px solid transparent;\n\t-o-border-image: linear-gradient(to right, #34e89e, #0f3443);\n\t   border-image: linear-gradient(to right, #34e89e, #0f3443);;\n    border-image-slice: 1;\n}\n.desc1{\n    color: white;\n}\n.section2_title\n{\n    font-family: 'Saira', sans-serif;\n    background: #40E0D0;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #FF0080, #FF8C00, #40E0D0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-size: 48px;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: all 0.4s;\n}\n.desc2 {\n    color: white;\n}\n.section3{\n    height: auto;\n    background: #020C16;\n    background-size: cover;\n    font-family: 'Saira', sans-serif;\n}\n.content{\n    padding: 10px;\n    margin: 0 auto;\n}\n.contentCore{\n    width: 100%;\n    margin: 0 auto;\n    height: 460px;\n    max-width: 350px;\n    color: white;\n    padding: 20px;\n    background: transparent;\n    border: 0.5px solid transparent;\n    -o-border-image: linear-gradient(to top, #30e8bf, #ff8235);\n       border-image: linear-gradient(to top, #30e8bf, #ff8235);\n    border-image-slice: 1;\n    box-shadow: 0px 0px 4px 0px #1d1d1d;\n}\n.contentSec {\n    idth: 100%;\n    margin: 0 auto;\n    height: 80px;\n    color: white;\n    padding: 20px;\n    background: transparent;\n    border: 0.5px solid transparent;\n    -o-border-image: linear-gradient(to top, #30e8bf, #ff8235);\n       border-image: linear-gradient(to top, #30e8bf, #ff8235);\n    border-image-slice: 1;\n    box-shadow: 0px 0px 4px 0px #1d1d1d;\n}\n.contentCore h2 {\n  text-align: center;\n}\n.gal_btn {\n  width: 120px;\n  height: 40px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 1);\n  color: black;\n  text-align: center;\n  line-height: 40px;\n}\n.contentCore p {\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: justify;\n}\n.contentCore img {\n  width: 240px;\n  height: auto;\n  margin: 0 auto;\n  border: 1px solid white;\n  border-radius: 5px;\n}\n.starGate{\n    background: #ffffff;\n}\n.section3 .container{\n    margin-top: 10px;\n}\n[data-animate-in=\"up\"] {\n    -webkit-transform:translate3d(0, 24px, 0);\n            transform:translate3d(0, 24px, 0)\n   }\n.section4 {\n  height: auto;\n  font-family: 'Saira', sans-serif;\n  padding: 20px;\n  color: black;\n  text-align: center;\n}\n.section4 h2 {\n  text-align: center;\n  color: #0556ba;\n}\n.section4 img {\n  width: 80px;\n  height: auto;\n  margin: 0 auto;\n}\n.section4 hr {\n  border: 1px solid #384142;\n}\n.section4 p {\n  font-size: 15px;\n}\n.section4 col-md-8 {\n  padding: 60px;\n}\n.section5 {\n  background: #020C16;\n}\n.float{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\tbackground-color:#004c8c;\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n\tbox-shadow: 0px 0px 4px 0px #000000;\n}\n.not-visible {\n    visibility: hidden;\n}\n\n.my-float{\n\tmargin-top:22px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main [@routerTransition]=\"getState(o)\">\n        <router-outlet #o=\"outlet\"></router-outlet>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('routerTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* <=> *', [
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ transform: 'translateX(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ])
]);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        animations: [
            routerTransition
        ]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_fullpage__ = __webpack_require__("../../../../ngx-fullpage/ngx-fullpage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_fullpage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_fullpage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__welcome_page_welcome_page_component__ = __webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lost_page_lost_page_component__ = __webpack_require__("../../../../../src/app/lost-page/lost-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_page_register_page_component__ = __webpack_require__("../../../../../src/app/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__exploration_page_exploration_page_component__ = __webpack_require__("../../../../../src/app/exploration-page/exploration-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aboutus_page_aboutus_page_component__ = __webpack_require__("../../../../../src/app/aboutus-page/aboutus-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__stars_selection_stars_selection_component__ = __webpack_require__("../../../../../src/app/stars-selection/stars-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__human_technology_human_technology_component__ = __webpack_require__("../../../../../src/app/human-technology/human-technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__splash_explore_splash_explore_component__ = __webpack_require__("../../../../../src/app/splash-explore/splash-explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__loading_screen_loading_screen_component__ = __webpack_require__("../../../../../src/app/loading-screen/loading-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_page_dashboard_page_component__ = __webpack_require__("../../../../../src/app/dashboard-page/dashboard-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Bootstrap Javascript Component






// Components











// Material Design Modul
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_13__lost_page_lost_page_component__["a" /* LostPageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_page_login_page_component__["a" /* LoginPageComponent */], data: { state: 'login' } },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__register_page_register_page_component__["a" /* RegisterPageComponent */], data: { state: 'register' } },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_16__aboutus_page_aboutus_page_component__["a" /* AboutusPageComponent */], data: { state: 'aboutus' } },
    { path: 'starsselect', component: __WEBPACK_IMPORTED_MODULE_17__stars_selection_stars_selection_component__["a" /* StarsSelectionComponent */], data: { state: 'starsselect' } },
    { path: 'humantechnology', component: __WEBPACK_IMPORTED_MODULE_18__human_technology_human_technology_component__["a" /* HumanTechnologyComponent */], data: { state: 'humantechnology' } },
    { path: 'exploration', component: __WEBPACK_IMPORTED_MODULE_19__splash_explore_splash_explore_component__["a" /* SplashExploreComponent */], data: { state: 'exploration' } },
    { path: 'loading', component: __WEBPACK_IMPORTED_MODULE_20__loading_screen_loading_screen_component__["a" /* LoadingScreenComponent */], data: { state: 'loading' } },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_21__dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */], data: { state: 'dashboard' } }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__welcome_page_welcome_page_component__["a" /* WelcomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__lost_page_lost_page_component__["a" /* LostPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_page_register_page_component__["a" /* RegisterPageComponent */],
            __WEBPACK_IMPORTED_MODULE_15__exploration_page_exploration_page_component__["a" /* ExplorationPageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__aboutus_page_aboutus_page_component__["a" /* AboutusPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__stars_selection_stars_selection_component__["a" /* StarsSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__human_technology_human_technology_component__["a" /* HumanTechnologyComponent */],
            __WEBPACK_IMPORTED_MODULE_19__splash_explore_splash_explore_component__["a" /* SplashExploreComponent */],
            __WEBPACK_IMPORTED_MODULE_20__loading_screen_loading_screen_component__["a" /* LoadingScreenComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_8__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0_ngx_fullpage__["MnFullpageModule"].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard-page/dashboard-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,300);", ""]);

// module
exports.push([module.i, "nav {\n    /*background: rgba(255, 255, 255, 0);*/\n    background: rgba(255, 255, 255, 0);\n    margin: 0;\n    border: none;\n    padding: 10px;\n    /*box-shadow: 0px 0px 8px 0px #000000;*/\n}\n.myNav a{\n    color: #ffffff;\n    font-family: 'Saira', sans-serif;\n    display: block;\n    transition: all 0.4s;\n}\n.myNav a:hover {\n    color: #00778c;\n    border-bottom: 1px solid white;\n}\n.navbar-brand {\n    font-size: 45px;\n    color: rgb(29, 97, 142);\n    font-family: 'Saira', sans-serif;\n}\n.navbar-brand:hover {\n    color: rgb(3, 85, 81);\n}\na {\n    transition: all 0.4s ease-in;\n}\n.navbar-brand h4 {\n    /*color: #018c82;*/\n    color: white;\n}\nnav ul li {\n    font-family: 'Saira', sans-serif;\n    color: white;\n    font-size: 20px;\n}\n.jumbotron {\n    margin-bottom: 0;\n}\n.first_sect {\n    font-family: 'Saira', sans-serif;\n    color: white;\n    height: 100vh;\n    text-align: center;\n    max-height: auto;\n    background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),  url(" + __webpack_require__("../../../../../src/assets/img/materialImage/dashboard_wall.jpg") + ") no-repeat;\n    background-size: cover;\n}\n.intermezo {\n    text-align: left;\n    margin-top: 30vh;\n}\n.intermezo h2 {\n    font-size: 44px;\n    color: rgb(255, 255, 255);\n    font-weight: bold;\n}\n.intermezo p {\n    color: rgb(255, 255, 255);\n}\n.search {\n    font-family: 'Saira', sans-serif;\n    width: 90px;\n    height: 35px;\n    background: white;\n    color: rgb(44, 120, 167);\n    border: none;\n    text-decoration: none;\n    border-radius: 5px;\n    transition: all 0.4s ease-in;\n}\n.search:hover {\n    background: rgb(44, 120, 167);\n    color: rgb(255, 255, 255);\n}\n.downIcon {\n    font-size: 40px;\n    margin-top: 15vh;\n}\n.downIcon:hover {\n    cursor: pointer;\n}\n.title {\n    color: rgb(3, 67, 63);\n    font-size: 43px;\n    text-align: center;\n    font-variant: small-caps;\n}\n.story {\n    width: 100%;\n    height: 400px;\n    max-width: 400px;\n    margin: 0 auto;\n    margin-bottom: 20px;\n    background: rgb(255, 255, 255);\n    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);\n    padding: 10px;\n    transition: all 0.4s ease-out;\n}\n.story:hover {\n    box-shadow: 0 3px 30px 0 rgba(0,0,0,0.3);\n}\n.story_head {\n    width: 100%;\n    height: 60%;\n    text-align: center;\n    color: white;\n    background: white;\n}\n.story_body {\n    width: 100%;\n    height: 30%;\n    color: rgb(70, 70, 70);\n    text-align: left;\n    padding: 10px;\n}\n.story_body p {\n    font-size: 13px;\n}\n.story .story_footer {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    border-top: 1px solid rgb(70, 70, 70);\n}\n#first {\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(" + __webpack_require__("../../../../../src/assets/img/materialImage/history.jpg") + ") no-repeat;\n    background-size: cover;\n}\n#second {\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(" + __webpack_require__("../../../../../src/assets/img/materialImage/dashboard.jpg") + ") no-repeat;\n    background-size: cover;\n}\n#third {\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/solarsystem.png") + ") no-repeat;\n    background-size: cover;\n}\n#fourth {\n    background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),  url(" + __webpack_require__("../../../../../src/assets/img/materialImage/bigbang_wall.jpg") + ") no-repeat;\n    background-size: cover;\n}\n#fifth {\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/starse.jpg") + ") no-repeat;\n    background-size: cover;\n}\n.explore {\n    width: 100%;\n    height: 100%;\n    background: white;\n    color: rgb(44, 120, 167);\n    border: none;\n    font-variant: small-caps;\n    text-decoration: none;\n    transition: all 0.4s ease-in;\n}\n.explore:hover {\n    background: rgb(19, 44, 65);\n    color: white;\n}\n.continue {\n    width: 280px;\n    height: 45px;\n    display: block;\n    text-align: center;\n    margin: 0 auto;\n    font-variant: small-caps;\n    background: rgb(44, 120, 167);\n    border: none;\n    text-decoration: none;\n    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);\n    color: white;\n    transition: all 0.4s ease-in;\n}\n.continue:hover {\n    box-shadow: 0 3px 30px 0 rgba(0,0,0,0.3);\n}\n.call {\n    color: rgb(3, 67, 63);\n    text-align: center;\n    font-size: 32px;\n    font-variant: small-caps;\n}\n\n.stars_pic {\n    width: 100%;\n    height: auto;\n}\n.constellation_section p {\n    font-size: 16px;\n    text-align: left;\n}\n.stars_desc {\n    margin-bottom: 10px;\n    padding: 10px;\n}\n.line_sec {\n    width: 20%;\n    border: 1px solid rgb(143, 143, 143);\n}\n.quote_sections {\n    color: white;\n    text-align: center;\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(" + __webpack_require__("../../../../../src/assets/img/materialImage/calm_space.jpg") + ") no-repeat center center;\n    background-size: cover;\n}\n.quote_sections h1 {\n    font-size: 40px;\n    font-variant: small-caps;\n}\n.quote_sections p {\n    font-size: 20px;\n}\nfooter { background-color:rgb(7, 53, 69); min-height:350px; font-family: 'Open Sans', sans-serif; }\n.footerleft { margin-top:50px; padding:0 36px; }\n.logofooter { margin-bottom:10px; font-size:25px; color:#fff; font-weight:700;}\n\n.footerleft p { color:#fff; font-size:12px !important; font-family: 'Open Sans', sans-serif; margin-bottom:15px;}\n.footerleft p i { width:20px; color:#999;}\n\n\n.paddingtop-bottom {  margin-top:50px;}\n.footer-ul { list-style-type:none;  padding-left:0px; margin-left:2px;}\n.footer-ul li { line-height:29px; font-size:12px;}\n.footer-ul li a { color:#a0a3a4; transition: color 0.2s linear 0s, background 0.2s linear 0s; }\n.footer-ul i { margin-right:10px;}\n.footer-ul li a:hover {transition: color 0.2s linear 0s, background 0.2s linear 0s; color:#ff670f; }\n\n.social:hover {\n     -webkit-transform: scale(1.1);\n     -moz-transform: scale(1.1);\n     -o-transform: scale(1.1);\n }\n \n \n\n \n .icon-ul { list-style-type:none !important; margin:0px; padding:0px;}\n .icon-ul li { line-height:75px; width:100%; float:left;}\n .icon { float:left; margin-right:5px;}\n \n \n .copyright { min-height:40px; background-color:rgb(4, 34, 45);}\n .copyright p { text-align:left; color:#FFF; padding:10px 0; margin-bottom:0px;}\n .heading7 { font-size:21px; font-weight:700; color:#d9d6d6; margin-bottom:22px;}\n .post p { font-size:12px; color:#FFF; line-height:20px;}\n .post p span { display:block; color:#8f8f8f;}\n .bottom_ul { list-style-type:none; float:right; margin-bottom:0px;}\n .bottom_ul li { float:left; line-height:40px;}\n .bottom_ul li:after { content:\"/\"; color:#FFF; margin-right:8px; margin-left:8px;}\n .bottom_ul li a { color:#FFF;  font-size:12px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-page/dashboard-page.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" [@viewDown]=\"navIndicator\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"/\" class=\"navbar-brand\">Astrokid<br>\n        <h4 [@viewDown]=\"textIndicator\">Explore our universe</h4>\n      </a>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"myNavbard\">\n      <ul class=\"nav navbar-nav navbar-right myNav\">\n          <li><a href=\"#\">Profile</a></li>\n          <li><a href=\"#\">Logout</a></li>\n      </ul>          \n    </div>\n  </div>\n</nav>\n<div class=\"jumbotron first_sect\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-7 search_sect\">\n        <div class=\"container\">\n\n        </div>\n      </div>\n      <div class=\"col-md-5 intermezo\">\n        <div class=\"container\">\n          <h2>\n            Searching\n          </h2>\n          <p> Don't stop search what you want to know. The truth is out there </p><br>\n          <button class=\"search\">Search</button>\n        </div>\n      </div>\n    </div>\n    <i class=\"fa  fa-angle-double-down downIcon\">\n\n    </i>\n  </div>\n</div>\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1 class=\"title\"> Select your story</h1><br>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"container\">\n          <div class=\"story\">\n            <div class=\"story_head\" id=\"first\">\n\n            </div>\n            <div class=\"story_body\">\n              <p>\n                Lorem ipsum dolor si amet amit amit dah. Ini design\n                makin lama kok makin absurd ya. Saya prihatin melihatnya. Tolong siapapun\n                diperbaiki dong , sedih dan miris saya melihatnya.\n              </p>\n            </div>\n            <div class=\"story_footer\">\n              <Button class=\"explore\">Explore</Button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"container\">\n          <div class=\"story\">\n            <div class=\"story_head\" id=\"second\">\n\n            </div>\n            <div class=\"story_body\">\n              <p>\n                Lorem ipsum dolor si amet amit amit dah. Ini design\n                makin lama kok makin absurd ya. Saya prihatin melihatnya. Tolong siapapun\n                diperbaiki dong , sedih dan miris saya melihatnya.\n              </p>\n            </div>\n            <div class=\"story_footer\">\n              <Button class=\"explore\">Explore</Button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"container\">\n          <div class=\"story\">\n            <div class=\"story_head\" id=\"third\">\n\n            </div>\n            <div class=\"story_body\">\n              <p>\n                Lorem ipsum dolor si amet amit amit dah. Ini design\n                makin lama kok makin absurd ya. Saya prihatin melihatnya. Tolong siapapun\n                diperbaiki dong , sedih dan miris saya melihatnya.\n              </p>\n            </div>\n            <div class=\"story_footer\">\n              <Button class=\"explore\">Explore</Button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"container\">\n          <div class=\"story\">\n            <div class=\"story_head\" id=\"fourth\">\n\n            </div>\n            <div class=\"story_body\">\n              <p>\n                Lorem ipsum dolor si amet amit amit dah. Ini design\n                makin lama kok makin absurd ya. Saya prihatin melihatnya. Tolong siapapun\n                diperbaiki dong , sedih dan miris saya melihatnya.\n              </p>\n            </div>\n            <div class=\"story_footer\">\n              <Button class=\"explore\">Explore</Button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"container\">\n          <div class=\"story\">\n            <div class=\"story_head\" id=\"fifth\">\n\n            </div>\n            <div class=\"story_body\">\n              <p>\n                Lorem ipsum dolor si amet amit amit dah. Ini design\n                makin lama kok makin absurd ya. Saya prihatin melihatnya. Tolong siapapun\n                diperbaiki dong , sedih dan miris saya melihatnya.\n              </p>\n            </div>\n            <div class=\"story_footer\">\n              <Button class=\"explore\">Explore</Button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button class=\"continue\">Continue</button>\n  </div>\n</div>\n<div class=\"jumbotron constellation_section\">\n  <div class=\"container\">\n    <h1 class=\"title\">Orion is my constellation</h1>\n    <h2 class=\"call\">The Hunter</h2>\n    <hr class=\"line_sec\">\n    <div class=\"row\">\n      <div class=\"col-md-4 stars_desc\">\n        <div class=\"container\">\n          <img src=\"../../assets/img/materialImage/constellations/orion_giza.png\" class=\"responsive-img stars_pic\">\n        </div>\n      </div>\n      <div class=\"col-md-8 stars_desc\">\n        <div class=\"container\">\n          <p>\n            Orion atau Waluku (\"Bintang Bajak\"), \n            adalah suatu rasi bintang yang sering \n            disebut-sebut sebagai sang Pemburu. \n            Rasi ini mungkin merupakan rasi yang paling \n            terkenal dan mudah dikenali di angkasa. \n            Orang Jawa mengenal bagian deretan tiga bintang \n            sabuk (ζ,ε, dan δ) dan deretan tiga bintang\n             pedang (M43, M42, dan ι) sebagai deretan \n             bintang Belantik atau Beluku. \n             Bintang-bintang terangnya terletak pada \n             ekuator langit dan terlihat dari \n             seluruh dunia, sehingga membuat rasi \n             ini dikenal secara luas.\n            \n            Orion sang pemburu berdiri di sebelah \n            sungai Eridanus dengan dua anjing pemburunya, \n            Canis Major (anjing besar) dan Canis Minor \n            (anjing kecil), melawan Taurus, sang kerbau. \n            Buruan lainnya seperti Lepus, si kelinci, \n            juga ada di dekatnya.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"jumbotron quote_sections\">\n  <div class=\"container\">\n    <h1>Keep looking forward</h1>\n    <p>Masa depanmu tepat berada didepan sana</p>\n  </div>\n</div>\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6 footerleft \">\n        <div class=\"logofooter\"> ASTROKID</div>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>\n        <p><i class=\"fa fa-map-pin\"></i> Jl.Garu I Gg.Ketapang No.3, Medan, Indonesia</p>\n        <p><i class=\"fa fa-phone\"></i> Phone (Indonesia) : +62 853 7503 4433</p>\n        <p><i class=\"fa fa-envelope\"></i> E-mail : robbybellamy6@gmail.com</p>\n        \n      </div>\n      <div class=\"col-md-2 col-sm-6 paddingtop-bottom\">\n        <h6 class=\"heading7\">GENERAL LINKS</h6>\n        <ul class=\"footer-ul\">\n          <li><a href=\"#\"> Register</a></li>\n          <li><a href=\"#\"> About Us</a></li>\n          <li><a href=\"#\"> Terms & Conditions</a></li>\n          <li><a href=\"#\"> Login</a></li>\n        </ul>\n      </div>\n      <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\n        <h6 class=\"heading7\">LATEST POST</h6>\n        <div class=\"post\">\n          <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n          <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n          <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\n        <div class=\"fb-page\" data-href=\"https://www.facebook.com/facebook\" data-tabs=\"timeline\" data-height=\"300\" data-small-header=\"false\" style=\"margin-bottom:15px;\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\">\n          <div class=\"fb-xfbml-parse-ignore\">\n            <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Facebook</a></blockquote>\n            <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Instagram</a></blockquote>\n            <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Twitter</a></blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer start from here-->\n\n<div class=\"copyright\">\n  <div class=\"container\">\n    <div class=\"col-md-6\">\n      <p>© 2017 - All Rights with Astrokid</p>\n    </div>\n    <div class=\"col-md-6\">\n     \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard-page/dashboard-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPageComponent = (function () {
    function DashboardPageComponent(el) {
        this.el = el;
        this.textIndicator = 'text_show';
        this.navIndicator = 'nav_fixed';
    }
    DashboardPageComponent.prototype.checkScroll = function () {
        var nowViewPosition = window.scrollY;
        if (nowViewPosition >= 30) {
            this.textIndicator = 'text_fade';
            this.navIndicator = 'nav_changed';
        }
        else {
            this.textIndicator = 'text_show';
            this.navIndicator = 'nav_fixed';
        }
    };
    DashboardPageComponent.prototype.ngOnInit = function () {
    };
    return DashboardPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardPageComponent.prototype, "checkScroll", null);
DashboardPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-page',
        template: __webpack_require__("../../../../../src/app/dashboard-page/dashboard-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard-page/dashboard-page.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('viewDown', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('text_fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: 'translateX(100%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('text_show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('nav_changed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    background: 'rgb(19, 44, 65)',
                    'box-shadow': '0px 0px 8px 0px #000000'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('nav_fixed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    background: 'rgba(255,255,255,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('text_show <=> text_fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('nav_fixed <=> nav_changed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DashboardPageComponent);

var _a;
//# sourceMappingURL=dashboard-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/exploration-page/exploration-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exploration-page/exploration-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  exploration-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/exploration-page/exploration-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorationPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExplorationPageComponent = (function () {
    function ExplorationPageComponent() {
    }
    ExplorationPageComponent.prototype.ngOnInit = function () {
    };
    return ExplorationPageComponent;
}());
ExplorationPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-exploration-page',
        template: __webpack_require__("../../../../../src/app/exploration-page/exploration-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exploration-page/exploration-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExplorationPageComponent);

//# sourceMappingURL=exploration-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/human-technology/human-technology.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Merriweather);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Saira);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Kanit);", ""]);

// module
exports.push([module.i, "nav {\n    /*background: rgba(255, 255, 255, 0);*/\n    background: rgba(255, 255, 255, 0)!important;\n    margin: 0;\n    border: none;\n    padding: 10px;\n    /*box-shadow: 0px 0px 8px 0px #000000;*/\n}\n.myNav a{\n    color: #ffffff;\n    font-family: 'Saira', sans-serif;\n    display: block;\n    transition: all 0.4s;\n}\n.myNav a {\n    background: rgb(19, 44, 65);\n}\n.myNav a:hover {\n    color: #00778c;\n    background: white;\n    border-bottom: 1px solid #00778c;\n}\n.navbar-brand {\n    font-size: 45px;\n    color: rgb(255, 255, 255);\n    font-family: 'Lato', sans-serif;\n}\n.navbar-brand:hover {\n    color: #FF4E50;\n}\n.navbar-brand h4 {\n    color: #018c82;\n}\nnav ul li {\n    font-family: 'Saira', sans-serif;\n    color: white;\n    font-size: 20px;\n}\n.first {\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(" + __webpack_require__("../../../../../src/assets/img/materialImage/human_technology1.jpg") + ") no-repeat center;\n    background-size: cover;\n    color: white;\n    font-family: 'Saira', sans-serif;\n    text-align: center;\n}\n.first .title_desc {\n    color: rgb(209, 209, 209);\n    font-size: 80px;\n    font-variant: small-caps;\n}\n.first p {  \n    font-size: 19px;\n    color: rgb(255, 255, 255);\n    font-family: 'Kanit', sans-serif;\n}\n.second {\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(" + __webpack_require__("../../../../../src/assets/img/materialImage/moon.jpg") + ") no-repeat center;\n    background-size: cover;\n    color: white;\n    font-family: 'Saira', sans-serif;\n}\n.sec2 {\n    margin: 0 auto;\n}\n.desc {\n    padding: 90px;\n    text-align: left;\n    font-size: 16px;\n    font-family: 'Kanit', sans-serif;\n}\n.desc h2 {\n    font-family: 'Kanit', sans-serif;\n    font-size: 60px;\n    text-align: left;\n}\n.first .fp-tableCell {\n    padding: 30px;\n}\n.third {\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/stars.jpg") + ") no-repeat center;\n    background-size: cover;\n}\n.firstSlide {\n    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/stars.jpg") + ") no-repeat center;\n    background-size: cover;\n}\n.vidPage {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/human-technology/human-technology.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Astrokid\n      </a>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"myNavbard\">\n      <ul class=\"nav navbar-nav navbar-right myNav\">\n          <li><a href=\"dashboard\">Dashboard</a></li>\n      </ul>          \n    </div>\n  </div>\n</nav>\n<div mnFullpage\n[mnFullpageNavigation]=\"true\"\n[mnFullpageKeyboardScrolling]=\"true\">\n\n    <div id=\"section1\" class=\"element-with-video-bg jquery-background-video-wrapper section fp-section fp-table first\">\n        <div class=\"fp-tableCell\">\n            <span class=\"title_desc\">Luna 2</span><br>\n            <span class=\"sub\">Semua berawal dari yang kecil</span>\n        </div>\n    </div>\n    <div id=\"section2\" class=\"section fp-section fp-table second\">\n        <div class=\"fp-tableCell\">\n                <div class=\"col-md-12\">\n                    <div class=\"container desc\">\n                        <h2>Luna 2</h2>\n                        <p>\n                        Luna 2 (E-1A series) adalah pesawat ruang angkasa anak kedua dari Program Luna Uni Soviet yang diluncurkan ke Bulan. \n                        Itu adalah pesawat ruang angkasa pertama yang mencapai \n                        permukaan Bulan dan juga yang pertama objek buatan manusia \n                        untuk mendarat di planet lain. Pada tanggal 14 September \n                        1959 berhasil dipengaruhi dengan permukaan timur lunar Mare \n                        Imbrium dekat kawah Aristides, Archimedes, dan Autolycus.\n                        </p>\n                    </div>   \n                </div>\n        </div>\n    </div>\n    <div id=\"section3\" class=\"section fp-section fp-table third\">\n       \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/human-technology/human-technology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HumanTechnologyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_fullpage__ = __webpack_require__("../../../../ngx-fullpage/ngx-fullpage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_fullpage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_fullpage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HumanTechnologyComponent = (function () {
    function HumanTechnologyComponent(fullpageService) {
        this.fullpageService = fullpageService;
    }
    HumanTechnologyComponent.prototype.ngOnInit = function () {
    };
    return HumanTechnologyComponent;
}());
HumanTechnologyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-human-technology',
        template: __webpack_require__("../../../../../src/app/human-technology/human-technology.component.html"),
        styles: [__webpack_require__("../../../../../src/app/human-technology/human-technology.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_fullpage__["MnFullpageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_fullpage__["MnFullpageService"]) === "function" && _a || Object])
], HumanTechnologyComponent);

var _a;
//# sourceMappingURL=human-technology.component.js.map

/***/ }),

/***/ "../../../../../src/app/loading-screen/loading-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loading-screen/loading-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  loading-screen works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/loading-screen/loading-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingScreenComponent = (function () {
    function LoadingScreenComponent() {
    }
    LoadingScreenComponent.prototype.ngOnInit = function () {
    };
    return LoadingScreenComponent;
}());
LoadingScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading-screen',
        template: __webpack_require__("../../../../../src/app/loading-screen/loading-screen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loading-screen/loading-screen.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoadingScreenComponent);

//# sourceMappingURL=loading-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jumbotron {\n    margin-bottom: 0;\n}\n.jumbotron h2 {\n    font-family: 'Saira', sans-serif;\n    color: white;\n    font-size: 40px;\n    text-align: center;\n}\n.jumbotron p {\n    font-family: 'Saira', sans-serif;\n    color: white;\n    text-align: center;\n}\n.wrapper {\n    background: white;\n    height: 100%;\n    max-height: 100%;\n}\n.wrapper_form {\n    margin: 0 auto;\n    border-radius: 10px 10px 10px 10px;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/welcome_background.jpg") + ") no-repeat center;\n    background-size: cover;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n}\ninput[type=button], input[type=submit], input[type=reset]  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out;\n  }\n  \n  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n    background-color: #39ace7;\n  }\n  \n  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n  \n  input[type=text] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n  \n  input[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n  \n  input[type=text]:placeholder {\n    color: #cccccc;\n  }\n  \n  \n\n  .underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n  }\n  a {\n    color: #92badd;\n    display:inline-block;\n    text-decoration: none;\n    font-weight: 400;\n  }  \n  .underlineHover:hover {\n    color: #0d0d0d;\n  }\n  \n  .underlineHover:hover:after{\n    width: 100%;\n  }\n  input[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n  \n  input[type=password]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n  \n  input[type=password]:placeholder {\n    color: #cccccc;\n  }\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  \n  .fadeIn {\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n  \n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n  \n    -webkit-animation-duration:1s;\n    animation-duration:1s;\n  }\n  \n  .fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n  #formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n  *:focus {\n    outline: none;\n} \n.brand {\n  font-family: 'Saira', sans-serif;\n  color: #ffffff;\n  font-size: 24px;\n}\n.wrapper_form p {\n  font-size: 18px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron wrapper\">\n    <div class=\"container\">\n       \n        <div class=\"wrapper_form\">\n            <div class=\"fadeIn first\">\n                <img src=\"http://danielzawadzki.com/codepen/01/icon.svg\" id=\"icon\" alt=\"User Icon\" />\n            </div>\n            <span class=\"brand\">ASTROKID</span>\n            <p>Explore with your self</p>\n            <form action=\"\">\n                    <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"Username\">\n                    <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"Password\">\n                    <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\">\n            </form>\n            <div id=\"formFooter\">\n                <a routerLink=\"/\" class=\"underlineHover\" href=\"#\">Cancel</a><br>\n                <a routerLink=\"/register\" class=\"underlineHover\" href=\"#\">Register</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPageComponent = (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginPageComponent);

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/lost-page/lost-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lost-page/lost-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  lost-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/lost-page/lost-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LostPageComponent = (function () {
    function LostPageComponent() {
    }
    LostPageComponent.prototype.ngOnInit = function () {
    };
    return LostPageComponent;
}());
LostPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lost-page',
        template: __webpack_require__("../../../../../src/app/lost-page/lost-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lost-page/lost-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LostPageComponent);

//# sourceMappingURL=lost-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jumbotron {\n    margin-bottom: 0;\n}\n.jumbotron h2 {\n    font-family: 'Saira', sans-serif;\n    color: white;\n    font-size: 40px;\n    text-align: center;\n}\n.jumbotron p {\n    font-family: 'Saira', sans-serif;\n    color: white;\n    text-align: center;\n}\n.wrapper {\n    background: white;\n    height: 100%;\n    max-height: 100%;\n}\n.wrapper_form {\n    margin: 0 auto;\n    border-radius: 10px 10px 10px 10px;\n    background: url(" + __webpack_require__("../../../../../src/assets/img/welcome_background.jpg") + ") no-repeat center;\n    background-size: cover;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n    text-align: center;\n}\ninput[type=button], input[type=submit], input[type=reset]  {\n    background-color: #56baed;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out;\n  }\n  \n  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n    background-color: #39ace7;\n  }\n  \n  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95);\n  }\n  \n  input[type=text] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n  \n  input[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n  \n  input[type=text]:placeholder {\n    color: #cccccc;\n  }\n  \n  \n\n  .underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #56baed;\n    content: \"\";\n    transition: width 0.2s;\n  }\n  a {\n    color: #92badd;\n    display:inline-block;\n    text-decoration: none;\n    font-weight: 400;\n  }  \n  .underlineHover:hover {\n    color: #0d0d0d;\n  }\n  \n  .underlineHover:hover:after{\n    width: 100%;\n  }\n  input[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n  }\n  \n  input[type=password]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #5fbae9;\n  }\n  \n  input[type=password]:placeholder {\n    color: #cccccc;\n  }\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n  \n  .fadeIn {\n    opacity:0;\n    -webkit-animation:fadeIn ease-in 1;\n    animation:fadeIn ease-in 1;\n  \n    -webkit-animation-fill-mode:forwards;\n    animation-fill-mode:forwards;\n  \n    -webkit-animation-duration:1s;\n    animation-duration:1s;\n  }\n  \n  .fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n  #formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n  }\n*:focus {\n    outline: none;\n} \n.brand {\n  font-family: 'Saira', sans-serif;\n  color: #ffffff;\n  font-size: 24px;\n}\n.wrapper_form p {\n  font-size: 18px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron wrapper\">\n    <div class=\"container\">\n       \n        <div class=\"wrapper_form\">\n            <div class=\"fadeIn first\">\n                <img src=\"http://danielzawadzki.com/codepen/01/icon.svg\" id=\"icon\" alt=\"User Icon\" />\n            </div>\n            <span class=\"brand\">ASTROKID</span>\n            <form action=\"/starsselect\">\n                    <input type=\"text\" id=\"username\" class=\"fadeIn second\" name=\"username\" placeholder=\"Username\">\n                    <input type=\"text\" id=\"name\" class=\"fadeIn second\" name=\"name\" placeholder=\"Nama\">\n                    <input type=\"text\" id=\"email\" class=\"fadeIn second\" name=\"email\" placeholder=\"E-mail\">\n                    <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"password\" placeholder=\"Password\">\n                    <input type=\"submit\" class=\"fadeIn fourth\" value=\"Next\">\n            </form>\n            <div id=\"formFooter\">\n                <a routerLink=\"/login\" class=\"underlineHover\" href=\"#\">Login</a> ,\n                <a routerLink=\"/\" class=\"underlineHover\" href=\"#\">Cancel</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-page/register-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterPageComponent = (function () {
    function RegisterPageComponent() {
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    return RegisterPageComponent;
}());
RegisterPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register-page',
        template: __webpack_require__("../../../../../src/app/register-page/register-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register-page/register-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterPageComponent);

//# sourceMappingURL=register-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/splash-explore/splash-explore.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jumbotron {\n    margin-bottom: 0;\n    padding-left: 10px;\n}\na {\n    text-decoration: none;\n    color: white;\n}\n.bodyBrand {\n    margin: 0 auto;\n    margin-top: 30vh;\n}\n@-webkit-keyframes slideText {\n    from {\n        opacity: 0;\n        -webkit-transform: translateX(0%);\n                transform: translateX(0%);\n    } to {\n        opacity: 1;\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n    }\n}\n@keyframes slideText {\n    from {\n        opacity: 0;\n        -webkit-transform: translateX(0%);\n                transform: translateX(0%);\n    } to {\n        opacity: 1;\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n    }\n}\n.wrapper {\n    height: 100vh;\n    background: url(\"\") no-repeat center center;\n    background-size: cover!important;\n    text-align: center;\n    color: white;\n    font-family: 'Saira', sans-serif;\n    transition: all 0.4s ease-in 1000;\n    -webkit-animation-name: slideText;\n            animation-name: slideText;\n    -webkit-animation-duration: 0.4s;\n            animation-duration: 0.4s;\n}\n.wrapper h2 {\n    font-size: 43px;\n    text-shadow: 2px 2px #161616;\n}\n.wrapper p {\n    text-shadow: 2px 2px #161616;\n}\nh1 {\n    font-size: 37px;\n    text-align: left;\n    margin-top: -30px;\n    text-shadow: 2px 2px #161616;\n}\nh1:hover {\n    cursor: pointer;\n}\n.btn {\n    width: 100px;\n    height: 35px;\n    text-align: center;\n    font-size: 15px;\n    background: rgb(255, 255, 255);\n    color: rgb(16, 80, 198);\n    transition: all 0.4s ease-out;\n}\n.btn:hover {\n    background: rgb(16, 80, 198);\n    color: white;\n    box-shadow: 0 3px 15px 0 rgba(0,0,0,0.3);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/splash-explore/splash-explore.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'background': getBackground()}\" class=\"jumbotron wrapper\" id=\"wrap\">\n  <a href=\"/\"><h1>ASTROKID</h1></a>\n  <div class=\"container\">\n    <div class=\"col-md-7 bodyBrand\">\n        <h2 id=\"title\">{{title}}</h2>\n        <p>{{desc}}</p>\n        <a href=\"{{linkTarget}}\">\n        <div class=\"btn\">\n          EXPLORE\n        </div></a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/splash-explore/splash-explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashExploreComponent = (function () {
    function SplashExploreComponent(router, route, el) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.el = el;
        this.sub = this.route.params.subscribe(function (params) {
            _this.title = params['title'];
            _this.background = params['background'];
            _this.desc = params['description'];
            _this.linkTarget = params['link'];
        });
    }
    SplashExploreComponent.prototype.ngOnInit = function () {
    };
    SplashExploreComponent.prototype.getBackground = function () {
        return "url(" + this.background + ") no-repeat center center";
    };
    SplashExploreComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return SplashExploreComponent;
}());
SplashExploreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-splash-explore',
        template: __webpack_require__("../../../../../src/app/splash-explore/splash-explore.component.html"),
        styles: [__webpack_require__("../../../../../src/app/splash-explore/splash-explore.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], SplashExploreComponent);

var _a, _b, _c;
//# sourceMappingURL=splash-explore.component.js.map

/***/ }),

/***/ "../../../../../src/app/stars-selection/stars-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nnav {\n    /*background: rgba(255, 255, 255, 0);*/\n    background: rgba(255, 255, 255, 0);\n    margin: 0;\n    border: none;\n    padding: 10px;\n    /*box-shadow: 0px 0px 8px 0px #000000;*/\n}\n.myNav a{\n    color: #ffffff;\n    font-family: 'Saira', sans-serif;\n    display: block;\n    transition: all 0.4s;\n}\n.myNav a {\n    background: #00778c;\n}\n.myNav a:hover {\n    color: #00778c;\n    background: white;\n    border-bottom: 1px solid #00778c;\n}\n.navbar-brand {\n    font-size: 45px;\n    color: rgb(255, 255, 255);\n    font-family: 'Lato', sans-serif;\n}\n.navbar-brand:hover {\n    color: #FF4E50;\n}\n.navbar-brand h4 {\n    color: #018c82;\n}\nnav ul li {\n    font-family: 'Lato', sans-serif;\n    color: white;\n    font-size: 20px;\n}\n.jumbotron {\n    margin-bottom: 0;\n}\n.section_first {\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + __webpack_require__("../../../../../src/assets/img/materialImage/shiny_space.jpg") + ") no-repeat center;\n    background-size: cover;\n    height: 100vh;\n    color: white;\n    font-family: 'Saira', sans-serif;\n    text-align: center;\n}\n.section_first h2{\n    margin-top: 37vh;\n    font-size: 42px;\n    font-family: 'Saira', sans-serif;\n}\n.section_first i {\n    margin-top: 10px;\n    font-size: 47px;\n    color: white;\n}\n.stars_collection {\n    padding: 0;\n}\n.stars_collection h1 {\n    text-align: center;\n    color: rgb(4, 42, 60);\n}\n.stars_collection p {\n    text-align: center;\n    color: rgb(4, 42, 60);\n}\n.stars_collection hr {\n    width: 200px;\n    border: 1px solid rgb(4, 42, 60);\n}\n.instruction_holder {\n    background: rgb(237, 237, 237);\n    width: 100%;\n    padding: 10px;\n    font-family: 'Saira', sans-serif;\n    color: white;\n}\n.advice_card{\n    width: 100%;\n    height: 170px;\n    max-width: 340px;\n    margin: 0 auto;\n    margin-bottom: 10px;\n    background: white;\n    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.3);\n    transition: all 0.4s ease-in;\n}\n.headCard{\n    width: 100%;\n    height: 30%;\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + __webpack_require__("../../../../../src/assets/img/materialImage/calm_space.jpg") + ") no-repeat center;\n    background-size: cover;\n    padding: 10px;\n    color: rgb(255, 255, 255);\n}\n.cons_name {\n    font-size: 20px;\n    margin-left: 5px;\n}\n.bodyCard {\n    height: 50%;\n    padding: 10px;\n    color: rgb(70, 70, 70);\n    font-size: 14px;\n}\n.bodyCard .title {\n    font-size: 25px;\n}\n.bodyCard p {\n    font-size: 14px;\n    text-align: left;\n    color: rgb(55, 55, 55);\n}\n.footerCard {\n    height: 20%;\n    background: rgb(4, 42, 60);\n    color: white;\n    text-align: center;\n    font-size: 14px;\n    transition: all 0.4s ease-in;\n}\n.footerCard p {\n    color: white;\n    transition: all 0.4s ease-in;\n}\n.advice_card:hover {\n    box-shadow: 0 9px 18px 0 rgba(0,0,0,0.6);\n}\n.footer {\n    width: 100%;\n    height: 40px;\n    background: rgb(16, 15, 15);\n    color: white;\n    font-family: 'Saira', sans-serif;\n    text-align: center;\n    line-height: 40px;\n}\n#particles-js {\n    width: 100%;\n    position: absolute;\n    background: url(\"\");\n}\n.footerCard:hover {\n    cursor: pointer;\n    background: white;\n}\n.footerCard:hover p {\n    color: rgb(16, 15, 15);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stars-selection/stars-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" [@viewDown]=\"navIndicator\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Astrokid<br>\n        <h4 [@viewDown]=\"textIndicator\">Explore our universe</h4>\n      </a>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"myNavbard\">\n      <ul class=\"nav navbar-nav navbar-right myNav\">\n          <li><a href=\"#\">Cancel</a></li>\n      </ul>          \n    </div>\n  </div>\n</nav>\n<div class=\"jumbotron part\" id=\"particles-js\">\n\n</div>\n<div class=\"jumbotron section_first\">\n  <div class=\"container\">\n    <h2>Star Constelations</h2>\n    <p>Pilih rasi bintang favorit kamu</p>\n  </div>\n  <i class=\"fa  fa-angle-down\"></i><br>\n  Scroll\n</div>\n<div class=\"jumbotron stars_collection\">\n  <div class=\"instruction_holder\">\n    <div class=\"container\">\n      <h1>Constelations List</h1>\n      <p>Pilih rasi bintang dibawah ini</p>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n              <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Orion</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n              <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Ursa Major</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid at amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Ursa Minor</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid at amit dah\n                    Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Aquarius</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid at amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Aquila</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid at amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Orion</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid amitamit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Orion</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid am amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Orion</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid ami amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Orion</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigimit amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Orion</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigidit amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"container\">\n            <div class=\"advice_card\">\n             <div class=\"headCard\">\n                <i class=\"fa fa-space-shuttle\"></i>\n                <span class=\"cons_name\">Orion</span>\n              </div>\n              <div class=\"bodyCard\">\n                <p>Lorem ipsum sigid amitit dah\n                    Lorem ipsum sigid amit amit dah\n                    Lorem ipsum sigid amit amit dah...\n                </p>\n              </div>\n              <div class=\"footerCard\">\n                <p>Pilih</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n\n  </div>\n</div>\n<div class=\"footer\">\n    <span>Copyright Astrokid@2017</span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/stars-selection/stars-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarsSelectionComponent = (function () {
    function StarsSelectionComponent(el) {
        this.el = el;
        this.textIndicator = 'text_show';
        this.navIndicator = 'nav_fixed';
    }
    StarsSelectionComponent.prototype.checkScroll = function () {
        var nowViewPosition = window.scrollY;
        if (nowViewPosition >= this.el.nativeElement.querySelector('.stars_collection').offsetTop - 300) {
            this.textIndicator = 'text_fade';
            this.navIndicator = 'nav_changed';
        }
        else {
            this.textIndicator = 'text_show';
            this.navIndicator = 'nav_fixed';
        }
    };
    StarsSelectionComponent.prototype.ngOnInit = function () {
        particlesJS.load('particles-js', '../../assets/json/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    };
    return StarsSelectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StarsSelectionComponent.prototype, "checkScroll", null);
StarsSelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stars-selection',
        template: __webpack_require__("../../../../../src/app/stars-selection/stars-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stars-selection/stars-selection.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('viewDown', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('text_fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: 'translateX(100%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('text_show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('nav_changed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    background: 'rgb(19, 44, 65)',
                    'box-shadow': '0px 0px 8px 0px #000000'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('nav_fixed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    background: 'rgba(255,255,255,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('text_show <=> text_fade', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('nav_fixed <=> nav_changed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], StarsSelectionComponent);

var _a;
//# sourceMappingURL=stars-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,300);", ""]);

// module
exports.push([module.i, "nav {\n    /*background: rgba(255, 255, 255, 0);*/\n    background: rgba(255, 255, 255, 0);\n    margin: 0;\n    border: none;\n    padding: 10px;\n    /*box-shadow: 0px 0px 8px 0px #000000;*/\n}\n.myNav a{\n    color: #ffffff;\n    font-family: 'Saira', sans-serif;\n    display: block;\n    transition: all 0.4s;\n}\n.myNav a:hover {\n    color: #00778c;\n    border-bottom: 1px solid white;\n}\n.navbar-brand {\n    font-size: 45px;\n    color: rgb(255, 255, 255);\n    font-family: 'Lato', sans-serif;\n}\n.navbar-brand:hover {\n    color: rgb(255, 255, 255);\n}\n.navbar-brand h4 {\n    color: #018c82;\n}\nnav ul li {\n    font-family: 'Lato', sans-serif;\n    color: white;\n    font-size: 20px;\n}\n.jumbotron {\n    margin-bottom: 0;\n}\n.welcome_section{\n    background: url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/astronout_wall.png") + ") no-repeat center center;\n    background-size: cover;\n    min-height: 100vh;\n    font-family: 'Lato', sans-serif;\n    margin-bottom: 0;\n    top: 0;\n    text-align: center;\n    color: #ffffff;\n}\n\n.welcome_section .container{\n    margin-top: 40vh;\n}\n.white_{\n    font-family: 'Lato', sans-serif;\n    color: white;\n    font-size: 40px;\n}\n.my_icon\n{\n    width: 100px;\n    height: auto;\n    margin: 0 auto;\n    margin-top: 10%;\n}\n.exp_button{\n    color: #09407b;\n    width: 100px;\n    height: 40px;\n    background: white;\n    line-height: 40px;\n    box-shadow: 0px 0px 2px 0px #000000;\n    font-family: 'Lato', sans-serif;\n    font-size: 15px;\n    margin: 0 auto;\n    margin-top: 40px;\n    margin-bottom: 90px;\n    border-radius: 5px;\n    text-shadow: 0px 0px 0px #1f6287;\n    transition: all 0.4s ease-in;\n}\n.exp_button:hover {\n    border-radius: 0;\n    cursor: pointer;\n}\n.register {\n    font-size: 14px;\n    color: white;\n    text-shadow: 0px 0px 0px #1f6287;\n}\n.section1{\n    height: auto;\n    /*background: url(\"../assets/img/nebula.jpg\");  */\n    background: rgb(5, 21, 37);\n    font-family: 'Saira', sans-serif;\n}\n.diff {\n    color: #d55703;\n}\n.diff1 {\n    color: #3966fa;\n}\n.astro img{\n    width: 380px;\n    height: auto;\n    margin: 0 auto;\n    transition: all 0.4s;\n}\n.section1_title\n{\n    background: #FF4E50;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #F9D423, #FF4E50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-size: 48px;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n.sec1 {\n    border: 2px solid transparent;\n    -o-border-image: linear-gradient(to right, #c0392b, #8e44ad);\n       border-image: linear-gradient(to right, #c0392b, #8e44ad);\n    font-family: 'Saira', sans-serif;\n    border-image-slice: 1;\n    margin-bottom: 10px;\n}\n.section2\n{\n    background: #2980b9;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, rgba(5, 21, 37, 0.5), rgba(41, 128, 185, 0.4)), url(" + __webpack_require__("../../../../../src/assets/img/bannerbackground.jpg") + ") no-repeat center center; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */    \n    background-size: cover;\n    font-family: 'Saira', sans-serif;\n    color: white;\n}\n.desc1{\n    font-size: 14px;\n    color: white;\n}\n.section2_title\n{\n    font-family: 'Saira', sans-serif;\n    background: #40E0D0;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to left, #FF0080, #FF8C00, #40E0D0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    font-size: 40px;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    transition: all 0.4s;\n}\n.section_explore_title {\n    font-family: 'Saira', sans-serif;\n    font-size: 40px;\n    transition: all 0.4s;\n    text-shadow: 0px 2px 0px #000000;\n    color: white;\n}\n.desc2 {\n    color: white;\n}\n.section3{\n    height: auto;\n    background: linear-gradient( rgba(0, 0, 36, 0.0), rgba(0, 0, 36, 0.0) ),  url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/solarsystem.png") + ") no-repeat center;\n    background-size: cover;\n    font-family: 'Saira', sans-serif;\n}\n.solarS {\n    float: right;\n}\n.content{\n    padding: 10px;\n    margin: 0 auto;\n}\n.contentCore{\n    width: 100%;\n    margin: 0 auto;\n    height: 460px;\n    max-width: 350px;\n    color: white;\n    padding: 20px;\n    background: transparent;\n    border: 0.5px solid transparent;\n    -o-border-image: linear-gradient(to top, #30e8bf, #ff8235);\n       border-image: linear-gradient(to top, #30e8bf, #ff8235);\n    border-image-slice: 1;\n    box-shadow: 0px 0px 4px 0px #1d1d1d;\n}\n.contentSec {\n    width: 100%;\n    margin: 0 auto;\n    height: 80px;\n    color: white;\n    padding: 20px;\n    background: transparent;\n    border: 0.5px solid transparent;\n    -o-border-image: linear-gradient(to top, #30e8bf, #ff8235);\n       border-image: linear-gradient(to top, #30e8bf, #ff8235);\n    border-image-slice: 1;\n    box-shadow: 0px 0px 4px 0px #1d1d1d;\n}\n.contentCore h2 {\n  text-align: center;\n}\n.gal_btn {\n  width: 120px;\n  height: 40px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 1);\n  color: black;\n  text-align: center;\n  line-height: 40px;\n}\n.contentCore p {\n  margin-top: 10px;\n  font-size: 12px;\n  text-align: justify;\n}\n.contentCore img {\n  width: 240px;\n  height: auto;\n  margin: 0 auto;\n  border: 1px solid white;\n  border-radius: 5px;\n}\n.starGate{\n    background: #ffffff;\n}\n.section3 .container{\n    margin-top: 10px;\n}\n[data-animate-in=\"up\"] {\n    -webkit-transform:translate3d(0, 24px, 0);\n            transform:translate3d(0, 24px, 0)\n   }\n.section4 {\n  height: auto;\n  background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/stars.jpg") + ") no-repeat center;\n  background-size: cover;\n  font-family: 'Saira', sans-serif;\n  padding: 20px;\n  color: black;\n}\n\n.section5 {\n  background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),  url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/galaxiesEx.jpg") + ") no-repeat;\n  background-size: cover;\n}\n.section6 {\n    background: url(" + __webpack_require__("../../../../../src/assets/img/welcome_img/register_now.jpg") + ") no-repeat center;\n    background-size: cover;\n    text-align: center;\n    color: white;\n    text-shadow: 0px 2px 0px #1f6287;\n    font-family: 'Saira', sans-serif;\n}\n.not-visible {\n    visibility: hidden;\n}\n\n.my-float{\n\tmargin-top:22px;\n}\n.galaxy {\n    float: right;\n}\n.submit_btn {\n    width: 85px;\n    height: 30px;\n    text-align: center;\n    line-height: 30px;\n    border-radius: 5px;\n    font-size: 18px;\n    background: white;\n    font-family: 'Saira', sans-serif;\n    color: rgb(5, 21, 37);\n    transition: all 0.4s ease-in;\n}\n.register_btn {\n    width: 100px;\n    height: 40px;\n    text-align: center;\n    line-height: 40px;\n    border-radius: 5px;\n    font-size: 18px;\n    background: white;\n    font-family: 'Saira', sans-serif;\n    color: rgb(5, 21, 37);\n    margin: 0 auto;\n}\n.register_btn:hover {\n    cursor: pointer;\n}\n.section7 {\n    background: #f7f7f7;\n    text-align: center;\n}\n.section7 p {\n    font-size: 14px;\n    text-align: left;\n}\n.section7 .col-md-4 {\n    padding: 30px;\n}\n.section7 .row {\n    margin: 0 auto;\n}\n.software_icon {\n    width: 50px;\n    height: auto;\n    margin: 0 auto;\n    border: 1px solid white;\n    border-radius: 20px;\n}\nfooter { background-color:#0c1a1e; min-height:350px; font-family: 'Open Sans', sans-serif; }\n.footerleft { margin-top:50px; padding:0 36px; }\n.logofooter { margin-bottom:10px; font-size:25px; color:#fff; font-weight:700;}\n\n.footerleft p { color:#fff; font-size:12px !important; font-family: 'Open Sans', sans-serif; margin-bottom:15px;}\n.footerleft p i { width:20px; color:#999;}\n\n\n.paddingtop-bottom {  margin-top:50px;}\n.footer-ul { list-style-type:none;  padding-left:0px; margin-left:2px;}\n.footer-ul li { line-height:29px; font-size:12px;}\n.footer-ul li a { color:#a0a3a4; transition: color 0.2s linear 0s, background 0.2s linear 0s; }\n.footer-ul i { margin-right:10px;}\n.footer-ul li a:hover {transition: color 0.2s linear 0s, background 0.2s linear 0s; color:#ff670f; }\n\n.social:hover {\n     -webkit-transform: scale(1.1);\n     -moz-transform: scale(1.1);\n     -o-transform: scale(1.1);\n }\n \n \n\n \n .icon-ul { list-style-type:none !important; margin:0px; padding:0px;}\n .icon-ul li { line-height:75px; width:100%; float:left;}\n .icon { float:left; margin-right:5px;}\n \n \n .copyright { min-height:40px; background-color:#000000;}\n .copyright p { text-align:left; color:#FFF; padding:10px 0; margin-bottom:0px;}\n .heading7 { font-size:21px; font-weight:700; color:#d9d6d6; margin-bottom:22px;}\n .post p { font-size:12px; color:#FFF; line-height:20px;}\n .post p span { display:block; color:#8f8f8f;}\n .bottom_ul { list-style-type:none; float:right; margin-bottom:0px;}\n .bottom_ul li { float:left; line-height:40px;}\n .bottom_ul li:after { content:\"/\"; color:#FFF; margin-right:8px; margin-left:8px;}\n .bottom_ul li a { color:#FFF;  font-size:12px;}\n .software_h {\n     font-size: 35px;\n     font-family: 'Saira', sans-serif;\n     color: #0c284d;\n     margin-bottom: 10px;\n }\n .software_title {\n     font-size: 20px;\n     font-family: 'Saira', sans-serif;\n     color: #272727;\n }\n .submit_btn:hover {\n     cursor: pointer;\n     box-shadow: 0 5px 15px 0 rgba(95,186,233,0.4);\n }\n .section2 .col-md-4, .section3 .col-md-4, \n .section4 .col-md-4, .section5 .col-md-4, .section6 .col-md-4 {\n     padding: 20px;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" [@elementShow]=\"visible\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Astrokid<br>\n        <h4>Explore our universe</h4>\n      </a>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"myNavbard\">\n      <ul class=\"nav navbar-nav navbar-right myNav\">\n          <li><a href=\"#\">Home</a></li>\n          <li><a routerLink=\"/aboutus\">About Us</a></li>\n          <li><a href=\"#\">Contact Us</a></li>\n          <li><a routerLink=\"/login\">Log In</a></li>\n      </ul>          \n    </div>\n  </div>\n</nav>\n<div class=\"jumbotron welcome_section\">\n  <div class=\"container\">\n    \n    <p class=\"white_\"><span class=\"diff\">Explore</span> your <span class=\"diff1\">curiosity</span></p>\n    \n    <div routerLink=\"/register\" class=\"exp_button\">\n      Explore\n    </div>\n  </div>\n</div>\n<div class=\"jumbotron section1\" id=\"firstSec\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <h2 class=\"section1_title\">Astronomy</h2>\n            <p class=\"desc1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n        </div>\n        <div class=\"col-md-4\">\n            <h2 class=\"section1_title\">Imagination</h2>\n            <p class=\"desc1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n        </div>\n        <div class=\"col-md-4\">\n            <h2 class=\"section1_title\">Exploration</h2>\n            <p class=\"desc1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n        </div>\n    </div>\n  </div>\n</div>\n<div class=\"jumbotron section2\">\n  <div class=\"container\" [@scrollAnimation]=\"state\">\n    <div class=\"col-md-4\">\n      <h1 class=\"section_explore_title\"> <span class=\"diff1\">Explore</span> with your self </h1>\n      <hr>\n      <p class=\"desc1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n          \n    </div>\n  </div>\n</div>\n<div class=\"jumbotron section3\">\n  <div class=\"container\">\n    <div class=\"col-md-4 solarS\">\n        <h1 class=\"section_explore_title\"> <span class=\"diff1\">Explore</span> Solar System </h1>\n        <hr>\n        <p class=\"desc1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        </p>\n        <div class=\"submit_btn\">\n          <i class=\"fa fa-caret-right \"></i>\n            Start\n        </div>\n    </div>\n  </div>\n</div>\n<div class=\"jumbotron section4\">\n    <div class=\"container\">\n        <div class=\"col-md-4\">\n            <h1 class=\"section_explore_title\"> <span class=\"diff1\">Explore</span> human history in Astronomy</h1>\n            <hr>\n            <p class=\"desc1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n            <div (click)=\"goToHumanTech()\" class=\"submit_btn\">\n              <i class=\"fa fa-caret-right \"></i>\n              Start\n            </div>    \n        </div>\n      </div>\n</div>\n<div class=\"jumbotron section5\">\n  <div class=\"container\">\n      <div class=\"col-md-4 galaxy\">\n          <h1 class=\"section_explore_title\"> <span class=\"diff1\">Explore</span> Galaxies </h1>\n          <hr>\n          <p class=\"desc1\">Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n          <div class=\"submit_btn\">\n            <i class=\"fa fa-caret-right \"></i>\n            Start\n          </div>   \n      </div>\n  </div>\n</div>\n<div class=\"jumbotron section6\">\n  <div class=\"container\">\n   <h1>Register Now</h1>\n   <p>Find your best experience with us</p>\n  </div>\n  <div routerLink=\"register\" class=\"register_btn\">\n    <i class=\"fa  fa-rocket\"></i>\n  </div>\n</div>\n<div class=\"jumbotron section7\">\n  <div class=\"container\">\n      <span class=\"software_h\">Software yang dapat membantu</span>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <img src=\"../../assets/icon/celestia.png\" alt=\"\" class=\"img-responsive software_icon\">\n        <span class=\"software_title\">Celestia</span>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"../../assets/icon/cybersky.png\" alt=\"\" class=\"img-responsive software_icon\">\n        <span class=\"software_title\">CyberSky</span>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"../../assets/icon/stellarium.png\" alt=\"\" class=\"img-responsive software_icon\">\n        <span class=\"software_title\">Stellarium</span>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-6 footerleft \">\n          <div class=\"logofooter\"> ASTROKID</div>\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>\n          <p><i class=\"fa fa-map-pin\"></i> Jl.Garu I Gg.Ketapang No.3, Medan, Indonesia</p>\n          <p><i class=\"fa fa-phone\"></i> Phone (Indonesia) : +62 853 7503 4433</p>\n          <p><i class=\"fa fa-envelope\"></i> E-mail : robbybellamy6@gmail.com</p>\n          \n        </div>\n        <div class=\"col-md-2 col-sm-6 paddingtop-bottom\">\n          <h6 class=\"heading7\">GENERAL LINKS</h6>\n          <ul class=\"footer-ul\">\n            <li><a href=\"#\"> Register</a></li>\n            <li><a href=\"#\"> About Us</a></li>\n            <li><a href=\"#\"> Terms & Conditions</a></li>\n            <li><a href=\"#\"> Login</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\n          <h6 class=\"heading7\">LATEST POST</h6>\n          <div class=\"post\">\n            <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n            <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n            <p>facebook crack the movie advertisment code:what it means for you <span>August 3,2015</span></p>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 paddingtop-bottom\">\n          <div class=\"fb-page\" data-href=\"https://www.facebook.com/facebook\" data-tabs=\"timeline\" data-height=\"300\" data-small-header=\"false\" style=\"margin-bottom:15px;\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\">\n            <div class=\"fb-xfbml-parse-ignore\">\n              <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Facebook</a></blockquote>\n              <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Instagram</a></blockquote>\n              <blockquote cite=\"https://www.facebook.com/facebook\"><a href=\"#\">Twitter</a></blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <!--footer start from here-->\n  \n  <div class=\"copyright\">\n    <div class=\"container\">\n      <div class=\"col-md-6\">\n        <p>© 2017 - All Rights with Astrokid</p>\n      </div>\n      <div class=\"col-md-6\">\n       \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/welcome-page/welcome-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WelcomePageComponent = (function () {
    function WelcomePageComponent(el, route, router) {
        this.el = el;
        this.route = route;
        this.router = router;
        this.title = 'Astrokid';
        this.state = 'hide';
        this.state1 = 'hide';
        this.imgState = 'right';
        this.visible = 'visible';
    }
    WelcomePageComponent.prototype.checkScroll = function () {
        // tslint:disable-next-line:max-line-length
        var componentPosition = this.el.nativeElement.querySelector('.section2').offsetTop - 550;
        var anotherComponentPost = this.el.nativeElement.querySelector('.section3').offsetTop - 550;
        var scrollPosition = window.scrollY;
        console.log(scrollPosition.toString() + ' : ' + componentPosition.toString());
        if (scrollPosition >= componentPosition) {
            this.state = 'show';
        }
        else {
            this.state = 'hide';
        }
        if (scrollPosition >= anotherComponentPost) {
            this.state1 = 'show';
        }
        else {
            this.state1 = 'hide';
        }
        if (scrollPosition >= this.el.nativeElement.querySelector('.section1').offsetTop - 420) {
            this.visible = 'hide';
            this.imgState = 'show';
        }
        else {
            this.visible = 'showNav';
            this.imgState = 'right';
        }
        if (scrollPosition >= this.el.nativeElement.querySelector('.section3').offsetTop) {
            this.state = 'hide';
        }
    };
    WelcomePageComponent.prototype.ngOnInit = function () {
    };
    WelcomePageComponent.prototype.goToHumanTech = function () {
        var routerlink = "humantechnology";
        var backgroundProperty = "../../assets/img/materialImage/human_tech.jpeg";
        var title = "Knowledge is our power";
        var some_desc = "Never stop searching and learning";
        this.router.navigate(['/exploration', { link: routerlink, background: backgroundProperty,
                title: title, description: some_desc }]);
    };
    return WelcomePageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WelcomePageComponent.prototype, "checkScroll", null);
WelcomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome-page',
        template: __webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome-page/welcome-page.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('scrollAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: 'translateY(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: 'translateY(-20%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('600ms ease-in'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* trigger */])('elementShow', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('right', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 0,
                    transform: 'translateX(20%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('left', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    transform: 'translateX(10%)',
                    opacity: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* state */])('showNav', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({
                    opacity: 1
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('showNav => hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('left => show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('right => show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('show => right', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('hide => showNav', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WelcomePageComponent);

var _a, _b, _c;
//# sourceMappingURL=welcome-page.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/bannerbackground.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bannerbackground.99e18e4ac07f2cd7f04b.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/bigbang_wall.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bigbang_wall.76f30df8b5d585581683.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/calm_space.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "calm_space.4dbecee5021015a5c90b.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/city.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "city.8150d7fbabfa3da5bdc4.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/dashboard.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dashboard.03b98bcf47dc44a49a46.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/dashboard_wall.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dashboard_wall.591bebbe8a790465dc1f.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/history.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "history.3ef4814490e2ed096c86.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/human_technology1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "human_technology1.cebda6fad5d30f92f3f9.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/moon.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "moon.3e8db983b55aa3567862.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/materialImage/shiny_space.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "shiny_space.8bd842efbcce5dddcb7b.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/space.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "space.ed4c15b0c6e329982394.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/team_pic/robby.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "robby.f2932120d0300b8e390f.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/team_pic/tommy.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tommy.cafe3d6afa351ffb5b00.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/team_pic/vinson.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vinson.7af0b4b8a5cb44a6862d.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/welcome_background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "welcome_background.bc03b70271bb79f4aab5.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/welcome_img/astronout_wall.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "astronout_wall.778ec97e26485e268b97.png";

/***/ }),

/***/ "../../../../../src/assets/img/welcome_img/galaxiesEx.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "galaxiesEx.e2e1c1a0038c95667744.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/welcome_img/register_now.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "register_now.8ae740a55b920763fa41.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/welcome_img/solarsystem.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "solarsystem.5a8a20c70e20b93d1312.png";

/***/ }),

/***/ "../../../../../src/assets/img/welcome_img/stars.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "stars.9c6a19bdca159015e77b.jpg";

/***/ }),

/***/ "../../../../../src/assets/img/welcome_img/starse.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "starse.711d60e5c45449f6f7eb.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map