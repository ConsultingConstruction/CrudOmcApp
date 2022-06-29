import React from 'react'


export default function ButtonAdd({status,mostrar}) {
  return (
    <div className='mt-4 text-end'><button data-bs-toggle="modal" data-bs-target={`#id${mostrar}`} type="button" className="btn btn-primary btn-lg" onClick={(e)=>status(e)}>Add</button></div>
  )
}


