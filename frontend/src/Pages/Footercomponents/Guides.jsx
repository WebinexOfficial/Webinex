import React from "react";
import ThemedPageLayout from "./ThemedPageLayout";

const Guide = () => {
  return (
    <ThemedPageLayout title="Getting Started Guide">
      <section>
        <p>
          This guide will walk you through setting up your first project with our services, from account creation to launch.
        </p>
      </section>

      <section>
        <h2>Prerequisites</h2>
        <ul>
          <li>Registered account with us</li>
          <li>Basic understanding of web technologies</li>
          <li>Access to your domain and hosting (if applicable)</li>
        </ul>
      </section>

      <section>
        <h2>Step 1: Create Your Account</h2>
        <p>Sign up on our platform by providing your basic details and verifying your email address.</p>
      </section>

      <section>
        <h2>Step 2: Choose Your Service Package</h2>
        <p>Select the service plan that fits your needs from our offerings.</p>
      </section>

      <section>
        <h2>Step 3: Provide Project Details</h2>
        <p>Fill out the project brief form with your requirements and goals.</p>
      </section>

      <section>
        <h2>Step 4: Collaborate with Our Team</h2>
        <p>Our team will reach out to you for feedback and revisions during the development phase.</p>
      </section>

      <section>
        <h2>Step 5: Launch and Review</h2>
        <p>After final approval, your project will go live. You can request support or updates anytime.</p>
      </section>

      <section>
        <h2>Next Steps</h2>
        <p>
          For further help, explore our <a href="/documentation">Documentation</a> or contact support.
        </p>
      </section>
    </ThemedPageLayout>
  );
};

export default Guide;
