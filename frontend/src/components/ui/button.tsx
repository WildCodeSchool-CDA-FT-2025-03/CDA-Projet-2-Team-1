import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Link, LinkProps } from 'react-router'; // ⚠️ ajusté si tu utilises react-router-dom

// Définition des variantes (design system)
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-main text-white hover:opacity-90',
        ghost: 'bg-transparent text-main hover:bg-muted',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-sm',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Typage des props
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// Composant Button avec variant + size
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  }
);
Button.displayName = 'Button';

// Composant Link stylé comme un bouton
const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => {
  return <Link ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
ButtonLink.displayName = 'ButtonLink';

// ✅ On garde exactement les mêmes exports qu'avant
export { Button, ButtonLink };
