import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="rounded-div flex h-20 items-center justify-between font-bold">
      <Link to={"/"}>
        <h1 className="text-2xl">Cryptobase</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* cek apakah user sudah login atau belum berdasarkan email nya dari UserAuth(); 
      untuk mengganti Sign In dan Sign Up nya.  */}
      {user?.email ? (
        <div className="md:flex">
          <Link to={"/account"} className="hidden p-4 md:block">
            Account
          </Link>
          <button
            className="hidden cursor-pointer md:block"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link to={"/signin"} className="hover:text-text-accent p-4">
            Sign In
          </Link>
          <Link
            to={"/signup"}
            className="bg-bg-button text-bg-input ml-2 rounded-2xl px-5 py-2 shadow-lg hover:shadow-2xl"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Menu Icon */}
      <div onClick={handleNav} className="z-10 block cursor-pointer md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "bg-bg-primary fixed top-20 left-0 z-10 flex h-[90%] w-full flex-col items-center justify-between duration-300 ease-in md:hidden"
            : "fixed top-20 -left-full flex h-[90%] flex-col items-center justify-between duration-300 ease-in"
        }
      >
        <ul className="w-full p-4">
          <li onClick={handleNav} className="border-b py-6">
            <Link to={"/"}>Home</Link>
          </li>
          <li onClick={handleNav} className="border-b py-6">
            <Link to={"/account"}>Account</Link>
          </li>
          <li className="py-6">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex w-full flex-col p-4">
          <Link to={"/signin"}>
            <button
              onClick={handleNav}
              className="bg-bg-primary text-text-primary border-bg-secondary my-2 w-full cursor-pointer rounded-2xl border p-3 shadow-xl"
            >
              Sign In
            </button>
          </Link>
          <Link to={"/signup"}>
            <button
              onClick={handleNav}
              className="bg-bg-button text-bg-input my-2 w-full cursor-pointer rounded-2xl p-3 shadow-xl"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
