import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../responsive'

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 25px;
`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 25px;
${Mobile({textAlign: "center"})};
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;

`

const Input = styled.input`
border: none;
flex: 8;
padding-left: 25px;
${Mobile({width: "80%"})};
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
