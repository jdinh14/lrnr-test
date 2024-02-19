# testing lrnr app


## Front-end testing with Cypress

Follow these steps to execute front-end tests using Cypress:

1. **Preparation:**
   - Ensure you're in the project's root folder.

2. **Starting Cypress:**
   - Open a terminal and execute the command:
     
     npm run cy:open
     
3. **Selecting Test Type:**
   - In the Cypress window, choose "E2E Testing".
   
4. **Choosing Browser:**
   - Select "Chrome" as your browser.

5. **Running Tests:**
   - Find and run the test file `frontendtest.cy.js`.

6. **Hosting Front-End Locally:**
   - To host the front-end locally, open a new split terminal and run:
     
     npm start
     `
   - Ensure the front-end is up and running before executing tests in Cypress.

## Back-End Testing with Jest

To execute back-end tests using Jest, follow these simplified steps:

1. **Navigate to Backend Folder:**
   - Open a terminal and change directory to the backend folder:
     
     cd backend
     

2. **Executing Tests:**
   - Run the following command to execute the `backend.test.js` test file:
     
     npm test backend.test.js
    

