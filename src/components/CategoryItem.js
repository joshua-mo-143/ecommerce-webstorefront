import styled from 'styled-components'
import React from 'react'
import { Mobile } from '../responsive'
const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
${Mobile({width: "90vw"})};

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${Mobile({height: "30vh"})};
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
color: white;
margin-bottom: 25px;
`
const Button = styled.button`
border: none;
padding: 10px;
background: white;
color: gray;
cursor: pointer;
font-weight: 600;
`

export const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem