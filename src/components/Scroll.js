import React from 'react';


const Scroll = (props) =>{
    return(

        <div style={{overflowY:'scroll', border:'4px sold black', height:'800px', margin:'4rem'}}>
            {props.children}
        </div>
    );

}

export default Scroll;