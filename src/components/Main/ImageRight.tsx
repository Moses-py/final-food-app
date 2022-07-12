import {Box, Typography } from "@mui/material"
import FoodImageSmall from "./FoodImageSmall"
import FoodNameImage from "./FoodNameImage"
import { FoodImage, FoodNameImageSmall, ImageCircleContainer } from "./styles/Main"

const ImageRight = () => {
  return (
    <Box>
        <Box sx={{position: 'relative', display: "flex", justifyContent:"center", alignItems: "center", padding: "3rem"}}>
          <FoodNameImage />
          <ImageCircleContainer />
          <FoodImage src="./assets/image 1.svg" alt="Food Imag" className="image" />
        </Box>
    </Box>
  )
}

export default ImageRight