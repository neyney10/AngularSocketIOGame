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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\r\n    width: 100%;\r\n    height:100%;\r\n}\r\n\r\n \r\ndiv {\r\n    display:inline;\r\n}\r\n\r\n \r\n.msg-container {\r\n    text-align: center;\r\n}\r\n\r\n \r\n.msg {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    width:80%;\r\n    min-width: 100px;\r\n    min-height: 20px;\r\n    padding:5px;\r\n    background-color: rgba(55, 55, 55, 0.5);\r\n    color: blue;\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n    border-radius: 15px;\r\n    border: 2px solid black;\r\n    /* display: none; */\r\n}\r\n\r\n \r\n.show {\r\n    display: block;\r\n}\r\n\r\n \r\n.loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    box-shadow: inset 0px 0px 15px 1px rgb(97, 99, 192);\r\n\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n    display: block;\r\n    margin: auto auto;\r\n}\r\n\r\n \r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n \r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"content\" *ngIf=\"this.gameService.loadingStage >= this.gameService.endStage; else loading\">\n    <app-toolbar [selectedMenu]=\"selectedMenu\"></app-toolbar>\n    <app-home [hidden]=\"selectedMenu != menu.home\"></app-home>\n    <app-inventory-profile [hidden]=\"selectedMenu != menu.inv_prof\"></app-inventory-profile>\n    <app-battle [hidden]=\"selectedMenu != menu.battle\"></app-battle>\n    <app-stats [hidden]=\"selectedMenu != menu.stats\"></app-stats>\n    <app-floors [hidden]=\"selectedMenu != menu.floors\"></app-floors>\n    <app-info *ngIf=\"selectedMenu == menu.info\"></app-info>\n    \n</div>\n<ng-template #loading>\n    Loading... Please Wait while connecting to Game Server. <br>\n    Loading: {{ this.gameService.loadingStage }} out of {{ this.gameService.endStage }}\n\n    <div class=\"loader\"></div> \n</ng-template>\n\n<div class=\"msg-container\">\n    <div class=\"msg\" *ngIf=\"this.gameService.msg != null\">\n        <span >{{ this.gameService.msg }}</span>\n    </div>\n</div>\n\n\n\n"

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
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.menu = this.gameService.menu;
        this.selectedMenu = gameService.selectedMenu;
        gameService.onSelectedMenuEvent.subscribe(function (menu) {
            _this.selectedMenu = menu;
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _components_battle_battle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/battle/battle.component */ "./src/app/components/battle/battle.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stats/stats.component */ "./src/app/components/stats/stats.component.ts");
/* harmony import */ var _components_inventory_profile_inventory_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inventory-profile/inventory-profile.component */ "./src/app/components/inventory-profile/inventory-profile.component.ts");
/* harmony import */ var _components_floors_floors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/floors/floors.component */ "./src/app/components/floors/floors.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/tooltip.directive */ "./src/app/directives/tooltip.directive.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_battle_battle_component__WEBPACK_IMPORTED_MODULE_5__["BattleComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"],
                _components_stats_stats_component__WEBPACK_IMPORTED_MODULE_7__["StatsComponent"],
                _components_inventory_profile_inventory_profile_component__WEBPACK_IMPORTED_MODULE_8__["InventoryProfileComponent"],
                _components_floors_floors_component__WEBPACK_IMPORTED_MODULE_9__["FloorsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_11__["TooltipDirective"],
                _components_info_info_component__WEBPACK_IMPORTED_MODULE_12__["InfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            providers: [_services_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebSocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/battle/battle.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/battle/battle.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    margin: 2px auto;\r\n}\r\n\r\nbutton {\r\n    width:75px;\r\n    height:35px;\r\n}\r\n\r\nhr {\r\n    border-bottom: 2px solid black;\r\n    box-shadow: 0px -2px 5px 2px gray;\r\n}\r\n\r\n#battlearea {\r\n    float: left; width: 100%;\r\n    margin-top: 25px;\r\n}\r\n\r\n#battlearea p{\r\n    font-size: 12px;\r\n }\r\n\r\n#battleplayer {\r\n    float:left;\r\n    margin-right: 300px;\r\n    overflow: auto;\r\n}\r\n\r\n.healthbar-container {\r\n    width: 255px;\r\n    height:30px;\r\n    background-color: gray;\r\n    margin:1px 10px;\r\n    border-radius: 10px;\r\n    border: 1px solid black;\r\n    overflow: hidden;\r\n}\r\n\r\n.healthbar {\r\n    width: 100%;\r\n    height:30px;\r\n    background-color: green;\r\n    margin: 0 0;\r\n}\r\n\r\n.manabar {\r\n    width: 100%;\r\n    height:30px;\r\n    background-color: blue;\r\n    margin: 0 0;\r\n}\r\n\r\n#battleenemy {\r\n    width: 310px;\r\n    float:right;\r\n    margin:0;\r\n    overflow: auto;\r\n}\r\n\r\n#battleenemy img {\r\n    float:right;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n#battleplayer .healthbar-container , #battleenemy .healthbar-container  {\r\n    position: relative;\r\n}\r\n\r\n#battleplayer .healthbar-container span, #battleenemy .healthbar-container span {\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    position: absolute;\r\n    bottom: 5px;\r\n    left:5px;\r\n\r\n}\r\n\r\n#battlelog {\r\n    border: 1px solid black;\r\n    width:450px;\r\n    height:300px;\r\n    overflow-y: scroll;\r\n    margin: 0 auto;\r\n    float:left;\r\n}\r\n\r\n#battleenemy button {\r\n    width:270px;\r\n    border: 1px double blue;\r\n    border-radius: 7px;\r\n    background-color: chartreuse;\r\n    margin-right:4px;\r\n    transition: 0.25s;\r\n}\r\n\r\n#battleenemy button:hover{\r\n    background-color: green;\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n}\r\n\r\n#battleattacks, #battledefences {\r\n    width:40%;\r\n    float:left;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n}\r\n\r\n#battleoptions button {\r\n    width:155px;\r\n    border: 1px double darkred;\r\n    margin-right:4px;\r\n    transition: 0.25s;\r\n}\r\n\r\n#battleoptions button:hover{\r\n    background-color: gray;\r\n    cursor: pointer;\r\n    font-weight: 700;\r\n}\r\n\r\n.tooltip {\r\n    background-color: rgba(133, 201, 206, 0.85);\r\n    border: 3px solid  rgba(55, 55, 55, 0.637);\r\n    box-shadow: 2px 2px 5px 1px black;\r\n    padding: 3px;\r\n    position:fixed;\r\n    display: none;\r\n    overflow:hidden;\r\n    font-size: 18px;\r\n    max-width: 500px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/battle/battle.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/battle/battle.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"battlearea\">\n  <div id=\"battleplayer\">\n      <img src=\"assets/{{ this.gameService.charImage }}\" alt=\"MERLIN the sorccerer\" \n      [@attack-magicorb]=\"attacking[2] ? 'attack' : 'stand'\" \n      (@attack-magicorb.done)=\"animationDone($event)\"\n      [@attack-punch]=\"attacking[0] ? 'attack' : 'stand'\" \n      (@attack-punch.done)=\"animationDone($event)\"\n      [@attack-swordslash]=\"attacking[1] ? 'attack' : 'stand'\" \n      (@attack-swordslash.done)=\"animationDone($event)\"\n      [@defence-evade]=\"defencing[0] ? 'defend' : 'stand'\" \n      (@defence-evade.done)=\"animationDone($event)\"\n      [@defence-handguard]=\"defencing[1] ? 'defend' : 'stand'\" \n      (@defence-handguard.done)=\"animationDone($event)\"\n      [@defence-shield]=\"defencing[2] ? 'defend' : 'stand'\" \n      (@defence-shield.done)=\"animationDone($event)\">\n      <div class=\"healthbar-container\">\n          <div class=\"healthbar\" #playerhb></div>\n        <span #pl>Health Points: {{ player.health }}/{{ player.maxhealth }}</span>\n      </div>\n      <div class=\"healthbar-container\">\n            <div class=\"manabar\" #playermb></div>\n            <span #plm>Mana Points: {{ player.mana }}/{{ player.maxmana }}</span>\n      </div>\n  </div>\n  <div id=\"battlelog\">\n      <p *ngFor=\"let log of battleLogs\"> {{ log }} <br></p>\n  </div>\n  <div id=\"battleenemy\">\n      <img src=\"assets/Minion2.png\" alt=\"Minion of Mordred\"\n      [@Eattack-punch]=\"Eattacking[0] ? 'attack' : 'stand'\" \n      (@Eattack-punch.done)=\"EanimationDone($event)\"\n      [@Eattack-swordslash]=\"Eattacking[1] ? 'attack' : 'stand'\" \n      (@Eattack-swordslash.done)=\"EanimationDone($event)\"\n      [@Edefence-evade]=\"Edefencing[0] ? 'defend' : 'stand'\" \n      (@Edefence-evade.done)=\"EanimationDone($event)\"\n      [@Edefence-handguard]=\"Edefencing[1] ? 'defend' : 'stand'\" \n      (@Edefence-handguard.done)=\"EanimationDone($event)\"\n      [@Edefence-shield]=\"Edefencing[2] ? 'defend' : 'stand'\" \n      (@Edefence-shield.done)=\"EanimationDone($event)\"\n      [@Erevive]=\"animateEnemyRevive? 'dead' : 'alive'\" \n      (@Erevive.done)=\"EanimationDone($event)\">\n      <div class=\"healthbar-container\">\n          <div class=\"healthbar\" #enemyhb></div>\n          <span #en>Health Points: {{ enemy.health }}/{{ enemy.maxhealth }}</span>\n      </div>\n      <div class=\"healthbar-container\">\n            <div class=\"manabar\" #enemymb></div>\n            <span #enm>Mana Points: {{ enemy.mana }}/{{ enemy.maxmana }}</span>\n      </div>\n      <button *ngIf=\"battleOver && player.alive()\" (click)=\"clickAdvance()\">Advance</button>\n  </div>\n</div>\n<br><br><br>\n<hr>\n<div id=\"battleoptions\">\n  <div id=\"battleattacks\">\n    Attacks:\n    <button *ngFor=\"let attack of gameService.attacks\"\n    [disabled]=\"player.mana < attack.manaCost\"\n    (click)=\"clickAttack(attack.id)\"\n    [showTooltip]=\"tooltip\"\n    [text]=tooltipsText[attack.id]>\n    {{ attack.name }} ({{attack.baseDamage}})\n    </button>\n </div>\n  <div id=\"battledefenses\">\n    Defences:\n    <button *ngFor=\"let defence of gameService.defences\"\n      (click)=\"clickDefence(defence.id)\"\n      [showTooltip]=\"tooltip\"\n      [text]=tooltipsText[gameService.attacks.length+defence.id]>\n      {{ defence.name }} ({{defence.chance}}%)\n    </button>\n  </div>\n</div>\n\n\n<span class=\"tooltip\" #tooltip></span>"

/***/ }),

/***/ "./src/app/components/battle/battle.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/battle/battle.component.ts ***!
  \*******************************************************/
/*! exports provided: BattleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/message.model */ "./src/app/models/message.model.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BattleComponent = /** @class */ (function () {
    function BattleComponent(gameService) {
        this.gameService = gameService;
        this.battleLogs = [];
        this.tooltipsText = ["[Punch] Damage: 10, Mana Cost: 2",
            "[Sword Slash] Damage: 20, Mana Cost: 6",
            "[Magic Orb] Damage: 25, Mana Cost: 9",
            "[Evade] Reduction: 100%, Block Chance: 85% ,Mana Gain: 8",
            "[Hand Guard] Reduction: 45%, Block Chance: 85% ,Mana Gain: 6",
            "[Shield] Reduction: 85%, Block Chance: 65% , Mana Gain: 5"];
        this.enemy = new _models_player_model__WEBPACK_IMPORTED_MODULE_2__["Player"]();
        //battle properties
        this.battleOver = false;
        this.attacking = [false, false, false];
        this.defencing = [false, false, false];
        this.Eattacking = [false, false, false]; //enemy
        this.Edefencing = [false, false, false]; //enemy
        this.animating = false;
        this.animateEnemyRevive = false;
    }
    BattleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.player = this.gameService.player;
        this.battleSubject = this.gameService.battleSubject;
        //Start Battle
        this.battleOver = false;
        this.battleSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('start', 'start', ''));
        this.battleSubject.subscribe(function (data) {
            _this.battleLogs.push("[" + data.type + "] (" + data.event + "): " + JSON.stringify(data.data));
            switch (data.type) {
                case "update":
                    switch (data.event) {
                        case "characters-status":
                            ////////////////////////////
                            /////////// ENEMY //////////
                            ////////////////////////////
                            _this.enemy.updateHealthPoints(data.data.enemy.health);
                            console.log('debug - enemy - health] ' + _this.enemy.health + " / " + _this.enemy.maxhealth + " | type: " + data.type);
                            _this.enemy.updateManaPoints(data.data.enemy.mana);
                            _this.enemyHBRef.nativeElement.style.width = ((_this.enemy.health / _this.enemy.maxhealth) * 100) + "%";
                            _this.enemyMBRef.nativeElement.style.width = ((_this.enemy.mana / _this.enemy.maxmana) * 100) + "%";
                            //animate
                            if (data.data.enemy.isAttack)
                                _this.Eattacking[data.data.enemy.action] = true;
                            else
                                _this.Edefencing[data.data.enemy.action] = true;
                            if (data.data.enemy.isDead) {
                                _this.enemy.updateHealthPoints({ amount: 0, max: _this.enemy.maxhealth });
                                _this.enemyRef.nativeElement.style.backgroundColor = 'red';
                                _this.battleOver = true;
                            }
                            ////////////////////////////
                            ///////// PLAYER ///////////
                            ////////////////////////////
                            _this.player.updateHealthPoints(data.data.player.health);
                            _this.player.updateManaPoints(data.data.player.mana);
                            _this.playerHBRef.nativeElement.style.width = ((_this.player.health / _this.player.maxhealth) * 100) + "%";
                            _this.playerMBRef.nativeElement.style.width = ((_this.player.mana / _this.player.maxmana) * 100) + "%";
                            //animate
                            if (data.data.player.isAttack)
                                _this.attacking[data.data.player.action] = true;
                            else
                                _this.defencing[data.data.player.action] = true;
                            if (data.data.player.isDead) {
                                _this.player.updateHealthPoints({ amount: 0, max: _this.player.maxhealth });
                                _this.playerRef.nativeElement.style.backgroundColor = 'red';
                                _this.battleOver = true;
                                console.log('server says that Player is dead');
                            }
                            console.log('player hp: ' + _this.player.health + ', player mana: ' + _this.player.mana);
                            break;
                        case "new-enemy":
                            _this.enemy.updateHealthPoints(data.data.health);
                            _this.enemy.updateManaPoints(data.data.mana);
                            console.log('debug - enemy - health] ' + _this.enemy.health + " / " + _this.enemy.maxhealth + " | type: " + data.type);
                            _this.enemyRef.nativeElement.style.backgroundColor = 'transparent';
                            _this.enemyHBRef.nativeElement.style.width = ((_this.enemy.health / _this.enemy.maxhealth) * 100) + "%";
                            _this.enemyMBRef.nativeElement.style.width = ((_this.enemy.mana / _this.enemy.maxmana) * 100) + "%";
                            _this.animateEnemyRevive = true;
                            break;
                    }
                    break;
            } // end first switch
        }); // end of subscribe
        //init playerSubject
        this.playerSubject = this.gameService.playerSubject;
        this.playerSubject.subscribe(function (m) {
            if (m.type == "floors" && m.event == "change") {
                _this.battleOver = false;
            }
        }); // end of subscribe
    }; // end function onInit
    BattleComponent.prototype.clickAttack = function (attackIndex) {
        if (!this.battleOver && !this.animating) {
            this.battleSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('action', 'move', { action: attackIndex, isAttack: true }));
            this.animating = true;
        }
    };
    BattleComponent.prototype.clickDefence = function (defenceIndex) {
        if (!this.battleOver && !this.animating) {
            this.battleSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('action', 'move', { action: defenceIndex, isAttack: false }));
            this.animating = true;
        }
    };
    BattleComponent.prototype.clickAdvance = function () {
        if (this.battleOver) {
            this.battleSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('advance', 'next', ''));
            this.battleOver = false; //NEED TO HANDLE THIS ON SERVER INSTEAD
        }
    };
    BattleComponent.prototype.animationDone = function ($event) {
        switch ($event.triggerName) {
            case "attack-punch":
                this.attacking[0] = false;
                break;
            case "attack-swordslash":
                this.attacking[1] = false;
                break;
            case "attack-magicorb":
                this.attacking[2] = false;
                break;
            case "defence-evade":
                this.defencing[0] = false;
                break;
            case "defence-handguard":
                this.defencing[1] = false;
                break;
            case "defence-shield":
                this.defencing[2] = false;
                break;
        }
        this.animating = false;
    };
    BattleComponent.prototype.EanimationDone = function ($event) {
        switch ($event.triggerName) {
            case "Eattack-punch":
                this.Eattacking[0] = false;
                break;
            case "Eattack-swordslash":
                this.Eattacking[1] = false;
                break;
            case "Eattack-magicorb":
                this.Eattacking[2] = false;
                break;
            case "Edefence-evade":
                this.Edefencing[0] = false;
                break;
            case "Edefence-handguard":
                this.Edefencing[1] = false;
                break;
            case "Edefence-shield":
                this.Edefencing[2] = false;
                break;
            case "Erevive":
                this.animateEnemyRevive = false;
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('en'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "enemyRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "playerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('enm'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "enemyMRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('plm'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "playerMRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('playerhb'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "playerHBRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('enemyhb'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "enemyHBRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('playermb'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "playerMBRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('enemymb'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "enemyMBRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tooltip'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BattleComponent.prototype, "tooltip", void 0);
    BattleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-battle',
            template: __webpack_require__(/*! ./battle.component.html */ "./src/app/components/battle/battle.component.html"),
            styles: [__webpack_require__(/*! ./battle.component.css */ "./src/app/components/battle/battle.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('attack-magicorb', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('attack => stand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px dashed blue',
                                marginLeft: '0px',
                                paddingRight: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '32px dotted blue',
                                marginLeft: '15px',
                                paddingRight: '35px',
                                opacity: 0.7,
                                offset: 0.12
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px dashed blue',
                                marginLeft: '0px',
                                paddingRight: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('attack-punch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => attack', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.61s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px solid gray',
                                borderRadius: '0px',
                                marginLeft: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '32px solid orange',
                                borderRadius: '40px',
                                marginLeft: '50px',
                                opacity: 0.7,
                                offset: 0.05
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px solid gray',
                                borderRadius: '0px',
                                marginLeft: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('attack-swordslash', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => attack', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px dashed gray',
                                borderRadius: '20px',
                                marginLeft: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '32px dashed crimson',
                                borderRadius: '40px',
                                marginLeft: '50px',
                                opacity: 0.7,
                                offset: 0.12
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px dashed gray',
                                borderRadius: '20px',
                                marginLeft: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('defence-evade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => defend', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1.0s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                border: '0px solid gray',
                                borderRadius: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                border: '18px solid gray',
                                borderRadius: '55px',
                                opacity: 0.1,
                                offset: 0.08
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                border: '0px solid gray',
                                borderRadius: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('defence-handguard', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => defend', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px solid gray',
                                borderRadius: '0px',
                                paddingRight: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '16px solid gray',
                                borderRadius: '22px',
                                paddingRight: '50px',
                                opacity: 0.7,
                                offset: 0.03
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px solid gray',
                                borderRadius: '0px',
                                paddingRight: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('defence-shield', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => defend', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px dashed gray',
                                borderRadius: '0px',
                                paddingRight: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '16px double brown',
                                borderRadius: '12px',
                                paddingRight: '50px',
                                opacity: 0.7,
                                offset: 0.03
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderRight: '0px dashed gray',
                                borderRadius: '0px',
                                paddingRight: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                //ENEMY
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('Eattack-punch', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => attack', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.61s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '0px solid gray',
                                borderRadius: '0px',
                                marginRight: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '42px solid orange',
                                borderRadius: '40px',
                                marginRight: '50px',
                                opacity: 0.7,
                                offset: 0.05
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '0px solid gray',
                                borderRadius: '0px',
                                marginRight: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('Eattack-swordslash', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => attack', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '0px dashed gray',
                                borderRadius: '20px',
                                marginRight: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '32px dashed crimson',
                                borderRadius: '40px',
                                marginRight: '50px',
                                opacity: 0.7,
                                offset: 0.12
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '0px dashed gray',
                                borderRadius: '20px',
                                marginRight: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('Edefence-evade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => defend', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1.0s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                border: '0px solid gray',
                                borderRadius: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                border: '18px solid gray',
                                borderRadius: '55px',
                                opacity: 0.1,
                                offset: 0.08
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                border: '0px solid gray',
                                borderRadius: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('Edefence-handguard', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => defend', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '0px solid gray',
                                borderRadius: '0px',
                                paddingLeft: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '16px solid gray',
                                borderRadius: '22px',
                                paddingLeft: '50px',
                                opacity: 0.7,
                                offset: 0.03
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '0px solid gray',
                                borderRadius: '0px',
                                paddingLeft: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('Edefence-shield', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('stand => defend', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '0px dashed gray',
                                borderRadius: '0px',
                                paddingLeft: '0px',
                                opacity: 1,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '16px double brown',
                                borderRadius: '12px',
                                paddingLeft: '50px',
                                opacity: 0.7,
                                offset: 0.03
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                borderLeft: '0px dashed gray',
                                borderRadius: '0px',
                                paddingLeft: '0px',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                //ELSE
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('Erevive', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('dead => alive', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('1.0s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                border: '15px dashed gray',
                                opacity: 0,
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                border: '0px dashed gray',
                                opacity: 1,
                                offset: 1
                            })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('tooltip', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0,
                        backgroundColor: 'blue'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 1,
                        backgroundColor: 'red'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('hide <=> show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(3000)
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], BattleComponent);
    return BattleComponent;
}());



/***/ }),

/***/ "./src/app/components/floors/floors.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/floors/floors.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbutton {\r\n    width:290px;\r\n    height:30px;\r\n    font-size: 15px;\r\n    background-color: rgb(211, 199, 144);\r\n    border: 2px solid rgb(167, 134, 25);\r\n    margin: 2px;\r\n    cursor: pointer;\r\n    transition: 0.2s;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgb(161, 152, 110);\r\n    border: 2px solid rgb(129, 104, 20);\r\n    font-weight: 700;\r\n}\r\n\r\n.disabled {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.disabled:hover {\r\n    background-color: rgb(211, 199, 144);\r\n    font-weight: 400;\r\n}"

/***/ }),

/***/ "./src/app/components/floors/floors.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/floors/floors.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Floors: please select a Floor to jump to, see change in \"Battle\" Tab</h1>\n\n<div>\n  <div *ngFor=\"let floor of this.gameService.floors; let i = index;\">\n      <button [class.disabled]=\"(i > this.gameService.highestFloorReached)\" [disabled]=\"(i > this.gameService.highestFloorReached)\" (click)=\"changeFloor(i)\">{{ floor.name }}</button>\n  </div>\n</div>\n<h3>To be Updated up to 100 floors!</h3>"

/***/ }),

/***/ "./src/app/components/floors/floors.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/floors/floors.component.ts ***!
  \*******************************************************/
/*! exports provided: FloorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorsComponent", function() { return FloorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message.model */ "./src/app/models/message.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FloorsComponent = /** @class */ (function () {
    function FloorsComponent(gameService) {
        this.gameService = gameService;
    }
    FloorsComponent.prototype.ngOnInit = function () {
    };
    FloorsComponent.prototype.changeFloor = function (id) {
        // this.gameService.send('player',new Message( 'floors', 'change', id)) // WORKS TOO
        this.gameService.playerSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('floors', 'change', id));
    };
    FloorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-floors',
            template: __webpack_require__(/*! ./floors.component.html */ "./src/app/components/floors/floors.component.html"),
            styles: [__webpack_require__(/*! ./floors.component.css */ "./src/app/components/floors/floors.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], FloorsComponent);
    return FloorsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#charselect{\r\n    margin: 0 auto;\r\n    width:600px\r\n}\r\nimg {\r\n    margin: 0 20px;\r\n    box-sizing: border-box;\r\n    border: 5px solid transparent;\r\n    border-radius: 44px;\r\n    -webkit-filter: blur(3px) brightness(60%);\r\n            filter: blur(3px) brightness(60%);\r\n    transition: 0.3s;\r\n}\r\nimg:hover{\r\n    border: 5px solid rgba(0, 0, 255, 0.404);\r\n    box-shadow: 0px 0px 10px 2px black;\r\n    cursor: pointer;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <h1>Welcome Home!</h1>\n  <p> I see you are an adventurer young man! </p>\n  <p> Please tell me who are you </p>\n  <div id=\"charselect\" *ngIf=\"!this.gameService.charChosen; else chosen\">\n    <img src=\"assets/merlin.png\" alt=\"\" (click)=\"charSelect('merlin')\">\n    <img src=\"assets/lancelot.png\" alt=\"\" (click)=\"charSelect('lancelot')\">\n  </div>\n  <ng-template #chosen>\n    <div>\n      <p> I see, if that's who you are then you should go and start your adventure immidietly! <br>\n          - press the \"Battle\" tab to start fighting enemies and go up floors in the tower! <br>\n          - press the \"Stats\" tab to see your stats! <br>\n          - press the \"floors\" tab to select a floor! <br>\n          -- press the \"info\" tab if you need any help and tips! <br>\n          <br>\n          Please go and defeat the evil Mordred!\n      </p>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message.model */ "./src/app/models/message.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(gameService) {
        this.gameService = gameService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.charSelect = function (char) {
        var _this = this;
        var playerSubject = this.gameService.playerSubject;
        playerSubject.subscribe(function (m) {
            switch (m.type) {
                case "character":
                    switch (m.event) {
                        case "chosen":
                            _this.gameService.charImage = m.data + ".png";
                            _this.gameService.charChosen = true;
                            break;
                    }
                    break;
            }
        });
        playerSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('character', 'chosen', char));
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/info/info.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/info/info.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\np {\r\n    font-size: 18px;\r\n}\r\n\r\nbutton {\r\n    width: 200px;\r\n     height:40px;\r\n }\r\n\r\ninput {\r\n     width:200px;\r\n      height:37px;\r\n  }\r\n\r\n#chat-msgs {\r\n    background-color: aliceblue;\r\n    border: 1px double blue;\r\n    width: 372px;\r\n}\r\n\r\n.msg {\r\n    border: 1px solid black;\r\n    width: 340px;\r\n    margin:5px;\r\n    padding: 10px;\r\n    box-shadow: 2px 2px 10px 0px gray;\r\n}"

/***/ }),

/***/ "./src/app/components/info/info.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/info/info.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>INFO</h1>\n<p>\n  Types of damage: <br>\n  every player has \"Sure-Hit\" damage and \"Maybe-hit\", <br>\n  the \"Sure-Hit\" grants additional damage output when attacking equals to the amount of \"Sure-Hit\" the player has, <br>\n  the \"Maybe-Hit\" grants additional damage output randomly between '0' to the amount the user has <br>\n  the \"Precision\" is the ratio between \"Sure-Hit\" to \"Maybe-Hit\", the more Precision, the more points converted from \"Maybe-hit\" to <br>\n  \"Sure-Hit\". <br>\n  <br>\n  Types of defence <br>\n  every player has \"Soft DEF\" and \"Hard DEF\", as the \"Soft DEF\" is the amount of raw-damage reduced from enemy attack <br>\n  where \"Hard DEF\", is the amount of damage reduced in prectange (%), \"50 Hard DEF = 50% dmg reduction\" <br>\n  \"Hard DEF\" mostly gained from equipments while \"Soft DEF\" gathered while Leveling up based on the Character. <br>\n  <br>\n  Attack damage calculation: <br>\n  (((( [Attack BaseDmg] + [\"Sure-Hit\" damage] + [Random: \"Maybe-Hit\" damage] ) - [\"Soft DEF\"] ) * [1 - \"Hard DEF\"] ) - [Defensive-Move defence])\n</p>\n<h1>Global Chat with all connected players!</h1>\n<div id=\"chat-msgs\">\n  <p class=\"msg\" *ngFor=\"let m of messages\">{{ m }}</p>\n</div>\n<div>\n  <span>Your Message: </span>\n  <input type=\"text\" name=\"firstname\" #inmsg>\n  <button (click)=\"sendMessage()\">SEND A MESSAGE</button>\n</div>"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message.model */ "./src/app/models/message.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoComponent = /** @class */ (function () {
    function InfoComponent(gameService) {
        this.gameService = gameService;
        this.messages = [];
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSubject = this.gameService.messageSubject;
        this.messageSubject.subscribe(function (data) {
            _this.messages.push(data.data);
        });
    };
    InfoComponent.prototype.sendMessage = function () {
        this.messageSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('new-message', 'chat', '[Chat]' + this.inputMsgRef.nativeElement.value));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inmsg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InfoComponent.prototype, "inputMsgRef", void 0);
    InfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/components/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/components/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/inventory-profile/inventory-profile.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/inventory-profile/inventory-profile.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#inventory {\r\n    border:3px solid blue;\r\n    width:650px;\r\n    padding: 5px;\r\n    height: 100px;\r\n}\r\n\r\n.equipped span, #inventory span {\r\n    border: 1px solid black;\r\n    border-radius: 3px;\r\n    padding: 5px;\r\n    width:70px;;\r\n    height:70px;\r\n    display: inline-block;\r\n\r\n    cursor: pointer;\r\n    margin:1px;\r\n}\r\n\r\n.equipped span :hover , #inventory span :hover {\r\n    border: 1px solid blue;\r\n    box-shadow:inset 0px 0px 10px 1px gray;\r\n}\r\n\r\n.equipped span :active, #inventory span :active {\r\n    border: 1px solid blue;\r\n    box-shadow:inset 0px 0px 10px 2px rgb(80, 80, 80);\r\n}\r\n\r\n#profile span {\r\n    display: inline-block;\r\n}\r\n\r\n#profile {\r\n    margin-left: 50px;\r\n    margin-top: 20px;\r\n    \r\n}\r\n\r\n.equipped {\r\n    display: block;\r\n    margin-top: 5px;\r\n}\r\n\r\n.equipped span * {\r\n    pointer-events: none;\r\n}\r\n\r\n.equipped .holditem {\r\n    border: 2px double midnightblue;\r\n    background-color: rgb(207, 201, 240);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/inventory-profile/inventory-profile.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/inventory-profile/inventory-profile.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <div id=\"inventory\" (drop)=\"dropInv($event)\" (dragover)=\"allowDrop($event)\" (dragenter)=\"enterDropInv($event)\" (dragleave)=\"leaveDropInv($event)\">\n      <span draggable=\"true\" (dragstart)=\"drag($event)\" *ngFor=\"let item of items; let i = index\" [attr.iid]=\"item.id \" [attr.id]=\"i\" [attr.ind]=\"i\">{{ item.name }}</span>\n  </div>\n  <div id=\"profile\">\n      <span>Weapon: </span>\n    <div class=\"equipped\">\n        <span [attr.id]=\"'weapon'\"\n        [attr.iid]=\"(equipment.weapon)? equipment.weapon.id : -1\"\n        [class.holditem]=\"(equipment.weapon)\"\n         draggable=\"true\" (dragstart)=\"drag($event)\" \n         (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" \n         (dragenter)=\"enterDrop($event)\" \n         (dragleave)=\"leaveDrop($event)\">\n         <p>{{ (equipment.weapon)? equipment.weapon.name : '' }}</p>\n        </span>\n    </div>\n    <span>Head Gear: </span>\n    <div class=\"equipped\"> \n            <span [attr.id]=\"'headGear'\"\n            [attr.iid]=\"(equipment.headGear)? equipment.headGear.id : -1\"\n            [class.holditem]=\"(equipment.headGear)\"\n             draggable=\"true\" (dragstart)=\"drag($event)\" \n             (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" \n             (dragenter)=\"enterDrop($event)\" \n             (dragleave)=\"leaveDrop($event)\">\n             <p>{{ (equipment.headGear)? equipment.headGear.name : '' }}</p>\n            </span>\n    </div>\n    <span>Body Armor:</span>\n    <div class=\"equipped\">\n            <span [attr.id]=\"'bodyArmor'\"\n            [attr.iid]=\"(equipment.bodyArmor)? equipment.bodyArmor.id : -1\"\n            [class.holditem]=\"(equipment.bodyArmor)\"\n             draggable=\"true\" (dragstart)=\"drag($event)\" \n             (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" \n             (dragenter)=\"enterDrop($event)\" \n             (dragleave)=\"leaveDrop($event)\">\n             <p>{{ (equipment.bodyArmor)? equipment.bodyArmor.name : '' }}</p>\n            </span>\n    </div>\n    <span>Shield: </span>\n    <div class=\"equipped\">\n            <span [attr.id]=\"'shield'\"\n            [attr.iid]=\"(equipment.shield)? equipment.shield.id : -1\"\n            [class.holditem]=\"(equipment.shield)\"\n             draggable=\"true\" (dragstart)=\"drag($event)\" \n             (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" \n             (dragenter)=\"enterDrop($event)\" \n             (dragleave)=\"leaveDrop($event)\">\n             <p>{{ (equipment.shield)? equipment.shield.name : '' }}</p>\n            </span>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/inventory-profile/inventory-profile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/inventory-profile/inventory-profile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InventoryProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryProfileComponent", function() { return InventoryProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message.model */ "./src/app/models/message.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryProfileComponent = /** @class */ (function () {
    function InventoryProfileComponent(gameService, renderer) {
        this.gameService = gameService;
        this.renderer = renderer;
    }
    InventoryProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.gameService.player.items;
        this.equipment = this.gameService.player.equipment;
        this.gameService.playerSubject.subscribe(function (m) {
            if (m.type == "equipment" && m.event == "change") {
                _this.gameService.player.items = m.data.items;
                _this.gameService.player.equipment = m.data.equipment;
                _this.items = m.data.items;
                _this.equipment = m.data.equipment;
            }
        });
    };
    InventoryProfileComponent.prototype.drag = function ($event) {
        var j;
        if ($event.originalTarget && $event.originalTarget instanceof HTMLElement && $event.originalTarget.getAttribute('iid'))
            j = JSON.stringify({ iid: $event.originalTarget.getAttribute('iid'), id: $event.originalTarget.id });
        else
            j = JSON.stringify({ iid: -1, id: -1 });
        $event.dataTransfer.setData("text", j);
    };
    InventoryProfileComponent.prototype.drop = function ($event) {
        var obj = JSON.parse($event.dataTransfer.getData("text"));
        if (obj.id != '-1') {
            $event.preventDefault();
            $event.dataTransfer.dropEffect = "move";
            var data = document.getElementById(obj.id);
            var el = $event.currentTarget;
            this.gameService.playerSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('equipment', 'change', { id: obj.iid, index: data.getAttribute('ind') }));
        }
    };
    InventoryProfileComponent.prototype.allowDrop = function ($event) {
        $event.preventDefault();
    };
    InventoryProfileComponent.prototype.enterDrop = function ($event) {
        this.renderer.setStyle($event.target, 'box-shadow', '0px 0px 5px 1px blue');
    };
    InventoryProfileComponent.prototype.leaveDrop = function ($event) {
        $event.preventDefault();
        this.renderer.setStyle($event.target, 'box-shadow', 'inset 0px 0px 0px 0px blue');
    };
    //////INV
    InventoryProfileComponent.prototype.dropInv = function ($event) {
        console.log($event.dataTransfer.getData("text").charAt(0));
        if ($event.dataTransfer.items.length == 1 && $event.dataTransfer.getData("text").charAt(0) == '{') {
            var obj = JSON.parse($event.dataTransfer.getData("text"));
            console.log(obj.id);
            if (obj.id != '-1') {
                $event.preventDefault();
                $event.dataTransfer.dropEffect = "move";
                var data = document.getElementById(obj.id);
                var el = $event.currentTarget;
                this.gameService.playerSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('equipment', 'unequip', { id: obj.iid, equipto: obj.id }));
            }
        }
    };
    InventoryProfileComponent.prototype.enterDropInv = function ($event) {
        this.renderer.setStyle($event.target, 'background-color', 'gray');
    };
    InventoryProfileComponent.prototype.leaveDropInv = function ($event) {
        $event.preventDefault();
        this.renderer.setStyle($event.target, 'background-color', 'transparent');
    };
    InventoryProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-profile',
            template: __webpack_require__(/*! ./inventory-profile.component.html */ "./src/app/components/inventory-profile/inventory-profile.component.html"),
            styles: [__webpack_require__(/*! ./inventory-profile.component.css */ "./src/app/components/inventory-profile/inventory-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], InventoryProfileComponent);
    return InventoryProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/stats/stats.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/stats/stats.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/stats/stats.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/stats/stats.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"stats\">\n  <ul>\n    <li>Health: {{ player.health }} / {{ player.maxhealth }}</li>\n    <li>Mana: {{ player.mana }} / {{ player.maxmana }}</li>\n    <li>Level: {{ player.level }}</li>\n    <li>Experience: {{ player.experience }} / {{ player.experienceToLevelUp }}</li>\n    <li>Gold: {{ player.money }}</li>\n    <li>Damage: {{ player.damage.min }} + ({{ player.damage.max }}), Precision: {{ player.damage.min*100/(player.damage.min+player.damage.max)  }}%</li>\n    <li>Defence: {{ player.defence.hard }} + ({{ player.defence.soft }})</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/stats/stats.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/stats/stats.component.ts ***!
  \*****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/message.model */ "./src/app/models/message.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsComponent = /** @class */ (function () {
    function StatsComponent(gameService) {
        this.gameService = gameService;
        this.menu = this.gameService.menu;
    }
    StatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.player = this.gameService.player;
        this.gameService.playerSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('stats', 'all', ''));
        this.gameService.onSelectedMenuEvent.subscribe(function (value) {
            if (value == _this.menu.stats)
                _this.gameService.playerSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]('stats', 'all', ''));
        });
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/components/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/components/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#toolbar {\r\n    background-color: darkgray;\r\n    width:100%;\r\n    box-shadow: 0px 1px 13px 2px black;\r\n    position: static;\r\n}\r\n\r\n#toolbar button {\r\n    background-color: darkseagreen;\r\n    border:0px;\r\n    width: 188px;\r\n    padding: 5px;\r\n    transition: 0.25s;\r\n    font-size: 17px;\r\n}\r\n\r\n#toolbar button:hover {\r\n    background-color: rgb(92, 161, 144);\r\n    cursor: pointer;\r\n}\r\n\r\n#toolbar .selected{\r\n    background-color: rgb(47, 79, 79);\r\n    font-weight: 700;\r\n}\r\n\r\n#toolbar .selected:hover{\r\n    background-color: rgb(47, 79, 79);\r\n    color: whitesmoke;\r\n}"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toolbar\">  \n  <button [ngClass]=\"{'selected': selectedMenu == menu.home}\" (click)=\"onSelectMenu(menu.home)\">Home</button>\n  <button [ngClass]=\"{'selected': selectedMenu == menu.inv_prof}\" (click)=\"onSelectMenu(menu.inv_prof)\">Inventory & Profile</button>\n  <button [ngClass]=\"{'selected': selectedMenu == menu.battle}\" (click)=\"onSelectMenu(menu.battle)\">Battle</button>\n  <button [ngClass]=\"{'selected': selectedMenu == menu.stats}\" (click)=\"onSelectMenu(menu.stats)\">Stats</button>\n  <button [ngClass]=\"{'selected': selectedMenu == menu.floors}\" (click)=\"onSelectMenu(menu.floors)\">Floors</button>\n  <button [ngClass]=\"{'selected': selectedMenu == menu.about}\" (click)=\"onSelectMenu(menu.about)\">About</button>\n  <button [ngClass]=\"{'selected': selectedMenu == menu.info}\" (click)=\"onSelectMenu(menu.info)\">Info</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(gameService) {
        this.gameService = gameService;
        this.menu = this.gameService.menu;
        this.selectedMenu = this.menu.battle;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.onSelectMenu = function (menu) {
        this.gameService.onSelectedMenu(menu);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "selectedMenu", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/components/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/directives/tooltip.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/tooltip.directive.ts ***!
  \*************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
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

var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.tooltipState = 'hide';
    }
    TooltipDirective.prototype.onMouseEnter = function (e) {
        this.renderer.setStyle(this.showTooltip, 'display', 'block');
        this.renderer.setProperty(this.showTooltip, 'innerText', this.text);
        this.tooltipState = 'show';
    };
    TooltipDirective.prototype.onMouseLeave = function (e) {
        this.renderer.setStyle(this.showTooltip, 'display', 'none');
        this.tooltipState = 'hide';
    };
    TooltipDirective.prototype.onMouseMove = function (e) {
        var x = e.clientX, y = e.clientY, h = this.showTooltip.offsetHeight;
        this.renderer.setStyle(this.showTooltip, 'top', (y - h - 15) + 'px');
        this.renderer.setStyle(this.showTooltip, 'left', (x - 15) + 'px');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "showTooltip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(''),
        __metadata("design:type", String)
    ], TooltipDirective.prototype, "tooltipState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TooltipDirective.prototype, "onMouseMove", null);
    TooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[showTooltip]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./src/app/models/message.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/message.model.ts ***!
  \*****************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(type, event, data) {
        this.type = type;
        this.event = event;
        this.data = data;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/models/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
        this.health = 100;
        this.maxhealth = 100;
        this.isAlive = true;
        this.money = 0;
        this.level = 0;
        this.experience = 0;
        this.experienceToLevelUp = 0;
        this.mana = 20;
        this.maxmana = 20;
        this.damage = { min: 0, max: 0 };
        this.defence = { soft: 0, hard: 0 };
        this.items = [];
        this.equipment = { weapon: undefined,
            headGear: undefined,
            bodyArmor: undefined,
            shield: undefined };
    }
    Player.prototype.updateHealthPoints = function (health) {
        this.health = health.amount;
        this.maxhealth = health.max;
        if (this.health <= 0) {
            this.isAlive = false;
            this.health = 0;
        }
        else
            this.isAlive = true;
    };
    Player.prototype.updateManaPoints = function (mana) {
        this.mana = mana.amount;
        this.maxmana = mana.max;
    };
    Player.prototype.alive = function () {
        return this.isAlive;
    };
    Player.createFromServerType = function (playerObj) {
        var p = new Player();
        p.updateFromServerType(playerObj);
        return p;
    };
    Player.prototype.updateFromServerType = function (playerObj) {
        this.health = playerObj.health;
        this.maxhealth = playerObj.healthPoolCap;
        this.mana = playerObj.mana;
        this.maxmana = playerObj.manaPoolCap;
        this.money = playerObj.money;
        this.level = playerObj.level;
        this.experience = playerObj.experience;
        this.experienceToLevelUp = playerObj.experienceToLevelUp;
        this.defence = playerObj.defence;
        this.damage = playerObj.damage;
        this.items = playerObj.items;
        this.equipment = playerObj.equipment;
    };
    return Player;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket.service */ "./src/app/services/websocket.service.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/message.model */ "./src/app/models/message.model.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/player.model */ "./src/app/models/player.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var menu;
(function (menu) {
    menu[menu["home"] = -1] = "home";
    menu[menu["inv_prof"] = 0] = "inv_prof";
    menu[menu["battle"] = 1] = "battle";
    menu[menu["stats"] = 2] = "stats";
    menu[menu["floors"] = 3] = "floors";
    menu[menu["about"] = 4] = "about";
    menu[menu["info"] = 5] = "info";
})(menu || (menu = {}));
var GameService = /** @class */ (function () {
    function GameService(webSocketService) {
        var _this = this;
        this.webSocketService = webSocketService;
        this.onSelectedMenuEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingStage = 0;
        this.endStage = 5;
        this.menu = menu;
        this.selectedMenu = menu.home;
        this.charChosen = false;
        //need a player obj for this. // GAME OBJECT
        this.player = new _models_player_model__WEBPACK_IMPORTED_MODULE_4__["Player"]();
        this.charImage = "merlin.png";
        this.highestFloorReached = 0;
        webSocketService.connect();
        //INIT SUBJECTs
        this.battleSubject = this.on('battle');
        this.messageSubject = this.on('message');
        this.playerSubject = this.on('player');
        this.gameSubject = this.on('game');
        this.on('connect').subscribe(function () {
            _this.connected = true;
            _this.loadingStage++;
            _this.playerSubject.subscribe(function (m) {
                if (m.type == "stats" && m.event == "all") {
                    _this.player.updateFromServerType(m.data);
                    _this.loadingStage++;
                }
                else if (m.type == "floors" && m.event == "update") {
                    _this.highestFloorReached = m.data;
                }
                else if (m.type == "floors" && m.event == "change") {
                    _this.msg = "FLOOR CHANGED";
                    setTimeout(function () {
                        _this.msg = undefined;
                    }, 3500);
                }
            });
            //get game data
            _this.gameSubject.subscribe(function (m) {
                console.log(m.type);
                switch (m.type) {
                    case 'floors':
                        switch (m.event) {
                            case 'get':
                                _this.loadingStage++;
                                _this.floors = m.data;
                                break;
                        }
                        break;
                    case 'attacks':
                        switch (m.event) {
                            case 'get':
                                _this.loadingStage++;
                                _this.attacks = m.data;
                                break;
                        }
                        break;
                    case 'defences':
                        switch (m.event) {
                            case 'get':
                                _this.loadingStage++;
                                _this.defences = m.data;
                                break;
                        }
                        break;
                }
            });
            _this.gameSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('floors', 'get', ''));
            _this.gameSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('attacks', 'get', ''));
            _this.gameSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('defences', 'get', ''));
            _this.playerSubject.next(new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["Message"]('stats', 'all', ''));
        });
    }
    GameService.prototype.on = function (event) {
        return this.webSocketService.on(event);
    };
    GameService.prototype.send = function (event, message) {
        this.webSocketService.send(event, message);
    };
    GameService.prototype.onSelectedMenu = function (menu) {
        this.selectedMenu = menu;
        this.onSelectedMenuEvent.emit(menu);
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('http://localhost:3000');
    };
    WebSocketService.prototype.isDisconnected = function () {
        return this.socket.disconnected;
    };
    WebSocketService.prototype.on = function (event) {
        var _this = this;
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.socket.on(event, function (data) {
                console.log("[Debug] emitted data observable: " + JSON.stringify(data));
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        var observer = {
            next: function (data) {
                _this.send(event, data);
                console.log("[Debug] emitted data observer: " + JSON.stringify(data));
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    };
    WebSocketService.prototype.send = function (event, message) {
        this.socket.emit(event, message);
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\temp\temp_code\Angular\SocketIO\app\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map