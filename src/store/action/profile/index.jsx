/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";

export const updateProfile = (data, id, navigate) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        dispatch({ type: "UPDATE_RECIPE_PENDING" });
        const result = await axios.put(import.meta.env.VITE_BACKEND_URL + `/workers/update/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(result);
        dispatch({ payload: result.data, type: "UPDATE_RECIPE_SUCCESS" });
        toast.success("Update Recipe Successfully");
        setTimeout(() => {}, 2000);
    } catch (error) {
        console.log(error);
        dispatch({
            payload: error.response.data.message,
            type: "UPDATE_RECIPE_FAILED",
        });
        toast.error(error.response.data.message);
    }
};

export const getPortfolio = (id, navigate) => async (dispatch) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        };

        dispatch({ type: "GET_PORTFOLIO_PENDING" });
        const result = await axios.get(import.meta.env.VITE_BACKEND_URL + `/home/${id}`, { headers });
        dispatch({ payload: result.data.data, type: "GET_PORTFOLIO_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "GET_PORTFOLIO_FAILED" });

        if (err?.response?.data?.message === "Login session expired, please login again") {
            toast.error(err.response.data.message, {
                autoClose: 3000,
            });
            setTimeout(() => {
                localStorage.clear();
                navigate("/login");
            }, 4000);
        }
    }
};
