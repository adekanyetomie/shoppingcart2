import React, {Component} from 'react';


class AddShoeForm extends Component{
    createShoe(event){
        event.preventDefault();
        const shoe = {
            name: this.name.value,
            price: this.name.value,
            status: this.name.value,
            description: this.name.value,
            image: this.name.value,
        }
        this.props.addShoe(shoe);
        this.shoeForm.reset();

    }
 
    
    render(){
        return(
            <div>
                <h2>Add Shoe </h2>
                <form ref = {(input)=> this.shoeForm = input} className = 'Shoe-edit' onSubmit = {(e) => this.createShoe(e)} >
                    <input ref = {(input)=> this.name = input} type = 'text' placeholder = 'Shoe Name' />
                    <input  ref = {(input)=> this.price = input} type = 'text' placeholder = 'Shoe Price' />
                    <select  ref = {(input)=> this.status}>
                        <option value = 'available'>Fresh</option>
                        <option value = 'unavailable'>Sold</option>
                    </select>
                    <textarea   ref = {(input)=> this.description = input} placeholder = 'Shoe Description' />
                    <input  ref = {(input)=> this.image = input} type = 'text' placeholder = 'Shoe Image' />
                    <button type = 'submit'>Add Item</button>
                </form> 
            </div> 
        )
    }
}
export default AddShoeForm ;
