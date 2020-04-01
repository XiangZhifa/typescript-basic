"use strict";
exports.__esModule = true;
var dbUrl = 'this is db_url';
exports.dbUrl = dbUrl;
function getData() {
    console.log('获取数据库中的数据');
    return [
        { title: 'Typescript' }
    ];
}
exports.getData = getData;
function save() {
    console.log('保存数据成功');
}
exports.save = save;
