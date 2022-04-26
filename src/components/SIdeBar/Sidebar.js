import React, {useState, useEffect} from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = (props) => {

     let params = null;
     if (props.cars && props.cars.length) {
        let car = props.cars.find(el => el.id === Number(props.params));
        params = car.brand;
     }
     const [id, setId] = useState()
     const [model, showModel] = useState(params)

     useEffect(() => {
           console.log('paramsgg', params, props) 
          showModel(params)
          props.activeBrand(model)
     }, [])

    useEffect(() => {
      setId(props.cars.filter(el => el.brand === model))
      props.activeBrand(model)
    }, [props.cars, model])
    

    return (
        <div className='Sidebar'>
            <div className="sidebarItem">
                <div className='sidebarBtn'>
                   <Link to={'/models/' + props.params}><button className={model === 'Isuzu' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('ISUZU')} >Isuzu</button> </Link>
                   <Link to={'/models/' + props.params}><button className={model === 'LEXUS' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('LEXUS')}>Lexus</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'KIA' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('KIA')}>KIA</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'TOYOTA' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('TOYOTA')}>Toyota</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'BMW' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('BMW')}>BMW</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'CHEVROLET' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('CHEVROLET')}>Chevrolet</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'JAC' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('JAC')}>Jac</button></Link>
                   <Link to={'/models/' + props.params}><button className={model === 'ГАЗ' ? 'activeBtn' : 'sideBtn'} onClick={() => showModel('ГАЗ')}>Газ</button></Link>
                </div>
                <div className='modelsWrapper'>
                    <h3 style={{textAlign: 'center', width: '200px'}}>Models</h3>
            
                {
                    props.cars ? props.cars.filter(car => car.brand === model).map(it => 
                    <Link to={'/models/' + it.id} key={it.id} style={{textDecoration: 'none'}} className='carsLink'>
                        {it.title}
                    </Link>
                    )
                    : null
                }
                </div>
            </div>
        </div>
        
    );
}

export default Sidebar;