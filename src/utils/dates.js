export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

/**
 * Returns the number of days in the given date
 *
 * @param {Date} date
 * @returns {number}
 */
export function dateNumberOfDaysInMonth(date) {
  const copy = new Date(new Date(date).setDate(0));
  return copy.getDate();
}

/**
 * Returns an array of all the days in the given date
 *
 * The returned array is padded so the first day (index 0) is always a sunday, and the
 * last day is always saturday. The padding numbers will be negative or greater than the
 * number of days in the given month.
 *
 * @param {Date} date
 * @returns {Array}
 */
export function dateCalendarDays(date) {
  const copy = new Date(new Date(date).setDate(1));
  const offset = copy.getDay();
  copy.setMonth(copy.getMonth() + 1);
  copy.setDate(0);

  const daysInMonth = copy.getDate();
  let totalSquares = ((offset + daysInMonth) / 7 | 0) * 7;
  totalSquares += (offset + daysInMonth) % 7 ? 7 : 0;

  const calendarSquares = [];
  for (let i = 1; i <= totalSquares; i++) {
    calendarSquares.push(i - offset);
  }

  return calendarSquares;
}
