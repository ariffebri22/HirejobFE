const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
};

const postSkillReducer = (state = initialState, action) => {
    if (action.type === "POST_SKILL_PENDING") {
        return {
            ...state,
            isLoading: true,
        };
    } else if (action.type === "POST_SKILL_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            errorMessage: "",
            isError: false,
        };
    } else if (action.type === "POST_SKILL_FAILED") {
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

export default postSkillReducer;
