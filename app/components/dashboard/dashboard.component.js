"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var drakkar_service_1 = require('../../services/drakkar.service');
var DashboardComponent = (function () {
    function DashboardComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    DashboardComponent.prototype.getInfo = function () {
        var _this = this;
        this.apiService.getInfo()
            .subscribe(function (info) {
            _this.power = info.power;
            _this.mode = info.mode;
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getInfo();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            providers: [drakkar_service_1.DrakkarService]
        }), 
        __metadata('design:paramtypes', [drakkar_service_1.DrakkarService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map