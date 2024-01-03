import prisma from "../db";
import { redirect } from "next/navigation";
import "./style.scss";

const Register = async () => {
  const handleRegister = async (data: FormData) => {
    "use server";
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      // Handle the case where the email already exists
      console.log("Email already exists");
      return;
    }

    const response = await prisma.user.create({
      data: {
        email,
        hashedPassword: password,
      },
    });

    console.log(response);
    redirect("/");
  };

  const handleCancel = async () => {
    "use server";
    redirect("/");
  };

  return (
    <>
      <section className="register-container">
        <h1>Register new user</h1>
        <form action={handleRegister}>
          <fieldset>
            <legend>Account Information</legend>
            <article className="register-input-container">
              <label htmlFor="email">Email:</label>
              <input
                className="register-input"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </article>
            <article className="register-input-container">
              <label htmlFor="password">Password:</label>
              <input
                className="register-input"
                type="password"
                id="password"
                name="password"
                placeholder="Choose a password"
                required
              />
            </article>
          </fieldset>
          <article className="btn-container">
            <button className="register-btn" type="submit">
              Register
            </button>
            <button className="cancel-btn" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </article>
        </form>
      </section>
    </>
  );
};

export default Register;
