let url="https://catfact.ninja/fact";
fetch(url) //returns a promise 
.then((res)=>{ // handling promise 
    console.log(res); // this doesn't give the required thing 
    //console.log(res.json());; // res.json make the response available but also returns a promise
    return res.json();

}).then((data)=>{
        console.log("data1", data.fact);
        return fetch(url);
}).then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("data2",data.fact);
})
.catch((err)=>{
    console.log("error is" + err);
});