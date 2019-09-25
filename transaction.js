var express = require('express'); 
var bodyParser = require('body-parser'); 
var app = express();

app.use(bodyParser.json());

var creditCards = [ 
    {
        "id": 1,
        "flag": "Mastercard",
        "number": "556",
        "dueDate": "12/2022",
        "cvc": "700"
    },
    {
        "id": 2,
        "flag": "Visa",
        "number": "555",
        "dueDate": "12/2023",
        "cvc": "701"
    },
]

app.get('/v1/public/creditCards', function(req, res){
    var found = false;
    for(var i = 0; i < creditcards.length; i++){
        if(creditcards[i].number == req.body.number && creditcards[i].dueDate == req.body.dueDate && creditCards[i].cvc == req.body.cvc) {
            found = true;
            break;
        }
    }
    res.status(200).send(found);
});

app.listen(8084, function() {
	console.log('Servidor rodando na porta 8084.');
});