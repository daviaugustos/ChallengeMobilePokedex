import React from 'react';
import { Svg, Path, Defs, Stop } from 'react-native-svg';

const HomeFirstOption = () => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="414"
      height="207"
      fill="none"
      viewBox="0 0 414 207"
    >
      <Path
        fill="url(#paint0_linear)"
        d="M207-207c106.525 0 194.396 79.273 207 181.626H312.97c-11.504-47.501-54.584-82.8-105.97-82.8-51.386 0-94.466 35.299-105.97 82.8H0C12.604-127.727 100.475-207 207-207z"
      />
      <Path
        fill="url(#paint1_linear)"
        d="M312.97 25.374H414C401.396 127.727 313.525 207 207 207S12.604 127.727 0 25.374h101.03c11.504 47.501 54.584 82.8 105.97 82.8 51.386 0 94.466-35.299 105.97-82.8z"
      />
      <Path
        fill="url(#paint2_linear)"
        d="M207 68.11c37.898 0 68.62-30.494 68.62-68.11S244.898-68.11 207-68.11 138.38-37.616 138.38 0 169.102 68.11 207 68.11z"
      />
      <Defs>
        <linearGradient
          id="paint0_linear"
          x1="207"
          x2="207"
          y1="0"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5F5F5"/>
          <Stop offset="1" stopColor="#fff"/>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="207"
          x2="207"
          y1="0"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5F5F5"/>
          <Stop offset="1" stopColor="#fff"/>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="207"
          x2="207"
          y1="0"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5F5F5"/>
          <Stop offset="1" stopColor="#fff"/>
        </linearGradient>
      </Defs>
    </Svg>
);

export default HomeFirstOption;
