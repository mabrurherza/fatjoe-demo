import Rive from "@rive-app/react-canvas";

export default function homepage() {
  return (
    <section className="bg-[#15141A] h-[100vh] flex w-full justify-stretch">
      <div className="text-white flex-1 p-24 grid place-items-center">
        <img src="/homepage-placeholder.png" alt="test" className="w-3/4" />
      </div>
      <div className="text-white flex-1 p-24">
        <Rive src="/homepage-draft-1.riv" className=" w-full h-full" />
      </div>
    </section>
  );
}
