'use client';

import { FC, MouseEvent as ReactMouseEvent, createElement } from 'react';
import { noticias } from '@/constants/news';
import Image from 'next/image';

interface Props {}

const NewsCarousel: FC<Props> = ({}) => {
  const enabledNews = noticias.filter((noticia) => noticia.habilitada);

  // const handleClickOnLink = (e: ReactMouseEvent) => {
  //   const anchorElement = document.createElement('a');
  //   anchorElement.href = '#news-section';
  //   anchorElement.click();
  // };

  return (
    <div className='carousel w-full'>
      {enabledNews.map((enabledNew, i) => {
        return (
          <div
            id={`slide${i}`}
            className='carousel-item relative w-full flex justify-center items-stretch'
          >
            <div className='w-[90%] card lg:card-side shadow-xl bg-dark-green-100'>
              <Image
                className='m-4 flex-grow flex-shrink h-auto sm:max-w-[30%] w-auto object-cover object-center rounded-[1rem]'
                width={750}
                height={750}
                src={enabledNew.imagen}
                alt={enabledNew.titulo}
              />
              <div className='flex-grow flex-shrink card-body gap-4 p-4'>
                <h3 className='card-title text-white font-bold'>
                  {enabledNew.titulo}
                </h3>
                <p className='flex flex-col text-white gap-4'>
                  {enabledNew.descripcion.split('[SALTO]').map((text) => (
                    <span>{text}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a
                href={`#slide${i - 1 === -1 ? enabledNews.length - 1 : i - 1}`}
                className='btn btn-circle opacity-50'
                // onClick={handleClickOnLink}
              >
                ❮
              </a>
              <a
                href={`#slide${i + 1 === enabledNews.length ? 0 : i + 1}`}
                className='btn btn-circle opacity-50'
                // onClick={handleClickOnLink}
              >
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCarousel;
