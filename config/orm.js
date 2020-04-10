const connection = require("../config/connection.js");

var orm= {
    selectAll: function(table, cb) {
        var queryString="SELECT * FROM" + table + ";"; //select everything from the MySQL table

        //passes a query string and a function
        connection.query(queryString, function(err, result){
            if(err){
                throw err
            }
            cb(result)
        }) 
    }, 
    insertOne: function(column1Value, column2Value, cb){
        var queryString= "INSERT INTO burgers(burger_name, devoured) VALUES(?,?)" //Querystring means you insert into the table, it will insert a burger name and the devoured.
        connection.query(queryString, [column1Value, column2Value], function(err, result){
            if(err){
                throw err
            }
            cb (result)
        })
    }
}

module.exports = orm;