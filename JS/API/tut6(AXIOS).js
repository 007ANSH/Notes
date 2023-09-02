// ____________________________________________________________________________________________
// AXIOS is used to make HTTP requests
// fetch function does not gives json data so we use axios to directly get the data in json form
let btn =document.querySelector("button");
let para=document.querySelector("#fact");
btn.addEventListener("click",async ()=>{
    // para.innerText=get();
    let fact= await get(); // We use async because we want to use await 
    para.innerText=fact;
})
let url="https://catfact.ninja/fact";
async function get(){
    try{
        let res= await axios.get(url); 
        // let data =await res.json();
        // console.log(res.data.fact);
       return res.data.fact ;
        
    }
    catch(err){
        console.log("the error is ", err);
        
    }
 

}

