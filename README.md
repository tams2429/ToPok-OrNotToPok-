# ToPokeOrNotToPoke
A fun, full-stack, project to create a Pokemon Search Engine with a Shakespearean Twist 

# Requirements
1. A search bar that allows users to enter text
2. Text has to be a pokemon name and upon success, returns a Shakespearean Description + Sprite image of the pokemon
3. Loading spinner + Basic Error handling (i.e. notification popup/basic error message on the page) 
4. Responsive Styling
5. Accessibility (i.e. semantic syntax, aria-labels, alt for images)
6. Automated testing (i.e. mock API tests)

# Steps
1. Setup environment:
  * Front-End = ReactJS
  * Back-End = Node.js + Express?
  * Testing = Jest + React Testing Library
2. Setup FE interface + UI
3. Create API endpoint + BE response:
  * Once API endpoint is called, the BE will call the 2 public APIs (i.e. Pokemon + Shakespear) and I will use their response to create a new response for my API endpoint 
  * Interested Pokemon Endpoints:
    * Description = `https://pokeapi.co/api/v2/pokemon-species/{id or name}/` (i.e. https://pokeapi.co/api/v2/pokemon-species/charizard/) => `responseObj.flavor_text_entries[0].flavor_text`
    * Pokemon Sprite = `https://pokeapi.co/api/v2/pokemon/{id or name}/` (i.e. https://pokeapi.co/api/v2/pokemon/charizard/) => `responseObj.sprites.front_default`
4. 