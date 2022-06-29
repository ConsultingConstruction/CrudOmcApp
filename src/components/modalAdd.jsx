import React from 'react'
import { useOmc23 } from '../context/omc23/ContextOmc23'


function ModalAdd({mostrar}) {

  const {Nivelomc23}= useOmc23()

  return (
    <div className="modal fade" id={mostrar} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
<form className="row g-3" id='AddForm'>
  <div className="col-md-6">
    <label  className="form-label">Codigo</label>
    <input type="text" placeholder='codigo..' defaultValue={Nivelomc23} className="form-control" name='codigo'/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Año de Registro</label>
    <input type="date" className="form-control" name='añoregistro'/>
  </div>
  <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
  <label>Descripción en Inglés</label>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
  <label>Descripción en Español</label>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
  <label>Definición en Inglés</label>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
  <label>Definición en Inglés</label>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
  <label>Definición en Español</label>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
  <label>Ejemplo en Inglés</label>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" ></textarea>
  <label>Ejemplo en Español</label>
</div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" form='AddForm'>Agregar</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default ModalAdd

