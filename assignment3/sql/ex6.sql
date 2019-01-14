update Product set productPrice = productPrice*1.10 where productPrice < 100;

delete from Review where rating =1;

update Review set reviewComment = 'n/a' where reviewComment = ' ';