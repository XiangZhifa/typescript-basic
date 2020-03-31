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
function logClass(params) {
    //params就是当前类
    params.prototype.apiUrl = 'apiUrl';
    params.prototype.run = function () {
        console.log('Run Function');
    };
}
//装饰器工厂：可传参的装饰器
function paramsClass(params) {
    return function (target) {
        //target就是当前类
        console.log(params);
    };
}
//通过类装饰器，修改构造函数
function constructorClass(params) {
    //params就是当前类
    console.log(params);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //重载构造函数
            _this.name = '我是修改后的name';
            return _this;
        }
        class_1.prototype.getData = function () {
        };
        return class_1;
    }(params));
}
//2.属性装饰器
//属性装饰器接收两个参数，原型对象 和 成员名称
function attributeClass(params) {
    //target 是 原型对象；attribute 是 成员名称
    return function (target, attribute) {
        console.log(target);
        console.log(attribute);
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.name = '我是原name';
        this.attribute = 'attribute';
    }
    HttpClient.prototype.getData = function () {
    };
    __decorate([
        attributeClass('属性装饰器')
    ], HttpClient.prototype, "name", void 0);
    HttpClient = __decorate([
        logClass,
        paramsClass('http://localhost:8080/'),
        constructorClass
    ], HttpClient);
    return HttpClient;
}());
var httpClient = new HttpClient();
httpClient.run();
console.log(httpClient.apiUrl);
console.log(httpClient.name);
