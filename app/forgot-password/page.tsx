import "./style.scss";

const ForgotPassword = () => {
  return (
    <section className="forgot-password-container">
      <h1>Forgot Password</h1>
      <p>Enter your email address to reset your password. You will recieve an email.</p>
      <label htmlFor="forgot-password">Email:</label>
      <input
        className="forgot-input"
        type="email"
        id="forgot-password"
        name="forgot-password"
        placeholder="Your email"
      />
      <button className="reset-password-btn" type="submit">
        Reset Password
      </button>
    </section>
  );
};

export default ForgotPassword;
