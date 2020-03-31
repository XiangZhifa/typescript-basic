let dbUrl = 'this is db_url';

function getData(): any[] {
    console.log('获取数据库中的数据');
    return [
        {title: 'Typescript'}
    ]
}

function save() {
    console.log('保存数据成功');
}

export {
    dbUrl,
    getData,
    save
}

