const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mevn_database')
    .then(() => console.log('DB is connected'))
    .catch(err => console.error(err));




//setings
app.set('port', process.env.PORT || 3000 );

//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes

app.use('/api/tasks',require('./routes/task'));

//Static files
app.use(express.static(__dirname + '/public'));

//server is listening
app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
});
