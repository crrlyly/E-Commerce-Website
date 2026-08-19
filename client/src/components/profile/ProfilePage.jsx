import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../services/authApi";
import { getMe } from "../../services/authApi";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getMe();

        setUser(data.user);

        console.log(data.user)
      } catch (error) {
        console.error(error)
      }
    }

    loadUser();
  }, [])

  const handleLogout = async () => {
  try {
    await userLogout();
    navigate("/welcome");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="w-full min-h-screen bg-black/5 flex flex-col items-center">
      <div className="w-[85%] max-w-175 mx-10 mt-30 mb-20">
        <div className="inline-flex font-bold justify-center items-center mb-10">
          <Link
            to="/"
            className="bg-purple-200 flex justify-center items-center px-2 py-2 rounded-2xl"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="ml-10 text-3xl">Profile</h1>
        </div>

        <div
          className="w-full grid grid-cols-3 grid-rows-9 gap-5
      [grid-template-areas:'name_name_name''name_name_name''name_name_name''name_name_name''items_fav_val''items_fav_val''options_options_options''options_options_options''options_options_options']"
        >
          <div className="bg-white border border-black/30 w-full min-h-40 [grid-area:name] rounded-3xl flex flex-col justify-center items-center gap-2">
            <div className="w-30 h-30 bg-blue-100 rounded-full inline-flex justify-center items-center">
              <span class="material-symbols-outlined text-[4rem]! font-light!">
                person
              </span>
            </div>
            <h1 className="text-3xl font-bold">{user?.fname} {user?.lname}</h1>
            <div className="flex gap-2">
              <span class="material-symbols-outlined">mail</span>
              carlyfrances118@gmail.com
            </div>
            <div className="flex gap-2">
              <span class="material-symbols-outlined">calendar_today</span>
              Member since March 2026
            </div>
          </div>
          <div className="border border-black/30 bg-white w-full min-h-40 [grid-area:items] rounded-2xl flex flex-col justify-center items-center gap-2">
            <span class="material-symbols-outlined text-4xl!">
              shopping_bag
            </span>
            <h1 className="font-bold text-[1.2rem]">19</h1>
            <h3 className="text-[.9rem]">Cart Items</h3>
          </div>
          <div className="border border-black/30 bg-white w-full min-h-40 [grid-area:fav] rounded-2xl flex flex-col justify-center items-center gap-2">
            <span class="material-symbols-outlined text-4xl!">favorite</span>
            <h1 className="font-bold text-[1.2rem]">1</h1>
            <h3 className="text-[.9rem]">Favorites</h3>
          </div>
          <div className="border border-black/30 bg-white w-full min-h-40 [grid-area:val] rounded-2xl flex flex-col justify-center items-center gap-2">
            <span class="material-symbols-outlined text-4xl!">
              attach_money
            </span>
            <h1 className="font-bold text-[1.2rem]">$1699.34</h1>
            <h3 className="text-[.9rem]">Cart Value</h3>
          </div>
          <div className="bg-white w-full min-h-40 [grid-area:options] rounded-3xl">
            <Link to="/favorites" className="w-full flex h-1/3 rounded-t-3xl border border-black/20 items-center pl-5">
              <span class="material-symbols-outlined text-3xl! mr-3">
                favorite
              </span>
              <h1 className="font-semibold text-[1.1rem]">My Favorites</h1>
            </Link>
            <Link to="/favorites" className="w-full flex h-1/3 border border-black/20 items-center pl-5">
              <span class="material-symbols-outlined text-3xl! mr-3">
                order_approve
              </span>
              <h1 className="font-semibold text-[1.1rem]">Order History</h1>
            </Link>
            <Link to="/editprofile" className="w-full flex h-1/3 border border-black/20 items-center pl-5">
              <span class="material-symbols-outlined text-3xl! mr-3">
                edit
              </span>
              <h1 className="font-semibold text-[1.1rem]">Edit Profile</h1>
            </Link>
            <button onClick={handleLogout} className="w-full flex h-1/3 border border-black/20 rounded-b-3xl items-center pl-5">
              <span class="material-symbols-outlined text-3xl! mr-3">
                logout
              </span>
              <h1 className="font-semibold text-[1.1rem]">Sign Out</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
