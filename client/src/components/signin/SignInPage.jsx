import { useState } from "react";
import { Link } from "react-router-dom";
import { userSignin } from "../../services/authApi";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("button submitted")
    e.preventDefault();
    try {
      const data = await userSignin(formData);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-dvh bg-gray-100 flex items-center justify-center gap-10">
      <div className="max-w-130 w-5/6 min-h-[75%] bg-white border border-gray-300 rounded-4xl flex flex-col items-center justify-center gap-3 pt-15 px-5">
        <h1 className="font-bold text-3xl uppercase mb-7">store</h1>
        <div className="mb-6 opacity-70 bg-linear-to-r from-green-900 to-green-500 w-20 h-20 bg-gray-100 flex items-center justify-center rounded-2xl">
          <span class="material-symbols-outlined text-[48px]! text-white">
            login
          </span>
        </div>

        <h1 className="font-bold text-2xl uppercase">Welcome back</h1>
        <p className="px-2 text-gray-600 text-center mb-2">
          Sign in to your account to continue shopping
        </p>

        <form className="mx-5 mb-5" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            placeholder="you@example.com"
            className="resize-none border border-gray-300 p-2 w-full rounded-md"
            id="email"
            name="email"
            rows="1"
            cols="40"
            value={formData.email}
            onChange={handleChange}
          ></input>
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
            value={formData.password}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <button
            type="submit"
            className="w-full text-white bg-green-900 py-4 rounded-2xl flex items-center justify-center"
          >
            <span class="material-symbols-outlined mr-2">login</span> Sign in
          </button>
        </form>

        <div className="flex justify-center items-center text-[1rem] font-medium mb-10">
          <h1 className="text-gray-500 flex items-center">
            Dont have an account?
          </h1>
          <Link to="/register" className="ml-1 underline">
            Create one.
          </Link>
        </div>
      </div>
    </div>
  );
}
