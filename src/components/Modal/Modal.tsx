'use client';

import { FC, useId } from 'react';

interface Props {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  openBtnText: string;
  closeBtnText: string;
}

const Modal: FC<Props> = ({
  image,
  title,
  subtitle,
  description,
  openBtnText,
  closeBtnText,
}) => {
  const id = useId();

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor={id}
        className='btn'
      >
        {openBtnText}
      </label>

      {/* Put this part before </body> tag */}
      <input
        type='checkbox'
        id={id}
        className='modal-toggle'
      />
      <div
        className='modal'
        role='dialog'
      >
        <div className='modal-box flex flex-col'>
          <div className='flex flex-row justify-start items-center gap-4'>
            <div className='mask mask-squircle w-[100px] h-[100px] bg-green-500 flex justify-center items-center'>
              <img src={image} />
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-lg'>{title}</h2>
              <h3 className='opacity-40'>{subtitle}</h3>
            </div>
          </div>
          <p className='py-4 font-medium'>{description}</p>
          <div className='modal-action'>
            <label
              htmlFor={id}
              className='btn'
            >
              {closeBtnText}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
