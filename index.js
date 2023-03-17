const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dBConnect');
const { notFound, errorHanlder } = require('./middlewares/errorHandler');
const authRoute = require('./routes/authRoute')

const app = express();

app.use(express.json());

//rotas
app.use('/api/v1/user', authRoute)

//middlewares
app.use(notFound);
app.use(errorHanlder);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})