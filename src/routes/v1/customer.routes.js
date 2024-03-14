const express = require('express');
const { createCustomerController } = require('../../controller');

const router = express.Router();

router.post(
    "/create-customer", 
    createCustomerController.createCustomer
);

router.get(
    "/get-customer",
    createCustomerController.getCustomer
)

router.delete(
    "/delete-customer/:id",
    createCustomerController.deletCustomer
)

router.put(
    "/update-customer/:id",
    createCustomerController.updateCustomer
)

module.exports = router