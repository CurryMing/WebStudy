// 函数参数 和 返回类型得注解
function getTotal(one: number, two: number): number {
    return one + two
}

function sayHello(): void {
    console.log("Hello World")
}

function errorFunction(): never {
    throw new Error()
    console.log("Hello World")
}

function forNever(): never {
    while (true) { }
    console.log("Hello World")
}

function add({ one, two }: { one: number, two: number }) {
    return one + two
}
const total = add({ one: 1, two: 2 })

function getNumber({ one }: { one: number }) {
    return one
}
const one = getNumber({ one: 1 })