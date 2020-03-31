/**
 * ts综合应用：封装操作数据库的底层类库
 *
 * 实现操作数据库的统一类
 *
 * 需要有 add、update、delete、get 方法
 **/
interface DBI<T> {
    add(data: T): boolean;

    update(data: T, id: number): boolean;

    delete(id: number): boolean;

    get(id: number): any[];
}

//定义一个操作MySQL数据库的类      ！！！注意：要实现一个泛型接口，类也应该是一个泛型类
class MySQLDb<T> implements DBI<T> {
    add(data: T): boolean {
        console.log(data);
        return true;
    }

    update(data: T, id: number): boolean {
        console.log(data, id);
        return true;
    }

    delete(id: number): boolean {
        console.log(id);
        return true;
    }

    get(id: number): any[] {
        console.log(id);
        return [];
    }
}

//操作MSSQL数据库的类
class MSSQLDb<T> implements DBI<T> {
    add(data: T): boolean {
        console.log(data);
        return true;
    }

    update(data: T, id: number): boolean {
        console.log(data, id);
        return true;
    }

    delete(id: number): boolean {
        console.log(id);
        return true;
    }

    get(id: number): any[] {
        console.log(id);
        return [];
    }
}

//操作用户表，定义一个 User类 和 数据库User表 做映射
class User {
    username: string;
    password: string;
}

let newUser = new User();
newUser.username = 'root';
newUser.password = '123456';

let mysql = new MySQLDb<User>();
mysql.add(newUser);

let mssql = new MSSQLDb<User>();
mssql.add(newUser);