import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} style={{ marginLeft: '36px' }}>
            <FontAwesomeIcon 
                icon={faArrowLeft} 
                style={{ color: "#ffffff", fontSize: '27px' }} 
                className="back-button -ml-6" 
            />
        </button>
    );
}

export default BackButton;