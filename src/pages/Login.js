import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { Mobile } from '../responsive'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: rgba(255,255,255,0.5);
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 40%;
${Mobile({width: "85%"})};
padding: 20px;
background-color: teal;

`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 20px;
${Mobile({padding: "10px"})};

`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
margin-top: 25px;`

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`


const Login = () => {
  return (
    <div style={{overflow: "hidden"}}>
    <Navbar/>
    <Container>
        <Wrapper>
            <Title>LOG IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOG IN</Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    </div>
  )
}

export default Login