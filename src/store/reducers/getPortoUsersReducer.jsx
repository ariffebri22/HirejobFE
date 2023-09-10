const initialState = {
    data: [],
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const getPortoUsersReducer = (state = initialState, action) => {
    if (action.type === "GET_PORTO_USERS_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "GET_PORTO_USERS_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "GET_PORTO_USERS_FAILED") {
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

export default getPortoUsersReducer;
