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

- [x] Part 3: Deploy project on Netlify 
- [x] Part 4: Readme to explain how to run the project and justify decisions made in the process in particular Part 2 (see below)
- [x] Part 5: Sending the solution

### Approach to the project
- In deciding what additional functionality to implement I thought about the user. 
- From this point of view, higher on the priority list would be a filtering feature, where the user can filtering by category (capsules, cores, dragons, missions, ships). Likewise, high on the priority list from a user perspective would be seeing a managable number of results. As such, there is pagination and only 8 items are displayed a time. Finally, the API calls do not return all items alphabetically, so I created a function to sort the results. 
- While important, I did not prioritise filtering inventory by name, but I would include this on the next iteration. 

### Testing
- Here is a link to my [testing plan](https://github.com/Tracht/spacex-hooks/wiki/Testing). I am not quite familiar with testing React Components, so this is something I will be working on in the next few days. However, I did test that some of the React Components rendered and did some unit testing on a couple of functions. 

### Oustanding tasks
- Here is a link to my [project board](https://github.com/Tracht/spacex-hooks/projects/1).

### User Stories
**Core**
* As a user, I want to see SpaceX's inventory before I sign up so that I get a good idea of their capability. 
  - Acceptance criteria: a list of suppliers is displayed with key information shown
  - Page loads in a sensible amount of time

**Extras** 
* As a user, so that I can get an overview of their projects, I would like to filter their inventory by categories.
* As a user, so that I am not overloaded with information, I would like to see 8 items on display, at a time. 
* As a user, so that I can better navigate the inventory, I would like to see everything sorted alphabetically. 

### TechStack 
- [React](https://github.com/facebook/create-react-app) using functional components
- [Axios](https://github.com/axios/axios) to make HTTP requests from node.js
- [Styled Components](https://styled-components.com) to create tagged template literals to style React components.
- [Jest](https://jestjs.io) for unit tests of logic and components
- [Jest for styled components](https://github.com/styled-components/jest-styled-components)

### Installation Guide 
- Clone or Fork the project repo. Then, start the web app in development mode from the terminal with the command `yarn start` or `npm start`. 
- Then view it in the browser by opening [http://localhost:3000](http://localhost:3000).
  
### To run the tests.
- From the terminal type: `yarn test` or `npm test`.

### To create the build
- To create the build, run `yarn build` or `npm build`. 
  - It builds the app for production to the `build` folder. 
