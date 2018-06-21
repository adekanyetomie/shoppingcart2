import React  from 'react';


const Header = (props) =>{
    return(
        <header className = 'top'>
            <h2>CART</h2>
            <h4 className = 'tagline'>{props.tagline}</h4>
        </header> 
    )
}
        
    
export default Header;
