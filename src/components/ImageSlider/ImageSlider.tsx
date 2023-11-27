'use client';

import { FC } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

interface Props {
  images: Array<string>;
}

const ImageSlider: FC<Props> = ({ images }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center'>
      {images.map((src) => {
        return (
          <Image
            className='w-[200px]'
            src={src}
            width={300}
            height={300}
            quality={100}
          />
        );
      })}
    </div>
  );
};

export default ImageSlider;
