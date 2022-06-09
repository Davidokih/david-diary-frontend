import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Card>
                    <img src='' alt='loading...' />
                    <Title>Title</Title>
                    <Content>Content</Content>
                    <p>delete</p>
                </Card>
            </Wrapper>
        </Container>
    );
};

export default Home;

const Content = styled.div``;
const Title = styled.div``;
const Card = styled.div`
    width: 300px;
    border-radius: 5px;
    box-shadow: 4px 3px 4px 2px rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 50%;
        height: 50%;
    }
`;
const Wrapper = styled.div`
    width: 80%;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;