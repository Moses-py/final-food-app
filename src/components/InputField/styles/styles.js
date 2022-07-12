import styled from 'styled-components';

export const InputFieldContainer = styled.div`
    padding: 0.5rem;
`
export const Input = styled.input`
    width: 100%;
    height: 4rem;
    border-radius: 2rem;
    background: rgba(238, 238, 238, 0.08);
    backdrop-filter: blur(5px);
    padding: 0.5rem 2rem;
    outline: none;
    color: #fff;
    border: none;
    transition: border 0.2s ease-in-out;
    &:hover {
        backdrop-filter: blur(66px);
        border: 1px solid #fff;
    }
    &:focus {
        border: 1px solid #fff;
    }
    &::placeholder {
        color: #6A6A6A;
    }
`