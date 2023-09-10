const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const putExpReducer = (state = initialState, action) => {
    if (action.type === "PUT_EXP_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "PUT_EXP_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "PUT_EXP_FAILED") {
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

export default putExpReducer;
