import React from "react";
import jic from "../dist/img/client/jic.png";
import unicon from "../dist/img/client/unicon.png";
import gym from "../dist/img/client/gym.png";

function Client() {
  return (
    <section id="client" className="pt-36 pb-32 bg-slate-800 ">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Who Have Worked Together
            </h2>
            <p className="font-medium text-base text-secondary md:text-lg">
              Berikut adalah beberapa perusahaan atau organisasi yang pernah
              bekerja sama dengan saya dalam suatu project.
            </p>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="#home"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-300 ease-in-out lg:mx-6 xl:mx-8"
            >
              <img src={jic} alt="Jogja IT Clinic" />
            </a>
            <a
              href="#home"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-300 ease-in-out lg:mx-6 xl:mx-8"
            >
              <img src={unicon} alt="PT. UNICON SEJAHTERA MANDIRI" />
            </a>
            <a
              href="#home"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-300 ease-in-out lg:mx-6 xl:mx-8"
            >
              <img src={gym} alt="Gunungkidul Youth Movement" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Client;
