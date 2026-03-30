import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div>
            <Link to={'/restaurants'}><h1>맛집 추천</h1></Link>
        </div>
    );
};

export default home;