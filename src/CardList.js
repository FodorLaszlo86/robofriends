import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    const robotBuddies = robots.map(robot => <Card key={ `robot-friend-${ robot.id }` } name={robot.name} email={ robot.email } id={ robot.id } />);
    return (
        <div>
           { robotBuddies }
        </div>
    );
}


export default CardList;