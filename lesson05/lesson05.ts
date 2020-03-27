//函数类型接口，传入的参数和返回值进行约束
interface encode {
    (key: string, value: string): string; //进行批量约束
}

let md5: encode = (key: string, value: string): string => {
    return `${key} : ${value}`;
};

console.log(md5('Name','Lingard'));