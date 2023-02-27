A single page ecommerce app for Rosengard Art and Ware.
Client will add products manually via REST/store.js and Stripe's portal for now.
Client's customers can shop as normal, are taken to a Stripe page on checkout, and returned to a confirmation or cancel page.
Client can use the admin link at the footer to login to view, update or delete messages submitted through the contact form.

Optimizations/TODO: Host stripe checkout on site so that order information can be stored and viewed in the Admin dashboard, which also needs to be password locked/authenticated. 
See components for more specific TODOs.



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can also view the main branch on [AWS Amplify](main.dt8csgmlx03or.amplifyapp.com/)

Stripe provides these test CC numbers:
![testCCnumbers](https://user-images.githubusercontent.com/112741506/221663341-38ad33ea-3a74-4295-aca0-0dd0c0152b77.gif)


![AppPreview](https://user-images.githubusercontent.com/112741506/221664052-f230ce6c-488f-4a39-b3d7-420fdd016d55.gif)
