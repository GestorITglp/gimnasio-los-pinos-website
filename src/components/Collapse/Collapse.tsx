import { FC, ReactNode } from 'react';

interface Props {
  headerText: string;
  children: ReactNode;
}

const Collapse: FC<Props> = ({ headerText, children }) => {
  return (
    <div
      tabIndex={0}
      className='w-full min-h-[100px] collapse collapse-arrow  bg-dark-green-100/10'
    >
      <div className='collapse-title text-xl text-dark-green-100 font-medium self-center'>
        {headerText}
      </div>
      <div className='collapse-content'>{children}</div>
    </div>
  );
};

export default Collapse;
