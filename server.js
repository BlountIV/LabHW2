const express = require ('express');
const app = express();

// routes
app.get('/Greeting/:name', (req, res) => {
    res.send("What's good" + req.params.name + "its good to see you!");
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const customerSatisfaction = (req.params.total * (req.params.tipPercentage / 100))
   res.send('Your tip is' + ' ' + customerSatisfaction); 
});


app.get('/magic/:phrase', (req, res) => {
    const phrases = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    let guidance = phrases [Math.floor(Math.random() * phrases.length)]
    res.send(req.params.phrase + `<h1>${guidance}</h1>`);






































app.listen(3000, function () {
    console.log('Listening on port 3000');
});
