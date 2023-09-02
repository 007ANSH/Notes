// function saveDb(data, success, failure) {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if (speed > 4)
//         success();
//     else
//         failure();
// }
// saveDb("apnapan",() => {
    
//     console.log("sucessfully data is saved");
//     saveDb("hello", () => {
//         console.log("sucessfully data2 is saved");
//         saveDb("what", () => {
//             console.log("sucessfully data3 is saved");

//         }, () => {
//             console.log("failure data3 is not saved");

//         });

//     }, () => {
//         console.log("failure2, data is not saved");

//     });
// }, () => {
//     console.log("failure, data is not saved ");
// })/
/*
function saveDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4)
        resolve(" data is saved");
        else
        reject("data is not saved");
    });
    
}
*/
/* \
return new promise (()=>{

})
*/
// saveDb("kuch").then(()=>{
//     console.log("promise is resolved");
// }).catch(()=>{
//     console.log("promise is rejected");
// });
/*
saveDb("KuCH").then(()=>{
    console.log("data1 is saved");
    return saveDb("Asn");
})
.then(()=>{
    console.log("data2 is saved");
    return saveDb("ANsh");
})
.then(()=>{
    console.log("data3 is saved");
})
.catch(()=>{
    console.log("data is rejected");
})
*/
/*
then and catch can take result and error argument respectively
 */
/*
saveDb("KuCH").then((result)=>{
    console.log("the result is " ,result);
    console.log("data1 is saved");
    return saveDb("Asn");
})
.then((result)=>{
    console.log("the result is " ,result);
    console.log("data2 is saved");
    return saveDb("ANsh");
})
.then((result)=>{
    console.log("the result is " ,result);
    console.log("data3 is saved");
})
.catch((error)=>{
    console.log("the error is " ,error);
    console.log("data is rejected");
})*/
let h1=document.querySelector("h1");
function changeColour(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color is changed");

        },delay);
        
        
        
    });
    resolve();

}
/* ------------------------------------------------------------------------------------- */
// changeColour("red",1000).then(()=>{
//    return changeColour("orange",1000);
// })
// .then(()=>{
//     return changeColour("green",1000);


// });
/* ------------------------------------------------------------------------------------ */
/* Using async function  */

async function change(){
    try{

        await changeColour("red",1000);
        await changeColour("orange",1000);
        await changeColour("green",1000);
        await changeColour("blue",1000);
        await changeColour("red",1000);
        await changeColour("orange",1000);
        await changeColour("green",1000);
        await changeColour("blue",1000);
        await changeColour("red",1000);
        await changeColour("orange",1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }


    let a=5;
    console.log(a);//if any of the above function fails than later this computation wont going to happen using try and catch will help the situation


}