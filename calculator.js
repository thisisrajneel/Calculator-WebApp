const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

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
});

app.get('/bmi', (req,res)=>{
    res.sendFile(__dirname + "/bmiCalc.html")
});

app.post('/bmi', (req,res)=>{
    var weight = parseFloat(req.body.w);
    var height = parseFloat(req.body.h);

    var bmi = weight/(height**2);
    res.send(`Your BMI is ${bmi} !!`);
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})