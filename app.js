const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/unterricht_konzept", function(req, res){
    res.sendFile(__dirname + "/unterricht_konzept.html");
});

app.get("/unterricht_fortgeschritten", function(req, res){
    res.sendFile(__dirname + "/unterricht_fortgeschritten.html");
});

app.get("/unterricht_anfaenger", function(req, res){
    res.sendFile(__dirname + "/unterricht_anfaenger.html");
});

app.get("/unterricht_kinder", function(req, res){
    res.sendFile(__dirname + "/unterricht_kinder.html");
});

app.get("/lehrkraefte", function(req, res){
    res.sendFile(__dirname + "/lehrkräfte.html");
});

app.get("/lehrkraefte/johan_fink", function(req, res){
    res.sendFile(__dirname + "/teacher/johan_fink.html");
});

app.get("/lehrkraefte/michael_dau", function(req, res){
    res.sendFile(__dirname + "/teacher/michael_dau.html");
});

app.get("/lehrkraefte/dimitris_christides", function(req, res){
    res.sendFile(__dirname + "/teacher/dimitris_christides.html");
});

app.get("/lehrkraefte/bernd_oezsevim", function(req, res){
    res.sendFile(__dirname + "/teacher/bernd_oezsevim.html");
});

app.get("/lehrkraefte/felix_astor", function(req, res){
    res.sendFile(__dirname + "/teacher/felix_astor.html");
});

app.get("/lehrkraefte/jan_tuerk", function(req, res){
    res.sendFile(__dirname + "/teacher/jan_tuerk.html");
});

app.get("/lehrkraefte/mesut_guersoy", function(req, res){
    res.sendFile(__dirname + "/teacher/mesut_guersoy.html");
});

app.get("/lehrkraefte/emanuel_hauptmann", function(req, res){
    res.sendFile(__dirname + "/teacher/emanuel_hauptmann.html");
});

app.get("/lehrkraefte/giancarlo_mura", function(req, res){
    res.sendFile(__dirname + "/teacher/giancarlo_mura.html");
});

app.get("/lehrkraefte/hannes_stickel", function(req, res){
    res.sendFile(__dirname + "/teacher/hannes_stickel.html");
});

app.get("/lehrkraefte/hans_schlotter", function(req, res){
    res.sendFile(__dirname + "/teacher/hans_schlotter.html");
});

app.get("/lehrkraefte/micha_maass", function(req, res){
    res.sendFile(__dirname + "/teacher/micha_maass.html");
});

app.get("/lehrkraefte/tomas_svensson", function(req, res){
    res.sendFile(__dirname + "/teacher/tomas_svensson.html");
});

app.get("/lehrkraefte/derek_scherzer", function(req, res){
    res.sendFile(__dirname + "/teacher/derek_scherzer.html");
});

app.get("/lehrkraefte/chris_heiny", function(req, res){
    res.sendFile(__dirname + "/teacher/chris_heiny.html");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running localy on Port 3000");
});