const poolPromise = require("../db/mySQLdb");
const { Customer } = require("../model");

const createCustomer = async (req, res) => {
    try {
        console.log(req.body);
        const result = await Customer.insertCustomer(req.body);
        const getresult = await Customer.selectCustomer()

        console.log(Customer);

        res.status(200).json({
            success: true,
            message: "Customer inserted successfully",
            data: getresult
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: Insert Customer, ${error.message}`,
            data: []
        })
    }
}

const getCustomer = async (req, res) => {
    try {
        const result = await Customer.selectCustomer()

        res.status(200).json({
            success: true,
            message: "Customer Get Data successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: Get Data Customer, ${error.message}`,
            data: []
        })
    }
}

const deletCustomer = async (req, res) => {
    try {
        let id = +req.params.id

        const result = await Customer.deletCustomer(id)
        const getresult = await Customer.selectCustomer()

        res.status(200).json({
            success: true,
            message: "Customer Delete successfully",
            data: getresult
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: Delete Customer, ${error.message}`,
            data: []
        })
    }
}

const updateCustomer = async (req, res) => {
    try {
        let id = +req.params.id
        let data = req.body

        console.log(id, data);

        const customer = await Customer.updateCustomer(id, data)
        const getresult = await Customer.selectCustomer()

        console.log(customer);

        res.status(200).json({
            success: true,
            message: "Customer Update successfully",
            data: getresult
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Internal server error: Update Customer, ${error.message}`,
            data: []
        })
    }
}

module.exports = {
    createCustomer,
    getCustomer,
    deletCustomer,
    updateCustomer
}