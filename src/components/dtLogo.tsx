import React from "react";
import '@/styles/logo.css'

// TypeScript ile props türünü tanımlayın
interface MySVGProps {
  fill: string,
  width: string,
  height: string
}

const DtLogo: React.FC<MySVGProps> = () => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="white">
    <path d="M1013 2020 c-192 -20 -392 -119 -533 -262 -67 -68 -140 -170 -140
    -195 0 -11 9 -28 20 -38 27 -24 63 -13 87 27 37 62 121 155 185 203 83 63 224
    129 322 150 117 26 303 17 411 -19 125 -42 219 -100 315 -196 100 -98 159
    -192 203 -318 25 -74 30 -107 35 -217 4 -111 1 -144 -17 -215 -81 -327 -340
    -561 -678 -615 l-43 -7 0 164 0 163 105 105 c107 106 124 137 93 168 -25 25
    -54 11 -118 -53 -35 -36 -68 -65 -72 -65 -4 0 -8 148 -8 328 0 350 0 352 -50
    352 -47 0 -50 -11 -50 -204 l0 -180 -69 68 c-51 50 -76 68 -96 69 -34 0 -47
    -14 -47 -48 0 -21 24 -51 106 -134 l106 -106 0 -364 0 -364 103 6 c471 26 840
    419 839 897 0 186 -47 348 -144 497 -147 225 -386 372 -656 403 -95 11 -104
    11 -209 0z" stroke="#ffff" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-1"></path>
    </g>
    </svg>
    
);

export default DtLogo;
