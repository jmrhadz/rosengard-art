import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/IMG-4381.jpg'
import slide2 from '../images/IMG-4385.jpg'
import slide3 from '../images/IMG-4386.jpg'

const slides = [
  {
    id:1,
    image: require('../images/IMG-4381.jpg'),
    title:"Everyday beauty",
    description:"Make your routine extraordinary",
    link:""
  },
  {
    id:2,
    image: require('../images/IMG-4385.jpg'),
    title:"Handmade",
    description:"From our hands to you",
    link:""
  },
  {
    id:1,
    image: require('../images/IMG-4386.jpg'),
    title:"Functional art",
    description:"Art made for use",
    link:""
  }
]

function ImgCarousel() {
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
              <Carousel.Caption className="bg-dark opacity-75">
                <h3>{slide.title}</h3>
                <p>{slide.description}.</p>
                <a className="btn btn-primary" href={slide.link}>Add to Cart</a>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
      
     
    </Carousel>
  );
}

export default ImgCarousel;