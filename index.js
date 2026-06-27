import express from "express"

const app = express();


app.get('/employees',(req, res)=> res.send('Obteniendo empleados'))
app.post('/employees',(req, res)=> res.send('creando empleados'))
app.put('/employees',(req, res)=> res.send('actualizando empleados'))
app.delete('/employees',(req, res)=> res.send('elminando empleados'))



app.listen(3000)