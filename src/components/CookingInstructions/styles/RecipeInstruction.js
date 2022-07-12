import styled from "styled-components"

export const RecipeInstructionContainer = styled.div`
    padding: 1rem;
`
export const RecipeInstructionChild = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-evenly;
    align-items: center;
    color: #000000;
    padding: 0 2rem;
`

export const RecipeInstructionChildItemImage = styled.img`
    width: 80%;
    object-fit: contain;
`
export const RecipeInstructionChildList = styled.ul`
    list-style-type: circle
`

export const RecipeInstructionChildListItem = styled.li`
    text-decoration: none;
`