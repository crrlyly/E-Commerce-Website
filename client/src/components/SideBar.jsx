import { Link } from "react-router-dom";

export default function SideBar({ ifOpen, close }) {
  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
          ${ifOpen ? "opacity-0" : "pointer-events-none opacity-0"}`}
      ></div>

      <div
        className={`${ifOpen ? "translate-x-0" : "-translate-x-full"} md:hidden z-80 transform transition-transform duration-400 top-0 left-0 bg-white/97 w-3/4 h-dvh pb-[env(safe-area-inset-bottom)] pt-15 fixed`}
      >
        <div className="flex items-center px-5 mb-8">
          <h1 className="text-2xl uppercase">Store</h1>
          <button className="ml-auto cursor-pointer">
            <span onClick={close} class="material-symbols-outlined">
              close
            </span>
          </button>
        </div>
        <div className="flex flex-col px-5 font-bold uppercase text-[1.3rem] gap-4">
          <a href="">home</a>
          <a href="">shop</a>
          <Link to="/lookbook">lookbook</Link>
          <a href="">about</a>
        </div>
        <div className="absolute bottom-0 flex gap-2 uppercase pl-5 pt-3 mb-5 w-full border-t border-gray-700">
          <a href="">login</a>
          <div>|</div>
          <a href="">join</a>
        </div>
      </div>
    </>
  );
}
