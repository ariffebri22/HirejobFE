const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const deletePortoReducer = (state = initialState, action) => {
    if (action.type === "DELETE_PORTO_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "DELETE_PORTO_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "DELETE_PORTO_FAILED") {
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

export default deletePortoReducer;
