select ingredientID from Ingredient where ingredientName = 'salt';

select ingredientName , productName 
from Ingredient i , IngredientInProduct ip, Product p 
where  ip.ingredientID = i.ingredientID 
AND ip.productID = p.productID 
AND i.ingredientName = 'vanilla';

select customerName, sum(orderPrice) 
from Customer c, Purchase p 
where c.customerID = p.customerID  
group by c.customerID 
having sum(p.orderPrice) > 500;

select customerName , addOnID 
from Customer c , Purchase pc , AddOnsInPurchase a 
where pc.purchaseID = a.purchaseID AND c.customerID = pc.customerID
order by c.customerName, a.addOnID;

select distinct productName , rating 
from Product p, Review r 
where p.productID = r.productID AND r.rating = 5;

select productName, avg(rating) 
from Review r , Product p
where r.productID = p.productID 
group by r.productID; 


select productName , purchaseDate 
from Product pp, Purchase p , ProductInPurchase pip
where pip.productID = pp.productID AND pip.purchaseID = p.purchaseID AND p.purchaseDate = '25/12/2017';