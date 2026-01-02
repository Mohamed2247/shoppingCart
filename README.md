# shoppingCart
🧾 Product Section

Products are stored in an array of objects.

Each product includes details such as:

ID

Name

Price

Availability

Products are rendered dynamically using DOM Manipulation.

🛒 Shopping Cart (Stack Approach)

The shopping cart is implemented using a Stack data structure.

Last In, First Out (LIFO) behavior:

The last added item is the first one removed when using Undo.

Users can:

Add products to the cart

Remove items

Undo the last cart action

⏳ Order Queue (Queue Approach)

When multiple orders are placed, they are handled using a Queue data structure.

First In, First Out (FIFO) logic:

Orders are processed in the same order they are received.

Ensures fair and organized order processing.

💾 Local Storage (BOM)

Uses LocalStorage to:

Save cart data

Preserve user information

Maintain application state after page refresh

Ensures data persistence across browser sessions.

🧠 DOM Manipulation

Dynamic creation and removal of elements:

Products

Cart items

Notifications

UI updates automatically based on user actions.

⚠️ Error Handling

Implemented using try/catch blocks to handle:

LocalStorage access errors

Invalid cart operations (e.g., undo when cart is empty)

Prevents application crashes and improves user experience.

⏱️ Countdown Timer for Offers

A countdown timer is used for limited-time offers.

Automatically updates the UI when the offer expires.

❓ Confirmation Before Deletion

Confirmation dialog before:

Clearing the cart

Removing all items

Prevents accidental data loss.

👋 Personalized Welcome Message

Displays a welcome message using the user’s name.

Username is saved and retrieved from LocalStorage.
