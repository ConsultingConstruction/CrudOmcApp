import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { useOmc23 } from "../../context/omc23/ContextOmc23";
import '../../styles/omc23/styles.css'


export default function ModalEdid(props) {
  
  const{response} = useOmc23()
  const {register,formState:{errors} ,handleSubmit,setValue} = useForm({
    defaultValues:props.current
  });
    
  setValue('Codigo',props.current.Codigo)
  setValue('descriEng',props.current.descriEng)
  setValue('descriSpa',props.current.descriSpa)
  setValue('definicionEng',props.current.definicionEng)
  setValue('definicionSpa',props.current.definicionSpa)
  setValue('ejemploEng',props.current.ejemploEng)
  setValue('ejemploSpa',props.current.ejemploSpa)
  setValue('anioReg',props.current.anioReg)
  if(props.numTabla > 1){setValue('regFinal',props.current.regFinal)}

  const onSubmit = (data,e)=>{

          if(e.target.regFinal){console.log(e.target.regFinal.checked)}
          props.updateRegistro(data)
      }
    

  return (
  
  <div className="modal fade" id='modalEditar' tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-dark">
        <h5 className="modal-title text-light" id="exampleModalLabel">Formulario Editar</h5>
        <button type="button" className="text-light bg-dark" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div className="modal-body">
        

<form className="row g-3" onSubmit={handleSubmit(onSubmit)}>

<div className="col-md-6">
    <label  className="form-label" >Codigo</label>
    <input type="text" placeholder='codigo..' {...register("Codigo",{required:true})} className="form-control"/>
    {errors.name && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
  </div>
  <div className="col-md-6">
    <label  className="form-label">Año de Registro</label>
    <input type="number" className="form-control" {...register("anioReg",{required:true})}/>
    {errors.name && <span className="text-danger text-small d-block mb-2">Este campo es requerido</span>}
  </div>
  <div className="form-floating">
  <textarea className="edid-form" placeholder="Leave a comment here" {...register("definicionEng",{required:true})}></textarea>
</div>
<div className="form-floating">
  <textarea className="edid-form" placeholder="Leave a comment here" {...register("definicionSpa",{required:true})}></textarea>
</div>
<div className="form-floating">
  <textarea className="edid-form" placeholder="Leave a comment here" {...register("descriEng",{required:true})}></textarea>
</div>
<div className="form-floating">
  <textarea className="edid-form" placeholder="Leave a comment here" {...register("descriSpa",{required:true})}></textarea>
</div>
<div className="form-floating">
  <textarea className="edid-form" placeholder="Leave a comment here" {...register("ejemploEng",{required:true})}></textarea>
</div>
<div className="form-floating">
  <textarea className="edid-form" placeholder="Leave a comment here" {...register("ejemploSpa",{required:true})}></textarea>
</div>
{ props.numeroTabla>=2?
    (<div className="form-floating">
    <input className="form-check-input" type="checkbox" id="flexCheckIndeterminate" {...register("regFinal")}/>
    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
    Registro Final
  </label>
  </div>):null
 }
<input type='submit' c value='modificar' className='btn btn-primary' data-bs-dismiss="modal" aria-label="Close"></input>

</form>

      </div>
      {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" form='AddForm' >Agregar</button>
      </div> */}
    </div>
  </div>
</div>
      )
}

