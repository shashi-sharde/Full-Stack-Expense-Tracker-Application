const path = require('path');


const express = require('express'); 
const bodyParser = require('body-parser');


const sequelize = require('./util/database'); 

const cors = require('cors');

const app = express(); 

app.use(cors());


const expenseRoutes = require('./Routes/ExpenseRoute');




app.use(express.json())


app.use('/user', expenseRoutes);

app.use(express.static(path.join(__dirname, 'public')));
sequelize.sync().then(result =>{
    console.log('Server started at 3000');
    app.listen(3000); 
}).catch(err=>{
    console.log(err);
});  