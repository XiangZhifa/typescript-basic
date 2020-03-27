/**
 * 接口起到了限制行为规范的作用
 *
 * ts中的接口包含
 *
 * 1.属性接口
 * 2.函数接口
 * 3.可索引接口
 * 4.类接口
 * 5.接口扩展
 **/
//属性接口  对传入的JSON参数进行约束
function getInfo(info) {
    console.log(info);
}
getInfo({ name: 'professional' });
function getFullName(name) {
    //传入的对象必须包含，firstName secondName
    console.log(name.firstName + ' ' + name.secondName);
}
//传入的参数必须包含 firstName 和 secondName
var userInfo = {
    firstName: 'Jessie',
    secondName: 'Lingard',
    age: 27
};
getFullName(userInfo);
function getUserInfo(info) {
    console.log(info);
}
getUserInfo({ nickName: 'Jeffery', city: 'Shanghai', age: 24 });
getUserInfo({ nickName: 'Shankly' });
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
        else {
            console.log(xhr.responseText);
        }
    };
}
ajax({
    type: 'get',
    url: 'https://www.baidu.com/',
    data: 'name=林加德',
    dataType: 'json'
});
