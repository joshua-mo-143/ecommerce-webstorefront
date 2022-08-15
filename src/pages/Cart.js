import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
background-color: ${(props)=>props.type === "filled" && "none" ? "black" : "transparent"};
color: ${(props)=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
${Mobile({display: "none"})}
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${Mobile({flexDirection: "column"})}
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${Mobile({flexDirection: "column"})}
`
const ProductDetails = styled.div`
flex: 2;
display: flex;

`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.div`
`
const ProductId = styled.div`
`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
`
const ProductSize = styled.div`
`
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${Mobile({margin: "5px 15px"})}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${Mobile({marginBottom: "20px"})}
`
const Hr = styled.hr`
background: #eee;
border: none;
height: 1px;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const SummaryTitle = styled.h1``
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background: black;
color: white;
font-weight: 600;
`

export const Cart = () => {
  return (
    <>
  <Navbar/>
    <Container>
        <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>Shopping Bag(2)</TopTexts>
            <TopTexts>Your Wishlist(0)</TopTexts>
            <TopButton type="filled">CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src="https://ae01.alicdn.com/kf/HTB1tf1SaWagSKJjy0Fbq6y.mVXay/Google-Casual-Google-Clothing-Google-Print-Loog-Sleeve-T-shirt-O-neck-Long-Sleeve-Tees-shirt.jpg"/>
                        <Details>
                            <ProductName><strong>Product:</strong>GOOGLE TEXT SHIRT</ProductName>
                            <ProductId><strong>ID:</strong> 5432532532532</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><strong>Size:</strong> L</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 888</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetails>
                        <Image src="https://media.endclothing.com/media/catalog/product/1/5/15-06-2022_BLR_RU02B2894-LPO-911_1_1.jpg"/>
                        <Details>
                            <ProductName><strong>Product:</strong>GOOGLE TEXT SHIRT</ProductName>
                            <ProductId><strong>ID:</strong> 5432532532532</ProductId>
                            <ProductColor color="gray"/>
                            <ProductSize><strong>Size:</strong> L</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 999</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY:</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 1</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 1</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>-$ 1</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 1</SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
    </>
  )
}
