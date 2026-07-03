// To create routes we need to import the Router from express
import { Router } from "express";

const router = Router();


router.get('/employees',(req, res)=> res.send('Obteniendo empleados'))
router.post('/employees',(req, res)=> res.send('creando empleados'))
router.put('/employees',(req, res)=> res.send('actualizando empleados'))
router.delete('/employees',(req, res)=> res.send('elminando empleados'))



export default router;