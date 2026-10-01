/*
[ [a] = [ [b] + [2] ]];

До примітивних типів належать:

    string
    number
    boolean
    undefined
    null
    symbol
    BigInt
    */

    let str = "Hello World 1 !"
    let str2 = 'World'
    let str3 = `Hello World, ${str}`
    console.log(str)
    console.log(str2)
    console.log(str3)


let a = 3
let b = 3.14;
console.log(a)
console.log(b)
let c = a + b
console.log(c)
let d = 1/0
console.log(d)

let isUser = true 
let isAdmin = false
console.log(isUser)
console.log(isAdmin)

let e;
console.log(e)

let t = null;
console.log(t)

const mySymbol = Symbol();
const id1 = Symbol("id");// додаємо опис
const id2 = Symbol("id");//

const bigInt = 1234567890n