import axios from "axios";
import { toast } from "react-toastify";

export const authLogin = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_LOGIN_PENDING" });
        const result = await axios.post(import.meta.env.VITE_BACKEND_URL + "/auth/workers/login", data);
        console.log(result);
        localStorage.setItem("token", result.data.users.token);

        dispatch({ payload: result.data, type: "AUTH_LOGIN_SUCCESS" });
        toast.success("Login Successfully !");

        setTimeout(() => {
            navigate("/");
        }, 2000);
    } catch (error) {
        console.log("error");
        dispatch({
            payload: error.response?.data?.message,
            type: "AUTH_LOGIN_FAILED",
        });
        toast.error(error.response.data.message);
    }
};

export const authRegister = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_REGISTER_PENDING" });
        const result = await axios.post(import.meta.env.VITE_BACKEND_URL + "/auth/workers/register", data);
        console.log(result);
        dispatch({
            type: "AUTH_REGISTER_SUCCESS",
            payload: result.data,
        });
        toast.success("Register Successfully !");
        setTimeout(() => {
            navigate("/login-work");
        }, 2000);
    } catch (error) {
        console.log(error);
        dispatch({
            type: "AUTH_REGISTER_FAILED",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
};
