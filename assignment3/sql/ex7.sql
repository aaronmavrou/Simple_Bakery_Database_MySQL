create view productRatings as select * from Review where rating > 2;

create view customerOrders as select customerName , purchaseID, productName from Customer, Purchase, Product; 

create view addOnOptions as select addOnName, addOnPrice from AddOns;
update addOnOptions set addOnPrice = 99 where addOnName = 'pecans';


SELECT * FROM test_schema.productRatings;
SELECT * FROM test_schema.customerOrders;
SELECT * FROM test_schema.addOnOptions;

insert into customerOrders (customerName , purchaseID, productName) values ('Olyvia' , 99999, 'Oreo Ice Cream Cake');
insert into productRatings (reviewID, customerID, productID, rating, reviewComment) values (888, 1, 1, 3, 'loved it sooooooooo much!!!');
