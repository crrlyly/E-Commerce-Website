import { useState } from "react";
import { Link } from "react-router-dom";
import { createAccount } from "../../services/authApi";
import { useNavigate } from "react-router-dom";


export default function CreateAccountPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createAccount(formData);
      console.log(data)
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="w-full h-dvh bg-gray-100 flex items-center justify-center gap-10">
      <div className="max-w-130 w-5/6 min-h-[75%] bg-white border border-gray-300 rounded-4xl flex flex-col items-center justify-center pt-5 ap-3 px-5">
        <h1 className="font-bold text-3xl uppercase mb-5">store</h1>
        <div className="mb-6 opacity-70 bg-linear-to-r from-green-900 to-green-500 w-20 h-20 bg-gray-100 flex items-center justify-center rounded-2xl">
          <span className="material-symbols-outlined text-[48px]! text-white">person_add</span>
        </div>

        <h1 className="font-bold text-2xl uppercase">Create your account</h1>
        <p className="px-2 text-gray-600 text-center mb-4 pt-3 ">
          Join STORE and unlock a better shopping experience
        </p>

        <form className="mx-5 mb-5" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
          <br />
          <input
            placeholder="First and last name..."
            className="resize-none border border-gray-300 p-2 w-full rounded-md"
            id="fullName"
            name="fullName"
            rows="1"
            cols="40"
            value={formData.fullName}
            onChange={handleChange}
          ></input>
          <br />
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
            <span class="material-symbols-outlined mr-2">person_add</span> Create account
            
          </button>
        </form>

        <div className="mb-7 flex justify-center items-center text-[1rem] font-medium">
          <h1 className="text-gray-500 flex items-center">
            Already have an account?
          </h1>
          <Link to="/signin" className="ml-1 underline">Sign in.</Link>
        </div>
      </div>
    </div>
  );
}
