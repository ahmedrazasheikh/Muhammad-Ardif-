import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TitlePrice, Bronze, Silver, Gold } from './components';

export const Pricing = () => {
    const [subscription, setSubscription] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function handleClick(index) {
        setSubscription(index);
        dispatch({type: 'SET_SUBSCRIPTION', payload: index})
    }
    
    useEffect(() => {
        if (subscription !== '') {
            navigate('/signup');
        }
    }, [subscription, navigate])
 
    

    return (
        <div className="wrapper" id="Pricing">
            <TitlePrice />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '30px',
                    marginBottom: 100,
                }}
            >
                <Bronze handleClick={handleClick} />
                <Silver handleClick={handleClick} />
                <Gold handleClick={handleClick} />
            </div>
        </div>
    );
};
