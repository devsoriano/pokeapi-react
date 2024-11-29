import "./App.css";
import PokemonList from "./components/PokemonList";

function App() {
  return (
    <div
      className="min-h-screen p-4"
      style={{
        background: "linear-gradient(to bottom, #f2f2f2, #8e8e8e)",
        minHeight: "100vh",
      }}
    >
      <PokemonList />
    </div>
  );
}

export default App;
