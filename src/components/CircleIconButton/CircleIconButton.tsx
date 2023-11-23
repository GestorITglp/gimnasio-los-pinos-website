import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FC, HTMLProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props extends HTMLProps<HTMLAnchorElement> {
  icon: IconDefinition;
}

const CircleIconButton: FC<Props> = (props) => {
  const { icon, ...anchorProps } = props;
  return (
    <>
      {/* @ts-ignore */}
      <Link
        className='btn btn-sm btn-circle text-white bg-dark-green-100 hover:bg-white hover:text-dark-green-100 hover:border-white'
        {...anchorProps}
      >
        <FontAwesomeIcon icon={icon} />
      </Link>
    </>
  );
};

export default CircleIconButton;
