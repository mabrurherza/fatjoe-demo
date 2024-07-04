import React from "react";
import Rive from "@rive-app/react-canvas";

export default function SizeTest() {
  return (
    <div className="bg-[#14141A] w-screen h-screen grid place-items-center">
      <div className="">
        <Rive src="/q.riv" className=" w-[520px] h-[520px]" />
      </div>
    </div>
  );
}
