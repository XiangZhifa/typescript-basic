/**
 * 接口的拓展，接口可以继承接口
 **/
interface Human {
    eat(): void;
}

interface Man extends Human {
    work(): void;
}

class Workers {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getPay(): void {
        console.log(`${this.name} is working for salary.`);
    }
}

class Doctor extends Workers implements Man {
    constructor(name) {
        super(name)
    }

    eat() {
        console.log(`Doctor ${this.name} is eating food.`);
    }

    work() {
        console.log(`Doctor ${this.name} is working.`);
    }
}

let doctor = new Doctor('Stack');
doctor.eat();
doctor.work();
doctor.getPay();
