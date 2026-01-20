"use client";

import { useEffect, useState } from "react";
import {
  CLOSE_HOUR,
  OPEN_HOUR,
  LibraryStatus,
} from "./libraryStatus.config";

function getStatus(): LibraryStatus {
  const now = new Date();
  const time = now.getHours() + now.getMinutes() / 60;

  if (time >= OPEN_HOUR && time < CLOSE_HOUR) {
    if (CLOSE_HOUR - time <= 2) return "closing-soon";
    return "open";
  }

  if (OPEN_HOUR - time <= 2 && time < OPEN_HOUR) {
    return "opening-soon";
  }

  return "closed";
}

export function useLibraryStatus() {
  const [status, setStatus] = useState<LibraryStatus>(getStatus);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getStatus());
    }, 60 * 1000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return status;
}
