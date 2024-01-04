const ForgotPassword = () => {
  return (
    <section>
      <h1>Forgot Password</h1>
      <p>Enter your email address to reset your password. You will recieve an email.</p>
      <label htmlFor="forgot-password">
        Email:
        <input type="email" id="forgot-password" name="forgot-password" />
      </label>
      <button type="submit">Reset Password</button>
    </section>
  );
};

export default ForgotPassword;
