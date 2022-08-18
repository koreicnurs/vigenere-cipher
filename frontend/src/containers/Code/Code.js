import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {decodeData, encodeData, onChange} from "../../store/actions/codeActions";
import './Code.css';
import Spinner from "../../components/UI/Spinner/Spinner";

const Code = () => {
    const dispatch = useDispatch();
    const encode = useSelector(state => state.code.encode);
    const decode = useSelector(state => state.code.decode);
    const password = useSelector(state => state.code.password);
    const loading = useSelector(state => state.code.loading);

    const encodeHandler = async e => {
        e.preventDefault();
        await dispatch(encodeData({
            'encode': encode,
            'password': password
        }));

    };

    const decodeHandler = async e => {
        e.preventDefault();
        await dispatch(decodeData({
            'decode': decode,
            'password': password
        }));

    };

    return loading ? (<Spinner/>) : (
        <div className='form'>
            <input
                type="text"
                className="Input"
                name="encode"
                value={encode}
                onChange={e => dispatch(onChange(e.target))}
                placeholder="encode"
            />
            <input
                type="text"
                className="Input"
                name="password"
                value={password}
                onChange={e => dispatch(onChange(e.target))}
                // onChange={onInputChange}
                placeholder="Password"
            />
            <input
                type="text"
                className="Input"
                name="decode"
                value={decode}
                onChange={e => dispatch(onChange(e.target))}
                // onChange={onInputChange}
                placeholder="Decode"
            />
            <Button variant="contained" type='submit' onClick={encodeHandler}>Encode</Button>
            <Button variant="outlined" type='submit' onClick={decodeHandler}>Decode</Button>
        </div>
    );
};

export default Code;