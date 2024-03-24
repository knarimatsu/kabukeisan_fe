import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { RadioButtonContent } from "../../types/CheckStockContentType";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

const RadioButtonList = ({
    RadioButtonContent,
    register,
}: {
    RadioButtonContent: RadioButtonContent;
    register: UseFormRegister<FieldValues>;
}) => {
    return (
        <>
            <FormControl className="w-full">
                <FormLabel className="text-lg dark:text-white">
                    {RadioButtonContent.label}
                </FormLabel>
                <RadioGroup
                    row
                    name="radio-button-group"
                    className="mt-3 mx-auto text-sm dark:text-white"
                >
                    <div className="my-auto sm:mr-[16px]">そう思わない</div>
                    <FormControlLabel
                        value={RadioButtonContent.value1}
                        control={
                            <Radio className="ml-[8px] mr-[-16px] dark:text-white" />
                        }
                        label=""
                        {...register(RadioButtonContent.registerName)}
                    />
                    {RadioButtonContent.value2 && (
                        <FormControlLabel
                            value={RadioButtonContent.value2}
                            control={
                                <Radio className="mr-[-16px] dark:text-white" />
                            }
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value3 && (
                        <FormControlLabel
                            value={RadioButtonContent.value3}
                            control={
                                <Radio className="mr-[-16px] dark:text-white" />
                            }
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value4 && (
                        <FormControlLabel
                            value={RadioButtonContent.value4}
                            control={
                                <Radio className="mr-[-16px] dark:text-white" />
                            }
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value5 && (
                        <FormControlLabel
                            value={RadioButtonContent.value5}
                            control={
                                <Radio className="mr-[-16px] dark:text-white" />
                            }
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    <div className="my-auto mr-[16px]">そう思う</div>
                </RadioGroup>
            </FormControl>
        </>
    );
};

export default RadioButtonList;
