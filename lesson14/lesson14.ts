/**
 * ts装饰器
 * 类装饰器，属性装饰器，装饰器工厂
 **/

//1.类装饰器，在类声明之前被声明，应用于类的构造函数，用来监视、替换和修改类的定义

//无参装饰器
function noParams(source: any) {
    //source是指装饰器作用的来源类，class HttpClient
    console.log(source);
    source.prototype.apiUrl = '装饰器拓展的属性';
    source.prototype.run = () => {
        console.log('装饰器拓展的run方法');
    }
}

//装饰器工厂(可传参装饰器)
function paramsFactory(params: string) {
    //params是传入的参数
    return (source: any) => {
        //source是指装饰器作用的来源类，class HttpClient
        console.log(source);
        console.log(params);
        source.prototype.paramsFactory = params;
    }
}

//类装饰器重载构造函数
//类装饰器会在运行时被当做函数调用，类的构造函数是其唯一参数
//如果类装饰器返回一个值，它会使用 提供的构造函数 来替换 类声明的构造函数
function reConstructor(source: any) {
    return class extends source {
        constro: string = '这是 装饰器 重载构造函数后 赋值的 constro 属性';
        attr: string | undefined;

        getData() {
            console.log(this.constro);
        }
    }
}


//2.属性装饰器

//属性装饰器会在运行时被当做函数调用，传入两个参数
//params1:装饰器作用的类，class HttpClient
//params2:属性名称
function attrParams(params: any) {
    return (source: any, attr: any) => {
        //source:装饰器作用的类，class HttpClient
        //attr:属性名称
        console.log('attr:  ' + attr);
        source.attr = '属性装饰器 赋值后的 attr';
    }
}

@noParams
@paramsFactory('装饰器工厂')
@reConstructor
class HttpClient {
    public constro: string;
    @attrParams('https://www.baidu.com')
    public attr: string | undefined;

    constructor() {
        this.constro = '这是 类本身 的构造函数赋值的 constro 属性';
    }

    getData() {
        console.log(this.constro);
    }
}

let httpClient = new HttpClient();
console.log(httpClient["apiUrl"]);
httpClient["run"]();
console.log(httpClient["paramsFactory"]);
httpClient.getData();
console.log(httpClient.attr);