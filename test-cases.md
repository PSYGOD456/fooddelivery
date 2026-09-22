# Food Delivery App – Test Cases

## Project Title
Food Delivery App

## Test Case Table

| Test Case ID | Test Case | Test Data / Condition | Expected Result |
|---|---|---|---|
| TC01 | Customer Registration | Enter valid name, email and password | Account should be created successfully |
| TC02 | Registration with Existing Email | Enter an already registered email | Error message should be displayed |
| TC03 | Login with Valid Details | Enter correct email and password | User should successfully log in |
| TC04 | Login with Invalid Password | Enter correct email and wrong password | Login should fail and an error message should be displayed |
| TC05 | Restaurant Selection | Select an available restaurant | Restaurant details and menu should be displayed |
| TC06 | View Food Items | Open a restaurant menu | Food items and prices should be displayed |
| TC07 | Search Food | Search for a food item such as Burger | Matching food items should be displayed |
| TC08 | Search Unavailable Food | Search for a non-existing food item | Appropriate not-found message should be displayed |
| TC09 | Add Food to Cart | Select a food item and click Add to Cart | Food item should be added to the cart |
| TC10 | Remove Food from Cart | Select an item and click Remove | Food item should be removed from the cart |
| TC11 | Update Food Quantity | Increase or decrease quantity | Cart quantity and total amount should be updated |
| TC12 | Place Order | Cart contains valid food items and delivery details | Order should be placed successfully |
| TC13 | Empty Cart Checkout | Try to place an order with an empty cart | Checkout should not be allowed |
| TC14 | Successful Payment | Enter valid payment details | Payment should be processed successfully |
| TC15 | Failed Payment | Enter invalid payment details | Payment failure message should be displayed |
| TC16 | Order Tracking | Open an active order | Current order status should be displayed |
| TC17 | Cancel Order | Cancel an eligible order | Order should be cancelled successfully |
| TC18 | Order History | Open order history | Previous orders should be displayed |
| TC19 | Logout | Click the Logout option | User should be logged out |
| TC20 | Unauthorized Access | Try to access account features without logging in | User should be redirected to the login page |

## Inference

The test cases are used to verify whether the major functions of the Food Delivery App work correctly. They help identify errors and ensure that the application produces the expected result for different inputs and conditions.
