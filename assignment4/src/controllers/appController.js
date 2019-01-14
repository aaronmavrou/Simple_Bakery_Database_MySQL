'use strict';

var Task = require('../models/appModel.js');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.json(task);
  });
};



exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);

  //handles null error 
   if(!new_task.task || !new_task.status){

            res.status(400).send({ error:true, message: 'Please provide task/status' });

        }
else{
  
  Task.createTask(new_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
}
};


exports.read_a_task = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


exports.list_all_vanilla = function(req, res) {
    Task.getVanilla(function(err, task) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', task);
      res.json(task);
    });
  };

  exports.list_customers = function(req, res) {
    Task.findCustomers(function(err, task) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', task);
      res.json(task);
    });
  };

  exports.list_customer_AddOn = function(req, res) {
    Task.findCustomersAddOn(function(err, task) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', task);
      res.json(task);
    });
  };
  exports.list_product_ratings = function(req, res) {
    Task.findProductRatings(function(err, task) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', task);
      res.json(task);
    });
  };
  exports.list_average = function(req, res) {
    Task.findAverageRatings(function(err, task) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', task);
      res.json(task);
    });
  };
  exports.list_christmas = function(req, res) {
    Task.christmas(function(err, task) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', task);
      res.json(task);
    });
  };

  exports.list_all_addons = function(req, res) {
    Task.getAllAddons(function(err, task) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', task);
      res.json(task);
    });
  };

  exports.delete_item = function(req, res) {
    //alert("WE in the wrong controller");
    Task.deleteItem( req.params.taskId, function(err, task) {
      if (err){
        res.send(err);
        alert(err);
      }
      res.json({ message: 'Task successfully deleted' });
    });
  };

  exports.delete_product = function(req, res) {
    //alert("we in the controller");
    Task.deleteProduct( req.params.taskName, function(err, task) {
      if (err){
        res.send(err);
        //alert("from controller      " +err);
      }
      res.json({ message: 'Product cannot be deleted due to foreign key constraint' });
    });
  };


  exports.delete_a_task = function(req, res) {


    Task.remove( req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };

  exports.list_all_reviews = function(req, res) {
    Task.getAllReviews(function(err, task) {
  
      console.log('controller')
      if (err)
        res.send(err);
        console.log('res', task);
      res.json(task);
    });
  };

  exports.create_ingredient = function(req, res) {
    var new_task = new Task(req.body);
    //alert("trying to output req.body        " + new_task.status);
    //handles null error 
     if(!new_task.task || !new_task.status){
  
              res.status(400).send({ error:true, message: 'Please provide task/status' + new_task.status });
  
          }
  else{
    
    Task.createIngredient(new_task, function(err, task) {
      
      if (err)
        res.send(err);
      res.json(task);
    });
  }
  };