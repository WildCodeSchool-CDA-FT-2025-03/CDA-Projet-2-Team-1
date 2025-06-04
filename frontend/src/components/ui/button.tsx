import * as React from 'react';

import { cn } from '@/lib/utils';
import { Link, LinkProps } from 'react-router';

const ButtonStyle =
  'w-full px-4 py-2 bg-main text-white rounded cursor-pointer text-base hover:opacity-90 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2';

const Button = ({ className, type, ...props }: React.ComponentProps<'button'>) => {
  return <button type={type} className={cn(ButtonStyle, className)} {...props} />;
};
Button.displayName = 'Button';

const ButtonLink = ({ className, ...props }: LinkProps) => {
  return (
    <Link className={cn(`inline-block text-center ${ButtonStyle}`, className)} {...props}></Link>
  );
};

export { Button, ButtonLink };
