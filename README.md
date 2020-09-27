# SpaceX!

[![Netlify Status](https://api.netlify.com/api/v1/badges/e5b3e1ef-d30d-4554-850f-92bf59dbaabe/deploy-status)](https://app.netlify.com/sites/relaxed-kepler-537814/deploys)

## App deployed [here](relaxed-kepler-537814.netlify.app)

### User Stories
**Core**
* As a user, I want to see SpaceX's inventory before I sign up so that I get a good idea of their capability. 
  - Acceptance criteria: a list of suppliers is displayed with key information shown
  - Page loads in a sensible amount of time   

**Extras** 
* As a user, so that I can get an overview of their projects, I would like to filter their inventory by categories.
* As a user, so that I am not overloaded with information, I would like to see 8 items on display, at a time. 
* As a user, so that I can better navigate their inventory, I would like to see everything sorted alphabetically. 

### TechStack 
- [React](https://github.com/facebook/create-react-app) using functional components
- [Axios](https://github.com/axios/axios) to make HTTP requests from node.js
- [Styled Components](https://styled-components.com) to create tagged template literals to style React components.
- [Jest](https://jestjs.io) for unit tests of logic and components
- [Jest for styled components](https://github.com/styled-components/jest-styled-components)

### Installation Guide 
- Clone or Fork the project repo
- To start the web app in development mode: 
  - From the terminal type `yarn start` or `npm start`
  - Then view it in the browser by opening [http://localhost:3000](http://localhost:3000)
  - The page will reload if you make any edits
  - You will see lint errors in the console. <br />
  
### To run the tests (CURRENTLY NO TESTS).
  - From the terminal type: `yarn test` or `npm test`
  - This launches the test runner in the interactive watch mode. 
  - See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. <br />

### To create the build
- To create the build, run `yarn build` or `npm build`. 
  - It builds the app for production to the `build` folder. 
  - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.
  - Your app is ready to be deployed!
  - See [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. <br />
