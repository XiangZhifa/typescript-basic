"use strict";
//可索引接口  约束 数组 和 对象 的接口（不常用）
var arr = ['1', '2', '3'];
var infos = { name: 'Jeffery' };
var Tiger = /** @class */ (function () {
    function Tiger(name) {
        this.name = name;
    }
    Tiger.prototype.eat = function (food) {
        console.log(this.name + " eating " + food + ".");
    };
    return Tiger;
}());
var tiger = new Tiger('东北虎');
tiger.eat('meat');
