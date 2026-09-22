# Sequence Diagram – Place Order

Customer → Application: Login
Application → Customer: Login result
Customer → Application: Select food
Application → Customer: Add item to cart
Customer → Application: Checkout
Application → Customer: Request delivery details
Customer → Application: Submit order
Application → Restaurant: Send order
Restaurant → Application: Confirm order
Application → Customer: Display order confirmation
