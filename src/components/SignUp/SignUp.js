import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUp = () => {

    const [ image, setImage ] = useState('/logo512.png');
    const [ avatar, setAvatar ] = useState('');
    const formSchema = yup.object().shape({
        userName: yup.string().required('This field cannot be empty'),
        email: yup.string().email().required('This field cannot be empty'),
        password: yup.string().required('This field cannot be empty'),
        confirm: yup.string().oneOf([ yup.ref("password"), null ], "password must match")
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const handleImage = (e) => {
        const file = e.target.files[ 0 ];
        const save = URL.createObjectURL(file);
        setImage(save);
        setAvatar(file);
    };

    const onSubmit = handleSubmit(async (value) => {
        console.log(value);

        const { userName, email, password } = value;
        const url = 'http://localhost:1010/api/register';

        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('avatar', avatar);

        const config = {
            "content-type": "multipart/form-data"
        };

        await axios.post(url, formData, config);
    });

    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Inputs onSubmit={ onSubmit }>
                    <Image src={ image } />
                    <label htmlFor='pix'><input type='file' id='pix' onChange={ handleImage } accepts={ 'image/*' } />upload</label>
                    <input placeholder="userName" { ...register('userName') } />

                    <input placeholder="email" { ...register('email') } />

                    <input placeholder='password' { ...register('password') } />

                    <input placeholder='confirm' { ...register('confirm') } />
                    <button type='submit'>Sign Up</button>
                </Inputs>
                <p>Have no account? <Link to="/signIn"><span>Sign In</span></Link></p>
            </Wrapper>
        </Container>
    );
};

export default SignUp;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
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
    font-size:30px;
    font-weight: 700;
    margin-bottom: 10px;
`;
const Inputs = styled.form`
    width: 80%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: red; */

    label{
        width: 100px;
        height: 50px;
        border-radius: 5px;
        background-color: #00bcd4;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        cursor: pointer;
        input{
            display: none;
        }
    }

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
        cursor: pointer;
    }

`;
const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: black;
`;


