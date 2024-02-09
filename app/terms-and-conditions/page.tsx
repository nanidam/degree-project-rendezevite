"use client";

import "./style.scss";

const TermsAndConditions = () => {
  return (
    <section className="terms-container">
      <h2 className="terms-header">Terms & Conditions</h2>
      <article className="terms-wrapper">
        <ol className="terms-list">
          <li className="term">
            <b>Personal Data:</b> We will collect and store your email address and your
            guests&apos; email addresses in our secure database.
          </li>
          <li className="term">
            <b>Use of Data:</b> The collected information will be used solely for the
            purpose of managing and coordinating the event for which you are registering.
          </li>
          <li className="term">
            <b>Confidentiality:</b> Your personal data will be treated with utmost
            confidentiality and will not be shared with third parties without your explicit
            consent.
          </li>
          <li className="term">
            <b>Communication:</b> We may use your email address to communicate relevant
            information about the event, updates, or important announcements.
          </li>
          <li className="term">
            <b>Security Measures:</b> We have implemented security measures to protect the
            stored data from unauthorized access, ensuring the safety of your information.
          </li>
          <li className="term">
            <b>Data Ownership:</b> You retain ownership of your personal data. We will not
            use it for any purpose other than what is explicitly stated in these terms.
          </li>
        </ol>
        <p className="term-text">
          Please review these terms carefully. If you do not agree, refrain from providing
          your email address and those of your guests for registration.
        </p>
        <p className="term-text">Thank you for your understanding and cooperation.</p>
        <p className="term-text">
          <b>Contact:</b>{" "}
          <a className="app-email-link" href="mailto:rendezevite@gmail.com">
            rendezevite@gmail.com
          </a>
        </p>

        <button
          className="terms-back-btn"
          onClick={() => window.history.back()}
          aria-label="Go back to the previous page"
        >
          Back
        </button>
      </article>
    </section>
  );
};

export default TermsAndConditions;
