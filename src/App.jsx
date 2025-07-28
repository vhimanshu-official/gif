import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-gray-300">
      <h1 className="uppercase italic font-sans font-extrabold bg-black/80 text-white text-3xl tracking-widest text-center py-10">
        Gifs
      </h1>
      {/**Desktop */}
      <div className="hidden md:flex flex justify-center mt-5 mx-5 gap-x-20 min-h-screen">
        <Random />
        <Tag />
      </div>
      {/**Mobile */}
      <div className="md:hidden flex flex-col items-center">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
