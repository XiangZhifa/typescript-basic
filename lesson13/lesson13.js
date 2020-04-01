"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ts中的命名空间化
 * 为了避免多人操作时，出现命名冲突的情况
 **/
var A;
(function (A) {
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
    A.Animal = Animal;
})(A = exports.A || (exports.A = {}));
var newAnimal = new A.Animal('Tiger');
newAnimal.run();
console.log(A.Animal.type);
A.Animal.say();
