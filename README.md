# ToPokeOrNotToPoke ![jolteon](https://user-images.githubusercontent.com/29611844/169423778-36b21a01-83d7-4056-beea-865223837801.gif)![eevee](https://user-images.githubusercontent.com/29611844/169423831-ffbe8c3d-ec5f-4aa1-b6e7-b65af24fac34.gif)![cyndaquil](https://user-images.githubusercontent.com/29611844/169423858-db7c0fec-22fb-4f9d-bc4c-e6ff19148740.gif)

A fun, full-stack, project to create a Pokemon Search Engine with a Shakespearean Twist 

## Table of Contents 📖

- [Overview](#overview-)
- [Technologies](#technologies-)
- [Process](#process-)
- [Getting Started](#getting-started-)
- [Wins](#wins-)
- [Challenges](#challenges-)
- [Future Work](#future-work-)

## Overview 👓
Built a full-stack application that allows users to search for Pokémon and returns them with a Shakespearean Twist. This application has the following requirements:

1. A search bar that allows users to search for a valid Pokémon and upon clicking on a button, it will return that Pokémon's information
2. Using the [PokéAPI](https://pokeapi.co/) and [the Shakespear Translation API](https://funtranslations.com/api/shakespeare#endpoint) return Pokémon information with a Shakespearean Description + Sprite image of the pokemon
3. Loading spinner + Basic Error handling (i.e. Basic error message on the page) 
4. Responsive Styling (design for both desktop and mobile view)
5. Accessibility (i.e. semantic syntax, aria-labels, alt for images, keyboard usability)
6. Automated testing (i.e. mock API tests)

### Desktop view 🖥️

https://user-images.githubusercontent.com/29611844/169422998-9bb7d164-7c35-4200-8dfe-690bcfec72d8.mov

### Mobile view (iPhone 12 Pro) 📱

https://user-images.githubusercontent.com/29611844/169423146-122b44ce-1399-498d-8601-b034bd6d3ac1.mov

## Technologies 💻

- Front-End:
    - **ReactJS**
    - **HTML**
    - **CSS**
    - **Jest**
    - **React-Testing-Library**
    - **axe-core** (for accessibility testing)

- Back-End:
    - **Node.js**
    - **Express**

- General:
    - **Axios**

## Process

1. Setup environment:
  * Front-End = ReactJS
  * Back-End = Node.js + Express
  * Testing = Jest + React Testing Library
2. Create API endpoint + BE response:
  * Once API endpoint is called, the BE will call the 2 public APIs (i.e. Pokemon + Shakespear) and I will use their response to create a new response for my API endpoint 
  * Interested Pokemon Endpoints:
    * Description = `https://pokeapi.co/api/v2/pokemon-species/{id or name}/` (i.e. https://pokeapi.co/api/v2/pokemon-species/charizard/) => `responseObj.flavor_text_entries[0].flavor_text`
    * Pokemon Sprite = `https://pokeapi.co/api/v2/pokemon/{id or name}/` (i.e. https://pokeapi.co/api/v2/pokemon/charizard/) => `responseObj.sprites.front_default`
3. Create FE Components (i.e. search bar, buttons, pokemon entry card etc )
4. Connect FE to BE via API requests + handle errors
5. Surprise Me function + Enter to search function + Fancy animation for searchbar
6. Accessibility considerations (WGAC 'A' Checklist [here](https://www.wuhcag.com/wcag-checklist/))
  * Using keyboard to access all functionality of the app
  * Providing text alternatives to non-text content (i.e. images, input)
  * Aria labels
  * Appropriate semantic elements
  * Functionality of app does not rely on colour
5. Add FE tests
7. Refactor FE + BE code
8. Update + Tidy Readme
9. Update Dockerfile (if necessary) + Final tidy up

## Getting Started 🏃‍♂️🏃‍♀️

If you wish to **run the app**, you can choose the following options:

### Locally (recommended)
- **Fork** or **Clone** the **GitHub repository** [here](https://github.com/tams2429/to_poke_or_not_to_poke)
- In the **frontend** and the **backend**, run `npm install` to **install** all the **dependencies**
- Run `npm start` for both the **frontend** and the **backend**, to **start** the **development server** for the whole site

### Using Docker
- Download and install the latest Docker Desktop [here](https://docs.docker.com/desktop/mac/install/)
- In the root folder, run `docker-compose up --build` (when building for the first time, otherwise just run `docker-compose up`) to build the container and run both the Front-End and the Back-End
- This should start up the app in your browser
**N/B:** There is a known issue with using docker to run the app when there is a proxy server setup, as is the case for this application. This will mean that any request to the server from the client will have an error. As a result, it is recommended to run the setup locally as described [here](###locally-)


## Wins 🏆

- Able to implement the required functionality + handle any errors
- Added an extra functionality for random search
- Created a basic responsive design + addressed assessibility

## Challenges 🏋️

- Playing around with the Shakespeare Endpoint as there was only a limit of 5 requests per hour => created a mockAPIResponse to use in the meantime 
- Transforming Pokémon description to a format that is accepted by the Shakespear Endpoint (i.e. remove any new lines ('\n'), replace spaces with '%20')
- Found out that the Pokémon description response is not always the English one => applied a filter to make sure the English one is returned
- Figured out that the search pokemon has to be in lower case, so added logic to convert any search string to lower case
- Had to eject React in order to configure Babel for using Jest with latest ES6 syntax


## Future Work ☕

- To add more specific Back-End unit tests 
### Planned features/extensions

- 
