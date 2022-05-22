import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './telas/home/index';
import Safari from './telas/safari/index';
import PokemonList from './telas/pokemons/index';

const Rotas = createAppContainer(
  createSwitchNavigator(
    {
      Home,
      PokemonList,
      Safari,
    }
  )
)

export default function App() {
  return (
    <Rotas />
  );
}

