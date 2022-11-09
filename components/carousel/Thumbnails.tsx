import { ComponentState } from 'react'

import { current, selectCarousel } from 'features/carousel/carouselSlice';
import { useAppSelector } from 'redux/hooks';
import { useAppDispatch } from 'redux/hooks';

const Thumbnails = ({colors, setTrend}: ComponentState) => {
    const { index } = useAppSelector(selectCarousel);
    const dispatch = useAppDispatch()

  let thumbs = colors.map((color: any, i: any) => {
    return (
      <div
        key={color}
        onClick={() => {
            i > index ? setTrend(1) : setTrend(-1)
            dispatch(current(i))
        }}
        className={`${
          i === Math.abs(index) ? "bg-lime-500 w-8 h-8" : "bg-black w-4 h-4"
        } rounded-sm cursor-pointer`}
      ></div>
    );
  })
  return (
    <div className='flex items-center justify-center gap-4'>
        {thumbs}
    </div>
  )
}

export default Thumbnails