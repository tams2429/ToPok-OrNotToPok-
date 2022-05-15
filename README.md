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
2. Create API endpoint + BE response:
  * Once API endpoint is called, the BE will call the 2 public APIs (i.e. Pokemon + Shakespear) and I will use their response to create a new response for my API endpoint 
  * Interested Pokemon Endpoints:
    * Description = `https://pokeapi.co/api/v2/pokemon-species/{id or name}/` (i.e. https://pokeapi.co/api/v2/pokemon-species/charizard/) => `responseObj.flavor_text_entries[0].flavor_text`
    * Pokemon Sprite = `https://pokeapi.co/api/v2/pokemon/{id or name}/` (i.e. https://pokeapi.co/api/v2/pokemon/charizard/) => `responseObj.sprites.front_default`
3. Create FE Components (i.e. search bar, buttons, pokemon entry card etc )
4. Connect FE to BE via API requests + handle errors
5. Surprise Me function + Enter to search function + Fancy animation for searchbar
5. Add FE tests
6. Accessibility considerations
7. Refactor FE + BE code
8. Update + Tidy Readme
9. Update Dockerfile (if necessary) + Final tidy up

# Challenges
1. Playing around with the Shakespeare Endpoint as there was only a limit of 5 requests per hour
2. Transforming pokemon description to a format that is accepted by the Shakespear Endpoint (i.e. remove any new lines ('\n'), replace spaces with '%20')
3. Figured out that the search pokemon has to be in lower case, so added logic to convert any search string to lower case

# Future work 
1. To add more specific Back-End unit tests 