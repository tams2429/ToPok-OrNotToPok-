import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import axios from 'axios'

const app = express();
const PORT = 3001;

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hi There')
});

//GET endpoint to call the 2 Pokemon (Pokemon Description + Sprite) and 1 Shakespear API endpoint (Shakespear Translated Description)
//Response = Shakespearean Translated Description + Pokemon Sprite
app.get('/pokemon/:pokemonName', async (req, res) => {
  const requestedPokemon = req.params.pokemonName
  const pokeDescriptionEndpoint = `https://pokeapi.co/api/v2/pokemon-species/${requestedPokemon}/`
  const pokeSpriteEndpoint = `https://pokeapi.co/api/v2/pokemon/${requestedPokemon}/`

  //pokeDescription format has to be the following 'word%20word%20word'
  // const shakespearEndpoint = `https://api.funtranslations.com/translate/shakespeare.json?text=${pokeDescription}`
  try {
    const pokeDescriptionEndpointRes = await axios.get(pokeDescriptionEndpoint)
    const pokeSpriteEndpointRes = await axios.get(pokeSpriteEndpoint)
    const pokeDescription = pokeDescriptionEndpointRes.data.flavor_text_entries[0].flavor_text
    const pokeSprite = pokeSpriteEndpointRes.data.sprites.front_default
    console.log('PokeDescription is:', pokeDescription)
    console.log('PokeSprite is:', pokeSprite)
    console.log(pokeDescriptionEndpointRes.data)
    res.json(pokeDescriptionEndpointRes.data)
  }
  catch (err) {
      console.log(err)
  }
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));