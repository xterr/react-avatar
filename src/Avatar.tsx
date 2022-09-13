import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

type AvatarProps = {
  backgroundColor?: string,
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string[],
  active?: boolean,
  disabled?: boolean,
  rounded?: boolean,
  tag?: React.ReactNode,
  children: React.ReactNode,
  className?: string,
};

const Avatar: FunctionComponent<AvatarProps> = ({
  backgroundColor,
  color= 'primary',
  size = 'md',
  active= false,
  disabled = false,
  rounded = false,
  className,
  tag = 'span',
  children,
  ...rest
}) => {
  const Tag = tag as React.ElementType;
  return (
    <Tag
      { ...rest }
      style={ { backgroundColor } }
      className={ classNames(
        `avatar avatar-${ size } avatar-${ color }`,
        { 'rounded-circle': rounded },
        { 'opacity-25': disabled },
        { active },
        className
      )}
    >
      { children }
    </Tag>
  );
};

export default Avatar;
