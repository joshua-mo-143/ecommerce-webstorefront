import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import { Mobile } from '../responsive'

const Container = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
${Mobile({flexDirection: "column"})}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialsContainer = styled.div`
display: flex;
flex-direction: row;
`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 50px;
${Mobile({width: "100px"})};
`

const Center = styled.div`
flex: 1;
padding: 20px;
${Mobile({display: "none"})}
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
${Mobile({background: "lightgray"})}
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
${Mobile({width: "100%"})};
`

const Payment = styled.img`
width: 50%;
`

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MEME.</Logo>
            <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled it to make a type specimen book. 
            </Desc>
            <SocialsContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialsContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Menswear</ListItem>
                <ListItem>Womenswear</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>123 Meme Street, Birmingham B12 6TF
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/>+44 5678 901234
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight: "10px"}}/> contact@joshmo.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}
