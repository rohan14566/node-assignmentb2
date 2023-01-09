const express = require("express");


const app = express();

app.get('/api/main', function(req, res){
    console.log(req);
    res.send({message: "Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications."});
    res.end();
})

app.listen(4000, function(){
    console.log("Server is started at port 5050");
});