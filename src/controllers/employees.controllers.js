

const getEmployees = (req, res)=> res.send('Obteniendo empleados');

const createEmployee = (req, res)=> res.send('creando empleados');

const updateEmployee = (req, res)=> res.send('actualizando empleados');

const deleteEmployee = (req, res)=> res.send('elminando empleados');

export {getEmployees, createEmployee, updateEmployee, deleteEmployee};
