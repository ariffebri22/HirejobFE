const initialState = {
  data: [],
  errorMessage: "",
  isLoading: false,
  isError: false,
};

const hireReducer = (state = initialState, action) => {
  if (action.type === "GET_HIRE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "GET_HIRE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "GET_HIRE_FAILED") {
    return {
      ...state,
      data: null,
      errorMessage: action.payload,
      isLoading: false,
      isError: true,
    };
  } else {
    return state;
  }
};

export default hireReducer;
