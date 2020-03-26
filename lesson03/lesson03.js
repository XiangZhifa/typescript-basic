var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *typescript中的类
 **/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + "  is running.");
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("\u5F20\u4E09");
p.run();
console.log(p.getName());
p.setName("\u674E\u56DB");
console.log(p.getName());
/**
 * ts中实现类的继承    extends  super
 * **/
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8.";
    };
    return Human;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name) {
        return _super.call(this, name) || this;
    }
    Man.prototype.walk = function () {
        return this.name + "\u5728\u884C\u8D70.";
    };
    return Man;
}(Human));
var man = new Man("\u738B\u4E94");
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log(this.name + ' is running');
    };
    Animal.say = function () {
        console.log(Animal.type + ' say hello');
    };
    Animal.type = 'cat';
    return Animal;
}());
Animal.say();
/**
 * 多态
 * 父类声明一个方法，但不去实现，让不同的子类去实现，每一个子类都有不同的表现
 * **/
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.say = function () {
        console.log('说的方法由子类实现');
    };
    return Cat;
}());
var ExoticCat = /** @class */ (function (_super) {
    __extends(ExoticCat, _super);
    function ExoticCat(name) {
        return _super.call(this, name) || this;
    }
    ExoticCat.prototype.say = function () {
        console.log(this.name + ' say miao~ miao~');
    };
    return ExoticCat;
}(Cat));
var exotic = new ExoticCat('加菲');
exotic.say();
var RagdollCat = /** @class */ (function (_super) {
    __extends(RagdollCat, _super);
    function RagdollCat(name) {
        return _super.call(this, name) || this;
    }
    RagdollCat.prototype.say = function () {
        console.log(this.name + ' say umi~ umi~');
    };
    return RagdollCat;
}(Cat));
var ragdoll = new RagdollCat('布偶');
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
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var HuskyDog = /** @class */ (function (_super) {
    __extends(HuskyDog, _super);
    function HuskyDog(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    ;
    //抽象类的子类 必须实现 抽象类中的抽象方法
    HuskyDog.prototype.eat = function () {
        console.log(this.name + ' eat meat');
    };
    return HuskyDog;
}(Dog));
var husky = new HuskyDog('二哈');
husky.eat();
