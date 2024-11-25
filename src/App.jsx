import "./App.css";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-center text-3xl font-bold text-red-600">
        Pokémon List
      </h1>
      <PokemonList />
    </div>
  );
}

export default App;
