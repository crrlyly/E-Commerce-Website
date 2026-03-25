import LookbookCard from "../cards/LookbookCard";

export default function LookBook() {
  return (
    <div className="w-full h-auto mt-15 pb-15 bg-black/5 flex flex-col justify-center items-center">
      <div className="my-18 w-full h-auto flex flex-col justify-center items-center gap-3">
        <h2 className="text-[1.2rem] uppercase font-medium">The store lookbook</h2>
        <h1 className="text-6xl font-bold text-center mt-2">
          Style, <span className="block mt-3 text-gray-700">Curated.</span>
        </h1>
        <p className="mx-5 text-center text-[1.3rem] mt-5">
          Three seasons. Three moods. Endless inspiration. Explore our editorial
          collections.
        </p>
      </div>
      <div className="w-[80%] h-auto">
        <LookbookCard></LookbookCard>
        <LookbookCard></LookbookCard>
        <LookbookCard></LookbookCard>
      </div>
    </div>
  );
}
