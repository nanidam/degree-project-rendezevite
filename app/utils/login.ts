import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ILogin {
  e: React.FormEvent<HTMLFormElement>;
  loginType: string;
  eventId?: string;
  router: ReturnType<typeof useRouter>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const login = async ({ e, loginType, eventId, router, setErrorMsg }: ILogin) => {
  e.preventDefault();
  const email = e.currentTarget.email.value as string;
  const password = e.currentTarget.password.value as string;

  const result = await signIn("credentials", {
    email,
    password,
    loginType,
    redirect: false,
    eventId,
  });

  if (result?.status === 200 && loginType === "admin") router.push("/events/overview");
  if (result?.status === 200 && loginType === "guest")
    router.push(`/invitation/${eventId}/welcome`);
  if (result?.status === 401 && loginType === "guest")
    setErrorMsg(
      "Either you are not invited to this event or your email or password is incorrect"
    );
  if (result?.status === 401 && loginType === "admin")
    setErrorMsg("Wrong email or password.");
};

export default login;
