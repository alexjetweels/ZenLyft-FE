import { format, getTime, formatDistanceToNow } from 'date-fns';

export function fDate(date: Date | string | number | null, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: Date | string | number | null, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: Date | string | number | null): number | string {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: Date | string | number | null): string {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}