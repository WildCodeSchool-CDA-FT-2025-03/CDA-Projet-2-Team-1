import { ChevronLeft, ChevronRight } from 'lucide-react';

import { DayPicker } from 'react-day-picker';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('h-full flex flex-col', className)}
      classNames={{
        months: 'h-full flex flex-col',
        month: 'h-full flex flex-col',
        caption: 'flex justify-center pt-1 pb-4 relative items-center',
        caption_label: 'text-sm font-medium text-gray-900',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full flex-1 border-collapse space-y-1',
        head_row: 'flex w-full justify-between',
        head_cell: 'text-gray-900 rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2 justify-between',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[#0395d3] hover:text-white',
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-[#0395d3] text-white hover:bg-[#0395d3] hover:text-white focus:bg-[#0395d3] focus:text-white',
        day_today: 'bg-[#0395d3] text-white font-bold',
        day_outside:
          'day-outside text-gray-500 opacity-50 aria-selected:bg-accent/50 aria-selected:text-gray-500 aria-selected:opacity-30',
        day_disabled: 'text-gray-500 opacity-50',
        day_range_middle:
          'aria-selected:bg-[#0395d3] aria-selected:text-white',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

