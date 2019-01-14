'user strict';
var sql = require('./db.js');

//Task object constructor
var Task = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};




Task.createTask = function createUser(newTask, result) {    
        sql.query("INSERT INTO Product set ?", newTask, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Task.getTaskById = function createUser(productID, result) {
        sql.query("Select productName from Product where productID = ? ", productID, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Task.getAllTask = function (result) {
        sql.query("Select * from Product", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  

                 result(null, res);
                }
            });   
};
Task.updateById = function(id, task, result){
  sql.query("UPDATE tasks SET Product = ? WHERE id = ?", [task.task, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Task.remove = function(id, result){
     sql.query("DELETE FROM Product WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

Task.getVanilla = function(result){
    sql.query("select ingredientName , productName from Ingredient i , IngredientInProduct ip, Product p  where  ip.ingredientID = i.ingredientID AND ip.productID = p.productID AND i.ingredientName = 'vanilla'", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('tasks : ', res);  

         result(null, res);
        }
    });
}

Task.findCustomers = function(result){
    sql.query("select customerName, sum(orderPrice) AS total from Customer c, Purchase p  where c.customerID = p.customerID   group by c.customerID having sum(p.orderPrice) > 500 ORDER BY total desc", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('tasks : ', res);  

         result(null, res);
        }
    });
}

Task.findCustomersAddOn = function(result){
    sql.query("select customerName , addOnID from Customer c , Purchase pc , AddOnsInPurchase a  where pc.purchaseID = a.purchaseID AND c.customerID = pc.customerID order by c.customerName, a.addOnID", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('tasks : ', res);  

         result(null, res);
        }
    });
}

Task.findProductRatings = function(result){
    sql.query("select distinct productName , rating  from Product p, Review r where p.productID = r.productID AND r.rating = 5", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('tasks : ', res);  

         result(null, res);
        }
    });
}
Task.findAverageRatings = function(result){
    sql.query("select productName, avg(rating) AS AverageRating from Review r , Product p where r.productID = p.productID group by r.productID ", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('tasks : ', res);  

         result(null, res);
        }
    });
}
Task.christmas = function(result){
    sql.query("select productName , purchaseDate from Product pp, Purchase p , ProductInPurchase pip where pip.productID = pp.productID AND pip.purchaseID = p.purchaseID AND p.purchaseDate = '25/12/2017' ", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('tasks : ', res);  

         result(null, res);
        }
    });
}

Task.getAllAddons = function getAllAddons(result) {
    sql.query("Select * from AddOns", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

Task.deleteItem = function(reviewID, result){
    sql.query("DELETE  FROM Review WHERE reviewID= ?", [reviewID], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
                   alert("errror from model     "+ err);
               }
               else{
              
                result(null, res);
               }
           }); 
};

Task.getAllReviews = function(result) {
    sql.query("Select * from Review", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};
Task.createIngredient = function (newTask, result) {    
    sql.query("INSERT INTO Ingredient (ingredientID, ingredientName, stockLeft, lowStockNo) VALUES ?", 
                [newTask.ingredientID, 
                newTask.ingredientName, 
                newTask.stockLeft, 
                newTask.lowStockNo], 
                function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

Task.deleteProduct = function(productName, result){
    sql.query("DELETE FROM Product WHERE productName= ?", [productName], function (err, res) {

               if(err) {
                   console.log("error: ", err);
                   result(null, err);
                   //alert("error from model      " + err);
               }
               else{
                result(null, res);
               }
           }); 
};

module.exports= Task;