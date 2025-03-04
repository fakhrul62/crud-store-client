import Hero from "../components/Hero";
import { FaRunning } from "react-icons/fa";
import ProductSection from "../components/ProductSection";
import CategorySection from "../components/CategorySection";
import { useLoaderData } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import BlogSection from "../components/BlogSection";
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  const allProducts = useLoaderData();
  return (
    <div>
      <div className="md:py-24 py-10">
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-3">
            <Slide>
              <h3 className="font-semibold text-xl font-body">
                Gear Up for Greatness
              </h3>
            </Slide>
            <h1 className="font-extrabold md:text-6xl text-4xl font-logo my-5 ">
              Elevate Your Game with Top-Quality Sports Equipment
            </h1>

            <Fade delay={1e3} cascade damping={1e-1}>
              <h3 className="font-semibold text-xl font-body">
                Unleash Your Potential with Gear Built for Champions
              </h3>
            </Fade>
            <ul className=" *:flex *:items-center *:gap-2 *:font-body *:font-medium mt-7">
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
                href="#products"
                className="bg-transparent border-2 border-fireb px-5 py-2 text-fireb font-body font-semibold rounded"
              >
                See Our Products
              </a>
            </div>
          </div>
          <div className="col-span-1 mt-10 md:mt-0">
            <Hero></Hero>
          </div>
        </div>
        <div>
          <AboutSection></AboutSection>
        </div>
        <div>
          <ProductSection allProducts={allProducts}></ProductSection>
        </div>
        <div>
          <CategorySection></CategorySection>
        </div>
        <div>
          <BlogSection></BlogSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
