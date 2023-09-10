const initialState = {
    data: [],
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const putProfileEditRekruter = (state = initialState, action) => {
    if (action.type === "PUT_REKRUTER_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "PUT_REKRUTER_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "PUT_REKRUTER_FAILED") {
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

export default putProfileEditRekruter;
