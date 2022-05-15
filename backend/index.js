import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 3001;

app.use(cors());

//GET endpoint to call the 2 Pokemon (Pokemon Description + Sprite) and 1 Shakespear API endpoint (Shakespear Translated Description)
//Response = Shakespearean Translated Description + Pokemon Sprite
app.get("/pokemon/:pokemonName", async (req, res) => {
  const requestedPokemon = req.params.pokemonName;
  const pokeDescriptionEndpoint = `https://pokeapi.co/api/v2/pokemon-species/${requestedPokemon}/`;
  const pokeSpriteEndpoint = `https://pokeapi.co/api/v2/pokemon/${requestedPokemon}/`;

  //pokeDescription format has to be the following 'word%20word%20word'
  const shakespearEndpointPrefix = `https://api.funtranslations.com/translate/shakespeare.json?text=`;
  try {
    //Get the Pokemon Description and Sprite from the 2 Pokemon API endpoints
    const pokeDescriptionEndpointRes = await axios.get(pokeDescriptionEndpoint);
    const pokeSpriteEndpointRes = await axios.get(pokeSpriteEndpoint);

    //Add logic to test if the flavor_text is english
    //TODO: Refactor via extracting logic
    const pokeDescriptionArr =
      pokeDescriptionEndpointRes.data.flavor_text_entries;
    const englishPokeDescriptionArr = pokeDescriptionArr.filter(
      (pokeDescription) => pokeDescription.language.name === "en"
    );
    const englishPokeDescription = englishPokeDescriptionArr[0].flavor_text;
    const pokeSprite = pokeSpriteEndpointRes.data.sprites.front_default;

    //Transform the pokeDescription text to the format required by the Shakespear API endpoint
    //i.e. word%20word%20word
    const pokeDescriptionForShakespearAPI = encodeURI(
      englishPokeDescription
    ).replace(/(%0A)/gm, "%20");

    //Get the Shakespear Translated pokeDescription
    const shakespearEndpointRes = await axios.get(
      shakespearEndpointPrefix + pokeDescriptionForShakespearAPI
    );
    const shakespearDescription =
      shakespearEndpointRes.data.contents.translated

    res.status(200).json({
      // Change requestedPokemon to pokeDescriptionEndpointRes.data.name
      name: pokeDescriptionEndpointRes.data.name,
      description: shakespearDescription,
      sprite: pokeSprite,
    });
  } catch (err) {
    if (err.isAxiosError) {
      if (err.response) {
        // Server was able to send us a response, so this is an API Error (i.e. 4xx, 5xx).
        console.error("[API Error]:", err.response.data)
        res.status(err.response.status).json({
          errorMessage: `${err.response.statusText}: Looks like something went wrong, please try again`
        })
      } else {
        // Axios was not able to get a response from the server. This is a Network-Level Error.
        // Will use a 500 generic http code to trigger catch(err) on front end
        console.error("[Network Error]: No Response Received")
        res.status(500).json({
          errorMessage: 'No response received from the Server, please try again later'
        })
      }
    } else {
      // Standard JS Error (Syntax, i.e. axios.get('this is not a URL'))
      console.error("[Non-HTTP Error]:", err)
      // Will use a 500 generic http code to trigger catch(err) on front end
      res.status(500).json({
        errorMessage: `It's not you, it's us, please try again later`
      })
    }
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// Proxy error: Could not proxy request /pokemon/f from localhost:3000 to http://localhost:3001/ (ECONNRESET).