/**
 * typescript中函数的定义
 **/

//匿名函数定义函数
function running(): string {
    return 'running' //需要指定返回值的类型
}

//ts中定义方法传参
function getInfo(name: string, age: number): string {
    return name + `:` + age;
}

console.log(getInfo('ts', 20));


//没有返回值的方法
function work(speed: string): void {
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
function interest(name: string, interest?: string): void {
    interest ? console.log(name + ` : ` + interest) : console.log(name + ` : 个人爱好保密`);
}

interest('Jeffery');

//方法默认参数
function sports(name: string, sports: string = '足球'): void {
    console.log(name + ` : ` + sports);
}

sports('梅西');
sports('詹姆斯', '篮球');

//剩余参数
function sum(a: number, b: number, c: number, d: number, ...result: number[]): number {
    let resSum = 0;
    result.forEach(item => {
        resSum += item;
    });
    return a + b + c + d + resSum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

//函数重载
//ts中函数重载，是为了用过一个函数的多种函数定义，实现多种功能
function goodsConfig(name: string, price: number): string;

function goodsConfig(author: string, authorNum: string): string;

function goodsConfig(name: string, price: number, date: string): string;

function goodsConfig(name: any, config: any, date?: any): any {
    if (date) {
        return `商品名称为: ` + name + ` , 单价为: ￥` + config + ` , 采购日期为: ` + date;
    }
    if (typeof config === 'number') {
        return `商品名称为: ` + name + ` , 单价为: ￥` + config;
    }
    return `商品采购人为: ` + name + ` , 工号为: ` + config;
}

console.log(goodsConfig('苹果', 9999));
console.log(goodsConfig('苹果', 9999, '2019-03-20'));
console.log(goodsConfig('小王', 'xw20200326'));

//箭头函数，同es6
[1, 2, 3].forEach(item => console.log(item));
