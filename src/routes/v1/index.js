const express = require('express');

const router = express.Router();

const createCustomerRoutes = require('./customer.routes')

router.use("/customer", createCustomerRoutes);

module.exports = router