import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="mx-auto min-h-[600px] max-w-[400px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form>
          <div className="my-4">
            <label>Email</label>
            <div className="relative my-2 w-full rounded-2xl shadow-xl">
              <input
                className="bg-bg-primary border-bg-input w-full rounded-2xl border p-2"
                type="email"
              />
              <AiOutlineMail className="absolute top-3 right-2 text-gray-400" />
            </div>
          </div>

          <div className="my-4">
            <label>Password</label>
            <div className="relative my-2 w-full rounded-2xl shadow-xl">
              <input
                className="bg-bg-primary border-bg-input w-full rounded-2xl border p-2"
                type="password"
              />
              <AiFillLock className="absolute top-3 right-2 text-gray-400" />
            </div>
          </div>

          <button className="bg-bg-button text-bg-input my-2 w-full rounded-2xl p-3 shadow-xl">
            Sign Up
          </button>
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-text-accent">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
