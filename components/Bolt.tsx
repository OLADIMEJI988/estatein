import React, { useEffect, useRef } from "react";

export default function Bolt() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current as SVGPathElement | null;
    if (!path) return;

    const length = path.getTotalLength();

    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);

    path.animate(
      [
        { strokeDashoffset: length, offset: 0 }, 
        { strokeDashoffset: 0, offset: 0.2 }, 
        { strokeDashoffset: 0, offset: 0.8 },
        { strokeDashoffset: length, offset: 1 }, 
      ],
      {
        duration: 2500,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  }, []);

  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="M3.375 11.75L12.125 2.375L10.25 9.25H17.125L8.375 18.625L10.25 11.75H3.375Z"
          stroke="#999999"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
