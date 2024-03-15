const poolPromise = require("../db/mySQLdb");
const { Customer } = require("../model");

const createCustomer = async (req, res) => {
    try {
        console.log(req.body);
        const result = Customer.insertCustomer(req.body);

        res.status(200).json({
            success: true,
            message: "Customer inserted successfully",
            data: result
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

        res.status(200).json({
            success: true,
            message: "Customer Delete successfully",
            data: result
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

        const customer = await Customer.updateCustomer(id, data)

        res.status(200).json({
            success: true,
            message: "Customer Update successfully",
            data: customer
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