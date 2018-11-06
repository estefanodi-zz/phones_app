var express = require('express'),
app         = express(),
port        = process.env.PORT || 3030,
bodyParser  = require('body-parser'),
mongoose    = require('mongoose'),//.set('debug', true);
cors        = require('cors'),
phonesRoute = require('./routes/routes.phones');

mongoose.connect('mongodb://localhost/phones_db');
mongoose.set('useCreateIndex', true);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.use('/phones', phonesRoute);


app.listen(port, () =>{
console.log(`phones server running on port ${port}`);
});