const poolPromise = require("../db/mySQLdb");
const { Customer } = require("../model");

const createCustomer = async (req, res) => {
    try {
        console.log(req.body);
        const res = Customer.insertCustomer(req.body);
        
    } catch (error) {
        console.log(error.message);
    }
}

const getCustomer = async (req, res) => {
    try {
        const data = await Customer.selectCustomer()

        console.log(data);
        
    } catch (error) {
        console.log(error.message);
    }
}

const deletCustomer = async (req, res) => {
    try {
        let id = +req.params.id

        const data = await Customer.deletCustomer(id)

        console.log(id, data);
    } catch (error) {
        console.log(error.message);
    }
}

const updateCustomer = async (req, res) => {
    try {
        let id = +req.params.id
        let data = req.body

        const customer = await Customer.updateCustomer(id, data)

        console.log(id, data);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    createCustomer,
    getCustomer,
    deletCustomer,
    updateCustomer
}