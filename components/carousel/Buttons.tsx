import { useAppSelector, useAppDispatch } from "redux/hooks";
import {
  previous,
  next,
  start,
  end,
  selectCarousel,
} from "features/carousel/carouselSlice";
import { ReactComponent as Left } from "figures/chevron-left.svg";
import { ReactComponent as Right } from "figures/chevron-right.svg";
import { ComponentState } from 'react';

const Buttons = ({setTrend}: ComponentState) => {
  const { index, newProducts } = useAppSelector(selectCarousel);
  const dispatch = useAppDispatch();
  
  const lastIndex = newProducts.length - 1;
  return (
    <div aria-label="buttons">
      <button
        onClick={() => {
          setTrend(-1)
          if (index > 0) {
            dispatch(previous())
          } else {
            dispatch(end())
          }
        }}
        className="absolute top-0 bottom-0 p-0 my-auto border-none rounded-none left-2 bg-black/50 backdrop-blur-lg btn"
      >
        <Left />
      </button>
      <button
        onClick={() => {
          setTrend(1);
          if (index < lastIndex) {
            dispatch(next())
          } else {
            dispatch(start())
          }
        }}
        className="absolute top-0 bottom-0 p-0 my-auto border-none rounded-none right-2 bg-black/50 backdrop-blur-lg btn"
      >
        <Right />
      </button>
    </div>
  );
};

export default Buttons;
