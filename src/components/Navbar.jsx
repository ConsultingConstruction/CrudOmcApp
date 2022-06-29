import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

  const modoNocturno = (e)=>{
     console.log(e.target.checked)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-black bg-black mb-5' style={{position:'fixed', width:'100%', top:'0%'}}>
        <div className='container-fluid'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/#"><img width={"100px"} src="https://consulting.construction/wp-content/uploads/elementor/thumbs/Consulting-Construction_Soluciones-integrales-para-la-industria-AEC_logoW-po2z60znnm1ypcpd6tsb9443x322o3bd1tlfnfbtb0.png" alt="" /></a>
            <div className=" align-self-end collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'10%'}}>
            <li className="nav-item"><Link to="/"><h5 className='navbar-brand'>Inicio</h5></Link></li>
            <li className="nav-item"><Link to="/userList"><h5 className='navbar-brand'>Usuarios</h5></Link></li>
            <li className="nav-item"><Link to="/tablaReact"><h5 className='navbar-brand'>Tabla React</h5></Link></li>
            </ul>
            <p className="text-white h5 pe-2">Modo Nocturno</p>
            <form className="d-flex form-check form-switch">
            <input className="form-check-input" type="checkbox" onChange={(e)=>modoNocturno(e)} role="switch" id="flexSwitchCheckDefault"/>
            </form>
         </div>
        </div>
    </nav>
  )
}

export default Navbar

