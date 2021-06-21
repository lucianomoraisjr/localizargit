const express = require('express');
const app =  express();


app.get('/', (req,res) =>{
return res.json({message:'Start'});
});

app.listen(3333, () =>{
console.log("esta rodando na porta 3333")
})