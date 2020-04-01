"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Workers = /** @class */ (function () {
    function Workers(name) {
        this.name = name;
    }
    Workers.prototype.getPay = function () {
        console.log(this.name + " is working for salary.");
    };
    return Workers;
}());
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(name) {
        return _super.call(this, name) || this;
    }
    Doctor.prototype.eat = function () {
        console.log("Doctor " + this.name + " is eating food.");
    };
    Doctor.prototype.work = function () {
        console.log("Doctor " + this.name + " is working.");
    };
    return Doctor;
}(Workers));
var doctor = new Doctor('Stack');
doctor.eat();
doctor.work();
doctor.getPay();
