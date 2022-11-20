import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  previous,
  next,
  auto,
  end,
  selectCarousel,
} from "../../features/carousel/carouselSlice";
import {Left} from '../../figures/Left'
import {Right} from '../../figures/Right'
import { ComponentState } from 'react';

const Buttons = ({setTrend}: ComponentState) => {
  const { index, newProducts } = useAppSelector(selectCarousel);
  const dispatch = useAppDispatch();
  
  const lastIndex = newProducts.length - 1;
  return (
    <div aria-label="buttons">
      <button
        onClick={() => {
          setTrend(-1);
          if (index > 0) {
            dispatch(previous());
          } else {
            dispatch(end());
          }
        }}
        className="absolute top-0 bottom-0 p-0 my-auto border-none rounded-none left-2 bg-black/50 backdrop-blur-lg btn"
      >
        <Left fill="none" width={24} height={24} />
      </button>
      <button
        onClick={() => {
          setTrend(1);
          if (index < lastIndex) {
            dispatch(next());
          } else {
            dispatch(auto());
          }
        }}
        className="absolute top-0 bottom-0 p-0 my-auto border-none rounded-none right-2 bg-black/50 backdrop-blur-lg btn"
      >
        <Right fill="none" width={24} height={24} />
      </button>
    </div>
  );
};

export default Buttons;
