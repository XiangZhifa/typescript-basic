//定义一个操作MySQL数据库的类      ！！！注意：要实现一个泛型接口，类也应该是一个泛型类
var MySQLDb = /** @class */ (function () {
    function MySQLDb() {
    }
    MySQLDb.prototype.add = function (data) {
        console.log(data);
        return true;
    };
    MySQLDb.prototype.update = function (data, id) {
        console.log(data, id);
        return true;
    };
    MySQLDb.prototype.delete = function (id) {
        console.log(id);
        return true;
    };
    MySQLDb.prototype.get = function (id) {
        console.log(id);
        return [];
    };
    return MySQLDb;
}());
//操作MSSQL数据库的类
var MSSQLDb = /** @class */ (function () {
    function MSSQLDb() {
    }
    MSSQLDb.prototype.add = function (data) {
        console.log(data);
        return true;
    };
    MSSQLDb.prototype.update = function (data, id) {
        console.log(data, id);
        return true;
    };
    MSSQLDb.prototype.delete = function (id) {
        console.log(id);
        return true;
    };
    MSSQLDb.prototype.get = function (id) {
        console.log(id);
        return [];
    };
    return MSSQLDb;
}());
//操作用户表，定义一个 User类 和 数据库User表 做映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var newUser = new User();
newUser.username = 'root';
newUser.password = '123456';
var mysql = new MySQLDb();
mysql.add(newUser);
var mssql = new MSSQLDb();
mssql.add(newUser);
