const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');
const contestRoute = require('./routes/contests');

dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);
app.use('/contests', contestRoute);


const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`Server running on PORT ${port}`);
})