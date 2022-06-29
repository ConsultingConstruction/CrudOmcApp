import React, { Fragment,useEffect,useState,useMemo } from 'react'
import { useTable,usePagination,useGlobalFilter,useSortBy } from 'react-table'
import GlobalFilter from '../GlobalFilter';
import { useOmc23 } from '../../context/omc23/ContextOmc23';
import ButtonAdd from '../ButtonAdd';

export default function Omcn3(props){
  
  const{NivelForm,UpdateOmc23} = useOmc23()


  const data = useMemo(()=>props.dataomcn3,[props.dataomcn3])


   const columns = React.useMemo(
     () => [
      {
        Header: 'ID',
        accessor: 'idOmc23N3', // accessor is the "key" in the data
      },
      {
        Header: 'Codigo',
        accessor: 'Codigo',
        className:'Codigo',
         style: {
          width:'100px',
        },
      },
      {
       Header: 'Descripcion en Ingles',
       accessor: 'descriEng',
     },
     {
       Header: 'Descripcion en Español',
       accessor: 'descriSpa',
     },
     {
       Header: 'Definicion en Ingles',
       accessor: 'definicionEng',
     },
     {
       Header: 'Definicion en Español',
       accessor: 'definicionSpa',
     },
     {
       Header: 'Ejemplo en Ingles',
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
     {
      Header: 'Registro final',
      accessor: 'regFinal',
    },
     ],
     []
   )

   const tableHooks = (hooks)=>{
    hooks.visibleColumns.push((columns)=>[
      ...columns,{
        id:'Edit',
        Header:'Editar',
        Cell:({row})=>(
          <button type='button' className='btn btn-success' data-bs-toggle="modal" data-bs-target='#modalEditar' onClick={()=>props.edidrow(3,row.values)}> Edit</button>
              
          
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
        <Fragment>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()} className='table  table-hover mt-1 shadow-lg'>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
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
         {page.map(row => {
           prepareRow(row)
           return (
            <tr style={{fontSize:'12px', fontFamily:'arial'}} {...row.getRowProps()} onClick={()=>props.selectOpp3(row.original.idOmc23N3) }>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps([{
                      className: cell.column.className,
                      style: cell.column.style,
                    },])}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     <div style={{textAlign:'center'}}>
        <button type="button" className="btn btn-light" onClick={()=>previousPage()}>Previous</button><button type="button" className="btn btn-light" onClick={()=>nextPage()}>Next</button>
        <br/>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
     </div>
     </Fragment>
     );

}