import * as React from 'react';

import { cn } from '@/lib/utils';

const Button = React.forwardRef<HTMLInputElement, React.ComponentProps<'button'>>(
  ({ className, type, ...props }) => {
    return (
      <button
        type={type}
        className={cn(
          'w-full px-4 py-2 bg-main text-white rounded cursor-pointer text-base hover:opacity-90 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2',
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
