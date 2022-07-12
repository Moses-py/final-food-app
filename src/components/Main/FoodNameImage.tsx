import { FoodNameContainer, FoodNameImageSmall } from './styles/Main'
import {Typography, Rating, Box} from "@mui/material"
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
const FoodNameImage = () => {
  return (
    <FoodNameContainer>
        <FoodNameImageSmall src="/assets/Ellipse 11.png" alt="imag-small"/>
        <div className='foodNameContent'>
            <div className='foodName'>
                <Typography variant="h6">
                    Chicken Brew
                </Typography>
                <Box sx={{display: "flex", alignItems: "center", marginBottom: "0.5rem"}}>
                    <Rating name="half-rating" defaultValue={4.5} precision={0.5} sx={{fontSize: ".7rem", color: "yellow"}} />
                    <Typography variant="subtitle2" sx={{fontSize: "11px", marginX: "1rem"}}>4.5</Typography>
                </Box>
                <Typography variant="subtitle2" sx={{fontSize: "9px"}}>https://www.workofart.de</Typography>
            </div>
            <div className='orderSet'>
                <PersonPinCircleOutlinedIcon className='foodNameIcon' sx={{fontSize: ".9rem"}} />
                <CallOutlinedIcon className='foodNameIcon' sx={{fontSize: ".9rem"}}  />
                <ArrowRightOutlinedIcon className='foodNameIcon' sx={{fontSize: ".9rem"}}  />
            </div>
        </div>
    </FoodNameContainer>
  )
}

export default FoodNameImage