
insert into Customer(customerID, phoneNo, customerName) value (3, 705868666, 'Christine');
insert into Customer(customerID, phoneNo, customerName) value (4, 705868555, 'sarah');
insert into Customer(customerID, phoneNo, customerName) value (5, 705869997, 'jan');
insert into Customer(customerID, phoneNo, customerName) value (6, 705868000, 'john');
insert into Product(productID, productName, productPrice) value (7 , 'Chocolate Cake', 3);
insert into Product(productID, productName, productPrice) value (5 , 'White Chocolate Chip Cookie', 2);
insert into Product(productID, productName, productPrice) value (6 , 'Peanut butter cookie', 1);

insert into Customer values(1, 450693889, 'joe');
insert into Customer values(2, 4509997889, 'jack');


insert into Review(reviewID, customerID, productID, rating, reviewComment, dateOfReview) 
values(1, (select customerID from Customer where customerID= 1), ( select productID from Product where productID = 7) , 5, 'A - may-ZING', 'November 19th 2018');

insert into Review(reviewID, customerID, productID, rating, reviewComment, dateOfReview) 
values(2, (select customerID from Customer where customerID= 2), ( select productID from Product where productID = 5) , 5, 'such a good treat', 'November 19th 2018');



