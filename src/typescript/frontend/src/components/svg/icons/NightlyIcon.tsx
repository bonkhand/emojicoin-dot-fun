// cspell:word SVGID
import React, { type SVGProps } from "react";

const NightlyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="27px"
      width="27px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 960 960"
      xmlSpace="preserve"
      {...props}
    >
      <style type="text/css">
        {`
        .st0{clip-path:url(#SVGID_00000071537066756014834180000001545902057288800951_);}
        .st1{fill:black}
        .st2{fill:currentColor}
      `}
      </style>
      <g>
        <g>
          <defs>
            <rect id="SVGID_1_" width="960" height="960" />
          </defs>
          <clipPath id="SVGID_00000147181236294084442980000018432114069927631271_">
            <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
          </clipPath>
          <g
            style={{
              clipPath: "url(#SVGID_00000147181236294084442980000018432114069927631271_)",
            }}
          >
            <path
              className="st1"
              d="M0,480C0,214.9,214.9,0,480,0s480,214.9,480,480S745.1,960,480,960S0,745.1,0,480z"
            />
            <path
              className="st2"
              d="M702.9,192c-42.1,58.8-95,99.6-157.3,126.9c-21.7-6-43.8-9-65.7-8.8c-21.9-0.2-44,2.9-65.7,8.8
				c-62.3-27.4-115.1-68-157.3-126.9c-12.8,32.1-61.8,142.5-2.9,296.9c0,0-18.9,80.6,15.8,149.9c0,0,50-22.7,89.9,9.3
				c41.6,33.7,28.3,66.2,57.6,94.2c25.3,25.9,62.8,25.9,62.8,25.9s37.5,0,62.8-25.8c29.4-27.9,16.2-60.3,57.6-94.2
				c39.6-31.8,89.9-9.3,89.9-9.3c34.4-69.2,15.8-149.9,15.8-149.9C764.7,334.5,715.8,224.1,702.9,192z M285.4,467.7
				c-32.1-65.7-40.8-156-20.7-227.1c26.8,67.7,63,97.9,106.2,130C352.6,408.5,318.3,444.3,285.4,467.7z M377.4,583.5
				c-25.3-11.2-30.6-33.1-30.6-33.1c34.3-21.7,85-5.1,86.6,46.1C406.9,580.3,398,592.4,377.4,583.5z M480,765.2
				c-18.1,0-32.6-13-32.6-28.9s14.7-28.9,32.6-28.9c18.1,0,32.6,13,32.6,28.9C512.6,752.3,498,765.2,480,765.2z M582.6,583.5
				c-20.6,9-29.4-3.2-56,13c1.7-51.2,52.1-67.8,86.6-46.1C613,550.1,607.6,572.3,582.6,583.5z M674.5,467.7
				c-32.8-23.4-67.3-59.1-85.7-97.1c43.1-32,79.6-62.5,106.2-130C715.5,311.7,706.7,402.1,674.5,467.7z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default NightlyIcon;
