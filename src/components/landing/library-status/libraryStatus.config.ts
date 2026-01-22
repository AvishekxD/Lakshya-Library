
export const OPEN_HOUR = 8; // 8 AM
export const CLOSE_HOUR = 22; // 10 PM

export type LibraryStatus =
  | "open"
  | "closing-soon"
  | "closed"
  | "opening-soon";

export const STATUS_STYLES: Record<
  LibraryStatus,
  {
    text: string;
    container: string;
    dot: string;
    ping: string;
  }
> = {
  open: {
    text: "Library is Open Now • 08:00 AM — 10:00 PM",
    container:
      "-mx-24 bg-green-50 border-green-200 dark:border-green-600/70 text-green-700/80 dark:bg-green-600/20 dark:text-green-400/90",
    dot: "bg-green-500",
    ping: "bg-green-400",
  },
  "closing-soon": {
    text: "Closing Soon • 10:00 PM",
    container:
      "bg-amber-50 border-amber-200 dark:border-amber-500/50 text-amber-700 dark:bg-amber-800/10 dark:text-amber-600",
    dot: "bg-amber-500",
    ping: "bg-amber-400",
  },
  closed: {
    text: "Library is Closed • Opens at 08:00 AM",
    container:
      "-mx-24 bg-red-50 border-red-200 dark:border-red-600/40 text-red-700 dark:bg-red-800/10 dark:text-red-600/90",
    dot: "bg-red-500",
    ping: "bg-red-400",
  },
  "opening-soon": {
    text: "Opening Soon • 08:00 AM",
    container:
      "bg-blue-50 border-blue-200 dark:border-blue-600/40 text-blue-700 dark:bg-blue-600/10 dark:text-blue-700",
    dot: "bg-blue-500",
    ping: "bg-blue-400",
  },
};
