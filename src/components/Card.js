import React from 'react';

const Card = ({id, name, email}) =>{
   // const {id, name, email} = props; --- destructreing in ES6
    //bg - background, dib - display inline block, pa - padding, mr- margin ma- margin all, br- border radii(in this)
    return(
        <div className = 'tc bg-light-green dib pa2 ma3 br3 grow bw3 b--dark-green shadow-3'> 
            <img src ={`https://robohash.org/${id}`} alt ="robots"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );

} 

export default Card;
