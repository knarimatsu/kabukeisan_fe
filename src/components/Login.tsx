import { signIn } from "next-auth/react";

const Login = () => {
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn(undefined, { callbackUrl: "/" })}>
                サインイン
            </button>
            <button onClick={() => signIn("google")}>Google</button>
        </>
    );
};

export default Login;
