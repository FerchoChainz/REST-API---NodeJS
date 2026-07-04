import {pool} from '../db.js';

const getEmployees = (req, res)=> res.send('Obteniendo empleados');

const createEmployee = async  (req, res)=> {
    const {name, salary} = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)',[name, salary]);
    res.send({
        name,
        salary,
        id: rows.insertId
    });
};

const updateEmployee = (req, res)=> res.send('actualizando empleados');

const deleteEmployee = (req, res)=> res.send('elminando empleados');

export {getEmployees, createEmployee, updateEmployee, deleteEmployee};
