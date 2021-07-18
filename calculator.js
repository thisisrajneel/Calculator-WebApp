const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req,res)=>{

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    
    if(req.body.add == 'on') {
        var result = n1+n2;
        res.send(`${n1} + ${n2} = ${result}`);
    }
    else if(req.body.sub == 'on') {
        var result = n1-n2;
        res.send(`${n1} - ${n2} = ${result}`);
    }
    else if(req.body.mul == 'on') {
        var result = n1*n2;
        res.send(`${n1} * ${n2} = ${result}`);
    }
    else if(req.body.div == 'on') {
        var result = n1/n2;
        res.send(`${n1} / ${n2} = ${result}`);
    }
    else {
        alert('enter ONLY ONE operation!');
    }
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})