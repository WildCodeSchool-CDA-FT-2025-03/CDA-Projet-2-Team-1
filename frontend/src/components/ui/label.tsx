import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

// This is a reusable label component where the association with a control is handled by the parent component
const Label = forwardRef<ElementRef<'label'>, ComponentPropsWithoutRef<'label'>>(
  ({ className, ...props }, ref) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = 'Label';

export { Label };

