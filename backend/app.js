const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app = express();

require('dotenv').config()


const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes' + route)))

   
app.listen(PORT, () => {
    db()
    console.log('Server Running');
    });
    