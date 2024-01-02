import prisma from "../db";

export default async function Testing() {
  console.log("hello");

  const newUser = await prisma.user.create({
    data: {
      email: "hakllå",
      hashedPassword: "test",
    },
  });
  return (
    <>
      <h1>About page</h1>
    </>
  );
}
