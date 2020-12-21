// 基础静态类型 和 对象静态类型

// 基础类型：undefined、null、boolean、void、symbol
const age: number = 21
const userName: string = 'Ming'

// 对象类型：数组类型、类类型、函数类型
const Hero: {
    name: string,
    age: number
} = {
    name: 'Curry',
    age: 32
}

const Heros: string[] = ['MasterYi', 'Curry', 'jq']

class Person { }
const Curry: Person = new Person()

const PickHero: () => string = () => { return 'Curry' }
