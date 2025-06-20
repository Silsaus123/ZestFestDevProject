import { useNavigate } from 'react-router-dom';
import "./homeBtn.css"

function HomeBtn() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate("/");
    };

    return (
        <div>
            <button onClick={handleClick} id='homebtn'>
                Home
            </button>
        </div>
    )
}

export default HomeBtn
