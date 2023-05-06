import Rive from "@rive-app/react-canvas";

export default function homepage() {
  return (
    <section className="bg-[#15141A] h-[100vh] flex flex-col-reverse lg:flex-row w-full justify-stretch">
      <div className="text-white flex-1 hidden lg:grid lg:place-items-center ">
        <img
          src="/homepage-placeholder.png"
          alt="test"
          className="w-full p-4 lg:w-3/4"
        />
      </div>
      <div className="text-white flex-1 lg:hidden">
        <img
          src="/homepage-placeholder-mobile.png"
          alt="test"
          className="w-full p-4 lg:w-3/4"
        />
      </div>
      <div className="text-white flex-1">
        <Rive src="/homepage-draft-1.riv" className=" w-full h-full" />
      </div>
      <div className="flex flex-col items-center pt-10 lg:hidden px-2">
        <h1 className="text-white text-[36px] font-poppins font-bold">
          Marketing. <span className="text-[#c3ff00]">Done.</span>
        </h1>
        <p className="text-[#939393] text-[12px] font-poppins">
          On-demand marketing services for Agencies & teams
        </p>
      </div>
    </section>
  );
}
