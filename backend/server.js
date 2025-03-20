const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000

app.use(cors({
    origin: 'http://127.0.0.1:5500',
}))

// middlewares for db
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// db config
require('./config/db');

app.get('/', (req, res) => {
    res.send('hlw world');
});

// all api & routes
// create user router
app.use(require('./routes/reguser'));
// ask queston
app.use(require('./routes/ask'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        message: 'something brok 💔'
    })
})

app.listen(port, () => {
    console.log('server running on port', port);

});