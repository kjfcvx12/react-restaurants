import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRest } from './reContextPro';

const Rest = () => {
    const { id } = useParams();
    const restaurants = useRest();
    
    const restaurant = restaurants.find(i => i.id === parseInt(id));


    if (!restaurant) {
        return (
            <div>
                <h2>맛집을 찾을 수 없습니다</h2>
            </div>
        );
    }


    return (
        <div>
            <ul>
                <li>
                    {restaurant.id}
                    {restaurant.name},
                    {restaurant.location},
                    {restaurant.rating},
                    {restaurant.menu}
                </li>
            </ul>

            <Link to={'/restaurants'}>목록</Link>
        </div>
    );
};

export default Rest;