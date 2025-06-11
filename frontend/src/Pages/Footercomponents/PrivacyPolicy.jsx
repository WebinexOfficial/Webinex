import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";

const PrivacyPolicy = () => {
  return (
    <ThemedPageLayout title="Privacy Policy">
      <section>
        <p>Your privacy is important to us. Learn how we collect, use, and protect your information.</p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and usage data when you use our services.</p>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use your data to improve our services, communicate with you, and comply with legal obligations.</p>
      </section>

      <section>
        <h2>Cookies and Tracking Technologies</h2>
        <p>We use cookies to enhance your experience and gather analytics about website usage.</p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. Contact us if you wish to exercise these rights.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have questions about this policy, please reach out to privacy@yourcompany.com.</p>
      </section>
    </ThemedPageLayout>
  );
};

export default PrivacyPolicy;
