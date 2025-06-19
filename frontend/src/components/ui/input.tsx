import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-main bg-background px-3 py-2 text-base ring-offset-background file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-main disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

type InputLabelProps = React.ComponentProps<'input'> & {
  label: string;
  isError?: boolean;
  msg?: string;
};

const InputLabel = React.forwardRef<HTMLInputElement, InputLabelProps>(
  ({ className, type, id, label, isError, msg, ...props }, ref) => {
    return (
      <div className="w-full mb-4">
        <label htmlFor={id}>{label}</label>
        <Input id={id} type={type} className={className} ref={ref} {...props} />
        {isError && <p className="text-red-600">{msg}</p>}
      </div>
    );
  }
);
InputLabel.displayName = 'InputLabel';

export { Input, InputLabel };
