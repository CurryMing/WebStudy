// 数组的注解
const numbers: number[] = [1, 2, 3, 4, 5]
const strings: string[] = ['1', '2', '3']
const undefineds: undefined[] = [undefined, undefined]
const strnums: (string | number)[] = [1, 'str1', 'str2', 2]

// 类型别名
type Hero = { name: string, age: number }
class Heros { name: string; age: number }
const heros: Hero/*Heros*/[] = [
    { name: 'curry', age: 21 },
    { name: 'java', age: 21 }
]