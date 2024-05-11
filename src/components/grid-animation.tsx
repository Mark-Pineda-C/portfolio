"use client";

import { useState } from "react";

export default function GridAnimation() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full h-full relative opacity-50">
      <div className="absolute z-20 bg-background blur-lg rounded-full size-[35vmin] top-16 -translate-y-1/2 left-0 -translate-x-1/2" />
      <div className="absolute z-20 bg-background blur-lg rounded-full size-[35vmin] bottom-16 translate-y-1/2 right-0 translate-x-1/2" />
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          className="col-span-1 bg-primary/10 p-0.5 gird overflow-hidden place-items-center relative rounded-small -m-px"
          key={i}
        >
          <div className="absolute z-0 left-1/2 -translate-x-1/2 h-[150%] w-1/3 top-1/2 -translate-y-1/2">
            <div
              className="bg-primary-600/50 z-20 blur-sm h-full w-full animate-spin-clockwise animate-iteration-count-infinite"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${3.5 + i * 0.1}s`,
              }}
            ></div>
          </div>
          <div className="h-full w-full bg-background relative z-10 rounded-small" />
        </div>
      ))}
    </div>
  );
}

interface Props {
  attributes: ["top" | "bottom", "left" | "right"];
}

const RandomBlob = ({ attributes }: Props) => {
  const [position, setPosition] = useState([
    Math.random(),
    Math.random(),
  ] as const);
  const [size, setSize] = useState(30 + Math.random() * 70);

  return (
    <div
      className="absolute z-20 bg-background blur-lg rounded-full"
      style={{
        [attributes[0]]: `${position[0] * 100}%`,
        [attributes[1]]: `${position[1] * 100}%`,
        width: `${size}vmin`,
        height: `${size}vmin`,
      }}
    ></div>
  );
};
