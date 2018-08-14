create database bamazon2;

use bamazon2;

create table products (
itemId integer auto_increment not null,
productname varchar(30) not null,
departmentname varchar(30) not null,
price decimal(10,4) not null,
stockquantity integer(100) not null,
primary key (itemId)
);

INSERT INTO products(ProductName, DepartmentName, Price, StockQuantity)
VALUES ("Sevendust CD", "Music", 9.99, 50),
("Shinedown CD", "Music", 9.99, 25),
("Sunglasses", "Accessories", 205.99, 10),
("Nike Shoes", "Accessories", 59.99, 60),
("Polo Shirt", "Clothing", 79.99, 20),
("iPhone", "Electronics", 250.00, 17),
("iWatch", "Electronics", 129.99, 23),
("Jeans", "Clothing", 69.99, 30),
("Jersey", "Clothing", 75.99, 50),
("Baseball Hat", "Accessories", 29.99, 120);


SELECT * FROM bamazon2.products;
