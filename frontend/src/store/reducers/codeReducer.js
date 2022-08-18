import {
    ONCHANGE,
    POST_DECODE_FAILURE,
    POST_DECODE_REQUEST,
    POST_DECODE_SUCCESS,
    POST_ENCODE_FAILURE,
    POST_ENCODE_REQUEST,
    POST_ENCODE_SUCCESS
} from "../actions/codeActions";

const initialState = {
    encode: '',
    password: '',
    decode: '',
    loading: false,
    error: null
};

const codeReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_ENCODE_REQUEST:
            return {...state, loading: true};
        case POST_ENCODE_SUCCESS:
            return {...state, loading: false, decode: action.payload};
        case POST_ENCODE_FAILURE:
            return {...state, loading: false, error: action.payload};
        case POST_DECODE_REQUEST:
            return {...state, loading: true};
        case POST_DECODE_SUCCESS:
            return {...state, loading: false, encode: action.payload};
        case POST_DECODE_FAILURE:
            return {...state, loading: false, error: action.payload};
        case ONCHANGE:
            return {...state, [action.payload.name]: action.payload.value};
        default:
            return state;
    }
};

export default codeReducer;