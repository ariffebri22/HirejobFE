import axios from "axios";
import { toast } from "react-toastify";

export const actionRegister = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_REGISTER_PENDING" });
        const result = await axios.post(import.meta.env.VITE_BACKEND_URL + `/auth/recruiter/register`, data);
        console.log(result);
        dispatch({ payload: result.data, type: "AUTH_REGISTER_SUCCESS" });
        toast.success("Register Berhasil Silahkan Cek Email");
        setTimeout(() => {
            navigate("/login-recruiter");
        }, 2000);
    } catch (error) {
        console.log(error);
        dispatch({
            payload: error.response.data.message,
            type: "AUTH_LOGIN_FAILED",
        });
        toast.error(error.response.data.message);
    }
};

export const actionLogin = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: "AUTH_LOGIN_PENDING" });
        const result = await axios.post(import.meta.env.VITE_BACKEND_URL + `/auth/recruiter/login`, data);
        localStorage.setItem("token", result.data.users.token);
        dispatch({ payload: result.data, type: "AUTH_LOGIN_SUCCESS" });
        console.log("hasil", result);
        toast.success("Login Berhasil");
        setTimeout(() => {
            navigate("/sort");
        }, 2000);
    } catch (error) {
        console.log(error);
        dispatch({
            payload: error.response.data.message,
            type: "AUTH_LOGIN_FAILED",
        });
        toast.error(error.response.data.message);
    }
};
