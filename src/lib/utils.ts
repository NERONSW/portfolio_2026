import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** Parses a "YYYY-MM" string into a Date pinned to the first day of the month. */
function parseYearMonth(dateStr: string): Date {
  const [yearStr, monthStr] = dateStr.split("-");
  return new Date(Number(yearStr), Number(monthStr) - 1, 1);
}

/** Pluralize a unit value into its abbreviated form ("yr"/"yrs", "mo"/"mos"). */
function pluralize(value: number, singular: string, plural: string): string {
  return value === 1 ? `${value} ${singular}` : `${value} ${plural}`;
}

/**
 * Calculates inclusive month tenure between two "YYYY-MM" bounds.
 * Falls back to the current date when `endDateStr` is null/undefined (current role).
 */
export function calculateTenure(
  startDateStr: string,
  endDateStr?: string | null,
): string {
  const start = parseYearMonth(startDateStr);
  const end = endDateStr ? parseYearMonth(endDateStr) : new Date();

  const totalMonths = Math.max(
    0,
    (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1,
  );

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return pluralize(months, "mo", "mos");
  if (months === 0) return pluralize(years, "yr", "yrs");
  return `${pluralize(years, "yr", "yrs")} ${pluralize(months, "mo", "mos")}`;
}

/**
 * Formats a "YYYY-MM" range into "MMM YYYY — MMM YYYY",
 * rendering "Present" when `endDateStr` is null/undefined.
 */
export function formatPeriod(
  startDateStr: string,
  endDateStr?: string | null,
): string {
  const start = parseYearMonth(startDateStr);
  const startLabel = `${MONTH_LABELS[start.getMonth()]} ${start.getFullYear()}`;

  if (!endDateStr) return `${startLabel} — Present`;

  const end = parseYearMonth(endDateStr);
  const endLabel = `${MONTH_LABELS[end.getMonth()]} ${end.getFullYear()}`;
  return `${startLabel} — ${endLabel}`;
}
