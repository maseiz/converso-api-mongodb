import express from 'express';
import cors from 'cors';
// importamos la conexión a la DB
import db from './database/db.js';
// importamos nuestro enrutador
import conversoRoutes from './routes/routes.js';
// import loginRouter from './routes/login.js';


const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/converso', conversoRoutes)



app.listen(8000, () =>{
    console.log('Server up running in http://localhost:8000/')
}) 

app.get('/', (req,res) =>{
    res.send('working')
})

