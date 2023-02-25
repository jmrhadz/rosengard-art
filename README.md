A single page ecommerce app for Rosengard Art and Ware.
Client will add products manually via REST/store.js and Stripe's portal for now.
Client's customers can shop as normal, are taken to a Stripe page on checkout, and returned to a confirmation or cancel page.
Client can use the admin link at the footer to login to see orders, update order status or cancel orders, as well as view cancelled orders.

Optimizations/TODO: Cancelled orders should delete automatically after 7 or 30 days. Admin dashboard needs to be password locked/authenticated. 


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

