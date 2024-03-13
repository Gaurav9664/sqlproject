const pool = require("./db/mySQLdb")

pool.query('select * from customer', (error, results, fileds)=>{
    console.log(results);
})