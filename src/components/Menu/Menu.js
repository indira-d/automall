import React from 'react' 
import logo from '../../assets/Avtomoll_1_2x.png'
import './Menu.css'
import {  Link  } from 'react-router-dom'



class Menu extends React.Component {
  constructor(props){
    super(props)
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);

     this.state={
    showModels: false
  }
}


  componentDidMount() {
    document.addEventListener('mouseover', this.handleClickOutside);
}

componentWillUnmount() {
    document.removeEventListener('mouseover', this.handleClickOutside);
}


  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          showModels: false
        })
    }
}



  render(){
    return(
   
      <div className='menuContainer' ref={this.wrapperRef}>
        <Link to='/'>
          <img  className='logoImg' src={logo}/>
        </Link>

        <div className='menu'>


           <Link to='/' style={{textDecoration: 'none'}} className='linkMenuBtn' > 
            <button className='menuItem'>Главная</button> 
           </Link> 
           <Link to='/carDetails/1' style={{textDecoration: 'none'}}>
              <button className='menuItem'> Moдели</button>
            </Link>
            <Link to='/about' style={{textDecoration: 'none'}}>
            <button className='menuItem'>О компании</button>
            </Link  >
           <Link to='/credit' style={{textDecoration: 'none'}}>
            <button className='menuItem'>Кредитование</button>
            </Link>
          
            <button className='menuItem'>Сервис центр</button>
           
            <Link to='/contacts' style={{textDecoration: 'none'}}>
                <button className='menuItem'>Контакты</button>
             </Link>
        </div>
          
          <div className='modelsBrand'>
            
        
            {/* <h3 className='menuHeader'> Audi</h3>  */}
               {/* { this.props.cars.map(function(car) {
                return <Link to={'/carDetails/' + car.id} className='modelItem' key={car.id}>
                            <img  src={car.img} className='modelImg'  />
                            <div className='modelDescription'>
                               {car.model}
                            </div>
                          </Link>
                        })
                   
                   }   
                  */}
              </div> 
         </div>


    )
  }
  
}

export default Menu