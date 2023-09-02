// Sending headers with the request of API to get specific data
let url ="https://icanhazdadjoke.com/";

async function getJoke(){
    let config= {header:{Accept:"application/json"}}; //this is the specific way to send a header request so that the response will be specific to our demand, the thing is in hoppscotch we manually choose the header and set the accept header to application/json here we are doing the same thing but with code \
    // we are creating a config variable which will store the header in a specific way that is object ,where header is key and its value represent the request
    let data= await axios.get(url);
    console.log(data.data);

}