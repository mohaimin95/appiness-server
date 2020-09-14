# appiness-server

# PROBLEM:
When listing all categories, print the number of products associated to that category.
● The code should be well structured
● Must have proper comments
● Should document the workflow and how to run the code
Descriptions :
There should be two models products and categories. Each category must have multiple products.
When listing all categories, number of products associated to that category should be returned as response.

# SOLUTION:
GET http://localhost:3000/categories/


# Steps to run the project:
1.Install all dependencies using `npm i`.
2.Start the app using `node app.js`.
3.Using postman, insert some sample categories using POST request http://localhost:3000/categories/insertMany
4.Using postman, insert some sample products using POST request http://localhost:3000/products/insertMany
5.For the solution for the given problem, GET http://localhost:3000/categories/

3rd party plugins used : 3
1.dotenv
2.express
3.mongoose
-----------------END------------------------
