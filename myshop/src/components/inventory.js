import React, {Component} from 'react';
import AddShoeForm from './AddShoeForm';


class Inventory extends Component{
    render(){
        return(
            <div>
            <h2>Inventory </h2> 
            <AddShoeForm  addShoe = {this.props.addShoe}/>
            </div> 
        )
    }
}
export default Inventory;
