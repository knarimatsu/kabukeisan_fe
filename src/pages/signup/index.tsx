import React from "react";
import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { createUser } from "../../app/api";

type InputUserInfo = {
    nickname: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    content: string;
};

const SignUp = () => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InputUserInfo>();

    const onSubmit: SubmitHandler<InputUserInfo> = (data) => {
        console.log(data);
        createUser("http://localhost:8000/account/signup/", data);
    };

    return (
        <div className="my-20 mx-auto w-96">
            <h1 className="mx-auto w-20 text-xl font-bold">
                {t("index.title.signup")}
            </h1>
            <form className="mx-auto w-80 " onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    type="text"
                    sx={{ width: "100%", margin: "15px 0" }}
                    placeholder="nickname"
                    {...register("nickname")}
                />
                <TextField
                    type="text"
                    sx={{ width: "100%", margin: "15px 0" }}
                    variant="outlined"
                    placeholder="email"
                    {...register("email")}
                />
                <TextField
                    type="password"
                    sx={{ width: "100%", margin: "15px 0" }}
                    variant="outlined"
                    {...register("password")}
                />
                <TextField
                    type="password"
                    sx={{ width: "100%", margin: "15px 0" }}
                    variant="outlined"
                    {...register("passwordConfirmation")}
                />
                <Button
                    type="submit"
                    variant="contained"
                    className="mx-auto bg-[#2e7d32] hover:bg-[#1b5e20]"
                >
                    {t("button.register")}
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
