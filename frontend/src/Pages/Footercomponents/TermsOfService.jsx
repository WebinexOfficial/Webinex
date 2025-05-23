import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";

const TermsOfService = () => {
  return (
    <ThemedPageLayout title="Terms of Service">
      <section>
        <p>By using our services, you agree to the terms outlined here. Please read them carefully.</p>
      </section>

      <section>
        <h2>Acceptance of Terms</h2>
        <p>By accessing or using our services, you agree to be bound by these Terms of Service.</p>
      </section>

      <section>
        <h2>User Responsibilities</h2>
        <p>You agree to use our services only for lawful purposes and not to misuse or interfere with the platform.</p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>All content and materials provided are owned by us or our licensors and are protected by intellectual property laws.</p>
      </section>

      <section>
        <h2>Account Termination</h2>
        <p>We reserve the right to suspend or terminate your account if you violate these terms.</p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>We are not liable for damages resulting from your use of our services.</p>
      </section>

      <section>
        <h2>Changes to Terms</h2>
        <p>We may update these Terms at any time. Continued use of the service means you accept the updated terms.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have questions about these Terms, please contact us at support@yourcompany.com.</p>
      </section>
    </ThemedPageLayout>
  );
};

export default TermsOfService;
