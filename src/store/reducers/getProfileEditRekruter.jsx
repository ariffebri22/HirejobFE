const initialState = {
    data: [],
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const getProfileEditRekruter = (state = initialState, action) => {
    if (action.type === "GET_EDIT_REKRUTER_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "GET_EDIT_REKRUTER_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "GET_EDIT_REKRUTER_FAILED") {
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

export default getProfileEditRekruter;
