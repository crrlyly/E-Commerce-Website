import Picture from "../../assets/bottle1.jpg";

export default function LookbookCard() {
  return (
    <div className="xl:flex xl:max-h-300 mb-10 w-full h-auto bg-white rounded-4xl border border-black/30">
      <img
        src={Picture}
        className="w-full h-auto object-cover max-h-200 rounded-t-4xl"
        alt=""
      />
      <div className="w-full h-auto p-10 xl:flex xl:flex-col xl:justify-center">
        <div className="xl: self-start mb-5 w-auto h-auto inline-block bg-blue-200 px-2 rounded-2xl">
          <h4 className="text-[.9rem]">Limited edition</h4>
        </div>
        <h3 className="mb-1 text-[1.2rem]">AUTUMN / WINTER</h3>
        <h1 className="mb-3 text-4xl font-bold">Dark Romanticism</h1>
        <p className="mb-7 text-[1.3rem]">
          Warm tones, light fabrics, effortless days
        </p>
        <div className="mb-3 flex items-center gap-3">
          <h3 className="text-[1.1rem] font-semibold">Explore collection</h3>
          <span className="material-symbols-outlined text-[1.1rem]!">arrow_forward_ios</span>
        </div>
        <span>4 looks inside</span>
      </div>
    </div>
  );
}
