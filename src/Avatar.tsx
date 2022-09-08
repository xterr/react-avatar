import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

type AvatarProps = {
  backgroundColor: string,
  color?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string[],
  children: React.ReactNode,
  className?: string,
};

const Avatar: FunctionComponent<AvatarProps> = ({ backgroundColor, color, size = 'sm', children, className, ...rest }) => (
  <span
    { ...rest }
    style={ { backgroundColor } }
    className={ classNames(`avatar avatar-${ size } rounded-circle border-info border cursor-pointer`, className) }
  >
    { children }
  </span>
);

export default Avatar;
