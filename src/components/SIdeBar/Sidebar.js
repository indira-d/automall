import React, {useState, useEffect} from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = (props) => {

    const [model, showModel] =  useState('LEXUS')
    const [id, setId] = useState()

    useEffect(() => {
      setId(props.cars.filter(el => el.brand === model))
      props.activeBrand(model)
    }, [props.cars, model])

    // console.log(model, id)
    // console.log('params', props.params)
    // console.log('props', props.cars)
        

    return (
        <div className='Sidebar'>
            <div className="sidebarItem">
                <div className='sidebarBtn'>
                   <Link to={'/models/' + props.params} ><button className={model === 'Isuzu' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('Isuzu')} >Isuzu</button> </Link>
                   <Link to={'/models/' + props.params}><button className={model === 'LEXUS' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('LEXUS')}>Lexus</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'KIA' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('KIA')}>KIA</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'TOYOTA' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('TOYOTA')}>Toyota</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'BMV' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('BMW')}>BMV</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'Chevrolet' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('CHEVROLET')}>Chevrolet</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'Jac' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('JAC')}>Jac</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'Газ' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('Газ')}>Gas</button></Link>
                </div>
                <div className='modelsWrapper'>
                    <h3 style={{textAlign: 'center', width: '200px'}}>Models</h3>
            
                {
                    props.cars.filter(car => car.brand === model).map(it => 
                    <Link to={'/models/' + it.id} key={it.id} style={{textDecoration: 'none'}} className='carsLink'>
                        {it.title}
                    </Link>
                    )
                }
                </div>
            </div>
        </div>
        
    );
}

export default Sidebar;