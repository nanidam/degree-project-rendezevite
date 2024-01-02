import prisma from "../db";
import { redirect } from "next/navigation";

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
  return (
    <>
      <section>
        <h1>Register Page</h1>
        <form action={handleRegister}>
          <article>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </article>
          <article>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </article>
          <article>
            <button type="submit">Register</button>
          </article>
        </form>
      </section>
    </>
  );
};

export default Register;
