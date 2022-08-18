import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import './Code.css';
import {decodeData, encodeData} from "../../store/actions/codeActions";

const Code = () => {
    const dispatch = useDispatch();
    const encode = useSelector(state => state.code.encode);
    const decode = useSelector(state => state.code.decode);
    // const loading = useSelector(state => state.contactsCombine.loading);

    const [code, setCode] = useState({
        encode: '',
        password: '',
        decode: ''
    });

    const onInputChange = (e) => {
        const {name, value} = e.target;

        setCode(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const encodeHandler = async e => {
        e.preventDefault();
        await dispatch(encodeData({
            'encode': code.encode,
            'password': code.password
        }));

    };

    const decodeHandler = async e => {
        e.preventDefault();
        await dispatch(decodeData({
            'decode': code.decode,
            'password': code.password
        }));

    };

    return (
        <>
            <input
                type="text"
                className="Input"
                name="encode"
                value={code.encode}
                onChange={onInputChange}
                placeholder="encode"
            />
            <input
                type="text"
                className="Input"
                name="password"
                value={code.password}
                onChange={onInputChange}
                placeholder="Password"
            />
            <input
                type="text"
                className="Input"
                name="decode"
                value={code.decode}
                onChange={onInputChange}
                placeholder="Decode"
            />
            <input
                type="text"
                className="Input"
                name="decode"
                value={encode}
                onChange={onInputChange}
                placeholder="Decode"
            />
            <input
                type="text"
                className="Input"
                name="decode"
                value={decode}
                onChange={onInputChange}
                placeholder="Decode"
            />
            <Button variant="contained" type='submit' onClick={encodeHandler}>Encode</Button>
            <Button variant="outlined" type='submit' onClick={decodeHandler}>Decode</Button>
        </>
    );
};

export default Code;