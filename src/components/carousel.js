import Carousel from 'react-bootstrap/Carousel';
import { CartContext } from '../REST/cartContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

function ImgCarousel() {
  const cart = useContext(CartContext)

const slides = [
  {
    id:"price_1MfTKxJUAPde3cLuZkUec0Of",
    image: require('../images/IMG-4381.jpg'),
    title:"Everyday beauty",
    description:"Make your routine extraordinary"
  },
  {
    id:"price_1MfTOyJUAPde3cLu6c99MnwT",
    image: require('../images/IMG-4385.jpg'),
    title:"Handmade",
    description:"From our hands to yours"
  },
  {
    id:"price_1MfTNYJUAPde3cLuthVyPU2G",
    image: require('../images/IMG-4386.jpg'),
    title:"Functional art",
    description:"Art made for use"
  }
]

  const handleAdd = (id) => {
    cart.addOneToCart(id)
  }


  return (
    <Carousel fade className="opacity-75">
      {
        slides.map((slide, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100 object-fit-cover"
                src={slide.image}
                alt={"Slide "+index}
              />
              <Carousel.Caption className="bg-dark">
                <h3>{slide.title}</h3>
                <p>{slide.description}.</p>
                <Button onClick={(e)=>handleAdd(slide.id)}>Add to Cart</Button>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
      
     
    </Carousel>
  );
}

export default ImgCarousel;