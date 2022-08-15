import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../responsive'

const Container = styled.div`
height: 60vh;
width: 100vw;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 25px;
${Mobile({fontSize: "35px"})};
`
const Description = styled.div`
max-width: 100%;
font-size: 24px;
font-weight: 300;
margin-bottom: 25px;
${Mobile({textAlign: "center", fontSize: "20px"})};
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${Mobile({width: "90%"})};

`

const Input = styled.input`
border: none;
flex: 8;
padding-left: 25px;
${Mobile({width: "100%"})};
`

const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`



export const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates of all your favourite products, in your email.</Description>
        <InputContainer>
        <Input placeholder="Your email..."/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}
