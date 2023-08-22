const initialState = {
  data: null,
  message: '',
  isLoading: false,
  isError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_PENDING':
    case 'AUTH_REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'AUTH_LOGIN_SUCCESS':
    case 'AUTH_REGISTER_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        message: '',
        isError: false,
      };
    case 'AUTH_LOGIN_FAILED':
    case 'AUTH_REGISTER_FAILED':
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

export default authReducer