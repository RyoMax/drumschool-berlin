const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/landingpage.html");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running localy on Port 3000");
})