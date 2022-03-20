 require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
require('./DB/db')
const authRoutes = require('./Routes/auth'); 
const usersRoutes = require('./Routes/users'); 
const groupsRoutes = require('./Routes/groups'); 
const productsRoutes = require('./Routes/products'); 
const passport = require('passport')
require('./Config/passport')(passport);


app.use(cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json()); 


app.use(passport.initialize());
app.use('/Api',authRoutes);
app.use('/Api',passport.authenticate('jwt',{session:false}),usersRoutes);
app.use('/Api',passport.authenticate('jwt',{session:false}),productsRoutes);
app.use('/Api',passport.authenticate('jwt',{session:false}),groupsRoutes);


const port =  process.env.PORT || 11000 ;

app.listen(port,() => {
    console.log(`listening on port ${port}`);
})


if (process.env.NODE_ENV === 'production'){ 
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, '../client/build','index.html'))
    });
}

