import React from "react";
// import MainPicture from "../assets/MainPicture.webp"
// import MainPicture1 from "../assets/MainPicture1.png";
// import MainPicture2 from "../assets/MainPicture2.png";
import Fond1 from "../assets/fond1.jpg";

function Home() {
  return (
    <div className="flex flex-col">
      <div className=" h-96 ">
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
    </div>
  );
}

export default Home;
