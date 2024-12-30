import { CarouselData } from '../meta/carousel';
import '../styles/carousel.css';

const Carousel = () => {
  return (
    <ul className='carousel-section'>
      {CarouselData.map((card, index) => {
        return (
          <li key={index} className={`carousel-card ${index%2 === 0 ? 'even-index' : 'odd-index'}`}>
            <div className='carousel-card-img'>
              <img src={card.logo} alt={card.title} />
            </div>
            <div className='carousel-card-title'>{card.title}</div>
            <div className='carousel-card-content'>{card.content}</div>
          </li>
        )
      })}
    </ul>
  )
}

export default Carousel;