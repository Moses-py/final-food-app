import { SingleFoodContainer, SingleFoodItem, SingleFoodItemTitle } from './styles/styles'
import {Box, Typography, Button, Grid} from "@mui/material"
import PersonPinCircleOutlinedIcon from '@mui/icons-material/PersonPinCircleOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
const SingleFoodCarouselItem = () => {
  return (
    <SingleFoodContainer>
        <SingleFoodItem>
            <Box sx={{position: "relative"}}>
                <img src="/assets/explore_page_images/Ellipse 12.png" alt="Single Food Item" />
                <div className='ratingBox'>
                    <StarRateRoundedIcon sx={{fontSize: "0.7rem", marginRight: "5px", color: "#FFC451"}} />
                    <Typography variant="caption" component="span" sx={{fontSize: "0.6rem"}}>4.9</Typography>
                </div>
            </Box>
            <Box sx={{textAlign:"center"}}>
                <Typography variant="body2" sx={{fontSize: "1.2rem",marginBottom: "0.8rem"}}  component="p">Mini Veg Salad</Typography>
                <Typography variant="subtitle2" sx={{fontSize: "0.5rem",marginBottom: "0.8rem"}} component="span">YaleFoods</Typography>
                <Typography variant="subtitle2" sx={{fontSize: "0.8rem",marginBottom: "0.8rem"}}  component="p">High in Protein/Carbs</Typography>
            </Box>
            <Grid container spacing={0.5} sx={{width: "100%", padding: "1.5rem"}}>
                <Grid item xs={9} sx={{paddingLeft: 0}}>
                    <Button variant="outlined" sx={{background: "#E73636", border: "none", color: "#fff", fontSize: ".6rem",    width: "100%", height: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontFamily: "Poppins", fontWeight: 200, textTransform: "capitalize", borderRadius:"10px"}}>
                        <Typography variant="body2" sx={{fontSize: "0.6rem"}}>
                            Order Now
                        </Typography>
                        <CheckCircleOutlineOutlinedIcon sx={{fontSize: "0.7rem"}} />
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" sx={{background: "#000000", border: "2px solid #000000", color: "#fff", fontSize: ".6rem", height: "100%", borderRadius:"10px"}}>
                        <ExpandLessOutlinedIcon fontSize='small' />
                    </Button>
                </Grid>
            </Grid>
        </SingleFoodItem>
        <SingleFoodItemTitle>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <PersonPinCircleOutlinedIcon className='foodNameIcon' sx={{fontSize: "1rem", marginRight: "0.6rem"}} />
                    <Typography variant='subtitle2' sx={{fontSize: "9px"}} component="span">Delhi, India</Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <CallOutlinedIcon className='foodNameIcon' sx={{fontSize: "1rem", marginRight: "0.6rem"}}  />
                    <Typography variant='subtitle2' sx={{fontSize: "9px"}} component="span">0907464827</Typography>
                </Box>
            </Box>
        </SingleFoodItemTitle>
    </SingleFoodContainer>
  )
}

export default SingleFoodCarouselItem