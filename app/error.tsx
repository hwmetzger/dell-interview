"use client";

import { useEffect } from "react";

/**
 * This is the page that will display if an error occurs on the page.
 * @param params {error: Error & { digest?: string }; reset: () => void;}
 * @returns {React.ReactElement | null}
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
