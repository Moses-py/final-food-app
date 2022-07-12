import styled from "styled-components"

export const ImageCircleContainer = styled.div`
    border: 2px solid white;
    height: 550px;
    border-radius: 100%;
    position: absolute;
    width: 550px;
    object-fit: contain;
    position: absolute;
    right: -41%;

`

export const FoodImage = styled.img`
    width: 700px;
    object-fit: contain;
    position: absolute;
    right: -55%;
`
export const FoodNameContainer = styled.div`
    padding: 1.5rem 1rem 1rem 1rem;
    width: 50%;
    border-radius: 20px;
    background: rgba(242, 242, 242, 0.01);
    backdrop-filter: blur(100px); 
    z-index: 2;
    position: absolute;
    top: -150%;

    .foodNameContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .foodName {
        margin-right: 2.5rem;
    }
    .orderSet {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        marginLeft: 1rem;
    }
    .foodNameIcon {
        margin-bottom: 1rem
    }
`
export const FoodNameImageSmall = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: none;
    position: absolute;
    top: -20%;
`

export const ImageSmallContainer = styled.div`
    padding: 0.5rem;
    position: absolute;
    bottom: 7%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
        height: 60px;
        width: 60px;
    }
`
