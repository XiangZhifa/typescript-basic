/**
 * 深入ts中的泛型类
 * 把类作为参数，来约束传入的参数
 **/

//User类，映射数据库字段
// class User {
//     username: string | undefined;
//     password: string | undefined;
// }

//MySQLDb类，操作数据库
//把User类，作为参数传入到MySQLDb中
/**
 * !!!下面的实现方式,需要不停的指定 传入参数 的约束!!!
 * 可以通过泛型，对代码进行简化
 * **/
// class MySQLDb {
//
//     add(user: User): boolean {
//         console.log(user);
//         return true;
//     }
//
//     addArctile(arctile: ArctileType): boolean {
//         console.log(arctile);
//         return true;
//     }
// }
//
// let newUser = new User();
// newUser.username = 'root';
// newUser.password = '123456';
//
// let Db = new MySQLDb();
// Db.add(newUser);
//
//
// class ArctileType {
//     title: string | undefined;
//     desc: string | undefined;
//     status: number | undefined;
// }
//
// let newArctile = new ArctileType();
// newArctile.title = 'Typescript';
// newArctile.desc = 'Welcome to TS';
// newArctile.status = 1;
//
// Db.addArctile(newArctile);

/**
 * 用泛型对上面的代码进行优化
 **/

class MySQLDb<T> {

    add(params: T): boolean {
        console.log(params);
        return true;
    }

}

//给user表增加数据
// 1.定义一个User,和数据库进行映射
class User {
    username: string | undefined;
    password: string | undefined;
}

//增加User,只需要将泛型指定为User
let newUser = new User();
newUser.username = 'root';
newUser.password = 'root123456';

let Db = new MySQLDb<User>();
Db.add(newUser);

//增加文章，只需要将泛型指定为文章
class Arctile {
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;

    constructor(params: {
        title: string;
        desc: string;
        status: number;
    }) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

let newArctile = new Arctile({title: 'Typescript', desc: 'Hello Typescript!', status: 1});
let arctileDb = new MySQLDb<Arctile>();
arctileDb.add(newArctile);