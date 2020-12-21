// Typescript 静态类型
let count: number = 1
count.toFixed(2)

interface Hero {
    name: string,
    age: number
}

const MasterYi: Hero = {
    name: 'MasterYi',
    age: 30
}

console.log(MasterYi.name + " " + MasterYi.age)
