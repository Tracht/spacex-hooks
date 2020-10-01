# SpaceX!

[![Netlify Status](https://api.netlify.com/api/v1/badges/e5b3e1ef-d30d-4554-850f-92bf59dbaabe/deploy-status)](https://app.netlify.com/sites/relaxed-kepler-537814/deploys)

### App deployed [here](relaxed-kepler-537814.netlify.app)

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
* As a user, so that I can get an overview of their projects, I would like to filter their inventory by categories.
* As a user, so that I am not overloaded with information, I would like to see 8 items on display, at a time. 
* As a user, so that I can better navigate the inventory, I would like to see everything sorted alphabetically. 
* As a user, I'd like to see an item's summary and full details. 

### Approach to the project
- In deciding what additional functionality to implement I thought about the user. 
- From this point of view, high on the priority list is a filter enaling the user to filter inventory by category (capsules, cores, dragons, missions, ships). Likewise, the user would not want to be overwhelmed by the volume of inventory items, but rather see  manageable number of results. As such, I implemented pagination and only 8 items are displayed at a time. Again, to help the user navigate the inventory, I implemented a sort function, as this is not provided in the API calls. I also implemented a modal, so that the user can see both an initial summary about the item, and if they're interested in learning more, they can click 'learn more' to get full details. 
- While important, I did not prioritise filtering the inventory by the item's name, but I would include this on the next iteration. 

### Testing
- In summary, I have implemented a mix of Cypress integration tests and Jest / Enzyme unit tests.
- There seems to be quite a few approaches to testing React components which range from snapshot testing for styling to unit and integration tests. Here is a link to my [testing plan](https://github.com/Tracht/spacex-hooks/wiki/Testing) which outlines what I think are the important aspects to test. 
- I experimented with Enzyme and Jest unit tests to check that some of the React Components rendered. I am not quite familiar with Enzyme/Jest unit testing of React Components, so this is something I will be working on in the next few days.  
- I also implemented unit tests on a couple of functions, specifically to check that pagination and sortAtoZ functions worked correctly. I realise that there is a different approach to testing React Hooks, so I will be updating my unit test for pagination accordingly. 
- I used Cypress for end-to-end testing, which initially I was unsure how to do with Styled Components. This [discussion](https://github.com/cypress-io/cypress/issues/1212) along with [Cypress documentation](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements) suggests using data-* attributes to provide context to your selectors and isolate them from CSS or JS changes. 

### To run the tests.
- For Jest unit testing
  - In the terminal type: `yarn test` or `npm test`. Then type 'a' to run all tests.
- For Cypress integration testing
  - In one terminal, start the app with the command `npm start`.
  - In a second terminal, start cypress with the command `npx cypress open`.

### Oustanding tasks
- Here is a link to my [project board](https://github.com/Tracht/spacex-hooks/projects/1).
- I am a bit new to accessibility and SEO so I have added these to my to do list.
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
