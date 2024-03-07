'use client';

import { useEffect, FC } from 'react';
import classes from './InfiniteLogoScroll.module.css';

interface Props {
  logos: Array<string>;
}

const LogoSlider: FC<Props> = ({ logos }) => {
  useEffect(() => {
    const container = document.querySelector(`.${classes.container}`);
    const slide = document.querySelector(`.${classes.logosSlide}`);

    if (!container || !slide) {
      return;
    }

    const cloneSlide = slide.cloneNode(true);
    container.appendChild(cloneSlide);
  }, []);

  return (
    <div className={`${classes.container}`}>
      <div className={`${classes.logosSlide}`}>
        {logos.map((src) => (
          <img
            key={src}
            className='w-fit sm:pr-[100px] sm:h-[200px] pr-[25px] h-[100px]'
            src={src}
            alt={`${src} image`}
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
