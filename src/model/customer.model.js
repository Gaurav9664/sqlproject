const poolPromise = require("../db/mySQLdb");

const insertCustomer = async (data) => {
    try {
        console.log(data);
        let sqlQuery = 'INSERT INTO customer (CNAME, CITY, RATING, SNUM) VALUES (?, ?, ?, ?)'
        const [rows] = await poolPromise.execute(sqlQuery, [data.CNAME, data.CITY, data.RATING, data.SNUM])

        return rows

    } catch (error) {
        throw error.message   
    }
}

const selectCustomer = async () => {
    try {
        let sqlQuery = 'SELECT * FROM customer'
        const [rows] = await poolPromise.execute(sqlQuery)

        // console.log(rows);
        return rows

    } catch (error) {
        throw error.message
    }
}

const deletCustomer = async (id) => {
    try {
        let sqlQuery = `DELETE FROM customer WHERE cnum=${id}`
        const [rows] = await poolPromise.execute(sqlQuery)

        return rows

    } catch (error) {
        throw error.message
    }
}

const updateCustomer = async (id, data) => {
    try {
        let sqlQuery = `UPDATE customer SET cname=?, city=?, rating=?, snum=? WHERE cnum=${id}`
        const [rows] = await poolPromise.execute(sqlQuery, [data.cname, data.city, data.rating, data.snum])

        // console.log(rows);

        return rows

    } catch (error) {
        throw error.message
    }
}


module.exports = {
    insertCustomer,
    selectCustomer,
    deletCustomer,
    updateCustomer
}