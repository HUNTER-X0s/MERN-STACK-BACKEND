// "type" : "module",   in package.json ...This is modern way....ECMAscript ES6
// "type" : "commonjs"  in package.json ...This is bydefault..if you does not mention it explicitly then also it is fine....commonjs



export const a = 1  //named export
export const b = 2  //named export
export const c = 3  //named export
export const d = 4  //named export
export const e = 5  //named export

let obj = {    
    x:5,
    y:7  
}
export default obj; //Default Export