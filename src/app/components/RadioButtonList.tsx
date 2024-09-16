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
          <FormControlLabel
            value={RadioButtonContent.value1}
            control={
              <Radio
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 40,
                  },
                }}
                className="dark:text-white"
              />
            }
            label=""
            {...register(RadioButtonContent.registerName)}
          />
          {RadioButtonContent.value2 && (
            <FormControlLabel
              value={RadioButtonContent.value2}
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 35,
                    },
                  }}
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
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 30,
                    },
                  }}
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
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 35,
                    },
                  }}
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
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 40,
                    },
                  }}
                  className="dark:text-white"
                />
              }
              label=""
              {...register(RadioButtonContent.registerName)}
            />
          )}
        </RadioGroup>
        <section className="grid grid-cols-2">
          <div className="my-auto text-left">そう思わない</div>
          <div className="my-auto text-right">そう思う</div>
        </section>
      </FormControl>
    </>
  );
};

export default RadioButtonList;
