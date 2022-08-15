import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import React from 'react'
import { Mobile } from '../responsive'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    justify-content: space-between;
    ${Mobile({padding: "0px", flexDirection: "column", alignItems: "center"})};
`

export const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories;