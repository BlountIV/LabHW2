const express = require ('express');
const app = express();

// routes
app.get('/Greeting/:name', function(req, res) {
    res.send("What's good" + req.params.name + "its good to see you!");
});










































app.listen(3000, function () {
    console.log('Listening on port 3000');
});
