"use client";

import LoginRegisterForm from "../utils/components/loginRegisterForm";
import login from "../utils/login";

const Login = () => {
  return (
    <LoginRegisterForm loginRegisterHeader="Login" handleSubmit={login} loginType="admin" />
  );
};

export default Login;
