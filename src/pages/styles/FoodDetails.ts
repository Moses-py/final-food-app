import { Box as MuiBox, styled } from "@mui/material";

export const FoodDetailsContainer = styled(MuiBox)(({theme}) => {
  return {
    background: "linear-gradient(114deg, #3A3A3A 6.71%, #232323 95.54%);",
    width: "100vw",
    height: "100vh"
  }
})