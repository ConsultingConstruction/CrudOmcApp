import React from 'react'

function GlobalFilter({filter,setFilter}) {

  return (

        <div className='mt-4 col-12'><input className="form-control w-25 mr-sm-2" placeholder='Buscar...' type="search" aria-label="Search" value={filter||''} onChange={e=>setFilter(e.target.value)} /></div>

  )
}

export default GlobalFilter
