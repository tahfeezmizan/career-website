import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!!!</h1>
            <h3>Page Not Found</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur quia vero non magnam, accusamus nam, quod harum eius omnis laboriosam optio! Sequi odio nemo aperiam voluptates incidunt facilis quod.</p>
            <NavLink to="/" className="btn bg-green-400 text-white">Back to Home</NavLink>
        </div>
    );
};

export default ErrorPage;