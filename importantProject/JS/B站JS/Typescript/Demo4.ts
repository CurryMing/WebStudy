// 类型注解 和 类型推断
function getTotal(one: number, two: number) {
    return one + two
}
const total = getTotal(1, 2)

// 自动推断
const Hero = {
    name: 'curry',
    age: 21
}