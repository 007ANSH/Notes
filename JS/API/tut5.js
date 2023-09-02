let url= "https://catfact.ninja/fact";
 
async function get(){
    try{

        let res= await fetch(url); //this returns a promise which is stored in res but is not in readable form
        let data =await res.json();// now data stores the res.json which is the json form of data
        console.log("data1 ",data.fact);
        let res2= await fetch(url);
        let data2 =await res2.json();
        console.log("data2 ",data2.fact);
    }
    catch(err){
        console.log("the error is ", err);
        
    }
    console.log("BYE");

}