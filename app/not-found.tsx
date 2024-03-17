import Link from "next/link";
import React from "react";

/**
 * This is the page that will display if the the route is bad.
 * @param None
 * @returns {React.ReactElement}
 */
export default function NotFound(): React.ReactElement {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
