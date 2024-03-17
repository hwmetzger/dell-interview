import ComponentTwo from "@/packages/shared-components/component-2/component-2";
import styles from "./styles.module.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dell Wireframe Interview - Page 2",
  description: "By: Hank Metzger",
};

/**
 * This is the page that will be displayed at route "/page2"
 * @param None
 * @returns {React.ReactElement}
 */
export default function Page(): React.ReactElement {
  return (
    <div>
      <div className="text-2xl" data-testid="page-title">
        Page Two
      </div>
      <div className="mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac metus
        et erat finibus efficitur ut nec urna. Nunc dignissim leo lorem, quis
        pharetra nulla pretium tempus. Nulla aliquet lacus vitae libero
        vestibulum dapibus. Donec eget velit quis nisi egestas gravida vitae non
        arcu. Aenean ut sagittis erat. Maecenas vel lacus sollicitudin,
        hendrerit nisl eget, sodales erat. Nunc vel aliquet nisi. Nullam quis
        lectus sit amet sem dignissim pretium id non risus.
      </div>
      <div className={styles.textRed}>
        <ComponentTwo />
      </div>
    </div>
  );
}
