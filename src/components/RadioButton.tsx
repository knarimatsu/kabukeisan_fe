import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { RadioButtonContent } from "../types/CheckStockContentType";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";

const RadioButton = ({
    RadioButtonContent,
    register,
}: {
    RadioButtonContent: RadioButtonContent;
    register: UseFormRegister<FieldValues>;
}) => {
    return (
        <>
            <FormControl>
                <FormLabel className="text-lg">
                    {RadioButtonContent.label}
                </FormLabel>
                <RadioGroup row name="radio-button-group" className="text-sm">
                    <div className="my-auto mr-[16px]">そう思う</div>
                    <FormControlLabel
                        value={RadioButtonContent.value1}
                        control={<Radio />}
                        label=""
                        {...register(RadioButtonContent.registerName)}
                    />
                    {RadioButtonContent.value2 && (
                        <FormControlLabel
                            value={RadioButtonContent.value2}
                            control={<Radio />}
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value3 && (
                        <FormControlLabel
                            value={RadioButtonContent.value3}
                            control={<Radio />}
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value4 && (
                        <FormControlLabel
                            value={RadioButtonContent.value4}
                            control={<Radio />}
                            label=""
                            {...register(RadioButtonContent.registerName)}
                        />
                    )}
                    {RadioButtonContent.value5 && (
                        <FormControlLabel
                            value={RadioButtonContent.value5}
                            control={<Radio />}
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
