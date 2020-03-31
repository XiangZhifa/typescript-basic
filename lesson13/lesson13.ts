/**
 * ts中的命名空间化
 * 为了避免多人操作时，出现命名冲突的情况
 **/
export namespace A {
    export class Animal {
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
}

let newAnimal = new A.Animal('Tiger');
newAnimal.run();
console.log(A.Animal.type);
A.Animal.say();