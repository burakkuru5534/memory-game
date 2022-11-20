import './SingleCard.css'

const Card = ({card, handleChoice}) => {

  const handleClick = () => {

    handleChoice(card);
  }

    return ( 
        <div className="card">
        <div>
          <img className="front" src={card.src} alt="card front" onClick={handleClick} />
          <img className="back" src="/img/cover.png" alt="card back" />
        </div>
      </div>
     );
}
 
export default Card;