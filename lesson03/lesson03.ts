/**
 *typescript中的类
 **/
class Person {
    name: string;

    constructor(name: string) { //实例化类的时候会触发构造函数
        this.name = name;
    }

    run(): void {
        console.log(this.name + `  is running.`);
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}

let p = new Person(`张三`);
p.run();
console.log(p.getName());
p.setName(`李四`);
console.log(p.getName());


/**
 * ts中实现类的继承    extends  super
 * **/
class Human {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    run(): string {
        return `${this.name}在运动.`
    }
}

class Man extends Human {
    constructor(name: string) {
        super(name);
    }

    walk(): string {
        return `${this.name}在行走.`
    }
}

let man = new Man(`王五`);
console.log(man.run());
console.log(man.walk());


/**
 * ts类中的修饰符
 * 定义类的属性时，有三种修饰符 public protected private
 * 属性如果不加修饰符，默认为public
 *
 * public:  类内部、子类、类外部均可以访问
 * protected:  类内部、子类可以访问
 * private:  仅类内部可以访问
 * **/


/**
 * ts类中的 静态属性 和 静态方法
 *
 * 类中的方法分为 实例方法 和 静态方法
 *
 * 实例方法，必须在类实例化之后才可以调用
 *
 * 静态方法，可以直接通过 类名.方法名 的方式进行调用
 * **/
class Animal {
    public name: string;
    static type: string = 'cat';

    constructor(name: string) {
        this.name = name;
    }

    run(): void {    //这是实例方法，必须实例化之后，才能访问
        console.log(this.name + ' is running')
    }

    static say(): void {     //这是静态方法，可以直接访问，但在静态方法中，无法直接访问类的属性，静态方法只能访问静态属性
        console.log(Animal.type + ' say hello');
    }
}

Animal.say();

/**
 * 多态
 * 父类声明一个方法，但不去实现，让不同的子类去实现，每一个子类都有不同的表现
 * **/
class Cat {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    say() {
        console.log('说的方法由子类实现')
    }
}

class ExoticCat extends Cat {
    constructor(name: string) {
        super(name);
    }

    say(): void { //下面会通过子类，对say方法，进行多态实现
        console.log(this.name + ' say miao~ miao~')
    }
}

let exotic = new ExoticCat('加菲');
exotic.say();

class RagdollCat extends Cat {
    constructor(name: string) {
        super(name);
    }

    say(): void {
        console.log(this.name + ' say umi~ umi~')
    }
}

let ragdoll = new RagdollCat('布偶');
ragdoll.say();

/**
 * ts中的抽象类和抽象方法
 *
 * 抽象类提供的是被其他类继承的基类，不能被直接实例化
 *
 * 用abstract关键字定义定义抽象类和抽象方法，抽象类中的抽象放法不包含具体实现，并且必须在派生类中进行实现
 *
 * abstract抽象方法只能放在抽象类中
 *
 * 例如：假如Dog类是一个抽象类，包含一个抽象方法eat，那么相当于要求所有Animal类的子类，都必须包含抽象方法
 * **/
abstract class Dog {
    abstract eat(): any;
}

class HuskyDog extends Dog {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    };

    //抽象类的子类必须实现抽象类中的抽象方法
    eat() {
        console.log(this.name+' eat meat')
    }
}

let husky = new HuskyDog('二哈');
husky.eat();



