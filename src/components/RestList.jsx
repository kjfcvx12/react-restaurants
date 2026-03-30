import React from 'react';
import { useRest } from './reContextPro';
import { Link } from 'react-router-dom';


const RestList = () => {
    const restaurants=useRest();
    
    return (
        <div>
            <ul>
                {restaurants.map((i)=>(
                    <li key={i.id}>
                        <Link to={`/restaurant/${i.id}`}>{i.name}</Link>,
                        {i.location},
                        {i.rating}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestList;