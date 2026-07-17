// To create routes we need to import the Router from express
import { Router } from "express";
import {getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controllers.js';

const router = Router();

// GET, POST, PUT, DELETE
// A way better to read the code is to create a controller for each route, so we can separate the logic from the routes and make it more readable.
router.get('/employees',getEmployees)

router.get('/employees/:id',getEmployee)

router.post('/employees',createEmployee)

router.patch('/employees/:id', updateEmployee)
// if we want to update all the fields we can use put, but if we want to update only some fields we can use patch, so we can use patch for this case.

router.delete('/employees/:id', deleteEmployee)



export default router;