import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
${Mobile({padding: "10px", flexDirection: "column"})}
`

const ImgContainer = styled.div`
flex: 1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${Mobile({height: "40vh"})}
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${Mobile({padding: "10px"})}
`

const Title = styled.h1`
font-weight: 200;`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
width: 40%:
margin: 30px 30px;
display: flex;
justify-content: left;
gap: 3em;
margin-bottom: 3em;
`
const Filter = styled.div`
    display: flex;
    align-items:center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 35%;
display: flex;
align-items: center;
justify-content: space-between;
${Mobile({width: "100%"})}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`
const Button = styled.button`
padding: 15px;
border: 3px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
    background-color: #f8f4f4;
}
`
export const Product = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>   
            <ImgContainer>
            <Image src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221249M200005_1/rito-structure-black-silk-cardigan.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Lorem, ipsum.</Title>
                <Desc>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                 took a galley of type and scrambled it to make a type specimen book. 
                 </Desc>
                <Price>$ 888</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="gray"/>
                        <FilterColor color="darkblue"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
    </>
  )
}
