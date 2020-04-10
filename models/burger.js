const orm = require('../config/orm.js');

var burger= {
    selectAll: function(cb){ //selects everything from the burger table. Calls everything from the orm file.
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    }, 
    //inserting everything into the table. Puts everything into the table.
    insertOne: function(tableName, column1, column2, column1Value, column2Value, cb){
        orm.insertOne(tableName, column1, column2, column1Value, column2Value, function(res){
            cb(res) 
        })
    }
}