import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('h-full p-4', className)}
      classNames={{
        months: 'h-full',
        nav: 'flex justify-between',
        button_previous:
          'flex items-center justify-center size-12 rounded-md hover:bg-gray-100 transition-colors',
        button_next:
          'flex items-center justify-center size-12 rounded-md hover:bg-gray-100 transition-colors',
        month: 'h-[calc(100%-3rem)] flex flex-col',
        month_caption: 'pb-2 text-center font-bold border-b border-gray-200',
        month_grid: 'h-full mt-4',
        weekdays: 'text-sm text-gray-700',
        week: 'text-center text-sm font-medium',
        day: 'size-12 rounded-md hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer',
        day_button: 'w-full h-full',
        today: 'bg-blue-100',
        selected: 'bg-main text-white hover:bg-main',
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
