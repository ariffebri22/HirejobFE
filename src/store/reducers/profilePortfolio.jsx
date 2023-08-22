const initialState = {
    data: [],
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const getPortfolioReducer = (state = initialState, action) => {
    if (action.type === "GET_PORTFOLIO_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "GET_PORTFOLIO_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "GET_PORTFOLIO_FAILED") {
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

export default getPortfolioReducer;
