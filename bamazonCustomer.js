var mysql = require('mysql');
var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"dumpling1",
    database:"bamazon2"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("Welcome to the bAmazon Store!");
    makeTable();
})

var makeTable = function (){
    connection.query("SELECT * FROM products", function(err,res){
        for (var i=0; i<res.length; i++){
            console.log(res[i].itemId+" || "+res[i].productname+" || "+res[i].departmentname+" || "+res[i].price+" || "+res[i].stockquantity+"\n");
        }
    promptCustomer(res);
    })
}        
    var promptCustomer = function(res){
        inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: 'What would you like to purchase? [Hit Q to leave the store]'
    }]).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()=="Q"){
            console.log("We are sorry to see you go!")
            process.exit();
        }
        for (var i=0; i<res.length; i++){
            if (res[i].productname==answer.choice){
                correct=true;
                var product=answer.choice;
                var id=i; 
                inquirer.prompt({
                    type: 'input',
                    name: 'quant',
                    message: "How many would you like to buy?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }  
                }).then(function(answer){
                    if((res[id].stockquantity-answer.quant)>0){
                        connection.query("UPDATE products SET stockquantity=' "+(res[id].stockquantity-answer.quant)+"' WHERE productname='"+product+"'", function(err,res2){
                            console.log("Thank you for your purchase!");
                            makeTable();
                        })
                    } else {
                        console.log("That amount exceeds our stock quantity!");
                        promptCustomer(res);
                    }
                })
            }
        }
        if(i==res.length && correct==false){
            console.log("That product is not available in this store!");
            promptCustomer(res);
            makeTable();
        }
    })
}