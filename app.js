const express = require('express');

const app = express();

const session = require('express-session')

const port = process.env.PORT || 4000;



app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

const routes = require('./routes');

app.use(routes);



app.listen(port, ()=>{
  console.log(`We are about to launch an app on port ${port}`)
})