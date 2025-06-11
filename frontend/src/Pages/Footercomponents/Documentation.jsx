import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";

const Documentation = () => {
  return (
    <ThemedPageLayout title="Documentation">
      <section>
        <p>
          Welcome to our Documentation! Here you will find all the information you need to get started with our services, understand key features, and troubleshoot common issues. Whether you're a beginner or an experienced user, this guide will help you make the most of what we offer.
        </p>
      </section>

      <section>
        <h2>Getting Started</h2>
        <p>Learn how to set up your account and begin using our platform quickly and easily.</p>
      </section>

      <section>
        <h2>Features</h2>
        <p>Explore the powerful features available and how to use them effectively.</p>
      </section>

      <section>
        <h2>Tutorials & Examples</h2>
        <p>Step-by-step guides and examples to help you accomplish your goals.</p>
      </section>

      <section>
        <h2>FAQs & Troubleshooting</h2>
        <p>Find answers to common questions and solutions to common problems.</p>
      </section>

      <section>
        <h2>Contact & Support</h2>
        <p>If you need further assistance, please reach out to our support team at support@yourcompany.com.</p>
      </section>
    </ThemedPageLayout>
  );
};

export default Documentation;
