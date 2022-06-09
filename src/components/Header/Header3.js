import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import Menu from '../Menu'

const Header = () => {

    const [ menu, setMenu ] = useState(false);
    // const [bar, setBar] = useState(false)

    // const menuBar = () => {
    //     setBar(!bar)
    // }
    return (
        <>
            <Container>
                <Wrapper>
                    <Logo>Logo</Logo>
                    <Holder>
                        <BlogHold>
                            <Link to='/favourite'><span>Favourite</span></Link>
                            <Link to="/" style={ { textDecoration: "none", color: "#fff" } }><span>All Entries</span></Link>
                        </BlogHold>
                        <Link to="/addEntries" style={ { textDecoration: "none", color: "#fff" } } ><Add> <IoMdAddCircleOutline size="30px" />Add Entry</Add></Link>
                        <ImageHold onMouseEnter={ () => {
                            setMenu(true);
                        } }
                            onMouseLeave={ () => {
                                setMenu(false);
                            } }>
                            <img />
                        </ImageHold>
                    </Holder>

                    {/* <Icon>{bar ? (<GiHamburgerMenu size="40px" onClick={menuBar} />) : (<GiHamburgerMenu size="40px" onClick={menuBar} />)}</Icon> */ }

                </Wrapper>
            </Container>
            {/* {bar ? (<Menu />) : null} */ }
            { menu ? (<Display onMouseEnter={ () => {
                setMenu(true);
            } }
                onMouseLeave={ () => {
                    setMenu(false);
                } }>
                <Nav>Profile</Nav>
                <Nav>Log Out</Nav>
            </Display>) : null }
        </>
    );
};

export default Header;

const Nav = styled.div`

    font-weight: 600;
    position: relative;

`;
const Display = styled.div`
    width: 180px;
    height: 70px;
    border-radius: 5px;
    box-shadow: 4px 3px 4px 2px rgba(0,0,0,0.7);
    position: absolute;
    right: 0;
    top: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 2;
`;
const ImageHold = styled.div`
cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;
const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3b91f1;
    color: #fff;
`;
const Wrapper = styled.div`
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    font-size: 30px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Holder = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */

    /* @media (max-width: 800px){
        display: none;
    } */
`;
const Icon = styled.div`
    display: none;
    cursor: pointer;
    @media (max-width: 800px){
        display: block;
      
        :active{
            color: #235b9b;
        }
    }
`;
const BlogHold = styled.div`
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 170px;
`;
const Add = styled.div`
    width: 110px;
    background-color: #2161b2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    padding: 5px;
    border-radius: 5px;
`;