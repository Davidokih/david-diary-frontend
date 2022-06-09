import React from 'react';
import styled from 'styled-components';
import Logo2 from '../../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={ Logo2 } />

                <Nav>
                    <Link to="/"><img src="" /></Link>
                    <Link to='/addEntries'><span>Add Entries</span></Link>
                    <Link to="/signIn"><button>LogOut</button></Link>
                </Nav>
            </Wrapper>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
`;
const Nav = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: red;
    }
`;