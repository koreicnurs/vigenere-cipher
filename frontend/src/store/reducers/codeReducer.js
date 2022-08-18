import {POST_CODE_FAILURE, POST_CODE_REQUEST, POST_CODE_SUCCESS} from "../actions/codeActions";

const initialState = {
    encode: '',
    password: '',
    decode: '',
    loading: false,
    error: null
};

const codeReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CODE_REQUEST:
            return {...state, loading: true};
        case POST_CODE_SUCCESS:
            return {...state, loading: false, decode: action.payload};
        case POST_CODE_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default codeReducer;