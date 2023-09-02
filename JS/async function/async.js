// async function greet () {
//     throw "nhi ho rha kya";
//     return "Hello";

// }
// greet().then((res)=>{
//     console.log("Page is working fine",res);
// }).catch((err)=>{
//     console.log("page failed due to",err)
// })

// let demo= async ()=>{
//     return 5;
// }

/* this async function will return a promise which will get rejected if there is an error and can be handled by catch otherwise for a success call can be handled by then */

/* --------------------------------------------------------------------------------------- */


function num()
{
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
         let n=Math.floor(Math.random()*10)+1;
         console.log(n);
         resolve();
        },1000)
    })
}
async function greet(){
    await num();
    await num();
    await num();
    await num();
    await num();
    await num();
    await num();
    await num();
    await num();
    await num();
}