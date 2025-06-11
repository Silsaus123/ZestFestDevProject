import { useNavigate } from 'react-router-dom';
import "./gameCard.css"

function GameCard({image, title, link}) { 
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link);
    };

    return (
    <div className="game-card" onClick={handleClick}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
    )
}

export default GameCard
