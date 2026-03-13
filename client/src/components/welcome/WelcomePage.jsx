export default function WelcomePage() {
  return (
    <div className="w-full h-dvh bg-gray-100 flex items-center justify-center gap-10">
      <div className="max-w-130 w-5/6 min-h-120 bg-white border border-gray-300 rounded-4xl flex flex-col items-center gap-6 pt-13 px-5">
        <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-full">
          <span class="material-symbols-outlined text-[48px]!">person</span>
        </div>

        <h1 className="font-bold text-2xl capitalize">
          Welcome to <span className="uppercase">store</span>
        </h1>

        <p className="px-5 text-gray-600 text-center">Sign in to access your profile, favorites, and order history.</p>

        <button className="w-full text-white bg-green-900 py-4 rounded-2xl flex items-center justify-center">
          <span class="material-symbols-outlined mr-2">login</span> Sign in
        </button>
        <button className="font-bold w-full py-4 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center">
          <span class="material-symbols-outlined mr-2">person_add</span> Create
          Account
        </button>

        <div className="text-gray-500 font-semibold mt-5 flex items-center mb-10">
          <span class="material-symbols-outlined mr-2">keyboard_backspace</span>
          Back to Shop
        </div>
      </div>
    </div>
  );
}
