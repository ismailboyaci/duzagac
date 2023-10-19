import React, { useEffect, useState } from "react";
import "@/styles/logo.css";
import { useAppSelector } from "@/redux/hooks";
import { themeSelector } from "@/redux/themeSlice/themeSlice";

interface MySVGProps {
  fill: string;
  width: string;
  height: string;
}

interface SvgTheme {
  fill: string;
  stroke: string;
  class: string;
}

const DtSvg: React.FC<MySVGProps> = ({ fill, width, height }: MySVGProps) => {
  const selectedTheme = useAppSelector(themeSelector);
  const [theme, setTheme] = useState<SvgTheme>({
    fill: "black",
    stroke: "#000",
    class: "svg-elem-1",
  });
  useEffect(() => {
    if (selectedTheme.selectedTheme === "dark") {
      setTheme({ fill: "white", stroke: "#fff", class: "svg-elem-2" });
    } else {
      setTheme({ fill: "black", stroke: "#000", class: "svg-elem-1" });
    }
  }, [selectedTheme]);

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 225.000000 225.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
        fill={theme.fill}
        stroke="none"
      >
        <path
          d="M1015 2024 c-263 -42 -468 -161 -615 -356 -62 -82 -72 -115 -44 -142
            33 -33 63 -18 112 55 95 142 275 267 452 316 102 28 321 25 420 -5 269 -84
            467 -281 550 -547 28 -90 37 -248 20 -352 -44 -281 -255 -532 -523 -624 -82
            -28 -192 -50 -202 -41 -3 3 -5 73 -5 156 l0 150 110 111 c61 62 110 118 110
            126 0 8 -7 25 -16 37 -27 39 -59 28 -135 -45 l-69 -66 0 331 0 332 -25 16
            c-23 15 -27 15 -50 0 l-25 -16 0 -175 c0 -96 -3 -175 -7 -175 -3 0 -37 29 -74
            65 -37 36 -74 65 -83 65 -21 0 -56 -35 -56 -57 0 -9 49 -66 110 -128 l110
            -111 0 -361 c0 -335 1 -361 18 -365 32 -8 193 11 270 32 223 61 431 226 546
            433 78 139 124 342 112 491 -31 402 -301 729 -681 826 -78 20 -267 34 -330 24z"
        />
      </g>
    </svg>
  );
};

export default DtSvg;
