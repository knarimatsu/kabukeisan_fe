import axios from "axios";
import { CalcData } from "../../types/CalcData";

const calcOnkabuUrl = "/calc-onkabu/";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const calcOnkabu = async (data: CalcData) => {
    const req = {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        withCredentials: true,
        body: data,
    };

    await axios.post(calcOnkabuUrl, req).then((res) => {
        console.log(res);
    });
};
