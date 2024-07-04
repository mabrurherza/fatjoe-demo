import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

function ButtonPressed() {
  const { rive, RiveComponent } = useRive({
    src: "/buttonrive.riv",
    stateMachines: "button",
    // animations: "when pressed",
    autoplay: true,
  });

  const pressedInput = useStateMachineInput(rive, "button", "pressed");

  return (
    <a onClick={() => alert("yo")} className="h-[120px] w-[800px] bg-red-100">
      <RiveComponent
        className="h-[320px] w-[500px] border-2 border-red-400 cursor-pointer"
        //   style={{ height: "250px" }}
        onClick={() => pressedInput && pressedInput.fire()}
      />
    </a>
  );
}

function ButtonHovered() {
  const { rive, RiveComponent } = useRive({
    src: "/discoverbtn.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
  });

  const hoveredInput = useStateMachineInput(rive, "State Machine 1", "Hover");
  const clickedInput = useStateMachineInput(rive, "State Machine 1", "Click");

  return (
    <a href="https://twitter.com">
      <RiveComponent
        className="h-screen w-screen border-2 border-red-400"
        onMouseOver={() => {
          hoveredInput && hoveredInput.fire();
        }}
        onClick={() => {
          clickedInput && clickedInput.fire();
        }}
      />
    </a>
  );
}
export default function RiveButton() {
  return (
    <div className="bg-gray-100 w-screen h-screen grid place-items-center">
      <ButtonPressed />
      <ButtonHovered />
    </div>
  );
}
