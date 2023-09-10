const initialState = {
  data: null,
  message: '',
  isLoading: false,
  isError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_PROFILE_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        message: '',
        isError: false,
      };
    case 'AUTH_LOGIN_SUCCESS':
      return {
        ...state,
        data: null,
        isLoading: false,
        message: action.payload,
        isError: true,
      };

    default:
      return state;
  }
};

export default authReducer;
