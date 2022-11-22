export const Menu = ({width, height}: {width: number, height: number}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="bg-inherit feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12" className=" mix-blend-difference"></line>
      <line x1="3" y1="6" x2="21" y2="6" className="mix-blend-difference"></line>
      <line x1="3" y1="18" x2="21" y2="18" className="mix-blend-difference"></line>
    </svg>
  );
};
