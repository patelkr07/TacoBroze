require("dotenv").config();

var mysql = require("mysql");



var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: process.env.DB_PASSWORD,
    database: "tacos_db"
});

connection.connect(function(err) {
    if (err) throw err;

    start();
});

function start() {

    connection.query("SELECT * FROM tacos", function(err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].taco_name + " | " + res[i].shell + " | " + res[i].vegetarian + " | " + res[i].picked_up)
        }

    })

}