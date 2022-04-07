const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection');
const route = require('./routes/users');


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set('view engine', 'ejs');

app.use('/users', route);




db.once('open', () =>{
    console.log(`db live`);
    app.listen(PORT, () => {
        console.log(`server live on ${PORT}`)
    })
})