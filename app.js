const express = require("express");
const app = express();

app.get("/dog.tinder.com", function(req, res){
  res.sendFile(__dirname+ "/index.html");
});

app.listen(3000||process.env.PORT, function(){
  console.log("Okay! The server is up and running... enter localhost:3000/dog.tinder.com");
});
