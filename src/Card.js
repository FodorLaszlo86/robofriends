import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-green dib br3 ma1 pa2 grow bw2 shadow-5">
            <img src={ `https://robohash.org/${ id }` } alt='avatar' />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    )
}

export default Card;