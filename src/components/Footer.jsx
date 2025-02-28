import { AiOutlineInstagram } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div text-text-primary mt-8 pt-8">
      <div className="grid md:grid-cols-2">
        <div className="flex w-full justify-evenly uppercase md:max-w-[300px]">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="py-2 text-sm">Help Center</li>
              <li className="py-2 text-sm">Contact Us</li>
              <li className="py-2 text-sm">API Status</li>
              <li className="py-2 text-sm">Documentation</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="py-2 text-sm">About Us</li>
              <li className="py-2 text-sm">Careers</li>
              <li className="py-2 text-sm">Invest</li>
              <li className="py-2 text-sm">Legal</li>
            </ul>
          </div>
        </div>

        <div className="text-right">
          <div className="flex w-full justify-end">
            <div className="relative w-full py-4 md:w-[300px]">
              <div className="-mt-4 flex justify-center py-4 md:justify-end md:py-0 md:pb-4">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Sign up for crypto news
              </p>

              <div className="py-4">
                <form>
                  <input
                    className="bg-bg-primary border-bg-input mr-2 w-full rounded-2xl border p-2 shadow-xl md:w-auto"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-bg-button text-bg-input my-2 w-full rounded-2xl p-2 px-4 shadow-xl hover:shadow-2xl md:w-auto">
                    Sign Up
                  </button>
                </form>
              </div>

              <div className="text-text-accent flex justify-between py-4">
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="py-4 text-center">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
