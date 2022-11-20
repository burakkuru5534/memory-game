import './SingleCard.css'

const Card = ({card, handleChoice, flipped, disabled}) => {

  const handleClick = () => {

    if (!disabled) {
      handleChoice(card);
    }
  }

    return ( 
        <div className="card">
        <div className= {flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card front" onClick={handleClick} />
          <img className="back" src="/img/cover.png" alt="card back" onClick={handleClick} />
        </div>
      </div>
     );
}
 
export default Card;

/**
 *  {flipped && <img className="front" src={card.src} alt="card front" onClick={handleClick} />}
          {!flipped && <img className="back" src="/img/cover.png" alt="card back" onClick={handleClick} />}
 * 
 */