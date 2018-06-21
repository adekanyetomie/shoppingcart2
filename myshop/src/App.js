import React, { Component } from 'react';
import './App.css';
/*import StoreChoice from './components/StoreChoice';*/
import Header from './components/Header';
import Order from './components/order';
import Inventory from './components/inventory';
import Shoe from './components/shoe';

class App extends Component {
   constructor(){
     super();

     this.addShoe = this.addShoe.bind(this);
     //getini
     tilstate
     this.state = {
       shoes:{},
       order:{}
     };
   }
   addShoe(shoe){
     //update our state
     const shoes = {...this.state.shoes};
     //add in a new shoe
     const timestamp = Date.now();  
     shoes[`shoe-${timestamp}`] = shoe;
     //set state
     this.setState({shoes })
   }


  render() {
    return (
      <div className="App">
        {/*<StoreChoice />*/}
        <div className = 'menu'>
          <Header tagline = 'Shoe Shop'/>
          <ul className = 'Shoe-l ist'> 
            {
              Object
                .keys(this.state.shoes)
                .map(key => <Shoe  key = {key} details = {this.state.shoes[key]}/> )
            }

          </ul>
        </div>
        <Order />
        <Inventory addShoe = {this.addShoe} />
         
      </div>
    );
  }
}

export default App;
