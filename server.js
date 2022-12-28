require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

const app = express();

mongoose.connect(process.env.CONNECT_DB,{useUnifiedTopology:true,useNewUrlParser:true})
    .then((result) => {
        if(result) {
            app.listen(process.env.PORT, ()=> {
                console.log(`server running at http://localhost:${PORT}`);
            })
            console.log('Database connected')
        }
    })
    .catch((err) => {
        console.log(err);
        console.log('database not connected due to error')
    })

app.use(morgan('dev'));
app.use(cors);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

// app.use('/', require('./route/dogOwner'))
app.use('/register', require('./route/dogOwner'));


