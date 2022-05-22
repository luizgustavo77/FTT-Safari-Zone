import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Safari from './telas/safari/index';
import PokemonList from './telas/pokemons/index';

const Rotas = createAppContainer(
  createSwitchNavigator(
    {
      Safari,
      PokemonList,
    }
  )
)

export default function App() {
  return (
    <Rotas />
  );
}

