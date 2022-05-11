import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express();
const PORT = 3001;

app.use(cors());

//GET endpoint to call the 2 Pokemon (Pokemon Description + Sprite) and 1 Shakespear API endpoint (Shakespear Translated Description)
//Response = Shakespearean Translated Description + Pokemon Sprite
app.get('/pokemon/:pokemonName', async (req, res) => {

  const requestedPokemon = req.params.pokemonName
  const pokeDescriptionEndpoint = `https://pokeapi.co/api/v2/pokemon-species/${requestedPokemon}/`
  const pokeSpriteEndpoint = `https://pokeapi.co/api/v2/pokemon/${requestedPokemon}/`

  //pokeDescription format has to be the following 'word%20word%20word'
  const shakespearEndpointPrefix = `https://api.funtranslations.com/translate/shakespeare.json?text=`
  try {
    //Get the Pokemon Description and Sprite from the 2 Pokemon API endpoints
    const pokeDescriptionEndpointRes = await axios.get(pokeDescriptionEndpoint)
    const pokeSpriteEndpointRes = await axios.get(pokeSpriteEndpoint)
    const pokeDescription = pokeDescriptionEndpointRes.data.flavor_text_entries[0].flavor_text
    const pokeSprite = pokeSpriteEndpointRes.data.sprites.front_default
    // console.log('PokeDescription is:', pokeDescription)
    // console.log('PokeSprite is:', pokeSprite)
    // console.log(pokeDescriptionEndpointRes.data)

    //Transform the pokeDescription text to the format required by the Shakespear API endpoint
    //i.e. word%20word%20word
    const pokeDescriptionForShakespearAPI = encodeURI(pokeDescription).replace(/(%0A)/gm, '%20')
    // console.log({pokeDescriptionForShakespearAPI})
    
    //Get the Shakespear Translated pokeDescription
    // console.log(shakespearEndpointPrefix + pokeDescriptionForShakespearAPI)
    const shakespearEndpointRes = await axios.get(shakespearEndpointPrefix + pokeDescriptionForShakespearAPI)
    const shakespearDescription = shakespearEndpointRes.data.contents.translated
    // console.log(shakespearEndpointRes)
    // console.log('Shakespear description is:', shakespearDescription)
    res.status(200).json({
      name: requestedPokemon,
      description: shakespearDescription,
      sprite: pokeSprite,
    })
  }
  catch (err) {
    res.send({
      error: {
        status: err.response.status,
        message: err.message
      }
    })
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

