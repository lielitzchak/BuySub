const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const dbConnection = require('./DB/db')
const authRoutes = require('./Routes/auth'); 
const usersRoutes = require('./Routes/users'); 
const groupsRoutes = require('./Routes/groups'); 
const productsRoutes = require('./Routes/products'); 

app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json()); 


app.use('/Api',authRoutes);
app.use('/Api',usersRoutes);
app.use('/Api',groupsRoutes);
app.use('/Api',productsRoutes);

const port =  process.env.PORT || 9500 ;

app.listen(port,() => {
    console.log(`listening on port ${port}`);
})



