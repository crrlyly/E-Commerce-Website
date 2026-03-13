export default function CreateAccountPage() {
  return (
    <div className="w-full h-dvh bg-gray-100 flex items-center justify-center gap-10">
      <div className="max-w-130 w-5/6 min-h-[75%] bg-white border border-gray-300 rounded-4xl flex flex-col items-center justify-center pt-5 ap-3 px-5">
        <h1 className="font-bold text-3xl uppercase mb-5">store</h1>
        <div className="mb-6 opacity-70 bg-linear-to-r from-green-900 to-green-500 w-20 h-20 bg-gray-100 flex items-center justify-center rounded-2xl">
          <span className="material-symbols-outlined text-[48px]! text-white">person_add</span>
        </div>

        <h1 className="font-bold text-2xl uppercase">Create your account</h1>
        <p className="px-2 text-gray-600 text-center mb-4">
          Join STORE and unlock a better shopping experience
        </p>

        <form className="mx-5 mb-5" action="/action_page.php">
        <label htmlFor="fullName">Full Name:</label>
          <br />
          <textarea
            placeholder="First and last name..."
            className="resize-none border border-gray-300 p-2 w-full rounded-md"
            id="fullName"
            name="fullName"
            rows="1"
            cols="40"
          ></textarea>
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <textarea
            placeholder="you@example.com"
            className="resize-none border border-gray-300 p-2 w-full rounded-md"
            id="email"
            name="email"
            rows="1"
            cols="40"
          ></textarea>
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            placeholder="•••••••••"
            className="resize-none border border-gray-300 p-2 w-full rounded-md"
            id="password"
            name="password"
            rows="1"
            cols="40"
            type="password"
          ></input>
          <br />
          <br />
          <button
            type="submit"
            className="w-full text-white bg-green-900 py-4 rounded-2xl flex items-center justify-center"
          >
            <span class="material-symbols-outlined mr-2">person_add</span> Create account
            
          </button>
        </form>

        <div className="mb-7 flex justify-center items-center text-[1rem] font-medium">
          <h1 className="text-gray-500 flex items-center">
            Already have an account?
          </h1>
          <a className="ml-1 underline">Sign in.</a>
        </div>
      </div>
    </div>
  );
}
