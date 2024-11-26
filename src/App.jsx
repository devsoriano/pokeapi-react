import "./App.css";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div
      className="min-h-screen p-4"
      style={{
        background: "linear-gradient(to bottom, #e5e7eb, #374151)", // Gris claro a gris oscuro
        minHeight: "100vh",
      }}
    >
      <PokemonList />
    </div>
  );
}

export default App;
