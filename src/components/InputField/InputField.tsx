import React from 'react'
import { Input, InputFieldContainer } from './styles/styles'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const InputField = () => {
  return (
    <InputFieldContainer>
        <Input type="text" placeholder={`Search any food, Recipe, Ingredient etc...`} />
    </InputFieldContainer>
  )
}

export default InputField