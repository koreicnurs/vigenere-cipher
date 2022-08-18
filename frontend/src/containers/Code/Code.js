import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import './Code.css';
import {encodeData} from "../../store/actions/codeActions";

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

    const onSubmitHandler = async e => {
        e.preventDefault();
        await dispatch(encodeData({
            'encode': code.encode,
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
                value={decode}
                onChange={onInputChange}
                placeholder="Decode"
            />
            <Button className='btn-form' variant="contained" type='submit' onClick={onSubmitHandler}>Encode</Button>
            <Button variant="outlined" type='submit' >Decode</Button>
        </>
    );
};

export default Code;