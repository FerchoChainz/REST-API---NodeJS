// To create routes we need to import the Router from express
import { Router } from "express";
import {getEmployees, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.controllers.js';

const router = Router();

// GET, POST, PUT, DELETE
// A way better to read the code is to create a controller for each route, so we can separate the logic from the routes and make it more readable.
router.get('/employees',getEmployees)
router.post('/employees',createEmployee)
router.put('/employees', updateEmployee)
router.delete('/employees', deleteEmployee)



export default router;