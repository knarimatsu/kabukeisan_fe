import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { RadioButtonContent } from "../types/CheckStockContentType";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    ThemeProvider,
    createTheme,
} from "@mui/material";

const RadioButton = ({
    RadioButtonContent,
    register,
}: {
    RadioButtonContent: RadioButtonContent;
    register: UseFormRegister<FieldValues>;
}) => {
    const [selectedValue, setSelectedValue] = useState(
        RadioButtonContent.value1
    );
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value);
    };
    const dark = createTheme({
        palette: {
            mode: "light",
        },
    });
    return (
        <>
            <FormControl className="w-full">
                <FormLabel className="text-lg dark:text-white">
                    {RadioButtonContent.label}
                </FormLabel>
                <RadioGroup
                    row
                    name="radio-button-group"
                    className="mt-3 text-sm mx-auto dark:text-white"
                >
                    <div className="my-auto mr-[16px]">そう思う</div>
                    <FormControlLabel
                        value={RadioButtonContent.value1}
                        control={
                            <Radio name="color" className="dark:text-white" />
                        }
                        label=""
                        {...register(RadioButtonContent.registerName)}
                    />
                    {RadioButtonContent.value2 && (
                        <FormControlLabel
                            value={RadioButtonContent.value2}
                            control={
                                <Radio
                                    name="color"
                                    className="dark:text-white"
                                />
                            }
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value3 && (
                        <FormControlLabel
                            value={RadioButtonContent.value3}
                            control={
                                <Radio
                                    name="color"
                                    className="dark:text-white"
                                />
                            }
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value4 && (
                        <FormControlLabel
                            value={RadioButtonContent.value4}
                            control={
                                <Radio
                                    name="color"
                                    className="dark:text-white"
                                />
                            }
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value5 && (
                        <FormControlLabel
                            value={RadioButtonContent.value5}
                            control={
                                <Radio
                                    name="color"
                                    className="dark:text-white"
                                />
                            }
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    <div className="my-auto mr-[16px]">そう思わない</div>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default RadioButton;
