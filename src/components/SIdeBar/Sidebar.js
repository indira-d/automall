import React from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component{

    state={
        showModel: 'Audi'
    }


    render(){
        let carModel = this.props.cars.filter(el => el.Brand == this.state.showModel)

        console.log(carModel)

    return (
        <div className='Sidebar'>
            <div className="sidebarItem">
                <div className='sidebarBtn'>
            
                   <Link to='/carDetails/1'><button className={this.state.showModel == 'Audi' ? 'activeBtn' : 'sideBtn'} onClick={() => this.setState({showModel: 'Audi'})} >Audi</button> </Link>
                   <Link to='/carDetails/9'><button className={this.state.showModel == 'Lexus' ? 'activeBtn' : 'sideBtn'} onClick={() => this.setState({showModel: 'Lexus'})}>Lexus</button></Link>
                   <Link to='/carDetails/17'><button className={this.state.showModel == 'KIA' ? 'activeBtn' : 'sideBtn'} onClick={() => this.setState({showModel: 'KIA'})}>KIA</button></Link>
                   <Link to='/carDetails/25'><button className={this.state.showModel == 'Toyota' ? 'activeBtn' : 'sideBtn'} onClick={() => this.setState({showModel: 'Toyota'})}>Toyota</button></Link>
                   <Link to='/carDetails/31'><button className={this.state.showModel == 'BMV' ? 'activeBtn' : 'sideBtn'} onClick={() => this.setState({showModel: 'BMV'})}>BMV</button></Link>
                   <Link to='/carDetails/39'><button className={this.state.showModel == 'Shevrolet' ? 'activeBtn' : 'sideBtn'} onClick={() => this.setState({showModel: 'Shevrolet'})}>Shevrolet</button></Link>
                   <Link to='/carDetails/47'><button className={this.state.showModel == 'oldCars' ? 'activeBtn' : 'sideBtn'} onClick={() => this.setState({showModel: 'oldCars'})}>Aвто с пробегом</button></Link>
                </div>
                <div className='modelsWrapper'>
                <h3 style={{textAlign: 'center', width: '200px'}}>Models</h3>
                
                {carModel.map(car => {
                    return <Link to={'/carDetails/' + car.id} key={car.id} style={{textDecoration: 'none'}} className='carsLink'>{car.model}</Link>
                })
             }
        </div>

            </div>
        </div>
    );
}
}
export default Sidebar;