"use strict";
/**
 * 1.方法装饰器
 * 方法装饰器 会被运用到 方法的属性描述符 上
 * 可以用来 监视、修改和替换方法定义
 *
 * 方法装饰器会在运行时传入下列三个参数
 * @param1:类的原型对象
 * @param2:方法的名字
 * @param3:方法的属性描述
 **/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function funcModify(args) {
    return function (source, methodName, attrs) {
        //修饰器作用的类  class MethodModifier
        console.log(source);
        source.newName = '这是方法修饰器拓展的属性：newName';
        source.run = function () {
            console.log('这是方法修饰器拓展的 run 方法');
        };
        //修饰器作用的方法名  getData
        console.log(methodName);
        //修饰器作用的方法的属性  attrs.value 为 getData 方法的内容
        console.log(attrs);
        //attrs.value 可以获取当前方法 getData 的内容
        console.log(attrs.value);
        //修改方法，把方法所有传入的参数改为 string 类型
        //1.保存当前的方法
        var originFunc = attrs.value;
        attrs.value = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var resParams = params.map(function (item) {
                return String(item);
            });
            originFunc.apply(source, resParams);
        };
    };
}
/**
 * 2.方法参数装饰器
 * 参数装饰器在调用时会被当作函数调用，
 * 可以利用参数装饰器为类的原型增加一些元素数据，
 *
 * 传入一列三个参数：
 * @param1:类的原型对象
 * @param2:参数的名字
 * @param3:该参数在函数参数列表中的索引
 **/
function paramModify(args) {
    return function (source, methodName, paramIndex) {
        console.log(args);
        //修饰器作用的类  class MethodModifier
        console.log(source);
        //修饰器作用的方法名  getInfo
        console.log(methodName);
        //修饰器作用的参数索引  0
        console.log(paramIndex);
    };
}
var MethodModifier = /** @class */ (function () {
    function MethodModifier() {
        this.name = '这是类的原构造函数中的赋值';
    }
    MethodModifier.prototype.getData = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log(params);
        console.log('这是getData中的打印语句');
    };
    MethodModifier.prototype.getInfo = function (info) {
        console.log(info);
    };
    __decorate([
        funcModify('https://www.baidu.com')
    ], MethodModifier.prototype, "getData", null);
    __decorate([
        __param(0, paramModify('这里是参数修饰器'))
    ], MethodModifier.prototype, "getInfo", null);
    return MethodModifier;
}());
var mod = new MethodModifier();
console.log(mod.newName);
mod.run();
mod.getData(12, 'param1', true);
mod.getInfo('调用方法修饰器');
/**
 * ！！！总结！！！
 * 方法装饰器的执行顺序：
 * 属性 >方法 > 参数 > 类
 *
 * 多个同级装饰器，执行顺序为 从后向前
 **/ 
