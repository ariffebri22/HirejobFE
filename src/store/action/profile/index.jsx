import axios from 'axios';
import { toast } from 'react-toastify';

export const updateProfile = (data, id, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    dispatch({ type: 'UPDATE_RECIPE_PENDING' });
    const result = await axios.put(
      import.meta.env.VITE_BACKEND_URL + `/workers/update/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(result);
    dispatch({ payload: result.data, type: 'UPDATE_RECIPE_SUCCESS' });
    toast.success('Update Recipe Successfully', {
      autoClose: 1500,
    });
   
  } catch (error) {
    console.log(error);
    dispatch({
      payload: error.response.data.message,
      type: 'UPDATE_RECIPE_FAILED',
    });
    toast.error(error.response.data.message, {
      autoClose: 2000,
    });
  }
};
