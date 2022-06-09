import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { createUser } from "../GlobalState";

const SignIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formSchema = yup.object().shape({
        email: yup.string().email().required('This field cannot be empty'),
        password: yup.string().required('This field cannot be empty'),
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSubmit = handleSubmit(async (value) => {
        console.log(value);

        const { email, password } = value;
        const url = 'http://localhost:1010/api/user/signIn';

        await axios.post(url, { email, password }).then((res) => {
            dispatch(createUser(res.data.data));
        });

        navigate("/");
    });
    return (
        <Container>
            <Wrapper onSubmit={ onSubmit }>
                <Title>Sign In</Title>
                <Inputs>
                    <input placeholder="Email" { ...register("email") } />
                    <input placeholder='Password' { ...register("password") } />
                    <button type='submit'>Sign In</button>
                </Inputs>
                <p>Have no account? <Link to="/signUp" style={ { textDecoration: "none" } }><span>Sign Up</span></Link></p>
            </Wrapper>
        </Container>
    );
};

export default SignIn;

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 80%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;
const Wrapper = styled.form`
    width: 450px;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p{
        font-weight: 800;
    }
    span{
        color: blue;
        font-weight: 800;
    }
`;
const Title = styled.div`
    font-size: 35px;
    font-weight: 800;
    margin: 0px;
    padding: 0px;
`;
const Inputs = styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: red; */

    input{
        width: 250px;
        height: 30px;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 10px;
        padding-left: 7px;
    }

    button{
        width: 120px;
        height: 30px;
        border: none;
        outline: none;
        border-radius: 5px;
        background-color: #00bcd4;
        color: #fff;
    }

`;