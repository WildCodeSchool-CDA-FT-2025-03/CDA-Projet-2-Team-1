import { DayPicker } from 'react-day-picker';
import { cn } from '@/lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('h-full flex flex-col', className)}
      classNames={{
        root: 'w-full h-full flex flex-col',
        months: 'flex-1 flex flex-col',
        month: 'flex-1 flex flex-col space-y-4',
        caption: 'w-full flex h-12',
        caption_label: 'mx-auto text-xl font-semibold text-gray-800 lending-none',
        nav: 'flex gap-2 items-center ml-auto w-8 h-8',
        nav_button:
          'w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors',
        nav_button_previous: '',
        nav_button_next: '',
        table: 'w-full h-full border-collapse',
        head: '',
        head_row: 'grid grid-cols-7 w-full',
        head_cell: 'text-center py-3 text-sm font-medium text-gray-600 uppercase tracking-wide',
        tbody: 'flex-1',
        row: 'grid grid-cols-7 w-full',
        cell: 'p-1',
        day: 'text-center aspect-square size-[50px] mtext-sm font-medium rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer',
        day_button: 'w-full h-full',
        today: 'bg-blue-100 text-black',
        selected: 'bg-main border-blue-600 text-white hover:bg-main hover:border-blue-700',
        day_disabled:
          'text-gray-300 cursor-not-allowed hover:bg-transparent hover:border-transparent',
        day_hidden: 'invisible',
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
