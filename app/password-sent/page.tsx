"use client";

const PasswordSent = () => {
  return (
    <>
      <h1>Password sent!</h1>
      <p>
        You will receive an email with your password. It can take a couple of minutes before
        you recieve it.
      </p>
      <button type="button" onClick={() => (window.location.href = "/login")}>
        To login
      </button>
    </>
  );
};

export default PasswordSent;
