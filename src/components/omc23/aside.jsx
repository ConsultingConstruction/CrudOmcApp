import React,{useState} from 'react'
import '../../styles/omc23/aside.css'

export default function Aside() {

    const [name,setname]= useState('containerAsideOpacity');
    const Show = (e)=>{
        if(name=='containerAsideOpacity'){setname('containerAside')}
        if(name=='containerAside'){setname('containerAsideOpacity')}
        
    }

  return (
    <div className={name}>
        <div className='tag' onClick={(e)=>Show(e)}></div>
      <ul className='navAside'>

        <li className='ListItems'><button type="button" className="btn btn-primary">Nivel1</button></li>
        <li className='ListItems'><button type="button" className="btn btn-primary">Nivel2</button></li>
        <li className='ListItems'><button type="button" className="btn btn-primary">Nivel3</button></li>
        <li className='ListItems'><button type="button" className="btn btn-primary">Nivel4</button></li>
        <li className='ListItems'><button type="button" className="btn btn-primary">Nivel5</button></li>
        <li className='ListItems'><button type="button" className="btn btn-primary">Nivel6</button></li>

      </ul>
    </div>
  )
}


