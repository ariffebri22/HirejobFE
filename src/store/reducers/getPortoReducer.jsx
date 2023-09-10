const initialState = {
    data: [],
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const getPortoReducer = (state = initialState, action) => {
    if (action.type === "GET_PORTO_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "GET_PORTO_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "GET_PORTO_FAILED") {
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

export default getPortoReducer;
