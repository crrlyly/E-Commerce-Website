import { Link } from "react-router-dom";

export default function EditProfilePage() {
  return (
    <div className="w-full min-h-screen h-auto bg-black/5 flex flex-col items-center">
      <div className="w-[85%] max-w-175 mx-10 mt-30 mb-20">
        <div className="inline-flex font-bold justify-center items-center mb-10">
          <Link
            to="/profile"
            className="bg-purple-200 flex justify-center items-center px-2 py-2 rounded-2xl"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="ml-10 text-3xl">Edit Profile</h1>
        </div>

        <div className="bg-pink-100 w-full h-auto">
            <div>
                <div></div>
                <h1>Change photo</h1>
            </div>
            <div>
                <div>
                    <h1>First Name</h1>
                    <input type="text" />
                </div>
                <div>
                    <h1>First Name</h1>
                    <input type="text" />
                </div>
            </div>
            <div>
                <h1>Phone Number</h1>
                <input type="text" />
            </div>
            <div>
                <h1>Email</h1>
                <input type="text" />
                <p>Email cannot be changed.</p>
            </div>

            <button>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
