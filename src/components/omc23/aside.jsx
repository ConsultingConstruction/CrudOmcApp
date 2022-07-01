import React,{useState} from 'react'
import '../../styles/omc23/aside.css'

export default function Aside(props) {

    const [name,setname]= useState('containerAsideOpacity');
    const Show = (e)=>{
        if(name=='containerAsideOpacity'){setname('containerAside')}
        if(name=='containerAside'){setname('containerAsideOpacity')}
        
    }

  return (
    <div className={name}>
        <div className='tag' onClick={(e)=>Show(e)}></div>
      <ul className='navAside'>
        <li className='ListItems'><button type="button" data-bs-toggle="modal" data-bs-target='#modalAdd' className="btn btn-primary" onClick={()=>props.createReciveTable(1)}>Nivel1</button></li>
        <li className='ListItems'><button type="button" data-bs-toggle="modal" data-bs-target='#modalAdd' className="btn btn-primary" onClick={()=>props.createReciveTable(2)}>Nivel2</button></li>
        <li className='ListItems'><button type="button" data-bs-toggle="modal" data-bs-target='#modalAdd' className="btn btn-primary" onClick={()=>props.createReciveTable(3)}>Nivel3</button></li>
        <li className='ListItems'><button type="button" data-bs-toggle="modal" data-bs-target='#modalAdd' className="btn btn-primary" onClick={()=>props.createReciveTable(4)}>Nivel4</button></li>
        <li className='ListItems'><button type="button" data-bs-toggle="modal" data-bs-target='#modalAdd' className="btn btn-primary" onClick={()=>props.createReciveTable(5)}>Nivel5</button></li>
        <li className='ListItems'><button type="button" data-bs-toggle="modal" data-bs-target='#modalAdd' className="btn btn-primary" onClick={()=>props.createReciveTable(6)}>Nivel6</button></li>
      </ul>
    </div>
  )
}


