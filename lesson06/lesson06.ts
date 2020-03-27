//可索引接口  约束 数组 和 对象 的接口（不常用）

//可索引接口对数组的约束
interface UserArr {
    [index: number]: string;
}

let arr: UserArr = ['1', '2', '3'];

//可索引接口对对象的约束
interface UserInfo {
    [index: string]: string;
}

let infos: UserInfo = {name: 'Jeffery'};


//类接口  对类的约束
interface Animal {
    name: string;

    eat(food: string): void;
}

class Tiger implements Animal {
    name: string;

    constructor(name) {
        this.name = name;
    }

    eat(food: string): void {
        console.log(`${this.name} eating ${food}.`);
    }
}

let tiger = new Tiger('东北虎');
tiger.eat('meat');