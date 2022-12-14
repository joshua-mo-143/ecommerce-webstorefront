import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge} from '@material-ui/core'
import {Mobile} from '../responsive'
import { Announcement } from './Announcement'
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 90px;
width: 100vw;
${Mobile({width: "100vw"})};
overflow-x: hidden;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${Mobile({padding: "10px 0px"})};
overflow-x: hidden;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
${Mobile({flex: "0"})};
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${Mobile({display: "none"})};
`

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
${Mobile({display: "none"})};
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
    border: none;
    ${Mobile({width: "50px", marginLeft: "0px"})};
`
const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;
${Mobile({fontSize: "24px"})};
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 25px;
${Mobile({flex: "2", justifyContent: "center", padding: "0px 10px"})};
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${Mobile({fontSize: "12px", marginLeft: "10px"})};
`


export const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"gray", fontSize: 16}}/>
                </SearchContainer>
            </Left>
            <Center>
            <Link to ="/" style={{color:"black", textDecoration: "none"}}><Logo>
                    MEME.
                </Logo>
                </Link>
            </Center>
            <Right>
                <Link to ="/register" style={{color:"black", textDecoration: "none"}}><MenuItem >REGISTER</MenuItem></Link>
                <Link to ="/login" style={{color:"black", textDecoration: "none"}} ><MenuItem>SIGN IN</MenuItem></Link>
                <MenuItem>
                <Link to="/cart"><Badge badgeContent={2} color="primary">
                    <ShoppingCartOutlined style={{color:"black", textDecoration: "none"}} />
</Badge></Link>
                </MenuItem>
            </Right>
        </Wrapper>
        <Announcement />
    </Container>
  )
}

export default Navbar;