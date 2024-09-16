import axios from "axios";

export const getAPI = async (url: string, request: any) => {
  try {
    const res = await axios.post(url, request);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (url: string, data: any) => {
  const request = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    body: data,
  };
  try {
    const res = await axios.post(url, request);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// const deleteUser = async (data: any) => {};

// const updateUser = async (data: any) => {};
