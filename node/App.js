import express from 'express'
import cors from 'cors'
// importamos la conexión a la DB
import db from './database/db.js';
// importamos nuestro enrutador
import conversoRoutes from './src/routes/products.routes.js'
import morgan from 'morgan'
import pkg from './package.json'assert { type: 'json' };


const app = express()

app.set('pkg', pkg)

app.use(morgan('dev'))

app.get('/', (req, res)=> {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/converso', conversoRoutes)



app.listen(4000, () =>{
    console.log('Server up running in http://localhost:4000/')
}) 

app.get('/', (req,res) =>{
    res.send('working')
})

export default app;
