import React from 'react';
import {Component} from 'react'



class StoreChoice extends Component{
    render(){
        return(
            <div>
                <form className ='store-selector'>
                    <h2>Please Enter A Store</h2>
                    <input type = 'text' required placeholder = 'Store Name' />
                    <button type = 'submit'>Visit Store </button>
                    

                </form>
            </div>
        );
    }
}
export default StoreChoice; 