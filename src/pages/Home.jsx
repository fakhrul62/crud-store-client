import Hero from "../components/Hero";
import { FaRunning } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="bg-white md:py-24 py-10">
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-3">
            <h3 className="font-semibold text-xl font-body text-zinc-900">
              Gear Up for Greatness
            </h3>
            <h1 className="font-extrabold md:text-6xl text-4xl font-logo my-5 text-zinc-900">
              Elevate Your Game with Top-Quality Sports Equipment
            </h1>
            <h3 className="font-semibold text-xl font-body text-zinc-900">
            Unleash Your Potential with Gear Built for Champions
            </h3>
            <ul className="*:text-zinc-900 *:flex *:items-center *:gap-2 *:font-body *:font-medium mt-7">
              <li>
              <FaRunning className="text-mongo" /> Train Hard. Play Harder.
              </li>
              <li>
              <FaRunning className="text-mongo" />
                Conquer the Field, Court, or Gym – We’ve Got You Covered!
              </li>
            </ul>
            <div className="mt-10">
              <a
                href="#counselors"
                className="bg-transparent border-2 border-fireb px-5 py-2 text-fireb font-body font-semibold rounded"
              >
                See Our Services
              </a>
            </div>
          </div>
          <div className="col-span-1 mt-10 md:mt-0">
            <Hero></Hero>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
