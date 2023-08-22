/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast } from "react-toastify";

export const updateProfile = (data, id, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    dispatch({ type: "UPDATE_RECIPE_PENDING" });
    const result = await axios.put(
      import.meta.env.VITE_BACKEND_URL + `/workers/update/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
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
    const result = await axios.get(
      import.meta.env.VITE_BACKEND_URL + `/home/${id}`,
      { headers }
    );
    dispatch({ payload: result.data.data, type: "GET_PORTFOLIO_SUCCESS" });
  } catch (err) {
    console.error("error", err);
    dispatch({ payload: err.response, type: "GET_PORTFOLIO_FAILED" });

    if (
      err?.response?.data?.message ===
      "Login session expired, please login again"
    ) {
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

export const getHire = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    dispatch({ type: "GET_HIRE_PENDING" });
    const result = await axios.get(
      import.meta.env.VITE_BACKEND_URL + `/home/hire/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(result);
    dispatch({ payload: result.data.data, type: "GET_HIRE_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({
      payload: error.response.data.message,
      type: "GET_HIRE_FAILED",
    });
    toast.error(error.response.data.message);
  }
};

export const getProfileWorker = (id, navigate) => async (dispatch) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        };

        dispatch({ type: "GET_EDIT_WORKER_PENDING" });
        const result = await axios.get(import.meta.env.VITE_BACKEND_URL + `/auth/workers/${id}`, { headers });
        dispatch({ payload: result.data.data, type: "GET_EDIT_WORKER_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "GET_EDIT_WORKER_FAILED" });

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

export const putProfileWorker = (data, id, navigate) => async (dispatch) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
        };

        dispatch({ type: "PUT_WORKER_PENDING" });
        const result = await axios.put(import.meta.env.VITE_BACKEND_URL + `/auth/workers/update/${id}`, data, { headers });
        dispatch({ payload: result.data.data, type: "PUT_WORKER_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "PUT_WORKER_FAILED" });

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

export const postExp = (data, navigate) => async (dispatch) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
        };

        dispatch({ type: "POST_EXP_PENDING" });
        const result = await axios.post(import.meta.env.VITE_BACKEND_URL + `/exp`, data, { headers });
        dispatch({ payload: result.data.data, type: "POST_EXP_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "POST_EXP_FAILED" });

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

export const postPorto = (data, navigate) => async (dispatch) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
        };

        dispatch({ type: "POST_PORTO_PENDING" });
        const result = await axios.post(import.meta.env.VITE_BACKEND_URL + `/porto/workers`, data, { headers });
        dispatch({ payload: result.data.data, type: "POST_PORTO_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "POST_PORTO_FAILED" });

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

export const postSkill = (data, navigate) => async (dispatch) => {
    try {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        };

        dispatch({ type: "POST_SKILL_PENDING" });
        const result = await axios.post(import.meta.env.VITE_BACKEND_URL + `/skill/workers`, data, { headers });
        dispatch({ payload: result.data.data, type: "POST_SKILL_SUCCESS" });
    } catch (err) {
        console.error("error", err);
        dispatch({ payload: err.response, type: "POST_SKILL_FAILED" });

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
