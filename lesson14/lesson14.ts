/**
 * ts装饰器
 * 类装饰器，属性装饰器，装饰器工厂
 **/

//1.类装饰器，在类声明之前被声明，应用于类的构造函数，用来监视、替换和修改类的定义

//无参装饰器
function logClass(params: any) {
    //params就是当前类
    params.prototype.apiUrl = 'apiUrl';
    params.prototype.run = () => {
        console.log('Run Function')
    };
}

//装饰器工厂：可传参的装饰器
function paramsClass(params: string) {
    return (target: any) => {
        //target就是当前类
        console.log(params);
    }
}

//通过类装饰器，修改构造函数
function constructorClass(params: any) {
    //params就是当前类
    console.log(params);
    return class extends params {
        //重载构造函数
        name: string = '我是修改后的name';

        getData() {

        }
    };
}

//2.属性装饰器
//属性装饰器接收两个参数，原型对象 和 成员名称
function attributeClass(params: any) {
    //target 是 原型对象；attribute 是 成员名称
    return function (target: any, attribute) {
        console.log(target);
        console.log(attribute);
    }
}


@logClass
@paramsClass('http://localhost:8080/')
@constructorClass
class HttpClient {
    @attributeClass('属性装饰器')
    name: string;
    attribute: any;

    constructor() {
        this.name = '我是原name';
        this.attribute = 'attribute';
    }

    getData() {

    }
}

let httpClient = new HttpClient();
httpClient.run();
console.log(httpClient.apiUrl);
console.log(httpClient.name);
