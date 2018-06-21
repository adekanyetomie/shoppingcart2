import React from 'react';


//import {BrowserRouter,Match, Miss} from 'react-router';


import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import StoreChoice from './components/StoreChoice';

/*const root = () =>{
  /  return (
        <BrowserRouter>
            <div>
                <Match  exactly pattern = '/' component = {StoreChoice }/>
                <Match   pattern = '/store/:storeid' component = {App}/>
            </div>
        </BrowserRouter>
    )
}*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
