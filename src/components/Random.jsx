import Spinner from "./Spinner";
import useGif from "../hooks/useGif.js";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 flex flex-col items-center gap-y-5 mt-[15px] mb-[10px] bg-blue-500 p-5 rounded-lg bg-opacity-10 border border-[#5044e5]/15">
      <h1 className="mt-[15px] text-2xl uppercase font-semibold font-serif tracking-widest border rounded-full px-3 py-1 bg-slate-700 bg-opacity-40 text-slate-100">
        Random Gifs
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="random-gif" width="450" />}

      <button
        onClick={() => fetchData()}
        className="mb-[20px] text-lg rounded-lg border py-2 px-5 italic font-semibold text-white tracking-wider bg-[#000]/40"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
