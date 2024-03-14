const poolPromise = require("../db/mySQLdb");

const insertCustomer = (data) => {
    try {
        console.log(data);
        let sqlQuery = 'INSERT INTO customer (CNAME, CITY, RATING, SNUM) VALUES (?, ?, ?, ?)'
        const res = poolPromise.execute(sqlQuery, [data.cname, data.city, data.rating, data.snum])

        console.log(res);

    } catch (error) {
     console.log(error.message);   
    }
}

const selectCustomer = async () => {
    try {
        let sqlQuery = 'SELECT * FROM customer'
        const res = await poolPromise.execute(sqlQuery)

        console.log(res);

    } catch (error) {
        console.log(error.message);
    }
}

const deletCustomer = async (id) => {
    try {
        let sqlQuery = `DELETE FROM customer WHERE cnum=${id}`
        const res = await poolPromise.execute(sqlQuery)

        console.log(res);

    } catch (error) {
        console.log(error.message);
    }
}

const updateCustomer = async (id, data) => {
    try {
        let sqlQuery = `UPDATE customer SET cname='?', city='?', rating='?', snum='?' WHERE cnum=${id}`
        const res = await poolPromise.execute(sqlQuery, [data.cname, data.city, data.rating, data.snum])

        console.log(res);

    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    insertCustomer,
    selectCustomer,
    deletCustomer,
    updateCustomer
}