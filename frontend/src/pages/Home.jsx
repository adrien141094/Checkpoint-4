import React from "react";
import { Link } from "react-router-dom";
import Fond1 from "../assets/fond1.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="flex flex-col">
      <div className=" h-[40rem] ">
        <figure className="relative ">
          <img
            src={Fond1}
            className=" object-cover  h-[40rem]  w-full"
            alt="Image_principale"
          />
          <figcaption className="absolute  top-60 left-40  mx-auto text-slate-200 text-center">
            <h1 className="break-words w-2/3 text-3xl">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam, quae!"
            </h1>
            <h3 className=" text-xl">Lorem ipsum..</h3>
          </figcaption>
        </figure>
      </div>
      <div className="py-6 pt-8 font-semibold flex justify-center  text-lg">
        <h2>Découvrir par catégorie</h2>
      </div>
      <div className=" grid  grid-rows-2 grid-cols-4 gap-4 mx-44 h-[30rem] py-4 pb-10">
        <div className="  imagebg row-span-2 col-span-2  flex justify-center items-center transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
          <div className="justify-center items-center">
            <Link to="/categorie">
              <button
                type="button"
                className=" bg-white rounded-lg p-3 px-4 font-semibold"
              >
                Corde à sauter
              </button>
            </Link>
          </div>
        </div>
        <div className=" col-span-2 bg-yellow-400 flex justify-center items-center">
          <div className="justify-center items-center">
            <button
              type="button"
              className=" bg-white rounded-lg p-3 px-4 font-semibold"
            >
              En travaux ..
            </button>
          </div>
        </div>
        <div className=" bg-emerald-500 flex justify-center items-center">
          <button
            type="button"
            className=" bg-white rounded-lg p-3 px-4 font-semibold"
          >
            En travaux ..
          </button>
        </div>
        <div className=" bg-indigo-500 flex justify-center items-center">
          <button
            type="button"
            className=" bg-white rounded-lg p-3 px-4 font-semibold"
          >
            En travaux ..
          </button>
        </div>
      </div>
      <div className="py-6 pt-8 font-semibold flex justify-center  text-lg">
        <h2>La suite à venir....</h2>
      </div>
    </div>
  );
}

export default Home;
