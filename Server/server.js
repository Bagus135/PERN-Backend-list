const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('./main/routesTodo')
const authRoutes = require("./auth/authRoutes")
const dashbRoutes = require("./auth/dashboard")
const userRoutes = require("./main/userRoutes")

//middleware 
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes)
app.use('/dashboard', dashbRoutes)
app.use('/todos', todoRoutes)
app.use('/users', userRoutes )

app.listen(5000, () =>{
    console.log(`Server has started on http://localhost:5000`)
})