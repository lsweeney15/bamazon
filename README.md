# Homework Assignment #10:
### bamazon

This repository is for homework assignment #10 for University of Miami Coding Bootcamp. 

This game was built with JavaScript, node.

## It's hosted online here: https://lsweeney15.github.io/Psychic-Game/

## How to Play:
1. There is a Table inside of that database called Products.

2. The products table was created with the following columns: ItemID (unique id for each product), ProductName (Name of product), DepartmentName, Price (cost to customer), StockQuantity (how much of the product is available in stores)

3. I populated the database with 10+ different products.

4. There is a Node application called BamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

5. Bamazon then prompts users with two messages.

6. The first ask them the ID of the product they would like to buy.

7. The second message should ask how many units of the product they would like to buy.

8. Once an order has been placed the application then checks to see if the store has enough of the product to meet the user's request.

9. If not, the app will log: Insufficient quantity!, and then prevent the order from going through. However, if the store does have enough of the product, It will fulfill the users's order.

10. This means updating the SQL database to reflect the remaining quantity. Once the update goes through, it will show the customer the total cost of their purchase.

Liam Sweeney 2018
