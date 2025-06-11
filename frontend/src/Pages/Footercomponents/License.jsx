import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";

const License = () => {
  return (
    <ThemedPageLayout title="License">
      <section>
        <p>
          This page outlines the licensing terms under which you may use our products and services.
        </p>
      </section>

      <section>
        <h2>License Grant</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable license to use our products according to these terms.
        </p>
      </section>

      <section>
        <h2>Restrictions</h2>
        <p>
          You may not modify, distribute, sell, or reverse engineer our products except as expressly authorized.
        </p>
      </section>

      <section>
        <h2>Ownership</h2>
        <p>
          All intellectual property rights remain with us or our licensors.
        </p>
      </section>

      <section>
        <h2>Termination</h2>
        <p>
          This license terminates automatically if you violate any terms. Upon termination, you must cease all use of the products.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For license inquiries, please contact licensing@yourcompany.com.
        </p>
      </section>
    </ThemedPageLayout>
  );
};

export default License;
