import styled from 'styled-components'
import { Mobile } from '../responsive'

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
width: 100vw;
${Mobile({width: "100vw"})};
`

export const Announcement = () => {
  return (
    <Container>
        Free shipping on orders over $888
    </Container>
  )
}
