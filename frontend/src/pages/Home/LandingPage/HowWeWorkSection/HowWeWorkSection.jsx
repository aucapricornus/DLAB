import React from "react";
const HowWeWork = () => {
  return (
    <div className="w-full max-w-screen-xl m-auto flex justify-center md:h-full lg:h-96 sm:h-auto mt-5 mb-5">
      <div
        className="flex flex-col md:flex-row"
      // style={{ height: "26rem" }}
      >
        <div className="m-auto text-center w-full sm:w-full md:w-1/2 p-10">
          <div className="text-3xl font-medium m-5  p-auto text-gray-700">
            <strong>¿Cómo funcionamos?</strong>
          </div>
          <div className="text-justify mt-5 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
            Da click a nuestro video y en sólo 60 segundos conoce
            <strong style={{ color: "#2738f5" }}> Devsafio </strong>y cómo
            estamos
            <strong style={{ color: "#2738f5" }}> cambiando el mundo TI</strong>
            , acelerando y potenciando las células tecnológicas.
          </div>
        </div>
        <div className="text-center w-full sm:w-full md:w-full xl:w-full md:h-full lg:h-96 sm:h-auto">
          <iframe
            className="m-auto aspect-video sm:w-full  md:w-1/2 flex-shrink-0 md:h-full lg:h-96 sm:h-auto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Devsafio ¿Cómo funcionamos?"
            style={{
              width: "85%",
              // height: "75%",
              // backgroundImage: `url("https://img.youtube.com/vi/z5NPi7WrViU/0.jpg")`,
            }}
            src="https://www.youtube.com/embed/z5NPi7WrViU"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
