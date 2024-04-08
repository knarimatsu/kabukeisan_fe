"use client";

import {
    CognitoUserPool,
    AuthenticationDetails,
    CognitoUser,
} from "amazon-cognito-identity-js";
import { useForm } from "react-hook-form";

type UserData = {
    username: string;
    password: string;
};
type PoolData = {
    UserPoolId: string;
    ClientId: string;
};

const Login = () => {
    const poolData: PoolData = {
        UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID as string,
        ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID as string,
    };
    console.log(poolData);
    const userPool = new CognitoUserPool(poolData);
    const { register, handleSubmit } = useForm<UserData>({
        mode: "onSubmit",
    });
    const login = (data: UserData): void => {
        const authenticationData = {
            Username: data.username,
            Password: data.password,
        };
        const authenticationDetails = new AuthenticationDetails(
            authenticationData
        );
        const userData = {
            Username: data.username,
            Pool: userPool,
        };
        const cognitoUser = new CognitoUser(userData);

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                console.log(result.getAccessToken().getJwtToken());
            },
            onFailure: function (err) {
                alert(err.message || JSON.stringify(err));
            },
            newPasswordRequired: function (
                userAttributes,
                requiredAttributes
            ) {},
        });
    };
    return (
        <main className="h-screen dark:bg-black dark:text-gray-400">
            <h1 className="text-2xl ">{"恩株計算"}</h1>
            <form
                className="w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                onSubmit={handleSubmit(login)}
            >
                <label htmlFor="username" className="block my-5">
                    {"取得株数"}
                    <input
                        id="username"
                        type="text"
                        {...register("username")}
                        className="block border w-full h-9 outline-none p-3 rounded-md dark:bg-gray-700"
                    />
                </label>
                <label htmlFor="password" className="block my-5">
                    {"取得株価"}
                    <input
                        id="password"
                        type="password"
                        {...register("password")}
                        className="block border w-full h-9 outline-none p-3 rounded-md dark:bg-gray-700"
                    />
                </label>
                <div className="mx-auto w-1/3">
                    <input
                        type="submit"
                        className="block bg-[#2e7d32] hover:bg-[#1b5e20] text-white w-14 py-1 px-3 rounded w-16 mx-auto my-5"
                        value={"送信"}
                    />
                </div>
            </form>
        </main>
    );
};

export default Login;
