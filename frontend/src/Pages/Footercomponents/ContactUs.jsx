import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";

const ContactUs = () => {
  return (
    <ThemedPageLayout title="Contact Us">
      <p>
        Got questions or feedback? Reach out at <a className="text-blue-400 hover:underline" href="mailto:support@example.com">support@example.com</a>
      </p>
    </ThemedPageLayout>
  );
};

export default ContactUs;
