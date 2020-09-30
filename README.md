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
  - created a Modal to show a particular inventory item's full list of details

- [x] Part 3: Deploy project on Netlify 
- [x] Part 4: Readme to explain how to run the project and justify decisions made in the process in particular Part 2 (see below)

### Approach to the project
- In deciding what additional functionality to implement I thought about the user. 
- From this point of view, higher on the priority list would be a filtering feature, where the user can filter by category (capsules, cores, dragons, missions, ships). Likewise, high on the priority list from a user perspective would be seeing a manageable number of results. As such, there is pagination and only 8 items are displayed at a time. Finally, the API calls do not return items alphabetically, so I created a function to alphabetise the results. I also implemented a modal, so that the user can see both an initial summary on the screen, and if they're interested in learning more, they can click to see full item details. 
- While important, I did not prioritise filtering inventory by name, but I would include this on the next iteration. 

### Testing
- Here is a link to my [testing plan](https://github.com/Tracht/spacex-hooks/wiki/Testing). I am not quite familiar with testing React Components, so this is something I will be working on in the next few days. However, I did use Enzyme and Jest to check that some of the React Components rendered and implemented unit tests on a couple of functions (to check that pagination and sort worked correctly). 

### Oustanding tasks
- Here is a link to my [project board](https://github.com/Tracht/spacex-hooks/projects/1).
- I am a bit new to accessibility and SEO so I have added these to my to do list.
- While my app is responsive across devices, I'd like to improve my implementation of responsiveness. 

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

### TechStack 
- [React](https://github.com/facebook/create-react-app) using functional components
- [Axios](https://github.com/axios/axios) to make HTTP requests from node.js
- [Styled Components](https://styled-components.com) to create tagged template literals to style React components.
- [Jest](https://jestjs.io) for unit tests of logic and components
- [Enzyme](https://enzymejs.github.io/enzyme/)

### API Calls
- [SpaceX](https://docs.spacexdata.com)
- An example of a call to fetch all 'capsules': https://api.spacexdata.com/v3/capsules

### Installation Guide 
- Clone or Fork the project repo. Then, start the web app in development mode from the terminal with the command `yarn start` or `npm start`. 
- Then view it in the browser by opening [http://localhost:3000](http://localhost:3000).
  
### To run the tests.
- From the terminal type: `yarn test` or `npm test`.

### To create the build
- To create the build, run `yarn build` or `npm build`. 
  - It builds the app for production to the `build` folder. 
