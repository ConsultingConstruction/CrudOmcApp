import { Button } from 'bootstrap';
import React, { useMemo,useState } from 'react'
import { useTable,usePagination,useGlobalFilter,useSortBy } from 'react-table'
import GlobalFilter from '../GlobalFilter';
import ButtonAdd from '../ButtonAdd';
import { useOmc23 } from '../../context/omc23/ContextOmc23';

export default function Omcn1(props){

  const dataOmc1 = props.Omcn1
  const{NivelForm} = useOmc23()
  
  

const data = useMemo(()=>[...props.Omcn1],[props.Omcn1])

   const columns = React.useMemo(
     () => [
       {
         Header: 'No',
         accessor: 'idOmc23N1', // accessor is the "key" in the data
       },
       {
         Header: 'Código',
         accessor: 'Codigo',
         className:'Codigo',
         style: {
          width:'100px',
        },
       },
       {
        Header: 'Descripción en Ingles',
        accessor: 'descriEng',
      },
      {
        Header: 'Descripción en Español',
        accessor: 'descriSpa',
      },
      {
        Header: 'Definicion en Inglés',
        accessor: 'definicionEng',
      },
      {
        Header: 'Definicion en Español',
        accessor: 'definicionSpa',
      },
      {
        Header: 'Ejemplo en Inglés',
        accessor: 'ejemploEng',
      },
      {
        Header: 'Ejemplo en Español',
        accessor: 'ejemploSpa',
      },
      {
        Header: 'Año de Registro',
        accessor: 'anioReg',
      },
     ],
     []
   )
    
  //  const dataColumns = useMemo(()=> props.Omcn1[0] ? Object.keys(props.Omcn1[0]).map((key)=>{
  //   return {Header:key, accesor:key};
  //  }):[null],[props.Omcn1]);
  //   console.log(dataColumns)



     const tableHooks = (hooks)=>{
      hooks.visibleColumns.push((columns)=>[
        ...columns,{
          id:'Edit',
          Header:'Editar',
          Cell:({row})=>(
               <button type='button' className='btn btn-success' data-bs-toggle="modal" data-bs-target='#modalEditar' onClick={()=>props.edidrow(1,row.values)}> Edit</button>
                
            
          )
        }
      ])
     }
     
    

     
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    prepareRow,
    state:{pageIndex,pageSize},
    state,
    setGlobalFilter,
  } = useTable({ columns, data},useGlobalFilter,useSortBy,
       usePagination,tableHooks,)

       const{globalFilter} = state
       
     return(
        <>

        <div className='row justify-content-end'>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        </div>
        <table {...getTableProps()}  className='table table-hover mt-1 shadow-lg '>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()} >
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps(column.getSortByToggleProps())}
                
               >
                 {column.render('Header')}
                 {column.isSorted ? (column.isSortedDesc ? <i className="fa-solid fa-angle-down"></i>:<i className="fa-solid fa-angle-up"></i>):''}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {page.map((row) => {
           prepareRow(row)
     
           return (
             <tr style={{fontSize:'12px', fontFamily:'arial'}} {...row.getRowProps()} onClick={()=>props.selectOpp(row.original.idOmc23N1) }>
    
               {row.cells.map((cell,idx) => {
                 return (
                  <td{...cell.getCellProps([{
                    className: cell.column.className,
                    style: cell.column.style,
                  },])}> 
                     {cell.render('Cell')}
                  </td>)
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     <div style={{textAlign:'center'}}>
     <button type="button" className="btn btn-light" onClick={()=>previousPage()}>Previous</button><button type="button"  className="btn btn-light" onClick={()=>nextPage()}>Next</button>
     <br/>
     <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
    </div>
    </>
     );

}