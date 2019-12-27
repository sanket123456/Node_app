var express = require('express');
var app=express();
fs=require('fs');
bodyparser=require('body-parser');

mymodule=require('./module')

app.use(bodyparser.urlencoded({extended:false}));

app.get("/",function(req,resp){
    resp.sendFile("form.html",{root:__dirname})
    console.log("form is up and running");
});

app.post("/calculation",function(req,resp)
{
    console.log("in the addition log");
    data=mymodule.addition(req.body.num1,req.body.num2)
    resp.send("addition"+data);
});
app.listen(3000,function()
{
    console.log("server is runnig on 3000");
})