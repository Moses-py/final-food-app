import { ImageSmallContainer } from './styles/Main'
import {Box, Typography} from "@mui/material"

const FoodImageSmall = () => {
  return (
      <ImageSmallContainer>
            <Box sx={{marginRight: "2rem"}}>
              <Typography variant='body2' sx={{color: "#878787", letterSpacing: "0.2rem", fontWeight: 300}}>Top</Typography>
              <Typography variant='body2' sx={{color: "#878787", letterSpacing: "0.2rem", fontWeight: 300}}>Foods</Typography>
            </Box>
            <img style={{ margin: "1rem"}} src="/assets/Ellipse 5 (1).png" alt="ellipse 5" />
            <img style={{ margin: "1rem"}}  src="/assets/Ellipse 6.png" alt="ellipse 6" />
            <img style={{ margin: "1rem"}}  src="/assets/Ellipse 7.png" alt="ellipse 7" />
            <img style={{ margin: "1rem"}}  src="/assets/Ellipse 8.png" alt="ellipse 8" />
      </ImageSmallContainer>
  )
}

export default FoodImageSmall
