import styled from "styled-components"

export const ExploreFoodsBackground = styled.div`
background-image: url("/assets/Rectangle 12.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 100vh;
width: 100vw;
`

export const FoodTabsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
 img {
     height: 60px;
     width: 60px
 }
`
export const FoodTabsList = styled.ul`
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 0.5rem
`
export const FoodTabsItem = styled.li`
    text-decoration: none;
    list-style-type: none;
    margin-right: 2.5rem;
    font-family: Poppins;
    color: #757575;
    &:hover {
        border-bottom: 2px solid red;
        color: white
    }

`
export const FoodDetailsImage = styled.img`
    width: 400px;
    object-fit: contain
    min-width: 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`
export const BottomImageGroup = styled.div`
    margin-top: 2rem;
    margin-left: 2rem; 
    img {
        height: 50px;
        width: 50px
    }
`

export const IngredientBox = styled.div`
    background: rgba(168, 168, 168, 0.09);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 16px 0 rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    transition: all 0.33s ease-in-out;
    &:hover {
        background: rgba(168, 168, 168, 0.3);
    }
`