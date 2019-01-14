'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/appController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    //.post(todoList.create_a_task);
   
   app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    //.put(todoList.update_a_task)
    //.delete(todoList.delete_a_task);
    app.route('/vanilla')
    .get(todoList.list_all_vanilla)

    app.route('/customer500')
    .get(todoList.list_customers)

    app.route('/customerAddOn')
    .get(todoList.list_customer_AddOn)

    app.route('/productRatings')
    .get(todoList.list_product_ratings)

    app.route('/averageRatings')
    .get(todoList.list_average)

    app.route('/christmas')
    .get(todoList.list_christmas)

    app.route('/addons')
    .get(todoList.list_all_addons)

    app.route('/delete/:taskId')
    .delete(todoList.delete_item)

    app.route('/AllReview')
    .get(todoList.list_all_reviews)

    app.route('/addIngredient')
    .post(todoList.create_ingredient)

    app.route('/deleteprod/:taskName')
    .delete(todoList.delete_product)
};
    
