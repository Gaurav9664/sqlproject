const express = require('express');
const router = require('./routes/v1');


const app = express();

app.use(express.json());

app.use("/api/v1", router);


app.listen(5000, () => {
    console.log("Server started at port 5000");
})