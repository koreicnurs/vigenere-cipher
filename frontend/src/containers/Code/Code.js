import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {decodeData, encodeData, onChange} from "../../store/actions/codeActions";
import Spinner from "../../components/UI/Spinner/Spinner";
import './Code.css';

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
        <div className='form' style={{display: 'flex', flexDirection: 'column'}}>
            <input
                type="text"
                className="Input"
                name="encode"
                value={encode}
                onChange={e => dispatch(onChange(e.target))}
                placeholder="encode"
            />
            {!password ? (<Button disabled variant="contained" type='submit' onClick={encodeHandler} style={{margin: '0 auto'}}>Encode</Button>)
                : ((<Button variant="contained" type='submit' onClick={encodeHandler} style={{margin: '0 auto'}}>Encode</Button>))}
            <input
                type="text"
                className="Input"
                name="password"
                value={password}
                onChange={e => dispatch(onChange(e.target))}
                placeholder="Password"
            />
            {!password ? (<Button disabled variant="outlined" type='submit' onClick={decodeHandler} style={{margin: '0 auto'}}>Decode</Button>)
                : ((<Button variant="outlined" type='submit' onClick={decodeHandler} style={{margin: '0 auto'}}>Decode</Button>))}

            <input
                type="text"
                className="Input"
                name="decode"
                value={decode}
                onChange={e => dispatch(onChange(e.target))}
                placeholder="Decode"
            />

        </div>
    );
};

export default Code;