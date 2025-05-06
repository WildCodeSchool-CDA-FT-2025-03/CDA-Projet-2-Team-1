import { ChevronLeft, ChevronRight } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DayPicker } from 'react-day-picker';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      aria-label="Sélecteur de date"
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-sm font-medium text-[#027FB5]',
        nav: 'flex items-center gap-1',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'size-7 bg-transparent p-0 opacity-50 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#027FB5]'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-x-1',
        head_row: 'flex',
        head_cell: 'text-[#027FB5] rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#027FB5] [&:has([aria-selected])]:bg-[#027FB5] [&:has([aria-selected])]:text-white',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-8 p-0 font-normal aria-selected:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#027FB5]'
        ),
        day_range_start:
          'day-range-start aria-selected:bg-[#027FB5] aria-selected:text-white',
        day_range_end:
          'day-range-end aria-selected:bg-[#027FB5] aria-selected:text-white',
        day_selected:
          'bg-[#027FB5] text-white hover:bg-[#027FB5] hover:text-white focus:bg-[#027FB5] focus:text-white',
        day_today: 'bg-[#027FB5] text-white',
        day_outside: 'text-gray-400 opacity-50',
        day_disabled: 'text-gray-400 opacity-50',
        day_range_middle: 'aria-selected:bg-[#027FB5] aria-selected:text-white',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft
            className={cn('size-4', className)}
            aria-label="Mois précédent"
            role="img"
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight
            className={cn('size-4', className)}
            aria-label="Mois suivant"
            role="img"
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
