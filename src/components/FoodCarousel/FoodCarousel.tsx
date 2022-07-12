import SingleFoodCarouselItem from './SingleFoodCarouselItems'
import {Container, Box} from "@mui/material"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./styles.css";

// import required modules


const FoodCarousel = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 599, min: 0 },
    items: 1,
    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
};
  return (
    <Container>
      <Carousel 
        responsive={responsive}
        partialVisbile={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
      >
        <div><SingleFoodCarouselItem /></div>
        <div><SingleFoodCarouselItem /></div>
        <div><SingleFoodCarouselItem /></div>
        <div><SingleFoodCarouselItem /></div>
        <div><SingleFoodCarouselItem /></div>
        <div><SingleFoodCarouselItem /></div>
        <div><SingleFoodCarouselItem /></div>
      </Carousel>
    </Container>
  )
}

export default FoodCarousel