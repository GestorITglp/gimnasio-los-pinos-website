import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  icon: IconDefinition;
}

const CircleIconButton: FC<Props> = ({ icon }) => {
  return (
    <button className='btn btn-sm btn-circle text-white bg-dark-green-100 hover:bg-white hover:text-dark-green-100 hover:border-white'>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default CircleIconButton;
