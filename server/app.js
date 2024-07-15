require("dotenv").config();
const express = require("express");
const cors = require("cors");
require('./db/conn');
const app = express();
const userRoutes = require('./routes/userRoutes');
const productRouters = require('./routes/productRoutes');
app.use(cors());
app.use(express.json());
app.use('/users',userRoutes);
app.use('/product',productRouters);
// app.use(productRouters);

const port = 8080;
app.listen(port, ()=>{
    console.log(`server is running ${port}`);
})
