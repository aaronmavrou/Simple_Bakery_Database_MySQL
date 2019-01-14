drop table if exists AddOnsInPurchase;
drop table if exists ProductInPurchase;
drop table if exists IngredientInProduct;
drop table if exists Review;
drop table if exists Purchase;
drop table if exists AddOns;
drop table if exists Product;
drop table if exists Ingredient;
drop table if exists Customer;

CREATE TABLE Customer(
customerID varchar(255) NOT NULL PRIMARY KEY,
phoneNo varchar(20) NOT NULL,
customerName varchar(255)  
);

CREATE TABLE Ingredient(
ingredientID varchar(255) NOT NULL PRIMARY KEY,
ingredientName varchar(255) NOT NULL,
stockLeft int NOT NULL CHECK(stockLeft >=0),
lowStockNo int NOT NULL
);

CREATE TABLE Product(
productID varchar(255) NOT NULL PRIMARY KEY,
productName varchar(255) NOT NULL,
productPrice int NOT NULL CHECK (productPrice >=0)
);

CREATE TABLE AddOns(
addOnID varchar(255) NOT NULL PRIMARY KEY,
addOnName varchar(255) NOT NULL,
ingredientID varchar(255) NOT NULL,
FOREIGN KEY (ingredientID) REFERENCES Ingredient (ingredientID),
addONPrice int NOT NULL
);

CREATE TABLE Purchase(
purchaseID varchar(255) NOT NULL PRIMARY KEY,
customerID varchar(255) NOT NULL,
FOREIGN KEY (customerID) REFERENCES Customer (customerID),
orderPrice int NOT NULL CHECK (orderPrice >=0),
purchaseDate varchar(255) NOT NULL
);

CREATE TABLE AddOnsInPurchase(
addOnID varchar(255) NOT NULL,
purchaseID varchar(255) NOT NULL,
FOREIGN KEY (addOnID) REFERENCES AddOns (addOnID),
FOREIGN KEY (purchaseID) REFERENCES Purchase (purchaseID),
PRIMARY KEY (purchaseID, addOnID),
addOnQuantity int NOT NULL
);

CREATE TABLE Review(
reviewID varchar(255) NOT NULL PRIMARY KEY,
customerID varchar(255) NOT NULL,
productID varchar(255) NOT NULL,
FOREIGN KEY (customerID) REFERENCES Customer (customerID),
FOREIGN KEY (productID) REFERENCES Product (productID),
rating int CHECK (rating >=0 AND rating<=5),
reviewComment varchar(255),
dateOfReview varchar(50) NOT NULL
);

CREATE TABLE IngredientInProduct(
productID varchar(255) NOT NULL,
ingredientID varchar(255) NOT NULL,
FOREIGN KEY (productID) REFERENCES Product (productID),
FOREIGN KEY (ingredientID) REFERENCES Ingredient (ingredientID),
iQuantity int NOT NULL CHECK(iQuantity >=0),
PRIMARY KEY (productID, ingredientID)
);


CREATE TABLE ProductInPurchase(
purchaseID varchar(255) NOT NULL,
productID varchar(255) NOT NULL,
FOREIGN KEY (purchaseID) REFERENCES Purchase (purchaseID),
FOREIGN KEY (productID) REFERENCES Product (productID),
productQuantity int NOT NULL,
PRIMARY KEY (purchaseID, productID)
);


