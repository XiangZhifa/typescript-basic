"use strict";
/**
 * typescript中函数的定义
 **/
//匿名函数定义函数
function running() {
    return 'running'; //需要指定返回值的类型
}
//ts中定义方法传参
function getInfo(name, age) {
    return name + ":" + age;
}
console.log(getInfo('ts', 20));
//没有返回值的方法
function work(speed) {
    console.log(speed);
}
work('4.5km/h');
//方法可选参数
//es中，方法的实参和形参可以不一样，但在ts中，实参、形参必须一样，如果不一样需要配置可选参数
/**
 * ！！！注意！！！
 *
 * 可选参数，必！须！配置到所有参数的 最后面
 *
 **/
function interest(name, interest) {
    interest ? console.log(name + " : " + interest) : console.log(name + " : \u4E2A\u4EBA\u7231\u597D\u4FDD\u5BC6");
}
interest('Jeffery');
//方法默认参数
function sports(name, sports) {
    if (sports === void 0) { sports = '足球'; }
    console.log(name + " : " + sports);
}
sports('梅西');
sports('詹姆斯', '篮球');
//剩余参数
function sum(a, b, c, d) {
    var result = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        result[_i - 4] = arguments[_i];
    }
    var resSum = 0;
    result.forEach(function (item) {
        resSum += item;
    });
    return a + b + c + d + resSum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));
function goodsConfig(name, config, date) {
    if (date) {
        return "\u5546\u54C1\u540D\u79F0\u4E3A: " + name + " , \u5355\u4EF7\u4E3A: \uFFE5" + config + " , \u91C7\u8D2D\u65E5\u671F\u4E3A: " + date;
    }
    if (typeof config === 'number') {
        return "\u5546\u54C1\u540D\u79F0\u4E3A: " + name + " , \u5355\u4EF7\u4E3A: \uFFE5" + config;
    }
    return "\u5546\u54C1\u91C7\u8D2D\u4EBA\u4E3A: " + name + " , \u5DE5\u53F7\u4E3A: " + config;
}
console.log(goodsConfig('苹果', 9999));
console.log(goodsConfig('苹果', 9999, '2019-03-20'));
console.log(goodsConfig('小王', 'xw20200326'));
//箭头函数，同es6
[1, 2, 3].forEach(function (item) { return console.log(item); });
