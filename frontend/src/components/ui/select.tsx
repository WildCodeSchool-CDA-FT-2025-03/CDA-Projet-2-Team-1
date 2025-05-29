import * as React from 'react';

import { cn } from '@/lib/utils';

type SelectProps = React.ComponentProps<'select'> & { children: React.ReactNode };

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ className, children, ...props }) => {
    return (
      <select
        className={cn(
          'flex h-10 w-full rounded-md border border-main bg-background px-3 py-2 text-base ring-offset-background file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-main disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';

type SelectLabelProps = SelectProps & { label: string };

const SelectLabel = React.forwardRef<HTMLInputElement, SelectLabelProps>(
  ({ className, id, label, children, ...props }) => {
    return (
      <div className="mb-4">
        <label htmlFor={id}>{label}</label>
        <Select id={id} className={className} {...props}>
          {children}
        </Select>
      </div>
    );
  }
);

SelectLabel.displayName = 'SelectLabel';
export { Select, SelectLabel };
