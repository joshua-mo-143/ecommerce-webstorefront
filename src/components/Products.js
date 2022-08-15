import styled from 'styled-components'
import { popularProducts } from '../data'
import { Product } from './Product'
import { Mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    ${Mobile({padding: "0px"})};

`


export const Products = () => {
  return (
    <Container>
        {popularProducts.map(item=> (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}
