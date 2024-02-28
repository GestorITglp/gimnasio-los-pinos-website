'use client';

import { FC, useId, ReactNode, CSSProperties } from 'react';

interface Props {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  openBtnText?: string;
  closeBtnText: string;
  labelContent?: ReactNode;
  additionalContent?: ReactNode;
  styles?: CSSProperties;
}

const Modal: FC<Props> = ({
  image,
  title,
  subtitle,
  description,
  openBtnText,
  closeBtnText,
  labelContent,
  additionalContent,
  styles,
}) => {
  const id = useId();
  const labelClasses = labelContent ? '' : 'btn';

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor={id}
        className={labelClasses}
      >
        {labelContent ? labelContent : openBtnText}
      </label>

      {/* Put this part before </body> tag */}
      <input
        type='checkbox'
        id={id}
        className='modal-toggle'
      />
      <div
        style={styles}
        className='modal z-[10000000]'
        role='dialog'
      >
        <div className='modal-box flex flex-col'>
          <div className='flex flex-row justify-start items-center gap-4'>
            {image !== undefined && (
              <div className='mask mask-squircle w-[100px] h-[100px] bg-green-500 flex justify-center items-center'>
                <img src={image} />
              </div>
            )}
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-lg'>{title}</h2>
              {subtitle !== undefined && (
                <h3 className='opacity-40'>{subtitle}</h3>
              )}
            </div>
          </div>
          {description !== undefined && (
            <p className='py-4 font-medium'>{description}</p>
          )}
          {additionalContent}
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
