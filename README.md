# SpaceX!

[![Netlify Status](https://api.netlify.com/api/v1/badges/e5b3e1ef-d30d-4554-850f-92bf59dbaabe/deploy-status)](https://app.netlify.com/sites/relaxed-kepler-537814/deploys)

### App deployed [here](https://relaxed-kepler-537814.netlify.app/)

### Tasks Completed
- [x] Part 1: A user can see a list of inventory before signing up to the platform
- [x] Part 2: Added extra functionality
  - filter inventory by category
  - display only 8 inventory items at a time
  - create pagination
  - sort inventory items alphabetically
  - created a Modal to show an item's full details
- [x] Part 3: Deploy project (Netlify)
- [x] Part 4: Readme to explain how to run the project and justify decisions made in the process in particular Part 2 (see below)

### User Stories
**Core**
* As a user, I want to see SpaceX's inventory before I sign up so that I get a good idea of their capability. 
  - Acceptance criteria: a list of suppliers is displayed with key information shown
  - Page loads in a sensible amount of time

**Extras** 
* As a user, so that I can get an overview of SpaceX's projects, I would like to see different categories of their inventory.
* As a user, so that I am not overloaded with information, I would like to see 8 items on display, at a time. 
* As a user, so that I can better navigate the inventory, I would like to see everything sorted alphabetically. 
* As a user, I'd like to have a choice to see both an item's complete and summary information. 

### Approach to the project
- In deciding what additional functionality to implement I thought about the user. 
- From this point of view, high on the priority list is a filter enaling the user to filter inventory by category (capsules, cores, dragons, missions, ships). Likewise, the user would not want to be overwhelmed by the volume of inventory items, but rather see  manageable number of results. As such, I implemented pagination and only 8 items are displayed at a time. Again, to help the user navigate the inventory, I implemented a sort function, as this is not provided in the API calls. I also implemented a modal, so that the user can see both an initial summary about the item, and if they're interested in learning more, they can click 'learn more' to get full details. 
- While important, I did not prioritise filtering the inventory by the item's name, but I would include this on the next iteration. 

### To run the tests.
- For Jest unit testing
  - In the terminal type: `yarn test` or `npm test`. Then type 'a' to run all tests.
- For Cypress integration testing
  - In one terminal, start the app with the command `npm start`.
  - In a second terminal, start cypress with the command `npx cypress open`.

### Oustanding tasks
- Here is a link to my [project board](https://github.com/Tracht/spacex-hooks/projects/1).
- While my app is responsive across devices, I'd like to improve my implementation to reflect best practices. 

### TechStack 
- [React](https://github.com/facebook/create-react-app) using functional components
- [Axios](https://github.com/axios/axios) to make HTTP requests from node.js
- [Styled Components](https://styled-components.com) to create tagged template literals to style React components.
- [Jest](https://jestjs.io) for unit tests of logic and components
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Cypress](https://www.cypress.io)

### API Calls
- [SpaceX](https://docs.spacexdata.com)
- An example of a call to fetch all 'capsules': https://api.spacexdata.com/v3/capsules

### Installation Guide 
- Clone or Fork the project repo. Then, start the web app in development mode from the terminal with the command `yarn start` or `npm start`. 
- Then view it in the browser by opening [http://localhost:3000](http://localhost:3000).
  
### To create the build
- To create the build, run `yarn build` or `npm build`. 
  - It builds the app for production to the `build` folder. 
