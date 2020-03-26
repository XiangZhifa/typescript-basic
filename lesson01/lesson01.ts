/**
 * ts中的数据类型
 *
 * typescript为了代码规范性，增加了类型校验
 *
 * 声明变量，必须指定类型
 *
 **/

//布尔类型(boolean)
let flag: boolean = true;

//数字类型(number)
let num: number = 100;

//字符串类型(string)
let str: string = 'Hello';

//数组类型(array)
//第一种定义数组的方式
let arr1: number[] = [1, 2, 3, 4, 5];
//第二种定义数组的方式
let arr2: Array<number> = [5, 4, 3, 2, 1];

//元组类型(tuple)   属于数组的一种
let tupleArr: [number, string] = [22, '33'];

//枚举类型(enum)
// enum flagEnum {success = 200, error = 500}
// let enumExample: flagEnum = flagEnum.success;
// console.log(enumExample);
enum flagEnum {success, err, 'msg'}

let enumExample: flagEnum = flagEnum.err; //如果枚举类型的标识符没有赋值，那么它的值就是下标
console.log(enumExample);

//任意类型(any)
let anyParam: any = 1;
anyParam = true;
console.log(anyParam);

//null 和 undefined  是其他数据类型(never类型)的子类型
let numNev: number | undefined;
console.log(numNev);

//void类型
function run(): void {
    console.log('running'); //方法没有返回值，有返回值的话，要返回正确的类型
}

//never类型，代表从不会出现的值
let errData: never = (() => {
    throw new Error('错误！');
})();
