import type { FunctionComponent } from "react";

const PresentIcon: FunctionComponent<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 64 64"
      className={className}
    >
      <g>
        <path d="M4,60c0,2.211,1.789,4,4,4h20V36H4V60z" />
        <path d="M36,64h20c2.211,0,4-1.789,4-4V36H36V64z" />
        <path
          d="M60,12h-8c0-6.629-5.371-12-12-12c-3.086,0-5.875,1.199-8,3.113C29.875,1.199,27.086,0,24,0
		c-6.629,0-12,5.371-12,12H4c-2.211,0-4,1.789-4,4v8c0,2.211,1.789,4,4,4h24V12h-8c0-2.211,1.789-4,4-4s4,1.789,4,4h8
		c0-2.211,1.789-4,4-4s4,1.789,4,4h-8v16h24c2.211,0,4-1.789,4-4v-8C64,13.789,62.211,12,60,12z"
        />
      </g>
    </svg>
  );
};

export default PresentIcon;
