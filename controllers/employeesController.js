const Employee = require('../model/employees.json');

const getAllEmployees = async (req, res) => {
    const employees = await employee.find().exec();
    if(!employees) return res.sendStatus(204).json({'message': 'No employees found.'}); //Not Found
    res.json(employees);

}

const createNewEmployee = async (req, res) => {
    if (!req.body?.firstname || !req.body?.lastname) {
        return res.status(400).json({ 'message': 'First and last names are required.' });
    }
    try {
        const result = await employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({ 'message': err.message });
    }
}

const updateEmployee = async (req, res) => {
    if (!req.body?.id) {
        return res.status(400).json({ 'message': 'Employee ID is required.' });
    }
    const employee = await employee.findOne({ _id: req.body.id }).exec();

    if (!employee) {
        return res.status(204).json({ "message": `No Employee matches ID ${req.body.id}`});
    }
    if (req.body?.firstname) employee.firstname = req.body.firstname;
    if (req.body?.lastname) employee.lastname = req.body.lastname;
    const result = await employee.save();
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, employee];
    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.employees);
}

const deleteEmployee = async (req, res) => {
    if (!req.body?.id) {
        return res.status(400).json({ 'message': 'Employee ID is required.' });
    }
    const employee = await employee.findOne({ _id: req.body.id }).exec();
    if (!employee) {
        return res.status(204).json({ "message": `No Employee matches ID ${req.body.id}`});
    }
    const result = await employee.deleteOne({_id: req.body.id});
    res.json(data.employees);
}

const getEmployee = async (req, res) => {
    if (!req.params?.id) {
        return res.status(400).json({ 'message': 'Employee ID is required.' });
    }
    const employee = await employee.findOne({ _id: req.body.id }).exec();
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
    }
    res.json(employee);
}

module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}