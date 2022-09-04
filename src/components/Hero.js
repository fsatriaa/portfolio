import React from "react";
import hero from "../dist/img/hero.png";

function Hero() {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello World👋 my name is
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                Febrinawan Satria Adhitama
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Web Developer
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Mari berkenalan dan lebih tau tentang saya!
            </p>
            <a
              href="https://www.linkedin.com/in/febrinawansatria/"
              target="blank"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              Contact me!
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img src={hero} alt="Febrinawan" className="max-w-full mx-auto" />
              <span className="absolute bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={400}
                  height={400}
                >
                  <path
                    fill="#6366F1"
                    d="M29.8,-21.3C45.4,-14.1,69.7,-7,77.4,7.6C85,22.3,76,44.6,60.3,58.3C44.6,71.9,22.3,76.9,2.5,74.4C-17.4,72,-34.7,62,-49,48.4C-63.3,34.7,-74.5,17.4,-74.3,0.2C-74.1,-17,-62.5,-33.9,-48.2,-41.1C-33.9,-48.3,-17,-45.6,-5,-40.7C7,-35.7,14.1,-28.4,29.8,-21.3Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
