import { signIn } from "next-auth/react";

export interface ILogin {
    e: React.FormEvent<HTMLFormElement>;
    loginType: string;
    eventId?: string;
}
const login = async ({ e, loginType, eventId }: ILogin) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    await signIn("credentials", {
        email,
        password,
        loginType,
        redirect: loginType === "admin" ? true : false,
        callbackUrl: loginType === "admin" ? "/events" : "/test"
    });
};

export default login