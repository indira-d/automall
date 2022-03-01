import React from 'react'

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import AboutCompany from './components/AboutCompany/AboutCompany';

import Automall from './components/Automall/Automall';
import CarDetails from './components/CarDetails/CarDetails';
import Contacts from './components/Contacts/Contacts';
import CreditComponent from './components/CreditComponent/CreditComponent';
import ServiceCenter from './components/ServiceCenter/ServiceCenter';

import Offer1 from './components/Offers/Offer1/Offer1';
import Offer2 from './components/Offers/Offer2/Offer2';
import Offer3 from './components/Offers/Offer3/Offer3';
import Models from './components/Models/Models';

class App extends React.Component {

  render(){
  return(
    <BrowserRouter 
  
    >
    <Switch> 
      
         <Route path='/' exact component={Automall} /> 
         <Route path='/contacts'  exact component= {Contacts}/>
         <Route path='/about'  exact component= {AboutCompany}/>
         <Route path='/credit'  exact component= {CreditComponent}/>
         <Route path='/service'  exact component= {ServiceCenter}/>
          <Route path='/offer1'  exact component= {Offer1}/>
          <Route path='/offer2'  exact component= {Offer2}/>
          <Route path='/offer3'  exact component= {Offer3}/>
          <Route path='/models/:id'  exact component= {Models}/>
     </Switch>
    </BrowserRouter>
  )
  }
}


export default App;
