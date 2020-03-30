/**
 * ts中的泛型
 * 解决 类 接口 方法 的复用性
 * 解决对 不特定数据类型 的支持
 **/

//定义一个方法，返回 string类型 和 number类型 (用 泛型 解决代码冗余)
//泛型可以做到 传入参数 和 返回参数 一致，这是 any 无法做到的，因为 any 放弃了类型检查

//T代表泛型，具体是什么类型，是调用T方法时决定的
function getData<T>(value: T): T {
    return value;
}

getData<number>(123);//泛型决定了value必须是number类型
// getData<number>('123'); //这种情况会报错，因为泛型决定了，传入的value值必须是number类型，所以类型检查会报错


//泛型类：最小堆算法，需要同时返回 数字 和 字符串类型，用类的泛型来实现
class MinClass {
    public list: number[] = [];

    add(num: number): void {
        this.list.push(num);
    }

    min() {
        let minNum = this.list[0];
        for (let i of this.list) {
            this.list[i] < minNum ? minNum = this.list[i] : minNum;
        }
        return minNum;
    }
}

let min = new MinClass();
min.add(8);
min.add(222);
min.add(22);
console.log(min.min());

//用 类的泛型 实现上述效果
class MinChar<T> {
    public list: T[] = [];

    add(value: T): void {
        this.list.push(value);
    }

    min(): T {
        let minNum = this.list[0];
        this.list.forEach(item => {
            item < minNum ? minNum = item : minNum
        });
        return minNum;
    }
}

let minChar = new MinChar<number>();
minChar.add(12);
minChar.add(222);
minChar.add(22);
console.log(minChar.min());

let minStr = new MinChar<string>();
minStr.add('a');
minStr.add('s');
minStr.add('y');
minStr.add('n');
minStr.add('c');
console.log(minStr.min());