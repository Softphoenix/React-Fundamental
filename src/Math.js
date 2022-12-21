// export function addTwo(a,b) {
//     let sumTotal = a + b
//     return sumTotal
// }



// const addTwo = function (a,b) {
//     return a + b
// }
// export default addTwo(a,b)

export const addTwo = (a,b) => a + b
export const AddThree = (b, c, d) => {
    let sumTotal = b + c / d
 return sumTotal
 
}
console.log(AddThree(100, 100, 10))
    

export const multiply = (a,b) => a * b


export const  subtract = (a,b) => a - b

// immediate invoke functions expression

export default ( function doSomething() {
    return {
        addTwo, multiply, subtract
    }
})()


// WE HAVE DEFAULT EXPORT( 1. NAME EXPORT 
// 2. DEFAULT EXPORT)



