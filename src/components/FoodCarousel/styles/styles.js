import styled from 'styled-components';

export const SingleFoodContainer = styled.div`
    position: relative;
`
export const SingleFoodItem = styled.div`
    border-radius: 30px;
    background: rgba(168, 168, 168, 0.09);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 16px 0 rgba(0, 0, 0, 0.2); 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 0 1.5rem;
    padding-top: 1.5rem;
    img {
        margin-bottom: 1rem;
        height: 150px;
        width: 150px
    }
    .ratingBox {
        height: 30px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #000000;
        border-radius: 30px;
        padding: 0.2rem 0;
        position: absolute;
        bottom: 2rem;
        right: -10%;
    }
`
export const SingleFoodItemTitle = styled.div`
    padding: 1rem 2rem;
    border-radius: 20px;
    background: rgba(168, 168, 168, 0.09);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 16px 0 rgba(0, 0, 0, 0.2);
    margin: 1rem 1.5rem;
`
