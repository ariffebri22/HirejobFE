const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const postExpReducer = (state = initialState, action) => {
    if (action.type === "POST_EXP_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "POST_EXP_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "POST_EXP_FAILED") {
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

export default postExpReducer;
