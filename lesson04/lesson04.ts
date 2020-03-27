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
function getInfo(info: { name: string }): void {
    console.log(info);
}

getInfo({name: 'professional'});

//通过接口,对批量方法传入参数进行约束
interface fullName {
    firstName: string;  //!!!注意!!! 接口中声明属性，必须以 ; 结束
    secondName: string;
}

function getFullName(name: fullName): void {
    //传入的对象必须包含，firstName secondName
    console.log(name.firstName + ' ' + name.secondName);
}

//传入的参数必须包含 firstName 和 secondName
let userInfo = {
    firstName: 'Jessie',
    secondName: 'Lingard',
    age: 27
};
getFullName(userInfo);

//可选属性接口
interface userInfo {
    nickName: string;
    city?: string; //接口的可选属性，可传可不传
    age?: number; //接口的可选属性，可传可不传
}

function getUserInfo(info: userInfo): void {
    console.log(info)
}

getUserInfo({nickName: 'Jeffery', city: 'Shanghai', age: 24});
getUserInfo({nickName: 'Shankly'});

//利用ts属性接口，实现ajax封装
interface ajaxConfig {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}

function ajax(config: ajaxConfig) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
        } else {
            console.log(xhr.responseText)
        }
    }
}
ajax({
    type:'get',
    url:'https://www.baidu.com/',
    data:'name=林加德',
    dataType: 'json'
});