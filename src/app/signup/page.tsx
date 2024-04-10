"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { UserData } from "../../types/UserData";
import {
    CognitoUserPool,
    CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const CreateUser = () => {
    const { register, handleSubmit } = useForm<UserData>({
        mode: "onSubmit",
    });
    const userPool = new CognitoUserPool({
        UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID as string,
        ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID as string,
    });
    const createUser = (data: UserData) => {
        const emailAttribute = new CognitoUserAttribute({
            Name: "email",
            Value: data.email,
        });
        userPool.signUp(
            data.email,
            data.password,
            [emailAttribute],
            [],
            function (err, result) {
                if (err) {
                    alert(err.message || JSON.stringify(err));
                }
                const cognitoUser = result?.user;
                console.log("user name is " + cognitoUser?.getUsername());
            }
        );
    };
    return (
        <main className="h-screen dark:bg-black dark:text-gray-400">
            <h1 className="text-2xl ">{"恩株計算"}</h1>
            <form
                className="w-96 px-10 py-8 my-4 mx-auto border rounded-lg dark:bg-gray-900"
                onSubmit={handleSubmit(createUser)}
            >
                <label htmlFor="email" className="block my-5">
                    {"取得株数"}
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
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

export default CreateUser;
