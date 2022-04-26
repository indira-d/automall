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
    showModels: false,
    showMenu: false
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

 { window.innerWidth > 850
         ? <div className='menu'>
            <Link to='/' style={{textDecoration: 'none'}} className='linkMenuBtn' > 
              <button className='menuItem'>Главная</button> 
            </Link> 
            <Link to='/models/23' style={{textDecoration: 'none'}}>
                <button className='menuItem'> Moдели</button>
              </Link>
              <Link to='/about' style={{textDecoration: 'none'}}>
              <button className='menuItem'>О компании</button>
              </Link  >
            <Link to='/credit' style={{textDecoration: 'none'}}>
              <button className='menuItem'>Кредитование</button>
              </Link>
              <Link to='/service' style={{textDecoration: 'none'}}>
                <button className='menuItem'>Сервис центр</button>
              </Link>
              <Link to='/contacts' style={{textDecoration: 'none'}}>
                  <button className='menuItem'>Контакты</button>
              </Link>
          </div>
          : <div className='wrapper'><button className='mobileMenu' onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                <div className='mobile_menu'></div>
                <div className='mobile_menu'></div>
                <div className='mobile_menu'></div>

          </button>
          <div className={this.state.showMenu ? 'showMenu' : 'hideMenu'}>
        <Link to='/' style={{textDecoration: 'none'}} className='linkMenuBtn' > 
              <button className='menuItem'>Главная</button> 
            </Link> 
            <Link to='/models/1' style={{textDecoration: 'none'}}>
                <button className='menuItem'> Moдели</button>
              </Link>
              <Link to='/about' style={{textDecoration: 'none'}}>
              <button className='menuItem'>О компании</button>
              </Link  >
            <Link to='/credit' style={{textDecoration: 'none'}}>
              <button className='menuItem'>Кредитование</button>
              </Link>
              <Link to='/service' style={{textDecoration: 'none'}}>
                <button className='menuItem'>Сервис центр</button>
              </Link>
              <Link to='/contacts' style={{textDecoration: 'none'}}>
                  <button className='menuItem'>Контакты</button>
              </Link>
          </div>
          
          
          </div>
 }
        </div>
        )
      
  
            
     } 
}

export default Menu