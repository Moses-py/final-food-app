import {Box} from "@mui/material"
import FoodImageSmall from "./FoodImageSmall"
import ImageRight from './ImageRight'
import LandingText from './LandingText'
import { MainContainer } from './styles/Main.styles'

const MainLanding = () => {
  return (
    <Box>
      <MainContainer>
        <LandingText />
        <ImageRight />
      </MainContainer>
    </Box>

  )
}

export default MainLanding