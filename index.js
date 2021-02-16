
const express = require('express');
const { dbConection } = require('./database/config');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

require('./config/config');

const app = express();

app.use(cors());

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/notes', require('./routes/notesRoutes'));


dbConection();

//https://notes-app-angular-node.herokuapp.com/ deployed to Heroku

// Directorio público
app.use( express.static('public') );

// Lo último
app.get('*', (req, res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html' ) );
});


app.listen(process.env.PORT, ()=> {
    console.log('listening on port ', process.env.PORT);
})


 


