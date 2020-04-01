"use strict";
/**
 * ts装饰器
 * 类装饰器，属性装饰器，装饰器工厂
 **/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1.类装饰器，在类声明之前被声明，应用于类的构造函数，用来监视、替换和修改类的定义
//无参装饰器
function noParams(source) {
    //source是指装饰器作用的来源类，class HttpClient
    console.log(source);
    source.prototype.apiUrl = '装饰器拓展的属性';
    source.prototype.run = function () {
        console.log('装饰器拓展的run方法');
    };
}
//装饰器工厂(可传参装饰器)
function paramsFactory(params) {
    //params是传入的参数
    return function (source) {
        //source是指装饰器作用的来源类，class HttpClient
        console.log(source);
        console.log(params);
        source.prototype.paramsFactory = params;
    };
}
//类装饰器重载构造函数
//类装饰器会在运行时被当做函数调用，类的构造函数是其唯一参数
//如果类装饰器返回一个值，它会使用 提供的构造函数 来替换 类声明的构造函数
function reConstructor(source) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.constro = '这是 装饰器 重载构造函数后 赋值的 constro 属性';
            return _this;
        }
        class_1.prototype.getData = function () {
            console.log(this.constro);
        };
        return class_1;
    }(source));
}
//2.属性装饰器
//属性装饰器会在运行时被当做函数调用，传入两个参数
//params1:装饰器作用的类，class HttpClient
//params2:属性名称
function attrParams(params) {
    return function (source, attr) {
        //source:装饰器作用的类，class HttpClient
        //attr:属性名称
        console.log('attr:  ' + attr);
        source.attr = '属性装饰器 赋值后的 attr';
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.constro = '这是 类本身 的构造函数赋值的 constro 属性';
    }
    HttpClient.prototype.getData = function () {
        console.log(this.constro);
    };
    __decorate([
        attrParams('https://www.baidu.com')
    ], HttpClient.prototype, "attr", void 0);
    HttpClient = __decorate([
        noParams,
        paramsFactory('装饰器工厂'),
        reConstructor
    ], HttpClient);
    return HttpClient;
}());
var httpClient = new HttpClient();
console.log(httpClient["apiUrl"]);
httpClient["run"]();
console.log(httpClient["paramsFactory"]);
httpClient.getData();
console.log(httpClient.attr);
