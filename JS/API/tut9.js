// we are creating a college searching API

let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let list=document.querySelector("#list");

btn.addEventListener("click",async()=>{
   let colleges= await getCol();
   
   show(colleges);
 
})
function show(coll){
    list.innerText="";
    for(col of coll)
   {
      let li=document.createElement("li");
      li.innerText=col.name;
      list.appendChild(li);

   }

}

async function getCol(){
    try{

        let country=document.querySelector("input").value;
        let res=await axios.get(url+country);
        // console.log(res.data);
        return res.data;
    }
    catch(e){
        return[];

    }

}