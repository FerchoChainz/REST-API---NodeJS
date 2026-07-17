import {pool} from '../db.js';

const getEmployees = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
};

const getEmployee = async (req, res) => { 
    console.log(req.params.id);
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);


    if (rows.length <= 0){
        return res.status(404).json({
            message: 'Employee not found'
        })
    }

    res.json(rows);
}

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

const deleteEmployee = async (req, res)=> {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
    
    if(result.affectedRows <= 0){
        return res.status(404).json({
            message:'Employee not found'
        })
    }
    
    res.sendStatus(204);

};

export {getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee};
