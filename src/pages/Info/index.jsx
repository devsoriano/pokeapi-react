import { Layout } from "../../components/Layout";

export const Info = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 tracking-wide">
          Welcome to Pokédex Adventure!
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Pokédex Adventure is your ultimate guide to the Pokémon world. Explore
          detailed information about your favorite Pokémon, their abilities,
          types, and much more. Dive into a collection designed for enthusiasts
          and trainers alike!
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Whether you're preparing for a battle, studying type advantages, or
          simply enjoying the nostalgia of these iconic creatures, Pokédex
          Adventure is here to enhance your journey.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Start exploring now and discover the wonders of the Pokémon universe.
          Remember, the journey is just as important as the destination—so,
          gotta catch 'em all!
        </p>
        <p className="text-center text-gray-600 text-sm italic mt-10">
          Created with care for all Pokémon trainers and fans around the globe.
        </p>
      </div>
    </Layout>
  );
};
