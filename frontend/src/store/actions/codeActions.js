import axiosApi from "../../axiosApi";

export const POST_ENCODE_REQUEST = 'POST_ENCODE_REQUEST';
export const POST_ENCODE_SUCCESS = 'POST_ENCODE_SUCCESS';
export const POST_ENCODE_FAILURE = 'POST_ENCODE_FAILURE';

export const POST_DECODE_REQUEST = 'POST_DECODE_REQUEST';
export const POST_DECODE_SUCCESS = 'POST_DECODE_SUCCESS';
export const POST_DECODE_FAILURE = 'POST_DECODE_FAILURE';

export const postEncodeRequest = () => ({type: POST_ENCODE_REQUEST});
export const postEncodeSuccess = code => ({type: POST_ENCODE_SUCCESS, payload: code});
export const postEncodeFailure = error => ({type: POST_ENCODE_FAILURE, payload: error});

export const postDecodeRequest = () => ({type: POST_DECODE_REQUEST});
export const postDecodeSuccess = code => ({type: POST_DECODE_SUCCESS, payload: code});
export const postDecodeFailure = error => ({type: POST_DECODE_FAILURE, payload: error});

export const encodeData = codeData => {
    return async dispatch => {
        try {
            dispatch(postEncodeRequest());
            const response = await axiosApi.post('/encode', codeData);
            dispatch(postEncodeSuccess(response.data));
        } catch (error) {
            dispatch(postEncodeFailure(error));
            throw error;
        }
    };
};

export const decodeData = codeData => {

    return async dispatch => {
        try {
            dispatch(postDecodeRequest());
            const response = await axiosApi.post('/decode', codeData);
            dispatch(postDecodeSuccess(response.data));
        } catch (error) {
            dispatch(postDecodeFailure(error));
            throw error;
        }
    };
};