/**
 * ts中的泛型接口
 **/

//这是函数类型接口，类型是指定的
interface ConfigFn {
    (params1: string, params2: string): string;
}

let setData: ConfigFn = (params1: string, params2: string): string => {
    return params1 + params2;
};
setData('name', 'LeeFour');

//这是泛型接口，类型可以灵活配置
interface ConfigFn1 {
    <T>(params1: T, params2: T): any;
}

let getData: ConfigFn1 = <T>(value1: T, value2: T): any => {
    return `${value1}+${value2}`;
};

getData<string>('name', 'WongFive');

interface ConfigFn2<T> {
    (params1: T, params2: T): any;
}

let getData2: ConfigFn2<string> = <T>(value1: T, value2: T): any => {
    return `${value1}+${value2}`;
};

getData2('name', 'WongFive');
