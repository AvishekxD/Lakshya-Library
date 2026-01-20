"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLibraryStatus } from "./useLibraryStatus";
import { STATUS_STYLES } from "./libraryStatus.config";

interface Props {
  delay?: number; // delay before appearing (ms)
}

export default function LibraryStatusBadge({ delay = 800 }: Props) {
  const status = useLibraryStatus();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const styles = STATUS_STYLES[status];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`
            inline-flex items-center gap-2
            px-3 sm:px-4 py-2 my-3
            rounded-full border
            text-xs sm:text-sm font-semibold
            ${styles.container}
          `}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${styles.ping}`}
            />
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${styles.dot}`}
            />
          </span>

          {styles.text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
