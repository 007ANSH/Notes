/*  we are going to do the same with a dog API */
let link="https://dog.ceo/api/breeds/image/random";
let btn= document.querySelector("button");
let img=document.querySelector("img");

btn.addEventListener("click",async ()=>{
    let url = await getImg();
    img.setAttribute("src",url);

})
async function getImg(){
   let data=await axios.get(link);
   //    let res= await Axios.get(url); 
//    console.log(data.data.message);
    return data.data.message;


}
