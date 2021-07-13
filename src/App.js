import React from 'react'

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import AboutCompany from './components/AboutCompany/AboutCompany';

import Automall from './components/Automall/Automall';
import CarDetails from './components/CarDetails/CarDetails';
import Contacts from './components/Contacts/Contacts';
import CreditComponent from './components/CreditComponent/CreditComponent';
import ServiceCenter from './components/ServiceCenter/ServiceCenter';

// import Car1 from './assets/audi-rs720-1.jpg'
// import Car2 from './assets/ls.jpg'
// import Car3 from './assets/kia.jpg'
// // import Car4 from './assets/toyota.jpg'
// import Car5 from './assets/P90306631-the-all-new-bmw-8-series-coupe-06-2018-2249px.jpg'
// import Car6 from './assets/shevrolet.jpg'

class App extends React.Component {

  render(){
  return(
  
   
    <BrowserRouter 
    // onUpdate={() => window.scrollTo(0, 0)}
    >
    <Switch> 
        {/* <Route exact path='/' component={Automall} cars={this.state.carCatalogue} /> */}
        {/* <Route path='/carDetails' component={CarDetails} /> */}
         <Route path='/'                exact component={Automall} /> 
         <Route path='/carDetails/:id'  exact component= {CarDetails}/>
         <Route path='/contacts'  exact component= {Contacts}/>
         <Route path='/about'  exact component= {AboutCompany}/>
         <Route path='/credit'  exact component= {CreditComponent}/>
         <Route path='/service'  exact component= {ServiceCenter}/>
       
        
     
      

     </Switch>
    </BrowserRouter>
  )
  }
}


export default App;
