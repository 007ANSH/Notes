// First doing npm init to initialize package.json
// Then we install express with npm
// now we are going to require express
const express=require("express"); // this express returns a function lets see what it has
const app=express();
// console.dir(app); This returns a object which has listen fucntion(method) and other properties which can be used to make this is a server


const port=3000;// A port is a logical endpoint of a network which is used to exchange info between web server and web client
app.listen(port,()=>{ // Listen function sits and listens for the incoming requests
    console.log(`this server is running on port ${port}`);// Ctrl C is used to end the server
})
//-----------------------------------------------------------------------------------


//There is a use method in the app object which is returned by express for sending response

//uncomment for read below

// app.use((req,res)=>{
//     console.log(res.send("This is the server created by express"));
//     console.log(`request is recieved`);// now if you try to get to local port 3000 this will be outputed in the console as a response
// }) 




//-----------------------------------------------------------------------------------
// Sending a response
// req,res both are objects and in res object there is a method send which can send response
// inside res.send() we can send object or html code
//-----------------------------------------------------------------------------------
//Routing is a process of selecting a path for traffic in a computer network or between or across a computer network eg:- /help, /contact

// get method is used from app to which takes two arguments one is path and the other is callback
//app.use takes requests from anyone but get method takes requests only from specific routes
app.get('/',(req,res)=>{
    res.send("You have accessed the root directory");

});
app.post('/',(req,res)=>{
    res.send("You have accessed the root directory");

});
app.get('/help',(req,res)=>{
    res.send("You have accessed the help directory");

});
app.get('/contact',(req,res)=>{
    res.send("You have accessed the contacts directory");

});
/* --------------------------!Refer tut.txt!---------------------------------*/


// app.get('/:username/:work',(req,res)=>{// everything after : is a variable
//     console.log(`${req.params.username} is on the site`);// req.param property stores an object which has properties that store the variable that you putted into the routing path
//     let htmlStr=`<h1>HELLO and WELCOME ${req.params.username} you are in the directory ${req.params.work}`;
//     res.send(htmlStr)

// })

//-----------------------------------------------------------------------------------
//   http://localhost:3000/search?name=ansh&branch=CSE ? is used before the starting of the query strings and 
app.get('/search',(req,res)=>{
    console.log(req.query);//req.query returns a object which contains all the query strings 
    let { name ,branch}=req.query;// storing in a object 
    let str=`The name of the person is ${name} and branch ${branch}`;
    res.send(str);
});

// -----------------------------------END------------------------------------------------