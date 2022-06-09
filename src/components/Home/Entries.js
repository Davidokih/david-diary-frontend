import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const SignUp = () => {

    return (
        <Container>
            <Wrapper>
                <Title>Add Entries</Title>
                <Inputs>
                    <Image />
                    <label><input type='file' />upload</label>
                    <input placeholder="Title" />
                    <textarea placeholder='Content' />
                    <button>Add</button>
                </Inputs>
            </Wrapper>
        </Container>
    );
};

export default SignUp;

const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.form`
    width: 450px;
    height: 600px;
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
const Inputs = styled.div`
    width: 80%;
    height: 500px;
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
    textarea{
        width: 250px;
        height: 250px;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 10px;
        padding-left: 7px;
    }

    button{
        width: 120px;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 5px;
        background-color: #00bcd4;
        color: #fff;
        cursor: pointer;
    }

`;

const Image = styled.img`
    width: 100%;
    height: 400px;
    border-radius: 10px;
    background-color: skyblue;
`;