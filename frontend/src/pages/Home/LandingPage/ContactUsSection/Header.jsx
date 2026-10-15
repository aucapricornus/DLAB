import ImageForm from "../../../../assets/image-contact.png";

export const Header = () => {
  return (
    <div className="w-1/2 px-10 mx-5   screen600:w-full screen600:mx-0 mt-1">
      <h1 className="font-bold text-2xl">DEVsafiamos el sistema</h1>

      <p className="mt-14">
        ¿Escasez de talento Senior? No te procupes, en{" "}
        <span className="text-bright-blue">Devsafio</span> encontrarás el
        talento que necesitas en nuestro programa Mentorías.
      </p>

      <p className="mt-10">
        Completa el formulario y te contactaremos en breve para acompañarte en
        la búsqueda de Talento TI que necesitas.
      </p>

      <img className="mx-auto" src={ImageForm} alt="contact image" />
      <div className="my-5 py-14">
        <p className="font-bold mt-5">
          ¡Agenda una asesoría con nosotros si quieres saber más sobre cómo
          acelerar y potenciar tu próximo Talento TI!
        </p>

        <button className="py-5 px-8 text-2xl rounded-3xl font-extrabold border-none bg-bright-blue text-white uppercase mt-10 screen600:px-4 screen600:py-3 screen600:text-lg">
          Agendar
        </button>
      </div>
    </div>
  );
};
